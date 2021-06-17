"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1UpdateResourceCommand = exports.deserializeAws_json1_1UpdateLFTagCommand = exports.deserializeAws_json1_1SearchTablesByLFTagsCommand = exports.deserializeAws_json1_1SearchDatabasesByLFTagsCommand = exports.deserializeAws_json1_1RevokePermissionsCommand = exports.deserializeAws_json1_1RemoveLFTagsFromResourceCommand = exports.deserializeAws_json1_1RegisterResourceCommand = exports.deserializeAws_json1_1PutDataLakeSettingsCommand = exports.deserializeAws_json1_1ListResourcesCommand = exports.deserializeAws_json1_1ListPermissionsCommand = exports.deserializeAws_json1_1ListLFTagsCommand = exports.deserializeAws_json1_1GrantPermissionsCommand = exports.deserializeAws_json1_1GetResourceLFTagsCommand = exports.deserializeAws_json1_1GetLFTagCommand = exports.deserializeAws_json1_1GetEffectivePermissionsForPathCommand = exports.deserializeAws_json1_1GetDataLakeSettingsCommand = exports.deserializeAws_json1_1DescribeResourceCommand = exports.deserializeAws_json1_1DeregisterResourceCommand = exports.deserializeAws_json1_1DeleteLFTagCommand = exports.deserializeAws_json1_1CreateLFTagCommand = exports.deserializeAws_json1_1BatchRevokePermissionsCommand = exports.deserializeAws_json1_1BatchGrantPermissionsCommand = exports.deserializeAws_json1_1AddLFTagsToResourceCommand = exports.serializeAws_json1_1UpdateResourceCommand = exports.serializeAws_json1_1UpdateLFTagCommand = exports.serializeAws_json1_1SearchTablesByLFTagsCommand = exports.serializeAws_json1_1SearchDatabasesByLFTagsCommand = exports.serializeAws_json1_1RevokePermissionsCommand = exports.serializeAws_json1_1RemoveLFTagsFromResourceCommand = exports.serializeAws_json1_1RegisterResourceCommand = exports.serializeAws_json1_1PutDataLakeSettingsCommand = exports.serializeAws_json1_1ListResourcesCommand = exports.serializeAws_json1_1ListPermissionsCommand = exports.serializeAws_json1_1ListLFTagsCommand = exports.serializeAws_json1_1GrantPermissionsCommand = exports.serializeAws_json1_1GetResourceLFTagsCommand = exports.serializeAws_json1_1GetLFTagCommand = exports.serializeAws_json1_1GetEffectivePermissionsForPathCommand = exports.serializeAws_json1_1GetDataLakeSettingsCommand = exports.serializeAws_json1_1DescribeResourceCommand = exports.serializeAws_json1_1DeregisterResourceCommand = exports.serializeAws_json1_1DeleteLFTagCommand = exports.serializeAws_json1_1CreateLFTagCommand = exports.serializeAws_json1_1BatchRevokePermissionsCommand = exports.serializeAws_json1_1BatchGrantPermissionsCommand = exports.serializeAws_json1_1AddLFTagsToResourceCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1AddLFTagsToResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLakeFormation.AddLFTagsToResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AddLFTagsToResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AddLFTagsToResourceCommand = serializeAws_json1_1AddLFTagsToResourceCommand;
const serializeAws_json1_1BatchGrantPermissionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLakeFormation.BatchGrantPermissions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGrantPermissionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchGrantPermissionsCommand = serializeAws_json1_1BatchGrantPermissionsCommand;
const serializeAws_json1_1BatchRevokePermissionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLakeFormation.BatchRevokePermissions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchRevokePermissionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchRevokePermissionsCommand = serializeAws_json1_1BatchRevokePermissionsCommand;
const serializeAws_json1_1CreateLFTagCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLakeFormation.CreateLFTag",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateLFTagRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateLFTagCommand = serializeAws_json1_1CreateLFTagCommand;
const serializeAws_json1_1DeleteLFTagCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLakeFormation.DeleteLFTag",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteLFTagRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteLFTagCommand = serializeAws_json1_1DeleteLFTagCommand;
const serializeAws_json1_1DeregisterResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLakeFormation.DeregisterResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeregisterResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeregisterResourceCommand = serializeAws_json1_1DeregisterResourceCommand;
const serializeAws_json1_1DescribeResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLakeFormation.DescribeResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeResourceCommand = serializeAws_json1_1DescribeResourceCommand;
const serializeAws_json1_1GetDataLakeSettingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLakeFormation.GetDataLakeSettings",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDataLakeSettingsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetDataLakeSettingsCommand = serializeAws_json1_1GetDataLakeSettingsCommand;
const serializeAws_json1_1GetEffectivePermissionsForPathCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLakeFormation.GetEffectivePermissionsForPath",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetEffectivePermissionsForPathRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetEffectivePermissionsForPathCommand = serializeAws_json1_1GetEffectivePermissionsForPathCommand;
const serializeAws_json1_1GetLFTagCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLakeFormation.GetLFTag",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetLFTagRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetLFTagCommand = serializeAws_json1_1GetLFTagCommand;
const serializeAws_json1_1GetResourceLFTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLakeFormation.GetResourceLFTags",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetResourceLFTagsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetResourceLFTagsCommand = serializeAws_json1_1GetResourceLFTagsCommand;
const serializeAws_json1_1GrantPermissionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLakeFormation.GrantPermissions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GrantPermissionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GrantPermissionsCommand = serializeAws_json1_1GrantPermissionsCommand;
const serializeAws_json1_1ListLFTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLakeFormation.ListLFTags",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListLFTagsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListLFTagsCommand = serializeAws_json1_1ListLFTagsCommand;
const serializeAws_json1_1ListPermissionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLakeFormation.ListPermissions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListPermissionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListPermissionsCommand = serializeAws_json1_1ListPermissionsCommand;
const serializeAws_json1_1ListResourcesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLakeFormation.ListResources",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListResourcesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListResourcesCommand = serializeAws_json1_1ListResourcesCommand;
const serializeAws_json1_1PutDataLakeSettingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLakeFormation.PutDataLakeSettings",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutDataLakeSettingsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutDataLakeSettingsCommand = serializeAws_json1_1PutDataLakeSettingsCommand;
const serializeAws_json1_1RegisterResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLakeFormation.RegisterResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RegisterResourceCommand = serializeAws_json1_1RegisterResourceCommand;
const serializeAws_json1_1RemoveLFTagsFromResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLakeFormation.RemoveLFTagsFromResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RemoveLFTagsFromResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RemoveLFTagsFromResourceCommand = serializeAws_json1_1RemoveLFTagsFromResourceCommand;
const serializeAws_json1_1RevokePermissionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLakeFormation.RevokePermissions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RevokePermissionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RevokePermissionsCommand = serializeAws_json1_1RevokePermissionsCommand;
const serializeAws_json1_1SearchDatabasesByLFTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLakeFormation.SearchDatabasesByLFTags",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SearchDatabasesByLFTagsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SearchDatabasesByLFTagsCommand = serializeAws_json1_1SearchDatabasesByLFTagsCommand;
const serializeAws_json1_1SearchTablesByLFTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLakeFormation.SearchTablesByLFTags",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SearchTablesByLFTagsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SearchTablesByLFTagsCommand = serializeAws_json1_1SearchTablesByLFTagsCommand;
const serializeAws_json1_1UpdateLFTagCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLakeFormation.UpdateLFTag",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateLFTagRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateLFTagCommand = serializeAws_json1_1UpdateLFTagCommand;
const serializeAws_json1_1UpdateResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLakeFormation.UpdateResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateResourceCommand = serializeAws_json1_1UpdateResourceCommand;
const deserializeAws_json1_1AddLFTagsToResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AddLFTagsToResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddLFTagsToResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AddLFTagsToResourceCommand = deserializeAws_json1_1AddLFTagsToResourceCommand;
const deserializeAws_json1_1AddLFTagsToResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lakeformation#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.lakeformation#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.lakeformation#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.lakeformation#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lakeformation#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.lakeformation#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1BatchGrantPermissionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1BatchGrantPermissionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGrantPermissionsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchGrantPermissionsCommand = deserializeAws_json1_1BatchGrantPermissionsCommand;
const deserializeAws_json1_1BatchGrantPermissionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.lakeformation#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.lakeformation#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1BatchRevokePermissionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1BatchRevokePermissionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchRevokePermissionsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchRevokePermissionsCommand = deserializeAws_json1_1BatchRevokePermissionsCommand;
const deserializeAws_json1_1BatchRevokePermissionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.lakeformation#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.lakeformation#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateLFTagCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateLFTagCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateLFTagResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateLFTagCommand = deserializeAws_json1_1CreateLFTagCommand;
const deserializeAws_json1_1CreateLFTagCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lakeformation#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.lakeformation#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.lakeformation#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lakeformation#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.lakeformation#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNumberLimitExceededException":
        case "com.amazonaws.lakeformation#ResourceNumberLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteLFTagCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteLFTagCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteLFTagResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteLFTagCommand = deserializeAws_json1_1DeleteLFTagCommand;
const deserializeAws_json1_1DeleteLFTagCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lakeformation#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.lakeformation#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.lakeformation#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lakeformation#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.lakeformation#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeregisterResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeregisterResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeregisterResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeregisterResourceCommand = deserializeAws_json1_1DeregisterResourceCommand;
const deserializeAws_json1_1DeregisterResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.lakeformation#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.lakeformation#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lakeformation#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.lakeformation#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeResourceCommand = deserializeAws_json1_1DescribeResourceCommand;
const deserializeAws_json1_1DescribeResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.lakeformation#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.lakeformation#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lakeformation#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.lakeformation#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetDataLakeSettingsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetDataLakeSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDataLakeSettingsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetDataLakeSettingsCommand = deserializeAws_json1_1GetDataLakeSettingsCommand;
const deserializeAws_json1_1GetDataLakeSettingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.lakeformation#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.lakeformation#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lakeformation#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetEffectivePermissionsForPathCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetEffectivePermissionsForPathCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetEffectivePermissionsForPathResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetEffectivePermissionsForPathCommand = deserializeAws_json1_1GetEffectivePermissionsForPathCommand;
const deserializeAws_json1_1GetEffectivePermissionsForPathCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.lakeformation#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.lakeformation#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lakeformation#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.lakeformation#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetLFTagCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetLFTagCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetLFTagResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetLFTagCommand = deserializeAws_json1_1GetLFTagCommand;
const deserializeAws_json1_1GetLFTagCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lakeformation#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.lakeformation#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.lakeformation#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lakeformation#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.lakeformation#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetResourceLFTagsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetResourceLFTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetResourceLFTagsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetResourceLFTagsCommand = deserializeAws_json1_1GetResourceLFTagsCommand;
const deserializeAws_json1_1GetResourceLFTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lakeformation#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.lakeformation#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.lakeformation#GlueEncryptionException":
            response = {
                ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.lakeformation#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lakeformation#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.lakeformation#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GrantPermissionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GrantPermissionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GrantPermissionsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GrantPermissionsCommand = deserializeAws_json1_1GrantPermissionsCommand;
const deserializeAws_json1_1GrantPermissionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.lakeformation#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.lakeformation#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lakeformation#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListLFTagsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListLFTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListLFTagsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListLFTagsCommand = deserializeAws_json1_1ListLFTagsCommand;
const deserializeAws_json1_1ListLFTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.lakeformation#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.lakeformation#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lakeformation#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.lakeformation#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListPermissionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListPermissionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListPermissionsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListPermissionsCommand = deserializeAws_json1_1ListPermissionsCommand;
const deserializeAws_json1_1ListPermissionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.lakeformation#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lakeformation#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.lakeformation#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListResourcesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListResourcesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListResourcesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListResourcesCommand = deserializeAws_json1_1ListResourcesCommand;
const deserializeAws_json1_1ListResourcesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.lakeformation#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lakeformation#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.lakeformation#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1PutDataLakeSettingsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutDataLakeSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutDataLakeSettingsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutDataLakeSettingsCommand = deserializeAws_json1_1PutDataLakeSettingsCommand;
const deserializeAws_json1_1PutDataLakeSettingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.lakeformation#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lakeformation#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RegisterResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RegisterResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RegisterResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RegisterResourceCommand = deserializeAws_json1_1RegisterResourceCommand;
const deserializeAws_json1_1RegisterResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.lakeformation#AlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.lakeformation#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lakeformation#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.lakeformation#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RemoveLFTagsFromResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RemoveLFTagsFromResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RemoveLFTagsFromResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RemoveLFTagsFromResourceCommand = deserializeAws_json1_1RemoveLFTagsFromResourceCommand;
const deserializeAws_json1_1RemoveLFTagsFromResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lakeformation#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.lakeformation#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.lakeformation#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.lakeformation#GlueEncryptionException":
            response = {
                ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.lakeformation#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lakeformation#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.lakeformation#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RevokePermissionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RevokePermissionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RevokePermissionsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RevokePermissionsCommand = deserializeAws_json1_1RevokePermissionsCommand;
const deserializeAws_json1_1RevokePermissionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.lakeformation#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.lakeformation#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lakeformation#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1SearchDatabasesByLFTagsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SearchDatabasesByLFTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SearchDatabasesByLFTagsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SearchDatabasesByLFTagsCommand = deserializeAws_json1_1SearchDatabasesByLFTagsCommand;
const deserializeAws_json1_1SearchDatabasesByLFTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lakeformation#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.lakeformation#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.lakeformation#GlueEncryptionException":
            response = {
                ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.lakeformation#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lakeformation#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.lakeformation#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1SearchTablesByLFTagsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SearchTablesByLFTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SearchTablesByLFTagsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SearchTablesByLFTagsCommand = deserializeAws_json1_1SearchTablesByLFTagsCommand;
const deserializeAws_json1_1SearchTablesByLFTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lakeformation#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.lakeformation#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.lakeformation#GlueEncryptionException":
            response = {
                ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.lakeformation#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lakeformation#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.lakeformation#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateLFTagCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateLFTagCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateLFTagResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateLFTagCommand = deserializeAws_json1_1UpdateLFTagCommand;
const deserializeAws_json1_1UpdateLFTagCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lakeformation#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.lakeformation#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.lakeformation#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.lakeformation#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lakeformation#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.lakeformation#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateResourceCommand = deserializeAws_json1_1UpdateResourceCommand;
const deserializeAws_json1_1UpdateResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.lakeformation#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.lakeformation#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lakeformation#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.lakeformation#OperationTimeoutException":
            response = {
                ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AlreadyExistsException(body, context);
    const contents = {
        name: "AlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
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
const deserializeAws_json1_1EntityNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1EntityNotFoundException(body, context);
    const contents = {
        name: "EntityNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1GlueEncryptionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1GlueEncryptionException(body, context);
    const contents = {
        name: "GlueEncryptionException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InternalServiceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServiceException(body, context);
    const contents = {
        name: "InternalServiceException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidInputExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidInputException(body, context);
    const contents = {
        name: "InvalidInputException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1OperationTimeoutExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OperationTimeoutException(body, context);
    const contents = {
        name: "OperationTimeoutException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNumberLimitExceededException(body, context);
    const contents = {
        name: "ResourceNumberLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1AddLFTagsToResourceRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.LFTags !== undefined &&
            input.LFTags !== null && { LFTags: serializeAws_json1_1LFTagsList(input.LFTags, context) }),
        ...(input.Resource !== undefined &&
            input.Resource !== null && { Resource: serializeAws_json1_1Resource(input.Resource, context) }),
    };
};
const serializeAws_json1_1BatchGrantPermissionsRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.Entries !== undefined &&
            input.Entries !== null && {
            Entries: serializeAws_json1_1BatchPermissionsRequestEntryList(input.Entries, context),
        }),
    };
};
const serializeAws_json1_1BatchPermissionsRequestEntry = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.Permissions !== undefined &&
            input.Permissions !== null && { Permissions: serializeAws_json1_1PermissionList(input.Permissions, context) }),
        ...(input.PermissionsWithGrantOption !== undefined &&
            input.PermissionsWithGrantOption !== null && {
            PermissionsWithGrantOption: serializeAws_json1_1PermissionList(input.PermissionsWithGrantOption, context),
        }),
        ...(input.Principal !== undefined &&
            input.Principal !== null && { Principal: serializeAws_json1_1DataLakePrincipal(input.Principal, context) }),
        ...(input.Resource !== undefined &&
            input.Resource !== null && { Resource: serializeAws_json1_1Resource(input.Resource, context) }),
    };
};
const serializeAws_json1_1BatchPermissionsRequestEntryList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1BatchPermissionsRequestEntry(entry, context);
    });
};
const serializeAws_json1_1BatchRevokePermissionsRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.Entries !== undefined &&
            input.Entries !== null && {
            Entries: serializeAws_json1_1BatchPermissionsRequestEntryList(input.Entries, context),
        }),
    };
};
const serializeAws_json1_1CatalogResource = (input, context) => {
    return {};
};
const serializeAws_json1_1ColumnNames = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ColumnWildcard = (input, context) => {
    return {
        ...(input.ExcludedColumnNames !== undefined &&
            input.ExcludedColumnNames !== null && {
            ExcludedColumnNames: serializeAws_json1_1ColumnNames(input.ExcludedColumnNames, context),
        }),
    };
};
const serializeAws_json1_1CreateLFTagRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.TagKey !== undefined && input.TagKey !== null && { TagKey: input.TagKey }),
        ...(input.TagValues !== undefined &&
            input.TagValues !== null && { TagValues: serializeAws_json1_1TagValueList(input.TagValues, context) }),
    };
};
const serializeAws_json1_1DatabaseResource = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1DataLakePrincipal = (input, context) => {
    return {
        ...(input.DataLakePrincipalIdentifier !== undefined &&
            input.DataLakePrincipalIdentifier !== null && { DataLakePrincipalIdentifier: input.DataLakePrincipalIdentifier }),
    };
};
const serializeAws_json1_1DataLakePrincipalList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1DataLakePrincipal(entry, context);
    });
};
const serializeAws_json1_1DataLakeSettings = (input, context) => {
    return {
        ...(input.CreateDatabaseDefaultPermissions !== undefined &&
            input.CreateDatabaseDefaultPermissions !== null && {
            CreateDatabaseDefaultPermissions: serializeAws_json1_1PrincipalPermissionsList(input.CreateDatabaseDefaultPermissions, context),
        }),
        ...(input.CreateTableDefaultPermissions !== undefined &&
            input.CreateTableDefaultPermissions !== null && {
            CreateTableDefaultPermissions: serializeAws_json1_1PrincipalPermissionsList(input.CreateTableDefaultPermissions, context),
        }),
        ...(input.DataLakeAdmins !== undefined &&
            input.DataLakeAdmins !== null && {
            DataLakeAdmins: serializeAws_json1_1DataLakePrincipalList(input.DataLakeAdmins, context),
        }),
        ...(input.TrustedResourceOwners !== undefined &&
            input.TrustedResourceOwners !== null && {
            TrustedResourceOwners: serializeAws_json1_1TrustedResourceOwners(input.TrustedResourceOwners, context),
        }),
    };
};
const serializeAws_json1_1DataLocationResource = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_1DeleteLFTagRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.TagKey !== undefined && input.TagKey !== null && { TagKey: input.TagKey }),
    };
};
const serializeAws_json1_1DeregisterResourceRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_1DescribeResourceRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_1Expression = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1LFTag(entry, context);
    });
};
const serializeAws_json1_1FilterCondition = (input, context) => {
    return {
        ...(input.ComparisonOperator !== undefined &&
            input.ComparisonOperator !== null && { ComparisonOperator: input.ComparisonOperator }),
        ...(input.Field !== undefined && input.Field !== null && { Field: input.Field }),
        ...(input.StringValueList !== undefined &&
            input.StringValueList !== null && {
            StringValueList: serializeAws_json1_1StringValueList(input.StringValueList, context),
        }),
    };
};
const serializeAws_json1_1FilterConditionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1FilterCondition(entry, context);
    });
};
const serializeAws_json1_1GetDataLakeSettingsRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    };
};
const serializeAws_json1_1GetEffectivePermissionsForPathRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_1GetLFTagRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.TagKey !== undefined && input.TagKey !== null && { TagKey: input.TagKey }),
    };
};
const serializeAws_json1_1GetResourceLFTagsRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.Resource !== undefined &&
            input.Resource !== null && { Resource: serializeAws_json1_1Resource(input.Resource, context) }),
        ...(input.ShowAssignedLFTags !== undefined &&
            input.ShowAssignedLFTags !== null && { ShowAssignedLFTags: input.ShowAssignedLFTags }),
    };
};
const serializeAws_json1_1GrantPermissionsRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.Permissions !== undefined &&
            input.Permissions !== null && { Permissions: serializeAws_json1_1PermissionList(input.Permissions, context) }),
        ...(input.PermissionsWithGrantOption !== undefined &&
            input.PermissionsWithGrantOption !== null && {
            PermissionsWithGrantOption: serializeAws_json1_1PermissionList(input.PermissionsWithGrantOption, context),
        }),
        ...(input.Principal !== undefined &&
            input.Principal !== null && { Principal: serializeAws_json1_1DataLakePrincipal(input.Principal, context) }),
        ...(input.Resource !== undefined &&
            input.Resource !== null && { Resource: serializeAws_json1_1Resource(input.Resource, context) }),
    };
};
const serializeAws_json1_1LFTag = (input, context) => {
    return {
        ...(input.TagKey !== undefined && input.TagKey !== null && { TagKey: input.TagKey }),
        ...(input.TagValues !== undefined &&
            input.TagValues !== null && { TagValues: serializeAws_json1_1TagValueList(input.TagValues, context) }),
    };
};
const serializeAws_json1_1LFTagKeyResource = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.TagKey !== undefined && input.TagKey !== null && { TagKey: input.TagKey }),
        ...(input.TagValues !== undefined &&
            input.TagValues !== null && { TagValues: serializeAws_json1_1TagValueList(input.TagValues, context) }),
    };
};
const serializeAws_json1_1LFTagPair = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.TagKey !== undefined && input.TagKey !== null && { TagKey: input.TagKey }),
        ...(input.TagValues !== undefined &&
            input.TagValues !== null && { TagValues: serializeAws_json1_1TagValueList(input.TagValues, context) }),
    };
};
const serializeAws_json1_1LFTagPolicyResource = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.Expression !== undefined &&
            input.Expression !== null && { Expression: serializeAws_json1_1Expression(input.Expression, context) }),
        ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
    };
};
const serializeAws_json1_1LFTagsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1LFTagPair(entry, context);
    });
};
const serializeAws_json1_1ListLFTagsRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ResourceShareType !== undefined &&
            input.ResourceShareType !== null && { ResourceShareType: input.ResourceShareType }),
    };
};
const serializeAws_json1_1ListPermissionsRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.Principal !== undefined &&
            input.Principal !== null && { Principal: serializeAws_json1_1DataLakePrincipal(input.Principal, context) }),
        ...(input.Resource !== undefined &&
            input.Resource !== null && { Resource: serializeAws_json1_1Resource(input.Resource, context) }),
        ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
    };
};
const serializeAws_json1_1ListResourcesRequest = (input, context) => {
    return {
        ...(input.FilterConditionList !== undefined &&
            input.FilterConditionList !== null && {
            FilterConditionList: serializeAws_json1_1FilterConditionList(input.FilterConditionList, context),
        }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1PermissionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1PrincipalPermissions = (input, context) => {
    return {
        ...(input.Permissions !== undefined &&
            input.Permissions !== null && { Permissions: serializeAws_json1_1PermissionList(input.Permissions, context) }),
        ...(input.Principal !== undefined &&
            input.Principal !== null && { Principal: serializeAws_json1_1DataLakePrincipal(input.Principal, context) }),
    };
};
const serializeAws_json1_1PrincipalPermissionsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1PrincipalPermissions(entry, context);
    });
};
const serializeAws_json1_1PutDataLakeSettingsRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.DataLakeSettings !== undefined &&
            input.DataLakeSettings !== null && {
            DataLakeSettings: serializeAws_json1_1DataLakeSettings(input.DataLakeSettings, context),
        }),
    };
};
const serializeAws_json1_1RegisterResourceRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
        ...(input.UseServiceLinkedRole !== undefined &&
            input.UseServiceLinkedRole !== null && { UseServiceLinkedRole: input.UseServiceLinkedRole }),
    };
};
const serializeAws_json1_1RemoveLFTagsFromResourceRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.LFTags !== undefined &&
            input.LFTags !== null && { LFTags: serializeAws_json1_1LFTagsList(input.LFTags, context) }),
        ...(input.Resource !== undefined &&
            input.Resource !== null && { Resource: serializeAws_json1_1Resource(input.Resource, context) }),
    };
};
const serializeAws_json1_1Resource = (input, context) => {
    return {
        ...(input.Catalog !== undefined &&
            input.Catalog !== null && { Catalog: serializeAws_json1_1CatalogResource(input.Catalog, context) }),
        ...(input.DataLocation !== undefined &&
            input.DataLocation !== null && {
            DataLocation: serializeAws_json1_1DataLocationResource(input.DataLocation, context),
        }),
        ...(input.Database !== undefined &&
            input.Database !== null && { Database: serializeAws_json1_1DatabaseResource(input.Database, context) }),
        ...(input.LFTag !== undefined &&
            input.LFTag !== null && { LFTag: serializeAws_json1_1LFTagKeyResource(input.LFTag, context) }),
        ...(input.LFTagPolicy !== undefined &&
            input.LFTagPolicy !== null && {
            LFTagPolicy: serializeAws_json1_1LFTagPolicyResource(input.LFTagPolicy, context),
        }),
        ...(input.Table !== undefined &&
            input.Table !== null && { Table: serializeAws_json1_1TableResource(input.Table, context) }),
        ...(input.TableWithColumns !== undefined &&
            input.TableWithColumns !== null && {
            TableWithColumns: serializeAws_json1_1TableWithColumnsResource(input.TableWithColumns, context),
        }),
    };
};
const serializeAws_json1_1RevokePermissionsRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.Permissions !== undefined &&
            input.Permissions !== null && { Permissions: serializeAws_json1_1PermissionList(input.Permissions, context) }),
        ...(input.PermissionsWithGrantOption !== undefined &&
            input.PermissionsWithGrantOption !== null && {
            PermissionsWithGrantOption: serializeAws_json1_1PermissionList(input.PermissionsWithGrantOption, context),
        }),
        ...(input.Principal !== undefined &&
            input.Principal !== null && { Principal: serializeAws_json1_1DataLakePrincipal(input.Principal, context) }),
        ...(input.Resource !== undefined &&
            input.Resource !== null && { Resource: serializeAws_json1_1Resource(input.Resource, context) }),
    };
};
const serializeAws_json1_1SearchDatabasesByLFTagsRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.Expression !== undefined &&
            input.Expression !== null && { Expression: serializeAws_json1_1Expression(input.Expression, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1SearchTablesByLFTagsRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.Expression !== undefined &&
            input.Expression !== null && { Expression: serializeAws_json1_1Expression(input.Expression, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1StringValueList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1TableResource = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.TableWildcard !== undefined &&
            input.TableWildcard !== null && {
            TableWildcard: serializeAws_json1_1TableWildcard(input.TableWildcard, context),
        }),
    };
};
const serializeAws_json1_1TableWildcard = (input, context) => {
    return {};
};
const serializeAws_json1_1TableWithColumnsResource = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.ColumnNames !== undefined &&
            input.ColumnNames !== null && { ColumnNames: serializeAws_json1_1ColumnNames(input.ColumnNames, context) }),
        ...(input.ColumnWildcard !== undefined &&
            input.ColumnWildcard !== null && {
            ColumnWildcard: serializeAws_json1_1ColumnWildcard(input.ColumnWildcard, context),
        }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1TagValueList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1TrustedResourceOwners = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1UpdateLFTagRequest = (input, context) => {
    return {
        ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
        ...(input.TagKey !== undefined && input.TagKey !== null && { TagKey: input.TagKey }),
        ...(input.TagValuesToAdd !== undefined &&
            input.TagValuesToAdd !== null && {
            TagValuesToAdd: serializeAws_json1_1TagValueList(input.TagValuesToAdd, context),
        }),
        ...(input.TagValuesToDelete !== undefined &&
            input.TagValuesToDelete !== null && {
            TagValuesToDelete: serializeAws_json1_1TagValueList(input.TagValuesToDelete, context),
        }),
    };
};
const serializeAws_json1_1UpdateResourceRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    };
};
const deserializeAws_json1_1AccessDeniedException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1AddLFTagsToResourceResponse = (output, context) => {
    return {
        Failures: output.Failures !== undefined && output.Failures !== null
            ? deserializeAws_json1_1LFTagErrors(output.Failures, context)
            : undefined,
    };
};
const deserializeAws_json1_1AlreadyExistsException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1BatchGrantPermissionsResponse = (output, context) => {
    return {
        Failures: output.Failures !== undefined && output.Failures !== null
            ? deserializeAws_json1_1BatchPermissionsFailureList(output.Failures, context)
            : undefined,
    };
};
const deserializeAws_json1_1BatchPermissionsFailureEntry = (output, context) => {
    return {
        Error: output.Error !== undefined && output.Error !== null
            ? deserializeAws_json1_1ErrorDetail(output.Error, context)
            : undefined,
        RequestEntry: output.RequestEntry !== undefined && output.RequestEntry !== null
            ? deserializeAws_json1_1BatchPermissionsRequestEntry(output.RequestEntry, context)
            : undefined,
    };
};
const deserializeAws_json1_1BatchPermissionsFailureList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BatchPermissionsFailureEntry(entry, context);
    });
};
const deserializeAws_json1_1BatchPermissionsRequestEntry = (output, context) => {
    return {
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Permissions: output.Permissions !== undefined && output.Permissions !== null
            ? deserializeAws_json1_1PermissionList(output.Permissions, context)
            : undefined,
        PermissionsWithGrantOption: output.PermissionsWithGrantOption !== undefined && output.PermissionsWithGrantOption !== null
            ? deserializeAws_json1_1PermissionList(output.PermissionsWithGrantOption, context)
            : undefined,
        Principal: output.Principal !== undefined && output.Principal !== null
            ? deserializeAws_json1_1DataLakePrincipal(output.Principal, context)
            : undefined,
        Resource: output.Resource !== undefined && output.Resource !== null
            ? deserializeAws_json1_1Resource(output.Resource, context)
            : undefined,
    };
};
const deserializeAws_json1_1BatchRevokePermissionsResponse = (output, context) => {
    return {
        Failures: output.Failures !== undefined && output.Failures !== null
            ? deserializeAws_json1_1BatchPermissionsFailureList(output.Failures, context)
            : undefined,
    };
};
const deserializeAws_json1_1CatalogResource = (output, context) => {
    return {};
};
const deserializeAws_json1_1ColumnLFTag = (output, context) => {
    return {
        LFTags: output.LFTags !== undefined && output.LFTags !== null
            ? deserializeAws_json1_1LFTagsList(output.LFTags, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1ColumnLFTagsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ColumnLFTag(entry, context);
    });
};
const deserializeAws_json1_1ColumnNames = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ColumnWildcard = (output, context) => {
    return {
        ExcludedColumnNames: output.ExcludedColumnNames !== undefined && output.ExcludedColumnNames !== null
            ? deserializeAws_json1_1ColumnNames(output.ExcludedColumnNames, context)
            : undefined,
    };
};
const deserializeAws_json1_1ConcurrentModificationException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1CreateLFTagResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DatabaseLFTagsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TaggedDatabase(entry, context);
    });
};
const deserializeAws_json1_1DatabaseResource = (output, context) => {
    return {
        CatalogId: output.CatalogId !== undefined && output.CatalogId !== null ? output.CatalogId : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1DataLakePrincipal = (output, context) => {
    return {
        DataLakePrincipalIdentifier: output.DataLakePrincipalIdentifier !== undefined && output.DataLakePrincipalIdentifier !== null
            ? output.DataLakePrincipalIdentifier
            : undefined,
    };
};
const deserializeAws_json1_1DataLakePrincipalList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DataLakePrincipal(entry, context);
    });
};
const deserializeAws_json1_1DataLakeSettings = (output, context) => {
    return {
        CreateDatabaseDefaultPermissions: output.CreateDatabaseDefaultPermissions !== undefined && output.CreateDatabaseDefaultPermissions !== null
            ? deserializeAws_json1_1PrincipalPermissionsList(output.CreateDatabaseDefaultPermissions, context)
            : undefined,
        CreateTableDefaultPermissions: output.CreateTableDefaultPermissions !== undefined && output.CreateTableDefaultPermissions !== null
            ? deserializeAws_json1_1PrincipalPermissionsList(output.CreateTableDefaultPermissions, context)
            : undefined,
        DataLakeAdmins: output.DataLakeAdmins !== undefined && output.DataLakeAdmins !== null
            ? deserializeAws_json1_1DataLakePrincipalList(output.DataLakeAdmins, context)
            : undefined,
        TrustedResourceOwners: output.TrustedResourceOwners !== undefined && output.TrustedResourceOwners !== null
            ? deserializeAws_json1_1TrustedResourceOwners(output.TrustedResourceOwners, context)
            : undefined,
    };
};
const deserializeAws_json1_1DataLocationResource = (output, context) => {
    return {
        CatalogId: output.CatalogId !== undefined && output.CatalogId !== null ? output.CatalogId : undefined,
        ResourceArn: output.ResourceArn !== undefined && output.ResourceArn !== null ? output.ResourceArn : undefined,
    };
};
const deserializeAws_json1_1DeleteLFTagResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeregisterResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DescribeResourceResponse = (output, context) => {
    return {
        ResourceInfo: output.ResourceInfo !== undefined && output.ResourceInfo !== null
            ? deserializeAws_json1_1ResourceInfo(output.ResourceInfo, context)
            : undefined,
    };
};
const deserializeAws_json1_1DetailsMap = (output, context) => {
    return {
        ResourceShare: output.ResourceShare !== undefined && output.ResourceShare !== null
            ? deserializeAws_json1_1ResourceShareList(output.ResourceShare, context)
            : undefined,
    };
};
const deserializeAws_json1_1EntityNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ErrorDetail = (output, context) => {
    return {
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
    };
};
const deserializeAws_json1_1Expression = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LFTag(entry, context);
    });
};
const deserializeAws_json1_1GetDataLakeSettingsResponse = (output, context) => {
    return {
        DataLakeSettings: output.DataLakeSettings !== undefined && output.DataLakeSettings !== null
            ? deserializeAws_json1_1DataLakeSettings(output.DataLakeSettings, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetEffectivePermissionsForPathResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Permissions: output.Permissions !== undefined && output.Permissions !== null
            ? deserializeAws_json1_1PrincipalResourcePermissionsList(output.Permissions, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetLFTagResponse = (output, context) => {
    return {
        CatalogId: output.CatalogId !== undefined && output.CatalogId !== null ? output.CatalogId : undefined,
        TagKey: output.TagKey !== undefined && output.TagKey !== null ? output.TagKey : undefined,
        TagValues: output.TagValues !== undefined && output.TagValues !== null
            ? deserializeAws_json1_1TagValueList(output.TagValues, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetResourceLFTagsResponse = (output, context) => {
    return {
        LFTagOnDatabase: output.LFTagOnDatabase !== undefined && output.LFTagOnDatabase !== null
            ? deserializeAws_json1_1LFTagsList(output.LFTagOnDatabase, context)
            : undefined,
        LFTagsOnColumns: output.LFTagsOnColumns !== undefined && output.LFTagsOnColumns !== null
            ? deserializeAws_json1_1ColumnLFTagsList(output.LFTagsOnColumns, context)
            : undefined,
        LFTagsOnTable: output.LFTagsOnTable !== undefined && output.LFTagsOnTable !== null
            ? deserializeAws_json1_1LFTagsList(output.LFTagsOnTable, context)
            : undefined,
    };
};
const deserializeAws_json1_1GlueEncryptionException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1GrantPermissionsResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1InternalServiceException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidInputException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1LFTag = (output, context) => {
    return {
        TagKey: output.TagKey !== undefined && output.TagKey !== null ? output.TagKey : undefined,
        TagValues: output.TagValues !== undefined && output.TagValues !== null
            ? deserializeAws_json1_1TagValueList(output.TagValues, context)
            : undefined,
    };
};
const deserializeAws_json1_1LFTagError = (output, context) => {
    return {
        Error: output.Error !== undefined && output.Error !== null
            ? deserializeAws_json1_1ErrorDetail(output.Error, context)
            : undefined,
        LFTag: output.LFTag !== undefined && output.LFTag !== null
            ? deserializeAws_json1_1LFTagPair(output.LFTag, context)
            : undefined,
    };
};
const deserializeAws_json1_1LFTagErrors = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LFTagError(entry, context);
    });
};
const deserializeAws_json1_1LFTagKeyResource = (output, context) => {
    return {
        CatalogId: output.CatalogId !== undefined && output.CatalogId !== null ? output.CatalogId : undefined,
        TagKey: output.TagKey !== undefined && output.TagKey !== null ? output.TagKey : undefined,
        TagValues: output.TagValues !== undefined && output.TagValues !== null
            ? deserializeAws_json1_1TagValueList(output.TagValues, context)
            : undefined,
    };
};
const deserializeAws_json1_1LFTagPair = (output, context) => {
    return {
        CatalogId: output.CatalogId !== undefined && output.CatalogId !== null ? output.CatalogId : undefined,
        TagKey: output.TagKey !== undefined && output.TagKey !== null ? output.TagKey : undefined,
        TagValues: output.TagValues !== undefined && output.TagValues !== null
            ? deserializeAws_json1_1TagValueList(output.TagValues, context)
            : undefined,
    };
};
const deserializeAws_json1_1LFTagPolicyResource = (output, context) => {
    return {
        CatalogId: output.CatalogId !== undefined && output.CatalogId !== null ? output.CatalogId : undefined,
        Expression: output.Expression !== undefined && output.Expression !== null
            ? deserializeAws_json1_1Expression(output.Expression, context)
            : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    };
};
const deserializeAws_json1_1LFTagsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LFTagPair(entry, context);
    });
};
const deserializeAws_json1_1ListLFTagsResponse = (output, context) => {
    return {
        LFTags: output.LFTags !== undefined && output.LFTags !== null
            ? deserializeAws_json1_1LFTagsList(output.LFTags, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListPermissionsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        PrincipalResourcePermissions: output.PrincipalResourcePermissions !== undefined && output.PrincipalResourcePermissions !== null
            ? deserializeAws_json1_1PrincipalResourcePermissionsList(output.PrincipalResourcePermissions, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListResourcesResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        ResourceInfoList: output.ResourceInfoList !== undefined && output.ResourceInfoList !== null
            ? deserializeAws_json1_1ResourceInfoList(output.ResourceInfoList, context)
            : undefined,
    };
};
const deserializeAws_json1_1OperationTimeoutException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1PermissionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1PrincipalPermissions = (output, context) => {
    return {
        Permissions: output.Permissions !== undefined && output.Permissions !== null
            ? deserializeAws_json1_1PermissionList(output.Permissions, context)
            : undefined,
        Principal: output.Principal !== undefined && output.Principal !== null
            ? deserializeAws_json1_1DataLakePrincipal(output.Principal, context)
            : undefined,
    };
};
const deserializeAws_json1_1PrincipalPermissionsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PrincipalPermissions(entry, context);
    });
};
const deserializeAws_json1_1PrincipalResourcePermissions = (output, context) => {
    return {
        AdditionalDetails: output.AdditionalDetails !== undefined && output.AdditionalDetails !== null
            ? deserializeAws_json1_1DetailsMap(output.AdditionalDetails, context)
            : undefined,
        Permissions: output.Permissions !== undefined && output.Permissions !== null
            ? deserializeAws_json1_1PermissionList(output.Permissions, context)
            : undefined,
        PermissionsWithGrantOption: output.PermissionsWithGrantOption !== undefined && output.PermissionsWithGrantOption !== null
            ? deserializeAws_json1_1PermissionList(output.PermissionsWithGrantOption, context)
            : undefined,
        Principal: output.Principal !== undefined && output.Principal !== null
            ? deserializeAws_json1_1DataLakePrincipal(output.Principal, context)
            : undefined,
        Resource: output.Resource !== undefined && output.Resource !== null
            ? deserializeAws_json1_1Resource(output.Resource, context)
            : undefined,
    };
};
const deserializeAws_json1_1PrincipalResourcePermissionsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PrincipalResourcePermissions(entry, context);
    });
};
const deserializeAws_json1_1PutDataLakeSettingsResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1RegisterResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1RemoveLFTagsFromResourceResponse = (output, context) => {
    return {
        Failures: output.Failures !== undefined && output.Failures !== null
            ? deserializeAws_json1_1LFTagErrors(output.Failures, context)
            : undefined,
    };
};
const deserializeAws_json1_1Resource = (output, context) => {
    return {
        Catalog: output.Catalog !== undefined && output.Catalog !== null
            ? deserializeAws_json1_1CatalogResource(output.Catalog, context)
            : undefined,
        DataLocation: output.DataLocation !== undefined && output.DataLocation !== null
            ? deserializeAws_json1_1DataLocationResource(output.DataLocation, context)
            : undefined,
        Database: output.Database !== undefined && output.Database !== null
            ? deserializeAws_json1_1DatabaseResource(output.Database, context)
            : undefined,
        LFTag: output.LFTag !== undefined && output.LFTag !== null
            ? deserializeAws_json1_1LFTagKeyResource(output.LFTag, context)
            : undefined,
        LFTagPolicy: output.LFTagPolicy !== undefined && output.LFTagPolicy !== null
            ? deserializeAws_json1_1LFTagPolicyResource(output.LFTagPolicy, context)
            : undefined,
        Table: output.Table !== undefined && output.Table !== null
            ? deserializeAws_json1_1TableResource(output.Table, context)
            : undefined,
        TableWithColumns: output.TableWithColumns !== undefined && output.TableWithColumns !== null
            ? deserializeAws_json1_1TableWithColumnsResource(output.TableWithColumns, context)
            : undefined,
    };
};
const deserializeAws_json1_1ResourceInfo = (output, context) => {
    return {
        LastModified: output.LastModified !== undefined && output.LastModified !== null
            ? new Date(Math.round(output.LastModified * 1000))
            : undefined,
        ResourceArn: output.ResourceArn !== undefined && output.ResourceArn !== null ? output.ResourceArn : undefined,
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
    };
};
const deserializeAws_json1_1ResourceInfoList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResourceInfo(entry, context);
    });
};
const deserializeAws_json1_1ResourceNumberLimitExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ResourceShareList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1RevokePermissionsResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1SearchDatabasesByLFTagsResponse = (output, context) => {
    return {
        DatabaseList: output.DatabaseList !== undefined && output.DatabaseList !== null
            ? deserializeAws_json1_1DatabaseLFTagsList(output.DatabaseList, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1SearchTablesByLFTagsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        TableList: output.TableList !== undefined && output.TableList !== null
            ? deserializeAws_json1_1TableLFTagsList(output.TableList, context)
            : undefined,
    };
};
const deserializeAws_json1_1TableLFTagsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TaggedTable(entry, context);
    });
};
const deserializeAws_json1_1TableResource = (output, context) => {
    return {
        CatalogId: output.CatalogId !== undefined && output.CatalogId !== null ? output.CatalogId : undefined,
        DatabaseName: output.DatabaseName !== undefined && output.DatabaseName !== null ? output.DatabaseName : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        TableWildcard: output.TableWildcard !== undefined && output.TableWildcard !== null
            ? deserializeAws_json1_1TableWildcard(output.TableWildcard, context)
            : undefined,
    };
};
const deserializeAws_json1_1TableWildcard = (output, context) => {
    return {};
};
const deserializeAws_json1_1TableWithColumnsResource = (output, context) => {
    return {
        CatalogId: output.CatalogId !== undefined && output.CatalogId !== null ? output.CatalogId : undefined,
        ColumnNames: output.ColumnNames !== undefined && output.ColumnNames !== null
            ? deserializeAws_json1_1ColumnNames(output.ColumnNames, context)
            : undefined,
        ColumnWildcard: output.ColumnWildcard !== undefined && output.ColumnWildcard !== null
            ? deserializeAws_json1_1ColumnWildcard(output.ColumnWildcard, context)
            : undefined,
        DatabaseName: output.DatabaseName !== undefined && output.DatabaseName !== null ? output.DatabaseName : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1TaggedDatabase = (output, context) => {
    return {
        Database: output.Database !== undefined && output.Database !== null
            ? deserializeAws_json1_1DatabaseResource(output.Database, context)
            : undefined,
        LFTags: output.LFTags !== undefined && output.LFTags !== null
            ? deserializeAws_json1_1LFTagsList(output.LFTags, context)
            : undefined,
    };
};
const deserializeAws_json1_1TaggedTable = (output, context) => {
    return {
        LFTagOnDatabase: output.LFTagOnDatabase !== undefined && output.LFTagOnDatabase !== null
            ? deserializeAws_json1_1LFTagsList(output.LFTagOnDatabase, context)
            : undefined,
        LFTagsOnColumns: output.LFTagsOnColumns !== undefined && output.LFTagsOnColumns !== null
            ? deserializeAws_json1_1ColumnLFTagsList(output.LFTagsOnColumns, context)
            : undefined,
        LFTagsOnTable: output.LFTagsOnTable !== undefined && output.LFTagsOnTable !== null
            ? deserializeAws_json1_1LFTagsList(output.LFTagsOnTable, context)
            : undefined,
        Table: output.Table !== undefined && output.Table !== null
            ? deserializeAws_json1_1TableResource(output.Table, context)
            : undefined,
    };
};
const deserializeAws_json1_1TagValueList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1TrustedResourceOwners = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1UpdateLFTagResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateResourceResponse = (output, context) => {
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