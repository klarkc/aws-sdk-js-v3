"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1UntagResourceCommand = exports.deserializeAws_json1_1TagResourceCommand = exports.deserializeAws_json1_1StopAccessLoggingCommand = exports.deserializeAws_json1_1StartAccessLoggingCommand = exports.deserializeAws_json1_1PutMetricPolicyCommand = exports.deserializeAws_json1_1PutLifecyclePolicyCommand = exports.deserializeAws_json1_1PutCorsPolicyCommand = exports.deserializeAws_json1_1PutContainerPolicyCommand = exports.deserializeAws_json1_1ListTagsForResourceCommand = exports.deserializeAws_json1_1ListContainersCommand = exports.deserializeAws_json1_1GetMetricPolicyCommand = exports.deserializeAws_json1_1GetLifecyclePolicyCommand = exports.deserializeAws_json1_1GetCorsPolicyCommand = exports.deserializeAws_json1_1GetContainerPolicyCommand = exports.deserializeAws_json1_1DescribeContainerCommand = exports.deserializeAws_json1_1DeleteMetricPolicyCommand = exports.deserializeAws_json1_1DeleteLifecyclePolicyCommand = exports.deserializeAws_json1_1DeleteCorsPolicyCommand = exports.deserializeAws_json1_1DeleteContainerPolicyCommand = exports.deserializeAws_json1_1DeleteContainerCommand = exports.deserializeAws_json1_1CreateContainerCommand = exports.serializeAws_json1_1UntagResourceCommand = exports.serializeAws_json1_1TagResourceCommand = exports.serializeAws_json1_1StopAccessLoggingCommand = exports.serializeAws_json1_1StartAccessLoggingCommand = exports.serializeAws_json1_1PutMetricPolicyCommand = exports.serializeAws_json1_1PutLifecyclePolicyCommand = exports.serializeAws_json1_1PutCorsPolicyCommand = exports.serializeAws_json1_1PutContainerPolicyCommand = exports.serializeAws_json1_1ListTagsForResourceCommand = exports.serializeAws_json1_1ListContainersCommand = exports.serializeAws_json1_1GetMetricPolicyCommand = exports.serializeAws_json1_1GetLifecyclePolicyCommand = exports.serializeAws_json1_1GetCorsPolicyCommand = exports.serializeAws_json1_1GetContainerPolicyCommand = exports.serializeAws_json1_1DescribeContainerCommand = exports.serializeAws_json1_1DeleteMetricPolicyCommand = exports.serializeAws_json1_1DeleteLifecyclePolicyCommand = exports.serializeAws_json1_1DeleteCorsPolicyCommand = exports.serializeAws_json1_1DeleteContainerPolicyCommand = exports.serializeAws_json1_1DeleteContainerCommand = exports.serializeAws_json1_1CreateContainerCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1CreateContainerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MediaStore_20170901.CreateContainer",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateContainerInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateContainerCommand = serializeAws_json1_1CreateContainerCommand;
const serializeAws_json1_1DeleteContainerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MediaStore_20170901.DeleteContainer",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteContainerInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteContainerCommand = serializeAws_json1_1DeleteContainerCommand;
const serializeAws_json1_1DeleteContainerPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MediaStore_20170901.DeleteContainerPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteContainerPolicyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteContainerPolicyCommand = serializeAws_json1_1DeleteContainerPolicyCommand;
const serializeAws_json1_1DeleteCorsPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MediaStore_20170901.DeleteCorsPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteCorsPolicyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteCorsPolicyCommand = serializeAws_json1_1DeleteCorsPolicyCommand;
const serializeAws_json1_1DeleteLifecyclePolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MediaStore_20170901.DeleteLifecyclePolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteLifecyclePolicyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteLifecyclePolicyCommand = serializeAws_json1_1DeleteLifecyclePolicyCommand;
const serializeAws_json1_1DeleteMetricPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MediaStore_20170901.DeleteMetricPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteMetricPolicyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteMetricPolicyCommand = serializeAws_json1_1DeleteMetricPolicyCommand;
const serializeAws_json1_1DescribeContainerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MediaStore_20170901.DescribeContainer",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeContainerInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeContainerCommand = serializeAws_json1_1DescribeContainerCommand;
const serializeAws_json1_1GetContainerPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MediaStore_20170901.GetContainerPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetContainerPolicyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetContainerPolicyCommand = serializeAws_json1_1GetContainerPolicyCommand;
const serializeAws_json1_1GetCorsPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MediaStore_20170901.GetCorsPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetCorsPolicyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetCorsPolicyCommand = serializeAws_json1_1GetCorsPolicyCommand;
const serializeAws_json1_1GetLifecyclePolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MediaStore_20170901.GetLifecyclePolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetLifecyclePolicyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetLifecyclePolicyCommand = serializeAws_json1_1GetLifecyclePolicyCommand;
const serializeAws_json1_1GetMetricPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MediaStore_20170901.GetMetricPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetMetricPolicyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetMetricPolicyCommand = serializeAws_json1_1GetMetricPolicyCommand;
const serializeAws_json1_1ListContainersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MediaStore_20170901.ListContainers",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListContainersInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListContainersCommand = serializeAws_json1_1ListContainersCommand;
const serializeAws_json1_1ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MediaStore_20170901.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
const serializeAws_json1_1PutContainerPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MediaStore_20170901.PutContainerPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutContainerPolicyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutContainerPolicyCommand = serializeAws_json1_1PutContainerPolicyCommand;
const serializeAws_json1_1PutCorsPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MediaStore_20170901.PutCorsPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutCorsPolicyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutCorsPolicyCommand = serializeAws_json1_1PutCorsPolicyCommand;
const serializeAws_json1_1PutLifecyclePolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MediaStore_20170901.PutLifecyclePolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutLifecyclePolicyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutLifecyclePolicyCommand = serializeAws_json1_1PutLifecyclePolicyCommand;
const serializeAws_json1_1PutMetricPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MediaStore_20170901.PutMetricPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutMetricPolicyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutMetricPolicyCommand = serializeAws_json1_1PutMetricPolicyCommand;
const serializeAws_json1_1StartAccessLoggingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MediaStore_20170901.StartAccessLogging",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartAccessLoggingInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartAccessLoggingCommand = serializeAws_json1_1StartAccessLoggingCommand;
const serializeAws_json1_1StopAccessLoggingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MediaStore_20170901.StopAccessLogging",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StopAccessLoggingInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopAccessLoggingCommand = serializeAws_json1_1StopAccessLoggingCommand;
const serializeAws_json1_1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MediaStore_20170901.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MediaStore_20170901.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
const deserializeAws_json1_1CreateContainerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateContainerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateContainerOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateContainerCommand = deserializeAws_json1_1CreateContainerCommand;
const deserializeAws_json1_1CreateContainerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ContainerInUseException":
        case "com.amazonaws.mediastore#ContainerInUseException":
            response = {
                ...(await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.mediastore#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.mediastore#LimitExceededException":
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
const deserializeAws_json1_1DeleteContainerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteContainerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteContainerOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteContainerCommand = deserializeAws_json1_1DeleteContainerCommand;
const deserializeAws_json1_1DeleteContainerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ContainerInUseException":
        case "com.amazonaws.mediastore#ContainerInUseException":
            response = {
                ...(await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ContainerNotFoundException":
        case "com.amazonaws.mediastore#ContainerNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.mediastore#InternalServerError":
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
const deserializeAws_json1_1DeleteContainerPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteContainerPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteContainerPolicyOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteContainerPolicyCommand = deserializeAws_json1_1DeleteContainerPolicyCommand;
const deserializeAws_json1_1DeleteContainerPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ContainerInUseException":
        case "com.amazonaws.mediastore#ContainerInUseException":
            response = {
                ...(await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ContainerNotFoundException":
        case "com.amazonaws.mediastore#ContainerNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.mediastore#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PolicyNotFoundException":
        case "com.amazonaws.mediastore#PolicyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1PolicyNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteCorsPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteCorsPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteCorsPolicyOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteCorsPolicyCommand = deserializeAws_json1_1DeleteCorsPolicyCommand;
const deserializeAws_json1_1DeleteCorsPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ContainerInUseException":
        case "com.amazonaws.mediastore#ContainerInUseException":
            response = {
                ...(await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ContainerNotFoundException":
        case "com.amazonaws.mediastore#ContainerNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CorsPolicyNotFoundException":
        case "com.amazonaws.mediastore#CorsPolicyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1CorsPolicyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.mediastore#InternalServerError":
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
const deserializeAws_json1_1DeleteLifecyclePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteLifecyclePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteLifecyclePolicyOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteLifecyclePolicyCommand = deserializeAws_json1_1DeleteLifecyclePolicyCommand;
const deserializeAws_json1_1DeleteLifecyclePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ContainerInUseException":
        case "com.amazonaws.mediastore#ContainerInUseException":
            response = {
                ...(await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ContainerNotFoundException":
        case "com.amazonaws.mediastore#ContainerNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.mediastore#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PolicyNotFoundException":
        case "com.amazonaws.mediastore#PolicyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1PolicyNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteMetricPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteMetricPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteMetricPolicyOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteMetricPolicyCommand = deserializeAws_json1_1DeleteMetricPolicyCommand;
const deserializeAws_json1_1DeleteMetricPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ContainerInUseException":
        case "com.amazonaws.mediastore#ContainerInUseException":
            response = {
                ...(await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ContainerNotFoundException":
        case "com.amazonaws.mediastore#ContainerNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.mediastore#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PolicyNotFoundException":
        case "com.amazonaws.mediastore#PolicyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1PolicyNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeContainerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeContainerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeContainerOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeContainerCommand = deserializeAws_json1_1DescribeContainerCommand;
const deserializeAws_json1_1DescribeContainerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ContainerNotFoundException":
        case "com.amazonaws.mediastore#ContainerNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.mediastore#InternalServerError":
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
const deserializeAws_json1_1GetContainerPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetContainerPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetContainerPolicyOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetContainerPolicyCommand = deserializeAws_json1_1GetContainerPolicyCommand;
const deserializeAws_json1_1GetContainerPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ContainerInUseException":
        case "com.amazonaws.mediastore#ContainerInUseException":
            response = {
                ...(await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ContainerNotFoundException":
        case "com.amazonaws.mediastore#ContainerNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.mediastore#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PolicyNotFoundException":
        case "com.amazonaws.mediastore#PolicyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1PolicyNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetCorsPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetCorsPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetCorsPolicyOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetCorsPolicyCommand = deserializeAws_json1_1GetCorsPolicyCommand;
const deserializeAws_json1_1GetCorsPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ContainerInUseException":
        case "com.amazonaws.mediastore#ContainerInUseException":
            response = {
                ...(await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ContainerNotFoundException":
        case "com.amazonaws.mediastore#ContainerNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CorsPolicyNotFoundException":
        case "com.amazonaws.mediastore#CorsPolicyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1CorsPolicyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.mediastore#InternalServerError":
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
const deserializeAws_json1_1GetLifecyclePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetLifecyclePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetLifecyclePolicyOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetLifecyclePolicyCommand = deserializeAws_json1_1GetLifecyclePolicyCommand;
const deserializeAws_json1_1GetLifecyclePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ContainerInUseException":
        case "com.amazonaws.mediastore#ContainerInUseException":
            response = {
                ...(await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ContainerNotFoundException":
        case "com.amazonaws.mediastore#ContainerNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.mediastore#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PolicyNotFoundException":
        case "com.amazonaws.mediastore#PolicyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1PolicyNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetMetricPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetMetricPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetMetricPolicyOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetMetricPolicyCommand = deserializeAws_json1_1GetMetricPolicyCommand;
const deserializeAws_json1_1GetMetricPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ContainerInUseException":
        case "com.amazonaws.mediastore#ContainerInUseException":
            response = {
                ...(await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ContainerNotFoundException":
        case "com.amazonaws.mediastore#ContainerNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.mediastore#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PolicyNotFoundException":
        case "com.amazonaws.mediastore#PolicyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1PolicyNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListContainersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListContainersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListContainersOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListContainersCommand = deserializeAws_json1_1ListContainersCommand;
const deserializeAws_json1_1ListContainersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.mediastore#InternalServerError":
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
const deserializeAws_json1_1ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagsForResourceOutput(data, context);
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
        case "ContainerInUseException":
        case "com.amazonaws.mediastore#ContainerInUseException":
            response = {
                ...(await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ContainerNotFoundException":
        case "com.amazonaws.mediastore#ContainerNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.mediastore#InternalServerError":
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
const deserializeAws_json1_1PutContainerPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutContainerPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutContainerPolicyOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutContainerPolicyCommand = deserializeAws_json1_1PutContainerPolicyCommand;
const deserializeAws_json1_1PutContainerPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ContainerInUseException":
        case "com.amazonaws.mediastore#ContainerInUseException":
            response = {
                ...(await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ContainerNotFoundException":
        case "com.amazonaws.mediastore#ContainerNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.mediastore#InternalServerError":
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
const deserializeAws_json1_1PutCorsPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutCorsPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutCorsPolicyOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutCorsPolicyCommand = deserializeAws_json1_1PutCorsPolicyCommand;
const deserializeAws_json1_1PutCorsPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ContainerInUseException":
        case "com.amazonaws.mediastore#ContainerInUseException":
            response = {
                ...(await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ContainerNotFoundException":
        case "com.amazonaws.mediastore#ContainerNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.mediastore#InternalServerError":
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
const deserializeAws_json1_1PutLifecyclePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutLifecyclePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutLifecyclePolicyOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutLifecyclePolicyCommand = deserializeAws_json1_1PutLifecyclePolicyCommand;
const deserializeAws_json1_1PutLifecyclePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ContainerInUseException":
        case "com.amazonaws.mediastore#ContainerInUseException":
            response = {
                ...(await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ContainerNotFoundException":
        case "com.amazonaws.mediastore#ContainerNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.mediastore#InternalServerError":
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
const deserializeAws_json1_1PutMetricPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutMetricPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutMetricPolicyOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutMetricPolicyCommand = deserializeAws_json1_1PutMetricPolicyCommand;
const deserializeAws_json1_1PutMetricPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ContainerInUseException":
        case "com.amazonaws.mediastore#ContainerInUseException":
            response = {
                ...(await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ContainerNotFoundException":
        case "com.amazonaws.mediastore#ContainerNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.mediastore#InternalServerError":
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
const deserializeAws_json1_1StartAccessLoggingCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartAccessLoggingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartAccessLoggingOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartAccessLoggingCommand = deserializeAws_json1_1StartAccessLoggingCommand;
const deserializeAws_json1_1StartAccessLoggingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ContainerInUseException":
        case "com.amazonaws.mediastore#ContainerInUseException":
            response = {
                ...(await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ContainerNotFoundException":
        case "com.amazonaws.mediastore#ContainerNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.mediastore#InternalServerError":
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
const deserializeAws_json1_1StopAccessLoggingCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StopAccessLoggingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopAccessLoggingOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopAccessLoggingCommand = deserializeAws_json1_1StopAccessLoggingCommand;
const deserializeAws_json1_1StopAccessLoggingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ContainerInUseException":
        case "com.amazonaws.mediastore#ContainerInUseException":
            response = {
                ...(await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ContainerNotFoundException":
        case "com.amazonaws.mediastore#ContainerNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.mediastore#InternalServerError":
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
const deserializeAws_json1_1TagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1TagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TagResourceOutput(data, context);
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
        case "ContainerInUseException":
        case "com.amazonaws.mediastore#ContainerInUseException":
            response = {
                ...(await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ContainerNotFoundException":
        case "com.amazonaws.mediastore#ContainerNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.mediastore#InternalServerError":
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
const deserializeAws_json1_1UntagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UntagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UntagResourceOutput(data, context);
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
        case "ContainerInUseException":
        case "com.amazonaws.mediastore#ContainerInUseException":
            response = {
                ...(await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ContainerNotFoundException":
        case "com.amazonaws.mediastore#ContainerNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.mediastore#InternalServerError":
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
const deserializeAws_json1_1ContainerInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ContainerInUseException(body, context);
    const contents = {
        name: "ContainerInUseException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ContainerNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ContainerNotFoundException(body, context);
    const contents = {
        name: "ContainerNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1CorsPolicyNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CorsPolicyNotFoundException(body, context);
    const contents = {
        name: "CorsPolicyNotFoundException",
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
const deserializeAws_json1_1PolicyNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PolicyNotFoundException(body, context);
    const contents = {
        name: "PolicyNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1AllowedHeaders = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1AllowedMethods = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1AllowedOrigins = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1CorsPolicy = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1CorsRule(entry, context);
    });
};
const serializeAws_json1_1CorsRule = (input, context) => {
    return {
        ...(input.AllowedHeaders !== undefined &&
            input.AllowedHeaders !== null && {
            AllowedHeaders: serializeAws_json1_1AllowedHeaders(input.AllowedHeaders, context),
        }),
        ...(input.AllowedMethods !== undefined &&
            input.AllowedMethods !== null && {
            AllowedMethods: serializeAws_json1_1AllowedMethods(input.AllowedMethods, context),
        }),
        ...(input.AllowedOrigins !== undefined &&
            input.AllowedOrigins !== null && {
            AllowedOrigins: serializeAws_json1_1AllowedOrigins(input.AllowedOrigins, context),
        }),
        ...(input.ExposeHeaders !== undefined &&
            input.ExposeHeaders !== null && {
            ExposeHeaders: serializeAws_json1_1ExposeHeaders(input.ExposeHeaders, context),
        }),
        ...(input.MaxAgeSeconds !== undefined && input.MaxAgeSeconds !== null && { MaxAgeSeconds: input.MaxAgeSeconds }),
    };
};
const serializeAws_json1_1CreateContainerInput = (input, context) => {
    return {
        ...(input.ContainerName !== undefined && input.ContainerName !== null && { ContainerName: input.ContainerName }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1DeleteContainerInput = (input, context) => {
    return {
        ...(input.ContainerName !== undefined && input.ContainerName !== null && { ContainerName: input.ContainerName }),
    };
};
const serializeAws_json1_1DeleteContainerPolicyInput = (input, context) => {
    return {
        ...(input.ContainerName !== undefined && input.ContainerName !== null && { ContainerName: input.ContainerName }),
    };
};
const serializeAws_json1_1DeleteCorsPolicyInput = (input, context) => {
    return {
        ...(input.ContainerName !== undefined && input.ContainerName !== null && { ContainerName: input.ContainerName }),
    };
};
const serializeAws_json1_1DeleteLifecyclePolicyInput = (input, context) => {
    return {
        ...(input.ContainerName !== undefined && input.ContainerName !== null && { ContainerName: input.ContainerName }),
    };
};
const serializeAws_json1_1DeleteMetricPolicyInput = (input, context) => {
    return {
        ...(input.ContainerName !== undefined && input.ContainerName !== null && { ContainerName: input.ContainerName }),
    };
};
const serializeAws_json1_1DescribeContainerInput = (input, context) => {
    return {
        ...(input.ContainerName !== undefined && input.ContainerName !== null && { ContainerName: input.ContainerName }),
    };
};
const serializeAws_json1_1ExposeHeaders = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1GetContainerPolicyInput = (input, context) => {
    return {
        ...(input.ContainerName !== undefined && input.ContainerName !== null && { ContainerName: input.ContainerName }),
    };
};
const serializeAws_json1_1GetCorsPolicyInput = (input, context) => {
    return {
        ...(input.ContainerName !== undefined && input.ContainerName !== null && { ContainerName: input.ContainerName }),
    };
};
const serializeAws_json1_1GetLifecyclePolicyInput = (input, context) => {
    return {
        ...(input.ContainerName !== undefined && input.ContainerName !== null && { ContainerName: input.ContainerName }),
    };
};
const serializeAws_json1_1GetMetricPolicyInput = (input, context) => {
    return {
        ...(input.ContainerName !== undefined && input.ContainerName !== null && { ContainerName: input.ContainerName }),
    };
};
const serializeAws_json1_1ListContainersInput = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListTagsForResourceInput = (input, context) => {
    return {
        ...(input.Resource !== undefined && input.Resource !== null && { Resource: input.Resource }),
    };
};
const serializeAws_json1_1MetricPolicy = (input, context) => {
    return {
        ...(input.ContainerLevelMetrics !== undefined &&
            input.ContainerLevelMetrics !== null && { ContainerLevelMetrics: input.ContainerLevelMetrics }),
        ...(input.MetricPolicyRules !== undefined &&
            input.MetricPolicyRules !== null && {
            MetricPolicyRules: serializeAws_json1_1MetricPolicyRules(input.MetricPolicyRules, context),
        }),
    };
};
const serializeAws_json1_1MetricPolicyRule = (input, context) => {
    return {
        ...(input.ObjectGroup !== undefined && input.ObjectGroup !== null && { ObjectGroup: input.ObjectGroup }),
        ...(input.ObjectGroupName !== undefined &&
            input.ObjectGroupName !== null && { ObjectGroupName: input.ObjectGroupName }),
    };
};
const serializeAws_json1_1MetricPolicyRules = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1MetricPolicyRule(entry, context);
    });
};
const serializeAws_json1_1PutContainerPolicyInput = (input, context) => {
    return {
        ...(input.ContainerName !== undefined && input.ContainerName !== null && { ContainerName: input.ContainerName }),
        ...(input.Policy !== undefined && input.Policy !== null && { Policy: input.Policy }),
    };
};
const serializeAws_json1_1PutCorsPolicyInput = (input, context) => {
    return {
        ...(input.ContainerName !== undefined && input.ContainerName !== null && { ContainerName: input.ContainerName }),
        ...(input.CorsPolicy !== undefined &&
            input.CorsPolicy !== null && { CorsPolicy: serializeAws_json1_1CorsPolicy(input.CorsPolicy, context) }),
    };
};
const serializeAws_json1_1PutLifecyclePolicyInput = (input, context) => {
    return {
        ...(input.ContainerName !== undefined && input.ContainerName !== null && { ContainerName: input.ContainerName }),
        ...(input.LifecyclePolicy !== undefined &&
            input.LifecyclePolicy !== null && { LifecyclePolicy: input.LifecyclePolicy }),
    };
};
const serializeAws_json1_1PutMetricPolicyInput = (input, context) => {
    return {
        ...(input.ContainerName !== undefined && input.ContainerName !== null && { ContainerName: input.ContainerName }),
        ...(input.MetricPolicy !== undefined &&
            input.MetricPolicy !== null && { MetricPolicy: serializeAws_json1_1MetricPolicy(input.MetricPolicy, context) }),
    };
};
const serializeAws_json1_1StartAccessLoggingInput = (input, context) => {
    return {
        ...(input.ContainerName !== undefined && input.ContainerName !== null && { ContainerName: input.ContainerName }),
    };
};
const serializeAws_json1_1StopAccessLoggingInput = (input, context) => {
    return {
        ...(input.ContainerName !== undefined && input.ContainerName !== null && { ContainerName: input.ContainerName }),
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
const serializeAws_json1_1TagResourceInput = (input, context) => {
    return {
        ...(input.Resource !== undefined && input.Resource !== null && { Resource: input.Resource }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1UntagResourceInput = (input, context) => {
    return {
        ...(input.Resource !== undefined && input.Resource !== null && { Resource: input.Resource }),
        ...(input.TagKeys !== undefined &&
            input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
    };
};
const deserializeAws_json1_1AllowedHeaders = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1AllowedMethods = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1AllowedOrigins = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1Container = (output, context) => {
    return {
        ARN: output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
        AccessLoggingEnabled: output.AccessLoggingEnabled !== undefined && output.AccessLoggingEnabled !== null
            ? output.AccessLoggingEnabled
            : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        Endpoint: output.Endpoint !== undefined && output.Endpoint !== null ? output.Endpoint : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1ContainerInUseException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ContainerList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Container(entry, context);
    });
};
const deserializeAws_json1_1ContainerNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1CorsPolicy = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CorsRule(entry, context);
    });
};
const deserializeAws_json1_1CorsPolicyNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1CorsRule = (output, context) => {
    return {
        AllowedHeaders: output.AllowedHeaders !== undefined && output.AllowedHeaders !== null
            ? deserializeAws_json1_1AllowedHeaders(output.AllowedHeaders, context)
            : undefined,
        AllowedMethods: output.AllowedMethods !== undefined && output.AllowedMethods !== null
            ? deserializeAws_json1_1AllowedMethods(output.AllowedMethods, context)
            : undefined,
        AllowedOrigins: output.AllowedOrigins !== undefined && output.AllowedOrigins !== null
            ? deserializeAws_json1_1AllowedOrigins(output.AllowedOrigins, context)
            : undefined,
        ExposeHeaders: output.ExposeHeaders !== undefined && output.ExposeHeaders !== null
            ? deserializeAws_json1_1ExposeHeaders(output.ExposeHeaders, context)
            : undefined,
        MaxAgeSeconds: output.MaxAgeSeconds !== undefined && output.MaxAgeSeconds !== null ? output.MaxAgeSeconds : undefined,
    };
};
const deserializeAws_json1_1CreateContainerOutput = (output, context) => {
    return {
        Container: output.Container !== undefined && output.Container !== null
            ? deserializeAws_json1_1Container(output.Container, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteContainerOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteContainerPolicyOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteCorsPolicyOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteLifecyclePolicyOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteMetricPolicyOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1DescribeContainerOutput = (output, context) => {
    return {
        Container: output.Container !== undefined && output.Container !== null
            ? deserializeAws_json1_1Container(output.Container, context)
            : undefined,
    };
};
const deserializeAws_json1_1ExposeHeaders = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1GetContainerPolicyOutput = (output, context) => {
    return {
        Policy: output.Policy !== undefined && output.Policy !== null ? output.Policy : undefined,
    };
};
const deserializeAws_json1_1GetCorsPolicyOutput = (output, context) => {
    return {
        CorsPolicy: output.CorsPolicy !== undefined && output.CorsPolicy !== null
            ? deserializeAws_json1_1CorsPolicy(output.CorsPolicy, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetLifecyclePolicyOutput = (output, context) => {
    return {
        LifecyclePolicy: output.LifecyclePolicy !== undefined && output.LifecyclePolicy !== null ? output.LifecyclePolicy : undefined,
    };
};
const deserializeAws_json1_1GetMetricPolicyOutput = (output, context) => {
    return {
        MetricPolicy: output.MetricPolicy !== undefined && output.MetricPolicy !== null
            ? deserializeAws_json1_1MetricPolicy(output.MetricPolicy, context)
            : undefined,
    };
};
const deserializeAws_json1_1InternalServerError = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ListContainersOutput = (output, context) => {
    return {
        Containers: output.Containers !== undefined && output.Containers !== null
            ? deserializeAws_json1_1ContainerList(output.Containers, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListTagsForResourceOutput = (output, context) => {
    return {
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagList(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1MetricPolicy = (output, context) => {
    return {
        ContainerLevelMetrics: output.ContainerLevelMetrics !== undefined && output.ContainerLevelMetrics !== null
            ? output.ContainerLevelMetrics
            : undefined,
        MetricPolicyRules: output.MetricPolicyRules !== undefined && output.MetricPolicyRules !== null
            ? deserializeAws_json1_1MetricPolicyRules(output.MetricPolicyRules, context)
            : undefined,
    };
};
const deserializeAws_json1_1MetricPolicyRule = (output, context) => {
    return {
        ObjectGroup: output.ObjectGroup !== undefined && output.ObjectGroup !== null ? output.ObjectGroup : undefined,
        ObjectGroupName: output.ObjectGroupName !== undefined && output.ObjectGroupName !== null ? output.ObjectGroupName : undefined,
    };
};
const deserializeAws_json1_1MetricPolicyRules = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MetricPolicyRule(entry, context);
    });
};
const deserializeAws_json1_1PolicyNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1PutContainerPolicyOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1PutCorsPolicyOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1PutLifecyclePolicyOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1PutMetricPolicyOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1StartAccessLoggingOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1StopAccessLoggingOutput = (output, context) => {
    return {};
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
const deserializeAws_json1_1TagResourceOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1UntagResourceOutput = (output, context) => {
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