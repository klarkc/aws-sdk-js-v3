"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_0UpdateStateMachineCommand = exports.deserializeAws_json1_0UntagResourceCommand = exports.deserializeAws_json1_0TagResourceCommand = exports.deserializeAws_json1_0StopExecutionCommand = exports.deserializeAws_json1_0StartSyncExecutionCommand = exports.deserializeAws_json1_0StartExecutionCommand = exports.deserializeAws_json1_0SendTaskSuccessCommand = exports.deserializeAws_json1_0SendTaskHeartbeatCommand = exports.deserializeAws_json1_0SendTaskFailureCommand = exports.deserializeAws_json1_0ListTagsForResourceCommand = exports.deserializeAws_json1_0ListStateMachinesCommand = exports.deserializeAws_json1_0ListExecutionsCommand = exports.deserializeAws_json1_0ListActivitiesCommand = exports.deserializeAws_json1_0GetExecutionHistoryCommand = exports.deserializeAws_json1_0GetActivityTaskCommand = exports.deserializeAws_json1_0DescribeStateMachineForExecutionCommand = exports.deserializeAws_json1_0DescribeStateMachineCommand = exports.deserializeAws_json1_0DescribeExecutionCommand = exports.deserializeAws_json1_0DescribeActivityCommand = exports.deserializeAws_json1_0DeleteStateMachineCommand = exports.deserializeAws_json1_0DeleteActivityCommand = exports.deserializeAws_json1_0CreateStateMachineCommand = exports.deserializeAws_json1_0CreateActivityCommand = exports.serializeAws_json1_0UpdateStateMachineCommand = exports.serializeAws_json1_0UntagResourceCommand = exports.serializeAws_json1_0TagResourceCommand = exports.serializeAws_json1_0StopExecutionCommand = exports.serializeAws_json1_0StartSyncExecutionCommand = exports.serializeAws_json1_0StartExecutionCommand = exports.serializeAws_json1_0SendTaskSuccessCommand = exports.serializeAws_json1_0SendTaskHeartbeatCommand = exports.serializeAws_json1_0SendTaskFailureCommand = exports.serializeAws_json1_0ListTagsForResourceCommand = exports.serializeAws_json1_0ListStateMachinesCommand = exports.serializeAws_json1_0ListExecutionsCommand = exports.serializeAws_json1_0ListActivitiesCommand = exports.serializeAws_json1_0GetExecutionHistoryCommand = exports.serializeAws_json1_0GetActivityTaskCommand = exports.serializeAws_json1_0DescribeStateMachineForExecutionCommand = exports.serializeAws_json1_0DescribeStateMachineCommand = exports.serializeAws_json1_0DescribeExecutionCommand = exports.serializeAws_json1_0DescribeActivityCommand = exports.serializeAws_json1_0DeleteStateMachineCommand = exports.serializeAws_json1_0DeleteActivityCommand = exports.serializeAws_json1_0CreateStateMachineCommand = exports.serializeAws_json1_0CreateActivityCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_0CreateActivityCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AWSStepFunctions.CreateActivity",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0CreateActivityInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0CreateActivityCommand = serializeAws_json1_0CreateActivityCommand;
const serializeAws_json1_0CreateStateMachineCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AWSStepFunctions.CreateStateMachine",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0CreateStateMachineInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0CreateStateMachineCommand = serializeAws_json1_0CreateStateMachineCommand;
const serializeAws_json1_0DeleteActivityCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AWSStepFunctions.DeleteActivity",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DeleteActivityInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DeleteActivityCommand = serializeAws_json1_0DeleteActivityCommand;
const serializeAws_json1_0DeleteStateMachineCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AWSStepFunctions.DeleteStateMachine",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DeleteStateMachineInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DeleteStateMachineCommand = serializeAws_json1_0DeleteStateMachineCommand;
const serializeAws_json1_0DescribeActivityCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AWSStepFunctions.DescribeActivity",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeActivityInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DescribeActivityCommand = serializeAws_json1_0DescribeActivityCommand;
const serializeAws_json1_0DescribeExecutionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AWSStepFunctions.DescribeExecution",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeExecutionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DescribeExecutionCommand = serializeAws_json1_0DescribeExecutionCommand;
const serializeAws_json1_0DescribeStateMachineCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AWSStepFunctions.DescribeStateMachine",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeStateMachineInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DescribeStateMachineCommand = serializeAws_json1_0DescribeStateMachineCommand;
const serializeAws_json1_0DescribeStateMachineForExecutionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AWSStepFunctions.DescribeStateMachineForExecution",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeStateMachineForExecutionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DescribeStateMachineForExecutionCommand = serializeAws_json1_0DescribeStateMachineForExecutionCommand;
const serializeAws_json1_0GetActivityTaskCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AWSStepFunctions.GetActivityTask",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0GetActivityTaskInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0GetActivityTaskCommand = serializeAws_json1_0GetActivityTaskCommand;
const serializeAws_json1_0GetExecutionHistoryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AWSStepFunctions.GetExecutionHistory",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0GetExecutionHistoryInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0GetExecutionHistoryCommand = serializeAws_json1_0GetExecutionHistoryCommand;
const serializeAws_json1_0ListActivitiesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AWSStepFunctions.ListActivities",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ListActivitiesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ListActivitiesCommand = serializeAws_json1_0ListActivitiesCommand;
const serializeAws_json1_0ListExecutionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AWSStepFunctions.ListExecutions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ListExecutionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ListExecutionsCommand = serializeAws_json1_0ListExecutionsCommand;
const serializeAws_json1_0ListStateMachinesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AWSStepFunctions.ListStateMachines",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ListStateMachinesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ListStateMachinesCommand = serializeAws_json1_0ListStateMachinesCommand;
const serializeAws_json1_0ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AWSStepFunctions.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ListTagsForResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ListTagsForResourceCommand = serializeAws_json1_0ListTagsForResourceCommand;
const serializeAws_json1_0SendTaskFailureCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AWSStepFunctions.SendTaskFailure",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0SendTaskFailureInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0SendTaskFailureCommand = serializeAws_json1_0SendTaskFailureCommand;
const serializeAws_json1_0SendTaskHeartbeatCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AWSStepFunctions.SendTaskHeartbeat",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0SendTaskHeartbeatInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0SendTaskHeartbeatCommand = serializeAws_json1_0SendTaskHeartbeatCommand;
const serializeAws_json1_0SendTaskSuccessCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AWSStepFunctions.SendTaskSuccess",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0SendTaskSuccessInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0SendTaskSuccessCommand = serializeAws_json1_0SendTaskSuccessCommand;
const serializeAws_json1_0StartExecutionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AWSStepFunctions.StartExecution",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0StartExecutionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0StartExecutionCommand = serializeAws_json1_0StartExecutionCommand;
const serializeAws_json1_0StartSyncExecutionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AWSStepFunctions.StartSyncExecution",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0StartSyncExecutionInput(input, context));
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "sync-" + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return buildHttpRpcRequest(context, headers, "/", resolvedHostname, body);
};
exports.serializeAws_json1_0StartSyncExecutionCommand = serializeAws_json1_0StartSyncExecutionCommand;
const serializeAws_json1_0StopExecutionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AWSStepFunctions.StopExecution",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0StopExecutionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0StopExecutionCommand = serializeAws_json1_0StopExecutionCommand;
const serializeAws_json1_0TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AWSStepFunctions.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0TagResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0TagResourceCommand = serializeAws_json1_0TagResourceCommand;
const serializeAws_json1_0UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AWSStepFunctions.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0UntagResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0UntagResourceCommand = serializeAws_json1_0UntagResourceCommand;
const serializeAws_json1_0UpdateStateMachineCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AWSStepFunctions.UpdateStateMachine",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0UpdateStateMachineInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0UpdateStateMachineCommand = serializeAws_json1_0UpdateStateMachineCommand;
const deserializeAws_json1_0CreateActivityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0CreateActivityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0CreateActivityOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0CreateActivityCommand = deserializeAws_json1_0CreateActivityCommand;
const deserializeAws_json1_0CreateActivityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ActivityLimitExceeded":
        case "com.amazonaws.sfn#ActivityLimitExceeded":
            response = {
                ...(await deserializeAws_json1_0ActivityLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidName":
        case "com.amazonaws.sfn#InvalidName":
            response = {
                ...(await deserializeAws_json1_0InvalidNameResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTags":
        case "com.amazonaws.sfn#TooManyTags":
            response = {
                ...(await deserializeAws_json1_0TooManyTagsResponse(parsedOutput, context)),
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
const deserializeAws_json1_0CreateStateMachineCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0CreateStateMachineCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0CreateStateMachineOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0CreateStateMachineCommand = deserializeAws_json1_0CreateStateMachineCommand;
const deserializeAws_json1_0CreateStateMachineCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArn":
        case "com.amazonaws.sfn#InvalidArn":
            response = {
                ...(await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDefinition":
        case "com.amazonaws.sfn#InvalidDefinition":
            response = {
                ...(await deserializeAws_json1_0InvalidDefinitionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidLoggingConfiguration":
        case "com.amazonaws.sfn#InvalidLoggingConfiguration":
            response = {
                ...(await deserializeAws_json1_0InvalidLoggingConfigurationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidName":
        case "com.amazonaws.sfn#InvalidName":
            response = {
                ...(await deserializeAws_json1_0InvalidNameResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTracingConfiguration":
        case "com.amazonaws.sfn#InvalidTracingConfiguration":
            response = {
                ...(await deserializeAws_json1_0InvalidTracingConfigurationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StateMachineAlreadyExists":
        case "com.amazonaws.sfn#StateMachineAlreadyExists":
            response = {
                ...(await deserializeAws_json1_0StateMachineAlreadyExistsResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StateMachineDeleting":
        case "com.amazonaws.sfn#StateMachineDeleting":
            response = {
                ...(await deserializeAws_json1_0StateMachineDeletingResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StateMachineLimitExceeded":
        case "com.amazonaws.sfn#StateMachineLimitExceeded":
            response = {
                ...(await deserializeAws_json1_0StateMachineLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StateMachineTypeNotSupported":
        case "com.amazonaws.sfn#StateMachineTypeNotSupported":
            response = {
                ...(await deserializeAws_json1_0StateMachineTypeNotSupportedResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTags":
        case "com.amazonaws.sfn#TooManyTags":
            response = {
                ...(await deserializeAws_json1_0TooManyTagsResponse(parsedOutput, context)),
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
const deserializeAws_json1_0DeleteActivityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DeleteActivityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DeleteActivityOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DeleteActivityCommand = deserializeAws_json1_0DeleteActivityCommand;
const deserializeAws_json1_0DeleteActivityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArn":
        case "com.amazonaws.sfn#InvalidArn":
            response = {
                ...(await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)),
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
const deserializeAws_json1_0DeleteStateMachineCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DeleteStateMachineCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DeleteStateMachineOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DeleteStateMachineCommand = deserializeAws_json1_0DeleteStateMachineCommand;
const deserializeAws_json1_0DeleteStateMachineCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArn":
        case "com.amazonaws.sfn#InvalidArn":
            response = {
                ...(await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)),
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
const deserializeAws_json1_0DescribeActivityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DescribeActivityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeActivityOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DescribeActivityCommand = deserializeAws_json1_0DescribeActivityCommand;
const deserializeAws_json1_0DescribeActivityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ActivityDoesNotExist":
        case "com.amazonaws.sfn#ActivityDoesNotExist":
            response = {
                ...(await deserializeAws_json1_0ActivityDoesNotExistResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArn":
        case "com.amazonaws.sfn#InvalidArn":
            response = {
                ...(await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)),
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
const deserializeAws_json1_0DescribeExecutionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DescribeExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeExecutionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DescribeExecutionCommand = deserializeAws_json1_0DescribeExecutionCommand;
const deserializeAws_json1_0DescribeExecutionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExecutionDoesNotExist":
        case "com.amazonaws.sfn#ExecutionDoesNotExist":
            response = {
                ...(await deserializeAws_json1_0ExecutionDoesNotExistResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArn":
        case "com.amazonaws.sfn#InvalidArn":
            response = {
                ...(await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)),
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
const deserializeAws_json1_0DescribeStateMachineCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DescribeStateMachineCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeStateMachineOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DescribeStateMachineCommand = deserializeAws_json1_0DescribeStateMachineCommand;
const deserializeAws_json1_0DescribeStateMachineCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArn":
        case "com.amazonaws.sfn#InvalidArn":
            response = {
                ...(await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StateMachineDoesNotExist":
        case "com.amazonaws.sfn#StateMachineDoesNotExist":
            response = {
                ...(await deserializeAws_json1_0StateMachineDoesNotExistResponse(parsedOutput, context)),
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
const deserializeAws_json1_0DescribeStateMachineForExecutionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DescribeStateMachineForExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeStateMachineForExecutionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DescribeStateMachineForExecutionCommand = deserializeAws_json1_0DescribeStateMachineForExecutionCommand;
const deserializeAws_json1_0DescribeStateMachineForExecutionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExecutionDoesNotExist":
        case "com.amazonaws.sfn#ExecutionDoesNotExist":
            response = {
                ...(await deserializeAws_json1_0ExecutionDoesNotExistResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArn":
        case "com.amazonaws.sfn#InvalidArn":
            response = {
                ...(await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)),
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
const deserializeAws_json1_0GetActivityTaskCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0GetActivityTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0GetActivityTaskOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0GetActivityTaskCommand = deserializeAws_json1_0GetActivityTaskCommand;
const deserializeAws_json1_0GetActivityTaskCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ActivityDoesNotExist":
        case "com.amazonaws.sfn#ActivityDoesNotExist":
            response = {
                ...(await deserializeAws_json1_0ActivityDoesNotExistResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ActivityWorkerLimitExceeded":
        case "com.amazonaws.sfn#ActivityWorkerLimitExceeded":
            response = {
                ...(await deserializeAws_json1_0ActivityWorkerLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArn":
        case "com.amazonaws.sfn#InvalidArn":
            response = {
                ...(await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)),
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
const deserializeAws_json1_0GetExecutionHistoryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0GetExecutionHistoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0GetExecutionHistoryOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0GetExecutionHistoryCommand = deserializeAws_json1_0GetExecutionHistoryCommand;
const deserializeAws_json1_0GetExecutionHistoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExecutionDoesNotExist":
        case "com.amazonaws.sfn#ExecutionDoesNotExist":
            response = {
                ...(await deserializeAws_json1_0ExecutionDoesNotExistResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArn":
        case "com.amazonaws.sfn#InvalidArn":
            response = {
                ...(await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidToken":
        case "com.amazonaws.sfn#InvalidToken":
            response = {
                ...(await deserializeAws_json1_0InvalidTokenResponse(parsedOutput, context)),
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
const deserializeAws_json1_0ListActivitiesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0ListActivitiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ListActivitiesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0ListActivitiesCommand = deserializeAws_json1_0ListActivitiesCommand;
const deserializeAws_json1_0ListActivitiesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidToken":
        case "com.amazonaws.sfn#InvalidToken":
            response = {
                ...(await deserializeAws_json1_0InvalidTokenResponse(parsedOutput, context)),
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
const deserializeAws_json1_0ListExecutionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0ListExecutionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ListExecutionsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0ListExecutionsCommand = deserializeAws_json1_0ListExecutionsCommand;
const deserializeAws_json1_0ListExecutionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArn":
        case "com.amazonaws.sfn#InvalidArn":
            response = {
                ...(await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidToken":
        case "com.amazonaws.sfn#InvalidToken":
            response = {
                ...(await deserializeAws_json1_0InvalidTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StateMachineDoesNotExist":
        case "com.amazonaws.sfn#StateMachineDoesNotExist":
            response = {
                ...(await deserializeAws_json1_0StateMachineDoesNotExistResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StateMachineTypeNotSupported":
        case "com.amazonaws.sfn#StateMachineTypeNotSupported":
            response = {
                ...(await deserializeAws_json1_0StateMachineTypeNotSupportedResponse(parsedOutput, context)),
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
const deserializeAws_json1_0ListStateMachinesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0ListStateMachinesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ListStateMachinesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0ListStateMachinesCommand = deserializeAws_json1_0ListStateMachinesCommand;
const deserializeAws_json1_0ListStateMachinesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidToken":
        case "com.amazonaws.sfn#InvalidToken":
            response = {
                ...(await deserializeAws_json1_0InvalidTokenResponse(parsedOutput, context)),
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
        case "InvalidArn":
        case "com.amazonaws.sfn#InvalidArn":
            response = {
                ...(await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFound":
        case "com.amazonaws.sfn#ResourceNotFound":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundResponse(parsedOutput, context)),
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
const deserializeAws_json1_0SendTaskFailureCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0SendTaskFailureCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0SendTaskFailureOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0SendTaskFailureCommand = deserializeAws_json1_0SendTaskFailureCommand;
const deserializeAws_json1_0SendTaskFailureCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidToken":
        case "com.amazonaws.sfn#InvalidToken":
            response = {
                ...(await deserializeAws_json1_0InvalidTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TaskDoesNotExist":
        case "com.amazonaws.sfn#TaskDoesNotExist":
            response = {
                ...(await deserializeAws_json1_0TaskDoesNotExistResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TaskTimedOut":
        case "com.amazonaws.sfn#TaskTimedOut":
            response = {
                ...(await deserializeAws_json1_0TaskTimedOutResponse(parsedOutput, context)),
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
const deserializeAws_json1_0SendTaskHeartbeatCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0SendTaskHeartbeatCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0SendTaskHeartbeatOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0SendTaskHeartbeatCommand = deserializeAws_json1_0SendTaskHeartbeatCommand;
const deserializeAws_json1_0SendTaskHeartbeatCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidToken":
        case "com.amazonaws.sfn#InvalidToken":
            response = {
                ...(await deserializeAws_json1_0InvalidTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TaskDoesNotExist":
        case "com.amazonaws.sfn#TaskDoesNotExist":
            response = {
                ...(await deserializeAws_json1_0TaskDoesNotExistResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TaskTimedOut":
        case "com.amazonaws.sfn#TaskTimedOut":
            response = {
                ...(await deserializeAws_json1_0TaskTimedOutResponse(parsedOutput, context)),
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
const deserializeAws_json1_0SendTaskSuccessCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0SendTaskSuccessCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0SendTaskSuccessOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0SendTaskSuccessCommand = deserializeAws_json1_0SendTaskSuccessCommand;
const deserializeAws_json1_0SendTaskSuccessCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidOutput":
        case "com.amazonaws.sfn#InvalidOutput":
            response = {
                ...(await deserializeAws_json1_0InvalidOutputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidToken":
        case "com.amazonaws.sfn#InvalidToken":
            response = {
                ...(await deserializeAws_json1_0InvalidTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TaskDoesNotExist":
        case "com.amazonaws.sfn#TaskDoesNotExist":
            response = {
                ...(await deserializeAws_json1_0TaskDoesNotExistResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TaskTimedOut":
        case "com.amazonaws.sfn#TaskTimedOut":
            response = {
                ...(await deserializeAws_json1_0TaskTimedOutResponse(parsedOutput, context)),
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
const deserializeAws_json1_0StartExecutionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0StartExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0StartExecutionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0StartExecutionCommand = deserializeAws_json1_0StartExecutionCommand;
const deserializeAws_json1_0StartExecutionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExecutionAlreadyExists":
        case "com.amazonaws.sfn#ExecutionAlreadyExists":
            response = {
                ...(await deserializeAws_json1_0ExecutionAlreadyExistsResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ExecutionLimitExceeded":
        case "com.amazonaws.sfn#ExecutionLimitExceeded":
            response = {
                ...(await deserializeAws_json1_0ExecutionLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArn":
        case "com.amazonaws.sfn#InvalidArn":
            response = {
                ...(await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidExecutionInput":
        case "com.amazonaws.sfn#InvalidExecutionInput":
            response = {
                ...(await deserializeAws_json1_0InvalidExecutionInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidName":
        case "com.amazonaws.sfn#InvalidName":
            response = {
                ...(await deserializeAws_json1_0InvalidNameResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StateMachineDeleting":
        case "com.amazonaws.sfn#StateMachineDeleting":
            response = {
                ...(await deserializeAws_json1_0StateMachineDeletingResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StateMachineDoesNotExist":
        case "com.amazonaws.sfn#StateMachineDoesNotExist":
            response = {
                ...(await deserializeAws_json1_0StateMachineDoesNotExistResponse(parsedOutput, context)),
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
const deserializeAws_json1_0StartSyncExecutionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0StartSyncExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0StartSyncExecutionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0StartSyncExecutionCommand = deserializeAws_json1_0StartSyncExecutionCommand;
const deserializeAws_json1_0StartSyncExecutionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArn":
        case "com.amazonaws.sfn#InvalidArn":
            response = {
                ...(await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidExecutionInput":
        case "com.amazonaws.sfn#InvalidExecutionInput":
            response = {
                ...(await deserializeAws_json1_0InvalidExecutionInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidName":
        case "com.amazonaws.sfn#InvalidName":
            response = {
                ...(await deserializeAws_json1_0InvalidNameResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StateMachineDeleting":
        case "com.amazonaws.sfn#StateMachineDeleting":
            response = {
                ...(await deserializeAws_json1_0StateMachineDeletingResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StateMachineDoesNotExist":
        case "com.amazonaws.sfn#StateMachineDoesNotExist":
            response = {
                ...(await deserializeAws_json1_0StateMachineDoesNotExistResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StateMachineTypeNotSupported":
        case "com.amazonaws.sfn#StateMachineTypeNotSupported":
            response = {
                ...(await deserializeAws_json1_0StateMachineTypeNotSupportedResponse(parsedOutput, context)),
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
const deserializeAws_json1_0StopExecutionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0StopExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0StopExecutionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0StopExecutionCommand = deserializeAws_json1_0StopExecutionCommand;
const deserializeAws_json1_0StopExecutionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExecutionDoesNotExist":
        case "com.amazonaws.sfn#ExecutionDoesNotExist":
            response = {
                ...(await deserializeAws_json1_0ExecutionDoesNotExistResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArn":
        case "com.amazonaws.sfn#InvalidArn":
            response = {
                ...(await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)),
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
        case "InvalidArn":
        case "com.amazonaws.sfn#InvalidArn":
            response = {
                ...(await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFound":
        case "com.amazonaws.sfn#ResourceNotFound":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTags":
        case "com.amazonaws.sfn#TooManyTags":
            response = {
                ...(await deserializeAws_json1_0TooManyTagsResponse(parsedOutput, context)),
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
        case "InvalidArn":
        case "com.amazonaws.sfn#InvalidArn":
            response = {
                ...(await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFound":
        case "com.amazonaws.sfn#ResourceNotFound":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundResponse(parsedOutput, context)),
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
const deserializeAws_json1_0UpdateStateMachineCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0UpdateStateMachineCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0UpdateStateMachineOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0UpdateStateMachineCommand = deserializeAws_json1_0UpdateStateMachineCommand;
const deserializeAws_json1_0UpdateStateMachineCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArn":
        case "com.amazonaws.sfn#InvalidArn":
            response = {
                ...(await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDefinition":
        case "com.amazonaws.sfn#InvalidDefinition":
            response = {
                ...(await deserializeAws_json1_0InvalidDefinitionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidLoggingConfiguration":
        case "com.amazonaws.sfn#InvalidLoggingConfiguration":
            response = {
                ...(await deserializeAws_json1_0InvalidLoggingConfigurationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTracingConfiguration":
        case "com.amazonaws.sfn#InvalidTracingConfiguration":
            response = {
                ...(await deserializeAws_json1_0InvalidTracingConfigurationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameter":
        case "com.amazonaws.sfn#MissingRequiredParameter":
            response = {
                ...(await deserializeAws_json1_0MissingRequiredParameterResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StateMachineDeleting":
        case "com.amazonaws.sfn#StateMachineDeleting":
            response = {
                ...(await deserializeAws_json1_0StateMachineDeletingResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StateMachineDoesNotExist":
        case "com.amazonaws.sfn#StateMachineDoesNotExist":
            response = {
                ...(await deserializeAws_json1_0StateMachineDoesNotExistResponse(parsedOutput, context)),
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
const deserializeAws_json1_0ActivityDoesNotExistResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ActivityDoesNotExist(body, context);
    const contents = {
        name: "ActivityDoesNotExist",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0ActivityLimitExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ActivityLimitExceeded(body, context);
    const contents = {
        name: "ActivityLimitExceeded",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0ActivityWorkerLimitExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ActivityWorkerLimitExceeded(body, context);
    const contents = {
        name: "ActivityWorkerLimitExceeded",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0ExecutionAlreadyExistsResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ExecutionAlreadyExists(body, context);
    const contents = {
        name: "ExecutionAlreadyExists",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0ExecutionDoesNotExistResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ExecutionDoesNotExist(body, context);
    const contents = {
        name: "ExecutionDoesNotExist",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0ExecutionLimitExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ExecutionLimitExceeded(body, context);
    const contents = {
        name: "ExecutionLimitExceeded",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0InvalidArnResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0InvalidArn(body, context);
    const contents = {
        name: "InvalidArn",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0InvalidDefinitionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0InvalidDefinition(body, context);
    const contents = {
        name: "InvalidDefinition",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0InvalidExecutionInputResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0InvalidExecutionInput(body, context);
    const contents = {
        name: "InvalidExecutionInput",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0InvalidLoggingConfigurationResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0InvalidLoggingConfiguration(body, context);
    const contents = {
        name: "InvalidLoggingConfiguration",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0InvalidNameResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0InvalidName(body, context);
    const contents = {
        name: "InvalidName",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0InvalidOutputResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0InvalidOutput(body, context);
    const contents = {
        name: "InvalidOutput",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0InvalidTokenResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0InvalidToken(body, context);
    const contents = {
        name: "InvalidToken",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0InvalidTracingConfigurationResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0InvalidTracingConfiguration(body, context);
    const contents = {
        name: "InvalidTracingConfiguration",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0MissingRequiredParameterResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0MissingRequiredParameter(body, context);
    const contents = {
        name: "MissingRequiredParameter",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0ResourceNotFoundResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ResourceNotFound(body, context);
    const contents = {
        name: "ResourceNotFound",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0StateMachineAlreadyExistsResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0StateMachineAlreadyExists(body, context);
    const contents = {
        name: "StateMachineAlreadyExists",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0StateMachineDeletingResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0StateMachineDeleting(body, context);
    const contents = {
        name: "StateMachineDeleting",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0StateMachineDoesNotExistResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0StateMachineDoesNotExist(body, context);
    const contents = {
        name: "StateMachineDoesNotExist",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0StateMachineLimitExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0StateMachineLimitExceeded(body, context);
    const contents = {
        name: "StateMachineLimitExceeded",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0StateMachineTypeNotSupportedResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0StateMachineTypeNotSupported(body, context);
    const contents = {
        name: "StateMachineTypeNotSupported",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0TaskDoesNotExistResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0TaskDoesNotExist(body, context);
    const contents = {
        name: "TaskDoesNotExist",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0TaskTimedOutResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0TaskTimedOut(body, context);
    const contents = {
        name: "TaskTimedOut",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0TooManyTagsResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0TooManyTags(body, context);
    const contents = {
        name: "TooManyTags",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_0CloudWatchLogsLogGroup = (input, context) => {
    return {
        ...(input.logGroupArn !== undefined && input.logGroupArn !== null && { logGroupArn: input.logGroupArn }),
    };
};
const serializeAws_json1_0CreateActivityInput = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_0TagList(input.tags, context) }),
    };
};
const serializeAws_json1_0CreateStateMachineInput = (input, context) => {
    return {
        ...(input.definition !== undefined && input.definition !== null && { definition: input.definition }),
        ...(input.loggingConfiguration !== undefined &&
            input.loggingConfiguration !== null && {
            loggingConfiguration: serializeAws_json1_0LoggingConfiguration(input.loggingConfiguration, context),
        }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_0TagList(input.tags, context) }),
        ...(input.tracingConfiguration !== undefined &&
            input.tracingConfiguration !== null && {
            tracingConfiguration: serializeAws_json1_0TracingConfiguration(input.tracingConfiguration, context),
        }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
    };
};
const serializeAws_json1_0DeleteActivityInput = (input, context) => {
    return {
        ...(input.activityArn !== undefined && input.activityArn !== null && { activityArn: input.activityArn }),
    };
};
const serializeAws_json1_0DeleteStateMachineInput = (input, context) => {
    return {
        ...(input.stateMachineArn !== undefined &&
            input.stateMachineArn !== null && { stateMachineArn: input.stateMachineArn }),
    };
};
const serializeAws_json1_0DescribeActivityInput = (input, context) => {
    return {
        ...(input.activityArn !== undefined && input.activityArn !== null && { activityArn: input.activityArn }),
    };
};
const serializeAws_json1_0DescribeExecutionInput = (input, context) => {
    return {
        ...(input.executionArn !== undefined && input.executionArn !== null && { executionArn: input.executionArn }),
    };
};
const serializeAws_json1_0DescribeStateMachineForExecutionInput = (input, context) => {
    return {
        ...(input.executionArn !== undefined && input.executionArn !== null && { executionArn: input.executionArn }),
    };
};
const serializeAws_json1_0DescribeStateMachineInput = (input, context) => {
    return {
        ...(input.stateMachineArn !== undefined &&
            input.stateMachineArn !== null && { stateMachineArn: input.stateMachineArn }),
    };
};
const serializeAws_json1_0GetActivityTaskInput = (input, context) => {
    return {
        ...(input.activityArn !== undefined && input.activityArn !== null && { activityArn: input.activityArn }),
        ...(input.workerName !== undefined && input.workerName !== null && { workerName: input.workerName }),
    };
};
const serializeAws_json1_0GetExecutionHistoryInput = (input, context) => {
    return {
        ...(input.executionArn !== undefined && input.executionArn !== null && { executionArn: input.executionArn }),
        ...(input.includeExecutionData !== undefined &&
            input.includeExecutionData !== null && { includeExecutionData: input.includeExecutionData }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.reverseOrder !== undefined && input.reverseOrder !== null && { reverseOrder: input.reverseOrder }),
    };
};
const serializeAws_json1_0ListActivitiesInput = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_0ListExecutionsInput = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.stateMachineArn !== undefined &&
            input.stateMachineArn !== null && { stateMachineArn: input.stateMachineArn }),
        ...(input.statusFilter !== undefined && input.statusFilter !== null && { statusFilter: input.statusFilter }),
    };
};
const serializeAws_json1_0ListStateMachinesInput = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_0ListTagsForResourceInput = (input, context) => {
    return {
        ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
    };
};
const serializeAws_json1_0LogDestination = (input, context) => {
    return {
        ...(input.cloudWatchLogsLogGroup !== undefined &&
            input.cloudWatchLogsLogGroup !== null && {
            cloudWatchLogsLogGroup: serializeAws_json1_0CloudWatchLogsLogGroup(input.cloudWatchLogsLogGroup, context),
        }),
    };
};
const serializeAws_json1_0LogDestinationList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0LogDestination(entry, context);
    });
};
const serializeAws_json1_0LoggingConfiguration = (input, context) => {
    return {
        ...(input.destinations !== undefined &&
            input.destinations !== null && {
            destinations: serializeAws_json1_0LogDestinationList(input.destinations, context),
        }),
        ...(input.includeExecutionData !== undefined &&
            input.includeExecutionData !== null && { includeExecutionData: input.includeExecutionData }),
        ...(input.level !== undefined && input.level !== null && { level: input.level }),
    };
};
const serializeAws_json1_0SendTaskFailureInput = (input, context) => {
    return {
        ...(input.cause !== undefined && input.cause !== null && { cause: input.cause }),
        ...(input.error !== undefined && input.error !== null && { error: input.error }),
        ...(input.taskToken !== undefined && input.taskToken !== null && { taskToken: input.taskToken }),
    };
};
const serializeAws_json1_0SendTaskHeartbeatInput = (input, context) => {
    return {
        ...(input.taskToken !== undefined && input.taskToken !== null && { taskToken: input.taskToken }),
    };
};
const serializeAws_json1_0SendTaskSuccessInput = (input, context) => {
    return {
        ...(input.output !== undefined && input.output !== null && { output: input.output }),
        ...(input.taskToken !== undefined && input.taskToken !== null && { taskToken: input.taskToken }),
    };
};
const serializeAws_json1_0StartExecutionInput = (input, context) => {
    return {
        ...(input.input !== undefined && input.input !== null && { input: input.input }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.stateMachineArn !== undefined &&
            input.stateMachineArn !== null && { stateMachineArn: input.stateMachineArn }),
        ...(input.traceHeader !== undefined && input.traceHeader !== null && { traceHeader: input.traceHeader }),
    };
};
const serializeAws_json1_0StartSyncExecutionInput = (input, context) => {
    return {
        ...(input.input !== undefined && input.input !== null && { input: input.input }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.stateMachineArn !== undefined &&
            input.stateMachineArn !== null && { stateMachineArn: input.stateMachineArn }),
        ...(input.traceHeader !== undefined && input.traceHeader !== null && { traceHeader: input.traceHeader }),
    };
};
const serializeAws_json1_0StopExecutionInput = (input, context) => {
    return {
        ...(input.cause !== undefined && input.cause !== null && { cause: input.cause }),
        ...(input.error !== undefined && input.error !== null && { error: input.error }),
        ...(input.executionArn !== undefined && input.executionArn !== null && { executionArn: input.executionArn }),
    };
};
const serializeAws_json1_0Tag = (input, context) => {
    return {
        ...(input.key !== undefined && input.key !== null && { key: input.key }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
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
        ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_0TagList(input.tags, context) }),
    };
};
const serializeAws_json1_0TracingConfiguration = (input, context) => {
    return {
        ...(input.enabled !== undefined && input.enabled !== null && { enabled: input.enabled }),
    };
};
const serializeAws_json1_0UntagResourceInput = (input, context) => {
    return {
        ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
        ...(input.tagKeys !== undefined &&
            input.tagKeys !== null && { tagKeys: serializeAws_json1_0TagKeyList(input.tagKeys, context) }),
    };
};
const serializeAws_json1_0UpdateStateMachineInput = (input, context) => {
    return {
        ...(input.definition !== undefined && input.definition !== null && { definition: input.definition }),
        ...(input.loggingConfiguration !== undefined &&
            input.loggingConfiguration !== null && {
            loggingConfiguration: serializeAws_json1_0LoggingConfiguration(input.loggingConfiguration, context),
        }),
        ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
        ...(input.stateMachineArn !== undefined &&
            input.stateMachineArn !== null && { stateMachineArn: input.stateMachineArn }),
        ...(input.tracingConfiguration !== undefined &&
            input.tracingConfiguration !== null && {
            tracingConfiguration: serializeAws_json1_0TracingConfiguration(input.tracingConfiguration, context),
        }),
    };
};
const deserializeAws_json1_0ActivityDoesNotExist = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0ActivityFailedEventDetails = (output, context) => {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        error: output.error !== undefined && output.error !== null ? output.error : undefined,
    };
};
const deserializeAws_json1_0ActivityLimitExceeded = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0ActivityList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0ActivityListItem(entry, context);
    });
};
const deserializeAws_json1_0ActivityListItem = (output, context) => {
    return {
        activityArn: output.activityArn !== undefined && output.activityArn !== null ? output.activityArn : undefined,
        creationDate: output.creationDate !== undefined && output.creationDate !== null
            ? new Date(Math.round(output.creationDate * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_json1_0ActivityScheduledEventDetails = (output, context) => {
    return {
        heartbeatInSeconds: output.heartbeatInSeconds !== undefined && output.heartbeatInSeconds !== null
            ? output.heartbeatInSeconds
            : undefined,
        input: output.input !== undefined && output.input !== null ? output.input : undefined,
        inputDetails: output.inputDetails !== undefined && output.inputDetails !== null
            ? deserializeAws_json1_0HistoryEventExecutionDataDetails(output.inputDetails, context)
            : undefined,
        resource: output.resource !== undefined && output.resource !== null ? output.resource : undefined,
        timeoutInSeconds: output.timeoutInSeconds !== undefined && output.timeoutInSeconds !== null ? output.timeoutInSeconds : undefined,
    };
};
const deserializeAws_json1_0ActivityScheduleFailedEventDetails = (output, context) => {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        error: output.error !== undefined && output.error !== null ? output.error : undefined,
    };
};
const deserializeAws_json1_0ActivityStartedEventDetails = (output, context) => {
    return {
        workerName: output.workerName !== undefined && output.workerName !== null ? output.workerName : undefined,
    };
};
const deserializeAws_json1_0ActivitySucceededEventDetails = (output, context) => {
    return {
        output: output.output !== undefined && output.output !== null ? output.output : undefined,
        outputDetails: output.outputDetails !== undefined && output.outputDetails !== null
            ? deserializeAws_json1_0HistoryEventExecutionDataDetails(output.outputDetails, context)
            : undefined,
    };
};
const deserializeAws_json1_0ActivityTimedOutEventDetails = (output, context) => {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        error: output.error !== undefined && output.error !== null ? output.error : undefined,
    };
};
const deserializeAws_json1_0ActivityWorkerLimitExceeded = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0BillingDetails = (output, context) => {
    return {
        billedDurationInMilliseconds: output.billedDurationInMilliseconds !== undefined && output.billedDurationInMilliseconds !== null
            ? output.billedDurationInMilliseconds
            : undefined,
        billedMemoryUsedInMB: output.billedMemoryUsedInMB !== undefined && output.billedMemoryUsedInMB !== null
            ? output.billedMemoryUsedInMB
            : undefined,
    };
};
const deserializeAws_json1_0CloudWatchEventsExecutionDataDetails = (output, context) => {
    return {
        included: output.included !== undefined && output.included !== null ? output.included : undefined,
    };
};
const deserializeAws_json1_0CloudWatchLogsLogGroup = (output, context) => {
    return {
        logGroupArn: output.logGroupArn !== undefined && output.logGroupArn !== null ? output.logGroupArn : undefined,
    };
};
const deserializeAws_json1_0CreateActivityOutput = (output, context) => {
    return {
        activityArn: output.activityArn !== undefined && output.activityArn !== null ? output.activityArn : undefined,
        creationDate: output.creationDate !== undefined && output.creationDate !== null
            ? new Date(Math.round(output.creationDate * 1000))
            : undefined,
    };
};
const deserializeAws_json1_0CreateStateMachineOutput = (output, context) => {
    return {
        creationDate: output.creationDate !== undefined && output.creationDate !== null
            ? new Date(Math.round(output.creationDate * 1000))
            : undefined,
        stateMachineArn: output.stateMachineArn !== undefined && output.stateMachineArn !== null ? output.stateMachineArn : undefined,
    };
};
const deserializeAws_json1_0DeleteActivityOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_0DeleteStateMachineOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_0DescribeActivityOutput = (output, context) => {
    return {
        activityArn: output.activityArn !== undefined && output.activityArn !== null ? output.activityArn : undefined,
        creationDate: output.creationDate !== undefined && output.creationDate !== null
            ? new Date(Math.round(output.creationDate * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_json1_0DescribeExecutionOutput = (output, context) => {
    return {
        executionArn: output.executionArn !== undefined && output.executionArn !== null ? output.executionArn : undefined,
        input: output.input !== undefined && output.input !== null ? output.input : undefined,
        inputDetails: output.inputDetails !== undefined && output.inputDetails !== null
            ? deserializeAws_json1_0CloudWatchEventsExecutionDataDetails(output.inputDetails, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        output: output.output !== undefined && output.output !== null ? output.output : undefined,
        outputDetails: output.outputDetails !== undefined && output.outputDetails !== null
            ? deserializeAws_json1_0CloudWatchEventsExecutionDataDetails(output.outputDetails, context)
            : undefined,
        startDate: output.startDate !== undefined && output.startDate !== null
            ? new Date(Math.round(output.startDate * 1000))
            : undefined,
        stateMachineArn: output.stateMachineArn !== undefined && output.stateMachineArn !== null ? output.stateMachineArn : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        stopDate: output.stopDate !== undefined && output.stopDate !== null
            ? new Date(Math.round(output.stopDate * 1000))
            : undefined,
        traceHeader: output.traceHeader !== undefined && output.traceHeader !== null ? output.traceHeader : undefined,
    };
};
const deserializeAws_json1_0DescribeStateMachineForExecutionOutput = (output, context) => {
    return {
        definition: output.definition !== undefined && output.definition !== null ? output.definition : undefined,
        loggingConfiguration: output.loggingConfiguration !== undefined && output.loggingConfiguration !== null
            ? deserializeAws_json1_0LoggingConfiguration(output.loggingConfiguration, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
        stateMachineArn: output.stateMachineArn !== undefined && output.stateMachineArn !== null ? output.stateMachineArn : undefined,
        tracingConfiguration: output.tracingConfiguration !== undefined && output.tracingConfiguration !== null
            ? deserializeAws_json1_0TracingConfiguration(output.tracingConfiguration, context)
            : undefined,
        updateDate: output.updateDate !== undefined && output.updateDate !== null
            ? new Date(Math.round(output.updateDate * 1000))
            : undefined,
    };
};
const deserializeAws_json1_0DescribeStateMachineOutput = (output, context) => {
    return {
        creationDate: output.creationDate !== undefined && output.creationDate !== null
            ? new Date(Math.round(output.creationDate * 1000))
            : undefined,
        definition: output.definition !== undefined && output.definition !== null ? output.definition : undefined,
        loggingConfiguration: output.loggingConfiguration !== undefined && output.loggingConfiguration !== null
            ? deserializeAws_json1_0LoggingConfiguration(output.loggingConfiguration, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
        stateMachineArn: output.stateMachineArn !== undefined && output.stateMachineArn !== null ? output.stateMachineArn : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        tracingConfiguration: output.tracingConfiguration !== undefined && output.tracingConfiguration !== null
            ? deserializeAws_json1_0TracingConfiguration(output.tracingConfiguration, context)
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_json1_0ExecutionAbortedEventDetails = (output, context) => {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        error: output.error !== undefined && output.error !== null ? output.error : undefined,
    };
};
const deserializeAws_json1_0ExecutionAlreadyExists = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0ExecutionDoesNotExist = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0ExecutionFailedEventDetails = (output, context) => {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        error: output.error !== undefined && output.error !== null ? output.error : undefined,
    };
};
const deserializeAws_json1_0ExecutionLimitExceeded = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0ExecutionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0ExecutionListItem(entry, context);
    });
};
const deserializeAws_json1_0ExecutionListItem = (output, context) => {
    return {
        executionArn: output.executionArn !== undefined && output.executionArn !== null ? output.executionArn : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        startDate: output.startDate !== undefined && output.startDate !== null
            ? new Date(Math.round(output.startDate * 1000))
            : undefined,
        stateMachineArn: output.stateMachineArn !== undefined && output.stateMachineArn !== null ? output.stateMachineArn : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        stopDate: output.stopDate !== undefined && output.stopDate !== null
            ? new Date(Math.round(output.stopDate * 1000))
            : undefined,
    };
};
const deserializeAws_json1_0ExecutionStartedEventDetails = (output, context) => {
    return {
        input: output.input !== undefined && output.input !== null ? output.input : undefined,
        inputDetails: output.inputDetails !== undefined && output.inputDetails !== null
            ? deserializeAws_json1_0HistoryEventExecutionDataDetails(output.inputDetails, context)
            : undefined,
        roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
    };
};
const deserializeAws_json1_0ExecutionSucceededEventDetails = (output, context) => {
    return {
        output: output.output !== undefined && output.output !== null ? output.output : undefined,
        outputDetails: output.outputDetails !== undefined && output.outputDetails !== null
            ? deserializeAws_json1_0HistoryEventExecutionDataDetails(output.outputDetails, context)
            : undefined,
    };
};
const deserializeAws_json1_0ExecutionTimedOutEventDetails = (output, context) => {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        error: output.error !== undefined && output.error !== null ? output.error : undefined,
    };
};
const deserializeAws_json1_0GetActivityTaskOutput = (output, context) => {
    return {
        input: output.input !== undefined && output.input !== null ? output.input : undefined,
        taskToken: output.taskToken !== undefined && output.taskToken !== null ? output.taskToken : undefined,
    };
};
const deserializeAws_json1_0GetExecutionHistoryOutput = (output, context) => {
    return {
        events: output.events !== undefined && output.events !== null
            ? deserializeAws_json1_0HistoryEventList(output.events, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_0HistoryEvent = (output, context) => {
    return {
        activityFailedEventDetails: output.activityFailedEventDetails !== undefined && output.activityFailedEventDetails !== null
            ? deserializeAws_json1_0ActivityFailedEventDetails(output.activityFailedEventDetails, context)
            : undefined,
        activityScheduleFailedEventDetails: output.activityScheduleFailedEventDetails !== undefined && output.activityScheduleFailedEventDetails !== null
            ? deserializeAws_json1_0ActivityScheduleFailedEventDetails(output.activityScheduleFailedEventDetails, context)
            : undefined,
        activityScheduledEventDetails: output.activityScheduledEventDetails !== undefined && output.activityScheduledEventDetails !== null
            ? deserializeAws_json1_0ActivityScheduledEventDetails(output.activityScheduledEventDetails, context)
            : undefined,
        activityStartedEventDetails: output.activityStartedEventDetails !== undefined && output.activityStartedEventDetails !== null
            ? deserializeAws_json1_0ActivityStartedEventDetails(output.activityStartedEventDetails, context)
            : undefined,
        activitySucceededEventDetails: output.activitySucceededEventDetails !== undefined && output.activitySucceededEventDetails !== null
            ? deserializeAws_json1_0ActivitySucceededEventDetails(output.activitySucceededEventDetails, context)
            : undefined,
        activityTimedOutEventDetails: output.activityTimedOutEventDetails !== undefined && output.activityTimedOutEventDetails !== null
            ? deserializeAws_json1_0ActivityTimedOutEventDetails(output.activityTimedOutEventDetails, context)
            : undefined,
        executionAbortedEventDetails: output.executionAbortedEventDetails !== undefined && output.executionAbortedEventDetails !== null
            ? deserializeAws_json1_0ExecutionAbortedEventDetails(output.executionAbortedEventDetails, context)
            : undefined,
        executionFailedEventDetails: output.executionFailedEventDetails !== undefined && output.executionFailedEventDetails !== null
            ? deserializeAws_json1_0ExecutionFailedEventDetails(output.executionFailedEventDetails, context)
            : undefined,
        executionStartedEventDetails: output.executionStartedEventDetails !== undefined && output.executionStartedEventDetails !== null
            ? deserializeAws_json1_0ExecutionStartedEventDetails(output.executionStartedEventDetails, context)
            : undefined,
        executionSucceededEventDetails: output.executionSucceededEventDetails !== undefined && output.executionSucceededEventDetails !== null
            ? deserializeAws_json1_0ExecutionSucceededEventDetails(output.executionSucceededEventDetails, context)
            : undefined,
        executionTimedOutEventDetails: output.executionTimedOutEventDetails !== undefined && output.executionTimedOutEventDetails !== null
            ? deserializeAws_json1_0ExecutionTimedOutEventDetails(output.executionTimedOutEventDetails, context)
            : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        lambdaFunctionFailedEventDetails: output.lambdaFunctionFailedEventDetails !== undefined && output.lambdaFunctionFailedEventDetails !== null
            ? deserializeAws_json1_0LambdaFunctionFailedEventDetails(output.lambdaFunctionFailedEventDetails, context)
            : undefined,
        lambdaFunctionScheduleFailedEventDetails: output.lambdaFunctionScheduleFailedEventDetails !== undefined &&
            output.lambdaFunctionScheduleFailedEventDetails !== null
            ? deserializeAws_json1_0LambdaFunctionScheduleFailedEventDetails(output.lambdaFunctionScheduleFailedEventDetails, context)
            : undefined,
        lambdaFunctionScheduledEventDetails: output.lambdaFunctionScheduledEventDetails !== undefined && output.lambdaFunctionScheduledEventDetails !== null
            ? deserializeAws_json1_0LambdaFunctionScheduledEventDetails(output.lambdaFunctionScheduledEventDetails, context)
            : undefined,
        lambdaFunctionStartFailedEventDetails: output.lambdaFunctionStartFailedEventDetails !== undefined &&
            output.lambdaFunctionStartFailedEventDetails !== null
            ? deserializeAws_json1_0LambdaFunctionStartFailedEventDetails(output.lambdaFunctionStartFailedEventDetails, context)
            : undefined,
        lambdaFunctionSucceededEventDetails: output.lambdaFunctionSucceededEventDetails !== undefined && output.lambdaFunctionSucceededEventDetails !== null
            ? deserializeAws_json1_0LambdaFunctionSucceededEventDetails(output.lambdaFunctionSucceededEventDetails, context)
            : undefined,
        lambdaFunctionTimedOutEventDetails: output.lambdaFunctionTimedOutEventDetails !== undefined && output.lambdaFunctionTimedOutEventDetails !== null
            ? deserializeAws_json1_0LambdaFunctionTimedOutEventDetails(output.lambdaFunctionTimedOutEventDetails, context)
            : undefined,
        mapIterationAbortedEventDetails: output.mapIterationAbortedEventDetails !== undefined && output.mapIterationAbortedEventDetails !== null
            ? deserializeAws_json1_0MapIterationEventDetails(output.mapIterationAbortedEventDetails, context)
            : undefined,
        mapIterationFailedEventDetails: output.mapIterationFailedEventDetails !== undefined && output.mapIterationFailedEventDetails !== null
            ? deserializeAws_json1_0MapIterationEventDetails(output.mapIterationFailedEventDetails, context)
            : undefined,
        mapIterationStartedEventDetails: output.mapIterationStartedEventDetails !== undefined && output.mapIterationStartedEventDetails !== null
            ? deserializeAws_json1_0MapIterationEventDetails(output.mapIterationStartedEventDetails, context)
            : undefined,
        mapIterationSucceededEventDetails: output.mapIterationSucceededEventDetails !== undefined && output.mapIterationSucceededEventDetails !== null
            ? deserializeAws_json1_0MapIterationEventDetails(output.mapIterationSucceededEventDetails, context)
            : undefined,
        mapStateStartedEventDetails: output.mapStateStartedEventDetails !== undefined && output.mapStateStartedEventDetails !== null
            ? deserializeAws_json1_0MapStateStartedEventDetails(output.mapStateStartedEventDetails, context)
            : undefined,
        previousEventId: output.previousEventId !== undefined && output.previousEventId !== null ? output.previousEventId : undefined,
        stateEnteredEventDetails: output.stateEnteredEventDetails !== undefined && output.stateEnteredEventDetails !== null
            ? deserializeAws_json1_0StateEnteredEventDetails(output.stateEnteredEventDetails, context)
            : undefined,
        stateExitedEventDetails: output.stateExitedEventDetails !== undefined && output.stateExitedEventDetails !== null
            ? deserializeAws_json1_0StateExitedEventDetails(output.stateExitedEventDetails, context)
            : undefined,
        taskFailedEventDetails: output.taskFailedEventDetails !== undefined && output.taskFailedEventDetails !== null
            ? deserializeAws_json1_0TaskFailedEventDetails(output.taskFailedEventDetails, context)
            : undefined,
        taskScheduledEventDetails: output.taskScheduledEventDetails !== undefined && output.taskScheduledEventDetails !== null
            ? deserializeAws_json1_0TaskScheduledEventDetails(output.taskScheduledEventDetails, context)
            : undefined,
        taskStartFailedEventDetails: output.taskStartFailedEventDetails !== undefined && output.taskStartFailedEventDetails !== null
            ? deserializeAws_json1_0TaskStartFailedEventDetails(output.taskStartFailedEventDetails, context)
            : undefined,
        taskStartedEventDetails: output.taskStartedEventDetails !== undefined && output.taskStartedEventDetails !== null
            ? deserializeAws_json1_0TaskStartedEventDetails(output.taskStartedEventDetails, context)
            : undefined,
        taskSubmitFailedEventDetails: output.taskSubmitFailedEventDetails !== undefined && output.taskSubmitFailedEventDetails !== null
            ? deserializeAws_json1_0TaskSubmitFailedEventDetails(output.taskSubmitFailedEventDetails, context)
            : undefined,
        taskSubmittedEventDetails: output.taskSubmittedEventDetails !== undefined && output.taskSubmittedEventDetails !== null
            ? deserializeAws_json1_0TaskSubmittedEventDetails(output.taskSubmittedEventDetails, context)
            : undefined,
        taskSucceededEventDetails: output.taskSucceededEventDetails !== undefined && output.taskSucceededEventDetails !== null
            ? deserializeAws_json1_0TaskSucceededEventDetails(output.taskSucceededEventDetails, context)
            : undefined,
        taskTimedOutEventDetails: output.taskTimedOutEventDetails !== undefined && output.taskTimedOutEventDetails !== null
            ? deserializeAws_json1_0TaskTimedOutEventDetails(output.taskTimedOutEventDetails, context)
            : undefined,
        timestamp: output.timestamp !== undefined && output.timestamp !== null
            ? new Date(Math.round(output.timestamp * 1000))
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_json1_0HistoryEventExecutionDataDetails = (output, context) => {
    return {
        truncated: output.truncated !== undefined && output.truncated !== null ? output.truncated : undefined,
    };
};
const deserializeAws_json1_0HistoryEventList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0HistoryEvent(entry, context);
    });
};
const deserializeAws_json1_0InvalidArn = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0InvalidDefinition = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0InvalidExecutionInput = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0InvalidLoggingConfiguration = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0InvalidName = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0InvalidOutput = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0InvalidToken = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0InvalidTracingConfiguration = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0LambdaFunctionFailedEventDetails = (output, context) => {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        error: output.error !== undefined && output.error !== null ? output.error : undefined,
    };
};
const deserializeAws_json1_0LambdaFunctionScheduledEventDetails = (output, context) => {
    return {
        input: output.input !== undefined && output.input !== null ? output.input : undefined,
        inputDetails: output.inputDetails !== undefined && output.inputDetails !== null
            ? deserializeAws_json1_0HistoryEventExecutionDataDetails(output.inputDetails, context)
            : undefined,
        resource: output.resource !== undefined && output.resource !== null ? output.resource : undefined,
        timeoutInSeconds: output.timeoutInSeconds !== undefined && output.timeoutInSeconds !== null ? output.timeoutInSeconds : undefined,
    };
};
const deserializeAws_json1_0LambdaFunctionScheduleFailedEventDetails = (output, context) => {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        error: output.error !== undefined && output.error !== null ? output.error : undefined,
    };
};
const deserializeAws_json1_0LambdaFunctionStartFailedEventDetails = (output, context) => {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        error: output.error !== undefined && output.error !== null ? output.error : undefined,
    };
};
const deserializeAws_json1_0LambdaFunctionSucceededEventDetails = (output, context) => {
    return {
        output: output.output !== undefined && output.output !== null ? output.output : undefined,
        outputDetails: output.outputDetails !== undefined && output.outputDetails !== null
            ? deserializeAws_json1_0HistoryEventExecutionDataDetails(output.outputDetails, context)
            : undefined,
    };
};
const deserializeAws_json1_0LambdaFunctionTimedOutEventDetails = (output, context) => {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        error: output.error !== undefined && output.error !== null ? output.error : undefined,
    };
};
const deserializeAws_json1_0ListActivitiesOutput = (output, context) => {
    return {
        activities: output.activities !== undefined && output.activities !== null
            ? deserializeAws_json1_0ActivityList(output.activities, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_0ListExecutionsOutput = (output, context) => {
    return {
        executions: output.executions !== undefined && output.executions !== null
            ? deserializeAws_json1_0ExecutionList(output.executions, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_0ListStateMachinesOutput = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        stateMachines: output.stateMachines !== undefined && output.stateMachines !== null
            ? deserializeAws_json1_0StateMachineList(output.stateMachines, context)
            : undefined,
    };
};
const deserializeAws_json1_0ListTagsForResourceOutput = (output, context) => {
    return {
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_json1_0TagList(output.tags, context)
            : undefined,
    };
};
const deserializeAws_json1_0LogDestination = (output, context) => {
    return {
        cloudWatchLogsLogGroup: output.cloudWatchLogsLogGroup !== undefined && output.cloudWatchLogsLogGroup !== null
            ? deserializeAws_json1_0CloudWatchLogsLogGroup(output.cloudWatchLogsLogGroup, context)
            : undefined,
    };
};
const deserializeAws_json1_0LogDestinationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0LogDestination(entry, context);
    });
};
const deserializeAws_json1_0LoggingConfiguration = (output, context) => {
    return {
        destinations: output.destinations !== undefined && output.destinations !== null
            ? deserializeAws_json1_0LogDestinationList(output.destinations, context)
            : undefined,
        includeExecutionData: output.includeExecutionData !== undefined && output.includeExecutionData !== null
            ? output.includeExecutionData
            : undefined,
        level: output.level !== undefined && output.level !== null ? output.level : undefined,
    };
};
const deserializeAws_json1_0MapIterationEventDetails = (output, context) => {
    return {
        index: output.index !== undefined && output.index !== null ? output.index : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_json1_0MapStateStartedEventDetails = (output, context) => {
    return {
        length: output.length !== undefined && output.length !== null ? output.length : undefined,
    };
};
const deserializeAws_json1_0MissingRequiredParameter = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0ResourceNotFound = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        resourceName: output.resourceName !== undefined && output.resourceName !== null ? output.resourceName : undefined,
    };
};
const deserializeAws_json1_0SendTaskFailureOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_0SendTaskHeartbeatOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_0SendTaskSuccessOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_0StartExecutionOutput = (output, context) => {
    return {
        executionArn: output.executionArn !== undefined && output.executionArn !== null ? output.executionArn : undefined,
        startDate: output.startDate !== undefined && output.startDate !== null
            ? new Date(Math.round(output.startDate * 1000))
            : undefined,
    };
};
const deserializeAws_json1_0StartSyncExecutionOutput = (output, context) => {
    return {
        billingDetails: output.billingDetails !== undefined && output.billingDetails !== null
            ? deserializeAws_json1_0BillingDetails(output.billingDetails, context)
            : undefined,
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        error: output.error !== undefined && output.error !== null ? output.error : undefined,
        executionArn: output.executionArn !== undefined && output.executionArn !== null ? output.executionArn : undefined,
        input: output.input !== undefined && output.input !== null ? output.input : undefined,
        inputDetails: output.inputDetails !== undefined && output.inputDetails !== null
            ? deserializeAws_json1_0CloudWatchEventsExecutionDataDetails(output.inputDetails, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        output: output.output !== undefined && output.output !== null ? output.output : undefined,
        outputDetails: output.outputDetails !== undefined && output.outputDetails !== null
            ? deserializeAws_json1_0CloudWatchEventsExecutionDataDetails(output.outputDetails, context)
            : undefined,
        startDate: output.startDate !== undefined && output.startDate !== null
            ? new Date(Math.round(output.startDate * 1000))
            : undefined,
        stateMachineArn: output.stateMachineArn !== undefined && output.stateMachineArn !== null ? output.stateMachineArn : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        stopDate: output.stopDate !== undefined && output.stopDate !== null
            ? new Date(Math.round(output.stopDate * 1000))
            : undefined,
        traceHeader: output.traceHeader !== undefined && output.traceHeader !== null ? output.traceHeader : undefined,
    };
};
const deserializeAws_json1_0StateEnteredEventDetails = (output, context) => {
    return {
        input: output.input !== undefined && output.input !== null ? output.input : undefined,
        inputDetails: output.inputDetails !== undefined && output.inputDetails !== null
            ? deserializeAws_json1_0HistoryEventExecutionDataDetails(output.inputDetails, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_json1_0StateExitedEventDetails = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        output: output.output !== undefined && output.output !== null ? output.output : undefined,
        outputDetails: output.outputDetails !== undefined && output.outputDetails !== null
            ? deserializeAws_json1_0HistoryEventExecutionDataDetails(output.outputDetails, context)
            : undefined,
    };
};
const deserializeAws_json1_0StateMachineAlreadyExists = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0StateMachineDeleting = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0StateMachineDoesNotExist = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0StateMachineLimitExceeded = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0StateMachineList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0StateMachineListItem(entry, context);
    });
};
const deserializeAws_json1_0StateMachineListItem = (output, context) => {
    return {
        creationDate: output.creationDate !== undefined && output.creationDate !== null
            ? new Date(Math.round(output.creationDate * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        stateMachineArn: output.stateMachineArn !== undefined && output.stateMachineArn !== null ? output.stateMachineArn : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_json1_0StateMachineTypeNotSupported = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0StopExecutionOutput = (output, context) => {
    return {
        stopDate: output.stopDate !== undefined && output.stopDate !== null
            ? new Date(Math.round(output.stopDate * 1000))
            : undefined,
    };
};
const deserializeAws_json1_0Tag = (output, context) => {
    return {
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
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
const deserializeAws_json1_0TaskDoesNotExist = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0TaskFailedEventDetails = (output, context) => {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        error: output.error !== undefined && output.error !== null ? output.error : undefined,
        resource: output.resource !== undefined && output.resource !== null ? output.resource : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    };
};
const deserializeAws_json1_0TaskScheduledEventDetails = (output, context) => {
    return {
        heartbeatInSeconds: output.heartbeatInSeconds !== undefined && output.heartbeatInSeconds !== null
            ? output.heartbeatInSeconds
            : undefined,
        parameters: output.parameters !== undefined && output.parameters !== null ? output.parameters : undefined,
        region: output.region !== undefined && output.region !== null ? output.region : undefined,
        resource: output.resource !== undefined && output.resource !== null ? output.resource : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
        timeoutInSeconds: output.timeoutInSeconds !== undefined && output.timeoutInSeconds !== null ? output.timeoutInSeconds : undefined,
    };
};
const deserializeAws_json1_0TaskStartedEventDetails = (output, context) => {
    return {
        resource: output.resource !== undefined && output.resource !== null ? output.resource : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    };
};
const deserializeAws_json1_0TaskStartFailedEventDetails = (output, context) => {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        error: output.error !== undefined && output.error !== null ? output.error : undefined,
        resource: output.resource !== undefined && output.resource !== null ? output.resource : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    };
};
const deserializeAws_json1_0TaskSubmitFailedEventDetails = (output, context) => {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        error: output.error !== undefined && output.error !== null ? output.error : undefined,
        resource: output.resource !== undefined && output.resource !== null ? output.resource : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    };
};
const deserializeAws_json1_0TaskSubmittedEventDetails = (output, context) => {
    return {
        output: output.output !== undefined && output.output !== null ? output.output : undefined,
        outputDetails: output.outputDetails !== undefined && output.outputDetails !== null
            ? deserializeAws_json1_0HistoryEventExecutionDataDetails(output.outputDetails, context)
            : undefined,
        resource: output.resource !== undefined && output.resource !== null ? output.resource : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    };
};
const deserializeAws_json1_0TaskSucceededEventDetails = (output, context) => {
    return {
        output: output.output !== undefined && output.output !== null ? output.output : undefined,
        outputDetails: output.outputDetails !== undefined && output.outputDetails !== null
            ? deserializeAws_json1_0HistoryEventExecutionDataDetails(output.outputDetails, context)
            : undefined,
        resource: output.resource !== undefined && output.resource !== null ? output.resource : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    };
};
const deserializeAws_json1_0TaskTimedOut = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0TaskTimedOutEventDetails = (output, context) => {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        error: output.error !== undefined && output.error !== null ? output.error : undefined,
        resource: output.resource !== undefined && output.resource !== null ? output.resource : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    };
};
const deserializeAws_json1_0TooManyTags = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        resourceName: output.resourceName !== undefined && output.resourceName !== null ? output.resourceName : undefined,
    };
};
const deserializeAws_json1_0TracingConfiguration = (output, context) => {
    return {
        enabled: output.enabled !== undefined && output.enabled !== null ? output.enabled : undefined,
    };
};
const deserializeAws_json1_0UntagResourceOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_0UpdateStateMachineOutput = (output, context) => {
    return {
        updateDate: output.updateDate !== undefined && output.updateDate !== null
            ? new Date(Math.round(output.updateDate * 1000))
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
//# sourceMappingURL=Aws_json1_0.js.map