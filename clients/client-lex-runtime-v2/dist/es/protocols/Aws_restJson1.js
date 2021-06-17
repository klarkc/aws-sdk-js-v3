import { __assign, __awaiter, __generator, __read } from "tslib";
import { StartConversationRequestEventStream, } from "../models/models_0";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent, } from "@aws-sdk/smithy-client";
export var serializeAws_restJson1DeleteSessionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}";
                if (input.botId !== undefined) {
                    labelValue = input.botId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botId.");
                    }
                    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botId.");
                }
                if (input.botAliasId !== undefined) {
                    labelValue = input.botAliasId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botAliasId.");
                    }
                    resolvedPath = resolvedPath.replace("{botAliasId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botAliasId.");
                }
                if (input.localeId !== undefined) {
                    labelValue = input.localeId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: localeId.");
                    }
                    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: localeId.");
                }
                if (input.sessionId !== undefined) {
                    labelValue = input.sessionId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: sessionId.");
                    }
                    resolvedPath = resolvedPath.replace("{sessionId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: sessionId.");
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
export var serializeAws_restJson1GetSessionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}";
                if (input.botId !== undefined) {
                    labelValue = input.botId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botId.");
                    }
                    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botId.");
                }
                if (input.botAliasId !== undefined) {
                    labelValue = input.botAliasId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botAliasId.");
                    }
                    resolvedPath = resolvedPath.replace("{botAliasId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botAliasId.");
                }
                if (input.localeId !== undefined) {
                    labelValue = input.localeId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: localeId.");
                    }
                    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: localeId.");
                }
                if (input.sessionId !== undefined) {
                    labelValue = input.sessionId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: sessionId.");
                    }
                    resolvedPath = resolvedPath.replace("{sessionId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: sessionId.");
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
export var serializeAws_restJson1PutSessionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({ "content-type": "application/json" }, (isSerializableHeaderValue(input.responseContentType) && { responsecontenttype: input.responseContentType }));
                resolvedPath = "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}";
                if (input.botId !== undefined) {
                    labelValue = input.botId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botId.");
                    }
                    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botId.");
                }
                if (input.botAliasId !== undefined) {
                    labelValue = input.botAliasId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botAliasId.");
                    }
                    resolvedPath = resolvedPath.replace("{botAliasId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botAliasId.");
                }
                if (input.localeId !== undefined) {
                    labelValue = input.localeId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: localeId.");
                    }
                    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: localeId.");
                }
                if (input.sessionId !== undefined) {
                    labelValue = input.sessionId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: sessionId.");
                    }
                    resolvedPath = resolvedPath.replace("{sessionId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: sessionId.");
                }
                body = JSON.stringify(__assign(__assign(__assign({}, (input.messages !== undefined &&
                    input.messages !== null && { messages: serializeAws_restJson1Messages(input.messages, context) })), (input.requestAttributes !== undefined &&
                    input.requestAttributes !== null && {
                    requestAttributes: serializeAws_restJson1StringMap(input.requestAttributes, context),
                })), (input.sessionState !== undefined &&
                    input.sessionState !== null && { sessionState: serializeAws_restJson1SessionState(input.sessionState, context) })));
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
export var serializeAws_restJson1RecognizeTextCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/text";
                if (input.botId !== undefined) {
                    labelValue = input.botId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botId.");
                    }
                    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botId.");
                }
                if (input.botAliasId !== undefined) {
                    labelValue = input.botAliasId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botAliasId.");
                    }
                    resolvedPath = resolvedPath.replace("{botAliasId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botAliasId.");
                }
                if (input.localeId !== undefined) {
                    labelValue = input.localeId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: localeId.");
                    }
                    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: localeId.");
                }
                if (input.sessionId !== undefined) {
                    labelValue = input.sessionId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: sessionId.");
                    }
                    resolvedPath = resolvedPath.replace("{sessionId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: sessionId.");
                }
                body = JSON.stringify(__assign(__assign(__assign({}, (input.requestAttributes !== undefined &&
                    input.requestAttributes !== null && {
                    requestAttributes: serializeAws_restJson1StringMap(input.requestAttributes, context),
                })), (input.sessionState !== undefined &&
                    input.sessionState !== null && { sessionState: serializeAws_restJson1SessionState(input.sessionState, context) })), (input.text !== undefined && input.text !== null && { text: input.text })));
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
export var serializeAws_restJson1RecognizeUtteranceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign(__assign(__assign(__assign({ "content-type": "application/octet-stream", "x-amz-content-sha256": "UNSIGNED-PAYLOAD" }, (isSerializableHeaderValue(input.sessionState) && { "x-amz-lex-session-state": input.sessionState })), (isSerializableHeaderValue(input.requestAttributes) && {
                    "x-amz-lex-request-attributes": input.requestAttributes,
                })), (isSerializableHeaderValue(input.requestContentType) && { "content-type": input.requestContentType })), (isSerializableHeaderValue(input.responseContentType) && {
                    "response-content-type": input.responseContentType,
                }));
                resolvedPath = "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/utterance";
                if (input.botId !== undefined) {
                    labelValue = input.botId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botId.");
                    }
                    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botId.");
                }
                if (input.botAliasId !== undefined) {
                    labelValue = input.botAliasId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botAliasId.");
                    }
                    resolvedPath = resolvedPath.replace("{botAliasId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botAliasId.");
                }
                if (input.localeId !== undefined) {
                    labelValue = input.localeId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: localeId.");
                    }
                    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: localeId.");
                }
                if (input.sessionId !== undefined) {
                    labelValue = input.sessionId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: sessionId.");
                    }
                    resolvedPath = resolvedPath.replace("{sessionId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: sessionId.");
                }
                if (input.inputStream !== undefined) {
                    body = input.inputStream;
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
export var serializeAws_restJson1StartConversationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({}, (isSerializableHeaderValue(input.conversationMode) && {
                    "x-amz-lex-conversation-mode": input.conversationMode,
                }));
                resolvedPath = "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/conversation";
                if (input.botId !== undefined) {
                    labelValue = input.botId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botId.");
                    }
                    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botId.");
                }
                if (input.botAliasId !== undefined) {
                    labelValue = input.botAliasId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botAliasId.");
                    }
                    resolvedPath = resolvedPath.replace("{botAliasId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botAliasId.");
                }
                if (input.localeId !== undefined) {
                    labelValue = input.localeId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: localeId.");
                    }
                    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: localeId.");
                }
                if (input.sessionId !== undefined) {
                    labelValue = input.sessionId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: sessionId.");
                    }
                    resolvedPath = resolvedPath.replace("{sessionId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: sessionId.");
                }
                if (input.requestEventStream !== undefined) {
                    body = context.eventStreamMarshaller.serialize(input.requestEventStream, function (event) {
                        return serializeAws_restJson1StartConversationRequestEventStream_event(event, context);
                    });
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
export var deserializeAws_restJson1DeleteSessionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteSessionCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    botAliasId: undefined,
                    botId: undefined,
                    localeId: undefined,
                    sessionId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.botAliasId !== undefined && data.botAliasId !== null) {
                    contents.botAliasId = data.botAliasId;
                }
                if (data.botId !== undefined && data.botId !== null) {
                    contents.botId = data.botId;
                }
                if (data.localeId !== undefined && data.localeId !== null) {
                    contents.localeId = data.localeId;
                }
                if (data.sessionId !== undefined && data.sessionId !== null) {
                    contents.sessionId = data.sessionId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeleteSessionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.lexruntimev2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexruntimev2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexruntimev2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexruntimev2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexruntimev2#ThrottlingException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexruntimev2#ValidationException": return [3 /*break*/, 12];
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
export var deserializeAws_restJson1GetSessionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetSessionCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    interpretations: undefined,
                    messages: undefined,
                    sessionId: undefined,
                    sessionState: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.interpretations !== undefined && data.interpretations !== null) {
                    contents.interpretations = deserializeAws_restJson1Interpretations(data.interpretations, context);
                }
                if (data.messages !== undefined && data.messages !== null) {
                    contents.messages = deserializeAws_restJson1Messages(data.messages, context);
                }
                if (data.sessionId !== undefined && data.sessionId !== null) {
                    contents.sessionId = data.sessionId;
                }
                if (data.sessionState !== undefined && data.sessionState !== null) {
                    contents.sessionState = deserializeAws_restJson1SessionState(data.sessionState, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetSessionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.lexruntimev2#AccessDeniedException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexruntimev2#InternalServerException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexruntimev2#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexruntimev2#ThrottlingException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexruntimev2#ValidationException": return [3 /*break*/, 10];
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
export var deserializeAws_restJson1PutSessionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1PutSessionCommandError(output, context)];
        }
        contents = {
            $metadata: deserializeMetadata(output),
            audioStream: undefined,
            contentType: undefined,
            messages: undefined,
            requestAttributes: undefined,
            sessionId: undefined,
            sessionState: undefined,
        };
        if (output.headers["content-type"] !== undefined) {
            contents.contentType = output.headers["content-type"];
        }
        if (output.headers["x-amz-lex-messages"] !== undefined) {
            contents.messages = output.headers["x-amz-lex-messages"];
        }
        if (output.headers["x-amz-lex-session-state"] !== undefined) {
            contents.sessionState = output.headers["x-amz-lex-session-state"];
        }
        if (output.headers["x-amz-lex-request-attributes"] !== undefined) {
            contents.requestAttributes = output.headers["x-amz-lex-request-attributes"];
        }
        if (output.headers["x-amz-lex-session-id"] !== undefined) {
            contents.sessionId = output.headers["x-amz-lex-session-id"];
        }
        data = output.body;
        contents.audioStream = data;
        return [2 /*return*/, Promise.resolve(contents)];
    });
}); };
var deserializeAws_restJson1PutSessionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexruntimev2#AccessDeniedException": return [3 /*break*/, 2];
                    case "BadGatewayException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexruntimev2#BadGatewayException": return [3 /*break*/, 4];
                    case "ConflictException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexruntimev2#ConflictException": return [3 /*break*/, 6];
                    case "DependencyFailedException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexruntimev2#DependencyFailedException": return [3 /*break*/, 8];
                    case "InternalServerException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexruntimev2#InternalServerException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexruntimev2#ResourceNotFoundException": return [3 /*break*/, 12];
                    case "ThrottlingException": return [3 /*break*/, 14];
                    case "com.amazonaws.lexruntimev2#ThrottlingException": return [3 /*break*/, 14];
                    case "ValidationException": return [3 /*break*/, 16];
                    case "com.amazonaws.lexruntimev2#ValidationException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1DependencyFailedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1RecognizeTextCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1RecognizeTextCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    interpretations: undefined,
                    messages: undefined,
                    requestAttributes: undefined,
                    sessionId: undefined,
                    sessionState: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.interpretations !== undefined && data.interpretations !== null) {
                    contents.interpretations = deserializeAws_restJson1Interpretations(data.interpretations, context);
                }
                if (data.messages !== undefined && data.messages !== null) {
                    contents.messages = deserializeAws_restJson1Messages(data.messages, context);
                }
                if (data.requestAttributes !== undefined && data.requestAttributes !== null) {
                    contents.requestAttributes = deserializeAws_restJson1StringMap(data.requestAttributes, context);
                }
                if (data.sessionId !== undefined && data.sessionId !== null) {
                    contents.sessionId = data.sessionId;
                }
                if (data.sessionState !== undefined && data.sessionState !== null) {
                    contents.sessionState = deserializeAws_restJson1SessionState(data.sessionState, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1RecognizeTextCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexruntimev2#AccessDeniedException": return [3 /*break*/, 2];
                    case "BadGatewayException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexruntimev2#BadGatewayException": return [3 /*break*/, 4];
                    case "ConflictException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexruntimev2#ConflictException": return [3 /*break*/, 6];
                    case "DependencyFailedException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexruntimev2#DependencyFailedException": return [3 /*break*/, 8];
                    case "InternalServerException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexruntimev2#InternalServerException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexruntimev2#ResourceNotFoundException": return [3 /*break*/, 12];
                    case "ThrottlingException": return [3 /*break*/, 14];
                    case "com.amazonaws.lexruntimev2#ThrottlingException": return [3 /*break*/, 14];
                    case "ValidationException": return [3 /*break*/, 16];
                    case "com.amazonaws.lexruntimev2#ValidationException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1DependencyFailedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1RecognizeUtteranceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1RecognizeUtteranceCommandError(output, context)];
        }
        contents = {
            $metadata: deserializeMetadata(output),
            audioStream: undefined,
            contentType: undefined,
            inputMode: undefined,
            inputTranscript: undefined,
            interpretations: undefined,
            messages: undefined,
            requestAttributes: undefined,
            sessionId: undefined,
            sessionState: undefined,
        };
        if (output.headers["x-amz-lex-input-mode"] !== undefined) {
            contents.inputMode = output.headers["x-amz-lex-input-mode"];
        }
        if (output.headers["content-type"] !== undefined) {
            contents.contentType = output.headers["content-type"];
        }
        if (output.headers["x-amz-lex-messages"] !== undefined) {
            contents.messages = output.headers["x-amz-lex-messages"];
        }
        if (output.headers["x-amz-lex-interpretations"] !== undefined) {
            contents.interpretations = output.headers["x-amz-lex-interpretations"];
        }
        if (output.headers["x-amz-lex-session-state"] !== undefined) {
            contents.sessionState = output.headers["x-amz-lex-session-state"];
        }
        if (output.headers["x-amz-lex-request-attributes"] !== undefined) {
            contents.requestAttributes = output.headers["x-amz-lex-request-attributes"];
        }
        if (output.headers["x-amz-lex-session-id"] !== undefined) {
            contents.sessionId = output.headers["x-amz-lex-session-id"];
        }
        if (output.headers["x-amz-lex-input-transcript"] !== undefined) {
            contents.inputTranscript = output.headers["x-amz-lex-input-transcript"];
        }
        data = output.body;
        contents.audioStream = data;
        return [2 /*return*/, Promise.resolve(contents)];
    });
}); };
var deserializeAws_restJson1RecognizeUtteranceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexruntimev2#AccessDeniedException": return [3 /*break*/, 2];
                    case "BadGatewayException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexruntimev2#BadGatewayException": return [3 /*break*/, 4];
                    case "ConflictException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexruntimev2#ConflictException": return [3 /*break*/, 6];
                    case "DependencyFailedException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexruntimev2#DependencyFailedException": return [3 /*break*/, 8];
                    case "InternalServerException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexruntimev2#InternalServerException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexruntimev2#ResourceNotFoundException": return [3 /*break*/, 12];
                    case "ThrottlingException": return [3 /*break*/, 14];
                    case "com.amazonaws.lexruntimev2#ThrottlingException": return [3 /*break*/, 14];
                    case "ValidationException": return [3 /*break*/, 16];
                    case "com.amazonaws.lexruntimev2#ValidationException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1DependencyFailedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1StartConversationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1StartConversationCommandError(output, context)];
        }
        contents = {
            $metadata: deserializeMetadata(output),
            responseEventStream: undefined,
        };
        data = context.eventStreamMarshaller.deserialize(output.body, function (event) { return __awaiter(void 0, void 0, void 0, function () {
            var eventName, eventHeaders, eventMessage, parsedEvent;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        eventName = Object.keys(event)[0];
                        eventHeaders = Object.entries(event[eventName].headers).reduce(function (accummulator, curr) {
                            accummulator[curr[0]] = curr[1].value;
                            return accummulator;
                        }, {});
                        eventMessage = {
                            headers: eventHeaders,
                            body: event[eventName].body,
                        };
                        parsedEvent = (_a = {},
                            _a[eventName] = eventMessage,
                            _a);
                        return [4 /*yield*/, deserializeAws_restJson1StartConversationResponseEventStream_event(parsedEvent, context)];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        }); });
        contents.responseEventStream = data;
        return [2 /*return*/, Promise.resolve(contents)];
    });
}); };
var deserializeAws_restJson1StartConversationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexruntimev2#AccessDeniedException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexruntimev2#InternalServerException": return [3 /*break*/, 4];
                    case "ThrottlingException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexruntimev2#ThrottlingException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexruntimev2#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
var serializeAws_restJson1StartConversationRequestEventStream_event = function (input, context) {
    return StartConversationRequestEventStream.visit(input, {
        ConfigurationEvent: function (value) { return serializeAws_restJson1ConfigurationEvent_event(value, context); },
        AudioInputEvent: function (value) { return serializeAws_restJson1AudioInputEvent_event(value, context); },
        DTMFInputEvent: function (value) { return serializeAws_restJson1DTMFInputEvent_event(value, context); },
        TextInputEvent: function (value) { return serializeAws_restJson1TextInputEvent_event(value, context); },
        PlaybackCompletionEvent: function (value) { return serializeAws_restJson1PlaybackCompletionEvent_event(value, context); },
        DisconnectionEvent: function (value) { return serializeAws_restJson1DisconnectionEvent_event(value, context); },
        _: function (value) { return value; },
    });
};
var deserializeAws_restJson1StartConversationResponseEventStream_event = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    return __generator(this, function (_q) {
        switch (_q.label) {
            case 0:
                if (!(output["PlaybackInterruptionEvent"] !== undefined)) return [3 /*break*/, 2];
                _a = {};
                return [4 /*yield*/, deserializeAws_restJson1PlaybackInterruptionEvent_event(output["PlaybackInterruptionEvent"], context)];
            case 1: return [2 /*return*/, (_a.PlaybackInterruptionEvent = _q.sent(),
                    _a)];
            case 2:
                if (!(output["TranscriptEvent"] !== undefined)) return [3 /*break*/, 4];
                _b = {};
                return [4 /*yield*/, deserializeAws_restJson1TranscriptEvent_event(output["TranscriptEvent"], context)];
            case 3: return [2 /*return*/, (_b.TranscriptEvent = _q.sent(),
                    _b)];
            case 4:
                if (!(output["IntentResultEvent"] !== undefined)) return [3 /*break*/, 6];
                _c = {};
                return [4 /*yield*/, deserializeAws_restJson1IntentResultEvent_event(output["IntentResultEvent"], context)];
            case 5: return [2 /*return*/, (_c.IntentResultEvent = _q.sent(),
                    _c)];
            case 6:
                if (!(output["TextResponseEvent"] !== undefined)) return [3 /*break*/, 8];
                _d = {};
                return [4 /*yield*/, deserializeAws_restJson1TextResponseEvent_event(output["TextResponseEvent"], context)];
            case 7: return [2 /*return*/, (_d.TextResponseEvent = _q.sent(),
                    _d)];
            case 8:
                if (!(output["AudioResponseEvent"] !== undefined)) return [3 /*break*/, 10];
                _e = {};
                return [4 /*yield*/, deserializeAws_restJson1AudioResponseEvent_event(output["AudioResponseEvent"], context)];
            case 9: return [2 /*return*/, (_e.AudioResponseEvent = _q.sent(),
                    _e)];
            case 10:
                if (!(output["HeartbeatEvent"] !== undefined)) return [3 /*break*/, 12];
                _f = {};
                return [4 /*yield*/, deserializeAws_restJson1HeartbeatEvent_event(output["HeartbeatEvent"], context)];
            case 11: return [2 /*return*/, (_f.HeartbeatEvent = _q.sent(),
                    _f)];
            case 12:
                if (!(output["AccessDeniedException"] !== undefined)) return [3 /*break*/, 14];
                _g = {};
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedException_event(output["AccessDeniedException"], context)];
            case 13: return [2 /*return*/, (_g.AccessDeniedException = _q.sent(),
                    _g)];
            case 14:
                if (!(output["ResourceNotFoundException"] !== undefined)) return [3 /*break*/, 16];
                _h = {};
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundException_event(output["ResourceNotFoundException"], context)];
            case 15: return [2 /*return*/, (_h.ResourceNotFoundException = _q.sent(),
                    _h)];
            case 16:
                if (!(output["ValidationException"] !== undefined)) return [3 /*break*/, 18];
                _j = {};
                return [4 /*yield*/, deserializeAws_restJson1ValidationException_event(output["ValidationException"], context)];
            case 17: return [2 /*return*/, (_j.ValidationException = _q.sent(),
                    _j)];
            case 18:
                if (!(output["ThrottlingException"] !== undefined)) return [3 /*break*/, 20];
                _k = {};
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingException_event(output["ThrottlingException"], context)];
            case 19: return [2 /*return*/, (_k.ThrottlingException = _q.sent(),
                    _k)];
            case 20:
                if (!(output["InternalServerException"] !== undefined)) return [3 /*break*/, 22];
                _l = {};
                return [4 /*yield*/, deserializeAws_restJson1InternalServerException_event(output["InternalServerException"], context)];
            case 21: return [2 /*return*/, (_l.InternalServerException = _q.sent(),
                    _l)];
            case 22:
                if (!(output["ConflictException"] !== undefined)) return [3 /*break*/, 24];
                _m = {};
                return [4 /*yield*/, deserializeAws_restJson1ConflictException_event(output["ConflictException"], context)];
            case 23: return [2 /*return*/, (_m.ConflictException = _q.sent(),
                    _m)];
            case 24:
                if (!(output["DependencyFailedException"] !== undefined)) return [3 /*break*/, 26];
                _o = {};
                return [4 /*yield*/, deserializeAws_restJson1DependencyFailedException_event(output["DependencyFailedException"], context)];
            case 25: return [2 /*return*/, (_o.DependencyFailedException = _q.sent(),
                    _o)];
            case 26:
                if (!(output["BadGatewayException"] !== undefined)) return [3 /*break*/, 28];
                _p = {};
                return [4 /*yield*/, deserializeAws_restJson1BadGatewayException_event(output["BadGatewayException"], context)];
            case 27: return [2 /*return*/, (_p.BadGatewayException = _q.sent(),
                    _p)];
            case 28: return [2 /*return*/, { $unknown: output }];
        }
    });
}); };
var serializeAws_restJson1AudioInputEvent_event = function (input, context) {
    var message = {
        headers: {
            ":event-type": { type: "string", value: "AudioInputEvent" },
            ":message-type": { type: "string", value: "event" },
        },
        body: new Uint8Array(),
    };
    message.body = serializeAws_restJson1AudioInputEvent(input, context);
    return message;
};
var serializeAws_restJson1ConfigurationEvent_event = function (input, context) {
    var message = {
        headers: {
            ":event-type": { type: "string", value: "ConfigurationEvent" },
            ":message-type": { type: "string", value: "event" },
        },
        body: new Uint8Array(),
    };
    message.body = serializeAws_restJson1ConfigurationEvent(input, context);
    return message;
};
var serializeAws_restJson1DisconnectionEvent_event = function (input, context) {
    var message = {
        headers: {
            ":event-type": { type: "string", value: "DisconnectionEvent" },
            ":message-type": { type: "string", value: "event" },
        },
        body: new Uint8Array(),
    };
    message.body = serializeAws_restJson1DisconnectionEvent(input, context);
    return message;
};
var serializeAws_restJson1DTMFInputEvent_event = function (input, context) {
    var message = {
        headers: {
            ":event-type": { type: "string", value: "DTMFInputEvent" },
            ":message-type": { type: "string", value: "event" },
        },
        body: new Uint8Array(),
    };
    message.body = serializeAws_restJson1DTMFInputEvent(input, context);
    return message;
};
var serializeAws_restJson1PlaybackCompletionEvent_event = function (input, context) {
    var message = {
        headers: {
            ":event-type": { type: "string", value: "PlaybackCompletionEvent" },
            ":message-type": { type: "string", value: "event" },
        },
        body: new Uint8Array(),
    };
    message.body = serializeAws_restJson1PlaybackCompletionEvent(input, context);
    return message;
};
var serializeAws_restJson1TextInputEvent_event = function (input, context) {
    var message = {
        headers: {
            ":event-type": { type: "string", value: "TextInputEvent" },
            ":message-type": { type: "string", value: "event" },
        },
        body: new Uint8Array(),
    };
    message.body = serializeAws_restJson1TextInputEvent(input, context);
    return message;
};
var deserializeAws_restJson1AccessDeniedException_event = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                return [2 /*return*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        }
    });
}); };
var deserializeAws_restJson1AudioResponseEvent_event = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                contents = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = __assign(__assign({}, contents), deserializeAws_restJson1AudioResponseEvent(data, context));
                return [2 /*return*/, contents];
        }
    });
}); };
var deserializeAws_restJson1BadGatewayException_event = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                return [2 /*return*/, deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)];
        }
    });
}); };
var deserializeAws_restJson1ConflictException_event = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                return [2 /*return*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        }
    });
}); };
var deserializeAws_restJson1DependencyFailedException_event = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                return [2 /*return*/, deserializeAws_restJson1DependencyFailedExceptionResponse(parsedOutput, context)];
        }
    });
}); };
var deserializeAws_restJson1HeartbeatEvent_event = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                contents = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = __assign(__assign({}, contents), deserializeAws_restJson1HeartbeatEvent(data, context));
                return [2 /*return*/, contents];
        }
    });
}); };
var deserializeAws_restJson1IntentResultEvent_event = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                contents = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = __assign(__assign({}, contents), deserializeAws_restJson1IntentResultEvent(data, context));
                return [2 /*return*/, contents];
        }
    });
}); };
var deserializeAws_restJson1InternalServerException_event = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                return [2 /*return*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        }
    });
}); };
var deserializeAws_restJson1PlaybackInterruptionEvent_event = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                contents = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = __assign(__assign({}, contents), deserializeAws_restJson1PlaybackInterruptionEvent(data, context));
                return [2 /*return*/, contents];
        }
    });
}); };
var deserializeAws_restJson1ResourceNotFoundException_event = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                return [2 /*return*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        }
    });
}); };
var deserializeAws_restJson1TextResponseEvent_event = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                contents = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = __assign(__assign({}, contents), deserializeAws_restJson1TextResponseEvent(data, context));
                return [2 /*return*/, contents];
        }
    });
}); };
var deserializeAws_restJson1ThrottlingException_event = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                return [2 /*return*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
        }
    });
}); };
var deserializeAws_restJson1TranscriptEvent_event = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                contents = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = __assign(__assign({}, contents), deserializeAws_restJson1TranscriptEvent(data, context));
                return [2 /*return*/, contents];
        }
    });
}); };
var deserializeAws_restJson1ValidationException_event = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                return [2 /*return*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
var deserializeAws_restJson1BadGatewayExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "BadGatewayException",
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
var deserializeAws_restJson1DependencyFailedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "DependencyFailedException",
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
var deserializeAws_restJson1ThrottlingExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ThrottlingException",
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
var serializeAws_restJson1ActiveContext = function (input, context) {
    return __assign(__assign(__assign({}, (input.contextAttributes !== undefined &&
        input.contextAttributes !== null && {
        contextAttributes: serializeAws_restJson1ActiveContextParametersMap(input.contextAttributes, context),
    })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.timeToLive !== undefined &&
        input.timeToLive !== null && {
        timeToLive: serializeAws_restJson1ActiveContextTimeToLive(input.timeToLive, context),
    }));
};
var serializeAws_restJson1ActiveContextParametersMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_restJson1ActiveContextsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1ActiveContext(entry, context);
    });
};
var serializeAws_restJson1ActiveContextTimeToLive = function (input, context) {
    return __assign(__assign({}, (input.timeToLiveInSeconds !== undefined &&
        input.timeToLiveInSeconds !== null && { timeToLiveInSeconds: input.timeToLiveInSeconds })), (input.turnsToLive !== undefined && input.turnsToLive !== null && { turnsToLive: input.turnsToLive }));
};
var serializeAws_restJson1AudioInputEvent = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.audioChunk !== undefined &&
        input.audioChunk !== null && { audioChunk: context.base64Encoder(input.audioChunk) })), (input.clientTimestampMillis !== undefined &&
        input.clientTimestampMillis !== null && { clientTimestampMillis: input.clientTimestampMillis })), (input.contentType !== undefined && input.contentType !== null && { contentType: input.contentType })), (input.eventId !== undefined && input.eventId !== null && { eventId: input.eventId }));
};
var serializeAws_restJson1Button = function (input, context) {
    return __assign(__assign({}, (input.text !== undefined && input.text !== null && { text: input.text })), (input.value !== undefined && input.value !== null && { value: input.value }));
};
var serializeAws_restJson1ButtonsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Button(entry, context);
    });
};
var serializeAws_restJson1ConfigurationEvent = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.clientTimestampMillis !== undefined &&
        input.clientTimestampMillis !== null && { clientTimestampMillis: input.clientTimestampMillis })), (input.disablePlayback !== undefined &&
        input.disablePlayback !== null && { disablePlayback: input.disablePlayback })), (input.eventId !== undefined && input.eventId !== null && { eventId: input.eventId })), (input.requestAttributes !== undefined &&
        input.requestAttributes !== null && {
        requestAttributes: serializeAws_restJson1StringMap(input.requestAttributes, context),
    })), (input.responseContentType !== undefined &&
        input.responseContentType !== null && { responseContentType: input.responseContentType })), (input.sessionState !== undefined &&
        input.sessionState !== null && { sessionState: serializeAws_restJson1SessionState(input.sessionState, context) })), (input.welcomeMessages !== undefined &&
        input.welcomeMessages !== null && {
        welcomeMessages: serializeAws_restJson1Messages(input.welcomeMessages, context),
    }));
};
var serializeAws_restJson1DialogAction = function (input, context) {
    return __assign(__assign({}, (input.slotToElicit !== undefined && input.slotToElicit !== null && { slotToElicit: input.slotToElicit })), (input.type !== undefined && input.type !== null && { type: input.type }));
};
var serializeAws_restJson1DisconnectionEvent = function (input, context) {
    return __assign(__assign({}, (input.clientTimestampMillis !== undefined &&
        input.clientTimestampMillis !== null && { clientTimestampMillis: input.clientTimestampMillis })), (input.eventId !== undefined && input.eventId !== null && { eventId: input.eventId }));
};
var serializeAws_restJson1DTMFInputEvent = function (input, context) {
    return __assign(__assign(__assign({}, (input.clientTimestampMillis !== undefined &&
        input.clientTimestampMillis !== null && { clientTimestampMillis: input.clientTimestampMillis })), (input.eventId !== undefined && input.eventId !== null && { eventId: input.eventId })), (input.inputCharacter !== undefined &&
        input.inputCharacter !== null && { inputCharacter: input.inputCharacter }));
};
var serializeAws_restJson1ImageResponseCard = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.buttons !== undefined &&
        input.buttons !== null && { buttons: serializeAws_restJson1ButtonsList(input.buttons, context) })), (input.imageUrl !== undefined && input.imageUrl !== null && { imageUrl: input.imageUrl })), (input.subtitle !== undefined && input.subtitle !== null && { subtitle: input.subtitle })), (input.title !== undefined && input.title !== null && { title: input.title }));
};
var serializeAws_restJson1Intent = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.confirmationState !== undefined &&
        input.confirmationState !== null && { confirmationState: input.confirmationState })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.slots !== undefined &&
        input.slots !== null && { slots: serializeAws_restJson1Slots(input.slots, context) })), (input.state !== undefined && input.state !== null && { state: input.state }));
};
var serializeAws_restJson1Message = function (input, context) {
    return __assign(__assign(__assign({}, (input.content !== undefined && input.content !== null && { content: input.content })), (input.contentType !== undefined && input.contentType !== null && { contentType: input.contentType })), (input.imageResponseCard !== undefined &&
        input.imageResponseCard !== null && {
        imageResponseCard: serializeAws_restJson1ImageResponseCard(input.imageResponseCard, context),
    }));
};
var serializeAws_restJson1Messages = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Message(entry, context);
    });
};
var serializeAws_restJson1PlaybackCompletionEvent = function (input, context) {
    return __assign(__assign({}, (input.clientTimestampMillis !== undefined &&
        input.clientTimestampMillis !== null && { clientTimestampMillis: input.clientTimestampMillis })), (input.eventId !== undefined && input.eventId !== null && { eventId: input.eventId }));
};
var serializeAws_restJson1SessionState = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.activeContexts !== undefined &&
        input.activeContexts !== null && {
        activeContexts: serializeAws_restJson1ActiveContextsList(input.activeContexts, context),
    })), (input.dialogAction !== undefined &&
        input.dialogAction !== null && { dialogAction: serializeAws_restJson1DialogAction(input.dialogAction, context) })), (input.intent !== undefined &&
        input.intent !== null && { intent: serializeAws_restJson1Intent(input.intent, context) })), (input.originatingRequestId !== undefined &&
        input.originatingRequestId !== null && { originatingRequestId: input.originatingRequestId })), (input.sessionAttributes !== undefined &&
        input.sessionAttributes !== null && {
        sessionAttributes: serializeAws_restJson1StringMap(input.sessionAttributes, context),
    }));
};
var serializeAws_restJson1Slot = function (input, context) {
    return __assign({}, (input.value !== undefined &&
        input.value !== null && { value: serializeAws_restJson1Value(input.value, context) }));
};
var serializeAws_restJson1Slots = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = serializeAws_restJson1Slot(value, context), _b));
    }, {});
};
var serializeAws_restJson1StartConversationRequestEventStream = function (input, context) {
    return StartConversationRequestEventStream.visit(input, {
        AudioInputEvent: function (value) { return ({ AudioInputEvent: serializeAws_restJson1AudioInputEvent(value, context) }); },
        ConfigurationEvent: function (value) { return ({ ConfigurationEvent: serializeAws_restJson1ConfigurationEvent(value, context) }); },
        DTMFInputEvent: function (value) { return ({ DTMFInputEvent: serializeAws_restJson1DTMFInputEvent(value, context) }); },
        DisconnectionEvent: function (value) { return ({ DisconnectionEvent: serializeAws_restJson1DisconnectionEvent(value, context) }); },
        PlaybackCompletionEvent: function (value) { return ({
            PlaybackCompletionEvent: serializeAws_restJson1PlaybackCompletionEvent(value, context),
        }); },
        TextInputEvent: function (value) { return ({ TextInputEvent: serializeAws_restJson1TextInputEvent(value, context) }); },
        _: function (name, value) { return ({ name: value }); },
    });
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
var serializeAws_restJson1StringMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_restJson1TextInputEvent = function (input, context) {
    return __assign(__assign(__assign({}, (input.clientTimestampMillis !== undefined &&
        input.clientTimestampMillis !== null && { clientTimestampMillis: input.clientTimestampMillis })), (input.eventId !== undefined && input.eventId !== null && { eventId: input.eventId })), (input.text !== undefined && input.text !== null && { text: input.text }));
};
var serializeAws_restJson1Value = function (input, context) {
    return __assign(__assign(__assign({}, (input.interpretedValue !== undefined &&
        input.interpretedValue !== null && { interpretedValue: input.interpretedValue })), (input.originalValue !== undefined && input.originalValue !== null && { originalValue: input.originalValue })), (input.resolvedValues !== undefined &&
        input.resolvedValues !== null && {
        resolvedValues: serializeAws_restJson1StringList(input.resolvedValues, context),
    }));
};
var deserializeAws_restJson1AccessDeniedException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_restJson1ActiveContext = function (output, context) {
    return {
        contextAttributes: output.contextAttributes !== undefined && output.contextAttributes !== null
            ? deserializeAws_restJson1ActiveContextParametersMap(output.contextAttributes, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        timeToLive: output.timeToLive !== undefined && output.timeToLive !== null
            ? deserializeAws_restJson1ActiveContextTimeToLive(output.timeToLive, context)
            : undefined,
    };
};
var deserializeAws_restJson1ActiveContextParametersMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_restJson1ActiveContextsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ActiveContext(entry, context);
    });
};
var deserializeAws_restJson1ActiveContextTimeToLive = function (output, context) {
    return {
        timeToLiveInSeconds: output.timeToLiveInSeconds !== undefined && output.timeToLiveInSeconds !== null
            ? output.timeToLiveInSeconds
            : undefined,
        turnsToLive: output.turnsToLive !== undefined && output.turnsToLive !== null ? output.turnsToLive : undefined,
    };
};
var deserializeAws_restJson1AudioResponseEvent = function (output, context) {
    return {
        audioChunk: output.audioChunk !== undefined && output.audioChunk !== null
            ? context.base64Decoder(output.audioChunk)
            : undefined,
        contentType: output.contentType !== undefined && output.contentType !== null ? output.contentType : undefined,
        eventId: output.eventId !== undefined && output.eventId !== null ? output.eventId : undefined,
    };
};
var deserializeAws_restJson1BadGatewayException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_restJson1Button = function (output, context) {
    return {
        text: output.text !== undefined && output.text !== null ? output.text : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
var deserializeAws_restJson1ButtonsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Button(entry, context);
    });
};
var deserializeAws_restJson1ConfidenceScore = function (output, context) {
    return {
        score: output.score !== undefined && output.score !== null ? output.score : undefined,
    };
};
var deserializeAws_restJson1ConflictException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_restJson1DependencyFailedException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_restJson1DialogAction = function (output, context) {
    return {
        slotToElicit: output.slotToElicit !== undefined && output.slotToElicit !== null ? output.slotToElicit : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_restJson1HeartbeatEvent = function (output, context) {
    return {
        eventId: output.eventId !== undefined && output.eventId !== null ? output.eventId : undefined,
    };
};
var deserializeAws_restJson1ImageResponseCard = function (output, context) {
    return {
        buttons: output.buttons !== undefined && output.buttons !== null
            ? deserializeAws_restJson1ButtonsList(output.buttons, context)
            : undefined,
        imageUrl: output.imageUrl !== undefined && output.imageUrl !== null ? output.imageUrl : undefined,
        subtitle: output.subtitle !== undefined && output.subtitle !== null ? output.subtitle : undefined,
        title: output.title !== undefined && output.title !== null ? output.title : undefined,
    };
};
var deserializeAws_restJson1Intent = function (output, context) {
    return {
        confirmationState: output.confirmationState !== undefined && output.confirmationState !== null
            ? output.confirmationState
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        slots: output.slots !== undefined && output.slots !== null
            ? deserializeAws_restJson1Slots(output.slots, context)
            : undefined,
        state: output.state !== undefined && output.state !== null ? output.state : undefined,
    };
};
var deserializeAws_restJson1IntentResultEvent = function (output, context) {
    return {
        eventId: output.eventId !== undefined && output.eventId !== null ? output.eventId : undefined,
        inputMode: output.inputMode !== undefined && output.inputMode !== null ? output.inputMode : undefined,
        interpretations: output.interpretations !== undefined && output.interpretations !== null
            ? deserializeAws_restJson1Interpretations(output.interpretations, context)
            : undefined,
        requestAttributes: output.requestAttributes !== undefined && output.requestAttributes !== null
            ? deserializeAws_restJson1StringMap(output.requestAttributes, context)
            : undefined,
        sessionId: output.sessionId !== undefined && output.sessionId !== null ? output.sessionId : undefined,
        sessionState: output.sessionState !== undefined && output.sessionState !== null
            ? deserializeAws_restJson1SessionState(output.sessionState, context)
            : undefined,
    };
};
var deserializeAws_restJson1InternalServerException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_restJson1Interpretation = function (output, context) {
    return {
        intent: output.intent !== undefined && output.intent !== null
            ? deserializeAws_restJson1Intent(output.intent, context)
            : undefined,
        nluConfidence: output.nluConfidence !== undefined && output.nluConfidence !== null
            ? deserializeAws_restJson1ConfidenceScore(output.nluConfidence, context)
            : undefined,
        sentimentResponse: output.sentimentResponse !== undefined && output.sentimentResponse !== null
            ? deserializeAws_restJson1SentimentResponse(output.sentimentResponse, context)
            : undefined,
    };
};
var deserializeAws_restJson1Interpretations = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Interpretation(entry, context);
    });
};
var deserializeAws_restJson1Message = function (output, context) {
    return {
        content: output.content !== undefined && output.content !== null ? output.content : undefined,
        contentType: output.contentType !== undefined && output.contentType !== null ? output.contentType : undefined,
        imageResponseCard: output.imageResponseCard !== undefined && output.imageResponseCard !== null
            ? deserializeAws_restJson1ImageResponseCard(output.imageResponseCard, context)
            : undefined,
    };
};
var deserializeAws_restJson1Messages = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Message(entry, context);
    });
};
var deserializeAws_restJson1PlaybackInterruptionEvent = function (output, context) {
    return {
        causedByEventId: output.causedByEventId !== undefined && output.causedByEventId !== null ? output.causedByEventId : undefined,
        eventId: output.eventId !== undefined && output.eventId !== null ? output.eventId : undefined,
        eventReason: output.eventReason !== undefined && output.eventReason !== null ? output.eventReason : undefined,
    };
};
var deserializeAws_restJson1ResourceNotFoundException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_restJson1SentimentResponse = function (output, context) {
    return {
        sentiment: output.sentiment !== undefined && output.sentiment !== null ? output.sentiment : undefined,
        sentimentScore: output.sentimentScore !== undefined && output.sentimentScore !== null
            ? deserializeAws_restJson1SentimentScore(output.sentimentScore, context)
            : undefined,
    };
};
var deserializeAws_restJson1SentimentScore = function (output, context) {
    return {
        mixed: output.mixed !== undefined && output.mixed !== null ? output.mixed : undefined,
        negative: output.negative !== undefined && output.negative !== null ? output.negative : undefined,
        neutral: output.neutral !== undefined && output.neutral !== null ? output.neutral : undefined,
        positive: output.positive !== undefined && output.positive !== null ? output.positive : undefined,
    };
};
var deserializeAws_restJson1SessionState = function (output, context) {
    return {
        activeContexts: output.activeContexts !== undefined && output.activeContexts !== null
            ? deserializeAws_restJson1ActiveContextsList(output.activeContexts, context)
            : undefined,
        dialogAction: output.dialogAction !== undefined && output.dialogAction !== null
            ? deserializeAws_restJson1DialogAction(output.dialogAction, context)
            : undefined,
        intent: output.intent !== undefined && output.intent !== null
            ? deserializeAws_restJson1Intent(output.intent, context)
            : undefined,
        originatingRequestId: output.originatingRequestId !== undefined && output.originatingRequestId !== null
            ? output.originatingRequestId
            : undefined,
        sessionAttributes: output.sessionAttributes !== undefined && output.sessionAttributes !== null
            ? deserializeAws_restJson1StringMap(output.sessionAttributes, context)
            : undefined,
    };
};
var deserializeAws_restJson1Slot = function (output, context) {
    return {
        value: output.value !== undefined && output.value !== null
            ? deserializeAws_restJson1Value(output.value, context)
            : undefined,
    };
};
var deserializeAws_restJson1Slots = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_restJson1Slot(value, context), _b));
    }, {});
};
var deserializeAws_restJson1StartConversationResponseEventStream = function (output, context) {
    if (output.AccessDeniedException !== undefined && output.AccessDeniedException !== null) {
        return {
            AccessDeniedException: deserializeAws_restJson1AccessDeniedException(output.AccessDeniedException, context),
        };
    }
    if (output.AudioResponseEvent !== undefined && output.AudioResponseEvent !== null) {
        return {
            AudioResponseEvent: deserializeAws_restJson1AudioResponseEvent(output.AudioResponseEvent, context),
        };
    }
    if (output.BadGatewayException !== undefined && output.BadGatewayException !== null) {
        return {
            BadGatewayException: deserializeAws_restJson1BadGatewayException(output.BadGatewayException, context),
        };
    }
    if (output.ConflictException !== undefined && output.ConflictException !== null) {
        return {
            ConflictException: deserializeAws_restJson1ConflictException(output.ConflictException, context),
        };
    }
    if (output.DependencyFailedException !== undefined && output.DependencyFailedException !== null) {
        return {
            DependencyFailedException: deserializeAws_restJson1DependencyFailedException(output.DependencyFailedException, context),
        };
    }
    if (output.HeartbeatEvent !== undefined && output.HeartbeatEvent !== null) {
        return {
            HeartbeatEvent: deserializeAws_restJson1HeartbeatEvent(output.HeartbeatEvent, context),
        };
    }
    if (output.IntentResultEvent !== undefined && output.IntentResultEvent !== null) {
        return {
            IntentResultEvent: deserializeAws_restJson1IntentResultEvent(output.IntentResultEvent, context),
        };
    }
    if (output.InternalServerException !== undefined && output.InternalServerException !== null) {
        return {
            InternalServerException: deserializeAws_restJson1InternalServerException(output.InternalServerException, context),
        };
    }
    if (output.PlaybackInterruptionEvent !== undefined && output.PlaybackInterruptionEvent !== null) {
        return {
            PlaybackInterruptionEvent: deserializeAws_restJson1PlaybackInterruptionEvent(output.PlaybackInterruptionEvent, context),
        };
    }
    if (output.ResourceNotFoundException !== undefined && output.ResourceNotFoundException !== null) {
        return {
            ResourceNotFoundException: deserializeAws_restJson1ResourceNotFoundException(output.ResourceNotFoundException, context),
        };
    }
    if (output.TextResponseEvent !== undefined && output.TextResponseEvent !== null) {
        return {
            TextResponseEvent: deserializeAws_restJson1TextResponseEvent(output.TextResponseEvent, context),
        };
    }
    if (output.ThrottlingException !== undefined && output.ThrottlingException !== null) {
        return {
            ThrottlingException: deserializeAws_restJson1ThrottlingException(output.ThrottlingException, context),
        };
    }
    if (output.TranscriptEvent !== undefined && output.TranscriptEvent !== null) {
        return {
            TranscriptEvent: deserializeAws_restJson1TranscriptEvent(output.TranscriptEvent, context),
        };
    }
    if (output.ValidationException !== undefined && output.ValidationException !== null) {
        return {
            ValidationException: deserializeAws_restJson1ValidationException(output.ValidationException, context),
        };
    }
    return { $unknown: Object.entries(output)[0] };
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
var deserializeAws_restJson1StringMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_restJson1TextResponseEvent = function (output, context) {
    return {
        eventId: output.eventId !== undefined && output.eventId !== null ? output.eventId : undefined,
        messages: output.messages !== undefined && output.messages !== null
            ? deserializeAws_restJson1Messages(output.messages, context)
            : undefined,
    };
};
var deserializeAws_restJson1ThrottlingException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_restJson1TranscriptEvent = function (output, context) {
    return {
        eventId: output.eventId !== undefined && output.eventId !== null ? output.eventId : undefined,
        transcript: output.transcript !== undefined && output.transcript !== null ? output.transcript : undefined,
    };
};
var deserializeAws_restJson1ValidationException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_restJson1Value = function (output, context) {
    return {
        interpretedValue: output.interpretedValue !== undefined && output.interpretedValue !== null ? output.interpretedValue : undefined,
        originalValue: output.originalValue !== undefined && output.originalValue !== null ? output.originalValue : undefined,
        resolvedValues: output.resolvedValues !== undefined && output.resolvedValues !== null
            ? deserializeAws_restJson1StringList(output.resolvedValues, context)
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