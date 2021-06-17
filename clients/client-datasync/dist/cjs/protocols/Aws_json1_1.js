"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1DescribeLocationFsxWindowsCommand = exports.deserializeAws_json1_1DescribeLocationEfsCommand = exports.deserializeAws_json1_1DescribeAgentCommand = exports.deserializeAws_json1_1DeleteTaskCommand = exports.deserializeAws_json1_1DeleteLocationCommand = exports.deserializeAws_json1_1DeleteAgentCommand = exports.deserializeAws_json1_1CreateTaskCommand = exports.deserializeAws_json1_1CreateLocationSmbCommand = exports.deserializeAws_json1_1CreateLocationS3Command = exports.deserializeAws_json1_1CreateLocationObjectStorageCommand = exports.deserializeAws_json1_1CreateLocationNfsCommand = exports.deserializeAws_json1_1CreateLocationFsxWindowsCommand = exports.deserializeAws_json1_1CreateLocationEfsCommand = exports.deserializeAws_json1_1CreateAgentCommand = exports.deserializeAws_json1_1CancelTaskExecutionCommand = exports.serializeAws_json1_1UpdateTaskExecutionCommand = exports.serializeAws_json1_1UpdateTaskCommand = exports.serializeAws_json1_1UpdateLocationSmbCommand = exports.serializeAws_json1_1UpdateLocationObjectStorageCommand = exports.serializeAws_json1_1UpdateLocationNfsCommand = exports.serializeAws_json1_1UpdateAgentCommand = exports.serializeAws_json1_1UntagResourceCommand = exports.serializeAws_json1_1TagResourceCommand = exports.serializeAws_json1_1StartTaskExecutionCommand = exports.serializeAws_json1_1ListTasksCommand = exports.serializeAws_json1_1ListTaskExecutionsCommand = exports.serializeAws_json1_1ListTagsForResourceCommand = exports.serializeAws_json1_1ListLocationsCommand = exports.serializeAws_json1_1ListAgentsCommand = exports.serializeAws_json1_1DescribeTaskExecutionCommand = exports.serializeAws_json1_1DescribeTaskCommand = exports.serializeAws_json1_1DescribeLocationSmbCommand = exports.serializeAws_json1_1DescribeLocationS3Command = exports.serializeAws_json1_1DescribeLocationObjectStorageCommand = exports.serializeAws_json1_1DescribeLocationNfsCommand = exports.serializeAws_json1_1DescribeLocationFsxWindowsCommand = exports.serializeAws_json1_1DescribeLocationEfsCommand = exports.serializeAws_json1_1DescribeAgentCommand = exports.serializeAws_json1_1DeleteTaskCommand = exports.serializeAws_json1_1DeleteLocationCommand = exports.serializeAws_json1_1DeleteAgentCommand = exports.serializeAws_json1_1CreateTaskCommand = exports.serializeAws_json1_1CreateLocationSmbCommand = exports.serializeAws_json1_1CreateLocationS3Command = exports.serializeAws_json1_1CreateLocationObjectStorageCommand = exports.serializeAws_json1_1CreateLocationNfsCommand = exports.serializeAws_json1_1CreateLocationFsxWindowsCommand = exports.serializeAws_json1_1CreateLocationEfsCommand = exports.serializeAws_json1_1CreateAgentCommand = exports.serializeAws_json1_1CancelTaskExecutionCommand = void 0;
exports.deserializeAws_json1_1UpdateTaskExecutionCommand = exports.deserializeAws_json1_1UpdateTaskCommand = exports.deserializeAws_json1_1UpdateLocationSmbCommand = exports.deserializeAws_json1_1UpdateLocationObjectStorageCommand = exports.deserializeAws_json1_1UpdateLocationNfsCommand = exports.deserializeAws_json1_1UpdateAgentCommand = exports.deserializeAws_json1_1UntagResourceCommand = exports.deserializeAws_json1_1TagResourceCommand = exports.deserializeAws_json1_1StartTaskExecutionCommand = exports.deserializeAws_json1_1ListTasksCommand = exports.deserializeAws_json1_1ListTaskExecutionsCommand = exports.deserializeAws_json1_1ListTagsForResourceCommand = exports.deserializeAws_json1_1ListLocationsCommand = exports.deserializeAws_json1_1ListAgentsCommand = exports.deserializeAws_json1_1DescribeTaskExecutionCommand = exports.deserializeAws_json1_1DescribeTaskCommand = exports.deserializeAws_json1_1DescribeLocationSmbCommand = exports.deserializeAws_json1_1DescribeLocationS3Command = exports.deserializeAws_json1_1DescribeLocationObjectStorageCommand = exports.deserializeAws_json1_1DescribeLocationNfsCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1CancelTaskExecutionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "FmrsService.CancelTaskExecution",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CancelTaskExecutionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CancelTaskExecutionCommand = serializeAws_json1_1CancelTaskExecutionCommand;
const serializeAws_json1_1CreateAgentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "FmrsService.CreateAgent",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateAgentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateAgentCommand = serializeAws_json1_1CreateAgentCommand;
const serializeAws_json1_1CreateLocationEfsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "FmrsService.CreateLocationEfs",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateLocationEfsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateLocationEfsCommand = serializeAws_json1_1CreateLocationEfsCommand;
const serializeAws_json1_1CreateLocationFsxWindowsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "FmrsService.CreateLocationFsxWindows",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateLocationFsxWindowsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateLocationFsxWindowsCommand = serializeAws_json1_1CreateLocationFsxWindowsCommand;
const serializeAws_json1_1CreateLocationNfsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "FmrsService.CreateLocationNfs",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateLocationNfsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateLocationNfsCommand = serializeAws_json1_1CreateLocationNfsCommand;
const serializeAws_json1_1CreateLocationObjectStorageCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "FmrsService.CreateLocationObjectStorage",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateLocationObjectStorageRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateLocationObjectStorageCommand = serializeAws_json1_1CreateLocationObjectStorageCommand;
const serializeAws_json1_1CreateLocationS3Command = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "FmrsService.CreateLocationS3",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateLocationS3Request(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateLocationS3Command = serializeAws_json1_1CreateLocationS3Command;
const serializeAws_json1_1CreateLocationSmbCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "FmrsService.CreateLocationSmb",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateLocationSmbRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateLocationSmbCommand = serializeAws_json1_1CreateLocationSmbCommand;
const serializeAws_json1_1CreateTaskCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "FmrsService.CreateTask",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateTaskRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateTaskCommand = serializeAws_json1_1CreateTaskCommand;
const serializeAws_json1_1DeleteAgentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "FmrsService.DeleteAgent",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteAgentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteAgentCommand = serializeAws_json1_1DeleteAgentCommand;
const serializeAws_json1_1DeleteLocationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "FmrsService.DeleteLocation",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteLocationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteLocationCommand = serializeAws_json1_1DeleteLocationCommand;
const serializeAws_json1_1DeleteTaskCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "FmrsService.DeleteTask",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteTaskRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteTaskCommand = serializeAws_json1_1DeleteTaskCommand;
const serializeAws_json1_1DescribeAgentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "FmrsService.DescribeAgent",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAgentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeAgentCommand = serializeAws_json1_1DescribeAgentCommand;
const serializeAws_json1_1DescribeLocationEfsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "FmrsService.DescribeLocationEfs",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeLocationEfsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeLocationEfsCommand = serializeAws_json1_1DescribeLocationEfsCommand;
const serializeAws_json1_1DescribeLocationFsxWindowsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "FmrsService.DescribeLocationFsxWindows",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeLocationFsxWindowsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeLocationFsxWindowsCommand = serializeAws_json1_1DescribeLocationFsxWindowsCommand;
const serializeAws_json1_1DescribeLocationNfsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "FmrsService.DescribeLocationNfs",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeLocationNfsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeLocationNfsCommand = serializeAws_json1_1DescribeLocationNfsCommand;
const serializeAws_json1_1DescribeLocationObjectStorageCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "FmrsService.DescribeLocationObjectStorage",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeLocationObjectStorageRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeLocationObjectStorageCommand = serializeAws_json1_1DescribeLocationObjectStorageCommand;
const serializeAws_json1_1DescribeLocationS3Command = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "FmrsService.DescribeLocationS3",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeLocationS3Request(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeLocationS3Command = serializeAws_json1_1DescribeLocationS3Command;
const serializeAws_json1_1DescribeLocationSmbCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "FmrsService.DescribeLocationSmb",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeLocationSmbRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeLocationSmbCommand = serializeAws_json1_1DescribeLocationSmbCommand;
const serializeAws_json1_1DescribeTaskCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "FmrsService.DescribeTask",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTaskRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeTaskCommand = serializeAws_json1_1DescribeTaskCommand;
const serializeAws_json1_1DescribeTaskExecutionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "FmrsService.DescribeTaskExecution",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTaskExecutionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeTaskExecutionCommand = serializeAws_json1_1DescribeTaskExecutionCommand;
const serializeAws_json1_1ListAgentsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "FmrsService.ListAgents",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAgentsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListAgentsCommand = serializeAws_json1_1ListAgentsCommand;
const serializeAws_json1_1ListLocationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "FmrsService.ListLocations",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListLocationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListLocationsCommand = serializeAws_json1_1ListLocationsCommand;
const serializeAws_json1_1ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "FmrsService.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
const serializeAws_json1_1ListTaskExecutionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "FmrsService.ListTaskExecutions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTaskExecutionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTaskExecutionsCommand = serializeAws_json1_1ListTaskExecutionsCommand;
const serializeAws_json1_1ListTasksCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "FmrsService.ListTasks",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTasksRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTasksCommand = serializeAws_json1_1ListTasksCommand;
const serializeAws_json1_1StartTaskExecutionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "FmrsService.StartTaskExecution",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartTaskExecutionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartTaskExecutionCommand = serializeAws_json1_1StartTaskExecutionCommand;
const serializeAws_json1_1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "FmrsService.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "FmrsService.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
const serializeAws_json1_1UpdateAgentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "FmrsService.UpdateAgent",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateAgentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateAgentCommand = serializeAws_json1_1UpdateAgentCommand;
const serializeAws_json1_1UpdateLocationNfsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "FmrsService.UpdateLocationNfs",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateLocationNfsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateLocationNfsCommand = serializeAws_json1_1UpdateLocationNfsCommand;
const serializeAws_json1_1UpdateLocationObjectStorageCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "FmrsService.UpdateLocationObjectStorage",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateLocationObjectStorageRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateLocationObjectStorageCommand = serializeAws_json1_1UpdateLocationObjectStorageCommand;
const serializeAws_json1_1UpdateLocationSmbCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "FmrsService.UpdateLocationSmb",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateLocationSmbRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateLocationSmbCommand = serializeAws_json1_1UpdateLocationSmbCommand;
const serializeAws_json1_1UpdateTaskCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "FmrsService.UpdateTask",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateTaskRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateTaskCommand = serializeAws_json1_1UpdateTaskCommand;
const serializeAws_json1_1UpdateTaskExecutionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "FmrsService.UpdateTaskExecution",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateTaskExecutionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateTaskExecutionCommand = serializeAws_json1_1UpdateTaskExecutionCommand;
const deserializeAws_json1_1CancelTaskExecutionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CancelTaskExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CancelTaskExecutionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CancelTaskExecutionCommand = deserializeAws_json1_1CancelTaskExecutionCommand;
const deserializeAws_json1_1CancelTaskExecutionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.datasync#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datasync#InvalidRequestException":
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
const deserializeAws_json1_1CreateAgentCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateAgentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateAgentResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateAgentCommand = deserializeAws_json1_1CreateAgentCommand;
const deserializeAws_json1_1CreateAgentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.datasync#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datasync#InvalidRequestException":
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
const deserializeAws_json1_1CreateLocationEfsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateLocationEfsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateLocationEfsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateLocationEfsCommand = deserializeAws_json1_1CreateLocationEfsCommand;
const deserializeAws_json1_1CreateLocationEfsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.datasync#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datasync#InvalidRequestException":
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
const deserializeAws_json1_1CreateLocationFsxWindowsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateLocationFsxWindowsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateLocationFsxWindowsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateLocationFsxWindowsCommand = deserializeAws_json1_1CreateLocationFsxWindowsCommand;
const deserializeAws_json1_1CreateLocationFsxWindowsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.datasync#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datasync#InvalidRequestException":
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
const deserializeAws_json1_1CreateLocationNfsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateLocationNfsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateLocationNfsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateLocationNfsCommand = deserializeAws_json1_1CreateLocationNfsCommand;
const deserializeAws_json1_1CreateLocationNfsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.datasync#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datasync#InvalidRequestException":
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
const deserializeAws_json1_1CreateLocationObjectStorageCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateLocationObjectStorageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateLocationObjectStorageResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateLocationObjectStorageCommand = deserializeAws_json1_1CreateLocationObjectStorageCommand;
const deserializeAws_json1_1CreateLocationObjectStorageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.datasync#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datasync#InvalidRequestException":
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
const deserializeAws_json1_1CreateLocationS3Command = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateLocationS3CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateLocationS3Response(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateLocationS3Command = deserializeAws_json1_1CreateLocationS3Command;
const deserializeAws_json1_1CreateLocationS3CommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.datasync#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datasync#InvalidRequestException":
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
const deserializeAws_json1_1CreateLocationSmbCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateLocationSmbCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateLocationSmbResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateLocationSmbCommand = deserializeAws_json1_1CreateLocationSmbCommand;
const deserializeAws_json1_1CreateLocationSmbCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.datasync#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datasync#InvalidRequestException":
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
const deserializeAws_json1_1CreateTaskCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateTaskResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateTaskCommand = deserializeAws_json1_1CreateTaskCommand;
const deserializeAws_json1_1CreateTaskCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.datasync#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datasync#InvalidRequestException":
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
const deserializeAws_json1_1DeleteAgentCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteAgentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteAgentResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteAgentCommand = deserializeAws_json1_1DeleteAgentCommand;
const deserializeAws_json1_1DeleteAgentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.datasync#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datasync#InvalidRequestException":
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
const deserializeAws_json1_1DeleteLocationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteLocationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteLocationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteLocationCommand = deserializeAws_json1_1DeleteLocationCommand;
const deserializeAws_json1_1DeleteLocationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.datasync#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datasync#InvalidRequestException":
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
const deserializeAws_json1_1DeleteTaskCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteTaskResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteTaskCommand = deserializeAws_json1_1DeleteTaskCommand;
const deserializeAws_json1_1DeleteTaskCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.datasync#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datasync#InvalidRequestException":
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
const deserializeAws_json1_1DescribeAgentCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeAgentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAgentResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeAgentCommand = deserializeAws_json1_1DescribeAgentCommand;
const deserializeAws_json1_1DescribeAgentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.datasync#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datasync#InvalidRequestException":
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
const deserializeAws_json1_1DescribeLocationEfsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeLocationEfsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeLocationEfsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeLocationEfsCommand = deserializeAws_json1_1DescribeLocationEfsCommand;
const deserializeAws_json1_1DescribeLocationEfsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.datasync#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datasync#InvalidRequestException":
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
const deserializeAws_json1_1DescribeLocationFsxWindowsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeLocationFsxWindowsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeLocationFsxWindowsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeLocationFsxWindowsCommand = deserializeAws_json1_1DescribeLocationFsxWindowsCommand;
const deserializeAws_json1_1DescribeLocationFsxWindowsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.datasync#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datasync#InvalidRequestException":
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
const deserializeAws_json1_1DescribeLocationNfsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeLocationNfsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeLocationNfsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeLocationNfsCommand = deserializeAws_json1_1DescribeLocationNfsCommand;
const deserializeAws_json1_1DescribeLocationNfsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.datasync#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datasync#InvalidRequestException":
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
const deserializeAws_json1_1DescribeLocationObjectStorageCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeLocationObjectStorageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeLocationObjectStorageResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeLocationObjectStorageCommand = deserializeAws_json1_1DescribeLocationObjectStorageCommand;
const deserializeAws_json1_1DescribeLocationObjectStorageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.datasync#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datasync#InvalidRequestException":
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
const deserializeAws_json1_1DescribeLocationS3Command = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeLocationS3CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeLocationS3Response(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeLocationS3Command = deserializeAws_json1_1DescribeLocationS3Command;
const deserializeAws_json1_1DescribeLocationS3CommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.datasync#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datasync#InvalidRequestException":
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
const deserializeAws_json1_1DescribeLocationSmbCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeLocationSmbCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeLocationSmbResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeLocationSmbCommand = deserializeAws_json1_1DescribeLocationSmbCommand;
const deserializeAws_json1_1DescribeLocationSmbCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.datasync#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datasync#InvalidRequestException":
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
const deserializeAws_json1_1DescribeTaskCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTaskResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeTaskCommand = deserializeAws_json1_1DescribeTaskCommand;
const deserializeAws_json1_1DescribeTaskCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.datasync#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datasync#InvalidRequestException":
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
const deserializeAws_json1_1DescribeTaskExecutionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeTaskExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTaskExecutionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeTaskExecutionCommand = deserializeAws_json1_1DescribeTaskExecutionCommand;
const deserializeAws_json1_1DescribeTaskExecutionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.datasync#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datasync#InvalidRequestException":
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
const deserializeAws_json1_1ListAgentsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListAgentsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAgentsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListAgentsCommand = deserializeAws_json1_1ListAgentsCommand;
const deserializeAws_json1_1ListAgentsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.datasync#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datasync#InvalidRequestException":
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
const deserializeAws_json1_1ListLocationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListLocationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListLocationsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListLocationsCommand = deserializeAws_json1_1ListLocationsCommand;
const deserializeAws_json1_1ListLocationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.datasync#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datasync#InvalidRequestException":
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
        case "InternalException":
        case "com.amazonaws.datasync#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datasync#InvalidRequestException":
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
const deserializeAws_json1_1ListTaskExecutionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListTaskExecutionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTaskExecutionsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListTaskExecutionsCommand = deserializeAws_json1_1ListTaskExecutionsCommand;
const deserializeAws_json1_1ListTaskExecutionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.datasync#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datasync#InvalidRequestException":
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
const deserializeAws_json1_1ListTasksCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListTasksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTasksResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListTasksCommand = deserializeAws_json1_1ListTasksCommand;
const deserializeAws_json1_1ListTasksCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.datasync#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datasync#InvalidRequestException":
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
const deserializeAws_json1_1StartTaskExecutionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartTaskExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartTaskExecutionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartTaskExecutionCommand = deserializeAws_json1_1StartTaskExecutionCommand;
const deserializeAws_json1_1StartTaskExecutionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.datasync#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datasync#InvalidRequestException":
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
        case "InternalException":
        case "com.amazonaws.datasync#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datasync#InvalidRequestException":
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
        case "InternalException":
        case "com.amazonaws.datasync#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datasync#InvalidRequestException":
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
const deserializeAws_json1_1UpdateAgentCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateAgentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateAgentResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateAgentCommand = deserializeAws_json1_1UpdateAgentCommand;
const deserializeAws_json1_1UpdateAgentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.datasync#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datasync#InvalidRequestException":
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
const deserializeAws_json1_1UpdateLocationNfsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateLocationNfsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateLocationNfsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateLocationNfsCommand = deserializeAws_json1_1UpdateLocationNfsCommand;
const deserializeAws_json1_1UpdateLocationNfsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.datasync#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datasync#InvalidRequestException":
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
const deserializeAws_json1_1UpdateLocationObjectStorageCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateLocationObjectStorageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateLocationObjectStorageResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateLocationObjectStorageCommand = deserializeAws_json1_1UpdateLocationObjectStorageCommand;
const deserializeAws_json1_1UpdateLocationObjectStorageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.datasync#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datasync#InvalidRequestException":
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
const deserializeAws_json1_1UpdateLocationSmbCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateLocationSmbCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateLocationSmbResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateLocationSmbCommand = deserializeAws_json1_1UpdateLocationSmbCommand;
const deserializeAws_json1_1UpdateLocationSmbCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.datasync#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datasync#InvalidRequestException":
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
const deserializeAws_json1_1UpdateTaskCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateTaskResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateTaskCommand = deserializeAws_json1_1UpdateTaskCommand;
const deserializeAws_json1_1UpdateTaskCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.datasync#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datasync#InvalidRequestException":
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
const deserializeAws_json1_1UpdateTaskExecutionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateTaskExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateTaskExecutionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateTaskExecutionCommand = deserializeAws_json1_1UpdateTaskExecutionCommand;
const deserializeAws_json1_1UpdateTaskExecutionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.datasync#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datasync#InvalidRequestException":
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
const serializeAws_json1_1AgentArnList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1CancelTaskExecutionRequest = (input, context) => {
    return {
        ...(input.TaskExecutionArn !== undefined &&
            input.TaskExecutionArn !== null && { TaskExecutionArn: input.TaskExecutionArn }),
    };
};
const serializeAws_json1_1CreateAgentRequest = (input, context) => {
    return {
        ...(input.ActivationKey !== undefined && input.ActivationKey !== null && { ActivationKey: input.ActivationKey }),
        ...(input.AgentName !== undefined && input.AgentName !== null && { AgentName: input.AgentName }),
        ...(input.SecurityGroupArns !== undefined &&
            input.SecurityGroupArns !== null && {
            SecurityGroupArns: serializeAws_json1_1PLSecurityGroupArnList(input.SecurityGroupArns, context),
        }),
        ...(input.SubnetArns !== undefined &&
            input.SubnetArns !== null && { SubnetArns: serializeAws_json1_1PLSubnetArnList(input.SubnetArns, context) }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_json1_1InputTagList(input.Tags, context) }),
        ...(input.VpcEndpointId !== undefined && input.VpcEndpointId !== null && { VpcEndpointId: input.VpcEndpointId }),
    };
};
const serializeAws_json1_1CreateLocationEfsRequest = (input, context) => {
    return {
        ...(input.Ec2Config !== undefined &&
            input.Ec2Config !== null && { Ec2Config: serializeAws_json1_1Ec2Config(input.Ec2Config, context) }),
        ...(input.EfsFilesystemArn !== undefined &&
            input.EfsFilesystemArn !== null && { EfsFilesystemArn: input.EfsFilesystemArn }),
        ...(input.Subdirectory !== undefined && input.Subdirectory !== null && { Subdirectory: input.Subdirectory }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_json1_1InputTagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateLocationFsxWindowsRequest = (input, context) => {
    return {
        ...(input.Domain !== undefined && input.Domain !== null && { Domain: input.Domain }),
        ...(input.FsxFilesystemArn !== undefined &&
            input.FsxFilesystemArn !== null && { FsxFilesystemArn: input.FsxFilesystemArn }),
        ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
        ...(input.SecurityGroupArns !== undefined &&
            input.SecurityGroupArns !== null && {
            SecurityGroupArns: serializeAws_json1_1Ec2SecurityGroupArnList(input.SecurityGroupArns, context),
        }),
        ...(input.Subdirectory !== undefined && input.Subdirectory !== null && { Subdirectory: input.Subdirectory }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_json1_1InputTagList(input.Tags, context) }),
        ...(input.User !== undefined && input.User !== null && { User: input.User }),
    };
};
const serializeAws_json1_1CreateLocationNfsRequest = (input, context) => {
    return {
        ...(input.MountOptions !== undefined &&
            input.MountOptions !== null && {
            MountOptions: serializeAws_json1_1NfsMountOptions(input.MountOptions, context),
        }),
        ...(input.OnPremConfig !== undefined &&
            input.OnPremConfig !== null && { OnPremConfig: serializeAws_json1_1OnPremConfig(input.OnPremConfig, context) }),
        ...(input.ServerHostname !== undefined &&
            input.ServerHostname !== null && { ServerHostname: input.ServerHostname }),
        ...(input.Subdirectory !== undefined && input.Subdirectory !== null && { Subdirectory: input.Subdirectory }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_json1_1InputTagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateLocationObjectStorageRequest = (input, context) => {
    return {
        ...(input.AccessKey !== undefined && input.AccessKey !== null && { AccessKey: input.AccessKey }),
        ...(input.AgentArns !== undefined &&
            input.AgentArns !== null && { AgentArns: serializeAws_json1_1AgentArnList(input.AgentArns, context) }),
        ...(input.BucketName !== undefined && input.BucketName !== null && { BucketName: input.BucketName }),
        ...(input.SecretKey !== undefined && input.SecretKey !== null && { SecretKey: input.SecretKey }),
        ...(input.ServerHostname !== undefined &&
            input.ServerHostname !== null && { ServerHostname: input.ServerHostname }),
        ...(input.ServerPort !== undefined && input.ServerPort !== null && { ServerPort: input.ServerPort }),
        ...(input.ServerProtocol !== undefined &&
            input.ServerProtocol !== null && { ServerProtocol: input.ServerProtocol }),
        ...(input.Subdirectory !== undefined && input.Subdirectory !== null && { Subdirectory: input.Subdirectory }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_json1_1InputTagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateLocationS3Request = (input, context) => {
    return {
        ...(input.AgentArns !== undefined &&
            input.AgentArns !== null && { AgentArns: serializeAws_json1_1AgentArnList(input.AgentArns, context) }),
        ...(input.S3BucketArn !== undefined && input.S3BucketArn !== null && { S3BucketArn: input.S3BucketArn }),
        ...(input.S3Config !== undefined &&
            input.S3Config !== null && { S3Config: serializeAws_json1_1S3Config(input.S3Config, context) }),
        ...(input.S3StorageClass !== undefined &&
            input.S3StorageClass !== null && { S3StorageClass: input.S3StorageClass }),
        ...(input.Subdirectory !== undefined && input.Subdirectory !== null && { Subdirectory: input.Subdirectory }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_json1_1InputTagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateLocationSmbRequest = (input, context) => {
    return {
        ...(input.AgentArns !== undefined &&
            input.AgentArns !== null && { AgentArns: serializeAws_json1_1AgentArnList(input.AgentArns, context) }),
        ...(input.Domain !== undefined && input.Domain !== null && { Domain: input.Domain }),
        ...(input.MountOptions !== undefined &&
            input.MountOptions !== null && {
            MountOptions: serializeAws_json1_1SmbMountOptions(input.MountOptions, context),
        }),
        ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
        ...(input.ServerHostname !== undefined &&
            input.ServerHostname !== null && { ServerHostname: input.ServerHostname }),
        ...(input.Subdirectory !== undefined && input.Subdirectory !== null && { Subdirectory: input.Subdirectory }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_json1_1InputTagList(input.Tags, context) }),
        ...(input.User !== undefined && input.User !== null && { User: input.User }),
    };
};
const serializeAws_json1_1CreateTaskRequest = (input, context) => {
    return {
        ...(input.CloudWatchLogGroupArn !== undefined &&
            input.CloudWatchLogGroupArn !== null && { CloudWatchLogGroupArn: input.CloudWatchLogGroupArn }),
        ...(input.DestinationLocationArn !== undefined &&
            input.DestinationLocationArn !== null && { DestinationLocationArn: input.DestinationLocationArn }),
        ...(input.Excludes !== undefined &&
            input.Excludes !== null && { Excludes: serializeAws_json1_1FilterList(input.Excludes, context) }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Options !== undefined &&
            input.Options !== null && { Options: serializeAws_json1_1Options(input.Options, context) }),
        ...(input.Schedule !== undefined &&
            input.Schedule !== null && { Schedule: serializeAws_json1_1TaskSchedule(input.Schedule, context) }),
        ...(input.SourceLocationArn !== undefined &&
            input.SourceLocationArn !== null && { SourceLocationArn: input.SourceLocationArn }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_json1_1InputTagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1DeleteAgentRequest = (input, context) => {
    return {
        ...(input.AgentArn !== undefined && input.AgentArn !== null && { AgentArn: input.AgentArn }),
    };
};
const serializeAws_json1_1DeleteLocationRequest = (input, context) => {
    return {
        ...(input.LocationArn !== undefined && input.LocationArn !== null && { LocationArn: input.LocationArn }),
    };
};
const serializeAws_json1_1DeleteTaskRequest = (input, context) => {
    return {
        ...(input.TaskArn !== undefined && input.TaskArn !== null && { TaskArn: input.TaskArn }),
    };
};
const serializeAws_json1_1DescribeAgentRequest = (input, context) => {
    return {
        ...(input.AgentArn !== undefined && input.AgentArn !== null && { AgentArn: input.AgentArn }),
    };
};
const serializeAws_json1_1DescribeLocationEfsRequest = (input, context) => {
    return {
        ...(input.LocationArn !== undefined && input.LocationArn !== null && { LocationArn: input.LocationArn }),
    };
};
const serializeAws_json1_1DescribeLocationFsxWindowsRequest = (input, context) => {
    return {
        ...(input.LocationArn !== undefined && input.LocationArn !== null && { LocationArn: input.LocationArn }),
    };
};
const serializeAws_json1_1DescribeLocationNfsRequest = (input, context) => {
    return {
        ...(input.LocationArn !== undefined && input.LocationArn !== null && { LocationArn: input.LocationArn }),
    };
};
const serializeAws_json1_1DescribeLocationObjectStorageRequest = (input, context) => {
    return {
        ...(input.LocationArn !== undefined && input.LocationArn !== null && { LocationArn: input.LocationArn }),
    };
};
const serializeAws_json1_1DescribeLocationS3Request = (input, context) => {
    return {
        ...(input.LocationArn !== undefined && input.LocationArn !== null && { LocationArn: input.LocationArn }),
    };
};
const serializeAws_json1_1DescribeLocationSmbRequest = (input, context) => {
    return {
        ...(input.LocationArn !== undefined && input.LocationArn !== null && { LocationArn: input.LocationArn }),
    };
};
const serializeAws_json1_1DescribeTaskExecutionRequest = (input, context) => {
    return {
        ...(input.TaskExecutionArn !== undefined &&
            input.TaskExecutionArn !== null && { TaskExecutionArn: input.TaskExecutionArn }),
    };
};
const serializeAws_json1_1DescribeTaskRequest = (input, context) => {
    return {
        ...(input.TaskArn !== undefined && input.TaskArn !== null && { TaskArn: input.TaskArn }),
    };
};
const serializeAws_json1_1Ec2Config = (input, context) => {
    return {
        ...(input.SecurityGroupArns !== undefined &&
            input.SecurityGroupArns !== null && {
            SecurityGroupArns: serializeAws_json1_1Ec2SecurityGroupArnList(input.SecurityGroupArns, context),
        }),
        ...(input.SubnetArn !== undefined && input.SubnetArn !== null && { SubnetArn: input.SubnetArn }),
    };
};
const serializeAws_json1_1Ec2SecurityGroupArnList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1FilterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1FilterRule(entry, context);
    });
};
const serializeAws_json1_1FilterRule = (input, context) => {
    return {
        ...(input.FilterType !== undefined && input.FilterType !== null && { FilterType: input.FilterType }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1FilterValues = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1InputTagList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1TagListEntry(entry, context);
    });
};
const serializeAws_json1_1ListAgentsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListLocationsRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1LocationFilters(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_1ListTaskExecutionsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.TaskArn !== undefined && input.TaskArn !== null && { TaskArn: input.TaskArn }),
    };
};
const serializeAws_json1_1ListTasksRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1TaskFilters(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1LocationFilter = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Operator !== undefined && input.Operator !== null && { Operator: input.Operator }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_json1_1FilterValues(input.Values, context) }),
    };
};
const serializeAws_json1_1LocationFilters = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1LocationFilter(entry, context);
    });
};
const serializeAws_json1_1NfsMountOptions = (input, context) => {
    return {
        ...(input.Version !== undefined && input.Version !== null && { Version: input.Version }),
    };
};
const serializeAws_json1_1OnPremConfig = (input, context) => {
    return {
        ...(input.AgentArns !== undefined &&
            input.AgentArns !== null && { AgentArns: serializeAws_json1_1AgentArnList(input.AgentArns, context) }),
    };
};
const serializeAws_json1_1Options = (input, context) => {
    return {
        ...(input.Atime !== undefined && input.Atime !== null && { Atime: input.Atime }),
        ...(input.BytesPerSecond !== undefined &&
            input.BytesPerSecond !== null && { BytesPerSecond: input.BytesPerSecond }),
        ...(input.Gid !== undefined && input.Gid !== null && { Gid: input.Gid }),
        ...(input.LogLevel !== undefined && input.LogLevel !== null && { LogLevel: input.LogLevel }),
        ...(input.Mtime !== undefined && input.Mtime !== null && { Mtime: input.Mtime }),
        ...(input.OverwriteMode !== undefined && input.OverwriteMode !== null && { OverwriteMode: input.OverwriteMode }),
        ...(input.PosixPermissions !== undefined &&
            input.PosixPermissions !== null && { PosixPermissions: input.PosixPermissions }),
        ...(input.PreserveDeletedFiles !== undefined &&
            input.PreserveDeletedFiles !== null && { PreserveDeletedFiles: input.PreserveDeletedFiles }),
        ...(input.PreserveDevices !== undefined &&
            input.PreserveDevices !== null && { PreserveDevices: input.PreserveDevices }),
        ...(input.SecurityDescriptorCopyFlags !== undefined &&
            input.SecurityDescriptorCopyFlags !== null && { SecurityDescriptorCopyFlags: input.SecurityDescriptorCopyFlags }),
        ...(input.TaskQueueing !== undefined && input.TaskQueueing !== null && { TaskQueueing: input.TaskQueueing }),
        ...(input.TransferMode !== undefined && input.TransferMode !== null && { TransferMode: input.TransferMode }),
        ...(input.Uid !== undefined && input.Uid !== null && { Uid: input.Uid }),
        ...(input.VerifyMode !== undefined && input.VerifyMode !== null && { VerifyMode: input.VerifyMode }),
    };
};
const serializeAws_json1_1PLSecurityGroupArnList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1PLSubnetArnList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1S3Config = (input, context) => {
    return {
        ...(input.BucketAccessRoleArn !== undefined &&
            input.BucketAccessRoleArn !== null && { BucketAccessRoleArn: input.BucketAccessRoleArn }),
    };
};
const serializeAws_json1_1SmbMountOptions = (input, context) => {
    return {
        ...(input.Version !== undefined && input.Version !== null && { Version: input.Version }),
    };
};
const serializeAws_json1_1StartTaskExecutionRequest = (input, context) => {
    return {
        ...(input.Includes !== undefined &&
            input.Includes !== null && { Includes: serializeAws_json1_1FilterList(input.Includes, context) }),
        ...(input.OverrideOptions !== undefined &&
            input.OverrideOptions !== null && {
            OverrideOptions: serializeAws_json1_1Options(input.OverrideOptions, context),
        }),
        ...(input.TaskArn !== undefined && input.TaskArn !== null && { TaskArn: input.TaskArn }),
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
const serializeAws_json1_1TagListEntry = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1TagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_json1_1InputTagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1TaskFilter = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Operator !== undefined && input.Operator !== null && { Operator: input.Operator }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_json1_1FilterValues(input.Values, context) }),
    };
};
const serializeAws_json1_1TaskFilters = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1TaskFilter(entry, context);
    });
};
const serializeAws_json1_1TaskSchedule = (input, context) => {
    return {
        ...(input.ScheduleExpression !== undefined &&
            input.ScheduleExpression !== null && { ScheduleExpression: input.ScheduleExpression }),
    };
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    return {
        ...(input.Keys !== undefined &&
            input.Keys !== null && { Keys: serializeAws_json1_1TagKeyList(input.Keys, context) }),
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_1UpdateAgentRequest = (input, context) => {
    return {
        ...(input.AgentArn !== undefined && input.AgentArn !== null && { AgentArn: input.AgentArn }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1UpdateLocationNfsRequest = (input, context) => {
    return {
        ...(input.LocationArn !== undefined && input.LocationArn !== null && { LocationArn: input.LocationArn }),
        ...(input.MountOptions !== undefined &&
            input.MountOptions !== null && {
            MountOptions: serializeAws_json1_1NfsMountOptions(input.MountOptions, context),
        }),
        ...(input.OnPremConfig !== undefined &&
            input.OnPremConfig !== null && { OnPremConfig: serializeAws_json1_1OnPremConfig(input.OnPremConfig, context) }),
        ...(input.Subdirectory !== undefined && input.Subdirectory !== null && { Subdirectory: input.Subdirectory }),
    };
};
const serializeAws_json1_1UpdateLocationObjectStorageRequest = (input, context) => {
    return {
        ...(input.AccessKey !== undefined && input.AccessKey !== null && { AccessKey: input.AccessKey }),
        ...(input.AgentArns !== undefined &&
            input.AgentArns !== null && { AgentArns: serializeAws_json1_1AgentArnList(input.AgentArns, context) }),
        ...(input.LocationArn !== undefined && input.LocationArn !== null && { LocationArn: input.LocationArn }),
        ...(input.SecretKey !== undefined && input.SecretKey !== null && { SecretKey: input.SecretKey }),
        ...(input.ServerPort !== undefined && input.ServerPort !== null && { ServerPort: input.ServerPort }),
        ...(input.ServerProtocol !== undefined &&
            input.ServerProtocol !== null && { ServerProtocol: input.ServerProtocol }),
        ...(input.Subdirectory !== undefined && input.Subdirectory !== null && { Subdirectory: input.Subdirectory }),
    };
};
const serializeAws_json1_1UpdateLocationSmbRequest = (input, context) => {
    return {
        ...(input.AgentArns !== undefined &&
            input.AgentArns !== null && { AgentArns: serializeAws_json1_1AgentArnList(input.AgentArns, context) }),
        ...(input.Domain !== undefined && input.Domain !== null && { Domain: input.Domain }),
        ...(input.LocationArn !== undefined && input.LocationArn !== null && { LocationArn: input.LocationArn }),
        ...(input.MountOptions !== undefined &&
            input.MountOptions !== null && {
            MountOptions: serializeAws_json1_1SmbMountOptions(input.MountOptions, context),
        }),
        ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
        ...(input.Subdirectory !== undefined && input.Subdirectory !== null && { Subdirectory: input.Subdirectory }),
        ...(input.User !== undefined && input.User !== null && { User: input.User }),
    };
};
const serializeAws_json1_1UpdateTaskExecutionRequest = (input, context) => {
    return {
        ...(input.Options !== undefined &&
            input.Options !== null && { Options: serializeAws_json1_1Options(input.Options, context) }),
        ...(input.TaskExecutionArn !== undefined &&
            input.TaskExecutionArn !== null && { TaskExecutionArn: input.TaskExecutionArn }),
    };
};
const serializeAws_json1_1UpdateTaskRequest = (input, context) => {
    return {
        ...(input.CloudWatchLogGroupArn !== undefined &&
            input.CloudWatchLogGroupArn !== null && { CloudWatchLogGroupArn: input.CloudWatchLogGroupArn }),
        ...(input.Excludes !== undefined &&
            input.Excludes !== null && { Excludes: serializeAws_json1_1FilterList(input.Excludes, context) }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Options !== undefined &&
            input.Options !== null && { Options: serializeAws_json1_1Options(input.Options, context) }),
        ...(input.Schedule !== undefined &&
            input.Schedule !== null && { Schedule: serializeAws_json1_1TaskSchedule(input.Schedule, context) }),
        ...(input.TaskArn !== undefined && input.TaskArn !== null && { TaskArn: input.TaskArn }),
    };
};
const deserializeAws_json1_1AgentArnList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1AgentList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AgentListEntry(entry, context);
    });
};
const deserializeAws_json1_1AgentListEntry = (output, context) => {
    return {
        AgentArn: output.AgentArn !== undefined && output.AgentArn !== null ? output.AgentArn : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1CancelTaskExecutionResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1CreateAgentResponse = (output, context) => {
    return {
        AgentArn: output.AgentArn !== undefined && output.AgentArn !== null ? output.AgentArn : undefined,
    };
};
const deserializeAws_json1_1CreateLocationEfsResponse = (output, context) => {
    return {
        LocationArn: output.LocationArn !== undefined && output.LocationArn !== null ? output.LocationArn : undefined,
    };
};
const deserializeAws_json1_1CreateLocationFsxWindowsResponse = (output, context) => {
    return {
        LocationArn: output.LocationArn !== undefined && output.LocationArn !== null ? output.LocationArn : undefined,
    };
};
const deserializeAws_json1_1CreateLocationNfsResponse = (output, context) => {
    return {
        LocationArn: output.LocationArn !== undefined && output.LocationArn !== null ? output.LocationArn : undefined,
    };
};
const deserializeAws_json1_1CreateLocationObjectStorageResponse = (output, context) => {
    return {
        LocationArn: output.LocationArn !== undefined && output.LocationArn !== null ? output.LocationArn : undefined,
    };
};
const deserializeAws_json1_1CreateLocationS3Response = (output, context) => {
    return {
        LocationArn: output.LocationArn !== undefined && output.LocationArn !== null ? output.LocationArn : undefined,
    };
};
const deserializeAws_json1_1CreateLocationSmbResponse = (output, context) => {
    return {
        LocationArn: output.LocationArn !== undefined && output.LocationArn !== null ? output.LocationArn : undefined,
    };
};
const deserializeAws_json1_1CreateTaskResponse = (output, context) => {
    return {
        TaskArn: output.TaskArn !== undefined && output.TaskArn !== null ? output.TaskArn : undefined,
    };
};
const deserializeAws_json1_1DeleteAgentResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteLocationResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteTaskResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DescribeAgentResponse = (output, context) => {
    return {
        AgentArn: output.AgentArn !== undefined && output.AgentArn !== null ? output.AgentArn : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        EndpointType: output.EndpointType !== undefined && output.EndpointType !== null ? output.EndpointType : undefined,
        LastConnectionTime: output.LastConnectionTime !== undefined && output.LastConnectionTime !== null
            ? new Date(Math.round(output.LastConnectionTime * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        PrivateLinkConfig: output.PrivateLinkConfig !== undefined && output.PrivateLinkConfig !== null
            ? deserializeAws_json1_1PrivateLinkConfig(output.PrivateLinkConfig, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1DescribeLocationEfsResponse = (output, context) => {
    return {
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        Ec2Config: output.Ec2Config !== undefined && output.Ec2Config !== null
            ? deserializeAws_json1_1Ec2Config(output.Ec2Config, context)
            : undefined,
        LocationArn: output.LocationArn !== undefined && output.LocationArn !== null ? output.LocationArn : undefined,
        LocationUri: output.LocationUri !== undefined && output.LocationUri !== null ? output.LocationUri : undefined,
    };
};
const deserializeAws_json1_1DescribeLocationFsxWindowsResponse = (output, context) => {
    return {
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        Domain: output.Domain !== undefined && output.Domain !== null ? output.Domain : undefined,
        LocationArn: output.LocationArn !== undefined && output.LocationArn !== null ? output.LocationArn : undefined,
        LocationUri: output.LocationUri !== undefined && output.LocationUri !== null ? output.LocationUri : undefined,
        SecurityGroupArns: output.SecurityGroupArns !== undefined && output.SecurityGroupArns !== null
            ? deserializeAws_json1_1Ec2SecurityGroupArnList(output.SecurityGroupArns, context)
            : undefined,
        User: output.User !== undefined && output.User !== null ? output.User : undefined,
    };
};
const deserializeAws_json1_1DescribeLocationNfsResponse = (output, context) => {
    return {
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        LocationArn: output.LocationArn !== undefined && output.LocationArn !== null ? output.LocationArn : undefined,
        LocationUri: output.LocationUri !== undefined && output.LocationUri !== null ? output.LocationUri : undefined,
        MountOptions: output.MountOptions !== undefined && output.MountOptions !== null
            ? deserializeAws_json1_1NfsMountOptions(output.MountOptions, context)
            : undefined,
        OnPremConfig: output.OnPremConfig !== undefined && output.OnPremConfig !== null
            ? deserializeAws_json1_1OnPremConfig(output.OnPremConfig, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeLocationObjectStorageResponse = (output, context) => {
    return {
        AccessKey: output.AccessKey !== undefined && output.AccessKey !== null ? output.AccessKey : undefined,
        AgentArns: output.AgentArns !== undefined && output.AgentArns !== null
            ? deserializeAws_json1_1AgentArnList(output.AgentArns, context)
            : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        LocationArn: output.LocationArn !== undefined && output.LocationArn !== null ? output.LocationArn : undefined,
        LocationUri: output.LocationUri !== undefined && output.LocationUri !== null ? output.LocationUri : undefined,
        ServerPort: output.ServerPort !== undefined && output.ServerPort !== null ? output.ServerPort : undefined,
        ServerProtocol: output.ServerProtocol !== undefined && output.ServerProtocol !== null ? output.ServerProtocol : undefined,
    };
};
const deserializeAws_json1_1DescribeLocationS3Response = (output, context) => {
    return {
        AgentArns: output.AgentArns !== undefined && output.AgentArns !== null
            ? deserializeAws_json1_1AgentArnList(output.AgentArns, context)
            : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        LocationArn: output.LocationArn !== undefined && output.LocationArn !== null ? output.LocationArn : undefined,
        LocationUri: output.LocationUri !== undefined && output.LocationUri !== null ? output.LocationUri : undefined,
        S3Config: output.S3Config !== undefined && output.S3Config !== null
            ? deserializeAws_json1_1S3Config(output.S3Config, context)
            : undefined,
        S3StorageClass: output.S3StorageClass !== undefined && output.S3StorageClass !== null ? output.S3StorageClass : undefined,
    };
};
const deserializeAws_json1_1DescribeLocationSmbResponse = (output, context) => {
    return {
        AgentArns: output.AgentArns !== undefined && output.AgentArns !== null
            ? deserializeAws_json1_1AgentArnList(output.AgentArns, context)
            : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        Domain: output.Domain !== undefined && output.Domain !== null ? output.Domain : undefined,
        LocationArn: output.LocationArn !== undefined && output.LocationArn !== null ? output.LocationArn : undefined,
        LocationUri: output.LocationUri !== undefined && output.LocationUri !== null ? output.LocationUri : undefined,
        MountOptions: output.MountOptions !== undefined && output.MountOptions !== null
            ? deserializeAws_json1_1SmbMountOptions(output.MountOptions, context)
            : undefined,
        User: output.User !== undefined && output.User !== null ? output.User : undefined,
    };
};
const deserializeAws_json1_1DescribeTaskExecutionResponse = (output, context) => {
    return {
        BytesTransferred: output.BytesTransferred !== undefined && output.BytesTransferred !== null ? output.BytesTransferred : undefined,
        BytesWritten: output.BytesWritten !== undefined && output.BytesWritten !== null ? output.BytesWritten : undefined,
        EstimatedBytesToTransfer: output.EstimatedBytesToTransfer !== undefined && output.EstimatedBytesToTransfer !== null
            ? output.EstimatedBytesToTransfer
            : undefined,
        EstimatedFilesToTransfer: output.EstimatedFilesToTransfer !== undefined && output.EstimatedFilesToTransfer !== null
            ? output.EstimatedFilesToTransfer
            : undefined,
        Excludes: output.Excludes !== undefined && output.Excludes !== null
            ? deserializeAws_json1_1FilterList(output.Excludes, context)
            : undefined,
        FilesTransferred: output.FilesTransferred !== undefined && output.FilesTransferred !== null ? output.FilesTransferred : undefined,
        Includes: output.Includes !== undefined && output.Includes !== null
            ? deserializeAws_json1_1FilterList(output.Includes, context)
            : undefined,
        Options: output.Options !== undefined && output.Options !== null
            ? deserializeAws_json1_1Options(output.Options, context)
            : undefined,
        Result: output.Result !== undefined && output.Result !== null
            ? deserializeAws_json1_1TaskExecutionResultDetail(output.Result, context)
            : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? new Date(Math.round(output.StartTime * 1000))
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        TaskExecutionArn: output.TaskExecutionArn !== undefined && output.TaskExecutionArn !== null ? output.TaskExecutionArn : undefined,
    };
};
const deserializeAws_json1_1DescribeTaskResponse = (output, context) => {
    return {
        CloudWatchLogGroupArn: output.CloudWatchLogGroupArn !== undefined && output.CloudWatchLogGroupArn !== null
            ? output.CloudWatchLogGroupArn
            : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        CurrentTaskExecutionArn: output.CurrentTaskExecutionArn !== undefined && output.CurrentTaskExecutionArn !== null
            ? output.CurrentTaskExecutionArn
            : undefined,
        DestinationLocationArn: output.DestinationLocationArn !== undefined && output.DestinationLocationArn !== null
            ? output.DestinationLocationArn
            : undefined,
        DestinationNetworkInterfaceArns: output.DestinationNetworkInterfaceArns !== undefined && output.DestinationNetworkInterfaceArns !== null
            ? deserializeAws_json1_1DestinationNetworkInterfaceArns(output.DestinationNetworkInterfaceArns, context)
            : undefined,
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        ErrorDetail: output.ErrorDetail !== undefined && output.ErrorDetail !== null ? output.ErrorDetail : undefined,
        Excludes: output.Excludes !== undefined && output.Excludes !== null
            ? deserializeAws_json1_1FilterList(output.Excludes, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Options: output.Options !== undefined && output.Options !== null
            ? deserializeAws_json1_1Options(output.Options, context)
            : undefined,
        Schedule: output.Schedule !== undefined && output.Schedule !== null
            ? deserializeAws_json1_1TaskSchedule(output.Schedule, context)
            : undefined,
        SourceLocationArn: output.SourceLocationArn !== undefined && output.SourceLocationArn !== null
            ? output.SourceLocationArn
            : undefined,
        SourceNetworkInterfaceArns: output.SourceNetworkInterfaceArns !== undefined && output.SourceNetworkInterfaceArns !== null
            ? deserializeAws_json1_1SourceNetworkInterfaceArns(output.SourceNetworkInterfaceArns, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        TaskArn: output.TaskArn !== undefined && output.TaskArn !== null ? output.TaskArn : undefined,
    };
};
const deserializeAws_json1_1DestinationNetworkInterfaceArns = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1Ec2Config = (output, context) => {
    return {
        SecurityGroupArns: output.SecurityGroupArns !== undefined && output.SecurityGroupArns !== null
            ? deserializeAws_json1_1Ec2SecurityGroupArnList(output.SecurityGroupArns, context)
            : undefined,
        SubnetArn: output.SubnetArn !== undefined && output.SubnetArn !== null ? output.SubnetArn : undefined,
    };
};
const deserializeAws_json1_1Ec2SecurityGroupArnList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1FilterList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FilterRule(entry, context);
    });
};
const deserializeAws_json1_1FilterRule = (output, context) => {
    return {
        FilterType: output.FilterType !== undefined && output.FilterType !== null ? output.FilterType : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1InternalException = (output, context) => {
    return {
        errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidRequestException = (output, context) => {
    return {
        errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ListAgentsResponse = (output, context) => {
    return {
        Agents: output.Agents !== undefined && output.Agents !== null
            ? deserializeAws_json1_1AgentList(output.Agents, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListLocationsResponse = (output, context) => {
    return {
        Locations: output.Locations !== undefined && output.Locations !== null
            ? deserializeAws_json1_1LocationList(output.Locations, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1OutputTagList(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListTaskExecutionsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        TaskExecutions: output.TaskExecutions !== undefined && output.TaskExecutions !== null
            ? deserializeAws_json1_1TaskExecutionList(output.TaskExecutions, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListTasksResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Tasks: output.Tasks !== undefined && output.Tasks !== null
            ? deserializeAws_json1_1TaskList(output.Tasks, context)
            : undefined,
    };
};
const deserializeAws_json1_1LocationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LocationListEntry(entry, context);
    });
};
const deserializeAws_json1_1LocationListEntry = (output, context) => {
    return {
        LocationArn: output.LocationArn !== undefined && output.LocationArn !== null ? output.LocationArn : undefined,
        LocationUri: output.LocationUri !== undefined && output.LocationUri !== null ? output.LocationUri : undefined,
    };
};
const deserializeAws_json1_1NfsMountOptions = (output, context) => {
    return {
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
const deserializeAws_json1_1OnPremConfig = (output, context) => {
    return {
        AgentArns: output.AgentArns !== undefined && output.AgentArns !== null
            ? deserializeAws_json1_1AgentArnList(output.AgentArns, context)
            : undefined,
    };
};
const deserializeAws_json1_1Options = (output, context) => {
    return {
        Atime: output.Atime !== undefined && output.Atime !== null ? output.Atime : undefined,
        BytesPerSecond: output.BytesPerSecond !== undefined && output.BytesPerSecond !== null ? output.BytesPerSecond : undefined,
        Gid: output.Gid !== undefined && output.Gid !== null ? output.Gid : undefined,
        LogLevel: output.LogLevel !== undefined && output.LogLevel !== null ? output.LogLevel : undefined,
        Mtime: output.Mtime !== undefined && output.Mtime !== null ? output.Mtime : undefined,
        OverwriteMode: output.OverwriteMode !== undefined && output.OverwriteMode !== null ? output.OverwriteMode : undefined,
        PosixPermissions: output.PosixPermissions !== undefined && output.PosixPermissions !== null ? output.PosixPermissions : undefined,
        PreserveDeletedFiles: output.PreserveDeletedFiles !== undefined && output.PreserveDeletedFiles !== null
            ? output.PreserveDeletedFiles
            : undefined,
        PreserveDevices: output.PreserveDevices !== undefined && output.PreserveDevices !== null ? output.PreserveDevices : undefined,
        SecurityDescriptorCopyFlags: output.SecurityDescriptorCopyFlags !== undefined && output.SecurityDescriptorCopyFlags !== null
            ? output.SecurityDescriptorCopyFlags
            : undefined,
        TaskQueueing: output.TaskQueueing !== undefined && output.TaskQueueing !== null ? output.TaskQueueing : undefined,
        TransferMode: output.TransferMode !== undefined && output.TransferMode !== null ? output.TransferMode : undefined,
        Uid: output.Uid !== undefined && output.Uid !== null ? output.Uid : undefined,
        VerifyMode: output.VerifyMode !== undefined && output.VerifyMode !== null ? output.VerifyMode : undefined,
    };
};
const deserializeAws_json1_1OutputTagList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TagListEntry(entry, context);
    });
};
const deserializeAws_json1_1PLSecurityGroupArnList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1PLSubnetArnList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1PrivateLinkConfig = (output, context) => {
    return {
        PrivateLinkEndpoint: output.PrivateLinkEndpoint !== undefined && output.PrivateLinkEndpoint !== null
            ? output.PrivateLinkEndpoint
            : undefined,
        SecurityGroupArns: output.SecurityGroupArns !== undefined && output.SecurityGroupArns !== null
            ? deserializeAws_json1_1PLSecurityGroupArnList(output.SecurityGroupArns, context)
            : undefined,
        SubnetArns: output.SubnetArns !== undefined && output.SubnetArns !== null
            ? deserializeAws_json1_1PLSubnetArnList(output.SubnetArns, context)
            : undefined,
        VpcEndpointId: output.VpcEndpointId !== undefined && output.VpcEndpointId !== null ? output.VpcEndpointId : undefined,
    };
};
const deserializeAws_json1_1S3Config = (output, context) => {
    return {
        BucketAccessRoleArn: output.BucketAccessRoleArn !== undefined && output.BucketAccessRoleArn !== null
            ? output.BucketAccessRoleArn
            : undefined,
    };
};
const deserializeAws_json1_1SmbMountOptions = (output, context) => {
    return {
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
const deserializeAws_json1_1SourceNetworkInterfaceArns = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1StartTaskExecutionResponse = (output, context) => {
    return {
        TaskExecutionArn: output.TaskExecutionArn !== undefined && output.TaskExecutionArn !== null ? output.TaskExecutionArn : undefined,
    };
};
const deserializeAws_json1_1TagListEntry = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1TagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1TaskExecutionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TaskExecutionListEntry(entry, context);
    });
};
const deserializeAws_json1_1TaskExecutionListEntry = (output, context) => {
    return {
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        TaskExecutionArn: output.TaskExecutionArn !== undefined && output.TaskExecutionArn !== null ? output.TaskExecutionArn : undefined,
    };
};
const deserializeAws_json1_1TaskExecutionResultDetail = (output, context) => {
    return {
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        ErrorDetail: output.ErrorDetail !== undefined && output.ErrorDetail !== null ? output.ErrorDetail : undefined,
        PrepareDuration: output.PrepareDuration !== undefined && output.PrepareDuration !== null ? output.PrepareDuration : undefined,
        PrepareStatus: output.PrepareStatus !== undefined && output.PrepareStatus !== null ? output.PrepareStatus : undefined,
        TotalDuration: output.TotalDuration !== undefined && output.TotalDuration !== null ? output.TotalDuration : undefined,
        TransferDuration: output.TransferDuration !== undefined && output.TransferDuration !== null ? output.TransferDuration : undefined,
        TransferStatus: output.TransferStatus !== undefined && output.TransferStatus !== null ? output.TransferStatus : undefined,
        VerifyDuration: output.VerifyDuration !== undefined && output.VerifyDuration !== null ? output.VerifyDuration : undefined,
        VerifyStatus: output.VerifyStatus !== undefined && output.VerifyStatus !== null ? output.VerifyStatus : undefined,
    };
};
const deserializeAws_json1_1TaskList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TaskListEntry(entry, context);
    });
};
const deserializeAws_json1_1TaskListEntry = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        TaskArn: output.TaskArn !== undefined && output.TaskArn !== null ? output.TaskArn : undefined,
    };
};
const deserializeAws_json1_1TaskSchedule = (output, context) => {
    return {
        ScheduleExpression: output.ScheduleExpression !== undefined && output.ScheduleExpression !== null
            ? output.ScheduleExpression
            : undefined,
    };
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateAgentResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateLocationNfsResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateLocationObjectStorageResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateLocationSmbResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateTaskExecutionResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateTaskResponse = (output, context) => {
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