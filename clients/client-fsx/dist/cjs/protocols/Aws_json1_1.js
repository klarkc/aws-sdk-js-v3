"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1UpdateFileSystemCommand = exports.deserializeAws_json1_1UntagResourceCommand = exports.deserializeAws_json1_1TagResourceCommand = exports.deserializeAws_json1_1ListTagsForResourceCommand = exports.deserializeAws_json1_1DisassociateFileSystemAliasesCommand = exports.deserializeAws_json1_1DescribeFileSystemsCommand = exports.deserializeAws_json1_1DescribeFileSystemAliasesCommand = exports.deserializeAws_json1_1DescribeDataRepositoryTasksCommand = exports.deserializeAws_json1_1DescribeBackupsCommand = exports.deserializeAws_json1_1DeleteFileSystemCommand = exports.deserializeAws_json1_1DeleteBackupCommand = exports.deserializeAws_json1_1CreateFileSystemFromBackupCommand = exports.deserializeAws_json1_1CreateFileSystemCommand = exports.deserializeAws_json1_1CreateDataRepositoryTaskCommand = exports.deserializeAws_json1_1CreateBackupCommand = exports.deserializeAws_json1_1CopyBackupCommand = exports.deserializeAws_json1_1CancelDataRepositoryTaskCommand = exports.deserializeAws_json1_1AssociateFileSystemAliasesCommand = exports.serializeAws_json1_1UpdateFileSystemCommand = exports.serializeAws_json1_1UntagResourceCommand = exports.serializeAws_json1_1TagResourceCommand = exports.serializeAws_json1_1ListTagsForResourceCommand = exports.serializeAws_json1_1DisassociateFileSystemAliasesCommand = exports.serializeAws_json1_1DescribeFileSystemsCommand = exports.serializeAws_json1_1DescribeFileSystemAliasesCommand = exports.serializeAws_json1_1DescribeDataRepositoryTasksCommand = exports.serializeAws_json1_1DescribeBackupsCommand = exports.serializeAws_json1_1DeleteFileSystemCommand = exports.serializeAws_json1_1DeleteBackupCommand = exports.serializeAws_json1_1CreateFileSystemFromBackupCommand = exports.serializeAws_json1_1CreateFileSystemCommand = exports.serializeAws_json1_1CreateDataRepositoryTaskCommand = exports.serializeAws_json1_1CreateBackupCommand = exports.serializeAws_json1_1CopyBackupCommand = exports.serializeAws_json1_1CancelDataRepositoryTaskCommand = exports.serializeAws_json1_1AssociateFileSystemAliasesCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const uuid_1 = require("uuid");
const serializeAws_json1_1AssociateFileSystemAliasesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSSimbaAPIService_v20180301.AssociateFileSystemAliases",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateFileSystemAliasesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociateFileSystemAliasesCommand = serializeAws_json1_1AssociateFileSystemAliasesCommand;
const serializeAws_json1_1CancelDataRepositoryTaskCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSSimbaAPIService_v20180301.CancelDataRepositoryTask",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CancelDataRepositoryTaskRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CancelDataRepositoryTaskCommand = serializeAws_json1_1CancelDataRepositoryTaskCommand;
const serializeAws_json1_1CopyBackupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSSimbaAPIService_v20180301.CopyBackup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CopyBackupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CopyBackupCommand = serializeAws_json1_1CopyBackupCommand;
const serializeAws_json1_1CreateBackupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSSimbaAPIService_v20180301.CreateBackup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateBackupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateBackupCommand = serializeAws_json1_1CreateBackupCommand;
const serializeAws_json1_1CreateDataRepositoryTaskCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSSimbaAPIService_v20180301.CreateDataRepositoryTask",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDataRepositoryTaskRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateDataRepositoryTaskCommand = serializeAws_json1_1CreateDataRepositoryTaskCommand;
const serializeAws_json1_1CreateFileSystemCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSSimbaAPIService_v20180301.CreateFileSystem",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateFileSystemRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateFileSystemCommand = serializeAws_json1_1CreateFileSystemCommand;
const serializeAws_json1_1CreateFileSystemFromBackupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSSimbaAPIService_v20180301.CreateFileSystemFromBackup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateFileSystemFromBackupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateFileSystemFromBackupCommand = serializeAws_json1_1CreateFileSystemFromBackupCommand;
const serializeAws_json1_1DeleteBackupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSSimbaAPIService_v20180301.DeleteBackup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteBackupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteBackupCommand = serializeAws_json1_1DeleteBackupCommand;
const serializeAws_json1_1DeleteFileSystemCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSSimbaAPIService_v20180301.DeleteFileSystem",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteFileSystemRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteFileSystemCommand = serializeAws_json1_1DeleteFileSystemCommand;
const serializeAws_json1_1DescribeBackupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSSimbaAPIService_v20180301.DescribeBackups",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeBackupsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeBackupsCommand = serializeAws_json1_1DescribeBackupsCommand;
const serializeAws_json1_1DescribeDataRepositoryTasksCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSSimbaAPIService_v20180301.DescribeDataRepositoryTasks",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDataRepositoryTasksRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeDataRepositoryTasksCommand = serializeAws_json1_1DescribeDataRepositoryTasksCommand;
const serializeAws_json1_1DescribeFileSystemAliasesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSSimbaAPIService_v20180301.DescribeFileSystemAliases",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeFileSystemAliasesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeFileSystemAliasesCommand = serializeAws_json1_1DescribeFileSystemAliasesCommand;
const serializeAws_json1_1DescribeFileSystemsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSSimbaAPIService_v20180301.DescribeFileSystems",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeFileSystemsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeFileSystemsCommand = serializeAws_json1_1DescribeFileSystemsCommand;
const serializeAws_json1_1DisassociateFileSystemAliasesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSSimbaAPIService_v20180301.DisassociateFileSystemAliases",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateFileSystemAliasesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisassociateFileSystemAliasesCommand = serializeAws_json1_1DisassociateFileSystemAliasesCommand;
const serializeAws_json1_1ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSSimbaAPIService_v20180301.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
const serializeAws_json1_1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSSimbaAPIService_v20180301.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSSimbaAPIService_v20180301.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
const serializeAws_json1_1UpdateFileSystemCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSSimbaAPIService_v20180301.UpdateFileSystem",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateFileSystemRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateFileSystemCommand = serializeAws_json1_1UpdateFileSystemCommand;
const deserializeAws_json1_1AssociateFileSystemAliasesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AssociateFileSystemAliasesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateFileSystemAliasesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssociateFileSystemAliasesCommand = deserializeAws_json1_1AssociateFileSystemAliasesCommand;
const deserializeAws_json1_1AssociateFileSystemAliasesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequest":
        case "com.amazonaws.fsx#BadRequest":
            response = {
                ...(await deserializeAws_json1_1BadRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileSystemNotFound":
        case "com.amazonaws.fsx#FileSystemNotFound":
            response = {
                ...(await deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.fsx#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CancelDataRepositoryTaskCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CancelDataRepositoryTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CancelDataRepositoryTaskResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CancelDataRepositoryTaskCommand = deserializeAws_json1_1CancelDataRepositoryTaskCommand;
const deserializeAws_json1_1CancelDataRepositoryTaskCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequest":
        case "com.amazonaws.fsx#BadRequest":
            response = {
                ...(await deserializeAws_json1_1BadRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DataRepositoryTaskEnded":
        case "com.amazonaws.fsx#DataRepositoryTaskEnded":
            response = {
                ...(await deserializeAws_json1_1DataRepositoryTaskEndedResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DataRepositoryTaskNotFound":
        case "com.amazonaws.fsx#DataRepositoryTaskNotFound":
            response = {
                ...(await deserializeAws_json1_1DataRepositoryTaskNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.fsx#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperation":
        case "com.amazonaws.fsx#UnsupportedOperation":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CopyBackupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CopyBackupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CopyBackupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CopyBackupCommand = deserializeAws_json1_1CopyBackupCommand;
const deserializeAws_json1_1CopyBackupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BackupNotFound":
        case "com.amazonaws.fsx#BackupNotFound":
            response = {
                ...(await deserializeAws_json1_1BackupNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequest":
        case "com.amazonaws.fsx#BadRequest":
            response = {
                ...(await deserializeAws_json1_1BadRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncompatibleParameterError":
        case "com.amazonaws.fsx#IncompatibleParameterError":
            response = {
                ...(await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncompatibleRegionForMultiAZ":
        case "com.amazonaws.fsx#IncompatibleRegionForMultiAZ":
            response = {
                ...(await deserializeAws_json1_1IncompatibleRegionForMultiAZResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.fsx#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDestinationKmsKey":
        case "com.amazonaws.fsx#InvalidDestinationKmsKey":
            response = {
                ...(await deserializeAws_json1_1InvalidDestinationKmsKeyResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRegion":
        case "com.amazonaws.fsx#InvalidRegion":
            response = {
                ...(await deserializeAws_json1_1InvalidRegionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSourceKmsKey":
        case "com.amazonaws.fsx#InvalidSourceKmsKey":
            response = {
                ...(await deserializeAws_json1_1InvalidSourceKmsKeyResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceLimitExceeded":
        case "com.amazonaws.fsx#ServiceLimitExceeded":
            response = {
                ...(await deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SourceBackupUnavailable":
        case "com.amazonaws.fsx#SourceBackupUnavailable":
            response = {
                ...(await deserializeAws_json1_1SourceBackupUnavailableResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperation":
        case "com.amazonaws.fsx#UnsupportedOperation":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateBackupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateBackupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateBackupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateBackupCommand = deserializeAws_json1_1CreateBackupCommand;
const deserializeAws_json1_1CreateBackupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BackupInProgress":
        case "com.amazonaws.fsx#BackupInProgress":
            response = {
                ...(await deserializeAws_json1_1BackupInProgressResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequest":
        case "com.amazonaws.fsx#BadRequest":
            response = {
                ...(await deserializeAws_json1_1BadRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileSystemNotFound":
        case "com.amazonaws.fsx#FileSystemNotFound":
            response = {
                ...(await deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncompatibleParameterError":
        case "com.amazonaws.fsx#IncompatibleParameterError":
            response = {
                ...(await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.fsx#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceLimitExceeded":
        case "com.amazonaws.fsx#ServiceLimitExceeded":
            response = {
                ...(await deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperation":
        case "com.amazonaws.fsx#UnsupportedOperation":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateDataRepositoryTaskCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateDataRepositoryTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDataRepositoryTaskResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateDataRepositoryTaskCommand = deserializeAws_json1_1CreateDataRepositoryTaskCommand;
const deserializeAws_json1_1CreateDataRepositoryTaskCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequest":
        case "com.amazonaws.fsx#BadRequest":
            response = {
                ...(await deserializeAws_json1_1BadRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DataRepositoryTaskExecuting":
        case "com.amazonaws.fsx#DataRepositoryTaskExecuting":
            response = {
                ...(await deserializeAws_json1_1DataRepositoryTaskExecutingResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileSystemNotFound":
        case "com.amazonaws.fsx#FileSystemNotFound":
            response = {
                ...(await deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncompatibleParameterError":
        case "com.amazonaws.fsx#IncompatibleParameterError":
            response = {
                ...(await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.fsx#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceLimitExceeded":
        case "com.amazonaws.fsx#ServiceLimitExceeded":
            response = {
                ...(await deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperation":
        case "com.amazonaws.fsx#UnsupportedOperation":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateFileSystemCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateFileSystemCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateFileSystemResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateFileSystemCommand = deserializeAws_json1_1CreateFileSystemCommand;
const deserializeAws_json1_1CreateFileSystemCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ActiveDirectoryError":
        case "com.amazonaws.fsx#ActiveDirectoryError":
            response = {
                ...(await deserializeAws_json1_1ActiveDirectoryErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequest":
        case "com.amazonaws.fsx#BadRequest":
            response = {
                ...(await deserializeAws_json1_1BadRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncompatibleParameterError":
        case "com.amazonaws.fsx#IncompatibleParameterError":
            response = {
                ...(await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.fsx#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidExportPath":
        case "com.amazonaws.fsx#InvalidExportPath":
            response = {
                ...(await deserializeAws_json1_1InvalidExportPathResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidImportPath":
        case "com.amazonaws.fsx#InvalidImportPath":
            response = {
                ...(await deserializeAws_json1_1InvalidImportPathResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNetworkSettings":
        case "com.amazonaws.fsx#InvalidNetworkSettings":
            response = {
                ...(await deserializeAws_json1_1InvalidNetworkSettingsResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPerUnitStorageThroughput":
        case "com.amazonaws.fsx#InvalidPerUnitStorageThroughput":
            response = {
                ...(await deserializeAws_json1_1InvalidPerUnitStorageThroughputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingFileSystemConfiguration":
        case "com.amazonaws.fsx#MissingFileSystemConfiguration":
            response = {
                ...(await deserializeAws_json1_1MissingFileSystemConfigurationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceLimitExceeded":
        case "com.amazonaws.fsx#ServiceLimitExceeded":
            response = {
                ...(await deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateFileSystemFromBackupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateFileSystemFromBackupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateFileSystemFromBackupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateFileSystemFromBackupCommand = deserializeAws_json1_1CreateFileSystemFromBackupCommand;
const deserializeAws_json1_1CreateFileSystemFromBackupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ActiveDirectoryError":
        case "com.amazonaws.fsx#ActiveDirectoryError":
            response = {
                ...(await deserializeAws_json1_1ActiveDirectoryErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BackupNotFound":
        case "com.amazonaws.fsx#BackupNotFound":
            response = {
                ...(await deserializeAws_json1_1BackupNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequest":
        case "com.amazonaws.fsx#BadRequest":
            response = {
                ...(await deserializeAws_json1_1BadRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncompatibleParameterError":
        case "com.amazonaws.fsx#IncompatibleParameterError":
            response = {
                ...(await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.fsx#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNetworkSettings":
        case "com.amazonaws.fsx#InvalidNetworkSettings":
            response = {
                ...(await deserializeAws_json1_1InvalidNetworkSettingsResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPerUnitStorageThroughput":
        case "com.amazonaws.fsx#InvalidPerUnitStorageThroughput":
            response = {
                ...(await deserializeAws_json1_1InvalidPerUnitStorageThroughputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingFileSystemConfiguration":
        case "com.amazonaws.fsx#MissingFileSystemConfiguration":
            response = {
                ...(await deserializeAws_json1_1MissingFileSystemConfigurationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceLimitExceeded":
        case "com.amazonaws.fsx#ServiceLimitExceeded":
            response = {
                ...(await deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteBackupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteBackupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteBackupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteBackupCommand = deserializeAws_json1_1DeleteBackupCommand;
const deserializeAws_json1_1DeleteBackupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BackupBeingCopied":
        case "com.amazonaws.fsx#BackupBeingCopied":
            response = {
                ...(await deserializeAws_json1_1BackupBeingCopiedResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BackupInProgress":
        case "com.amazonaws.fsx#BackupInProgress":
            response = {
                ...(await deserializeAws_json1_1BackupInProgressResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BackupNotFound":
        case "com.amazonaws.fsx#BackupNotFound":
            response = {
                ...(await deserializeAws_json1_1BackupNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BackupRestoring":
        case "com.amazonaws.fsx#BackupRestoring":
            response = {
                ...(await deserializeAws_json1_1BackupRestoringResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequest":
        case "com.amazonaws.fsx#BadRequest":
            response = {
                ...(await deserializeAws_json1_1BadRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncompatibleParameterError":
        case "com.amazonaws.fsx#IncompatibleParameterError":
            response = {
                ...(await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.fsx#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteFileSystemCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteFileSystemCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteFileSystemResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteFileSystemCommand = deserializeAws_json1_1DeleteFileSystemCommand;
const deserializeAws_json1_1DeleteFileSystemCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequest":
        case "com.amazonaws.fsx#BadRequest":
            response = {
                ...(await deserializeAws_json1_1BadRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileSystemNotFound":
        case "com.amazonaws.fsx#FileSystemNotFound":
            response = {
                ...(await deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncompatibleParameterError":
        case "com.amazonaws.fsx#IncompatibleParameterError":
            response = {
                ...(await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.fsx#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceLimitExceeded":
        case "com.amazonaws.fsx#ServiceLimitExceeded":
            response = {
                ...(await deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeBackupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeBackupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeBackupsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeBackupsCommand = deserializeAws_json1_1DescribeBackupsCommand;
const deserializeAws_json1_1DescribeBackupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BackupNotFound":
        case "com.amazonaws.fsx#BackupNotFound":
            response = {
                ...(await deserializeAws_json1_1BackupNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequest":
        case "com.amazonaws.fsx#BadRequest":
            response = {
                ...(await deserializeAws_json1_1BadRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileSystemNotFound":
        case "com.amazonaws.fsx#FileSystemNotFound":
            response = {
                ...(await deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.fsx#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeDataRepositoryTasksCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeDataRepositoryTasksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDataRepositoryTasksResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeDataRepositoryTasksCommand = deserializeAws_json1_1DescribeDataRepositoryTasksCommand;
const deserializeAws_json1_1DescribeDataRepositoryTasksCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequest":
        case "com.amazonaws.fsx#BadRequest":
            response = {
                ...(await deserializeAws_json1_1BadRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DataRepositoryTaskNotFound":
        case "com.amazonaws.fsx#DataRepositoryTaskNotFound":
            response = {
                ...(await deserializeAws_json1_1DataRepositoryTaskNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileSystemNotFound":
        case "com.amazonaws.fsx#FileSystemNotFound":
            response = {
                ...(await deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.fsx#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeFileSystemAliasesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeFileSystemAliasesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeFileSystemAliasesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeFileSystemAliasesCommand = deserializeAws_json1_1DescribeFileSystemAliasesCommand;
const deserializeAws_json1_1DescribeFileSystemAliasesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequest":
        case "com.amazonaws.fsx#BadRequest":
            response = {
                ...(await deserializeAws_json1_1BadRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileSystemNotFound":
        case "com.amazonaws.fsx#FileSystemNotFound":
            response = {
                ...(await deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.fsx#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeFileSystemsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeFileSystemsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeFileSystemsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeFileSystemsCommand = deserializeAws_json1_1DescribeFileSystemsCommand;
const deserializeAws_json1_1DescribeFileSystemsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequest":
        case "com.amazonaws.fsx#BadRequest":
            response = {
                ...(await deserializeAws_json1_1BadRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileSystemNotFound":
        case "com.amazonaws.fsx#FileSystemNotFound":
            response = {
                ...(await deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.fsx#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DisassociateFileSystemAliasesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisassociateFileSystemAliasesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateFileSystemAliasesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisassociateFileSystemAliasesCommand = deserializeAws_json1_1DisassociateFileSystemAliasesCommand;
const deserializeAws_json1_1DisassociateFileSystemAliasesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequest":
        case "com.amazonaws.fsx#BadRequest":
            response = {
                ...(await deserializeAws_json1_1BadRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileSystemNotFound":
        case "com.amazonaws.fsx#FileSystemNotFound":
            response = {
                ...(await deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.fsx#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListTagsForResourceCommand = deserializeAws_json1_1ListTagsForResourceCommand;
const deserializeAws_json1_1ListTagsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequest":
        case "com.amazonaws.fsx#BadRequest":
            response = {
                ...(await deserializeAws_json1_1BadRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.fsx#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotServiceResourceError":
        case "com.amazonaws.fsx#NotServiceResourceError":
            response = {
                ...(await deserializeAws_json1_1NotServiceResourceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceDoesNotSupportTagging":
        case "com.amazonaws.fsx#ResourceDoesNotSupportTagging":
            response = {
                ...(await deserializeAws_json1_1ResourceDoesNotSupportTaggingResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFound":
        case "com.amazonaws.fsx#ResourceNotFound":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context)),
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
const deserializeAws_json1_1TagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1TagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TagResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1TagResourceCommand = deserializeAws_json1_1TagResourceCommand;
const deserializeAws_json1_1TagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequest":
        case "com.amazonaws.fsx#BadRequest":
            response = {
                ...(await deserializeAws_json1_1BadRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.fsx#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotServiceResourceError":
        case "com.amazonaws.fsx#NotServiceResourceError":
            response = {
                ...(await deserializeAws_json1_1NotServiceResourceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceDoesNotSupportTagging":
        case "com.amazonaws.fsx#ResourceDoesNotSupportTagging":
            response = {
                ...(await deserializeAws_json1_1ResourceDoesNotSupportTaggingResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFound":
        case "com.amazonaws.fsx#ResourceNotFound":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UntagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UntagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UntagResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UntagResourceCommand = deserializeAws_json1_1UntagResourceCommand;
const deserializeAws_json1_1UntagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequest":
        case "com.amazonaws.fsx#BadRequest":
            response = {
                ...(await deserializeAws_json1_1BadRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.fsx#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotServiceResourceError":
        case "com.amazonaws.fsx#NotServiceResourceError":
            response = {
                ...(await deserializeAws_json1_1NotServiceResourceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceDoesNotSupportTagging":
        case "com.amazonaws.fsx#ResourceDoesNotSupportTagging":
            response = {
                ...(await deserializeAws_json1_1ResourceDoesNotSupportTaggingResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFound":
        case "com.amazonaws.fsx#ResourceNotFound":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateFileSystemCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateFileSystemCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateFileSystemResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateFileSystemCommand = deserializeAws_json1_1UpdateFileSystemCommand;
const deserializeAws_json1_1UpdateFileSystemCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequest":
        case "com.amazonaws.fsx#BadRequest":
            response = {
                ...(await deserializeAws_json1_1BadRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileSystemNotFound":
        case "com.amazonaws.fsx#FileSystemNotFound":
            response = {
                ...(await deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncompatibleParameterError":
        case "com.amazonaws.fsx#IncompatibleParameterError":
            response = {
                ...(await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.fsx#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingFileSystemConfiguration":
        case "com.amazonaws.fsx#MissingFileSystemConfiguration":
            response = {
                ...(await deserializeAws_json1_1MissingFileSystemConfigurationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceLimitExceeded":
        case "com.amazonaws.fsx#ServiceLimitExceeded":
            response = {
                ...(await deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperation":
        case "com.amazonaws.fsx#UnsupportedOperation":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ActiveDirectoryErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ActiveDirectoryError(body, context);
    const contents = {
        name: "ActiveDirectoryError",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1BackupBeingCopiedResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1BackupBeingCopied(body, context);
    const contents = {
        name: "BackupBeingCopied",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1BackupInProgressResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1BackupInProgress(body, context);
    const contents = {
        name: "BackupInProgress",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1BackupNotFoundResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1BackupNotFound(body, context);
    const contents = {
        name: "BackupNotFound",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1BackupRestoringResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1BackupRestoring(body, context);
    const contents = {
        name: "BackupRestoring",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1BadRequestResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1BadRequest(body, context);
    const contents = {
        name: "BadRequest",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DataRepositoryTaskEndedResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DataRepositoryTaskEnded(body, context);
    const contents = {
        name: "DataRepositoryTaskEnded",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DataRepositoryTaskExecutingResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DataRepositoryTaskExecuting(body, context);
    const contents = {
        name: "DataRepositoryTaskExecuting",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DataRepositoryTaskNotFoundResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DataRepositoryTaskNotFound(body, context);
    const contents = {
        name: "DataRepositoryTaskNotFound",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1FileSystemNotFoundResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1FileSystemNotFound(body, context);
    const contents = {
        name: "FileSystemNotFound",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1IncompatibleParameterErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1IncompatibleParameterError(body, context);
    const contents = {
        name: "IncompatibleParameterError",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1IncompatibleRegionForMultiAZResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1IncompatibleRegionForMultiAZ(body, context);
    const contents = {
        name: "IncompatibleRegionForMultiAZ",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InternalServerErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServerError(body, context);
    const contents = {
        name: "InternalServerError",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidDestinationKmsKeyResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidDestinationKmsKey(body, context);
    const contents = {
        name: "InvalidDestinationKmsKey",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidExportPathResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidExportPath(body, context);
    const contents = {
        name: "InvalidExportPath",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidImportPathResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidImportPath(body, context);
    const contents = {
        name: "InvalidImportPath",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidNetworkSettingsResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidNetworkSettings(body, context);
    const contents = {
        name: "InvalidNetworkSettings",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidPerUnitStorageThroughputResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidPerUnitStorageThroughput(body, context);
    const contents = {
        name: "InvalidPerUnitStorageThroughput",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidRegionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRegion(body, context);
    const contents = {
        name: "InvalidRegion",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidSourceKmsKeyResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidSourceKmsKey(body, context);
    const contents = {
        name: "InvalidSourceKmsKey",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1MissingFileSystemConfigurationResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MissingFileSystemConfiguration(body, context);
    const contents = {
        name: "MissingFileSystemConfiguration",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1NotServiceResourceErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NotServiceResourceError(body, context);
    const contents = {
        name: "NotServiceResourceError",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceDoesNotSupportTaggingResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceDoesNotSupportTagging(body, context);
    const contents = {
        name: "ResourceDoesNotSupportTagging",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotFound(body, context);
    const contents = {
        name: "ResourceNotFound",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ServiceLimitExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceLimitExceeded(body, context);
    const contents = {
        name: "ServiceLimitExceeded",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1SourceBackupUnavailableResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1SourceBackupUnavailable(body, context);
    const contents = {
        name: "SourceBackupUnavailable",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UnsupportedOperationResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedOperation(body, context);
    const contents = {
        name: "UnsupportedOperation",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1AlternateDNSNames = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1AssociateFileSystemAliasesRequest = (input, context) => {
    var _a;
    return {
        ...(input.Aliases !== undefined &&
            input.Aliases !== null && { Aliases: serializeAws_json1_1AlternateDNSNames(input.Aliases, context) }),
        ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.FileSystemId !== undefined && input.FileSystemId !== null && { FileSystemId: input.FileSystemId }),
    };
};
const serializeAws_json1_1BackupIds = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1CancelDataRepositoryTaskRequest = (input, context) => {
    return {
        ...(input.TaskId !== undefined && input.TaskId !== null && { TaskId: input.TaskId }),
    };
};
const serializeAws_json1_1CompletionReport = (input, context) => {
    return {
        ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
        ...(input.Format !== undefined && input.Format !== null && { Format: input.Format }),
        ...(input.Path !== undefined && input.Path !== null && { Path: input.Path }),
        ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
    };
};
const serializeAws_json1_1CopyBackupRequest = (input, context) => {
    var _a;
    return {
        ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.CopyTags !== undefined && input.CopyTags !== null && { CopyTags: input.CopyTags }),
        ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
        ...(input.SourceBackupId !== undefined &&
            input.SourceBackupId !== null && { SourceBackupId: input.SourceBackupId }),
        ...(input.SourceRegion !== undefined && input.SourceRegion !== null && { SourceRegion: input.SourceRegion }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateBackupRequest = (input, context) => {
    var _a;
    return {
        ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.FileSystemId !== undefined && input.FileSystemId !== null && { FileSystemId: input.FileSystemId }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateDataRepositoryTaskRequest = (input, context) => {
    var _a;
    return {
        ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.FileSystemId !== undefined && input.FileSystemId !== null && { FileSystemId: input.FileSystemId }),
        ...(input.Paths !== undefined &&
            input.Paths !== null && { Paths: serializeAws_json1_1DataRepositoryTaskPaths(input.Paths, context) }),
        ...(input.Report !== undefined &&
            input.Report !== null && { Report: serializeAws_json1_1CompletionReport(input.Report, context) }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_json1_1CreateFileSystemFromBackupRequest = (input, context) => {
    var _a;
    return {
        ...(input.BackupId !== undefined && input.BackupId !== null && { BackupId: input.BackupId }),
        ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
        ...(input.LustreConfiguration !== undefined &&
            input.LustreConfiguration !== null && {
            LustreConfiguration: serializeAws_json1_1CreateFileSystemLustreConfiguration(input.LustreConfiguration, context),
        }),
        ...(input.SecurityGroupIds !== undefined &&
            input.SecurityGroupIds !== null && {
            SecurityGroupIds: serializeAws_json1_1SecurityGroupIds(input.SecurityGroupIds, context),
        }),
        ...(input.StorageType !== undefined && input.StorageType !== null && { StorageType: input.StorageType }),
        ...(input.SubnetIds !== undefined &&
            input.SubnetIds !== null && { SubnetIds: serializeAws_json1_1SubnetIds(input.SubnetIds, context) }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
        ...(input.WindowsConfiguration !== undefined &&
            input.WindowsConfiguration !== null && {
            WindowsConfiguration: serializeAws_json1_1CreateFileSystemWindowsConfiguration(input.WindowsConfiguration, context),
        }),
    };
};
const serializeAws_json1_1CreateFileSystemLustreConfiguration = (input, context) => {
    return {
        ...(input.AutoImportPolicy !== undefined &&
            input.AutoImportPolicy !== null && { AutoImportPolicy: input.AutoImportPolicy }),
        ...(input.AutomaticBackupRetentionDays !== undefined &&
            input.AutomaticBackupRetentionDays !== null && {
            AutomaticBackupRetentionDays: input.AutomaticBackupRetentionDays,
        }),
        ...(input.CopyTagsToBackups !== undefined &&
            input.CopyTagsToBackups !== null && { CopyTagsToBackups: input.CopyTagsToBackups }),
        ...(input.DailyAutomaticBackupStartTime !== undefined &&
            input.DailyAutomaticBackupStartTime !== null && {
            DailyAutomaticBackupStartTime: input.DailyAutomaticBackupStartTime,
        }),
        ...(input.DataCompressionType !== undefined &&
            input.DataCompressionType !== null && { DataCompressionType: input.DataCompressionType }),
        ...(input.DeploymentType !== undefined &&
            input.DeploymentType !== null && { DeploymentType: input.DeploymentType }),
        ...(input.DriveCacheType !== undefined &&
            input.DriveCacheType !== null && { DriveCacheType: input.DriveCacheType }),
        ...(input.ExportPath !== undefined && input.ExportPath !== null && { ExportPath: input.ExportPath }),
        ...(input.ImportPath !== undefined && input.ImportPath !== null && { ImportPath: input.ImportPath }),
        ...(input.ImportedFileChunkSize !== undefined &&
            input.ImportedFileChunkSize !== null && { ImportedFileChunkSize: input.ImportedFileChunkSize }),
        ...(input.PerUnitStorageThroughput !== undefined &&
            input.PerUnitStorageThroughput !== null && { PerUnitStorageThroughput: input.PerUnitStorageThroughput }),
        ...(input.WeeklyMaintenanceStartTime !== undefined &&
            input.WeeklyMaintenanceStartTime !== null && { WeeklyMaintenanceStartTime: input.WeeklyMaintenanceStartTime }),
    };
};
const serializeAws_json1_1CreateFileSystemRequest = (input, context) => {
    var _a;
    return {
        ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.FileSystemType !== undefined &&
            input.FileSystemType !== null && { FileSystemType: input.FileSystemType }),
        ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
        ...(input.LustreConfiguration !== undefined &&
            input.LustreConfiguration !== null && {
            LustreConfiguration: serializeAws_json1_1CreateFileSystemLustreConfiguration(input.LustreConfiguration, context),
        }),
        ...(input.SecurityGroupIds !== undefined &&
            input.SecurityGroupIds !== null && {
            SecurityGroupIds: serializeAws_json1_1SecurityGroupIds(input.SecurityGroupIds, context),
        }),
        ...(input.StorageCapacity !== undefined &&
            input.StorageCapacity !== null && { StorageCapacity: input.StorageCapacity }),
        ...(input.StorageType !== undefined && input.StorageType !== null && { StorageType: input.StorageType }),
        ...(input.SubnetIds !== undefined &&
            input.SubnetIds !== null && { SubnetIds: serializeAws_json1_1SubnetIds(input.SubnetIds, context) }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
        ...(input.WindowsConfiguration !== undefined &&
            input.WindowsConfiguration !== null && {
            WindowsConfiguration: serializeAws_json1_1CreateFileSystemWindowsConfiguration(input.WindowsConfiguration, context),
        }),
    };
};
const serializeAws_json1_1CreateFileSystemWindowsConfiguration = (input, context) => {
    return {
        ...(input.ActiveDirectoryId !== undefined &&
            input.ActiveDirectoryId !== null && { ActiveDirectoryId: input.ActiveDirectoryId }),
        ...(input.Aliases !== undefined &&
            input.Aliases !== null && { Aliases: serializeAws_json1_1AlternateDNSNames(input.Aliases, context) }),
        ...(input.AutomaticBackupRetentionDays !== undefined &&
            input.AutomaticBackupRetentionDays !== null && {
            AutomaticBackupRetentionDays: input.AutomaticBackupRetentionDays,
        }),
        ...(input.CopyTagsToBackups !== undefined &&
            input.CopyTagsToBackups !== null && { CopyTagsToBackups: input.CopyTagsToBackups }),
        ...(input.DailyAutomaticBackupStartTime !== undefined &&
            input.DailyAutomaticBackupStartTime !== null && {
            DailyAutomaticBackupStartTime: input.DailyAutomaticBackupStartTime,
        }),
        ...(input.DeploymentType !== undefined &&
            input.DeploymentType !== null && { DeploymentType: input.DeploymentType }),
        ...(input.PreferredSubnetId !== undefined &&
            input.PreferredSubnetId !== null && { PreferredSubnetId: input.PreferredSubnetId }),
        ...(input.SelfManagedActiveDirectoryConfiguration !== undefined &&
            input.SelfManagedActiveDirectoryConfiguration !== null && {
            SelfManagedActiveDirectoryConfiguration: serializeAws_json1_1SelfManagedActiveDirectoryConfiguration(input.SelfManagedActiveDirectoryConfiguration, context),
        }),
        ...(input.ThroughputCapacity !== undefined &&
            input.ThroughputCapacity !== null && { ThroughputCapacity: input.ThroughputCapacity }),
        ...(input.WeeklyMaintenanceStartTime !== undefined &&
            input.WeeklyMaintenanceStartTime !== null && { WeeklyMaintenanceStartTime: input.WeeklyMaintenanceStartTime }),
    };
};
const serializeAws_json1_1DataRepositoryTaskFilter = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_json1_1DataRepositoryTaskFilterValues(input.Values, context) }),
    };
};
const serializeAws_json1_1DataRepositoryTaskFilters = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1DataRepositoryTaskFilter(entry, context);
    });
};
const serializeAws_json1_1DataRepositoryTaskFilterValues = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1DataRepositoryTaskPaths = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1DeleteBackupRequest = (input, context) => {
    var _a;
    return {
        ...(input.BackupId !== undefined && input.BackupId !== null && { BackupId: input.BackupId }),
        ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
    };
};
const serializeAws_json1_1DeleteFileSystemLustreConfiguration = (input, context) => {
    return {
        ...(input.FinalBackupTags !== undefined &&
            input.FinalBackupTags !== null && { FinalBackupTags: serializeAws_json1_1Tags(input.FinalBackupTags, context) }),
        ...(input.SkipFinalBackup !== undefined &&
            input.SkipFinalBackup !== null && { SkipFinalBackup: input.SkipFinalBackup }),
    };
};
const serializeAws_json1_1DeleteFileSystemRequest = (input, context) => {
    var _a;
    return {
        ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.FileSystemId !== undefined && input.FileSystemId !== null && { FileSystemId: input.FileSystemId }),
        ...(input.LustreConfiguration !== undefined &&
            input.LustreConfiguration !== null && {
            LustreConfiguration: serializeAws_json1_1DeleteFileSystemLustreConfiguration(input.LustreConfiguration, context),
        }),
        ...(input.WindowsConfiguration !== undefined &&
            input.WindowsConfiguration !== null && {
            WindowsConfiguration: serializeAws_json1_1DeleteFileSystemWindowsConfiguration(input.WindowsConfiguration, context),
        }),
    };
};
const serializeAws_json1_1DeleteFileSystemWindowsConfiguration = (input, context) => {
    return {
        ...(input.FinalBackupTags !== undefined &&
            input.FinalBackupTags !== null && { FinalBackupTags: serializeAws_json1_1Tags(input.FinalBackupTags, context) }),
        ...(input.SkipFinalBackup !== undefined &&
            input.SkipFinalBackup !== null && { SkipFinalBackup: input.SkipFinalBackup }),
    };
};
const serializeAws_json1_1DescribeBackupsRequest = (input, context) => {
    return {
        ...(input.BackupIds !== undefined &&
            input.BackupIds !== null && { BackupIds: serializeAws_json1_1BackupIds(input.BackupIds, context) }),
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1Filters(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribeDataRepositoryTasksRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1DataRepositoryTaskFilters(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.TaskIds !== undefined &&
            input.TaskIds !== null && { TaskIds: serializeAws_json1_1TaskIds(input.TaskIds, context) }),
    };
};
const serializeAws_json1_1DescribeFileSystemAliasesRequest = (input, context) => {
    var _a;
    return {
        ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.FileSystemId !== undefined && input.FileSystemId !== null && { FileSystemId: input.FileSystemId }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribeFileSystemsRequest = (input, context) => {
    return {
        ...(input.FileSystemIds !== undefined &&
            input.FileSystemIds !== null && {
            FileSystemIds: serializeAws_json1_1FileSystemIds(input.FileSystemIds, context),
        }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DisassociateFileSystemAliasesRequest = (input, context) => {
    var _a;
    return {
        ...(input.Aliases !== undefined &&
            input.Aliases !== null && { Aliases: serializeAws_json1_1AlternateDNSNames(input.Aliases, context) }),
        ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.FileSystemId !== undefined && input.FileSystemId !== null && { FileSystemId: input.FileSystemId }),
    };
};
const serializeAws_json1_1DnsIps = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1FileSystemIds = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1Filter = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_json1_1FilterValues(input.Values, context) }),
    };
};
const serializeAws_json1_1Filters = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Filter(entry, context);
    });
};
const serializeAws_json1_1FilterValues = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    };
};
const serializeAws_json1_1SecurityGroupIds = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1SelfManagedActiveDirectoryConfiguration = (input, context) => {
    return {
        ...(input.DnsIps !== undefined &&
            input.DnsIps !== null && { DnsIps: serializeAws_json1_1DnsIps(input.DnsIps, context) }),
        ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
        ...(input.FileSystemAdministratorsGroup !== undefined &&
            input.FileSystemAdministratorsGroup !== null && {
            FileSystemAdministratorsGroup: input.FileSystemAdministratorsGroup,
        }),
        ...(input.OrganizationalUnitDistinguishedName !== undefined &&
            input.OrganizationalUnitDistinguishedName !== null && {
            OrganizationalUnitDistinguishedName: input.OrganizationalUnitDistinguishedName,
        }),
        ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
        ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
    };
};
const serializeAws_json1_1SelfManagedActiveDirectoryConfigurationUpdates = (input, context) => {
    return {
        ...(input.DnsIps !== undefined &&
            input.DnsIps !== null && { DnsIps: serializeAws_json1_1DnsIps(input.DnsIps, context) }),
        ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
        ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
    };
};
const serializeAws_json1_1SubnetIds = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1Tag = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1TagKeys = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1TagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    };
};
const serializeAws_json1_1Tags = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Tag(entry, context);
    });
};
const serializeAws_json1_1TaskIds = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
        ...(input.TagKeys !== undefined &&
            input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeys(input.TagKeys, context) }),
    };
};
const serializeAws_json1_1UpdateFileSystemLustreConfiguration = (input, context) => {
    return {
        ...(input.AutoImportPolicy !== undefined &&
            input.AutoImportPolicy !== null && { AutoImportPolicy: input.AutoImportPolicy }),
        ...(input.AutomaticBackupRetentionDays !== undefined &&
            input.AutomaticBackupRetentionDays !== null && {
            AutomaticBackupRetentionDays: input.AutomaticBackupRetentionDays,
        }),
        ...(input.DailyAutomaticBackupStartTime !== undefined &&
            input.DailyAutomaticBackupStartTime !== null && {
            DailyAutomaticBackupStartTime: input.DailyAutomaticBackupStartTime,
        }),
        ...(input.DataCompressionType !== undefined &&
            input.DataCompressionType !== null && { DataCompressionType: input.DataCompressionType }),
        ...(input.WeeklyMaintenanceStartTime !== undefined &&
            input.WeeklyMaintenanceStartTime !== null && { WeeklyMaintenanceStartTime: input.WeeklyMaintenanceStartTime }),
    };
};
const serializeAws_json1_1UpdateFileSystemRequest = (input, context) => {
    var _a;
    return {
        ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.FileSystemId !== undefined && input.FileSystemId !== null && { FileSystemId: input.FileSystemId }),
        ...(input.LustreConfiguration !== undefined &&
            input.LustreConfiguration !== null && {
            LustreConfiguration: serializeAws_json1_1UpdateFileSystemLustreConfiguration(input.LustreConfiguration, context),
        }),
        ...(input.StorageCapacity !== undefined &&
            input.StorageCapacity !== null && { StorageCapacity: input.StorageCapacity }),
        ...(input.WindowsConfiguration !== undefined &&
            input.WindowsConfiguration !== null && {
            WindowsConfiguration: serializeAws_json1_1UpdateFileSystemWindowsConfiguration(input.WindowsConfiguration, context),
        }),
    };
};
const serializeAws_json1_1UpdateFileSystemWindowsConfiguration = (input, context) => {
    return {
        ...(input.AutomaticBackupRetentionDays !== undefined &&
            input.AutomaticBackupRetentionDays !== null && {
            AutomaticBackupRetentionDays: input.AutomaticBackupRetentionDays,
        }),
        ...(input.DailyAutomaticBackupStartTime !== undefined &&
            input.DailyAutomaticBackupStartTime !== null && {
            DailyAutomaticBackupStartTime: input.DailyAutomaticBackupStartTime,
        }),
        ...(input.SelfManagedActiveDirectoryConfiguration !== undefined &&
            input.SelfManagedActiveDirectoryConfiguration !== null && {
            SelfManagedActiveDirectoryConfiguration: serializeAws_json1_1SelfManagedActiveDirectoryConfigurationUpdates(input.SelfManagedActiveDirectoryConfiguration, context),
        }),
        ...(input.ThroughputCapacity !== undefined &&
            input.ThroughputCapacity !== null && { ThroughputCapacity: input.ThroughputCapacity }),
        ...(input.WeeklyMaintenanceStartTime !== undefined &&
            input.WeeklyMaintenanceStartTime !== null && { WeeklyMaintenanceStartTime: input.WeeklyMaintenanceStartTime }),
    };
};
const deserializeAws_json1_1ActiveDirectoryBackupAttributes = (output, context) => {
    return {
        ActiveDirectoryId: output.ActiveDirectoryId !== undefined && output.ActiveDirectoryId !== null
            ? output.ActiveDirectoryId
            : undefined,
        DomainName: output.DomainName !== undefined && output.DomainName !== null ? output.DomainName : undefined,
        ResourceARN: output.ResourceARN !== undefined && output.ResourceARN !== null ? output.ResourceARN : undefined,
    };
};
const deserializeAws_json1_1ActiveDirectoryError = (output, context) => {
    return {
        ActiveDirectoryId: output.ActiveDirectoryId !== undefined && output.ActiveDirectoryId !== null
            ? output.ActiveDirectoryId
            : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1AdministrativeAction = (output, context) => {
    return {
        AdministrativeActionType: output.AdministrativeActionType !== undefined && output.AdministrativeActionType !== null
            ? output.AdministrativeActionType
            : undefined,
        FailureDetails: output.FailureDetails !== undefined && output.FailureDetails !== null
            ? deserializeAws_json1_1AdministrativeActionFailureDetails(output.FailureDetails, context)
            : undefined,
        ProgressPercent: output.ProgressPercent !== undefined && output.ProgressPercent !== null ? output.ProgressPercent : undefined,
        RequestTime: output.RequestTime !== undefined && output.RequestTime !== null
            ? new Date(Math.round(output.RequestTime * 1000))
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        TargetFileSystemValues: output.TargetFileSystemValues !== undefined && output.TargetFileSystemValues !== null
            ? deserializeAws_json1_1FileSystem(output.TargetFileSystemValues, context)
            : undefined,
    };
};
const deserializeAws_json1_1AdministrativeActionFailureDetails = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1AdministrativeActions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AdministrativeAction(entry, context);
    });
};
const deserializeAws_json1_1Alias = (output, context) => {
    return {
        Lifecycle: output.Lifecycle !== undefined && output.Lifecycle !== null ? output.Lifecycle : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1Aliases = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Alias(entry, context);
    });
};
const deserializeAws_json1_1AssociateFileSystemAliasesResponse = (output, context) => {
    return {
        Aliases: output.Aliases !== undefined && output.Aliases !== null
            ? deserializeAws_json1_1Aliases(output.Aliases, context)
            : undefined,
    };
};
const deserializeAws_json1_1Backup = (output, context) => {
    return {
        BackupId: output.BackupId !== undefined && output.BackupId !== null ? output.BackupId : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        DirectoryInformation: output.DirectoryInformation !== undefined && output.DirectoryInformation !== null
            ? deserializeAws_json1_1ActiveDirectoryBackupAttributes(output.DirectoryInformation, context)
            : undefined,
        FailureDetails: output.FailureDetails !== undefined && output.FailureDetails !== null
            ? deserializeAws_json1_1BackupFailureDetails(output.FailureDetails, context)
            : undefined,
        FileSystem: output.FileSystem !== undefined && output.FileSystem !== null
            ? deserializeAws_json1_1FileSystem(output.FileSystem, context)
            : undefined,
        KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
        Lifecycle: output.Lifecycle !== undefined && output.Lifecycle !== null ? output.Lifecycle : undefined,
        OwnerId: output.OwnerId !== undefined && output.OwnerId !== null ? output.OwnerId : undefined,
        ProgressPercent: output.ProgressPercent !== undefined && output.ProgressPercent !== null ? output.ProgressPercent : undefined,
        ResourceARN: output.ResourceARN !== undefined && output.ResourceARN !== null ? output.ResourceARN : undefined,
        SourceBackupId: output.SourceBackupId !== undefined && output.SourceBackupId !== null ? output.SourceBackupId : undefined,
        SourceBackupRegion: output.SourceBackupRegion !== undefined && output.SourceBackupRegion !== null
            ? output.SourceBackupRegion
            : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1BackupBeingCopied = (output, context) => {
    return {
        BackupId: output.BackupId !== undefined && output.BackupId !== null ? output.BackupId : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1BackupFailureDetails = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1BackupInProgress = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1BackupNotFound = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1BackupRestoring = (output, context) => {
    return {
        FileSystemId: output.FileSystemId !== undefined && output.FileSystemId !== null ? output.FileSystemId : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1Backups = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Backup(entry, context);
    });
};
const deserializeAws_json1_1BadRequest = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1CancelDataRepositoryTaskResponse = (output, context) => {
    return {
        Lifecycle: output.Lifecycle !== undefined && output.Lifecycle !== null ? output.Lifecycle : undefined,
        TaskId: output.TaskId !== undefined && output.TaskId !== null ? output.TaskId : undefined,
    };
};
const deserializeAws_json1_1CompletionReport = (output, context) => {
    return {
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
        Format: output.Format !== undefined && output.Format !== null ? output.Format : undefined,
        Path: output.Path !== undefined && output.Path !== null ? output.Path : undefined,
        Scope: output.Scope !== undefined && output.Scope !== null ? output.Scope : undefined,
    };
};
const deserializeAws_json1_1CopyBackupResponse = (output, context) => {
    return {
        Backup: output.Backup !== undefined && output.Backup !== null
            ? deserializeAws_json1_1Backup(output.Backup, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateBackupResponse = (output, context) => {
    return {
        Backup: output.Backup !== undefined && output.Backup !== null
            ? deserializeAws_json1_1Backup(output.Backup, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateDataRepositoryTaskResponse = (output, context) => {
    return {
        DataRepositoryTask: output.DataRepositoryTask !== undefined && output.DataRepositoryTask !== null
            ? deserializeAws_json1_1DataRepositoryTask(output.DataRepositoryTask, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateFileSystemFromBackupResponse = (output, context) => {
    return {
        FileSystem: output.FileSystem !== undefined && output.FileSystem !== null
            ? deserializeAws_json1_1FileSystem(output.FileSystem, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateFileSystemResponse = (output, context) => {
    return {
        FileSystem: output.FileSystem !== undefined && output.FileSystem !== null
            ? deserializeAws_json1_1FileSystem(output.FileSystem, context)
            : undefined,
    };
};
const deserializeAws_json1_1DataRepositoryConfiguration = (output, context) => {
    return {
        AutoImportPolicy: output.AutoImportPolicy !== undefined && output.AutoImportPolicy !== null ? output.AutoImportPolicy : undefined,
        ExportPath: output.ExportPath !== undefined && output.ExportPath !== null ? output.ExportPath : undefined,
        FailureDetails: output.FailureDetails !== undefined && output.FailureDetails !== null
            ? deserializeAws_json1_1DataRepositoryFailureDetails(output.FailureDetails, context)
            : undefined,
        ImportPath: output.ImportPath !== undefined && output.ImportPath !== null ? output.ImportPath : undefined,
        ImportedFileChunkSize: output.ImportedFileChunkSize !== undefined && output.ImportedFileChunkSize !== null
            ? output.ImportedFileChunkSize
            : undefined,
        Lifecycle: output.Lifecycle !== undefined && output.Lifecycle !== null ? output.Lifecycle : undefined,
    };
};
const deserializeAws_json1_1DataRepositoryFailureDetails = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1DataRepositoryTask = (output, context) => {
    return {
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        EndTime: output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
        FailureDetails: output.FailureDetails !== undefined && output.FailureDetails !== null
            ? deserializeAws_json1_1DataRepositoryTaskFailureDetails(output.FailureDetails, context)
            : undefined,
        FileSystemId: output.FileSystemId !== undefined && output.FileSystemId !== null ? output.FileSystemId : undefined,
        Lifecycle: output.Lifecycle !== undefined && output.Lifecycle !== null ? output.Lifecycle : undefined,
        Paths: output.Paths !== undefined && output.Paths !== null
            ? deserializeAws_json1_1DataRepositoryTaskPaths(output.Paths, context)
            : undefined,
        Report: output.Report !== undefined && output.Report !== null
            ? deserializeAws_json1_1CompletionReport(output.Report, context)
            : undefined,
        ResourceARN: output.ResourceARN !== undefined && output.ResourceARN !== null ? output.ResourceARN : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? new Date(Math.round(output.StartTime * 1000))
            : undefined,
        Status: output.Status !== undefined && output.Status !== null
            ? deserializeAws_json1_1DataRepositoryTaskStatus(output.Status, context)
            : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
        TaskId: output.TaskId !== undefined && output.TaskId !== null ? output.TaskId : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1DataRepositoryTaskEnded = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1DataRepositoryTaskExecuting = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1DataRepositoryTaskFailureDetails = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1DataRepositoryTaskNotFound = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1DataRepositoryTaskPaths = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1DataRepositoryTasks = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DataRepositoryTask(entry, context);
    });
};
const deserializeAws_json1_1DataRepositoryTaskStatus = (output, context) => {
    return {
        FailedCount: output.FailedCount !== undefined && output.FailedCount !== null ? output.FailedCount : undefined,
        LastUpdatedTime: output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
            ? new Date(Math.round(output.LastUpdatedTime * 1000))
            : undefined,
        SucceededCount: output.SucceededCount !== undefined && output.SucceededCount !== null ? output.SucceededCount : undefined,
        TotalCount: output.TotalCount !== undefined && output.TotalCount !== null ? output.TotalCount : undefined,
    };
};
const deserializeAws_json1_1DeleteBackupResponse = (output, context) => {
    return {
        BackupId: output.BackupId !== undefined && output.BackupId !== null ? output.BackupId : undefined,
        Lifecycle: output.Lifecycle !== undefined && output.Lifecycle !== null ? output.Lifecycle : undefined,
    };
};
const deserializeAws_json1_1DeleteFileSystemLustreResponse = (output, context) => {
    return {
        FinalBackupId: output.FinalBackupId !== undefined && output.FinalBackupId !== null ? output.FinalBackupId : undefined,
        FinalBackupTags: output.FinalBackupTags !== undefined && output.FinalBackupTags !== null
            ? deserializeAws_json1_1Tags(output.FinalBackupTags, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteFileSystemResponse = (output, context) => {
    return {
        FileSystemId: output.FileSystemId !== undefined && output.FileSystemId !== null ? output.FileSystemId : undefined,
        Lifecycle: output.Lifecycle !== undefined && output.Lifecycle !== null ? output.Lifecycle : undefined,
        LustreResponse: output.LustreResponse !== undefined && output.LustreResponse !== null
            ? deserializeAws_json1_1DeleteFileSystemLustreResponse(output.LustreResponse, context)
            : undefined,
        WindowsResponse: output.WindowsResponse !== undefined && output.WindowsResponse !== null
            ? deserializeAws_json1_1DeleteFileSystemWindowsResponse(output.WindowsResponse, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteFileSystemWindowsResponse = (output, context) => {
    return {
        FinalBackupId: output.FinalBackupId !== undefined && output.FinalBackupId !== null ? output.FinalBackupId : undefined,
        FinalBackupTags: output.FinalBackupTags !== undefined && output.FinalBackupTags !== null
            ? deserializeAws_json1_1Tags(output.FinalBackupTags, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeBackupsResponse = (output, context) => {
    return {
        Backups: output.Backups !== undefined && output.Backups !== null
            ? deserializeAws_json1_1Backups(output.Backups, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeDataRepositoryTasksResponse = (output, context) => {
    return {
        DataRepositoryTasks: output.DataRepositoryTasks !== undefined && output.DataRepositoryTasks !== null
            ? deserializeAws_json1_1DataRepositoryTasks(output.DataRepositoryTasks, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeFileSystemAliasesResponse = (output, context) => {
    return {
        Aliases: output.Aliases !== undefined && output.Aliases !== null
            ? deserializeAws_json1_1Aliases(output.Aliases, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeFileSystemsResponse = (output, context) => {
    return {
        FileSystems: output.FileSystems !== undefined && output.FileSystems !== null
            ? deserializeAws_json1_1FileSystems(output.FileSystems, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1DisassociateFileSystemAliasesResponse = (output, context) => {
    return {
        Aliases: output.Aliases !== undefined && output.Aliases !== null
            ? deserializeAws_json1_1Aliases(output.Aliases, context)
            : undefined,
    };
};
const deserializeAws_json1_1DnsIps = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1FileSystem = (output, context) => {
    return {
        AdministrativeActions: output.AdministrativeActions !== undefined && output.AdministrativeActions !== null
            ? deserializeAws_json1_1AdministrativeActions(output.AdministrativeActions, context)
            : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        DNSName: output.DNSName !== undefined && output.DNSName !== null ? output.DNSName : undefined,
        FailureDetails: output.FailureDetails !== undefined && output.FailureDetails !== null
            ? deserializeAws_json1_1FileSystemFailureDetails(output.FailureDetails, context)
            : undefined,
        FileSystemId: output.FileSystemId !== undefined && output.FileSystemId !== null ? output.FileSystemId : undefined,
        FileSystemType: output.FileSystemType !== undefined && output.FileSystemType !== null ? output.FileSystemType : undefined,
        KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
        Lifecycle: output.Lifecycle !== undefined && output.Lifecycle !== null ? output.Lifecycle : undefined,
        LustreConfiguration: output.LustreConfiguration !== undefined && output.LustreConfiguration !== null
            ? deserializeAws_json1_1LustreFileSystemConfiguration(output.LustreConfiguration, context)
            : undefined,
        NetworkInterfaceIds: output.NetworkInterfaceIds !== undefined && output.NetworkInterfaceIds !== null
            ? deserializeAws_json1_1NetworkInterfaceIds(output.NetworkInterfaceIds, context)
            : undefined,
        OwnerId: output.OwnerId !== undefined && output.OwnerId !== null ? output.OwnerId : undefined,
        ResourceARN: output.ResourceARN !== undefined && output.ResourceARN !== null ? output.ResourceARN : undefined,
        StorageCapacity: output.StorageCapacity !== undefined && output.StorageCapacity !== null ? output.StorageCapacity : undefined,
        StorageType: output.StorageType !== undefined && output.StorageType !== null ? output.StorageType : undefined,
        SubnetIds: output.SubnetIds !== undefined && output.SubnetIds !== null
            ? deserializeAws_json1_1SubnetIds(output.SubnetIds, context)
            : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
        VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
        WindowsConfiguration: output.WindowsConfiguration !== undefined && output.WindowsConfiguration !== null
            ? deserializeAws_json1_1WindowsFileSystemConfiguration(output.WindowsConfiguration, context)
            : undefined,
    };
};
const deserializeAws_json1_1FileSystemFailureDetails = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1FileSystemMaintenanceOperations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1FileSystemNotFound = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1FileSystems = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FileSystem(entry, context);
    });
};
const deserializeAws_json1_1IncompatibleParameterError = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        Parameter: output.Parameter !== undefined && output.Parameter !== null ? output.Parameter : undefined,
    };
};
const deserializeAws_json1_1IncompatibleRegionForMultiAZ = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InternalServerError = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidDestinationKmsKey = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidExportPath = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidImportPath = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidNetworkSettings = (output, context) => {
    return {
        InvalidSecurityGroupId: output.InvalidSecurityGroupId !== undefined && output.InvalidSecurityGroupId !== null
            ? output.InvalidSecurityGroupId
            : undefined,
        InvalidSubnetId: output.InvalidSubnetId !== undefined && output.InvalidSubnetId !== null ? output.InvalidSubnetId : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidPerUnitStorageThroughput = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidRegion = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidSourceKmsKey = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    };
};
const deserializeAws_json1_1LustreFileSystemConfiguration = (output, context) => {
    return {
        AutomaticBackupRetentionDays: output.AutomaticBackupRetentionDays !== undefined && output.AutomaticBackupRetentionDays !== null
            ? output.AutomaticBackupRetentionDays
            : undefined,
        CopyTagsToBackups: output.CopyTagsToBackups !== undefined && output.CopyTagsToBackups !== null
            ? output.CopyTagsToBackups
            : undefined,
        DailyAutomaticBackupStartTime: output.DailyAutomaticBackupStartTime !== undefined && output.DailyAutomaticBackupStartTime !== null
            ? output.DailyAutomaticBackupStartTime
            : undefined,
        DataCompressionType: output.DataCompressionType !== undefined && output.DataCompressionType !== null
            ? output.DataCompressionType
            : undefined,
        DataRepositoryConfiguration: output.DataRepositoryConfiguration !== undefined && output.DataRepositoryConfiguration !== null
            ? deserializeAws_json1_1DataRepositoryConfiguration(output.DataRepositoryConfiguration, context)
            : undefined,
        DeploymentType: output.DeploymentType !== undefined && output.DeploymentType !== null ? output.DeploymentType : undefined,
        DriveCacheType: output.DriveCacheType !== undefined && output.DriveCacheType !== null ? output.DriveCacheType : undefined,
        MountName: output.MountName !== undefined && output.MountName !== null ? output.MountName : undefined,
        PerUnitStorageThroughput: output.PerUnitStorageThroughput !== undefined && output.PerUnitStorageThroughput !== null
            ? output.PerUnitStorageThroughput
            : undefined,
        WeeklyMaintenanceStartTime: output.WeeklyMaintenanceStartTime !== undefined && output.WeeklyMaintenanceStartTime !== null
            ? output.WeeklyMaintenanceStartTime
            : undefined,
    };
};
const deserializeAws_json1_1MissingFileSystemConfiguration = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1NetworkInterfaceIds = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1NotServiceResourceError = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        ResourceARN: output.ResourceARN !== undefined && output.ResourceARN !== null ? output.ResourceARN : undefined,
    };
};
const deserializeAws_json1_1ResourceDoesNotSupportTagging = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        ResourceARN: output.ResourceARN !== undefined && output.ResourceARN !== null ? output.ResourceARN : undefined,
    };
};
const deserializeAws_json1_1ResourceNotFound = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        ResourceARN: output.ResourceARN !== undefined && output.ResourceARN !== null ? output.ResourceARN : undefined,
    };
};
const deserializeAws_json1_1SelfManagedActiveDirectoryAttributes = (output, context) => {
    return {
        DnsIps: output.DnsIps !== undefined && output.DnsIps !== null
            ? deserializeAws_json1_1DnsIps(output.DnsIps, context)
            : undefined,
        DomainName: output.DomainName !== undefined && output.DomainName !== null ? output.DomainName : undefined,
        FileSystemAdministratorsGroup: output.FileSystemAdministratorsGroup !== undefined && output.FileSystemAdministratorsGroup !== null
            ? output.FileSystemAdministratorsGroup
            : undefined,
        OrganizationalUnitDistinguishedName: output.OrganizationalUnitDistinguishedName !== undefined && output.OrganizationalUnitDistinguishedName !== null
            ? output.OrganizationalUnitDistinguishedName
            : undefined,
        UserName: output.UserName !== undefined && output.UserName !== null ? output.UserName : undefined,
    };
};
const deserializeAws_json1_1ServiceLimitExceeded = (output, context) => {
    return {
        Limit: output.Limit !== undefined && output.Limit !== null ? output.Limit : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1SourceBackupUnavailable = (output, context) => {
    return {
        BackupId: output.BackupId !== undefined && output.BackupId !== null ? output.BackupId : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1SubnetIds = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1Tag = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1TagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1Tags = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Tag(entry, context);
    });
};
const deserializeAws_json1_1UnsupportedOperation = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateFileSystemResponse = (output, context) => {
    return {
        FileSystem: output.FileSystem !== undefined && output.FileSystem !== null
            ? deserializeAws_json1_1FileSystem(output.FileSystem, context)
            : undefined,
    };
};
const deserializeAws_json1_1WindowsFileSystemConfiguration = (output, context) => {
    return {
        ActiveDirectoryId: output.ActiveDirectoryId !== undefined && output.ActiveDirectoryId !== null
            ? output.ActiveDirectoryId
            : undefined,
        Aliases: output.Aliases !== undefined && output.Aliases !== null
            ? deserializeAws_json1_1Aliases(output.Aliases, context)
            : undefined,
        AutomaticBackupRetentionDays: output.AutomaticBackupRetentionDays !== undefined && output.AutomaticBackupRetentionDays !== null
            ? output.AutomaticBackupRetentionDays
            : undefined,
        CopyTagsToBackups: output.CopyTagsToBackups !== undefined && output.CopyTagsToBackups !== null
            ? output.CopyTagsToBackups
            : undefined,
        DailyAutomaticBackupStartTime: output.DailyAutomaticBackupStartTime !== undefined && output.DailyAutomaticBackupStartTime !== null
            ? output.DailyAutomaticBackupStartTime
            : undefined,
        DeploymentType: output.DeploymentType !== undefined && output.DeploymentType !== null ? output.DeploymentType : undefined,
        MaintenanceOperationsInProgress: output.MaintenanceOperationsInProgress !== undefined && output.MaintenanceOperationsInProgress !== null
            ? deserializeAws_json1_1FileSystemMaintenanceOperations(output.MaintenanceOperationsInProgress, context)
            : undefined,
        PreferredFileServerIp: output.PreferredFileServerIp !== undefined && output.PreferredFileServerIp !== null
            ? output.PreferredFileServerIp
            : undefined,
        PreferredSubnetId: output.PreferredSubnetId !== undefined && output.PreferredSubnetId !== null
            ? output.PreferredSubnetId
            : undefined,
        RemoteAdministrationEndpoint: output.RemoteAdministrationEndpoint !== undefined && output.RemoteAdministrationEndpoint !== null
            ? output.RemoteAdministrationEndpoint
            : undefined,
        SelfManagedActiveDirectoryConfiguration: output.SelfManagedActiveDirectoryConfiguration !== undefined &&
            output.SelfManagedActiveDirectoryConfiguration !== null
            ? deserializeAws_json1_1SelfManagedActiveDirectoryAttributes(output.SelfManagedActiveDirectoryConfiguration, context)
            : undefined,
        ThroughputCapacity: output.ThroughputCapacity !== undefined && output.ThroughputCapacity !== null
            ? output.ThroughputCapacity
            : undefined,
        WeeklyMaintenanceStartTime: output.WeeklyMaintenanceStartTime !== undefined && output.WeeklyMaintenanceStartTime !== null
            ? output.WeeklyMaintenanceStartTime
            : undefined,
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