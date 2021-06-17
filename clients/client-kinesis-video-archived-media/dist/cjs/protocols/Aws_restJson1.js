"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1ListFragmentsCommand = exports.deserializeAws_restJson1GetMediaForFragmentListCommand = exports.deserializeAws_restJson1GetHLSStreamingSessionURLCommand = exports.deserializeAws_restJson1GetDASHStreamingSessionURLCommand = exports.deserializeAws_restJson1GetClipCommand = exports.serializeAws_restJson1ListFragmentsCommand = exports.serializeAws_restJson1GetMediaForFragmentListCommand = exports.serializeAws_restJson1GetHLSStreamingSessionURLCommand = exports.serializeAws_restJson1GetDASHStreamingSessionURLCommand = exports.serializeAws_restJson1GetClipCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_restJson1GetClipCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/getClip";
    let body;
    body = JSON.stringify({
        ...(input.ClipFragmentSelector !== undefined &&
            input.ClipFragmentSelector !== null && {
            ClipFragmentSelector: serializeAws_restJson1ClipFragmentSelector(input.ClipFragmentSelector, context),
        }),
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
exports.serializeAws_restJson1GetClipCommand = serializeAws_restJson1GetClipCommand;
const serializeAws_restJson1GetDASHStreamingSessionURLCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/getDASHStreamingSessionURL";
    let body;
    body = JSON.stringify({
        ...(input.DASHFragmentSelector !== undefined &&
            input.DASHFragmentSelector !== null && {
            DASHFragmentSelector: serializeAws_restJson1DASHFragmentSelector(input.DASHFragmentSelector, context),
        }),
        ...(input.DisplayFragmentNumber !== undefined &&
            input.DisplayFragmentNumber !== null && { DisplayFragmentNumber: input.DisplayFragmentNumber }),
        ...(input.DisplayFragmentTimestamp !== undefined &&
            input.DisplayFragmentTimestamp !== null && { DisplayFragmentTimestamp: input.DisplayFragmentTimestamp }),
        ...(input.Expires !== undefined && input.Expires !== null && { Expires: input.Expires }),
        ...(input.MaxManifestFragmentResults !== undefined &&
            input.MaxManifestFragmentResults !== null && { MaxManifestFragmentResults: input.MaxManifestFragmentResults }),
        ...(input.PlaybackMode !== undefined && input.PlaybackMode !== null && { PlaybackMode: input.PlaybackMode }),
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
exports.serializeAws_restJson1GetDASHStreamingSessionURLCommand = serializeAws_restJson1GetDASHStreamingSessionURLCommand;
const serializeAws_restJson1GetHLSStreamingSessionURLCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/getHLSStreamingSessionURL";
    let body;
    body = JSON.stringify({
        ...(input.ContainerFormat !== undefined &&
            input.ContainerFormat !== null && { ContainerFormat: input.ContainerFormat }),
        ...(input.DiscontinuityMode !== undefined &&
            input.DiscontinuityMode !== null && { DiscontinuityMode: input.DiscontinuityMode }),
        ...(input.DisplayFragmentTimestamp !== undefined &&
            input.DisplayFragmentTimestamp !== null && { DisplayFragmentTimestamp: input.DisplayFragmentTimestamp }),
        ...(input.Expires !== undefined && input.Expires !== null && { Expires: input.Expires }),
        ...(input.HLSFragmentSelector !== undefined &&
            input.HLSFragmentSelector !== null && {
            HLSFragmentSelector: serializeAws_restJson1HLSFragmentSelector(input.HLSFragmentSelector, context),
        }),
        ...(input.MaxMediaPlaylistFragmentResults !== undefined &&
            input.MaxMediaPlaylistFragmentResults !== null && {
            MaxMediaPlaylistFragmentResults: input.MaxMediaPlaylistFragmentResults,
        }),
        ...(input.PlaybackMode !== undefined && input.PlaybackMode !== null && { PlaybackMode: input.PlaybackMode }),
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
exports.serializeAws_restJson1GetHLSStreamingSessionURLCommand = serializeAws_restJson1GetHLSStreamingSessionURLCommand;
const serializeAws_restJson1GetMediaForFragmentListCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/getMediaForFragmentList";
    let body;
    body = JSON.stringify({
        ...(input.Fragments !== undefined &&
            input.Fragments !== null && { Fragments: serializeAws_restJson1FragmentNumberList(input.Fragments, context) }),
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
exports.serializeAws_restJson1GetMediaForFragmentListCommand = serializeAws_restJson1GetMediaForFragmentListCommand;
const serializeAws_restJson1ListFragmentsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/listFragments";
    let body;
    body = JSON.stringify({
        ...(input.FragmentSelector !== undefined &&
            input.FragmentSelector !== null && {
            FragmentSelector: serializeAws_restJson1FragmentSelector(input.FragmentSelector, context),
        }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
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
exports.serializeAws_restJson1ListFragmentsCommand = serializeAws_restJson1ListFragmentsCommand;
const deserializeAws_restJson1GetClipCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetClipCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ContentType: undefined,
        Payload: undefined,
    };
    if (output.headers["content-type"] !== undefined) {
        contents.ContentType = output.headers["content-type"];
    }
    const data = output.body;
    contents.Payload = data;
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetClipCommand = deserializeAws_restJson1GetClipCommand;
const deserializeAws_restJson1GetClipCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientLimitExceededException":
        case "com.amazonaws.kinesisvideoarchivedmedia#ClientLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisvideoarchivedmedia#InvalidArgumentException":
            response = {
                ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCodecPrivateDataException":
        case "com.amazonaws.kinesisvideoarchivedmedia#InvalidCodecPrivateDataException":
            response = {
                ...(await deserializeAws_restJson1InvalidCodecPrivateDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidMediaFrameException":
        case "com.amazonaws.kinesisvideoarchivedmedia#InvalidMediaFrameException":
            response = {
                ...(await deserializeAws_restJson1InvalidMediaFrameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingCodecPrivateDataException":
        case "com.amazonaws.kinesisvideoarchivedmedia#MissingCodecPrivateDataException":
            response = {
                ...(await deserializeAws_restJson1MissingCodecPrivateDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoDataRetentionException":
        case "com.amazonaws.kinesisvideoarchivedmedia#NoDataRetentionException":
            response = {
                ...(await deserializeAws_restJson1NoDataRetentionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.kinesisvideoarchivedmedia#NotAuthorizedException":
            response = {
                ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisvideoarchivedmedia#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedStreamMediaTypeException":
        case "com.amazonaws.kinesisvideoarchivedmedia#UnsupportedStreamMediaTypeException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedStreamMediaTypeExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetDASHStreamingSessionURLCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetDASHStreamingSessionURLCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DASHStreamingSessionURL: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DASHStreamingSessionURL !== undefined && data.DASHStreamingSessionURL !== null) {
        contents.DASHStreamingSessionURL = data.DASHStreamingSessionURL;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDASHStreamingSessionURLCommand = deserializeAws_restJson1GetDASHStreamingSessionURLCommand;
const deserializeAws_restJson1GetDASHStreamingSessionURLCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientLimitExceededException":
        case "com.amazonaws.kinesisvideoarchivedmedia#ClientLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisvideoarchivedmedia#InvalidArgumentException":
            response = {
                ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCodecPrivateDataException":
        case "com.amazonaws.kinesisvideoarchivedmedia#InvalidCodecPrivateDataException":
            response = {
                ...(await deserializeAws_restJson1InvalidCodecPrivateDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingCodecPrivateDataException":
        case "com.amazonaws.kinesisvideoarchivedmedia#MissingCodecPrivateDataException":
            response = {
                ...(await deserializeAws_restJson1MissingCodecPrivateDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoDataRetentionException":
        case "com.amazonaws.kinesisvideoarchivedmedia#NoDataRetentionException":
            response = {
                ...(await deserializeAws_restJson1NoDataRetentionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.kinesisvideoarchivedmedia#NotAuthorizedException":
            response = {
                ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisvideoarchivedmedia#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedStreamMediaTypeException":
        case "com.amazonaws.kinesisvideoarchivedmedia#UnsupportedStreamMediaTypeException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedStreamMediaTypeExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetHLSStreamingSessionURLCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetHLSStreamingSessionURLCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        HLSStreamingSessionURL: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.HLSStreamingSessionURL !== undefined && data.HLSStreamingSessionURL !== null) {
        contents.HLSStreamingSessionURL = data.HLSStreamingSessionURL;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetHLSStreamingSessionURLCommand = deserializeAws_restJson1GetHLSStreamingSessionURLCommand;
const deserializeAws_restJson1GetHLSStreamingSessionURLCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientLimitExceededException":
        case "com.amazonaws.kinesisvideoarchivedmedia#ClientLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisvideoarchivedmedia#InvalidArgumentException":
            response = {
                ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCodecPrivateDataException":
        case "com.amazonaws.kinesisvideoarchivedmedia#InvalidCodecPrivateDataException":
            response = {
                ...(await deserializeAws_restJson1InvalidCodecPrivateDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingCodecPrivateDataException":
        case "com.amazonaws.kinesisvideoarchivedmedia#MissingCodecPrivateDataException":
            response = {
                ...(await deserializeAws_restJson1MissingCodecPrivateDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoDataRetentionException":
        case "com.amazonaws.kinesisvideoarchivedmedia#NoDataRetentionException":
            response = {
                ...(await deserializeAws_restJson1NoDataRetentionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.kinesisvideoarchivedmedia#NotAuthorizedException":
            response = {
                ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisvideoarchivedmedia#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedStreamMediaTypeException":
        case "com.amazonaws.kinesisvideoarchivedmedia#UnsupportedStreamMediaTypeException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedStreamMediaTypeExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetMediaForFragmentListCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetMediaForFragmentListCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ContentType: undefined,
        Payload: undefined,
    };
    if (output.headers["content-type"] !== undefined) {
        contents.ContentType = output.headers["content-type"];
    }
    const data = output.body;
    contents.Payload = data;
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetMediaForFragmentListCommand = deserializeAws_restJson1GetMediaForFragmentListCommand;
const deserializeAws_restJson1GetMediaForFragmentListCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientLimitExceededException":
        case "com.amazonaws.kinesisvideoarchivedmedia#ClientLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisvideoarchivedmedia#InvalidArgumentException":
            response = {
                ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.kinesisvideoarchivedmedia#NotAuthorizedException":
            response = {
                ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisvideoarchivedmedia#ResourceNotFoundException":
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
const deserializeAws_restJson1ListFragmentsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListFragmentsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Fragments: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Fragments !== undefined && data.Fragments !== null) {
        contents.Fragments = deserializeAws_restJson1FragmentList(data.Fragments, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListFragmentsCommand = deserializeAws_restJson1ListFragmentsCommand;
const deserializeAws_restJson1ListFragmentsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientLimitExceededException":
        case "com.amazonaws.kinesisvideoarchivedmedia#ClientLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisvideoarchivedmedia#InvalidArgumentException":
            response = {
                ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.kinesisvideoarchivedmedia#NotAuthorizedException":
            response = {
                ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisvideoarchivedmedia#ResourceNotFoundException":
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
const deserializeAws_restJson1InvalidCodecPrivateDataExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidCodecPrivateDataException",
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
const deserializeAws_restJson1InvalidMediaFrameExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidMediaFrameException",
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
const deserializeAws_restJson1MissingCodecPrivateDataExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "MissingCodecPrivateDataException",
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
const deserializeAws_restJson1NoDataRetentionExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NoDataRetentionException",
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
const deserializeAws_restJson1UnsupportedStreamMediaTypeExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "UnsupportedStreamMediaTypeException",
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
const serializeAws_restJson1ClipFragmentSelector = (input, context) => {
    return {
        ...(input.FragmentSelectorType !== undefined &&
            input.FragmentSelectorType !== null && { FragmentSelectorType: input.FragmentSelectorType }),
        ...(input.TimestampRange !== undefined &&
            input.TimestampRange !== null && {
            TimestampRange: serializeAws_restJson1ClipTimestampRange(input.TimestampRange, context),
        }),
    };
};
const serializeAws_restJson1ClipTimestampRange = (input, context) => {
    return {
        ...(input.EndTimestamp !== undefined &&
            input.EndTimestamp !== null && { EndTimestamp: Math.round(input.EndTimestamp.getTime() / 1000) }),
        ...(input.StartTimestamp !== undefined &&
            input.StartTimestamp !== null && { StartTimestamp: Math.round(input.StartTimestamp.getTime() / 1000) }),
    };
};
const serializeAws_restJson1DASHFragmentSelector = (input, context) => {
    return {
        ...(input.FragmentSelectorType !== undefined &&
            input.FragmentSelectorType !== null && { FragmentSelectorType: input.FragmentSelectorType }),
        ...(input.TimestampRange !== undefined &&
            input.TimestampRange !== null && {
            TimestampRange: serializeAws_restJson1DASHTimestampRange(input.TimestampRange, context),
        }),
    };
};
const serializeAws_restJson1DASHTimestampRange = (input, context) => {
    return {
        ...(input.EndTimestamp !== undefined &&
            input.EndTimestamp !== null && { EndTimestamp: Math.round(input.EndTimestamp.getTime() / 1000) }),
        ...(input.StartTimestamp !== undefined &&
            input.StartTimestamp !== null && { StartTimestamp: Math.round(input.StartTimestamp.getTime() / 1000) }),
    };
};
const serializeAws_restJson1FragmentNumberList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1FragmentSelector = (input, context) => {
    return {
        ...(input.FragmentSelectorType !== undefined &&
            input.FragmentSelectorType !== null && { FragmentSelectorType: input.FragmentSelectorType }),
        ...(input.TimestampRange !== undefined &&
            input.TimestampRange !== null && {
            TimestampRange: serializeAws_restJson1TimestampRange(input.TimestampRange, context),
        }),
    };
};
const serializeAws_restJson1HLSFragmentSelector = (input, context) => {
    return {
        ...(input.FragmentSelectorType !== undefined &&
            input.FragmentSelectorType !== null && { FragmentSelectorType: input.FragmentSelectorType }),
        ...(input.TimestampRange !== undefined &&
            input.TimestampRange !== null && {
            TimestampRange: serializeAws_restJson1HLSTimestampRange(input.TimestampRange, context),
        }),
    };
};
const serializeAws_restJson1HLSTimestampRange = (input, context) => {
    return {
        ...(input.EndTimestamp !== undefined &&
            input.EndTimestamp !== null && { EndTimestamp: Math.round(input.EndTimestamp.getTime() / 1000) }),
        ...(input.StartTimestamp !== undefined &&
            input.StartTimestamp !== null && { StartTimestamp: Math.round(input.StartTimestamp.getTime() / 1000) }),
    };
};
const serializeAws_restJson1TimestampRange = (input, context) => {
    return {
        ...(input.EndTimestamp !== undefined &&
            input.EndTimestamp !== null && { EndTimestamp: Math.round(input.EndTimestamp.getTime() / 1000) }),
        ...(input.StartTimestamp !== undefined &&
            input.StartTimestamp !== null && { StartTimestamp: Math.round(input.StartTimestamp.getTime() / 1000) }),
    };
};
const deserializeAws_restJson1Fragment = (output, context) => {
    return {
        FragmentLengthInMilliseconds: output.FragmentLengthInMilliseconds !== undefined && output.FragmentLengthInMilliseconds !== null
            ? output.FragmentLengthInMilliseconds
            : undefined,
        FragmentNumber: output.FragmentNumber !== undefined && output.FragmentNumber !== null ? output.FragmentNumber : undefined,
        FragmentSizeInBytes: output.FragmentSizeInBytes !== undefined && output.FragmentSizeInBytes !== null
            ? output.FragmentSizeInBytes
            : undefined,
        ProducerTimestamp: output.ProducerTimestamp !== undefined && output.ProducerTimestamp !== null
            ? new Date(Math.round(output.ProducerTimestamp * 1000))
            : undefined,
        ServerTimestamp: output.ServerTimestamp !== undefined && output.ServerTimestamp !== null
            ? new Date(Math.round(output.ServerTimestamp * 1000))
            : undefined,
    };
};
const deserializeAws_restJson1FragmentList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Fragment(entry, context);
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