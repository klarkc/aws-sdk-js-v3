"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1UpdateStreamCommand = exports.deserializeAws_restJson1UpdateSignalingChannelCommand = exports.deserializeAws_restJson1UpdateDataRetentionCommand = exports.deserializeAws_restJson1UntagStreamCommand = exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TagStreamCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1ListTagsForStreamCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1ListStreamsCommand = exports.deserializeAws_restJson1ListSignalingChannelsCommand = exports.deserializeAws_restJson1GetSignalingChannelEndpointCommand = exports.deserializeAws_restJson1GetDataEndpointCommand = exports.deserializeAws_restJson1DescribeStreamCommand = exports.deserializeAws_restJson1DescribeSignalingChannelCommand = exports.deserializeAws_restJson1DeleteStreamCommand = exports.deserializeAws_restJson1DeleteSignalingChannelCommand = exports.deserializeAws_restJson1CreateStreamCommand = exports.deserializeAws_restJson1CreateSignalingChannelCommand = exports.serializeAws_restJson1UpdateStreamCommand = exports.serializeAws_restJson1UpdateSignalingChannelCommand = exports.serializeAws_restJson1UpdateDataRetentionCommand = exports.serializeAws_restJson1UntagStreamCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagStreamCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1ListTagsForStreamCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1ListStreamsCommand = exports.serializeAws_restJson1ListSignalingChannelsCommand = exports.serializeAws_restJson1GetSignalingChannelEndpointCommand = exports.serializeAws_restJson1GetDataEndpointCommand = exports.serializeAws_restJson1DescribeStreamCommand = exports.serializeAws_restJson1DescribeSignalingChannelCommand = exports.serializeAws_restJson1DeleteStreamCommand = exports.serializeAws_restJson1DeleteSignalingChannelCommand = exports.serializeAws_restJson1CreateStreamCommand = exports.serializeAws_restJson1CreateSignalingChannelCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_restJson1CreateSignalingChannelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/createSignalingChannel";
    let body;
    body = JSON.stringify({
        ...(input.ChannelName !== undefined && input.ChannelName !== null && { ChannelName: input.ChannelName }),
        ...(input.ChannelType !== undefined && input.ChannelType !== null && { ChannelType: input.ChannelType }),
        ...(input.SingleMasterConfiguration !== undefined &&
            input.SingleMasterConfiguration !== null && {
            SingleMasterConfiguration: serializeAws_restJson1SingleMasterConfiguration(input.SingleMasterConfiguration, context),
        }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_restJson1TagOnCreateList(input.Tags, context) }),
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
exports.serializeAws_restJson1CreateSignalingChannelCommand = serializeAws_restJson1CreateSignalingChannelCommand;
const serializeAws_restJson1CreateStreamCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/createStream";
    let body;
    body = JSON.stringify({
        ...(input.DataRetentionInHours !== undefined &&
            input.DataRetentionInHours !== null && { DataRetentionInHours: input.DataRetentionInHours }),
        ...(input.DeviceName !== undefined && input.DeviceName !== null && { DeviceName: input.DeviceName }),
        ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
        ...(input.MediaType !== undefined && input.MediaType !== null && { MediaType: input.MediaType }),
        ...(input.StreamName !== undefined && input.StreamName !== null && { StreamName: input.StreamName }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_restJson1ResourceTags(input.Tags, context) }),
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
exports.serializeAws_restJson1CreateStreamCommand = serializeAws_restJson1CreateStreamCommand;
const serializeAws_restJson1DeleteSignalingChannelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/deleteSignalingChannel";
    let body;
    body = JSON.stringify({
        ...(input.ChannelARN !== undefined && input.ChannelARN !== null && { ChannelARN: input.ChannelARN }),
        ...(input.CurrentVersion !== undefined &&
            input.CurrentVersion !== null && { CurrentVersion: input.CurrentVersion }),
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
exports.serializeAws_restJson1DeleteSignalingChannelCommand = serializeAws_restJson1DeleteSignalingChannelCommand;
const serializeAws_restJson1DeleteStreamCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/deleteStream";
    let body;
    body = JSON.stringify({
        ...(input.CurrentVersion !== undefined &&
            input.CurrentVersion !== null && { CurrentVersion: input.CurrentVersion }),
        ...(input.StreamARN !== undefined && input.StreamARN !== null && { StreamARN: input.StreamARN }),
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
exports.serializeAws_restJson1DeleteStreamCommand = serializeAws_restJson1DeleteStreamCommand;
const serializeAws_restJson1DescribeSignalingChannelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/describeSignalingChannel";
    let body;
    body = JSON.stringify({
        ...(input.ChannelARN !== undefined && input.ChannelARN !== null && { ChannelARN: input.ChannelARN }),
        ...(input.ChannelName !== undefined && input.ChannelName !== null && { ChannelName: input.ChannelName }),
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
exports.serializeAws_restJson1DescribeSignalingChannelCommand = serializeAws_restJson1DescribeSignalingChannelCommand;
const serializeAws_restJson1DescribeStreamCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/describeStream";
    let body;
    body = JSON.stringify({
        ...(input.StreamARN !== undefined && input.StreamARN !== null && { StreamARN: input.StreamARN }),
        ...(input.StreamName !== undefined && input.StreamName !== null && { StreamName: input.StreamName }),
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
exports.serializeAws_restJson1DescribeStreamCommand = serializeAws_restJson1DescribeStreamCommand;
const serializeAws_restJson1GetDataEndpointCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/getDataEndpoint";
    let body;
    body = JSON.stringify({
        ...(input.APIName !== undefined && input.APIName !== null && { APIName: input.APIName }),
        ...(input.StreamARN !== undefined && input.StreamARN !== null && { StreamARN: input.StreamARN }),
        ...(input.StreamName !== undefined && input.StreamName !== null && { StreamName: input.StreamName }),
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
exports.serializeAws_restJson1GetDataEndpointCommand = serializeAws_restJson1GetDataEndpointCommand;
const serializeAws_restJson1GetSignalingChannelEndpointCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/getSignalingChannelEndpoint";
    let body;
    body = JSON.stringify({
        ...(input.ChannelARN !== undefined && input.ChannelARN !== null && { ChannelARN: input.ChannelARN }),
        ...(input.SingleMasterChannelEndpointConfiguration !== undefined &&
            input.SingleMasterChannelEndpointConfiguration !== null && {
            SingleMasterChannelEndpointConfiguration: serializeAws_restJson1SingleMasterChannelEndpointConfiguration(input.SingleMasterChannelEndpointConfiguration, context),
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
exports.serializeAws_restJson1GetSignalingChannelEndpointCommand = serializeAws_restJson1GetSignalingChannelEndpointCommand;
const serializeAws_restJson1ListSignalingChannelsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/listSignalingChannels";
    let body;
    body = JSON.stringify({
        ...(input.ChannelNameCondition !== undefined &&
            input.ChannelNameCondition !== null && {
            ChannelNameCondition: serializeAws_restJson1ChannelNameCondition(input.ChannelNameCondition, context),
        }),
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
exports.serializeAws_restJson1ListSignalingChannelsCommand = serializeAws_restJson1ListSignalingChannelsCommand;
const serializeAws_restJson1ListStreamsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/listStreams";
    let body;
    body = JSON.stringify({
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.StreamNameCondition !== undefined &&
            input.StreamNameCondition !== null && {
            StreamNameCondition: serializeAws_restJson1StreamNameCondition(input.StreamNameCondition, context),
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
exports.serializeAws_restJson1ListStreamsCommand = serializeAws_restJson1ListStreamsCommand;
const serializeAws_restJson1ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/ListTagsForResource";
    let body;
    body = JSON.stringify({
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
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
exports.serializeAws_restJson1ListTagsForResourceCommand = serializeAws_restJson1ListTagsForResourceCommand;
const serializeAws_restJson1ListTagsForStreamCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/listTagsForStream";
    let body;
    body = JSON.stringify({
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.StreamARN !== undefined && input.StreamARN !== null && { StreamARN: input.StreamARN }),
        ...(input.StreamName !== undefined && input.StreamName !== null && { StreamName: input.StreamName }),
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
exports.serializeAws_restJson1ListTagsForStreamCommand = serializeAws_restJson1ListTagsForStreamCommand;
const serializeAws_restJson1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/TagResource";
    let body;
    body = JSON.stringify({
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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
const serializeAws_restJson1TagStreamCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/tagStream";
    let body;
    body = JSON.stringify({
        ...(input.StreamARN !== undefined && input.StreamARN !== null && { StreamARN: input.StreamARN }),
        ...(input.StreamName !== undefined && input.StreamName !== null && { StreamName: input.StreamName }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_restJson1ResourceTags(input.Tags, context) }),
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
exports.serializeAws_restJson1TagStreamCommand = serializeAws_restJson1TagStreamCommand;
const serializeAws_restJson1UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/UntagResource";
    let body;
    body = JSON.stringify({
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
        ...(input.TagKeyList !== undefined &&
            input.TagKeyList !== null && { TagKeyList: serializeAws_restJson1TagKeyList(input.TagKeyList, context) }),
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
exports.serializeAws_restJson1UntagResourceCommand = serializeAws_restJson1UntagResourceCommand;
const serializeAws_restJson1UntagStreamCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/untagStream";
    let body;
    body = JSON.stringify({
        ...(input.StreamARN !== undefined && input.StreamARN !== null && { StreamARN: input.StreamARN }),
        ...(input.StreamName !== undefined && input.StreamName !== null && { StreamName: input.StreamName }),
        ...(input.TagKeyList !== undefined &&
            input.TagKeyList !== null && { TagKeyList: serializeAws_restJson1TagKeyList(input.TagKeyList, context) }),
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
exports.serializeAws_restJson1UntagStreamCommand = serializeAws_restJson1UntagStreamCommand;
const serializeAws_restJson1UpdateDataRetentionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/updateDataRetention";
    let body;
    body = JSON.stringify({
        ...(input.CurrentVersion !== undefined &&
            input.CurrentVersion !== null && { CurrentVersion: input.CurrentVersion }),
        ...(input.DataRetentionChangeInHours !== undefined &&
            input.DataRetentionChangeInHours !== null && { DataRetentionChangeInHours: input.DataRetentionChangeInHours }),
        ...(input.Operation !== undefined && input.Operation !== null && { Operation: input.Operation }),
        ...(input.StreamARN !== undefined && input.StreamARN !== null && { StreamARN: input.StreamARN }),
        ...(input.StreamName !== undefined && input.StreamName !== null && { StreamName: input.StreamName }),
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
exports.serializeAws_restJson1UpdateDataRetentionCommand = serializeAws_restJson1UpdateDataRetentionCommand;
const serializeAws_restJson1UpdateSignalingChannelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/updateSignalingChannel";
    let body;
    body = JSON.stringify({
        ...(input.ChannelARN !== undefined && input.ChannelARN !== null && { ChannelARN: input.ChannelARN }),
        ...(input.CurrentVersion !== undefined &&
            input.CurrentVersion !== null && { CurrentVersion: input.CurrentVersion }),
        ...(input.SingleMasterConfiguration !== undefined &&
            input.SingleMasterConfiguration !== null && {
            SingleMasterConfiguration: serializeAws_restJson1SingleMasterConfiguration(input.SingleMasterConfiguration, context),
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
exports.serializeAws_restJson1UpdateSignalingChannelCommand = serializeAws_restJson1UpdateSignalingChannelCommand;
const serializeAws_restJson1UpdateStreamCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/updateStream";
    let body;
    body = JSON.stringify({
        ...(input.CurrentVersion !== undefined &&
            input.CurrentVersion !== null && { CurrentVersion: input.CurrentVersion }),
        ...(input.DeviceName !== undefined && input.DeviceName !== null && { DeviceName: input.DeviceName }),
        ...(input.MediaType !== undefined && input.MediaType !== null && { MediaType: input.MediaType }),
        ...(input.StreamARN !== undefined && input.StreamARN !== null && { StreamARN: input.StreamARN }),
        ...(input.StreamName !== undefined && input.StreamName !== null && { StreamName: input.StreamName }),
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
exports.serializeAws_restJson1UpdateStreamCommand = serializeAws_restJson1UpdateStreamCommand;
const deserializeAws_restJson1CreateSignalingChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateSignalingChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ChannelARN: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ChannelARN !== undefined && data.ChannelARN !== null) {
        contents.ChannelARN = data.ChannelARN;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateSignalingChannelCommand = deserializeAws_restJson1CreateSignalingChannelCommand;
const deserializeAws_restJson1CreateSignalingChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kinesisvideo#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountChannelLimitExceededException":
        case "com.amazonaws.kinesisvideo#AccountChannelLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1AccountChannelLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientLimitExceededException":
        case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisvideo#InvalidArgumentException":
            response = {
                ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesisvideo#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagsPerResourceExceededLimitException":
        case "com.amazonaws.kinesisvideo#TagsPerResourceExceededLimitException":
            response = {
                ...(await deserializeAws_restJson1TagsPerResourceExceededLimitExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateStreamCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateStreamCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        StreamARN: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.StreamARN !== undefined && data.StreamARN !== null) {
        contents.StreamARN = data.StreamARN;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateStreamCommand = deserializeAws_restJson1CreateStreamCommand;
const deserializeAws_restJson1CreateStreamCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccountStreamLimitExceededException":
        case "com.amazonaws.kinesisvideo#AccountStreamLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1AccountStreamLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientLimitExceededException":
        case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeviceStreamLimitExceededException":
        case "com.amazonaws.kinesisvideo#DeviceStreamLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1DeviceStreamLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisvideo#InvalidArgumentException":
            response = {
                ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDeviceException":
        case "com.amazonaws.kinesisvideo#InvalidDeviceException":
            response = {
                ...(await deserializeAws_restJson1InvalidDeviceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesisvideo#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagsPerResourceExceededLimitException":
        case "com.amazonaws.kinesisvideo#TagsPerResourceExceededLimitException":
            response = {
                ...(await deserializeAws_restJson1TagsPerResourceExceededLimitExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteSignalingChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteSignalingChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteSignalingChannelCommand = deserializeAws_restJson1DeleteSignalingChannelCommand;
const deserializeAws_restJson1DeleteSignalingChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kinesisvideo#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientLimitExceededException":
        case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisvideo#InvalidArgumentException":
            response = {
                ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesisvideo#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "VersionMismatchException":
        case "com.amazonaws.kinesisvideo#VersionMismatchException":
            response = {
                ...(await deserializeAws_restJson1VersionMismatchExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteStreamCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteStreamCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteStreamCommand = deserializeAws_restJson1DeleteStreamCommand;
const deserializeAws_restJson1DeleteStreamCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientLimitExceededException":
        case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisvideo#InvalidArgumentException":
            response = {
                ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.kinesisvideo#NotAuthorizedException":
            response = {
                ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesisvideo#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "VersionMismatchException":
        case "com.amazonaws.kinesisvideo#VersionMismatchException":
            response = {
                ...(await deserializeAws_restJson1VersionMismatchExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeSignalingChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeSignalingChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ChannelInfo: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ChannelInfo !== undefined && data.ChannelInfo !== null) {
        contents.ChannelInfo = deserializeAws_restJson1ChannelInfo(data.ChannelInfo, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeSignalingChannelCommand = deserializeAws_restJson1DescribeSignalingChannelCommand;
const deserializeAws_restJson1DescribeSignalingChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kinesisvideo#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientLimitExceededException":
        case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisvideo#InvalidArgumentException":
            response = {
                ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
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
const deserializeAws_restJson1DescribeStreamCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeStreamCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        StreamInfo: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.StreamInfo !== undefined && data.StreamInfo !== null) {
        contents.StreamInfo = deserializeAws_restJson1StreamInfo(data.StreamInfo, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeStreamCommand = deserializeAws_restJson1DescribeStreamCommand;
const deserializeAws_restJson1DescribeStreamCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientLimitExceededException":
        case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisvideo#InvalidArgumentException":
            response = {
                ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.kinesisvideo#NotAuthorizedException":
            response = {
                ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
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
const deserializeAws_restJson1GetDataEndpointCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetDataEndpointCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DataEndpoint: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DataEndpoint !== undefined && data.DataEndpoint !== null) {
        contents.DataEndpoint = data.DataEndpoint;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDataEndpointCommand = deserializeAws_restJson1GetDataEndpointCommand;
const deserializeAws_restJson1GetDataEndpointCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientLimitExceededException":
        case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisvideo#InvalidArgumentException":
            response = {
                ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.kinesisvideo#NotAuthorizedException":
            response = {
                ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
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
const deserializeAws_restJson1GetSignalingChannelEndpointCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetSignalingChannelEndpointCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ResourceEndpointList: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ResourceEndpointList !== undefined && data.ResourceEndpointList !== null) {
        contents.ResourceEndpointList = deserializeAws_restJson1ResourceEndpointList(data.ResourceEndpointList, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetSignalingChannelEndpointCommand = deserializeAws_restJson1GetSignalingChannelEndpointCommand;
const deserializeAws_restJson1GetSignalingChannelEndpointCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kinesisvideo#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientLimitExceededException":
        case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisvideo#InvalidArgumentException":
            response = {
                ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesisvideo#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
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
const deserializeAws_restJson1ListSignalingChannelsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListSignalingChannelsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ChannelInfoList: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ChannelInfoList !== undefined && data.ChannelInfoList !== null) {
        contents.ChannelInfoList = deserializeAws_restJson1ChannelInfoList(data.ChannelInfoList, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListSignalingChannelsCommand = deserializeAws_restJson1ListSignalingChannelsCommand;
const deserializeAws_restJson1ListSignalingChannelsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kinesisvideo#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientLimitExceededException":
        case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisvideo#InvalidArgumentException":
            response = {
                ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListStreamsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListStreamsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        StreamInfoList: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.StreamInfoList !== undefined && data.StreamInfoList !== null) {
        contents.StreamInfoList = deserializeAws_restJson1StreamInfoList(data.StreamInfoList, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListStreamsCommand = deserializeAws_restJson1ListStreamsCommand;
const deserializeAws_restJson1ListStreamsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientLimitExceededException":
        case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisvideo#InvalidArgumentException":
            response = {
                ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context)),
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
        NextToken: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1ResourceTags(data.Tags, context);
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
        case "AccessDeniedException":
        case "com.amazonaws.kinesisvideo#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientLimitExceededException":
        case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisvideo#InvalidArgumentException":
            response = {
                ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
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
const deserializeAws_restJson1ListTagsForStreamCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListTagsForStreamCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1ResourceTags(data.Tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListTagsForStreamCommand = deserializeAws_restJson1ListTagsForStreamCommand;
const deserializeAws_restJson1ListTagsForStreamCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientLimitExceededException":
        case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisvideo#InvalidArgumentException":
            response = {
                ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceFormatException":
        case "com.amazonaws.kinesisvideo#InvalidResourceFormatException":
            response = {
                ...(await deserializeAws_restJson1InvalidResourceFormatExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.kinesisvideo#NotAuthorizedException":
            response = {
                ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
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
        case "AccessDeniedException":
        case "com.amazonaws.kinesisvideo#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientLimitExceededException":
        case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisvideo#InvalidArgumentException":
            response = {
                ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagsPerResourceExceededLimitException":
        case "com.amazonaws.kinesisvideo#TagsPerResourceExceededLimitException":
            response = {
                ...(await deserializeAws_restJson1TagsPerResourceExceededLimitExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1TagStreamCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1TagStreamCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1TagStreamCommand = deserializeAws_restJson1TagStreamCommand;
const deserializeAws_restJson1TagStreamCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientLimitExceededException":
        case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisvideo#InvalidArgumentException":
            response = {
                ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceFormatException":
        case "com.amazonaws.kinesisvideo#InvalidResourceFormatException":
            response = {
                ...(await deserializeAws_restJson1InvalidResourceFormatExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.kinesisvideo#NotAuthorizedException":
            response = {
                ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagsPerResourceExceededLimitException":
        case "com.amazonaws.kinesisvideo#TagsPerResourceExceededLimitException":
            response = {
                ...(await deserializeAws_restJson1TagsPerResourceExceededLimitExceptionResponse(parsedOutput, context)),
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
        case "AccessDeniedException":
        case "com.amazonaws.kinesisvideo#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientLimitExceededException":
        case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisvideo#InvalidArgumentException":
            response = {
                ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
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
const deserializeAws_restJson1UntagStreamCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UntagStreamCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UntagStreamCommand = deserializeAws_restJson1UntagStreamCommand;
const deserializeAws_restJson1UntagStreamCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientLimitExceededException":
        case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisvideo#InvalidArgumentException":
            response = {
                ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceFormatException":
        case "com.amazonaws.kinesisvideo#InvalidResourceFormatException":
            response = {
                ...(await deserializeAws_restJson1InvalidResourceFormatExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.kinesisvideo#NotAuthorizedException":
            response = {
                ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
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
const deserializeAws_restJson1UpdateDataRetentionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateDataRetentionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateDataRetentionCommand = deserializeAws_restJson1UpdateDataRetentionCommand;
const deserializeAws_restJson1UpdateDataRetentionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientLimitExceededException":
        case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisvideo#InvalidArgumentException":
            response = {
                ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.kinesisvideo#NotAuthorizedException":
            response = {
                ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesisvideo#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "VersionMismatchException":
        case "com.amazonaws.kinesisvideo#VersionMismatchException":
            response = {
                ...(await deserializeAws_restJson1VersionMismatchExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateSignalingChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateSignalingChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateSignalingChannelCommand = deserializeAws_restJson1UpdateSignalingChannelCommand;
const deserializeAws_restJson1UpdateSignalingChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kinesisvideo#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientLimitExceededException":
        case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisvideo#InvalidArgumentException":
            response = {
                ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesisvideo#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "VersionMismatchException":
        case "com.amazonaws.kinesisvideo#VersionMismatchException":
            response = {
                ...(await deserializeAws_restJson1VersionMismatchExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateStreamCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateStreamCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateStreamCommand = deserializeAws_restJson1UpdateStreamCommand;
const deserializeAws_restJson1UpdateStreamCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientLimitExceededException":
        case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisvideo#InvalidArgumentException":
            response = {
                ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.kinesisvideo#NotAuthorizedException":
            response = {
                ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesisvideo#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "VersionMismatchException":
        case "com.amazonaws.kinesisvideo#VersionMismatchException":
            response = {
                ...(await deserializeAws_restJson1VersionMismatchExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "AccessDeniedException",
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
const deserializeAws_restJson1AccountChannelLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "AccountChannelLimitExceededException",
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
const deserializeAws_restJson1AccountStreamLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "AccountStreamLimitExceededException",
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
const deserializeAws_restJson1ClientLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ClientLimitExceededException",
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
const deserializeAws_restJson1DeviceStreamLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "DeviceStreamLimitExceededException",
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
const deserializeAws_restJson1InvalidArgumentExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidArgumentException",
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
const deserializeAws_restJson1InvalidDeviceExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidDeviceException",
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
const deserializeAws_restJson1InvalidResourceFormatExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidResourceFormatException",
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
const deserializeAws_restJson1NotAuthorizedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NotAuthorizedException",
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
const deserializeAws_restJson1ResourceInUseExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceInUseException",
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
const deserializeAws_restJson1TagsPerResourceExceededLimitExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TagsPerResourceExceededLimitException",
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
const deserializeAws_restJson1VersionMismatchExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "VersionMismatchException",
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
const serializeAws_restJson1ChannelNameCondition = (input, context) => {
    return {
        ...(input.ComparisonOperator !== undefined &&
            input.ComparisonOperator !== null && { ComparisonOperator: input.ComparisonOperator }),
        ...(input.ComparisonValue !== undefined &&
            input.ComparisonValue !== null && { ComparisonValue: input.ComparisonValue }),
    };
};
const serializeAws_restJson1ListOfProtocols = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1ResourceTags = (input, context) => {
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
const serializeAws_restJson1SingleMasterChannelEndpointConfiguration = (input, context) => {
    return {
        ...(input.Protocols !== undefined &&
            input.Protocols !== null && { Protocols: serializeAws_restJson1ListOfProtocols(input.Protocols, context) }),
        ...(input.Role !== undefined && input.Role !== null && { Role: input.Role }),
    };
};
const serializeAws_restJson1SingleMasterConfiguration = (input, context) => {
    return {
        ...(input.MessageTtlSeconds !== undefined &&
            input.MessageTtlSeconds !== null && { MessageTtlSeconds: input.MessageTtlSeconds }),
    };
};
const serializeAws_restJson1StreamNameCondition = (input, context) => {
    return {
        ...(input.ComparisonOperator !== undefined &&
            input.ComparisonOperator !== null && { ComparisonOperator: input.ComparisonOperator }),
        ...(input.ComparisonValue !== undefined &&
            input.ComparisonValue !== null && { ComparisonValue: input.ComparisonValue }),
    };
};
const serializeAws_restJson1Tag = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
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
const serializeAws_restJson1TagList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Tag(entry, context);
    });
};
const serializeAws_restJson1TagOnCreateList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Tag(entry, context);
    });
};
const deserializeAws_restJson1ChannelInfo = (output, context) => {
    return {
        ChannelARN: output.ChannelARN !== undefined && output.ChannelARN !== null ? output.ChannelARN : undefined,
        ChannelName: output.ChannelName !== undefined && output.ChannelName !== null ? output.ChannelName : undefined,
        ChannelStatus: output.ChannelStatus !== undefined && output.ChannelStatus !== null ? output.ChannelStatus : undefined,
        ChannelType: output.ChannelType !== undefined && output.ChannelType !== null ? output.ChannelType : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        SingleMasterConfiguration: output.SingleMasterConfiguration !== undefined && output.SingleMasterConfiguration !== null
            ? deserializeAws_restJson1SingleMasterConfiguration(output.SingleMasterConfiguration, context)
            : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
const deserializeAws_restJson1ChannelInfoList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ChannelInfo(entry, context);
    });
};
const deserializeAws_restJson1ResourceEndpointList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ResourceEndpointListItem(entry, context);
    });
};
const deserializeAws_restJson1ResourceEndpointListItem = (output, context) => {
    return {
        Protocol: output.Protocol !== undefined && output.Protocol !== null ? output.Protocol : undefined,
        ResourceEndpoint: output.ResourceEndpoint !== undefined && output.ResourceEndpoint !== null ? output.ResourceEndpoint : undefined,
    };
};
const deserializeAws_restJson1ResourceTags = (output, context) => {
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
const deserializeAws_restJson1SingleMasterConfiguration = (output, context) => {
    return {
        MessageTtlSeconds: output.MessageTtlSeconds !== undefined && output.MessageTtlSeconds !== null
            ? output.MessageTtlSeconds
            : undefined,
    };
};
const deserializeAws_restJson1StreamInfo = (output, context) => {
    return {
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        DataRetentionInHours: output.DataRetentionInHours !== undefined && output.DataRetentionInHours !== null
            ? output.DataRetentionInHours
            : undefined,
        DeviceName: output.DeviceName !== undefined && output.DeviceName !== null ? output.DeviceName : undefined,
        KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
        MediaType: output.MediaType !== undefined && output.MediaType !== null ? output.MediaType : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StreamARN: output.StreamARN !== undefined && output.StreamARN !== null ? output.StreamARN : undefined,
        StreamName: output.StreamName !== undefined && output.StreamName !== null ? output.StreamName : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
const deserializeAws_restJson1StreamInfoList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1StreamInfo(entry, context);
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