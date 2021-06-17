"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1StopHumanLoopCommand = exports.deserializeAws_restJson1StartHumanLoopCommand = exports.deserializeAws_restJson1ListHumanLoopsCommand = exports.deserializeAws_restJson1DescribeHumanLoopCommand = exports.deserializeAws_restJson1DeleteHumanLoopCommand = exports.serializeAws_restJson1StopHumanLoopCommand = exports.serializeAws_restJson1StartHumanLoopCommand = exports.serializeAws_restJson1ListHumanLoopsCommand = exports.serializeAws_restJson1DescribeHumanLoopCommand = exports.serializeAws_restJson1DeleteHumanLoopCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1DeleteHumanLoopCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/human-loops/{HumanLoopName}";
    if (input.HumanLoopName !== undefined) {
        const labelValue = input.HumanLoopName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: HumanLoopName.");
        }
        resolvedPath = resolvedPath.replace("{HumanLoopName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: HumanLoopName.");
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
exports.serializeAws_restJson1DeleteHumanLoopCommand = serializeAws_restJson1DeleteHumanLoopCommand;
const serializeAws_restJson1DescribeHumanLoopCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/human-loops/{HumanLoopName}";
    if (input.HumanLoopName !== undefined) {
        const labelValue = input.HumanLoopName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: HumanLoopName.");
        }
        resolvedPath = resolvedPath.replace("{HumanLoopName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: HumanLoopName.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeHumanLoopCommand = serializeAws_restJson1DescribeHumanLoopCommand;
const serializeAws_restJson1ListHumanLoopsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/human-loops";
    const query = {
        ...(input.CreationTimeAfter !== undefined && {
            CreationTimeAfter: (input.CreationTimeAfter.toISOString().split(".")[0] + "Z").toString(),
        }),
        ...(input.CreationTimeBefore !== undefined && {
            CreationTimeBefore: (input.CreationTimeBefore.toISOString().split(".")[0] + "Z").toString(),
        }),
        ...(input.FlowDefinitionArn !== undefined && { FlowDefinitionArn: input.FlowDefinitionArn }),
        ...(input.SortOrder !== undefined && { SortOrder: input.SortOrder }),
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
        ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
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
exports.serializeAws_restJson1ListHumanLoopsCommand = serializeAws_restJson1ListHumanLoopsCommand;
const serializeAws_restJson1StartHumanLoopCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/human-loops";
    let body;
    body = JSON.stringify({
        ...(input.DataAttributes !== undefined &&
            input.DataAttributes !== null && {
            DataAttributes: serializeAws_restJson1HumanLoopDataAttributes(input.DataAttributes, context),
        }),
        ...(input.FlowDefinitionArn !== undefined &&
            input.FlowDefinitionArn !== null && { FlowDefinitionArn: input.FlowDefinitionArn }),
        ...(input.HumanLoopInput !== undefined &&
            input.HumanLoopInput !== null && {
            HumanLoopInput: serializeAws_restJson1HumanLoopInput(input.HumanLoopInput, context),
        }),
        ...(input.HumanLoopName !== undefined && input.HumanLoopName !== null && { HumanLoopName: input.HumanLoopName }),
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
exports.serializeAws_restJson1StartHumanLoopCommand = serializeAws_restJson1StartHumanLoopCommand;
const serializeAws_restJson1StopHumanLoopCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/human-loops/stop";
    let body;
    body = JSON.stringify({
        ...(input.HumanLoopName !== undefined && input.HumanLoopName !== null && { HumanLoopName: input.HumanLoopName }),
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
exports.serializeAws_restJson1StopHumanLoopCommand = serializeAws_restJson1StopHumanLoopCommand;
const deserializeAws_restJson1DeleteHumanLoopCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteHumanLoopCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteHumanLoopCommand = deserializeAws_restJson1DeleteHumanLoopCommand;
const deserializeAws_restJson1DeleteHumanLoopCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.sagemakera2iruntime#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.sagemakera2iruntime#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.sagemakera2iruntime#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.sagemakera2iruntime#ValidationException":
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
const deserializeAws_restJson1DescribeHumanLoopCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeHumanLoopCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CreationTime: undefined,
        FailureCode: undefined,
        FailureReason: undefined,
        FlowDefinitionArn: undefined,
        HumanLoopArn: undefined,
        HumanLoopName: undefined,
        HumanLoopOutput: undefined,
        HumanLoopStatus: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CreationTime !== undefined && data.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(data.CreationTime * 1000));
    }
    if (data.FailureCode !== undefined && data.FailureCode !== null) {
        contents.FailureCode = data.FailureCode;
    }
    if (data.FailureReason !== undefined && data.FailureReason !== null) {
        contents.FailureReason = data.FailureReason;
    }
    if (data.FlowDefinitionArn !== undefined && data.FlowDefinitionArn !== null) {
        contents.FlowDefinitionArn = data.FlowDefinitionArn;
    }
    if (data.HumanLoopArn !== undefined && data.HumanLoopArn !== null) {
        contents.HumanLoopArn = data.HumanLoopArn;
    }
    if (data.HumanLoopName !== undefined && data.HumanLoopName !== null) {
        contents.HumanLoopName = data.HumanLoopName;
    }
    if (data.HumanLoopOutput !== undefined && data.HumanLoopOutput !== null) {
        contents.HumanLoopOutput = deserializeAws_restJson1HumanLoopOutput(data.HumanLoopOutput, context);
    }
    if (data.HumanLoopStatus !== undefined && data.HumanLoopStatus !== null) {
        contents.HumanLoopStatus = data.HumanLoopStatus;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeHumanLoopCommand = deserializeAws_restJson1DescribeHumanLoopCommand;
const deserializeAws_restJson1DescribeHumanLoopCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.sagemakera2iruntime#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.sagemakera2iruntime#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.sagemakera2iruntime#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.sagemakera2iruntime#ValidationException":
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
const deserializeAws_restJson1ListHumanLoopsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListHumanLoopsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        HumanLoopSummaries: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.HumanLoopSummaries !== undefined && data.HumanLoopSummaries !== null) {
        contents.HumanLoopSummaries = deserializeAws_restJson1HumanLoopSummaries(data.HumanLoopSummaries, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListHumanLoopsCommand = deserializeAws_restJson1ListHumanLoopsCommand;
const deserializeAws_restJson1ListHumanLoopsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.sagemakera2iruntime#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.sagemakera2iruntime#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.sagemakera2iruntime#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.sagemakera2iruntime#ValidationException":
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
const deserializeAws_restJson1StartHumanLoopCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1StartHumanLoopCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        HumanLoopArn: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.HumanLoopArn !== undefined && data.HumanLoopArn !== null) {
        contents.HumanLoopArn = data.HumanLoopArn;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StartHumanLoopCommand = deserializeAws_restJson1StartHumanLoopCommand;
const deserializeAws_restJson1StartHumanLoopCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.sagemakera2iruntime#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.sagemakera2iruntime#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.sagemakera2iruntime#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.sagemakera2iruntime#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.sagemakera2iruntime#ValidationException":
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
const deserializeAws_restJson1StopHumanLoopCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1StopHumanLoopCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StopHumanLoopCommand = deserializeAws_restJson1StopHumanLoopCommand;
const deserializeAws_restJson1StopHumanLoopCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.sagemakera2iruntime#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.sagemakera2iruntime#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.sagemakera2iruntime#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.sagemakera2iruntime#ValidationException":
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
const serializeAws_restJson1ContentClassifiers = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1HumanLoopDataAttributes = (input, context) => {
    return {
        ...(input.ContentClassifiers !== undefined &&
            input.ContentClassifiers !== null && {
            ContentClassifiers: serializeAws_restJson1ContentClassifiers(input.ContentClassifiers, context),
        }),
    };
};
const serializeAws_restJson1HumanLoopInput = (input, context) => {
    return {
        ...(input.InputContent !== undefined && input.InputContent !== null && { InputContent: input.InputContent }),
    };
};
const deserializeAws_restJson1HumanLoopOutput = (output, context) => {
    return {
        OutputS3Uri: output.OutputS3Uri !== undefined && output.OutputS3Uri !== null ? output.OutputS3Uri : undefined,
    };
};
const deserializeAws_restJson1HumanLoopSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1HumanLoopSummary(entry, context);
    });
};
const deserializeAws_restJson1HumanLoopSummary = (output, context) => {
    return {
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        FailureReason: output.FailureReason !== undefined && output.FailureReason !== null ? output.FailureReason : undefined,
        FlowDefinitionArn: output.FlowDefinitionArn !== undefined && output.FlowDefinitionArn !== null
            ? output.FlowDefinitionArn
            : undefined,
        HumanLoopName: output.HumanLoopName !== undefined && output.HumanLoopName !== null ? output.HumanLoopName : undefined,
        HumanLoopStatus: output.HumanLoopStatus !== undefined && output.HumanLoopStatus !== null ? output.HumanLoopStatus : undefined,
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