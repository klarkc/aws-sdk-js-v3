"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1UpdatePackagingGroupCommand = exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1ListPackagingGroupsCommand = exports.deserializeAws_restJson1ListPackagingConfigurationsCommand = exports.deserializeAws_restJson1ListAssetsCommand = exports.deserializeAws_restJson1DescribePackagingGroupCommand = exports.deserializeAws_restJson1DescribePackagingConfigurationCommand = exports.deserializeAws_restJson1DescribeAssetCommand = exports.deserializeAws_restJson1DeletePackagingGroupCommand = exports.deserializeAws_restJson1DeletePackagingConfigurationCommand = exports.deserializeAws_restJson1DeleteAssetCommand = exports.deserializeAws_restJson1CreatePackagingGroupCommand = exports.deserializeAws_restJson1CreatePackagingConfigurationCommand = exports.deserializeAws_restJson1CreateAssetCommand = exports.deserializeAws_restJson1ConfigureLogsCommand = exports.serializeAws_restJson1UpdatePackagingGroupCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1ListPackagingGroupsCommand = exports.serializeAws_restJson1ListPackagingConfigurationsCommand = exports.serializeAws_restJson1ListAssetsCommand = exports.serializeAws_restJson1DescribePackagingGroupCommand = exports.serializeAws_restJson1DescribePackagingConfigurationCommand = exports.serializeAws_restJson1DescribeAssetCommand = exports.serializeAws_restJson1DeletePackagingGroupCommand = exports.serializeAws_restJson1DeletePackagingConfigurationCommand = exports.serializeAws_restJson1DeleteAssetCommand = exports.serializeAws_restJson1CreatePackagingGroupCommand = exports.serializeAws_restJson1CreatePackagingConfigurationCommand = exports.serializeAws_restJson1CreateAssetCommand = exports.serializeAws_restJson1ConfigureLogsCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1ConfigureLogsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/packaging_groups/{Id}/configure_logs";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    let body;
    body = JSON.stringify({
        ...(input.EgressAccessLogs !== undefined &&
            input.EgressAccessLogs !== null && {
            egressAccessLogs: serializeAws_restJson1EgressAccessLogs(input.EgressAccessLogs, context),
        }),
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
exports.serializeAws_restJson1ConfigureLogsCommand = serializeAws_restJson1ConfigureLogsCommand;
const serializeAws_restJson1CreateAssetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/assets";
    let body;
    body = JSON.stringify({
        ...(input.Id !== undefined && input.Id !== null && { id: input.Id }),
        ...(input.PackagingGroupId !== undefined &&
            input.PackagingGroupId !== null && { packagingGroupId: input.PackagingGroupId }),
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { resourceId: input.ResourceId }),
        ...(input.SourceArn !== undefined && input.SourceArn !== null && { sourceArn: input.SourceArn }),
        ...(input.SourceRoleArn !== undefined && input.SourceRoleArn !== null && { sourceRoleArn: input.SourceRoleArn }),
        ...(input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1Tags(input.Tags, context) }),
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
exports.serializeAws_restJson1CreateAssetCommand = serializeAws_restJson1CreateAssetCommand;
const serializeAws_restJson1CreatePackagingConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/packaging_configurations";
    let body;
    body = JSON.stringify({
        ...(input.CmafPackage !== undefined &&
            input.CmafPackage !== null && { cmafPackage: serializeAws_restJson1CmafPackage(input.CmafPackage, context) }),
        ...(input.DashPackage !== undefined &&
            input.DashPackage !== null && { dashPackage: serializeAws_restJson1DashPackage(input.DashPackage, context) }),
        ...(input.HlsPackage !== undefined &&
            input.HlsPackage !== null && { hlsPackage: serializeAws_restJson1HlsPackage(input.HlsPackage, context) }),
        ...(input.Id !== undefined && input.Id !== null && { id: input.Id }),
        ...(input.MssPackage !== undefined &&
            input.MssPackage !== null && { mssPackage: serializeAws_restJson1MssPackage(input.MssPackage, context) }),
        ...(input.PackagingGroupId !== undefined &&
            input.PackagingGroupId !== null && { packagingGroupId: input.PackagingGroupId }),
        ...(input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1Tags(input.Tags, context) }),
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
exports.serializeAws_restJson1CreatePackagingConfigurationCommand = serializeAws_restJson1CreatePackagingConfigurationCommand;
const serializeAws_restJson1CreatePackagingGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/packaging_groups";
    let body;
    body = JSON.stringify({
        ...(input.Authorization !== undefined &&
            input.Authorization !== null && {
            authorization: serializeAws_restJson1Authorization(input.Authorization, context),
        }),
        ...(input.EgressAccessLogs !== undefined &&
            input.EgressAccessLogs !== null && {
            egressAccessLogs: serializeAws_restJson1EgressAccessLogs(input.EgressAccessLogs, context),
        }),
        ...(input.Id !== undefined && input.Id !== null && { id: input.Id }),
        ...(input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1Tags(input.Tags, context) }),
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
exports.serializeAws_restJson1CreatePackagingGroupCommand = serializeAws_restJson1CreatePackagingGroupCommand;
const serializeAws_restJson1DeleteAssetCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/assets/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
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
exports.serializeAws_restJson1DeleteAssetCommand = serializeAws_restJson1DeleteAssetCommand;
const serializeAws_restJson1DeletePackagingConfigurationCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/packaging_configurations/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
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
exports.serializeAws_restJson1DeletePackagingConfigurationCommand = serializeAws_restJson1DeletePackagingConfigurationCommand;
const serializeAws_restJson1DeletePackagingGroupCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/packaging_groups/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
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
exports.serializeAws_restJson1DeletePackagingGroupCommand = serializeAws_restJson1DeletePackagingGroupCommand;
const serializeAws_restJson1DescribeAssetCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/assets/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
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
exports.serializeAws_restJson1DescribeAssetCommand = serializeAws_restJson1DescribeAssetCommand;
const serializeAws_restJson1DescribePackagingConfigurationCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/packaging_configurations/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
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
exports.serializeAws_restJson1DescribePackagingConfigurationCommand = serializeAws_restJson1DescribePackagingConfigurationCommand;
const serializeAws_restJson1DescribePackagingGroupCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/packaging_groups/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
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
exports.serializeAws_restJson1DescribePackagingGroupCommand = serializeAws_restJson1DescribePackagingGroupCommand;
const serializeAws_restJson1ListAssetsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/assets";
    const query = {
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.PackagingGroupId !== undefined && { packagingGroupId: input.PackagingGroupId }),
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
exports.serializeAws_restJson1ListAssetsCommand = serializeAws_restJson1ListAssetsCommand;
const serializeAws_restJson1ListPackagingConfigurationsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/packaging_configurations";
    const query = {
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.PackagingGroupId !== undefined && { packagingGroupId: input.PackagingGroupId }),
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
exports.serializeAws_restJson1ListPackagingConfigurationsCommand = serializeAws_restJson1ListPackagingConfigurationsCommand;
const serializeAws_restJson1ListPackagingGroupsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/packaging_groups";
    const query = {
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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
exports.serializeAws_restJson1ListPackagingGroupsCommand = serializeAws_restJson1ListPackagingGroupsCommand;
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
        ...(input.Tags !== undefined &&
            input.Tags !== null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) }),
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
const serializeAws_restJson1UpdatePackagingGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/packaging_groups/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Authorization !== undefined &&
            input.Authorization !== null && {
            authorization: serializeAws_restJson1Authorization(input.Authorization, context),
        }),
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
exports.serializeAws_restJson1UpdatePackagingGroupCommand = serializeAws_restJson1UpdatePackagingGroupCommand;
const deserializeAws_restJson1ConfigureLogsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ConfigureLogsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        Authorization: undefined,
        DomainName: undefined,
        EgressAccessLogs: undefined,
        Id: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.Arn = data.arn;
    }
    if (data.authorization !== undefined && data.authorization !== null) {
        contents.Authorization = deserializeAws_restJson1Authorization(data.authorization, context);
    }
    if (data.domainName !== undefined && data.domainName !== null) {
        contents.DomainName = data.domainName;
    }
    if (data.egressAccessLogs !== undefined && data.egressAccessLogs !== null) {
        contents.EgressAccessLogs = deserializeAws_restJson1EgressAccessLogs(data.egressAccessLogs, context);
    }
    if (data.id !== undefined && data.id !== null) {
        contents.Id = data.id;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ConfigureLogsCommand = deserializeAws_restJson1ConfigureLogsCommand;
const deserializeAws_restJson1ConfigureLogsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ForbiddenException":
        case "com.amazonaws.mediapackagevod#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediapackagevod#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mediapackagevod#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediapackagevod#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnprocessableEntityException":
        case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
            response = {
                ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateAssetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateAssetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreatedAt: undefined,
        EgressEndpoints: undefined,
        Id: undefined,
        PackagingGroupId: undefined,
        ResourceId: undefined,
        SourceArn: undefined,
        SourceRoleArn: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.Arn = data.arn;
    }
    if (data.createdAt !== undefined && data.createdAt !== null) {
        contents.CreatedAt = data.createdAt;
    }
    if (data.egressEndpoints !== undefined && data.egressEndpoints !== null) {
        contents.EgressEndpoints = deserializeAws_restJson1__listOfEgressEndpoint(data.egressEndpoints, context);
    }
    if (data.id !== undefined && data.id !== null) {
        contents.Id = data.id;
    }
    if (data.packagingGroupId !== undefined && data.packagingGroupId !== null) {
        contents.PackagingGroupId = data.packagingGroupId;
    }
    if (data.resourceId !== undefined && data.resourceId !== null) {
        contents.ResourceId = data.resourceId;
    }
    if (data.sourceArn !== undefined && data.sourceArn !== null) {
        contents.SourceArn = data.sourceArn;
    }
    if (data.sourceRoleArn !== undefined && data.sourceRoleArn !== null) {
        contents.SourceRoleArn = data.sourceRoleArn;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateAssetCommand = deserializeAws_restJson1CreateAssetCommand;
const deserializeAws_restJson1CreateAssetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ForbiddenException":
        case "com.amazonaws.mediapackagevod#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediapackagevod#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mediapackagevod#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediapackagevod#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnprocessableEntityException":
        case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
            response = {
                ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreatePackagingConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreatePackagingConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CmafPackage: undefined,
        DashPackage: undefined,
        HlsPackage: undefined,
        Id: undefined,
        MssPackage: undefined,
        PackagingGroupId: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.Arn = data.arn;
    }
    if (data.cmafPackage !== undefined && data.cmafPackage !== null) {
        contents.CmafPackage = deserializeAws_restJson1CmafPackage(data.cmafPackage, context);
    }
    if (data.dashPackage !== undefined && data.dashPackage !== null) {
        contents.DashPackage = deserializeAws_restJson1DashPackage(data.dashPackage, context);
    }
    if (data.hlsPackage !== undefined && data.hlsPackage !== null) {
        contents.HlsPackage = deserializeAws_restJson1HlsPackage(data.hlsPackage, context);
    }
    if (data.id !== undefined && data.id !== null) {
        contents.Id = data.id;
    }
    if (data.mssPackage !== undefined && data.mssPackage !== null) {
        contents.MssPackage = deserializeAws_restJson1MssPackage(data.mssPackage, context);
    }
    if (data.packagingGroupId !== undefined && data.packagingGroupId !== null) {
        contents.PackagingGroupId = data.packagingGroupId;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreatePackagingConfigurationCommand = deserializeAws_restJson1CreatePackagingConfigurationCommand;
const deserializeAws_restJson1CreatePackagingConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ForbiddenException":
        case "com.amazonaws.mediapackagevod#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediapackagevod#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mediapackagevod#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediapackagevod#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnprocessableEntityException":
        case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
            response = {
                ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreatePackagingGroupCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreatePackagingGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        Authorization: undefined,
        DomainName: undefined,
        EgressAccessLogs: undefined,
        Id: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.Arn = data.arn;
    }
    if (data.authorization !== undefined && data.authorization !== null) {
        contents.Authorization = deserializeAws_restJson1Authorization(data.authorization, context);
    }
    if (data.domainName !== undefined && data.domainName !== null) {
        contents.DomainName = data.domainName;
    }
    if (data.egressAccessLogs !== undefined && data.egressAccessLogs !== null) {
        contents.EgressAccessLogs = deserializeAws_restJson1EgressAccessLogs(data.egressAccessLogs, context);
    }
    if (data.id !== undefined && data.id !== null) {
        contents.Id = data.id;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreatePackagingGroupCommand = deserializeAws_restJson1CreatePackagingGroupCommand;
const deserializeAws_restJson1CreatePackagingGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ForbiddenException":
        case "com.amazonaws.mediapackagevod#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediapackagevod#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mediapackagevod#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediapackagevod#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnprocessableEntityException":
        case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
            response = {
                ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteAssetCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteAssetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteAssetCommand = deserializeAws_restJson1DeleteAssetCommand;
const deserializeAws_restJson1DeleteAssetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ForbiddenException":
        case "com.amazonaws.mediapackagevod#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediapackagevod#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mediapackagevod#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediapackagevod#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnprocessableEntityException":
        case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
            response = {
                ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeletePackagingConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeletePackagingConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeletePackagingConfigurationCommand = deserializeAws_restJson1DeletePackagingConfigurationCommand;
const deserializeAws_restJson1DeletePackagingConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ForbiddenException":
        case "com.amazonaws.mediapackagevod#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediapackagevod#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mediapackagevod#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediapackagevod#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnprocessableEntityException":
        case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
            response = {
                ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeletePackagingGroupCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeletePackagingGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeletePackagingGroupCommand = deserializeAws_restJson1DeletePackagingGroupCommand;
const deserializeAws_restJson1DeletePackagingGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ForbiddenException":
        case "com.amazonaws.mediapackagevod#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediapackagevod#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mediapackagevod#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediapackagevod#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnprocessableEntityException":
        case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
            response = {
                ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeAssetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeAssetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreatedAt: undefined,
        EgressEndpoints: undefined,
        Id: undefined,
        PackagingGroupId: undefined,
        ResourceId: undefined,
        SourceArn: undefined,
        SourceRoleArn: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.Arn = data.arn;
    }
    if (data.createdAt !== undefined && data.createdAt !== null) {
        contents.CreatedAt = data.createdAt;
    }
    if (data.egressEndpoints !== undefined && data.egressEndpoints !== null) {
        contents.EgressEndpoints = deserializeAws_restJson1__listOfEgressEndpoint(data.egressEndpoints, context);
    }
    if (data.id !== undefined && data.id !== null) {
        contents.Id = data.id;
    }
    if (data.packagingGroupId !== undefined && data.packagingGroupId !== null) {
        contents.PackagingGroupId = data.packagingGroupId;
    }
    if (data.resourceId !== undefined && data.resourceId !== null) {
        contents.ResourceId = data.resourceId;
    }
    if (data.sourceArn !== undefined && data.sourceArn !== null) {
        contents.SourceArn = data.sourceArn;
    }
    if (data.sourceRoleArn !== undefined && data.sourceRoleArn !== null) {
        contents.SourceRoleArn = data.sourceRoleArn;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeAssetCommand = deserializeAws_restJson1DescribeAssetCommand;
const deserializeAws_restJson1DescribeAssetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ForbiddenException":
        case "com.amazonaws.mediapackagevod#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediapackagevod#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mediapackagevod#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediapackagevod#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnprocessableEntityException":
        case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
            response = {
                ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribePackagingConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribePackagingConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CmafPackage: undefined,
        DashPackage: undefined,
        HlsPackage: undefined,
        Id: undefined,
        MssPackage: undefined,
        PackagingGroupId: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.Arn = data.arn;
    }
    if (data.cmafPackage !== undefined && data.cmafPackage !== null) {
        contents.CmafPackage = deserializeAws_restJson1CmafPackage(data.cmafPackage, context);
    }
    if (data.dashPackage !== undefined && data.dashPackage !== null) {
        contents.DashPackage = deserializeAws_restJson1DashPackage(data.dashPackage, context);
    }
    if (data.hlsPackage !== undefined && data.hlsPackage !== null) {
        contents.HlsPackage = deserializeAws_restJson1HlsPackage(data.hlsPackage, context);
    }
    if (data.id !== undefined && data.id !== null) {
        contents.Id = data.id;
    }
    if (data.mssPackage !== undefined && data.mssPackage !== null) {
        contents.MssPackage = deserializeAws_restJson1MssPackage(data.mssPackage, context);
    }
    if (data.packagingGroupId !== undefined && data.packagingGroupId !== null) {
        contents.PackagingGroupId = data.packagingGroupId;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribePackagingConfigurationCommand = deserializeAws_restJson1DescribePackagingConfigurationCommand;
const deserializeAws_restJson1DescribePackagingConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ForbiddenException":
        case "com.amazonaws.mediapackagevod#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediapackagevod#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mediapackagevod#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediapackagevod#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnprocessableEntityException":
        case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
            response = {
                ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribePackagingGroupCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribePackagingGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        Authorization: undefined,
        DomainName: undefined,
        EgressAccessLogs: undefined,
        Id: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.Arn = data.arn;
    }
    if (data.authorization !== undefined && data.authorization !== null) {
        contents.Authorization = deserializeAws_restJson1Authorization(data.authorization, context);
    }
    if (data.domainName !== undefined && data.domainName !== null) {
        contents.DomainName = data.domainName;
    }
    if (data.egressAccessLogs !== undefined && data.egressAccessLogs !== null) {
        contents.EgressAccessLogs = deserializeAws_restJson1EgressAccessLogs(data.egressAccessLogs, context);
    }
    if (data.id !== undefined && data.id !== null) {
        contents.Id = data.id;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribePackagingGroupCommand = deserializeAws_restJson1DescribePackagingGroupCommand;
const deserializeAws_restJson1DescribePackagingGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ForbiddenException":
        case "com.amazonaws.mediapackagevod#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediapackagevod#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mediapackagevod#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediapackagevod#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnprocessableEntityException":
        case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
            response = {
                ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListAssetsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListAssetsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Assets: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.assets !== undefined && data.assets !== null) {
        contents.Assets = deserializeAws_restJson1__listOfAssetShallow(data.assets, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.NextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListAssetsCommand = deserializeAws_restJson1ListAssetsCommand;
const deserializeAws_restJson1ListAssetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ForbiddenException":
        case "com.amazonaws.mediapackagevod#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediapackagevod#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mediapackagevod#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediapackagevod#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnprocessableEntityException":
        case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
            response = {
                ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListPackagingConfigurationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListPackagingConfigurationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        PackagingConfigurations: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.NextToken = data.nextToken;
    }
    if (data.packagingConfigurations !== undefined && data.packagingConfigurations !== null) {
        contents.PackagingConfigurations = deserializeAws_restJson1__listOfPackagingConfiguration(data.packagingConfigurations, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListPackagingConfigurationsCommand = deserializeAws_restJson1ListPackagingConfigurationsCommand;
const deserializeAws_restJson1ListPackagingConfigurationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ForbiddenException":
        case "com.amazonaws.mediapackagevod#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediapackagevod#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mediapackagevod#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediapackagevod#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnprocessableEntityException":
        case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
            response = {
                ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListPackagingGroupsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListPackagingGroupsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        PackagingGroups: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.NextToken = data.nextToken;
    }
    if (data.packagingGroups !== undefined && data.packagingGroups !== null) {
        contents.PackagingGroups = deserializeAws_restJson1__listOfPackagingGroup(data.packagingGroups, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListPackagingGroupsCommand = deserializeAws_restJson1ListPackagingGroupsCommand;
const deserializeAws_restJson1ListPackagingGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ForbiddenException":
        case "com.amazonaws.mediapackagevod#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediapackagevod#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mediapackagevod#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediapackagevod#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnprocessableEntityException":
        case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
            response = {
                ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)),
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
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
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
const deserializeAws_restJson1TagResourceCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
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
    if (output.statusCode !== 204 && output.statusCode >= 300) {
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
const deserializeAws_restJson1UpdatePackagingGroupCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdatePackagingGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        Authorization: undefined,
        DomainName: undefined,
        EgressAccessLogs: undefined,
        Id: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.Arn = data.arn;
    }
    if (data.authorization !== undefined && data.authorization !== null) {
        contents.Authorization = deserializeAws_restJson1Authorization(data.authorization, context);
    }
    if (data.domainName !== undefined && data.domainName !== null) {
        contents.DomainName = data.domainName;
    }
    if (data.egressAccessLogs !== undefined && data.egressAccessLogs !== null) {
        contents.EgressAccessLogs = deserializeAws_restJson1EgressAccessLogs(data.egressAccessLogs, context);
    }
    if (data.id !== undefined && data.id !== null) {
        contents.Id = data.id;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdatePackagingGroupCommand = deserializeAws_restJson1UpdatePackagingGroupCommand;
const deserializeAws_restJson1UpdatePackagingGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ForbiddenException":
        case "com.amazonaws.mediapackagevod#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.mediapackagevod#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.mediapackagevod#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.mediapackagevod#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnprocessableEntityException":
        case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
            response = {
                ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ForbiddenExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ForbiddenException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
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
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
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
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ServiceUnavailableException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
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
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1UnprocessableEntityExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "UnprocessableEntityException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const serializeAws_restJson1__listOf__PeriodTriggersElement = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1__listOf__string = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1__listOfDashManifest = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1DashManifest(entry, context);
    });
};
const serializeAws_restJson1__listOfHlsManifest = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1HlsManifest(entry, context);
    });
};
const serializeAws_restJson1__listOfMssManifest = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1MssManifest(entry, context);
    });
};
const serializeAws_restJson1__mapOf__string = (input, context) => {
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
const serializeAws_restJson1Authorization = (input, context) => {
    return {
        ...(input.CdnIdentifierSecret !== undefined &&
            input.CdnIdentifierSecret !== null && { cdnIdentifierSecret: input.CdnIdentifierSecret }),
        ...(input.SecretsRoleArn !== undefined &&
            input.SecretsRoleArn !== null && { secretsRoleArn: input.SecretsRoleArn }),
    };
};
const serializeAws_restJson1CmafEncryption = (input, context) => {
    return {
        ...(input.SpekeKeyProvider !== undefined &&
            input.SpekeKeyProvider !== null && {
            spekeKeyProvider: serializeAws_restJson1SpekeKeyProvider(input.SpekeKeyProvider, context),
        }),
    };
};
const serializeAws_restJson1CmafPackage = (input, context) => {
    return {
        ...(input.Encryption !== undefined &&
            input.Encryption !== null && { encryption: serializeAws_restJson1CmafEncryption(input.Encryption, context) }),
        ...(input.HlsManifests !== undefined &&
            input.HlsManifests !== null && {
            hlsManifests: serializeAws_restJson1__listOfHlsManifest(input.HlsManifests, context),
        }),
        ...(input.IncludeEncoderConfigurationInSegments !== undefined &&
            input.IncludeEncoderConfigurationInSegments !== null && {
            includeEncoderConfigurationInSegments: input.IncludeEncoderConfigurationInSegments,
        }),
        ...(input.SegmentDurationSeconds !== undefined &&
            input.SegmentDurationSeconds !== null && { segmentDurationSeconds: input.SegmentDurationSeconds }),
    };
};
const serializeAws_restJson1DashEncryption = (input, context) => {
    return {
        ...(input.SpekeKeyProvider !== undefined &&
            input.SpekeKeyProvider !== null && {
            spekeKeyProvider: serializeAws_restJson1SpekeKeyProvider(input.SpekeKeyProvider, context),
        }),
    };
};
const serializeAws_restJson1DashManifest = (input, context) => {
    return {
        ...(input.ManifestLayout !== undefined &&
            input.ManifestLayout !== null && { manifestLayout: input.ManifestLayout }),
        ...(input.ManifestName !== undefined && input.ManifestName !== null && { manifestName: input.ManifestName }),
        ...(input.MinBufferTimeSeconds !== undefined &&
            input.MinBufferTimeSeconds !== null && { minBufferTimeSeconds: input.MinBufferTimeSeconds }),
        ...(input.Profile !== undefined && input.Profile !== null && { profile: input.Profile }),
        ...(input.StreamSelection !== undefined &&
            input.StreamSelection !== null && {
            streamSelection: serializeAws_restJson1StreamSelection(input.StreamSelection, context),
        }),
    };
};
const serializeAws_restJson1DashPackage = (input, context) => {
    return {
        ...(input.DashManifests !== undefined &&
            input.DashManifests !== null && {
            dashManifests: serializeAws_restJson1__listOfDashManifest(input.DashManifests, context),
        }),
        ...(input.Encryption !== undefined &&
            input.Encryption !== null && { encryption: serializeAws_restJson1DashEncryption(input.Encryption, context) }),
        ...(input.IncludeEncoderConfigurationInSegments !== undefined &&
            input.IncludeEncoderConfigurationInSegments !== null && {
            includeEncoderConfigurationInSegments: input.IncludeEncoderConfigurationInSegments,
        }),
        ...(input.PeriodTriggers !== undefined &&
            input.PeriodTriggers !== null && {
            periodTriggers: serializeAws_restJson1__listOf__PeriodTriggersElement(input.PeriodTriggers, context),
        }),
        ...(input.SegmentDurationSeconds !== undefined &&
            input.SegmentDurationSeconds !== null && { segmentDurationSeconds: input.SegmentDurationSeconds }),
        ...(input.SegmentTemplateFormat !== undefined &&
            input.SegmentTemplateFormat !== null && { segmentTemplateFormat: input.SegmentTemplateFormat }),
    };
};
const serializeAws_restJson1EgressAccessLogs = (input, context) => {
    return {
        ...(input.LogGroupName !== undefined && input.LogGroupName !== null && { logGroupName: input.LogGroupName }),
    };
};
const serializeAws_restJson1HlsEncryption = (input, context) => {
    return {
        ...(input.ConstantInitializationVector !== undefined &&
            input.ConstantInitializationVector !== null && {
            constantInitializationVector: input.ConstantInitializationVector,
        }),
        ...(input.EncryptionMethod !== undefined &&
            input.EncryptionMethod !== null && { encryptionMethod: input.EncryptionMethod }),
        ...(input.SpekeKeyProvider !== undefined &&
            input.SpekeKeyProvider !== null && {
            spekeKeyProvider: serializeAws_restJson1SpekeKeyProvider(input.SpekeKeyProvider, context),
        }),
    };
};
const serializeAws_restJson1HlsManifest = (input, context) => {
    return {
        ...(input.AdMarkers !== undefined && input.AdMarkers !== null && { adMarkers: input.AdMarkers }),
        ...(input.IncludeIframeOnlyStream !== undefined &&
            input.IncludeIframeOnlyStream !== null && { includeIframeOnlyStream: input.IncludeIframeOnlyStream }),
        ...(input.ManifestName !== undefined && input.ManifestName !== null && { manifestName: input.ManifestName }),
        ...(input.ProgramDateTimeIntervalSeconds !== undefined &&
            input.ProgramDateTimeIntervalSeconds !== null && {
            programDateTimeIntervalSeconds: input.ProgramDateTimeIntervalSeconds,
        }),
        ...(input.RepeatExtXKey !== undefined && input.RepeatExtXKey !== null && { repeatExtXKey: input.RepeatExtXKey }),
        ...(input.StreamSelection !== undefined &&
            input.StreamSelection !== null && {
            streamSelection: serializeAws_restJson1StreamSelection(input.StreamSelection, context),
        }),
    };
};
const serializeAws_restJson1HlsPackage = (input, context) => {
    return {
        ...(input.Encryption !== undefined &&
            input.Encryption !== null && { encryption: serializeAws_restJson1HlsEncryption(input.Encryption, context) }),
        ...(input.HlsManifests !== undefined &&
            input.HlsManifests !== null && {
            hlsManifests: serializeAws_restJson1__listOfHlsManifest(input.HlsManifests, context),
        }),
        ...(input.SegmentDurationSeconds !== undefined &&
            input.SegmentDurationSeconds !== null && { segmentDurationSeconds: input.SegmentDurationSeconds }),
        ...(input.UseAudioRenditionGroup !== undefined &&
            input.UseAudioRenditionGroup !== null && { useAudioRenditionGroup: input.UseAudioRenditionGroup }),
    };
};
const serializeAws_restJson1MssEncryption = (input, context) => {
    return {
        ...(input.SpekeKeyProvider !== undefined &&
            input.SpekeKeyProvider !== null && {
            spekeKeyProvider: serializeAws_restJson1SpekeKeyProvider(input.SpekeKeyProvider, context),
        }),
    };
};
const serializeAws_restJson1MssManifest = (input, context) => {
    return {
        ...(input.ManifestName !== undefined && input.ManifestName !== null && { manifestName: input.ManifestName }),
        ...(input.StreamSelection !== undefined &&
            input.StreamSelection !== null && {
            streamSelection: serializeAws_restJson1StreamSelection(input.StreamSelection, context),
        }),
    };
};
const serializeAws_restJson1MssPackage = (input, context) => {
    return {
        ...(input.Encryption !== undefined &&
            input.Encryption !== null && { encryption: serializeAws_restJson1MssEncryption(input.Encryption, context) }),
        ...(input.MssManifests !== undefined &&
            input.MssManifests !== null && {
            mssManifests: serializeAws_restJson1__listOfMssManifest(input.MssManifests, context),
        }),
        ...(input.SegmentDurationSeconds !== undefined &&
            input.SegmentDurationSeconds !== null && { segmentDurationSeconds: input.SegmentDurationSeconds }),
    };
};
const serializeAws_restJson1SpekeKeyProvider = (input, context) => {
    return {
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { roleArn: input.RoleArn }),
        ...(input.SystemIds !== undefined &&
            input.SystemIds !== null && { systemIds: serializeAws_restJson1__listOf__string(input.SystemIds, context) }),
        ...(input.Url !== undefined && input.Url !== null && { url: input.Url }),
    };
};
const serializeAws_restJson1StreamSelection = (input, context) => {
    return {
        ...(input.MaxVideoBitsPerSecond !== undefined &&
            input.MaxVideoBitsPerSecond !== null && { maxVideoBitsPerSecond: input.MaxVideoBitsPerSecond }),
        ...(input.MinVideoBitsPerSecond !== undefined &&
            input.MinVideoBitsPerSecond !== null && { minVideoBitsPerSecond: input.MinVideoBitsPerSecond }),
        ...(input.StreamOrder !== undefined && input.StreamOrder !== null && { streamOrder: input.StreamOrder }),
    };
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
const deserializeAws_restJson1__listOf__PeriodTriggersElement = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1__listOf__string = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1__listOfAssetShallow = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AssetShallow(entry, context);
    });
};
const deserializeAws_restJson1__listOfDashManifest = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DashManifest(entry, context);
    });
};
const deserializeAws_restJson1__listOfEgressEndpoint = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1EgressEndpoint(entry, context);
    });
};
const deserializeAws_restJson1__listOfHlsManifest = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1HlsManifest(entry, context);
    });
};
const deserializeAws_restJson1__listOfMssManifest = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1MssManifest(entry, context);
    });
};
const deserializeAws_restJson1__listOfPackagingConfiguration = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PackagingConfiguration(entry, context);
    });
};
const deserializeAws_restJson1__listOfPackagingGroup = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PackagingGroup(entry, context);
    });
};
const deserializeAws_restJson1__mapOf__string = (output, context) => {
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
const deserializeAws_restJson1AssetShallow = (output, context) => {
    return {
        Arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        CreatedAt: output.createdAt !== undefined && output.createdAt !== null ? output.createdAt : undefined,
        Id: output.id !== undefined && output.id !== null ? output.id : undefined,
        PackagingGroupId: output.packagingGroupId !== undefined && output.packagingGroupId !== null ? output.packagingGroupId : undefined,
        ResourceId: output.resourceId !== undefined && output.resourceId !== null ? output.resourceId : undefined,
        SourceArn: output.sourceArn !== undefined && output.sourceArn !== null ? output.sourceArn : undefined,
        SourceRoleArn: output.sourceRoleArn !== undefined && output.sourceRoleArn !== null ? output.sourceRoleArn : undefined,
        Tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1Tags(output.tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1Authorization = (output, context) => {
    return {
        CdnIdentifierSecret: output.cdnIdentifierSecret !== undefined && output.cdnIdentifierSecret !== null
            ? output.cdnIdentifierSecret
            : undefined,
        SecretsRoleArn: output.secretsRoleArn !== undefined && output.secretsRoleArn !== null ? output.secretsRoleArn : undefined,
    };
};
const deserializeAws_restJson1CmafEncryption = (output, context) => {
    return {
        SpekeKeyProvider: output.spekeKeyProvider !== undefined && output.spekeKeyProvider !== null
            ? deserializeAws_restJson1SpekeKeyProvider(output.spekeKeyProvider, context)
            : undefined,
    };
};
const deserializeAws_restJson1CmafPackage = (output, context) => {
    return {
        Encryption: output.encryption !== undefined && output.encryption !== null
            ? deserializeAws_restJson1CmafEncryption(output.encryption, context)
            : undefined,
        HlsManifests: output.hlsManifests !== undefined && output.hlsManifests !== null
            ? deserializeAws_restJson1__listOfHlsManifest(output.hlsManifests, context)
            : undefined,
        IncludeEncoderConfigurationInSegments: output.includeEncoderConfigurationInSegments !== undefined &&
            output.includeEncoderConfigurationInSegments !== null
            ? output.includeEncoderConfigurationInSegments
            : undefined,
        SegmentDurationSeconds: output.segmentDurationSeconds !== undefined && output.segmentDurationSeconds !== null
            ? output.segmentDurationSeconds
            : undefined,
    };
};
const deserializeAws_restJson1DashEncryption = (output, context) => {
    return {
        SpekeKeyProvider: output.spekeKeyProvider !== undefined && output.spekeKeyProvider !== null
            ? deserializeAws_restJson1SpekeKeyProvider(output.spekeKeyProvider, context)
            : undefined,
    };
};
const deserializeAws_restJson1DashManifest = (output, context) => {
    return {
        ManifestLayout: output.manifestLayout !== undefined && output.manifestLayout !== null ? output.manifestLayout : undefined,
        ManifestName: output.manifestName !== undefined && output.manifestName !== null ? output.manifestName : undefined,
        MinBufferTimeSeconds: output.minBufferTimeSeconds !== undefined && output.minBufferTimeSeconds !== null
            ? output.minBufferTimeSeconds
            : undefined,
        Profile: output.profile !== undefined && output.profile !== null ? output.profile : undefined,
        StreamSelection: output.streamSelection !== undefined && output.streamSelection !== null
            ? deserializeAws_restJson1StreamSelection(output.streamSelection, context)
            : undefined,
    };
};
const deserializeAws_restJson1DashPackage = (output, context) => {
    return {
        DashManifests: output.dashManifests !== undefined && output.dashManifests !== null
            ? deserializeAws_restJson1__listOfDashManifest(output.dashManifests, context)
            : undefined,
        Encryption: output.encryption !== undefined && output.encryption !== null
            ? deserializeAws_restJson1DashEncryption(output.encryption, context)
            : undefined,
        IncludeEncoderConfigurationInSegments: output.includeEncoderConfigurationInSegments !== undefined &&
            output.includeEncoderConfigurationInSegments !== null
            ? output.includeEncoderConfigurationInSegments
            : undefined,
        PeriodTriggers: output.periodTriggers !== undefined && output.periodTriggers !== null
            ? deserializeAws_restJson1__listOf__PeriodTriggersElement(output.periodTriggers, context)
            : undefined,
        SegmentDurationSeconds: output.segmentDurationSeconds !== undefined && output.segmentDurationSeconds !== null
            ? output.segmentDurationSeconds
            : undefined,
        SegmentTemplateFormat: output.segmentTemplateFormat !== undefined && output.segmentTemplateFormat !== null
            ? output.segmentTemplateFormat
            : undefined,
    };
};
const deserializeAws_restJson1EgressAccessLogs = (output, context) => {
    return {
        LogGroupName: output.logGroupName !== undefined && output.logGroupName !== null ? output.logGroupName : undefined,
    };
};
const deserializeAws_restJson1EgressEndpoint = (output, context) => {
    return {
        PackagingConfigurationId: output.packagingConfigurationId !== undefined && output.packagingConfigurationId !== null
            ? output.packagingConfigurationId
            : undefined,
        Url: output.url !== undefined && output.url !== null ? output.url : undefined,
    };
};
const deserializeAws_restJson1HlsEncryption = (output, context) => {
    return {
        ConstantInitializationVector: output.constantInitializationVector !== undefined && output.constantInitializationVector !== null
            ? output.constantInitializationVector
            : undefined,
        EncryptionMethod: output.encryptionMethod !== undefined && output.encryptionMethod !== null ? output.encryptionMethod : undefined,
        SpekeKeyProvider: output.spekeKeyProvider !== undefined && output.spekeKeyProvider !== null
            ? deserializeAws_restJson1SpekeKeyProvider(output.spekeKeyProvider, context)
            : undefined,
    };
};
const deserializeAws_restJson1HlsManifest = (output, context) => {
    return {
        AdMarkers: output.adMarkers !== undefined && output.adMarkers !== null ? output.adMarkers : undefined,
        IncludeIframeOnlyStream: output.includeIframeOnlyStream !== undefined && output.includeIframeOnlyStream !== null
            ? output.includeIframeOnlyStream
            : undefined,
        ManifestName: output.manifestName !== undefined && output.manifestName !== null ? output.manifestName : undefined,
        ProgramDateTimeIntervalSeconds: output.programDateTimeIntervalSeconds !== undefined && output.programDateTimeIntervalSeconds !== null
            ? output.programDateTimeIntervalSeconds
            : undefined,
        RepeatExtXKey: output.repeatExtXKey !== undefined && output.repeatExtXKey !== null ? output.repeatExtXKey : undefined,
        StreamSelection: output.streamSelection !== undefined && output.streamSelection !== null
            ? deserializeAws_restJson1StreamSelection(output.streamSelection, context)
            : undefined,
    };
};
const deserializeAws_restJson1HlsPackage = (output, context) => {
    return {
        Encryption: output.encryption !== undefined && output.encryption !== null
            ? deserializeAws_restJson1HlsEncryption(output.encryption, context)
            : undefined,
        HlsManifests: output.hlsManifests !== undefined && output.hlsManifests !== null
            ? deserializeAws_restJson1__listOfHlsManifest(output.hlsManifests, context)
            : undefined,
        SegmentDurationSeconds: output.segmentDurationSeconds !== undefined && output.segmentDurationSeconds !== null
            ? output.segmentDurationSeconds
            : undefined,
        UseAudioRenditionGroup: output.useAudioRenditionGroup !== undefined && output.useAudioRenditionGroup !== null
            ? output.useAudioRenditionGroup
            : undefined,
    };
};
const deserializeAws_restJson1MssEncryption = (output, context) => {
    return {
        SpekeKeyProvider: output.spekeKeyProvider !== undefined && output.spekeKeyProvider !== null
            ? deserializeAws_restJson1SpekeKeyProvider(output.spekeKeyProvider, context)
            : undefined,
    };
};
const deserializeAws_restJson1MssManifest = (output, context) => {
    return {
        ManifestName: output.manifestName !== undefined && output.manifestName !== null ? output.manifestName : undefined,
        StreamSelection: output.streamSelection !== undefined && output.streamSelection !== null
            ? deserializeAws_restJson1StreamSelection(output.streamSelection, context)
            : undefined,
    };
};
const deserializeAws_restJson1MssPackage = (output, context) => {
    return {
        Encryption: output.encryption !== undefined && output.encryption !== null
            ? deserializeAws_restJson1MssEncryption(output.encryption, context)
            : undefined,
        MssManifests: output.mssManifests !== undefined && output.mssManifests !== null
            ? deserializeAws_restJson1__listOfMssManifest(output.mssManifests, context)
            : undefined,
        SegmentDurationSeconds: output.segmentDurationSeconds !== undefined && output.segmentDurationSeconds !== null
            ? output.segmentDurationSeconds
            : undefined,
    };
};
const deserializeAws_restJson1PackagingConfiguration = (output, context) => {
    return {
        Arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        CmafPackage: output.cmafPackage !== undefined && output.cmafPackage !== null
            ? deserializeAws_restJson1CmafPackage(output.cmafPackage, context)
            : undefined,
        DashPackage: output.dashPackage !== undefined && output.dashPackage !== null
            ? deserializeAws_restJson1DashPackage(output.dashPackage, context)
            : undefined,
        HlsPackage: output.hlsPackage !== undefined && output.hlsPackage !== null
            ? deserializeAws_restJson1HlsPackage(output.hlsPackage, context)
            : undefined,
        Id: output.id !== undefined && output.id !== null ? output.id : undefined,
        MssPackage: output.mssPackage !== undefined && output.mssPackage !== null
            ? deserializeAws_restJson1MssPackage(output.mssPackage, context)
            : undefined,
        PackagingGroupId: output.packagingGroupId !== undefined && output.packagingGroupId !== null ? output.packagingGroupId : undefined,
        Tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1Tags(output.tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1PackagingGroup = (output, context) => {
    return {
        Arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        Authorization: output.authorization !== undefined && output.authorization !== null
            ? deserializeAws_restJson1Authorization(output.authorization, context)
            : undefined,
        DomainName: output.domainName !== undefined && output.domainName !== null ? output.domainName : undefined,
        EgressAccessLogs: output.egressAccessLogs !== undefined && output.egressAccessLogs !== null
            ? deserializeAws_restJson1EgressAccessLogs(output.egressAccessLogs, context)
            : undefined,
        Id: output.id !== undefined && output.id !== null ? output.id : undefined,
        Tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1Tags(output.tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1SpekeKeyProvider = (output, context) => {
    return {
        RoleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
        SystemIds: output.systemIds !== undefined && output.systemIds !== null
            ? deserializeAws_restJson1__listOf__string(output.systemIds, context)
            : undefined,
        Url: output.url !== undefined && output.url !== null ? output.url : undefined,
    };
};
const deserializeAws_restJson1StreamSelection = (output, context) => {
    return {
        MaxVideoBitsPerSecond: output.maxVideoBitsPerSecond !== undefined && output.maxVideoBitsPerSecond !== null
            ? output.maxVideoBitsPerSecond
            : undefined,
        MinVideoBitsPerSecond: output.minVideoBitsPerSecond !== undefined && output.minVideoBitsPerSecond !== null
            ? output.minVideoBitsPerSecond
            : undefined,
        StreamOrder: output.streamOrder !== undefined && output.streamOrder !== null ? output.streamOrder : undefined,
    };
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