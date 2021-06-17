import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { LazyJsonString as __LazyJsonString, extendedEncodeURIComponent as __extendedEncodeURIComponent, } from "@aws-sdk/smithy-client";
export var serializeAws_restJson1DeleteSessionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/bot/{botName}/alias/{botAlias}/user/{userId}/session";
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
export var serializeAws_restJson1GetSessionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/bot/{botName}/alias/{botAlias}/user/{userId}/session";
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
                query = __assign({}, (input.checkpointLabelFilter !== undefined && { checkpointLabelFilter: input.checkpointLabelFilter }));
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
export var serializeAws_restJson1PostContentCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign(__assign(__assign(__assign(__assign({ "content-type": "application/octet-stream", "x-amz-content-sha256": "UNSIGNED-PAYLOAD" }, (isSerializableHeaderValue(input.sessionAttributes) && {
                    "x-amz-lex-session-attributes": Buffer.from(__LazyJsonString.fromObject(input.sessionAttributes)).toString("base64"),
                })), (isSerializableHeaderValue(input.requestAttributes) && {
                    "x-amz-lex-request-attributes": Buffer.from(__LazyJsonString.fromObject(input.requestAttributes)).toString("base64"),
                })), (isSerializableHeaderValue(input.contentType) && { "content-type": input.contentType })), (isSerializableHeaderValue(input.accept) && { accept: input.accept })), (isSerializableHeaderValue(input.activeContexts) && {
                    "x-amz-lex-active-contexts": Buffer.from(__LazyJsonString.fromObject(input.activeContexts)).toString("base64"),
                }));
                resolvedPath = "/bot/{botName}/alias/{botAlias}/user/{userId}/content";
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
export var serializeAws_restJson1PostTextCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/bot/{botName}/alias/{botAlias}/user/{userId}/text";
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
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.activeContexts !== undefined &&
                    input.activeContexts !== null && {
                    activeContexts: serializeAws_restJson1ActiveContextsList(input.activeContexts, context),
                })), (input.inputText !== undefined && input.inputText !== null && { inputText: input.inputText })), (input.requestAttributes !== undefined &&
                    input.requestAttributes !== null && {
                    requestAttributes: serializeAws_restJson1StringMap(input.requestAttributes, context),
                })), (input.sessionAttributes !== undefined &&
                    input.sessionAttributes !== null && {
                    sessionAttributes: serializeAws_restJson1StringMap(input.sessionAttributes, context),
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
export var serializeAws_restJson1PutSessionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({ "content-type": "application/json" }, (isSerializableHeaderValue(input.accept) && { accept: input.accept }));
                resolvedPath = "/bot/{botName}/alias/{botAlias}/user/{userId}/session";
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
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.activeContexts !== undefined &&
                    input.activeContexts !== null && {
                    activeContexts: serializeAws_restJson1ActiveContextsList(input.activeContexts, context),
                })), (input.dialogAction !== undefined &&
                    input.dialogAction !== null && { dialogAction: serializeAws_restJson1DialogAction(input.dialogAction, context) })), (input.recentIntentSummaryView !== undefined &&
                    input.recentIntentSummaryView !== null && {
                    recentIntentSummaryView: serializeAws_restJson1IntentSummaryList(input.recentIntentSummaryView, context),
                })), (input.sessionAttributes !== undefined &&
                    input.sessionAttributes !== null && {
                    sessionAttributes: serializeAws_restJson1StringMap(input.sessionAttributes, context),
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
                    botAlias: undefined,
                    botName: undefined,
                    sessionId: undefined,
                    userId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.botAlias !== undefined && data.botAlias !== null) {
                    contents.botAlias = data.botAlias;
                }
                if (data.botName !== undefined && data.botName !== null) {
                    contents.botName = data.botName;
                }
                if (data.sessionId !== undefined && data.sessionId !== null) {
                    contents.sessionId = data.sessionId;
                }
                if (data.userId !== undefined && data.userId !== null) {
                    contents.userId = data.userId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeleteSessionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.lexruntimeservice#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexruntimeservice#ConflictException": return [3 /*break*/, 4];
                    case "InternalFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexruntimeservice#InternalFailureException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexruntimeservice#LimitExceededException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexruntimeservice#NotFoundException": return [3 /*break*/, 10];
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
                    activeContexts: undefined,
                    dialogAction: undefined,
                    recentIntentSummaryView: undefined,
                    sessionAttributes: undefined,
                    sessionId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.activeContexts !== undefined && data.activeContexts !== null) {
                    contents.activeContexts = deserializeAws_restJson1ActiveContextsList(data.activeContexts, context);
                }
                if (data.dialogAction !== undefined && data.dialogAction !== null) {
                    contents.dialogAction = deserializeAws_restJson1DialogAction(data.dialogAction, context);
                }
                if (data.recentIntentSummaryView !== undefined && data.recentIntentSummaryView !== null) {
                    contents.recentIntentSummaryView = deserializeAws_restJson1IntentSummaryList(data.recentIntentSummaryView, context);
                }
                if (data.sessionAttributes !== undefined && data.sessionAttributes !== null) {
                    contents.sessionAttributes = deserializeAws_restJson1StringMap(data.sessionAttributes, context);
                }
                if (data.sessionId !== undefined && data.sessionId !== null) {
                    contents.sessionId = data.sessionId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetSessionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.lexruntimeservice#BadRequestException": return [3 /*break*/, 2];
                    case "InternalFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexruntimeservice#InternalFailureException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexruntimeservice#LimitExceededException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexruntimeservice#NotFoundException": return [3 /*break*/, 8];
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
export var deserializeAws_restJson1PostContentCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1PostContentCommandError(output, context)];
        }
        contents = {
            $metadata: deserializeMetadata(output),
            activeContexts: undefined,
            alternativeIntents: undefined,
            audioStream: undefined,
            botVersion: undefined,
            contentType: undefined,
            dialogState: undefined,
            encodedInputTranscript: undefined,
            encodedMessage: undefined,
            inputTranscript: undefined,
            intentName: undefined,
            message: undefined,
            messageFormat: undefined,
            nluIntentConfidence: undefined,
            sentimentResponse: undefined,
            sessionAttributes: undefined,
            sessionId: undefined,
            slotToElicit: undefined,
            slots: undefined,
        };
        if (output.headers["content-type"] !== undefined) {
            contents.contentType = output.headers["content-type"];
        }
        if (output.headers["x-amz-lex-intent-name"] !== undefined) {
            contents.intentName = output.headers["x-amz-lex-intent-name"];
        }
        if (output.headers["x-amz-lex-nlu-intent-confidence"] !== undefined) {
            contents.nluIntentConfidence = new __LazyJsonString(Buffer.from(output.headers["x-amz-lex-nlu-intent-confidence"], "base64").toString("ascii"));
        }
        if (output.headers["x-amz-lex-alternative-intents"] !== undefined) {
            contents.alternativeIntents = new __LazyJsonString(Buffer.from(output.headers["x-amz-lex-alternative-intents"], "base64").toString("ascii"));
        }
        if (output.headers["x-amz-lex-slots"] !== undefined) {
            contents.slots = new __LazyJsonString(Buffer.from(output.headers["x-amz-lex-slots"], "base64").toString("ascii"));
        }
        if (output.headers["x-amz-lex-session-attributes"] !== undefined) {
            contents.sessionAttributes = new __LazyJsonString(Buffer.from(output.headers["x-amz-lex-session-attributes"], "base64").toString("ascii"));
        }
        if (output.headers["x-amz-lex-sentiment"] !== undefined) {
            contents.sentimentResponse = output.headers["x-amz-lex-sentiment"];
        }
        if (output.headers["x-amz-lex-message"] !== undefined) {
            contents.message = output.headers["x-amz-lex-message"];
        }
        if (output.headers["x-amz-lex-encoded-message"] !== undefined) {
            contents.encodedMessage = output.headers["x-amz-lex-encoded-message"];
        }
        if (output.headers["x-amz-lex-message-format"] !== undefined) {
            contents.messageFormat = output.headers["x-amz-lex-message-format"];
        }
        if (output.headers["x-amz-lex-dialog-state"] !== undefined) {
            contents.dialogState = output.headers["x-amz-lex-dialog-state"];
        }
        if (output.headers["x-amz-lex-slot-to-elicit"] !== undefined) {
            contents.slotToElicit = output.headers["x-amz-lex-slot-to-elicit"];
        }
        if (output.headers["x-amz-lex-input-transcript"] !== undefined) {
            contents.inputTranscript = output.headers["x-amz-lex-input-transcript"];
        }
        if (output.headers["x-amz-lex-encoded-input-transcript"] !== undefined) {
            contents.encodedInputTranscript = output.headers["x-amz-lex-encoded-input-transcript"];
        }
        if (output.headers["x-amz-lex-bot-version"] !== undefined) {
            contents.botVersion = output.headers["x-amz-lex-bot-version"];
        }
        if (output.headers["x-amz-lex-session-id"] !== undefined) {
            contents.sessionId = output.headers["x-amz-lex-session-id"];
        }
        if (output.headers["x-amz-lex-active-contexts"] !== undefined) {
            contents.activeContexts = new __LazyJsonString(Buffer.from(output.headers["x-amz-lex-active-contexts"], "base64").toString("ascii"));
        }
        data = output.body;
        contents.audioStream = data;
        return [2 /*return*/, Promise.resolve(contents)];
    });
}); };
var deserializeAws_restJson1PostContentCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, parsedBody, message;
    var _p;
    return __generator(this, function (_q) {
        switch (_q.label) {
            case 0:
                _a = [__assign({}, output)];
                _p = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_p.body = _q.sent(), _p)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BadGatewayException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexruntimeservice#BadGatewayException": return [3 /*break*/, 2];
                    case "BadRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexruntimeservice#BadRequestException": return [3 /*break*/, 4];
                    case "ConflictException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexruntimeservice#ConflictException": return [3 /*break*/, 6];
                    case "DependencyFailedException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexruntimeservice#DependencyFailedException": return [3 /*break*/, 8];
                    case "InternalFailureException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexruntimeservice#InternalFailureException": return [3 /*break*/, 10];
                    case "LimitExceededException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexruntimeservice#LimitExceededException": return [3 /*break*/, 12];
                    case "LoopDetectedException": return [3 /*break*/, 14];
                    case "com.amazonaws.lexruntimeservice#LoopDetectedException": return [3 /*break*/, 14];
                    case "NotAcceptableException": return [3 /*break*/, 16];
                    case "com.amazonaws.lexruntimeservice#NotAcceptableException": return [3 /*break*/, 16];
                    case "NotFoundException": return [3 /*break*/, 18];
                    case "com.amazonaws.lexruntimeservice#NotFoundException": return [3 /*break*/, 18];
                    case "RequestTimeoutException": return [3 /*break*/, 20];
                    case "com.amazonaws.lexruntimeservice#RequestTimeoutException": return [3 /*break*/, 20];
                    case "UnsupportedMediaTypeException": return [3 /*break*/, 22];
                    case "com.amazonaws.lexruntimeservice#UnsupportedMediaTypeException": return [3 /*break*/, 22];
                }
                return [3 /*break*/, 24];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1DependencyFailedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LoopDetectedExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotAcceptableExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnsupportedMediaTypeExceptionResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 24:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _q.label = 25;
            case 25:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1PostTextCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1PostTextCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    activeContexts: undefined,
                    alternativeIntents: undefined,
                    botVersion: undefined,
                    dialogState: undefined,
                    intentName: undefined,
                    message: undefined,
                    messageFormat: undefined,
                    nluIntentConfidence: undefined,
                    responseCard: undefined,
                    sentimentResponse: undefined,
                    sessionAttributes: undefined,
                    sessionId: undefined,
                    slotToElicit: undefined,
                    slots: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.activeContexts !== undefined && data.activeContexts !== null) {
                    contents.activeContexts = deserializeAws_restJson1ActiveContextsList(data.activeContexts, context);
                }
                if (data.alternativeIntents !== undefined && data.alternativeIntents !== null) {
                    contents.alternativeIntents = deserializeAws_restJson1IntentList(data.alternativeIntents, context);
                }
                if (data.botVersion !== undefined && data.botVersion !== null) {
                    contents.botVersion = data.botVersion;
                }
                if (data.dialogState !== undefined && data.dialogState !== null) {
                    contents.dialogState = data.dialogState;
                }
                if (data.intentName !== undefined && data.intentName !== null) {
                    contents.intentName = data.intentName;
                }
                if (data.message !== undefined && data.message !== null) {
                    contents.message = data.message;
                }
                if (data.messageFormat !== undefined && data.messageFormat !== null) {
                    contents.messageFormat = data.messageFormat;
                }
                if (data.nluIntentConfidence !== undefined && data.nluIntentConfidence !== null) {
                    contents.nluIntentConfidence = deserializeAws_restJson1IntentConfidence(data.nluIntentConfidence, context);
                }
                if (data.responseCard !== undefined && data.responseCard !== null) {
                    contents.responseCard = deserializeAws_restJson1ResponseCard(data.responseCard, context);
                }
                if (data.sentimentResponse !== undefined && data.sentimentResponse !== null) {
                    contents.sentimentResponse = deserializeAws_restJson1SentimentResponse(data.sentimentResponse, context);
                }
                if (data.sessionAttributes !== undefined && data.sessionAttributes !== null) {
                    contents.sessionAttributes = deserializeAws_restJson1StringMap(data.sessionAttributes, context);
                }
                if (data.sessionId !== undefined && data.sessionId !== null) {
                    contents.sessionId = data.sessionId;
                }
                if (data.slotToElicit !== undefined && data.slotToElicit !== null) {
                    contents.slotToElicit = data.slotToElicit;
                }
                if (data.slots !== undefined && data.slots !== null) {
                    contents.slots = deserializeAws_restJson1StringMap(data.slots, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1PostTextCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadGatewayException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexruntimeservice#BadGatewayException": return [3 /*break*/, 2];
                    case "BadRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexruntimeservice#BadRequestException": return [3 /*break*/, 4];
                    case "ConflictException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexruntimeservice#ConflictException": return [3 /*break*/, 6];
                    case "DependencyFailedException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexruntimeservice#DependencyFailedException": return [3 /*break*/, 8];
                    case "InternalFailureException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexruntimeservice#InternalFailureException": return [3 /*break*/, 10];
                    case "LimitExceededException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexruntimeservice#LimitExceededException": return [3 /*break*/, 12];
                    case "LoopDetectedException": return [3 /*break*/, 14];
                    case "com.amazonaws.lexruntimeservice#LoopDetectedException": return [3 /*break*/, 14];
                    case "NotFoundException": return [3 /*break*/, 16];
                    case "com.amazonaws.lexruntimeservice#NotFoundException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1LoopDetectedExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1PutSessionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1PutSessionCommandError(output, context)];
        }
        contents = {
            $metadata: deserializeMetadata(output),
            activeContexts: undefined,
            audioStream: undefined,
            contentType: undefined,
            dialogState: undefined,
            encodedMessage: undefined,
            intentName: undefined,
            message: undefined,
            messageFormat: undefined,
            sessionAttributes: undefined,
            sessionId: undefined,
            slotToElicit: undefined,
            slots: undefined,
        };
        if (output.headers["content-type"] !== undefined) {
            contents.contentType = output.headers["content-type"];
        }
        if (output.headers["x-amz-lex-intent-name"] !== undefined) {
            contents.intentName = output.headers["x-amz-lex-intent-name"];
        }
        if (output.headers["x-amz-lex-slots"] !== undefined) {
            contents.slots = new __LazyJsonString(Buffer.from(output.headers["x-amz-lex-slots"], "base64").toString("ascii"));
        }
        if (output.headers["x-amz-lex-session-attributes"] !== undefined) {
            contents.sessionAttributes = new __LazyJsonString(Buffer.from(output.headers["x-amz-lex-session-attributes"], "base64").toString("ascii"));
        }
        if (output.headers["x-amz-lex-message"] !== undefined) {
            contents.message = output.headers["x-amz-lex-message"];
        }
        if (output.headers["x-amz-lex-encoded-message"] !== undefined) {
            contents.encodedMessage = output.headers["x-amz-lex-encoded-message"];
        }
        if (output.headers["x-amz-lex-message-format"] !== undefined) {
            contents.messageFormat = output.headers["x-amz-lex-message-format"];
        }
        if (output.headers["x-amz-lex-dialog-state"] !== undefined) {
            contents.dialogState = output.headers["x-amz-lex-dialog-state"];
        }
        if (output.headers["x-amz-lex-slot-to-elicit"] !== undefined) {
            contents.slotToElicit = output.headers["x-amz-lex-slot-to-elicit"];
        }
        if (output.headers["x-amz-lex-session-id"] !== undefined) {
            contents.sessionId = output.headers["x-amz-lex-session-id"];
        }
        if (output.headers["x-amz-lex-active-contexts"] !== undefined) {
            contents.activeContexts = new __LazyJsonString(Buffer.from(output.headers["x-amz-lex-active-contexts"], "base64").toString("ascii"));
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
                    case "BadGatewayException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexruntimeservice#BadGatewayException": return [3 /*break*/, 2];
                    case "BadRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexruntimeservice#BadRequestException": return [3 /*break*/, 4];
                    case "ConflictException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexruntimeservice#ConflictException": return [3 /*break*/, 6];
                    case "DependencyFailedException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexruntimeservice#DependencyFailedException": return [3 /*break*/, 8];
                    case "InternalFailureException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexruntimeservice#InternalFailureException": return [3 /*break*/, 10];
                    case "LimitExceededException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexruntimeservice#LimitExceededException": return [3 /*break*/, 12];
                    case "NotAcceptableException": return [3 /*break*/, 14];
                    case "com.amazonaws.lexruntimeservice#NotAcceptableException": return [3 /*break*/, 14];
                    case "NotFoundException": return [3 /*break*/, 16];
                    case "com.amazonaws.lexruntimeservice#NotFoundException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1NotAcceptableExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
var deserializeAws_restJson1BadGatewayExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "BadGatewayException",
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
var deserializeAws_restJson1DependencyFailedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "DependencyFailedException",
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
var deserializeAws_restJson1LoopDetectedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "LoopDetectedException",
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
var deserializeAws_restJson1NotAcceptableExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "NotAcceptableException",
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
var deserializeAws_restJson1RequestTimeoutExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "RequestTimeoutException",
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
var deserializeAws_restJson1UnsupportedMediaTypeExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "UnsupportedMediaTypeException",
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
    return __assign(__assign(__assign({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.parameters !== undefined &&
        input.parameters !== null && {
        parameters: serializeAws_restJson1ActiveContextParametersMap(input.parameters, context),
    })), (input.timeToLive !== undefined &&
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
var serializeAws_restJson1DialogAction = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.fulfillmentState !== undefined &&
        input.fulfillmentState !== null && { fulfillmentState: input.fulfillmentState })), (input.intentName !== undefined && input.intentName !== null && { intentName: input.intentName })), (input.message !== undefined && input.message !== null && { message: input.message })), (input.messageFormat !== undefined && input.messageFormat !== null && { messageFormat: input.messageFormat })), (input.slotToElicit !== undefined && input.slotToElicit !== null && { slotToElicit: input.slotToElicit })), (input.slots !== undefined &&
        input.slots !== null && { slots: serializeAws_restJson1StringMap(input.slots, context) })), (input.type !== undefined && input.type !== null && { type: input.type }));
};
var serializeAws_restJson1IntentSummary = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.checkpointLabel !== undefined &&
        input.checkpointLabel !== null && { checkpointLabel: input.checkpointLabel })), (input.confirmationStatus !== undefined &&
        input.confirmationStatus !== null && { confirmationStatus: input.confirmationStatus })), (input.dialogActionType !== undefined &&
        input.dialogActionType !== null && { dialogActionType: input.dialogActionType })), (input.fulfillmentState !== undefined &&
        input.fulfillmentState !== null && { fulfillmentState: input.fulfillmentState })), (input.intentName !== undefined && input.intentName !== null && { intentName: input.intentName })), (input.slotToElicit !== undefined && input.slotToElicit !== null && { slotToElicit: input.slotToElicit })), (input.slots !== undefined &&
        input.slots !== null && { slots: serializeAws_restJson1StringMap(input.slots, context) }));
};
var serializeAws_restJson1IntentSummaryList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1IntentSummary(entry, context);
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
var deserializeAws_restJson1ActiveContext = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        parameters: output.parameters !== undefined && output.parameters !== null
            ? deserializeAws_restJson1ActiveContextParametersMap(output.parameters, context)
            : undefined,
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
var deserializeAws_restJson1Button = function (output, context) {
    return {
        text: output.text !== undefined && output.text !== null ? output.text : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
var deserializeAws_restJson1DialogAction = function (output, context) {
    return {
        fulfillmentState: output.fulfillmentState !== undefined && output.fulfillmentState !== null ? output.fulfillmentState : undefined,
        intentName: output.intentName !== undefined && output.intentName !== null ? output.intentName : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        messageFormat: output.messageFormat !== undefined && output.messageFormat !== null ? output.messageFormat : undefined,
        slotToElicit: output.slotToElicit !== undefined && output.slotToElicit !== null ? output.slotToElicit : undefined,
        slots: output.slots !== undefined && output.slots !== null
            ? deserializeAws_restJson1StringMap(output.slots, context)
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_restJson1GenericAttachment = function (output, context) {
    return {
        attachmentLinkUrl: output.attachmentLinkUrl !== undefined && output.attachmentLinkUrl !== null
            ? output.attachmentLinkUrl
            : undefined,
        buttons: output.buttons !== undefined && output.buttons !== null
            ? deserializeAws_restJson1listOfButtons(output.buttons, context)
            : undefined,
        imageUrl: output.imageUrl !== undefined && output.imageUrl !== null ? output.imageUrl : undefined,
        subTitle: output.subTitle !== undefined && output.subTitle !== null ? output.subTitle : undefined,
        title: output.title !== undefined && output.title !== null ? output.title : undefined,
    };
};
var deserializeAws_restJson1genericAttachmentList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1GenericAttachment(entry, context);
    });
};
var deserializeAws_restJson1IntentConfidence = function (output, context) {
    return {
        score: output.score !== undefined && output.score !== null ? output.score : undefined,
    };
};
var deserializeAws_restJson1IntentList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PredictedIntent(entry, context);
    });
};
var deserializeAws_restJson1IntentSummary = function (output, context) {
    return {
        checkpointLabel: output.checkpointLabel !== undefined && output.checkpointLabel !== null ? output.checkpointLabel : undefined,
        confirmationStatus: output.confirmationStatus !== undefined && output.confirmationStatus !== null
            ? output.confirmationStatus
            : undefined,
        dialogActionType: output.dialogActionType !== undefined && output.dialogActionType !== null ? output.dialogActionType : undefined,
        fulfillmentState: output.fulfillmentState !== undefined && output.fulfillmentState !== null ? output.fulfillmentState : undefined,
        intentName: output.intentName !== undefined && output.intentName !== null ? output.intentName : undefined,
        slotToElicit: output.slotToElicit !== undefined && output.slotToElicit !== null ? output.slotToElicit : undefined,
        slots: output.slots !== undefined && output.slots !== null
            ? deserializeAws_restJson1StringMap(output.slots, context)
            : undefined,
    };
};
var deserializeAws_restJson1IntentSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1IntentSummary(entry, context);
    });
};
var deserializeAws_restJson1listOfButtons = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Button(entry, context);
    });
};
var deserializeAws_restJson1PredictedIntent = function (output, context) {
    return {
        intentName: output.intentName !== undefined && output.intentName !== null ? output.intentName : undefined,
        nluIntentConfidence: output.nluIntentConfidence !== undefined && output.nluIntentConfidence !== null
            ? deserializeAws_restJson1IntentConfidence(output.nluIntentConfidence, context)
            : undefined,
        slots: output.slots !== undefined && output.slots !== null
            ? deserializeAws_restJson1StringMap(output.slots, context)
            : undefined,
    };
};
var deserializeAws_restJson1ResponseCard = function (output, context) {
    return {
        contentType: output.contentType !== undefined && output.contentType !== null ? output.contentType : undefined,
        genericAttachments: output.genericAttachments !== undefined && output.genericAttachments !== null
            ? deserializeAws_restJson1genericAttachmentList(output.genericAttachments, context)
            : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
var deserializeAws_restJson1SentimentResponse = function (output, context) {
    return {
        sentimentLabel: output.sentimentLabel !== undefined && output.sentimentLabel !== null ? output.sentimentLabel : undefined,
        sentimentScore: output.sentimentScore !== undefined && output.sentimentScore !== null ? output.sentimentScore : undefined,
    };
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