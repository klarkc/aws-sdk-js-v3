"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1UpdateGroupQueryCommand = exports.deserializeAws_restJson1UpdateGroupCommand = exports.deserializeAws_restJson1UntagCommand = exports.deserializeAws_restJson1UngroupResourcesCommand = exports.deserializeAws_restJson1TagCommand = exports.deserializeAws_restJson1SearchResourcesCommand = exports.deserializeAws_restJson1PutGroupConfigurationCommand = exports.deserializeAws_restJson1ListGroupsCommand = exports.deserializeAws_restJson1ListGroupResourcesCommand = exports.deserializeAws_restJson1GroupResourcesCommand = exports.deserializeAws_restJson1GetTagsCommand = exports.deserializeAws_restJson1GetGroupQueryCommand = exports.deserializeAws_restJson1GetGroupConfigurationCommand = exports.deserializeAws_restJson1GetGroupCommand = exports.deserializeAws_restJson1DeleteGroupCommand = exports.deserializeAws_restJson1CreateGroupCommand = exports.serializeAws_restJson1UpdateGroupQueryCommand = exports.serializeAws_restJson1UpdateGroupCommand = exports.serializeAws_restJson1UntagCommand = exports.serializeAws_restJson1UngroupResourcesCommand = exports.serializeAws_restJson1TagCommand = exports.serializeAws_restJson1SearchResourcesCommand = exports.serializeAws_restJson1PutGroupConfigurationCommand = exports.serializeAws_restJson1ListGroupsCommand = exports.serializeAws_restJson1ListGroupResourcesCommand = exports.serializeAws_restJson1GroupResourcesCommand = exports.serializeAws_restJson1GetTagsCommand = exports.serializeAws_restJson1GetGroupQueryCommand = exports.serializeAws_restJson1GetGroupConfigurationCommand = exports.serializeAws_restJson1GetGroupCommand = exports.serializeAws_restJson1DeleteGroupCommand = exports.serializeAws_restJson1CreateGroupCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1CreateGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/groups";
    let body;
    body = JSON.stringify({
        ...(input.Configuration !== undefined &&
            input.Configuration !== null && {
            Configuration: serializeAws_restJson1GroupConfigurationList(input.Configuration, context),
        }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.ResourceQuery !== undefined &&
            input.ResourceQuery !== null && {
            ResourceQuery: serializeAws_restJson1ResourceQuery(input.ResourceQuery, context),
        }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1Tags(input.Tags, context) }),
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
exports.serializeAws_restJson1CreateGroupCommand = serializeAws_restJson1CreateGroupCommand;
const serializeAws_restJson1DeleteGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/delete-group";
    let body;
    body = JSON.stringify({
        ...(input.Group !== undefined && input.Group !== null && { Group: input.Group }),
        ...(input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName }),
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
exports.serializeAws_restJson1DeleteGroupCommand = serializeAws_restJson1DeleteGroupCommand;
const serializeAws_restJson1GetGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/get-group";
    let body;
    body = JSON.stringify({
        ...(input.Group !== undefined && input.Group !== null && { Group: input.Group }),
        ...(input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName }),
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
exports.serializeAws_restJson1GetGroupCommand = serializeAws_restJson1GetGroupCommand;
const serializeAws_restJson1GetGroupConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/get-group-configuration";
    let body;
    body = JSON.stringify({
        ...(input.Group !== undefined && input.Group !== null && { Group: input.Group }),
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
exports.serializeAws_restJson1GetGroupConfigurationCommand = serializeAws_restJson1GetGroupConfigurationCommand;
const serializeAws_restJson1GetGroupQueryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/get-group-query";
    let body;
    body = JSON.stringify({
        ...(input.Group !== undefined && input.Group !== null && { Group: input.Group }),
        ...(input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName }),
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
exports.serializeAws_restJson1GetGroupQueryCommand = serializeAws_restJson1GetGroupQueryCommand;
const serializeAws_restJson1GetTagsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/resources/{Arn}/tags";
    if (input.Arn !== undefined) {
        const labelValue = input.Arn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Arn.");
        }
        resolvedPath = resolvedPath.replace("{Arn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Arn.");
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
exports.serializeAws_restJson1GetTagsCommand = serializeAws_restJson1GetTagsCommand;
const serializeAws_restJson1GroupResourcesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/group-resources";
    let body;
    body = JSON.stringify({
        ...(input.Group !== undefined && input.Group !== null && { Group: input.Group }),
        ...(input.ResourceArns !== undefined &&
            input.ResourceArns !== null && {
            ResourceArns: serializeAws_restJson1ResourceArnList(input.ResourceArns, context),
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
exports.serializeAws_restJson1GroupResourcesCommand = serializeAws_restJson1GroupResourcesCommand;
const serializeAws_restJson1ListGroupResourcesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/list-group-resources";
    let body;
    body = JSON.stringify({
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_restJson1ResourceFilterList(input.Filters, context) }),
        ...(input.Group !== undefined && input.Group !== null && { Group: input.Group }),
        ...(input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
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
exports.serializeAws_restJson1ListGroupResourcesCommand = serializeAws_restJson1ListGroupResourcesCommand;
const serializeAws_restJson1ListGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/groups-list";
    const query = {
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    };
    let body;
    body = JSON.stringify({
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_restJson1GroupFilterList(input.Filters, context) }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListGroupsCommand = serializeAws_restJson1ListGroupsCommand;
const serializeAws_restJson1PutGroupConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/put-group-configuration";
    let body;
    body = JSON.stringify({
        ...(input.Configuration !== undefined &&
            input.Configuration !== null && {
            Configuration: serializeAws_restJson1GroupConfigurationList(input.Configuration, context),
        }),
        ...(input.Group !== undefined && input.Group !== null && { Group: input.Group }),
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
exports.serializeAws_restJson1PutGroupConfigurationCommand = serializeAws_restJson1PutGroupConfigurationCommand;
const serializeAws_restJson1SearchResourcesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/resources/search";
    let body;
    body = JSON.stringify({
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ResourceQuery !== undefined &&
            input.ResourceQuery !== null && {
            ResourceQuery: serializeAws_restJson1ResourceQuery(input.ResourceQuery, context),
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
exports.serializeAws_restJson1SearchResourcesCommand = serializeAws_restJson1SearchResourcesCommand;
const serializeAws_restJson1TagCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/resources/{Arn}/tags";
    if (input.Arn !== undefined) {
        const labelValue = input.Arn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Arn.");
        }
        resolvedPath = resolvedPath.replace("{Arn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Arn.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1Tags(input.Tags, context) }),
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
exports.serializeAws_restJson1TagCommand = serializeAws_restJson1TagCommand;
const serializeAws_restJson1UngroupResourcesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/ungroup-resources";
    let body;
    body = JSON.stringify({
        ...(input.Group !== undefined && input.Group !== null && { Group: input.Group }),
        ...(input.ResourceArns !== undefined &&
            input.ResourceArns !== null && {
            ResourceArns: serializeAws_restJson1ResourceArnList(input.ResourceArns, context),
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
exports.serializeAws_restJson1UngroupResourcesCommand = serializeAws_restJson1UngroupResourcesCommand;
const serializeAws_restJson1UntagCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/resources/{Arn}/tags";
    if (input.Arn !== undefined) {
        const labelValue = input.Arn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Arn.");
        }
        resolvedPath = resolvedPath.replace("{Arn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Arn.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Keys !== undefined &&
            input.Keys !== null && { Keys: serializeAws_restJson1TagKeyList(input.Keys, context) }),
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
exports.serializeAws_restJson1UntagCommand = serializeAws_restJson1UntagCommand;
const serializeAws_restJson1UpdateGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/update-group";
    let body;
    body = JSON.stringify({
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Group !== undefined && input.Group !== null && { Group: input.Group }),
        ...(input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName }),
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
exports.serializeAws_restJson1UpdateGroupCommand = serializeAws_restJson1UpdateGroupCommand;
const serializeAws_restJson1UpdateGroupQueryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/update-group-query";
    let body;
    body = JSON.stringify({
        ...(input.Group !== undefined && input.Group !== null && { Group: input.Group }),
        ...(input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName }),
        ...(input.ResourceQuery !== undefined &&
            input.ResourceQuery !== null && {
            ResourceQuery: serializeAws_restJson1ResourceQuery(input.ResourceQuery, context),
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
exports.serializeAws_restJson1UpdateGroupQueryCommand = serializeAws_restJson1UpdateGroupQueryCommand;
const deserializeAws_restJson1CreateGroupCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Group: undefined,
        GroupConfiguration: undefined,
        ResourceQuery: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Group !== undefined && data.Group !== null) {
        contents.Group = deserializeAws_restJson1Group(data.Group, context);
    }
    if (data.GroupConfiguration !== undefined && data.GroupConfiguration !== null) {
        contents.GroupConfiguration = deserializeAws_restJson1GroupConfiguration(data.GroupConfiguration, context);
    }
    if (data.ResourceQuery !== undefined && data.ResourceQuery !== null) {
        contents.ResourceQuery = deserializeAws_restJson1ResourceQuery(data.ResourceQuery, context);
    }
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateGroupCommand = deserializeAws_restJson1CreateGroupCommand;
const deserializeAws_restJson1CreateGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.resourcegroups#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.resourcegroups#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.resourcegroups#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.resourcegroups#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.resourcegroups#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteGroupCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Group: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Group !== undefined && data.Group !== null) {
        contents.Group = deserializeAws_restJson1Group(data.Group, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteGroupCommand = deserializeAws_restJson1DeleteGroupCommand;
const deserializeAws_restJson1DeleteGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.resourcegroups#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.resourcegroups#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.resourcegroups#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.resourcegroups#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.resourcegroups#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.resourcegroups#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetGroupCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Group: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Group !== undefined && data.Group !== null) {
        contents.Group = deserializeAws_restJson1Group(data.Group, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetGroupCommand = deserializeAws_restJson1GetGroupCommand;
const deserializeAws_restJson1GetGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.resourcegroups#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.resourcegroups#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.resourcegroups#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.resourcegroups#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.resourcegroups#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.resourcegroups#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetGroupConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetGroupConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        GroupConfiguration: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.GroupConfiguration !== undefined && data.GroupConfiguration !== null) {
        contents.GroupConfiguration = deserializeAws_restJson1GroupConfiguration(data.GroupConfiguration, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetGroupConfigurationCommand = deserializeAws_restJson1GetGroupConfigurationCommand;
const deserializeAws_restJson1GetGroupConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.resourcegroups#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.resourcegroups#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.resourcegroups#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.resourcegroups#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.resourcegroups#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.resourcegroups#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetGroupQueryCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetGroupQueryCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        GroupQuery: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.GroupQuery !== undefined && data.GroupQuery !== null) {
        contents.GroupQuery = deserializeAws_restJson1GroupQuery(data.GroupQuery, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetGroupQueryCommand = deserializeAws_restJson1GetGroupQueryCommand;
const deserializeAws_restJson1GetGroupQueryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.resourcegroups#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.resourcegroups#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.resourcegroups#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.resourcegroups#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.resourcegroups#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.resourcegroups#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetTagsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetTagsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetTagsCommand = deserializeAws_restJson1GetTagsCommand;
const deserializeAws_restJson1GetTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.resourcegroups#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.resourcegroups#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.resourcegroups#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.resourcegroups#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.resourcegroups#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.resourcegroups#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GroupResourcesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GroupResourcesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Failed: undefined,
        Pending: undefined,
        Succeeded: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Failed !== undefined && data.Failed !== null) {
        contents.Failed = deserializeAws_restJson1FailedResourceList(data.Failed, context);
    }
    if (data.Pending !== undefined && data.Pending !== null) {
        contents.Pending = deserializeAws_restJson1PendingResourceList(data.Pending, context);
    }
    if (data.Succeeded !== undefined && data.Succeeded !== null) {
        contents.Succeeded = deserializeAws_restJson1ResourceArnList(data.Succeeded, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GroupResourcesCommand = deserializeAws_restJson1GroupResourcesCommand;
const deserializeAws_restJson1GroupResourcesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.resourcegroups#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.resourcegroups#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.resourcegroups#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.resourcegroups#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.resourcegroups#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.resourcegroups#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListGroupResourcesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListGroupResourcesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        QueryErrors: undefined,
        ResourceIdentifiers: undefined,
        Resources: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.QueryErrors !== undefined && data.QueryErrors !== null) {
        contents.QueryErrors = deserializeAws_restJson1QueryErrorList(data.QueryErrors, context);
    }
    if (data.ResourceIdentifiers !== undefined && data.ResourceIdentifiers !== null) {
        contents.ResourceIdentifiers = deserializeAws_restJson1ResourceIdentifierList(data.ResourceIdentifiers, context);
    }
    if (data.Resources !== undefined && data.Resources !== null) {
        contents.Resources = deserializeAws_restJson1ListGroupResourcesItemList(data.Resources, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListGroupResourcesCommand = deserializeAws_restJson1ListGroupResourcesCommand;
const deserializeAws_restJson1ListGroupResourcesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.resourcegroups#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.resourcegroups#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.resourcegroups#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.resourcegroups#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.resourcegroups#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.resourcegroups#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.resourcegroups#UnauthorizedException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListGroupsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListGroupsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        GroupIdentifiers: undefined,
        Groups: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.GroupIdentifiers !== undefined && data.GroupIdentifiers !== null) {
        contents.GroupIdentifiers = deserializeAws_restJson1GroupIdentifierList(data.GroupIdentifiers, context);
    }
    if (data.Groups !== undefined && data.Groups !== null) {
        contents.Groups = deserializeAws_restJson1GroupList(data.Groups, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListGroupsCommand = deserializeAws_restJson1ListGroupsCommand;
const deserializeAws_restJson1ListGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.resourcegroups#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.resourcegroups#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.resourcegroups#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.resourcegroups#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.resourcegroups#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1PutGroupConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutGroupConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutGroupConfigurationCommand = deserializeAws_restJson1PutGroupConfigurationCommand;
const deserializeAws_restJson1PutGroupConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.resourcegroups#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.resourcegroups#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.resourcegroups#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.resourcegroups#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.resourcegroups#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.resourcegroups#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1SearchResourcesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1SearchResourcesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        QueryErrors: undefined,
        ResourceIdentifiers: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.QueryErrors !== undefined && data.QueryErrors !== null) {
        contents.QueryErrors = deserializeAws_restJson1QueryErrorList(data.QueryErrors, context);
    }
    if (data.ResourceIdentifiers !== undefined && data.ResourceIdentifiers !== null) {
        contents.ResourceIdentifiers = deserializeAws_restJson1ResourceIdentifierList(data.ResourceIdentifiers, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1SearchResourcesCommand = deserializeAws_restJson1SearchResourcesCommand;
const deserializeAws_restJson1SearchResourcesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.resourcegroups#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.resourcegroups#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.resourcegroups#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.resourcegroups#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.resourcegroups#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.resourcegroups#UnauthorizedException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1TagCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1TagCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1TagCommand = deserializeAws_restJson1TagCommand;
const deserializeAws_restJson1TagCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.resourcegroups#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.resourcegroups#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.resourcegroups#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.resourcegroups#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.resourcegroups#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.resourcegroups#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UngroupResourcesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UngroupResourcesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Failed: undefined,
        Pending: undefined,
        Succeeded: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Failed !== undefined && data.Failed !== null) {
        contents.Failed = deserializeAws_restJson1FailedResourceList(data.Failed, context);
    }
    if (data.Pending !== undefined && data.Pending !== null) {
        contents.Pending = deserializeAws_restJson1PendingResourceList(data.Pending, context);
    }
    if (data.Succeeded !== undefined && data.Succeeded !== null) {
        contents.Succeeded = deserializeAws_restJson1ResourceArnList(data.Succeeded, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UngroupResourcesCommand = deserializeAws_restJson1UngroupResourcesCommand;
const deserializeAws_restJson1UngroupResourcesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.resourcegroups#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.resourcegroups#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.resourcegroups#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.resourcegroups#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.resourcegroups#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.resourcegroups#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UntagCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UntagCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        Keys: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.Keys !== undefined && data.Keys !== null) {
        contents.Keys = deserializeAws_restJson1TagKeyList(data.Keys, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UntagCommand = deserializeAws_restJson1UntagCommand;
const deserializeAws_restJson1UntagCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.resourcegroups#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.resourcegroups#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.resourcegroups#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.resourcegroups#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.resourcegroups#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.resourcegroups#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateGroupCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Group: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Group !== undefined && data.Group !== null) {
        contents.Group = deserializeAws_restJson1Group(data.Group, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateGroupCommand = deserializeAws_restJson1UpdateGroupCommand;
const deserializeAws_restJson1UpdateGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.resourcegroups#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.resourcegroups#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.resourcegroups#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.resourcegroups#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.resourcegroups#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.resourcegroups#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateGroupQueryCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateGroupQueryCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        GroupQuery: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.GroupQuery !== undefined && data.GroupQuery !== null) {
        contents.GroupQuery = deserializeAws_restJson1GroupQuery(data.GroupQuery, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateGroupQueryCommand = deserializeAws_restJson1UpdateGroupQueryCommand;
const deserializeAws_restJson1UpdateGroupQueryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.resourcegroups#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.resourcegroups#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.resourcegroups#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.resourcegroups#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.resourcegroups#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.resourcegroups#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1BadRequestExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "BadRequestException",
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
const deserializeAws_restJson1ForbiddenExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ForbiddenException",
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
const deserializeAws_restJson1InternalServerErrorExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServerErrorException",
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
const deserializeAws_restJson1MethodNotAllowedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "MethodNotAllowedException",
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
const deserializeAws_restJson1NotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NotFoundException",
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
const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyRequestsException",
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
const deserializeAws_restJson1UnauthorizedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "UnauthorizedException",
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
const serializeAws_restJson1GroupConfigurationItem = (input, context) => {
    return {
        ...(input.Parameters !== undefined &&
            input.Parameters !== null && { Parameters: serializeAws_restJson1GroupParameterList(input.Parameters, context) }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_restJson1GroupConfigurationList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1GroupConfigurationItem(entry, context);
    });
};
const serializeAws_restJson1GroupConfigurationParameter = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Values !== undefined &&
            input.Values !== null && {
            Values: serializeAws_restJson1GroupConfigurationParameterValueList(input.Values, context),
        }),
    };
};
const serializeAws_restJson1GroupConfigurationParameterValueList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1GroupFilter = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_restJson1GroupFilterValues(input.Values, context) }),
    };
};
const serializeAws_restJson1GroupFilterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1GroupFilter(entry, context);
    });
};
const serializeAws_restJson1GroupFilterValues = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1GroupParameterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1GroupConfigurationParameter(entry, context);
    });
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
const serializeAws_restJson1ResourceFilter = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_restJson1ResourceFilterValues(input.Values, context) }),
    };
};
const serializeAws_restJson1ResourceFilterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1ResourceFilter(entry, context);
    });
};
const serializeAws_restJson1ResourceFilterValues = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1ResourceQuery = (input, context) => {
    return {
        ...(input.Query !== undefined && input.Query !== null && { Query: input.Query }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_restJson1TagKeyList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1Tags = (input, context) => {
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
const deserializeAws_restJson1FailedResource = (output, context) => {
    return {
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        ResourceArn: output.ResourceArn !== undefined && output.ResourceArn !== null ? output.ResourceArn : undefined,
    };
};
const deserializeAws_restJson1FailedResourceList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1FailedResource(entry, context);
    });
};
const deserializeAws_restJson1Group = (output, context) => {
    return {
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        GroupArn: output.GroupArn !== undefined && output.GroupArn !== null ? output.GroupArn : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_restJson1GroupConfiguration = (output, context) => {
    return {
        Configuration: output.Configuration !== undefined && output.Configuration !== null
            ? deserializeAws_restJson1GroupConfigurationList(output.Configuration, context)
            : undefined,
        FailureReason: output.FailureReason !== undefined && output.FailureReason !== null ? output.FailureReason : undefined,
        ProposedConfiguration: output.ProposedConfiguration !== undefined && output.ProposedConfiguration !== null
            ? deserializeAws_restJson1GroupConfigurationList(output.ProposedConfiguration, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_restJson1GroupConfigurationItem = (output, context) => {
    return {
        Parameters: output.Parameters !== undefined && output.Parameters !== null
            ? deserializeAws_restJson1GroupParameterList(output.Parameters, context)
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1GroupConfigurationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1GroupConfigurationItem(entry, context);
    });
};
const deserializeAws_restJson1GroupConfigurationParameter = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Values: output.Values !== undefined && output.Values !== null
            ? deserializeAws_restJson1GroupConfigurationParameterValueList(output.Values, context)
            : undefined,
    };
};
const deserializeAws_restJson1GroupConfigurationParameterValueList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1GroupIdentifier = (output, context) => {
    return {
        GroupArn: output.GroupArn !== undefined && output.GroupArn !== null ? output.GroupArn : undefined,
        GroupName: output.GroupName !== undefined && output.GroupName !== null ? output.GroupName : undefined,
    };
};
const deserializeAws_restJson1GroupIdentifierList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1GroupIdentifier(entry, context);
    });
};
const deserializeAws_restJson1GroupList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Group(entry, context);
    });
};
const deserializeAws_restJson1GroupParameterList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1GroupConfigurationParameter(entry, context);
    });
};
const deserializeAws_restJson1GroupQuery = (output, context) => {
    return {
        GroupName: output.GroupName !== undefined && output.GroupName !== null ? output.GroupName : undefined,
        ResourceQuery: output.ResourceQuery !== undefined && output.ResourceQuery !== null
            ? deserializeAws_restJson1ResourceQuery(output.ResourceQuery, context)
            : undefined,
    };
};
const deserializeAws_restJson1ListGroupResourcesItem = (output, context) => {
    return {
        Identifier: output.Identifier !== undefined && output.Identifier !== null
            ? deserializeAws_restJson1ResourceIdentifier(output.Identifier, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null
            ? deserializeAws_restJson1ResourceStatus(output.Status, context)
            : undefined,
    };
};
const deserializeAws_restJson1ListGroupResourcesItemList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ListGroupResourcesItem(entry, context);
    });
};
const deserializeAws_restJson1PendingResource = (output, context) => {
    return {
        ResourceArn: output.ResourceArn !== undefined && output.ResourceArn !== null ? output.ResourceArn : undefined,
    };
};
const deserializeAws_restJson1PendingResourceList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PendingResource(entry, context);
    });
};
const deserializeAws_restJson1QueryError = (output, context) => {
    return {
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_restJson1QueryErrorList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1QueryError(entry, context);
    });
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
const deserializeAws_restJson1ResourceIdentifier = (output, context) => {
    return {
        ResourceArn: output.ResourceArn !== undefined && output.ResourceArn !== null ? output.ResourceArn : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    };
};
const deserializeAws_restJson1ResourceIdentifierList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ResourceIdentifier(entry, context);
    });
};
const deserializeAws_restJson1ResourceQuery = (output, context) => {
    return {
        Query: output.Query !== undefined && output.Query !== null ? output.Query : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1ResourceStatus = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_restJson1TagKeyList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1Tags = (output, context) => {
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