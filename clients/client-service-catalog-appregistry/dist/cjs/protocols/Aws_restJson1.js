"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1UpdateAttributeGroupCommand = exports.deserializeAws_restJson1UpdateApplicationCommand = exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1SyncResourceCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1ListAttributeGroupsCommand = exports.deserializeAws_restJson1ListAssociatedResourcesCommand = exports.deserializeAws_restJson1ListAssociatedAttributeGroupsCommand = exports.deserializeAws_restJson1ListApplicationsCommand = exports.deserializeAws_restJson1GetAttributeGroupCommand = exports.deserializeAws_restJson1GetApplicationCommand = exports.deserializeAws_restJson1DisassociateResourceCommand = exports.deserializeAws_restJson1DisassociateAttributeGroupCommand = exports.deserializeAws_restJson1DeleteAttributeGroupCommand = exports.deserializeAws_restJson1DeleteApplicationCommand = exports.deserializeAws_restJson1CreateAttributeGroupCommand = exports.deserializeAws_restJson1CreateApplicationCommand = exports.deserializeAws_restJson1AssociateResourceCommand = exports.deserializeAws_restJson1AssociateAttributeGroupCommand = exports.serializeAws_restJson1UpdateAttributeGroupCommand = exports.serializeAws_restJson1UpdateApplicationCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1SyncResourceCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1ListAttributeGroupsCommand = exports.serializeAws_restJson1ListAssociatedResourcesCommand = exports.serializeAws_restJson1ListAssociatedAttributeGroupsCommand = exports.serializeAws_restJson1ListApplicationsCommand = exports.serializeAws_restJson1GetAttributeGroupCommand = exports.serializeAws_restJson1GetApplicationCommand = exports.serializeAws_restJson1DisassociateResourceCommand = exports.serializeAws_restJson1DisassociateAttributeGroupCommand = exports.serializeAws_restJson1DeleteAttributeGroupCommand = exports.serializeAws_restJson1DeleteApplicationCommand = exports.serializeAws_restJson1CreateAttributeGroupCommand = exports.serializeAws_restJson1CreateApplicationCommand = exports.serializeAws_restJson1AssociateResourceCommand = exports.serializeAws_restJson1AssociateAttributeGroupCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const uuid_1 = require("uuid");
const serializeAws_restJson1AssociateAttributeGroupCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/applications/{application}/attribute-groups/{attributeGroup}";
    if (input.application !== undefined) {
        const labelValue = input.application;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: application.");
        }
        resolvedPath = resolvedPath.replace("{application}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: application.");
    }
    if (input.attributeGroup !== undefined) {
        const labelValue = input.attributeGroup;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: attributeGroup.");
        }
        resolvedPath = resolvedPath.replace("{attributeGroup}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: attributeGroup.");
    }
    let body;
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
exports.serializeAws_restJson1AssociateAttributeGroupCommand = serializeAws_restJson1AssociateAttributeGroupCommand;
const serializeAws_restJson1AssociateResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/applications/{application}/resources/{resourceType}/{resource}";
    if (input.application !== undefined) {
        const labelValue = input.application;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: application.");
        }
        resolvedPath = resolvedPath.replace("{application}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: application.");
    }
    if (input.resourceType !== undefined) {
        const labelValue = input.resourceType;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: resourceType.");
        }
        resolvedPath = resolvedPath.replace("{resourceType}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: resourceType.");
    }
    if (input.resource !== undefined) {
        const labelValue = input.resource;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: resource.");
        }
        resolvedPath = resolvedPath.replace("{resource}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: resource.");
    }
    let body;
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
exports.serializeAws_restJson1AssociateResourceCommand = serializeAws_restJson1AssociateResourceCommand;
const serializeAws_restJson1CreateApplicationCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/applications";
    let body;
    body = JSON.stringify({
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
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
exports.serializeAws_restJson1CreateApplicationCommand = serializeAws_restJson1CreateApplicationCommand;
const serializeAws_restJson1CreateAttributeGroupCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/attribute-groups";
    let body;
    body = JSON.stringify({
        ...(input.attributes !== undefined && input.attributes !== null && { attributes: input.attributes }),
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
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
exports.serializeAws_restJson1CreateAttributeGroupCommand = serializeAws_restJson1CreateAttributeGroupCommand;
const serializeAws_restJson1DeleteApplicationCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/applications/{application}";
    if (input.application !== undefined) {
        const labelValue = input.application;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: application.");
        }
        resolvedPath = resolvedPath.replace("{application}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: application.");
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
exports.serializeAws_restJson1DeleteApplicationCommand = serializeAws_restJson1DeleteApplicationCommand;
const serializeAws_restJson1DeleteAttributeGroupCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/attribute-groups/{attributeGroup}";
    if (input.attributeGroup !== undefined) {
        const labelValue = input.attributeGroup;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: attributeGroup.");
        }
        resolvedPath = resolvedPath.replace("{attributeGroup}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: attributeGroup.");
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
exports.serializeAws_restJson1DeleteAttributeGroupCommand = serializeAws_restJson1DeleteAttributeGroupCommand;
const serializeAws_restJson1DisassociateAttributeGroupCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/applications/{application}/attribute-groups/{attributeGroup}";
    if (input.application !== undefined) {
        const labelValue = input.application;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: application.");
        }
        resolvedPath = resolvedPath.replace("{application}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: application.");
    }
    if (input.attributeGroup !== undefined) {
        const labelValue = input.attributeGroup;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: attributeGroup.");
        }
        resolvedPath = resolvedPath.replace("{attributeGroup}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: attributeGroup.");
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
exports.serializeAws_restJson1DisassociateAttributeGroupCommand = serializeAws_restJson1DisassociateAttributeGroupCommand;
const serializeAws_restJson1DisassociateResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/applications/{application}/resources/{resourceType}/{resource}";
    if (input.application !== undefined) {
        const labelValue = input.application;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: application.");
        }
        resolvedPath = resolvedPath.replace("{application}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: application.");
    }
    if (input.resourceType !== undefined) {
        const labelValue = input.resourceType;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: resourceType.");
        }
        resolvedPath = resolvedPath.replace("{resourceType}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: resourceType.");
    }
    if (input.resource !== undefined) {
        const labelValue = input.resource;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: resource.");
        }
        resolvedPath = resolvedPath.replace("{resource}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: resource.");
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
exports.serializeAws_restJson1DisassociateResourceCommand = serializeAws_restJson1DisassociateResourceCommand;
const serializeAws_restJson1GetApplicationCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/applications/{application}";
    if (input.application !== undefined) {
        const labelValue = input.application;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: application.");
        }
        resolvedPath = resolvedPath.replace("{application}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: application.");
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
exports.serializeAws_restJson1GetApplicationCommand = serializeAws_restJson1GetApplicationCommand;
const serializeAws_restJson1GetAttributeGroupCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/attribute-groups/{attributeGroup}";
    if (input.attributeGroup !== undefined) {
        const labelValue = input.attributeGroup;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: attributeGroup.");
        }
        resolvedPath = resolvedPath.replace("{attributeGroup}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: attributeGroup.");
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
exports.serializeAws_restJson1GetAttributeGroupCommand = serializeAws_restJson1GetAttributeGroupCommand;
const serializeAws_restJson1ListApplicationsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/applications";
    const query = {
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
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
exports.serializeAws_restJson1ListApplicationsCommand = serializeAws_restJson1ListApplicationsCommand;
const serializeAws_restJson1ListAssociatedAttributeGroupsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/applications/{application}/attribute-groups";
    if (input.application !== undefined) {
        const labelValue = input.application;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: application.");
        }
        resolvedPath = resolvedPath.replace("{application}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: application.");
    }
    const query = {
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
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
exports.serializeAws_restJson1ListAssociatedAttributeGroupsCommand = serializeAws_restJson1ListAssociatedAttributeGroupsCommand;
const serializeAws_restJson1ListAssociatedResourcesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/applications/{application}/resources";
    if (input.application !== undefined) {
        const labelValue = input.application;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: application.");
        }
        resolvedPath = resolvedPath.replace("{application}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: application.");
    }
    const query = {
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
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
exports.serializeAws_restJson1ListAssociatedResourcesCommand = serializeAws_restJson1ListAssociatedResourcesCommand;
const serializeAws_restJson1ListAttributeGroupsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/attribute-groups";
    const query = {
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
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
exports.serializeAws_restJson1ListAttributeGroupsCommand = serializeAws_restJson1ListAttributeGroupsCommand;
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
const serializeAws_restJson1SyncResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/sync/{resourceType}/{resource}";
    if (input.resourceType !== undefined) {
        const labelValue = input.resourceType;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: resourceType.");
        }
        resolvedPath = resolvedPath.replace("{resourceType}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: resourceType.");
    }
    if (input.resource !== undefined) {
        const labelValue = input.resource;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: resource.");
        }
        resolvedPath = resolvedPath.replace("{resource}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: resource.");
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
exports.serializeAws_restJson1SyncResourceCommand = serializeAws_restJson1SyncResourceCommand;
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
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
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
const serializeAws_restJson1UpdateApplicationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/applications/{application}";
    if (input.application !== undefined) {
        const labelValue = input.application;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: application.");
        }
        resolvedPath = resolvedPath.replace("{application}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: application.");
    }
    let body;
    body = JSON.stringify({
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
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
exports.serializeAws_restJson1UpdateApplicationCommand = serializeAws_restJson1UpdateApplicationCommand;
const serializeAws_restJson1UpdateAttributeGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/attribute-groups/{attributeGroup}";
    if (input.attributeGroup !== undefined) {
        const labelValue = input.attributeGroup;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: attributeGroup.");
        }
        resolvedPath = resolvedPath.replace("{attributeGroup}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: attributeGroup.");
    }
    let body;
    body = JSON.stringify({
        ...(input.attributes !== undefined && input.attributes !== null && { attributes: input.attributes }),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
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
exports.serializeAws_restJson1UpdateAttributeGroupCommand = serializeAws_restJson1UpdateAttributeGroupCommand;
const deserializeAws_restJson1AssociateAttributeGroupCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1AssociateAttributeGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        applicationArn: undefined,
        attributeGroupArn: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.applicationArn !== undefined && data.applicationArn !== null) {
        contents.applicationArn = data.applicationArn;
    }
    if (data.attributeGroupArn !== undefined && data.attributeGroupArn !== null) {
        contents.attributeGroupArn = data.attributeGroupArn;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AssociateAttributeGroupCommand = deserializeAws_restJson1AssociateAttributeGroupCommand;
const deserializeAws_restJson1AssociateAttributeGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.servicecatalogappregistry#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalogappregistry#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.servicecatalogappregistry#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.servicecatalogappregistry#ValidationException":
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
const deserializeAws_restJson1AssociateResourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1AssociateResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        applicationArn: undefined,
        resourceArn: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.applicationArn !== undefined && data.applicationArn !== null) {
        contents.applicationArn = data.applicationArn;
    }
    if (data.resourceArn !== undefined && data.resourceArn !== null) {
        contents.resourceArn = data.resourceArn;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AssociateResourceCommand = deserializeAws_restJson1AssociateResourceCommand;
const deserializeAws_restJson1AssociateResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.servicecatalogappregistry#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.servicecatalogappregistry#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalogappregistry#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.servicecatalogappregistry#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateApplicationCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateApplicationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        application: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.application !== undefined && data.application !== null) {
        contents.application = deserializeAws_restJson1Application(data.application, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateApplicationCommand = deserializeAws_restJson1CreateApplicationCommand;
const deserializeAws_restJson1CreateApplicationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.servicecatalogappregistry#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.servicecatalogappregistry#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.servicecatalogappregistry#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateAttributeGroupCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateAttributeGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        attributeGroup: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.attributeGroup !== undefined && data.attributeGroup !== null) {
        contents.attributeGroup = deserializeAws_restJson1AttributeGroup(data.attributeGroup, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateAttributeGroupCommand = deserializeAws_restJson1CreateAttributeGroupCommand;
const deserializeAws_restJson1CreateAttributeGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.servicecatalogappregistry#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.servicecatalogappregistry#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.servicecatalogappregistry#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.servicecatalogappregistry#ValidationException":
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
const deserializeAws_restJson1DeleteApplicationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteApplicationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        application: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.application !== undefined && data.application !== null) {
        contents.application = deserializeAws_restJson1ApplicationSummary(data.application, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteApplicationCommand = deserializeAws_restJson1DeleteApplicationCommand;
const deserializeAws_restJson1DeleteApplicationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.servicecatalogappregistry#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalogappregistry#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.servicecatalogappregistry#ValidationException":
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
const deserializeAws_restJson1DeleteAttributeGroupCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteAttributeGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        attributeGroup: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.attributeGroup !== undefined && data.attributeGroup !== null) {
        contents.attributeGroup = deserializeAws_restJson1AttributeGroupSummary(data.attributeGroup, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteAttributeGroupCommand = deserializeAws_restJson1DeleteAttributeGroupCommand;
const deserializeAws_restJson1DeleteAttributeGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.servicecatalogappregistry#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalogappregistry#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.servicecatalogappregistry#ValidationException":
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
const deserializeAws_restJson1DisassociateAttributeGroupCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DisassociateAttributeGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        applicationArn: undefined,
        attributeGroupArn: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.applicationArn !== undefined && data.applicationArn !== null) {
        contents.applicationArn = data.applicationArn;
    }
    if (data.attributeGroupArn !== undefined && data.attributeGroupArn !== null) {
        contents.attributeGroupArn = data.attributeGroupArn;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DisassociateAttributeGroupCommand = deserializeAws_restJson1DisassociateAttributeGroupCommand;
const deserializeAws_restJson1DisassociateAttributeGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.servicecatalogappregistry#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalogappregistry#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.servicecatalogappregistry#ValidationException":
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
const deserializeAws_restJson1DisassociateResourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DisassociateResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        applicationArn: undefined,
        resourceArn: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.applicationArn !== undefined && data.applicationArn !== null) {
        contents.applicationArn = data.applicationArn;
    }
    if (data.resourceArn !== undefined && data.resourceArn !== null) {
        contents.resourceArn = data.resourceArn;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DisassociateResourceCommand = deserializeAws_restJson1DisassociateResourceCommand;
const deserializeAws_restJson1DisassociateResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.servicecatalogappregistry#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalogappregistry#ResourceNotFoundException":
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
const deserializeAws_restJson1GetApplicationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetApplicationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
        associatedResourceCount: undefined,
        creationTime: undefined,
        description: undefined,
        id: undefined,
        lastUpdateTime: undefined,
        name: undefined,
        tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.associatedResourceCount !== undefined && data.associatedResourceCount !== null) {
        contents.associatedResourceCount = data.associatedResourceCount;
    }
    if (data.creationTime !== undefined && data.creationTime !== null) {
        contents.creationTime = new Date(data.creationTime);
    }
    if (data.description !== undefined && data.description !== null) {
        contents.description = data.description;
    }
    if (data.id !== undefined && data.id !== null) {
        contents.id = data.id;
    }
    if (data.lastUpdateTime !== undefined && data.lastUpdateTime !== null) {
        contents.lastUpdateTime = new Date(data.lastUpdateTime);
    }
    if (data.name !== undefined && data.name !== null) {
        contents.name = data.name;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1Tags(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetApplicationCommand = deserializeAws_restJson1GetApplicationCommand;
const deserializeAws_restJson1GetApplicationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.servicecatalogappregistry#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalogappregistry#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.servicecatalogappregistry#ValidationException":
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
const deserializeAws_restJson1GetAttributeGroupCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetAttributeGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
        attributes: undefined,
        creationTime: undefined,
        description: undefined,
        id: undefined,
        lastUpdateTime: undefined,
        name: undefined,
        tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.attributes !== undefined && data.attributes !== null) {
        contents.attributes = data.attributes;
    }
    if (data.creationTime !== undefined && data.creationTime !== null) {
        contents.creationTime = new Date(data.creationTime);
    }
    if (data.description !== undefined && data.description !== null) {
        contents.description = data.description;
    }
    if (data.id !== undefined && data.id !== null) {
        contents.id = data.id;
    }
    if (data.lastUpdateTime !== undefined && data.lastUpdateTime !== null) {
        contents.lastUpdateTime = new Date(data.lastUpdateTime);
    }
    if (data.name !== undefined && data.name !== null) {
        contents.name = data.name;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1Tags(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetAttributeGroupCommand = deserializeAws_restJson1GetAttributeGroupCommand;
const deserializeAws_restJson1GetAttributeGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.servicecatalogappregistry#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalogappregistry#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.servicecatalogappregistry#ValidationException":
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
const deserializeAws_restJson1ListApplicationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListApplicationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        applications: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.applications !== undefined && data.applications !== null) {
        contents.applications = deserializeAws_restJson1ApplicationSummaries(data.applications, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListApplicationsCommand = deserializeAws_restJson1ListApplicationsCommand;
const deserializeAws_restJson1ListApplicationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.servicecatalogappregistry#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.servicecatalogappregistry#ValidationException":
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
const deserializeAws_restJson1ListAssociatedAttributeGroupsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListAssociatedAttributeGroupsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        attributeGroups: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.attributeGroups !== undefined && data.attributeGroups !== null) {
        contents.attributeGroups = deserializeAws_restJson1AttributeGroupIds(data.attributeGroups, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListAssociatedAttributeGroupsCommand = deserializeAws_restJson1ListAssociatedAttributeGroupsCommand;
const deserializeAws_restJson1ListAssociatedAttributeGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.servicecatalogappregistry#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalogappregistry#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.servicecatalogappregistry#ValidationException":
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
const deserializeAws_restJson1ListAssociatedResourcesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListAssociatedResourcesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        resources: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.resources !== undefined && data.resources !== null) {
        contents.resources = deserializeAws_restJson1Resources(data.resources, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListAssociatedResourcesCommand = deserializeAws_restJson1ListAssociatedResourcesCommand;
const deserializeAws_restJson1ListAssociatedResourcesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.servicecatalogappregistry#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalogappregistry#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.servicecatalogappregistry#ValidationException":
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
const deserializeAws_restJson1ListAttributeGroupsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListAttributeGroupsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        attributeGroups: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.attributeGroups !== undefined && data.attributeGroups !== null) {
        contents.attributeGroups = deserializeAws_restJson1AttributeGroupSummaries(data.attributeGroups, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListAttributeGroupsCommand = deserializeAws_restJson1ListAttributeGroupsCommand;
const deserializeAws_restJson1ListAttributeGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.servicecatalogappregistry#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.servicecatalogappregistry#ValidationException":
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
        contents.tags = deserializeAws_restJson1Tags(data.tags, context);
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
        case "com.amazonaws.servicecatalogappregistry#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalogappregistry#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.servicecatalogappregistry#ValidationException":
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
const deserializeAws_restJson1SyncResourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1SyncResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        actionTaken: undefined,
        applicationArn: undefined,
        resourceArn: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.actionTaken !== undefined && data.actionTaken !== null) {
        contents.actionTaken = data.actionTaken;
    }
    if (data.applicationArn !== undefined && data.applicationArn !== null) {
        contents.applicationArn = data.applicationArn;
    }
    if (data.resourceArn !== undefined && data.resourceArn !== null) {
        contents.resourceArn = data.resourceArn;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1SyncResourceCommand = deserializeAws_restJson1SyncResourceCommand;
const deserializeAws_restJson1SyncResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.servicecatalogappregistry#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.servicecatalogappregistry#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalogappregistry#ResourceNotFoundException":
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
        case "com.amazonaws.servicecatalogappregistry#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalogappregistry#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.servicecatalogappregistry#ValidationException":
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
        case "com.amazonaws.servicecatalogappregistry#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalogappregistry#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.servicecatalogappregistry#ValidationException":
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
const deserializeAws_restJson1UpdateApplicationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateApplicationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        application: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.application !== undefined && data.application !== null) {
        contents.application = deserializeAws_restJson1Application(data.application, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateApplicationCommand = deserializeAws_restJson1UpdateApplicationCommand;
const deserializeAws_restJson1UpdateApplicationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.servicecatalogappregistry#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.servicecatalogappregistry#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalogappregistry#ResourceNotFoundException":
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
const deserializeAws_restJson1UpdateAttributeGroupCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateAttributeGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        attributeGroup: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.attributeGroup !== undefined && data.attributeGroup !== null) {
        contents.attributeGroup = deserializeAws_restJson1AttributeGroup(data.attributeGroup, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateAttributeGroupCommand = deserializeAws_restJson1UpdateAttributeGroupCommand;
const deserializeAws_restJson1UpdateAttributeGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.servicecatalogappregistry#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.servicecatalogappregistry#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalogappregistry#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.servicecatalogappregistry#ValidationException":
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
const deserializeAws_restJson1Application = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        creationTime: output.creationTime !== undefined && output.creationTime !== null ? new Date(output.creationTime) : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        lastUpdateTime: output.lastUpdateTime !== undefined && output.lastUpdateTime !== null
            ? new Date(output.lastUpdateTime)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1Tags(output.tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1ApplicationSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ApplicationSummary(entry, context);
    });
};
const deserializeAws_restJson1ApplicationSummary = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        creationTime: output.creationTime !== undefined && output.creationTime !== null ? new Date(output.creationTime) : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        lastUpdateTime: output.lastUpdateTime !== undefined && output.lastUpdateTime !== null
            ? new Date(output.lastUpdateTime)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_restJson1AttributeGroup = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        creationTime: output.creationTime !== undefined && output.creationTime !== null ? new Date(output.creationTime) : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        lastUpdateTime: output.lastUpdateTime !== undefined && output.lastUpdateTime !== null
            ? new Date(output.lastUpdateTime)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1Tags(output.tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1AttributeGroupIds = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1AttributeGroupSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AttributeGroupSummary(entry, context);
    });
};
const deserializeAws_restJson1AttributeGroupSummary = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        creationTime: output.creationTime !== undefined && output.creationTime !== null ? new Date(output.creationTime) : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        lastUpdateTime: output.lastUpdateTime !== undefined && output.lastUpdateTime !== null
            ? new Date(output.lastUpdateTime)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_restJson1ResourceInfo = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_restJson1Resources = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ResourceInfo(entry, context);
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