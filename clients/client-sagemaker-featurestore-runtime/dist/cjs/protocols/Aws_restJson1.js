"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1PutRecordCommand = exports.deserializeAws_restJson1GetRecordCommand = exports.deserializeAws_restJson1DeleteRecordCommand = exports.serializeAws_restJson1PutRecordCommand = exports.serializeAws_restJson1GetRecordCommand = exports.serializeAws_restJson1DeleteRecordCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1DeleteRecordCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/FeatureGroup/{FeatureGroupName}";
    if (input.FeatureGroupName !== undefined) {
        const labelValue = input.FeatureGroupName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FeatureGroupName.");
        }
        resolvedPath = resolvedPath.replace("{FeatureGroupName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FeatureGroupName.");
    }
    const query = {
        ...(input.RecordIdentifierValueAsString !== undefined && {
            RecordIdentifierValueAsString: input.RecordIdentifierValueAsString,
        }),
        ...(input.EventTime !== undefined && { EventTime: input.EventTime }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1DeleteRecordCommand = serializeAws_restJson1DeleteRecordCommand;
const serializeAws_restJson1GetRecordCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/FeatureGroup/{FeatureGroupName}";
    if (input.FeatureGroupName !== undefined) {
        const labelValue = input.FeatureGroupName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FeatureGroupName.");
        }
        resolvedPath = resolvedPath.replace("{FeatureGroupName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FeatureGroupName.");
    }
    const query = {
        ...(input.RecordIdentifierValueAsString !== undefined && {
            RecordIdentifierValueAsString: input.RecordIdentifierValueAsString,
        }),
        ...(input.FeatureNames !== undefined && { FeatureName: (input.FeatureNames || []).map((_entry) => _entry) }),
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
exports.serializeAws_restJson1GetRecordCommand = serializeAws_restJson1GetRecordCommand;
const serializeAws_restJson1PutRecordCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/FeatureGroup/{FeatureGroupName}";
    if (input.FeatureGroupName !== undefined) {
        const labelValue = input.FeatureGroupName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FeatureGroupName.");
        }
        resolvedPath = resolvedPath.replace("{FeatureGroupName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FeatureGroupName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Record !== undefined &&
            input.Record !== null && { Record: serializeAws_restJson1Record(input.Record, context) }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1PutRecordCommand = serializeAws_restJson1PutRecordCommand;
const deserializeAws_restJson1DeleteRecordCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteRecordCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteRecordCommand = deserializeAws_restJson1DeleteRecordCommand;
const deserializeAws_restJson1DeleteRecordCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessForbidden":
        case "com.amazonaws.sagemakerfeaturestoreruntime#AccessForbidden":
            response = {
                ...(await deserializeAws_restJson1AccessForbiddenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailure":
        case "com.amazonaws.sagemakerfeaturestoreruntime#InternalFailure":
            response = {
                ...(await deserializeAws_restJson1InternalFailureResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailable":
        case "com.amazonaws.sagemakerfeaturestoreruntime#ServiceUnavailable":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationError":
        case "com.amazonaws.sagemakerfeaturestoreruntime#ValidationError":
            response = {
                ...(await deserializeAws_restJson1ValidationErrorResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetRecordCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetRecordCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Record: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Record !== undefined && data.Record !== null) {
        contents.Record = deserializeAws_restJson1Record(data.Record, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetRecordCommand = deserializeAws_restJson1GetRecordCommand;
const deserializeAws_restJson1GetRecordCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessForbidden":
        case "com.amazonaws.sagemakerfeaturestoreruntime#AccessForbidden":
            response = {
                ...(await deserializeAws_restJson1AccessForbiddenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailure":
        case "com.amazonaws.sagemakerfeaturestoreruntime#InternalFailure":
            response = {
                ...(await deserializeAws_restJson1InternalFailureResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFound":
        case "com.amazonaws.sagemakerfeaturestoreruntime#ResourceNotFound":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailable":
        case "com.amazonaws.sagemakerfeaturestoreruntime#ServiceUnavailable":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationError":
        case "com.amazonaws.sagemakerfeaturestoreruntime#ValidationError":
            response = {
                ...(await deserializeAws_restJson1ValidationErrorResponse(parsedOutput, context)),
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
const deserializeAws_restJson1PutRecordCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutRecordCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutRecordCommand = deserializeAws_restJson1PutRecordCommand;
const deserializeAws_restJson1PutRecordCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessForbidden":
        case "com.amazonaws.sagemakerfeaturestoreruntime#AccessForbidden":
            response = {
                ...(await deserializeAws_restJson1AccessForbiddenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailure":
        case "com.amazonaws.sagemakerfeaturestoreruntime#InternalFailure":
            response = {
                ...(await deserializeAws_restJson1InternalFailureResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailable":
        case "com.amazonaws.sagemakerfeaturestoreruntime#ServiceUnavailable":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationError":
        case "com.amazonaws.sagemakerfeaturestoreruntime#ValidationError":
            response = {
                ...(await deserializeAws_restJson1ValidationErrorResponse(parsedOutput, context)),
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
const deserializeAws_restJson1AccessForbiddenResponse = async (parsedOutput, context) => {
    const contents = {
        name: "AccessForbidden",
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
const deserializeAws_restJson1InternalFailureResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalFailure",
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
const deserializeAws_restJson1ResourceNotFoundResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceNotFound",
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
const deserializeAws_restJson1ServiceUnavailableResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ServiceUnavailable",
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
const deserializeAws_restJson1ValidationErrorResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ValidationError",
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
const serializeAws_restJson1FeatureValue = (input, context) => {
    return {
        ...(input.FeatureName !== undefined && input.FeatureName !== null && { FeatureName: input.FeatureName }),
        ...(input.ValueAsString !== undefined && input.ValueAsString !== null && { ValueAsString: input.ValueAsString }),
    };
};
const serializeAws_restJson1Record = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1FeatureValue(entry, context);
    });
};
const deserializeAws_restJson1FeatureValue = (output, context) => {
    return {
        FeatureName: output.FeatureName !== undefined && output.FeatureName !== null ? output.FeatureName : undefined,
        ValueAsString: output.ValueAsString !== undefined && output.ValueAsString !== null ? output.ValueAsString : undefined,
    };
};
const deserializeAws_restJson1Record = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1FeatureValue(entry, context);
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