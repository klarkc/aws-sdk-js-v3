"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_0UpdateHostCommand = exports.deserializeAws_json1_0UntagResourceCommand = exports.deserializeAws_json1_0TagResourceCommand = exports.deserializeAws_json1_0ListTagsForResourceCommand = exports.deserializeAws_json1_0ListHostsCommand = exports.deserializeAws_json1_0ListConnectionsCommand = exports.deserializeAws_json1_0GetHostCommand = exports.deserializeAws_json1_0GetConnectionCommand = exports.deserializeAws_json1_0DeleteHostCommand = exports.deserializeAws_json1_0DeleteConnectionCommand = exports.deserializeAws_json1_0CreateHostCommand = exports.deserializeAws_json1_0CreateConnectionCommand = exports.serializeAws_json1_0UpdateHostCommand = exports.serializeAws_json1_0UntagResourceCommand = exports.serializeAws_json1_0TagResourceCommand = exports.serializeAws_json1_0ListTagsForResourceCommand = exports.serializeAws_json1_0ListHostsCommand = exports.serializeAws_json1_0ListConnectionsCommand = exports.serializeAws_json1_0GetHostCommand = exports.serializeAws_json1_0GetConnectionCommand = exports.serializeAws_json1_0DeleteHostCommand = exports.serializeAws_json1_0DeleteConnectionCommand = exports.serializeAws_json1_0CreateHostCommand = exports.serializeAws_json1_0CreateConnectionCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_0CreateConnectionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "CodeStar_connections_20191201.CreateConnection",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0CreateConnectionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0CreateConnectionCommand = serializeAws_json1_0CreateConnectionCommand;
const serializeAws_json1_0CreateHostCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "CodeStar_connections_20191201.CreateHost",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0CreateHostInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0CreateHostCommand = serializeAws_json1_0CreateHostCommand;
const serializeAws_json1_0DeleteConnectionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "CodeStar_connections_20191201.DeleteConnection",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DeleteConnectionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DeleteConnectionCommand = serializeAws_json1_0DeleteConnectionCommand;
const serializeAws_json1_0DeleteHostCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "CodeStar_connections_20191201.DeleteHost",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DeleteHostInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DeleteHostCommand = serializeAws_json1_0DeleteHostCommand;
const serializeAws_json1_0GetConnectionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "CodeStar_connections_20191201.GetConnection",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0GetConnectionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0GetConnectionCommand = serializeAws_json1_0GetConnectionCommand;
const serializeAws_json1_0GetHostCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "CodeStar_connections_20191201.GetHost",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0GetHostInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0GetHostCommand = serializeAws_json1_0GetHostCommand;
const serializeAws_json1_0ListConnectionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "CodeStar_connections_20191201.ListConnections",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ListConnectionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ListConnectionsCommand = serializeAws_json1_0ListConnectionsCommand;
const serializeAws_json1_0ListHostsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "CodeStar_connections_20191201.ListHosts",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ListHostsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ListHostsCommand = serializeAws_json1_0ListHostsCommand;
const serializeAws_json1_0ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "CodeStar_connections_20191201.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ListTagsForResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ListTagsForResourceCommand = serializeAws_json1_0ListTagsForResourceCommand;
const serializeAws_json1_0TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "CodeStar_connections_20191201.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0TagResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0TagResourceCommand = serializeAws_json1_0TagResourceCommand;
const serializeAws_json1_0UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "CodeStar_connections_20191201.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0UntagResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0UntagResourceCommand = serializeAws_json1_0UntagResourceCommand;
const serializeAws_json1_0UpdateHostCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "CodeStar_connections_20191201.UpdateHost",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0UpdateHostInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0UpdateHostCommand = serializeAws_json1_0UpdateHostCommand;
const deserializeAws_json1_0CreateConnectionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0CreateConnectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0CreateConnectionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0CreateConnectionCommand = deserializeAws_json1_0CreateConnectionCommand;
const deserializeAws_json1_0CreateConnectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.codestarconnections#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codestarconnections#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.codestarconnections#ResourceUnavailableException":
            response = {
                ...(await deserializeAws_json1_0ResourceUnavailableExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0CreateHostCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0CreateHostCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0CreateHostOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0CreateHostCommand = deserializeAws_json1_0CreateHostCommand;
const deserializeAws_json1_0CreateHostCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.codestarconnections#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0DeleteConnectionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DeleteConnectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DeleteConnectionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DeleteConnectionCommand = deserializeAws_json1_0DeleteConnectionCommand;
const deserializeAws_json1_0DeleteConnectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.codestarconnections#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0DeleteHostCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DeleteHostCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DeleteHostOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DeleteHostCommand = deserializeAws_json1_0DeleteHostCommand;
const deserializeAws_json1_0DeleteHostCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.codestarconnections#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.codestarconnections#ResourceUnavailableException":
            response = {
                ...(await deserializeAws_json1_0ResourceUnavailableExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0GetConnectionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0GetConnectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0GetConnectionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0GetConnectionCommand = deserializeAws_json1_0GetConnectionCommand;
const deserializeAws_json1_0GetConnectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.codestarconnections#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.codestarconnections#ResourceUnavailableException":
            response = {
                ...(await deserializeAws_json1_0ResourceUnavailableExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0GetHostCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0GetHostCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0GetHostOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0GetHostCommand = deserializeAws_json1_0GetHostCommand;
const deserializeAws_json1_0GetHostCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.codestarconnections#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.codestarconnections#ResourceUnavailableException":
            response = {
                ...(await deserializeAws_json1_0ResourceUnavailableExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0ListConnectionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0ListConnectionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ListConnectionsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0ListConnectionsCommand = deserializeAws_json1_0ListConnectionsCommand;
const deserializeAws_json1_0ListConnectionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_json1_0ListHostsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0ListHostsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ListHostsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0ListHostsCommand = deserializeAws_json1_0ListHostsCommand;
const deserializeAws_json1_0ListHostsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_json1_0ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0ListTagsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ListTagsForResourceOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0ListTagsForResourceCommand = deserializeAws_json1_0ListTagsForResourceCommand;
const deserializeAws_json1_0ListTagsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.codestarconnections#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0TagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0TagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0TagResourceOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0TagResourceCommand = deserializeAws_json1_0TagResourceCommand;
const deserializeAws_json1_0TagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.codestarconnections#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codestarconnections#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0UntagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0UntagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0UntagResourceOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0UntagResourceCommand = deserializeAws_json1_0UntagResourceCommand;
const deserializeAws_json1_0UntagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.codestarconnections#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0UpdateHostCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0UpdateHostCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0UpdateHostOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0UpdateHostCommand = deserializeAws_json1_0UpdateHostCommand;
const deserializeAws_json1_0UpdateHostCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.codestarconnections#ConflictException":
            response = {
                ...(await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codestarconnections#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.codestarconnections#ResourceUnavailableException":
            response = {
                ...(await deserializeAws_json1_0ResourceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.codestarconnections#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_0UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0ConflictExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ConflictException(body, context);
    const contents = {
        name: "ConflictException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0LimitExceededException(body, context);
    const contents = {
        name: "LimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ResourceNotFoundException(body, context);
    const contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0ResourceUnavailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ResourceUnavailableException(body, context);
    const contents = {
        name: "ResourceUnavailableException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0UnsupportedOperationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0UnsupportedOperationException(body, context);
    const contents = {
        name: "UnsupportedOperationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_0CreateConnectionInput = (input, context) => {
    return {
        ...(input.ConnectionName !== undefined &&
            input.ConnectionName !== null && { ConnectionName: input.ConnectionName }),
        ...(input.HostArn !== undefined && input.HostArn !== null && { HostArn: input.HostArn }),
        ...(input.ProviderType !== undefined && input.ProviderType !== null && { ProviderType: input.ProviderType }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_0CreateHostInput = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.ProviderEndpoint !== undefined &&
            input.ProviderEndpoint !== null && { ProviderEndpoint: input.ProviderEndpoint }),
        ...(input.ProviderType !== undefined && input.ProviderType !== null && { ProviderType: input.ProviderType }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
        ...(input.VpcConfiguration !== undefined &&
            input.VpcConfiguration !== null && {
            VpcConfiguration: serializeAws_json1_0VpcConfiguration(input.VpcConfiguration, context),
        }),
    };
};
const serializeAws_json1_0DeleteConnectionInput = (input, context) => {
    return {
        ...(input.ConnectionArn !== undefined && input.ConnectionArn !== null && { ConnectionArn: input.ConnectionArn }),
    };
};
const serializeAws_json1_0DeleteHostInput = (input, context) => {
    return {
        ...(input.HostArn !== undefined && input.HostArn !== null && { HostArn: input.HostArn }),
    };
};
const serializeAws_json1_0GetConnectionInput = (input, context) => {
    return {
        ...(input.ConnectionArn !== undefined && input.ConnectionArn !== null && { ConnectionArn: input.ConnectionArn }),
    };
};
const serializeAws_json1_0GetHostInput = (input, context) => {
    return {
        ...(input.HostArn !== undefined && input.HostArn !== null && { HostArn: input.HostArn }),
    };
};
const serializeAws_json1_0ListConnectionsInput = (input, context) => {
    return {
        ...(input.HostArnFilter !== undefined && input.HostArnFilter !== null && { HostArnFilter: input.HostArnFilter }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ProviderTypeFilter !== undefined &&
            input.ProviderTypeFilter !== null && { ProviderTypeFilter: input.ProviderTypeFilter }),
    };
};
const serializeAws_json1_0ListHostsInput = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_0ListTagsForResourceInput = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_0SecurityGroupIds = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_0SubnetIds = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_0Tag = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_0TagKeyList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_0TagList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0Tag(entry, context);
    });
};
const serializeAws_json1_0TagResourceInput = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_0UntagResourceInput = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
        ...(input.TagKeys !== undefined &&
            input.TagKeys !== null && { TagKeys: serializeAws_json1_0TagKeyList(input.TagKeys, context) }),
    };
};
const serializeAws_json1_0UpdateHostInput = (input, context) => {
    return {
        ...(input.HostArn !== undefined && input.HostArn !== null && { HostArn: input.HostArn }),
        ...(input.ProviderEndpoint !== undefined &&
            input.ProviderEndpoint !== null && { ProviderEndpoint: input.ProviderEndpoint }),
        ...(input.VpcConfiguration !== undefined &&
            input.VpcConfiguration !== null && {
            VpcConfiguration: serializeAws_json1_0VpcConfiguration(input.VpcConfiguration, context),
        }),
    };
};
const serializeAws_json1_0VpcConfiguration = (input, context) => {
    return {
        ...(input.SecurityGroupIds !== undefined &&
            input.SecurityGroupIds !== null && {
            SecurityGroupIds: serializeAws_json1_0SecurityGroupIds(input.SecurityGroupIds, context),
        }),
        ...(input.SubnetIds !== undefined &&
            input.SubnetIds !== null && { SubnetIds: serializeAws_json1_0SubnetIds(input.SubnetIds, context) }),
        ...(input.TlsCertificate !== undefined &&
            input.TlsCertificate !== null && { TlsCertificate: input.TlsCertificate }),
        ...(input.VpcId !== undefined && input.VpcId !== null && { VpcId: input.VpcId }),
    };
};
const deserializeAws_json1_0ConflictException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0Connection = (output, context) => {
    return {
        ConnectionArn: output.ConnectionArn !== undefined && output.ConnectionArn !== null ? output.ConnectionArn : undefined,
        ConnectionName: output.ConnectionName !== undefined && output.ConnectionName !== null ? output.ConnectionName : undefined,
        ConnectionStatus: output.ConnectionStatus !== undefined && output.ConnectionStatus !== null ? output.ConnectionStatus : undefined,
        HostArn: output.HostArn !== undefined && output.HostArn !== null ? output.HostArn : undefined,
        OwnerAccountId: output.OwnerAccountId !== undefined && output.OwnerAccountId !== null ? output.OwnerAccountId : undefined,
        ProviderType: output.ProviderType !== undefined && output.ProviderType !== null ? output.ProviderType : undefined,
    };
};
const deserializeAws_json1_0ConnectionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0Connection(entry, context);
    });
};
const deserializeAws_json1_0CreateConnectionOutput = (output, context) => {
    return {
        ConnectionArn: output.ConnectionArn !== undefined && output.ConnectionArn !== null ? output.ConnectionArn : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_0TagList(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_json1_0CreateHostOutput = (output, context) => {
    return {
        HostArn: output.HostArn !== undefined && output.HostArn !== null ? output.HostArn : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_0TagList(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_json1_0DeleteConnectionOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_0DeleteHostOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_0GetConnectionOutput = (output, context) => {
    return {
        Connection: output.Connection !== undefined && output.Connection !== null
            ? deserializeAws_json1_0Connection(output.Connection, context)
            : undefined,
    };
};
const deserializeAws_json1_0GetHostOutput = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        ProviderEndpoint: output.ProviderEndpoint !== undefined && output.ProviderEndpoint !== null ? output.ProviderEndpoint : undefined,
        ProviderType: output.ProviderType !== undefined && output.ProviderType !== null ? output.ProviderType : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        VpcConfiguration: output.VpcConfiguration !== undefined && output.VpcConfiguration !== null
            ? deserializeAws_json1_0VpcConfiguration(output.VpcConfiguration, context)
            : undefined,
    };
};
const deserializeAws_json1_0Host = (output, context) => {
    return {
        HostArn: output.HostArn !== undefined && output.HostArn !== null ? output.HostArn : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        ProviderEndpoint: output.ProviderEndpoint !== undefined && output.ProviderEndpoint !== null ? output.ProviderEndpoint : undefined,
        ProviderType: output.ProviderType !== undefined && output.ProviderType !== null ? output.ProviderType : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StatusMessage: output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
        VpcConfiguration: output.VpcConfiguration !== undefined && output.VpcConfiguration !== null
            ? deserializeAws_json1_0VpcConfiguration(output.VpcConfiguration, context)
            : undefined,
    };
};
const deserializeAws_json1_0HostList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0Host(entry, context);
    });
};
const deserializeAws_json1_0LimitExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0ListConnectionsOutput = (output, context) => {
    return {
        Connections: output.Connections !== undefined && output.Connections !== null
            ? deserializeAws_json1_0ConnectionList(output.Connections, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_0ListHostsOutput = (output, context) => {
    return {
        Hosts: output.Hosts !== undefined && output.Hosts !== null
            ? deserializeAws_json1_0HostList(output.Hosts, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_0ListTagsForResourceOutput = (output, context) => {
    return {
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_0TagList(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_json1_0ResourceNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0ResourceUnavailableException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0SecurityGroupIds = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_0SubnetIds = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_0Tag = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_0TagList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0Tag(entry, context);
    });
};
const deserializeAws_json1_0TagResourceOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_0UnsupportedOperationException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0UntagResourceOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_0UpdateHostOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_0VpcConfiguration = (output, context) => {
    return {
        SecurityGroupIds: output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
            ? deserializeAws_json1_0SecurityGroupIds(output.SecurityGroupIds, context)
            : undefined,
        SubnetIds: output.SubnetIds !== undefined && output.SubnetIds !== null
            ? deserializeAws_json1_0SubnetIds(output.SubnetIds, context)
            : undefined,
        TlsCertificate: output.TlsCertificate !== undefined && output.TlsCertificate !== null ? output.TlsCertificate : undefined,
        VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
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
//# sourceMappingURL=Aws_json1_0.js.map