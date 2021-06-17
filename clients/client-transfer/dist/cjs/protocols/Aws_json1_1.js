"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1UpdateUserCommand = exports.deserializeAws_json1_1UpdateServerCommand = exports.deserializeAws_json1_1UpdateAccessCommand = exports.deserializeAws_json1_1UntagResourceCommand = exports.deserializeAws_json1_1TestIdentityProviderCommand = exports.deserializeAws_json1_1TagResourceCommand = exports.deserializeAws_json1_1StopServerCommand = exports.deserializeAws_json1_1StartServerCommand = exports.deserializeAws_json1_1ListUsersCommand = exports.deserializeAws_json1_1ListTagsForResourceCommand = exports.deserializeAws_json1_1ListServersCommand = exports.deserializeAws_json1_1ListSecurityPoliciesCommand = exports.deserializeAws_json1_1ListAccessesCommand = exports.deserializeAws_json1_1ImportSshPublicKeyCommand = exports.deserializeAws_json1_1DescribeUserCommand = exports.deserializeAws_json1_1DescribeServerCommand = exports.deserializeAws_json1_1DescribeSecurityPolicyCommand = exports.deserializeAws_json1_1DescribeAccessCommand = exports.deserializeAws_json1_1DeleteUserCommand = exports.deserializeAws_json1_1DeleteSshPublicKeyCommand = exports.deserializeAws_json1_1DeleteServerCommand = exports.deserializeAws_json1_1DeleteAccessCommand = exports.deserializeAws_json1_1CreateUserCommand = exports.deserializeAws_json1_1CreateServerCommand = exports.deserializeAws_json1_1CreateAccessCommand = exports.serializeAws_json1_1UpdateUserCommand = exports.serializeAws_json1_1UpdateServerCommand = exports.serializeAws_json1_1UpdateAccessCommand = exports.serializeAws_json1_1UntagResourceCommand = exports.serializeAws_json1_1TestIdentityProviderCommand = exports.serializeAws_json1_1TagResourceCommand = exports.serializeAws_json1_1StopServerCommand = exports.serializeAws_json1_1StartServerCommand = exports.serializeAws_json1_1ListUsersCommand = exports.serializeAws_json1_1ListTagsForResourceCommand = exports.serializeAws_json1_1ListServersCommand = exports.serializeAws_json1_1ListSecurityPoliciesCommand = exports.serializeAws_json1_1ListAccessesCommand = exports.serializeAws_json1_1ImportSshPublicKeyCommand = exports.serializeAws_json1_1DescribeUserCommand = exports.serializeAws_json1_1DescribeServerCommand = exports.serializeAws_json1_1DescribeSecurityPolicyCommand = exports.serializeAws_json1_1DescribeAccessCommand = exports.serializeAws_json1_1DeleteUserCommand = exports.serializeAws_json1_1DeleteSshPublicKeyCommand = exports.serializeAws_json1_1DeleteServerCommand = exports.serializeAws_json1_1DeleteAccessCommand = exports.serializeAws_json1_1CreateUserCommand = exports.serializeAws_json1_1CreateServerCommand = exports.serializeAws_json1_1CreateAccessCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1CreateAccessCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TransferService.CreateAccess",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateAccessRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateAccessCommand = serializeAws_json1_1CreateAccessCommand;
const serializeAws_json1_1CreateServerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TransferService.CreateServer",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateServerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateServerCommand = serializeAws_json1_1CreateServerCommand;
const serializeAws_json1_1CreateUserCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TransferService.CreateUser",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateUserRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateUserCommand = serializeAws_json1_1CreateUserCommand;
const serializeAws_json1_1DeleteAccessCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TransferService.DeleteAccess",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteAccessRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteAccessCommand = serializeAws_json1_1DeleteAccessCommand;
const serializeAws_json1_1DeleteServerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TransferService.DeleteServer",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteServerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteServerCommand = serializeAws_json1_1DeleteServerCommand;
const serializeAws_json1_1DeleteSshPublicKeyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TransferService.DeleteSshPublicKey",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteSshPublicKeyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteSshPublicKeyCommand = serializeAws_json1_1DeleteSshPublicKeyCommand;
const serializeAws_json1_1DeleteUserCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TransferService.DeleteUser",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteUserRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteUserCommand = serializeAws_json1_1DeleteUserCommand;
const serializeAws_json1_1DescribeAccessCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TransferService.DescribeAccess",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAccessRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeAccessCommand = serializeAws_json1_1DescribeAccessCommand;
const serializeAws_json1_1DescribeSecurityPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TransferService.DescribeSecurityPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeSecurityPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeSecurityPolicyCommand = serializeAws_json1_1DescribeSecurityPolicyCommand;
const serializeAws_json1_1DescribeServerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TransferService.DescribeServer",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeServerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeServerCommand = serializeAws_json1_1DescribeServerCommand;
const serializeAws_json1_1DescribeUserCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TransferService.DescribeUser",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeUserRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeUserCommand = serializeAws_json1_1DescribeUserCommand;
const serializeAws_json1_1ImportSshPublicKeyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TransferService.ImportSshPublicKey",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ImportSshPublicKeyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ImportSshPublicKeyCommand = serializeAws_json1_1ImportSshPublicKeyCommand;
const serializeAws_json1_1ListAccessesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TransferService.ListAccesses",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAccessesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListAccessesCommand = serializeAws_json1_1ListAccessesCommand;
const serializeAws_json1_1ListSecurityPoliciesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TransferService.ListSecurityPolicies",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListSecurityPoliciesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListSecurityPoliciesCommand = serializeAws_json1_1ListSecurityPoliciesCommand;
const serializeAws_json1_1ListServersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TransferService.ListServers",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListServersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListServersCommand = serializeAws_json1_1ListServersCommand;
const serializeAws_json1_1ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TransferService.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
const serializeAws_json1_1ListUsersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TransferService.ListUsers",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListUsersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListUsersCommand = serializeAws_json1_1ListUsersCommand;
const serializeAws_json1_1StartServerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TransferService.StartServer",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartServerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartServerCommand = serializeAws_json1_1StartServerCommand;
const serializeAws_json1_1StopServerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TransferService.StopServer",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StopServerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopServerCommand = serializeAws_json1_1StopServerCommand;
const serializeAws_json1_1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TransferService.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
const serializeAws_json1_1TestIdentityProviderCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TransferService.TestIdentityProvider",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TestIdentityProviderRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TestIdentityProviderCommand = serializeAws_json1_1TestIdentityProviderCommand;
const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TransferService.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
const serializeAws_json1_1UpdateAccessCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TransferService.UpdateAccess",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateAccessRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateAccessCommand = serializeAws_json1_1UpdateAccessCommand;
const serializeAws_json1_1UpdateServerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TransferService.UpdateServer",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateServerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateServerCommand = serializeAws_json1_1UpdateServerCommand;
const serializeAws_json1_1UpdateUserCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TransferService.UpdateUser",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateUserRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateUserCommand = serializeAws_json1_1UpdateUserCommand;
const deserializeAws_json1_1CreateAccessCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateAccessCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateAccessResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateAccessCommand = deserializeAws_json1_1CreateAccessCommand;
const deserializeAws_json1_1CreateAccessCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.transfer#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.transfer#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceExistsException":
        case "com.amazonaws.transfer#ResourceExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.transfer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.transfer#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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
        case "AccessDeniedException":
        case "com.amazonaws.transfer#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceError":
        case "com.amazonaws.transfer#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.transfer#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceExistsException":
        case "com.amazonaws.transfer#ResourceExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.transfer#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.transfer#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateUserCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateUserCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateUserResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateUserCommand = deserializeAws_json1_1CreateUserCommand;
const deserializeAws_json1_1CreateUserCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.transfer#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.transfer#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceExistsException":
        case "com.amazonaws.transfer#ResourceExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.transfer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.transfer#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteAccessCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteAccessCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteAccessCommand = deserializeAws_json1_1DeleteAccessCommand;
const deserializeAws_json1_1DeleteAccessCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.transfer#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.transfer#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.transfer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.transfer#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
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
        case "AccessDeniedException":
        case "com.amazonaws.transfer#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceError":
        case "com.amazonaws.transfer#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.transfer#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.transfer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.transfer#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteSshPublicKeyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteSshPublicKeyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteSshPublicKeyCommand = deserializeAws_json1_1DeleteSshPublicKeyCommand;
const deserializeAws_json1_1DeleteSshPublicKeyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.transfer#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.transfer#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.transfer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.transfer#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.transfer#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteUserCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteUserCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteUserCommand = deserializeAws_json1_1DeleteUserCommand;
const deserializeAws_json1_1DeleteUserCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.transfer#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.transfer#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.transfer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.transfer#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeAccessCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeAccessCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAccessResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeAccessCommand = deserializeAws_json1_1DescribeAccessCommand;
const deserializeAws_json1_1DescribeAccessCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.transfer#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.transfer#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.transfer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.transfer#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeSecurityPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeSecurityPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeSecurityPolicyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeSecurityPolicyCommand = deserializeAws_json1_1DescribeSecurityPolicyCommand;
const deserializeAws_json1_1DescribeSecurityPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.transfer#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.transfer#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.transfer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.transfer#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeServerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeServerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeServerResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeServerCommand = deserializeAws_json1_1DescribeServerCommand;
const deserializeAws_json1_1DescribeServerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.transfer#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.transfer#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.transfer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.transfer#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeUserCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeUserCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeUserResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeUserCommand = deserializeAws_json1_1DescribeUserCommand;
const deserializeAws_json1_1DescribeUserCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.transfer#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.transfer#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.transfer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.transfer#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ImportSshPublicKeyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ImportSshPublicKeyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ImportSshPublicKeyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ImportSshPublicKeyCommand = deserializeAws_json1_1ImportSshPublicKeyCommand;
const deserializeAws_json1_1ImportSshPublicKeyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.transfer#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.transfer#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceExistsException":
        case "com.amazonaws.transfer#ResourceExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.transfer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.transfer#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.transfer#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListAccessesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListAccessesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAccessesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListAccessesCommand = deserializeAws_json1_1ListAccessesCommand;
const deserializeAws_json1_1ListAccessesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.transfer#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.transfer#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.transfer#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.transfer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.transfer#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListSecurityPoliciesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListSecurityPoliciesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListSecurityPoliciesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListSecurityPoliciesCommand = deserializeAws_json1_1ListSecurityPoliciesCommand;
const deserializeAws_json1_1ListSecurityPoliciesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.transfer#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.transfer#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.transfer#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.transfer#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListServersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListServersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListServersResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListServersCommand = deserializeAws_json1_1ListServersCommand;
const deserializeAws_json1_1ListServersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.transfer#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.transfer#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.transfer#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.transfer#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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
        case "InternalServiceError":
        case "com.amazonaws.transfer#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.transfer#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.transfer#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.transfer#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListUsersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListUsersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListUsersResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListUsersCommand = deserializeAws_json1_1ListUsersCommand;
const deserializeAws_json1_1ListUsersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.transfer#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.transfer#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.transfer#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.transfer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.transfer#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StartServerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartServerCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartServerCommand = deserializeAws_json1_1StartServerCommand;
const deserializeAws_json1_1StartServerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.transfer#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.transfer#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.transfer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.transfer#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.transfer#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StopServerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StopServerCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopServerCommand = deserializeAws_json1_1StopServerCommand;
const deserializeAws_json1_1StopServerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.transfer#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.transfer#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.transfer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.transfer#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.transfer#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
        case "com.amazonaws.transfer#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.transfer#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.transfer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.transfer#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1TestIdentityProviderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1TestIdentityProviderCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TestIdentityProviderResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1TestIdentityProviderCommand = deserializeAws_json1_1TestIdentityProviderCommand;
const deserializeAws_json1_1TestIdentityProviderCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.transfer#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.transfer#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.transfer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.transfer#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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
        case "com.amazonaws.transfer#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.transfer#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.transfer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.transfer#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateAccessCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateAccessCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateAccessResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateAccessCommand = deserializeAws_json1_1UpdateAccessCommand;
const deserializeAws_json1_1UpdateAccessCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.transfer#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.transfer#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceExistsException":
        case "com.amazonaws.transfer#ResourceExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.transfer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.transfer#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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
        case "AccessDeniedException":
        case "com.amazonaws.transfer#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.transfer#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceError":
        case "com.amazonaws.transfer#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.transfer#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceExistsException":
        case "com.amazonaws.transfer#ResourceExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.transfer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.transfer#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.transfer#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateUserCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateUserCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateUserResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateUserCommand = deserializeAws_json1_1UpdateUserCommand;
const deserializeAws_json1_1UpdateUserCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.transfer#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.transfer#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.transfer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.transfer#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.transfer#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AccessDeniedException(body, context);
    const contents = {
        name: "AccessDeniedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ConflictExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConflictException(body, context);
    const contents = {
        name: "ConflictException",
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
const deserializeAws_json1_1ServiceUnavailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceUnavailableException(body, context);
    const contents = {
        name: "ServiceUnavailableException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ThrottlingException(body, context);
    const contents = {
        name: "ThrottlingException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1AddressAllocationIds = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1CreateAccessRequest = (input, context) => {
    return {
        ...(input.ExternalId !== undefined && input.ExternalId !== null && { ExternalId: input.ExternalId }),
        ...(input.HomeDirectory !== undefined && input.HomeDirectory !== null && { HomeDirectory: input.HomeDirectory }),
        ...(input.HomeDirectoryMappings !== undefined &&
            input.HomeDirectoryMappings !== null && {
            HomeDirectoryMappings: serializeAws_json1_1HomeDirectoryMappings(input.HomeDirectoryMappings, context),
        }),
        ...(input.HomeDirectoryType !== undefined &&
            input.HomeDirectoryType !== null && { HomeDirectoryType: input.HomeDirectoryType }),
        ...(input.Policy !== undefined && input.Policy !== null && { Policy: input.Policy }),
        ...(input.PosixProfile !== undefined &&
            input.PosixProfile !== null && { PosixProfile: serializeAws_json1_1PosixProfile(input.PosixProfile, context) }),
        ...(input.Role !== undefined && input.Role !== null && { Role: input.Role }),
        ...(input.ServerId !== undefined && input.ServerId !== null && { ServerId: input.ServerId }),
    };
};
const serializeAws_json1_1CreateServerRequest = (input, context) => {
    return {
        ...(input.Certificate !== undefined && input.Certificate !== null && { Certificate: input.Certificate }),
        ...(input.Domain !== undefined && input.Domain !== null && { Domain: input.Domain }),
        ...(input.EndpointDetails !== undefined &&
            input.EndpointDetails !== null && {
            EndpointDetails: serializeAws_json1_1EndpointDetails(input.EndpointDetails, context),
        }),
        ...(input.EndpointType !== undefined && input.EndpointType !== null && { EndpointType: input.EndpointType }),
        ...(input.HostKey !== undefined && input.HostKey !== null && { HostKey: input.HostKey }),
        ...(input.IdentityProviderDetails !== undefined &&
            input.IdentityProviderDetails !== null && {
            IdentityProviderDetails: serializeAws_json1_1IdentityProviderDetails(input.IdentityProviderDetails, context),
        }),
        ...(input.IdentityProviderType !== undefined &&
            input.IdentityProviderType !== null && { IdentityProviderType: input.IdentityProviderType }),
        ...(input.LoggingRole !== undefined && input.LoggingRole !== null && { LoggingRole: input.LoggingRole }),
        ...(input.Protocols !== undefined &&
            input.Protocols !== null && { Protocols: serializeAws_json1_1Protocols(input.Protocols, context) }),
        ...(input.SecurityPolicyName !== undefined &&
            input.SecurityPolicyName !== null && { SecurityPolicyName: input.SecurityPolicyName }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateUserRequest = (input, context) => {
    return {
        ...(input.HomeDirectory !== undefined && input.HomeDirectory !== null && { HomeDirectory: input.HomeDirectory }),
        ...(input.HomeDirectoryMappings !== undefined &&
            input.HomeDirectoryMappings !== null && {
            HomeDirectoryMappings: serializeAws_json1_1HomeDirectoryMappings(input.HomeDirectoryMappings, context),
        }),
        ...(input.HomeDirectoryType !== undefined &&
            input.HomeDirectoryType !== null && { HomeDirectoryType: input.HomeDirectoryType }),
        ...(input.Policy !== undefined && input.Policy !== null && { Policy: input.Policy }),
        ...(input.PosixProfile !== undefined &&
            input.PosixProfile !== null && { PosixProfile: serializeAws_json1_1PosixProfile(input.PosixProfile, context) }),
        ...(input.Role !== undefined && input.Role !== null && { Role: input.Role }),
        ...(input.ServerId !== undefined && input.ServerId !== null && { ServerId: input.ServerId }),
        ...(input.SshPublicKeyBody !== undefined &&
            input.SshPublicKeyBody !== null && { SshPublicKeyBody: input.SshPublicKeyBody }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
        ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
    };
};
const serializeAws_json1_1DeleteAccessRequest = (input, context) => {
    return {
        ...(input.ExternalId !== undefined && input.ExternalId !== null && { ExternalId: input.ExternalId }),
        ...(input.ServerId !== undefined && input.ServerId !== null && { ServerId: input.ServerId }),
    };
};
const serializeAws_json1_1DeleteServerRequest = (input, context) => {
    return {
        ...(input.ServerId !== undefined && input.ServerId !== null && { ServerId: input.ServerId }),
    };
};
const serializeAws_json1_1DeleteSshPublicKeyRequest = (input, context) => {
    return {
        ...(input.ServerId !== undefined && input.ServerId !== null && { ServerId: input.ServerId }),
        ...(input.SshPublicKeyId !== undefined &&
            input.SshPublicKeyId !== null && { SshPublicKeyId: input.SshPublicKeyId }),
        ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
    };
};
const serializeAws_json1_1DeleteUserRequest = (input, context) => {
    return {
        ...(input.ServerId !== undefined && input.ServerId !== null && { ServerId: input.ServerId }),
        ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
    };
};
const serializeAws_json1_1DescribeAccessRequest = (input, context) => {
    return {
        ...(input.ExternalId !== undefined && input.ExternalId !== null && { ExternalId: input.ExternalId }),
        ...(input.ServerId !== undefined && input.ServerId !== null && { ServerId: input.ServerId }),
    };
};
const serializeAws_json1_1DescribeSecurityPolicyRequest = (input, context) => {
    return {
        ...(input.SecurityPolicyName !== undefined &&
            input.SecurityPolicyName !== null && { SecurityPolicyName: input.SecurityPolicyName }),
    };
};
const serializeAws_json1_1DescribeServerRequest = (input, context) => {
    return {
        ...(input.ServerId !== undefined && input.ServerId !== null && { ServerId: input.ServerId }),
    };
};
const serializeAws_json1_1DescribeUserRequest = (input, context) => {
    return {
        ...(input.ServerId !== undefined && input.ServerId !== null && { ServerId: input.ServerId }),
        ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
    };
};
const serializeAws_json1_1EndpointDetails = (input, context) => {
    return {
        ...(input.AddressAllocationIds !== undefined &&
            input.AddressAllocationIds !== null && {
            AddressAllocationIds: serializeAws_json1_1AddressAllocationIds(input.AddressAllocationIds, context),
        }),
        ...(input.SecurityGroupIds !== undefined &&
            input.SecurityGroupIds !== null && {
            SecurityGroupIds: serializeAws_json1_1SecurityGroupIds(input.SecurityGroupIds, context),
        }),
        ...(input.SubnetIds !== undefined &&
            input.SubnetIds !== null && { SubnetIds: serializeAws_json1_1SubnetIds(input.SubnetIds, context) }),
        ...(input.VpcEndpointId !== undefined && input.VpcEndpointId !== null && { VpcEndpointId: input.VpcEndpointId }),
        ...(input.VpcId !== undefined && input.VpcId !== null && { VpcId: input.VpcId }),
    };
};
const serializeAws_json1_1HomeDirectoryMapEntry = (input, context) => {
    return {
        ...(input.Entry !== undefined && input.Entry !== null && { Entry: input.Entry }),
        ...(input.Target !== undefined && input.Target !== null && { Target: input.Target }),
    };
};
const serializeAws_json1_1HomeDirectoryMappings = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1HomeDirectoryMapEntry(entry, context);
    });
};
const serializeAws_json1_1IdentityProviderDetails = (input, context) => {
    return {
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
        ...(input.InvocationRole !== undefined &&
            input.InvocationRole !== null && { InvocationRole: input.InvocationRole }),
        ...(input.Url !== undefined && input.Url !== null && { Url: input.Url }),
    };
};
const serializeAws_json1_1ImportSshPublicKeyRequest = (input, context) => {
    return {
        ...(input.ServerId !== undefined && input.ServerId !== null && { ServerId: input.ServerId }),
        ...(input.SshPublicKeyBody !== undefined &&
            input.SshPublicKeyBody !== null && { SshPublicKeyBody: input.SshPublicKeyBody }),
        ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
    };
};
const serializeAws_json1_1ListAccessesRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ServerId !== undefined && input.ServerId !== null && { ServerId: input.ServerId }),
    };
};
const serializeAws_json1_1ListSecurityPoliciesRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListServersRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    return {
        ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListUsersRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ServerId !== undefined && input.ServerId !== null && { ServerId: input.ServerId }),
    };
};
const serializeAws_json1_1PosixProfile = (input, context) => {
    return {
        ...(input.Gid !== undefined && input.Gid !== null && { Gid: input.Gid }),
        ...(input.SecondaryGids !== undefined &&
            input.SecondaryGids !== null && {
            SecondaryGids: serializeAws_json1_1SecondaryGids(input.SecondaryGids, context),
        }),
        ...(input.Uid !== undefined && input.Uid !== null && { Uid: input.Uid }),
    };
};
const serializeAws_json1_1Protocols = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1SecondaryGids = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
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
const serializeAws_json1_1StartServerRequest = (input, context) => {
    return {
        ...(input.ServerId !== undefined && input.ServerId !== null && { ServerId: input.ServerId }),
    };
};
const serializeAws_json1_1StopServerRequest = (input, context) => {
    return {
        ...(input.ServerId !== undefined && input.ServerId !== null && { ServerId: input.ServerId }),
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
        ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
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
const serializeAws_json1_1TestIdentityProviderRequest = (input, context) => {
    return {
        ...(input.ServerId !== undefined && input.ServerId !== null && { ServerId: input.ServerId }),
        ...(input.ServerProtocol !== undefined &&
            input.ServerProtocol !== null && { ServerProtocol: input.ServerProtocol }),
        ...(input.SourceIp !== undefined && input.SourceIp !== null && { SourceIp: input.SourceIp }),
        ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
        ...(input.UserPassword !== undefined && input.UserPassword !== null && { UserPassword: input.UserPassword }),
    };
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    return {
        ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
        ...(input.TagKeys !== undefined &&
            input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeys(input.TagKeys, context) }),
    };
};
const serializeAws_json1_1UpdateAccessRequest = (input, context) => {
    return {
        ...(input.ExternalId !== undefined && input.ExternalId !== null && { ExternalId: input.ExternalId }),
        ...(input.HomeDirectory !== undefined && input.HomeDirectory !== null && { HomeDirectory: input.HomeDirectory }),
        ...(input.HomeDirectoryMappings !== undefined &&
            input.HomeDirectoryMappings !== null && {
            HomeDirectoryMappings: serializeAws_json1_1HomeDirectoryMappings(input.HomeDirectoryMappings, context),
        }),
        ...(input.HomeDirectoryType !== undefined &&
            input.HomeDirectoryType !== null && { HomeDirectoryType: input.HomeDirectoryType }),
        ...(input.Policy !== undefined && input.Policy !== null && { Policy: input.Policy }),
        ...(input.PosixProfile !== undefined &&
            input.PosixProfile !== null && { PosixProfile: serializeAws_json1_1PosixProfile(input.PosixProfile, context) }),
        ...(input.Role !== undefined && input.Role !== null && { Role: input.Role }),
        ...(input.ServerId !== undefined && input.ServerId !== null && { ServerId: input.ServerId }),
    };
};
const serializeAws_json1_1UpdateServerRequest = (input, context) => {
    return {
        ...(input.Certificate !== undefined && input.Certificate !== null && { Certificate: input.Certificate }),
        ...(input.EndpointDetails !== undefined &&
            input.EndpointDetails !== null && {
            EndpointDetails: serializeAws_json1_1EndpointDetails(input.EndpointDetails, context),
        }),
        ...(input.EndpointType !== undefined && input.EndpointType !== null && { EndpointType: input.EndpointType }),
        ...(input.HostKey !== undefined && input.HostKey !== null && { HostKey: input.HostKey }),
        ...(input.IdentityProviderDetails !== undefined &&
            input.IdentityProviderDetails !== null && {
            IdentityProviderDetails: serializeAws_json1_1IdentityProviderDetails(input.IdentityProviderDetails, context),
        }),
        ...(input.LoggingRole !== undefined && input.LoggingRole !== null && { LoggingRole: input.LoggingRole }),
        ...(input.Protocols !== undefined &&
            input.Protocols !== null && { Protocols: serializeAws_json1_1Protocols(input.Protocols, context) }),
        ...(input.SecurityPolicyName !== undefined &&
            input.SecurityPolicyName !== null && { SecurityPolicyName: input.SecurityPolicyName }),
        ...(input.ServerId !== undefined && input.ServerId !== null && { ServerId: input.ServerId }),
    };
};
const serializeAws_json1_1UpdateUserRequest = (input, context) => {
    return {
        ...(input.HomeDirectory !== undefined && input.HomeDirectory !== null && { HomeDirectory: input.HomeDirectory }),
        ...(input.HomeDirectoryMappings !== undefined &&
            input.HomeDirectoryMappings !== null && {
            HomeDirectoryMappings: serializeAws_json1_1HomeDirectoryMappings(input.HomeDirectoryMappings, context),
        }),
        ...(input.HomeDirectoryType !== undefined &&
            input.HomeDirectoryType !== null && { HomeDirectoryType: input.HomeDirectoryType }),
        ...(input.Policy !== undefined && input.Policy !== null && { Policy: input.Policy }),
        ...(input.PosixProfile !== undefined &&
            input.PosixProfile !== null && { PosixProfile: serializeAws_json1_1PosixProfile(input.PosixProfile, context) }),
        ...(input.Role !== undefined && input.Role !== null && { Role: input.Role }),
        ...(input.ServerId !== undefined && input.ServerId !== null && { ServerId: input.ServerId }),
        ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
    };
};
const deserializeAws_json1_1AccessDeniedException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1AddressAllocationIds = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ConflictException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1CreateAccessResponse = (output, context) => {
    return {
        ExternalId: output.ExternalId !== undefined && output.ExternalId !== null ? output.ExternalId : undefined,
        ServerId: output.ServerId !== undefined && output.ServerId !== null ? output.ServerId : undefined,
    };
};
const deserializeAws_json1_1CreateServerResponse = (output, context) => {
    return {
        ServerId: output.ServerId !== undefined && output.ServerId !== null ? output.ServerId : undefined,
    };
};
const deserializeAws_json1_1CreateUserResponse = (output, context) => {
    return {
        ServerId: output.ServerId !== undefined && output.ServerId !== null ? output.ServerId : undefined,
        UserName: output.UserName !== undefined && output.UserName !== null ? output.UserName : undefined,
    };
};
const deserializeAws_json1_1DescribeAccessResponse = (output, context) => {
    return {
        Access: output.Access !== undefined && output.Access !== null
            ? deserializeAws_json1_1DescribedAccess(output.Access, context)
            : undefined,
        ServerId: output.ServerId !== undefined && output.ServerId !== null ? output.ServerId : undefined,
    };
};
const deserializeAws_json1_1DescribedAccess = (output, context) => {
    return {
        ExternalId: output.ExternalId !== undefined && output.ExternalId !== null ? output.ExternalId : undefined,
        HomeDirectory: output.HomeDirectory !== undefined && output.HomeDirectory !== null ? output.HomeDirectory : undefined,
        HomeDirectoryMappings: output.HomeDirectoryMappings !== undefined && output.HomeDirectoryMappings !== null
            ? deserializeAws_json1_1HomeDirectoryMappings(output.HomeDirectoryMappings, context)
            : undefined,
        HomeDirectoryType: output.HomeDirectoryType !== undefined && output.HomeDirectoryType !== null
            ? output.HomeDirectoryType
            : undefined,
        Policy: output.Policy !== undefined && output.Policy !== null ? output.Policy : undefined,
        PosixProfile: output.PosixProfile !== undefined && output.PosixProfile !== null
            ? deserializeAws_json1_1PosixProfile(output.PosixProfile, context)
            : undefined,
        Role: output.Role !== undefined && output.Role !== null ? output.Role : undefined,
    };
};
const deserializeAws_json1_1DescribedSecurityPolicy = (output, context) => {
    return {
        Fips: output.Fips !== undefined && output.Fips !== null ? output.Fips : undefined,
        SecurityPolicyName: output.SecurityPolicyName !== undefined && output.SecurityPolicyName !== null
            ? output.SecurityPolicyName
            : undefined,
        SshCiphers: output.SshCiphers !== undefined && output.SshCiphers !== null
            ? deserializeAws_json1_1SecurityPolicyOptions(output.SshCiphers, context)
            : undefined,
        SshKexs: output.SshKexs !== undefined && output.SshKexs !== null
            ? deserializeAws_json1_1SecurityPolicyOptions(output.SshKexs, context)
            : undefined,
        SshMacs: output.SshMacs !== undefined && output.SshMacs !== null
            ? deserializeAws_json1_1SecurityPolicyOptions(output.SshMacs, context)
            : undefined,
        TlsCiphers: output.TlsCiphers !== undefined && output.TlsCiphers !== null
            ? deserializeAws_json1_1SecurityPolicyOptions(output.TlsCiphers, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribedServer = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Certificate: output.Certificate !== undefined && output.Certificate !== null ? output.Certificate : undefined,
        Domain: output.Domain !== undefined && output.Domain !== null ? output.Domain : undefined,
        EndpointDetails: output.EndpointDetails !== undefined && output.EndpointDetails !== null
            ? deserializeAws_json1_1EndpointDetails(output.EndpointDetails, context)
            : undefined,
        EndpointType: output.EndpointType !== undefined && output.EndpointType !== null ? output.EndpointType : undefined,
        HostKeyFingerprint: output.HostKeyFingerprint !== undefined && output.HostKeyFingerprint !== null
            ? output.HostKeyFingerprint
            : undefined,
        IdentityProviderDetails: output.IdentityProviderDetails !== undefined && output.IdentityProviderDetails !== null
            ? deserializeAws_json1_1IdentityProviderDetails(output.IdentityProviderDetails, context)
            : undefined,
        IdentityProviderType: output.IdentityProviderType !== undefined && output.IdentityProviderType !== null
            ? output.IdentityProviderType
            : undefined,
        LoggingRole: output.LoggingRole !== undefined && output.LoggingRole !== null ? output.LoggingRole : undefined,
        Protocols: output.Protocols !== undefined && output.Protocols !== null
            ? deserializeAws_json1_1Protocols(output.Protocols, context)
            : undefined,
        SecurityPolicyName: output.SecurityPolicyName !== undefined && output.SecurityPolicyName !== null
            ? output.SecurityPolicyName
            : undefined,
        ServerId: output.ServerId !== undefined && output.ServerId !== null ? output.ServerId : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
        UserCount: output.UserCount !== undefined && output.UserCount !== null ? output.UserCount : undefined,
    };
};
const deserializeAws_json1_1DescribedUser = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        HomeDirectory: output.HomeDirectory !== undefined && output.HomeDirectory !== null ? output.HomeDirectory : undefined,
        HomeDirectoryMappings: output.HomeDirectoryMappings !== undefined && output.HomeDirectoryMappings !== null
            ? deserializeAws_json1_1HomeDirectoryMappings(output.HomeDirectoryMappings, context)
            : undefined,
        HomeDirectoryType: output.HomeDirectoryType !== undefined && output.HomeDirectoryType !== null
            ? output.HomeDirectoryType
            : undefined,
        Policy: output.Policy !== undefined && output.Policy !== null ? output.Policy : undefined,
        PosixProfile: output.PosixProfile !== undefined && output.PosixProfile !== null
            ? deserializeAws_json1_1PosixProfile(output.PosixProfile, context)
            : undefined,
        Role: output.Role !== undefined && output.Role !== null ? output.Role : undefined,
        SshPublicKeys: output.SshPublicKeys !== undefined && output.SshPublicKeys !== null
            ? deserializeAws_json1_1SshPublicKeys(output.SshPublicKeys, context)
            : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
        UserName: output.UserName !== undefined && output.UserName !== null ? output.UserName : undefined,
    };
};
const deserializeAws_json1_1DescribeSecurityPolicyResponse = (output, context) => {
    return {
        SecurityPolicy: output.SecurityPolicy !== undefined && output.SecurityPolicy !== null
            ? deserializeAws_json1_1DescribedSecurityPolicy(output.SecurityPolicy, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeServerResponse = (output, context) => {
    return {
        Server: output.Server !== undefined && output.Server !== null
            ? deserializeAws_json1_1DescribedServer(output.Server, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeUserResponse = (output, context) => {
    return {
        ServerId: output.ServerId !== undefined && output.ServerId !== null ? output.ServerId : undefined,
        User: output.User !== undefined && output.User !== null
            ? deserializeAws_json1_1DescribedUser(output.User, context)
            : undefined,
    };
};
const deserializeAws_json1_1EndpointDetails = (output, context) => {
    return {
        AddressAllocationIds: output.AddressAllocationIds !== undefined && output.AddressAllocationIds !== null
            ? deserializeAws_json1_1AddressAllocationIds(output.AddressAllocationIds, context)
            : undefined,
        SecurityGroupIds: output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
            ? deserializeAws_json1_1SecurityGroupIds(output.SecurityGroupIds, context)
            : undefined,
        SubnetIds: output.SubnetIds !== undefined && output.SubnetIds !== null
            ? deserializeAws_json1_1SubnetIds(output.SubnetIds, context)
            : undefined,
        VpcEndpointId: output.VpcEndpointId !== undefined && output.VpcEndpointId !== null ? output.VpcEndpointId : undefined,
        VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
    };
};
const deserializeAws_json1_1HomeDirectoryMapEntry = (output, context) => {
    return {
        Entry: output.Entry !== undefined && output.Entry !== null ? output.Entry : undefined,
        Target: output.Target !== undefined && output.Target !== null ? output.Target : undefined,
    };
};
const deserializeAws_json1_1HomeDirectoryMappings = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1HomeDirectoryMapEntry(entry, context);
    });
};
const deserializeAws_json1_1IdentityProviderDetails = (output, context) => {
    return {
        DirectoryId: output.DirectoryId !== undefined && output.DirectoryId !== null ? output.DirectoryId : undefined,
        InvocationRole: output.InvocationRole !== undefined && output.InvocationRole !== null ? output.InvocationRole : undefined,
        Url: output.Url !== undefined && output.Url !== null ? output.Url : undefined,
    };
};
const deserializeAws_json1_1ImportSshPublicKeyResponse = (output, context) => {
    return {
        ServerId: output.ServerId !== undefined && output.ServerId !== null ? output.ServerId : undefined,
        SshPublicKeyId: output.SshPublicKeyId !== undefined && output.SshPublicKeyId !== null ? output.SshPublicKeyId : undefined,
        UserName: output.UserName !== undefined && output.UserName !== null ? output.UserName : undefined,
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
const deserializeAws_json1_1InvalidRequestException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ListAccessesResponse = (output, context) => {
    return {
        Accesses: output.Accesses !== undefined && output.Accesses !== null
            ? deserializeAws_json1_1ListedAccesses(output.Accesses, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        ServerId: output.ServerId !== undefined && output.ServerId !== null ? output.ServerId : undefined,
    };
};
const deserializeAws_json1_1ListedAccess = (output, context) => {
    return {
        ExternalId: output.ExternalId !== undefined && output.ExternalId !== null ? output.ExternalId : undefined,
        HomeDirectory: output.HomeDirectory !== undefined && output.HomeDirectory !== null ? output.HomeDirectory : undefined,
        HomeDirectoryType: output.HomeDirectoryType !== undefined && output.HomeDirectoryType !== null
            ? output.HomeDirectoryType
            : undefined,
        Role: output.Role !== undefined && output.Role !== null ? output.Role : undefined,
    };
};
const deserializeAws_json1_1ListedAccesses = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ListedAccess(entry, context);
    });
};
const deserializeAws_json1_1ListedServer = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Domain: output.Domain !== undefined && output.Domain !== null ? output.Domain : undefined,
        EndpointType: output.EndpointType !== undefined && output.EndpointType !== null ? output.EndpointType : undefined,
        IdentityProviderType: output.IdentityProviderType !== undefined && output.IdentityProviderType !== null
            ? output.IdentityProviderType
            : undefined,
        LoggingRole: output.LoggingRole !== undefined && output.LoggingRole !== null ? output.LoggingRole : undefined,
        ServerId: output.ServerId !== undefined && output.ServerId !== null ? output.ServerId : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        UserCount: output.UserCount !== undefined && output.UserCount !== null ? output.UserCount : undefined,
    };
};
const deserializeAws_json1_1ListedServers = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ListedServer(entry, context);
    });
};
const deserializeAws_json1_1ListedUser = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        HomeDirectory: output.HomeDirectory !== undefined && output.HomeDirectory !== null ? output.HomeDirectory : undefined,
        HomeDirectoryType: output.HomeDirectoryType !== undefined && output.HomeDirectoryType !== null
            ? output.HomeDirectoryType
            : undefined,
        Role: output.Role !== undefined && output.Role !== null ? output.Role : undefined,
        SshPublicKeyCount: output.SshPublicKeyCount !== undefined && output.SshPublicKeyCount !== null
            ? output.SshPublicKeyCount
            : undefined,
        UserName: output.UserName !== undefined && output.UserName !== null ? output.UserName : undefined,
    };
};
const deserializeAws_json1_1ListedUsers = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ListedUser(entry, context);
    });
};
const deserializeAws_json1_1ListSecurityPoliciesResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        SecurityPolicyNames: output.SecurityPolicyNames !== undefined && output.SecurityPolicyNames !== null
            ? deserializeAws_json1_1SecurityPolicyNames(output.SecurityPolicyNames, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListServersResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Servers: output.Servers !== undefined && output.Servers !== null
            ? deserializeAws_json1_1ListedServers(output.Servers, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    };
};
const deserializeAws_json1_1ListUsersResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        ServerId: output.ServerId !== undefined && output.ServerId !== null ? output.ServerId : undefined,
        Users: output.Users !== undefined && output.Users !== null
            ? deserializeAws_json1_1ListedUsers(output.Users, context)
            : undefined,
    };
};
const deserializeAws_json1_1PosixProfile = (output, context) => {
    return {
        Gid: output.Gid !== undefined && output.Gid !== null ? output.Gid : undefined,
        SecondaryGids: output.SecondaryGids !== undefined && output.SecondaryGids !== null
            ? deserializeAws_json1_1SecondaryGids(output.SecondaryGids, context)
            : undefined,
        Uid: output.Uid !== undefined && output.Uid !== null ? output.Uid : undefined,
    };
};
const deserializeAws_json1_1Protocols = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ResourceExistsException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        Resource: output.Resource !== undefined && output.Resource !== null ? output.Resource : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    };
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        Resource: output.Resource !== undefined && output.Resource !== null ? output.Resource : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    };
};
const deserializeAws_json1_1SecondaryGids = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1SecurityGroupIds = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1SecurityPolicyNames = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1SecurityPolicyOptions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ServiceUnavailableException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1SshPublicKey = (output, context) => {
    return {
        DateImported: output.DateImported !== undefined && output.DateImported !== null
            ? new Date(Math.round(output.DateImported * 1000))
            : undefined,
        SshPublicKeyBody: output.SshPublicKeyBody !== undefined && output.SshPublicKeyBody !== null ? output.SshPublicKeyBody : undefined,
        SshPublicKeyId: output.SshPublicKeyId !== undefined && output.SshPublicKeyId !== null ? output.SshPublicKeyId : undefined,
    };
};
const deserializeAws_json1_1SshPublicKeys = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SshPublicKey(entry, context);
    });
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
const deserializeAws_json1_1TestIdentityProviderResponse = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        Response: output.Response !== undefined && output.Response !== null ? output.Response : undefined,
        StatusCode: output.StatusCode !== undefined && output.StatusCode !== null ? output.StatusCode : undefined,
        Url: output.Url !== undefined && output.Url !== null ? output.Url : undefined,
    };
};
const deserializeAws_json1_1ThrottlingException = (output, context) => {
    return {
        RetryAfterSeconds: output.RetryAfterSeconds !== undefined && output.RetryAfterSeconds !== null
            ? output.RetryAfterSeconds
            : undefined,
    };
};
const deserializeAws_json1_1UpdateAccessResponse = (output, context) => {
    return {
        ExternalId: output.ExternalId !== undefined && output.ExternalId !== null ? output.ExternalId : undefined,
        ServerId: output.ServerId !== undefined && output.ServerId !== null ? output.ServerId : undefined,
    };
};
const deserializeAws_json1_1UpdateServerResponse = (output, context) => {
    return {
        ServerId: output.ServerId !== undefined && output.ServerId !== null ? output.ServerId : undefined,
    };
};
const deserializeAws_json1_1UpdateUserResponse = (output, context) => {
    return {
        ServerId: output.ServerId !== undefined && output.ServerId !== null ? output.ServerId : undefined,
        UserName: output.UserName !== undefined && output.UserName !== null ? output.UserName : undefined,
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