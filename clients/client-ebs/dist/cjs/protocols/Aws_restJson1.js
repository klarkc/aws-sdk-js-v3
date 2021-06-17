"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1StartSnapshotCommand = exports.deserializeAws_restJson1PutSnapshotBlockCommand = exports.deserializeAws_restJson1ListSnapshotBlocksCommand = exports.deserializeAws_restJson1ListChangedBlocksCommand = exports.deserializeAws_restJson1GetSnapshotBlockCommand = exports.deserializeAws_restJson1CompleteSnapshotCommand = exports.serializeAws_restJson1StartSnapshotCommand = exports.serializeAws_restJson1PutSnapshotBlockCommand = exports.serializeAws_restJson1ListSnapshotBlocksCommand = exports.serializeAws_restJson1ListChangedBlocksCommand = exports.serializeAws_restJson1GetSnapshotBlockCommand = exports.serializeAws_restJson1CompleteSnapshotCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const uuid_1 = require("uuid");
const serializeAws_restJson1CompleteSnapshotCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.ChangedBlocksCount) && {
            "x-amz-changedblockscount": input.ChangedBlocksCount.toString(),
        }),
        ...(isSerializableHeaderValue(input.Checksum) && { "x-amz-checksum": input.Checksum }),
        ...(isSerializableHeaderValue(input.ChecksumAlgorithm) && { "x-amz-checksum-algorithm": input.ChecksumAlgorithm }),
        ...(isSerializableHeaderValue(input.ChecksumAggregationMethod) && {
            "x-amz-checksum-aggregation-method": input.ChecksumAggregationMethod,
        }),
    };
    let resolvedPath = "/snapshots/completion/{SnapshotId}";
    if (input.SnapshotId !== undefined) {
        const labelValue = input.SnapshotId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SnapshotId.");
        }
        resolvedPath = resolvedPath.replace("{SnapshotId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SnapshotId.");
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
exports.serializeAws_restJson1CompleteSnapshotCommand = serializeAws_restJson1CompleteSnapshotCommand;
const serializeAws_restJson1GetSnapshotBlockCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/snapshots/{SnapshotId}/blocks/{BlockIndex}";
    if (input.SnapshotId !== undefined) {
        const labelValue = input.SnapshotId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SnapshotId.");
        }
        resolvedPath = resolvedPath.replace("{SnapshotId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SnapshotId.");
    }
    if (input.BlockIndex !== undefined) {
        const labelValue = input.BlockIndex.toString();
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: BlockIndex.");
        }
        resolvedPath = resolvedPath.replace("{BlockIndex}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: BlockIndex.");
    }
    const query = {
        ...(input.BlockToken !== undefined && { blockToken: input.BlockToken }),
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
exports.serializeAws_restJson1GetSnapshotBlockCommand = serializeAws_restJson1GetSnapshotBlockCommand;
const serializeAws_restJson1ListChangedBlocksCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/snapshots/{SecondSnapshotId}/changedblocks";
    if (input.SecondSnapshotId !== undefined) {
        const labelValue = input.SecondSnapshotId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SecondSnapshotId.");
        }
        resolvedPath = resolvedPath.replace("{SecondSnapshotId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SecondSnapshotId.");
    }
    const query = {
        ...(input.FirstSnapshotId !== undefined && { firstSnapshotId: input.FirstSnapshotId }),
        ...(input.NextToken !== undefined && { pageToken: input.NextToken }),
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
        ...(input.StartingBlockIndex !== undefined && { startingBlockIndex: input.StartingBlockIndex.toString() }),
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
exports.serializeAws_restJson1ListChangedBlocksCommand = serializeAws_restJson1ListChangedBlocksCommand;
const serializeAws_restJson1ListSnapshotBlocksCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/snapshots/{SnapshotId}/blocks";
    if (input.SnapshotId !== undefined) {
        const labelValue = input.SnapshotId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SnapshotId.");
        }
        resolvedPath = resolvedPath.replace("{SnapshotId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SnapshotId.");
    }
    const query = {
        ...(input.NextToken !== undefined && { pageToken: input.NextToken }),
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
        ...(input.StartingBlockIndex !== undefined && { startingBlockIndex: input.StartingBlockIndex.toString() }),
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
exports.serializeAws_restJson1ListSnapshotBlocksCommand = serializeAws_restJson1ListSnapshotBlocksCommand;
const serializeAws_restJson1PutSnapshotBlockCommand = async (input, context) => {
    const headers = {
        "content-type": "application/octet-stream",
        "x-amz-content-sha256": "UNSIGNED-PAYLOAD",
        ...(isSerializableHeaderValue(input.DataLength) && { "x-amz-data-length": input.DataLength.toString() }),
        ...(isSerializableHeaderValue(input.Progress) && { "x-amz-progress": input.Progress.toString() }),
        ...(isSerializableHeaderValue(input.Checksum) && { "x-amz-checksum": input.Checksum }),
        ...(isSerializableHeaderValue(input.ChecksumAlgorithm) && { "x-amz-checksum-algorithm": input.ChecksumAlgorithm }),
    };
    let resolvedPath = "/snapshots/{SnapshotId}/blocks/{BlockIndex}";
    if (input.SnapshotId !== undefined) {
        const labelValue = input.SnapshotId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SnapshotId.");
        }
        resolvedPath = resolvedPath.replace("{SnapshotId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SnapshotId.");
    }
    if (input.BlockIndex !== undefined) {
        const labelValue = input.BlockIndex.toString();
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: BlockIndex.");
        }
        resolvedPath = resolvedPath.replace("{BlockIndex}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: BlockIndex.");
    }
    let body;
    if (input.BlockData !== undefined) {
        body = input.BlockData;
    }
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
exports.serializeAws_restJson1PutSnapshotBlockCommand = serializeAws_restJson1PutSnapshotBlockCommand;
const serializeAws_restJson1StartSnapshotCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/snapshots";
    let body;
    body = JSON.stringify({
        ClientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Encrypted !== undefined && input.Encrypted !== null && { Encrypted: input.Encrypted }),
        ...(input.KmsKeyArn !== undefined && input.KmsKeyArn !== null && { KmsKeyArn: input.KmsKeyArn }),
        ...(input.ParentSnapshotId !== undefined &&
            input.ParentSnapshotId !== null && { ParentSnapshotId: input.ParentSnapshotId }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1Tags(input.Tags, context) }),
        ...(input.Timeout !== undefined && input.Timeout !== null && { Timeout: input.Timeout }),
        ...(input.VolumeSize !== undefined && input.VolumeSize !== null && { VolumeSize: input.VolumeSize }),
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
exports.serializeAws_restJson1StartSnapshotCommand = serializeAws_restJson1StartSnapshotCommand;
const deserializeAws_restJson1CompleteSnapshotCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1CompleteSnapshotCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Status !== undefined && data.Status !== null) {
        contents.Status = data.Status;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CompleteSnapshotCommand = deserializeAws_restJson1CompleteSnapshotCommand;
const deserializeAws_restJson1CompleteSnapshotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ebs#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ebs#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RequestThrottledException":
        case "com.amazonaws.ebs#RequestThrottledException":
            response = {
                ...(await deserializeAws_restJson1RequestThrottledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ebs#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.ebs#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ebs#ValidationException":
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
const deserializeAws_restJson1GetSnapshotBlockCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetSnapshotBlockCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        BlockData: undefined,
        Checksum: undefined,
        ChecksumAlgorithm: undefined,
        DataLength: undefined,
    };
    if (output.headers["x-amz-data-length"] !== undefined) {
        contents.DataLength = parseInt(output.headers["x-amz-data-length"], 10);
    }
    if (output.headers["x-amz-checksum"] !== undefined) {
        contents.Checksum = output.headers["x-amz-checksum"];
    }
    if (output.headers["x-amz-checksum-algorithm"] !== undefined) {
        contents.ChecksumAlgorithm = output.headers["x-amz-checksum-algorithm"];
    }
    const data = output.body;
    contents.BlockData = data;
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetSnapshotBlockCommand = deserializeAws_restJson1GetSnapshotBlockCommand;
const deserializeAws_restJson1GetSnapshotBlockCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ebs#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ebs#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RequestThrottledException":
        case "com.amazonaws.ebs#RequestThrottledException":
            response = {
                ...(await deserializeAws_restJson1RequestThrottledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ebs#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.ebs#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ebs#ValidationException":
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
const deserializeAws_restJson1ListChangedBlocksCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListChangedBlocksCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        BlockSize: undefined,
        ChangedBlocks: undefined,
        ExpiryTime: undefined,
        NextToken: undefined,
        VolumeSize: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.BlockSize !== undefined && data.BlockSize !== null) {
        contents.BlockSize = data.BlockSize;
    }
    if (data.ChangedBlocks !== undefined && data.ChangedBlocks !== null) {
        contents.ChangedBlocks = deserializeAws_restJson1ChangedBlocks(data.ChangedBlocks, context);
    }
    if (data.ExpiryTime !== undefined && data.ExpiryTime !== null) {
        contents.ExpiryTime = new Date(Math.round(data.ExpiryTime * 1000));
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.VolumeSize !== undefined && data.VolumeSize !== null) {
        contents.VolumeSize = data.VolumeSize;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListChangedBlocksCommand = deserializeAws_restJson1ListChangedBlocksCommand;
const deserializeAws_restJson1ListChangedBlocksCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ebs#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ebs#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RequestThrottledException":
        case "com.amazonaws.ebs#RequestThrottledException":
            response = {
                ...(await deserializeAws_restJson1RequestThrottledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ebs#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.ebs#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ebs#ValidationException":
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
const deserializeAws_restJson1ListSnapshotBlocksCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListSnapshotBlocksCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        BlockSize: undefined,
        Blocks: undefined,
        ExpiryTime: undefined,
        NextToken: undefined,
        VolumeSize: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.BlockSize !== undefined && data.BlockSize !== null) {
        contents.BlockSize = data.BlockSize;
    }
    if (data.Blocks !== undefined && data.Blocks !== null) {
        contents.Blocks = deserializeAws_restJson1Blocks(data.Blocks, context);
    }
    if (data.ExpiryTime !== undefined && data.ExpiryTime !== null) {
        contents.ExpiryTime = new Date(Math.round(data.ExpiryTime * 1000));
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.VolumeSize !== undefined && data.VolumeSize !== null) {
        contents.VolumeSize = data.VolumeSize;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListSnapshotBlocksCommand = deserializeAws_restJson1ListSnapshotBlocksCommand;
const deserializeAws_restJson1ListSnapshotBlocksCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ebs#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ebs#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RequestThrottledException":
        case "com.amazonaws.ebs#RequestThrottledException":
            response = {
                ...(await deserializeAws_restJson1RequestThrottledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ebs#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.ebs#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ebs#ValidationException":
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
const deserializeAws_restJson1PutSnapshotBlockCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutSnapshotBlockCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Checksum: undefined,
        ChecksumAlgorithm: undefined,
    };
    if (output.headers["x-amz-checksum"] !== undefined) {
        contents.Checksum = output.headers["x-amz-checksum"];
    }
    if (output.headers["x-amz-checksum-algorithm"] !== undefined) {
        contents.ChecksumAlgorithm = output.headers["x-amz-checksum-algorithm"];
    }
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutSnapshotBlockCommand = deserializeAws_restJson1PutSnapshotBlockCommand;
const deserializeAws_restJson1PutSnapshotBlockCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ebs#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ebs#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RequestThrottledException":
        case "com.amazonaws.ebs#RequestThrottledException":
            response = {
                ...(await deserializeAws_restJson1RequestThrottledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ebs#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.ebs#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ebs#ValidationException":
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
const deserializeAws_restJson1StartSnapshotCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1StartSnapshotCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        BlockSize: undefined,
        Description: undefined,
        KmsKeyArn: undefined,
        OwnerId: undefined,
        ParentSnapshotId: undefined,
        SnapshotId: undefined,
        StartTime: undefined,
        Status: undefined,
        Tags: undefined,
        VolumeSize: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.BlockSize !== undefined && data.BlockSize !== null) {
        contents.BlockSize = data.BlockSize;
    }
    if (data.Description !== undefined && data.Description !== null) {
        contents.Description = data.Description;
    }
    if (data.KmsKeyArn !== undefined && data.KmsKeyArn !== null) {
        contents.KmsKeyArn = data.KmsKeyArn;
    }
    if (data.OwnerId !== undefined && data.OwnerId !== null) {
        contents.OwnerId = data.OwnerId;
    }
    if (data.ParentSnapshotId !== undefined && data.ParentSnapshotId !== null) {
        contents.ParentSnapshotId = data.ParentSnapshotId;
    }
    if (data.SnapshotId !== undefined && data.SnapshotId !== null) {
        contents.SnapshotId = data.SnapshotId;
    }
    if (data.StartTime !== undefined && data.StartTime !== null) {
        contents.StartTime = new Date(Math.round(data.StartTime * 1000));
    }
    if (data.Status !== undefined && data.Status !== null) {
        contents.Status = data.Status;
    }
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
    }
    if (data.VolumeSize !== undefined && data.VolumeSize !== null) {
        contents.VolumeSize = data.VolumeSize;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StartSnapshotCommand = deserializeAws_restJson1StartSnapshotCommand;
const deserializeAws_restJson1StartSnapshotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ebs#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentLimitExceededException":
        case "com.amazonaws.ebs#ConcurrentLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1ConcurrentLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.ebs#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ebs#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RequestThrottledException":
        case "com.amazonaws.ebs#RequestThrottledException":
            response = {
                ...(await deserializeAws_restJson1RequestThrottledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ebs#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.ebs#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ebs#ValidationException":
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
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "AccessDeniedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        Reason: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.Reason !== undefined && data.Reason !== null) {
        contents.Reason = data.Reason;
    }
    return contents;
};
const deserializeAws_restJson1ConcurrentLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ConcurrentLimitExceededException",
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
const deserializeAws_restJson1ConflictExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ConflictException",
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
const deserializeAws_restJson1InternalServerExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServerException",
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
const deserializeAws_restJson1RequestThrottledExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "RequestThrottledException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        Reason: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.Reason !== undefined && data.Reason !== null) {
        contents.Reason = data.Reason;
    }
    return contents;
};
const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        Reason: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.Reason !== undefined && data.Reason !== null) {
        contents.Reason = data.Reason;
    }
    return contents;
};
const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ServiceQuotaExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        Reason: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.Reason !== undefined && data.Reason !== null) {
        contents.Reason = data.Reason;
    }
    return contents;
};
const deserializeAws_restJson1ValidationExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ValidationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        Reason: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.Reason !== undefined && data.Reason !== null) {
        contents.Reason = data.Reason;
    }
    return contents;
};
const serializeAws_restJson1Tag = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_restJson1Tags = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Tag(entry, context);
    });
};
const deserializeAws_restJson1Block = (output, context) => {
    return {
        BlockIndex: output.BlockIndex !== undefined && output.BlockIndex !== null ? output.BlockIndex : undefined,
        BlockToken: output.BlockToken !== undefined && output.BlockToken !== null ? output.BlockToken : undefined,
    };
};
const deserializeAws_restJson1Blocks = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Block(entry, context);
    });
};
const deserializeAws_restJson1ChangedBlock = (output, context) => {
    return {
        BlockIndex: output.BlockIndex !== undefined && output.BlockIndex !== null ? output.BlockIndex : undefined,
        FirstBlockToken: output.FirstBlockToken !== undefined && output.FirstBlockToken !== null ? output.FirstBlockToken : undefined,
        SecondBlockToken: output.SecondBlockToken !== undefined && output.SecondBlockToken !== null ? output.SecondBlockToken : undefined,
    };
};
const deserializeAws_restJson1ChangedBlocks = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ChangedBlock(entry, context);
    });
};
const deserializeAws_restJson1Tag = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_restJson1Tags = (output, context) => {
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