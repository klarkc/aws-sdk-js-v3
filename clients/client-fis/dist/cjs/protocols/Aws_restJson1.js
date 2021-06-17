"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1UpdateExperimentTemplateCommand = exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1StopExperimentCommand = exports.deserializeAws_restJson1StartExperimentCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1ListExperimentTemplatesCommand = exports.deserializeAws_restJson1ListExperimentsCommand = exports.deserializeAws_restJson1ListActionsCommand = exports.deserializeAws_restJson1GetExperimentTemplateCommand = exports.deserializeAws_restJson1GetExperimentCommand = exports.deserializeAws_restJson1GetActionCommand = exports.deserializeAws_restJson1DeleteExperimentTemplateCommand = exports.deserializeAws_restJson1CreateExperimentTemplateCommand = exports.serializeAws_restJson1UpdateExperimentTemplateCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1StopExperimentCommand = exports.serializeAws_restJson1StartExperimentCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1ListExperimentTemplatesCommand = exports.serializeAws_restJson1ListExperimentsCommand = exports.serializeAws_restJson1ListActionsCommand = exports.serializeAws_restJson1GetExperimentTemplateCommand = exports.serializeAws_restJson1GetExperimentCommand = exports.serializeAws_restJson1GetActionCommand = exports.serializeAws_restJson1DeleteExperimentTemplateCommand = exports.serializeAws_restJson1CreateExperimentTemplateCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const uuid_1 = require("uuid");
const serializeAws_restJson1CreateExperimentTemplateCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/experimentTemplates";
    let body;
    body = JSON.stringify({
        ...(input.actions !== undefined &&
            input.actions !== null && {
            actions: serializeAws_restJson1CreateExperimentTemplateActionInputMap(input.actions, context),
        }),
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
        ...(input.stopConditions !== undefined &&
            input.stopConditions !== null && {
            stopConditions: serializeAws_restJson1CreateExperimentTemplateStopConditionInputList(input.stopConditions, context),
        }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
        ...(input.targets !== undefined &&
            input.targets !== null && {
            targets: serializeAws_restJson1CreateExperimentTemplateTargetInputMap(input.targets, context),
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
exports.serializeAws_restJson1CreateExperimentTemplateCommand = serializeAws_restJson1CreateExperimentTemplateCommand;
const serializeAws_restJson1DeleteExperimentTemplateCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/experimentTemplates/{id}";
    if (input.id !== undefined) {
        const labelValue = input.id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: id.");
        }
        resolvedPath = resolvedPath.replace("{id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: id.");
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
exports.serializeAws_restJson1DeleteExperimentTemplateCommand = serializeAws_restJson1DeleteExperimentTemplateCommand;
const serializeAws_restJson1GetActionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/actions/{id}";
    if (input.id !== undefined) {
        const labelValue = input.id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: id.");
        }
        resolvedPath = resolvedPath.replace("{id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: id.");
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
exports.serializeAws_restJson1GetActionCommand = serializeAws_restJson1GetActionCommand;
const serializeAws_restJson1GetExperimentCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/experiments/{id}";
    if (input.id !== undefined) {
        const labelValue = input.id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: id.");
        }
        resolvedPath = resolvedPath.replace("{id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: id.");
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
exports.serializeAws_restJson1GetExperimentCommand = serializeAws_restJson1GetExperimentCommand;
const serializeAws_restJson1GetExperimentTemplateCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/experimentTemplates/{id}";
    if (input.id !== undefined) {
        const labelValue = input.id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: id.");
        }
        resolvedPath = resolvedPath.replace("{id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: id.");
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
exports.serializeAws_restJson1GetExperimentTemplateCommand = serializeAws_restJson1GetExperimentTemplateCommand;
const serializeAws_restJson1ListActionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/actions";
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
exports.serializeAws_restJson1ListActionsCommand = serializeAws_restJson1ListActionsCommand;
const serializeAws_restJson1ListExperimentsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/experiments";
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
exports.serializeAws_restJson1ListExperimentsCommand = serializeAws_restJson1ListExperimentsCommand;
const serializeAws_restJson1ListExperimentTemplatesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/experimentTemplates";
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
exports.serializeAws_restJson1ListExperimentTemplatesCommand = serializeAws_restJson1ListExperimentTemplatesCommand;
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
const serializeAws_restJson1StartExperimentCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/experiments";
    let body;
    body = JSON.stringify({
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.experimentTemplateId !== undefined &&
            input.experimentTemplateId !== null && { experimentTemplateId: input.experimentTemplateId }),
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
exports.serializeAws_restJson1StartExperimentCommand = serializeAws_restJson1StartExperimentCommand;
const serializeAws_restJson1StopExperimentCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/experiments/{id}";
    if (input.id !== undefined) {
        const labelValue = input.id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: id.");
        }
        resolvedPath = resolvedPath.replace("{id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: id.");
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
exports.serializeAws_restJson1StopExperimentCommand = serializeAws_restJson1StopExperimentCommand;
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
const serializeAws_restJson1UpdateExperimentTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/experimentTemplates/{id}";
    if (input.id !== undefined) {
        const labelValue = input.id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: id.");
        }
        resolvedPath = resolvedPath.replace("{id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: id.");
    }
    let body;
    body = JSON.stringify({
        ...(input.actions !== undefined &&
            input.actions !== null && {
            actions: serializeAws_restJson1UpdateExperimentTemplateActionInputMap(input.actions, context),
        }),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
        ...(input.stopConditions !== undefined &&
            input.stopConditions !== null && {
            stopConditions: serializeAws_restJson1UpdateExperimentTemplateStopConditionInputList(input.stopConditions, context),
        }),
        ...(input.targets !== undefined &&
            input.targets !== null && {
            targets: serializeAws_restJson1UpdateExperimentTemplateTargetInputMap(input.targets, context),
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
exports.serializeAws_restJson1UpdateExperimentTemplateCommand = serializeAws_restJson1UpdateExperimentTemplateCommand;
const deserializeAws_restJson1CreateExperimentTemplateCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateExperimentTemplateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        experimentTemplate: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.experimentTemplate !== undefined && data.experimentTemplate !== null) {
        contents.experimentTemplate = deserializeAws_restJson1ExperimentTemplate(data.experimentTemplate, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateExperimentTemplateCommand = deserializeAws_restJson1CreateExperimentTemplateCommand;
const deserializeAws_restJson1CreateExperimentTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.fis#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.fis#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.fis#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.fis#ValidationException":
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
const deserializeAws_restJson1DeleteExperimentTemplateCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteExperimentTemplateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        experimentTemplate: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.experimentTemplate !== undefined && data.experimentTemplate !== null) {
        contents.experimentTemplate = deserializeAws_restJson1ExperimentTemplate(data.experimentTemplate, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteExperimentTemplateCommand = deserializeAws_restJson1DeleteExperimentTemplateCommand;
const deserializeAws_restJson1DeleteExperimentTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.fis#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.fis#ValidationException":
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
const deserializeAws_restJson1GetActionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetActionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        action: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.action !== undefined && data.action !== null) {
        contents.action = deserializeAws_restJson1Action(data.action, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetActionCommand = deserializeAws_restJson1GetActionCommand;
const deserializeAws_restJson1GetActionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.fis#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.fis#ValidationException":
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
const deserializeAws_restJson1GetExperimentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetExperimentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        experiment: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.experiment !== undefined && data.experiment !== null) {
        contents.experiment = deserializeAws_restJson1Experiment(data.experiment, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetExperimentCommand = deserializeAws_restJson1GetExperimentCommand;
const deserializeAws_restJson1GetExperimentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.fis#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.fis#ValidationException":
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
const deserializeAws_restJson1GetExperimentTemplateCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetExperimentTemplateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        experimentTemplate: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.experimentTemplate !== undefined && data.experimentTemplate !== null) {
        contents.experimentTemplate = deserializeAws_restJson1ExperimentTemplate(data.experimentTemplate, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetExperimentTemplateCommand = deserializeAws_restJson1GetExperimentTemplateCommand;
const deserializeAws_restJson1GetExperimentTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.fis#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.fis#ValidationException":
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
const deserializeAws_restJson1ListActionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListActionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        actions: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.actions !== undefined && data.actions !== null) {
        contents.actions = deserializeAws_restJson1ActionSummaryList(data.actions, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListActionsCommand = deserializeAws_restJson1ListActionsCommand;
const deserializeAws_restJson1ListActionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ValidationException":
        case "com.amazonaws.fis#ValidationException":
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
const deserializeAws_restJson1ListExperimentsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListExperimentsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        experiments: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.experiments !== undefined && data.experiments !== null) {
        contents.experiments = deserializeAws_restJson1ExperimentSummaryList(data.experiments, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListExperimentsCommand = deserializeAws_restJson1ListExperimentsCommand;
const deserializeAws_restJson1ListExperimentsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ValidationException":
        case "com.amazonaws.fis#ValidationException":
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
const deserializeAws_restJson1ListExperimentTemplatesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListExperimentTemplatesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        experimentTemplates: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.experimentTemplates !== undefined && data.experimentTemplates !== null) {
        contents.experimentTemplates = deserializeAws_restJson1ExperimentTemplateSummaryList(data.experimentTemplates, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListExperimentTemplatesCommand = deserializeAws_restJson1ListExperimentTemplatesCommand;
const deserializeAws_restJson1ListExperimentTemplatesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ValidationException":
        case "com.amazonaws.fis#ValidationException":
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
const deserializeAws_restJson1StartExperimentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1StartExperimentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        experiment: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.experiment !== undefined && data.experiment !== null) {
        contents.experiment = deserializeAws_restJson1Experiment(data.experiment, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StartExperimentCommand = deserializeAws_restJson1StartExperimentCommand;
const deserializeAws_restJson1StartExperimentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.fis#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.fis#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.fis#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.fis#ValidationException":
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
const deserializeAws_restJson1StopExperimentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1StopExperimentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        experiment: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.experiment !== undefined && data.experiment !== null) {
        contents.experiment = deserializeAws_restJson1Experiment(data.experiment, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StopExperimentCommand = deserializeAws_restJson1StopExperimentCommand;
const deserializeAws_restJson1StopExperimentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.fis#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.fis#ValidationException":
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
const deserializeAws_restJson1UpdateExperimentTemplateCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateExperimentTemplateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        experimentTemplate: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.experimentTemplate !== undefined && data.experimentTemplate !== null) {
        contents.experimentTemplate = deserializeAws_restJson1ExperimentTemplate(data.experimentTemplate, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateExperimentTemplateCommand = deserializeAws_restJson1UpdateExperimentTemplateCommand;
const deserializeAws_restJson1UpdateExperimentTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.fis#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.fis#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.fis#ValidationException":
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
const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ServiceQuotaExceededException",
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
const serializeAws_restJson1CreateExperimentTemplateActionInput = (input, context) => {
    return {
        ...(input.actionId !== undefined && input.actionId !== null && { actionId: input.actionId }),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.parameters !== undefined &&
            input.parameters !== null && {
            parameters: serializeAws_restJson1ExperimentTemplateActionParameterMap(input.parameters, context),
        }),
        ...(input.startAfter !== undefined &&
            input.startAfter !== null && {
            startAfter: serializeAws_restJson1ExperimentTemplateActionStartAfterList(input.startAfter, context),
        }),
        ...(input.targets !== undefined &&
            input.targets !== null && {
            targets: serializeAws_restJson1ExperimentTemplateActionTargetMap(input.targets, context),
        }),
    };
};
const serializeAws_restJson1CreateExperimentTemplateActionInputMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_restJson1CreateExperimentTemplateActionInput(value, context),
        };
    }, {});
};
const serializeAws_restJson1CreateExperimentTemplateStopConditionInput = (input, context) => {
    return {
        ...(input.source !== undefined && input.source !== null && { source: input.source }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_restJson1CreateExperimentTemplateStopConditionInputList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1CreateExperimentTemplateStopConditionInput(entry, context);
    });
};
const serializeAws_restJson1CreateExperimentTemplateTargetInput = (input, context) => {
    return {
        ...(input.filters !== undefined &&
            input.filters !== null && {
            filters: serializeAws_restJson1ExperimentTemplateTargetFilterInputList(input.filters, context),
        }),
        ...(input.resourceArns !== undefined &&
            input.resourceArns !== null && {
            resourceArns: serializeAws_restJson1ResourceArnList(input.resourceArns, context),
        }),
        ...(input.resourceTags !== undefined &&
            input.resourceTags !== null && { resourceTags: serializeAws_restJson1TagMap(input.resourceTags, context) }),
        ...(input.resourceType !== undefined && input.resourceType !== null && { resourceType: input.resourceType }),
        ...(input.selectionMode !== undefined && input.selectionMode !== null && { selectionMode: input.selectionMode }),
    };
};
const serializeAws_restJson1CreateExperimentTemplateTargetInputMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_restJson1CreateExperimentTemplateTargetInput(value, context),
        };
    }, {});
};
const serializeAws_restJson1ExperimentTemplateActionParameterMap = (input, context) => {
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
const serializeAws_restJson1ExperimentTemplateActionStartAfterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1ExperimentTemplateActionTargetMap = (input, context) => {
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
const serializeAws_restJson1ExperimentTemplateTargetFilterInputList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1ExperimentTemplateTargetInputFilter(entry, context);
    });
};
const serializeAws_restJson1ExperimentTemplateTargetFilterValues = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1ExperimentTemplateTargetInputFilter = (input, context) => {
    return {
        ...(input.path !== undefined && input.path !== null && { path: input.path }),
        ...(input.values !== undefined &&
            input.values !== null && {
            values: serializeAws_restJson1ExperimentTemplateTargetFilterValues(input.values, context),
        }),
    };
};
const serializeAws_restJson1ResourceArnList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
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
const serializeAws_restJson1UpdateExperimentTemplateActionInputItem = (input, context) => {
    return {
        ...(input.actionId !== undefined && input.actionId !== null && { actionId: input.actionId }),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.parameters !== undefined &&
            input.parameters !== null && {
            parameters: serializeAws_restJson1ExperimentTemplateActionParameterMap(input.parameters, context),
        }),
        ...(input.startAfter !== undefined &&
            input.startAfter !== null && {
            startAfter: serializeAws_restJson1ExperimentTemplateActionStartAfterList(input.startAfter, context),
        }),
        ...(input.targets !== undefined &&
            input.targets !== null && {
            targets: serializeAws_restJson1ExperimentTemplateActionTargetMap(input.targets, context),
        }),
    };
};
const serializeAws_restJson1UpdateExperimentTemplateActionInputMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_restJson1UpdateExperimentTemplateActionInputItem(value, context),
        };
    }, {});
};
const serializeAws_restJson1UpdateExperimentTemplateStopConditionInput = (input, context) => {
    return {
        ...(input.source !== undefined && input.source !== null && { source: input.source }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_restJson1UpdateExperimentTemplateStopConditionInputList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1UpdateExperimentTemplateStopConditionInput(entry, context);
    });
};
const serializeAws_restJson1UpdateExperimentTemplateTargetInput = (input, context) => {
    return {
        ...(input.filters !== undefined &&
            input.filters !== null && {
            filters: serializeAws_restJson1ExperimentTemplateTargetFilterInputList(input.filters, context),
        }),
        ...(input.resourceArns !== undefined &&
            input.resourceArns !== null && {
            resourceArns: serializeAws_restJson1ResourceArnList(input.resourceArns, context),
        }),
        ...(input.resourceTags !== undefined &&
            input.resourceTags !== null && { resourceTags: serializeAws_restJson1TagMap(input.resourceTags, context) }),
        ...(input.resourceType !== undefined && input.resourceType !== null && { resourceType: input.resourceType }),
        ...(input.selectionMode !== undefined && input.selectionMode !== null && { selectionMode: input.selectionMode }),
    };
};
const serializeAws_restJson1UpdateExperimentTemplateTargetInputMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_restJson1UpdateExperimentTemplateTargetInput(value, context),
        };
    }, {});
};
const deserializeAws_restJson1Action = (output, context) => {
    return {
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        parameters: output.parameters !== undefined && output.parameters !== null
            ? deserializeAws_restJson1ActionParameterMap(output.parameters, context)
            : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1TagMap(output.tags, context)
            : undefined,
        targets: output.targets !== undefined && output.targets !== null
            ? deserializeAws_restJson1ActionTargetMap(output.targets, context)
            : undefined,
    };
};
const deserializeAws_restJson1ActionParameter = (output, context) => {
    return {
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        required: output.required !== undefined && output.required !== null ? output.required : undefined,
    };
};
const deserializeAws_restJson1ActionParameterMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1ActionParameter(value, context),
        };
    }, {});
};
const deserializeAws_restJson1ActionSummary = (output, context) => {
    return {
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1TagMap(output.tags, context)
            : undefined,
        targets: output.targets !== undefined && output.targets !== null
            ? deserializeAws_restJson1ActionTargetMap(output.targets, context)
            : undefined,
    };
};
const deserializeAws_restJson1ActionSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ActionSummary(entry, context);
    });
};
const deserializeAws_restJson1ActionTarget = (output, context) => {
    return {
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    };
};
const deserializeAws_restJson1ActionTargetMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1ActionTarget(value, context),
        };
    }, {});
};
const deserializeAws_restJson1Experiment = (output, context) => {
    return {
        actions: output.actions !== undefined && output.actions !== null
            ? deserializeAws_restJson1ExperimentActionMap(output.actions, context)
            : undefined,
        creationTime: output.creationTime !== undefined && output.creationTime !== null
            ? new Date(Math.round(output.creationTime * 1000))
            : undefined,
        endTime: output.endTime !== undefined && output.endTime !== null ? new Date(Math.round(output.endTime * 1000)) : undefined,
        experimentTemplateId: output.experimentTemplateId !== undefined && output.experimentTemplateId !== null
            ? output.experimentTemplateId
            : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
        startTime: output.startTime !== undefined && output.startTime !== null
            ? new Date(Math.round(output.startTime * 1000))
            : undefined,
        state: output.state !== undefined && output.state !== null
            ? deserializeAws_restJson1ExperimentState(output.state, context)
            : undefined,
        stopConditions: output.stopConditions !== undefined && output.stopConditions !== null
            ? deserializeAws_restJson1ExperimentStopConditionList(output.stopConditions, context)
            : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1TagMap(output.tags, context)
            : undefined,
        targets: output.targets !== undefined && output.targets !== null
            ? deserializeAws_restJson1ExperimentTargetMap(output.targets, context)
            : undefined,
    };
};
const deserializeAws_restJson1ExperimentAction = (output, context) => {
    return {
        actionId: output.actionId !== undefined && output.actionId !== null ? output.actionId : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        parameters: output.parameters !== undefined && output.parameters !== null
            ? deserializeAws_restJson1ExperimentActionParameterMap(output.parameters, context)
            : undefined,
        startAfter: output.startAfter !== undefined && output.startAfter !== null
            ? deserializeAws_restJson1ExperimentActionStartAfterList(output.startAfter, context)
            : undefined,
        state: output.state !== undefined && output.state !== null
            ? deserializeAws_restJson1ExperimentActionState(output.state, context)
            : undefined,
        targets: output.targets !== undefined && output.targets !== null
            ? deserializeAws_restJson1ExperimentActionTargetMap(output.targets, context)
            : undefined,
    };
};
const deserializeAws_restJson1ExperimentActionMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1ExperimentAction(value, context),
        };
    }, {});
};
const deserializeAws_restJson1ExperimentActionParameterMap = (output, context) => {
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
const deserializeAws_restJson1ExperimentActionStartAfterList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1ExperimentActionState = (output, context) => {
    return {
        reason: output.reason !== undefined && output.reason !== null ? output.reason : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_restJson1ExperimentActionTargetMap = (output, context) => {
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
const deserializeAws_restJson1ExperimentState = (output, context) => {
    return {
        reason: output.reason !== undefined && output.reason !== null ? output.reason : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_restJson1ExperimentStopCondition = (output, context) => {
    return {
        source: output.source !== undefined && output.source !== null ? output.source : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_restJson1ExperimentStopConditionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ExperimentStopCondition(entry, context);
    });
};
const deserializeAws_restJson1ExperimentSummary = (output, context) => {
    return {
        creationTime: output.creationTime !== undefined && output.creationTime !== null
            ? new Date(Math.round(output.creationTime * 1000))
            : undefined,
        experimentTemplateId: output.experimentTemplateId !== undefined && output.experimentTemplateId !== null
            ? output.experimentTemplateId
            : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        state: output.state !== undefined && output.state !== null
            ? deserializeAws_restJson1ExperimentState(output.state, context)
            : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1TagMap(output.tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1ExperimentSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ExperimentSummary(entry, context);
    });
};
const deserializeAws_restJson1ExperimentTarget = (output, context) => {
    return {
        filters: output.filters !== undefined && output.filters !== null
            ? deserializeAws_restJson1ExperimentTargetFilterList(output.filters, context)
            : undefined,
        resourceArns: output.resourceArns !== undefined && output.resourceArns !== null
            ? deserializeAws_restJson1ResourceArnList(output.resourceArns, context)
            : undefined,
        resourceTags: output.resourceTags !== undefined && output.resourceTags !== null
            ? deserializeAws_restJson1TagMap(output.resourceTags, context)
            : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
        selectionMode: output.selectionMode !== undefined && output.selectionMode !== null ? output.selectionMode : undefined,
    };
};
const deserializeAws_restJson1ExperimentTargetFilter = (output, context) => {
    return {
        path: output.path !== undefined && output.path !== null ? output.path : undefined,
        values: output.values !== undefined && output.values !== null
            ? deserializeAws_restJson1ExperimentTargetFilterValues(output.values, context)
            : undefined,
    };
};
const deserializeAws_restJson1ExperimentTargetFilterList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ExperimentTargetFilter(entry, context);
    });
};
const deserializeAws_restJson1ExperimentTargetFilterValues = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1ExperimentTargetMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1ExperimentTarget(value, context),
        };
    }, {});
};
const deserializeAws_restJson1ExperimentTemplate = (output, context) => {
    return {
        actions: output.actions !== undefined && output.actions !== null
            ? deserializeAws_restJson1ExperimentTemplateActionMap(output.actions, context)
            : undefined,
        creationTime: output.creationTime !== undefined && output.creationTime !== null
            ? new Date(Math.round(output.creationTime * 1000))
            : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        lastUpdateTime: output.lastUpdateTime !== undefined && output.lastUpdateTime !== null
            ? new Date(Math.round(output.lastUpdateTime * 1000))
            : undefined,
        roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
        stopConditions: output.stopConditions !== undefined && output.stopConditions !== null
            ? deserializeAws_restJson1ExperimentTemplateStopConditionList(output.stopConditions, context)
            : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1TagMap(output.tags, context)
            : undefined,
        targets: output.targets !== undefined && output.targets !== null
            ? deserializeAws_restJson1ExperimentTemplateTargetMap(output.targets, context)
            : undefined,
    };
};
const deserializeAws_restJson1ExperimentTemplateAction = (output, context) => {
    return {
        actionId: output.actionId !== undefined && output.actionId !== null ? output.actionId : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        parameters: output.parameters !== undefined && output.parameters !== null
            ? deserializeAws_restJson1ExperimentTemplateActionParameterMap(output.parameters, context)
            : undefined,
        startAfter: output.startAfter !== undefined && output.startAfter !== null
            ? deserializeAws_restJson1ExperimentTemplateActionStartAfterList(output.startAfter, context)
            : undefined,
        targets: output.targets !== undefined && output.targets !== null
            ? deserializeAws_restJson1ExperimentTemplateActionTargetMap(output.targets, context)
            : undefined,
    };
};
const deserializeAws_restJson1ExperimentTemplateActionMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1ExperimentTemplateAction(value, context),
        };
    }, {});
};
const deserializeAws_restJson1ExperimentTemplateActionParameterMap = (output, context) => {
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
const deserializeAws_restJson1ExperimentTemplateActionStartAfterList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1ExperimentTemplateActionTargetMap = (output, context) => {
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
const deserializeAws_restJson1ExperimentTemplateStopCondition = (output, context) => {
    return {
        source: output.source !== undefined && output.source !== null ? output.source : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_restJson1ExperimentTemplateStopConditionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ExperimentTemplateStopCondition(entry, context);
    });
};
const deserializeAws_restJson1ExperimentTemplateSummary = (output, context) => {
    return {
        creationTime: output.creationTime !== undefined && output.creationTime !== null
            ? new Date(Math.round(output.creationTime * 1000))
            : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        lastUpdateTime: output.lastUpdateTime !== undefined && output.lastUpdateTime !== null
            ? new Date(Math.round(output.lastUpdateTime * 1000))
            : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1TagMap(output.tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1ExperimentTemplateSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ExperimentTemplateSummary(entry, context);
    });
};
const deserializeAws_restJson1ExperimentTemplateTarget = (output, context) => {
    return {
        filters: output.filters !== undefined && output.filters !== null
            ? deserializeAws_restJson1ExperimentTemplateTargetFilterList(output.filters, context)
            : undefined,
        resourceArns: output.resourceArns !== undefined && output.resourceArns !== null
            ? deserializeAws_restJson1ResourceArnList(output.resourceArns, context)
            : undefined,
        resourceTags: output.resourceTags !== undefined && output.resourceTags !== null
            ? deserializeAws_restJson1TagMap(output.resourceTags, context)
            : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
        selectionMode: output.selectionMode !== undefined && output.selectionMode !== null ? output.selectionMode : undefined,
    };
};
const deserializeAws_restJson1ExperimentTemplateTargetFilter = (output, context) => {
    return {
        path: output.path !== undefined && output.path !== null ? output.path : undefined,
        values: output.values !== undefined && output.values !== null
            ? deserializeAws_restJson1ExperimentTemplateTargetFilterValues(output.values, context)
            : undefined,
    };
};
const deserializeAws_restJson1ExperimentTemplateTargetFilterList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ExperimentTemplateTargetFilter(entry, context);
    });
};
const deserializeAws_restJson1ExperimentTemplateTargetFilterValues = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1ExperimentTemplateTargetMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1ExperimentTemplateTarget(value, context),
        };
    }, {});
};
const deserializeAws_restJson1ResourceArnList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
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