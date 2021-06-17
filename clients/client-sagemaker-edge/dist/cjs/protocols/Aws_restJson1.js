"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1SendHeartbeatCommand = exports.deserializeAws_restJson1GetDeviceRegistrationCommand = exports.serializeAws_restJson1SendHeartbeatCommand = exports.serializeAws_restJson1GetDeviceRegistrationCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_restJson1GetDeviceRegistrationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/GetDeviceRegistration";
    let body;
    body = JSON.stringify({
        ...(input.DeviceFleetName !== undefined &&
            input.DeviceFleetName !== null && { DeviceFleetName: input.DeviceFleetName }),
        ...(input.DeviceName !== undefined && input.DeviceName !== null && { DeviceName: input.DeviceName }),
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
exports.serializeAws_restJson1GetDeviceRegistrationCommand = serializeAws_restJson1GetDeviceRegistrationCommand;
const serializeAws_restJson1SendHeartbeatCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/SendHeartbeat";
    let body;
    body = JSON.stringify({
        ...(input.AgentMetrics !== undefined &&
            input.AgentMetrics !== null && { AgentMetrics: serializeAws_restJson1EdgeMetrics(input.AgentMetrics, context) }),
        ...(input.AgentVersion !== undefined && input.AgentVersion !== null && { AgentVersion: input.AgentVersion }),
        ...(input.DeviceFleetName !== undefined &&
            input.DeviceFleetName !== null && { DeviceFleetName: input.DeviceFleetName }),
        ...(input.DeviceName !== undefined && input.DeviceName !== null && { DeviceName: input.DeviceName }),
        ...(input.Models !== undefined &&
            input.Models !== null && { Models: serializeAws_restJson1Models(input.Models, context) }),
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
exports.serializeAws_restJson1SendHeartbeatCommand = serializeAws_restJson1SendHeartbeatCommand;
const deserializeAws_restJson1GetDeviceRegistrationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetDeviceRegistrationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CacheTTL: undefined,
        DeviceRegistration: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CacheTTL !== undefined && data.CacheTTL !== null) {
        contents.CacheTTL = data.CacheTTL;
    }
    if (data.DeviceRegistration !== undefined && data.DeviceRegistration !== null) {
        contents.DeviceRegistration = data.DeviceRegistration;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDeviceRegistrationCommand = deserializeAws_restJson1GetDeviceRegistrationCommand;
const deserializeAws_restJson1GetDeviceRegistrationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.sagemakeredge#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1SendHeartbeatCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1SendHeartbeatCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1SendHeartbeatCommand = deserializeAws_restJson1SendHeartbeatCommand;
const deserializeAws_restJson1SendHeartbeatCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.sagemakeredge#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1InternalServiceExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServiceException",
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
const serializeAws_restJson1EdgeMetric = (input, context) => {
    return {
        ...(input.Dimension !== undefined && input.Dimension !== null && { Dimension: input.Dimension }),
        ...(input.MetricName !== undefined && input.MetricName !== null && { MetricName: input.MetricName }),
        ...(input.Timestamp !== undefined &&
            input.Timestamp !== null && { Timestamp: Math.round(input.Timestamp.getTime() / 1000) }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_restJson1EdgeMetrics = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1EdgeMetric(entry, context);
    });
};
const serializeAws_restJson1Model = (input, context) => {
    return {
        ...(input.LatestInference !== undefined &&
            input.LatestInference !== null && { LatestInference: Math.round(input.LatestInference.getTime() / 1000) }),
        ...(input.LatestSampleTime !== undefined &&
            input.LatestSampleTime !== null && { LatestSampleTime: Math.round(input.LatestSampleTime.getTime() / 1000) }),
        ...(input.ModelMetrics !== undefined &&
            input.ModelMetrics !== null && { ModelMetrics: serializeAws_restJson1EdgeMetrics(input.ModelMetrics, context) }),
        ...(input.ModelName !== undefined && input.ModelName !== null && { ModelName: input.ModelName }),
        ...(input.ModelVersion !== undefined && input.ModelVersion !== null && { ModelVersion: input.ModelVersion }),
    };
};
const serializeAws_restJson1Models = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Model(entry, context);
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