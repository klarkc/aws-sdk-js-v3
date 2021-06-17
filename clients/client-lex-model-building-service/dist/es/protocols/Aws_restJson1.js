import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent, } from "@aws-sdk/smithy-client";
export var serializeAws_restJson1CreateBotVersionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/bots/{name}/versions";
                if (input.name !== undefined) {
                    labelValue = input.name;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: name.");
                    }
                    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: name.");
                }
                body = JSON.stringify(__assign({}, (input.checksum !== undefined && input.checksum !== null && { checksum: input.checksum })));
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
export var serializeAws_restJson1CreateIntentVersionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/intents/{name}/versions";
                if (input.name !== undefined) {
                    labelValue = input.name;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: name.");
                    }
                    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: name.");
                }
                body = JSON.stringify(__assign({}, (input.checksum !== undefined && input.checksum !== null && { checksum: input.checksum })));
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
export var serializeAws_restJson1CreateSlotTypeVersionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/slottypes/{name}/versions";
                if (input.name !== undefined) {
                    labelValue = input.name;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: name.");
                    }
                    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: name.");
                }
                body = JSON.stringify(__assign({}, (input.checksum !== undefined && input.checksum !== null && { checksum: input.checksum })));
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
export var serializeAws_restJson1DeleteBotCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/bots/{name}";
                if (input.name !== undefined) {
                    labelValue = input.name;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: name.");
                    }
                    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: name.");
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
export var serializeAws_restJson1DeleteBotAliasCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/bots/{botName}/aliases/{name}";
                if (input.name !== undefined) {
                    labelValue = input.name;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: name.");
                    }
                    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: name.");
                }
                if (input.botName !== undefined) {
                    labelValue = input.botName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botName.");
                    }
                    resolvedPath = resolvedPath.replace("{botName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botName.");
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
export var serializeAws_restJson1DeleteBotChannelAssociationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/bots/{botName}/aliases/{botAlias}/channels/{name}";
                if (input.name !== undefined) {
                    labelValue = input.name;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: name.");
                    }
                    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: name.");
                }
                if (input.botName !== undefined) {
                    labelValue = input.botName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botName.");
                    }
                    resolvedPath = resolvedPath.replace("{botName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botName.");
                }
                if (input.botAlias !== undefined) {
                    labelValue = input.botAlias;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botAlias.");
                    }
                    resolvedPath = resolvedPath.replace("{botAlias}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botAlias.");
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
export var serializeAws_restJson1DeleteBotVersionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/bots/{name}/versions/{version}";
                if (input.name !== undefined) {
                    labelValue = input.name;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: name.");
                    }
                    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: name.");
                }
                if (input.version !== undefined) {
                    labelValue = input.version;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: version.");
                    }
                    resolvedPath = resolvedPath.replace("{version}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: version.");
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
export var serializeAws_restJson1DeleteIntentCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/intents/{name}";
                if (input.name !== undefined) {
                    labelValue = input.name;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: name.");
                    }
                    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: name.");
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
export var serializeAws_restJson1DeleteIntentVersionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/intents/{name}/versions/{version}";
                if (input.name !== undefined) {
                    labelValue = input.name;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: name.");
                    }
                    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: name.");
                }
                if (input.version !== undefined) {
                    labelValue = input.version;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: version.");
                    }
                    resolvedPath = resolvedPath.replace("{version}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: version.");
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
export var serializeAws_restJson1DeleteSlotTypeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/slottypes/{name}";
                if (input.name !== undefined) {
                    labelValue = input.name;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: name.");
                    }
                    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: name.");
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
export var serializeAws_restJson1DeleteSlotTypeVersionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/slottypes/{name}/version/{version}";
                if (input.name !== undefined) {
                    labelValue = input.name;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: name.");
                    }
                    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: name.");
                }
                if (input.version !== undefined) {
                    labelValue = input.version;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: version.");
                    }
                    resolvedPath = resolvedPath.replace("{version}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: version.");
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
export var serializeAws_restJson1DeleteUtterancesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/bots/{botName}/utterances/{userId}";
                if (input.botName !== undefined) {
                    labelValue = input.botName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botName.");
                    }
                    resolvedPath = resolvedPath.replace("{botName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botName.");
                }
                if (input.userId !== undefined) {
                    labelValue = input.userId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: userId.");
                    }
                    resolvedPath = resolvedPath.replace("{userId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: userId.");
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
export var serializeAws_restJson1GetBotCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/bots/{name}/versions/{versionOrAlias}";
                if (input.name !== undefined) {
                    labelValue = input.name;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: name.");
                    }
                    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: name.");
                }
                if (input.versionOrAlias !== undefined) {
                    labelValue = input.versionOrAlias;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: versionOrAlias.");
                    }
                    resolvedPath = resolvedPath.replace("{versionOrAlias}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: versionOrAlias.");
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
export var serializeAws_restJson1GetBotAliasCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/bots/{botName}/aliases/{name}";
                if (input.name !== undefined) {
                    labelValue = input.name;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: name.");
                    }
                    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: name.");
                }
                if (input.botName !== undefined) {
                    labelValue = input.botName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botName.");
                    }
                    resolvedPath = resolvedPath.replace("{botName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botName.");
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
export var serializeAws_restJson1GetBotAliasesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/bots/{botName}/aliases";
                if (input.botName !== undefined) {
                    labelValue = input.botName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botName.");
                    }
                    resolvedPath = resolvedPath.replace("{botName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botName.");
                }
                query = __assign(__assign(__assign({}, (input.nextToken !== undefined && { nextToken: input.nextToken })), (input.maxResults !== undefined && { maxResults: input.maxResults.toString() })), (input.nameContains !== undefined && { nameContains: input.nameContains }));
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
export var serializeAws_restJson1GetBotChannelAssociationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/bots/{botName}/aliases/{botAlias}/channels/{name}";
                if (input.name !== undefined) {
                    labelValue = input.name;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: name.");
                    }
                    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: name.");
                }
                if (input.botName !== undefined) {
                    labelValue = input.botName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botName.");
                    }
                    resolvedPath = resolvedPath.replace("{botName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botName.");
                }
                if (input.botAlias !== undefined) {
                    labelValue = input.botAlias;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botAlias.");
                    }
                    resolvedPath = resolvedPath.replace("{botAlias}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botAlias.");
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
export var serializeAws_restJson1GetBotChannelAssociationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/bots/{botName}/aliases/{botAlias}/channels";
                if (input.botName !== undefined) {
                    labelValue = input.botName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botName.");
                    }
                    resolvedPath = resolvedPath.replace("{botName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botName.");
                }
                if (input.botAlias !== undefined) {
                    labelValue = input.botAlias;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botAlias.");
                    }
                    resolvedPath = resolvedPath.replace("{botAlias}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botAlias.");
                }
                query = __assign(__assign(__assign({}, (input.nextToken !== undefined && { nextToken: input.nextToken })), (input.maxResults !== undefined && { maxResults: input.maxResults.toString() })), (input.nameContains !== undefined && { nameContains: input.nameContains }));
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
export var serializeAws_restJson1GetBotsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/bots";
                query = __assign(__assign(__assign({}, (input.nextToken !== undefined && { nextToken: input.nextToken })), (input.maxResults !== undefined && { maxResults: input.maxResults.toString() })), (input.nameContains !== undefined && { nameContains: input.nameContains }));
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
export var serializeAws_restJson1GetBotVersionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/bots/{name}/versions";
                if (input.name !== undefined) {
                    labelValue = input.name;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: name.");
                    }
                    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: name.");
                }
                query = __assign(__assign({}, (input.nextToken !== undefined && { nextToken: input.nextToken })), (input.maxResults !== undefined && { maxResults: input.maxResults.toString() }));
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
export var serializeAws_restJson1GetBuiltinIntentCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/builtins/intents/{signature}";
                if (input.signature !== undefined) {
                    labelValue = input.signature;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: signature.");
                    }
                    resolvedPath = resolvedPath.replace("{signature}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: signature.");
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
export var serializeAws_restJson1GetBuiltinIntentsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/builtins/intents";
                query = __assign(__assign(__assign(__assign({}, (input.locale !== undefined && { locale: input.locale })), (input.signatureContains !== undefined && { signatureContains: input.signatureContains })), (input.nextToken !== undefined && { nextToken: input.nextToken })), (input.maxResults !== undefined && { maxResults: input.maxResults.toString() }));
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
export var serializeAws_restJson1GetBuiltinSlotTypesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/builtins/slottypes";
                query = __assign(__assign(__assign(__assign({}, (input.locale !== undefined && { locale: input.locale })), (input.signatureContains !== undefined && { signatureContains: input.signatureContains })), (input.nextToken !== undefined && { nextToken: input.nextToken })), (input.maxResults !== undefined && { maxResults: input.maxResults.toString() }));
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
export var serializeAws_restJson1GetExportCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/exports";
                query = __assign(__assign(__assign(__assign({}, (input.name !== undefined && { name: input.name })), (input.version !== undefined && { version: input.version })), (input.resourceType !== undefined && { resourceType: input.resourceType })), (input.exportType !== undefined && { exportType: input.exportType }));
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
export var serializeAws_restJson1GetImportCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/imports/{importId}";
                if (input.importId !== undefined) {
                    labelValue = input.importId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: importId.");
                    }
                    resolvedPath = resolvedPath.replace("{importId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: importId.");
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
export var serializeAws_restJson1GetIntentCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/intents/{name}/versions/{version}";
                if (input.name !== undefined) {
                    labelValue = input.name;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: name.");
                    }
                    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: name.");
                }
                if (input.version !== undefined) {
                    labelValue = input.version;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: version.");
                    }
                    resolvedPath = resolvedPath.replace("{version}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: version.");
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
export var serializeAws_restJson1GetIntentsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/intents";
                query = __assign(__assign(__assign({}, (input.nextToken !== undefined && { nextToken: input.nextToken })), (input.maxResults !== undefined && { maxResults: input.maxResults.toString() })), (input.nameContains !== undefined && { nameContains: input.nameContains }));
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
export var serializeAws_restJson1GetIntentVersionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/intents/{name}/versions";
                if (input.name !== undefined) {
                    labelValue = input.name;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: name.");
                    }
                    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: name.");
                }
                query = __assign(__assign({}, (input.nextToken !== undefined && { nextToken: input.nextToken })), (input.maxResults !== undefined && { maxResults: input.maxResults.toString() }));
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
export var serializeAws_restJson1GetSlotTypeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/slottypes/{name}/versions/{version}";
                if (input.name !== undefined) {
                    labelValue = input.name;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: name.");
                    }
                    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: name.");
                }
                if (input.version !== undefined) {
                    labelValue = input.version;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: version.");
                    }
                    resolvedPath = resolvedPath.replace("{version}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: version.");
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
export var serializeAws_restJson1GetSlotTypesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/slottypes";
                query = __assign(__assign(__assign({}, (input.nextToken !== undefined && { nextToken: input.nextToken })), (input.maxResults !== undefined && { maxResults: input.maxResults.toString() })), (input.nameContains !== undefined && { nameContains: input.nameContains }));
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
export var serializeAws_restJson1GetSlotTypeVersionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/slottypes/{name}/versions";
                if (input.name !== undefined) {
                    labelValue = input.name;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: name.");
                    }
                    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: name.");
                }
                query = __assign(__assign({}, (input.nextToken !== undefined && { nextToken: input.nextToken })), (input.maxResults !== undefined && { maxResults: input.maxResults.toString() }));
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
export var serializeAws_restJson1GetUtterancesViewCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/bots/{botName}/utterances";
                if (input.botName !== undefined) {
                    labelValue = input.botName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botName.");
                    }
                    resolvedPath = resolvedPath.replace("{botName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botName.");
                }
                query = __assign(__assign({ view: "aggregation" }, (input.botVersions !== undefined && { bot_versions: (input.botVersions || []).map(function (_entry) { return _entry; }) })), (input.statusType !== undefined && { status_type: input.statusType }));
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
export var serializeAws_restJson1PutBotCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/bots/{name}/versions/$LATEST";
                if (input.name !== undefined) {
                    labelValue = input.name;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: name.");
                    }
                    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: name.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.abortStatement !== undefined &&
                    input.abortStatement !== null && {
                    abortStatement: serializeAws_restJson1Statement(input.abortStatement, context),
                })), (input.checksum !== undefined && input.checksum !== null && { checksum: input.checksum })), (input.childDirected !== undefined && input.childDirected !== null && { childDirected: input.childDirected })), (input.clarificationPrompt !== undefined &&
                    input.clarificationPrompt !== null && {
                    clarificationPrompt: serializeAws_restJson1Prompt(input.clarificationPrompt, context),
                })), (input.createVersion !== undefined && input.createVersion !== null && { createVersion: input.createVersion })), (input.description !== undefined && input.description !== null && { description: input.description })), (input.detectSentiment !== undefined &&
                    input.detectSentiment !== null && { detectSentiment: input.detectSentiment })), (input.enableModelImprovements !== undefined &&
                    input.enableModelImprovements !== null && { enableModelImprovements: input.enableModelImprovements })), (input.idleSessionTTLInSeconds !== undefined &&
                    input.idleSessionTTLInSeconds !== null && { idleSessionTTLInSeconds: input.idleSessionTTLInSeconds })), (input.intents !== undefined &&
                    input.intents !== null && { intents: serializeAws_restJson1IntentList(input.intents, context) })), (input.locale !== undefined && input.locale !== null && { locale: input.locale })), (input.nluIntentConfidenceThreshold !== undefined &&
                    input.nluIntentConfidenceThreshold !== null && {
                    nluIntentConfidenceThreshold: input.nluIntentConfidenceThreshold,
                })), (input.processBehavior !== undefined &&
                    input.processBehavior !== null && { processBehavior: input.processBehavior })), (input.tags !== undefined &&
                    input.tags !== null && { tags: serializeAws_restJson1TagList(input.tags, context) })), (input.voiceId !== undefined && input.voiceId !== null && { voiceId: input.voiceId })));
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
export var serializeAws_restJson1PutBotAliasCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/bots/{botName}/aliases/{name}";
                if (input.name !== undefined) {
                    labelValue = input.name;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: name.");
                    }
                    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: name.");
                }
                if (input.botName !== undefined) {
                    labelValue = input.botName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botName.");
                    }
                    resolvedPath = resolvedPath.replace("{botName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botName.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign({}, (input.botVersion !== undefined && input.botVersion !== null && { botVersion: input.botVersion })), (input.checksum !== undefined && input.checksum !== null && { checksum: input.checksum })), (input.conversationLogs !== undefined &&
                    input.conversationLogs !== null && {
                    conversationLogs: serializeAws_restJson1ConversationLogsRequest(input.conversationLogs, context),
                })), (input.description !== undefined && input.description !== null && { description: input.description })), (input.tags !== undefined &&
                    input.tags !== null && { tags: serializeAws_restJson1TagList(input.tags, context) })));
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
export var serializeAws_restJson1PutIntentCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/intents/{name}/versions/$LATEST";
                if (input.name !== undefined) {
                    labelValue = input.name;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: name.");
                    }
                    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: name.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.checksum !== undefined && input.checksum !== null && { checksum: input.checksum })), (input.conclusionStatement !== undefined &&
                    input.conclusionStatement !== null && {
                    conclusionStatement: serializeAws_restJson1Statement(input.conclusionStatement, context),
                })), (input.confirmationPrompt !== undefined &&
                    input.confirmationPrompt !== null && {
                    confirmationPrompt: serializeAws_restJson1Prompt(input.confirmationPrompt, context),
                })), (input.createVersion !== undefined && input.createVersion !== null && { createVersion: input.createVersion })), (input.description !== undefined && input.description !== null && { description: input.description })), (input.dialogCodeHook !== undefined &&
                    input.dialogCodeHook !== null && {
                    dialogCodeHook: serializeAws_restJson1CodeHook(input.dialogCodeHook, context),
                })), (input.followUpPrompt !== undefined &&
                    input.followUpPrompt !== null && {
                    followUpPrompt: serializeAws_restJson1FollowUpPrompt(input.followUpPrompt, context),
                })), (input.fulfillmentActivity !== undefined &&
                    input.fulfillmentActivity !== null && {
                    fulfillmentActivity: serializeAws_restJson1FulfillmentActivity(input.fulfillmentActivity, context),
                })), (input.inputContexts !== undefined &&
                    input.inputContexts !== null && {
                    inputContexts: serializeAws_restJson1InputContextList(input.inputContexts, context),
                })), (input.kendraConfiguration !== undefined &&
                    input.kendraConfiguration !== null && {
                    kendraConfiguration: serializeAws_restJson1KendraConfiguration(input.kendraConfiguration, context),
                })), (input.outputContexts !== undefined &&
                    input.outputContexts !== null && {
                    outputContexts: serializeAws_restJson1OutputContextList(input.outputContexts, context),
                })), (input.parentIntentSignature !== undefined &&
                    input.parentIntentSignature !== null && { parentIntentSignature: input.parentIntentSignature })), (input.rejectionStatement !== undefined &&
                    input.rejectionStatement !== null && {
                    rejectionStatement: serializeAws_restJson1Statement(input.rejectionStatement, context),
                })), (input.sampleUtterances !== undefined &&
                    input.sampleUtterances !== null && {
                    sampleUtterances: serializeAws_restJson1IntentUtteranceList(input.sampleUtterances, context),
                })), (input.slots !== undefined &&
                    input.slots !== null && { slots: serializeAws_restJson1SlotList(input.slots, context) })));
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
export var serializeAws_restJson1PutSlotTypeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/slottypes/{name}/versions/$LATEST";
                if (input.name !== undefined) {
                    labelValue = input.name;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: name.");
                    }
                    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: name.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.checksum !== undefined && input.checksum !== null && { checksum: input.checksum })), (input.createVersion !== undefined && input.createVersion !== null && { createVersion: input.createVersion })), (input.description !== undefined && input.description !== null && { description: input.description })), (input.enumerationValues !== undefined &&
                    input.enumerationValues !== null && {
                    enumerationValues: serializeAws_restJson1EnumerationValues(input.enumerationValues, context),
                })), (input.parentSlotTypeSignature !== undefined &&
                    input.parentSlotTypeSignature !== null && { parentSlotTypeSignature: input.parentSlotTypeSignature })), (input.slotTypeConfigurations !== undefined &&
                    input.slotTypeConfigurations !== null && {
                    slotTypeConfigurations: serializeAws_restJson1SlotTypeConfigurations(input.slotTypeConfigurations, context),
                })), (input.valueSelectionStrategy !== undefined &&
                    input.valueSelectionStrategy !== null && { valueSelectionStrategy: input.valueSelectionStrategy })));
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
export var serializeAws_restJson1StartImportCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/imports";
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.mergeStrategy !== undefined && input.mergeStrategy !== null && { mergeStrategy: input.mergeStrategy })), (input.payload !== undefined && input.payload !== null && { payload: context.base64Encoder(input.payload) })), (input.resourceType !== undefined && input.resourceType !== null && { resourceType: input.resourceType })), (input.tags !== undefined &&
                    input.tags !== null && { tags: serializeAws_restJson1TagList(input.tags, context) })));
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
                body = JSON.stringify(__assign({}, (input.tags !== undefined &&
                    input.tags !== null && { tags: serializeAws_restJson1TagList(input.tags, context) })));
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
export var deserializeAws_restJson1CreateBotVersionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateBotVersionCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    abortStatement: undefined,
                    checksum: undefined,
                    childDirected: undefined,
                    clarificationPrompt: undefined,
                    createdDate: undefined,
                    description: undefined,
                    detectSentiment: undefined,
                    enableModelImprovements: undefined,
                    failureReason: undefined,
                    idleSessionTTLInSeconds: undefined,
                    intents: undefined,
                    lastUpdatedDate: undefined,
                    locale: undefined,
                    name: undefined,
                    status: undefined,
                    version: undefined,
                    voiceId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.abortStatement !== undefined && data.abortStatement !== null) {
                    contents.abortStatement = deserializeAws_restJson1Statement(data.abortStatement, context);
                }
                if (data.checksum !== undefined && data.checksum !== null) {
                    contents.checksum = data.checksum;
                }
                if (data.childDirected !== undefined && data.childDirected !== null) {
                    contents.childDirected = data.childDirected;
                }
                if (data.clarificationPrompt !== undefined && data.clarificationPrompt !== null) {
                    contents.clarificationPrompt = deserializeAws_restJson1Prompt(data.clarificationPrompt, context);
                }
                if (data.createdDate !== undefined && data.createdDate !== null) {
                    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.description = data.description;
                }
                if (data.detectSentiment !== undefined && data.detectSentiment !== null) {
                    contents.detectSentiment = data.detectSentiment;
                }
                if (data.enableModelImprovements !== undefined && data.enableModelImprovements !== null) {
                    contents.enableModelImprovements = data.enableModelImprovements;
                }
                if (data.failureReason !== undefined && data.failureReason !== null) {
                    contents.failureReason = data.failureReason;
                }
                if (data.idleSessionTTLInSeconds !== undefined && data.idleSessionTTLInSeconds !== null) {
                    contents.idleSessionTTLInSeconds = data.idleSessionTTLInSeconds;
                }
                if (data.intents !== undefined && data.intents !== null) {
                    contents.intents = deserializeAws_restJson1IntentList(data.intents, context);
                }
                if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
                    contents.lastUpdatedDate = new Date(Math.round(data.lastUpdatedDate * 1000));
                }
                if (data.locale !== undefined && data.locale !== null) {
                    contents.locale = data.locale;
                }
                if (data.name !== undefined && data.name !== null) {
                    contents.name = data.name;
                }
                if (data.status !== undefined && data.status !== null) {
                    contents.status = data.status;
                }
                if (data.version !== undefined && data.version !== null) {
                    contents.version = data.version;
                }
                if (data.voiceId !== undefined && data.voiceId !== null) {
                    contents.voiceId = data.voiceId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateBotVersionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelbuildingservice#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelbuildingservice#ConflictException": return [3 /*break*/, 4];
                    case "InternalFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelbuildingservice#NotFoundException": return [3 /*break*/, 10];
                    case "PreconditionFailedException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexmodelbuildingservice#PreconditionFailedException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateIntentVersionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateIntentVersionCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    checksum: undefined,
                    conclusionStatement: undefined,
                    confirmationPrompt: undefined,
                    createdDate: undefined,
                    description: undefined,
                    dialogCodeHook: undefined,
                    followUpPrompt: undefined,
                    fulfillmentActivity: undefined,
                    inputContexts: undefined,
                    kendraConfiguration: undefined,
                    lastUpdatedDate: undefined,
                    name: undefined,
                    outputContexts: undefined,
                    parentIntentSignature: undefined,
                    rejectionStatement: undefined,
                    sampleUtterances: undefined,
                    slots: undefined,
                    version: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.checksum !== undefined && data.checksum !== null) {
                    contents.checksum = data.checksum;
                }
                if (data.conclusionStatement !== undefined && data.conclusionStatement !== null) {
                    contents.conclusionStatement = deserializeAws_restJson1Statement(data.conclusionStatement, context);
                }
                if (data.confirmationPrompt !== undefined && data.confirmationPrompt !== null) {
                    contents.confirmationPrompt = deserializeAws_restJson1Prompt(data.confirmationPrompt, context);
                }
                if (data.createdDate !== undefined && data.createdDate !== null) {
                    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.description = data.description;
                }
                if (data.dialogCodeHook !== undefined && data.dialogCodeHook !== null) {
                    contents.dialogCodeHook = deserializeAws_restJson1CodeHook(data.dialogCodeHook, context);
                }
                if (data.followUpPrompt !== undefined && data.followUpPrompt !== null) {
                    contents.followUpPrompt = deserializeAws_restJson1FollowUpPrompt(data.followUpPrompt, context);
                }
                if (data.fulfillmentActivity !== undefined && data.fulfillmentActivity !== null) {
                    contents.fulfillmentActivity = deserializeAws_restJson1FulfillmentActivity(data.fulfillmentActivity, context);
                }
                if (data.inputContexts !== undefined && data.inputContexts !== null) {
                    contents.inputContexts = deserializeAws_restJson1InputContextList(data.inputContexts, context);
                }
                if (data.kendraConfiguration !== undefined && data.kendraConfiguration !== null) {
                    contents.kendraConfiguration = deserializeAws_restJson1KendraConfiguration(data.kendraConfiguration, context);
                }
                if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
                    contents.lastUpdatedDate = new Date(Math.round(data.lastUpdatedDate * 1000));
                }
                if (data.name !== undefined && data.name !== null) {
                    contents.name = data.name;
                }
                if (data.outputContexts !== undefined && data.outputContexts !== null) {
                    contents.outputContexts = deserializeAws_restJson1OutputContextList(data.outputContexts, context);
                }
                if (data.parentIntentSignature !== undefined && data.parentIntentSignature !== null) {
                    contents.parentIntentSignature = data.parentIntentSignature;
                }
                if (data.rejectionStatement !== undefined && data.rejectionStatement !== null) {
                    contents.rejectionStatement = deserializeAws_restJson1Statement(data.rejectionStatement, context);
                }
                if (data.sampleUtterances !== undefined && data.sampleUtterances !== null) {
                    contents.sampleUtterances = deserializeAws_restJson1IntentUtteranceList(data.sampleUtterances, context);
                }
                if (data.slots !== undefined && data.slots !== null) {
                    contents.slots = deserializeAws_restJson1SlotList(data.slots, context);
                }
                if (data.version !== undefined && data.version !== null) {
                    contents.version = data.version;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateIntentVersionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelbuildingservice#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelbuildingservice#ConflictException": return [3 /*break*/, 4];
                    case "InternalFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelbuildingservice#NotFoundException": return [3 /*break*/, 10];
                    case "PreconditionFailedException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexmodelbuildingservice#PreconditionFailedException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateSlotTypeVersionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateSlotTypeVersionCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    checksum: undefined,
                    createdDate: undefined,
                    description: undefined,
                    enumerationValues: undefined,
                    lastUpdatedDate: undefined,
                    name: undefined,
                    parentSlotTypeSignature: undefined,
                    slotTypeConfigurations: undefined,
                    valueSelectionStrategy: undefined,
                    version: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.checksum !== undefined && data.checksum !== null) {
                    contents.checksum = data.checksum;
                }
                if (data.createdDate !== undefined && data.createdDate !== null) {
                    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.description = data.description;
                }
                if (data.enumerationValues !== undefined && data.enumerationValues !== null) {
                    contents.enumerationValues = deserializeAws_restJson1EnumerationValues(data.enumerationValues, context);
                }
                if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
                    contents.lastUpdatedDate = new Date(Math.round(data.lastUpdatedDate * 1000));
                }
                if (data.name !== undefined && data.name !== null) {
                    contents.name = data.name;
                }
                if (data.parentSlotTypeSignature !== undefined && data.parentSlotTypeSignature !== null) {
                    contents.parentSlotTypeSignature = data.parentSlotTypeSignature;
                }
                if (data.slotTypeConfigurations !== undefined && data.slotTypeConfigurations !== null) {
                    contents.slotTypeConfigurations = deserializeAws_restJson1SlotTypeConfigurations(data.slotTypeConfigurations, context);
                }
                if (data.valueSelectionStrategy !== undefined && data.valueSelectionStrategy !== null) {
                    contents.valueSelectionStrategy = data.valueSelectionStrategy;
                }
                if (data.version !== undefined && data.version !== null) {
                    contents.version = data.version;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateSlotTypeVersionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelbuildingservice#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelbuildingservice#ConflictException": return [3 /*break*/, 4];
                    case "InternalFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelbuildingservice#NotFoundException": return [3 /*break*/, 10];
                    case "PreconditionFailedException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexmodelbuildingservice#PreconditionFailedException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteBotCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteBotCommandError(output, context)];
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
var deserializeAws_restJson1DeleteBotCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelbuildingservice#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelbuildingservice#ConflictException": return [3 /*break*/, 4];
                    case "InternalFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelbuildingservice#NotFoundException": return [3 /*break*/, 10];
                    case "ResourceInUseException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexmodelbuildingservice#ResourceInUseException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteBotAliasCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteBotAliasCommandError(output, context)];
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
var deserializeAws_restJson1DeleteBotAliasCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelbuildingservice#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelbuildingservice#ConflictException": return [3 /*break*/, 4];
                    case "InternalFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelbuildingservice#NotFoundException": return [3 /*break*/, 10];
                    case "ResourceInUseException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexmodelbuildingservice#ResourceInUseException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteBotChannelAssociationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteBotChannelAssociationCommandError(output, context)];
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
var deserializeAws_restJson1DeleteBotChannelAssociationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelbuildingservice#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelbuildingservice#ConflictException": return [3 /*break*/, 4];
                    case "InternalFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelbuildingservice#NotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteBotVersionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteBotVersionCommandError(output, context)];
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
var deserializeAws_restJson1DeleteBotVersionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelbuildingservice#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelbuildingservice#ConflictException": return [3 /*break*/, 4];
                    case "InternalFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelbuildingservice#NotFoundException": return [3 /*break*/, 10];
                    case "ResourceInUseException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexmodelbuildingservice#ResourceInUseException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteIntentCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteIntentCommandError(output, context)];
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
var deserializeAws_restJson1DeleteIntentCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelbuildingservice#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelbuildingservice#ConflictException": return [3 /*break*/, 4];
                    case "InternalFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelbuildingservice#NotFoundException": return [3 /*break*/, 10];
                    case "ResourceInUseException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexmodelbuildingservice#ResourceInUseException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteIntentVersionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteIntentVersionCommandError(output, context)];
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
var deserializeAws_restJson1DeleteIntentVersionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelbuildingservice#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelbuildingservice#ConflictException": return [3 /*break*/, 4];
                    case "InternalFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelbuildingservice#NotFoundException": return [3 /*break*/, 10];
                    case "ResourceInUseException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexmodelbuildingservice#ResourceInUseException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteSlotTypeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteSlotTypeCommandError(output, context)];
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
var deserializeAws_restJson1DeleteSlotTypeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelbuildingservice#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelbuildingservice#ConflictException": return [3 /*break*/, 4];
                    case "InternalFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelbuildingservice#NotFoundException": return [3 /*break*/, 10];
                    case "ResourceInUseException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexmodelbuildingservice#ResourceInUseException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteSlotTypeVersionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteSlotTypeVersionCommandError(output, context)];
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
var deserializeAws_restJson1DeleteSlotTypeVersionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelbuildingservice#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelbuildingservice#ConflictException": return [3 /*break*/, 4];
                    case "InternalFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelbuildingservice#NotFoundException": return [3 /*break*/, 10];
                    case "ResourceInUseException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexmodelbuildingservice#ResourceInUseException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteUtterancesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteUtterancesCommandError(output, context)];
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
var deserializeAws_restJson1DeleteUtterancesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelbuildingservice#BadRequestException": return [3 /*break*/, 2];
                    case "InternalFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelbuildingservice#NotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetBotCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetBotCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    abortStatement: undefined,
                    checksum: undefined,
                    childDirected: undefined,
                    clarificationPrompt: undefined,
                    createdDate: undefined,
                    description: undefined,
                    detectSentiment: undefined,
                    enableModelImprovements: undefined,
                    failureReason: undefined,
                    idleSessionTTLInSeconds: undefined,
                    intents: undefined,
                    lastUpdatedDate: undefined,
                    locale: undefined,
                    name: undefined,
                    nluIntentConfidenceThreshold: undefined,
                    status: undefined,
                    version: undefined,
                    voiceId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.abortStatement !== undefined && data.abortStatement !== null) {
                    contents.abortStatement = deserializeAws_restJson1Statement(data.abortStatement, context);
                }
                if (data.checksum !== undefined && data.checksum !== null) {
                    contents.checksum = data.checksum;
                }
                if (data.childDirected !== undefined && data.childDirected !== null) {
                    contents.childDirected = data.childDirected;
                }
                if (data.clarificationPrompt !== undefined && data.clarificationPrompt !== null) {
                    contents.clarificationPrompt = deserializeAws_restJson1Prompt(data.clarificationPrompt, context);
                }
                if (data.createdDate !== undefined && data.createdDate !== null) {
                    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.description = data.description;
                }
                if (data.detectSentiment !== undefined && data.detectSentiment !== null) {
                    contents.detectSentiment = data.detectSentiment;
                }
                if (data.enableModelImprovements !== undefined && data.enableModelImprovements !== null) {
                    contents.enableModelImprovements = data.enableModelImprovements;
                }
                if (data.failureReason !== undefined && data.failureReason !== null) {
                    contents.failureReason = data.failureReason;
                }
                if (data.idleSessionTTLInSeconds !== undefined && data.idleSessionTTLInSeconds !== null) {
                    contents.idleSessionTTLInSeconds = data.idleSessionTTLInSeconds;
                }
                if (data.intents !== undefined && data.intents !== null) {
                    contents.intents = deserializeAws_restJson1IntentList(data.intents, context);
                }
                if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
                    contents.lastUpdatedDate = new Date(Math.round(data.lastUpdatedDate * 1000));
                }
                if (data.locale !== undefined && data.locale !== null) {
                    contents.locale = data.locale;
                }
                if (data.name !== undefined && data.name !== null) {
                    contents.name = data.name;
                }
                if (data.nluIntentConfidenceThreshold !== undefined && data.nluIntentConfidenceThreshold !== null) {
                    contents.nluIntentConfidenceThreshold = data.nluIntentConfidenceThreshold;
                }
                if (data.status !== undefined && data.status !== null) {
                    contents.status = data.status;
                }
                if (data.version !== undefined && data.version !== null) {
                    contents.version = data.version;
                }
                if (data.voiceId !== undefined && data.voiceId !== null) {
                    contents.voiceId = data.voiceId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetBotCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelbuildingservice#BadRequestException": return [3 /*break*/, 2];
                    case "InternalFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelbuildingservice#NotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetBotAliasCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetBotAliasCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    botName: undefined,
                    botVersion: undefined,
                    checksum: undefined,
                    conversationLogs: undefined,
                    createdDate: undefined,
                    description: undefined,
                    lastUpdatedDate: undefined,
                    name: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.botName !== undefined && data.botName !== null) {
                    contents.botName = data.botName;
                }
                if (data.botVersion !== undefined && data.botVersion !== null) {
                    contents.botVersion = data.botVersion;
                }
                if (data.checksum !== undefined && data.checksum !== null) {
                    contents.checksum = data.checksum;
                }
                if (data.conversationLogs !== undefined && data.conversationLogs !== null) {
                    contents.conversationLogs = deserializeAws_restJson1ConversationLogsResponse(data.conversationLogs, context);
                }
                if (data.createdDate !== undefined && data.createdDate !== null) {
                    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.description = data.description;
                }
                if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
                    contents.lastUpdatedDate = new Date(Math.round(data.lastUpdatedDate * 1000));
                }
                if (data.name !== undefined && data.name !== null) {
                    contents.name = data.name;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetBotAliasCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelbuildingservice#BadRequestException": return [3 /*break*/, 2];
                    case "InternalFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelbuildingservice#NotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetBotAliasesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetBotAliasesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    BotAliases: undefined,
                    nextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.BotAliases !== undefined && data.BotAliases !== null) {
                    contents.BotAliases = deserializeAws_restJson1BotAliasMetadataList(data.BotAliases, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetBotAliasesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelbuildingservice#BadRequestException": return [3 /*break*/, 2];
                    case "InternalFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetBotChannelAssociationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetBotChannelAssociationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    botAlias: undefined,
                    botConfiguration: undefined,
                    botName: undefined,
                    createdDate: undefined,
                    description: undefined,
                    failureReason: undefined,
                    name: undefined,
                    status: undefined,
                    type: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.botAlias !== undefined && data.botAlias !== null) {
                    contents.botAlias = data.botAlias;
                }
                if (data.botConfiguration !== undefined && data.botConfiguration !== null) {
                    contents.botConfiguration = deserializeAws_restJson1ChannelConfigurationMap(data.botConfiguration, context);
                }
                if (data.botName !== undefined && data.botName !== null) {
                    contents.botName = data.botName;
                }
                if (data.createdDate !== undefined && data.createdDate !== null) {
                    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.description = data.description;
                }
                if (data.failureReason !== undefined && data.failureReason !== null) {
                    contents.failureReason = data.failureReason;
                }
                if (data.name !== undefined && data.name !== null) {
                    contents.name = data.name;
                }
                if (data.status !== undefined && data.status !== null) {
                    contents.status = data.status;
                }
                if (data.type !== undefined && data.type !== null) {
                    contents.type = data.type;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetBotChannelAssociationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelbuildingservice#BadRequestException": return [3 /*break*/, 2];
                    case "InternalFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelbuildingservice#NotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetBotChannelAssociationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetBotChannelAssociationsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    botChannelAssociations: undefined,
                    nextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.botChannelAssociations !== undefined && data.botChannelAssociations !== null) {
                    contents.botChannelAssociations = deserializeAws_restJson1BotChannelAssociationList(data.botChannelAssociations, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetBotChannelAssociationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelbuildingservice#BadRequestException": return [3 /*break*/, 2];
                    case "InternalFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetBotsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetBotsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    bots: undefined,
                    nextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.bots !== undefined && data.bots !== null) {
                    contents.bots = deserializeAws_restJson1BotMetadataList(data.bots, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetBotsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelbuildingservice#BadRequestException": return [3 /*break*/, 2];
                    case "InternalFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelbuildingservice#NotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetBotVersionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetBotVersionsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    bots: undefined,
                    nextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.bots !== undefined && data.bots !== null) {
                    contents.bots = deserializeAws_restJson1BotMetadataList(data.bots, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetBotVersionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelbuildingservice#BadRequestException": return [3 /*break*/, 2];
                    case "InternalFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelbuildingservice#NotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetBuiltinIntentCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetBuiltinIntentCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    signature: undefined,
                    slots: undefined,
                    supportedLocales: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.signature !== undefined && data.signature !== null) {
                    contents.signature = data.signature;
                }
                if (data.slots !== undefined && data.slots !== null) {
                    contents.slots = deserializeAws_restJson1BuiltinIntentSlotList(data.slots, context);
                }
                if (data.supportedLocales !== undefined && data.supportedLocales !== null) {
                    contents.supportedLocales = deserializeAws_restJson1LocaleList(data.supportedLocales, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetBuiltinIntentCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelbuildingservice#BadRequestException": return [3 /*break*/, 2];
                    case "InternalFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelbuildingservice#NotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetBuiltinIntentsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetBuiltinIntentsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    intents: undefined,
                    nextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.intents !== undefined && data.intents !== null) {
                    contents.intents = deserializeAws_restJson1BuiltinIntentMetadataList(data.intents, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetBuiltinIntentsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelbuildingservice#BadRequestException": return [3 /*break*/, 2];
                    case "InternalFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetBuiltinSlotTypesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetBuiltinSlotTypesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    nextToken: undefined,
                    slotTypes: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                if (data.slotTypes !== undefined && data.slotTypes !== null) {
                    contents.slotTypes = deserializeAws_restJson1BuiltinSlotTypeMetadataList(data.slotTypes, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetBuiltinSlotTypesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelbuildingservice#BadRequestException": return [3 /*break*/, 2];
                    case "InternalFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetExportCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetExportCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    exportStatus: undefined,
                    exportType: undefined,
                    failureReason: undefined,
                    name: undefined,
                    resourceType: undefined,
                    url: undefined,
                    version: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.exportStatus !== undefined && data.exportStatus !== null) {
                    contents.exportStatus = data.exportStatus;
                }
                if (data.exportType !== undefined && data.exportType !== null) {
                    contents.exportType = data.exportType;
                }
                if (data.failureReason !== undefined && data.failureReason !== null) {
                    contents.failureReason = data.failureReason;
                }
                if (data.name !== undefined && data.name !== null) {
                    contents.name = data.name;
                }
                if (data.resourceType !== undefined && data.resourceType !== null) {
                    contents.resourceType = data.resourceType;
                }
                if (data.url !== undefined && data.url !== null) {
                    contents.url = data.url;
                }
                if (data.version !== undefined && data.version !== null) {
                    contents.version = data.version;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetExportCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelbuildingservice#BadRequestException": return [3 /*break*/, 2];
                    case "InternalFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelbuildingservice#NotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetImportCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetImportCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    createdDate: undefined,
                    failureReason: undefined,
                    importId: undefined,
                    importStatus: undefined,
                    mergeStrategy: undefined,
                    name: undefined,
                    resourceType: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.createdDate !== undefined && data.createdDate !== null) {
                    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
                }
                if (data.failureReason !== undefined && data.failureReason !== null) {
                    contents.failureReason = deserializeAws_restJson1StringList(data.failureReason, context);
                }
                if (data.importId !== undefined && data.importId !== null) {
                    contents.importId = data.importId;
                }
                if (data.importStatus !== undefined && data.importStatus !== null) {
                    contents.importStatus = data.importStatus;
                }
                if (data.mergeStrategy !== undefined && data.mergeStrategy !== null) {
                    contents.mergeStrategy = data.mergeStrategy;
                }
                if (data.name !== undefined && data.name !== null) {
                    contents.name = data.name;
                }
                if (data.resourceType !== undefined && data.resourceType !== null) {
                    contents.resourceType = data.resourceType;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetImportCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelbuildingservice#BadRequestException": return [3 /*break*/, 2];
                    case "InternalFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelbuildingservice#NotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetIntentCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetIntentCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    checksum: undefined,
                    conclusionStatement: undefined,
                    confirmationPrompt: undefined,
                    createdDate: undefined,
                    description: undefined,
                    dialogCodeHook: undefined,
                    followUpPrompt: undefined,
                    fulfillmentActivity: undefined,
                    inputContexts: undefined,
                    kendraConfiguration: undefined,
                    lastUpdatedDate: undefined,
                    name: undefined,
                    outputContexts: undefined,
                    parentIntentSignature: undefined,
                    rejectionStatement: undefined,
                    sampleUtterances: undefined,
                    slots: undefined,
                    version: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.checksum !== undefined && data.checksum !== null) {
                    contents.checksum = data.checksum;
                }
                if (data.conclusionStatement !== undefined && data.conclusionStatement !== null) {
                    contents.conclusionStatement = deserializeAws_restJson1Statement(data.conclusionStatement, context);
                }
                if (data.confirmationPrompt !== undefined && data.confirmationPrompt !== null) {
                    contents.confirmationPrompt = deserializeAws_restJson1Prompt(data.confirmationPrompt, context);
                }
                if (data.createdDate !== undefined && data.createdDate !== null) {
                    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.description = data.description;
                }
                if (data.dialogCodeHook !== undefined && data.dialogCodeHook !== null) {
                    contents.dialogCodeHook = deserializeAws_restJson1CodeHook(data.dialogCodeHook, context);
                }
                if (data.followUpPrompt !== undefined && data.followUpPrompt !== null) {
                    contents.followUpPrompt = deserializeAws_restJson1FollowUpPrompt(data.followUpPrompt, context);
                }
                if (data.fulfillmentActivity !== undefined && data.fulfillmentActivity !== null) {
                    contents.fulfillmentActivity = deserializeAws_restJson1FulfillmentActivity(data.fulfillmentActivity, context);
                }
                if (data.inputContexts !== undefined && data.inputContexts !== null) {
                    contents.inputContexts = deserializeAws_restJson1InputContextList(data.inputContexts, context);
                }
                if (data.kendraConfiguration !== undefined && data.kendraConfiguration !== null) {
                    contents.kendraConfiguration = deserializeAws_restJson1KendraConfiguration(data.kendraConfiguration, context);
                }
                if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
                    contents.lastUpdatedDate = new Date(Math.round(data.lastUpdatedDate * 1000));
                }
                if (data.name !== undefined && data.name !== null) {
                    contents.name = data.name;
                }
                if (data.outputContexts !== undefined && data.outputContexts !== null) {
                    contents.outputContexts = deserializeAws_restJson1OutputContextList(data.outputContexts, context);
                }
                if (data.parentIntentSignature !== undefined && data.parentIntentSignature !== null) {
                    contents.parentIntentSignature = data.parentIntentSignature;
                }
                if (data.rejectionStatement !== undefined && data.rejectionStatement !== null) {
                    contents.rejectionStatement = deserializeAws_restJson1Statement(data.rejectionStatement, context);
                }
                if (data.sampleUtterances !== undefined && data.sampleUtterances !== null) {
                    contents.sampleUtterances = deserializeAws_restJson1IntentUtteranceList(data.sampleUtterances, context);
                }
                if (data.slots !== undefined && data.slots !== null) {
                    contents.slots = deserializeAws_restJson1SlotList(data.slots, context);
                }
                if (data.version !== undefined && data.version !== null) {
                    contents.version = data.version;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetIntentCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelbuildingservice#BadRequestException": return [3 /*break*/, 2];
                    case "InternalFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelbuildingservice#NotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetIntentsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetIntentsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    intents: undefined,
                    nextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.intents !== undefined && data.intents !== null) {
                    contents.intents = deserializeAws_restJson1IntentMetadataList(data.intents, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetIntentsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelbuildingservice#BadRequestException": return [3 /*break*/, 2];
                    case "InternalFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelbuildingservice#NotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetIntentVersionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetIntentVersionsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    intents: undefined,
                    nextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.intents !== undefined && data.intents !== null) {
                    contents.intents = deserializeAws_restJson1IntentMetadataList(data.intents, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetIntentVersionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelbuildingservice#BadRequestException": return [3 /*break*/, 2];
                    case "InternalFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelbuildingservice#NotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetSlotTypeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetSlotTypeCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    checksum: undefined,
                    createdDate: undefined,
                    description: undefined,
                    enumerationValues: undefined,
                    lastUpdatedDate: undefined,
                    name: undefined,
                    parentSlotTypeSignature: undefined,
                    slotTypeConfigurations: undefined,
                    valueSelectionStrategy: undefined,
                    version: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.checksum !== undefined && data.checksum !== null) {
                    contents.checksum = data.checksum;
                }
                if (data.createdDate !== undefined && data.createdDate !== null) {
                    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.description = data.description;
                }
                if (data.enumerationValues !== undefined && data.enumerationValues !== null) {
                    contents.enumerationValues = deserializeAws_restJson1EnumerationValues(data.enumerationValues, context);
                }
                if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
                    contents.lastUpdatedDate = new Date(Math.round(data.lastUpdatedDate * 1000));
                }
                if (data.name !== undefined && data.name !== null) {
                    contents.name = data.name;
                }
                if (data.parentSlotTypeSignature !== undefined && data.parentSlotTypeSignature !== null) {
                    contents.parentSlotTypeSignature = data.parentSlotTypeSignature;
                }
                if (data.slotTypeConfigurations !== undefined && data.slotTypeConfigurations !== null) {
                    contents.slotTypeConfigurations = deserializeAws_restJson1SlotTypeConfigurations(data.slotTypeConfigurations, context);
                }
                if (data.valueSelectionStrategy !== undefined && data.valueSelectionStrategy !== null) {
                    contents.valueSelectionStrategy = data.valueSelectionStrategy;
                }
                if (data.version !== undefined && data.version !== null) {
                    contents.version = data.version;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetSlotTypeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelbuildingservice#BadRequestException": return [3 /*break*/, 2];
                    case "InternalFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelbuildingservice#NotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetSlotTypesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetSlotTypesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    nextToken: undefined,
                    slotTypes: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                if (data.slotTypes !== undefined && data.slotTypes !== null) {
                    contents.slotTypes = deserializeAws_restJson1SlotTypeMetadataList(data.slotTypes, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetSlotTypesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelbuildingservice#BadRequestException": return [3 /*break*/, 2];
                    case "InternalFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelbuildingservice#NotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetSlotTypeVersionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetSlotTypeVersionsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    nextToken: undefined,
                    slotTypes: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                if (data.slotTypes !== undefined && data.slotTypes !== null) {
                    contents.slotTypes = deserializeAws_restJson1SlotTypeMetadataList(data.slotTypes, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetSlotTypeVersionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelbuildingservice#BadRequestException": return [3 /*break*/, 2];
                    case "InternalFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelbuildingservice#NotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetUtterancesViewCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetUtterancesViewCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    botName: undefined,
                    utterances: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.botName !== undefined && data.botName !== null) {
                    contents.botName = data.botName;
                }
                if (data.utterances !== undefined && data.utterances !== null) {
                    contents.utterances = deserializeAws_restJson1ListsOfUtterances(data.utterances, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetUtterancesViewCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelbuildingservice#BadRequestException": return [3 /*break*/, 2];
                    case "InternalFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
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
                    tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.tags !== undefined && data.tags !== null) {
                    contents.tags = deserializeAws_restJson1TagList(data.tags, context);
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelbuildingservice#BadRequestException": return [3 /*break*/, 2];
                    case "InternalFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelbuildingservice#NotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1PutBotCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1PutBotCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    abortStatement: undefined,
                    checksum: undefined,
                    childDirected: undefined,
                    clarificationPrompt: undefined,
                    createVersion: undefined,
                    createdDate: undefined,
                    description: undefined,
                    detectSentiment: undefined,
                    enableModelImprovements: undefined,
                    failureReason: undefined,
                    idleSessionTTLInSeconds: undefined,
                    intents: undefined,
                    lastUpdatedDate: undefined,
                    locale: undefined,
                    name: undefined,
                    nluIntentConfidenceThreshold: undefined,
                    status: undefined,
                    tags: undefined,
                    version: undefined,
                    voiceId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.abortStatement !== undefined && data.abortStatement !== null) {
                    contents.abortStatement = deserializeAws_restJson1Statement(data.abortStatement, context);
                }
                if (data.checksum !== undefined && data.checksum !== null) {
                    contents.checksum = data.checksum;
                }
                if (data.childDirected !== undefined && data.childDirected !== null) {
                    contents.childDirected = data.childDirected;
                }
                if (data.clarificationPrompt !== undefined && data.clarificationPrompt !== null) {
                    contents.clarificationPrompt = deserializeAws_restJson1Prompt(data.clarificationPrompt, context);
                }
                if (data.createVersion !== undefined && data.createVersion !== null) {
                    contents.createVersion = data.createVersion;
                }
                if (data.createdDate !== undefined && data.createdDate !== null) {
                    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.description = data.description;
                }
                if (data.detectSentiment !== undefined && data.detectSentiment !== null) {
                    contents.detectSentiment = data.detectSentiment;
                }
                if (data.enableModelImprovements !== undefined && data.enableModelImprovements !== null) {
                    contents.enableModelImprovements = data.enableModelImprovements;
                }
                if (data.failureReason !== undefined && data.failureReason !== null) {
                    contents.failureReason = data.failureReason;
                }
                if (data.idleSessionTTLInSeconds !== undefined && data.idleSessionTTLInSeconds !== null) {
                    contents.idleSessionTTLInSeconds = data.idleSessionTTLInSeconds;
                }
                if (data.intents !== undefined && data.intents !== null) {
                    contents.intents = deserializeAws_restJson1IntentList(data.intents, context);
                }
                if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
                    contents.lastUpdatedDate = new Date(Math.round(data.lastUpdatedDate * 1000));
                }
                if (data.locale !== undefined && data.locale !== null) {
                    contents.locale = data.locale;
                }
                if (data.name !== undefined && data.name !== null) {
                    contents.name = data.name;
                }
                if (data.nluIntentConfidenceThreshold !== undefined && data.nluIntentConfidenceThreshold !== null) {
                    contents.nluIntentConfidenceThreshold = data.nluIntentConfidenceThreshold;
                }
                if (data.status !== undefined && data.status !== null) {
                    contents.status = data.status;
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.tags = deserializeAws_restJson1TagList(data.tags, context);
                }
                if (data.version !== undefined && data.version !== null) {
                    contents.version = data.version;
                }
                if (data.voiceId !== undefined && data.voiceId !== null) {
                    contents.voiceId = data.voiceId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1PutBotCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelbuildingservice#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelbuildingservice#ConflictException": return [3 /*break*/, 4];
                    case "InternalFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException": return [3 /*break*/, 8];
                    case "PreconditionFailedException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelbuildingservice#PreconditionFailedException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1PutBotAliasCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1PutBotAliasCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    botName: undefined,
                    botVersion: undefined,
                    checksum: undefined,
                    conversationLogs: undefined,
                    createdDate: undefined,
                    description: undefined,
                    lastUpdatedDate: undefined,
                    name: undefined,
                    tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.botName !== undefined && data.botName !== null) {
                    contents.botName = data.botName;
                }
                if (data.botVersion !== undefined && data.botVersion !== null) {
                    contents.botVersion = data.botVersion;
                }
                if (data.checksum !== undefined && data.checksum !== null) {
                    contents.checksum = data.checksum;
                }
                if (data.conversationLogs !== undefined && data.conversationLogs !== null) {
                    contents.conversationLogs = deserializeAws_restJson1ConversationLogsResponse(data.conversationLogs, context);
                }
                if (data.createdDate !== undefined && data.createdDate !== null) {
                    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.description = data.description;
                }
                if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
                    contents.lastUpdatedDate = new Date(Math.round(data.lastUpdatedDate * 1000));
                }
                if (data.name !== undefined && data.name !== null) {
                    contents.name = data.name;
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.tags = deserializeAws_restJson1TagList(data.tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1PutBotAliasCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelbuildingservice#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelbuildingservice#ConflictException": return [3 /*break*/, 4];
                    case "InternalFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException": return [3 /*break*/, 8];
                    case "PreconditionFailedException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelbuildingservice#PreconditionFailedException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1PutIntentCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1PutIntentCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    checksum: undefined,
                    conclusionStatement: undefined,
                    confirmationPrompt: undefined,
                    createVersion: undefined,
                    createdDate: undefined,
                    description: undefined,
                    dialogCodeHook: undefined,
                    followUpPrompt: undefined,
                    fulfillmentActivity: undefined,
                    inputContexts: undefined,
                    kendraConfiguration: undefined,
                    lastUpdatedDate: undefined,
                    name: undefined,
                    outputContexts: undefined,
                    parentIntentSignature: undefined,
                    rejectionStatement: undefined,
                    sampleUtterances: undefined,
                    slots: undefined,
                    version: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.checksum !== undefined && data.checksum !== null) {
                    contents.checksum = data.checksum;
                }
                if (data.conclusionStatement !== undefined && data.conclusionStatement !== null) {
                    contents.conclusionStatement = deserializeAws_restJson1Statement(data.conclusionStatement, context);
                }
                if (data.confirmationPrompt !== undefined && data.confirmationPrompt !== null) {
                    contents.confirmationPrompt = deserializeAws_restJson1Prompt(data.confirmationPrompt, context);
                }
                if (data.createVersion !== undefined && data.createVersion !== null) {
                    contents.createVersion = data.createVersion;
                }
                if (data.createdDate !== undefined && data.createdDate !== null) {
                    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.description = data.description;
                }
                if (data.dialogCodeHook !== undefined && data.dialogCodeHook !== null) {
                    contents.dialogCodeHook = deserializeAws_restJson1CodeHook(data.dialogCodeHook, context);
                }
                if (data.followUpPrompt !== undefined && data.followUpPrompt !== null) {
                    contents.followUpPrompt = deserializeAws_restJson1FollowUpPrompt(data.followUpPrompt, context);
                }
                if (data.fulfillmentActivity !== undefined && data.fulfillmentActivity !== null) {
                    contents.fulfillmentActivity = deserializeAws_restJson1FulfillmentActivity(data.fulfillmentActivity, context);
                }
                if (data.inputContexts !== undefined && data.inputContexts !== null) {
                    contents.inputContexts = deserializeAws_restJson1InputContextList(data.inputContexts, context);
                }
                if (data.kendraConfiguration !== undefined && data.kendraConfiguration !== null) {
                    contents.kendraConfiguration = deserializeAws_restJson1KendraConfiguration(data.kendraConfiguration, context);
                }
                if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
                    contents.lastUpdatedDate = new Date(Math.round(data.lastUpdatedDate * 1000));
                }
                if (data.name !== undefined && data.name !== null) {
                    contents.name = data.name;
                }
                if (data.outputContexts !== undefined && data.outputContexts !== null) {
                    contents.outputContexts = deserializeAws_restJson1OutputContextList(data.outputContexts, context);
                }
                if (data.parentIntentSignature !== undefined && data.parentIntentSignature !== null) {
                    contents.parentIntentSignature = data.parentIntentSignature;
                }
                if (data.rejectionStatement !== undefined && data.rejectionStatement !== null) {
                    contents.rejectionStatement = deserializeAws_restJson1Statement(data.rejectionStatement, context);
                }
                if (data.sampleUtterances !== undefined && data.sampleUtterances !== null) {
                    contents.sampleUtterances = deserializeAws_restJson1IntentUtteranceList(data.sampleUtterances, context);
                }
                if (data.slots !== undefined && data.slots !== null) {
                    contents.slots = deserializeAws_restJson1SlotList(data.slots, context);
                }
                if (data.version !== undefined && data.version !== null) {
                    contents.version = data.version;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1PutIntentCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelbuildingservice#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelbuildingservice#ConflictException": return [3 /*break*/, 4];
                    case "InternalFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException": return [3 /*break*/, 8];
                    case "PreconditionFailedException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelbuildingservice#PreconditionFailedException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1PutSlotTypeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1PutSlotTypeCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    checksum: undefined,
                    createVersion: undefined,
                    createdDate: undefined,
                    description: undefined,
                    enumerationValues: undefined,
                    lastUpdatedDate: undefined,
                    name: undefined,
                    parentSlotTypeSignature: undefined,
                    slotTypeConfigurations: undefined,
                    valueSelectionStrategy: undefined,
                    version: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.checksum !== undefined && data.checksum !== null) {
                    contents.checksum = data.checksum;
                }
                if (data.createVersion !== undefined && data.createVersion !== null) {
                    contents.createVersion = data.createVersion;
                }
                if (data.createdDate !== undefined && data.createdDate !== null) {
                    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.description = data.description;
                }
                if (data.enumerationValues !== undefined && data.enumerationValues !== null) {
                    contents.enumerationValues = deserializeAws_restJson1EnumerationValues(data.enumerationValues, context);
                }
                if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
                    contents.lastUpdatedDate = new Date(Math.round(data.lastUpdatedDate * 1000));
                }
                if (data.name !== undefined && data.name !== null) {
                    contents.name = data.name;
                }
                if (data.parentSlotTypeSignature !== undefined && data.parentSlotTypeSignature !== null) {
                    contents.parentSlotTypeSignature = data.parentSlotTypeSignature;
                }
                if (data.slotTypeConfigurations !== undefined && data.slotTypeConfigurations !== null) {
                    contents.slotTypeConfigurations = deserializeAws_restJson1SlotTypeConfigurations(data.slotTypeConfigurations, context);
                }
                if (data.valueSelectionStrategy !== undefined && data.valueSelectionStrategy !== null) {
                    contents.valueSelectionStrategy = data.valueSelectionStrategy;
                }
                if (data.version !== undefined && data.version !== null) {
                    contents.version = data.version;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1PutSlotTypeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelbuildingservice#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelbuildingservice#ConflictException": return [3 /*break*/, 4];
                    case "InternalFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException": return [3 /*break*/, 8];
                    case "PreconditionFailedException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelbuildingservice#PreconditionFailedException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1StartImportCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1StartImportCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    createdDate: undefined,
                    importId: undefined,
                    importStatus: undefined,
                    mergeStrategy: undefined,
                    name: undefined,
                    resourceType: undefined,
                    tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.createdDate !== undefined && data.createdDate !== null) {
                    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
                }
                if (data.importId !== undefined && data.importId !== null) {
                    contents.importId = data.importId;
                }
                if (data.importStatus !== undefined && data.importStatus !== null) {
                    contents.importStatus = data.importStatus;
                }
                if (data.mergeStrategy !== undefined && data.mergeStrategy !== null) {
                    contents.mergeStrategy = data.mergeStrategy;
                }
                if (data.name !== undefined && data.name !== null) {
                    contents.name = data.name;
                }
                if (data.resourceType !== undefined && data.resourceType !== null) {
                    contents.resourceType = data.resourceType;
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.tags = deserializeAws_restJson1TagList(data.tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1StartImportCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelbuildingservice#BadRequestException": return [3 /*break*/, 2];
                    case "InternalFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelbuildingservice#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelbuildingservice#ConflictException": return [3 /*break*/, 4];
                    case "InternalFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelbuildingservice#NotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelbuildingservice#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelbuildingservice#ConflictException": return [3 /*break*/, 4];
                    case "InternalFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelbuildingservice#NotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
var deserializeAws_restJson1BadRequestExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "BadRequestException",
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
var deserializeAws_restJson1InternalFailureExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InternalFailureException",
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
var deserializeAws_restJson1LimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "LimitExceededException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
            retryAfterSeconds: undefined,
        };
        if (parsedOutput.headers["retry-after"] !== undefined) {
            contents.retryAfterSeconds = parsedOutput.headers["retry-after"];
        }
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
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
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1PreconditionFailedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "PreconditionFailedException",
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
var deserializeAws_restJson1ResourceInUseExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ResourceInUseException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            exampleReference: undefined,
            referenceType: undefined,
        };
        data = parsedOutput.body;
        if (data.exampleReference !== undefined && data.exampleReference !== null) {
            contents.exampleReference = deserializeAws_restJson1ResourceReference(data.exampleReference, context);
        }
        if (data.referenceType !== undefined && data.referenceType !== null) {
            contents.referenceType = data.referenceType;
        }
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_restJson1CodeHook = function (input, context) {
    return __assign(__assign({}, (input.messageVersion !== undefined &&
        input.messageVersion !== null && { messageVersion: input.messageVersion })), (input.uri !== undefined && input.uri !== null && { uri: input.uri }));
};
var serializeAws_restJson1ConversationLogsRequest = function (input, context) {
    return __assign(__assign({}, (input.iamRoleArn !== undefined && input.iamRoleArn !== null && { iamRoleArn: input.iamRoleArn })), (input.logSettings !== undefined &&
        input.logSettings !== null && {
        logSettings: serializeAws_restJson1LogSettingsRequestList(input.logSettings, context),
    }));
};
var serializeAws_restJson1EnumerationValue = function (input, context) {
    return __assign(__assign({}, (input.synonyms !== undefined &&
        input.synonyms !== null && { synonyms: serializeAws_restJson1SynonymList(input.synonyms, context) })), (input.value !== undefined && input.value !== null && { value: input.value }));
};
var serializeAws_restJson1EnumerationValues = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1EnumerationValue(entry, context);
    });
};
var serializeAws_restJson1FollowUpPrompt = function (input, context) {
    return __assign(__assign({}, (input.prompt !== undefined &&
        input.prompt !== null && { prompt: serializeAws_restJson1Prompt(input.prompt, context) })), (input.rejectionStatement !== undefined &&
        input.rejectionStatement !== null && {
        rejectionStatement: serializeAws_restJson1Statement(input.rejectionStatement, context),
    }));
};
var serializeAws_restJson1FulfillmentActivity = function (input, context) {
    return __assign(__assign({}, (input.codeHook !== undefined &&
        input.codeHook !== null && { codeHook: serializeAws_restJson1CodeHook(input.codeHook, context) })), (input.type !== undefined && input.type !== null && { type: input.type }));
};
var serializeAws_restJson1InputContext = function (input, context) {
    return __assign({}, (input.name !== undefined && input.name !== null && { name: input.name }));
};
var serializeAws_restJson1InputContextList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1InputContext(entry, context);
    });
};
var serializeAws_restJson1Intent = function (input, context) {
    return __assign(__assign({}, (input.intentName !== undefined && input.intentName !== null && { intentName: input.intentName })), (input.intentVersion !== undefined && input.intentVersion !== null && { intentVersion: input.intentVersion }));
};
var serializeAws_restJson1IntentList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Intent(entry, context);
    });
};
var serializeAws_restJson1IntentUtteranceList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1KendraConfiguration = function (input, context) {
    return __assign(__assign(__assign({}, (input.kendraIndex !== undefined && input.kendraIndex !== null && { kendraIndex: input.kendraIndex })), (input.queryFilterString !== undefined &&
        input.queryFilterString !== null && { queryFilterString: input.queryFilterString })), (input.role !== undefined && input.role !== null && { role: input.role }));
};
var serializeAws_restJson1LogSettingsRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.destination !== undefined && input.destination !== null && { destination: input.destination })), (input.kmsKeyArn !== undefined && input.kmsKeyArn !== null && { kmsKeyArn: input.kmsKeyArn })), (input.logType !== undefined && input.logType !== null && { logType: input.logType })), (input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }));
};
var serializeAws_restJson1LogSettingsRequestList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1LogSettingsRequest(entry, context);
    });
};
var serializeAws_restJson1Message = function (input, context) {
    return __assign(__assign(__assign({}, (input.content !== undefined && input.content !== null && { content: input.content })), (input.contentType !== undefined && input.contentType !== null && { contentType: input.contentType })), (input.groupNumber !== undefined && input.groupNumber !== null && { groupNumber: input.groupNumber }));
};
var serializeAws_restJson1MessageList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Message(entry, context);
    });
};
var serializeAws_restJson1OutputContext = function (input, context) {
    return __assign(__assign(__assign({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.timeToLiveInSeconds !== undefined &&
        input.timeToLiveInSeconds !== null && { timeToLiveInSeconds: input.timeToLiveInSeconds })), (input.turnsToLive !== undefined && input.turnsToLive !== null && { turnsToLive: input.turnsToLive }));
};
var serializeAws_restJson1OutputContextList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1OutputContext(entry, context);
    });
};
var serializeAws_restJson1Prompt = function (input, context) {
    return __assign(__assign(__assign({}, (input.maxAttempts !== undefined && input.maxAttempts !== null && { maxAttempts: input.maxAttempts })), (input.messages !== undefined &&
        input.messages !== null && { messages: serializeAws_restJson1MessageList(input.messages, context) })), (input.responseCard !== undefined && input.responseCard !== null && { responseCard: input.responseCard }));
};
var serializeAws_restJson1Slot = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.defaultValueSpec !== undefined &&
        input.defaultValueSpec !== null && {
        defaultValueSpec: serializeAws_restJson1SlotDefaultValueSpec(input.defaultValueSpec, context),
    })), (input.description !== undefined && input.description !== null && { description: input.description })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.obfuscationSetting !== undefined &&
        input.obfuscationSetting !== null && { obfuscationSetting: input.obfuscationSetting })), (input.priority !== undefined && input.priority !== null && { priority: input.priority })), (input.responseCard !== undefined && input.responseCard !== null && { responseCard: input.responseCard })), (input.sampleUtterances !== undefined &&
        input.sampleUtterances !== null && {
        sampleUtterances: serializeAws_restJson1SlotUtteranceList(input.sampleUtterances, context),
    })), (input.slotConstraint !== undefined &&
        input.slotConstraint !== null && { slotConstraint: input.slotConstraint })), (input.slotType !== undefined && input.slotType !== null && { slotType: input.slotType })), (input.slotTypeVersion !== undefined &&
        input.slotTypeVersion !== null && { slotTypeVersion: input.slotTypeVersion })), (input.valueElicitationPrompt !== undefined &&
        input.valueElicitationPrompt !== null && {
        valueElicitationPrompt: serializeAws_restJson1Prompt(input.valueElicitationPrompt, context),
    }));
};
var serializeAws_restJson1SlotDefaultValue = function (input, context) {
    return __assign({}, (input.defaultValue !== undefined && input.defaultValue !== null && { defaultValue: input.defaultValue }));
};
var serializeAws_restJson1SlotDefaultValueList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SlotDefaultValue(entry, context);
    });
};
var serializeAws_restJson1SlotDefaultValueSpec = function (input, context) {
    return __assign({}, (input.defaultValueList !== undefined &&
        input.defaultValueList !== null && {
        defaultValueList: serializeAws_restJson1SlotDefaultValueList(input.defaultValueList, context),
    }));
};
var serializeAws_restJson1SlotList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Slot(entry, context);
    });
};
var serializeAws_restJson1SlotTypeConfiguration = function (input, context) {
    return __assign({}, (input.regexConfiguration !== undefined &&
        input.regexConfiguration !== null && {
        regexConfiguration: serializeAws_restJson1SlotTypeRegexConfiguration(input.regexConfiguration, context),
    }));
};
var serializeAws_restJson1SlotTypeConfigurations = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SlotTypeConfiguration(entry, context);
    });
};
var serializeAws_restJson1SlotTypeRegexConfiguration = function (input, context) {
    return __assign({}, (input.pattern !== undefined && input.pattern !== null && { pattern: input.pattern }));
};
var serializeAws_restJson1SlotUtteranceList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1Statement = function (input, context) {
    return __assign(__assign({}, (input.messages !== undefined &&
        input.messages !== null && { messages: serializeAws_restJson1MessageList(input.messages, context) })), (input.responseCard !== undefined && input.responseCard !== null && { responseCard: input.responseCard }));
};
var serializeAws_restJson1SynonymList = function (input, context) {
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
    return __assign(__assign({}, (input.key !== undefined && input.key !== null && { key: input.key })), (input.value !== undefined && input.value !== null && { value: input.value }));
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
var deserializeAws_restJson1BotAliasMetadata = function (output, context) {
    return {
        botName: output.botName !== undefined && output.botName !== null ? output.botName : undefined,
        botVersion: output.botVersion !== undefined && output.botVersion !== null ? output.botVersion : undefined,
        checksum: output.checksum !== undefined && output.checksum !== null ? output.checksum : undefined,
        conversationLogs: output.conversationLogs !== undefined && output.conversationLogs !== null
            ? deserializeAws_restJson1ConversationLogsResponse(output.conversationLogs, context)
            : undefined,
        createdDate: output.createdDate !== undefined && output.createdDate !== null
            ? new Date(Math.round(output.createdDate * 1000))
            : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        lastUpdatedDate: output.lastUpdatedDate !== undefined && output.lastUpdatedDate !== null
            ? new Date(Math.round(output.lastUpdatedDate * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
var deserializeAws_restJson1BotAliasMetadataList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BotAliasMetadata(entry, context);
    });
};
var deserializeAws_restJson1BotChannelAssociation = function (output, context) {
    return {
        botAlias: output.botAlias !== undefined && output.botAlias !== null ? output.botAlias : undefined,
        botConfiguration: output.botConfiguration !== undefined && output.botConfiguration !== null
            ? deserializeAws_restJson1ChannelConfigurationMap(output.botConfiguration, context)
            : undefined,
        botName: output.botName !== undefined && output.botName !== null ? output.botName : undefined,
        createdDate: output.createdDate !== undefined && output.createdDate !== null
            ? new Date(Math.round(output.createdDate * 1000))
            : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        failureReason: output.failureReason !== undefined && output.failureReason !== null ? output.failureReason : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_restJson1BotChannelAssociationList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BotChannelAssociation(entry, context);
    });
};
var deserializeAws_restJson1BotMetadata = function (output, context) {
    return {
        createdDate: output.createdDate !== undefined && output.createdDate !== null
            ? new Date(Math.round(output.createdDate * 1000))
            : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        lastUpdatedDate: output.lastUpdatedDate !== undefined && output.lastUpdatedDate !== null
            ? new Date(Math.round(output.lastUpdatedDate * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
var deserializeAws_restJson1BotMetadataList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BotMetadata(entry, context);
    });
};
var deserializeAws_restJson1BuiltinIntentMetadata = function (output, context) {
    return {
        signature: output.signature !== undefined && output.signature !== null ? output.signature : undefined,
        supportedLocales: output.supportedLocales !== undefined && output.supportedLocales !== null
            ? deserializeAws_restJson1LocaleList(output.supportedLocales, context)
            : undefined,
    };
};
var deserializeAws_restJson1BuiltinIntentMetadataList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BuiltinIntentMetadata(entry, context);
    });
};
var deserializeAws_restJson1BuiltinIntentSlot = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
var deserializeAws_restJson1BuiltinIntentSlotList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BuiltinIntentSlot(entry, context);
    });
};
var deserializeAws_restJson1BuiltinSlotTypeMetadata = function (output, context) {
    return {
        signature: output.signature !== undefined && output.signature !== null ? output.signature : undefined,
        supportedLocales: output.supportedLocales !== undefined && output.supportedLocales !== null
            ? deserializeAws_restJson1LocaleList(output.supportedLocales, context)
            : undefined,
    };
};
var deserializeAws_restJson1BuiltinSlotTypeMetadataList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BuiltinSlotTypeMetadata(entry, context);
    });
};
var deserializeAws_restJson1ChannelConfigurationMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_restJson1CodeHook = function (output, context) {
    return {
        messageVersion: output.messageVersion !== undefined && output.messageVersion !== null ? output.messageVersion : undefined,
        uri: output.uri !== undefined && output.uri !== null ? output.uri : undefined,
    };
};
var deserializeAws_restJson1ConversationLogsResponse = function (output, context) {
    return {
        iamRoleArn: output.iamRoleArn !== undefined && output.iamRoleArn !== null ? output.iamRoleArn : undefined,
        logSettings: output.logSettings !== undefined && output.logSettings !== null
            ? deserializeAws_restJson1LogSettingsResponseList(output.logSettings, context)
            : undefined,
    };
};
var deserializeAws_restJson1EnumerationValue = function (output, context) {
    return {
        synonyms: output.synonyms !== undefined && output.synonyms !== null
            ? deserializeAws_restJson1SynonymList(output.synonyms, context)
            : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
var deserializeAws_restJson1EnumerationValues = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1EnumerationValue(entry, context);
    });
};
var deserializeAws_restJson1FollowUpPrompt = function (output, context) {
    return {
        prompt: output.prompt !== undefined && output.prompt !== null
            ? deserializeAws_restJson1Prompt(output.prompt, context)
            : undefined,
        rejectionStatement: output.rejectionStatement !== undefined && output.rejectionStatement !== null
            ? deserializeAws_restJson1Statement(output.rejectionStatement, context)
            : undefined,
    };
};
var deserializeAws_restJson1FulfillmentActivity = function (output, context) {
    return {
        codeHook: output.codeHook !== undefined && output.codeHook !== null
            ? deserializeAws_restJson1CodeHook(output.codeHook, context)
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_restJson1InputContext = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
var deserializeAws_restJson1InputContextList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1InputContext(entry, context);
    });
};
var deserializeAws_restJson1Intent = function (output, context) {
    return {
        intentName: output.intentName !== undefined && output.intentName !== null ? output.intentName : undefined,
        intentVersion: output.intentVersion !== undefined && output.intentVersion !== null ? output.intentVersion : undefined,
    };
};
var deserializeAws_restJson1IntentList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Intent(entry, context);
    });
};
var deserializeAws_restJson1IntentMetadata = function (output, context) {
    return {
        createdDate: output.createdDate !== undefined && output.createdDate !== null
            ? new Date(Math.round(output.createdDate * 1000))
            : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        lastUpdatedDate: output.lastUpdatedDate !== undefined && output.lastUpdatedDate !== null
            ? new Date(Math.round(output.lastUpdatedDate * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
var deserializeAws_restJson1IntentMetadataList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1IntentMetadata(entry, context);
    });
};
var deserializeAws_restJson1IntentUtteranceList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1KendraConfiguration = function (output, context) {
    return {
        kendraIndex: output.kendraIndex !== undefined && output.kendraIndex !== null ? output.kendraIndex : undefined,
        queryFilterString: output.queryFilterString !== undefined && output.queryFilterString !== null
            ? output.queryFilterString
            : undefined,
        role: output.role !== undefined && output.role !== null ? output.role : undefined,
    };
};
var deserializeAws_restJson1ListOfUtterance = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1UtteranceData(entry, context);
    });
};
var deserializeAws_restJson1ListsOfUtterances = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1UtteranceList(entry, context);
    });
};
var deserializeAws_restJson1LocaleList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1LogSettingsResponse = function (output, context) {
    return {
        destination: output.destination !== undefined && output.destination !== null ? output.destination : undefined,
        kmsKeyArn: output.kmsKeyArn !== undefined && output.kmsKeyArn !== null ? output.kmsKeyArn : undefined,
        logType: output.logType !== undefined && output.logType !== null ? output.logType : undefined,
        resourceArn: output.resourceArn !== undefined && output.resourceArn !== null ? output.resourceArn : undefined,
        resourcePrefix: output.resourcePrefix !== undefined && output.resourcePrefix !== null ? output.resourcePrefix : undefined,
    };
};
var deserializeAws_restJson1LogSettingsResponseList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1LogSettingsResponse(entry, context);
    });
};
var deserializeAws_restJson1Message = function (output, context) {
    return {
        content: output.content !== undefined && output.content !== null ? output.content : undefined,
        contentType: output.contentType !== undefined && output.contentType !== null ? output.contentType : undefined,
        groupNumber: output.groupNumber !== undefined && output.groupNumber !== null ? output.groupNumber : undefined,
    };
};
var deserializeAws_restJson1MessageList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Message(entry, context);
    });
};
var deserializeAws_restJson1OutputContext = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        timeToLiveInSeconds: output.timeToLiveInSeconds !== undefined && output.timeToLiveInSeconds !== null
            ? output.timeToLiveInSeconds
            : undefined,
        turnsToLive: output.turnsToLive !== undefined && output.turnsToLive !== null ? output.turnsToLive : undefined,
    };
};
var deserializeAws_restJson1OutputContextList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1OutputContext(entry, context);
    });
};
var deserializeAws_restJson1Prompt = function (output, context) {
    return {
        maxAttempts: output.maxAttempts !== undefined && output.maxAttempts !== null ? output.maxAttempts : undefined,
        messages: output.messages !== undefined && output.messages !== null
            ? deserializeAws_restJson1MessageList(output.messages, context)
            : undefined,
        responseCard: output.responseCard !== undefined && output.responseCard !== null ? output.responseCard : undefined,
    };
};
var deserializeAws_restJson1ResourceReference = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
var deserializeAws_restJson1Slot = function (output, context) {
    return {
        defaultValueSpec: output.defaultValueSpec !== undefined && output.defaultValueSpec !== null
            ? deserializeAws_restJson1SlotDefaultValueSpec(output.defaultValueSpec, context)
            : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        obfuscationSetting: output.obfuscationSetting !== undefined && output.obfuscationSetting !== null
            ? output.obfuscationSetting
            : undefined,
        priority: output.priority !== undefined && output.priority !== null ? output.priority : undefined,
        responseCard: output.responseCard !== undefined && output.responseCard !== null ? output.responseCard : undefined,
        sampleUtterances: output.sampleUtterances !== undefined && output.sampleUtterances !== null
            ? deserializeAws_restJson1SlotUtteranceList(output.sampleUtterances, context)
            : undefined,
        slotConstraint: output.slotConstraint !== undefined && output.slotConstraint !== null ? output.slotConstraint : undefined,
        slotType: output.slotType !== undefined && output.slotType !== null ? output.slotType : undefined,
        slotTypeVersion: output.slotTypeVersion !== undefined && output.slotTypeVersion !== null ? output.slotTypeVersion : undefined,
        valueElicitationPrompt: output.valueElicitationPrompt !== undefined && output.valueElicitationPrompt !== null
            ? deserializeAws_restJson1Prompt(output.valueElicitationPrompt, context)
            : undefined,
    };
};
var deserializeAws_restJson1SlotDefaultValue = function (output, context) {
    return {
        defaultValue: output.defaultValue !== undefined && output.defaultValue !== null ? output.defaultValue : undefined,
    };
};
var deserializeAws_restJson1SlotDefaultValueList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SlotDefaultValue(entry, context);
    });
};
var deserializeAws_restJson1SlotDefaultValueSpec = function (output, context) {
    return {
        defaultValueList: output.defaultValueList !== undefined && output.defaultValueList !== null
            ? deserializeAws_restJson1SlotDefaultValueList(output.defaultValueList, context)
            : undefined,
    };
};
var deserializeAws_restJson1SlotList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Slot(entry, context);
    });
};
var deserializeAws_restJson1SlotTypeConfiguration = function (output, context) {
    return {
        regexConfiguration: output.regexConfiguration !== undefined && output.regexConfiguration !== null
            ? deserializeAws_restJson1SlotTypeRegexConfiguration(output.regexConfiguration, context)
            : undefined,
    };
};
var deserializeAws_restJson1SlotTypeConfigurations = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SlotTypeConfiguration(entry, context);
    });
};
var deserializeAws_restJson1SlotTypeMetadata = function (output, context) {
    return {
        createdDate: output.createdDate !== undefined && output.createdDate !== null
            ? new Date(Math.round(output.createdDate * 1000))
            : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        lastUpdatedDate: output.lastUpdatedDate !== undefined && output.lastUpdatedDate !== null
            ? new Date(Math.round(output.lastUpdatedDate * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
var deserializeAws_restJson1SlotTypeMetadataList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SlotTypeMetadata(entry, context);
    });
};
var deserializeAws_restJson1SlotTypeRegexConfiguration = function (output, context) {
    return {
        pattern: output.pattern !== undefined && output.pattern !== null ? output.pattern : undefined,
    };
};
var deserializeAws_restJson1SlotUtteranceList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1Statement = function (output, context) {
    return {
        messages: output.messages !== undefined && output.messages !== null
            ? deserializeAws_restJson1MessageList(output.messages, context)
            : undefined,
        responseCard: output.responseCard !== undefined && output.responseCard !== null ? output.responseCard : undefined,
    };
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
var deserializeAws_restJson1SynonymList = function (output, context) {
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
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
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
var deserializeAws_restJson1UtteranceData = function (output, context) {
    return {
        count: output.count !== undefined && output.count !== null ? output.count : undefined,
        distinctUsers: output.distinctUsers !== undefined && output.distinctUsers !== null ? output.distinctUsers : undefined,
        firstUtteredDate: output.firstUtteredDate !== undefined && output.firstUtteredDate !== null
            ? new Date(Math.round(output.firstUtteredDate * 1000))
            : undefined,
        lastUtteredDate: output.lastUtteredDate !== undefined && output.lastUtteredDate !== null
            ? new Date(Math.round(output.lastUtteredDate * 1000))
            : undefined,
        utteranceString: output.utteranceString !== undefined && output.utteranceString !== null ? output.utteranceString : undefined,
    };
};
var deserializeAws_restJson1UtteranceList = function (output, context) {
    return {
        botVersion: output.botVersion !== undefined && output.botVersion !== null ? output.botVersion : undefined,
        utterances: output.utterances !== undefined && output.utterances !== null
            ? deserializeAws_restJson1ListOfUtterance(output.utterances, context)
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