"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1UpdateS3ResourcesCommand = exports.deserializeAws_json1_1ListS3ResourcesCommand = exports.deserializeAws_json1_1ListMemberAccountsCommand = exports.deserializeAws_json1_1DisassociateS3ResourcesCommand = exports.deserializeAws_json1_1DisassociateMemberAccountCommand = exports.deserializeAws_json1_1AssociateS3ResourcesCommand = exports.deserializeAws_json1_1AssociateMemberAccountCommand = exports.serializeAws_json1_1UpdateS3ResourcesCommand = exports.serializeAws_json1_1ListS3ResourcesCommand = exports.serializeAws_json1_1ListMemberAccountsCommand = exports.serializeAws_json1_1DisassociateS3ResourcesCommand = exports.serializeAws_json1_1DisassociateMemberAccountCommand = exports.serializeAws_json1_1AssociateS3ResourcesCommand = exports.serializeAws_json1_1AssociateMemberAccountCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1AssociateMemberAccountCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MacieService.AssociateMemberAccount",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateMemberAccountRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociateMemberAccountCommand = serializeAws_json1_1AssociateMemberAccountCommand;
const serializeAws_json1_1AssociateS3ResourcesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MacieService.AssociateS3Resources",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateS3ResourcesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociateS3ResourcesCommand = serializeAws_json1_1AssociateS3ResourcesCommand;
const serializeAws_json1_1DisassociateMemberAccountCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MacieService.DisassociateMemberAccount",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateMemberAccountRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisassociateMemberAccountCommand = serializeAws_json1_1DisassociateMemberAccountCommand;
const serializeAws_json1_1DisassociateS3ResourcesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MacieService.DisassociateS3Resources",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateS3ResourcesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisassociateS3ResourcesCommand = serializeAws_json1_1DisassociateS3ResourcesCommand;
const serializeAws_json1_1ListMemberAccountsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MacieService.ListMemberAccounts",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListMemberAccountsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListMemberAccountsCommand = serializeAws_json1_1ListMemberAccountsCommand;
const serializeAws_json1_1ListS3ResourcesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MacieService.ListS3Resources",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListS3ResourcesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListS3ResourcesCommand = serializeAws_json1_1ListS3ResourcesCommand;
const serializeAws_json1_1UpdateS3ResourcesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MacieService.UpdateS3Resources",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateS3ResourcesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateS3ResourcesCommand = serializeAws_json1_1UpdateS3ResourcesCommand;
const deserializeAws_json1_1AssociateMemberAccountCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AssociateMemberAccountCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssociateMemberAccountCommand = deserializeAws_json1_1AssociateMemberAccountCommand;
const deserializeAws_json1_1AssociateMemberAccountCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.macie#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.macie#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.macie#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AssociateS3ResourcesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AssociateS3ResourcesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateS3ResourcesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssociateS3ResourcesCommand = deserializeAws_json1_1AssociateS3ResourcesCommand;
const deserializeAws_json1_1AssociateS3ResourcesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.macie#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.macie#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.macie#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DisassociateMemberAccountCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisassociateMemberAccountCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisassociateMemberAccountCommand = deserializeAws_json1_1DisassociateMemberAccountCommand;
const deserializeAws_json1_1DisassociateMemberAccountCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.macie#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.macie#InvalidInputException":
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
const deserializeAws_json1_1DisassociateS3ResourcesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisassociateS3ResourcesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateS3ResourcesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisassociateS3ResourcesCommand = deserializeAws_json1_1DisassociateS3ResourcesCommand;
const deserializeAws_json1_1DisassociateS3ResourcesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.macie#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.macie#InvalidInputException":
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
const deserializeAws_json1_1ListMemberAccountsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListMemberAccountsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListMemberAccountsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListMemberAccountsCommand = deserializeAws_json1_1ListMemberAccountsCommand;
const deserializeAws_json1_1ListMemberAccountsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.macie#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.macie#InvalidInputException":
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
const deserializeAws_json1_1ListS3ResourcesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListS3ResourcesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListS3ResourcesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListS3ResourcesCommand = deserializeAws_json1_1ListS3ResourcesCommand;
const deserializeAws_json1_1ListS3ResourcesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.macie#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.macie#InvalidInputException":
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
const deserializeAws_json1_1UpdateS3ResourcesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateS3ResourcesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateS3ResourcesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateS3ResourcesCommand = deserializeAws_json1_1UpdateS3ResourcesCommand;
const deserializeAws_json1_1UpdateS3ResourcesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.macie#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.macie#InvalidInputException":
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
const deserializeAws_json1_1InternalExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalException(body, context);
    const contents = {
        name: "InternalException",
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
const serializeAws_json1_1AssociateMemberAccountRequest = (input, context) => {
    return {
        ...(input.memberAccountId !== undefined &&
            input.memberAccountId !== null && { memberAccountId: input.memberAccountId }),
    };
};
const serializeAws_json1_1AssociateS3ResourcesRequest = (input, context) => {
    return {
        ...(input.memberAccountId !== undefined &&
            input.memberAccountId !== null && { memberAccountId: input.memberAccountId }),
        ...(input.s3Resources !== undefined &&
            input.s3Resources !== null && {
            s3Resources: serializeAws_json1_1S3ResourcesClassification(input.s3Resources, context),
        }),
    };
};
const serializeAws_json1_1ClassificationType = (input, context) => {
    return {
        ...(input.continuous !== undefined && input.continuous !== null && { continuous: input.continuous }),
        ...(input.oneTime !== undefined && input.oneTime !== null && { oneTime: input.oneTime }),
    };
};
const serializeAws_json1_1ClassificationTypeUpdate = (input, context) => {
    return {
        ...(input.continuous !== undefined && input.continuous !== null && { continuous: input.continuous }),
        ...(input.oneTime !== undefined && input.oneTime !== null && { oneTime: input.oneTime }),
    };
};
const serializeAws_json1_1DisassociateMemberAccountRequest = (input, context) => {
    return {
        ...(input.memberAccountId !== undefined &&
            input.memberAccountId !== null && { memberAccountId: input.memberAccountId }),
    };
};
const serializeAws_json1_1DisassociateS3ResourcesRequest = (input, context) => {
    return {
        ...(input.associatedS3Resources !== undefined &&
            input.associatedS3Resources !== null && {
            associatedS3Resources: serializeAws_json1_1S3Resources(input.associatedS3Resources, context),
        }),
        ...(input.memberAccountId !== undefined &&
            input.memberAccountId !== null && { memberAccountId: input.memberAccountId }),
    };
};
const serializeAws_json1_1ListMemberAccountsRequest = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1ListS3ResourcesRequest = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.memberAccountId !== undefined &&
            input.memberAccountId !== null && { memberAccountId: input.memberAccountId }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1S3Resource = (input, context) => {
    return {
        ...(input.bucketName !== undefined && input.bucketName !== null && { bucketName: input.bucketName }),
        ...(input.prefix !== undefined && input.prefix !== null && { prefix: input.prefix }),
    };
};
const serializeAws_json1_1S3ResourceClassification = (input, context) => {
    return {
        ...(input.bucketName !== undefined && input.bucketName !== null && { bucketName: input.bucketName }),
        ...(input.classificationType !== undefined &&
            input.classificationType !== null && {
            classificationType: serializeAws_json1_1ClassificationType(input.classificationType, context),
        }),
        ...(input.prefix !== undefined && input.prefix !== null && { prefix: input.prefix }),
    };
};
const serializeAws_json1_1S3ResourceClassificationUpdate = (input, context) => {
    return {
        ...(input.bucketName !== undefined && input.bucketName !== null && { bucketName: input.bucketName }),
        ...(input.classificationTypeUpdate !== undefined &&
            input.classificationTypeUpdate !== null && {
            classificationTypeUpdate: serializeAws_json1_1ClassificationTypeUpdate(input.classificationTypeUpdate, context),
        }),
        ...(input.prefix !== undefined && input.prefix !== null && { prefix: input.prefix }),
    };
};
const serializeAws_json1_1S3Resources = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1S3Resource(entry, context);
    });
};
const serializeAws_json1_1S3ResourcesClassification = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1S3ResourceClassification(entry, context);
    });
};
const serializeAws_json1_1S3ResourcesClassificationUpdate = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1S3ResourceClassificationUpdate(entry, context);
    });
};
const serializeAws_json1_1UpdateS3ResourcesRequest = (input, context) => {
    return {
        ...(input.memberAccountId !== undefined &&
            input.memberAccountId !== null && { memberAccountId: input.memberAccountId }),
        ...(input.s3ResourcesUpdate !== undefined &&
            input.s3ResourcesUpdate !== null && {
            s3ResourcesUpdate: serializeAws_json1_1S3ResourcesClassificationUpdate(input.s3ResourcesUpdate, context),
        }),
    };
};
const deserializeAws_json1_1AccessDeniedException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    };
};
const deserializeAws_json1_1AssociateS3ResourcesResult = (output, context) => {
    return {
        failedS3Resources: output.failedS3Resources !== undefined && output.failedS3Resources !== null
            ? deserializeAws_json1_1FailedS3Resources(output.failedS3Resources, context)
            : undefined,
    };
};
const deserializeAws_json1_1ClassificationType = (output, context) => {
    return {
        continuous: output.continuous !== undefined && output.continuous !== null ? output.continuous : undefined,
        oneTime: output.oneTime !== undefined && output.oneTime !== null ? output.oneTime : undefined,
    };
};
const deserializeAws_json1_1DisassociateS3ResourcesResult = (output, context) => {
    return {
        failedS3Resources: output.failedS3Resources !== undefined && output.failedS3Resources !== null
            ? deserializeAws_json1_1FailedS3Resources(output.failedS3Resources, context)
            : undefined,
    };
};
const deserializeAws_json1_1FailedS3Resource = (output, context) => {
    return {
        errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
        errorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
        failedItem: output.failedItem !== undefined && output.failedItem !== null
            ? deserializeAws_json1_1S3Resource(output.failedItem, context)
            : undefined,
    };
};
const deserializeAws_json1_1FailedS3Resources = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FailedS3Resource(entry, context);
    });
};
const deserializeAws_json1_1InternalException = (output, context) => {
    return {
        errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidInputException = (output, context) => {
    return {
        errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
        fieldName: output.fieldName !== undefined && output.fieldName !== null ? output.fieldName : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    return {
        errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    };
};
const deserializeAws_json1_1ListMemberAccountsResult = (output, context) => {
    return {
        memberAccounts: output.memberAccounts !== undefined && output.memberAccounts !== null
            ? deserializeAws_json1_1MemberAccounts(output.memberAccounts, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1ListS3ResourcesResult = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        s3Resources: output.s3Resources !== undefined && output.s3Resources !== null
            ? deserializeAws_json1_1S3ResourcesClassification(output.s3Resources, context)
            : undefined,
    };
};
const deserializeAws_json1_1MemberAccount = (output, context) => {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
    };
};
const deserializeAws_json1_1MemberAccounts = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MemberAccount(entry, context);
    });
};
const deserializeAws_json1_1S3Resource = (output, context) => {
    return {
        bucketName: output.bucketName !== undefined && output.bucketName !== null ? output.bucketName : undefined,
        prefix: output.prefix !== undefined && output.prefix !== null ? output.prefix : undefined,
    };
};
const deserializeAws_json1_1S3ResourceClassification = (output, context) => {
    return {
        bucketName: output.bucketName !== undefined && output.bucketName !== null ? output.bucketName : undefined,
        classificationType: output.classificationType !== undefined && output.classificationType !== null
            ? deserializeAws_json1_1ClassificationType(output.classificationType, context)
            : undefined,
        prefix: output.prefix !== undefined && output.prefix !== null ? output.prefix : undefined,
    };
};
const deserializeAws_json1_1S3ResourcesClassification = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1S3ResourceClassification(entry, context);
    });
};
const deserializeAws_json1_1UpdateS3ResourcesResult = (output, context) => {
    return {
        failedS3Resources: output.failedS3Resources !== undefined && output.failedS3Resources !== null
            ? deserializeAws_json1_1FailedS3Resources(output.failedS3Resources, context)
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