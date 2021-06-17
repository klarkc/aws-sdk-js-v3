"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1ValidateResourcePolicyCommand = exports.deserializeAws_json1_1UpdateSecretVersionStageCommand = exports.deserializeAws_json1_1UpdateSecretCommand = exports.deserializeAws_json1_1UntagResourceCommand = exports.deserializeAws_json1_1TagResourceCommand = exports.deserializeAws_json1_1StopReplicationToReplicaCommand = exports.deserializeAws_json1_1RotateSecretCommand = exports.deserializeAws_json1_1RestoreSecretCommand = exports.deserializeAws_json1_1ReplicateSecretToRegionsCommand = exports.deserializeAws_json1_1RemoveRegionsFromReplicationCommand = exports.deserializeAws_json1_1PutSecretValueCommand = exports.deserializeAws_json1_1PutResourcePolicyCommand = exports.deserializeAws_json1_1ListSecretVersionIdsCommand = exports.deserializeAws_json1_1ListSecretsCommand = exports.deserializeAws_json1_1GetSecretValueCommand = exports.deserializeAws_json1_1GetResourcePolicyCommand = exports.deserializeAws_json1_1GetRandomPasswordCommand = exports.deserializeAws_json1_1DescribeSecretCommand = exports.deserializeAws_json1_1DeleteSecretCommand = exports.deserializeAws_json1_1DeleteResourcePolicyCommand = exports.deserializeAws_json1_1CreateSecretCommand = exports.deserializeAws_json1_1CancelRotateSecretCommand = exports.serializeAws_json1_1ValidateResourcePolicyCommand = exports.serializeAws_json1_1UpdateSecretVersionStageCommand = exports.serializeAws_json1_1UpdateSecretCommand = exports.serializeAws_json1_1UntagResourceCommand = exports.serializeAws_json1_1TagResourceCommand = exports.serializeAws_json1_1StopReplicationToReplicaCommand = exports.serializeAws_json1_1RotateSecretCommand = exports.serializeAws_json1_1RestoreSecretCommand = exports.serializeAws_json1_1ReplicateSecretToRegionsCommand = exports.serializeAws_json1_1RemoveRegionsFromReplicationCommand = exports.serializeAws_json1_1PutSecretValueCommand = exports.serializeAws_json1_1PutResourcePolicyCommand = exports.serializeAws_json1_1ListSecretVersionIdsCommand = exports.serializeAws_json1_1ListSecretsCommand = exports.serializeAws_json1_1GetSecretValueCommand = exports.serializeAws_json1_1GetResourcePolicyCommand = exports.serializeAws_json1_1GetRandomPasswordCommand = exports.serializeAws_json1_1DescribeSecretCommand = exports.serializeAws_json1_1DeleteSecretCommand = exports.serializeAws_json1_1DeleteResourcePolicyCommand = exports.serializeAws_json1_1CreateSecretCommand = exports.serializeAws_json1_1CancelRotateSecretCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const uuid_1 = require("uuid");
const serializeAws_json1_1CancelRotateSecretCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "secretsmanager.CancelRotateSecret",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CancelRotateSecretRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CancelRotateSecretCommand = serializeAws_json1_1CancelRotateSecretCommand;
const serializeAws_json1_1CreateSecretCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "secretsmanager.CreateSecret",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateSecretRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateSecretCommand = serializeAws_json1_1CreateSecretCommand;
const serializeAws_json1_1DeleteResourcePolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "secretsmanager.DeleteResourcePolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteResourcePolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteResourcePolicyCommand = serializeAws_json1_1DeleteResourcePolicyCommand;
const serializeAws_json1_1DeleteSecretCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "secretsmanager.DeleteSecret",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteSecretRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteSecretCommand = serializeAws_json1_1DeleteSecretCommand;
const serializeAws_json1_1DescribeSecretCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "secretsmanager.DescribeSecret",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeSecretRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeSecretCommand = serializeAws_json1_1DescribeSecretCommand;
const serializeAws_json1_1GetRandomPasswordCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "secretsmanager.GetRandomPassword",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRandomPasswordRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetRandomPasswordCommand = serializeAws_json1_1GetRandomPasswordCommand;
const serializeAws_json1_1GetResourcePolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "secretsmanager.GetResourcePolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetResourcePolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetResourcePolicyCommand = serializeAws_json1_1GetResourcePolicyCommand;
const serializeAws_json1_1GetSecretValueCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "secretsmanager.GetSecretValue",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSecretValueRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetSecretValueCommand = serializeAws_json1_1GetSecretValueCommand;
const serializeAws_json1_1ListSecretsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "secretsmanager.ListSecrets",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListSecretsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListSecretsCommand = serializeAws_json1_1ListSecretsCommand;
const serializeAws_json1_1ListSecretVersionIdsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "secretsmanager.ListSecretVersionIds",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListSecretVersionIdsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListSecretVersionIdsCommand = serializeAws_json1_1ListSecretVersionIdsCommand;
const serializeAws_json1_1PutResourcePolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "secretsmanager.PutResourcePolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutResourcePolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutResourcePolicyCommand = serializeAws_json1_1PutResourcePolicyCommand;
const serializeAws_json1_1PutSecretValueCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "secretsmanager.PutSecretValue",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutSecretValueRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutSecretValueCommand = serializeAws_json1_1PutSecretValueCommand;
const serializeAws_json1_1RemoveRegionsFromReplicationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "secretsmanager.RemoveRegionsFromReplication",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RemoveRegionsFromReplicationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RemoveRegionsFromReplicationCommand = serializeAws_json1_1RemoveRegionsFromReplicationCommand;
const serializeAws_json1_1ReplicateSecretToRegionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "secretsmanager.ReplicateSecretToRegions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ReplicateSecretToRegionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ReplicateSecretToRegionsCommand = serializeAws_json1_1ReplicateSecretToRegionsCommand;
const serializeAws_json1_1RestoreSecretCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "secretsmanager.RestoreSecret",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RestoreSecretRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RestoreSecretCommand = serializeAws_json1_1RestoreSecretCommand;
const serializeAws_json1_1RotateSecretCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "secretsmanager.RotateSecret",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RotateSecretRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RotateSecretCommand = serializeAws_json1_1RotateSecretCommand;
const serializeAws_json1_1StopReplicationToReplicaCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "secretsmanager.StopReplicationToReplica",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StopReplicationToReplicaRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopReplicationToReplicaCommand = serializeAws_json1_1StopReplicationToReplicaCommand;
const serializeAws_json1_1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "secretsmanager.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "secretsmanager.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
const serializeAws_json1_1UpdateSecretCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "secretsmanager.UpdateSecret",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateSecretRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateSecretCommand = serializeAws_json1_1UpdateSecretCommand;
const serializeAws_json1_1UpdateSecretVersionStageCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "secretsmanager.UpdateSecretVersionStage",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateSecretVersionStageRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateSecretVersionStageCommand = serializeAws_json1_1UpdateSecretVersionStageCommand;
const serializeAws_json1_1ValidateResourcePolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "secretsmanager.ValidateResourcePolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ValidateResourcePolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ValidateResourcePolicyCommand = serializeAws_json1_1ValidateResourcePolicyCommand;
const deserializeAws_json1_1CancelRotateSecretCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CancelRotateSecretCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CancelRotateSecretResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CancelRotateSecretCommand = deserializeAws_json1_1CancelRotateSecretCommand;
const deserializeAws_json1_1CancelRotateSecretCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.secretsmanager#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.secretsmanager#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.secretsmanager#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.secretsmanager#ResourceNotFoundException":
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
const deserializeAws_json1_1CreateSecretCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateSecretCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateSecretResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateSecretCommand = deserializeAws_json1_1CreateSecretCommand;
const deserializeAws_json1_1CreateSecretCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EncryptionFailure":
        case "com.amazonaws.secretsmanager#EncryptionFailure":
            response = {
                ...(await deserializeAws_json1_1EncryptionFailureResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceError":
        case "com.amazonaws.secretsmanager#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.secretsmanager#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.secretsmanager#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.secretsmanager#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MalformedPolicyDocumentException":
        case "com.amazonaws.secretsmanager#MalformedPolicyDocumentException":
            response = {
                ...(await deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionNotMetException":
        case "com.amazonaws.secretsmanager#PreconditionNotMetException":
            response = {
                ...(await deserializeAws_json1_1PreconditionNotMetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceExistsException":
        case "com.amazonaws.secretsmanager#ResourceExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.secretsmanager#ResourceNotFoundException":
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
const deserializeAws_json1_1DeleteResourcePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteResourcePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteResourcePolicyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteResourcePolicyCommand = deserializeAws_json1_1DeleteResourcePolicyCommand;
const deserializeAws_json1_1DeleteResourcePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.secretsmanager#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.secretsmanager#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.secretsmanager#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.secretsmanager#ResourceNotFoundException":
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
const deserializeAws_json1_1DeleteSecretCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteSecretCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteSecretResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteSecretCommand = deserializeAws_json1_1DeleteSecretCommand;
const deserializeAws_json1_1DeleteSecretCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.secretsmanager#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.secretsmanager#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.secretsmanager#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.secretsmanager#ResourceNotFoundException":
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
const deserializeAws_json1_1DescribeSecretCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeSecretCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeSecretResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeSecretCommand = deserializeAws_json1_1DescribeSecretCommand;
const deserializeAws_json1_1DescribeSecretCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.secretsmanager#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.secretsmanager#ResourceNotFoundException":
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
const deserializeAws_json1_1GetRandomPasswordCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetRandomPasswordCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRandomPasswordResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetRandomPasswordCommand = deserializeAws_json1_1GetRandomPasswordCommand;
const deserializeAws_json1_1GetRandomPasswordCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.secretsmanager#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.secretsmanager#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.secretsmanager#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetResourcePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetResourcePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetResourcePolicyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetResourcePolicyCommand = deserializeAws_json1_1GetResourcePolicyCommand;
const deserializeAws_json1_1GetResourcePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.secretsmanager#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.secretsmanager#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.secretsmanager#ResourceNotFoundException":
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
const deserializeAws_json1_1GetSecretValueCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetSecretValueCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetSecretValueResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetSecretValueCommand = deserializeAws_json1_1GetSecretValueCommand;
const deserializeAws_json1_1GetSecretValueCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DecryptionFailure":
        case "com.amazonaws.secretsmanager#DecryptionFailure":
            response = {
                ...(await deserializeAws_json1_1DecryptionFailureResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceError":
        case "com.amazonaws.secretsmanager#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.secretsmanager#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.secretsmanager#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.secretsmanager#ResourceNotFoundException":
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
const deserializeAws_json1_1ListSecretsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListSecretsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListSecretsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListSecretsCommand = deserializeAws_json1_1ListSecretsCommand;
const deserializeAws_json1_1ListSecretsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.secretsmanager#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.secretsmanager#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.secretsmanager#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListSecretVersionIdsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListSecretVersionIdsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListSecretVersionIdsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListSecretVersionIdsCommand = deserializeAws_json1_1ListSecretVersionIdsCommand;
const deserializeAws_json1_1ListSecretVersionIdsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.secretsmanager#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.secretsmanager#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.secretsmanager#ResourceNotFoundException":
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
const deserializeAws_json1_1PutResourcePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutResourcePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutResourcePolicyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutResourcePolicyCommand = deserializeAws_json1_1PutResourcePolicyCommand;
const deserializeAws_json1_1PutResourcePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.secretsmanager#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.secretsmanager#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.secretsmanager#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MalformedPolicyDocumentException":
        case "com.amazonaws.secretsmanager#MalformedPolicyDocumentException":
            response = {
                ...(await deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PublicPolicyException":
        case "com.amazonaws.secretsmanager#PublicPolicyException":
            response = {
                ...(await deserializeAws_json1_1PublicPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.secretsmanager#ResourceNotFoundException":
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
const deserializeAws_json1_1PutSecretValueCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutSecretValueCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutSecretValueResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutSecretValueCommand = deserializeAws_json1_1PutSecretValueCommand;
const deserializeAws_json1_1PutSecretValueCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EncryptionFailure":
        case "com.amazonaws.secretsmanager#EncryptionFailure":
            response = {
                ...(await deserializeAws_json1_1EncryptionFailureResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceError":
        case "com.amazonaws.secretsmanager#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.secretsmanager#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.secretsmanager#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.secretsmanager#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceExistsException":
        case "com.amazonaws.secretsmanager#ResourceExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.secretsmanager#ResourceNotFoundException":
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
const deserializeAws_json1_1RemoveRegionsFromReplicationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RemoveRegionsFromReplicationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RemoveRegionsFromReplicationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RemoveRegionsFromReplicationCommand = deserializeAws_json1_1RemoveRegionsFromReplicationCommand;
const deserializeAws_json1_1RemoveRegionsFromReplicationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.secretsmanager#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.secretsmanager#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.secretsmanager#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.secretsmanager#ResourceNotFoundException":
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
const deserializeAws_json1_1ReplicateSecretToRegionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ReplicateSecretToRegionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ReplicateSecretToRegionsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ReplicateSecretToRegionsCommand = deserializeAws_json1_1ReplicateSecretToRegionsCommand;
const deserializeAws_json1_1ReplicateSecretToRegionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.secretsmanager#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.secretsmanager#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.secretsmanager#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.secretsmanager#ResourceNotFoundException":
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
const deserializeAws_json1_1RestoreSecretCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RestoreSecretCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RestoreSecretResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RestoreSecretCommand = deserializeAws_json1_1RestoreSecretCommand;
const deserializeAws_json1_1RestoreSecretCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.secretsmanager#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.secretsmanager#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.secretsmanager#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.secretsmanager#ResourceNotFoundException":
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
const deserializeAws_json1_1RotateSecretCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RotateSecretCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RotateSecretResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RotateSecretCommand = deserializeAws_json1_1RotateSecretCommand;
const deserializeAws_json1_1RotateSecretCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.secretsmanager#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.secretsmanager#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.secretsmanager#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.secretsmanager#ResourceNotFoundException":
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
const deserializeAws_json1_1StopReplicationToReplicaCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StopReplicationToReplicaCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopReplicationToReplicaResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopReplicationToReplicaCommand = deserializeAws_json1_1StopReplicationToReplicaCommand;
const deserializeAws_json1_1StopReplicationToReplicaCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.secretsmanager#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.secretsmanager#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.secretsmanager#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.secretsmanager#ResourceNotFoundException":
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
const deserializeAws_json1_1TagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1TagResourceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
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
        case "InternalServiceError":
        case "com.amazonaws.secretsmanager#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.secretsmanager#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.secretsmanager#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.secretsmanager#ResourceNotFoundException":
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
const deserializeAws_json1_1UntagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UntagResourceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
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
        case "InternalServiceError":
        case "com.amazonaws.secretsmanager#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.secretsmanager#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.secretsmanager#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.secretsmanager#ResourceNotFoundException":
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
const deserializeAws_json1_1UpdateSecretCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateSecretCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateSecretResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateSecretCommand = deserializeAws_json1_1UpdateSecretCommand;
const deserializeAws_json1_1UpdateSecretCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EncryptionFailure":
        case "com.amazonaws.secretsmanager#EncryptionFailure":
            response = {
                ...(await deserializeAws_json1_1EncryptionFailureResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceError":
        case "com.amazonaws.secretsmanager#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.secretsmanager#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.secretsmanager#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.secretsmanager#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MalformedPolicyDocumentException":
        case "com.amazonaws.secretsmanager#MalformedPolicyDocumentException":
            response = {
                ...(await deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionNotMetException":
        case "com.amazonaws.secretsmanager#PreconditionNotMetException":
            response = {
                ...(await deserializeAws_json1_1PreconditionNotMetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceExistsException":
        case "com.amazonaws.secretsmanager#ResourceExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.secretsmanager#ResourceNotFoundException":
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
const deserializeAws_json1_1UpdateSecretVersionStageCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateSecretVersionStageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateSecretVersionStageResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateSecretVersionStageCommand = deserializeAws_json1_1UpdateSecretVersionStageCommand;
const deserializeAws_json1_1UpdateSecretVersionStageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.secretsmanager#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.secretsmanager#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.secretsmanager#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.secretsmanager#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.secretsmanager#ResourceNotFoundException":
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
const deserializeAws_json1_1ValidateResourcePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ValidateResourcePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ValidateResourcePolicyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ValidateResourcePolicyCommand = deserializeAws_json1_1ValidateResourcePolicyCommand;
const deserializeAws_json1_1ValidateResourcePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.secretsmanager#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.secretsmanager#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.secretsmanager#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MalformedPolicyDocumentException":
        case "com.amazonaws.secretsmanager#MalformedPolicyDocumentException":
            response = {
                ...(await deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.secretsmanager#ResourceNotFoundException":
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
const deserializeAws_json1_1DecryptionFailureResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DecryptionFailure(body, context);
    const contents = {
        name: "DecryptionFailure",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1EncryptionFailureResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1EncryptionFailure(body, context);
    const contents = {
        name: "EncryptionFailure",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InternalServiceErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServiceError(body, context);
    const contents = {
        name: "InternalServiceError",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
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
const deserializeAws_json1_1InvalidParameterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParameterException(body, context);
    const contents = {
        name: "InvalidParameterException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRequestException(body, context);
    const contents = {
        name: "InvalidRequestException",
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
const deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MalformedPolicyDocumentException(body, context);
    const contents = {
        name: "MalformedPolicyDocumentException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1PreconditionNotMetExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PreconditionNotMetException(body, context);
    const contents = {
        name: "PreconditionNotMetException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1PublicPolicyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PublicPolicyException(body, context);
    const contents = {
        name: "PublicPolicyException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceExistsException(body, context);
    const contents = {
        name: "ResourceExistsException",
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
const serializeAws_json1_1AddReplicaRegionListType = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ReplicaRegionType(entry, context);
    });
};
const serializeAws_json1_1CancelRotateSecretRequest = (input, context) => {
    return {
        ...(input.SecretId !== undefined && input.SecretId !== null && { SecretId: input.SecretId }),
    };
};
const serializeAws_json1_1CreateSecretRequest = (input, context) => {
    var _a;
    return {
        ...(input.AddReplicaRegions !== undefined &&
            input.AddReplicaRegions !== null && {
            AddReplicaRegions: serializeAws_json1_1AddReplicaRegionListType(input.AddReplicaRegions, context),
        }),
        ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.ForceOverwriteReplicaSecret !== undefined &&
            input.ForceOverwriteReplicaSecret !== null && { ForceOverwriteReplicaSecret: input.ForceOverwriteReplicaSecret }),
        ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.SecretBinary !== undefined &&
            input.SecretBinary !== null && { SecretBinary: context.base64Encoder(input.SecretBinary) }),
        ...(input.SecretString !== undefined && input.SecretString !== null && { SecretString: input.SecretString }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_json1_1TagListType(input.Tags, context) }),
    };
};
const serializeAws_json1_1DeleteResourcePolicyRequest = (input, context) => {
    return {
        ...(input.SecretId !== undefined && input.SecretId !== null && { SecretId: input.SecretId }),
    };
};
const serializeAws_json1_1DeleteSecretRequest = (input, context) => {
    return {
        ...(input.ForceDeleteWithoutRecovery !== undefined &&
            input.ForceDeleteWithoutRecovery !== null && { ForceDeleteWithoutRecovery: input.ForceDeleteWithoutRecovery }),
        ...(input.RecoveryWindowInDays !== undefined &&
            input.RecoveryWindowInDays !== null && { RecoveryWindowInDays: input.RecoveryWindowInDays }),
        ...(input.SecretId !== undefined && input.SecretId !== null && { SecretId: input.SecretId }),
    };
};
const serializeAws_json1_1DescribeSecretRequest = (input, context) => {
    return {
        ...(input.SecretId !== undefined && input.SecretId !== null && { SecretId: input.SecretId }),
    };
};
const serializeAws_json1_1Filter = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_json1_1FilterValuesStringList(input.Values, context) }),
    };
};
const serializeAws_json1_1FiltersListType = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Filter(entry, context);
    });
};
const serializeAws_json1_1FilterValuesStringList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1GetRandomPasswordRequest = (input, context) => {
    return {
        ...(input.ExcludeCharacters !== undefined &&
            input.ExcludeCharacters !== null && { ExcludeCharacters: input.ExcludeCharacters }),
        ...(input.ExcludeLowercase !== undefined &&
            input.ExcludeLowercase !== null && { ExcludeLowercase: input.ExcludeLowercase }),
        ...(input.ExcludeNumbers !== undefined &&
            input.ExcludeNumbers !== null && { ExcludeNumbers: input.ExcludeNumbers }),
        ...(input.ExcludePunctuation !== undefined &&
            input.ExcludePunctuation !== null && { ExcludePunctuation: input.ExcludePunctuation }),
        ...(input.ExcludeUppercase !== undefined &&
            input.ExcludeUppercase !== null && { ExcludeUppercase: input.ExcludeUppercase }),
        ...(input.IncludeSpace !== undefined && input.IncludeSpace !== null && { IncludeSpace: input.IncludeSpace }),
        ...(input.PasswordLength !== undefined &&
            input.PasswordLength !== null && { PasswordLength: input.PasswordLength }),
        ...(input.RequireEachIncludedType !== undefined &&
            input.RequireEachIncludedType !== null && { RequireEachIncludedType: input.RequireEachIncludedType }),
    };
};
const serializeAws_json1_1GetResourcePolicyRequest = (input, context) => {
    return {
        ...(input.SecretId !== undefined && input.SecretId !== null && { SecretId: input.SecretId }),
    };
};
const serializeAws_json1_1GetSecretValueRequest = (input, context) => {
    return {
        ...(input.SecretId !== undefined && input.SecretId !== null && { SecretId: input.SecretId }),
        ...(input.VersionId !== undefined && input.VersionId !== null && { VersionId: input.VersionId }),
        ...(input.VersionStage !== undefined && input.VersionStage !== null && { VersionStage: input.VersionStage }),
    };
};
const serializeAws_json1_1ListSecretsRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1FiltersListType(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.SortOrder !== undefined && input.SortOrder !== null && { SortOrder: input.SortOrder }),
    };
};
const serializeAws_json1_1ListSecretVersionIdsRequest = (input, context) => {
    return {
        ...(input.IncludeDeprecated !== undefined &&
            input.IncludeDeprecated !== null && { IncludeDeprecated: input.IncludeDeprecated }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.SecretId !== undefined && input.SecretId !== null && { SecretId: input.SecretId }),
    };
};
const serializeAws_json1_1PutResourcePolicyRequest = (input, context) => {
    return {
        ...(input.BlockPublicPolicy !== undefined &&
            input.BlockPublicPolicy !== null && { BlockPublicPolicy: input.BlockPublicPolicy }),
        ...(input.ResourcePolicy !== undefined &&
            input.ResourcePolicy !== null && { ResourcePolicy: input.ResourcePolicy }),
        ...(input.SecretId !== undefined && input.SecretId !== null && { SecretId: input.SecretId }),
    };
};
const serializeAws_json1_1PutSecretValueRequest = (input, context) => {
    var _a;
    return {
        ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.SecretBinary !== undefined &&
            input.SecretBinary !== null && { SecretBinary: context.base64Encoder(input.SecretBinary) }),
        ...(input.SecretId !== undefined && input.SecretId !== null && { SecretId: input.SecretId }),
        ...(input.SecretString !== undefined && input.SecretString !== null && { SecretString: input.SecretString }),
        ...(input.VersionStages !== undefined &&
            input.VersionStages !== null && {
            VersionStages: serializeAws_json1_1SecretVersionStagesType(input.VersionStages, context),
        }),
    };
};
const serializeAws_json1_1RemoveRegionsFromReplicationRequest = (input, context) => {
    return {
        ...(input.RemoveReplicaRegions !== undefined &&
            input.RemoveReplicaRegions !== null && {
            RemoveReplicaRegions: serializeAws_json1_1RemoveReplicaRegionListType(input.RemoveReplicaRegions, context),
        }),
        ...(input.SecretId !== undefined && input.SecretId !== null && { SecretId: input.SecretId }),
    };
};
const serializeAws_json1_1RemoveReplicaRegionListType = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ReplicaRegionType = (input, context) => {
    return {
        ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
        ...(input.Region !== undefined && input.Region !== null && { Region: input.Region }),
    };
};
const serializeAws_json1_1ReplicateSecretToRegionsRequest = (input, context) => {
    return {
        ...(input.AddReplicaRegions !== undefined &&
            input.AddReplicaRegions !== null && {
            AddReplicaRegions: serializeAws_json1_1AddReplicaRegionListType(input.AddReplicaRegions, context),
        }),
        ...(input.ForceOverwriteReplicaSecret !== undefined &&
            input.ForceOverwriteReplicaSecret !== null && { ForceOverwriteReplicaSecret: input.ForceOverwriteReplicaSecret }),
        ...(input.SecretId !== undefined && input.SecretId !== null && { SecretId: input.SecretId }),
    };
};
const serializeAws_json1_1RestoreSecretRequest = (input, context) => {
    return {
        ...(input.SecretId !== undefined && input.SecretId !== null && { SecretId: input.SecretId }),
    };
};
const serializeAws_json1_1RotateSecretRequest = (input, context) => {
    var _a;
    return {
        ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.RotationLambdaARN !== undefined &&
            input.RotationLambdaARN !== null && { RotationLambdaARN: input.RotationLambdaARN }),
        ...(input.RotationRules !== undefined &&
            input.RotationRules !== null && {
            RotationRules: serializeAws_json1_1RotationRulesType(input.RotationRules, context),
        }),
        ...(input.SecretId !== undefined && input.SecretId !== null && { SecretId: input.SecretId }),
    };
};
const serializeAws_json1_1RotationRulesType = (input, context) => {
    return {
        ...(input.AutomaticallyAfterDays !== undefined &&
            input.AutomaticallyAfterDays !== null && { AutomaticallyAfterDays: input.AutomaticallyAfterDays }),
    };
};
const serializeAws_json1_1SecretVersionStagesType = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1StopReplicationToReplicaRequest = (input, context) => {
    return {
        ...(input.SecretId !== undefined && input.SecretId !== null && { SecretId: input.SecretId }),
    };
};
const serializeAws_json1_1Tag = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1TagKeyListType = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1TagListType = (input, context) => {
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
        ...(input.SecretId !== undefined && input.SecretId !== null && { SecretId: input.SecretId }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_json1_1TagListType(input.Tags, context) }),
    };
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    return {
        ...(input.SecretId !== undefined && input.SecretId !== null && { SecretId: input.SecretId }),
        ...(input.TagKeys !== undefined &&
            input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyListType(input.TagKeys, context) }),
    };
};
const serializeAws_json1_1UpdateSecretRequest = (input, context) => {
    var _a;
    return {
        ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
        ...(input.SecretBinary !== undefined &&
            input.SecretBinary !== null && { SecretBinary: context.base64Encoder(input.SecretBinary) }),
        ...(input.SecretId !== undefined && input.SecretId !== null && { SecretId: input.SecretId }),
        ...(input.SecretString !== undefined && input.SecretString !== null && { SecretString: input.SecretString }),
    };
};
const serializeAws_json1_1UpdateSecretVersionStageRequest = (input, context) => {
    return {
        ...(input.MoveToVersionId !== undefined &&
            input.MoveToVersionId !== null && { MoveToVersionId: input.MoveToVersionId }),
        ...(input.RemoveFromVersionId !== undefined &&
            input.RemoveFromVersionId !== null && { RemoveFromVersionId: input.RemoveFromVersionId }),
        ...(input.SecretId !== undefined && input.SecretId !== null && { SecretId: input.SecretId }),
        ...(input.VersionStage !== undefined && input.VersionStage !== null && { VersionStage: input.VersionStage }),
    };
};
const serializeAws_json1_1ValidateResourcePolicyRequest = (input, context) => {
    return {
        ...(input.ResourcePolicy !== undefined &&
            input.ResourcePolicy !== null && { ResourcePolicy: input.ResourcePolicy }),
        ...(input.SecretId !== undefined && input.SecretId !== null && { SecretId: input.SecretId }),
    };
};
const deserializeAws_json1_1CancelRotateSecretResponse = (output, context) => {
    return {
        ARN: output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        VersionId: output.VersionId !== undefined && output.VersionId !== null ? output.VersionId : undefined,
    };
};
const deserializeAws_json1_1CreateSecretResponse = (output, context) => {
    return {
        ARN: output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        ReplicationStatus: output.ReplicationStatus !== undefined && output.ReplicationStatus !== null
            ? deserializeAws_json1_1ReplicationStatusListType(output.ReplicationStatus, context)
            : undefined,
        VersionId: output.VersionId !== undefined && output.VersionId !== null ? output.VersionId : undefined,
    };
};
const deserializeAws_json1_1DecryptionFailure = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1DeleteResourcePolicyResponse = (output, context) => {
    return {
        ARN: output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1DeleteSecretResponse = (output, context) => {
    return {
        ARN: output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
        DeletionDate: output.DeletionDate !== undefined && output.DeletionDate !== null
            ? new Date(Math.round(output.DeletionDate * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1DescribeSecretResponse = (output, context) => {
    return {
        ARN: output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
        CreatedDate: output.CreatedDate !== undefined && output.CreatedDate !== null
            ? new Date(Math.round(output.CreatedDate * 1000))
            : undefined,
        DeletedDate: output.DeletedDate !== undefined && output.DeletedDate !== null
            ? new Date(Math.round(output.DeletedDate * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
        LastAccessedDate: output.LastAccessedDate !== undefined && output.LastAccessedDate !== null
            ? new Date(Math.round(output.LastAccessedDate * 1000))
            : undefined,
        LastChangedDate: output.LastChangedDate !== undefined && output.LastChangedDate !== null
            ? new Date(Math.round(output.LastChangedDate * 1000))
            : undefined,
        LastRotatedDate: output.LastRotatedDate !== undefined && output.LastRotatedDate !== null
            ? new Date(Math.round(output.LastRotatedDate * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        OwningService: output.OwningService !== undefined && output.OwningService !== null ? output.OwningService : undefined,
        PrimaryRegion: output.PrimaryRegion !== undefined && output.PrimaryRegion !== null ? output.PrimaryRegion : undefined,
        ReplicationStatus: output.ReplicationStatus !== undefined && output.ReplicationStatus !== null
            ? deserializeAws_json1_1ReplicationStatusListType(output.ReplicationStatus, context)
            : undefined,
        RotationEnabled: output.RotationEnabled !== undefined && output.RotationEnabled !== null ? output.RotationEnabled : undefined,
        RotationLambdaARN: output.RotationLambdaARN !== undefined && output.RotationLambdaARN !== null
            ? output.RotationLambdaARN
            : undefined,
        RotationRules: output.RotationRules !== undefined && output.RotationRules !== null
            ? deserializeAws_json1_1RotationRulesType(output.RotationRules, context)
            : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagListType(output.Tags, context)
            : undefined,
        VersionIdsToStages: output.VersionIdsToStages !== undefined && output.VersionIdsToStages !== null
            ? deserializeAws_json1_1SecretVersionsToStagesMapType(output.VersionIdsToStages, context)
            : undefined,
    };
};
const deserializeAws_json1_1EncryptionFailure = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1GetRandomPasswordResponse = (output, context) => {
    return {
        RandomPassword: output.RandomPassword !== undefined && output.RandomPassword !== null ? output.RandomPassword : undefined,
    };
};
const deserializeAws_json1_1GetResourcePolicyResponse = (output, context) => {
    return {
        ARN: output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        ResourcePolicy: output.ResourcePolicy !== undefined && output.ResourcePolicy !== null ? output.ResourcePolicy : undefined,
    };
};
const deserializeAws_json1_1GetSecretValueResponse = (output, context) => {
    return {
        ARN: output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
        CreatedDate: output.CreatedDate !== undefined && output.CreatedDate !== null
            ? new Date(Math.round(output.CreatedDate * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        SecretBinary: output.SecretBinary !== undefined && output.SecretBinary !== null
            ? context.base64Decoder(output.SecretBinary)
            : undefined,
        SecretString: output.SecretString !== undefined && output.SecretString !== null ? output.SecretString : undefined,
        VersionId: output.VersionId !== undefined && output.VersionId !== null ? output.VersionId : undefined,
        VersionStages: output.VersionStages !== undefined && output.VersionStages !== null
            ? deserializeAws_json1_1SecretVersionStagesType(output.VersionStages, context)
            : undefined,
    };
};
const deserializeAws_json1_1InternalServiceError = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidNextTokenException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidParameterException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidRequestException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ListSecretsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        SecretList: output.SecretList !== undefined && output.SecretList !== null
            ? deserializeAws_json1_1SecretListType(output.SecretList, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListSecretVersionIdsResponse = (output, context) => {
    return {
        ARN: output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Versions: output.Versions !== undefined && output.Versions !== null
            ? deserializeAws_json1_1SecretVersionsListType(output.Versions, context)
            : undefined,
    };
};
const deserializeAws_json1_1MalformedPolicyDocumentException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1PreconditionNotMetException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1PublicPolicyException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1PutResourcePolicyResponse = (output, context) => {
    return {
        ARN: output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1PutSecretValueResponse = (output, context) => {
    return {
        ARN: output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        VersionId: output.VersionId !== undefined && output.VersionId !== null ? output.VersionId : undefined,
        VersionStages: output.VersionStages !== undefined && output.VersionStages !== null
            ? deserializeAws_json1_1SecretVersionStagesType(output.VersionStages, context)
            : undefined,
    };
};
const deserializeAws_json1_1RemoveRegionsFromReplicationResponse = (output, context) => {
    return {
        ARN: output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
        ReplicationStatus: output.ReplicationStatus !== undefined && output.ReplicationStatus !== null
            ? deserializeAws_json1_1ReplicationStatusListType(output.ReplicationStatus, context)
            : undefined,
    };
};
const deserializeAws_json1_1ReplicateSecretToRegionsResponse = (output, context) => {
    return {
        ARN: output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
        ReplicationStatus: output.ReplicationStatus !== undefined && output.ReplicationStatus !== null
            ? deserializeAws_json1_1ReplicationStatusListType(output.ReplicationStatus, context)
            : undefined,
    };
};
const deserializeAws_json1_1ReplicationStatusListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ReplicationStatusType(entry, context);
    });
};
const deserializeAws_json1_1ReplicationStatusType = (output, context) => {
    return {
        KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
        LastAccessedDate: output.LastAccessedDate !== undefined && output.LastAccessedDate !== null
            ? new Date(Math.round(output.LastAccessedDate * 1000))
            : undefined,
        Region: output.Region !== undefined && output.Region !== null ? output.Region : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StatusMessage: output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
    };
};
const deserializeAws_json1_1ResourceExistsException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1RestoreSecretResponse = (output, context) => {
    return {
        ARN: output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1RotateSecretResponse = (output, context) => {
    return {
        ARN: output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        VersionId: output.VersionId !== undefined && output.VersionId !== null ? output.VersionId : undefined,
    };
};
const deserializeAws_json1_1RotationRulesType = (output, context) => {
    return {
        AutomaticallyAfterDays: output.AutomaticallyAfterDays !== undefined && output.AutomaticallyAfterDays !== null
            ? output.AutomaticallyAfterDays
            : undefined,
    };
};
const deserializeAws_json1_1SecretListEntry = (output, context) => {
    return {
        ARN: output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
        CreatedDate: output.CreatedDate !== undefined && output.CreatedDate !== null
            ? new Date(Math.round(output.CreatedDate * 1000))
            : undefined,
        DeletedDate: output.DeletedDate !== undefined && output.DeletedDate !== null
            ? new Date(Math.round(output.DeletedDate * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
        LastAccessedDate: output.LastAccessedDate !== undefined && output.LastAccessedDate !== null
            ? new Date(Math.round(output.LastAccessedDate * 1000))
            : undefined,
        LastChangedDate: output.LastChangedDate !== undefined && output.LastChangedDate !== null
            ? new Date(Math.round(output.LastChangedDate * 1000))
            : undefined,
        LastRotatedDate: output.LastRotatedDate !== undefined && output.LastRotatedDate !== null
            ? new Date(Math.round(output.LastRotatedDate * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        OwningService: output.OwningService !== undefined && output.OwningService !== null ? output.OwningService : undefined,
        PrimaryRegion: output.PrimaryRegion !== undefined && output.PrimaryRegion !== null ? output.PrimaryRegion : undefined,
        RotationEnabled: output.RotationEnabled !== undefined && output.RotationEnabled !== null ? output.RotationEnabled : undefined,
        RotationLambdaARN: output.RotationLambdaARN !== undefined && output.RotationLambdaARN !== null
            ? output.RotationLambdaARN
            : undefined,
        RotationRules: output.RotationRules !== undefined && output.RotationRules !== null
            ? deserializeAws_json1_1RotationRulesType(output.RotationRules, context)
            : undefined,
        SecretVersionsToStages: output.SecretVersionsToStages !== undefined && output.SecretVersionsToStages !== null
            ? deserializeAws_json1_1SecretVersionsToStagesMapType(output.SecretVersionsToStages, context)
            : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagListType(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1SecretListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SecretListEntry(entry, context);
    });
};
const deserializeAws_json1_1SecretVersionsListEntry = (output, context) => {
    return {
        CreatedDate: output.CreatedDate !== undefined && output.CreatedDate !== null
            ? new Date(Math.round(output.CreatedDate * 1000))
            : undefined,
        LastAccessedDate: output.LastAccessedDate !== undefined && output.LastAccessedDate !== null
            ? new Date(Math.round(output.LastAccessedDate * 1000))
            : undefined,
        VersionId: output.VersionId !== undefined && output.VersionId !== null ? output.VersionId : undefined,
        VersionStages: output.VersionStages !== undefined && output.VersionStages !== null
            ? deserializeAws_json1_1SecretVersionStagesType(output.VersionStages, context)
            : undefined,
    };
};
const deserializeAws_json1_1SecretVersionsListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SecretVersionsListEntry(entry, context);
    });
};
const deserializeAws_json1_1SecretVersionStagesType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1SecretVersionsToStagesMapType = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_1SecretVersionStagesType(value, context),
        };
    }, {});
};
const deserializeAws_json1_1StopReplicationToReplicaResponse = (output, context) => {
    return {
        ARN: output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
    };
};
const deserializeAws_json1_1Tag = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1TagListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Tag(entry, context);
    });
};
const deserializeAws_json1_1UpdateSecretResponse = (output, context) => {
    return {
        ARN: output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        VersionId: output.VersionId !== undefined && output.VersionId !== null ? output.VersionId : undefined,
    };
};
const deserializeAws_json1_1UpdateSecretVersionStageResponse = (output, context) => {
    return {
        ARN: output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1ValidateResourcePolicyResponse = (output, context) => {
    return {
        PolicyValidationPassed: output.PolicyValidationPassed !== undefined && output.PolicyValidationPassed !== null
            ? output.PolicyValidationPassed
            : undefined,
        ValidationErrors: output.ValidationErrors !== undefined && output.ValidationErrors !== null
            ? deserializeAws_json1_1ValidationErrorsType(output.ValidationErrors, context)
            : undefined,
    };
};
const deserializeAws_json1_1ValidationErrorsEntry = (output, context) => {
    return {
        CheckName: output.CheckName !== undefined && output.CheckName !== null ? output.CheckName : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
    };
};
const deserializeAws_json1_1ValidationErrorsType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ValidationErrorsEntry(entry, context);
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