"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1PutObjectCommand = exports.deserializeAws_restJson1ListItemsCommand = exports.deserializeAws_restJson1GetObjectCommand = exports.deserializeAws_restJson1DescribeObjectCommand = exports.deserializeAws_restJson1DeleteObjectCommand = exports.serializeAws_restJson1PutObjectCommand = exports.serializeAws_restJson1ListItemsCommand = exports.serializeAws_restJson1GetObjectCommand = exports.serializeAws_restJson1DescribeObjectCommand = exports.serializeAws_restJson1DeleteObjectCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1DeleteObjectCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/{Path+}";
    if (input.Path !== undefined) {
        const labelValue = input.Path;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Path.");
        }
        resolvedPath = resolvedPath.replace("{Path+}", labelValue
            .split("/")
            .map((segment) => smithy_client_1.extendedEncodeURIComponent(segment))
            .join("/"));
    }
    else {
        throw new Error("No value provided for input HTTP label: Path.");
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
exports.serializeAws_restJson1DeleteObjectCommand = serializeAws_restJson1DeleteObjectCommand;
const serializeAws_restJson1DescribeObjectCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/{Path+}";
    if (input.Path !== undefined) {
        const labelValue = input.Path;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Path.");
        }
        resolvedPath = resolvedPath.replace("{Path+}", labelValue
            .split("/")
            .map((segment) => smithy_client_1.extendedEncodeURIComponent(segment))
            .join("/"));
    }
    else {
        throw new Error("No value provided for input HTTP label: Path.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "HEAD",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeObjectCommand = serializeAws_restJson1DescribeObjectCommand;
const serializeAws_restJson1GetObjectCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.Range) && { range: input.Range }),
    };
    let resolvedPath = "/{Path+}";
    if (input.Path !== undefined) {
        const labelValue = input.Path;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Path.");
        }
        resolvedPath = resolvedPath.replace("{Path+}", labelValue
            .split("/")
            .map((segment) => smithy_client_1.extendedEncodeURIComponent(segment))
            .join("/"));
    }
    else {
        throw new Error("No value provided for input HTTP label: Path.");
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
exports.serializeAws_restJson1GetObjectCommand = serializeAws_restJson1GetObjectCommand;
const serializeAws_restJson1ListItemsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/";
    const query = {
        ...(input.Path !== undefined && { Path: input.Path }),
        ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
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
exports.serializeAws_restJson1ListItemsCommand = serializeAws_restJson1ListItemsCommand;
const serializeAws_restJson1PutObjectCommand = async (input, context) => {
    const headers = {
        "content-type": "application/octet-stream",
        "x-amz-content-sha256": "UNSIGNED-PAYLOAD",
        ...(isSerializableHeaderValue(input.ContentType) && { "content-type": input.ContentType }),
        ...(isSerializableHeaderValue(input.CacheControl) && { "cache-control": input.CacheControl }),
        ...(isSerializableHeaderValue(input.StorageClass) && { "x-amz-storage-class": input.StorageClass }),
        ...(isSerializableHeaderValue(input.UploadAvailability) && {
            "x-amz-upload-availability": input.UploadAvailability,
        }),
    };
    let resolvedPath = "/{Path+}";
    if (input.Path !== undefined) {
        const labelValue = input.Path;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Path.");
        }
        resolvedPath = resolvedPath.replace("{Path+}", labelValue
            .split("/")
            .map((segment) => smithy_client_1.extendedEncodeURIComponent(segment))
            .join("/"));
    }
    else {
        throw new Error("No value provided for input HTTP label: Path.");
    }
    let body;
    if (input.Body !== undefined) {
        body = input.Body;
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
exports.serializeAws_restJson1PutObjectCommand = serializeAws_restJson1PutObjectCommand;
const deserializeAws_restJson1DeleteObjectCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteObjectCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteObjectCommand = deserializeAws_restJson1DeleteObjectCommand;
const deserializeAws_restJson1DeleteObjectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ContainerNotFoundException":
        case "com.amazonaws.mediastoredata#ContainerNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ContainerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.mediastoredata#InternalServerError":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ObjectNotFoundException":
        case "com.amazonaws.mediastoredata#ObjectNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ObjectNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeObjectCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeObjectCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CacheControl: undefined,
        ContentLength: undefined,
        ContentType: undefined,
        ETag: undefined,
        LastModified: undefined,
    };
    if (output.headers["etag"] !== undefined) {
        contents.ETag = output.headers["etag"];
    }
    if (output.headers["content-type"] !== undefined) {
        contents.ContentType = output.headers["content-type"];
    }
    if (output.headers["content-length"] !== undefined) {
        contents.ContentLength = parseInt(output.headers["content-length"], 10);
    }
    if (output.headers["cache-control"] !== undefined) {
        contents.CacheControl = output.headers["cache-control"];
    }
    if (output.headers["last-modified"] !== undefined) {
        contents.LastModified = new Date(output.headers["last-modified"]);
    }
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeObjectCommand = deserializeAws_restJson1DescribeObjectCommand;
const deserializeAws_restJson1DescribeObjectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ContainerNotFoundException":
        case "com.amazonaws.mediastoredata#ContainerNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ContainerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.mediastoredata#InternalServerError":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ObjectNotFoundException":
        case "com.amazonaws.mediastoredata#ObjectNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ObjectNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetObjectCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetObjectCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Body: undefined,
        CacheControl: undefined,
        ContentLength: undefined,
        ContentRange: undefined,
        ContentType: undefined,
        ETag: undefined,
        LastModified: undefined,
        StatusCode: undefined,
    };
    if (output.headers["cache-control"] !== undefined) {
        contents.CacheControl = output.headers["cache-control"];
    }
    if (output.headers["content-range"] !== undefined) {
        contents.ContentRange = output.headers["content-range"];
    }
    if (output.headers["content-length"] !== undefined) {
        contents.ContentLength = parseInt(output.headers["content-length"], 10);
    }
    if (output.headers["content-type"] !== undefined) {
        contents.ContentType = output.headers["content-type"];
    }
    if (output.headers["etag"] !== undefined) {
        contents.ETag = output.headers["etag"];
    }
    if (output.headers["last-modified"] !== undefined) {
        contents.LastModified = new Date(output.headers["last-modified"]);
    }
    const data = output.body;
    contents.Body = data;
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetObjectCommand = deserializeAws_restJson1GetObjectCommand;
const deserializeAws_restJson1GetObjectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ContainerNotFoundException":
        case "com.amazonaws.mediastoredata#ContainerNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ContainerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.mediastoredata#InternalServerError":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ObjectNotFoundException":
        case "com.amazonaws.mediastoredata#ObjectNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ObjectNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RequestedRangeNotSatisfiableException":
        case "com.amazonaws.mediastoredata#RequestedRangeNotSatisfiableException":
            response = {
                ...(await deserializeAws_restJson1RequestedRangeNotSatisfiableExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListItemsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListItemsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Items: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Items !== undefined && data.Items !== null) {
        contents.Items = deserializeAws_restJson1ItemList(data.Items, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListItemsCommand = deserializeAws_restJson1ListItemsCommand;
const deserializeAws_restJson1ListItemsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ContainerNotFoundException":
        case "com.amazonaws.mediastoredata#ContainerNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ContainerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.mediastoredata#InternalServerError":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)),
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
const deserializeAws_restJson1PutObjectCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutObjectCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ContentSHA256: undefined,
        ETag: undefined,
        StorageClass: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ContentSHA256 !== undefined && data.ContentSHA256 !== null) {
        contents.ContentSHA256 = data.ContentSHA256;
    }
    if (data.ETag !== undefined && data.ETag !== null) {
        contents.ETag = data.ETag;
    }
    if (data.StorageClass !== undefined && data.StorageClass !== null) {
        contents.StorageClass = data.StorageClass;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutObjectCommand = deserializeAws_restJson1PutObjectCommand;
const deserializeAws_restJson1PutObjectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ContainerNotFoundException":
        case "com.amazonaws.mediastoredata#ContainerNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ContainerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.mediastoredata#InternalServerError":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ContainerNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ContainerNotFoundException",
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
const deserializeAws_restJson1InternalServerErrorResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServerError",
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
const deserializeAws_restJson1ObjectNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ObjectNotFoundException",
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
const deserializeAws_restJson1RequestedRangeNotSatisfiableExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "RequestedRangeNotSatisfiableException",
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
const deserializeAws_restJson1Item = (output, context) => {
    return {
        ContentLength: output.ContentLength !== undefined && output.ContentLength !== null ? output.ContentLength : undefined,
        ContentType: output.ContentType !== undefined && output.ContentType !== null ? output.ContentType : undefined,
        ETag: output.ETag !== undefined && output.ETag !== null ? output.ETag : undefined,
        LastModified: output.LastModified !== undefined && output.LastModified !== null
            ? new Date(Math.round(output.LastModified * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1ItemList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Item(entry, context);
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