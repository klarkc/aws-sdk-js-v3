"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1ListTablesCommand = exports.deserializeAws_json1_1ListStatementsCommand = exports.deserializeAws_json1_1ListSchemasCommand = exports.deserializeAws_json1_1ListDatabasesCommand = exports.deserializeAws_json1_1GetStatementResultCommand = exports.deserializeAws_json1_1ExecuteStatementCommand = exports.deserializeAws_json1_1DescribeTableCommand = exports.deserializeAws_json1_1DescribeStatementCommand = exports.deserializeAws_json1_1CancelStatementCommand = exports.serializeAws_json1_1ListTablesCommand = exports.serializeAws_json1_1ListStatementsCommand = exports.serializeAws_json1_1ListSchemasCommand = exports.serializeAws_json1_1ListDatabasesCommand = exports.serializeAws_json1_1GetStatementResultCommand = exports.serializeAws_json1_1ExecuteStatementCommand = exports.serializeAws_json1_1DescribeTableCommand = exports.serializeAws_json1_1DescribeStatementCommand = exports.serializeAws_json1_1CancelStatementCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1CancelStatementCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "RedshiftData.CancelStatement",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CancelStatementRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CancelStatementCommand = serializeAws_json1_1CancelStatementCommand;
const serializeAws_json1_1DescribeStatementCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "RedshiftData.DescribeStatement",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeStatementRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeStatementCommand = serializeAws_json1_1DescribeStatementCommand;
const serializeAws_json1_1DescribeTableCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "RedshiftData.DescribeTable",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTableRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeTableCommand = serializeAws_json1_1DescribeTableCommand;
const serializeAws_json1_1ExecuteStatementCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "RedshiftData.ExecuteStatement",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ExecuteStatementInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ExecuteStatementCommand = serializeAws_json1_1ExecuteStatementCommand;
const serializeAws_json1_1GetStatementResultCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "RedshiftData.GetStatementResult",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetStatementResultRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetStatementResultCommand = serializeAws_json1_1GetStatementResultCommand;
const serializeAws_json1_1ListDatabasesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "RedshiftData.ListDatabases",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDatabasesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListDatabasesCommand = serializeAws_json1_1ListDatabasesCommand;
const serializeAws_json1_1ListSchemasCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "RedshiftData.ListSchemas",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListSchemasRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListSchemasCommand = serializeAws_json1_1ListSchemasCommand;
const serializeAws_json1_1ListStatementsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "RedshiftData.ListStatements",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListStatementsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListStatementsCommand = serializeAws_json1_1ListStatementsCommand;
const serializeAws_json1_1ListTablesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "RedshiftData.ListTables",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTablesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTablesCommand = serializeAws_json1_1ListTablesCommand;
const deserializeAws_json1_1CancelStatementCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CancelStatementCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CancelStatementResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CancelStatementCommand = deserializeAws_json1_1CancelStatementCommand;
const deserializeAws_json1_1CancelStatementCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.redshiftdata#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.redshiftdata#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeStatementCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeStatementCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeStatementResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeStatementCommand = deserializeAws_json1_1DescribeStatementCommand;
const deserializeAws_json1_1DescribeStatementCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.redshiftdata#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.redshiftdata#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.redshiftdata#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeTableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeTableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTableResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeTableCommand = deserializeAws_json1_1DescribeTableCommand;
const deserializeAws_json1_1DescribeTableCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.redshiftdata#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.redshiftdata#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ExecuteStatementCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ExecuteStatementCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ExecuteStatementOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ExecuteStatementCommand = deserializeAws_json1_1ExecuteStatementCommand;
const deserializeAws_json1_1ExecuteStatementCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ActiveStatementsExceededException":
        case "com.amazonaws.redshiftdata#ActiveStatementsExceededException":
            response = {
                ...(await deserializeAws_json1_1ActiveStatementsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ExecuteStatementException":
        case "com.amazonaws.redshiftdata#ExecuteStatementException":
            response = {
                ...(await deserializeAws_json1_1ExecuteStatementExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.redshiftdata#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetStatementResultCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetStatementResultCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetStatementResultResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetStatementResultCommand = deserializeAws_json1_1GetStatementResultCommand;
const deserializeAws_json1_1GetStatementResultCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.redshiftdata#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.redshiftdata#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.redshiftdata#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListDatabasesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListDatabasesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDatabasesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListDatabasesCommand = deserializeAws_json1_1ListDatabasesCommand;
const deserializeAws_json1_1ListDatabasesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.redshiftdata#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.redshiftdata#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListSchemasCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListSchemasCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListSchemasResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListSchemasCommand = deserializeAws_json1_1ListSchemasCommand;
const deserializeAws_json1_1ListSchemasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.redshiftdata#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.redshiftdata#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListStatementsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListStatementsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListStatementsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListStatementsCommand = deserializeAws_json1_1ListStatementsCommand;
const deserializeAws_json1_1ListStatementsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.redshiftdata#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.redshiftdata#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListTablesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListTablesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTablesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListTablesCommand = deserializeAws_json1_1ListTablesCommand;
const deserializeAws_json1_1ListTablesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.redshiftdata#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.redshiftdata#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ActiveStatementsExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ActiveStatementsExceededException(body, context);
    const contents = {
        name: "ActiveStatementsExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ExecuteStatementExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ExecuteStatementException(body, context);
    const contents = {
        name: "ExecuteStatementException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InternalServerExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServerException(body, context);
    const contents = {
        name: "InternalServerException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
    const contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ValidationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ValidationException(body, context);
    const contents = {
        name: "ValidationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1CancelStatementRequest = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    };
};
const serializeAws_json1_1DescribeStatementRequest = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    };
};
const serializeAws_json1_1DescribeTableRequest = (input, context) => {
    return {
        ...(input.ClusterIdentifier !== undefined &&
            input.ClusterIdentifier !== null && { ClusterIdentifier: input.ClusterIdentifier }),
        ...(input.ConnectedDatabase !== undefined &&
            input.ConnectedDatabase !== null && { ConnectedDatabase: input.ConnectedDatabase }),
        ...(input.Database !== undefined && input.Database !== null && { Database: input.Database }),
        ...(input.DbUser !== undefined && input.DbUser !== null && { DbUser: input.DbUser }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.Schema !== undefined && input.Schema !== null && { Schema: input.Schema }),
        ...(input.SecretArn !== undefined && input.SecretArn !== null && { SecretArn: input.SecretArn }),
        ...(input.Table !== undefined && input.Table !== null && { Table: input.Table }),
    };
};
const serializeAws_json1_1ExecuteStatementInput = (input, context) => {
    return {
        ...(input.ClusterIdentifier !== undefined &&
            input.ClusterIdentifier !== null && { ClusterIdentifier: input.ClusterIdentifier }),
        ...(input.Database !== undefined && input.Database !== null && { Database: input.Database }),
        ...(input.DbUser !== undefined && input.DbUser !== null && { DbUser: input.DbUser }),
        ...(input.SecretArn !== undefined && input.SecretArn !== null && { SecretArn: input.SecretArn }),
        ...(input.Sql !== undefined && input.Sql !== null && { Sql: input.Sql }),
        ...(input.StatementName !== undefined && input.StatementName !== null && { StatementName: input.StatementName }),
        ...(input.WithEvent !== undefined && input.WithEvent !== null && { WithEvent: input.WithEvent }),
    };
};
const serializeAws_json1_1GetStatementResultRequest = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListDatabasesRequest = (input, context) => {
    return {
        ...(input.ClusterIdentifier !== undefined &&
            input.ClusterIdentifier !== null && { ClusterIdentifier: input.ClusterIdentifier }),
        ...(input.Database !== undefined && input.Database !== null && { Database: input.Database }),
        ...(input.DbUser !== undefined && input.DbUser !== null && { DbUser: input.DbUser }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.SecretArn !== undefined && input.SecretArn !== null && { SecretArn: input.SecretArn }),
    };
};
const serializeAws_json1_1ListSchemasRequest = (input, context) => {
    return {
        ...(input.ClusterIdentifier !== undefined &&
            input.ClusterIdentifier !== null && { ClusterIdentifier: input.ClusterIdentifier }),
        ...(input.ConnectedDatabase !== undefined &&
            input.ConnectedDatabase !== null && { ConnectedDatabase: input.ConnectedDatabase }),
        ...(input.Database !== undefined && input.Database !== null && { Database: input.Database }),
        ...(input.DbUser !== undefined && input.DbUser !== null && { DbUser: input.DbUser }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.SchemaPattern !== undefined && input.SchemaPattern !== null && { SchemaPattern: input.SchemaPattern }),
        ...(input.SecretArn !== undefined && input.SecretArn !== null && { SecretArn: input.SecretArn }),
    };
};
const serializeAws_json1_1ListStatementsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.RoleLevel !== undefined && input.RoleLevel !== null && { RoleLevel: input.RoleLevel }),
        ...(input.StatementName !== undefined && input.StatementName !== null && { StatementName: input.StatementName }),
        ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
    };
};
const serializeAws_json1_1ListTablesRequest = (input, context) => {
    return {
        ...(input.ClusterIdentifier !== undefined &&
            input.ClusterIdentifier !== null && { ClusterIdentifier: input.ClusterIdentifier }),
        ...(input.ConnectedDatabase !== undefined &&
            input.ConnectedDatabase !== null && { ConnectedDatabase: input.ConnectedDatabase }),
        ...(input.Database !== undefined && input.Database !== null && { Database: input.Database }),
        ...(input.DbUser !== undefined && input.DbUser !== null && { DbUser: input.DbUser }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.SchemaPattern !== undefined && input.SchemaPattern !== null && { SchemaPattern: input.SchemaPattern }),
        ...(input.SecretArn !== undefined && input.SecretArn !== null && { SecretArn: input.SecretArn }),
        ...(input.TablePattern !== undefined && input.TablePattern !== null && { TablePattern: input.TablePattern }),
    };
};
const deserializeAws_json1_1ActiveStatementsExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1CancelStatementResponse = (output, context) => {
    return {
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1ColumnList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ColumnMetadata(entry, context);
    });
};
const deserializeAws_json1_1ColumnMetadata = (output, context) => {
    return {
        columnDefault: output.columnDefault !== undefined && output.columnDefault !== null ? output.columnDefault : undefined,
        isCaseSensitive: output.isCaseSensitive !== undefined && output.isCaseSensitive !== null ? output.isCaseSensitive : undefined,
        isCurrency: output.isCurrency !== undefined && output.isCurrency !== null ? output.isCurrency : undefined,
        isSigned: output.isSigned !== undefined && output.isSigned !== null ? output.isSigned : undefined,
        label: output.label !== undefined && output.label !== null ? output.label : undefined,
        length: output.length !== undefined && output.length !== null ? output.length : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        nullable: output.nullable !== undefined && output.nullable !== null ? output.nullable : undefined,
        precision: output.precision !== undefined && output.precision !== null ? output.precision : undefined,
        scale: output.scale !== undefined && output.scale !== null ? output.scale : undefined,
        schemaName: output.schemaName !== undefined && output.schemaName !== null ? output.schemaName : undefined,
        tableName: output.tableName !== undefined && output.tableName !== null ? output.tableName : undefined,
        typeName: output.typeName !== undefined && output.typeName !== null ? output.typeName : undefined,
    };
};
const deserializeAws_json1_1ColumnMetadataList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ColumnMetadata(entry, context);
    });
};
const deserializeAws_json1_1DatabaseList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1DescribeStatementResponse = (output, context) => {
    return {
        ClusterIdentifier: output.ClusterIdentifier !== undefined && output.ClusterIdentifier !== null
            ? output.ClusterIdentifier
            : undefined,
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        Database: output.Database !== undefined && output.Database !== null ? output.Database : undefined,
        DbUser: output.DbUser !== undefined && output.DbUser !== null ? output.DbUser : undefined,
        Duration: output.Duration !== undefined && output.Duration !== null ? output.Duration : undefined,
        Error: output.Error !== undefined && output.Error !== null ? output.Error : undefined,
        HasResultSet: output.HasResultSet !== undefined && output.HasResultSet !== null ? output.HasResultSet : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        QueryString: output.QueryString !== undefined && output.QueryString !== null ? output.QueryString : undefined,
        RedshiftPid: output.RedshiftPid !== undefined && output.RedshiftPid !== null ? output.RedshiftPid : undefined,
        RedshiftQueryId: output.RedshiftQueryId !== undefined && output.RedshiftQueryId !== null ? output.RedshiftQueryId : undefined,
        ResultRows: output.ResultRows !== undefined && output.ResultRows !== null ? output.ResultRows : undefined,
        ResultSize: output.ResultSize !== undefined && output.ResultSize !== null ? output.ResultSize : undefined,
        SecretArn: output.SecretArn !== undefined && output.SecretArn !== null ? output.SecretArn : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        UpdatedAt: output.UpdatedAt !== undefined && output.UpdatedAt !== null
            ? new Date(Math.round(output.UpdatedAt * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1DescribeTableResponse = (output, context) => {
    return {
        ColumnList: output.ColumnList !== undefined && output.ColumnList !== null
            ? deserializeAws_json1_1ColumnList(output.ColumnList, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        TableName: output.TableName !== undefined && output.TableName !== null ? output.TableName : undefined,
    };
};
const deserializeAws_json1_1ExecuteStatementException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        StatementId: output.StatementId !== undefined && output.StatementId !== null ? output.StatementId : undefined,
    };
};
const deserializeAws_json1_1ExecuteStatementOutput = (output, context) => {
    return {
        ClusterIdentifier: output.ClusterIdentifier !== undefined && output.ClusterIdentifier !== null
            ? output.ClusterIdentifier
            : undefined,
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        Database: output.Database !== undefined && output.Database !== null ? output.Database : undefined,
        DbUser: output.DbUser !== undefined && output.DbUser !== null ? output.DbUser : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        SecretArn: output.SecretArn !== undefined && output.SecretArn !== null ? output.SecretArn : undefined,
    };
};
const deserializeAws_json1_1Field = (output, context) => {
    if (output.blobValue !== undefined && output.blobValue !== null) {
        return {
            blobValue: context.base64Decoder(output.blobValue),
        };
    }
    if (output.booleanValue !== undefined && output.booleanValue !== null) {
        return {
            booleanValue: output.booleanValue,
        };
    }
    if (output.doubleValue !== undefined && output.doubleValue !== null) {
        return {
            doubleValue: output.doubleValue,
        };
    }
    if (output.isNull !== undefined && output.isNull !== null) {
        return {
            isNull: output.isNull,
        };
    }
    if (output.longValue !== undefined && output.longValue !== null) {
        return {
            longValue: output.longValue,
        };
    }
    if (output.stringValue !== undefined && output.stringValue !== null) {
        return {
            stringValue: output.stringValue,
        };
    }
    return { $unknown: Object.entries(output)[0] };
};
const deserializeAws_json1_1FieldList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Field(entry, context);
    });
};
const deserializeAws_json1_1GetStatementResultResponse = (output, context) => {
    return {
        ColumnMetadata: output.ColumnMetadata !== undefined && output.ColumnMetadata !== null
            ? deserializeAws_json1_1ColumnMetadataList(output.ColumnMetadata, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Records: output.Records !== undefined && output.Records !== null
            ? deserializeAws_json1_1SqlRecords(output.Records, context)
            : undefined,
        TotalNumRows: output.TotalNumRows !== undefined && output.TotalNumRows !== null ? output.TotalNumRows : undefined,
    };
};
const deserializeAws_json1_1InternalServerException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ListDatabasesResponse = (output, context) => {
    return {
        Databases: output.Databases !== undefined && output.Databases !== null
            ? deserializeAws_json1_1DatabaseList(output.Databases, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListSchemasResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Schemas: output.Schemas !== undefined && output.Schemas !== null
            ? deserializeAws_json1_1SchemaList(output.Schemas, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListStatementsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Statements: output.Statements !== undefined && output.Statements !== null
            ? deserializeAws_json1_1StatementList(output.Statements, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListTablesResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Tables: output.Tables !== undefined && output.Tables !== null
            ? deserializeAws_json1_1TableList(output.Tables, context)
            : undefined,
    };
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
    };
};
const deserializeAws_json1_1SchemaList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1SqlRecords = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FieldList(entry, context);
    });
};
const deserializeAws_json1_1StatementData = (output, context) => {
    return {
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        QueryString: output.QueryString !== undefined && output.QueryString !== null ? output.QueryString : undefined,
        SecretArn: output.SecretArn !== undefined && output.SecretArn !== null ? output.SecretArn : undefined,
        StatementName: output.StatementName !== undefined && output.StatementName !== null ? output.StatementName : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        UpdatedAt: output.UpdatedAt !== undefined && output.UpdatedAt !== null
            ? new Date(Math.round(output.UpdatedAt * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1StatementList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1StatementData(entry, context);
    });
};
const deserializeAws_json1_1TableList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TableMember(entry, context);
    });
};
const deserializeAws_json1_1TableMember = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        schema: output.schema !== undefined && output.schema !== null ? output.schema : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_json1_1ValidationException = (output, context) => {
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
//# sourceMappingURL=Aws_json1_1.js.map