"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1PutSessionCommand = exports.deserializeAws_restJson1PostTextCommand = exports.deserializeAws_restJson1PostContentCommand = exports.deserializeAws_restJson1GetSessionCommand = exports.deserializeAws_restJson1DeleteSessionCommand = exports.serializeAws_restJson1PutSessionCommand = exports.serializeAws_restJson1PostTextCommand = exports.serializeAws_restJson1PostContentCommand = exports.serializeAws_restJson1GetSessionCommand = exports.serializeAws_restJson1DeleteSessionCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1DeleteSessionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/bot/{botName}/alias/{botAlias}/user/{userId}/session";
    if (input.botName !== undefined) {
        const labelValue = input.botName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botName.");
        }
        resolvedPath = resolvedPath.replace("{botName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botName.");
    }
    if (input.botAlias !== undefined) {
        const labelValue = input.botAlias;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botAlias.");
        }
        resolvedPath = resolvedPath.replace("{botAlias}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botAlias.");
    }
    if (input.userId !== undefined) {
        const labelValue = input.userId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: userId.");
        }
        resolvedPath = resolvedPath.replace("{userId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: userId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteSessionCommand = serializeAws_restJson1DeleteSessionCommand;
const serializeAws_restJson1GetSessionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/bot/{botName}/alias/{botAlias}/user/{userId}/session";
    if (input.botName !== undefined) {
        const labelValue = input.botName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botName.");
        }
        resolvedPath = resolvedPath.replace("{botName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botName.");
    }
    if (input.botAlias !== undefined) {
        const labelValue = input.botAlias;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botAlias.");
        }
        resolvedPath = resolvedPath.replace("{botAlias}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botAlias.");
    }
    if (input.userId !== undefined) {
        const labelValue = input.userId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: userId.");
        }
        resolvedPath = resolvedPath.replace("{userId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: userId.");
    }
    const query = {
        ...(input.checkpointLabelFilter !== undefined && { checkpointLabelFilter: input.checkpointLabelFilter }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetSessionCommand = serializeAws_restJson1GetSessionCommand;
const serializeAws_restJson1PostContentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/octet-stream",
        "x-amz-content-sha256": "UNSIGNED-PAYLOAD",
        ...(isSerializableHeaderValue(input.sessionAttributes) && {
            "x-amz-lex-session-attributes": Buffer.from(smithy_client_1.LazyJsonString.fromObject(input.sessionAttributes)).toString("base64"),
        }),
        ...(isSerializableHeaderValue(input.requestAttributes) && {
            "x-amz-lex-request-attributes": Buffer.from(smithy_client_1.LazyJsonString.fromObject(input.requestAttributes)).toString("base64"),
        }),
        ...(isSerializableHeaderValue(input.contentType) && { "content-type": input.contentType }),
        ...(isSerializableHeaderValue(input.accept) && { accept: input.accept }),
        ...(isSerializableHeaderValue(input.activeContexts) && {
            "x-amz-lex-active-contexts": Buffer.from(smithy_client_1.LazyJsonString.fromObject(input.activeContexts)).toString("base64"),
        }),
    };
    let resolvedPath = "/bot/{botName}/alias/{botAlias}/user/{userId}/content";
    if (input.botName !== undefined) {
        const labelValue = input.botName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botName.");
        }
        resolvedPath = resolvedPath.replace("{botName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botName.");
    }
    if (input.botAlias !== undefined) {
        const labelValue = input.botAlias;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botAlias.");
        }
        resolvedPath = resolvedPath.replace("{botAlias}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botAlias.");
    }
    if (input.userId !== undefined) {
        const labelValue = input.userId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: userId.");
        }
        resolvedPath = resolvedPath.replace("{userId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: userId.");
    }
    let body;
    if (input.inputStream !== undefined) {
        body = input.inputStream;
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1PostContentCommand = serializeAws_restJson1PostContentCommand;
const serializeAws_restJson1PostTextCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/bot/{botName}/alias/{botAlias}/user/{userId}/text";
    if (input.botName !== undefined) {
        const labelValue = input.botName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botName.");
        }
        resolvedPath = resolvedPath.replace("{botName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botName.");
    }
    if (input.botAlias !== undefined) {
        const labelValue = input.botAlias;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botAlias.");
        }
        resolvedPath = resolvedPath.replace("{botAlias}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botAlias.");
    }
    if (input.userId !== undefined) {
        const labelValue = input.userId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: userId.");
        }
        resolvedPath = resolvedPath.replace("{userId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: userId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.activeContexts !== undefined &&
            input.activeContexts !== null && {
            activeContexts: serializeAws_restJson1ActiveContextsList(input.activeContexts, context),
        }),
        ...(input.inputText !== undefined && input.inputText !== null && { inputText: input.inputText }),
        ...(input.requestAttributes !== undefined &&
            input.requestAttributes !== null && {
            requestAttributes: serializeAws_restJson1StringMap(input.requestAttributes, context),
        }),
        ...(input.sessionAttributes !== undefined &&
            input.sessionAttributes !== null && {
            sessionAttributes: serializeAws_restJson1StringMap(input.sessionAttributes, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1PostTextCommand = serializeAws_restJson1PostTextCommand;
const serializeAws_restJson1PutSessionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.accept) && { accept: input.accept }),
    };
    let resolvedPath = "/bot/{botName}/alias/{botAlias}/user/{userId}/session";
    if (input.botName !== undefined) {
        const labelValue = input.botName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botName.");
        }
        resolvedPath = resolvedPath.replace("{botName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botName.");
    }
    if (input.botAlias !== undefined) {
        const labelValue = input.botAlias;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botAlias.");
        }
        resolvedPath = resolvedPath.replace("{botAlias}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botAlias.");
    }
    if (input.userId !== undefined) {
        const labelValue = input.userId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: userId.");
        }
        resolvedPath = resolvedPath.replace("{userId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: userId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.activeContexts !== undefined &&
            input.activeContexts !== null && {
            activeContexts: serializeAws_restJson1ActiveContextsList(input.activeContexts, context),
        }),
        ...(input.dialogAction !== undefined &&
            input.dialogAction !== null && { dialogAction: serializeAws_restJson1DialogAction(input.dialogAction, context) }),
        ...(input.recentIntentSummaryView !== undefined &&
            input.recentIntentSummaryView !== null && {
            recentIntentSummaryView: serializeAws_restJson1IntentSummaryList(input.recentIntentSummaryView, context),
        }),
        ...(input.sessionAttributes !== undefined &&
            input.sessionAttributes !== null && {
            sessionAttributes: serializeAws_restJson1StringMap(input.sessionAttributes, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1PutSessionCommand = serializeAws_restJson1PutSessionCommand;
const deserializeAws_restJson1DeleteSessionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteSessionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        botAlias: undefined,
        botName: undefined,
        sessionId: undefined,
        userId: undefined,
    };
    const data = await parseBody(output.body, context);
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
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteSessionCommand = deserializeAws_restJson1DeleteSessionCommand;
const deserializeAws_restJson1DeleteSessionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.lexruntimeservice#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.lexruntimeservice#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.lexruntimeservice#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.lexruntimeservice#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lexruntimeservice#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetSessionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetSessionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        activeContexts: undefined,
        dialogAction: undefined,
        recentIntentSummaryView: undefined,
        sessionAttributes: undefined,
        sessionId: undefined,
    };
    const data = await parseBody(output.body, context);
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
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetSessionCommand = deserializeAws_restJson1GetSessionCommand;
const deserializeAws_restJson1GetSessionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.lexruntimeservice#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.lexruntimeservice#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.lexruntimeservice#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lexruntimeservice#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1PostContentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PostContentCommandError(output, context);
    }
    const contents = {
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
        contents.nluIntentConfidence = new smithy_client_1.LazyJsonString(Buffer.from(output.headers["x-amz-lex-nlu-intent-confidence"], "base64").toString("ascii"));
    }
    if (output.headers["x-amz-lex-alternative-intents"] !== undefined) {
        contents.alternativeIntents = new smithy_client_1.LazyJsonString(Buffer.from(output.headers["x-amz-lex-alternative-intents"], "base64").toString("ascii"));
    }
    if (output.headers["x-amz-lex-slots"] !== undefined) {
        contents.slots = new smithy_client_1.LazyJsonString(Buffer.from(output.headers["x-amz-lex-slots"], "base64").toString("ascii"));
    }
    if (output.headers["x-amz-lex-session-attributes"] !== undefined) {
        contents.sessionAttributes = new smithy_client_1.LazyJsonString(Buffer.from(output.headers["x-amz-lex-session-attributes"], "base64").toString("ascii"));
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
        contents.activeContexts = new smithy_client_1.LazyJsonString(Buffer.from(output.headers["x-amz-lex-active-contexts"], "base64").toString("ascii"));
    }
    const data = output.body;
    contents.audioStream = data;
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PostContentCommand = deserializeAws_restJson1PostContentCommand;
const deserializeAws_restJson1PostContentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.lexruntimeservice#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.lexruntimeservice#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.lexruntimeservice#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DependencyFailedException":
        case "com.amazonaws.lexruntimeservice#DependencyFailedException":
            response = {
                ...(await deserializeAws_restJson1DependencyFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.lexruntimeservice#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.lexruntimeservice#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LoopDetectedException":
        case "com.amazonaws.lexruntimeservice#LoopDetectedException":
            response = {
                ...(await deserializeAws_restJson1LoopDetectedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAcceptableException":
        case "com.amazonaws.lexruntimeservice#NotAcceptableException":
            response = {
                ...(await deserializeAws_restJson1NotAcceptableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lexruntimeservice#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RequestTimeoutException":
        case "com.amazonaws.lexruntimeservice#RequestTimeoutException":
            response = {
                ...(await deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedMediaTypeException":
        case "com.amazonaws.lexruntimeservice#UnsupportedMediaTypeException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedMediaTypeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1PostTextCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PostTextCommandError(output, context);
    }
    const contents = {
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
    const data = await parseBody(output.body, context);
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
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PostTextCommand = deserializeAws_restJson1PostTextCommand;
const deserializeAws_restJson1PostTextCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.lexruntimeservice#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.lexruntimeservice#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.lexruntimeservice#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DependencyFailedException":
        case "com.amazonaws.lexruntimeservice#DependencyFailedException":
            response = {
                ...(await deserializeAws_restJson1DependencyFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.lexruntimeservice#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.lexruntimeservice#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LoopDetectedException":
        case "com.amazonaws.lexruntimeservice#LoopDetectedException":
            response = {
                ...(await deserializeAws_restJson1LoopDetectedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lexruntimeservice#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1PutSessionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutSessionCommandError(output, context);
    }
    const contents = {
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
        contents.slots = new smithy_client_1.LazyJsonString(Buffer.from(output.headers["x-amz-lex-slots"], "base64").toString("ascii"));
    }
    if (output.headers["x-amz-lex-session-attributes"] !== undefined) {
        contents.sessionAttributes = new smithy_client_1.LazyJsonString(Buffer.from(output.headers["x-amz-lex-session-attributes"], "base64").toString("ascii"));
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
        contents.activeContexts = new smithy_client_1.LazyJsonString(Buffer.from(output.headers["x-amz-lex-active-contexts"], "base64").toString("ascii"));
    }
    const data = output.body;
    contents.audioStream = data;
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutSessionCommand = deserializeAws_restJson1PutSessionCommand;
const deserializeAws_restJson1PutSessionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.lexruntimeservice#BadGatewayException":
            response = {
                ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.lexruntimeservice#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.lexruntimeservice#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DependencyFailedException":
        case "com.amazonaws.lexruntimeservice#DependencyFailedException":
            response = {
                ...(await deserializeAws_restJson1DependencyFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.lexruntimeservice#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.lexruntimeservice#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAcceptableException":
        case "com.amazonaws.lexruntimeservice#NotAcceptableException":
            response = {
                ...(await deserializeAws_restJson1NotAcceptableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lexruntimeservice#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1BadGatewayExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "BadGatewayException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1BadRequestExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "BadRequestException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ConflictExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ConflictException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1DependencyFailedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "DependencyFailedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1InternalFailureExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalFailureException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "LimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
        retryAfterSeconds: undefined,
    };
    if (parsedOutput.headers["retry-after"] !== undefined) {
        contents.retryAfterSeconds = parsedOutput.headers["retry-after"];
    }
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1LoopDetectedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "LoopDetectedException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1NotAcceptableExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NotAcceptableException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1NotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1RequestTimeoutExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "RequestTimeoutException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1UnsupportedMediaTypeExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "UnsupportedMediaTypeException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const serializeAws_restJson1ActiveContext = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.parameters !== undefined &&
            input.parameters !== null && {
            parameters: serializeAws_restJson1ActiveContextParametersMap(input.parameters, context),
        }),
        ...(input.timeToLive !== undefined &&
            input.timeToLive !== null && {
            timeToLive: serializeAws_restJson1ActiveContextTimeToLive(input.timeToLive, context),
        }),
    };
};
const serializeAws_restJson1ActiveContextParametersMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const serializeAws_restJson1ActiveContextsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1ActiveContext(entry, context);
    });
};
const serializeAws_restJson1ActiveContextTimeToLive = (input, context) => {
    return {
        ...(input.timeToLiveInSeconds !== undefined &&
            input.timeToLiveInSeconds !== null && { timeToLiveInSeconds: input.timeToLiveInSeconds }),
        ...(input.turnsToLive !== undefined && input.turnsToLive !== null && { turnsToLive: input.turnsToLive }),
    };
};
const serializeAws_restJson1DialogAction = (input, context) => {
    return {
        ...(input.fulfillmentState !== undefined &&
            input.fulfillmentState !== null && { fulfillmentState: input.fulfillmentState }),
        ...(input.intentName !== undefined && input.intentName !== null && { intentName: input.intentName }),
        ...(input.message !== undefined && input.message !== null && { message: input.message }),
        ...(input.messageFormat !== undefined && input.messageFormat !== null && { messageFormat: input.messageFormat }),
        ...(input.slotToElicit !== undefined && input.slotToElicit !== null && { slotToElicit: input.slotToElicit }),
        ...(input.slots !== undefined &&
            input.slots !== null && { slots: serializeAws_restJson1StringMap(input.slots, context) }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
    };
};
const serializeAws_restJson1IntentSummary = (input, context) => {
    return {
        ...(input.checkpointLabel !== undefined &&
            input.checkpointLabel !== null && { checkpointLabel: input.checkpointLabel }),
        ...(input.confirmationStatus !== undefined &&
            input.confirmationStatus !== null && { confirmationStatus: input.confirmationStatus }),
        ...(input.dialogActionType !== undefined &&
            input.dialogActionType !== null && { dialogActionType: input.dialogActionType }),
        ...(input.fulfillmentState !== undefined &&
            input.fulfillmentState !== null && { fulfillmentState: input.fulfillmentState }),
        ...(input.intentName !== undefined && input.intentName !== null && { intentName: input.intentName }),
        ...(input.slotToElicit !== undefined && input.slotToElicit !== null && { slotToElicit: input.slotToElicit }),
        ...(input.slots !== undefined &&
            input.slots !== null && { slots: serializeAws_restJson1StringMap(input.slots, context) }),
    };
};
const serializeAws_restJson1IntentSummaryList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1IntentSummary(entry, context);
    });
};
const serializeAws_restJson1StringMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const deserializeAws_restJson1ActiveContext = (output, context) => {
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
const deserializeAws_restJson1ActiveContextParametersMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const deserializeAws_restJson1ActiveContextsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ActiveContext(entry, context);
    });
};
const deserializeAws_restJson1ActiveContextTimeToLive = (output, context) => {
    return {
        timeToLiveInSeconds: output.timeToLiveInSeconds !== undefined && output.timeToLiveInSeconds !== null
            ? output.timeToLiveInSeconds
            : undefined,
        turnsToLive: output.turnsToLive !== undefined && output.turnsToLive !== null ? output.turnsToLive : undefined,
    };
};
const deserializeAws_restJson1Button = (output, context) => {
    return {
        text: output.text !== undefined && output.text !== null ? output.text : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_restJson1DialogAction = (output, context) => {
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
const deserializeAws_restJson1GenericAttachment = (output, context) => {
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
const deserializeAws_restJson1genericAttachmentList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1GenericAttachment(entry, context);
    });
};
const deserializeAws_restJson1IntentConfidence = (output, context) => {
    return {
        score: output.score !== undefined && output.score !== null ? output.score : undefined,
    };
};
const deserializeAws_restJson1IntentList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PredictedIntent(entry, context);
    });
};
const deserializeAws_restJson1IntentSummary = (output, context) => {
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
const deserializeAws_restJson1IntentSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1IntentSummary(entry, context);
    });
};
const deserializeAws_restJson1listOfButtons = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Button(entry, context);
    });
};
const deserializeAws_restJson1PredictedIntent = (output, context) => {
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
const deserializeAws_restJson1ResponseCard = (output, context) => {
    return {
        contentType: output.contentType !== undefined && output.contentType !== null ? output.contentType : undefined,
        genericAttachments: output.genericAttachments !== undefined && output.genericAttachments !== null
            ? deserializeAws_restJson1genericAttachmentList(output.genericAttachments, context)
            : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
const deserializeAws_restJson1SentimentResponse = (output, context) => {
    return {
        sentimentLabel: output.sentimentLabel !== undefined && output.sentimentLabel !== null ? output.sentimentLabel : undefined,
        sentimentScore: output.sentimentScore !== undefined && output.sentimentScore !== null ? output.sentimentScore : undefined,
    };
};
const deserializeAws_restJson1StringMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const deserializeMetadata = (output) => {
    var _a;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const isSerializableHeaderValue = (value) => value !== undefined &&
    value !== null &&
    value !== "" &&
    (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
    (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        return JSON.parse(encoded);
    }
    return {};
});
/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
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