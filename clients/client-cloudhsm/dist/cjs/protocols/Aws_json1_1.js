"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1RemoveTagsFromResourceCommand = exports.deserializeAws_json1_1ModifyLunaClientCommand = exports.deserializeAws_json1_1ModifyHsmCommand = exports.deserializeAws_json1_1ModifyHapgCommand = exports.deserializeAws_json1_1ListTagsForResourceCommand = exports.deserializeAws_json1_1ListLunaClientsCommand = exports.deserializeAws_json1_1ListHsmsCommand = exports.deserializeAws_json1_1ListHapgsCommand = exports.deserializeAws_json1_1ListAvailableZonesCommand = exports.deserializeAws_json1_1GetConfigCommand = exports.deserializeAws_json1_1DescribeLunaClientCommand = exports.deserializeAws_json1_1DescribeHsmCommand = exports.deserializeAws_json1_1DescribeHapgCommand = exports.deserializeAws_json1_1DeleteLunaClientCommand = exports.deserializeAws_json1_1DeleteHsmCommand = exports.deserializeAws_json1_1DeleteHapgCommand = exports.deserializeAws_json1_1CreateLunaClientCommand = exports.deserializeAws_json1_1CreateHsmCommand = exports.deserializeAws_json1_1CreateHapgCommand = exports.deserializeAws_json1_1AddTagsToResourceCommand = exports.serializeAws_json1_1RemoveTagsFromResourceCommand = exports.serializeAws_json1_1ModifyLunaClientCommand = exports.serializeAws_json1_1ModifyHsmCommand = exports.serializeAws_json1_1ModifyHapgCommand = exports.serializeAws_json1_1ListTagsForResourceCommand = exports.serializeAws_json1_1ListLunaClientsCommand = exports.serializeAws_json1_1ListHsmsCommand = exports.serializeAws_json1_1ListHapgsCommand = exports.serializeAws_json1_1ListAvailableZonesCommand = exports.serializeAws_json1_1GetConfigCommand = exports.serializeAws_json1_1DescribeLunaClientCommand = exports.serializeAws_json1_1DescribeHsmCommand = exports.serializeAws_json1_1DescribeHapgCommand = exports.serializeAws_json1_1DeleteLunaClientCommand = exports.serializeAws_json1_1DeleteHsmCommand = exports.serializeAws_json1_1DeleteHapgCommand = exports.serializeAws_json1_1CreateLunaClientCommand = exports.serializeAws_json1_1CreateHsmCommand = exports.serializeAws_json1_1CreateHapgCommand = exports.serializeAws_json1_1AddTagsToResourceCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1AddTagsToResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CloudHsmFrontendService.AddTagsToResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AddTagsToResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AddTagsToResourceCommand = serializeAws_json1_1AddTagsToResourceCommand;
const serializeAws_json1_1CreateHapgCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CloudHsmFrontendService.CreateHapg",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateHapgRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateHapgCommand = serializeAws_json1_1CreateHapgCommand;
const serializeAws_json1_1CreateHsmCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CloudHsmFrontendService.CreateHsm",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateHsmRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateHsmCommand = serializeAws_json1_1CreateHsmCommand;
const serializeAws_json1_1CreateLunaClientCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CloudHsmFrontendService.CreateLunaClient",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateLunaClientRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateLunaClientCommand = serializeAws_json1_1CreateLunaClientCommand;
const serializeAws_json1_1DeleteHapgCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CloudHsmFrontendService.DeleteHapg",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteHapgRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteHapgCommand = serializeAws_json1_1DeleteHapgCommand;
const serializeAws_json1_1DeleteHsmCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CloudHsmFrontendService.DeleteHsm",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteHsmRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteHsmCommand = serializeAws_json1_1DeleteHsmCommand;
const serializeAws_json1_1DeleteLunaClientCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CloudHsmFrontendService.DeleteLunaClient",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteLunaClientRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteLunaClientCommand = serializeAws_json1_1DeleteLunaClientCommand;
const serializeAws_json1_1DescribeHapgCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CloudHsmFrontendService.DescribeHapg",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeHapgRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeHapgCommand = serializeAws_json1_1DescribeHapgCommand;
const serializeAws_json1_1DescribeHsmCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CloudHsmFrontendService.DescribeHsm",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeHsmRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeHsmCommand = serializeAws_json1_1DescribeHsmCommand;
const serializeAws_json1_1DescribeLunaClientCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CloudHsmFrontendService.DescribeLunaClient",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeLunaClientRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeLunaClientCommand = serializeAws_json1_1DescribeLunaClientCommand;
const serializeAws_json1_1GetConfigCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CloudHsmFrontendService.GetConfig",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetConfigRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetConfigCommand = serializeAws_json1_1GetConfigCommand;
const serializeAws_json1_1ListAvailableZonesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CloudHsmFrontendService.ListAvailableZones",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAvailableZonesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListAvailableZonesCommand = serializeAws_json1_1ListAvailableZonesCommand;
const serializeAws_json1_1ListHapgsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CloudHsmFrontendService.ListHapgs",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListHapgsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListHapgsCommand = serializeAws_json1_1ListHapgsCommand;
const serializeAws_json1_1ListHsmsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CloudHsmFrontendService.ListHsms",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListHsmsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListHsmsCommand = serializeAws_json1_1ListHsmsCommand;
const serializeAws_json1_1ListLunaClientsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CloudHsmFrontendService.ListLunaClients",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListLunaClientsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListLunaClientsCommand = serializeAws_json1_1ListLunaClientsCommand;
const serializeAws_json1_1ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CloudHsmFrontendService.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
const serializeAws_json1_1ModifyHapgCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CloudHsmFrontendService.ModifyHapg",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ModifyHapgRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ModifyHapgCommand = serializeAws_json1_1ModifyHapgCommand;
const serializeAws_json1_1ModifyHsmCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CloudHsmFrontendService.ModifyHsm",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ModifyHsmRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ModifyHsmCommand = serializeAws_json1_1ModifyHsmCommand;
const serializeAws_json1_1ModifyLunaClientCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CloudHsmFrontendService.ModifyLunaClient",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ModifyLunaClientRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ModifyLunaClientCommand = serializeAws_json1_1ModifyLunaClientCommand;
const serializeAws_json1_1RemoveTagsFromResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CloudHsmFrontendService.RemoveTagsFromResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RemoveTagsFromResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RemoveTagsFromResourceCommand = serializeAws_json1_1RemoveTagsFromResourceCommand;
const deserializeAws_json1_1AddTagsToResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AddTagsToResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddTagsToResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AddTagsToResourceCommand = deserializeAws_json1_1AddTagsToResourceCommand;
const deserializeAws_json1_1AddTagsToResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CloudHsmInternalException":
        case "com.amazonaws.cloudhsm#CloudHsmInternalException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm#CloudHsmServiceException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.cloudhsm#InvalidRequestException":
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
const deserializeAws_json1_1CreateHapgCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateHapgCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateHapgResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateHapgCommand = deserializeAws_json1_1CreateHapgCommand;
const deserializeAws_json1_1CreateHapgCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CloudHsmInternalException":
        case "com.amazonaws.cloudhsm#CloudHsmInternalException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm#CloudHsmServiceException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.cloudhsm#InvalidRequestException":
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
const deserializeAws_json1_1CreateHsmCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateHsmCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateHsmResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateHsmCommand = deserializeAws_json1_1CreateHsmCommand;
const deserializeAws_json1_1CreateHsmCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CloudHsmInternalException":
        case "com.amazonaws.cloudhsm#CloudHsmInternalException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm#CloudHsmServiceException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.cloudhsm#InvalidRequestException":
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
const deserializeAws_json1_1CreateLunaClientCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateLunaClientCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateLunaClientResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateLunaClientCommand = deserializeAws_json1_1CreateLunaClientCommand;
const deserializeAws_json1_1CreateLunaClientCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CloudHsmInternalException":
        case "com.amazonaws.cloudhsm#CloudHsmInternalException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm#CloudHsmServiceException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.cloudhsm#InvalidRequestException":
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
const deserializeAws_json1_1DeleteHapgCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteHapgCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteHapgResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteHapgCommand = deserializeAws_json1_1DeleteHapgCommand;
const deserializeAws_json1_1DeleteHapgCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CloudHsmInternalException":
        case "com.amazonaws.cloudhsm#CloudHsmInternalException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm#CloudHsmServiceException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.cloudhsm#InvalidRequestException":
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
const deserializeAws_json1_1DeleteHsmCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteHsmCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteHsmResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteHsmCommand = deserializeAws_json1_1DeleteHsmCommand;
const deserializeAws_json1_1DeleteHsmCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CloudHsmInternalException":
        case "com.amazonaws.cloudhsm#CloudHsmInternalException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm#CloudHsmServiceException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.cloudhsm#InvalidRequestException":
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
const deserializeAws_json1_1DeleteLunaClientCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteLunaClientCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteLunaClientResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteLunaClientCommand = deserializeAws_json1_1DeleteLunaClientCommand;
const deserializeAws_json1_1DeleteLunaClientCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CloudHsmInternalException":
        case "com.amazonaws.cloudhsm#CloudHsmInternalException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm#CloudHsmServiceException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.cloudhsm#InvalidRequestException":
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
const deserializeAws_json1_1DescribeHapgCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeHapgCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeHapgResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeHapgCommand = deserializeAws_json1_1DescribeHapgCommand;
const deserializeAws_json1_1DescribeHapgCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CloudHsmInternalException":
        case "com.amazonaws.cloudhsm#CloudHsmInternalException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm#CloudHsmServiceException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.cloudhsm#InvalidRequestException":
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
const deserializeAws_json1_1DescribeHsmCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeHsmCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeHsmResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeHsmCommand = deserializeAws_json1_1DescribeHsmCommand;
const deserializeAws_json1_1DescribeHsmCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CloudHsmInternalException":
        case "com.amazonaws.cloudhsm#CloudHsmInternalException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm#CloudHsmServiceException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.cloudhsm#InvalidRequestException":
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
const deserializeAws_json1_1DescribeLunaClientCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeLunaClientCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeLunaClientResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeLunaClientCommand = deserializeAws_json1_1DescribeLunaClientCommand;
const deserializeAws_json1_1DescribeLunaClientCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CloudHsmInternalException":
        case "com.amazonaws.cloudhsm#CloudHsmInternalException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm#CloudHsmServiceException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.cloudhsm#InvalidRequestException":
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
const deserializeAws_json1_1GetConfigCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetConfigCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetConfigResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetConfigCommand = deserializeAws_json1_1GetConfigCommand;
const deserializeAws_json1_1GetConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CloudHsmInternalException":
        case "com.amazonaws.cloudhsm#CloudHsmInternalException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm#CloudHsmServiceException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.cloudhsm#InvalidRequestException":
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
const deserializeAws_json1_1ListAvailableZonesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListAvailableZonesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAvailableZonesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListAvailableZonesCommand = deserializeAws_json1_1ListAvailableZonesCommand;
const deserializeAws_json1_1ListAvailableZonesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CloudHsmInternalException":
        case "com.amazonaws.cloudhsm#CloudHsmInternalException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm#CloudHsmServiceException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.cloudhsm#InvalidRequestException":
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
const deserializeAws_json1_1ListHapgsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListHapgsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListHapgsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListHapgsCommand = deserializeAws_json1_1ListHapgsCommand;
const deserializeAws_json1_1ListHapgsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CloudHsmInternalException":
        case "com.amazonaws.cloudhsm#CloudHsmInternalException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm#CloudHsmServiceException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.cloudhsm#InvalidRequestException":
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
const deserializeAws_json1_1ListHsmsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListHsmsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListHsmsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListHsmsCommand = deserializeAws_json1_1ListHsmsCommand;
const deserializeAws_json1_1ListHsmsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CloudHsmInternalException":
        case "com.amazonaws.cloudhsm#CloudHsmInternalException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm#CloudHsmServiceException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.cloudhsm#InvalidRequestException":
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
const deserializeAws_json1_1ListLunaClientsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListLunaClientsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListLunaClientsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListLunaClientsCommand = deserializeAws_json1_1ListLunaClientsCommand;
const deserializeAws_json1_1ListLunaClientsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CloudHsmInternalException":
        case "com.amazonaws.cloudhsm#CloudHsmInternalException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm#CloudHsmServiceException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.cloudhsm#InvalidRequestException":
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
        case "CloudHsmInternalException":
        case "com.amazonaws.cloudhsm#CloudHsmInternalException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm#CloudHsmServiceException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.cloudhsm#InvalidRequestException":
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
const deserializeAws_json1_1ModifyHapgCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ModifyHapgCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ModifyHapgResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ModifyHapgCommand = deserializeAws_json1_1ModifyHapgCommand;
const deserializeAws_json1_1ModifyHapgCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CloudHsmInternalException":
        case "com.amazonaws.cloudhsm#CloudHsmInternalException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm#CloudHsmServiceException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.cloudhsm#InvalidRequestException":
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
const deserializeAws_json1_1ModifyHsmCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ModifyHsmCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ModifyHsmResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ModifyHsmCommand = deserializeAws_json1_1ModifyHsmCommand;
const deserializeAws_json1_1ModifyHsmCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CloudHsmInternalException":
        case "com.amazonaws.cloudhsm#CloudHsmInternalException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm#CloudHsmServiceException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.cloudhsm#InvalidRequestException":
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
const deserializeAws_json1_1ModifyLunaClientCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ModifyLunaClientCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ModifyLunaClientResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ModifyLunaClientCommand = deserializeAws_json1_1ModifyLunaClientCommand;
const deserializeAws_json1_1ModifyLunaClientCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm#CloudHsmServiceException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RemoveTagsFromResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RemoveTagsFromResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RemoveTagsFromResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RemoveTagsFromResourceCommand = deserializeAws_json1_1RemoveTagsFromResourceCommand;
const deserializeAws_json1_1RemoveTagsFromResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CloudHsmInternalException":
        case "com.amazonaws.cloudhsm#CloudHsmInternalException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm#CloudHsmServiceException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.cloudhsm#InvalidRequestException":
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
const deserializeAws_json1_1CloudHsmInternalExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CloudHsmInternalException(body, context);
    const contents = {
        name: "CloudHsmInternalException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1CloudHsmServiceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CloudHsmServiceException(body, context);
    const contents = {
        name: "CloudHsmServiceException",
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
const serializeAws_json1_1AddTagsToResourceRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
        ...(input.TagList !== undefined &&
            input.TagList !== null && { TagList: serializeAws_json1_1TagList(input.TagList, context) }),
    };
};
const serializeAws_json1_1CreateHapgRequest = (input, context) => {
    return {
        ...(input.Label !== undefined && input.Label !== null && { Label: input.Label }),
    };
};
const serializeAws_json1_1CreateHsmRequest = (input, context) => {
    return {
        ...(input.ClientToken !== undefined && input.ClientToken !== null && { ClientToken: input.ClientToken }),
        ...(input.EniIp !== undefined && input.EniIp !== null && { EniIp: input.EniIp }),
        ...(input.ExternalId !== undefined && input.ExternalId !== null && { ExternalId: input.ExternalId }),
        ...(input.IamRoleArn !== undefined && input.IamRoleArn !== null && { IamRoleArn: input.IamRoleArn }),
        ...(input.SshKey !== undefined && input.SshKey !== null && { SshKey: input.SshKey }),
        ...(input.SubnetId !== undefined && input.SubnetId !== null && { SubnetId: input.SubnetId }),
        ...(input.SubscriptionType !== undefined &&
            input.SubscriptionType !== null && { SubscriptionType: input.SubscriptionType }),
        ...(input.SyslogIp !== undefined && input.SyslogIp !== null && { SyslogIp: input.SyslogIp }),
    };
};
const serializeAws_json1_1CreateLunaClientRequest = (input, context) => {
    return {
        ...(input.Certificate !== undefined && input.Certificate !== null && { Certificate: input.Certificate }),
        ...(input.Label !== undefined && input.Label !== null && { Label: input.Label }),
    };
};
const serializeAws_json1_1DeleteHapgRequest = (input, context) => {
    return {
        ...(input.HapgArn !== undefined && input.HapgArn !== null && { HapgArn: input.HapgArn }),
    };
};
const serializeAws_json1_1DeleteHsmRequest = (input, context) => {
    return {
        ...(input.HsmArn !== undefined && input.HsmArn !== null && { HsmArn: input.HsmArn }),
    };
};
const serializeAws_json1_1DeleteLunaClientRequest = (input, context) => {
    return {
        ...(input.ClientArn !== undefined && input.ClientArn !== null && { ClientArn: input.ClientArn }),
    };
};
const serializeAws_json1_1DescribeHapgRequest = (input, context) => {
    return {
        ...(input.HapgArn !== undefined && input.HapgArn !== null && { HapgArn: input.HapgArn }),
    };
};
const serializeAws_json1_1DescribeHsmRequest = (input, context) => {
    return {
        ...(input.HsmArn !== undefined && input.HsmArn !== null && { HsmArn: input.HsmArn }),
        ...(input.HsmSerialNumber !== undefined &&
            input.HsmSerialNumber !== null && { HsmSerialNumber: input.HsmSerialNumber }),
    };
};
const serializeAws_json1_1DescribeLunaClientRequest = (input, context) => {
    return {
        ...(input.CertificateFingerprint !== undefined &&
            input.CertificateFingerprint !== null && { CertificateFingerprint: input.CertificateFingerprint }),
        ...(input.ClientArn !== undefined && input.ClientArn !== null && { ClientArn: input.ClientArn }),
    };
};
const serializeAws_json1_1GetConfigRequest = (input, context) => {
    return {
        ...(input.ClientArn !== undefined && input.ClientArn !== null && { ClientArn: input.ClientArn }),
        ...(input.ClientVersion !== undefined && input.ClientVersion !== null && { ClientVersion: input.ClientVersion }),
        ...(input.HapgList !== undefined &&
            input.HapgList !== null && { HapgList: serializeAws_json1_1HapgList(input.HapgList, context) }),
    };
};
const serializeAws_json1_1HapgList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ListAvailableZonesRequest = (input, context) => {
    return {};
};
const serializeAws_json1_1ListHapgsRequest = (input, context) => {
    return {
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListHsmsRequest = (input, context) => {
    return {
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListLunaClientsRequest = (input, context) => {
    return {
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_1ModifyHapgRequest = (input, context) => {
    return {
        ...(input.HapgArn !== undefined && input.HapgArn !== null && { HapgArn: input.HapgArn }),
        ...(input.Label !== undefined && input.Label !== null && { Label: input.Label }),
        ...(input.PartitionSerialList !== undefined &&
            input.PartitionSerialList !== null && {
            PartitionSerialList: serializeAws_json1_1PartitionSerialList(input.PartitionSerialList, context),
        }),
    };
};
const serializeAws_json1_1ModifyHsmRequest = (input, context) => {
    return {
        ...(input.EniIp !== undefined && input.EniIp !== null && { EniIp: input.EniIp }),
        ...(input.ExternalId !== undefined && input.ExternalId !== null && { ExternalId: input.ExternalId }),
        ...(input.HsmArn !== undefined && input.HsmArn !== null && { HsmArn: input.HsmArn }),
        ...(input.IamRoleArn !== undefined && input.IamRoleArn !== null && { IamRoleArn: input.IamRoleArn }),
        ...(input.SubnetId !== undefined && input.SubnetId !== null && { SubnetId: input.SubnetId }),
        ...(input.SyslogIp !== undefined && input.SyslogIp !== null && { SyslogIp: input.SyslogIp }),
    };
};
const serializeAws_json1_1ModifyLunaClientRequest = (input, context) => {
    return {
        ...(input.Certificate !== undefined && input.Certificate !== null && { Certificate: input.Certificate }),
        ...(input.ClientArn !== undefined && input.ClientArn !== null && { ClientArn: input.ClientArn }),
    };
};
const serializeAws_json1_1PartitionSerialList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1RemoveTagsFromResourceRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
        ...(input.TagKeyList !== undefined &&
            input.TagKeyList !== null && { TagKeyList: serializeAws_json1_1TagKeyList(input.TagKeyList, context) }),
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
const deserializeAws_json1_1AddTagsToResourceResponse = (output, context) => {
    return {
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1AZList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ClientList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1CloudHsmInternalException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        retryable: output.retryable !== undefined && output.retryable !== null ? output.retryable : undefined,
    };
};
const deserializeAws_json1_1CloudHsmServiceException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        retryable: output.retryable !== undefined && output.retryable !== null ? output.retryable : undefined,
    };
};
const deserializeAws_json1_1CreateHapgResponse = (output, context) => {
    return {
        HapgArn: output.HapgArn !== undefined && output.HapgArn !== null ? output.HapgArn : undefined,
    };
};
const deserializeAws_json1_1CreateHsmResponse = (output, context) => {
    return {
        HsmArn: output.HsmArn !== undefined && output.HsmArn !== null ? output.HsmArn : undefined,
    };
};
const deserializeAws_json1_1CreateLunaClientResponse = (output, context) => {
    return {
        ClientArn: output.ClientArn !== undefined && output.ClientArn !== null ? output.ClientArn : undefined,
    };
};
const deserializeAws_json1_1DeleteHapgResponse = (output, context) => {
    return {
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1DeleteHsmResponse = (output, context) => {
    return {
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1DeleteLunaClientResponse = (output, context) => {
    return {
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1DescribeHapgResponse = (output, context) => {
    return {
        HapgArn: output.HapgArn !== undefined && output.HapgArn !== null ? output.HapgArn : undefined,
        HapgSerial: output.HapgSerial !== undefined && output.HapgSerial !== null ? output.HapgSerial : undefined,
        HsmsLastActionFailed: output.HsmsLastActionFailed !== undefined && output.HsmsLastActionFailed !== null
            ? deserializeAws_json1_1HsmList(output.HsmsLastActionFailed, context)
            : undefined,
        HsmsPendingDeletion: output.HsmsPendingDeletion !== undefined && output.HsmsPendingDeletion !== null
            ? deserializeAws_json1_1HsmList(output.HsmsPendingDeletion, context)
            : undefined,
        HsmsPendingRegistration: output.HsmsPendingRegistration !== undefined && output.HsmsPendingRegistration !== null
            ? deserializeAws_json1_1HsmList(output.HsmsPendingRegistration, context)
            : undefined,
        Label: output.Label !== undefined && output.Label !== null ? output.Label : undefined,
        LastModifiedTimestamp: output.LastModifiedTimestamp !== undefined && output.LastModifiedTimestamp !== null
            ? output.LastModifiedTimestamp
            : undefined,
        PartitionSerialList: output.PartitionSerialList !== undefined && output.PartitionSerialList !== null
            ? deserializeAws_json1_1PartitionSerialList(output.PartitionSerialList, context)
            : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
    };
};
const deserializeAws_json1_1DescribeHsmResponse = (output, context) => {
    return {
        AvailabilityZone: output.AvailabilityZone !== undefined && output.AvailabilityZone !== null ? output.AvailabilityZone : undefined,
        EniId: output.EniId !== undefined && output.EniId !== null ? output.EniId : undefined,
        EniIp: output.EniIp !== undefined && output.EniIp !== null ? output.EniIp : undefined,
        HsmArn: output.HsmArn !== undefined && output.HsmArn !== null ? output.HsmArn : undefined,
        HsmType: output.HsmType !== undefined && output.HsmType !== null ? output.HsmType : undefined,
        IamRoleArn: output.IamRoleArn !== undefined && output.IamRoleArn !== null ? output.IamRoleArn : undefined,
        Partitions: output.Partitions !== undefined && output.Partitions !== null
            ? deserializeAws_json1_1PartitionList(output.Partitions, context)
            : undefined,
        SerialNumber: output.SerialNumber !== undefined && output.SerialNumber !== null ? output.SerialNumber : undefined,
        ServerCertLastUpdated: output.ServerCertLastUpdated !== undefined && output.ServerCertLastUpdated !== null
            ? output.ServerCertLastUpdated
            : undefined,
        ServerCertUri: output.ServerCertUri !== undefined && output.ServerCertUri !== null ? output.ServerCertUri : undefined,
        SoftwareVersion: output.SoftwareVersion !== undefined && output.SoftwareVersion !== null ? output.SoftwareVersion : undefined,
        SshKeyLastUpdated: output.SshKeyLastUpdated !== undefined && output.SshKeyLastUpdated !== null
            ? output.SshKeyLastUpdated
            : undefined,
        SshPublicKey: output.SshPublicKey !== undefined && output.SshPublicKey !== null ? output.SshPublicKey : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StatusDetails: output.StatusDetails !== undefined && output.StatusDetails !== null ? output.StatusDetails : undefined,
        SubnetId: output.SubnetId !== undefined && output.SubnetId !== null ? output.SubnetId : undefined,
        SubscriptionEndDate: output.SubscriptionEndDate !== undefined && output.SubscriptionEndDate !== null
            ? output.SubscriptionEndDate
            : undefined,
        SubscriptionStartDate: output.SubscriptionStartDate !== undefined && output.SubscriptionStartDate !== null
            ? output.SubscriptionStartDate
            : undefined,
        SubscriptionType: output.SubscriptionType !== undefined && output.SubscriptionType !== null ? output.SubscriptionType : undefined,
        VendorName: output.VendorName !== undefined && output.VendorName !== null ? output.VendorName : undefined,
        VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
    };
};
const deserializeAws_json1_1DescribeLunaClientResponse = (output, context) => {
    return {
        Certificate: output.Certificate !== undefined && output.Certificate !== null ? output.Certificate : undefined,
        CertificateFingerprint: output.CertificateFingerprint !== undefined && output.CertificateFingerprint !== null
            ? output.CertificateFingerprint
            : undefined,
        ClientArn: output.ClientArn !== undefined && output.ClientArn !== null ? output.ClientArn : undefined,
        Label: output.Label !== undefined && output.Label !== null ? output.Label : undefined,
        LastModifiedTimestamp: output.LastModifiedTimestamp !== undefined && output.LastModifiedTimestamp !== null
            ? output.LastModifiedTimestamp
            : undefined,
    };
};
const deserializeAws_json1_1GetConfigResponse = (output, context) => {
    return {
        ConfigCred: output.ConfigCred !== undefined && output.ConfigCred !== null ? output.ConfigCred : undefined,
        ConfigFile: output.ConfigFile !== undefined && output.ConfigFile !== null ? output.ConfigFile : undefined,
        ConfigType: output.ConfigType !== undefined && output.ConfigType !== null ? output.ConfigType : undefined,
    };
};
const deserializeAws_json1_1HapgList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1HsmList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1InvalidRequestException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        retryable: output.retryable !== undefined && output.retryable !== null ? output.retryable : undefined,
    };
};
const deserializeAws_json1_1ListAvailableZonesResponse = (output, context) => {
    return {
        AZList: output.AZList !== undefined && output.AZList !== null
            ? deserializeAws_json1_1AZList(output.AZList, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListHapgsResponse = (output, context) => {
    return {
        HapgList: output.HapgList !== undefined && output.HapgList !== null
            ? deserializeAws_json1_1HapgList(output.HapgList, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListHsmsResponse = (output, context) => {
    return {
        HsmList: output.HsmList !== undefined && output.HsmList !== null
            ? deserializeAws_json1_1HsmList(output.HsmList, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListLunaClientsResponse = (output, context) => {
    return {
        ClientList: output.ClientList !== undefined && output.ClientList !== null
            ? deserializeAws_json1_1ClientList(output.ClientList, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    return {
        TagList: output.TagList !== undefined && output.TagList !== null
            ? deserializeAws_json1_1TagList(output.TagList, context)
            : undefined,
    };
};
const deserializeAws_json1_1ModifyHapgResponse = (output, context) => {
    return {
        HapgArn: output.HapgArn !== undefined && output.HapgArn !== null ? output.HapgArn : undefined,
    };
};
const deserializeAws_json1_1ModifyHsmResponse = (output, context) => {
    return {
        HsmArn: output.HsmArn !== undefined && output.HsmArn !== null ? output.HsmArn : undefined,
    };
};
const deserializeAws_json1_1ModifyLunaClientResponse = (output, context) => {
    return {
        ClientArn: output.ClientArn !== undefined && output.ClientArn !== null ? output.ClientArn : undefined,
    };
};
const deserializeAws_json1_1PartitionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1PartitionSerialList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1RemoveTagsFromResourceResponse = (output, context) => {
    return {
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
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