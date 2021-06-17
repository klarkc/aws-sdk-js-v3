"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1StartAttachmentUploadCommand = exports.deserializeAws_restJson1SendMessageCommand = exports.deserializeAws_restJson1SendEventCommand = exports.deserializeAws_restJson1GetTranscriptCommand = exports.deserializeAws_restJson1GetAttachmentCommand = exports.deserializeAws_restJson1DisconnectParticipantCommand = exports.deserializeAws_restJson1CreateParticipantConnectionCommand = exports.deserializeAws_restJson1CompleteAttachmentUploadCommand = exports.serializeAws_restJson1StartAttachmentUploadCommand = exports.serializeAws_restJson1SendMessageCommand = exports.serializeAws_restJson1SendEventCommand = exports.serializeAws_restJson1GetTranscriptCommand = exports.serializeAws_restJson1GetAttachmentCommand = exports.serializeAws_restJson1DisconnectParticipantCommand = exports.serializeAws_restJson1CreateParticipantConnectionCommand = exports.serializeAws_restJson1CompleteAttachmentUploadCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const uuid_1 = require("uuid");
const serializeAws_restJson1CompleteAttachmentUploadCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.ConnectionToken) && { "x-amz-bearer": input.ConnectionToken }),
    };
    let resolvedPath = "/participant/complete-attachment-upload";
    let body;
    body = JSON.stringify({
        ...(input.AttachmentIds !== undefined &&
            input.AttachmentIds !== null && {
            AttachmentIds: serializeAws_restJson1AttachmentIdList(input.AttachmentIds, context),
        }),
        ClientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
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
exports.serializeAws_restJson1CompleteAttachmentUploadCommand = serializeAws_restJson1CompleteAttachmentUploadCommand;
const serializeAws_restJson1CreateParticipantConnectionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.ParticipantToken) && { "x-amz-bearer": input.ParticipantToken }),
    };
    let resolvedPath = "/participant/connection";
    let body;
    body = JSON.stringify({
        ...(input.Type !== undefined &&
            input.Type !== null && { Type: serializeAws_restJson1ConnectionTypeList(input.Type, context) }),
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
exports.serializeAws_restJson1CreateParticipantConnectionCommand = serializeAws_restJson1CreateParticipantConnectionCommand;
const serializeAws_restJson1DisconnectParticipantCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.ConnectionToken) && { "x-amz-bearer": input.ConnectionToken }),
    };
    let resolvedPath = "/participant/disconnect";
    let body;
    body = JSON.stringify({
        ClientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
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
exports.serializeAws_restJson1DisconnectParticipantCommand = serializeAws_restJson1DisconnectParticipantCommand;
const serializeAws_restJson1GetAttachmentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.ConnectionToken) && { "x-amz-bearer": input.ConnectionToken }),
    };
    let resolvedPath = "/participant/attachment";
    let body;
    body = JSON.stringify({
        ...(input.AttachmentId !== undefined && input.AttachmentId !== null && { AttachmentId: input.AttachmentId }),
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
exports.serializeAws_restJson1GetAttachmentCommand = serializeAws_restJson1GetAttachmentCommand;
const serializeAws_restJson1GetTranscriptCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.ConnectionToken) && { "x-amz-bearer": input.ConnectionToken }),
    };
    let resolvedPath = "/participant/transcript";
    let body;
    body = JSON.stringify({
        ...(input.ContactId !== undefined && input.ContactId !== null && { ContactId: input.ContactId }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ScanDirection !== undefined && input.ScanDirection !== null && { ScanDirection: input.ScanDirection }),
        ...(input.SortOrder !== undefined && input.SortOrder !== null && { SortOrder: input.SortOrder }),
        ...(input.StartPosition !== undefined &&
            input.StartPosition !== null && {
            StartPosition: serializeAws_restJson1StartPosition(input.StartPosition, context),
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
exports.serializeAws_restJson1GetTranscriptCommand = serializeAws_restJson1GetTranscriptCommand;
const serializeAws_restJson1SendEventCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.ConnectionToken) && { "x-amz-bearer": input.ConnectionToken }),
    };
    let resolvedPath = "/participant/event";
    let body;
    body = JSON.stringify({
        ClientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.Content !== undefined && input.Content !== null && { Content: input.Content }),
        ...(input.ContentType !== undefined && input.ContentType !== null && { ContentType: input.ContentType }),
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
exports.serializeAws_restJson1SendEventCommand = serializeAws_restJson1SendEventCommand;
const serializeAws_restJson1SendMessageCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.ConnectionToken) && { "x-amz-bearer": input.ConnectionToken }),
    };
    let resolvedPath = "/participant/message";
    let body;
    body = JSON.stringify({
        ClientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.Content !== undefined && input.Content !== null && { Content: input.Content }),
        ...(input.ContentType !== undefined && input.ContentType !== null && { ContentType: input.ContentType }),
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
exports.serializeAws_restJson1SendMessageCommand = serializeAws_restJson1SendMessageCommand;
const serializeAws_restJson1StartAttachmentUploadCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.ConnectionToken) && { "x-amz-bearer": input.ConnectionToken }),
    };
    let resolvedPath = "/participant/start-attachment-upload";
    let body;
    body = JSON.stringify({
        ...(input.AttachmentName !== undefined &&
            input.AttachmentName !== null && { AttachmentName: input.AttachmentName }),
        ...(input.AttachmentSizeInBytes !== undefined &&
            input.AttachmentSizeInBytes !== null && { AttachmentSizeInBytes: input.AttachmentSizeInBytes }),
        ClientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.ContentType !== undefined && input.ContentType !== null && { ContentType: input.ContentType }),
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
exports.serializeAws_restJson1StartAttachmentUploadCommand = serializeAws_restJson1StartAttachmentUploadCommand;
const deserializeAws_restJson1CompleteAttachmentUploadCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CompleteAttachmentUploadCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CompleteAttachmentUploadCommand = deserializeAws_restJson1CompleteAttachmentUploadCommand;
const deserializeAws_restJson1CompleteAttachmentUploadCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.connectparticipant#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.connectparticipant#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.connectparticipant#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.connectparticipant#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connectparticipant#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.connectparticipant#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateParticipantConnectionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateParticipantConnectionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ConnectionCredentials: undefined,
        Websocket: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ConnectionCredentials !== undefined && data.ConnectionCredentials !== null) {
        contents.ConnectionCredentials = deserializeAws_restJson1ConnectionCredentials(data.ConnectionCredentials, context);
    }
    if (data.Websocket !== undefined && data.Websocket !== null) {
        contents.Websocket = deserializeAws_restJson1Websocket(data.Websocket, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateParticipantConnectionCommand = deserializeAws_restJson1CreateParticipantConnectionCommand;
const deserializeAws_restJson1CreateParticipantConnectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.connectparticipant#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.connectparticipant#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connectparticipant#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.connectparticipant#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DisconnectParticipantCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DisconnectParticipantCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DisconnectParticipantCommand = deserializeAws_restJson1DisconnectParticipantCommand;
const deserializeAws_restJson1DisconnectParticipantCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.connectparticipant#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.connectparticipant#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connectparticipant#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.connectparticipant#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetAttachmentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetAttachmentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Url: undefined,
        UrlExpiry: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Url !== undefined && data.Url !== null) {
        contents.Url = data.Url;
    }
    if (data.UrlExpiry !== undefined && data.UrlExpiry !== null) {
        contents.UrlExpiry = data.UrlExpiry;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetAttachmentCommand = deserializeAws_restJson1GetAttachmentCommand;
const deserializeAws_restJson1GetAttachmentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.connectparticipant#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.connectparticipant#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connectparticipant#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.connectparticipant#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetTranscriptCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetTranscriptCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        InitialContactId: undefined,
        NextToken: undefined,
        Transcript: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.InitialContactId !== undefined && data.InitialContactId !== null) {
        contents.InitialContactId = data.InitialContactId;
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Transcript !== undefined && data.Transcript !== null) {
        contents.Transcript = deserializeAws_restJson1Transcript(data.Transcript, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetTranscriptCommand = deserializeAws_restJson1GetTranscriptCommand;
const deserializeAws_restJson1GetTranscriptCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.connectparticipant#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.connectparticipant#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connectparticipant#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.connectparticipant#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1SendEventCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1SendEventCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AbsoluteTime: undefined,
        Id: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AbsoluteTime !== undefined && data.AbsoluteTime !== null) {
        contents.AbsoluteTime = data.AbsoluteTime;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1SendEventCommand = deserializeAws_restJson1SendEventCommand;
const deserializeAws_restJson1SendEventCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.connectparticipant#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.connectparticipant#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connectparticipant#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.connectparticipant#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1SendMessageCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1SendMessageCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AbsoluteTime: undefined,
        Id: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AbsoluteTime !== undefined && data.AbsoluteTime !== null) {
        contents.AbsoluteTime = data.AbsoluteTime;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1SendMessageCommand = deserializeAws_restJson1SendMessageCommand;
const deserializeAws_restJson1SendMessageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.connectparticipant#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.connectparticipant#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connectparticipant#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.connectparticipant#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1StartAttachmentUploadCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1StartAttachmentUploadCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AttachmentId: undefined,
        UploadMetadata: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AttachmentId !== undefined && data.AttachmentId !== null) {
        contents.AttachmentId = data.AttachmentId;
    }
    if (data.UploadMetadata !== undefined && data.UploadMetadata !== null) {
        contents.UploadMetadata = deserializeAws_restJson1UploadMetadata(data.UploadMetadata, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StartAttachmentUploadCommand = deserializeAws_restJson1StartAttachmentUploadCommand;
const deserializeAws_restJson1StartAttachmentUploadCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.connectparticipant#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.connectparticipant#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.connectparticipant#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connectparticipant#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.connectparticipant#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "AccessDeniedException",
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
const deserializeAws_restJson1ConflictExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ConflictException",
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
const deserializeAws_restJson1InternalServerExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServerException",
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
const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ServiceQuotaExceededException",
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
const deserializeAws_restJson1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ThrottlingException",
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
const deserializeAws_restJson1ValidationExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ValidationException",
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
const serializeAws_restJson1AttachmentIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1ConnectionTypeList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1StartPosition = (input, context) => {
    return {
        ...(input.AbsoluteTime !== undefined && input.AbsoluteTime !== null && { AbsoluteTime: input.AbsoluteTime }),
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.MostRecent !== undefined && input.MostRecent !== null && { MostRecent: input.MostRecent }),
    };
};
const deserializeAws_restJson1AttachmentItem = (output, context) => {
    return {
        AttachmentId: output.AttachmentId !== undefined && output.AttachmentId !== null ? output.AttachmentId : undefined,
        AttachmentName: output.AttachmentName !== undefined && output.AttachmentName !== null ? output.AttachmentName : undefined,
        ContentType: output.ContentType !== undefined && output.ContentType !== null ? output.ContentType : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_restJson1Attachments = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AttachmentItem(entry, context);
    });
};
const deserializeAws_restJson1ConnectionCredentials = (output, context) => {
    return {
        ConnectionToken: output.ConnectionToken !== undefined && output.ConnectionToken !== null ? output.ConnectionToken : undefined,
        Expiry: output.Expiry !== undefined && output.Expiry !== null ? output.Expiry : undefined,
    };
};
const deserializeAws_restJson1Item = (output, context) => {
    return {
        AbsoluteTime: output.AbsoluteTime !== undefined && output.AbsoluteTime !== null ? output.AbsoluteTime : undefined,
        Attachments: output.Attachments !== undefined && output.Attachments !== null
            ? deserializeAws_restJson1Attachments(output.Attachments, context)
            : undefined,
        Content: output.Content !== undefined && output.Content !== null ? output.Content : undefined,
        ContentType: output.ContentType !== undefined && output.ContentType !== null ? output.ContentType : undefined,
        DisplayName: output.DisplayName !== undefined && output.DisplayName !== null ? output.DisplayName : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        ParticipantId: output.ParticipantId !== undefined && output.ParticipantId !== null ? output.ParticipantId : undefined,
        ParticipantRole: output.ParticipantRole !== undefined && output.ParticipantRole !== null ? output.ParticipantRole : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1Transcript = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Item(entry, context);
    });
};
const deserializeAws_restJson1UploadMetadata = (output, context) => {
    return {
        HeadersToInclude: output.HeadersToInclude !== undefined && output.HeadersToInclude !== null
            ? deserializeAws_restJson1UploadMetadataSignedHeaders(output.HeadersToInclude, context)
            : undefined,
        Url: output.Url !== undefined && output.Url !== null ? output.Url : undefined,
        UrlExpiry: output.UrlExpiry !== undefined && output.UrlExpiry !== null ? output.UrlExpiry : undefined,
    };
};
const deserializeAws_restJson1UploadMetadataSignedHeaders = (output, context) => {
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
const deserializeAws_restJson1Websocket = (output, context) => {
    return {
        ConnectionExpiry: output.ConnectionExpiry !== undefined && output.ConnectionExpiry !== null ? output.ConnectionExpiry : undefined,
        Url: output.Url !== undefined && output.Url !== null ? output.Url : undefined,
    };
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