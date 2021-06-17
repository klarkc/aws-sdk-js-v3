"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1UpdateDeviceStateCommand = exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1UnclaimDeviceCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1ListDevicesCommand = exports.deserializeAws_restJson1ListDeviceEventsCommand = exports.deserializeAws_restJson1InvokeDeviceMethodCommand = exports.deserializeAws_restJson1InitiateDeviceClaimCommand = exports.deserializeAws_restJson1GetDeviceMethodsCommand = exports.deserializeAws_restJson1FinalizeDeviceClaimCommand = exports.deserializeAws_restJson1DescribeDeviceCommand = exports.deserializeAws_restJson1ClaimDevicesByClaimCodeCommand = exports.serializeAws_restJson1UpdateDeviceStateCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1UnclaimDeviceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1ListDevicesCommand = exports.serializeAws_restJson1ListDeviceEventsCommand = exports.serializeAws_restJson1InvokeDeviceMethodCommand = exports.serializeAws_restJson1InitiateDeviceClaimCommand = exports.serializeAws_restJson1GetDeviceMethodsCommand = exports.serializeAws_restJson1FinalizeDeviceClaimCommand = exports.serializeAws_restJson1DescribeDeviceCommand = exports.serializeAws_restJson1ClaimDevicesByClaimCodeCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1ClaimDevicesByClaimCodeCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/claims/{ClaimCode}";
    if (input.ClaimCode !== undefined) {
        const labelValue = input.ClaimCode;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ClaimCode.");
        }
        resolvedPath = resolvedPath.replace("{ClaimCode}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ClaimCode.");
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
exports.serializeAws_restJson1ClaimDevicesByClaimCodeCommand = serializeAws_restJson1ClaimDevicesByClaimCodeCommand;
const serializeAws_restJson1DescribeDeviceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/devices/{DeviceId}";
    if (input.DeviceId !== undefined) {
        const labelValue = input.DeviceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DeviceId.");
        }
        resolvedPath = resolvedPath.replace("{DeviceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DeviceId.");
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
exports.serializeAws_restJson1DescribeDeviceCommand = serializeAws_restJson1DescribeDeviceCommand;
const serializeAws_restJson1FinalizeDeviceClaimCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/devices/{DeviceId}/finalize-claim";
    if (input.DeviceId !== undefined) {
        const labelValue = input.DeviceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DeviceId.");
        }
        resolvedPath = resolvedPath.replace("{DeviceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DeviceId.");
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
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1FinalizeDeviceClaimCommand = serializeAws_restJson1FinalizeDeviceClaimCommand;
const serializeAws_restJson1GetDeviceMethodsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/devices/{DeviceId}/methods";
    if (input.DeviceId !== undefined) {
        const labelValue = input.DeviceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DeviceId.");
        }
        resolvedPath = resolvedPath.replace("{DeviceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DeviceId.");
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
exports.serializeAws_restJson1GetDeviceMethodsCommand = serializeAws_restJson1GetDeviceMethodsCommand;
const serializeAws_restJson1InitiateDeviceClaimCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/devices/{DeviceId}/initiate-claim";
    if (input.DeviceId !== undefined) {
        const labelValue = input.DeviceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DeviceId.");
        }
        resolvedPath = resolvedPath.replace("{DeviceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DeviceId.");
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
exports.serializeAws_restJson1InitiateDeviceClaimCommand = serializeAws_restJson1InitiateDeviceClaimCommand;
const serializeAws_restJson1InvokeDeviceMethodCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/devices/{DeviceId}/methods";
    if (input.DeviceId !== undefined) {
        const labelValue = input.DeviceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DeviceId.");
        }
        resolvedPath = resolvedPath.replace("{DeviceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DeviceId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.DeviceMethod !== undefined &&
            input.DeviceMethod !== null && { deviceMethod: serializeAws_restJson1DeviceMethod(input.DeviceMethod, context) }),
        ...(input.DeviceMethodParameters !== undefined &&
            input.DeviceMethodParameters !== null && { deviceMethodParameters: input.DeviceMethodParameters }),
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
exports.serializeAws_restJson1InvokeDeviceMethodCommand = serializeAws_restJson1InvokeDeviceMethodCommand;
const serializeAws_restJson1ListDeviceEventsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/devices/{DeviceId}/events";
    if (input.DeviceId !== undefined) {
        const labelValue = input.DeviceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DeviceId.");
        }
        resolvedPath = resolvedPath.replace("{DeviceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DeviceId.");
    }
    const query = {
        ...(input.FromTimeStamp !== undefined && {
            fromTimeStamp: (input.FromTimeStamp.toISOString().split(".")[0] + "Z").toString(),
        }),
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.ToTimeStamp !== undefined && {
            toTimeStamp: (input.ToTimeStamp.toISOString().split(".")[0] + "Z").toString(),
        }),
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
exports.serializeAws_restJson1ListDeviceEventsCommand = serializeAws_restJson1ListDeviceEventsCommand;
const serializeAws_restJson1ListDevicesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/devices";
    const query = {
        ...(input.DeviceType !== undefined && { deviceType: input.DeviceType }),
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
exports.serializeAws_restJson1ListDevicesCommand = serializeAws_restJson1ListDevicesCommand;
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
const serializeAws_restJson1UnclaimDeviceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/devices/{DeviceId}/unclaim";
    if (input.DeviceId !== undefined) {
        const labelValue = input.DeviceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DeviceId.");
        }
        resolvedPath = resolvedPath.replace("{DeviceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DeviceId.");
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
exports.serializeAws_restJson1UnclaimDeviceCommand = serializeAws_restJson1UnclaimDeviceCommand;
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
const serializeAws_restJson1UpdateDeviceStateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/devices/{DeviceId}/state";
    if (input.DeviceId !== undefined) {
        const labelValue = input.DeviceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DeviceId.");
        }
        resolvedPath = resolvedPath.replace("{DeviceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DeviceId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Enabled !== undefined && input.Enabled !== null && { enabled: input.Enabled }),
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
exports.serializeAws_restJson1UpdateDeviceStateCommand = serializeAws_restJson1UpdateDeviceStateCommand;
const deserializeAws_restJson1ClaimDevicesByClaimCodeCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ClaimDevicesByClaimCodeCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ClaimCode: undefined,
        Total: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.claimCode !== undefined && data.claimCode !== null) {
        contents.ClaimCode = data.claimCode;
    }
    if (data.total !== undefined && data.total !== null) {
        contents.Total = data.total;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ClaimDevicesByClaimCodeCommand = deserializeAws_restJson1ClaimDevicesByClaimCodeCommand;
const deserializeAws_restJson1ClaimDevicesByClaimCodeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ForbiddenException":
        case "com.amazonaws.iot1clickdevicesservice#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.iot1clickdevicesservice#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot1clickdevicesservice#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeDeviceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeDeviceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DeviceDescription: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.deviceDescription !== undefined && data.deviceDescription !== null) {
        contents.DeviceDescription = deserializeAws_restJson1DeviceDescription(data.deviceDescription, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeDeviceCommand = deserializeAws_restJson1DescribeDeviceCommand;
const deserializeAws_restJson1DescribeDeviceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot1clickdevicesservice#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot1clickdevicesservice#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iot1clickdevicesservice#ResourceNotFoundException":
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
const deserializeAws_restJson1FinalizeDeviceClaimCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1FinalizeDeviceClaimCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        State: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.state !== undefined && data.state !== null) {
        contents.State = data.state;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1FinalizeDeviceClaimCommand = deserializeAws_restJson1FinalizeDeviceClaimCommand;
const deserializeAws_restJson1FinalizeDeviceClaimCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot1clickdevicesservice#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot1clickdevicesservice#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionFailedException":
        case "com.amazonaws.iot1clickdevicesservice#PreconditionFailedException":
            response = {
                ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceConflictException":
        case "com.amazonaws.iot1clickdevicesservice#ResourceConflictException":
            response = {
                ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iot1clickdevicesservice#ResourceNotFoundException":
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
const deserializeAws_restJson1GetDeviceMethodsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetDeviceMethodsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DeviceMethods: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.deviceMethods !== undefined && data.deviceMethods !== null) {
        contents.DeviceMethods = deserializeAws_restJson1__listOfDeviceMethod(data.deviceMethods, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDeviceMethodsCommand = deserializeAws_restJson1GetDeviceMethodsCommand;
const deserializeAws_restJson1GetDeviceMethodsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot1clickdevicesservice#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot1clickdevicesservice#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iot1clickdevicesservice#ResourceNotFoundException":
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
const deserializeAws_restJson1InitiateDeviceClaimCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1InitiateDeviceClaimCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        State: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.state !== undefined && data.state !== null) {
        contents.State = data.state;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1InitiateDeviceClaimCommand = deserializeAws_restJson1InitiateDeviceClaimCommand;
const deserializeAws_restJson1InitiateDeviceClaimCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot1clickdevicesservice#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot1clickdevicesservice#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceConflictException":
        case "com.amazonaws.iot1clickdevicesservice#ResourceConflictException":
            response = {
                ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iot1clickdevicesservice#ResourceNotFoundException":
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
const deserializeAws_restJson1InvokeDeviceMethodCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1InvokeDeviceMethodCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DeviceMethodResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.deviceMethodResponse !== undefined && data.deviceMethodResponse !== null) {
        contents.DeviceMethodResponse = data.deviceMethodResponse;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1InvokeDeviceMethodCommand = deserializeAws_restJson1InvokeDeviceMethodCommand;
const deserializeAws_restJson1InvokeDeviceMethodCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot1clickdevicesservice#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot1clickdevicesservice#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionFailedException":
        case "com.amazonaws.iot1clickdevicesservice#PreconditionFailedException":
            response = {
                ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RangeNotSatisfiableException":
        case "com.amazonaws.iot1clickdevicesservice#RangeNotSatisfiableException":
            response = {
                ...(await deserializeAws_restJson1RangeNotSatisfiableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceConflictException":
        case "com.amazonaws.iot1clickdevicesservice#ResourceConflictException":
            response = {
                ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iot1clickdevicesservice#ResourceNotFoundException":
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
const deserializeAws_restJson1ListDeviceEventsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListDeviceEventsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Events: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.events !== undefined && data.events !== null) {
        contents.Events = deserializeAws_restJson1__listOfDeviceEvent(data.events, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.NextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListDeviceEventsCommand = deserializeAws_restJson1ListDeviceEventsCommand;
const deserializeAws_restJson1ListDeviceEventsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot1clickdevicesservice#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot1clickdevicesservice#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RangeNotSatisfiableException":
        case "com.amazonaws.iot1clickdevicesservice#RangeNotSatisfiableException":
            response = {
                ...(await deserializeAws_restJson1RangeNotSatisfiableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iot1clickdevicesservice#ResourceNotFoundException":
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
const deserializeAws_restJson1ListDevicesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListDevicesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Devices: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.devices !== undefined && data.devices !== null) {
        contents.Devices = deserializeAws_restJson1__listOfDeviceDescription(data.devices, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.NextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListDevicesCommand = deserializeAws_restJson1ListDevicesCommand;
const deserializeAws_restJson1ListDevicesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot1clickdevicesservice#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot1clickdevicesservice#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RangeNotSatisfiableException":
        case "com.amazonaws.iot1clickdevicesservice#RangeNotSatisfiableException":
            response = {
                ...(await deserializeAws_restJson1RangeNotSatisfiableExceptionResponse(parsedOutput, context)),
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
        case "InternalFailureException":
        case "com.amazonaws.iot1clickdevicesservice#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iot1clickdevicesservice#ResourceNotFoundException":
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
        case "InternalFailureException":
        case "com.amazonaws.iot1clickdevicesservice#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot1clickdevicesservice#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iot1clickdevicesservice#ResourceNotFoundException":
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
const deserializeAws_restJson1UnclaimDeviceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UnclaimDeviceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        State: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.state !== undefined && data.state !== null) {
        contents.State = data.state;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UnclaimDeviceCommand = deserializeAws_restJson1UnclaimDeviceCommand;
const deserializeAws_restJson1UnclaimDeviceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot1clickdevicesservice#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot1clickdevicesservice#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iot1clickdevicesservice#ResourceNotFoundException":
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
        case "InternalFailureException":
        case "com.amazonaws.iot1clickdevicesservice#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot1clickdevicesservice#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iot1clickdevicesservice#ResourceNotFoundException":
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
const deserializeAws_restJson1UpdateDeviceStateCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateDeviceStateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateDeviceStateCommand = deserializeAws_restJson1UpdateDeviceStateCommand;
const deserializeAws_restJson1UpdateDeviceStateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iot1clickdevicesservice#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iot1clickdevicesservice#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iot1clickdevicesservice#ResourceNotFoundException":
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
const deserializeAws_restJson1ForbiddenExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ForbiddenException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Code: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.Code = data.code;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1InternalFailureExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalFailureException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Code: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.Code = data.code;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
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
    };
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.Code = data.code;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1PreconditionFailedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "PreconditionFailedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Code: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.Code = data.code;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1RangeNotSatisfiableExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "RangeNotSatisfiableException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Code: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.Code = data.code;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ResourceConflictExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceConflictException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Code: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.Code = data.code;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
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
    };
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.Code = data.code;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return contents;
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
const serializeAws_restJson1DeviceMethod = (input, context) => {
    return {
        ...(input.DeviceType !== undefined && input.DeviceType !== null && { deviceType: input.DeviceType }),
        ...(input.MethodName !== undefined && input.MethodName !== null && { methodName: input.MethodName }),
    };
};
const deserializeAws_restJson1__listOfDeviceDescription = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DeviceDescription(entry, context);
    });
};
const deserializeAws_restJson1__listOfDeviceEvent = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DeviceEvent(entry, context);
    });
};
const deserializeAws_restJson1__listOfDeviceMethod = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DeviceMethod(entry, context);
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
const deserializeAws_restJson1Attributes = (output, context) => {
    return {};
};
const deserializeAws_restJson1Device = (output, context) => {
    return {
        Attributes: output.attributes !== undefined && output.attributes !== null
            ? deserializeAws_restJson1Attributes(output.attributes, context)
            : undefined,
        DeviceId: output.deviceId !== undefined && output.deviceId !== null ? output.deviceId : undefined,
        Type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_restJson1DeviceAttributes = (output, context) => {
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
const deserializeAws_restJson1DeviceDescription = (output, context) => {
    return {
        Arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        Attributes: output.attributes !== undefined && output.attributes !== null
            ? deserializeAws_restJson1DeviceAttributes(output.attributes, context)
            : undefined,
        DeviceId: output.deviceId !== undefined && output.deviceId !== null ? output.deviceId : undefined,
        Enabled: output.enabled !== undefined && output.enabled !== null ? output.enabled : undefined,
        RemainingLife: output.remainingLife !== undefined && output.remainingLife !== null ? output.remainingLife : undefined,
        Tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1__mapOf__string(output.tags, context)
            : undefined,
        Type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_restJson1DeviceEvent = (output, context) => {
    return {
        Device: output.device !== undefined && output.device !== null
            ? deserializeAws_restJson1Device(output.device, context)
            : undefined,
        StdEvent: output.stdEvent !== undefined && output.stdEvent !== null ? output.stdEvent : undefined,
    };
};
const deserializeAws_restJson1DeviceMethod = (output, context) => {
    return {
        DeviceType: output.deviceType !== undefined && output.deviceType !== null ? output.deviceType : undefined,
        MethodName: output.methodName !== undefined && output.methodName !== null ? output.methodName : undefined,
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