"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1StartJobRunCommand = exports.deserializeAws_restJson1ListVirtualClustersCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1ListManagedEndpointsCommand = exports.deserializeAws_restJson1ListJobRunsCommand = exports.deserializeAws_restJson1DescribeVirtualClusterCommand = exports.deserializeAws_restJson1DescribeManagedEndpointCommand = exports.deserializeAws_restJson1DescribeJobRunCommand = exports.deserializeAws_restJson1DeleteVirtualClusterCommand = exports.deserializeAws_restJson1DeleteManagedEndpointCommand = exports.deserializeAws_restJson1CreateVirtualClusterCommand = exports.deserializeAws_restJson1CreateManagedEndpointCommand = exports.deserializeAws_restJson1CancelJobRunCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1StartJobRunCommand = exports.serializeAws_restJson1ListVirtualClustersCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1ListManagedEndpointsCommand = exports.serializeAws_restJson1ListJobRunsCommand = exports.serializeAws_restJson1DescribeVirtualClusterCommand = exports.serializeAws_restJson1DescribeManagedEndpointCommand = exports.serializeAws_restJson1DescribeJobRunCommand = exports.serializeAws_restJson1DeleteVirtualClusterCommand = exports.serializeAws_restJson1DeleteManagedEndpointCommand = exports.serializeAws_restJson1CreateVirtualClusterCommand = exports.serializeAws_restJson1CreateManagedEndpointCommand = exports.serializeAws_restJson1CancelJobRunCommand = void 0;
const models_0_1 = require("../models/models_0");
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const uuid_1 = require("uuid");
const serializeAws_restJson1CancelJobRunCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/virtualclusters/{virtualClusterId}/jobruns/{id}";
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
    if (input.virtualClusterId !== undefined) {
        const labelValue = input.virtualClusterId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: virtualClusterId.");
        }
        resolvedPath = resolvedPath.replace("{virtualClusterId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: virtualClusterId.");
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
exports.serializeAws_restJson1CancelJobRunCommand = serializeAws_restJson1CancelJobRunCommand;
const serializeAws_restJson1CreateManagedEndpointCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/virtualclusters/{virtualClusterId}/endpoints";
    if (input.virtualClusterId !== undefined) {
        const labelValue = input.virtualClusterId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: virtualClusterId.");
        }
        resolvedPath = resolvedPath.replace("{virtualClusterId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: virtualClusterId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.certificateArn !== undefined &&
            input.certificateArn !== null && { certificateArn: input.certificateArn }),
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.configurationOverrides !== undefined &&
            input.configurationOverrides !== null && {
            configurationOverrides: serializeAws_restJson1ConfigurationOverrides(input.configurationOverrides, context),
        }),
        ...(input.executionRoleArn !== undefined &&
            input.executionRoleArn !== null && { executionRoleArn: input.executionRoleArn }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.releaseLabel !== undefined && input.releaseLabel !== null && { releaseLabel: input.releaseLabel }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
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
exports.serializeAws_restJson1CreateManagedEndpointCommand = serializeAws_restJson1CreateManagedEndpointCommand;
const serializeAws_restJson1CreateVirtualClusterCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/virtualclusters";
    let body;
    body = JSON.stringify({
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.containerProvider !== undefined &&
            input.containerProvider !== null && {
            containerProvider: serializeAws_restJson1ContainerProvider(input.containerProvider, context),
        }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
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
exports.serializeAws_restJson1CreateVirtualClusterCommand = serializeAws_restJson1CreateVirtualClusterCommand;
const serializeAws_restJson1DeleteManagedEndpointCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/virtualclusters/{virtualClusterId}/endpoints/{id}";
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
    if (input.virtualClusterId !== undefined) {
        const labelValue = input.virtualClusterId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: virtualClusterId.");
        }
        resolvedPath = resolvedPath.replace("{virtualClusterId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: virtualClusterId.");
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
exports.serializeAws_restJson1DeleteManagedEndpointCommand = serializeAws_restJson1DeleteManagedEndpointCommand;
const serializeAws_restJson1DeleteVirtualClusterCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/virtualclusters/{id}";
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
exports.serializeAws_restJson1DeleteVirtualClusterCommand = serializeAws_restJson1DeleteVirtualClusterCommand;
const serializeAws_restJson1DescribeJobRunCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/virtualclusters/{virtualClusterId}/jobruns/{id}";
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
    if (input.virtualClusterId !== undefined) {
        const labelValue = input.virtualClusterId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: virtualClusterId.");
        }
        resolvedPath = resolvedPath.replace("{virtualClusterId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: virtualClusterId.");
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
exports.serializeAws_restJson1DescribeJobRunCommand = serializeAws_restJson1DescribeJobRunCommand;
const serializeAws_restJson1DescribeManagedEndpointCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/virtualclusters/{virtualClusterId}/endpoints/{id}";
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
    if (input.virtualClusterId !== undefined) {
        const labelValue = input.virtualClusterId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: virtualClusterId.");
        }
        resolvedPath = resolvedPath.replace("{virtualClusterId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: virtualClusterId.");
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
exports.serializeAws_restJson1DescribeManagedEndpointCommand = serializeAws_restJson1DescribeManagedEndpointCommand;
const serializeAws_restJson1DescribeVirtualClusterCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/virtualclusters/{id}";
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
exports.serializeAws_restJson1DescribeVirtualClusterCommand = serializeAws_restJson1DescribeVirtualClusterCommand;
const serializeAws_restJson1ListJobRunsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/virtualclusters/{virtualClusterId}/jobruns";
    if (input.virtualClusterId !== undefined) {
        const labelValue = input.virtualClusterId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: virtualClusterId.");
        }
        resolvedPath = resolvedPath.replace("{virtualClusterId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: virtualClusterId.");
    }
    const query = {
        ...(input.createdBefore !== undefined && {
            createdBefore: (input.createdBefore.toISOString().split(".")[0] + "Z").toString(),
        }),
        ...(input.createdAfter !== undefined && {
            createdAfter: (input.createdAfter.toISOString().split(".")[0] + "Z").toString(),
        }),
        ...(input.name !== undefined && { name: input.name }),
        ...(input.states !== undefined && { states: (input.states || []).map((_entry) => _entry) }),
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
exports.serializeAws_restJson1ListJobRunsCommand = serializeAws_restJson1ListJobRunsCommand;
const serializeAws_restJson1ListManagedEndpointsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/virtualclusters/{virtualClusterId}/endpoints";
    if (input.virtualClusterId !== undefined) {
        const labelValue = input.virtualClusterId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: virtualClusterId.");
        }
        resolvedPath = resolvedPath.replace("{virtualClusterId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: virtualClusterId.");
    }
    const query = {
        ...(input.createdBefore !== undefined && {
            createdBefore: (input.createdBefore.toISOString().split(".")[0] + "Z").toString(),
        }),
        ...(input.createdAfter !== undefined && {
            createdAfter: (input.createdAfter.toISOString().split(".")[0] + "Z").toString(),
        }),
        ...(input.types !== undefined && { types: (input.types || []).map((_entry) => _entry) }),
        ...(input.states !== undefined && { states: (input.states || []).map((_entry) => _entry) }),
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
exports.serializeAws_restJson1ListManagedEndpointsCommand = serializeAws_restJson1ListManagedEndpointsCommand;
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
const serializeAws_restJson1ListVirtualClustersCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/virtualclusters";
    const query = {
        ...(input.containerProviderId !== undefined && { containerProviderId: input.containerProviderId }),
        ...(input.containerProviderType !== undefined && { containerProviderType: input.containerProviderType }),
        ...(input.createdAfter !== undefined && {
            createdAfter: (input.createdAfter.toISOString().split(".")[0] + "Z").toString(),
        }),
        ...(input.createdBefore !== undefined && {
            createdBefore: (input.createdBefore.toISOString().split(".")[0] + "Z").toString(),
        }),
        ...(input.states !== undefined && { states: (input.states || []).map((_entry) => _entry) }),
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
exports.serializeAws_restJson1ListVirtualClustersCommand = serializeAws_restJson1ListVirtualClustersCommand;
const serializeAws_restJson1StartJobRunCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/virtualclusters/{virtualClusterId}/jobruns";
    if (input.virtualClusterId !== undefined) {
        const labelValue = input.virtualClusterId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: virtualClusterId.");
        }
        resolvedPath = resolvedPath.replace("{virtualClusterId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: virtualClusterId.");
    }
    let body;
    body = JSON.stringify({
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.configurationOverrides !== undefined &&
            input.configurationOverrides !== null && {
            configurationOverrides: serializeAws_restJson1ConfigurationOverrides(input.configurationOverrides, context),
        }),
        ...(input.executionRoleArn !== undefined &&
            input.executionRoleArn !== null && { executionRoleArn: input.executionRoleArn }),
        ...(input.jobDriver !== undefined &&
            input.jobDriver !== null && { jobDriver: serializeAws_restJson1JobDriver(input.jobDriver, context) }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.releaseLabel !== undefined && input.releaseLabel !== null && { releaseLabel: input.releaseLabel }),
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
exports.serializeAws_restJson1StartJobRunCommand = serializeAws_restJson1StartJobRunCommand;
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
const deserializeAws_restJson1CancelJobRunCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CancelJobRunCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        id: undefined,
        virtualClusterId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.id !== undefined && data.id !== null) {
        contents.id = data.id;
    }
    if (data.virtualClusterId !== undefined && data.virtualClusterId !== null) {
        contents.virtualClusterId = data.virtualClusterId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CancelJobRunCommand = deserializeAws_restJson1CancelJobRunCommand;
const deserializeAws_restJson1CancelJobRunCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.emrcontainers#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.emrcontainers#ValidationException":
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
const deserializeAws_restJson1CreateManagedEndpointCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateManagedEndpointCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
        id: undefined,
        name: undefined,
        virtualClusterId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.id !== undefined && data.id !== null) {
        contents.id = data.id;
    }
    if (data.name !== undefined && data.name !== null) {
        contents.name = data.name;
    }
    if (data.virtualClusterId !== undefined && data.virtualClusterId !== null) {
        contents.virtualClusterId = data.virtualClusterId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateManagedEndpointCommand = deserializeAws_restJson1CreateManagedEndpointCommand;
const deserializeAws_restJson1CreateManagedEndpointCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.emrcontainers#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.emrcontainers#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.emrcontainers#ValidationException":
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
const deserializeAws_restJson1CreateVirtualClusterCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateVirtualClusterCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
        id: undefined,
        name: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.id !== undefined && data.id !== null) {
        contents.id = data.id;
    }
    if (data.name !== undefined && data.name !== null) {
        contents.name = data.name;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateVirtualClusterCommand = deserializeAws_restJson1CreateVirtualClusterCommand;
const deserializeAws_restJson1CreateVirtualClusterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.emrcontainers#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.emrcontainers#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.emrcontainers#ValidationException":
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
const deserializeAws_restJson1DeleteManagedEndpointCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteManagedEndpointCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        id: undefined,
        virtualClusterId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.id !== undefined && data.id !== null) {
        contents.id = data.id;
    }
    if (data.virtualClusterId !== undefined && data.virtualClusterId !== null) {
        contents.virtualClusterId = data.virtualClusterId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteManagedEndpointCommand = deserializeAws_restJson1DeleteManagedEndpointCommand;
const deserializeAws_restJson1DeleteManagedEndpointCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.emrcontainers#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.emrcontainers#ValidationException":
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
const deserializeAws_restJson1DeleteVirtualClusterCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteVirtualClusterCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        id: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.id !== undefined && data.id !== null) {
        contents.id = data.id;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteVirtualClusterCommand = deserializeAws_restJson1DeleteVirtualClusterCommand;
const deserializeAws_restJson1DeleteVirtualClusterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.emrcontainers#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.emrcontainers#ValidationException":
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
const deserializeAws_restJson1DescribeJobRunCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeJobRunCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        jobRun: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.jobRun !== undefined && data.jobRun !== null) {
        contents.jobRun = deserializeAws_restJson1JobRun(data.jobRun, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeJobRunCommand = deserializeAws_restJson1DescribeJobRunCommand;
const deserializeAws_restJson1DescribeJobRunCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.emrcontainers#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.emrcontainers#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.emrcontainers#ValidationException":
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
const deserializeAws_restJson1DescribeManagedEndpointCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeManagedEndpointCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        endpoint: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.endpoint !== undefined && data.endpoint !== null) {
        contents.endpoint = deserializeAws_restJson1Endpoint(data.endpoint, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeManagedEndpointCommand = deserializeAws_restJson1DescribeManagedEndpointCommand;
const deserializeAws_restJson1DescribeManagedEndpointCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.emrcontainers#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.emrcontainers#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.emrcontainers#ValidationException":
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
const deserializeAws_restJson1DescribeVirtualClusterCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeVirtualClusterCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        virtualCluster: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.virtualCluster !== undefined && data.virtualCluster !== null) {
        contents.virtualCluster = deserializeAws_restJson1VirtualCluster(data.virtualCluster, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeVirtualClusterCommand = deserializeAws_restJson1DescribeVirtualClusterCommand;
const deserializeAws_restJson1DescribeVirtualClusterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.emrcontainers#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.emrcontainers#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.emrcontainers#ValidationException":
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
const deserializeAws_restJson1ListJobRunsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListJobRunsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        jobRuns: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.jobRuns !== undefined && data.jobRuns !== null) {
        contents.jobRuns = deserializeAws_restJson1JobRuns(data.jobRuns, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListJobRunsCommand = deserializeAws_restJson1ListJobRunsCommand;
const deserializeAws_restJson1ListJobRunsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.emrcontainers#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.emrcontainers#ValidationException":
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
const deserializeAws_restJson1ListManagedEndpointsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListManagedEndpointsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        endpoints: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.endpoints !== undefined && data.endpoints !== null) {
        contents.endpoints = deserializeAws_restJson1Endpoints(data.endpoints, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListManagedEndpointsCommand = deserializeAws_restJson1ListManagedEndpointsCommand;
const deserializeAws_restJson1ListManagedEndpointsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.emrcontainers#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.emrcontainers#ValidationException":
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
        case "com.amazonaws.emrcontainers#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.emrcontainers#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.emrcontainers#ValidationException":
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
const deserializeAws_restJson1ListVirtualClustersCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListVirtualClustersCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        virtualClusters: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.virtualClusters !== undefined && data.virtualClusters !== null) {
        contents.virtualClusters = deserializeAws_restJson1VirtualClusters(data.virtualClusters, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListVirtualClustersCommand = deserializeAws_restJson1ListVirtualClustersCommand;
const deserializeAws_restJson1ListVirtualClustersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.emrcontainers#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.emrcontainers#ValidationException":
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
const deserializeAws_restJson1StartJobRunCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1StartJobRunCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
        id: undefined,
        name: undefined,
        virtualClusterId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.id !== undefined && data.id !== null) {
        contents.id = data.id;
    }
    if (data.name !== undefined && data.name !== null) {
        contents.name = data.name;
    }
    if (data.virtualClusterId !== undefined && data.virtualClusterId !== null) {
        contents.virtualClusterId = data.virtualClusterId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StartJobRunCommand = deserializeAws_restJson1StartJobRunCommand;
const deserializeAws_restJson1StartJobRunCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.emrcontainers#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.emrcontainers#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.emrcontainers#ValidationException":
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
        case "com.amazonaws.emrcontainers#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.emrcontainers#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.emrcontainers#ValidationException":
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
        case "com.amazonaws.emrcontainers#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.emrcontainers#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.emrcontainers#ValidationException":
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
const serializeAws_restJson1CloudWatchMonitoringConfiguration = (input, context) => {
    return {
        ...(input.logGroupName !== undefined && input.logGroupName !== null && { logGroupName: input.logGroupName }),
        ...(input.logStreamNamePrefix !== undefined &&
            input.logStreamNamePrefix !== null && { logStreamNamePrefix: input.logStreamNamePrefix }),
    };
};
const serializeAws_restJson1Configuration = (input, context) => {
    return {
        ...(input.classification !== undefined &&
            input.classification !== null && { classification: input.classification }),
        ...(input.configurations !== undefined &&
            input.configurations !== null && {
            configurations: serializeAws_restJson1ConfigurationList(input.configurations, context),
        }),
        ...(input.properties !== undefined &&
            input.properties !== null && {
            properties: serializeAws_restJson1SensitivePropertiesMap(input.properties, context),
        }),
    };
};
const serializeAws_restJson1ConfigurationList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Configuration(entry, context);
    });
};
const serializeAws_restJson1ConfigurationOverrides = (input, context) => {
    return {
        ...(input.applicationConfiguration !== undefined &&
            input.applicationConfiguration !== null && {
            applicationConfiguration: serializeAws_restJson1ConfigurationList(input.applicationConfiguration, context),
        }),
        ...(input.monitoringConfiguration !== undefined &&
            input.monitoringConfiguration !== null && {
            monitoringConfiguration: serializeAws_restJson1MonitoringConfiguration(input.monitoringConfiguration, context),
        }),
    };
};
const serializeAws_restJson1ContainerInfo = (input, context) => {
    return models_0_1.ContainerInfo.visit(input, {
        eksInfo: (value) => ({ eksInfo: serializeAws_restJson1EksInfo(value, context) }),
        _: (name, value) => ({ name: value }),
    });
};
const serializeAws_restJson1ContainerProvider = (input, context) => {
    return {
        ...(input.id !== undefined && input.id !== null && { id: input.id }),
        ...(input.info !== undefined &&
            input.info !== null && { info: serializeAws_restJson1ContainerInfo(input.info, context) }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
    };
};
const serializeAws_restJson1EksInfo = (input, context) => {
    return {
        ...(input.namespace !== undefined && input.namespace !== null && { namespace: input.namespace }),
    };
};
const serializeAws_restJson1EntryPointArguments = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1JobDriver = (input, context) => {
    return {
        ...(input.sparkSubmitJobDriver !== undefined &&
            input.sparkSubmitJobDriver !== null && {
            sparkSubmitJobDriver: serializeAws_restJson1SparkSubmitJobDriver(input.sparkSubmitJobDriver, context),
        }),
    };
};
const serializeAws_restJson1MonitoringConfiguration = (input, context) => {
    return {
        ...(input.cloudWatchMonitoringConfiguration !== undefined &&
            input.cloudWatchMonitoringConfiguration !== null && {
            cloudWatchMonitoringConfiguration: serializeAws_restJson1CloudWatchMonitoringConfiguration(input.cloudWatchMonitoringConfiguration, context),
        }),
        ...(input.persistentAppUI !== undefined &&
            input.persistentAppUI !== null && { persistentAppUI: input.persistentAppUI }),
        ...(input.s3MonitoringConfiguration !== undefined &&
            input.s3MonitoringConfiguration !== null && {
            s3MonitoringConfiguration: serializeAws_restJson1S3MonitoringConfiguration(input.s3MonitoringConfiguration, context),
        }),
    };
};
const serializeAws_restJson1S3MonitoringConfiguration = (input, context) => {
    return {
        ...(input.logUri !== undefined && input.logUri !== null && { logUri: input.logUri }),
    };
};
const serializeAws_restJson1SensitivePropertiesMap = (input, context) => {
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
const serializeAws_restJson1SparkSubmitJobDriver = (input, context) => {
    return {
        ...(input.entryPoint !== undefined && input.entryPoint !== null && { entryPoint: input.entryPoint }),
        ...(input.entryPointArguments !== undefined &&
            input.entryPointArguments !== null && {
            entryPointArguments: serializeAws_restJson1EntryPointArguments(input.entryPointArguments, context),
        }),
        ...(input.sparkSubmitParameters !== undefined &&
            input.sparkSubmitParameters !== null && { sparkSubmitParameters: input.sparkSubmitParameters }),
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
const deserializeAws_restJson1CloudWatchMonitoringConfiguration = (output, context) => {
    return {
        logGroupName: output.logGroupName !== undefined && output.logGroupName !== null ? output.logGroupName : undefined,
        logStreamNamePrefix: output.logStreamNamePrefix !== undefined && output.logStreamNamePrefix !== null
            ? output.logStreamNamePrefix
            : undefined,
    };
};
const deserializeAws_restJson1Configuration = (output, context) => {
    return {
        classification: output.classification !== undefined && output.classification !== null ? output.classification : undefined,
        configurations: output.configurations !== undefined && output.configurations !== null
            ? deserializeAws_restJson1ConfigurationList(output.configurations, context)
            : undefined,
        properties: output.properties !== undefined && output.properties !== null
            ? deserializeAws_restJson1SensitivePropertiesMap(output.properties, context)
            : undefined,
    };
};
const deserializeAws_restJson1ConfigurationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Configuration(entry, context);
    });
};
const deserializeAws_restJson1ConfigurationOverrides = (output, context) => {
    return {
        applicationConfiguration: output.applicationConfiguration !== undefined && output.applicationConfiguration !== null
            ? deserializeAws_restJson1ConfigurationList(output.applicationConfiguration, context)
            : undefined,
        monitoringConfiguration: output.monitoringConfiguration !== undefined && output.monitoringConfiguration !== null
            ? deserializeAws_restJson1MonitoringConfiguration(output.monitoringConfiguration, context)
            : undefined,
    };
};
const deserializeAws_restJson1ContainerInfo = (output, context) => {
    if (output.eksInfo !== undefined && output.eksInfo !== null) {
        return {
            eksInfo: deserializeAws_restJson1EksInfo(output.eksInfo, context),
        };
    }
    return { $unknown: Object.entries(output)[0] };
};
const deserializeAws_restJson1ContainerProvider = (output, context) => {
    return {
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        info: output.info !== undefined && output.info !== null
            ? deserializeAws_restJson1ContainerInfo(output.info, context)
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_restJson1EksInfo = (output, context) => {
    return {
        namespace: output.namespace !== undefined && output.namespace !== null ? output.namespace : undefined,
    };
};
const deserializeAws_restJson1Endpoint = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        certificateArn: output.certificateArn !== undefined && output.certificateArn !== null ? output.certificateArn : undefined,
        configurationOverrides: output.configurationOverrides !== undefined && output.configurationOverrides !== null
            ? deserializeAws_restJson1ConfigurationOverrides(output.configurationOverrides, context)
            : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        executionRoleArn: output.executionRoleArn !== undefined && output.executionRoleArn !== null ? output.executionRoleArn : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        releaseLabel: output.releaseLabel !== undefined && output.releaseLabel !== null ? output.releaseLabel : undefined,
        securityGroup: output.securityGroup !== undefined && output.securityGroup !== null ? output.securityGroup : undefined,
        serverUrl: output.serverUrl !== undefined && output.serverUrl !== null ? output.serverUrl : undefined,
        state: output.state !== undefined && output.state !== null ? output.state : undefined,
        subnetIds: output.subnetIds !== undefined && output.subnetIds !== null
            ? deserializeAws_restJson1SubnetIds(output.subnetIds, context)
            : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1TagMap(output.tags, context)
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
        virtualClusterId: output.virtualClusterId !== undefined && output.virtualClusterId !== null ? output.virtualClusterId : undefined,
    };
};
const deserializeAws_restJson1Endpoints = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Endpoint(entry, context);
    });
};
const deserializeAws_restJson1EntryPointArguments = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1JobDriver = (output, context) => {
    return {
        sparkSubmitJobDriver: output.sparkSubmitJobDriver !== undefined && output.sparkSubmitJobDriver !== null
            ? deserializeAws_restJson1SparkSubmitJobDriver(output.sparkSubmitJobDriver, context)
            : undefined,
    };
};
const deserializeAws_restJson1JobRun = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        clientToken: output.clientToken !== undefined && output.clientToken !== null ? output.clientToken : undefined,
        configurationOverrides: output.configurationOverrides !== undefined && output.configurationOverrides !== null
            ? deserializeAws_restJson1ConfigurationOverrides(output.configurationOverrides, context)
            : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        createdBy: output.createdBy !== undefined && output.createdBy !== null ? output.createdBy : undefined,
        executionRoleArn: output.executionRoleArn !== undefined && output.executionRoleArn !== null ? output.executionRoleArn : undefined,
        failureReason: output.failureReason !== undefined && output.failureReason !== null ? output.failureReason : undefined,
        finishedAt: output.finishedAt !== undefined && output.finishedAt !== null
            ? new Date(Math.round(output.finishedAt * 1000))
            : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        jobDriver: output.jobDriver !== undefined && output.jobDriver !== null
            ? deserializeAws_restJson1JobDriver(output.jobDriver, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        releaseLabel: output.releaseLabel !== undefined && output.releaseLabel !== null ? output.releaseLabel : undefined,
        state: output.state !== undefined && output.state !== null ? output.state : undefined,
        stateDetails: output.stateDetails !== undefined && output.stateDetails !== null ? output.stateDetails : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1TagMap(output.tags, context)
            : undefined,
        virtualClusterId: output.virtualClusterId !== undefined && output.virtualClusterId !== null ? output.virtualClusterId : undefined,
    };
};
const deserializeAws_restJson1JobRuns = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1JobRun(entry, context);
    });
};
const deserializeAws_restJson1MonitoringConfiguration = (output, context) => {
    return {
        cloudWatchMonitoringConfiguration: output.cloudWatchMonitoringConfiguration !== undefined && output.cloudWatchMonitoringConfiguration !== null
            ? deserializeAws_restJson1CloudWatchMonitoringConfiguration(output.cloudWatchMonitoringConfiguration, context)
            : undefined,
        persistentAppUI: output.persistentAppUI !== undefined && output.persistentAppUI !== null ? output.persistentAppUI : undefined,
        s3MonitoringConfiguration: output.s3MonitoringConfiguration !== undefined && output.s3MonitoringConfiguration !== null
            ? deserializeAws_restJson1S3MonitoringConfiguration(output.s3MonitoringConfiguration, context)
            : undefined,
    };
};
const deserializeAws_restJson1S3MonitoringConfiguration = (output, context) => {
    return {
        logUri: output.logUri !== undefined && output.logUri !== null ? output.logUri : undefined,
    };
};
const deserializeAws_restJson1SensitivePropertiesMap = (output, context) => {
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
const deserializeAws_restJson1SparkSubmitJobDriver = (output, context) => {
    return {
        entryPoint: output.entryPoint !== undefined && output.entryPoint !== null ? output.entryPoint : undefined,
        entryPointArguments: output.entryPointArguments !== undefined && output.entryPointArguments !== null
            ? deserializeAws_restJson1EntryPointArguments(output.entryPointArguments, context)
            : undefined,
        sparkSubmitParameters: output.sparkSubmitParameters !== undefined && output.sparkSubmitParameters !== null
            ? output.sparkSubmitParameters
            : undefined,
    };
};
const deserializeAws_restJson1SubnetIds = (output, context) => {
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
const deserializeAws_restJson1VirtualCluster = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        containerProvider: output.containerProvider !== undefined && output.containerProvider !== null
            ? deserializeAws_restJson1ContainerProvider(output.containerProvider, context)
            : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        state: output.state !== undefined && output.state !== null ? output.state : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1TagMap(output.tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1VirtualClusters = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1VirtualCluster(entry, context);
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