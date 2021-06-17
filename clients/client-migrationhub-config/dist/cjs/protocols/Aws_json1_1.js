"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1GetHomeRegionCommand = exports.deserializeAws_json1_1DescribeHomeRegionControlsCommand = exports.deserializeAws_json1_1CreateHomeRegionControlCommand = exports.serializeAws_json1_1GetHomeRegionCommand = exports.serializeAws_json1_1DescribeHomeRegionControlsCommand = exports.serializeAws_json1_1CreateHomeRegionControlCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1CreateHomeRegionControlCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSMigrationHubMultiAccountService.CreateHomeRegionControl",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateHomeRegionControlRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateHomeRegionControlCommand = serializeAws_json1_1CreateHomeRegionControlCommand;
const serializeAws_json1_1DescribeHomeRegionControlsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSMigrationHubMultiAccountService.DescribeHomeRegionControls",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeHomeRegionControlsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeHomeRegionControlsCommand = serializeAws_json1_1DescribeHomeRegionControlsCommand;
const serializeAws_json1_1GetHomeRegionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSMigrationHubMultiAccountService.GetHomeRegion",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetHomeRegionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetHomeRegionCommand = serializeAws_json1_1GetHomeRegionCommand;
const deserializeAws_json1_1CreateHomeRegionControlCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateHomeRegionControlCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateHomeRegionControlResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateHomeRegionControlCommand = deserializeAws_json1_1CreateHomeRegionControlCommand;
const deserializeAws_json1_1CreateHomeRegionControlCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.migrationhubconfig#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DryRunOperation":
        case "com.amazonaws.migrationhubconfig#DryRunOperation":
            response = {
                ...(await deserializeAws_json1_1DryRunOperationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.migrationhubconfig#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.migrationhubconfig#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.migrationhubconfig#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.migrationhubconfig#ThrottlingException":
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
const deserializeAws_json1_1DescribeHomeRegionControlsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeHomeRegionControlsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeHomeRegionControlsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeHomeRegionControlsCommand = deserializeAws_json1_1DescribeHomeRegionControlsCommand;
const deserializeAws_json1_1DescribeHomeRegionControlsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.migrationhubconfig#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.migrationhubconfig#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.migrationhubconfig#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.migrationhubconfig#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.migrationhubconfig#ThrottlingException":
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
const deserializeAws_json1_1GetHomeRegionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetHomeRegionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetHomeRegionResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetHomeRegionCommand = deserializeAws_json1_1GetHomeRegionCommand;
const deserializeAws_json1_1GetHomeRegionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.migrationhubconfig#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.migrationhubconfig#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.migrationhubconfig#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.migrationhubconfig#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.migrationhubconfig#ThrottlingException":
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
const deserializeAws_json1_1AccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AccessDeniedException(body, context);
    const contents = {
        name: "AccessDeniedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DryRunOperationResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DryRunOperation(body, context);
    const contents = {
        name: "DryRunOperation",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InternalServerErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServerError(body, context);
    const contents = {
        name: "InternalServerError",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidInputExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidInputException(body, context);
    const contents = {
        name: "InvalidInputException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ServiceUnavailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceUnavailableException(body, context);
    const contents = {
        name: "ServiceUnavailableException",
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
const serializeAws_json1_1CreateHomeRegionControlRequest = (input, context) => {
    return {
        ...(input.DryRun !== undefined && input.DryRun !== null && { DryRun: input.DryRun }),
        ...(input.HomeRegion !== undefined && input.HomeRegion !== null && { HomeRegion: input.HomeRegion }),
        ...(input.Target !== undefined &&
            input.Target !== null && { Target: serializeAws_json1_1Target(input.Target, context) }),
    };
};
const serializeAws_json1_1DescribeHomeRegionControlsRequest = (input, context) => {
    return {
        ...(input.ControlId !== undefined && input.ControlId !== null && { ControlId: input.ControlId }),
        ...(input.HomeRegion !== undefined && input.HomeRegion !== null && { HomeRegion: input.HomeRegion }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.Target !== undefined &&
            input.Target !== null && { Target: serializeAws_json1_1Target(input.Target, context) }),
    };
};
const serializeAws_json1_1GetHomeRegionRequest = (input, context) => {
    return {};
};
const serializeAws_json1_1Target = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const deserializeAws_json1_1AccessDeniedException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1CreateHomeRegionControlResult = (output, context) => {
    return {
        HomeRegionControl: output.HomeRegionControl !== undefined && output.HomeRegionControl !== null
            ? deserializeAws_json1_1HomeRegionControl(output.HomeRegionControl, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeHomeRegionControlsResult = (output, context) => {
    return {
        HomeRegionControls: output.HomeRegionControls !== undefined && output.HomeRegionControls !== null
            ? deserializeAws_json1_1HomeRegionControls(output.HomeRegionControls, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1DryRunOperation = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1GetHomeRegionResult = (output, context) => {
    return {
        HomeRegion: output.HomeRegion !== undefined && output.HomeRegion !== null ? output.HomeRegion : undefined,
    };
};
const deserializeAws_json1_1HomeRegionControl = (output, context) => {
    return {
        ControlId: output.ControlId !== undefined && output.ControlId !== null ? output.ControlId : undefined,
        HomeRegion: output.HomeRegion !== undefined && output.HomeRegion !== null ? output.HomeRegion : undefined,
        RequestedTime: output.RequestedTime !== undefined && output.RequestedTime !== null
            ? new Date(Math.round(output.RequestedTime * 1000))
            : undefined,
        Target: output.Target !== undefined && output.Target !== null
            ? deserializeAws_json1_1Target(output.Target, context)
            : undefined,
    };
};
const deserializeAws_json1_1HomeRegionControls = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1HomeRegionControl(entry, context);
    });
};
const deserializeAws_json1_1InternalServerError = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidInputException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ServiceUnavailableException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1Target = (output, context) => {
    return {
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1ThrottlingException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        RetryAfterSeconds: output.RetryAfterSeconds !== undefined && output.RetryAfterSeconds !== null
            ? output.RetryAfterSeconds
            : undefined,
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