"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1ResolveCaseCommand = exports.deserializeAws_json1_1RefreshTrustedAdvisorCheckCommand = exports.deserializeAws_json1_1DescribeTrustedAdvisorCheckSummariesCommand = exports.deserializeAws_json1_1DescribeTrustedAdvisorChecksCommand = exports.deserializeAws_json1_1DescribeTrustedAdvisorCheckResultCommand = exports.deserializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesCommand = exports.deserializeAws_json1_1DescribeSeverityLevelsCommand = exports.deserializeAws_json1_1DescribeServicesCommand = exports.deserializeAws_json1_1DescribeCommunicationsCommand = exports.deserializeAws_json1_1DescribeCasesCommand = exports.deserializeAws_json1_1DescribeAttachmentCommand = exports.deserializeAws_json1_1CreateCaseCommand = exports.deserializeAws_json1_1AddCommunicationToCaseCommand = exports.deserializeAws_json1_1AddAttachmentsToSetCommand = exports.serializeAws_json1_1ResolveCaseCommand = exports.serializeAws_json1_1RefreshTrustedAdvisorCheckCommand = exports.serializeAws_json1_1DescribeTrustedAdvisorCheckSummariesCommand = exports.serializeAws_json1_1DescribeTrustedAdvisorChecksCommand = exports.serializeAws_json1_1DescribeTrustedAdvisorCheckResultCommand = exports.serializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesCommand = exports.serializeAws_json1_1DescribeSeverityLevelsCommand = exports.serializeAws_json1_1DescribeServicesCommand = exports.serializeAws_json1_1DescribeCommunicationsCommand = exports.serializeAws_json1_1DescribeCasesCommand = exports.serializeAws_json1_1DescribeAttachmentCommand = exports.serializeAws_json1_1CreateCaseCommand = exports.serializeAws_json1_1AddCommunicationToCaseCommand = exports.serializeAws_json1_1AddAttachmentsToSetCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1AddAttachmentsToSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSSupport_20130415.AddAttachmentsToSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AddAttachmentsToSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AddAttachmentsToSetCommand = serializeAws_json1_1AddAttachmentsToSetCommand;
const serializeAws_json1_1AddCommunicationToCaseCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSSupport_20130415.AddCommunicationToCase",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AddCommunicationToCaseRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AddCommunicationToCaseCommand = serializeAws_json1_1AddCommunicationToCaseCommand;
const serializeAws_json1_1CreateCaseCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSSupport_20130415.CreateCase",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateCaseRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateCaseCommand = serializeAws_json1_1CreateCaseCommand;
const serializeAws_json1_1DescribeAttachmentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSSupport_20130415.DescribeAttachment",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAttachmentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeAttachmentCommand = serializeAws_json1_1DescribeAttachmentCommand;
const serializeAws_json1_1DescribeCasesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSSupport_20130415.DescribeCases",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeCasesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeCasesCommand = serializeAws_json1_1DescribeCasesCommand;
const serializeAws_json1_1DescribeCommunicationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSSupport_20130415.DescribeCommunications",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeCommunicationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeCommunicationsCommand = serializeAws_json1_1DescribeCommunicationsCommand;
const serializeAws_json1_1DescribeServicesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSSupport_20130415.DescribeServices",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeServicesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeServicesCommand = serializeAws_json1_1DescribeServicesCommand;
const serializeAws_json1_1DescribeSeverityLevelsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSSupport_20130415.DescribeSeverityLevels",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeSeverityLevelsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeSeverityLevelsCommand = serializeAws_json1_1DescribeSeverityLevelsCommand;
const serializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesCommand = serializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesCommand;
const serializeAws_json1_1DescribeTrustedAdvisorCheckResultCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSSupport_20130415.DescribeTrustedAdvisorCheckResult",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTrustedAdvisorCheckResultRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeTrustedAdvisorCheckResultCommand = serializeAws_json1_1DescribeTrustedAdvisorCheckResultCommand;
const serializeAws_json1_1DescribeTrustedAdvisorChecksCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSSupport_20130415.DescribeTrustedAdvisorChecks",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTrustedAdvisorChecksRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeTrustedAdvisorChecksCommand = serializeAws_json1_1DescribeTrustedAdvisorChecksCommand;
const serializeAws_json1_1DescribeTrustedAdvisorCheckSummariesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTrustedAdvisorCheckSummariesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeTrustedAdvisorCheckSummariesCommand = serializeAws_json1_1DescribeTrustedAdvisorCheckSummariesCommand;
const serializeAws_json1_1RefreshTrustedAdvisorCheckCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSSupport_20130415.RefreshTrustedAdvisorCheck",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RefreshTrustedAdvisorCheckRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RefreshTrustedAdvisorCheckCommand = serializeAws_json1_1RefreshTrustedAdvisorCheckCommand;
const serializeAws_json1_1ResolveCaseCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSSupport_20130415.ResolveCase",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ResolveCaseRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ResolveCaseCommand = serializeAws_json1_1ResolveCaseCommand;
const deserializeAws_json1_1AddAttachmentsToSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AddAttachmentsToSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddAttachmentsToSetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AddAttachmentsToSetCommand = deserializeAws_json1_1AddAttachmentsToSetCommand;
const deserializeAws_json1_1AddAttachmentsToSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AttachmentLimitExceeded":
        case "com.amazonaws.support#AttachmentLimitExceeded":
            response = {
                ...(await deserializeAws_json1_1AttachmentLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AttachmentSetExpired":
        case "com.amazonaws.support#AttachmentSetExpired":
            response = {
                ...(await deserializeAws_json1_1AttachmentSetExpiredResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AttachmentSetIdNotFound":
        case "com.amazonaws.support#AttachmentSetIdNotFound":
            response = {
                ...(await deserializeAws_json1_1AttachmentSetIdNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AttachmentSetSizeLimitExceeded":
        case "com.amazonaws.support#AttachmentSetSizeLimitExceeded":
            response = {
                ...(await deserializeAws_json1_1AttachmentSetSizeLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.support#InternalServerError":
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
const deserializeAws_json1_1AddCommunicationToCaseCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AddCommunicationToCaseCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddCommunicationToCaseResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AddCommunicationToCaseCommand = deserializeAws_json1_1AddCommunicationToCaseCommand;
const deserializeAws_json1_1AddCommunicationToCaseCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AttachmentSetExpired":
        case "com.amazonaws.support#AttachmentSetExpired":
            response = {
                ...(await deserializeAws_json1_1AttachmentSetExpiredResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AttachmentSetIdNotFound":
        case "com.amazonaws.support#AttachmentSetIdNotFound":
            response = {
                ...(await deserializeAws_json1_1AttachmentSetIdNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CaseIdNotFound":
        case "com.amazonaws.support#CaseIdNotFound":
            response = {
                ...(await deserializeAws_json1_1CaseIdNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.support#InternalServerError":
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
const deserializeAws_json1_1CreateCaseCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateCaseCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateCaseResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateCaseCommand = deserializeAws_json1_1CreateCaseCommand;
const deserializeAws_json1_1CreateCaseCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AttachmentSetExpired":
        case "com.amazonaws.support#AttachmentSetExpired":
            response = {
                ...(await deserializeAws_json1_1AttachmentSetExpiredResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AttachmentSetIdNotFound":
        case "com.amazonaws.support#AttachmentSetIdNotFound":
            response = {
                ...(await deserializeAws_json1_1AttachmentSetIdNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CaseCreationLimitExceeded":
        case "com.amazonaws.support#CaseCreationLimitExceeded":
            response = {
                ...(await deserializeAws_json1_1CaseCreationLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.support#InternalServerError":
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
const deserializeAws_json1_1DescribeAttachmentCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeAttachmentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAttachmentResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeAttachmentCommand = deserializeAws_json1_1DescribeAttachmentCommand;
const deserializeAws_json1_1DescribeAttachmentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AttachmentIdNotFound":
        case "com.amazonaws.support#AttachmentIdNotFound":
            response = {
                ...(await deserializeAws_json1_1AttachmentIdNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DescribeAttachmentLimitExceeded":
        case "com.amazonaws.support#DescribeAttachmentLimitExceeded":
            response = {
                ...(await deserializeAws_json1_1DescribeAttachmentLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.support#InternalServerError":
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
const deserializeAws_json1_1DescribeCasesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeCasesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeCasesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeCasesCommand = deserializeAws_json1_1DescribeCasesCommand;
const deserializeAws_json1_1DescribeCasesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CaseIdNotFound":
        case "com.amazonaws.support#CaseIdNotFound":
            response = {
                ...(await deserializeAws_json1_1CaseIdNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.support#InternalServerError":
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
const deserializeAws_json1_1DescribeCommunicationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeCommunicationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeCommunicationsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeCommunicationsCommand = deserializeAws_json1_1DescribeCommunicationsCommand;
const deserializeAws_json1_1DescribeCommunicationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CaseIdNotFound":
        case "com.amazonaws.support#CaseIdNotFound":
            response = {
                ...(await deserializeAws_json1_1CaseIdNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.support#InternalServerError":
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
const deserializeAws_json1_1DescribeServicesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeServicesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeServicesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeServicesCommand = deserializeAws_json1_1DescribeServicesCommand;
const deserializeAws_json1_1DescribeServicesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.support#InternalServerError":
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
const deserializeAws_json1_1DescribeSeverityLevelsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeSeverityLevelsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeSeverityLevelsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeSeverityLevelsCommand = deserializeAws_json1_1DescribeSeverityLevelsCommand;
const deserializeAws_json1_1DescribeSeverityLevelsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.support#InternalServerError":
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
const deserializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesCommand = deserializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesCommand;
const deserializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.support#InternalServerError":
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
const deserializeAws_json1_1DescribeTrustedAdvisorCheckResultCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeTrustedAdvisorCheckResultCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTrustedAdvisorCheckResultResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeTrustedAdvisorCheckResultCommand = deserializeAws_json1_1DescribeTrustedAdvisorCheckResultCommand;
const deserializeAws_json1_1DescribeTrustedAdvisorCheckResultCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.support#InternalServerError":
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
const deserializeAws_json1_1DescribeTrustedAdvisorChecksCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeTrustedAdvisorChecksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTrustedAdvisorChecksResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeTrustedAdvisorChecksCommand = deserializeAws_json1_1DescribeTrustedAdvisorChecksCommand;
const deserializeAws_json1_1DescribeTrustedAdvisorChecksCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.support#InternalServerError":
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
const deserializeAws_json1_1DescribeTrustedAdvisorCheckSummariesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeTrustedAdvisorCheckSummariesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTrustedAdvisorCheckSummariesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeTrustedAdvisorCheckSummariesCommand = deserializeAws_json1_1DescribeTrustedAdvisorCheckSummariesCommand;
const deserializeAws_json1_1DescribeTrustedAdvisorCheckSummariesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.support#InternalServerError":
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
const deserializeAws_json1_1RefreshTrustedAdvisorCheckCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RefreshTrustedAdvisorCheckCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RefreshTrustedAdvisorCheckResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RefreshTrustedAdvisorCheckCommand = deserializeAws_json1_1RefreshTrustedAdvisorCheckCommand;
const deserializeAws_json1_1RefreshTrustedAdvisorCheckCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.support#InternalServerError":
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
const deserializeAws_json1_1ResolveCaseCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ResolveCaseCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ResolveCaseResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ResolveCaseCommand = deserializeAws_json1_1ResolveCaseCommand;
const deserializeAws_json1_1ResolveCaseCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CaseIdNotFound":
        case "com.amazonaws.support#CaseIdNotFound":
            response = {
                ...(await deserializeAws_json1_1CaseIdNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.support#InternalServerError":
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
const deserializeAws_json1_1AttachmentIdNotFoundResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AttachmentIdNotFound(body, context);
    const contents = {
        name: "AttachmentIdNotFound",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1AttachmentLimitExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AttachmentLimitExceeded(body, context);
    const contents = {
        name: "AttachmentLimitExceeded",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1AttachmentSetExpiredResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AttachmentSetExpired(body, context);
    const contents = {
        name: "AttachmentSetExpired",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1AttachmentSetIdNotFoundResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AttachmentSetIdNotFound(body, context);
    const contents = {
        name: "AttachmentSetIdNotFound",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1AttachmentSetSizeLimitExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AttachmentSetSizeLimitExceeded(body, context);
    const contents = {
        name: "AttachmentSetSizeLimitExceeded",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1CaseCreationLimitExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CaseCreationLimitExceeded(body, context);
    const contents = {
        name: "CaseCreationLimitExceeded",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1CaseIdNotFoundResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CaseIdNotFound(body, context);
    const contents = {
        name: "CaseIdNotFound",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DescribeAttachmentLimitExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DescribeAttachmentLimitExceeded(body, context);
    const contents = {
        name: "DescribeAttachmentLimitExceeded",
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
const serializeAws_json1_1AddAttachmentsToSetRequest = (input, context) => {
    return {
        ...(input.attachmentSetId !== undefined &&
            input.attachmentSetId !== null && { attachmentSetId: input.attachmentSetId }),
        ...(input.attachments !== undefined &&
            input.attachments !== null && { attachments: serializeAws_json1_1Attachments(input.attachments, context) }),
    };
};
const serializeAws_json1_1AddCommunicationToCaseRequest = (input, context) => {
    return {
        ...(input.attachmentSetId !== undefined &&
            input.attachmentSetId !== null && { attachmentSetId: input.attachmentSetId }),
        ...(input.caseId !== undefined && input.caseId !== null && { caseId: input.caseId }),
        ...(input.ccEmailAddresses !== undefined &&
            input.ccEmailAddresses !== null && {
            ccEmailAddresses: serializeAws_json1_1CcEmailAddressList(input.ccEmailAddresses, context),
        }),
        ...(input.communicationBody !== undefined &&
            input.communicationBody !== null && { communicationBody: input.communicationBody }),
    };
};
const serializeAws_json1_1Attachment = (input, context) => {
    return {
        ...(input.data !== undefined && input.data !== null && { data: context.base64Encoder(input.data) }),
        ...(input.fileName !== undefined && input.fileName !== null && { fileName: input.fileName }),
    };
};
const serializeAws_json1_1Attachments = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Attachment(entry, context);
    });
};
const serializeAws_json1_1CaseIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1CcEmailAddressList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1CreateCaseRequest = (input, context) => {
    return {
        ...(input.attachmentSetId !== undefined &&
            input.attachmentSetId !== null && { attachmentSetId: input.attachmentSetId }),
        ...(input.categoryCode !== undefined && input.categoryCode !== null && { categoryCode: input.categoryCode }),
        ...(input.ccEmailAddresses !== undefined &&
            input.ccEmailAddresses !== null && {
            ccEmailAddresses: serializeAws_json1_1CcEmailAddressList(input.ccEmailAddresses, context),
        }),
        ...(input.communicationBody !== undefined &&
            input.communicationBody !== null && { communicationBody: input.communicationBody }),
        ...(input.issueType !== undefined && input.issueType !== null && { issueType: input.issueType }),
        ...(input.language !== undefined && input.language !== null && { language: input.language }),
        ...(input.serviceCode !== undefined && input.serviceCode !== null && { serviceCode: input.serviceCode }),
        ...(input.severityCode !== undefined && input.severityCode !== null && { severityCode: input.severityCode }),
        ...(input.subject !== undefined && input.subject !== null && { subject: input.subject }),
    };
};
const serializeAws_json1_1DescribeAttachmentRequest = (input, context) => {
    return {
        ...(input.attachmentId !== undefined && input.attachmentId !== null && { attachmentId: input.attachmentId }),
    };
};
const serializeAws_json1_1DescribeCasesRequest = (input, context) => {
    return {
        ...(input.afterTime !== undefined && input.afterTime !== null && { afterTime: input.afterTime }),
        ...(input.beforeTime !== undefined && input.beforeTime !== null && { beforeTime: input.beforeTime }),
        ...(input.caseIdList !== undefined &&
            input.caseIdList !== null && { caseIdList: serializeAws_json1_1CaseIdList(input.caseIdList, context) }),
        ...(input.displayId !== undefined && input.displayId !== null && { displayId: input.displayId }),
        ...(input.includeCommunications !== undefined &&
            input.includeCommunications !== null && { includeCommunications: input.includeCommunications }),
        ...(input.includeResolvedCases !== undefined &&
            input.includeResolvedCases !== null && { includeResolvedCases: input.includeResolvedCases }),
        ...(input.language !== undefined && input.language !== null && { language: input.language }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1DescribeCommunicationsRequest = (input, context) => {
    return {
        ...(input.afterTime !== undefined && input.afterTime !== null && { afterTime: input.afterTime }),
        ...(input.beforeTime !== undefined && input.beforeTime !== null && { beforeTime: input.beforeTime }),
        ...(input.caseId !== undefined && input.caseId !== null && { caseId: input.caseId }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1DescribeServicesRequest = (input, context) => {
    return {
        ...(input.language !== undefined && input.language !== null && { language: input.language }),
        ...(input.serviceCodeList !== undefined &&
            input.serviceCodeList !== null && {
            serviceCodeList: serializeAws_json1_1ServiceCodeList(input.serviceCodeList, context),
        }),
    };
};
const serializeAws_json1_1DescribeSeverityLevelsRequest = (input, context) => {
    return {
        ...(input.language !== undefined && input.language !== null && { language: input.language }),
    };
};
const serializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesRequest = (input, context) => {
    return {
        ...(input.checkIds !== undefined &&
            input.checkIds !== null && { checkIds: serializeAws_json1_1StringList(input.checkIds, context) }),
    };
};
const serializeAws_json1_1DescribeTrustedAdvisorCheckResultRequest = (input, context) => {
    return {
        ...(input.checkId !== undefined && input.checkId !== null && { checkId: input.checkId }),
        ...(input.language !== undefined && input.language !== null && { language: input.language }),
    };
};
const serializeAws_json1_1DescribeTrustedAdvisorChecksRequest = (input, context) => {
    return {
        ...(input.language !== undefined && input.language !== null && { language: input.language }),
    };
};
const serializeAws_json1_1DescribeTrustedAdvisorCheckSummariesRequest = (input, context) => {
    return {
        ...(input.checkIds !== undefined &&
            input.checkIds !== null && { checkIds: serializeAws_json1_1StringList(input.checkIds, context) }),
    };
};
const serializeAws_json1_1RefreshTrustedAdvisorCheckRequest = (input, context) => {
    return {
        ...(input.checkId !== undefined && input.checkId !== null && { checkId: input.checkId }),
    };
};
const serializeAws_json1_1ResolveCaseRequest = (input, context) => {
    return {
        ...(input.caseId !== undefined && input.caseId !== null && { caseId: input.caseId }),
    };
};
const serializeAws_json1_1ServiceCodeList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1StringList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1AddAttachmentsToSetResponse = (output, context) => {
    return {
        attachmentSetId: output.attachmentSetId !== undefined && output.attachmentSetId !== null ? output.attachmentSetId : undefined,
        expiryTime: output.expiryTime !== undefined && output.expiryTime !== null ? output.expiryTime : undefined,
    };
};
const deserializeAws_json1_1AddCommunicationToCaseResponse = (output, context) => {
    return {
        result: output.result !== undefined && output.result !== null ? output.result : undefined,
    };
};
const deserializeAws_json1_1Attachment = (output, context) => {
    return {
        data: output.data !== undefined && output.data !== null ? context.base64Decoder(output.data) : undefined,
        fileName: output.fileName !== undefined && output.fileName !== null ? output.fileName : undefined,
    };
};
const deserializeAws_json1_1AttachmentDetails = (output, context) => {
    return {
        attachmentId: output.attachmentId !== undefined && output.attachmentId !== null ? output.attachmentId : undefined,
        fileName: output.fileName !== undefined && output.fileName !== null ? output.fileName : undefined,
    };
};
const deserializeAws_json1_1AttachmentIdNotFound = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1AttachmentLimitExceeded = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1AttachmentSet = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AttachmentDetails(entry, context);
    });
};
const deserializeAws_json1_1AttachmentSetExpired = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1AttachmentSetIdNotFound = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1AttachmentSetSizeLimitExceeded = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1CaseCreationLimitExceeded = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1CaseDetails = (output, context) => {
    return {
        caseId: output.caseId !== undefined && output.caseId !== null ? output.caseId : undefined,
        categoryCode: output.categoryCode !== undefined && output.categoryCode !== null ? output.categoryCode : undefined,
        ccEmailAddresses: output.ccEmailAddresses !== undefined && output.ccEmailAddresses !== null
            ? deserializeAws_json1_1CcEmailAddressList(output.ccEmailAddresses, context)
            : undefined,
        displayId: output.displayId !== undefined && output.displayId !== null ? output.displayId : undefined,
        language: output.language !== undefined && output.language !== null ? output.language : undefined,
        recentCommunications: output.recentCommunications !== undefined && output.recentCommunications !== null
            ? deserializeAws_json1_1RecentCaseCommunications(output.recentCommunications, context)
            : undefined,
        serviceCode: output.serviceCode !== undefined && output.serviceCode !== null ? output.serviceCode : undefined,
        severityCode: output.severityCode !== undefined && output.severityCode !== null ? output.severityCode : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        subject: output.subject !== undefined && output.subject !== null ? output.subject : undefined,
        submittedBy: output.submittedBy !== undefined && output.submittedBy !== null ? output.submittedBy : undefined,
        timeCreated: output.timeCreated !== undefined && output.timeCreated !== null ? output.timeCreated : undefined,
    };
};
const deserializeAws_json1_1CaseIdNotFound = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1CaseList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CaseDetails(entry, context);
    });
};
const deserializeAws_json1_1Category = (output, context) => {
    return {
        code: output.code !== undefined && output.code !== null ? output.code : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_json1_1CategoryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Category(entry, context);
    });
};
const deserializeAws_json1_1CcEmailAddressList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1Communication = (output, context) => {
    return {
        attachmentSet: output.attachmentSet !== undefined && output.attachmentSet !== null
            ? deserializeAws_json1_1AttachmentSet(output.attachmentSet, context)
            : undefined,
        body: output.body !== undefined && output.body !== null ? output.body : undefined,
        caseId: output.caseId !== undefined && output.caseId !== null ? output.caseId : undefined,
        submittedBy: output.submittedBy !== undefined && output.submittedBy !== null ? output.submittedBy : undefined,
        timeCreated: output.timeCreated !== undefined && output.timeCreated !== null ? output.timeCreated : undefined,
    };
};
const deserializeAws_json1_1CommunicationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Communication(entry, context);
    });
};
const deserializeAws_json1_1CreateCaseResponse = (output, context) => {
    return {
        caseId: output.caseId !== undefined && output.caseId !== null ? output.caseId : undefined,
    };
};
const deserializeAws_json1_1DescribeAttachmentLimitExceeded = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1DescribeAttachmentResponse = (output, context) => {
    return {
        attachment: output.attachment !== undefined && output.attachment !== null
            ? deserializeAws_json1_1Attachment(output.attachment, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeCasesResponse = (output, context) => {
    return {
        cases: output.cases !== undefined && output.cases !== null
            ? deserializeAws_json1_1CaseList(output.cases, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeCommunicationsResponse = (output, context) => {
    return {
        communications: output.communications !== undefined && output.communications !== null
            ? deserializeAws_json1_1CommunicationList(output.communications, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeServicesResponse = (output, context) => {
    return {
        services: output.services !== undefined && output.services !== null
            ? deserializeAws_json1_1ServiceList(output.services, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeSeverityLevelsResponse = (output, context) => {
    return {
        severityLevels: output.severityLevels !== undefined && output.severityLevels !== null
            ? deserializeAws_json1_1SeverityLevelsList(output.severityLevels, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesResponse = (output, context) => {
    return {
        statuses: output.statuses !== undefined && output.statuses !== null
            ? deserializeAws_json1_1TrustedAdvisorCheckRefreshStatusList(output.statuses, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeTrustedAdvisorCheckResultResponse = (output, context) => {
    return {
        result: output.result !== undefined && output.result !== null
            ? deserializeAws_json1_1TrustedAdvisorCheckResult(output.result, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeTrustedAdvisorChecksResponse = (output, context) => {
    return {
        checks: output.checks !== undefined && output.checks !== null
            ? deserializeAws_json1_1TrustedAdvisorCheckList(output.checks, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeTrustedAdvisorCheckSummariesResponse = (output, context) => {
    return {
        summaries: output.summaries !== undefined && output.summaries !== null
            ? deserializeAws_json1_1TrustedAdvisorCheckSummaryList(output.summaries, context)
            : undefined,
    };
};
const deserializeAws_json1_1InternalServerError = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1RecentCaseCommunications = (output, context) => {
    return {
        communications: output.communications !== undefined && output.communications !== null
            ? deserializeAws_json1_1CommunicationList(output.communications, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1RefreshTrustedAdvisorCheckResponse = (output, context) => {
    return {
        status: output.status !== undefined && output.status !== null
            ? deserializeAws_json1_1TrustedAdvisorCheckRefreshStatus(output.status, context)
            : undefined,
    };
};
const deserializeAws_json1_1ResolveCaseResponse = (output, context) => {
    return {
        finalCaseStatus: output.finalCaseStatus !== undefined && output.finalCaseStatus !== null ? output.finalCaseStatus : undefined,
        initialCaseStatus: output.initialCaseStatus !== undefined && output.initialCaseStatus !== null
            ? output.initialCaseStatus
            : undefined,
    };
};
const deserializeAws_json1_1Service = (output, context) => {
    return {
        categories: output.categories !== undefined && output.categories !== null
            ? deserializeAws_json1_1CategoryList(output.categories, context)
            : undefined,
        code: output.code !== undefined && output.code !== null ? output.code : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_json1_1ServiceList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Service(entry, context);
    });
};
const deserializeAws_json1_1SeverityLevel = (output, context) => {
    return {
        code: output.code !== undefined && output.code !== null ? output.code : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_json1_1SeverityLevelsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SeverityLevel(entry, context);
    });
};
const deserializeAws_json1_1StringList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1TrustedAdvisorCategorySpecificSummary = (output, context) => {
    return {
        costOptimizing: output.costOptimizing !== undefined && output.costOptimizing !== null
            ? deserializeAws_json1_1TrustedAdvisorCostOptimizingSummary(output.costOptimizing, context)
            : undefined,
    };
};
const deserializeAws_json1_1TrustedAdvisorCheckDescription = (output, context) => {
    return {
        category: output.category !== undefined && output.category !== null ? output.category : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        metadata: output.metadata !== undefined && output.metadata !== null
            ? deserializeAws_json1_1StringList(output.metadata, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_json1_1TrustedAdvisorCheckList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TrustedAdvisorCheckDescription(entry, context);
    });
};
const deserializeAws_json1_1TrustedAdvisorCheckRefreshStatus = (output, context) => {
    return {
        checkId: output.checkId !== undefined && output.checkId !== null ? output.checkId : undefined,
        millisUntilNextRefreshable: output.millisUntilNextRefreshable !== undefined && output.millisUntilNextRefreshable !== null
            ? output.millisUntilNextRefreshable
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_json1_1TrustedAdvisorCheckRefreshStatusList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TrustedAdvisorCheckRefreshStatus(entry, context);
    });
};
const deserializeAws_json1_1TrustedAdvisorCheckResult = (output, context) => {
    return {
        categorySpecificSummary: output.categorySpecificSummary !== undefined && output.categorySpecificSummary !== null
            ? deserializeAws_json1_1TrustedAdvisorCategorySpecificSummary(output.categorySpecificSummary, context)
            : undefined,
        checkId: output.checkId !== undefined && output.checkId !== null ? output.checkId : undefined,
        flaggedResources: output.flaggedResources !== undefined && output.flaggedResources !== null
            ? deserializeAws_json1_1TrustedAdvisorResourceDetailList(output.flaggedResources, context)
            : undefined,
        resourcesSummary: output.resourcesSummary !== undefined && output.resourcesSummary !== null
            ? deserializeAws_json1_1TrustedAdvisorResourcesSummary(output.resourcesSummary, context)
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        timestamp: output.timestamp !== undefined && output.timestamp !== null ? output.timestamp : undefined,
    };
};
const deserializeAws_json1_1TrustedAdvisorCheckSummary = (output, context) => {
    return {
        categorySpecificSummary: output.categorySpecificSummary !== undefined && output.categorySpecificSummary !== null
            ? deserializeAws_json1_1TrustedAdvisorCategorySpecificSummary(output.categorySpecificSummary, context)
            : undefined,
        checkId: output.checkId !== undefined && output.checkId !== null ? output.checkId : undefined,
        hasFlaggedResources: output.hasFlaggedResources !== undefined && output.hasFlaggedResources !== null
            ? output.hasFlaggedResources
            : undefined,
        resourcesSummary: output.resourcesSummary !== undefined && output.resourcesSummary !== null
            ? deserializeAws_json1_1TrustedAdvisorResourcesSummary(output.resourcesSummary, context)
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        timestamp: output.timestamp !== undefined && output.timestamp !== null ? output.timestamp : undefined,
    };
};
const deserializeAws_json1_1TrustedAdvisorCheckSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TrustedAdvisorCheckSummary(entry, context);
    });
};
const deserializeAws_json1_1TrustedAdvisorCostOptimizingSummary = (output, context) => {
    return {
        estimatedMonthlySavings: output.estimatedMonthlySavings !== undefined && output.estimatedMonthlySavings !== null
            ? output.estimatedMonthlySavings
            : undefined,
        estimatedPercentMonthlySavings: output.estimatedPercentMonthlySavings !== undefined && output.estimatedPercentMonthlySavings !== null
            ? output.estimatedPercentMonthlySavings
            : undefined,
    };
};
const deserializeAws_json1_1TrustedAdvisorResourceDetail = (output, context) => {
    return {
        isSuppressed: output.isSuppressed !== undefined && output.isSuppressed !== null ? output.isSuppressed : undefined,
        metadata: output.metadata !== undefined && output.metadata !== null
            ? deserializeAws_json1_1StringList(output.metadata, context)
            : undefined,
        region: output.region !== undefined && output.region !== null ? output.region : undefined,
        resourceId: output.resourceId !== undefined && output.resourceId !== null ? output.resourceId : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_json1_1TrustedAdvisorResourceDetailList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TrustedAdvisorResourceDetail(entry, context);
    });
};
const deserializeAws_json1_1TrustedAdvisorResourcesSummary = (output, context) => {
    return {
        resourcesFlagged: output.resourcesFlagged !== undefined && output.resourcesFlagged !== null ? output.resourcesFlagged : undefined,
        resourcesIgnored: output.resourcesIgnored !== undefined && output.resourcesIgnored !== null ? output.resourcesIgnored : undefined,
        resourcesProcessed: output.resourcesProcessed !== undefined && output.resourcesProcessed !== null
            ? output.resourcesProcessed
            : undefined,
        resourcesSuppressed: output.resourcesSuppressed !== undefined && output.resourcesSuppressed !== null
            ? output.resourcesSuppressed
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