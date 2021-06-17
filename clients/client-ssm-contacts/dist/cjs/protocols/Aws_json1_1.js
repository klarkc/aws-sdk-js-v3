"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1StopEngagementCommand = exports.deserializeAws_json1_1StartEngagementCommand = exports.deserializeAws_json1_1SendActivationCodeCommand = exports.deserializeAws_json1_1PutContactPolicyCommand = exports.deserializeAws_json1_1ListTagsForResourceCommand = exports.deserializeAws_json1_1ListPagesByEngagementCommand = exports.deserializeAws_json1_1ListPagesByContactCommand = exports.deserializeAws_json1_1ListPageReceiptsCommand = exports.deserializeAws_json1_1ListEngagementsCommand = exports.deserializeAws_json1_1ListContactsCommand = exports.deserializeAws_json1_1ListContactChannelsCommand = exports.deserializeAws_json1_1GetContactPolicyCommand = exports.deserializeAws_json1_1GetContactChannelCommand = exports.deserializeAws_json1_1GetContactCommand = exports.deserializeAws_json1_1DescribePageCommand = exports.deserializeAws_json1_1DescribeEngagementCommand = exports.deserializeAws_json1_1DeleteContactChannelCommand = exports.deserializeAws_json1_1DeleteContactCommand = exports.deserializeAws_json1_1DeactivateContactChannelCommand = exports.deserializeAws_json1_1CreateContactChannelCommand = exports.deserializeAws_json1_1CreateContactCommand = exports.deserializeAws_json1_1ActivateContactChannelCommand = exports.deserializeAws_json1_1AcceptPageCommand = exports.serializeAws_json1_1UpdateContactChannelCommand = exports.serializeAws_json1_1UpdateContactCommand = exports.serializeAws_json1_1UntagResourceCommand = exports.serializeAws_json1_1TagResourceCommand = exports.serializeAws_json1_1StopEngagementCommand = exports.serializeAws_json1_1StartEngagementCommand = exports.serializeAws_json1_1SendActivationCodeCommand = exports.serializeAws_json1_1PutContactPolicyCommand = exports.serializeAws_json1_1ListTagsForResourceCommand = exports.serializeAws_json1_1ListPagesByEngagementCommand = exports.serializeAws_json1_1ListPagesByContactCommand = exports.serializeAws_json1_1ListPageReceiptsCommand = exports.serializeAws_json1_1ListEngagementsCommand = exports.serializeAws_json1_1ListContactsCommand = exports.serializeAws_json1_1ListContactChannelsCommand = exports.serializeAws_json1_1GetContactPolicyCommand = exports.serializeAws_json1_1GetContactChannelCommand = exports.serializeAws_json1_1GetContactCommand = exports.serializeAws_json1_1DescribePageCommand = exports.serializeAws_json1_1DescribeEngagementCommand = exports.serializeAws_json1_1DeleteContactChannelCommand = exports.serializeAws_json1_1DeleteContactCommand = exports.serializeAws_json1_1DeactivateContactChannelCommand = exports.serializeAws_json1_1CreateContactChannelCommand = exports.serializeAws_json1_1CreateContactCommand = exports.serializeAws_json1_1ActivateContactChannelCommand = exports.serializeAws_json1_1AcceptPageCommand = void 0;
exports.deserializeAws_json1_1UpdateContactChannelCommand = exports.deserializeAws_json1_1UpdateContactCommand = exports.deserializeAws_json1_1UntagResourceCommand = exports.deserializeAws_json1_1TagResourceCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const uuid_1 = require("uuid");
const serializeAws_json1_1AcceptPageCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SSMContacts.AcceptPage",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AcceptPageRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AcceptPageCommand = serializeAws_json1_1AcceptPageCommand;
const serializeAws_json1_1ActivateContactChannelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SSMContacts.ActivateContactChannel",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ActivateContactChannelRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ActivateContactChannelCommand = serializeAws_json1_1ActivateContactChannelCommand;
const serializeAws_json1_1CreateContactCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SSMContacts.CreateContact",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateContactRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateContactCommand = serializeAws_json1_1CreateContactCommand;
const serializeAws_json1_1CreateContactChannelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SSMContacts.CreateContactChannel",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateContactChannelRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateContactChannelCommand = serializeAws_json1_1CreateContactChannelCommand;
const serializeAws_json1_1DeactivateContactChannelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SSMContacts.DeactivateContactChannel",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeactivateContactChannelRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeactivateContactChannelCommand = serializeAws_json1_1DeactivateContactChannelCommand;
const serializeAws_json1_1DeleteContactCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SSMContacts.DeleteContact",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteContactRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteContactCommand = serializeAws_json1_1DeleteContactCommand;
const serializeAws_json1_1DeleteContactChannelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SSMContacts.DeleteContactChannel",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteContactChannelRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteContactChannelCommand = serializeAws_json1_1DeleteContactChannelCommand;
const serializeAws_json1_1DescribeEngagementCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SSMContacts.DescribeEngagement",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEngagementRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeEngagementCommand = serializeAws_json1_1DescribeEngagementCommand;
const serializeAws_json1_1DescribePageCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SSMContacts.DescribePage",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribePageRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribePageCommand = serializeAws_json1_1DescribePageCommand;
const serializeAws_json1_1GetContactCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SSMContacts.GetContact",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetContactRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetContactCommand = serializeAws_json1_1GetContactCommand;
const serializeAws_json1_1GetContactChannelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SSMContacts.GetContactChannel",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetContactChannelRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetContactChannelCommand = serializeAws_json1_1GetContactChannelCommand;
const serializeAws_json1_1GetContactPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SSMContacts.GetContactPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetContactPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetContactPolicyCommand = serializeAws_json1_1GetContactPolicyCommand;
const serializeAws_json1_1ListContactChannelsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SSMContacts.ListContactChannels",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListContactChannelsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListContactChannelsCommand = serializeAws_json1_1ListContactChannelsCommand;
const serializeAws_json1_1ListContactsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SSMContacts.ListContacts",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListContactsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListContactsCommand = serializeAws_json1_1ListContactsCommand;
const serializeAws_json1_1ListEngagementsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SSMContacts.ListEngagements",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListEngagementsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListEngagementsCommand = serializeAws_json1_1ListEngagementsCommand;
const serializeAws_json1_1ListPageReceiptsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SSMContacts.ListPageReceipts",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListPageReceiptsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListPageReceiptsCommand = serializeAws_json1_1ListPageReceiptsCommand;
const serializeAws_json1_1ListPagesByContactCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SSMContacts.ListPagesByContact",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListPagesByContactRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListPagesByContactCommand = serializeAws_json1_1ListPagesByContactCommand;
const serializeAws_json1_1ListPagesByEngagementCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SSMContacts.ListPagesByEngagement",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListPagesByEngagementRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListPagesByEngagementCommand = serializeAws_json1_1ListPagesByEngagementCommand;
const serializeAws_json1_1ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SSMContacts.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
const serializeAws_json1_1PutContactPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SSMContacts.PutContactPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutContactPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutContactPolicyCommand = serializeAws_json1_1PutContactPolicyCommand;
const serializeAws_json1_1SendActivationCodeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SSMContacts.SendActivationCode",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SendActivationCodeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SendActivationCodeCommand = serializeAws_json1_1SendActivationCodeCommand;
const serializeAws_json1_1StartEngagementCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SSMContacts.StartEngagement",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartEngagementRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartEngagementCommand = serializeAws_json1_1StartEngagementCommand;
const serializeAws_json1_1StopEngagementCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SSMContacts.StopEngagement",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StopEngagementRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopEngagementCommand = serializeAws_json1_1StopEngagementCommand;
const serializeAws_json1_1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SSMContacts.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SSMContacts.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
const serializeAws_json1_1UpdateContactCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SSMContacts.UpdateContact",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateContactRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateContactCommand = serializeAws_json1_1UpdateContactCommand;
const serializeAws_json1_1UpdateContactChannelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SSMContacts.UpdateContactChannel",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateContactChannelRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateContactChannelCommand = serializeAws_json1_1UpdateContactChannelCommand;
const deserializeAws_json1_1AcceptPageCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AcceptPageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AcceptPageResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AcceptPageCommand = deserializeAws_json1_1AcceptPageCommand;
const deserializeAws_json1_1AcceptPageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmcontacts#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmcontacts#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmcontacts#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmcontacts#ValidationException":
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
const deserializeAws_json1_1ActivateContactChannelCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ActivateContactChannelCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ActivateContactChannelResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ActivateContactChannelCommand = deserializeAws_json1_1ActivateContactChannelCommand;
const deserializeAws_json1_1ActivateContactChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmcontacts#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmcontacts#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmcontacts#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmcontacts#ValidationException":
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
const deserializeAws_json1_1CreateContactCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateContactCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateContactResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateContactCommand = deserializeAws_json1_1CreateContactCommand;
const deserializeAws_json1_1CreateContactCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmcontacts#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.ssmcontacts#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DataEncryptionException":
        case "com.amazonaws.ssmcontacts#DataEncryptionException":
            response = {
                ...(await deserializeAws_json1_1DataEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmcontacts#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.ssmcontacts#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmcontacts#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmcontacts#ValidationException":
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
const deserializeAws_json1_1CreateContactChannelCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateContactChannelCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateContactChannelResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateContactChannelCommand = deserializeAws_json1_1CreateContactChannelCommand;
const deserializeAws_json1_1CreateContactChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmcontacts#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.ssmcontacts#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DataEncryptionException":
        case "com.amazonaws.ssmcontacts#DataEncryptionException":
            response = {
                ...(await deserializeAws_json1_1DataEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmcontacts#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmcontacts#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmcontacts#ValidationException":
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
const deserializeAws_json1_1DeactivateContactChannelCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeactivateContactChannelCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeactivateContactChannelResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeactivateContactChannelCommand = deserializeAws_json1_1DeactivateContactChannelCommand;
const deserializeAws_json1_1DeactivateContactChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmcontacts#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmcontacts#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmcontacts#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmcontacts#ValidationException":
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
const deserializeAws_json1_1DeleteContactCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteContactCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteContactResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteContactCommand = deserializeAws_json1_1DeleteContactCommand;
const deserializeAws_json1_1DeleteContactCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmcontacts#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmcontacts#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmcontacts#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmcontacts#ValidationException":
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
const deserializeAws_json1_1DeleteContactChannelCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteContactChannelCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteContactChannelResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteContactChannelCommand = deserializeAws_json1_1DeleteContactChannelCommand;
const deserializeAws_json1_1DeleteContactChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmcontacts#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmcontacts#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmcontacts#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmcontacts#ValidationException":
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
const deserializeAws_json1_1DescribeEngagementCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeEngagementCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEngagementResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeEngagementCommand = deserializeAws_json1_1DescribeEngagementCommand;
const deserializeAws_json1_1DescribeEngagementCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmcontacts#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DataEncryptionException":
        case "com.amazonaws.ssmcontacts#DataEncryptionException":
            response = {
                ...(await deserializeAws_json1_1DataEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmcontacts#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmcontacts#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmcontacts#ValidationException":
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
const deserializeAws_json1_1DescribePageCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribePageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribePageResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribePageCommand = deserializeAws_json1_1DescribePageCommand;
const deserializeAws_json1_1DescribePageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmcontacts#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DataEncryptionException":
        case "com.amazonaws.ssmcontacts#DataEncryptionException":
            response = {
                ...(await deserializeAws_json1_1DataEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmcontacts#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmcontacts#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmcontacts#ValidationException":
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
const deserializeAws_json1_1GetContactCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetContactCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetContactResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetContactCommand = deserializeAws_json1_1GetContactCommand;
const deserializeAws_json1_1GetContactCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmcontacts#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DataEncryptionException":
        case "com.amazonaws.ssmcontacts#DataEncryptionException":
            response = {
                ...(await deserializeAws_json1_1DataEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmcontacts#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmcontacts#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmcontacts#ValidationException":
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
const deserializeAws_json1_1GetContactChannelCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetContactChannelCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetContactChannelResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetContactChannelCommand = deserializeAws_json1_1GetContactChannelCommand;
const deserializeAws_json1_1GetContactChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmcontacts#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DataEncryptionException":
        case "com.amazonaws.ssmcontacts#DataEncryptionException":
            response = {
                ...(await deserializeAws_json1_1DataEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmcontacts#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmcontacts#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmcontacts#ValidationException":
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
const deserializeAws_json1_1GetContactPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetContactPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetContactPolicyResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetContactPolicyCommand = deserializeAws_json1_1GetContactPolicyCommand;
const deserializeAws_json1_1GetContactPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmcontacts#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmcontacts#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmcontacts#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmcontacts#ValidationException":
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
const deserializeAws_json1_1ListContactChannelsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListContactChannelsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListContactChannelsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListContactChannelsCommand = deserializeAws_json1_1ListContactChannelsCommand;
const deserializeAws_json1_1ListContactChannelsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmcontacts#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DataEncryptionException":
        case "com.amazonaws.ssmcontacts#DataEncryptionException":
            response = {
                ...(await deserializeAws_json1_1DataEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmcontacts#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmcontacts#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmcontacts#ValidationException":
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
const deserializeAws_json1_1ListContactsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListContactsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListContactsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListContactsCommand = deserializeAws_json1_1ListContactsCommand;
const deserializeAws_json1_1ListContactsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmcontacts#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmcontacts#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmcontacts#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmcontacts#ValidationException":
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
const deserializeAws_json1_1ListEngagementsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListEngagementsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListEngagementsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListEngagementsCommand = deserializeAws_json1_1ListEngagementsCommand;
const deserializeAws_json1_1ListEngagementsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmcontacts#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmcontacts#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmcontacts#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmcontacts#ValidationException":
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
const deserializeAws_json1_1ListPageReceiptsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListPageReceiptsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListPageReceiptsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListPageReceiptsCommand = deserializeAws_json1_1ListPageReceiptsCommand;
const deserializeAws_json1_1ListPageReceiptsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmcontacts#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmcontacts#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmcontacts#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmcontacts#ValidationException":
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
const deserializeAws_json1_1ListPagesByContactCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListPagesByContactCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListPagesByContactResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListPagesByContactCommand = deserializeAws_json1_1ListPagesByContactCommand;
const deserializeAws_json1_1ListPagesByContactCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmcontacts#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmcontacts#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmcontacts#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmcontacts#ValidationException":
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
const deserializeAws_json1_1ListPagesByEngagementCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListPagesByEngagementCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListPagesByEngagementResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListPagesByEngagementCommand = deserializeAws_json1_1ListPagesByEngagementCommand;
const deserializeAws_json1_1ListPagesByEngagementCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmcontacts#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmcontacts#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmcontacts#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmcontacts#ValidationException":
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
    contents = deserializeAws_json1_1ListTagsForResourceResult(data, context);
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
        case "AccessDeniedException":
        case "com.amazonaws.ssmcontacts#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmcontacts#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmcontacts#ThrottlingException":
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
const deserializeAws_json1_1PutContactPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutContactPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutContactPolicyResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutContactPolicyCommand = deserializeAws_json1_1PutContactPolicyCommand;
const deserializeAws_json1_1PutContactPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmcontacts#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.ssmcontacts#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmcontacts#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmcontacts#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmcontacts#ValidationException":
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
const deserializeAws_json1_1SendActivationCodeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SendActivationCodeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SendActivationCodeResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SendActivationCodeCommand = deserializeAws_json1_1SendActivationCodeCommand;
const deserializeAws_json1_1SendActivationCodeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmcontacts#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DataEncryptionException":
        case "com.amazonaws.ssmcontacts#DataEncryptionException":
            response = {
                ...(await deserializeAws_json1_1DataEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmcontacts#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.ssmcontacts#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmcontacts#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmcontacts#ValidationException":
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
const deserializeAws_json1_1StartEngagementCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartEngagementCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartEngagementResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartEngagementCommand = deserializeAws_json1_1StartEngagementCommand;
const deserializeAws_json1_1StartEngagementCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmcontacts#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DataEncryptionException":
        case "com.amazonaws.ssmcontacts#DataEncryptionException":
            response = {
                ...(await deserializeAws_json1_1DataEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmcontacts#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmcontacts#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmcontacts#ValidationException":
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
const deserializeAws_json1_1StopEngagementCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StopEngagementCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopEngagementResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopEngagementCommand = deserializeAws_json1_1StopEngagementCommand;
const deserializeAws_json1_1StopEngagementCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmcontacts#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmcontacts#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmcontacts#ValidationException":
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
    contents = deserializeAws_json1_1TagResourceResult(data, context);
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
        case "AccessDeniedException":
        case "com.amazonaws.ssmcontacts#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmcontacts#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.ssmcontacts#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmcontacts#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmcontacts#ValidationException":
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
    contents = deserializeAws_json1_1UntagResourceResult(data, context);
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
        case "AccessDeniedException":
        case "com.amazonaws.ssmcontacts#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmcontacts#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmcontacts#ThrottlingException":
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
const deserializeAws_json1_1UpdateContactCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateContactCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateContactResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateContactCommand = deserializeAws_json1_1UpdateContactCommand;
const deserializeAws_json1_1UpdateContactCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmcontacts#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DataEncryptionException":
        case "com.amazonaws.ssmcontacts#DataEncryptionException":
            response = {
                ...(await deserializeAws_json1_1DataEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmcontacts#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.ssmcontacts#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmcontacts#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmcontacts#ValidationException":
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
const deserializeAws_json1_1UpdateContactChannelCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateContactChannelCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateContactChannelResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateContactChannelCommand = deserializeAws_json1_1UpdateContactChannelCommand;
const deserializeAws_json1_1UpdateContactChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmcontacts#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.ssmcontacts#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DataEncryptionException":
        case "com.amazonaws.ssmcontacts#DataEncryptionException":
            response = {
                ...(await deserializeAws_json1_1DataEncryptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmcontacts#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmcontacts#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmcontacts#ValidationException":
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
const deserializeAws_json1_1DataEncryptionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DataEncryptionException(body, context);
    const contents = {
        name: "DataEncryptionException",
        $fault: "client",
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
const deserializeAws_json1_1ServiceQuotaExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceQuotaExceededException(body, context);
    const contents = {
        name: "ServiceQuotaExceededException",
        $fault: "client",
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
const serializeAws_json1_1AcceptPageRequest = (input, context) => {
    return {
        ...(input.AcceptCode !== undefined && input.AcceptCode !== null && { AcceptCode: input.AcceptCode }),
        ...(input.AcceptType !== undefined && input.AcceptType !== null && { AcceptType: input.AcceptType }),
        ...(input.ContactChannelId !== undefined &&
            input.ContactChannelId !== null && { ContactChannelId: input.ContactChannelId }),
        ...(input.Note !== undefined && input.Note !== null && { Note: input.Note }),
        ...(input.PageId !== undefined && input.PageId !== null && { PageId: input.PageId }),
    };
};
const serializeAws_json1_1ActivateContactChannelRequest = (input, context) => {
    return {
        ...(input.ActivationCode !== undefined &&
            input.ActivationCode !== null && { ActivationCode: input.ActivationCode }),
        ...(input.ContactChannelId !== undefined &&
            input.ContactChannelId !== null && { ContactChannelId: input.ContactChannelId }),
    };
};
const serializeAws_json1_1ChannelTargetInfo = (input, context) => {
    return {
        ...(input.ContactChannelId !== undefined &&
            input.ContactChannelId !== null && { ContactChannelId: input.ContactChannelId }),
        ...(input.RetryIntervalInMinutes !== undefined &&
            input.RetryIntervalInMinutes !== null && { RetryIntervalInMinutes: input.RetryIntervalInMinutes }),
    };
};
const serializeAws_json1_1ContactChannelAddress = (input, context) => {
    return {
        ...(input.SimpleAddress !== undefined && input.SimpleAddress !== null && { SimpleAddress: input.SimpleAddress }),
    };
};
const serializeAws_json1_1ContactTargetInfo = (input, context) => {
    return {
        ...(input.ContactId !== undefined && input.ContactId !== null && { ContactId: input.ContactId }),
        ...(input.IsEssential !== undefined && input.IsEssential !== null && { IsEssential: input.IsEssential }),
    };
};
const serializeAws_json1_1CreateContactChannelRequest = (input, context) => {
    var _a;
    return {
        ...(input.ContactId !== undefined && input.ContactId !== null && { ContactId: input.ContactId }),
        ...(input.DeferActivation !== undefined &&
            input.DeferActivation !== null && { DeferActivation: input.DeferActivation }),
        ...(input.DeliveryAddress !== undefined &&
            input.DeliveryAddress !== null && {
            DeliveryAddress: serializeAws_json1_1ContactChannelAddress(input.DeliveryAddress, context),
        }),
        IdempotencyToken: (_a = input.IdempotencyToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_json1_1CreateContactRequest = (input, context) => {
    var _a;
    return {
        ...(input.Alias !== undefined && input.Alias !== null && { Alias: input.Alias }),
        ...(input.DisplayName !== undefined && input.DisplayName !== null && { DisplayName: input.DisplayName }),
        IdempotencyToken: (_a = input.IdempotencyToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.Plan !== undefined && input.Plan !== null && { Plan: serializeAws_json1_1Plan(input.Plan, context) }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagsList(input.Tags, context) }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_json1_1DeactivateContactChannelRequest = (input, context) => {
    return {
        ...(input.ContactChannelId !== undefined &&
            input.ContactChannelId !== null && { ContactChannelId: input.ContactChannelId }),
    };
};
const serializeAws_json1_1DeleteContactChannelRequest = (input, context) => {
    return {
        ...(input.ContactChannelId !== undefined &&
            input.ContactChannelId !== null && { ContactChannelId: input.ContactChannelId }),
    };
};
const serializeAws_json1_1DeleteContactRequest = (input, context) => {
    return {
        ...(input.ContactId !== undefined && input.ContactId !== null && { ContactId: input.ContactId }),
    };
};
const serializeAws_json1_1DescribeEngagementRequest = (input, context) => {
    return {
        ...(input.EngagementId !== undefined && input.EngagementId !== null && { EngagementId: input.EngagementId }),
    };
};
const serializeAws_json1_1DescribePageRequest = (input, context) => {
    return {
        ...(input.PageId !== undefined && input.PageId !== null && { PageId: input.PageId }),
    };
};
const serializeAws_json1_1GetContactChannelRequest = (input, context) => {
    return {
        ...(input.ContactChannelId !== undefined &&
            input.ContactChannelId !== null && { ContactChannelId: input.ContactChannelId }),
    };
};
const serializeAws_json1_1GetContactPolicyRequest = (input, context) => {
    return {
        ...(input.ContactArn !== undefined && input.ContactArn !== null && { ContactArn: input.ContactArn }),
    };
};
const serializeAws_json1_1GetContactRequest = (input, context) => {
    return {
        ...(input.ContactId !== undefined && input.ContactId !== null && { ContactId: input.ContactId }),
    };
};
const serializeAws_json1_1ListContactChannelsRequest = (input, context) => {
    return {
        ...(input.ContactId !== undefined && input.ContactId !== null && { ContactId: input.ContactId }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListContactsRequest = (input, context) => {
    return {
        ...(input.AliasPrefix !== undefined && input.AliasPrefix !== null && { AliasPrefix: input.AliasPrefix }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_json1_1ListEngagementsRequest = (input, context) => {
    return {
        ...(input.IncidentId !== undefined && input.IncidentId !== null && { IncidentId: input.IncidentId }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.TimeRangeValue !== undefined &&
            input.TimeRangeValue !== null && {
            TimeRangeValue: serializeAws_json1_1TimeRange(input.TimeRangeValue, context),
        }),
    };
};
const serializeAws_json1_1ListPageReceiptsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.PageId !== undefined && input.PageId !== null && { PageId: input.PageId }),
    };
};
const serializeAws_json1_1ListPagesByContactRequest = (input, context) => {
    return {
        ...(input.ContactId !== undefined && input.ContactId !== null && { ContactId: input.ContactId }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListPagesByEngagementRequest = (input, context) => {
    return {
        ...(input.EngagementId !== undefined && input.EngagementId !== null && { EngagementId: input.EngagementId }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    };
};
const serializeAws_json1_1Plan = (input, context) => {
    return {
        ...(input.Stages !== undefined &&
            input.Stages !== null && { Stages: serializeAws_json1_1StagesList(input.Stages, context) }),
    };
};
const serializeAws_json1_1PutContactPolicyRequest = (input, context) => {
    return {
        ...(input.ContactArn !== undefined && input.ContactArn !== null && { ContactArn: input.ContactArn }),
        ...(input.Policy !== undefined && input.Policy !== null && { Policy: input.Policy }),
    };
};
const serializeAws_json1_1SendActivationCodeRequest = (input, context) => {
    return {
        ...(input.ContactChannelId !== undefined &&
            input.ContactChannelId !== null && { ContactChannelId: input.ContactChannelId }),
    };
};
const serializeAws_json1_1Stage = (input, context) => {
    return {
        ...(input.DurationInMinutes !== undefined &&
            input.DurationInMinutes !== null && { DurationInMinutes: input.DurationInMinutes }),
        ...(input.Targets !== undefined &&
            input.Targets !== null && { Targets: serializeAws_json1_1TargetsList(input.Targets, context) }),
    };
};
const serializeAws_json1_1StagesList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Stage(entry, context);
    });
};
const serializeAws_json1_1StartEngagementRequest = (input, context) => {
    var _a;
    return {
        ...(input.ContactId !== undefined && input.ContactId !== null && { ContactId: input.ContactId }),
        ...(input.Content !== undefined && input.Content !== null && { Content: input.Content }),
        IdempotencyToken: (_a = input.IdempotencyToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.IncidentId !== undefined && input.IncidentId !== null && { IncidentId: input.IncidentId }),
        ...(input.PublicContent !== undefined && input.PublicContent !== null && { PublicContent: input.PublicContent }),
        ...(input.PublicSubject !== undefined && input.PublicSubject !== null && { PublicSubject: input.PublicSubject }),
        ...(input.Sender !== undefined && input.Sender !== null && { Sender: input.Sender }),
        ...(input.Subject !== undefined && input.Subject !== null && { Subject: input.Subject }),
    };
};
const serializeAws_json1_1StopEngagementRequest = (input, context) => {
    return {
        ...(input.EngagementId !== undefined && input.EngagementId !== null && { EngagementId: input.EngagementId }),
        ...(input.Reason !== undefined && input.Reason !== null && { Reason: input.Reason }),
    };
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
const serializeAws_json1_1TagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagsList(input.Tags, context) }),
    };
};
const serializeAws_json1_1TagsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Tag(entry, context);
    });
};
const serializeAws_json1_1Target = (input, context) => {
    return {
        ...(input.ChannelTargetInfo !== undefined &&
            input.ChannelTargetInfo !== null && {
            ChannelTargetInfo: serializeAws_json1_1ChannelTargetInfo(input.ChannelTargetInfo, context),
        }),
        ...(input.ContactTargetInfo !== undefined &&
            input.ContactTargetInfo !== null && {
            ContactTargetInfo: serializeAws_json1_1ContactTargetInfo(input.ContactTargetInfo, context),
        }),
    };
};
const serializeAws_json1_1TargetsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Target(entry, context);
    });
};
const serializeAws_json1_1TimeRange = (input, context) => {
    return {
        ...(input.EndTime !== undefined &&
            input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
        ...(input.StartTime !== undefined &&
            input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
    };
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
        ...(input.TagKeys !== undefined &&
            input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
    };
};
const serializeAws_json1_1UpdateContactChannelRequest = (input, context) => {
    return {
        ...(input.ContactChannelId !== undefined &&
            input.ContactChannelId !== null && { ContactChannelId: input.ContactChannelId }),
        ...(input.DeliveryAddress !== undefined &&
            input.DeliveryAddress !== null && {
            DeliveryAddress: serializeAws_json1_1ContactChannelAddress(input.DeliveryAddress, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1UpdateContactRequest = (input, context) => {
    return {
        ...(input.ContactId !== undefined && input.ContactId !== null && { ContactId: input.ContactId }),
        ...(input.DisplayName !== undefined && input.DisplayName !== null && { DisplayName: input.DisplayName }),
        ...(input.Plan !== undefined && input.Plan !== null && { Plan: serializeAws_json1_1Plan(input.Plan, context) }),
    };
};
const deserializeAws_json1_1AcceptPageResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1AccessDeniedException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ActivateContactChannelResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1ChannelTargetInfo = (output, context) => {
    return {
        ContactChannelId: output.ContactChannelId !== undefined && output.ContactChannelId !== null ? output.ContactChannelId : undefined,
        RetryIntervalInMinutes: output.RetryIntervalInMinutes !== undefined && output.RetryIntervalInMinutes !== null
            ? output.RetryIntervalInMinutes
            : undefined,
    };
};
const deserializeAws_json1_1ConflictException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    };
};
const deserializeAws_json1_1Contact = (output, context) => {
    return {
        Alias: output.Alias !== undefined && output.Alias !== null ? output.Alias : undefined,
        ContactArn: output.ContactArn !== undefined && output.ContactArn !== null ? output.ContactArn : undefined,
        DisplayName: output.DisplayName !== undefined && output.DisplayName !== null ? output.DisplayName : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1ContactChannel = (output, context) => {
    return {
        ActivationStatus: output.ActivationStatus !== undefined && output.ActivationStatus !== null ? output.ActivationStatus : undefined,
        ContactArn: output.ContactArn !== undefined && output.ContactArn !== null ? output.ContactArn : undefined,
        ContactChannelArn: output.ContactChannelArn !== undefined && output.ContactChannelArn !== null
            ? output.ContactChannelArn
            : undefined,
        DeliveryAddress: output.DeliveryAddress !== undefined && output.DeliveryAddress !== null
            ? deserializeAws_json1_1ContactChannelAddress(output.DeliveryAddress, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1ContactChannelAddress = (output, context) => {
    return {
        SimpleAddress: output.SimpleAddress !== undefined && output.SimpleAddress !== null ? output.SimpleAddress : undefined,
    };
};
const deserializeAws_json1_1ContactChannelList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ContactChannel(entry, context);
    });
};
const deserializeAws_json1_1ContactsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Contact(entry, context);
    });
};
const deserializeAws_json1_1ContactTargetInfo = (output, context) => {
    return {
        ContactId: output.ContactId !== undefined && output.ContactId !== null ? output.ContactId : undefined,
        IsEssential: output.IsEssential !== undefined && output.IsEssential !== null ? output.IsEssential : undefined,
    };
};
const deserializeAws_json1_1CreateContactChannelResult = (output, context) => {
    return {
        ContactChannelArn: output.ContactChannelArn !== undefined && output.ContactChannelArn !== null
            ? output.ContactChannelArn
            : undefined,
    };
};
const deserializeAws_json1_1CreateContactResult = (output, context) => {
    return {
        ContactArn: output.ContactArn !== undefined && output.ContactArn !== null ? output.ContactArn : undefined,
    };
};
const deserializeAws_json1_1DataEncryptionException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1DeactivateContactChannelResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteContactChannelResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteContactResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DescribeEngagementResult = (output, context) => {
    return {
        ContactArn: output.ContactArn !== undefined && output.ContactArn !== null ? output.ContactArn : undefined,
        Content: output.Content !== undefined && output.Content !== null ? output.Content : undefined,
        EngagementArn: output.EngagementArn !== undefined && output.EngagementArn !== null ? output.EngagementArn : undefined,
        IncidentId: output.IncidentId !== undefined && output.IncidentId !== null ? output.IncidentId : undefined,
        PublicContent: output.PublicContent !== undefined && output.PublicContent !== null ? output.PublicContent : undefined,
        PublicSubject: output.PublicSubject !== undefined && output.PublicSubject !== null ? output.PublicSubject : undefined,
        Sender: output.Sender !== undefined && output.Sender !== null ? output.Sender : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? new Date(Math.round(output.StartTime * 1000))
            : undefined,
        StopTime: output.StopTime !== undefined && output.StopTime !== null
            ? new Date(Math.round(output.StopTime * 1000))
            : undefined,
        Subject: output.Subject !== undefined && output.Subject !== null ? output.Subject : undefined,
    };
};
const deserializeAws_json1_1DescribePageResult = (output, context) => {
    return {
        ContactArn: output.ContactArn !== undefined && output.ContactArn !== null ? output.ContactArn : undefined,
        Content: output.Content !== undefined && output.Content !== null ? output.Content : undefined,
        DeliveryTime: output.DeliveryTime !== undefined && output.DeliveryTime !== null
            ? new Date(Math.round(output.DeliveryTime * 1000))
            : undefined,
        EngagementArn: output.EngagementArn !== undefined && output.EngagementArn !== null ? output.EngagementArn : undefined,
        IncidentId: output.IncidentId !== undefined && output.IncidentId !== null ? output.IncidentId : undefined,
        PageArn: output.PageArn !== undefined && output.PageArn !== null ? output.PageArn : undefined,
        PublicContent: output.PublicContent !== undefined && output.PublicContent !== null ? output.PublicContent : undefined,
        PublicSubject: output.PublicSubject !== undefined && output.PublicSubject !== null ? output.PublicSubject : undefined,
        ReadTime: output.ReadTime !== undefined && output.ReadTime !== null
            ? new Date(Math.round(output.ReadTime * 1000))
            : undefined,
        Sender: output.Sender !== undefined && output.Sender !== null ? output.Sender : undefined,
        SentTime: output.SentTime !== undefined && output.SentTime !== null
            ? new Date(Math.round(output.SentTime * 1000))
            : undefined,
        Subject: output.Subject !== undefined && output.Subject !== null ? output.Subject : undefined,
    };
};
const deserializeAws_json1_1Engagement = (output, context) => {
    return {
        ContactArn: output.ContactArn !== undefined && output.ContactArn !== null ? output.ContactArn : undefined,
        EngagementArn: output.EngagementArn !== undefined && output.EngagementArn !== null ? output.EngagementArn : undefined,
        IncidentId: output.IncidentId !== undefined && output.IncidentId !== null ? output.IncidentId : undefined,
        Sender: output.Sender !== undefined && output.Sender !== null ? output.Sender : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? new Date(Math.round(output.StartTime * 1000))
            : undefined,
        StopTime: output.StopTime !== undefined && output.StopTime !== null
            ? new Date(Math.round(output.StopTime * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1EngagementsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Engagement(entry, context);
    });
};
const deserializeAws_json1_1GetContactChannelResult = (output, context) => {
    return {
        ActivationStatus: output.ActivationStatus !== undefined && output.ActivationStatus !== null ? output.ActivationStatus : undefined,
        ContactArn: output.ContactArn !== undefined && output.ContactArn !== null ? output.ContactArn : undefined,
        ContactChannelArn: output.ContactChannelArn !== undefined && output.ContactChannelArn !== null
            ? output.ContactChannelArn
            : undefined,
        DeliveryAddress: output.DeliveryAddress !== undefined && output.DeliveryAddress !== null
            ? deserializeAws_json1_1ContactChannelAddress(output.DeliveryAddress, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1GetContactPolicyResult = (output, context) => {
    return {
        ContactArn: output.ContactArn !== undefined && output.ContactArn !== null ? output.ContactArn : undefined,
        Policy: output.Policy !== undefined && output.Policy !== null ? output.Policy : undefined,
    };
};
const deserializeAws_json1_1GetContactResult = (output, context) => {
    return {
        Alias: output.Alias !== undefined && output.Alias !== null ? output.Alias : undefined,
        ContactArn: output.ContactArn !== undefined && output.ContactArn !== null ? output.ContactArn : undefined,
        DisplayName: output.DisplayName !== undefined && output.DisplayName !== null ? output.DisplayName : undefined,
        Plan: output.Plan !== undefined && output.Plan !== null ? deserializeAws_json1_1Plan(output.Plan, context) : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1InternalServerException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        RetryAfterSeconds: output.RetryAfterSeconds !== undefined && output.RetryAfterSeconds !== null
            ? output.RetryAfterSeconds
            : undefined,
    };
};
const deserializeAws_json1_1ListContactChannelsResult = (output, context) => {
    return {
        ContactChannels: output.ContactChannels !== undefined && output.ContactChannels !== null
            ? deserializeAws_json1_1ContactChannelList(output.ContactChannels, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListContactsResult = (output, context) => {
    return {
        Contacts: output.Contacts !== undefined && output.Contacts !== null
            ? deserializeAws_json1_1ContactsList(output.Contacts, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListEngagementsResult = (output, context) => {
    return {
        Engagements: output.Engagements !== undefined && output.Engagements !== null
            ? deserializeAws_json1_1EngagementsList(output.Engagements, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListPageReceiptsResult = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Receipts: output.Receipts !== undefined && output.Receipts !== null
            ? deserializeAws_json1_1ReceiptsList(output.Receipts, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListPagesByContactResult = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Pages: output.Pages !== undefined && output.Pages !== null
            ? deserializeAws_json1_1PagesList(output.Pages, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListPagesByEngagementResult = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Pages: output.Pages !== undefined && output.Pages !== null
            ? deserializeAws_json1_1PagesList(output.Pages, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListTagsForResourceResult = (output, context) => {
    return {
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagsList(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1Page = (output, context) => {
    return {
        ContactArn: output.ContactArn !== undefined && output.ContactArn !== null ? output.ContactArn : undefined,
        DeliveryTime: output.DeliveryTime !== undefined && output.DeliveryTime !== null
            ? new Date(Math.round(output.DeliveryTime * 1000))
            : undefined,
        EngagementArn: output.EngagementArn !== undefined && output.EngagementArn !== null ? output.EngagementArn : undefined,
        IncidentId: output.IncidentId !== undefined && output.IncidentId !== null ? output.IncidentId : undefined,
        PageArn: output.PageArn !== undefined && output.PageArn !== null ? output.PageArn : undefined,
        ReadTime: output.ReadTime !== undefined && output.ReadTime !== null
            ? new Date(Math.round(output.ReadTime * 1000))
            : undefined,
        Sender: output.Sender !== undefined && output.Sender !== null ? output.Sender : undefined,
        SentTime: output.SentTime !== undefined && output.SentTime !== null
            ? new Date(Math.round(output.SentTime * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1PagesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Page(entry, context);
    });
};
const deserializeAws_json1_1Plan = (output, context) => {
    return {
        Stages: output.Stages !== undefined && output.Stages !== null
            ? deserializeAws_json1_1StagesList(output.Stages, context)
            : undefined,
    };
};
const deserializeAws_json1_1PutContactPolicyResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1Receipt = (output, context) => {
    return {
        ContactChannelArn: output.ContactChannelArn !== undefined && output.ContactChannelArn !== null
            ? output.ContactChannelArn
            : undefined,
        ReceiptInfo: output.ReceiptInfo !== undefined && output.ReceiptInfo !== null ? output.ReceiptInfo : undefined,
        ReceiptTime: output.ReceiptTime !== undefined && output.ReceiptTime !== null
            ? new Date(Math.round(output.ReceiptTime * 1000))
            : undefined,
        ReceiptType: output.ReceiptType !== undefined && output.ReceiptType !== null ? output.ReceiptType : undefined,
    };
};
const deserializeAws_json1_1ReceiptsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Receipt(entry, context);
    });
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    };
};
const deserializeAws_json1_1SendActivationCodeResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1ServiceQuotaExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        QuotaCode: output.QuotaCode !== undefined && output.QuotaCode !== null ? output.QuotaCode : undefined,
        ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
        ServiceCode: output.ServiceCode !== undefined && output.ServiceCode !== null ? output.ServiceCode : undefined,
    };
};
const deserializeAws_json1_1Stage = (output, context) => {
    return {
        DurationInMinutes: output.DurationInMinutes !== undefined && output.DurationInMinutes !== null
            ? output.DurationInMinutes
            : undefined,
        Targets: output.Targets !== undefined && output.Targets !== null
            ? deserializeAws_json1_1TargetsList(output.Targets, context)
            : undefined,
    };
};
const deserializeAws_json1_1StagesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Stage(entry, context);
    });
};
const deserializeAws_json1_1StartEngagementResult = (output, context) => {
    return {
        EngagementArn: output.EngagementArn !== undefined && output.EngagementArn !== null ? output.EngagementArn : undefined,
    };
};
const deserializeAws_json1_1StopEngagementResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1Tag = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1TagResourceResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1TagsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Tag(entry, context);
    });
};
const deserializeAws_json1_1Target = (output, context) => {
    return {
        ChannelTargetInfo: output.ChannelTargetInfo !== undefined && output.ChannelTargetInfo !== null
            ? deserializeAws_json1_1ChannelTargetInfo(output.ChannelTargetInfo, context)
            : undefined,
        ContactTargetInfo: output.ContactTargetInfo !== undefined && output.ContactTargetInfo !== null
            ? deserializeAws_json1_1ContactTargetInfo(output.ContactTargetInfo, context)
            : undefined,
    };
};
const deserializeAws_json1_1TargetsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Target(entry, context);
    });
};
const deserializeAws_json1_1ThrottlingException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        QuotaCode: output.QuotaCode !== undefined && output.QuotaCode !== null ? output.QuotaCode : undefined,
        RetryAfterSeconds: output.RetryAfterSeconds !== undefined && output.RetryAfterSeconds !== null
            ? output.RetryAfterSeconds
            : undefined,
        ServiceCode: output.ServiceCode !== undefined && output.ServiceCode !== null ? output.ServiceCode : undefined,
    };
};
const deserializeAws_json1_1UntagResourceResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateContactChannelResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateContactResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1ValidationException = (output, context) => {
    return {
        Fields: output.Fields !== undefined && output.Fields !== null
            ? deserializeAws_json1_1ValidationExceptionFieldList(output.Fields, context)
            : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        Reason: output.Reason !== undefined && output.Reason !== null ? output.Reason : undefined,
    };
};
const deserializeAws_json1_1ValidationExceptionField = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1ValidationExceptionFieldList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ValidationExceptionField(entry, context);
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