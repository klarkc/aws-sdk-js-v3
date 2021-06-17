"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_0WriteRecordsCommand = exports.deserializeAws_json1_0UpdateTableCommand = exports.deserializeAws_json1_0UpdateDatabaseCommand = exports.deserializeAws_json1_0UntagResourceCommand = exports.deserializeAws_json1_0TagResourceCommand = exports.deserializeAws_json1_0ListTagsForResourceCommand = exports.deserializeAws_json1_0ListTablesCommand = exports.deserializeAws_json1_0ListDatabasesCommand = exports.deserializeAws_json1_0DescribeTableCommand = exports.deserializeAws_json1_0DescribeEndpointsCommand = exports.deserializeAws_json1_0DescribeDatabaseCommand = exports.deserializeAws_json1_0DeleteTableCommand = exports.deserializeAws_json1_0DeleteDatabaseCommand = exports.deserializeAws_json1_0CreateTableCommand = exports.deserializeAws_json1_0CreateDatabaseCommand = exports.serializeAws_json1_0WriteRecordsCommand = exports.serializeAws_json1_0UpdateTableCommand = exports.serializeAws_json1_0UpdateDatabaseCommand = exports.serializeAws_json1_0UntagResourceCommand = exports.serializeAws_json1_0TagResourceCommand = exports.serializeAws_json1_0ListTagsForResourceCommand = exports.serializeAws_json1_0ListTablesCommand = exports.serializeAws_json1_0ListDatabasesCommand = exports.serializeAws_json1_0DescribeTableCommand = exports.serializeAws_json1_0DescribeEndpointsCommand = exports.serializeAws_json1_0DescribeDatabaseCommand = exports.serializeAws_json1_0DeleteTableCommand = exports.serializeAws_json1_0DeleteDatabaseCommand = exports.serializeAws_json1_0CreateTableCommand = exports.serializeAws_json1_0CreateDatabaseCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_0CreateDatabaseCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "Timestream_20181101.CreateDatabase",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0CreateDatabaseRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0CreateDatabaseCommand = serializeAws_json1_0CreateDatabaseCommand;
const serializeAws_json1_0CreateTableCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "Timestream_20181101.CreateTable",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0CreateTableRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0CreateTableCommand = serializeAws_json1_0CreateTableCommand;
const serializeAws_json1_0DeleteDatabaseCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "Timestream_20181101.DeleteDatabase",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DeleteDatabaseRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DeleteDatabaseCommand = serializeAws_json1_0DeleteDatabaseCommand;
const serializeAws_json1_0DeleteTableCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "Timestream_20181101.DeleteTable",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DeleteTableRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DeleteTableCommand = serializeAws_json1_0DeleteTableCommand;
const serializeAws_json1_0DescribeDatabaseCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "Timestream_20181101.DescribeDatabase",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeDatabaseRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DescribeDatabaseCommand = serializeAws_json1_0DescribeDatabaseCommand;
const serializeAws_json1_0DescribeEndpointsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "Timestream_20181101.DescribeEndpoints",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeEndpointsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DescribeEndpointsCommand = serializeAws_json1_0DescribeEndpointsCommand;
const serializeAws_json1_0DescribeTableCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "Timestream_20181101.DescribeTable",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeTableRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DescribeTableCommand = serializeAws_json1_0DescribeTableCommand;
const serializeAws_json1_0ListDatabasesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "Timestream_20181101.ListDatabases",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ListDatabasesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ListDatabasesCommand = serializeAws_json1_0ListDatabasesCommand;
const serializeAws_json1_0ListTablesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "Timestream_20181101.ListTables",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ListTablesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ListTablesCommand = serializeAws_json1_0ListTablesCommand;
const serializeAws_json1_0ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "Timestream_20181101.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ListTagsForResourceCommand = serializeAws_json1_0ListTagsForResourceCommand;
const serializeAws_json1_0TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "Timestream_20181101.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0TagResourceCommand = serializeAws_json1_0TagResourceCommand;
const serializeAws_json1_0UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "Timestream_20181101.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0UntagResourceCommand = serializeAws_json1_0UntagResourceCommand;
const serializeAws_json1_0UpdateDatabaseCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "Timestream_20181101.UpdateDatabase",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0UpdateDatabaseRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0UpdateDatabaseCommand = serializeAws_json1_0UpdateDatabaseCommand;
const serializeAws_json1_0UpdateTableCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "Timestream_20181101.UpdateTable",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0UpdateTableRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0UpdateTableCommand = serializeAws_json1_0UpdateTableCommand;
const serializeAws_json1_0WriteRecordsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "Timestream_20181101.WriteRecords",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0WriteRecordsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0WriteRecordsCommand = serializeAws_json1_0WriteRecordsCommand;
const deserializeAws_json1_0CreateDatabaseCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0CreateDatabaseCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0CreateDatabaseResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0CreateDatabaseCommand = deserializeAws_json1_0CreateDatabaseCommand;
const deserializeAws_json1_0CreateDatabaseCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.timestreamwrite#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.timestreamwrite#ConflictException":
            response = {
                ...(await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.timestreamwrite#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.timestreamwrite#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.timestreamwrite#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.timestreamwrite#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.timestreamwrite#ValidationException":
            response = {
                ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0CreateTableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0CreateTableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0CreateTableResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0CreateTableCommand = deserializeAws_json1_0CreateTableCommand;
const deserializeAws_json1_0CreateTableCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.timestreamwrite#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.timestreamwrite#ConflictException":
            response = {
                ...(await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.timestreamwrite#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.timestreamwrite#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.timestreamwrite#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.timestreamwrite#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.timestreamwrite#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.timestreamwrite#ValidationException":
            response = {
                ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0DeleteDatabaseCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DeleteDatabaseCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DeleteDatabaseCommand = deserializeAws_json1_0DeleteDatabaseCommand;
const deserializeAws_json1_0DeleteDatabaseCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.timestreamwrite#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.timestreamwrite#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.timestreamwrite#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.timestreamwrite#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.timestreamwrite#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.timestreamwrite#ValidationException":
            response = {
                ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0DeleteTableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DeleteTableCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DeleteTableCommand = deserializeAws_json1_0DeleteTableCommand;
const deserializeAws_json1_0DeleteTableCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.timestreamwrite#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.timestreamwrite#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.timestreamwrite#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.timestreamwrite#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.timestreamwrite#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.timestreamwrite#ValidationException":
            response = {
                ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0DescribeDatabaseCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DescribeDatabaseCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeDatabaseResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DescribeDatabaseCommand = deserializeAws_json1_0DescribeDatabaseCommand;
const deserializeAws_json1_0DescribeDatabaseCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.timestreamwrite#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.timestreamwrite#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.timestreamwrite#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.timestreamwrite#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.timestreamwrite#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.timestreamwrite#ValidationException":
            response = {
                ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0DescribeEndpointsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DescribeEndpointsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeEndpointsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DescribeEndpointsCommand = deserializeAws_json1_0DescribeEndpointsCommand;
const deserializeAws_json1_0DescribeEndpointsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.timestreamwrite#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.timestreamwrite#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.timestreamwrite#ValidationException":
            response = {
                ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0DescribeTableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DescribeTableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeTableResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DescribeTableCommand = deserializeAws_json1_0DescribeTableCommand;
const deserializeAws_json1_0DescribeTableCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.timestreamwrite#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.timestreamwrite#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.timestreamwrite#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.timestreamwrite#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.timestreamwrite#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.timestreamwrite#ValidationException":
            response = {
                ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0ListDatabasesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0ListDatabasesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ListDatabasesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0ListDatabasesCommand = deserializeAws_json1_0ListDatabasesCommand;
const deserializeAws_json1_0ListDatabasesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.timestreamwrite#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.timestreamwrite#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.timestreamwrite#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.timestreamwrite#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.timestreamwrite#ValidationException":
            response = {
                ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0ListTablesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0ListTablesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ListTablesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0ListTablesCommand = deserializeAws_json1_0ListTablesCommand;
const deserializeAws_json1_0ListTablesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.timestreamwrite#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.timestreamwrite#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.timestreamwrite#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.timestreamwrite#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.timestreamwrite#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.timestreamwrite#ValidationException":
            response = {
                ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0ListTagsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ListTagsForResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0ListTagsForResourceCommand = deserializeAws_json1_0ListTagsForResourceCommand;
const deserializeAws_json1_0ListTagsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidEndpointException":
        case "com.amazonaws.timestreamwrite#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.timestreamwrite#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.timestreamwrite#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.timestreamwrite#ValidationException":
            response = {
                ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0TagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0TagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0TagResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0TagResourceCommand = deserializeAws_json1_0TagResourceCommand;
const deserializeAws_json1_0TagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidEndpointException":
        case "com.amazonaws.timestreamwrite#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.timestreamwrite#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.timestreamwrite#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.timestreamwrite#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.timestreamwrite#ValidationException":
            response = {
                ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0UntagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0UntagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0UntagResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0UntagResourceCommand = deserializeAws_json1_0UntagResourceCommand;
const deserializeAws_json1_0UntagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidEndpointException":
        case "com.amazonaws.timestreamwrite#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.timestreamwrite#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.timestreamwrite#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.timestreamwrite#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.timestreamwrite#ValidationException":
            response = {
                ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0UpdateDatabaseCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0UpdateDatabaseCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0UpdateDatabaseResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0UpdateDatabaseCommand = deserializeAws_json1_0UpdateDatabaseCommand;
const deserializeAws_json1_0UpdateDatabaseCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.timestreamwrite#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.timestreamwrite#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.timestreamwrite#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.timestreamwrite#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.timestreamwrite#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.timestreamwrite#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.timestreamwrite#ValidationException":
            response = {
                ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0UpdateTableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0UpdateTableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0UpdateTableResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0UpdateTableCommand = deserializeAws_json1_0UpdateTableCommand;
const deserializeAws_json1_0UpdateTableCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.timestreamwrite#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.timestreamwrite#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.timestreamwrite#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.timestreamwrite#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.timestreamwrite#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.timestreamwrite#ValidationException":
            response = {
                ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0WriteRecordsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0WriteRecordsCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0WriteRecordsCommand = deserializeAws_json1_0WriteRecordsCommand;
const deserializeAws_json1_0WriteRecordsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.timestreamwrite#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.timestreamwrite#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.timestreamwrite#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RejectedRecordsException":
        case "com.amazonaws.timestreamwrite#RejectedRecordsException":
            response = {
                ...(await deserializeAws_json1_0RejectedRecordsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.timestreamwrite#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.timestreamwrite#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.timestreamwrite#ValidationException":
            response = {
                ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0AccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0AccessDeniedException(body, context);
    const contents = {
        name: "AccessDeniedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0ConflictExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ConflictException(body, context);
    const contents = {
        name: "ConflictException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0InternalServerExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0InternalServerException(body, context);
    const contents = {
        name: "InternalServerException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0InvalidEndpointExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0InvalidEndpointException(body, context);
    const contents = {
        name: "InvalidEndpointException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0RejectedRecordsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0RejectedRecordsException(body, context);
    const contents = {
        name: "RejectedRecordsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ResourceNotFoundException(body, context);
    const contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0ServiceQuotaExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ServiceQuotaExceededException(body, context);
    const contents = {
        name: "ServiceQuotaExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ThrottlingException(body, context);
    const contents = {
        name: "ThrottlingException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0ValidationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ValidationException(body, context);
    const contents = {
        name: "ValidationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_0CreateDatabaseRequest = (input, context) => {
    return {
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_0CreateTableRequest = (input, context) => {
    return {
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.RetentionProperties !== undefined &&
            input.RetentionProperties !== null && {
            RetentionProperties: serializeAws_json1_0RetentionProperties(input.RetentionProperties, context),
        }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_0DeleteDatabaseRequest = (input, context) => {
    return {
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    };
};
const serializeAws_json1_0DeleteTableRequest = (input, context) => {
    return {
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_0DescribeDatabaseRequest = (input, context) => {
    return {
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    };
};
const serializeAws_json1_0DescribeEndpointsRequest = (input, context) => {
    return {};
};
const serializeAws_json1_0DescribeTableRequest = (input, context) => {
    return {
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_0Dimension = (input, context) => {
    return {
        ...(input.DimensionValueType !== undefined &&
            input.DimensionValueType !== null && { DimensionValueType: input.DimensionValueType }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_0Dimensions = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0Dimension(entry, context);
    });
};
const serializeAws_json1_0ListDatabasesRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_0ListTablesRequest = (input, context) => {
    return {
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_0ListTagsForResourceRequest = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    };
};
const serializeAws_json1_0_Record = (input, context) => {
    return {
        ...(input.Dimensions !== undefined &&
            input.Dimensions !== null && { Dimensions: serializeAws_json1_0Dimensions(input.Dimensions, context) }),
        ...(input.MeasureName !== undefined && input.MeasureName !== null && { MeasureName: input.MeasureName }),
        ...(input.MeasureValue !== undefined && input.MeasureValue !== null && { MeasureValue: input.MeasureValue }),
        ...(input.MeasureValueType !== undefined &&
            input.MeasureValueType !== null && { MeasureValueType: input.MeasureValueType }),
        ...(input.Time !== undefined && input.Time !== null && { Time: input.Time }),
        ...(input.TimeUnit !== undefined && input.TimeUnit !== null && { TimeUnit: input.TimeUnit }),
        ...(input.Version !== undefined && input.Version !== null && { Version: input.Version }),
    };
};
const serializeAws_json1_0Records = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0_Record(entry, context);
    });
};
const serializeAws_json1_0RetentionProperties = (input, context) => {
    return {
        ...(input.MagneticStoreRetentionPeriodInDays !== undefined &&
            input.MagneticStoreRetentionPeriodInDays !== null && {
            MagneticStoreRetentionPeriodInDays: input.MagneticStoreRetentionPeriodInDays,
        }),
        ...(input.MemoryStoreRetentionPeriodInHours !== undefined &&
            input.MemoryStoreRetentionPeriodInHours !== null && {
            MemoryStoreRetentionPeriodInHours: input.MemoryStoreRetentionPeriodInHours,
        }),
    };
};
const serializeAws_json1_0Tag = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_0TagKeyList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_0TagList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0Tag(entry, context);
    });
};
const serializeAws_json1_0TagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_0UntagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
        ...(input.TagKeys !== undefined &&
            input.TagKeys !== null && { TagKeys: serializeAws_json1_0TagKeyList(input.TagKeys, context) }),
    };
};
const serializeAws_json1_0UpdateDatabaseRequest = (input, context) => {
    return {
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
    };
};
const serializeAws_json1_0UpdateTableRequest = (input, context) => {
    return {
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.RetentionProperties !== undefined &&
            input.RetentionProperties !== null && {
            RetentionProperties: serializeAws_json1_0RetentionProperties(input.RetentionProperties, context),
        }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_0WriteRecordsRequest = (input, context) => {
    return {
        ...(input.CommonAttributes !== undefined &&
            input.CommonAttributes !== null && {
            CommonAttributes: serializeAws_json1_0_Record(input.CommonAttributes, context),
        }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.Records !== undefined &&
            input.Records !== null && { Records: serializeAws_json1_0Records(input.Records, context) }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const deserializeAws_json1_0AccessDeniedException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0ConflictException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0CreateDatabaseResponse = (output, context) => {
    return {
        Database: output.Database !== undefined && output.Database !== null
            ? deserializeAws_json1_0Database(output.Database, context)
            : undefined,
    };
};
const deserializeAws_json1_0CreateTableResponse = (output, context) => {
    return {
        Table: output.Table !== undefined && output.Table !== null
            ? deserializeAws_json1_0Table(output.Table, context)
            : undefined,
    };
};
const deserializeAws_json1_0Database = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        DatabaseName: output.DatabaseName !== undefined && output.DatabaseName !== null ? output.DatabaseName : undefined,
        KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
        LastUpdatedTime: output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
            ? new Date(Math.round(output.LastUpdatedTime * 1000))
            : undefined,
        TableCount: output.TableCount !== undefined && output.TableCount !== null ? output.TableCount : undefined,
    };
};
const deserializeAws_json1_0DatabaseList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0Database(entry, context);
    });
};
const deserializeAws_json1_0DescribeDatabaseResponse = (output, context) => {
    return {
        Database: output.Database !== undefined && output.Database !== null
            ? deserializeAws_json1_0Database(output.Database, context)
            : undefined,
    };
};
const deserializeAws_json1_0DescribeEndpointsResponse = (output, context) => {
    return {
        Endpoints: output.Endpoints !== undefined && output.Endpoints !== null
            ? deserializeAws_json1_0Endpoints(output.Endpoints, context)
            : undefined,
    };
};
const deserializeAws_json1_0DescribeTableResponse = (output, context) => {
    return {
        Table: output.Table !== undefined && output.Table !== null
            ? deserializeAws_json1_0Table(output.Table, context)
            : undefined,
    };
};
const deserializeAws_json1_0Endpoint = (output, context) => {
    return {
        Address: output.Address !== undefined && output.Address !== null ? output.Address : undefined,
        CachePeriodInMinutes: output.CachePeriodInMinutes !== undefined && output.CachePeriodInMinutes !== null
            ? output.CachePeriodInMinutes
            : undefined,
    };
};
const deserializeAws_json1_0Endpoints = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0Endpoint(entry, context);
    });
};
const deserializeAws_json1_0InternalServerException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0InvalidEndpointException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0ListDatabasesResponse = (output, context) => {
    return {
        Databases: output.Databases !== undefined && output.Databases !== null
            ? deserializeAws_json1_0DatabaseList(output.Databases, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_0ListTablesResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Tables: output.Tables !== undefined && output.Tables !== null
            ? deserializeAws_json1_0TableList(output.Tables, context)
            : undefined,
    };
};
const deserializeAws_json1_0ListTagsForResourceResponse = (output, context) => {
    return {
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_0TagList(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_json1_0RejectedRecord = (output, context) => {
    return {
        ExistingVersion: output.ExistingVersion !== undefined && output.ExistingVersion !== null ? output.ExistingVersion : undefined,
        Reason: output.Reason !== undefined && output.Reason !== null ? output.Reason : undefined,
        RecordIndex: output.RecordIndex !== undefined && output.RecordIndex !== null ? output.RecordIndex : undefined,
    };
};
const deserializeAws_json1_0RejectedRecords = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0RejectedRecord(entry, context);
    });
};
const deserializeAws_json1_0RejectedRecordsException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        RejectedRecords: output.RejectedRecords !== undefined && output.RejectedRecords !== null
            ? deserializeAws_json1_0RejectedRecords(output.RejectedRecords, context)
            : undefined,
    };
};
const deserializeAws_json1_0ResourceNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0RetentionProperties = (output, context) => {
    return {
        MagneticStoreRetentionPeriodInDays: output.MagneticStoreRetentionPeriodInDays !== undefined && output.MagneticStoreRetentionPeriodInDays !== null
            ? output.MagneticStoreRetentionPeriodInDays
            : undefined,
        MemoryStoreRetentionPeriodInHours: output.MemoryStoreRetentionPeriodInHours !== undefined && output.MemoryStoreRetentionPeriodInHours !== null
            ? output.MemoryStoreRetentionPeriodInHours
            : undefined,
    };
};
const deserializeAws_json1_0ServiceQuotaExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0Table = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        DatabaseName: output.DatabaseName !== undefined && output.DatabaseName !== null ? output.DatabaseName : undefined,
        LastUpdatedTime: output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
            ? new Date(Math.round(output.LastUpdatedTime * 1000))
            : undefined,
        RetentionProperties: output.RetentionProperties !== undefined && output.RetentionProperties !== null
            ? deserializeAws_json1_0RetentionProperties(output.RetentionProperties, context)
            : undefined,
        TableName: output.TableName !== undefined && output.TableName !== null ? output.TableName : undefined,
        TableStatus: output.TableStatus !== undefined && output.TableStatus !== null ? output.TableStatus : undefined,
    };
};
const deserializeAws_json1_0TableList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0Table(entry, context);
    });
};
const deserializeAws_json1_0Tag = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_0TagList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0Tag(entry, context);
    });
};
const deserializeAws_json1_0TagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_0ThrottlingException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0UntagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_0UpdateDatabaseResponse = (output, context) => {
    return {
        Database: output.Database !== undefined && output.Database !== null
            ? deserializeAws_json1_0Database(output.Database, context)
            : undefined,
    };
};
const deserializeAws_json1_0UpdateTableResponse = (output, context) => {
    return {
        Table: output.Table !== undefined && output.Table !== null
            ? deserializeAws_json1_0Table(output.Table, context)
            : undefined,
    };
};
const deserializeAws_json1_0ValidationException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
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
const buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
    const { hostname, protocol = "https", port } = await context.endpoint();
    const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path,
        headers,
    };
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new protocol_http_1.HttpRequest(contents);
};
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
//# sourceMappingURL=Aws_json1_0.js.map