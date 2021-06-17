"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1SendAlexaOfferToMasterCommand = exports.deserializeAws_restJson1GetIceServerConfigCommand = exports.serializeAws_restJson1SendAlexaOfferToMasterCommand = exports.serializeAws_restJson1GetIceServerConfigCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_restJson1GetIceServerConfigCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/get-ice-server-config";
    let body;
    body = JSON.stringify({
        ...(input.ChannelARN !== undefined && input.ChannelARN !== null && { ChannelARN: input.ChannelARN }),
        ...(input.ClientId !== undefined && input.ClientId !== null && { ClientId: input.ClientId }),
        ...(input.Service !== undefined && input.Service !== null && { Service: input.Service }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
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
exports.serializeAws_restJson1GetIceServerConfigCommand = serializeAws_restJson1GetIceServerConfigCommand;
const serializeAws_restJson1SendAlexaOfferToMasterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/send-alexa-offer-to-master";
    let body;
    body = JSON.stringify({
        ...(input.ChannelARN !== undefined && input.ChannelARN !== null && { ChannelARN: input.ChannelARN }),
        ...(input.MessagePayload !== undefined &&
            input.MessagePayload !== null && { MessagePayload: input.MessagePayload }),
        ...(input.SenderClientId !== undefined &&
            input.SenderClientId !== null && { SenderClientId: input.SenderClientId }),
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
exports.serializeAws_restJson1SendAlexaOfferToMasterCommand = serializeAws_restJson1SendAlexaOfferToMasterCommand;
const deserializeAws_restJson1GetIceServerConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetIceServerConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        IceServerList: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.IceServerList !== undefined && data.IceServerList !== null) {
        contents.IceServerList = deserializeAws_restJson1IceServerList(data.IceServerList, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetIceServerConfigCommand = deserializeAws_restJson1GetIceServerConfigCommand;
const deserializeAws_restJson1GetIceServerConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientLimitExceededException":
        case "com.amazonaws.kinesisvideosignaling#ClientLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisvideosignaling#InvalidArgumentException":
            response = {
                ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClientException":
        case "com.amazonaws.kinesisvideosignaling#InvalidClientException":
            response = {
                ...(await deserializeAws_restJson1InvalidClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.kinesisvideosignaling#NotAuthorizedException":
            response = {
                ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisvideosignaling#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SessionExpiredException":
        case "com.amazonaws.kinesisvideosignaling#SessionExpiredException":
            response = {
                ...(await deserializeAws_restJson1SessionExpiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1SendAlexaOfferToMasterCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1SendAlexaOfferToMasterCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Answer: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Answer !== undefined && data.Answer !== null) {
        contents.Answer = data.Answer;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1SendAlexaOfferToMasterCommand = deserializeAws_restJson1SendAlexaOfferToMasterCommand;
const deserializeAws_restJson1SendAlexaOfferToMasterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientLimitExceededException":
        case "com.amazonaws.kinesisvideosignaling#ClientLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisvideosignaling#InvalidArgumentException":
            response = {
                ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.kinesisvideosignaling#NotAuthorizedException":
            response = {
                ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisvideosignaling#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ClientLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ClientLimitExceededException",
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
const deserializeAws_restJson1InvalidArgumentExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidArgumentException",
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
const deserializeAws_restJson1InvalidClientExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidClientException",
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
const deserializeAws_restJson1NotAuthorizedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NotAuthorizedException",
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
const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceNotFoundException",
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
const deserializeAws_restJson1SessionExpiredExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "SessionExpiredException",
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
const deserializeAws_restJson1IceServer = (output, context) => {
    return {
        Password: output.Password !== undefined && output.Password !== null ? output.Password : undefined,
        Ttl: output.Ttl !== undefined && output.Ttl !== null ? output.Ttl : undefined,
        Uris: output.Uris !== undefined && output.Uris !== null
            ? deserializeAws_restJson1Uris(output.Uris, context)
            : undefined,
        Username: output.Username !== undefined && output.Username !== null ? output.Username : undefined,
    };
};
const deserializeAws_restJson1IceServerList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1IceServer(entry, context);
    });
};
const deserializeAws_restJson1Uris = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
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