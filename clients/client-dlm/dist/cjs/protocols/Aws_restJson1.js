"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1UpdateLifecyclePolicyCommand = exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1GetLifecyclePolicyCommand = exports.deserializeAws_restJson1GetLifecyclePoliciesCommand = exports.deserializeAws_restJson1DeleteLifecyclePolicyCommand = exports.deserializeAws_restJson1CreateLifecyclePolicyCommand = exports.serializeAws_restJson1UpdateLifecyclePolicyCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1GetLifecyclePolicyCommand = exports.serializeAws_restJson1GetLifecyclePoliciesCommand = exports.serializeAws_restJson1DeleteLifecyclePolicyCommand = exports.serializeAws_restJson1CreateLifecyclePolicyCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1CreateLifecyclePolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/policies";
    let body;
    body = JSON.stringify({
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.ExecutionRoleArn !== undefined &&
            input.ExecutionRoleArn !== null && { ExecutionRoleArn: input.ExecutionRoleArn }),
        ...(input.PolicyDetails !== undefined &&
            input.PolicyDetails !== null && {
            PolicyDetails: serializeAws_restJson1PolicyDetails(input.PolicyDetails, context),
        }),
        ...(input.State !== undefined && input.State !== null && { State: input.State }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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
exports.serializeAws_restJson1CreateLifecyclePolicyCommand = serializeAws_restJson1CreateLifecyclePolicyCommand;
const serializeAws_restJson1DeleteLifecyclePolicyCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/policies/{PolicyId}";
    if (input.PolicyId !== undefined) {
        const labelValue = input.PolicyId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: PolicyId.");
        }
        resolvedPath = resolvedPath.replace("{PolicyId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: PolicyId.");
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
exports.serializeAws_restJson1DeleteLifecyclePolicyCommand = serializeAws_restJson1DeleteLifecyclePolicyCommand;
const serializeAws_restJson1GetLifecyclePoliciesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/policies";
    const query = {
        ...(input.PolicyIds !== undefined && { policyIds: (input.PolicyIds || []).map((_entry) => _entry) }),
        ...(input.State !== undefined && { state: input.State }),
        ...(input.ResourceTypes !== undefined && { resourceTypes: (input.ResourceTypes || []).map((_entry) => _entry) }),
        ...(input.TargetTags !== undefined && { targetTags: (input.TargetTags || []).map((_entry) => _entry) }),
        ...(input.TagsToAdd !== undefined && { tagsToAdd: (input.TagsToAdd || []).map((_entry) => _entry) }),
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
exports.serializeAws_restJson1GetLifecyclePoliciesCommand = serializeAws_restJson1GetLifecyclePoliciesCommand;
const serializeAws_restJson1GetLifecyclePolicyCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/policies/{PolicyId}";
    if (input.PolicyId !== undefined) {
        const labelValue = input.PolicyId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: PolicyId.");
        }
        resolvedPath = resolvedPath.replace("{PolicyId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: PolicyId.");
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
exports.serializeAws_restJson1GetLifecyclePolicyCommand = serializeAws_restJson1GetLifecyclePolicyCommand;
const serializeAws_restJson1ListTagsForResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/tags/{ResourceArn}";
    if (input.ResourceArn !== undefined) {
        const labelValue = input.ResourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceArn.");
        }
        resolvedPath = resolvedPath.replace("{ResourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceArn.");
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
const serializeAws_restJson1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/tags/{ResourceArn}";
    if (input.ResourceArn !== undefined) {
        const labelValue = input.ResourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceArn.");
        }
        resolvedPath = resolvedPath.replace("{ResourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceArn.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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
    let resolvedPath = "/tags/{ResourceArn}";
    if (input.ResourceArn !== undefined) {
        const labelValue = input.ResourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceArn.");
        }
        resolvedPath = resolvedPath.replace("{ResourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceArn.");
    }
    const query = {
        ...(input.TagKeys !== undefined && { tagKeys: (input.TagKeys || []).map((_entry) => _entry) }),
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
const serializeAws_restJson1UpdateLifecyclePolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/policies/{PolicyId}";
    if (input.PolicyId !== undefined) {
        const labelValue = input.PolicyId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: PolicyId.");
        }
        resolvedPath = resolvedPath.replace("{PolicyId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: PolicyId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.ExecutionRoleArn !== undefined &&
            input.ExecutionRoleArn !== null && { ExecutionRoleArn: input.ExecutionRoleArn }),
        ...(input.PolicyDetails !== undefined &&
            input.PolicyDetails !== null && {
            PolicyDetails: serializeAws_restJson1PolicyDetails(input.PolicyDetails, context),
        }),
        ...(input.State !== undefined && input.State !== null && { State: input.State }),
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
exports.serializeAws_restJson1UpdateLifecyclePolicyCommand = serializeAws_restJson1UpdateLifecyclePolicyCommand;
const deserializeAws_restJson1CreateLifecyclePolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateLifecyclePolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        PolicyId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.PolicyId !== undefined && data.PolicyId !== null) {
        contents.PolicyId = data.PolicyId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateLifecyclePolicyCommand = deserializeAws_restJson1CreateLifecyclePolicyCommand;
const deserializeAws_restJson1CreateLifecyclePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.dlm#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.dlm#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.dlm#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteLifecyclePolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteLifecyclePolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteLifecyclePolicyCommand = deserializeAws_restJson1DeleteLifecyclePolicyCommand;
const deserializeAws_restJson1DeleteLifecyclePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.dlm#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.dlm#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dlm#ResourceNotFoundException":
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
const deserializeAws_restJson1GetLifecyclePoliciesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetLifecyclePoliciesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Policies: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Policies !== undefined && data.Policies !== null) {
        contents.Policies = deserializeAws_restJson1LifecyclePolicySummaryList(data.Policies, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetLifecyclePoliciesCommand = deserializeAws_restJson1GetLifecyclePoliciesCommand;
const deserializeAws_restJson1GetLifecyclePoliciesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.dlm#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.dlm#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.dlm#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dlm#ResourceNotFoundException":
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
const deserializeAws_restJson1GetLifecyclePolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetLifecyclePolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Policy: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Policy !== undefined && data.Policy !== null) {
        contents.Policy = deserializeAws_restJson1LifecyclePolicy(data.Policy, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetLifecyclePolicyCommand = deserializeAws_restJson1GetLifecyclePolicyCommand;
const deserializeAws_restJson1GetLifecyclePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.dlm#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.dlm#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dlm#ResourceNotFoundException":
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
const deserializeAws_restJson1ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
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
        case "com.amazonaws.dlm#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.dlm#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dlm#ResourceNotFoundException":
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
        case "com.amazonaws.dlm#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.dlm#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dlm#ResourceNotFoundException":
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
        case "com.amazonaws.dlm#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.dlm#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dlm#ResourceNotFoundException":
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
const deserializeAws_restJson1UpdateLifecyclePolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateLifecyclePolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateLifecyclePolicyCommand = deserializeAws_restJson1UpdateLifecyclePolicyCommand;
const deserializeAws_restJson1UpdateLifecyclePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.dlm#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.dlm#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.dlm#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dlm#ResourceNotFoundException":
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
const deserializeAws_restJson1InternalServerExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServerException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Code: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Code !== undefined && data.Code !== null) {
        contents.Code = data.Code;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1InvalidRequestExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidRequestException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Code: undefined,
        Message: undefined,
        MutuallyExclusiveParameters: undefined,
        RequiredParameters: undefined,
    };
    const data = parsedOutput.body;
    if (data.Code !== undefined && data.Code !== null) {
        contents.Code = data.Code;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.MutuallyExclusiveParameters !== undefined && data.MutuallyExclusiveParameters !== null) {
        contents.MutuallyExclusiveParameters = deserializeAws_restJson1ParameterList(data.MutuallyExclusiveParameters, context);
    }
    if (data.RequiredParameters !== undefined && data.RequiredParameters !== null) {
        contents.RequiredParameters = deserializeAws_restJson1ParameterList(data.RequiredParameters, context);
    }
    return contents;
};
const deserializeAws_restJson1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "LimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Code: undefined,
        Message: undefined,
        ResourceType: undefined,
    };
    const data = parsedOutput.body;
    if (data.Code !== undefined && data.Code !== null) {
        contents.Code = data.Code;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.ResourceType !== undefined && data.ResourceType !== null) {
        contents.ResourceType = data.ResourceType;
    }
    return contents;
};
const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Code: undefined,
        Message: undefined,
        ResourceIds: undefined,
        ResourceType: undefined,
    };
    const data = parsedOutput.body;
    if (data.Code !== undefined && data.Code !== null) {
        contents.Code = data.Code;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.ResourceIds !== undefined && data.ResourceIds !== null) {
        contents.ResourceIds = deserializeAws_restJson1PolicyIdList(data.ResourceIds, context);
    }
    if (data.ResourceType !== undefined && data.ResourceType !== null) {
        contents.ResourceType = data.ResourceType;
    }
    return contents;
};
const serializeAws_restJson1Action = (input, context) => {
    return {
        ...(input.CrossRegionCopy !== undefined &&
            input.CrossRegionCopy !== null && {
            CrossRegionCopy: serializeAws_restJson1CrossRegionCopyActionList(input.CrossRegionCopy, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_restJson1ActionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Action(entry, context);
    });
};
const serializeAws_restJson1AvailabilityZoneList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1CreateRule = (input, context) => {
    return {
        ...(input.CronExpression !== undefined &&
            input.CronExpression !== null && { CronExpression: input.CronExpression }),
        ...(input.Interval !== undefined && input.Interval !== null && { Interval: input.Interval }),
        ...(input.IntervalUnit !== undefined && input.IntervalUnit !== null && { IntervalUnit: input.IntervalUnit }),
        ...(input.Location !== undefined && input.Location !== null && { Location: input.Location }),
        ...(input.Times !== undefined &&
            input.Times !== null && { Times: serializeAws_restJson1TimesList(input.Times, context) }),
    };
};
const serializeAws_restJson1CrossRegionCopyAction = (input, context) => {
    return {
        ...(input.EncryptionConfiguration !== undefined &&
            input.EncryptionConfiguration !== null && {
            EncryptionConfiguration: serializeAws_restJson1EncryptionConfiguration(input.EncryptionConfiguration, context),
        }),
        ...(input.RetainRule !== undefined &&
            input.RetainRule !== null && {
            RetainRule: serializeAws_restJson1CrossRegionCopyRetainRule(input.RetainRule, context),
        }),
        ...(input.Target !== undefined && input.Target !== null && { Target: input.Target }),
    };
};
const serializeAws_restJson1CrossRegionCopyActionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1CrossRegionCopyAction(entry, context);
    });
};
const serializeAws_restJson1CrossRegionCopyRetainRule = (input, context) => {
    return {
        ...(input.Interval !== undefined && input.Interval !== null && { Interval: input.Interval }),
        ...(input.IntervalUnit !== undefined && input.IntervalUnit !== null && { IntervalUnit: input.IntervalUnit }),
    };
};
const serializeAws_restJson1CrossRegionCopyRule = (input, context) => {
    return {
        ...(input.CmkArn !== undefined && input.CmkArn !== null && { CmkArn: input.CmkArn }),
        ...(input.CopyTags !== undefined && input.CopyTags !== null && { CopyTags: input.CopyTags }),
        ...(input.Encrypted !== undefined && input.Encrypted !== null && { Encrypted: input.Encrypted }),
        ...(input.RetainRule !== undefined &&
            input.RetainRule !== null && {
            RetainRule: serializeAws_restJson1CrossRegionCopyRetainRule(input.RetainRule, context),
        }),
        ...(input.Target !== undefined && input.Target !== null && { Target: input.Target }),
        ...(input.TargetRegion !== undefined && input.TargetRegion !== null && { TargetRegion: input.TargetRegion }),
    };
};
const serializeAws_restJson1CrossRegionCopyRules = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1CrossRegionCopyRule(entry, context);
    });
};
const serializeAws_restJson1EncryptionConfiguration = (input, context) => {
    return {
        ...(input.CmkArn !== undefined && input.CmkArn !== null && { CmkArn: input.CmkArn }),
        ...(input.Encrypted !== undefined && input.Encrypted !== null && { Encrypted: input.Encrypted }),
    };
};
const serializeAws_restJson1EventParameters = (input, context) => {
    return {
        ...(input.DescriptionRegex !== undefined &&
            input.DescriptionRegex !== null && { DescriptionRegex: input.DescriptionRegex }),
        ...(input.EventType !== undefined && input.EventType !== null && { EventType: input.EventType }),
        ...(input.SnapshotOwner !== undefined &&
            input.SnapshotOwner !== null && {
            SnapshotOwner: serializeAws_restJson1SnapshotOwnerList(input.SnapshotOwner, context),
        }),
    };
};
const serializeAws_restJson1EventSource = (input, context) => {
    return {
        ...(input.Parameters !== undefined &&
            input.Parameters !== null && { Parameters: serializeAws_restJson1EventParameters(input.Parameters, context) }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_restJson1FastRestoreRule = (input, context) => {
    return {
        ...(input.AvailabilityZones !== undefined &&
            input.AvailabilityZones !== null && {
            AvailabilityZones: serializeAws_restJson1AvailabilityZoneList(input.AvailabilityZones, context),
        }),
        ...(input.Count !== undefined && input.Count !== null && { Count: input.Count }),
        ...(input.Interval !== undefined && input.Interval !== null && { Interval: input.Interval }),
        ...(input.IntervalUnit !== undefined && input.IntervalUnit !== null && { IntervalUnit: input.IntervalUnit }),
    };
};
const serializeAws_restJson1_Parameters = (input, context) => {
    return {
        ...(input.ExcludeBootVolume !== undefined &&
            input.ExcludeBootVolume !== null && { ExcludeBootVolume: input.ExcludeBootVolume }),
        ...(input.NoReboot !== undefined && input.NoReboot !== null && { NoReboot: input.NoReboot }),
    };
};
const serializeAws_restJson1PolicyDetails = (input, context) => {
    return {
        ...(input.Actions !== undefined &&
            input.Actions !== null && { Actions: serializeAws_restJson1ActionList(input.Actions, context) }),
        ...(input.EventSource !== undefined &&
            input.EventSource !== null && { EventSource: serializeAws_restJson1EventSource(input.EventSource, context) }),
        ...(input.Parameters !== undefined &&
            input.Parameters !== null && { Parameters: serializeAws_restJson1_Parameters(input.Parameters, context) }),
        ...(input.PolicyType !== undefined && input.PolicyType !== null && { PolicyType: input.PolicyType }),
        ...(input.ResourceLocations !== undefined &&
            input.ResourceLocations !== null && {
            ResourceLocations: serializeAws_restJson1ResourceLocationList(input.ResourceLocations, context),
        }),
        ...(input.ResourceTypes !== undefined &&
            input.ResourceTypes !== null && {
            ResourceTypes: serializeAws_restJson1ResourceTypeValuesList(input.ResourceTypes, context),
        }),
        ...(input.Schedules !== undefined &&
            input.Schedules !== null && { Schedules: serializeAws_restJson1ScheduleList(input.Schedules, context) }),
        ...(input.TargetTags !== undefined &&
            input.TargetTags !== null && { TargetTags: serializeAws_restJson1TargetTagList(input.TargetTags, context) }),
    };
};
const serializeAws_restJson1ResourceLocationList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1ResourceTypeValuesList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1RetainRule = (input, context) => {
    return {
        ...(input.Count !== undefined && input.Count !== null && { Count: input.Count }),
        ...(input.Interval !== undefined && input.Interval !== null && { Interval: input.Interval }),
        ...(input.IntervalUnit !== undefined && input.IntervalUnit !== null && { IntervalUnit: input.IntervalUnit }),
    };
};
const serializeAws_restJson1Schedule = (input, context) => {
    return {
        ...(input.CopyTags !== undefined && input.CopyTags !== null && { CopyTags: input.CopyTags }),
        ...(input.CreateRule !== undefined &&
            input.CreateRule !== null && { CreateRule: serializeAws_restJson1CreateRule(input.CreateRule, context) }),
        ...(input.CrossRegionCopyRules !== undefined &&
            input.CrossRegionCopyRules !== null && {
            CrossRegionCopyRules: serializeAws_restJson1CrossRegionCopyRules(input.CrossRegionCopyRules, context),
        }),
        ...(input.FastRestoreRule !== undefined &&
            input.FastRestoreRule !== null && {
            FastRestoreRule: serializeAws_restJson1FastRestoreRule(input.FastRestoreRule, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.RetainRule !== undefined &&
            input.RetainRule !== null && { RetainRule: serializeAws_restJson1RetainRule(input.RetainRule, context) }),
        ...(input.ShareRules !== undefined &&
            input.ShareRules !== null && { ShareRules: serializeAws_restJson1ShareRules(input.ShareRules, context) }),
        ...(input.TagsToAdd !== undefined &&
            input.TagsToAdd !== null && { TagsToAdd: serializeAws_restJson1TagsToAddList(input.TagsToAdd, context) }),
        ...(input.VariableTags !== undefined &&
            input.VariableTags !== null && {
            VariableTags: serializeAws_restJson1VariableTagsList(input.VariableTags, context),
        }),
    };
};
const serializeAws_restJson1ScheduleList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Schedule(entry, context);
    });
};
const serializeAws_restJson1ShareRule = (input, context) => {
    return {
        ...(input.TargetAccounts !== undefined &&
            input.TargetAccounts !== null && {
            TargetAccounts: serializeAws_restJson1ShareTargetAccountList(input.TargetAccounts, context),
        }),
        ...(input.UnshareInterval !== undefined &&
            input.UnshareInterval !== null && { UnshareInterval: input.UnshareInterval }),
        ...(input.UnshareIntervalUnit !== undefined &&
            input.UnshareIntervalUnit !== null && { UnshareIntervalUnit: input.UnshareIntervalUnit }),
    };
};
const serializeAws_restJson1ShareRules = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1ShareRule(entry, context);
    });
};
const serializeAws_restJson1ShareTargetAccountList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1SnapshotOwnerList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1Tag = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
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
const serializeAws_restJson1TagsToAddList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Tag(entry, context);
    });
};
const serializeAws_restJson1TargetTagList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Tag(entry, context);
    });
};
const serializeAws_restJson1TimesList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1VariableTagsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Tag(entry, context);
    });
};
const deserializeAws_restJson1Action = (output, context) => {
    return {
        CrossRegionCopy: output.CrossRegionCopy !== undefined && output.CrossRegionCopy !== null
            ? deserializeAws_restJson1CrossRegionCopyActionList(output.CrossRegionCopy, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_restJson1ActionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Action(entry, context);
    });
};
const deserializeAws_restJson1AvailabilityZoneList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1CreateRule = (output, context) => {
    return {
        CronExpression: output.CronExpression !== undefined && output.CronExpression !== null ? output.CronExpression : undefined,
        Interval: output.Interval !== undefined && output.Interval !== null ? output.Interval : undefined,
        IntervalUnit: output.IntervalUnit !== undefined && output.IntervalUnit !== null ? output.IntervalUnit : undefined,
        Location: output.Location !== undefined && output.Location !== null ? output.Location : undefined,
        Times: output.Times !== undefined && output.Times !== null
            ? deserializeAws_restJson1TimesList(output.Times, context)
            : undefined,
    };
};
const deserializeAws_restJson1CrossRegionCopyAction = (output, context) => {
    return {
        EncryptionConfiguration: output.EncryptionConfiguration !== undefined && output.EncryptionConfiguration !== null
            ? deserializeAws_restJson1EncryptionConfiguration(output.EncryptionConfiguration, context)
            : undefined,
        RetainRule: output.RetainRule !== undefined && output.RetainRule !== null
            ? deserializeAws_restJson1CrossRegionCopyRetainRule(output.RetainRule, context)
            : undefined,
        Target: output.Target !== undefined && output.Target !== null ? output.Target : undefined,
    };
};
const deserializeAws_restJson1CrossRegionCopyActionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1CrossRegionCopyAction(entry, context);
    });
};
const deserializeAws_restJson1CrossRegionCopyRetainRule = (output, context) => {
    return {
        Interval: output.Interval !== undefined && output.Interval !== null ? output.Interval : undefined,
        IntervalUnit: output.IntervalUnit !== undefined && output.IntervalUnit !== null ? output.IntervalUnit : undefined,
    };
};
const deserializeAws_restJson1CrossRegionCopyRule = (output, context) => {
    return {
        CmkArn: output.CmkArn !== undefined && output.CmkArn !== null ? output.CmkArn : undefined,
        CopyTags: output.CopyTags !== undefined && output.CopyTags !== null ? output.CopyTags : undefined,
        Encrypted: output.Encrypted !== undefined && output.Encrypted !== null ? output.Encrypted : undefined,
        RetainRule: output.RetainRule !== undefined && output.RetainRule !== null
            ? deserializeAws_restJson1CrossRegionCopyRetainRule(output.RetainRule, context)
            : undefined,
        Target: output.Target !== undefined && output.Target !== null ? output.Target : undefined,
        TargetRegion: output.TargetRegion !== undefined && output.TargetRegion !== null ? output.TargetRegion : undefined,
    };
};
const deserializeAws_restJson1CrossRegionCopyRules = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1CrossRegionCopyRule(entry, context);
    });
};
const deserializeAws_restJson1EncryptionConfiguration = (output, context) => {
    return {
        CmkArn: output.CmkArn !== undefined && output.CmkArn !== null ? output.CmkArn : undefined,
        Encrypted: output.Encrypted !== undefined && output.Encrypted !== null ? output.Encrypted : undefined,
    };
};
const deserializeAws_restJson1EventParameters = (output, context) => {
    return {
        DescriptionRegex: output.DescriptionRegex !== undefined && output.DescriptionRegex !== null ? output.DescriptionRegex : undefined,
        EventType: output.EventType !== undefined && output.EventType !== null ? output.EventType : undefined,
        SnapshotOwner: output.SnapshotOwner !== undefined && output.SnapshotOwner !== null
            ? deserializeAws_restJson1SnapshotOwnerList(output.SnapshotOwner, context)
            : undefined,
    };
};
const deserializeAws_restJson1EventSource = (output, context) => {
    return {
        Parameters: output.Parameters !== undefined && output.Parameters !== null
            ? deserializeAws_restJson1EventParameters(output.Parameters, context)
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1FastRestoreRule = (output, context) => {
    return {
        AvailabilityZones: output.AvailabilityZones !== undefined && output.AvailabilityZones !== null
            ? deserializeAws_restJson1AvailabilityZoneList(output.AvailabilityZones, context)
            : undefined,
        Count: output.Count !== undefined && output.Count !== null ? output.Count : undefined,
        Interval: output.Interval !== undefined && output.Interval !== null ? output.Interval : undefined,
        IntervalUnit: output.IntervalUnit !== undefined && output.IntervalUnit !== null ? output.IntervalUnit : undefined,
    };
};
const deserializeAws_restJson1LifecyclePolicy = (output, context) => {
    return {
        DateCreated: output.DateCreated !== undefined && output.DateCreated !== null
            ? new Date(Math.round(output.DateCreated * 1000))
            : undefined,
        DateModified: output.DateModified !== undefined && output.DateModified !== null
            ? new Date(Math.round(output.DateModified * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        ExecutionRoleArn: output.ExecutionRoleArn !== undefined && output.ExecutionRoleArn !== null ? output.ExecutionRoleArn : undefined,
        PolicyArn: output.PolicyArn !== undefined && output.PolicyArn !== null ? output.PolicyArn : undefined,
        PolicyDetails: output.PolicyDetails !== undefined && output.PolicyDetails !== null
            ? deserializeAws_restJson1PolicyDetails(output.PolicyDetails, context)
            : undefined,
        PolicyId: output.PolicyId !== undefined && output.PolicyId !== null ? output.PolicyId : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        StatusMessage: output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_restJson1TagMap(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1LifecyclePolicySummary = (output, context) => {
    return {
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        PolicyId: output.PolicyId !== undefined && output.PolicyId !== null ? output.PolicyId : undefined,
        PolicyType: output.PolicyType !== undefined && output.PolicyType !== null ? output.PolicyType : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_restJson1TagMap(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1LifecyclePolicySummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1LifecyclePolicySummary(entry, context);
    });
};
const deserializeAws_restJson1ParameterList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1_Parameters = (output, context) => {
    return {
        ExcludeBootVolume: output.ExcludeBootVolume !== undefined && output.ExcludeBootVolume !== null
            ? output.ExcludeBootVolume
            : undefined,
        NoReboot: output.NoReboot !== undefined && output.NoReboot !== null ? output.NoReboot : undefined,
    };
};
const deserializeAws_restJson1PolicyDetails = (output, context) => {
    return {
        Actions: output.Actions !== undefined && output.Actions !== null
            ? deserializeAws_restJson1ActionList(output.Actions, context)
            : undefined,
        EventSource: output.EventSource !== undefined && output.EventSource !== null
            ? deserializeAws_restJson1EventSource(output.EventSource, context)
            : undefined,
        Parameters: output.Parameters !== undefined && output.Parameters !== null
            ? deserializeAws_restJson1_Parameters(output.Parameters, context)
            : undefined,
        PolicyType: output.PolicyType !== undefined && output.PolicyType !== null ? output.PolicyType : undefined,
        ResourceLocations: output.ResourceLocations !== undefined && output.ResourceLocations !== null
            ? deserializeAws_restJson1ResourceLocationList(output.ResourceLocations, context)
            : undefined,
        ResourceTypes: output.ResourceTypes !== undefined && output.ResourceTypes !== null
            ? deserializeAws_restJson1ResourceTypeValuesList(output.ResourceTypes, context)
            : undefined,
        Schedules: output.Schedules !== undefined && output.Schedules !== null
            ? deserializeAws_restJson1ScheduleList(output.Schedules, context)
            : undefined,
        TargetTags: output.TargetTags !== undefined && output.TargetTags !== null
            ? deserializeAws_restJson1TargetTagList(output.TargetTags, context)
            : undefined,
    };
};
const deserializeAws_restJson1PolicyIdList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1ResourceLocationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1ResourceTypeValuesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1RetainRule = (output, context) => {
    return {
        Count: output.Count !== undefined && output.Count !== null ? output.Count : undefined,
        Interval: output.Interval !== undefined && output.Interval !== null ? output.Interval : undefined,
        IntervalUnit: output.IntervalUnit !== undefined && output.IntervalUnit !== null ? output.IntervalUnit : undefined,
    };
};
const deserializeAws_restJson1Schedule = (output, context) => {
    return {
        CopyTags: output.CopyTags !== undefined && output.CopyTags !== null ? output.CopyTags : undefined,
        CreateRule: output.CreateRule !== undefined && output.CreateRule !== null
            ? deserializeAws_restJson1CreateRule(output.CreateRule, context)
            : undefined,
        CrossRegionCopyRules: output.CrossRegionCopyRules !== undefined && output.CrossRegionCopyRules !== null
            ? deserializeAws_restJson1CrossRegionCopyRules(output.CrossRegionCopyRules, context)
            : undefined,
        FastRestoreRule: output.FastRestoreRule !== undefined && output.FastRestoreRule !== null
            ? deserializeAws_restJson1FastRestoreRule(output.FastRestoreRule, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        RetainRule: output.RetainRule !== undefined && output.RetainRule !== null
            ? deserializeAws_restJson1RetainRule(output.RetainRule, context)
            : undefined,
        ShareRules: output.ShareRules !== undefined && output.ShareRules !== null
            ? deserializeAws_restJson1ShareRules(output.ShareRules, context)
            : undefined,
        TagsToAdd: output.TagsToAdd !== undefined && output.TagsToAdd !== null
            ? deserializeAws_restJson1TagsToAddList(output.TagsToAdd, context)
            : undefined,
        VariableTags: output.VariableTags !== undefined && output.VariableTags !== null
            ? deserializeAws_restJson1VariableTagsList(output.VariableTags, context)
            : undefined,
    };
};
const deserializeAws_restJson1ScheduleList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Schedule(entry, context);
    });
};
const deserializeAws_restJson1ShareRule = (output, context) => {
    return {
        TargetAccounts: output.TargetAccounts !== undefined && output.TargetAccounts !== null
            ? deserializeAws_restJson1ShareTargetAccountList(output.TargetAccounts, context)
            : undefined,
        UnshareInterval: output.UnshareInterval !== undefined && output.UnshareInterval !== null ? output.UnshareInterval : undefined,
        UnshareIntervalUnit: output.UnshareIntervalUnit !== undefined && output.UnshareIntervalUnit !== null
            ? output.UnshareIntervalUnit
            : undefined,
    };
};
const deserializeAws_restJson1ShareRules = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ShareRule(entry, context);
    });
};
const deserializeAws_restJson1ShareTargetAccountList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1SnapshotOwnerList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1Tag = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
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
const deserializeAws_restJson1TagsToAddList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Tag(entry, context);
    });
};
const deserializeAws_restJson1TargetTagList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Tag(entry, context);
    });
};
const deserializeAws_restJson1TimesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1VariableTagsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Tag(entry, context);
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