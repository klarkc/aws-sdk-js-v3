"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1UntagResourcesCommand = exports.deserializeAws_json1_1TagResourcesCommand = exports.deserializeAws_json1_1StartReportCreationCommand = exports.deserializeAws_json1_1GetTagValuesCommand = exports.deserializeAws_json1_1GetTagKeysCommand = exports.deserializeAws_json1_1GetResourcesCommand = exports.deserializeAws_json1_1GetComplianceSummaryCommand = exports.deserializeAws_json1_1DescribeReportCreationCommand = exports.serializeAws_json1_1UntagResourcesCommand = exports.serializeAws_json1_1TagResourcesCommand = exports.serializeAws_json1_1StartReportCreationCommand = exports.serializeAws_json1_1GetTagValuesCommand = exports.serializeAws_json1_1GetTagKeysCommand = exports.serializeAws_json1_1GetResourcesCommand = exports.serializeAws_json1_1GetComplianceSummaryCommand = exports.serializeAws_json1_1DescribeReportCreationCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1DescribeReportCreationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ResourceGroupsTaggingAPI_20170126.DescribeReportCreation",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeReportCreationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeReportCreationCommand = serializeAws_json1_1DescribeReportCreationCommand;
const serializeAws_json1_1GetComplianceSummaryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ResourceGroupsTaggingAPI_20170126.GetComplianceSummary",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetComplianceSummaryInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetComplianceSummaryCommand = serializeAws_json1_1GetComplianceSummaryCommand;
const serializeAws_json1_1GetResourcesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ResourceGroupsTaggingAPI_20170126.GetResources",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetResourcesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetResourcesCommand = serializeAws_json1_1GetResourcesCommand;
const serializeAws_json1_1GetTagKeysCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ResourceGroupsTaggingAPI_20170126.GetTagKeys",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetTagKeysInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetTagKeysCommand = serializeAws_json1_1GetTagKeysCommand;
const serializeAws_json1_1GetTagValuesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ResourceGroupsTaggingAPI_20170126.GetTagValues",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetTagValuesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetTagValuesCommand = serializeAws_json1_1GetTagValuesCommand;
const serializeAws_json1_1StartReportCreationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ResourceGroupsTaggingAPI_20170126.StartReportCreation",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartReportCreationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartReportCreationCommand = serializeAws_json1_1StartReportCreationCommand;
const serializeAws_json1_1TagResourcesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ResourceGroupsTaggingAPI_20170126.TagResources",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourcesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagResourcesCommand = serializeAws_json1_1TagResourcesCommand;
const serializeAws_json1_1UntagResourcesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ResourceGroupsTaggingAPI_20170126.UntagResources",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourcesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagResourcesCommand = serializeAws_json1_1UntagResourcesCommand;
const deserializeAws_json1_1DescribeReportCreationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeReportCreationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeReportCreationOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeReportCreationCommand = deserializeAws_json1_1DescribeReportCreationCommand;
const deserializeAws_json1_1DescribeReportCreationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConstraintViolationException":
        case "com.amazonaws.resourcegroupstaggingapi#ConstraintViolationException":
            response = {
                ...(await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.resourcegroupstaggingapi#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.resourcegroupstaggingapi#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottledException":
        case "com.amazonaws.resourcegroupstaggingapi#ThrottledException":
            response = {
                ...(await deserializeAws_json1_1ThrottledExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetComplianceSummaryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetComplianceSummaryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetComplianceSummaryOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetComplianceSummaryCommand = deserializeAws_json1_1GetComplianceSummaryCommand;
const deserializeAws_json1_1GetComplianceSummaryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConstraintViolationException":
        case "com.amazonaws.resourcegroupstaggingapi#ConstraintViolationException":
            response = {
                ...(await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.resourcegroupstaggingapi#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.resourcegroupstaggingapi#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottledException":
        case "com.amazonaws.resourcegroupstaggingapi#ThrottledException":
            response = {
                ...(await deserializeAws_json1_1ThrottledExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetResourcesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetResourcesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetResourcesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetResourcesCommand = deserializeAws_json1_1GetResourcesCommand;
const deserializeAws_json1_1GetResourcesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.resourcegroupstaggingapi#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.resourcegroupstaggingapi#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PaginationTokenExpiredException":
        case "com.amazonaws.resourcegroupstaggingapi#PaginationTokenExpiredException":
            response = {
                ...(await deserializeAws_json1_1PaginationTokenExpiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottledException":
        case "com.amazonaws.resourcegroupstaggingapi#ThrottledException":
            response = {
                ...(await deserializeAws_json1_1ThrottledExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetTagKeysCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetTagKeysCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetTagKeysOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetTagKeysCommand = deserializeAws_json1_1GetTagKeysCommand;
const deserializeAws_json1_1GetTagKeysCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.resourcegroupstaggingapi#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.resourcegroupstaggingapi#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PaginationTokenExpiredException":
        case "com.amazonaws.resourcegroupstaggingapi#PaginationTokenExpiredException":
            response = {
                ...(await deserializeAws_json1_1PaginationTokenExpiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottledException":
        case "com.amazonaws.resourcegroupstaggingapi#ThrottledException":
            response = {
                ...(await deserializeAws_json1_1ThrottledExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetTagValuesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetTagValuesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetTagValuesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetTagValuesCommand = deserializeAws_json1_1GetTagValuesCommand;
const deserializeAws_json1_1GetTagValuesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.resourcegroupstaggingapi#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.resourcegroupstaggingapi#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PaginationTokenExpiredException":
        case "com.amazonaws.resourcegroupstaggingapi#PaginationTokenExpiredException":
            response = {
                ...(await deserializeAws_json1_1PaginationTokenExpiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottledException":
        case "com.amazonaws.resourcegroupstaggingapi#ThrottledException":
            response = {
                ...(await deserializeAws_json1_1ThrottledExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StartReportCreationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartReportCreationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartReportCreationOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartReportCreationCommand = deserializeAws_json1_1StartReportCreationCommand;
const deserializeAws_json1_1StartReportCreationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.resourcegroupstaggingapi#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConstraintViolationException":
        case "com.amazonaws.resourcegroupstaggingapi#ConstraintViolationException":
            response = {
                ...(await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.resourcegroupstaggingapi#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.resourcegroupstaggingapi#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottledException":
        case "com.amazonaws.resourcegroupstaggingapi#ThrottledException":
            response = {
                ...(await deserializeAws_json1_1ThrottledExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1TagResourcesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1TagResourcesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TagResourcesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1TagResourcesCommand = deserializeAws_json1_1TagResourcesCommand;
const deserializeAws_json1_1TagResourcesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.resourcegroupstaggingapi#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.resourcegroupstaggingapi#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottledException":
        case "com.amazonaws.resourcegroupstaggingapi#ThrottledException":
            response = {
                ...(await deserializeAws_json1_1ThrottledExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UntagResourcesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UntagResourcesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UntagResourcesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UntagResourcesCommand = deserializeAws_json1_1UntagResourcesCommand;
const deserializeAws_json1_1UntagResourcesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.resourcegroupstaggingapi#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.resourcegroupstaggingapi#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottledException":
        case "com.amazonaws.resourcegroupstaggingapi#ThrottledException":
            response = {
                ...(await deserializeAws_json1_1ThrottledExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ConstraintViolationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConstraintViolationException(body, context);
    const contents = {
        name: "ConstraintViolationException",
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
const deserializeAws_json1_1PaginationTokenExpiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PaginationTokenExpiredException(body, context);
    const contents = {
        name: "PaginationTokenExpiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ThrottledExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ThrottledException(body, context);
    const contents = {
        name: "ThrottledException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1DescribeReportCreationInput = (input, context) => {
    return {};
};
const serializeAws_json1_1GetComplianceSummaryInput = (input, context) => {
    return {
        ...(input.GroupBy !== undefined &&
            input.GroupBy !== null && { GroupBy: serializeAws_json1_1GroupBy(input.GroupBy, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.PaginationToken !== undefined &&
            input.PaginationToken !== null && { PaginationToken: input.PaginationToken }),
        ...(input.RegionFilters !== undefined &&
            input.RegionFilters !== null && {
            RegionFilters: serializeAws_json1_1RegionFilterList(input.RegionFilters, context),
        }),
        ...(input.ResourceTypeFilters !== undefined &&
            input.ResourceTypeFilters !== null && {
            ResourceTypeFilters: serializeAws_json1_1ResourceTypeFilterList(input.ResourceTypeFilters, context),
        }),
        ...(input.TagKeyFilters !== undefined &&
            input.TagKeyFilters !== null && {
            TagKeyFilters: serializeAws_json1_1TagKeyFilterList(input.TagKeyFilters, context),
        }),
        ...(input.TargetIdFilters !== undefined &&
            input.TargetIdFilters !== null && {
            TargetIdFilters: serializeAws_json1_1TargetIdFilterList(input.TargetIdFilters, context),
        }),
    };
};
const serializeAws_json1_1GetResourcesInput = (input, context) => {
    return {
        ...(input.ExcludeCompliantResources !== undefined &&
            input.ExcludeCompliantResources !== null && { ExcludeCompliantResources: input.ExcludeCompliantResources }),
        ...(input.IncludeComplianceDetails !== undefined &&
            input.IncludeComplianceDetails !== null && { IncludeComplianceDetails: input.IncludeComplianceDetails }),
        ...(input.PaginationToken !== undefined &&
            input.PaginationToken !== null && { PaginationToken: input.PaginationToken }),
        ...(input.ResourceARNList !== undefined &&
            input.ResourceARNList !== null && {
            ResourceARNList: serializeAws_json1_1ResourceARNListForGet(input.ResourceARNList, context),
        }),
        ...(input.ResourceTypeFilters !== undefined &&
            input.ResourceTypeFilters !== null && {
            ResourceTypeFilters: serializeAws_json1_1ResourceTypeFilterList(input.ResourceTypeFilters, context),
        }),
        ...(input.ResourcesPerPage !== undefined &&
            input.ResourcesPerPage !== null && { ResourcesPerPage: input.ResourcesPerPage }),
        ...(input.TagFilters !== undefined &&
            input.TagFilters !== null && { TagFilters: serializeAws_json1_1TagFilterList(input.TagFilters, context) }),
        ...(input.TagsPerPage !== undefined && input.TagsPerPage !== null && { TagsPerPage: input.TagsPerPage }),
    };
};
const serializeAws_json1_1GetTagKeysInput = (input, context) => {
    return {
        ...(input.PaginationToken !== undefined &&
            input.PaginationToken !== null && { PaginationToken: input.PaginationToken }),
    };
};
const serializeAws_json1_1GetTagValuesInput = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.PaginationToken !== undefined &&
            input.PaginationToken !== null && { PaginationToken: input.PaginationToken }),
    };
};
const serializeAws_json1_1GroupBy = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1RegionFilterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ResourceARNListForGet = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ResourceARNListForTagUntag = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ResourceTypeFilterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1StartReportCreationInput = (input, context) => {
    return {
        ...(input.S3Bucket !== undefined && input.S3Bucket !== null && { S3Bucket: input.S3Bucket }),
    };
};
const serializeAws_json1_1TagFilter = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_json1_1TagValueList(input.Values, context) }),
    };
};
const serializeAws_json1_1TagFilterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1TagFilter(entry, context);
    });
};
const serializeAws_json1_1TagKeyFilterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1TagKeyListForUntag = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1TagMap = (input, context) => {
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
const serializeAws_json1_1TagResourcesInput = (input, context) => {
    return {
        ...(input.ResourceARNList !== undefined &&
            input.ResourceARNList !== null && {
            ResourceARNList: serializeAws_json1_1ResourceARNListForTagUntag(input.ResourceARNList, context),
        }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagMap(input.Tags, context) }),
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
const serializeAws_json1_1TargetIdFilterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1UntagResourcesInput = (input, context) => {
    return {
        ...(input.ResourceARNList !== undefined &&
            input.ResourceARNList !== null && {
            ResourceARNList: serializeAws_json1_1ResourceARNListForTagUntag(input.ResourceARNList, context),
        }),
        ...(input.TagKeys !== undefined &&
            input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyListForUntag(input.TagKeys, context) }),
    };
};
const deserializeAws_json1_1ComplianceDetails = (output, context) => {
    return {
        ComplianceStatus: output.ComplianceStatus !== undefined && output.ComplianceStatus !== null ? output.ComplianceStatus : undefined,
        KeysWithNoncompliantValues: output.KeysWithNoncompliantValues !== undefined && output.KeysWithNoncompliantValues !== null
            ? deserializeAws_json1_1TagKeyList(output.KeysWithNoncompliantValues, context)
            : undefined,
        NoncompliantKeys: output.NoncompliantKeys !== undefined && output.NoncompliantKeys !== null
            ? deserializeAws_json1_1TagKeyList(output.NoncompliantKeys, context)
            : undefined,
    };
};
const deserializeAws_json1_1ConcurrentModificationException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ConstraintViolationException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1DescribeReportCreationOutput = (output, context) => {
    return {
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        S3Location: output.S3Location !== undefined && output.S3Location !== null ? output.S3Location : undefined,
        StartDate: output.StartDate !== undefined && output.StartDate !== null ? output.StartDate : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1FailedResourcesMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_1FailureInfo(value, context),
        };
    }, {});
};
const deserializeAws_json1_1FailureInfo = (output, context) => {
    return {
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        StatusCode: output.StatusCode !== undefined && output.StatusCode !== null ? output.StatusCode : undefined,
    };
};
const deserializeAws_json1_1GetComplianceSummaryOutput = (output, context) => {
    return {
        PaginationToken: output.PaginationToken !== undefined && output.PaginationToken !== null ? output.PaginationToken : undefined,
        SummaryList: output.SummaryList !== undefined && output.SummaryList !== null
            ? deserializeAws_json1_1SummaryList(output.SummaryList, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetResourcesOutput = (output, context) => {
    return {
        PaginationToken: output.PaginationToken !== undefined && output.PaginationToken !== null ? output.PaginationToken : undefined,
        ResourceTagMappingList: output.ResourceTagMappingList !== undefined && output.ResourceTagMappingList !== null
            ? deserializeAws_json1_1ResourceTagMappingList(output.ResourceTagMappingList, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetTagKeysOutput = (output, context) => {
    return {
        PaginationToken: output.PaginationToken !== undefined && output.PaginationToken !== null ? output.PaginationToken : undefined,
        TagKeys: output.TagKeys !== undefined && output.TagKeys !== null
            ? deserializeAws_json1_1TagKeyList(output.TagKeys, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetTagValuesOutput = (output, context) => {
    return {
        PaginationToken: output.PaginationToken !== undefined && output.PaginationToken !== null ? output.PaginationToken : undefined,
        TagValues: output.TagValues !== undefined && output.TagValues !== null
            ? deserializeAws_json1_1TagValuesOutputList(output.TagValues, context)
            : undefined,
    };
};
const deserializeAws_json1_1InternalServiceException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidParameterException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1PaginationTokenExpiredException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ResourceTagMapping = (output, context) => {
    return {
        ComplianceDetails: output.ComplianceDetails !== undefined && output.ComplianceDetails !== null
            ? deserializeAws_json1_1ComplianceDetails(output.ComplianceDetails, context)
            : undefined,
        ResourceARN: output.ResourceARN !== undefined && output.ResourceARN !== null ? output.ResourceARN : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagList(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1ResourceTagMappingList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResourceTagMapping(entry, context);
    });
};
const deserializeAws_json1_1StartReportCreationOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1Summary = (output, context) => {
    return {
        LastUpdated: output.LastUpdated !== undefined && output.LastUpdated !== null ? output.LastUpdated : undefined,
        NonCompliantResources: output.NonCompliantResources !== undefined && output.NonCompliantResources !== null
            ? output.NonCompliantResources
            : undefined,
        Region: output.Region !== undefined && output.Region !== null ? output.Region : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
        TargetId: output.TargetId !== undefined && output.TargetId !== null ? output.TargetId : undefined,
        TargetIdType: output.TargetIdType !== undefined && output.TargetIdType !== null ? output.TargetIdType : undefined,
    };
};
const deserializeAws_json1_1SummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Summary(entry, context);
    });
};
const deserializeAws_json1_1Tag = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1TagKeyList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
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
const deserializeAws_json1_1TagResourcesOutput = (output, context) => {
    return {
        FailedResourcesMap: output.FailedResourcesMap !== undefined && output.FailedResourcesMap !== null
            ? deserializeAws_json1_1FailedResourcesMap(output.FailedResourcesMap, context)
            : undefined,
    };
};
const deserializeAws_json1_1TagValuesOutputList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ThrottledException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1UntagResourcesOutput = (output, context) => {
    return {
        FailedResourcesMap: output.FailedResourcesMap !== undefined && output.FailedResourcesMap !== null
            ? deserializeAws_json1_1FailedResourcesMap(output.FailedResourcesMap, context)
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