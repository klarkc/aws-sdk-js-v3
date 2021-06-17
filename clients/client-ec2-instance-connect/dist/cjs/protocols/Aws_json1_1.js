"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1SendSSHPublicKeyCommand = exports.deserializeAws_json1_1SendSerialConsoleSSHPublicKeyCommand = exports.serializeAws_json1_1SendSSHPublicKeyCommand = exports.serializeAws_json1_1SendSerialConsoleSSHPublicKeyCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1SendSerialConsoleSSHPublicKeyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEC2InstanceConnectService.SendSerialConsoleSSHPublicKey",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SendSerialConsoleSSHPublicKeyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SendSerialConsoleSSHPublicKeyCommand = serializeAws_json1_1SendSerialConsoleSSHPublicKeyCommand;
const serializeAws_json1_1SendSSHPublicKeyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEC2InstanceConnectService.SendSSHPublicKey",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SendSSHPublicKeyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SendSSHPublicKeyCommand = serializeAws_json1_1SendSSHPublicKeyCommand;
const deserializeAws_json1_1SendSerialConsoleSSHPublicKeyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SendSerialConsoleSSHPublicKeyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SendSerialConsoleSSHPublicKeyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SendSerialConsoleSSHPublicKeyCommand = deserializeAws_json1_1SendSerialConsoleSSHPublicKeyCommand;
const deserializeAws_json1_1SendSerialConsoleSSHPublicKeyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthException":
        case "com.amazonaws.ec2instanceconnect#AuthException":
            response = {
                ...(await deserializeAws_json1_1AuthExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EC2InstanceNotFoundException":
        case "com.amazonaws.ec2instanceconnect#EC2InstanceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EC2InstanceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EC2InstanceTypeInvalidException":
        case "com.amazonaws.ec2instanceconnect#EC2InstanceTypeInvalidException":
            response = {
                ...(await deserializeAws_json1_1EC2InstanceTypeInvalidExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgsException":
        case "com.amazonaws.ec2instanceconnect#InvalidArgsException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SerialConsoleAccessDisabledException":
        case "com.amazonaws.ec2instanceconnect#SerialConsoleAccessDisabledException":
            response = {
                ...(await deserializeAws_json1_1SerialConsoleAccessDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SerialConsoleSessionLimitExceededException":
        case "com.amazonaws.ec2instanceconnect#SerialConsoleSessionLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1SerialConsoleSessionLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SerialConsoleSessionUnavailableException":
        case "com.amazonaws.ec2instanceconnect#SerialConsoleSessionUnavailableException":
            response = {
                ...(await deserializeAws_json1_1SerialConsoleSessionUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.ec2instanceconnect#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ec2instanceconnect#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1SendSSHPublicKeyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SendSSHPublicKeyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SendSSHPublicKeyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SendSSHPublicKeyCommand = deserializeAws_json1_1SendSSHPublicKeyCommand;
const deserializeAws_json1_1SendSSHPublicKeyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthException":
        case "com.amazonaws.ec2instanceconnect#AuthException":
            response = {
                ...(await deserializeAws_json1_1AuthExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EC2InstanceNotFoundException":
        case "com.amazonaws.ec2instanceconnect#EC2InstanceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EC2InstanceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgsException":
        case "com.amazonaws.ec2instanceconnect#InvalidArgsException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.ec2instanceconnect#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ec2instanceconnect#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AuthExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AuthException(body, context);
    const contents = {
        name: "AuthException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1EC2InstanceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1EC2InstanceNotFoundException(body, context);
    const contents = {
        name: "EC2InstanceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1EC2InstanceTypeInvalidExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1EC2InstanceTypeInvalidException(body, context);
    const contents = {
        name: "EC2InstanceTypeInvalidException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidArgsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidArgsException(body, context);
    const contents = {
        name: "InvalidArgsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1SerialConsoleAccessDisabledExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1SerialConsoleAccessDisabledException(body, context);
    const contents = {
        name: "SerialConsoleAccessDisabledException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1SerialConsoleSessionLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1SerialConsoleSessionLimitExceededException(body, context);
    const contents = {
        name: "SerialConsoleSessionLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1SerialConsoleSessionUnavailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1SerialConsoleSessionUnavailableException(body, context);
    const contents = {
        name: "SerialConsoleSessionUnavailableException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ServiceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceException(body, context);
    const contents = {
        name: "ServiceException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ThrottlingException(body, context);
    const contents = {
        name: "ThrottlingException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1SendSerialConsoleSSHPublicKeyRequest = (input, context) => {
    return {
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
        ...(input.SSHPublicKey !== undefined && input.SSHPublicKey !== null && { SSHPublicKey: input.SSHPublicKey }),
        ...(input.SerialPort !== undefined && input.SerialPort !== null && { SerialPort: input.SerialPort }),
    };
};
const serializeAws_json1_1SendSSHPublicKeyRequest = (input, context) => {
    return {
        ...(input.AvailabilityZone !== undefined &&
            input.AvailabilityZone !== null && { AvailabilityZone: input.AvailabilityZone }),
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
        ...(input.InstanceOSUser !== undefined &&
            input.InstanceOSUser !== null && { InstanceOSUser: input.InstanceOSUser }),
        ...(input.SSHPublicKey !== undefined && input.SSHPublicKey !== null && { SSHPublicKey: input.SSHPublicKey }),
    };
};
const deserializeAws_json1_1AuthException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1EC2InstanceNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1EC2InstanceTypeInvalidException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidArgsException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1SendSerialConsoleSSHPublicKeyResponse = (output, context) => {
    return {
        RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
        Success: output.Success !== undefined && output.Success !== null ? output.Success : undefined,
    };
};
const deserializeAws_json1_1SendSSHPublicKeyResponse = (output, context) => {
    return {
        RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
        Success: output.Success !== undefined && output.Success !== null ? output.Success : undefined,
    };
};
const deserializeAws_json1_1SerialConsoleAccessDisabledException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1SerialConsoleSessionLimitExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1SerialConsoleSessionUnavailableException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ServiceException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ThrottlingException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
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
const buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
    const { hostname, protocol = "https", port } = await context.endpoint();
    const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path,
        headers,
    };
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new protocol_http_1.HttpRequest(contents);
};
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
//# sourceMappingURL=Aws_json1_1.js.map