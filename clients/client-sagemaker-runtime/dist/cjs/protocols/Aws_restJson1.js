"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1InvokeEndpointCommand = exports.serializeAws_restJson1InvokeEndpointCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1InvokeEndpointCommand = async (input, context) => {
    const headers = {
        "content-type": "application/octet-stream",
        ...(isSerializableHeaderValue(input.ContentType) && { "content-type": input.ContentType }),
        ...(isSerializableHeaderValue(input.Accept) && { accept: input.Accept }),
        ...(isSerializableHeaderValue(input.CustomAttributes) && {
            "x-amzn-sagemaker-custom-attributes": input.CustomAttributes,
        }),
        ...(isSerializableHeaderValue(input.TargetModel) && { "x-amzn-sagemaker-target-model": input.TargetModel }),
        ...(isSerializableHeaderValue(input.TargetVariant) && { "x-amzn-sagemaker-target-variant": input.TargetVariant }),
        ...(isSerializableHeaderValue(input.TargetContainerHostname) && {
            "x-amzn-sagemaker-target-container-hostname": input.TargetContainerHostname,
        }),
        ...(isSerializableHeaderValue(input.InferenceId) && { "x-amzn-sagemaker-inference-id": input.InferenceId }),
    };
    let resolvedPath = "/endpoints/{EndpointName}/invocations";
    if (input.EndpointName !== undefined) {
        const labelValue = input.EndpointName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: EndpointName.");
        }
        resolvedPath = resolvedPath.replace("{EndpointName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: EndpointName.");
    }
    let body;
    if (input.Body !== undefined) {
        body = input.Body;
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
exports.serializeAws_restJson1InvokeEndpointCommand = serializeAws_restJson1InvokeEndpointCommand;
const deserializeAws_restJson1InvokeEndpointCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1InvokeEndpointCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Body: undefined,
        ContentType: undefined,
        CustomAttributes: undefined,
        InvokedProductionVariant: undefined,
    };
    if (output.headers["content-type"] !== undefined) {
        contents.ContentType = output.headers["content-type"];
    }
    if (output.headers["x-amzn-invoked-production-variant"] !== undefined) {
        contents.InvokedProductionVariant = output.headers["x-amzn-invoked-production-variant"];
    }
    if (output.headers["x-amzn-sagemaker-custom-attributes"] !== undefined) {
        contents.CustomAttributes = output.headers["x-amzn-sagemaker-custom-attributes"];
    }
    const data = await collectBody(output.body, context);
    contents.Body = data;
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1InvokeEndpointCommand = deserializeAws_restJson1InvokeEndpointCommand;
const deserializeAws_restJson1InvokeEndpointCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailure":
        case "com.amazonaws.sagemakerruntime#InternalFailure":
            response = {
                ...(await deserializeAws_restJson1InternalFailureResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ModelError":
        case "com.amazonaws.sagemakerruntime#ModelError":
            response = {
                ...(await deserializeAws_restJson1ModelErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailable":
        case "com.amazonaws.sagemakerruntime#ServiceUnavailable":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationError":
        case "com.amazonaws.sagemakerruntime#ValidationError":
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
const deserializeAws_restJson1ModelErrorResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ModelError",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        LogStreamArn: undefined,
        Message: undefined,
        OriginalMessage: undefined,
        OriginalStatusCode: undefined,
    };
    const data = parsedOutput.body;
    if (data.LogStreamArn !== undefined && data.LogStreamArn !== null) {
        contents.LogStreamArn = data.LogStreamArn;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.OriginalMessage !== undefined && data.OriginalMessage !== null) {
        contents.OriginalMessage = data.OriginalMessage;
    }
    if (data.OriginalStatusCode !== undefined && data.OriginalStatusCode !== null) {
        contents.OriginalStatusCode = data.OriginalStatusCode;
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