"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1RollbackTransactionCommand = exports.deserializeAws_restJson1ExecuteStatementCommand = exports.deserializeAws_restJson1ExecuteSqlCommand = exports.deserializeAws_restJson1CommitTransactionCommand = exports.deserializeAws_restJson1BeginTransactionCommand = exports.deserializeAws_restJson1BatchExecuteStatementCommand = exports.serializeAws_restJson1RollbackTransactionCommand = exports.serializeAws_restJson1ExecuteStatementCommand = exports.serializeAws_restJson1ExecuteSqlCommand = exports.serializeAws_restJson1CommitTransactionCommand = exports.serializeAws_restJson1BeginTransactionCommand = exports.serializeAws_restJson1BatchExecuteStatementCommand = void 0;
const models_0_1 = require("../models/models_0");
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_restJson1BatchExecuteStatementCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/BatchExecute";
    let body;
    body = JSON.stringify({
        ...(input.database !== undefined && input.database !== null && { database: input.database }),
        ...(input.parameterSets !== undefined &&
            input.parameterSets !== null && {
            parameterSets: serializeAws_restJson1SqlParameterSets(input.parameterSets, context),
        }),
        ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
        ...(input.schema !== undefined && input.schema !== null && { schema: input.schema }),
        ...(input.secretArn !== undefined && input.secretArn !== null && { secretArn: input.secretArn }),
        ...(input.sql !== undefined && input.sql !== null && { sql: input.sql }),
        ...(input.transactionId !== undefined && input.transactionId !== null && { transactionId: input.transactionId }),
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
exports.serializeAws_restJson1BatchExecuteStatementCommand = serializeAws_restJson1BatchExecuteStatementCommand;
const serializeAws_restJson1BeginTransactionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/BeginTransaction";
    let body;
    body = JSON.stringify({
        ...(input.database !== undefined && input.database !== null && { database: input.database }),
        ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
        ...(input.schema !== undefined && input.schema !== null && { schema: input.schema }),
        ...(input.secretArn !== undefined && input.secretArn !== null && { secretArn: input.secretArn }),
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
exports.serializeAws_restJson1BeginTransactionCommand = serializeAws_restJson1BeginTransactionCommand;
const serializeAws_restJson1CommitTransactionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/CommitTransaction";
    let body;
    body = JSON.stringify({
        ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
        ...(input.secretArn !== undefined && input.secretArn !== null && { secretArn: input.secretArn }),
        ...(input.transactionId !== undefined && input.transactionId !== null && { transactionId: input.transactionId }),
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
exports.serializeAws_restJson1CommitTransactionCommand = serializeAws_restJson1CommitTransactionCommand;
const serializeAws_restJson1ExecuteSqlCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/ExecuteSql";
    let body;
    body = JSON.stringify({
        ...(input.awsSecretStoreArn !== undefined &&
            input.awsSecretStoreArn !== null && { awsSecretStoreArn: input.awsSecretStoreArn }),
        ...(input.database !== undefined && input.database !== null && { database: input.database }),
        ...(input.dbClusterOrInstanceArn !== undefined &&
            input.dbClusterOrInstanceArn !== null && { dbClusterOrInstanceArn: input.dbClusterOrInstanceArn }),
        ...(input.schema !== undefined && input.schema !== null && { schema: input.schema }),
        ...(input.sqlStatements !== undefined && input.sqlStatements !== null && { sqlStatements: input.sqlStatements }),
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
exports.serializeAws_restJson1ExecuteSqlCommand = serializeAws_restJson1ExecuteSqlCommand;
const serializeAws_restJson1ExecuteStatementCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/Execute";
    let body;
    body = JSON.stringify({
        ...(input.continueAfterTimeout !== undefined &&
            input.continueAfterTimeout !== null && { continueAfterTimeout: input.continueAfterTimeout }),
        ...(input.database !== undefined && input.database !== null && { database: input.database }),
        ...(input.includeResultMetadata !== undefined &&
            input.includeResultMetadata !== null && { includeResultMetadata: input.includeResultMetadata }),
        ...(input.parameters !== undefined &&
            input.parameters !== null && { parameters: serializeAws_restJson1SqlParametersList(input.parameters, context) }),
        ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
        ...(input.resultSetOptions !== undefined &&
            input.resultSetOptions !== null && {
            resultSetOptions: serializeAws_restJson1ResultSetOptions(input.resultSetOptions, context),
        }),
        ...(input.schema !== undefined && input.schema !== null && { schema: input.schema }),
        ...(input.secretArn !== undefined && input.secretArn !== null && { secretArn: input.secretArn }),
        ...(input.sql !== undefined && input.sql !== null && { sql: input.sql }),
        ...(input.transactionId !== undefined && input.transactionId !== null && { transactionId: input.transactionId }),
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
exports.serializeAws_restJson1ExecuteStatementCommand = serializeAws_restJson1ExecuteStatementCommand;
const serializeAws_restJson1RollbackTransactionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/RollbackTransaction";
    let body;
    body = JSON.stringify({
        ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
        ...(input.secretArn !== undefined && input.secretArn !== null && { secretArn: input.secretArn }),
        ...(input.transactionId !== undefined && input.transactionId !== null && { transactionId: input.transactionId }),
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
exports.serializeAws_restJson1RollbackTransactionCommand = serializeAws_restJson1RollbackTransactionCommand;
const deserializeAws_restJson1BatchExecuteStatementCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1BatchExecuteStatementCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        updateResults: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.updateResults !== undefined && data.updateResults !== null) {
        contents.updateResults = deserializeAws_restJson1UpdateResults(data.updateResults, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1BatchExecuteStatementCommand = deserializeAws_restJson1BatchExecuteStatementCommand;
const deserializeAws_restJson1BatchExecuteStatementCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.rdsdata#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.rdsdata#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.rdsdata#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableError":
        case "com.amazonaws.rdsdata#ServiceUnavailableError":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StatementTimeoutException":
        case "com.amazonaws.rdsdata#StatementTimeoutException":
            response = {
                ...(await deserializeAws_restJson1StatementTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1BeginTransactionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1BeginTransactionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        transactionId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.transactionId !== undefined && data.transactionId !== null) {
        contents.transactionId = data.transactionId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1BeginTransactionCommand = deserializeAws_restJson1BeginTransactionCommand;
const deserializeAws_restJson1BeginTransactionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.rdsdata#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.rdsdata#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.rdsdata#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableError":
        case "com.amazonaws.rdsdata#ServiceUnavailableError":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StatementTimeoutException":
        case "com.amazonaws.rdsdata#StatementTimeoutException":
            response = {
                ...(await deserializeAws_restJson1StatementTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CommitTransactionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CommitTransactionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        transactionStatus: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.transactionStatus !== undefined && data.transactionStatus !== null) {
        contents.transactionStatus = data.transactionStatus;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CommitTransactionCommand = deserializeAws_restJson1CommitTransactionCommand;
const deserializeAws_restJson1CommitTransactionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.rdsdata#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.rdsdata#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.rdsdata#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.rdsdata#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableError":
        case "com.amazonaws.rdsdata#ServiceUnavailableError":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StatementTimeoutException":
        case "com.amazonaws.rdsdata#StatementTimeoutException":
            response = {
                ...(await deserializeAws_restJson1StatementTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ExecuteSqlCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ExecuteSqlCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        sqlStatementResults: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.sqlStatementResults !== undefined && data.sqlStatementResults !== null) {
        contents.sqlStatementResults = deserializeAws_restJson1SqlStatementResults(data.sqlStatementResults, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ExecuteSqlCommand = deserializeAws_restJson1ExecuteSqlCommand;
const deserializeAws_restJson1ExecuteSqlCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.rdsdata#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.rdsdata#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.rdsdata#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableError":
        case "com.amazonaws.rdsdata#ServiceUnavailableError":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableErrorResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ExecuteStatementCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ExecuteStatementCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        columnMetadata: undefined,
        generatedFields: undefined,
        numberOfRecordsUpdated: undefined,
        records: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.columnMetadata !== undefined && data.columnMetadata !== null) {
        contents.columnMetadata = deserializeAws_restJson1Metadata(data.columnMetadata, context);
    }
    if (data.generatedFields !== undefined && data.generatedFields !== null) {
        contents.generatedFields = deserializeAws_restJson1FieldList(data.generatedFields, context);
    }
    if (data.numberOfRecordsUpdated !== undefined && data.numberOfRecordsUpdated !== null) {
        contents.numberOfRecordsUpdated = data.numberOfRecordsUpdated;
    }
    if (data.records !== undefined && data.records !== null) {
        contents.records = deserializeAws_restJson1SqlRecords(data.records, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ExecuteStatementCommand = deserializeAws_restJson1ExecuteStatementCommand;
const deserializeAws_restJson1ExecuteStatementCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.rdsdata#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.rdsdata#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.rdsdata#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableError":
        case "com.amazonaws.rdsdata#ServiceUnavailableError":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StatementTimeoutException":
        case "com.amazonaws.rdsdata#StatementTimeoutException":
            response = {
                ...(await deserializeAws_restJson1StatementTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1RollbackTransactionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1RollbackTransactionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        transactionStatus: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.transactionStatus !== undefined && data.transactionStatus !== null) {
        contents.transactionStatus = data.transactionStatus;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1RollbackTransactionCommand = deserializeAws_restJson1RollbackTransactionCommand;
const deserializeAws_restJson1RollbackTransactionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.rdsdata#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.rdsdata#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.rdsdata#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.rdsdata#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableError":
        case "com.amazonaws.rdsdata#ServiceUnavailableError":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StatementTimeoutException":
        case "com.amazonaws.rdsdata#StatementTimeoutException":
            response = {
                ...(await deserializeAws_restJson1StatementTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1BadRequestExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "BadRequestException",
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
const deserializeAws_restJson1ForbiddenExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ForbiddenException",
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
const deserializeAws_restJson1InternalServerErrorExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServerErrorException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
    };
    const data = parsedOutput.body;
    return contents;
};
const deserializeAws_restJson1NotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NotFoundException",
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
const deserializeAws_restJson1ServiceUnavailableErrorResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ServiceUnavailableError",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
    };
    const data = parsedOutput.body;
    return contents;
};
const deserializeAws_restJson1StatementTimeoutExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "StatementTimeoutException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        dbConnectionId: undefined,
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.dbConnectionId !== undefined && data.dbConnectionId !== null) {
        contents.dbConnectionId = data.dbConnectionId;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const serializeAws_restJson1ArrayOfArray = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1ArrayValue(entry, context);
    });
};
const serializeAws_restJson1ArrayValue = (input, context) => {
    return models_0_1.ArrayValue.visit(input, {
        arrayValues: (value) => ({ arrayValues: serializeAws_restJson1ArrayOfArray(value, context) }),
        booleanValues: (value) => ({ booleanValues: serializeAws_restJson1BooleanArray(value, context) }),
        doubleValues: (value) => ({ doubleValues: serializeAws_restJson1DoubleArray(value, context) }),
        longValues: (value) => ({ longValues: serializeAws_restJson1LongArray(value, context) }),
        stringValues: (value) => ({ stringValues: serializeAws_restJson1StringArray(value, context) }),
        _: (name, value) => ({ name: value }),
    });
};
const serializeAws_restJson1BooleanArray = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1DoubleArray = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1Field = (input, context) => {
    return models_0_1.Field.visit(input, {
        arrayValue: (value) => ({ arrayValue: serializeAws_restJson1ArrayValue(value, context) }),
        blobValue: (value) => ({ blobValue: context.base64Encoder(value) }),
        booleanValue: (value) => ({ booleanValue: value }),
        doubleValue: (value) => ({ doubleValue: value }),
        isNull: (value) => ({ isNull: value }),
        longValue: (value) => ({ longValue: value }),
        stringValue: (value) => ({ stringValue: value }),
        _: (name, value) => ({ name: value }),
    });
};
const serializeAws_restJson1LongArray = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1ResultSetOptions = (input, context) => {
    return {
        ...(input.decimalReturnType !== undefined &&
            input.decimalReturnType !== null && { decimalReturnType: input.decimalReturnType }),
    };
};
const serializeAws_restJson1SqlParameter = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.typeHint !== undefined && input.typeHint !== null && { typeHint: input.typeHint }),
        ...(input.value !== undefined &&
            input.value !== null && { value: serializeAws_restJson1Field(input.value, context) }),
    };
};
const serializeAws_restJson1SqlParameterSets = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SqlParametersList(entry, context);
    });
};
const serializeAws_restJson1SqlParametersList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SqlParameter(entry, context);
    });
};
const serializeAws_restJson1StringArray = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1ArrayOfArray = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ArrayValue(entry, context);
    });
};
const deserializeAws_restJson1ArrayValue = (output, context) => {
    if (output.arrayValues !== undefined && output.arrayValues !== null) {
        return {
            arrayValues: deserializeAws_restJson1ArrayOfArray(output.arrayValues, context),
        };
    }
    if (output.booleanValues !== undefined && output.booleanValues !== null) {
        return {
            booleanValues: deserializeAws_restJson1BooleanArray(output.booleanValues, context),
        };
    }
    if (output.doubleValues !== undefined && output.doubleValues !== null) {
        return {
            doubleValues: deserializeAws_restJson1DoubleArray(output.doubleValues, context),
        };
    }
    if (output.longValues !== undefined && output.longValues !== null) {
        return {
            longValues: deserializeAws_restJson1LongArray(output.longValues, context),
        };
    }
    if (output.stringValues !== undefined && output.stringValues !== null) {
        return {
            stringValues: deserializeAws_restJson1StringArray(output.stringValues, context),
        };
    }
    return { $unknown: Object.entries(output)[0] };
};
const deserializeAws_restJson1ArrayValueList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Value(entry, context);
    });
};
const deserializeAws_restJson1BooleanArray = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1ColumnMetadata = (output, context) => {
    return {
        arrayBaseColumnType: output.arrayBaseColumnType !== undefined && output.arrayBaseColumnType !== null
            ? output.arrayBaseColumnType
            : undefined,
        isAutoIncrement: output.isAutoIncrement !== undefined && output.isAutoIncrement !== null ? output.isAutoIncrement : undefined,
        isCaseSensitive: output.isCaseSensitive !== undefined && output.isCaseSensitive !== null ? output.isCaseSensitive : undefined,
        isCurrency: output.isCurrency !== undefined && output.isCurrency !== null ? output.isCurrency : undefined,
        isSigned: output.isSigned !== undefined && output.isSigned !== null ? output.isSigned : undefined,
        label: output.label !== undefined && output.label !== null ? output.label : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        nullable: output.nullable !== undefined && output.nullable !== null ? output.nullable : undefined,
        precision: output.precision !== undefined && output.precision !== null ? output.precision : undefined,
        scale: output.scale !== undefined && output.scale !== null ? output.scale : undefined,
        schemaName: output.schemaName !== undefined && output.schemaName !== null ? output.schemaName : undefined,
        tableName: output.tableName !== undefined && output.tableName !== null ? output.tableName : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
        typeName: output.typeName !== undefined && output.typeName !== null ? output.typeName : undefined,
    };
};
const deserializeAws_restJson1DoubleArray = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1Field = (output, context) => {
    if (output.arrayValue !== undefined && output.arrayValue !== null) {
        return {
            arrayValue: deserializeAws_restJson1ArrayValue(output.arrayValue, context),
        };
    }
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
const deserializeAws_restJson1FieldList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Field(entry, context);
    });
};
const deserializeAws_restJson1LongArray = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1Metadata = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ColumnMetadata(entry, context);
    });
};
const deserializeAws_restJson1_Record = (output, context) => {
    return {
        values: output.values !== undefined && output.values !== null
            ? deserializeAws_restJson1Row(output.values, context)
            : undefined,
    };
};
const deserializeAws_restJson1Records = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1_Record(entry, context);
    });
};
const deserializeAws_restJson1ResultFrame = (output, context) => {
    return {
        records: output.records !== undefined && output.records !== null
            ? deserializeAws_restJson1Records(output.records, context)
            : undefined,
        resultSetMetadata: output.resultSetMetadata !== undefined && output.resultSetMetadata !== null
            ? deserializeAws_restJson1ResultSetMetadata(output.resultSetMetadata, context)
            : undefined,
    };
};
const deserializeAws_restJson1ResultSetMetadata = (output, context) => {
    return {
        columnCount: output.columnCount !== undefined && output.columnCount !== null ? output.columnCount : undefined,
        columnMetadata: output.columnMetadata !== undefined && output.columnMetadata !== null
            ? deserializeAws_restJson1Metadata(output.columnMetadata, context)
            : undefined,
    };
};
const deserializeAws_restJson1Row = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Value(entry, context);
    });
};
const deserializeAws_restJson1SqlRecords = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1FieldList(entry, context);
    });
};
const deserializeAws_restJson1SqlStatementResult = (output, context) => {
    return {
        numberOfRecordsUpdated: output.numberOfRecordsUpdated !== undefined && output.numberOfRecordsUpdated !== null
            ? output.numberOfRecordsUpdated
            : undefined,
        resultFrame: output.resultFrame !== undefined && output.resultFrame !== null
            ? deserializeAws_restJson1ResultFrame(output.resultFrame, context)
            : undefined,
    };
};
const deserializeAws_restJson1SqlStatementResults = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SqlStatementResult(entry, context);
    });
};
const deserializeAws_restJson1StringArray = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1StructValue = (output, context) => {
    return {
        attributes: output.attributes !== undefined && output.attributes !== null
            ? deserializeAws_restJson1ArrayValueList(output.attributes, context)
            : undefined,
    };
};
const deserializeAws_restJson1UpdateResult = (output, context) => {
    return {
        generatedFields: output.generatedFields !== undefined && output.generatedFields !== null
            ? deserializeAws_restJson1FieldList(output.generatedFields, context)
            : undefined,
    };
};
const deserializeAws_restJson1UpdateResults = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1UpdateResult(entry, context);
    });
};
const deserializeAws_restJson1Value = (output, context) => {
    if (output.arrayValues !== undefined && output.arrayValues !== null) {
        return {
            arrayValues: deserializeAws_restJson1ArrayValueList(output.arrayValues, context),
        };
    }
    if (output.bigIntValue !== undefined && output.bigIntValue !== null) {
        return {
            bigIntValue: output.bigIntValue,
        };
    }
    if (output.bitValue !== undefined && output.bitValue !== null) {
        return {
            bitValue: output.bitValue,
        };
    }
    if (output.blobValue !== undefined && output.blobValue !== null) {
        return {
            blobValue: context.base64Decoder(output.blobValue),
        };
    }
    if (output.doubleValue !== undefined && output.doubleValue !== null) {
        return {
            doubleValue: output.doubleValue,
        };
    }
    if (output.intValue !== undefined && output.intValue !== null) {
        return {
            intValue: output.intValue,
        };
    }
    if (output.isNull !== undefined && output.isNull !== null) {
        return {
            isNull: output.isNull,
        };
    }
    if (output.realValue !== undefined && output.realValue !== null) {
        return {
            realValue: output.realValue,
        };
    }
    if (output.stringValue !== undefined && output.stringValue !== null) {
        return {
            stringValue: output.stringValue,
        };
    }
    if (output.structValue !== undefined && output.structValue !== null) {
        return {
            structValue: deserializeAws_restJson1StructValue(output.structValue, context),
        };
    }
    return { $unknown: Object.entries(output)[0] };
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