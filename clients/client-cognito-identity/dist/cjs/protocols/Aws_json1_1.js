"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1UpdateIdentityPoolCommand = exports.deserializeAws_json1_1UntagResourceCommand = exports.deserializeAws_json1_1UnlinkIdentityCommand = exports.deserializeAws_json1_1UnlinkDeveloperIdentityCommand = exports.deserializeAws_json1_1TagResourceCommand = exports.deserializeAws_json1_1SetPrincipalTagAttributeMapCommand = exports.deserializeAws_json1_1SetIdentityPoolRolesCommand = exports.deserializeAws_json1_1MergeDeveloperIdentitiesCommand = exports.deserializeAws_json1_1LookupDeveloperIdentityCommand = exports.deserializeAws_json1_1ListTagsForResourceCommand = exports.deserializeAws_json1_1ListIdentityPoolsCommand = exports.deserializeAws_json1_1ListIdentitiesCommand = exports.deserializeAws_json1_1GetPrincipalTagAttributeMapCommand = exports.deserializeAws_json1_1GetOpenIdTokenForDeveloperIdentityCommand = exports.deserializeAws_json1_1GetOpenIdTokenCommand = exports.deserializeAws_json1_1GetIdentityPoolRolesCommand = exports.deserializeAws_json1_1GetIdCommand = exports.deserializeAws_json1_1GetCredentialsForIdentityCommand = exports.deserializeAws_json1_1DescribeIdentityPoolCommand = exports.deserializeAws_json1_1DescribeIdentityCommand = exports.deserializeAws_json1_1DeleteIdentityPoolCommand = exports.deserializeAws_json1_1DeleteIdentitiesCommand = exports.deserializeAws_json1_1CreateIdentityPoolCommand = exports.serializeAws_json1_1UpdateIdentityPoolCommand = exports.serializeAws_json1_1UntagResourceCommand = exports.serializeAws_json1_1UnlinkIdentityCommand = exports.serializeAws_json1_1UnlinkDeveloperIdentityCommand = exports.serializeAws_json1_1TagResourceCommand = exports.serializeAws_json1_1SetPrincipalTagAttributeMapCommand = exports.serializeAws_json1_1SetIdentityPoolRolesCommand = exports.serializeAws_json1_1MergeDeveloperIdentitiesCommand = exports.serializeAws_json1_1LookupDeveloperIdentityCommand = exports.serializeAws_json1_1ListTagsForResourceCommand = exports.serializeAws_json1_1ListIdentityPoolsCommand = exports.serializeAws_json1_1ListIdentitiesCommand = exports.serializeAws_json1_1GetPrincipalTagAttributeMapCommand = exports.serializeAws_json1_1GetOpenIdTokenForDeveloperIdentityCommand = exports.serializeAws_json1_1GetOpenIdTokenCommand = exports.serializeAws_json1_1GetIdentityPoolRolesCommand = exports.serializeAws_json1_1GetIdCommand = exports.serializeAws_json1_1GetCredentialsForIdentityCommand = exports.serializeAws_json1_1DescribeIdentityPoolCommand = exports.serializeAws_json1_1DescribeIdentityCommand = exports.serializeAws_json1_1DeleteIdentityPoolCommand = exports.serializeAws_json1_1DeleteIdentitiesCommand = exports.serializeAws_json1_1CreateIdentityPoolCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1CreateIdentityPoolCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.CreateIdentityPool",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateIdentityPoolInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateIdentityPoolCommand = serializeAws_json1_1CreateIdentityPoolCommand;
const serializeAws_json1_1DeleteIdentitiesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.DeleteIdentities",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteIdentitiesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteIdentitiesCommand = serializeAws_json1_1DeleteIdentitiesCommand;
const serializeAws_json1_1DeleteIdentityPoolCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.DeleteIdentityPool",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteIdentityPoolInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteIdentityPoolCommand = serializeAws_json1_1DeleteIdentityPoolCommand;
const serializeAws_json1_1DescribeIdentityCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.DescribeIdentity",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeIdentityInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeIdentityCommand = serializeAws_json1_1DescribeIdentityCommand;
const serializeAws_json1_1DescribeIdentityPoolCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.DescribeIdentityPool",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeIdentityPoolInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeIdentityPoolCommand = serializeAws_json1_1DescribeIdentityPoolCommand;
const serializeAws_json1_1GetCredentialsForIdentityCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.GetCredentialsForIdentity",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetCredentialsForIdentityInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetCredentialsForIdentityCommand = serializeAws_json1_1GetCredentialsForIdentityCommand;
const serializeAws_json1_1GetIdCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.GetId",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetIdInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetIdCommand = serializeAws_json1_1GetIdCommand;
const serializeAws_json1_1GetIdentityPoolRolesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.GetIdentityPoolRoles",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetIdentityPoolRolesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetIdentityPoolRolesCommand = serializeAws_json1_1GetIdentityPoolRolesCommand;
const serializeAws_json1_1GetOpenIdTokenCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.GetOpenIdToken",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetOpenIdTokenInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetOpenIdTokenCommand = serializeAws_json1_1GetOpenIdTokenCommand;
const serializeAws_json1_1GetOpenIdTokenForDeveloperIdentityCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetOpenIdTokenForDeveloperIdentityInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetOpenIdTokenForDeveloperIdentityCommand = serializeAws_json1_1GetOpenIdTokenForDeveloperIdentityCommand;
const serializeAws_json1_1GetPrincipalTagAttributeMapCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.GetPrincipalTagAttributeMap",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetPrincipalTagAttributeMapInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetPrincipalTagAttributeMapCommand = serializeAws_json1_1GetPrincipalTagAttributeMapCommand;
const serializeAws_json1_1ListIdentitiesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.ListIdentities",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListIdentitiesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListIdentitiesCommand = serializeAws_json1_1ListIdentitiesCommand;
const serializeAws_json1_1ListIdentityPoolsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.ListIdentityPools",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListIdentityPoolsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListIdentityPoolsCommand = serializeAws_json1_1ListIdentityPoolsCommand;
const serializeAws_json1_1ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
const serializeAws_json1_1LookupDeveloperIdentityCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.LookupDeveloperIdentity",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1LookupDeveloperIdentityInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1LookupDeveloperIdentityCommand = serializeAws_json1_1LookupDeveloperIdentityCommand;
const serializeAws_json1_1MergeDeveloperIdentitiesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.MergeDeveloperIdentities",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1MergeDeveloperIdentitiesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1MergeDeveloperIdentitiesCommand = serializeAws_json1_1MergeDeveloperIdentitiesCommand;
const serializeAws_json1_1SetIdentityPoolRolesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.SetIdentityPoolRoles",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SetIdentityPoolRolesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SetIdentityPoolRolesCommand = serializeAws_json1_1SetIdentityPoolRolesCommand;
const serializeAws_json1_1SetPrincipalTagAttributeMapCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.SetPrincipalTagAttributeMap",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SetPrincipalTagAttributeMapInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SetPrincipalTagAttributeMapCommand = serializeAws_json1_1SetPrincipalTagAttributeMapCommand;
const serializeAws_json1_1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
const serializeAws_json1_1UnlinkDeveloperIdentityCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.UnlinkDeveloperIdentity",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UnlinkDeveloperIdentityInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UnlinkDeveloperIdentityCommand = serializeAws_json1_1UnlinkDeveloperIdentityCommand;
const serializeAws_json1_1UnlinkIdentityCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.UnlinkIdentity",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UnlinkIdentityInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UnlinkIdentityCommand = serializeAws_json1_1UnlinkIdentityCommand;
const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
const serializeAws_json1_1UpdateIdentityPoolCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.UpdateIdentityPool",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1IdentityPool(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateIdentityPoolCommand = serializeAws_json1_1UpdateIdentityPoolCommand;
const deserializeAws_json1_1CreateIdentityPoolCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateIdentityPoolCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1IdentityPool(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateIdentityPoolCommand = deserializeAws_json1_1CreateIdentityPoolCommand;
const deserializeAws_json1_1CreateIdentityPoolCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.cognitoidentity#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            response = {
                ...(await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteIdentitiesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteIdentitiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteIdentitiesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteIdentitiesCommand = deserializeAws_json1_1DeleteIdentitiesCommand;
const deserializeAws_json1_1DeleteIdentitiesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteIdentityPoolCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteIdentityPoolCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteIdentityPoolCommand = deserializeAws_json1_1DeleteIdentityPoolCommand;
const deserializeAws_json1_1DeleteIdentityPoolCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeIdentityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1IdentityDescription(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeIdentityCommand = deserializeAws_json1_1DescribeIdentityCommand;
const deserializeAws_json1_1DescribeIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeIdentityPoolCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeIdentityPoolCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1IdentityPool(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeIdentityPoolCommand = deserializeAws_json1_1DescribeIdentityPoolCommand;
const deserializeAws_json1_1DescribeIdentityPoolCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetCredentialsForIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetCredentialsForIdentityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetCredentialsForIdentityResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetCredentialsForIdentityCommand = deserializeAws_json1_1GetCredentialsForIdentityCommand;
const deserializeAws_json1_1GetCredentialsForIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExternalServiceException":
        case "com.amazonaws.cognitoidentity#ExternalServiceException":
            response = {
                ...(await deserializeAws_json1_1ExternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidIdentityPoolConfigurationException":
        case "com.amazonaws.cognitoidentity#InvalidIdentityPoolConfigurationException":
            response = {
                ...(await deserializeAws_json1_1InvalidIdentityPoolConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            response = {
                ...(await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetIdCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetIdCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetIdResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetIdCommand = deserializeAws_json1_1GetIdCommand;
const deserializeAws_json1_1GetIdCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExternalServiceException":
        case "com.amazonaws.cognitoidentity#ExternalServiceException":
            response = {
                ...(await deserializeAws_json1_1ExternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.cognitoidentity#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            response = {
                ...(await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetIdentityPoolRolesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetIdentityPoolRolesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetIdentityPoolRolesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetIdentityPoolRolesCommand = deserializeAws_json1_1GetIdentityPoolRolesCommand;
const deserializeAws_json1_1GetIdentityPoolRolesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            response = {
                ...(await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetOpenIdTokenCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetOpenIdTokenCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetOpenIdTokenResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetOpenIdTokenCommand = deserializeAws_json1_1GetOpenIdTokenCommand;
const deserializeAws_json1_1GetOpenIdTokenCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExternalServiceException":
        case "com.amazonaws.cognitoidentity#ExternalServiceException":
            response = {
                ...(await deserializeAws_json1_1ExternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            response = {
                ...(await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetOpenIdTokenForDeveloperIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetOpenIdTokenForDeveloperIdentityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetOpenIdTokenForDeveloperIdentityResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetOpenIdTokenForDeveloperIdentityCommand = deserializeAws_json1_1GetOpenIdTokenForDeveloperIdentityCommand;
const deserializeAws_json1_1GetOpenIdTokenForDeveloperIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DeveloperUserAlreadyRegisteredException":
        case "com.amazonaws.cognitoidentity#DeveloperUserAlreadyRegisteredException":
            response = {
                ...(await deserializeAws_json1_1DeveloperUserAlreadyRegisteredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            response = {
                ...(await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetPrincipalTagAttributeMapCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetPrincipalTagAttributeMapCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetPrincipalTagAttributeMapResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetPrincipalTagAttributeMapCommand = deserializeAws_json1_1GetPrincipalTagAttributeMapCommand;
const deserializeAws_json1_1GetPrincipalTagAttributeMapCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListIdentitiesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListIdentitiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListIdentitiesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListIdentitiesCommand = deserializeAws_json1_1ListIdentitiesCommand;
const deserializeAws_json1_1ListIdentitiesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListIdentityPoolsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListIdentityPoolsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListIdentityPoolsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListIdentityPoolsCommand = deserializeAws_json1_1ListIdentityPoolsCommand;
const deserializeAws_json1_1ListIdentityPoolsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1LookupDeveloperIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1LookupDeveloperIdentityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1LookupDeveloperIdentityResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1LookupDeveloperIdentityCommand = deserializeAws_json1_1LookupDeveloperIdentityCommand;
const deserializeAws_json1_1LookupDeveloperIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            response = {
                ...(await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1MergeDeveloperIdentitiesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1MergeDeveloperIdentitiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1MergeDeveloperIdentitiesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1MergeDeveloperIdentitiesCommand = deserializeAws_json1_1MergeDeveloperIdentitiesCommand;
const deserializeAws_json1_1MergeDeveloperIdentitiesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            response = {
                ...(await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1SetIdentityPoolRolesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SetIdentityPoolRolesCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SetIdentityPoolRolesCommand = deserializeAws_json1_1SetIdentityPoolRolesCommand;
const deserializeAws_json1_1SetIdentityPoolRolesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.cognitoidentity#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            response = {
                ...(await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1SetPrincipalTagAttributeMapCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SetPrincipalTagAttributeMapCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SetPrincipalTagAttributeMapResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SetPrincipalTagAttributeMapCommand = deserializeAws_json1_1SetPrincipalTagAttributeMapCommand;
const deserializeAws_json1_1SetPrincipalTagAttributeMapCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UnlinkDeveloperIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UnlinkDeveloperIdentityCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UnlinkDeveloperIdentityCommand = deserializeAws_json1_1UnlinkDeveloperIdentityCommand;
const deserializeAws_json1_1UnlinkDeveloperIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            response = {
                ...(await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UnlinkIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UnlinkIdentityCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UnlinkIdentityCommand = deserializeAws_json1_1UnlinkIdentityCommand;
const deserializeAws_json1_1UnlinkIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExternalServiceException":
        case "com.amazonaws.cognitoidentity#ExternalServiceException":
            response = {
                ...(await deserializeAws_json1_1ExternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            response = {
                ...(await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateIdentityPoolCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateIdentityPoolCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1IdentityPool(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateIdentityPoolCommand = deserializeAws_json1_1UpdateIdentityPoolCommand;
const deserializeAws_json1_1UpdateIdentityPoolCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.cognitoidentity#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.cognitoidentity#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            response = {
                ...(await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConcurrentModificationException(body, context);
    const contents = {
        name: "ConcurrentModificationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DeveloperUserAlreadyRegisteredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DeveloperUserAlreadyRegisteredException(body, context);
    const contents = {
        name: "DeveloperUserAlreadyRegisteredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ExternalServiceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ExternalServiceException(body, context);
    const contents = {
        name: "ExternalServiceException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InternalErrorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalErrorException(body, context);
    const contents = {
        name: "InternalErrorException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidIdentityPoolConfigurationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidIdentityPoolConfigurationException(body, context);
    const contents = {
        name: "InvalidIdentityPoolConfigurationException",
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
const deserializeAws_json1_1NotAuthorizedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NotAuthorizedException(body, context);
    const contents = {
        name: "NotAuthorizedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceConflictExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceConflictException(body, context);
    const contents = {
        name: "ResourceConflictException",
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
const deserializeAws_json1_1TooManyRequestsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TooManyRequestsException(body, context);
    const contents = {
        name: "TooManyRequestsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1CognitoIdentityProvider = (input, context) => {
    return {
        ...(input.ClientId !== undefined && input.ClientId !== null && { ClientId: input.ClientId }),
        ...(input.ProviderName !== undefined && input.ProviderName !== null && { ProviderName: input.ProviderName }),
        ...(input.ServerSideTokenCheck !== undefined &&
            input.ServerSideTokenCheck !== null && { ServerSideTokenCheck: input.ServerSideTokenCheck }),
    };
};
const serializeAws_json1_1CognitoIdentityProviderList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1CognitoIdentityProvider(entry, context);
    });
};
const serializeAws_json1_1CreateIdentityPoolInput = (input, context) => {
    return {
        ...(input.AllowClassicFlow !== undefined &&
            input.AllowClassicFlow !== null && { AllowClassicFlow: input.AllowClassicFlow }),
        ...(input.AllowUnauthenticatedIdentities !== undefined &&
            input.AllowUnauthenticatedIdentities !== null && {
            AllowUnauthenticatedIdentities: input.AllowUnauthenticatedIdentities,
        }),
        ...(input.CognitoIdentityProviders !== undefined &&
            input.CognitoIdentityProviders !== null && {
            CognitoIdentityProviders: serializeAws_json1_1CognitoIdentityProviderList(input.CognitoIdentityProviders, context),
        }),
        ...(input.DeveloperProviderName !== undefined &&
            input.DeveloperProviderName !== null && { DeveloperProviderName: input.DeveloperProviderName }),
        ...(input.IdentityPoolName !== undefined &&
            input.IdentityPoolName !== null && { IdentityPoolName: input.IdentityPoolName }),
        ...(input.IdentityPoolTags !== undefined &&
            input.IdentityPoolTags !== null && {
            IdentityPoolTags: serializeAws_json1_1IdentityPoolTagsType(input.IdentityPoolTags, context),
        }),
        ...(input.OpenIdConnectProviderARNs !== undefined &&
            input.OpenIdConnectProviderARNs !== null && {
            OpenIdConnectProviderARNs: serializeAws_json1_1OIDCProviderList(input.OpenIdConnectProviderARNs, context),
        }),
        ...(input.SamlProviderARNs !== undefined &&
            input.SamlProviderARNs !== null && {
            SamlProviderARNs: serializeAws_json1_1SAMLProviderList(input.SamlProviderARNs, context),
        }),
        ...(input.SupportedLoginProviders !== undefined &&
            input.SupportedLoginProviders !== null && {
            SupportedLoginProviders: serializeAws_json1_1IdentityProviders(input.SupportedLoginProviders, context),
        }),
    };
};
const serializeAws_json1_1DeleteIdentitiesInput = (input, context) => {
    return {
        ...(input.IdentityIdsToDelete !== undefined &&
            input.IdentityIdsToDelete !== null && {
            IdentityIdsToDelete: serializeAws_json1_1IdentityIdList(input.IdentityIdsToDelete, context),
        }),
    };
};
const serializeAws_json1_1DeleteIdentityPoolInput = (input, context) => {
    return {
        ...(input.IdentityPoolId !== undefined &&
            input.IdentityPoolId !== null && { IdentityPoolId: input.IdentityPoolId }),
    };
};
const serializeAws_json1_1DescribeIdentityInput = (input, context) => {
    return {
        ...(input.IdentityId !== undefined && input.IdentityId !== null && { IdentityId: input.IdentityId }),
    };
};
const serializeAws_json1_1DescribeIdentityPoolInput = (input, context) => {
    return {
        ...(input.IdentityPoolId !== undefined &&
            input.IdentityPoolId !== null && { IdentityPoolId: input.IdentityPoolId }),
    };
};
const serializeAws_json1_1GetCredentialsForIdentityInput = (input, context) => {
    return {
        ...(input.CustomRoleArn !== undefined && input.CustomRoleArn !== null && { CustomRoleArn: input.CustomRoleArn }),
        ...(input.IdentityId !== undefined && input.IdentityId !== null && { IdentityId: input.IdentityId }),
        ...(input.Logins !== undefined &&
            input.Logins !== null && { Logins: serializeAws_json1_1LoginsMap(input.Logins, context) }),
    };
};
const serializeAws_json1_1GetIdentityPoolRolesInput = (input, context) => {
    return {
        ...(input.IdentityPoolId !== undefined &&
            input.IdentityPoolId !== null && { IdentityPoolId: input.IdentityPoolId }),
    };
};
const serializeAws_json1_1GetIdInput = (input, context) => {
    return {
        ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
        ...(input.IdentityPoolId !== undefined &&
            input.IdentityPoolId !== null && { IdentityPoolId: input.IdentityPoolId }),
        ...(input.Logins !== undefined &&
            input.Logins !== null && { Logins: serializeAws_json1_1LoginsMap(input.Logins, context) }),
    };
};
const serializeAws_json1_1GetOpenIdTokenForDeveloperIdentityInput = (input, context) => {
    return {
        ...(input.IdentityId !== undefined && input.IdentityId !== null && { IdentityId: input.IdentityId }),
        ...(input.IdentityPoolId !== undefined &&
            input.IdentityPoolId !== null && { IdentityPoolId: input.IdentityPoolId }),
        ...(input.Logins !== undefined &&
            input.Logins !== null && { Logins: serializeAws_json1_1LoginsMap(input.Logins, context) }),
        ...(input.PrincipalTags !== undefined &&
            input.PrincipalTags !== null && {
            PrincipalTags: serializeAws_json1_1PrincipalTags(input.PrincipalTags, context),
        }),
        ...(input.TokenDuration !== undefined && input.TokenDuration !== null && { TokenDuration: input.TokenDuration }),
    };
};
const serializeAws_json1_1GetOpenIdTokenInput = (input, context) => {
    return {
        ...(input.IdentityId !== undefined && input.IdentityId !== null && { IdentityId: input.IdentityId }),
        ...(input.Logins !== undefined &&
            input.Logins !== null && { Logins: serializeAws_json1_1LoginsMap(input.Logins, context) }),
    };
};
const serializeAws_json1_1GetPrincipalTagAttributeMapInput = (input, context) => {
    return {
        ...(input.IdentityPoolId !== undefined &&
            input.IdentityPoolId !== null && { IdentityPoolId: input.IdentityPoolId }),
        ...(input.IdentityProviderName !== undefined &&
            input.IdentityProviderName !== null && { IdentityProviderName: input.IdentityProviderName }),
    };
};
const serializeAws_json1_1IdentityIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1IdentityPool = (input, context) => {
    return {
        ...(input.AllowClassicFlow !== undefined &&
            input.AllowClassicFlow !== null && { AllowClassicFlow: input.AllowClassicFlow }),
        ...(input.AllowUnauthenticatedIdentities !== undefined &&
            input.AllowUnauthenticatedIdentities !== null && {
            AllowUnauthenticatedIdentities: input.AllowUnauthenticatedIdentities,
        }),
        ...(input.CognitoIdentityProviders !== undefined &&
            input.CognitoIdentityProviders !== null && {
            CognitoIdentityProviders: serializeAws_json1_1CognitoIdentityProviderList(input.CognitoIdentityProviders, context),
        }),
        ...(input.DeveloperProviderName !== undefined &&
            input.DeveloperProviderName !== null && { DeveloperProviderName: input.DeveloperProviderName }),
        ...(input.IdentityPoolId !== undefined &&
            input.IdentityPoolId !== null && { IdentityPoolId: input.IdentityPoolId }),
        ...(input.IdentityPoolName !== undefined &&
            input.IdentityPoolName !== null && { IdentityPoolName: input.IdentityPoolName }),
        ...(input.IdentityPoolTags !== undefined &&
            input.IdentityPoolTags !== null && {
            IdentityPoolTags: serializeAws_json1_1IdentityPoolTagsType(input.IdentityPoolTags, context),
        }),
        ...(input.OpenIdConnectProviderARNs !== undefined &&
            input.OpenIdConnectProviderARNs !== null && {
            OpenIdConnectProviderARNs: serializeAws_json1_1OIDCProviderList(input.OpenIdConnectProviderARNs, context),
        }),
        ...(input.SamlProviderARNs !== undefined &&
            input.SamlProviderARNs !== null && {
            SamlProviderARNs: serializeAws_json1_1SAMLProviderList(input.SamlProviderARNs, context),
        }),
        ...(input.SupportedLoginProviders !== undefined &&
            input.SupportedLoginProviders !== null && {
            SupportedLoginProviders: serializeAws_json1_1IdentityProviders(input.SupportedLoginProviders, context),
        }),
    };
};
const serializeAws_json1_1IdentityPoolTagsListType = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1IdentityPoolTagsType = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const serializeAws_json1_1IdentityProviders = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const serializeAws_json1_1ListIdentitiesInput = (input, context) => {
    return {
        ...(input.HideDisabled !== undefined && input.HideDisabled !== null && { HideDisabled: input.HideDisabled }),
        ...(input.IdentityPoolId !== undefined &&
            input.IdentityPoolId !== null && { IdentityPoolId: input.IdentityPoolId }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListIdentityPoolsInput = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListTagsForResourceInput = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_1LoginsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1LoginsMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const serializeAws_json1_1LookupDeveloperIdentityInput = (input, context) => {
    return {
        ...(input.DeveloperUserIdentifier !== undefined &&
            input.DeveloperUserIdentifier !== null && { DeveloperUserIdentifier: input.DeveloperUserIdentifier }),
        ...(input.IdentityId !== undefined && input.IdentityId !== null && { IdentityId: input.IdentityId }),
        ...(input.IdentityPoolId !== undefined &&
            input.IdentityPoolId !== null && { IdentityPoolId: input.IdentityPoolId }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1MappingRule = (input, context) => {
    return {
        ...(input.Claim !== undefined && input.Claim !== null && { Claim: input.Claim }),
        ...(input.MatchType !== undefined && input.MatchType !== null && { MatchType: input.MatchType }),
        ...(input.RoleARN !== undefined && input.RoleARN !== null && { RoleARN: input.RoleARN }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1MappingRulesList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1MappingRule(entry, context);
    });
};
const serializeAws_json1_1MergeDeveloperIdentitiesInput = (input, context) => {
    return {
        ...(input.DestinationUserIdentifier !== undefined &&
            input.DestinationUserIdentifier !== null && { DestinationUserIdentifier: input.DestinationUserIdentifier }),
        ...(input.DeveloperProviderName !== undefined &&
            input.DeveloperProviderName !== null && { DeveloperProviderName: input.DeveloperProviderName }),
        ...(input.IdentityPoolId !== undefined &&
            input.IdentityPoolId !== null && { IdentityPoolId: input.IdentityPoolId }),
        ...(input.SourceUserIdentifier !== undefined &&
            input.SourceUserIdentifier !== null && { SourceUserIdentifier: input.SourceUserIdentifier }),
    };
};
const serializeAws_json1_1OIDCProviderList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1PrincipalTags = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const serializeAws_json1_1RoleMapping = (input, context) => {
    return {
        ...(input.AmbiguousRoleResolution !== undefined &&
            input.AmbiguousRoleResolution !== null && { AmbiguousRoleResolution: input.AmbiguousRoleResolution }),
        ...(input.RulesConfiguration !== undefined &&
            input.RulesConfiguration !== null && {
            RulesConfiguration: serializeAws_json1_1RulesConfigurationType(input.RulesConfiguration, context),
        }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_json1_1RoleMappingMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_json1_1RoleMapping(value, context),
        };
    }, {});
};
const serializeAws_json1_1RolesMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const serializeAws_json1_1RulesConfigurationType = (input, context) => {
    return {
        ...(input.Rules !== undefined &&
            input.Rules !== null && { Rules: serializeAws_json1_1MappingRulesList(input.Rules, context) }),
    };
};
const serializeAws_json1_1SAMLProviderList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1SetIdentityPoolRolesInput = (input, context) => {
    return {
        ...(input.IdentityPoolId !== undefined &&
            input.IdentityPoolId !== null && { IdentityPoolId: input.IdentityPoolId }),
        ...(input.RoleMappings !== undefined &&
            input.RoleMappings !== null && { RoleMappings: serializeAws_json1_1RoleMappingMap(input.RoleMappings, context) }),
        ...(input.Roles !== undefined &&
            input.Roles !== null && { Roles: serializeAws_json1_1RolesMap(input.Roles, context) }),
    };
};
const serializeAws_json1_1SetPrincipalTagAttributeMapInput = (input, context) => {
    return {
        ...(input.IdentityPoolId !== undefined &&
            input.IdentityPoolId !== null && { IdentityPoolId: input.IdentityPoolId }),
        ...(input.IdentityProviderName !== undefined &&
            input.IdentityProviderName !== null && { IdentityProviderName: input.IdentityProviderName }),
        ...(input.PrincipalTags !== undefined &&
            input.PrincipalTags !== null && {
            PrincipalTags: serializeAws_json1_1PrincipalTags(input.PrincipalTags, context),
        }),
        ...(input.UseDefaults !== undefined && input.UseDefaults !== null && { UseDefaults: input.UseDefaults }),
    };
};
const serializeAws_json1_1TagResourceInput = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_json1_1IdentityPoolTagsType(input.Tags, context) }),
    };
};
const serializeAws_json1_1UnlinkDeveloperIdentityInput = (input, context) => {
    return {
        ...(input.DeveloperProviderName !== undefined &&
            input.DeveloperProviderName !== null && { DeveloperProviderName: input.DeveloperProviderName }),
        ...(input.DeveloperUserIdentifier !== undefined &&
            input.DeveloperUserIdentifier !== null && { DeveloperUserIdentifier: input.DeveloperUserIdentifier }),
        ...(input.IdentityId !== undefined && input.IdentityId !== null && { IdentityId: input.IdentityId }),
        ...(input.IdentityPoolId !== undefined &&
            input.IdentityPoolId !== null && { IdentityPoolId: input.IdentityPoolId }),
    };
};
const serializeAws_json1_1UnlinkIdentityInput = (input, context) => {
    return {
        ...(input.IdentityId !== undefined && input.IdentityId !== null && { IdentityId: input.IdentityId }),
        ...(input.Logins !== undefined &&
            input.Logins !== null && { Logins: serializeAws_json1_1LoginsMap(input.Logins, context) }),
        ...(input.LoginsToRemove !== undefined &&
            input.LoginsToRemove !== null && {
            LoginsToRemove: serializeAws_json1_1LoginsList(input.LoginsToRemove, context),
        }),
    };
};
const serializeAws_json1_1UntagResourceInput = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
        ...(input.TagKeys !== undefined &&
            input.TagKeys !== null && { TagKeys: serializeAws_json1_1IdentityPoolTagsListType(input.TagKeys, context) }),
    };
};
const deserializeAws_json1_1CognitoIdentityProvider = (output, context) => {
    return {
        ClientId: output.ClientId !== undefined && output.ClientId !== null ? output.ClientId : undefined,
        ProviderName: output.ProviderName !== undefined && output.ProviderName !== null ? output.ProviderName : undefined,
        ServerSideTokenCheck: output.ServerSideTokenCheck !== undefined && output.ServerSideTokenCheck !== null
            ? output.ServerSideTokenCheck
            : undefined,
    };
};
const deserializeAws_json1_1CognitoIdentityProviderList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CognitoIdentityProvider(entry, context);
    });
};
const deserializeAws_json1_1ConcurrentModificationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1Credentials = (output, context) => {
    return {
        AccessKeyId: output.AccessKeyId !== undefined && output.AccessKeyId !== null ? output.AccessKeyId : undefined,
        Expiration: output.Expiration !== undefined && output.Expiration !== null
            ? new Date(Math.round(output.Expiration * 1000))
            : undefined,
        SecretKey: output.SecretKey !== undefined && output.SecretKey !== null ? output.SecretKey : undefined,
        SessionToken: output.SessionToken !== undefined && output.SessionToken !== null ? output.SessionToken : undefined,
    };
};
const deserializeAws_json1_1DeleteIdentitiesResponse = (output, context) => {
    return {
        UnprocessedIdentityIds: output.UnprocessedIdentityIds !== undefined && output.UnprocessedIdentityIds !== null
            ? deserializeAws_json1_1UnprocessedIdentityIdList(output.UnprocessedIdentityIds, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeveloperUserAlreadyRegisteredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1DeveloperUserIdentifierList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ExternalServiceException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1GetCredentialsForIdentityResponse = (output, context) => {
    return {
        Credentials: output.Credentials !== undefined && output.Credentials !== null
            ? deserializeAws_json1_1Credentials(output.Credentials, context)
            : undefined,
        IdentityId: output.IdentityId !== undefined && output.IdentityId !== null ? output.IdentityId : undefined,
    };
};
const deserializeAws_json1_1GetIdentityPoolRolesResponse = (output, context) => {
    return {
        IdentityPoolId: output.IdentityPoolId !== undefined && output.IdentityPoolId !== null ? output.IdentityPoolId : undefined,
        RoleMappings: output.RoleMappings !== undefined && output.RoleMappings !== null
            ? deserializeAws_json1_1RoleMappingMap(output.RoleMappings, context)
            : undefined,
        Roles: output.Roles !== undefined && output.Roles !== null
            ? deserializeAws_json1_1RolesMap(output.Roles, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetIdResponse = (output, context) => {
    return {
        IdentityId: output.IdentityId !== undefined && output.IdentityId !== null ? output.IdentityId : undefined,
    };
};
const deserializeAws_json1_1GetOpenIdTokenForDeveloperIdentityResponse = (output, context) => {
    return {
        IdentityId: output.IdentityId !== undefined && output.IdentityId !== null ? output.IdentityId : undefined,
        Token: output.Token !== undefined && output.Token !== null ? output.Token : undefined,
    };
};
const deserializeAws_json1_1GetOpenIdTokenResponse = (output, context) => {
    return {
        IdentityId: output.IdentityId !== undefined && output.IdentityId !== null ? output.IdentityId : undefined,
        Token: output.Token !== undefined && output.Token !== null ? output.Token : undefined,
    };
};
const deserializeAws_json1_1GetPrincipalTagAttributeMapResponse = (output, context) => {
    return {
        IdentityPoolId: output.IdentityPoolId !== undefined && output.IdentityPoolId !== null ? output.IdentityPoolId : undefined,
        IdentityProviderName: output.IdentityProviderName !== undefined && output.IdentityProviderName !== null
            ? output.IdentityProviderName
            : undefined,
        PrincipalTags: output.PrincipalTags !== undefined && output.PrincipalTags !== null
            ? deserializeAws_json1_1PrincipalTags(output.PrincipalTags, context)
            : undefined,
        UseDefaults: output.UseDefaults !== undefined && output.UseDefaults !== null ? output.UseDefaults : undefined,
    };
};
const deserializeAws_json1_1IdentitiesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1IdentityDescription(entry, context);
    });
};
const deserializeAws_json1_1IdentityDescription = (output, context) => {
    return {
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null
            ? new Date(Math.round(output.CreationDate * 1000))
            : undefined,
        IdentityId: output.IdentityId !== undefined && output.IdentityId !== null ? output.IdentityId : undefined,
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null
            ? new Date(Math.round(output.LastModifiedDate * 1000))
            : undefined,
        Logins: output.Logins !== undefined && output.Logins !== null
            ? deserializeAws_json1_1LoginsList(output.Logins, context)
            : undefined,
    };
};
const deserializeAws_json1_1IdentityPool = (output, context) => {
    return {
        AllowClassicFlow: output.AllowClassicFlow !== undefined && output.AllowClassicFlow !== null ? output.AllowClassicFlow : undefined,
        AllowUnauthenticatedIdentities: output.AllowUnauthenticatedIdentities !== undefined && output.AllowUnauthenticatedIdentities !== null
            ? output.AllowUnauthenticatedIdentities
            : undefined,
        CognitoIdentityProviders: output.CognitoIdentityProviders !== undefined && output.CognitoIdentityProviders !== null
            ? deserializeAws_json1_1CognitoIdentityProviderList(output.CognitoIdentityProviders, context)
            : undefined,
        DeveloperProviderName: output.DeveloperProviderName !== undefined && output.DeveloperProviderName !== null
            ? output.DeveloperProviderName
            : undefined,
        IdentityPoolId: output.IdentityPoolId !== undefined && output.IdentityPoolId !== null ? output.IdentityPoolId : undefined,
        IdentityPoolName: output.IdentityPoolName !== undefined && output.IdentityPoolName !== null ? output.IdentityPoolName : undefined,
        IdentityPoolTags: output.IdentityPoolTags !== undefined && output.IdentityPoolTags !== null
            ? deserializeAws_json1_1IdentityPoolTagsType(output.IdentityPoolTags, context)
            : undefined,
        OpenIdConnectProviderARNs: output.OpenIdConnectProviderARNs !== undefined && output.OpenIdConnectProviderARNs !== null
            ? deserializeAws_json1_1OIDCProviderList(output.OpenIdConnectProviderARNs, context)
            : undefined,
        SamlProviderARNs: output.SamlProviderARNs !== undefined && output.SamlProviderARNs !== null
            ? deserializeAws_json1_1SAMLProviderList(output.SamlProviderARNs, context)
            : undefined,
        SupportedLoginProviders: output.SupportedLoginProviders !== undefined && output.SupportedLoginProviders !== null
            ? deserializeAws_json1_1IdentityProviders(output.SupportedLoginProviders, context)
            : undefined,
    };
};
const deserializeAws_json1_1IdentityPoolShortDescription = (output, context) => {
    return {
        IdentityPoolId: output.IdentityPoolId !== undefined && output.IdentityPoolId !== null ? output.IdentityPoolId : undefined,
        IdentityPoolName: output.IdentityPoolName !== undefined && output.IdentityPoolName !== null ? output.IdentityPoolName : undefined,
    };
};
const deserializeAws_json1_1IdentityPoolsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1IdentityPoolShortDescription(entry, context);
    });
};
const deserializeAws_json1_1IdentityPoolTagsType = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const deserializeAws_json1_1IdentityProviders = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const deserializeAws_json1_1InternalErrorException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidIdentityPoolConfigurationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidParameterException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ListIdentitiesResponse = (output, context) => {
    return {
        Identities: output.Identities !== undefined && output.Identities !== null
            ? deserializeAws_json1_1IdentitiesList(output.Identities, context)
            : undefined,
        IdentityPoolId: output.IdentityPoolId !== undefined && output.IdentityPoolId !== null ? output.IdentityPoolId : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListIdentityPoolsResponse = (output, context) => {
    return {
        IdentityPools: output.IdentityPools !== undefined && output.IdentityPools !== null
            ? deserializeAws_json1_1IdentityPoolsList(output.IdentityPools, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    return {
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1IdentityPoolTagsType(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1LoginsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1LookupDeveloperIdentityResponse = (output, context) => {
    return {
        DeveloperUserIdentifierList: output.DeveloperUserIdentifierList !== undefined && output.DeveloperUserIdentifierList !== null
            ? deserializeAws_json1_1DeveloperUserIdentifierList(output.DeveloperUserIdentifierList, context)
            : undefined,
        IdentityId: output.IdentityId !== undefined && output.IdentityId !== null ? output.IdentityId : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1MappingRule = (output, context) => {
    return {
        Claim: output.Claim !== undefined && output.Claim !== null ? output.Claim : undefined,
        MatchType: output.MatchType !== undefined && output.MatchType !== null ? output.MatchType : undefined,
        RoleARN: output.RoleARN !== undefined && output.RoleARN !== null ? output.RoleARN : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1MappingRulesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MappingRule(entry, context);
    });
};
const deserializeAws_json1_1MergeDeveloperIdentitiesResponse = (output, context) => {
    return {
        IdentityId: output.IdentityId !== undefined && output.IdentityId !== null ? output.IdentityId : undefined,
    };
};
const deserializeAws_json1_1NotAuthorizedException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1OIDCProviderList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1PrincipalTags = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const deserializeAws_json1_1ResourceConflictException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1RoleMapping = (output, context) => {
    return {
        AmbiguousRoleResolution: output.AmbiguousRoleResolution !== undefined && output.AmbiguousRoleResolution !== null
            ? output.AmbiguousRoleResolution
            : undefined,
        RulesConfiguration: output.RulesConfiguration !== undefined && output.RulesConfiguration !== null
            ? deserializeAws_json1_1RulesConfigurationType(output.RulesConfiguration, context)
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1RoleMappingMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_1RoleMapping(value, context),
        };
    }, {});
};
const deserializeAws_json1_1RolesMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const deserializeAws_json1_1RulesConfigurationType = (output, context) => {
    return {
        Rules: output.Rules !== undefined && output.Rules !== null
            ? deserializeAws_json1_1MappingRulesList(output.Rules, context)
            : undefined,
    };
};
const deserializeAws_json1_1SAMLProviderList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1SetPrincipalTagAttributeMapResponse = (output, context) => {
    return {
        IdentityPoolId: output.IdentityPoolId !== undefined && output.IdentityPoolId !== null ? output.IdentityPoolId : undefined,
        IdentityProviderName: output.IdentityProviderName !== undefined && output.IdentityProviderName !== null
            ? output.IdentityProviderName
            : undefined,
        PrincipalTags: output.PrincipalTags !== undefined && output.PrincipalTags !== null
            ? deserializeAws_json1_1PrincipalTags(output.PrincipalTags, context)
            : undefined,
        UseDefaults: output.UseDefaults !== undefined && output.UseDefaults !== null ? output.UseDefaults : undefined,
    };
};
const deserializeAws_json1_1TagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1TooManyRequestsException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1UnprocessedIdentityId = (output, context) => {
    return {
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        IdentityId: output.IdentityId !== undefined && output.IdentityId !== null ? output.IdentityId : undefined,
    };
};
const deserializeAws_json1_1UnprocessedIdentityIdList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1UnprocessedIdentityId(entry, context);
    });
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    return {};
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