"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1ValidatePipelineDefinitionCommand = exports.deserializeAws_json1_1SetTaskStatusCommand = exports.deserializeAws_json1_1SetStatusCommand = exports.deserializeAws_json1_1ReportTaskRunnerHeartbeatCommand = exports.deserializeAws_json1_1ReportTaskProgressCommand = exports.deserializeAws_json1_1RemoveTagsCommand = exports.deserializeAws_json1_1QueryObjectsCommand = exports.deserializeAws_json1_1PutPipelineDefinitionCommand = exports.deserializeAws_json1_1PollForTaskCommand = exports.deserializeAws_json1_1ListPipelinesCommand = exports.deserializeAws_json1_1GetPipelineDefinitionCommand = exports.deserializeAws_json1_1EvaluateExpressionCommand = exports.deserializeAws_json1_1DescribePipelinesCommand = exports.deserializeAws_json1_1DescribeObjectsCommand = exports.deserializeAws_json1_1DeletePipelineCommand = exports.deserializeAws_json1_1DeactivatePipelineCommand = exports.deserializeAws_json1_1CreatePipelineCommand = exports.deserializeAws_json1_1AddTagsCommand = exports.deserializeAws_json1_1ActivatePipelineCommand = exports.serializeAws_json1_1ValidatePipelineDefinitionCommand = exports.serializeAws_json1_1SetTaskStatusCommand = exports.serializeAws_json1_1SetStatusCommand = exports.serializeAws_json1_1ReportTaskRunnerHeartbeatCommand = exports.serializeAws_json1_1ReportTaskProgressCommand = exports.serializeAws_json1_1RemoveTagsCommand = exports.serializeAws_json1_1QueryObjectsCommand = exports.serializeAws_json1_1PutPipelineDefinitionCommand = exports.serializeAws_json1_1PollForTaskCommand = exports.serializeAws_json1_1ListPipelinesCommand = exports.serializeAws_json1_1GetPipelineDefinitionCommand = exports.serializeAws_json1_1EvaluateExpressionCommand = exports.serializeAws_json1_1DescribePipelinesCommand = exports.serializeAws_json1_1DescribeObjectsCommand = exports.serializeAws_json1_1DeletePipelineCommand = exports.serializeAws_json1_1DeactivatePipelineCommand = exports.serializeAws_json1_1CreatePipelineCommand = exports.serializeAws_json1_1AddTagsCommand = exports.serializeAws_json1_1ActivatePipelineCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1ActivatePipelineCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DataPipeline.ActivatePipeline",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ActivatePipelineInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ActivatePipelineCommand = serializeAws_json1_1ActivatePipelineCommand;
const serializeAws_json1_1AddTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DataPipeline.AddTags",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AddTagsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AddTagsCommand = serializeAws_json1_1AddTagsCommand;
const serializeAws_json1_1CreatePipelineCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DataPipeline.CreatePipeline",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreatePipelineInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreatePipelineCommand = serializeAws_json1_1CreatePipelineCommand;
const serializeAws_json1_1DeactivatePipelineCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DataPipeline.DeactivatePipeline",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeactivatePipelineInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeactivatePipelineCommand = serializeAws_json1_1DeactivatePipelineCommand;
const serializeAws_json1_1DeletePipelineCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DataPipeline.DeletePipeline",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeletePipelineInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeletePipelineCommand = serializeAws_json1_1DeletePipelineCommand;
const serializeAws_json1_1DescribeObjectsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DataPipeline.DescribeObjects",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeObjectsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeObjectsCommand = serializeAws_json1_1DescribeObjectsCommand;
const serializeAws_json1_1DescribePipelinesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DataPipeline.DescribePipelines",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribePipelinesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribePipelinesCommand = serializeAws_json1_1DescribePipelinesCommand;
const serializeAws_json1_1EvaluateExpressionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DataPipeline.EvaluateExpression",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1EvaluateExpressionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1EvaluateExpressionCommand = serializeAws_json1_1EvaluateExpressionCommand;
const serializeAws_json1_1GetPipelineDefinitionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DataPipeline.GetPipelineDefinition",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetPipelineDefinitionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetPipelineDefinitionCommand = serializeAws_json1_1GetPipelineDefinitionCommand;
const serializeAws_json1_1ListPipelinesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DataPipeline.ListPipelines",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListPipelinesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListPipelinesCommand = serializeAws_json1_1ListPipelinesCommand;
const serializeAws_json1_1PollForTaskCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DataPipeline.PollForTask",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PollForTaskInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PollForTaskCommand = serializeAws_json1_1PollForTaskCommand;
const serializeAws_json1_1PutPipelineDefinitionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DataPipeline.PutPipelineDefinition",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutPipelineDefinitionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutPipelineDefinitionCommand = serializeAws_json1_1PutPipelineDefinitionCommand;
const serializeAws_json1_1QueryObjectsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DataPipeline.QueryObjects",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1QueryObjectsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1QueryObjectsCommand = serializeAws_json1_1QueryObjectsCommand;
const serializeAws_json1_1RemoveTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DataPipeline.RemoveTags",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RemoveTagsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RemoveTagsCommand = serializeAws_json1_1RemoveTagsCommand;
const serializeAws_json1_1ReportTaskProgressCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DataPipeline.ReportTaskProgress",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ReportTaskProgressInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ReportTaskProgressCommand = serializeAws_json1_1ReportTaskProgressCommand;
const serializeAws_json1_1ReportTaskRunnerHeartbeatCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DataPipeline.ReportTaskRunnerHeartbeat",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ReportTaskRunnerHeartbeatInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ReportTaskRunnerHeartbeatCommand = serializeAws_json1_1ReportTaskRunnerHeartbeatCommand;
const serializeAws_json1_1SetStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DataPipeline.SetStatus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SetStatusInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SetStatusCommand = serializeAws_json1_1SetStatusCommand;
const serializeAws_json1_1SetTaskStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DataPipeline.SetTaskStatus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SetTaskStatusInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SetTaskStatusCommand = serializeAws_json1_1SetTaskStatusCommand;
const serializeAws_json1_1ValidatePipelineDefinitionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DataPipeline.ValidatePipelineDefinition",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ValidatePipelineDefinitionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ValidatePipelineDefinitionCommand = serializeAws_json1_1ValidatePipelineDefinitionCommand;
const deserializeAws_json1_1ActivatePipelineCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ActivatePipelineCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ActivatePipelineOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ActivatePipelineCommand = deserializeAws_json1_1ActivatePipelineCommand;
const deserializeAws_json1_1ActivatePipelineCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.datapipeline#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datapipeline#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PipelineDeletedException":
        case "com.amazonaws.datapipeline#PipelineDeletedException":
            response = {
                ...(await deserializeAws_json1_1PipelineDeletedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PipelineNotFoundException":
        case "com.amazonaws.datapipeline#PipelineNotFoundException":
            response = {
                ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AddTagsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AddTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddTagsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AddTagsCommand = deserializeAws_json1_1AddTagsCommand;
const deserializeAws_json1_1AddTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.datapipeline#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datapipeline#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PipelineDeletedException":
        case "com.amazonaws.datapipeline#PipelineDeletedException":
            response = {
                ...(await deserializeAws_json1_1PipelineDeletedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PipelineNotFoundException":
        case "com.amazonaws.datapipeline#PipelineNotFoundException":
            response = {
                ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreatePipelineCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreatePipelineCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreatePipelineOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreatePipelineCommand = deserializeAws_json1_1CreatePipelineCommand;
const deserializeAws_json1_1CreatePipelineCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.datapipeline#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datapipeline#InvalidRequestException":
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
const deserializeAws_json1_1DeactivatePipelineCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeactivatePipelineCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeactivatePipelineOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeactivatePipelineCommand = deserializeAws_json1_1DeactivatePipelineCommand;
const deserializeAws_json1_1DeactivatePipelineCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.datapipeline#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datapipeline#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PipelineDeletedException":
        case "com.amazonaws.datapipeline#PipelineDeletedException":
            response = {
                ...(await deserializeAws_json1_1PipelineDeletedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PipelineNotFoundException":
        case "com.amazonaws.datapipeline#PipelineNotFoundException":
            response = {
                ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeletePipelineCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeletePipelineCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeletePipelineCommand = deserializeAws_json1_1DeletePipelineCommand;
const deserializeAws_json1_1DeletePipelineCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.datapipeline#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datapipeline#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PipelineNotFoundException":
        case "com.amazonaws.datapipeline#PipelineNotFoundException":
            response = {
                ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeObjectsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeObjectsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeObjectsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeObjectsCommand = deserializeAws_json1_1DescribeObjectsCommand;
const deserializeAws_json1_1DescribeObjectsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.datapipeline#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datapipeline#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PipelineDeletedException":
        case "com.amazonaws.datapipeline#PipelineDeletedException":
            response = {
                ...(await deserializeAws_json1_1PipelineDeletedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PipelineNotFoundException":
        case "com.amazonaws.datapipeline#PipelineNotFoundException":
            response = {
                ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribePipelinesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribePipelinesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribePipelinesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribePipelinesCommand = deserializeAws_json1_1DescribePipelinesCommand;
const deserializeAws_json1_1DescribePipelinesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.datapipeline#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datapipeline#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PipelineDeletedException":
        case "com.amazonaws.datapipeline#PipelineDeletedException":
            response = {
                ...(await deserializeAws_json1_1PipelineDeletedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PipelineNotFoundException":
        case "com.amazonaws.datapipeline#PipelineNotFoundException":
            response = {
                ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1EvaluateExpressionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1EvaluateExpressionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1EvaluateExpressionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1EvaluateExpressionCommand = deserializeAws_json1_1EvaluateExpressionCommand;
const deserializeAws_json1_1EvaluateExpressionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.datapipeline#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datapipeline#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PipelineDeletedException":
        case "com.amazonaws.datapipeline#PipelineDeletedException":
            response = {
                ...(await deserializeAws_json1_1PipelineDeletedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PipelineNotFoundException":
        case "com.amazonaws.datapipeline#PipelineNotFoundException":
            response = {
                ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TaskNotFoundException":
        case "com.amazonaws.datapipeline#TaskNotFoundException":
            response = {
                ...(await deserializeAws_json1_1TaskNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetPipelineDefinitionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetPipelineDefinitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetPipelineDefinitionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetPipelineDefinitionCommand = deserializeAws_json1_1GetPipelineDefinitionCommand;
const deserializeAws_json1_1GetPipelineDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.datapipeline#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datapipeline#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PipelineDeletedException":
        case "com.amazonaws.datapipeline#PipelineDeletedException":
            response = {
                ...(await deserializeAws_json1_1PipelineDeletedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PipelineNotFoundException":
        case "com.amazonaws.datapipeline#PipelineNotFoundException":
            response = {
                ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListPipelinesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListPipelinesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListPipelinesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListPipelinesCommand = deserializeAws_json1_1ListPipelinesCommand;
const deserializeAws_json1_1ListPipelinesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.datapipeline#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datapipeline#InvalidRequestException":
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
const deserializeAws_json1_1PollForTaskCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PollForTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PollForTaskOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PollForTaskCommand = deserializeAws_json1_1PollForTaskCommand;
const deserializeAws_json1_1PollForTaskCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.datapipeline#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datapipeline#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TaskNotFoundException":
        case "com.amazonaws.datapipeline#TaskNotFoundException":
            response = {
                ...(await deserializeAws_json1_1TaskNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1PutPipelineDefinitionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutPipelineDefinitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutPipelineDefinitionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutPipelineDefinitionCommand = deserializeAws_json1_1PutPipelineDefinitionCommand;
const deserializeAws_json1_1PutPipelineDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.datapipeline#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datapipeline#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PipelineDeletedException":
        case "com.amazonaws.datapipeline#PipelineDeletedException":
            response = {
                ...(await deserializeAws_json1_1PipelineDeletedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PipelineNotFoundException":
        case "com.amazonaws.datapipeline#PipelineNotFoundException":
            response = {
                ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1QueryObjectsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1QueryObjectsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1QueryObjectsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1QueryObjectsCommand = deserializeAws_json1_1QueryObjectsCommand;
const deserializeAws_json1_1QueryObjectsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.datapipeline#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datapipeline#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PipelineDeletedException":
        case "com.amazonaws.datapipeline#PipelineDeletedException":
            response = {
                ...(await deserializeAws_json1_1PipelineDeletedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PipelineNotFoundException":
        case "com.amazonaws.datapipeline#PipelineNotFoundException":
            response = {
                ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RemoveTagsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RemoveTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RemoveTagsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RemoveTagsCommand = deserializeAws_json1_1RemoveTagsCommand;
const deserializeAws_json1_1RemoveTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.datapipeline#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datapipeline#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PipelineDeletedException":
        case "com.amazonaws.datapipeline#PipelineDeletedException":
            response = {
                ...(await deserializeAws_json1_1PipelineDeletedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PipelineNotFoundException":
        case "com.amazonaws.datapipeline#PipelineNotFoundException":
            response = {
                ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ReportTaskProgressCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ReportTaskProgressCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ReportTaskProgressOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ReportTaskProgressCommand = deserializeAws_json1_1ReportTaskProgressCommand;
const deserializeAws_json1_1ReportTaskProgressCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.datapipeline#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datapipeline#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PipelineDeletedException":
        case "com.amazonaws.datapipeline#PipelineDeletedException":
            response = {
                ...(await deserializeAws_json1_1PipelineDeletedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PipelineNotFoundException":
        case "com.amazonaws.datapipeline#PipelineNotFoundException":
            response = {
                ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TaskNotFoundException":
        case "com.amazonaws.datapipeline#TaskNotFoundException":
            response = {
                ...(await deserializeAws_json1_1TaskNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ReportTaskRunnerHeartbeatCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ReportTaskRunnerHeartbeatCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ReportTaskRunnerHeartbeatOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ReportTaskRunnerHeartbeatCommand = deserializeAws_json1_1ReportTaskRunnerHeartbeatCommand;
const deserializeAws_json1_1ReportTaskRunnerHeartbeatCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.datapipeline#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datapipeline#InvalidRequestException":
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
const deserializeAws_json1_1SetStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SetStatusCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SetStatusCommand = deserializeAws_json1_1SetStatusCommand;
const deserializeAws_json1_1SetStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.datapipeline#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datapipeline#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PipelineDeletedException":
        case "com.amazonaws.datapipeline#PipelineDeletedException":
            response = {
                ...(await deserializeAws_json1_1PipelineDeletedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PipelineNotFoundException":
        case "com.amazonaws.datapipeline#PipelineNotFoundException":
            response = {
                ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1SetTaskStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SetTaskStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SetTaskStatusOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SetTaskStatusCommand = deserializeAws_json1_1SetTaskStatusCommand;
const deserializeAws_json1_1SetTaskStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.datapipeline#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datapipeline#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PipelineDeletedException":
        case "com.amazonaws.datapipeline#PipelineDeletedException":
            response = {
                ...(await deserializeAws_json1_1PipelineDeletedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PipelineNotFoundException":
        case "com.amazonaws.datapipeline#PipelineNotFoundException":
            response = {
                ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TaskNotFoundException":
        case "com.amazonaws.datapipeline#TaskNotFoundException":
            response = {
                ...(await deserializeAws_json1_1TaskNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ValidatePipelineDefinitionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ValidatePipelineDefinitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ValidatePipelineDefinitionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ValidatePipelineDefinitionCommand = deserializeAws_json1_1ValidatePipelineDefinitionCommand;
const deserializeAws_json1_1ValidatePipelineDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.datapipeline#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.datapipeline#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PipelineDeletedException":
        case "com.amazonaws.datapipeline#PipelineDeletedException":
            response = {
                ...(await deserializeAws_json1_1PipelineDeletedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PipelineNotFoundException":
        case "com.amazonaws.datapipeline#PipelineNotFoundException":
            response = {
                ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1InternalServiceErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServiceError(body, context);
    const contents = {
        name: "InternalServiceError",
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
const deserializeAws_json1_1PipelineDeletedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PipelineDeletedException(body, context);
    const contents = {
        name: "PipelineDeletedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1PipelineNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PipelineNotFoundException(body, context);
    const contents = {
        name: "PipelineNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TaskNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TaskNotFoundException(body, context);
    const contents = {
        name: "TaskNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1ActivatePipelineInput = (input, context) => {
    return {
        ...(input.parameterValues !== undefined &&
            input.parameterValues !== null && {
            parameterValues: serializeAws_json1_1ParameterValueList(input.parameterValues, context),
        }),
        ...(input.pipelineId !== undefined && input.pipelineId !== null && { pipelineId: input.pipelineId }),
        ...(input.startTimestamp !== undefined &&
            input.startTimestamp !== null && { startTimestamp: Math.round(input.startTimestamp.getTime() / 1000) }),
    };
};
const serializeAws_json1_1AddTagsInput = (input, context) => {
    return {
        ...(input.pipelineId !== undefined && input.pipelineId !== null && { pipelineId: input.pipelineId }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1tagList(input.tags, context) }),
    };
};
const serializeAws_json1_1CreatePipelineInput = (input, context) => {
    return {
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1tagList(input.tags, context) }),
        ...(input.uniqueId !== undefined && input.uniqueId !== null && { uniqueId: input.uniqueId }),
    };
};
const serializeAws_json1_1DeactivatePipelineInput = (input, context) => {
    return {
        ...(input.cancelActive !== undefined && input.cancelActive !== null && { cancelActive: input.cancelActive }),
        ...(input.pipelineId !== undefined && input.pipelineId !== null && { pipelineId: input.pipelineId }),
    };
};
const serializeAws_json1_1DeletePipelineInput = (input, context) => {
    return {
        ...(input.pipelineId !== undefined && input.pipelineId !== null && { pipelineId: input.pipelineId }),
    };
};
const serializeAws_json1_1DescribeObjectsInput = (input, context) => {
    return {
        ...(input.evaluateExpressions !== undefined &&
            input.evaluateExpressions !== null && { evaluateExpressions: input.evaluateExpressions }),
        ...(input.marker !== undefined && input.marker !== null && { marker: input.marker }),
        ...(input.objectIds !== undefined &&
            input.objectIds !== null && { objectIds: serializeAws_json1_1idList(input.objectIds, context) }),
        ...(input.pipelineId !== undefined && input.pipelineId !== null && { pipelineId: input.pipelineId }),
    };
};
const serializeAws_json1_1DescribePipelinesInput = (input, context) => {
    return {
        ...(input.pipelineIds !== undefined &&
            input.pipelineIds !== null && { pipelineIds: serializeAws_json1_1idList(input.pipelineIds, context) }),
    };
};
const serializeAws_json1_1EvaluateExpressionInput = (input, context) => {
    return {
        ...(input.expression !== undefined && input.expression !== null && { expression: input.expression }),
        ...(input.objectId !== undefined && input.objectId !== null && { objectId: input.objectId }),
        ...(input.pipelineId !== undefined && input.pipelineId !== null && { pipelineId: input.pipelineId }),
    };
};
const serializeAws_json1_1Field = (input, context) => {
    return {
        ...(input.key !== undefined && input.key !== null && { key: input.key }),
        ...(input.refValue !== undefined && input.refValue !== null && { refValue: input.refValue }),
        ...(input.stringValue !== undefined && input.stringValue !== null && { stringValue: input.stringValue }),
    };
};
const serializeAws_json1_1fieldList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Field(entry, context);
    });
};
const serializeAws_json1_1GetPipelineDefinitionInput = (input, context) => {
    return {
        ...(input.pipelineId !== undefined && input.pipelineId !== null && { pipelineId: input.pipelineId }),
        ...(input.version !== undefined && input.version !== null && { version: input.version }),
    };
};
const serializeAws_json1_1idList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1InstanceIdentity = (input, context) => {
    return {
        ...(input.document !== undefined && input.document !== null && { document: input.document }),
        ...(input.signature !== undefined && input.signature !== null && { signature: input.signature }),
    };
};
const serializeAws_json1_1ListPipelinesInput = (input, context) => {
    return {
        ...(input.marker !== undefined && input.marker !== null && { marker: input.marker }),
    };
};
const serializeAws_json1_1Operator = (input, context) => {
    return {
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
        ...(input.values !== undefined &&
            input.values !== null && { values: serializeAws_json1_1stringList(input.values, context) }),
    };
};
const serializeAws_json1_1ParameterAttribute = (input, context) => {
    return {
        ...(input.key !== undefined && input.key !== null && { key: input.key }),
        ...(input.stringValue !== undefined && input.stringValue !== null && { stringValue: input.stringValue }),
    };
};
const serializeAws_json1_1ParameterAttributeList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ParameterAttribute(entry, context);
    });
};
const serializeAws_json1_1ParameterObject = (input, context) => {
    return {
        ...(input.attributes !== undefined &&
            input.attributes !== null && {
            attributes: serializeAws_json1_1ParameterAttributeList(input.attributes, context),
        }),
        ...(input.id !== undefined && input.id !== null && { id: input.id }),
    };
};
const serializeAws_json1_1ParameterObjectList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ParameterObject(entry, context);
    });
};
const serializeAws_json1_1ParameterValue = (input, context) => {
    return {
        ...(input.id !== undefined && input.id !== null && { id: input.id }),
        ...(input.stringValue !== undefined && input.stringValue !== null && { stringValue: input.stringValue }),
    };
};
const serializeAws_json1_1ParameterValueList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ParameterValue(entry, context);
    });
};
const serializeAws_json1_1PipelineObject = (input, context) => {
    return {
        ...(input.fields !== undefined &&
            input.fields !== null && { fields: serializeAws_json1_1fieldList(input.fields, context) }),
        ...(input.id !== undefined && input.id !== null && { id: input.id }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
    };
};
const serializeAws_json1_1PipelineObjectList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1PipelineObject(entry, context);
    });
};
const serializeAws_json1_1PollForTaskInput = (input, context) => {
    return {
        ...(input.hostname !== undefined && input.hostname !== null && { hostname: input.hostname }),
        ...(input.instanceIdentity !== undefined &&
            input.instanceIdentity !== null && {
            instanceIdentity: serializeAws_json1_1InstanceIdentity(input.instanceIdentity, context),
        }),
        ...(input.workerGroup !== undefined && input.workerGroup !== null && { workerGroup: input.workerGroup }),
    };
};
const serializeAws_json1_1PutPipelineDefinitionInput = (input, context) => {
    return {
        ...(input.parameterObjects !== undefined &&
            input.parameterObjects !== null && {
            parameterObjects: serializeAws_json1_1ParameterObjectList(input.parameterObjects, context),
        }),
        ...(input.parameterValues !== undefined &&
            input.parameterValues !== null && {
            parameterValues: serializeAws_json1_1ParameterValueList(input.parameterValues, context),
        }),
        ...(input.pipelineId !== undefined && input.pipelineId !== null && { pipelineId: input.pipelineId }),
        ...(input.pipelineObjects !== undefined &&
            input.pipelineObjects !== null && {
            pipelineObjects: serializeAws_json1_1PipelineObjectList(input.pipelineObjects, context),
        }),
    };
};
const serializeAws_json1_1Query = (input, context) => {
    return {
        ...(input.selectors !== undefined &&
            input.selectors !== null && { selectors: serializeAws_json1_1SelectorList(input.selectors, context) }),
    };
};
const serializeAws_json1_1QueryObjectsInput = (input, context) => {
    return {
        ...(input.limit !== undefined && input.limit !== null && { limit: input.limit }),
        ...(input.marker !== undefined && input.marker !== null && { marker: input.marker }),
        ...(input.pipelineId !== undefined && input.pipelineId !== null && { pipelineId: input.pipelineId }),
        ...(input.query !== undefined &&
            input.query !== null && { query: serializeAws_json1_1Query(input.query, context) }),
        ...(input.sphere !== undefined && input.sphere !== null && { sphere: input.sphere }),
    };
};
const serializeAws_json1_1RemoveTagsInput = (input, context) => {
    return {
        ...(input.pipelineId !== undefined && input.pipelineId !== null && { pipelineId: input.pipelineId }),
        ...(input.tagKeys !== undefined &&
            input.tagKeys !== null && { tagKeys: serializeAws_json1_1stringList(input.tagKeys, context) }),
    };
};
const serializeAws_json1_1ReportTaskProgressInput = (input, context) => {
    return {
        ...(input.fields !== undefined &&
            input.fields !== null && { fields: serializeAws_json1_1fieldList(input.fields, context) }),
        ...(input.taskId !== undefined && input.taskId !== null && { taskId: input.taskId }),
    };
};
const serializeAws_json1_1ReportTaskRunnerHeartbeatInput = (input, context) => {
    return {
        ...(input.hostname !== undefined && input.hostname !== null && { hostname: input.hostname }),
        ...(input.taskrunnerId !== undefined && input.taskrunnerId !== null && { taskrunnerId: input.taskrunnerId }),
        ...(input.workerGroup !== undefined && input.workerGroup !== null && { workerGroup: input.workerGroup }),
    };
};
const serializeAws_json1_1Selector = (input, context) => {
    return {
        ...(input.fieldName !== undefined && input.fieldName !== null && { fieldName: input.fieldName }),
        ...(input.operator !== undefined &&
            input.operator !== null && { operator: serializeAws_json1_1Operator(input.operator, context) }),
    };
};
const serializeAws_json1_1SelectorList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Selector(entry, context);
    });
};
const serializeAws_json1_1SetStatusInput = (input, context) => {
    return {
        ...(input.objectIds !== undefined &&
            input.objectIds !== null && { objectIds: serializeAws_json1_1idList(input.objectIds, context) }),
        ...(input.pipelineId !== undefined && input.pipelineId !== null && { pipelineId: input.pipelineId }),
        ...(input.status !== undefined && input.status !== null && { status: input.status }),
    };
};
const serializeAws_json1_1SetTaskStatusInput = (input, context) => {
    return {
        ...(input.errorId !== undefined && input.errorId !== null && { errorId: input.errorId }),
        ...(input.errorMessage !== undefined && input.errorMessage !== null && { errorMessage: input.errorMessage }),
        ...(input.errorStackTrace !== undefined &&
            input.errorStackTrace !== null && { errorStackTrace: input.errorStackTrace }),
        ...(input.taskId !== undefined && input.taskId !== null && { taskId: input.taskId }),
        ...(input.taskStatus !== undefined && input.taskStatus !== null && { taskStatus: input.taskStatus }),
    };
};
const serializeAws_json1_1stringList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1Tag = (input, context) => {
    return {
        ...(input.key !== undefined && input.key !== null && { key: input.key }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_json1_1tagList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Tag(entry, context);
    });
};
const serializeAws_json1_1ValidatePipelineDefinitionInput = (input, context) => {
    return {
        ...(input.parameterObjects !== undefined &&
            input.parameterObjects !== null && {
            parameterObjects: serializeAws_json1_1ParameterObjectList(input.parameterObjects, context),
        }),
        ...(input.parameterValues !== undefined &&
            input.parameterValues !== null && {
            parameterValues: serializeAws_json1_1ParameterValueList(input.parameterValues, context),
        }),
        ...(input.pipelineId !== undefined && input.pipelineId !== null && { pipelineId: input.pipelineId }),
        ...(input.pipelineObjects !== undefined &&
            input.pipelineObjects !== null && {
            pipelineObjects: serializeAws_json1_1PipelineObjectList(input.pipelineObjects, context),
        }),
    };
};
const deserializeAws_json1_1ActivatePipelineOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1AddTagsOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1CreatePipelineOutput = (output, context) => {
    return {
        pipelineId: output.pipelineId !== undefined && output.pipelineId !== null ? output.pipelineId : undefined,
    };
};
const deserializeAws_json1_1DeactivatePipelineOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1DescribeObjectsOutput = (output, context) => {
    return {
        hasMoreResults: output.hasMoreResults !== undefined && output.hasMoreResults !== null ? output.hasMoreResults : undefined,
        marker: output.marker !== undefined && output.marker !== null ? output.marker : undefined,
        pipelineObjects: output.pipelineObjects !== undefined && output.pipelineObjects !== null
            ? deserializeAws_json1_1PipelineObjectList(output.pipelineObjects, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribePipelinesOutput = (output, context) => {
    return {
        pipelineDescriptionList: output.pipelineDescriptionList !== undefined && output.pipelineDescriptionList !== null
            ? deserializeAws_json1_1PipelineDescriptionList(output.pipelineDescriptionList, context)
            : undefined,
    };
};
const deserializeAws_json1_1EvaluateExpressionOutput = (output, context) => {
    return {
        evaluatedExpression: output.evaluatedExpression !== undefined && output.evaluatedExpression !== null
            ? output.evaluatedExpression
            : undefined,
    };
};
const deserializeAws_json1_1Field = (output, context) => {
    return {
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        refValue: output.refValue !== undefined && output.refValue !== null ? output.refValue : undefined,
        stringValue: output.stringValue !== undefined && output.stringValue !== null ? output.stringValue : undefined,
    };
};
const deserializeAws_json1_1fieldList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Field(entry, context);
    });
};
const deserializeAws_json1_1GetPipelineDefinitionOutput = (output, context) => {
    return {
        parameterObjects: output.parameterObjects !== undefined && output.parameterObjects !== null
            ? deserializeAws_json1_1ParameterObjectList(output.parameterObjects, context)
            : undefined,
        parameterValues: output.parameterValues !== undefined && output.parameterValues !== null
            ? deserializeAws_json1_1ParameterValueList(output.parameterValues, context)
            : undefined,
        pipelineObjects: output.pipelineObjects !== undefined && output.pipelineObjects !== null
            ? deserializeAws_json1_1PipelineObjectList(output.pipelineObjects, context)
            : undefined,
    };
};
const deserializeAws_json1_1idList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1InternalServiceError = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidRequestException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ListPipelinesOutput = (output, context) => {
    return {
        hasMoreResults: output.hasMoreResults !== undefined && output.hasMoreResults !== null ? output.hasMoreResults : undefined,
        marker: output.marker !== undefined && output.marker !== null ? output.marker : undefined,
        pipelineIdList: output.pipelineIdList !== undefined && output.pipelineIdList !== null
            ? deserializeAws_json1_1pipelineList(output.pipelineIdList, context)
            : undefined,
    };
};
const deserializeAws_json1_1ParameterAttribute = (output, context) => {
    return {
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        stringValue: output.stringValue !== undefined && output.stringValue !== null ? output.stringValue : undefined,
    };
};
const deserializeAws_json1_1ParameterAttributeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ParameterAttribute(entry, context);
    });
};
const deserializeAws_json1_1ParameterObject = (output, context) => {
    return {
        attributes: output.attributes !== undefined && output.attributes !== null
            ? deserializeAws_json1_1ParameterAttributeList(output.attributes, context)
            : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
    };
};
const deserializeAws_json1_1ParameterObjectList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ParameterObject(entry, context);
    });
};
const deserializeAws_json1_1ParameterValue = (output, context) => {
    return {
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        stringValue: output.stringValue !== undefined && output.stringValue !== null ? output.stringValue : undefined,
    };
};
const deserializeAws_json1_1ParameterValueList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ParameterValue(entry, context);
    });
};
const deserializeAws_json1_1PipelineDeletedException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1PipelineDescription = (output, context) => {
    return {
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        fields: output.fields !== undefined && output.fields !== null
            ? deserializeAws_json1_1fieldList(output.fields, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        pipelineId: output.pipelineId !== undefined && output.pipelineId !== null ? output.pipelineId : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_json1_1tagList(output.tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1PipelineDescriptionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PipelineDescription(entry, context);
    });
};
const deserializeAws_json1_1PipelineIdName = (output, context) => {
    return {
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_json1_1pipelineList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PipelineIdName(entry, context);
    });
};
const deserializeAws_json1_1PipelineNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1PipelineObject = (output, context) => {
    return {
        fields: output.fields !== undefined && output.fields !== null
            ? deserializeAws_json1_1fieldList(output.fields, context)
            : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_json1_1PipelineObjectList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PipelineObject(entry, context);
    });
};
const deserializeAws_json1_1PipelineObjectMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_1PipelineObject(value, context),
        };
    }, {});
};
const deserializeAws_json1_1PollForTaskOutput = (output, context) => {
    return {
        taskObject: output.taskObject !== undefined && output.taskObject !== null
            ? deserializeAws_json1_1TaskObject(output.taskObject, context)
            : undefined,
    };
};
const deserializeAws_json1_1PutPipelineDefinitionOutput = (output, context) => {
    return {
        errored: output.errored !== undefined && output.errored !== null ? output.errored : undefined,
        validationErrors: output.validationErrors !== undefined && output.validationErrors !== null
            ? deserializeAws_json1_1ValidationErrors(output.validationErrors, context)
            : undefined,
        validationWarnings: output.validationWarnings !== undefined && output.validationWarnings !== null
            ? deserializeAws_json1_1ValidationWarnings(output.validationWarnings, context)
            : undefined,
    };
};
const deserializeAws_json1_1QueryObjectsOutput = (output, context) => {
    return {
        hasMoreResults: output.hasMoreResults !== undefined && output.hasMoreResults !== null ? output.hasMoreResults : undefined,
        ids: output.ids !== undefined && output.ids !== null ? deserializeAws_json1_1idList(output.ids, context) : undefined,
        marker: output.marker !== undefined && output.marker !== null ? output.marker : undefined,
    };
};
const deserializeAws_json1_1RemoveTagsOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1ReportTaskProgressOutput = (output, context) => {
    return {
        canceled: output.canceled !== undefined && output.canceled !== null ? output.canceled : undefined,
    };
};
const deserializeAws_json1_1ReportTaskRunnerHeartbeatOutput = (output, context) => {
    return {
        terminate: output.terminate !== undefined && output.terminate !== null ? output.terminate : undefined,
    };
};
const deserializeAws_json1_1SetTaskStatusOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1Tag = (output, context) => {
    return {
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_json1_1tagList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Tag(entry, context);
    });
};
const deserializeAws_json1_1TaskNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1TaskObject = (output, context) => {
    return {
        attemptId: output.attemptId !== undefined && output.attemptId !== null ? output.attemptId : undefined,
        objects: output.objects !== undefined && output.objects !== null
            ? deserializeAws_json1_1PipelineObjectMap(output.objects, context)
            : undefined,
        pipelineId: output.pipelineId !== undefined && output.pipelineId !== null ? output.pipelineId : undefined,
        taskId: output.taskId !== undefined && output.taskId !== null ? output.taskId : undefined,
    };
};
const deserializeAws_json1_1ValidatePipelineDefinitionOutput = (output, context) => {
    return {
        errored: output.errored !== undefined && output.errored !== null ? output.errored : undefined,
        validationErrors: output.validationErrors !== undefined && output.validationErrors !== null
            ? deserializeAws_json1_1ValidationErrors(output.validationErrors, context)
            : undefined,
        validationWarnings: output.validationWarnings !== undefined && output.validationWarnings !== null
            ? deserializeAws_json1_1ValidationWarnings(output.validationWarnings, context)
            : undefined,
    };
};
const deserializeAws_json1_1ValidationError = (output, context) => {
    return {
        errors: output.errors !== undefined && output.errors !== null
            ? deserializeAws_json1_1validationMessages(output.errors, context)
            : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
    };
};
const deserializeAws_json1_1ValidationErrors = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ValidationError(entry, context);
    });
};
const deserializeAws_json1_1validationMessages = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ValidationWarning = (output, context) => {
    return {
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        warnings: output.warnings !== undefined && output.warnings !== null
            ? deserializeAws_json1_1validationMessages(output.warnings, context)
            : undefined,
    };
};
const deserializeAws_json1_1ValidationWarnings = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ValidationWarning(entry, context);
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