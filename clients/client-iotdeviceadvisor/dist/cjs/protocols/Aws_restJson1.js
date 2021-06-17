"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1UpdateSuiteDefinitionCommand = exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1StopSuiteRunCommand = exports.deserializeAws_restJson1StartSuiteRunCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1ListSuiteRunsCommand = exports.deserializeAws_restJson1ListSuiteDefinitionsCommand = exports.deserializeAws_restJson1GetSuiteRunReportCommand = exports.deserializeAws_restJson1GetSuiteRunCommand = exports.deserializeAws_restJson1GetSuiteDefinitionCommand = exports.deserializeAws_restJson1DeleteSuiteDefinitionCommand = exports.deserializeAws_restJson1CreateSuiteDefinitionCommand = exports.serializeAws_restJson1UpdateSuiteDefinitionCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1StopSuiteRunCommand = exports.serializeAws_restJson1StartSuiteRunCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1ListSuiteRunsCommand = exports.serializeAws_restJson1ListSuiteDefinitionsCommand = exports.serializeAws_restJson1GetSuiteRunReportCommand = exports.serializeAws_restJson1GetSuiteRunCommand = exports.serializeAws_restJson1GetSuiteDefinitionCommand = exports.serializeAws_restJson1DeleteSuiteDefinitionCommand = exports.serializeAws_restJson1CreateSuiteDefinitionCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1CreateSuiteDefinitionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/suiteDefinitions";
    let body;
    body = JSON.stringify({
        ...(input.suiteDefinitionConfiguration !== undefined &&
            input.suiteDefinitionConfiguration !== null && {
            suiteDefinitionConfiguration: serializeAws_restJson1SuiteDefinitionConfiguration(input.suiteDefinitionConfiguration, context),
        }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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
exports.serializeAws_restJson1CreateSuiteDefinitionCommand = serializeAws_restJson1CreateSuiteDefinitionCommand;
const serializeAws_restJson1DeleteSuiteDefinitionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/suiteDefinitions/{suiteDefinitionId}";
    if (input.suiteDefinitionId !== undefined) {
        const labelValue = input.suiteDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: suiteDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{suiteDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: suiteDefinitionId.");
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
exports.serializeAws_restJson1DeleteSuiteDefinitionCommand = serializeAws_restJson1DeleteSuiteDefinitionCommand;
const serializeAws_restJson1GetSuiteDefinitionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/suiteDefinitions/{suiteDefinitionId}";
    if (input.suiteDefinitionId !== undefined) {
        const labelValue = input.suiteDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: suiteDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{suiteDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: suiteDefinitionId.");
    }
    const query = {
        ...(input.suiteDefinitionVersion !== undefined && { suiteDefinitionVersion: input.suiteDefinitionVersion }),
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
exports.serializeAws_restJson1GetSuiteDefinitionCommand = serializeAws_restJson1GetSuiteDefinitionCommand;
const serializeAws_restJson1GetSuiteRunCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/suiteDefinitions/{suiteDefinitionId}/suiteRuns/{suiteRunId}";
    if (input.suiteDefinitionId !== undefined) {
        const labelValue = input.suiteDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: suiteDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{suiteDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: suiteDefinitionId.");
    }
    if (input.suiteRunId !== undefined) {
        const labelValue = input.suiteRunId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: suiteRunId.");
        }
        resolvedPath = resolvedPath.replace("{suiteRunId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: suiteRunId.");
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
exports.serializeAws_restJson1GetSuiteRunCommand = serializeAws_restJson1GetSuiteRunCommand;
const serializeAws_restJson1GetSuiteRunReportCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/suiteDefinitions/{suiteDefinitionId}/suiteRuns/{suiteRunId}/report";
    if (input.suiteDefinitionId !== undefined) {
        const labelValue = input.suiteDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: suiteDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{suiteDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: suiteDefinitionId.");
    }
    if (input.suiteRunId !== undefined) {
        const labelValue = input.suiteRunId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: suiteRunId.");
        }
        resolvedPath = resolvedPath.replace("{suiteRunId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: suiteRunId.");
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
exports.serializeAws_restJson1GetSuiteRunReportCommand = serializeAws_restJson1GetSuiteRunReportCommand;
const serializeAws_restJson1ListSuiteDefinitionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/suiteDefinitions";
    const query = {
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
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
exports.serializeAws_restJson1ListSuiteDefinitionsCommand = serializeAws_restJson1ListSuiteDefinitionsCommand;
const serializeAws_restJson1ListSuiteRunsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/suiteRuns";
    const query = {
        ...(input.suiteDefinitionId !== undefined && { suiteDefinitionId: input.suiteDefinitionId }),
        ...(input.suiteDefinitionVersion !== undefined && { suiteDefinitionVersion: input.suiteDefinitionVersion }),
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
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
exports.serializeAws_restJson1ListSuiteRunsCommand = serializeAws_restJson1ListSuiteRunsCommand;
const serializeAws_restJson1ListTagsForResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/tags/{resourceArn}";
    if (input.resourceArn !== undefined) {
        const labelValue = input.resourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: resourceArn.");
        }
        resolvedPath = resolvedPath.replace("{resourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: resourceArn.");
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
exports.serializeAws_restJson1ListTagsForResourceCommand = serializeAws_restJson1ListTagsForResourceCommand;
const serializeAws_restJson1StartSuiteRunCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/suiteDefinitions/{suiteDefinitionId}/suiteRuns";
    if (input.suiteDefinitionId !== undefined) {
        const labelValue = input.suiteDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: suiteDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{suiteDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: suiteDefinitionId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.suiteDefinitionVersion !== undefined &&
            input.suiteDefinitionVersion !== null && { suiteDefinitionVersion: input.suiteDefinitionVersion }),
        ...(input.suiteRunConfiguration !== undefined &&
            input.suiteRunConfiguration !== null && {
            suiteRunConfiguration: serializeAws_restJson1SuiteRunConfiguration(input.suiteRunConfiguration, context),
        }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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
exports.serializeAws_restJson1StartSuiteRunCommand = serializeAws_restJson1StartSuiteRunCommand;
const serializeAws_restJson1StopSuiteRunCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/suiteDefinitions/{suiteDefinitionId}/suiteRuns/{suiteRunId}/stop";
    if (input.suiteDefinitionId !== undefined) {
        const labelValue = input.suiteDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: suiteDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{suiteDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: suiteDefinitionId.");
    }
    if (input.suiteRunId !== undefined) {
        const labelValue = input.suiteRunId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: suiteRunId.");
        }
        resolvedPath = resolvedPath.replace("{suiteRunId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: suiteRunId.");
    }
    let body;
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
exports.serializeAws_restJson1StopSuiteRunCommand = serializeAws_restJson1StopSuiteRunCommand;
const serializeAws_restJson1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/tags/{resourceArn}";
    if (input.resourceArn !== undefined) {
        const labelValue = input.resourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: resourceArn.");
        }
        resolvedPath = resolvedPath.replace("{resourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: resourceArn.");
    }
    let body;
    body = JSON.stringify({
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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
exports.serializeAws_restJson1TagResourceCommand = serializeAws_restJson1TagResourceCommand;
const serializeAws_restJson1UntagResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/tags/{resourceArn}";
    if (input.resourceArn !== undefined) {
        const labelValue = input.resourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: resourceArn.");
        }
        resolvedPath = resolvedPath.replace("{resourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: resourceArn.");
    }
    const query = {
        ...(input.tagKeys !== undefined && { tagKeys: (input.tagKeys || []).map((_entry) => _entry) }),
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
exports.serializeAws_restJson1UntagResourceCommand = serializeAws_restJson1UntagResourceCommand;
const serializeAws_restJson1UpdateSuiteDefinitionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/suiteDefinitions/{suiteDefinitionId}";
    if (input.suiteDefinitionId !== undefined) {
        const labelValue = input.suiteDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: suiteDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{suiteDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: suiteDefinitionId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.suiteDefinitionConfiguration !== undefined &&
            input.suiteDefinitionConfiguration !== null && {
            suiteDefinitionConfiguration: serializeAws_restJson1SuiteDefinitionConfiguration(input.suiteDefinitionConfiguration, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PATCH",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateSuiteDefinitionCommand = serializeAws_restJson1UpdateSuiteDefinitionCommand;
const deserializeAws_restJson1CreateSuiteDefinitionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateSuiteDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        createdAt: undefined,
        suiteDefinitionArn: undefined,
        suiteDefinitionId: undefined,
        suiteDefinitionName: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.createdAt !== undefined && data.createdAt !== null) {
        contents.createdAt = new Date(Math.round(data.createdAt * 1000));
    }
    if (data.suiteDefinitionArn !== undefined && data.suiteDefinitionArn !== null) {
        contents.suiteDefinitionArn = data.suiteDefinitionArn;
    }
    if (data.suiteDefinitionId !== undefined && data.suiteDefinitionId !== null) {
        contents.suiteDefinitionId = data.suiteDefinitionId;
    }
    if (data.suiteDefinitionName !== undefined && data.suiteDefinitionName !== null) {
        contents.suiteDefinitionName = data.suiteDefinitionName;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateSuiteDefinitionCommand = deserializeAws_restJson1CreateSuiteDefinitionCommand;
const deserializeAws_restJson1CreateSuiteDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.iotdeviceadvisor#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotdeviceadvisor#ValidationException":
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
const deserializeAws_restJson1DeleteSuiteDefinitionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteSuiteDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteSuiteDefinitionCommand = deserializeAws_restJson1DeleteSuiteDefinitionCommand;
const deserializeAws_restJson1DeleteSuiteDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.iotdeviceadvisor#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotdeviceadvisor#ValidationException":
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
const deserializeAws_restJson1GetSuiteDefinitionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetSuiteDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        createdAt: undefined,
        lastModifiedAt: undefined,
        latestVersion: undefined,
        suiteDefinitionArn: undefined,
        suiteDefinitionConfiguration: undefined,
        suiteDefinitionId: undefined,
        suiteDefinitionVersion: undefined,
        tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.createdAt !== undefined && data.createdAt !== null) {
        contents.createdAt = new Date(Math.round(data.createdAt * 1000));
    }
    if (data.lastModifiedAt !== undefined && data.lastModifiedAt !== null) {
        contents.lastModifiedAt = new Date(Math.round(data.lastModifiedAt * 1000));
    }
    if (data.latestVersion !== undefined && data.latestVersion !== null) {
        contents.latestVersion = data.latestVersion;
    }
    if (data.suiteDefinitionArn !== undefined && data.suiteDefinitionArn !== null) {
        contents.suiteDefinitionArn = data.suiteDefinitionArn;
    }
    if (data.suiteDefinitionConfiguration !== undefined && data.suiteDefinitionConfiguration !== null) {
        contents.suiteDefinitionConfiguration = deserializeAws_restJson1SuiteDefinitionConfiguration(data.suiteDefinitionConfiguration, context);
    }
    if (data.suiteDefinitionId !== undefined && data.suiteDefinitionId !== null) {
        contents.suiteDefinitionId = data.suiteDefinitionId;
    }
    if (data.suiteDefinitionVersion !== undefined && data.suiteDefinitionVersion !== null) {
        contents.suiteDefinitionVersion = data.suiteDefinitionVersion;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetSuiteDefinitionCommand = deserializeAws_restJson1GetSuiteDefinitionCommand;
const deserializeAws_restJson1GetSuiteDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.iotdeviceadvisor#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotdeviceadvisor#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotdeviceadvisor#ValidationException":
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
const deserializeAws_restJson1GetSuiteRunCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetSuiteRunCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        endTime: undefined,
        errorReason: undefined,
        startTime: undefined,
        status: undefined,
        suiteDefinitionId: undefined,
        suiteDefinitionVersion: undefined,
        suiteRunArn: undefined,
        suiteRunConfiguration: undefined,
        suiteRunId: undefined,
        tags: undefined,
        testResult: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.endTime !== undefined && data.endTime !== null) {
        contents.endTime = new Date(Math.round(data.endTime * 1000));
    }
    if (data.errorReason !== undefined && data.errorReason !== null) {
        contents.errorReason = data.errorReason;
    }
    if (data.startTime !== undefined && data.startTime !== null) {
        contents.startTime = new Date(Math.round(data.startTime * 1000));
    }
    if (data.status !== undefined && data.status !== null) {
        contents.status = data.status;
    }
    if (data.suiteDefinitionId !== undefined && data.suiteDefinitionId !== null) {
        contents.suiteDefinitionId = data.suiteDefinitionId;
    }
    if (data.suiteDefinitionVersion !== undefined && data.suiteDefinitionVersion !== null) {
        contents.suiteDefinitionVersion = data.suiteDefinitionVersion;
    }
    if (data.suiteRunArn !== undefined && data.suiteRunArn !== null) {
        contents.suiteRunArn = data.suiteRunArn;
    }
    if (data.suiteRunConfiguration !== undefined && data.suiteRunConfiguration !== null) {
        contents.suiteRunConfiguration = deserializeAws_restJson1SuiteRunConfiguration(data.suiteRunConfiguration, context);
    }
    if (data.suiteRunId !== undefined && data.suiteRunId !== null) {
        contents.suiteRunId = data.suiteRunId;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
    }
    if (data.testResult !== undefined && data.testResult !== null) {
        contents.testResult = deserializeAws_restJson1TestResult(data.testResult, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetSuiteRunCommand = deserializeAws_restJson1GetSuiteRunCommand;
const deserializeAws_restJson1GetSuiteRunCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.iotdeviceadvisor#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotdeviceadvisor#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotdeviceadvisor#ValidationException":
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
const deserializeAws_restJson1GetSuiteRunReportCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetSuiteRunReportCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        qualificationReportDownloadUrl: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.qualificationReportDownloadUrl !== undefined && data.qualificationReportDownloadUrl !== null) {
        contents.qualificationReportDownloadUrl = data.qualificationReportDownloadUrl;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetSuiteRunReportCommand = deserializeAws_restJson1GetSuiteRunReportCommand;
const deserializeAws_restJson1GetSuiteRunReportCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.iotdeviceadvisor#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotdeviceadvisor#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotdeviceadvisor#ValidationException":
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
const deserializeAws_restJson1ListSuiteDefinitionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListSuiteDefinitionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        suiteDefinitionInformationList: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.suiteDefinitionInformationList !== undefined && data.suiteDefinitionInformationList !== null) {
        contents.suiteDefinitionInformationList = deserializeAws_restJson1SuiteDefinitionInformationList(data.suiteDefinitionInformationList, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListSuiteDefinitionsCommand = deserializeAws_restJson1ListSuiteDefinitionsCommand;
const deserializeAws_restJson1ListSuiteDefinitionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.iotdeviceadvisor#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotdeviceadvisor#ValidationException":
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
const deserializeAws_restJson1ListSuiteRunsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListSuiteRunsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        suiteRunsList: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.suiteRunsList !== undefined && data.suiteRunsList !== null) {
        contents.suiteRunsList = deserializeAws_restJson1SuiteRunsList(data.suiteRunsList, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListSuiteRunsCommand = deserializeAws_restJson1ListSuiteRunsCommand;
const deserializeAws_restJson1ListSuiteRunsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.iotdeviceadvisor#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotdeviceadvisor#ValidationException":
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
const deserializeAws_restJson1ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListTagsForResourceCommand = deserializeAws_restJson1ListTagsForResourceCommand;
const deserializeAws_restJson1ListTagsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.iotdeviceadvisor#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotdeviceadvisor#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotdeviceadvisor#ValidationException":
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
const deserializeAws_restJson1StartSuiteRunCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1StartSuiteRunCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        createdAt: undefined,
        suiteRunArn: undefined,
        suiteRunId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.createdAt !== undefined && data.createdAt !== null) {
        contents.createdAt = new Date(Math.round(data.createdAt * 1000));
    }
    if (data.suiteRunArn !== undefined && data.suiteRunArn !== null) {
        contents.suiteRunArn = data.suiteRunArn;
    }
    if (data.suiteRunId !== undefined && data.suiteRunId !== null) {
        contents.suiteRunId = data.suiteRunId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StartSuiteRunCommand = deserializeAws_restJson1StartSuiteRunCommand;
const deserializeAws_restJson1StartSuiteRunCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.iotdeviceadvisor#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.iotdeviceadvisor#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotdeviceadvisor#ValidationException":
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
const deserializeAws_restJson1StopSuiteRunCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1StopSuiteRunCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StopSuiteRunCommand = deserializeAws_restJson1StopSuiteRunCommand;
const deserializeAws_restJson1StopSuiteRunCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.iotdeviceadvisor#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotdeviceadvisor#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotdeviceadvisor#ValidationException":
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
const deserializeAws_restJson1TagResourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1TagResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1TagResourceCommand = deserializeAws_restJson1TagResourceCommand;
const deserializeAws_restJson1TagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.iotdeviceadvisor#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotdeviceadvisor#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotdeviceadvisor#ValidationException":
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
const deserializeAws_restJson1UntagResourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UntagResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UntagResourceCommand = deserializeAws_restJson1UntagResourceCommand;
const deserializeAws_restJson1UntagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.iotdeviceadvisor#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotdeviceadvisor#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotdeviceadvisor#ValidationException":
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
const deserializeAws_restJson1UpdateSuiteDefinitionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateSuiteDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        createdAt: undefined,
        lastUpdatedAt: undefined,
        suiteDefinitionArn: undefined,
        suiteDefinitionId: undefined,
        suiteDefinitionName: undefined,
        suiteDefinitionVersion: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.createdAt !== undefined && data.createdAt !== null) {
        contents.createdAt = new Date(Math.round(data.createdAt * 1000));
    }
    if (data.lastUpdatedAt !== undefined && data.lastUpdatedAt !== null) {
        contents.lastUpdatedAt = new Date(Math.round(data.lastUpdatedAt * 1000));
    }
    if (data.suiteDefinitionArn !== undefined && data.suiteDefinitionArn !== null) {
        contents.suiteDefinitionArn = data.suiteDefinitionArn;
    }
    if (data.suiteDefinitionId !== undefined && data.suiteDefinitionId !== null) {
        contents.suiteDefinitionId = data.suiteDefinitionId;
    }
    if (data.suiteDefinitionName !== undefined && data.suiteDefinitionName !== null) {
        contents.suiteDefinitionName = data.suiteDefinitionName;
    }
    if (data.suiteDefinitionVersion !== undefined && data.suiteDefinitionVersion !== null) {
        contents.suiteDefinitionVersion = data.suiteDefinitionVersion;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateSuiteDefinitionCommand = deserializeAws_restJson1UpdateSuiteDefinitionCommand;
const deserializeAws_restJson1UpdateSuiteDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.iotdeviceadvisor#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.iotdeviceadvisor#ValidationException":
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
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1InternalServerExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServerException",
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
const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceNotFoundException",
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
const deserializeAws_restJson1ValidationExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ValidationException",
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
const serializeAws_restJson1DeviceUnderTest = (input, context) => {
    return {
        ...(input.certificateArn !== undefined &&
            input.certificateArn !== null && { certificateArn: input.certificateArn }),
        ...(input.thingArn !== undefined && input.thingArn !== null && { thingArn: input.thingArn }),
    };
};
const serializeAws_restJson1DeviceUnderTestList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1DeviceUnderTest(entry, context);
    });
};
const serializeAws_restJson1SelectedTestList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1SuiteDefinitionConfiguration = (input, context) => {
    return {
        ...(input.devicePermissionRoleArn !== undefined &&
            input.devicePermissionRoleArn !== null && { devicePermissionRoleArn: input.devicePermissionRoleArn }),
        ...(input.devices !== undefined &&
            input.devices !== null && { devices: serializeAws_restJson1DeviceUnderTestList(input.devices, context) }),
        ...(input.intendedForQualification !== undefined &&
            input.intendedForQualification !== null && { intendedForQualification: input.intendedForQualification }),
        ...(input.rootGroup !== undefined && input.rootGroup !== null && { rootGroup: input.rootGroup }),
        ...(input.suiteDefinitionName !== undefined &&
            input.suiteDefinitionName !== null && { suiteDefinitionName: input.suiteDefinitionName }),
    };
};
const serializeAws_restJson1SuiteRunConfiguration = (input, context) => {
    return {
        ...(input.primaryDevice !== undefined &&
            input.primaryDevice !== null && {
            primaryDevice: serializeAws_restJson1DeviceUnderTest(input.primaryDevice, context),
        }),
        ...(input.selectedTestList !== undefined &&
            input.selectedTestList !== null && {
            selectedTestList: serializeAws_restJson1SelectedTestList(input.selectedTestList, context),
        }),
    };
};
const serializeAws_restJson1TagMap = (input, context) => {
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
const deserializeAws_restJson1DeviceUnderTest = (output, context) => {
    return {
        certificateArn: output.certificateArn !== undefined && output.certificateArn !== null ? output.certificateArn : undefined,
        thingArn: output.thingArn !== undefined && output.thingArn !== null ? output.thingArn : undefined,
    };
};
const deserializeAws_restJson1DeviceUnderTestList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DeviceUnderTest(entry, context);
    });
};
const deserializeAws_restJson1GroupResult = (output, context) => {
    return {
        groupId: output.groupId !== undefined && output.groupId !== null ? output.groupId : undefined,
        groupName: output.groupName !== undefined && output.groupName !== null ? output.groupName : undefined,
        tests: output.tests !== undefined && output.tests !== null
            ? deserializeAws_restJson1TestCaseRuns(output.tests, context)
            : undefined,
    };
};
const deserializeAws_restJson1GroupResultList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1GroupResult(entry, context);
    });
};
const deserializeAws_restJson1SelectedTestList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1SuiteDefinitionConfiguration = (output, context) => {
    return {
        devicePermissionRoleArn: output.devicePermissionRoleArn !== undefined && output.devicePermissionRoleArn !== null
            ? output.devicePermissionRoleArn
            : undefined,
        devices: output.devices !== undefined && output.devices !== null
            ? deserializeAws_restJson1DeviceUnderTestList(output.devices, context)
            : undefined,
        intendedForQualification: output.intendedForQualification !== undefined && output.intendedForQualification !== null
            ? output.intendedForQualification
            : undefined,
        rootGroup: output.rootGroup !== undefined && output.rootGroup !== null ? output.rootGroup : undefined,
        suiteDefinitionName: output.suiteDefinitionName !== undefined && output.suiteDefinitionName !== null
            ? output.suiteDefinitionName
            : undefined,
    };
};
const deserializeAws_restJson1SuiteDefinitionInformation = (output, context) => {
    return {
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        defaultDevices: output.defaultDevices !== undefined && output.defaultDevices !== null
            ? deserializeAws_restJson1DeviceUnderTestList(output.defaultDevices, context)
            : undefined,
        intendedForQualification: output.intendedForQualification !== undefined && output.intendedForQualification !== null
            ? output.intendedForQualification
            : undefined,
        suiteDefinitionId: output.suiteDefinitionId !== undefined && output.suiteDefinitionId !== null
            ? output.suiteDefinitionId
            : undefined,
        suiteDefinitionName: output.suiteDefinitionName !== undefined && output.suiteDefinitionName !== null
            ? output.suiteDefinitionName
            : undefined,
    };
};
const deserializeAws_restJson1SuiteDefinitionInformationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SuiteDefinitionInformation(entry, context);
    });
};
const deserializeAws_restJson1SuiteRunConfiguration = (output, context) => {
    return {
        primaryDevice: output.primaryDevice !== undefined && output.primaryDevice !== null
            ? deserializeAws_restJson1DeviceUnderTest(output.primaryDevice, context)
            : undefined,
        selectedTestList: output.selectedTestList !== undefined && output.selectedTestList !== null
            ? deserializeAws_restJson1SelectedTestList(output.selectedTestList, context)
            : undefined,
    };
};
const deserializeAws_restJson1SuiteRunInformation = (output, context) => {
    return {
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        endAt: output.endAt !== undefined && output.endAt !== null ? new Date(Math.round(output.endAt * 1000)) : undefined,
        failed: output.failed !== undefined && output.failed !== null ? output.failed : undefined,
        passed: output.passed !== undefined && output.passed !== null ? output.passed : undefined,
        startedAt: output.startedAt !== undefined && output.startedAt !== null
            ? new Date(Math.round(output.startedAt * 1000))
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        suiteDefinitionId: output.suiteDefinitionId !== undefined && output.suiteDefinitionId !== null
            ? output.suiteDefinitionId
            : undefined,
        suiteDefinitionName: output.suiteDefinitionName !== undefined && output.suiteDefinitionName !== null
            ? output.suiteDefinitionName
            : undefined,
        suiteDefinitionVersion: output.suiteDefinitionVersion !== undefined && output.suiteDefinitionVersion !== null
            ? output.suiteDefinitionVersion
            : undefined,
        suiteRunId: output.suiteRunId !== undefined && output.suiteRunId !== null ? output.suiteRunId : undefined,
    };
};
const deserializeAws_restJson1SuiteRunsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SuiteRunInformation(entry, context);
    });
};
const deserializeAws_restJson1TagMap = (output, context) => {
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
const deserializeAws_restJson1TestCaseRun = (output, context) => {
    return {
        endTime: output.endTime !== undefined && output.endTime !== null ? new Date(Math.round(output.endTime * 1000)) : undefined,
        failure: output.failure !== undefined && output.failure !== null ? output.failure : undefined,
        logUrl: output.logUrl !== undefined && output.logUrl !== null ? output.logUrl : undefined,
        startTime: output.startTime !== undefined && output.startTime !== null
            ? new Date(Math.round(output.startTime * 1000))
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        testCaseDefinitionId: output.testCaseDefinitionId !== undefined && output.testCaseDefinitionId !== null
            ? output.testCaseDefinitionId
            : undefined,
        testCaseDefinitionName: output.testCaseDefinitionName !== undefined && output.testCaseDefinitionName !== null
            ? output.testCaseDefinitionName
            : undefined,
        testCaseRunId: output.testCaseRunId !== undefined && output.testCaseRunId !== null ? output.testCaseRunId : undefined,
        warnings: output.warnings !== undefined && output.warnings !== null ? output.warnings : undefined,
    };
};
const deserializeAws_restJson1TestCaseRuns = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1TestCaseRun(entry, context);
    });
};
const deserializeAws_restJson1TestResult = (output, context) => {
    return {
        groups: output.groups !== undefined && output.groups !== null
            ? deserializeAws_restJson1GroupResultList(output.groups, context)
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