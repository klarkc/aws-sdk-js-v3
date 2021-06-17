"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1UpdateServerEngineAttributesCommand = exports.deserializeAws_json1_1UpdateServerCommand = exports.deserializeAws_json1_1UntagResourceCommand = exports.deserializeAws_json1_1TagResourceCommand = exports.deserializeAws_json1_1StartMaintenanceCommand = exports.deserializeAws_json1_1RestoreServerCommand = exports.deserializeAws_json1_1ListTagsForResourceCommand = exports.deserializeAws_json1_1ExportServerEngineAttributeCommand = exports.deserializeAws_json1_1DisassociateNodeCommand = exports.deserializeAws_json1_1DescribeServersCommand = exports.deserializeAws_json1_1DescribeNodeAssociationStatusCommand = exports.deserializeAws_json1_1DescribeEventsCommand = exports.deserializeAws_json1_1DescribeBackupsCommand = exports.deserializeAws_json1_1DescribeAccountAttributesCommand = exports.deserializeAws_json1_1DeleteServerCommand = exports.deserializeAws_json1_1DeleteBackupCommand = exports.deserializeAws_json1_1CreateServerCommand = exports.deserializeAws_json1_1CreateBackupCommand = exports.deserializeAws_json1_1AssociateNodeCommand = exports.serializeAws_json1_1UpdateServerEngineAttributesCommand = exports.serializeAws_json1_1UpdateServerCommand = exports.serializeAws_json1_1UntagResourceCommand = exports.serializeAws_json1_1TagResourceCommand = exports.serializeAws_json1_1StartMaintenanceCommand = exports.serializeAws_json1_1RestoreServerCommand = exports.serializeAws_json1_1ListTagsForResourceCommand = exports.serializeAws_json1_1ExportServerEngineAttributeCommand = exports.serializeAws_json1_1DisassociateNodeCommand = exports.serializeAws_json1_1DescribeServersCommand = exports.serializeAws_json1_1DescribeNodeAssociationStatusCommand = exports.serializeAws_json1_1DescribeEventsCommand = exports.serializeAws_json1_1DescribeBackupsCommand = exports.serializeAws_json1_1DescribeAccountAttributesCommand = exports.serializeAws_json1_1DeleteServerCommand = exports.serializeAws_json1_1DeleteBackupCommand = exports.serializeAws_json1_1CreateServerCommand = exports.serializeAws_json1_1CreateBackupCommand = exports.serializeAws_json1_1AssociateNodeCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1AssociateNodeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorksCM_V2016_11_01.AssociateNode",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateNodeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociateNodeCommand = serializeAws_json1_1AssociateNodeCommand;
const serializeAws_json1_1CreateBackupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorksCM_V2016_11_01.CreateBackup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateBackupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateBackupCommand = serializeAws_json1_1CreateBackupCommand;
const serializeAws_json1_1CreateServerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorksCM_V2016_11_01.CreateServer",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateServerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateServerCommand = serializeAws_json1_1CreateServerCommand;
const serializeAws_json1_1DeleteBackupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorksCM_V2016_11_01.DeleteBackup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteBackupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteBackupCommand = serializeAws_json1_1DeleteBackupCommand;
const serializeAws_json1_1DeleteServerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorksCM_V2016_11_01.DeleteServer",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteServerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteServerCommand = serializeAws_json1_1DeleteServerCommand;
const serializeAws_json1_1DescribeAccountAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorksCM_V2016_11_01.DescribeAccountAttributes",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAccountAttributesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeAccountAttributesCommand = serializeAws_json1_1DescribeAccountAttributesCommand;
const serializeAws_json1_1DescribeBackupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorksCM_V2016_11_01.DescribeBackups",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeBackupsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeBackupsCommand = serializeAws_json1_1DescribeBackupsCommand;
const serializeAws_json1_1DescribeEventsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorksCM_V2016_11_01.DescribeEvents",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEventsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeEventsCommand = serializeAws_json1_1DescribeEventsCommand;
const serializeAws_json1_1DescribeNodeAssociationStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorksCM_V2016_11_01.DescribeNodeAssociationStatus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeNodeAssociationStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeNodeAssociationStatusCommand = serializeAws_json1_1DescribeNodeAssociationStatusCommand;
const serializeAws_json1_1DescribeServersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorksCM_V2016_11_01.DescribeServers",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeServersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeServersCommand = serializeAws_json1_1DescribeServersCommand;
const serializeAws_json1_1DisassociateNodeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorksCM_V2016_11_01.DisassociateNode",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateNodeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisassociateNodeCommand = serializeAws_json1_1DisassociateNodeCommand;
const serializeAws_json1_1ExportServerEngineAttributeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorksCM_V2016_11_01.ExportServerEngineAttribute",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ExportServerEngineAttributeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ExportServerEngineAttributeCommand = serializeAws_json1_1ExportServerEngineAttributeCommand;
const serializeAws_json1_1ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorksCM_V2016_11_01.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
const serializeAws_json1_1RestoreServerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorksCM_V2016_11_01.RestoreServer",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RestoreServerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RestoreServerCommand = serializeAws_json1_1RestoreServerCommand;
const serializeAws_json1_1StartMaintenanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorksCM_V2016_11_01.StartMaintenance",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartMaintenanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartMaintenanceCommand = serializeAws_json1_1StartMaintenanceCommand;
const serializeAws_json1_1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorksCM_V2016_11_01.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorksCM_V2016_11_01.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
const serializeAws_json1_1UpdateServerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorksCM_V2016_11_01.UpdateServer",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateServerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateServerCommand = serializeAws_json1_1UpdateServerCommand;
const serializeAws_json1_1UpdateServerEngineAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorksCM_V2016_11_01.UpdateServerEngineAttributes",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateServerEngineAttributesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateServerEngineAttributesCommand = serializeAws_json1_1UpdateServerEngineAttributesCommand;
const deserializeAws_json1_1AssociateNodeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AssociateNodeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateNodeResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssociateNodeCommand = deserializeAws_json1_1AssociateNodeCommand;
const deserializeAws_json1_1AssociateNodeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidStateException":
        case "com.amazonaws.opsworkscm#InvalidStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworkscm#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworkscm#ValidationException":
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
        case "InvalidStateException":
        case "com.amazonaws.opsworkscm#InvalidStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.opsworkscm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworkscm#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworkscm#ValidationException":
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
const deserializeAws_json1_1CreateServerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateServerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateServerResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateServerCommand = deserializeAws_json1_1CreateServerCommand;
const deserializeAws_json1_1CreateServerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.opsworkscm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.opsworkscm#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworkscm#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworkscm#ValidationException":
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
        case "InvalidStateException":
        case "com.amazonaws.opsworkscm#InvalidStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworkscm#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworkscm#ValidationException":
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
const deserializeAws_json1_1DeleteServerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteServerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteServerResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteServerCommand = deserializeAws_json1_1DeleteServerCommand;
const deserializeAws_json1_1DeleteServerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidStateException":
        case "com.amazonaws.opsworkscm#InvalidStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworkscm#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworkscm#ValidationException":
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
const deserializeAws_json1_1DescribeAccountAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeAccountAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAccountAttributesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeAccountAttributesCommand = deserializeAws_json1_1DescribeAccountAttributesCommand;
const deserializeAws_json1_1DescribeAccountAttributesCommandError = async (output, context) => {
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
        case "InvalidNextTokenException":
        case "com.amazonaws.opsworkscm#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworkscm#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworkscm#ValidationException":
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
const deserializeAws_json1_1DescribeEventsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeEventsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEventsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeEventsCommand = deserializeAws_json1_1DescribeEventsCommand;
const deserializeAws_json1_1DescribeEventsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.opsworkscm#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworkscm#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworkscm#ValidationException":
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
const deserializeAws_json1_1DescribeNodeAssociationStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeNodeAssociationStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeNodeAssociationStatusResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeNodeAssociationStatusCommand = deserializeAws_json1_1DescribeNodeAssociationStatusCommand;
const deserializeAws_json1_1DescribeNodeAssociationStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworkscm#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworkscm#ValidationException":
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
const deserializeAws_json1_1DescribeServersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeServersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeServersResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeServersCommand = deserializeAws_json1_1DescribeServersCommand;
const deserializeAws_json1_1DescribeServersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.opsworkscm#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworkscm#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworkscm#ValidationException":
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
const deserializeAws_json1_1DisassociateNodeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisassociateNodeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateNodeResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisassociateNodeCommand = deserializeAws_json1_1DisassociateNodeCommand;
const deserializeAws_json1_1DisassociateNodeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidStateException":
        case "com.amazonaws.opsworkscm#InvalidStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworkscm#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworkscm#ValidationException":
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
const deserializeAws_json1_1ExportServerEngineAttributeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ExportServerEngineAttributeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ExportServerEngineAttributeResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ExportServerEngineAttributeCommand = deserializeAws_json1_1ExportServerEngineAttributeCommand;
const deserializeAws_json1_1ExportServerEngineAttributeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidStateException":
        case "com.amazonaws.opsworkscm#InvalidStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworkscm#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworkscm#ValidationException":
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
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworkscm#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworkscm#ValidationException":
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
const deserializeAws_json1_1RestoreServerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RestoreServerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RestoreServerResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RestoreServerCommand = deserializeAws_json1_1RestoreServerCommand;
const deserializeAws_json1_1RestoreServerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidStateException":
        case "com.amazonaws.opsworkscm#InvalidStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworkscm#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworkscm#ValidationException":
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
const deserializeAws_json1_1StartMaintenanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartMaintenanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartMaintenanceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartMaintenanceCommand = deserializeAws_json1_1StartMaintenanceCommand;
const deserializeAws_json1_1StartMaintenanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidStateException":
        case "com.amazonaws.opsworkscm#InvalidStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworkscm#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworkscm#ValidationException":
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
        case "InvalidStateException":
        case "com.amazonaws.opsworkscm#InvalidStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworkscm#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworkscm#ValidationException":
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
        case "InvalidStateException":
        case "com.amazonaws.opsworkscm#InvalidStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworkscm#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworkscm#ValidationException":
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
const deserializeAws_json1_1UpdateServerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateServerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateServerResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateServerCommand = deserializeAws_json1_1UpdateServerCommand;
const deserializeAws_json1_1UpdateServerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidStateException":
        case "com.amazonaws.opsworkscm#InvalidStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworkscm#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworkscm#ValidationException":
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
const deserializeAws_json1_1UpdateServerEngineAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateServerEngineAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateServerEngineAttributesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateServerEngineAttributesCommand = deserializeAws_json1_1UpdateServerEngineAttributesCommand;
const deserializeAws_json1_1UpdateServerEngineAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidStateException":
        case "com.amazonaws.opsworkscm#InvalidStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworkscm#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworkscm#ValidationException":
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
const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidNextTokenException(body, context);
    const contents = {
        name: "InvalidNextTokenException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidStateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidStateException(body, context);
    const contents = {
        name: "InvalidStateException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const contents = {
        name: "LimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceAlreadyExistsException(body, context);
    const contents = {
        name: "ResourceAlreadyExistsException",
        $fault: "client",
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
const serializeAws_json1_1AssociateNodeRequest = (input, context) => {
    return {
        ...(input.EngineAttributes !== undefined &&
            input.EngineAttributes !== null && {
            EngineAttributes: serializeAws_json1_1EngineAttributes(input.EngineAttributes, context),
        }),
        ...(input.NodeName !== undefined && input.NodeName !== null && { NodeName: input.NodeName }),
        ...(input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName }),
    };
};
const serializeAws_json1_1CreateBackupRequest = (input, context) => {
    return {
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateServerRequest = (input, context) => {
    return {
        ...(input.AssociatePublicIpAddress !== undefined &&
            input.AssociatePublicIpAddress !== null && { AssociatePublicIpAddress: input.AssociatePublicIpAddress }),
        ...(input.BackupId !== undefined && input.BackupId !== null && { BackupId: input.BackupId }),
        ...(input.BackupRetentionCount !== undefined &&
            input.BackupRetentionCount !== null && { BackupRetentionCount: input.BackupRetentionCount }),
        ...(input.CustomCertificate !== undefined &&
            input.CustomCertificate !== null && { CustomCertificate: input.CustomCertificate }),
        ...(input.CustomDomain !== undefined && input.CustomDomain !== null && { CustomDomain: input.CustomDomain }),
        ...(input.CustomPrivateKey !== undefined &&
            input.CustomPrivateKey !== null && { CustomPrivateKey: input.CustomPrivateKey }),
        ...(input.DisableAutomatedBackup !== undefined &&
            input.DisableAutomatedBackup !== null && { DisableAutomatedBackup: input.DisableAutomatedBackup }),
        ...(input.Engine !== undefined && input.Engine !== null && { Engine: input.Engine }),
        ...(input.EngineAttributes !== undefined &&
            input.EngineAttributes !== null && {
            EngineAttributes: serializeAws_json1_1EngineAttributes(input.EngineAttributes, context),
        }),
        ...(input.EngineModel !== undefined && input.EngineModel !== null && { EngineModel: input.EngineModel }),
        ...(input.EngineVersion !== undefined && input.EngineVersion !== null && { EngineVersion: input.EngineVersion }),
        ...(input.InstanceProfileArn !== undefined &&
            input.InstanceProfileArn !== null && { InstanceProfileArn: input.InstanceProfileArn }),
        ...(input.InstanceType !== undefined && input.InstanceType !== null && { InstanceType: input.InstanceType }),
        ...(input.KeyPair !== undefined && input.KeyPair !== null && { KeyPair: input.KeyPair }),
        ...(input.PreferredBackupWindow !== undefined &&
            input.PreferredBackupWindow !== null && { PreferredBackupWindow: input.PreferredBackupWindow }),
        ...(input.PreferredMaintenanceWindow !== undefined &&
            input.PreferredMaintenanceWindow !== null && { PreferredMaintenanceWindow: input.PreferredMaintenanceWindow }),
        ...(input.SecurityGroupIds !== undefined &&
            input.SecurityGroupIds !== null && {
            SecurityGroupIds: serializeAws_json1_1Strings(input.SecurityGroupIds, context),
        }),
        ...(input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName }),
        ...(input.ServiceRoleArn !== undefined &&
            input.ServiceRoleArn !== null && { ServiceRoleArn: input.ServiceRoleArn }),
        ...(input.SubnetIds !== undefined &&
            input.SubnetIds !== null && { SubnetIds: serializeAws_json1_1Strings(input.SubnetIds, context) }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1DeleteBackupRequest = (input, context) => {
    return {
        ...(input.BackupId !== undefined && input.BackupId !== null && { BackupId: input.BackupId }),
    };
};
const serializeAws_json1_1DeleteServerRequest = (input, context) => {
    return {
        ...(input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName }),
    };
};
const serializeAws_json1_1DescribeAccountAttributesRequest = (input, context) => {
    return {};
};
const serializeAws_json1_1DescribeBackupsRequest = (input, context) => {
    return {
        ...(input.BackupId !== undefined && input.BackupId !== null && { BackupId: input.BackupId }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName }),
    };
};
const serializeAws_json1_1DescribeEventsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName }),
    };
};
const serializeAws_json1_1DescribeNodeAssociationStatusRequest = (input, context) => {
    return {
        ...(input.NodeAssociationStatusToken !== undefined &&
            input.NodeAssociationStatusToken !== null && { NodeAssociationStatusToken: input.NodeAssociationStatusToken }),
        ...(input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName }),
    };
};
const serializeAws_json1_1DescribeServersRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName }),
    };
};
const serializeAws_json1_1DisassociateNodeRequest = (input, context) => {
    return {
        ...(input.EngineAttributes !== undefined &&
            input.EngineAttributes !== null && {
            EngineAttributes: serializeAws_json1_1EngineAttributes(input.EngineAttributes, context),
        }),
        ...(input.NodeName !== undefined && input.NodeName !== null && { NodeName: input.NodeName }),
        ...(input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName }),
    };
};
const serializeAws_json1_1EngineAttribute = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1EngineAttributes = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1EngineAttribute(entry, context);
    });
};
const serializeAws_json1_1ExportServerEngineAttributeRequest = (input, context) => {
    return {
        ...(input.ExportAttributeName !== undefined &&
            input.ExportAttributeName !== null && { ExportAttributeName: input.ExportAttributeName }),
        ...(input.InputAttributes !== undefined &&
            input.InputAttributes !== null && {
            InputAttributes: serializeAws_json1_1EngineAttributes(input.InputAttributes, context),
        }),
        ...(input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName }),
    };
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_1RestoreServerRequest = (input, context) => {
    return {
        ...(input.BackupId !== undefined && input.BackupId !== null && { BackupId: input.BackupId }),
        ...(input.InstanceType !== undefined && input.InstanceType !== null && { InstanceType: input.InstanceType }),
        ...(input.KeyPair !== undefined && input.KeyPair !== null && { KeyPair: input.KeyPair }),
        ...(input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName }),
    };
};
const serializeAws_json1_1StartMaintenanceRequest = (input, context) => {
    return {
        ...(input.EngineAttributes !== undefined &&
            input.EngineAttributes !== null && {
            EngineAttributes: serializeAws_json1_1EngineAttributes(input.EngineAttributes, context),
        }),
        ...(input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName }),
    };
};
const serializeAws_json1_1Strings = (input, context) => {
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
const serializeAws_json1_1TagKeyList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1TagList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Tag(entry, context);
    });
};
const serializeAws_json1_1TagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
        ...(input.TagKeys !== undefined &&
            input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
    };
};
const serializeAws_json1_1UpdateServerEngineAttributesRequest = (input, context) => {
    return {
        ...(input.AttributeName !== undefined && input.AttributeName !== null && { AttributeName: input.AttributeName }),
        ...(input.AttributeValue !== undefined &&
            input.AttributeValue !== null && { AttributeValue: input.AttributeValue }),
        ...(input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName }),
    };
};
const serializeAws_json1_1UpdateServerRequest = (input, context) => {
    return {
        ...(input.BackupRetentionCount !== undefined &&
            input.BackupRetentionCount !== null && { BackupRetentionCount: input.BackupRetentionCount }),
        ...(input.DisableAutomatedBackup !== undefined &&
            input.DisableAutomatedBackup !== null && { DisableAutomatedBackup: input.DisableAutomatedBackup }),
        ...(input.PreferredBackupWindow !== undefined &&
            input.PreferredBackupWindow !== null && { PreferredBackupWindow: input.PreferredBackupWindow }),
        ...(input.PreferredMaintenanceWindow !== undefined &&
            input.PreferredMaintenanceWindow !== null && { PreferredMaintenanceWindow: input.PreferredMaintenanceWindow }),
        ...(input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName }),
    };
};
const deserializeAws_json1_1AccountAttribute = (output, context) => {
    return {
        Maximum: output.Maximum !== undefined && output.Maximum !== null ? output.Maximum : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Used: output.Used !== undefined && output.Used !== null ? output.Used : undefined,
    };
};
const deserializeAws_json1_1AccountAttributes = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AccountAttribute(entry, context);
    });
};
const deserializeAws_json1_1AssociateNodeResponse = (output, context) => {
    return {
        NodeAssociationStatusToken: output.NodeAssociationStatusToken !== undefined && output.NodeAssociationStatusToken !== null
            ? output.NodeAssociationStatusToken
            : undefined,
    };
};
const deserializeAws_json1_1Backup = (output, context) => {
    return {
        BackupArn: output.BackupArn !== undefined && output.BackupArn !== null ? output.BackupArn : undefined,
        BackupId: output.BackupId !== undefined && output.BackupId !== null ? output.BackupId : undefined,
        BackupType: output.BackupType !== undefined && output.BackupType !== null ? output.BackupType : undefined,
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Engine: output.Engine !== undefined && output.Engine !== null ? output.Engine : undefined,
        EngineModel: output.EngineModel !== undefined && output.EngineModel !== null ? output.EngineModel : undefined,
        EngineVersion: output.EngineVersion !== undefined && output.EngineVersion !== null ? output.EngineVersion : undefined,
        InstanceProfileArn: output.InstanceProfileArn !== undefined && output.InstanceProfileArn !== null
            ? output.InstanceProfileArn
            : undefined,
        InstanceType: output.InstanceType !== undefined && output.InstanceType !== null ? output.InstanceType : undefined,
        KeyPair: output.KeyPair !== undefined && output.KeyPair !== null ? output.KeyPair : undefined,
        PreferredBackupWindow: output.PreferredBackupWindow !== undefined && output.PreferredBackupWindow !== null
            ? output.PreferredBackupWindow
            : undefined,
        PreferredMaintenanceWindow: output.PreferredMaintenanceWindow !== undefined && output.PreferredMaintenanceWindow !== null
            ? output.PreferredMaintenanceWindow
            : undefined,
        S3DataSize: output.S3DataSize !== undefined && output.S3DataSize !== null ? output.S3DataSize : undefined,
        S3DataUrl: output.S3DataUrl !== undefined && output.S3DataUrl !== null ? output.S3DataUrl : undefined,
        S3LogUrl: output.S3LogUrl !== undefined && output.S3LogUrl !== null ? output.S3LogUrl : undefined,
        SecurityGroupIds: output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
            ? deserializeAws_json1_1Strings(output.SecurityGroupIds, context)
            : undefined,
        ServerName: output.ServerName !== undefined && output.ServerName !== null ? output.ServerName : undefined,
        ServiceRoleArn: output.ServiceRoleArn !== undefined && output.ServiceRoleArn !== null ? output.ServiceRoleArn : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StatusDescription: output.StatusDescription !== undefined && output.StatusDescription !== null
            ? output.StatusDescription
            : undefined,
        SubnetIds: output.SubnetIds !== undefined && output.SubnetIds !== null
            ? deserializeAws_json1_1Strings(output.SubnetIds, context)
            : undefined,
        ToolsVersion: output.ToolsVersion !== undefined && output.ToolsVersion !== null ? output.ToolsVersion : undefined,
        UserArn: output.UserArn !== undefined && output.UserArn !== null ? output.UserArn : undefined,
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
const deserializeAws_json1_1CreateBackupResponse = (output, context) => {
    return {
        Backup: output.Backup !== undefined && output.Backup !== null
            ? deserializeAws_json1_1Backup(output.Backup, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateServerResponse = (output, context) => {
    return {
        Server: output.Server !== undefined && output.Server !== null
            ? deserializeAws_json1_1Server(output.Server, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteBackupResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteServerResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DescribeAccountAttributesResponse = (output, context) => {
    return {
        Attributes: output.Attributes !== undefined && output.Attributes !== null
            ? deserializeAws_json1_1AccountAttributes(output.Attributes, context)
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
const deserializeAws_json1_1DescribeEventsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        ServerEvents: output.ServerEvents !== undefined && output.ServerEvents !== null
            ? deserializeAws_json1_1ServerEvents(output.ServerEvents, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeNodeAssociationStatusResponse = (output, context) => {
    return {
        EngineAttributes: output.EngineAttributes !== undefined && output.EngineAttributes !== null
            ? deserializeAws_json1_1EngineAttributes(output.EngineAttributes, context)
            : undefined,
        NodeAssociationStatus: output.NodeAssociationStatus !== undefined && output.NodeAssociationStatus !== null
            ? output.NodeAssociationStatus
            : undefined,
    };
};
const deserializeAws_json1_1DescribeServersResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Servers: output.Servers !== undefined && output.Servers !== null
            ? deserializeAws_json1_1Servers(output.Servers, context)
            : undefined,
    };
};
const deserializeAws_json1_1DisassociateNodeResponse = (output, context) => {
    return {
        NodeAssociationStatusToken: output.NodeAssociationStatusToken !== undefined && output.NodeAssociationStatusToken !== null
            ? output.NodeAssociationStatusToken
            : undefined,
    };
};
const deserializeAws_json1_1EngineAttribute = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1EngineAttributes = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EngineAttribute(entry, context);
    });
};
const deserializeAws_json1_1ExportServerEngineAttributeResponse = (output, context) => {
    return {
        EngineAttribute: output.EngineAttribute !== undefined && output.EngineAttribute !== null
            ? deserializeAws_json1_1EngineAttribute(output.EngineAttribute, context)
            : undefined,
        ServerName: output.ServerName !== undefined && output.ServerName !== null ? output.ServerName : undefined,
    };
};
const deserializeAws_json1_1InvalidNextTokenException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidStateException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagList(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1ResourceAlreadyExistsException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1RestoreServerResponse = (output, context) => {
    return {
        Server: output.Server !== undefined && output.Server !== null
            ? deserializeAws_json1_1Server(output.Server, context)
            : undefined,
    };
};
const deserializeAws_json1_1Server = (output, context) => {
    return {
        AssociatePublicIpAddress: output.AssociatePublicIpAddress !== undefined && output.AssociatePublicIpAddress !== null
            ? output.AssociatePublicIpAddress
            : undefined,
        BackupRetentionCount: output.BackupRetentionCount !== undefined && output.BackupRetentionCount !== null
            ? output.BackupRetentionCount
            : undefined,
        CloudFormationStackArn: output.CloudFormationStackArn !== undefined && output.CloudFormationStackArn !== null
            ? output.CloudFormationStackArn
            : undefined,
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        CustomDomain: output.CustomDomain !== undefined && output.CustomDomain !== null ? output.CustomDomain : undefined,
        DisableAutomatedBackup: output.DisableAutomatedBackup !== undefined && output.DisableAutomatedBackup !== null
            ? output.DisableAutomatedBackup
            : undefined,
        Endpoint: output.Endpoint !== undefined && output.Endpoint !== null ? output.Endpoint : undefined,
        Engine: output.Engine !== undefined && output.Engine !== null ? output.Engine : undefined,
        EngineAttributes: output.EngineAttributes !== undefined && output.EngineAttributes !== null
            ? deserializeAws_json1_1EngineAttributes(output.EngineAttributes, context)
            : undefined,
        EngineModel: output.EngineModel !== undefined && output.EngineModel !== null ? output.EngineModel : undefined,
        EngineVersion: output.EngineVersion !== undefined && output.EngineVersion !== null ? output.EngineVersion : undefined,
        InstanceProfileArn: output.InstanceProfileArn !== undefined && output.InstanceProfileArn !== null
            ? output.InstanceProfileArn
            : undefined,
        InstanceType: output.InstanceType !== undefined && output.InstanceType !== null ? output.InstanceType : undefined,
        KeyPair: output.KeyPair !== undefined && output.KeyPair !== null ? output.KeyPair : undefined,
        MaintenanceStatus: output.MaintenanceStatus !== undefined && output.MaintenanceStatus !== null
            ? output.MaintenanceStatus
            : undefined,
        PreferredBackupWindow: output.PreferredBackupWindow !== undefined && output.PreferredBackupWindow !== null
            ? output.PreferredBackupWindow
            : undefined,
        PreferredMaintenanceWindow: output.PreferredMaintenanceWindow !== undefined && output.PreferredMaintenanceWindow !== null
            ? output.PreferredMaintenanceWindow
            : undefined,
        SecurityGroupIds: output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
            ? deserializeAws_json1_1Strings(output.SecurityGroupIds, context)
            : undefined,
        ServerArn: output.ServerArn !== undefined && output.ServerArn !== null ? output.ServerArn : undefined,
        ServerName: output.ServerName !== undefined && output.ServerName !== null ? output.ServerName : undefined,
        ServiceRoleArn: output.ServiceRoleArn !== undefined && output.ServiceRoleArn !== null ? output.ServiceRoleArn : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StatusReason: output.StatusReason !== undefined && output.StatusReason !== null ? output.StatusReason : undefined,
        SubnetIds: output.SubnetIds !== undefined && output.SubnetIds !== null
            ? deserializeAws_json1_1Strings(output.SubnetIds, context)
            : undefined,
    };
};
const deserializeAws_json1_1ServerEvent = (output, context) => {
    return {
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        LogUrl: output.LogUrl !== undefined && output.LogUrl !== null ? output.LogUrl : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        ServerName: output.ServerName !== undefined && output.ServerName !== null ? output.ServerName : undefined,
    };
};
const deserializeAws_json1_1ServerEvents = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ServerEvent(entry, context);
    });
};
const deserializeAws_json1_1Servers = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Server(entry, context);
    });
};
const deserializeAws_json1_1StartMaintenanceResponse = (output, context) => {
    return {
        Server: output.Server !== undefined && output.Server !== null
            ? deserializeAws_json1_1Server(output.Server, context)
            : undefined,
    };
};
const deserializeAws_json1_1Strings = (output, context) => {
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
const deserializeAws_json1_1TagList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Tag(entry, context);
    });
};
const deserializeAws_json1_1TagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateServerEngineAttributesResponse = (output, context) => {
    return {
        Server: output.Server !== undefined && output.Server !== null
            ? deserializeAws_json1_1Server(output.Server, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateServerResponse = (output, context) => {
    return {
        Server: output.Server !== undefined && output.Server !== null
            ? deserializeAws_json1_1Server(output.Server, context)
            : undefined,
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