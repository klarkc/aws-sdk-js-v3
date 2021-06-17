"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_0UpdateInferenceSchedulerCommand = exports.deserializeAws_json1_0UntagResourceCommand = exports.deserializeAws_json1_0TagResourceCommand = exports.deserializeAws_json1_0StopInferenceSchedulerCommand = exports.deserializeAws_json1_0StartInferenceSchedulerCommand = exports.deserializeAws_json1_0StartDataIngestionJobCommand = exports.deserializeAws_json1_0ListTagsForResourceCommand = exports.deserializeAws_json1_0ListModelsCommand = exports.deserializeAws_json1_0ListInferenceSchedulersCommand = exports.deserializeAws_json1_0ListInferenceExecutionsCommand = exports.deserializeAws_json1_0ListDatasetsCommand = exports.deserializeAws_json1_0ListDataIngestionJobsCommand = exports.deserializeAws_json1_0DescribeModelCommand = exports.deserializeAws_json1_0DescribeInferenceSchedulerCommand = exports.deserializeAws_json1_0DescribeDatasetCommand = exports.deserializeAws_json1_0DescribeDataIngestionJobCommand = exports.deserializeAws_json1_0DeleteModelCommand = exports.deserializeAws_json1_0DeleteInferenceSchedulerCommand = exports.deserializeAws_json1_0DeleteDatasetCommand = exports.deserializeAws_json1_0CreateModelCommand = exports.deserializeAws_json1_0CreateInferenceSchedulerCommand = exports.deserializeAws_json1_0CreateDatasetCommand = exports.serializeAws_json1_0UpdateInferenceSchedulerCommand = exports.serializeAws_json1_0UntagResourceCommand = exports.serializeAws_json1_0TagResourceCommand = exports.serializeAws_json1_0StopInferenceSchedulerCommand = exports.serializeAws_json1_0StartInferenceSchedulerCommand = exports.serializeAws_json1_0StartDataIngestionJobCommand = exports.serializeAws_json1_0ListTagsForResourceCommand = exports.serializeAws_json1_0ListModelsCommand = exports.serializeAws_json1_0ListInferenceSchedulersCommand = exports.serializeAws_json1_0ListInferenceExecutionsCommand = exports.serializeAws_json1_0ListDatasetsCommand = exports.serializeAws_json1_0ListDataIngestionJobsCommand = exports.serializeAws_json1_0DescribeModelCommand = exports.serializeAws_json1_0DescribeInferenceSchedulerCommand = exports.serializeAws_json1_0DescribeDatasetCommand = exports.serializeAws_json1_0DescribeDataIngestionJobCommand = exports.serializeAws_json1_0DeleteModelCommand = exports.serializeAws_json1_0DeleteInferenceSchedulerCommand = exports.serializeAws_json1_0DeleteDatasetCommand = exports.serializeAws_json1_0CreateModelCommand = exports.serializeAws_json1_0CreateInferenceSchedulerCommand = exports.serializeAws_json1_0CreateDatasetCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const uuid_1 = require("uuid");
const serializeAws_json1_0CreateDatasetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AWSLookoutEquipmentFrontendService.CreateDataset",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0CreateDatasetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0CreateDatasetCommand = serializeAws_json1_0CreateDatasetCommand;
const serializeAws_json1_0CreateInferenceSchedulerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AWSLookoutEquipmentFrontendService.CreateInferenceScheduler",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0CreateInferenceSchedulerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0CreateInferenceSchedulerCommand = serializeAws_json1_0CreateInferenceSchedulerCommand;
const serializeAws_json1_0CreateModelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AWSLookoutEquipmentFrontendService.CreateModel",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0CreateModelRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0CreateModelCommand = serializeAws_json1_0CreateModelCommand;
const serializeAws_json1_0DeleteDatasetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AWSLookoutEquipmentFrontendService.DeleteDataset",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DeleteDatasetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DeleteDatasetCommand = serializeAws_json1_0DeleteDatasetCommand;
const serializeAws_json1_0DeleteInferenceSchedulerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AWSLookoutEquipmentFrontendService.DeleteInferenceScheduler",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DeleteInferenceSchedulerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DeleteInferenceSchedulerCommand = serializeAws_json1_0DeleteInferenceSchedulerCommand;
const serializeAws_json1_0DeleteModelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AWSLookoutEquipmentFrontendService.DeleteModel",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DeleteModelRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DeleteModelCommand = serializeAws_json1_0DeleteModelCommand;
const serializeAws_json1_0DescribeDataIngestionJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AWSLookoutEquipmentFrontendService.DescribeDataIngestionJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeDataIngestionJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DescribeDataIngestionJobCommand = serializeAws_json1_0DescribeDataIngestionJobCommand;
const serializeAws_json1_0DescribeDatasetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AWSLookoutEquipmentFrontendService.DescribeDataset",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeDatasetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DescribeDatasetCommand = serializeAws_json1_0DescribeDatasetCommand;
const serializeAws_json1_0DescribeInferenceSchedulerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AWSLookoutEquipmentFrontendService.DescribeInferenceScheduler",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeInferenceSchedulerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DescribeInferenceSchedulerCommand = serializeAws_json1_0DescribeInferenceSchedulerCommand;
const serializeAws_json1_0DescribeModelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AWSLookoutEquipmentFrontendService.DescribeModel",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeModelRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DescribeModelCommand = serializeAws_json1_0DescribeModelCommand;
const serializeAws_json1_0ListDataIngestionJobsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AWSLookoutEquipmentFrontendService.ListDataIngestionJobs",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ListDataIngestionJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ListDataIngestionJobsCommand = serializeAws_json1_0ListDataIngestionJobsCommand;
const serializeAws_json1_0ListDatasetsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AWSLookoutEquipmentFrontendService.ListDatasets",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ListDatasetsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ListDatasetsCommand = serializeAws_json1_0ListDatasetsCommand;
const serializeAws_json1_0ListInferenceExecutionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AWSLookoutEquipmentFrontendService.ListInferenceExecutions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ListInferenceExecutionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ListInferenceExecutionsCommand = serializeAws_json1_0ListInferenceExecutionsCommand;
const serializeAws_json1_0ListInferenceSchedulersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AWSLookoutEquipmentFrontendService.ListInferenceSchedulers",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ListInferenceSchedulersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ListInferenceSchedulersCommand = serializeAws_json1_0ListInferenceSchedulersCommand;
const serializeAws_json1_0ListModelsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AWSLookoutEquipmentFrontendService.ListModels",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ListModelsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ListModelsCommand = serializeAws_json1_0ListModelsCommand;
const serializeAws_json1_0ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AWSLookoutEquipmentFrontendService.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ListTagsForResourceCommand = serializeAws_json1_0ListTagsForResourceCommand;
const serializeAws_json1_0StartDataIngestionJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AWSLookoutEquipmentFrontendService.StartDataIngestionJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0StartDataIngestionJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0StartDataIngestionJobCommand = serializeAws_json1_0StartDataIngestionJobCommand;
const serializeAws_json1_0StartInferenceSchedulerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AWSLookoutEquipmentFrontendService.StartInferenceScheduler",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0StartInferenceSchedulerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0StartInferenceSchedulerCommand = serializeAws_json1_0StartInferenceSchedulerCommand;
const serializeAws_json1_0StopInferenceSchedulerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AWSLookoutEquipmentFrontendService.StopInferenceScheduler",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0StopInferenceSchedulerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0StopInferenceSchedulerCommand = serializeAws_json1_0StopInferenceSchedulerCommand;
const serializeAws_json1_0TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AWSLookoutEquipmentFrontendService.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0TagResourceCommand = serializeAws_json1_0TagResourceCommand;
const serializeAws_json1_0UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AWSLookoutEquipmentFrontendService.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0UntagResourceCommand = serializeAws_json1_0UntagResourceCommand;
const serializeAws_json1_0UpdateInferenceSchedulerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AWSLookoutEquipmentFrontendService.UpdateInferenceScheduler",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0UpdateInferenceSchedulerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0UpdateInferenceSchedulerCommand = serializeAws_json1_0UpdateInferenceSchedulerCommand;
const deserializeAws_json1_0CreateDatasetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0CreateDatasetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0CreateDatasetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0CreateDatasetCommand = deserializeAws_json1_0CreateDatasetCommand;
const deserializeAws_json1_0CreateDatasetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutequipment#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.lookoutequipment#ConflictException":
            response = {
                ...(await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutequipment#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lookoutequipment#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lookoutequipment#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutequipment#ValidationException":
            response = {
                ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0CreateInferenceSchedulerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0CreateInferenceSchedulerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0CreateInferenceSchedulerResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0CreateInferenceSchedulerCommand = deserializeAws_json1_0CreateInferenceSchedulerCommand;
const deserializeAws_json1_0CreateInferenceSchedulerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutequipment#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.lookoutequipment#ConflictException":
            response = {
                ...(await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutequipment#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lookoutequipment#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lookoutequipment#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutequipment#ValidationException":
            response = {
                ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0CreateModelCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0CreateModelCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0CreateModelResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0CreateModelCommand = deserializeAws_json1_0CreateModelCommand;
const deserializeAws_json1_0CreateModelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutequipment#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.lookoutequipment#ConflictException":
            response = {
                ...(await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutequipment#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lookoutequipment#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lookoutequipment#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutequipment#ValidationException":
            response = {
                ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0DeleteDatasetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DeleteDatasetCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DeleteDatasetCommand = deserializeAws_json1_0DeleteDatasetCommand;
const deserializeAws_json1_0DeleteDatasetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutequipment#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.lookoutequipment#ConflictException":
            response = {
                ...(await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutequipment#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lookoutequipment#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0DeleteInferenceSchedulerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DeleteInferenceSchedulerCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DeleteInferenceSchedulerCommand = deserializeAws_json1_0DeleteInferenceSchedulerCommand;
const deserializeAws_json1_0DeleteInferenceSchedulerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutequipment#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.lookoutequipment#ConflictException":
            response = {
                ...(await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutequipment#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lookoutequipment#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutequipment#ValidationException":
            response = {
                ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0DeleteModelCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DeleteModelCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DeleteModelCommand = deserializeAws_json1_0DeleteModelCommand;
const deserializeAws_json1_0DeleteModelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutequipment#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.lookoutequipment#ConflictException":
            response = {
                ...(await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutequipment#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lookoutequipment#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0DescribeDataIngestionJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DescribeDataIngestionJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeDataIngestionJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DescribeDataIngestionJobCommand = deserializeAws_json1_0DescribeDataIngestionJobCommand;
const deserializeAws_json1_0DescribeDataIngestionJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutequipment#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutequipment#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lookoutequipment#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutequipment#ValidationException":
            response = {
                ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0DescribeDatasetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DescribeDatasetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeDatasetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DescribeDatasetCommand = deserializeAws_json1_0DescribeDatasetCommand;
const deserializeAws_json1_0DescribeDatasetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutequipment#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutequipment#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lookoutequipment#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutequipment#ValidationException":
            response = {
                ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0DescribeInferenceSchedulerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DescribeInferenceSchedulerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeInferenceSchedulerResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DescribeInferenceSchedulerCommand = deserializeAws_json1_0DescribeInferenceSchedulerCommand;
const deserializeAws_json1_0DescribeInferenceSchedulerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutequipment#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutequipment#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lookoutequipment#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutequipment#ValidationException":
            response = {
                ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0DescribeModelCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DescribeModelCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeModelResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DescribeModelCommand = deserializeAws_json1_0DescribeModelCommand;
const deserializeAws_json1_0DescribeModelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutequipment#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutequipment#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lookoutequipment#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutequipment#ValidationException":
            response = {
                ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0ListDataIngestionJobsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0ListDataIngestionJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ListDataIngestionJobsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0ListDataIngestionJobsCommand = deserializeAws_json1_0ListDataIngestionJobsCommand;
const deserializeAws_json1_0ListDataIngestionJobsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutequipment#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutequipment#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lookoutequipment#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutequipment#ValidationException":
            response = {
                ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0ListDatasetsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0ListDatasetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ListDatasetsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0ListDatasetsCommand = deserializeAws_json1_0ListDatasetsCommand;
const deserializeAws_json1_0ListDatasetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutequipment#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutequipment#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lookoutequipment#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutequipment#ValidationException":
            response = {
                ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0ListInferenceExecutionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0ListInferenceExecutionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ListInferenceExecutionsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0ListInferenceExecutionsCommand = deserializeAws_json1_0ListInferenceExecutionsCommand;
const deserializeAws_json1_0ListInferenceExecutionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutequipment#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutequipment#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lookoutequipment#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutequipment#ValidationException":
            response = {
                ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0ListInferenceSchedulersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0ListInferenceSchedulersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ListInferenceSchedulersResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0ListInferenceSchedulersCommand = deserializeAws_json1_0ListInferenceSchedulersCommand;
const deserializeAws_json1_0ListInferenceSchedulersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutequipment#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutequipment#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lookoutequipment#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutequipment#ValidationException":
            response = {
                ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0ListModelsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0ListModelsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ListModelsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0ListModelsCommand = deserializeAws_json1_0ListModelsCommand;
const deserializeAws_json1_0ListModelsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutequipment#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutequipment#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lookoutequipment#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutequipment#ValidationException":
            response = {
                ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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
    contents = deserializeAws_json1_0ListTagsForResourceResponse(data, context);
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
        case "AccessDeniedException":
        case "com.amazonaws.lookoutequipment#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutequipment#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lookoutequipment#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutequipment#ValidationException":
            response = {
                ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0StartDataIngestionJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0StartDataIngestionJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0StartDataIngestionJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0StartDataIngestionJobCommand = deserializeAws_json1_0StartDataIngestionJobCommand;
const deserializeAws_json1_0StartDataIngestionJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutequipment#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.lookoutequipment#ConflictException":
            response = {
                ...(await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutequipment#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lookoutequipment#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lookoutequipment#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutequipment#ValidationException":
            response = {
                ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0StartInferenceSchedulerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0StartInferenceSchedulerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0StartInferenceSchedulerResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0StartInferenceSchedulerCommand = deserializeAws_json1_0StartInferenceSchedulerCommand;
const deserializeAws_json1_0StartInferenceSchedulerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutequipment#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.lookoutequipment#ConflictException":
            response = {
                ...(await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutequipment#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lookoutequipment#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutequipment#ValidationException":
            response = {
                ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0StopInferenceSchedulerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0StopInferenceSchedulerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0StopInferenceSchedulerResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0StopInferenceSchedulerCommand = deserializeAws_json1_0StopInferenceSchedulerCommand;
const deserializeAws_json1_0StopInferenceSchedulerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutequipment#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.lookoutequipment#ConflictException":
            response = {
                ...(await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutequipment#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lookoutequipment#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutequipment#ValidationException":
            response = {
                ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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
    contents = deserializeAws_json1_0TagResourceResponse(data, context);
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
        case "AccessDeniedException":
        case "com.amazonaws.lookoutequipment#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutequipment#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lookoutequipment#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lookoutequipment#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutequipment#ValidationException":
            response = {
                ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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
    contents = deserializeAws_json1_0UntagResourceResponse(data, context);
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
        case "AccessDeniedException":
        case "com.amazonaws.lookoutequipment#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutequipment#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lookoutequipment#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutequipment#ValidationException":
            response = {
                ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0UpdateInferenceSchedulerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0UpdateInferenceSchedulerCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0UpdateInferenceSchedulerCommand = deserializeAws_json1_0UpdateInferenceSchedulerCommand;
const deserializeAws_json1_0UpdateInferenceSchedulerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutequipment#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.lookoutequipment#ConflictException":
            response = {
                ...(await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutequipment#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lookoutequipment#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutequipment#ValidationException":
            response = {
                ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0AccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0AccessDeniedException(body, context);
    const contents = {
        name: "AccessDeniedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
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
const deserializeAws_json1_0InternalServerExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0InternalServerException(body, context);
    const contents = {
        name: "InternalServerException",
        $fault: "server",
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
const deserializeAws_json1_0ServiceQuotaExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ServiceQuotaExceededException(body, context);
    const contents = {
        name: "ServiceQuotaExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ThrottlingException(body, context);
    const contents = {
        name: "ThrottlingException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0ValidationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ValidationException(body, context);
    const contents = {
        name: "ValidationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_0CreateDatasetRequest = (input, context) => {
    var _a;
    return {
        ClientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.DatasetName !== undefined && input.DatasetName !== null && { DatasetName: input.DatasetName }),
        ...(input.DatasetSchema !== undefined &&
            input.DatasetSchema !== null && {
            DatasetSchema: serializeAws_json1_0DatasetSchema(input.DatasetSchema, context),
        }),
        ...(input.ServerSideKmsKeyId !== undefined &&
            input.ServerSideKmsKeyId !== null && { ServerSideKmsKeyId: input.ServerSideKmsKeyId }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_0CreateInferenceSchedulerRequest = (input, context) => {
    var _a;
    return {
        ClientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.DataDelayOffsetInMinutes !== undefined &&
            input.DataDelayOffsetInMinutes !== null && { DataDelayOffsetInMinutes: input.DataDelayOffsetInMinutes }),
        ...(input.DataInputConfiguration !== undefined &&
            input.DataInputConfiguration !== null && {
            DataInputConfiguration: serializeAws_json1_0InferenceInputConfiguration(input.DataInputConfiguration, context),
        }),
        ...(input.DataOutputConfiguration !== undefined &&
            input.DataOutputConfiguration !== null && {
            DataOutputConfiguration: serializeAws_json1_0InferenceOutputConfiguration(input.DataOutputConfiguration, context),
        }),
        ...(input.DataUploadFrequency !== undefined &&
            input.DataUploadFrequency !== null && { DataUploadFrequency: input.DataUploadFrequency }),
        ...(input.InferenceSchedulerName !== undefined &&
            input.InferenceSchedulerName !== null && { InferenceSchedulerName: input.InferenceSchedulerName }),
        ...(input.ModelName !== undefined && input.ModelName !== null && { ModelName: input.ModelName }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
        ...(input.ServerSideKmsKeyId !== undefined &&
            input.ServerSideKmsKeyId !== null && { ServerSideKmsKeyId: input.ServerSideKmsKeyId }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_0CreateModelRequest = (input, context) => {
    var _a;
    return {
        ClientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.DataPreProcessingConfiguration !== undefined &&
            input.DataPreProcessingConfiguration !== null && {
            DataPreProcessingConfiguration: serializeAws_json1_0DataPreProcessingConfiguration(input.DataPreProcessingConfiguration, context),
        }),
        ...(input.DatasetName !== undefined && input.DatasetName !== null && { DatasetName: input.DatasetName }),
        ...(input.DatasetSchema !== undefined &&
            input.DatasetSchema !== null && {
            DatasetSchema: serializeAws_json1_0DatasetSchema(input.DatasetSchema, context),
        }),
        ...(input.EvaluationDataEndTime !== undefined &&
            input.EvaluationDataEndTime !== null && {
            EvaluationDataEndTime: Math.round(input.EvaluationDataEndTime.getTime() / 1000),
        }),
        ...(input.EvaluationDataStartTime !== undefined &&
            input.EvaluationDataStartTime !== null && {
            EvaluationDataStartTime: Math.round(input.EvaluationDataStartTime.getTime() / 1000),
        }),
        ...(input.LabelsInputConfiguration !== undefined &&
            input.LabelsInputConfiguration !== null && {
            LabelsInputConfiguration: serializeAws_json1_0LabelsInputConfiguration(input.LabelsInputConfiguration, context),
        }),
        ...(input.ModelName !== undefined && input.ModelName !== null && { ModelName: input.ModelName }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
        ...(input.ServerSideKmsKeyId !== undefined &&
            input.ServerSideKmsKeyId !== null && { ServerSideKmsKeyId: input.ServerSideKmsKeyId }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
        ...(input.TrainingDataEndTime !== undefined &&
            input.TrainingDataEndTime !== null && {
            TrainingDataEndTime: Math.round(input.TrainingDataEndTime.getTime() / 1000),
        }),
        ...(input.TrainingDataStartTime !== undefined &&
            input.TrainingDataStartTime !== null && {
            TrainingDataStartTime: Math.round(input.TrainingDataStartTime.getTime() / 1000),
        }),
    };
};
const serializeAws_json1_0DataPreProcessingConfiguration = (input, context) => {
    return {
        ...(input.TargetSamplingRate !== undefined &&
            input.TargetSamplingRate !== null && { TargetSamplingRate: input.TargetSamplingRate }),
    };
};
const serializeAws_json1_0DatasetSchema = (input, context) => {
    return {
        ...(input.InlineDataSchema !== undefined &&
            input.InlineDataSchema !== null && { InlineDataSchema: smithy_client_1.LazyJsonString.fromObject(input.InlineDataSchema) }),
    };
};
const serializeAws_json1_0DeleteDatasetRequest = (input, context) => {
    return {
        ...(input.DatasetName !== undefined && input.DatasetName !== null && { DatasetName: input.DatasetName }),
    };
};
const serializeAws_json1_0DeleteInferenceSchedulerRequest = (input, context) => {
    return {
        ...(input.InferenceSchedulerName !== undefined &&
            input.InferenceSchedulerName !== null && { InferenceSchedulerName: input.InferenceSchedulerName }),
    };
};
const serializeAws_json1_0DeleteModelRequest = (input, context) => {
    return {
        ...(input.ModelName !== undefined && input.ModelName !== null && { ModelName: input.ModelName }),
    };
};
const serializeAws_json1_0DescribeDataIngestionJobRequest = (input, context) => {
    return {
        ...(input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId }),
    };
};
const serializeAws_json1_0DescribeDatasetRequest = (input, context) => {
    return {
        ...(input.DatasetName !== undefined && input.DatasetName !== null && { DatasetName: input.DatasetName }),
    };
};
const serializeAws_json1_0DescribeInferenceSchedulerRequest = (input, context) => {
    return {
        ...(input.InferenceSchedulerName !== undefined &&
            input.InferenceSchedulerName !== null && { InferenceSchedulerName: input.InferenceSchedulerName }),
    };
};
const serializeAws_json1_0DescribeModelRequest = (input, context) => {
    return {
        ...(input.ModelName !== undefined && input.ModelName !== null && { ModelName: input.ModelName }),
    };
};
const serializeAws_json1_0InferenceInputConfiguration = (input, context) => {
    return {
        ...(input.InferenceInputNameConfiguration !== undefined &&
            input.InferenceInputNameConfiguration !== null && {
            InferenceInputNameConfiguration: serializeAws_json1_0InferenceInputNameConfiguration(input.InferenceInputNameConfiguration, context),
        }),
        ...(input.InputTimeZoneOffset !== undefined &&
            input.InputTimeZoneOffset !== null && { InputTimeZoneOffset: input.InputTimeZoneOffset }),
        ...(input.S3InputConfiguration !== undefined &&
            input.S3InputConfiguration !== null && {
            S3InputConfiguration: serializeAws_json1_0InferenceS3InputConfiguration(input.S3InputConfiguration, context),
        }),
    };
};
const serializeAws_json1_0InferenceInputNameConfiguration = (input, context) => {
    return {
        ...(input.ComponentTimestampDelimiter !== undefined &&
            input.ComponentTimestampDelimiter !== null && { ComponentTimestampDelimiter: input.ComponentTimestampDelimiter }),
        ...(input.TimestampFormat !== undefined &&
            input.TimestampFormat !== null && { TimestampFormat: input.TimestampFormat }),
    };
};
const serializeAws_json1_0InferenceOutputConfiguration = (input, context) => {
    return {
        ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
        ...(input.S3OutputConfiguration !== undefined &&
            input.S3OutputConfiguration !== null && {
            S3OutputConfiguration: serializeAws_json1_0InferenceS3OutputConfiguration(input.S3OutputConfiguration, context),
        }),
    };
};
const serializeAws_json1_0InferenceS3InputConfiguration = (input, context) => {
    return {
        ...(input.Bucket !== undefined && input.Bucket !== null && { Bucket: input.Bucket }),
        ...(input.Prefix !== undefined && input.Prefix !== null && { Prefix: input.Prefix }),
    };
};
const serializeAws_json1_0InferenceS3OutputConfiguration = (input, context) => {
    return {
        ...(input.Bucket !== undefined && input.Bucket !== null && { Bucket: input.Bucket }),
        ...(input.Prefix !== undefined && input.Prefix !== null && { Prefix: input.Prefix }),
    };
};
const serializeAws_json1_0IngestionInputConfiguration = (input, context) => {
    return {
        ...(input.S3InputConfiguration !== undefined &&
            input.S3InputConfiguration !== null && {
            S3InputConfiguration: serializeAws_json1_0IngestionS3InputConfiguration(input.S3InputConfiguration, context),
        }),
    };
};
const serializeAws_json1_0IngestionS3InputConfiguration = (input, context) => {
    return {
        ...(input.Bucket !== undefined && input.Bucket !== null && { Bucket: input.Bucket }),
        ...(input.Prefix !== undefined && input.Prefix !== null && { Prefix: input.Prefix }),
    };
};
const serializeAws_json1_0LabelsInputConfiguration = (input, context) => {
    return {
        ...(input.S3InputConfiguration !== undefined &&
            input.S3InputConfiguration !== null && {
            S3InputConfiguration: serializeAws_json1_0LabelsS3InputConfiguration(input.S3InputConfiguration, context),
        }),
    };
};
const serializeAws_json1_0LabelsS3InputConfiguration = (input, context) => {
    return {
        ...(input.Bucket !== undefined && input.Bucket !== null && { Bucket: input.Bucket }),
        ...(input.Prefix !== undefined && input.Prefix !== null && { Prefix: input.Prefix }),
    };
};
const serializeAws_json1_0ListDataIngestionJobsRequest = (input, context) => {
    return {
        ...(input.DatasetName !== undefined && input.DatasetName !== null && { DatasetName: input.DatasetName }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
    };
};
const serializeAws_json1_0ListDatasetsRequest = (input, context) => {
    return {
        ...(input.DatasetNameBeginsWith !== undefined &&
            input.DatasetNameBeginsWith !== null && { DatasetNameBeginsWith: input.DatasetNameBeginsWith }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_0ListInferenceExecutionsRequest = (input, context) => {
    return {
        ...(input.DataEndTimeBefore !== undefined &&
            input.DataEndTimeBefore !== null && { DataEndTimeBefore: Math.round(input.DataEndTimeBefore.getTime() / 1000) }),
        ...(input.DataStartTimeAfter !== undefined &&
            input.DataStartTimeAfter !== null && {
            DataStartTimeAfter: Math.round(input.DataStartTimeAfter.getTime() / 1000),
        }),
        ...(input.InferenceSchedulerName !== undefined &&
            input.InferenceSchedulerName !== null && { InferenceSchedulerName: input.InferenceSchedulerName }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
    };
};
const serializeAws_json1_0ListInferenceSchedulersRequest = (input, context) => {
    return {
        ...(input.InferenceSchedulerNameBeginsWith !== undefined &&
            input.InferenceSchedulerNameBeginsWith !== null && {
            InferenceSchedulerNameBeginsWith: input.InferenceSchedulerNameBeginsWith,
        }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.ModelName !== undefined && input.ModelName !== null && { ModelName: input.ModelName }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_0ListModelsRequest = (input, context) => {
    return {
        ...(input.DatasetNameBeginsWith !== undefined &&
            input.DatasetNameBeginsWith !== null && { DatasetNameBeginsWith: input.DatasetNameBeginsWith }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.ModelNameBeginsWith !== undefined &&
            input.ModelNameBeginsWith !== null && { ModelNameBeginsWith: input.ModelNameBeginsWith }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
    };
};
const serializeAws_json1_0ListTagsForResourceRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_0StartDataIngestionJobRequest = (input, context) => {
    var _a;
    return {
        ClientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.DatasetName !== undefined && input.DatasetName !== null && { DatasetName: input.DatasetName }),
        ...(input.IngestionInputConfiguration !== undefined &&
            input.IngestionInputConfiguration !== null && {
            IngestionInputConfiguration: serializeAws_json1_0IngestionInputConfiguration(input.IngestionInputConfiguration, context),
        }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    };
};
const serializeAws_json1_0StartInferenceSchedulerRequest = (input, context) => {
    return {
        ...(input.InferenceSchedulerName !== undefined &&
            input.InferenceSchedulerName !== null && { InferenceSchedulerName: input.InferenceSchedulerName }),
    };
};
const serializeAws_json1_0StopInferenceSchedulerRequest = (input, context) => {
    return {
        ...(input.InferenceSchedulerName !== undefined &&
            input.InferenceSchedulerName !== null && { InferenceSchedulerName: input.InferenceSchedulerName }),
    };
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
const serializeAws_json1_0TagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_0UntagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
        ...(input.TagKeys !== undefined &&
            input.TagKeys !== null && { TagKeys: serializeAws_json1_0TagKeyList(input.TagKeys, context) }),
    };
};
const serializeAws_json1_0UpdateInferenceSchedulerRequest = (input, context) => {
    return {
        ...(input.DataDelayOffsetInMinutes !== undefined &&
            input.DataDelayOffsetInMinutes !== null && { DataDelayOffsetInMinutes: input.DataDelayOffsetInMinutes }),
        ...(input.DataInputConfiguration !== undefined &&
            input.DataInputConfiguration !== null && {
            DataInputConfiguration: serializeAws_json1_0InferenceInputConfiguration(input.DataInputConfiguration, context),
        }),
        ...(input.DataOutputConfiguration !== undefined &&
            input.DataOutputConfiguration !== null && {
            DataOutputConfiguration: serializeAws_json1_0InferenceOutputConfiguration(input.DataOutputConfiguration, context),
        }),
        ...(input.DataUploadFrequency !== undefined &&
            input.DataUploadFrequency !== null && { DataUploadFrequency: input.DataUploadFrequency }),
        ...(input.InferenceSchedulerName !== undefined &&
            input.InferenceSchedulerName !== null && { InferenceSchedulerName: input.InferenceSchedulerName }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    };
};
const deserializeAws_json1_0AccessDeniedException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0ConflictException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0CreateDatasetResponse = (output, context) => {
    return {
        DatasetArn: output.DatasetArn !== undefined && output.DatasetArn !== null ? output.DatasetArn : undefined,
        DatasetName: output.DatasetName !== undefined && output.DatasetName !== null ? output.DatasetName : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_0CreateInferenceSchedulerResponse = (output, context) => {
    return {
        InferenceSchedulerArn: output.InferenceSchedulerArn !== undefined && output.InferenceSchedulerArn !== null
            ? output.InferenceSchedulerArn
            : undefined,
        InferenceSchedulerName: output.InferenceSchedulerName !== undefined && output.InferenceSchedulerName !== null
            ? output.InferenceSchedulerName
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_0CreateModelResponse = (output, context) => {
    return {
        ModelArn: output.ModelArn !== undefined && output.ModelArn !== null ? output.ModelArn : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_0DataIngestionJobSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0DataIngestionJobSummary(entry, context);
    });
};
const deserializeAws_json1_0DataIngestionJobSummary = (output, context) => {
    return {
        DatasetArn: output.DatasetArn !== undefined && output.DatasetArn !== null ? output.DatasetArn : undefined,
        DatasetName: output.DatasetName !== undefined && output.DatasetName !== null ? output.DatasetName : undefined,
        IngestionInputConfiguration: output.IngestionInputConfiguration !== undefined && output.IngestionInputConfiguration !== null
            ? deserializeAws_json1_0IngestionInputConfiguration(output.IngestionInputConfiguration, context)
            : undefined,
        JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_0DataPreProcessingConfiguration = (output, context) => {
    return {
        TargetSamplingRate: output.TargetSamplingRate !== undefined && output.TargetSamplingRate !== null
            ? output.TargetSamplingRate
            : undefined,
    };
};
const deserializeAws_json1_0DatasetSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0DatasetSummary(entry, context);
    });
};
const deserializeAws_json1_0DatasetSummary = (output, context) => {
    return {
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        DatasetArn: output.DatasetArn !== undefined && output.DatasetArn !== null ? output.DatasetArn : undefined,
        DatasetName: output.DatasetName !== undefined && output.DatasetName !== null ? output.DatasetName : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_0DescribeDataIngestionJobResponse = (output, context) => {
    return {
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        DatasetArn: output.DatasetArn !== undefined && output.DatasetArn !== null ? output.DatasetArn : undefined,
        FailedReason: output.FailedReason !== undefined && output.FailedReason !== null ? output.FailedReason : undefined,
        IngestionInputConfiguration: output.IngestionInputConfiguration !== undefined && output.IngestionInputConfiguration !== null
            ? deserializeAws_json1_0IngestionInputConfiguration(output.IngestionInputConfiguration, context)
            : undefined,
        JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_0DescribeDatasetResponse = (output, context) => {
    return {
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        DatasetArn: output.DatasetArn !== undefined && output.DatasetArn !== null ? output.DatasetArn : undefined,
        DatasetName: output.DatasetName !== undefined && output.DatasetName !== null ? output.DatasetName : undefined,
        IngestionInputConfiguration: output.IngestionInputConfiguration !== undefined && output.IngestionInputConfiguration !== null
            ? deserializeAws_json1_0IngestionInputConfiguration(output.IngestionInputConfiguration, context)
            : undefined,
        LastUpdatedAt: output.LastUpdatedAt !== undefined && output.LastUpdatedAt !== null
            ? new Date(Math.round(output.LastUpdatedAt * 1000))
            : undefined,
        Schema: output.Schema !== undefined && output.Schema !== null ? new smithy_client_1.LazyJsonString(output.Schema) : undefined,
        ServerSideKmsKeyId: output.ServerSideKmsKeyId !== undefined && output.ServerSideKmsKeyId !== null
            ? output.ServerSideKmsKeyId
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_0DescribeInferenceSchedulerResponse = (output, context) => {
    return {
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        DataDelayOffsetInMinutes: output.DataDelayOffsetInMinutes !== undefined && output.DataDelayOffsetInMinutes !== null
            ? output.DataDelayOffsetInMinutes
            : undefined,
        DataInputConfiguration: output.DataInputConfiguration !== undefined && output.DataInputConfiguration !== null
            ? deserializeAws_json1_0InferenceInputConfiguration(output.DataInputConfiguration, context)
            : undefined,
        DataOutputConfiguration: output.DataOutputConfiguration !== undefined && output.DataOutputConfiguration !== null
            ? deserializeAws_json1_0InferenceOutputConfiguration(output.DataOutputConfiguration, context)
            : undefined,
        DataUploadFrequency: output.DataUploadFrequency !== undefined && output.DataUploadFrequency !== null
            ? output.DataUploadFrequency
            : undefined,
        InferenceSchedulerArn: output.InferenceSchedulerArn !== undefined && output.InferenceSchedulerArn !== null
            ? output.InferenceSchedulerArn
            : undefined,
        InferenceSchedulerName: output.InferenceSchedulerName !== undefined && output.InferenceSchedulerName !== null
            ? output.InferenceSchedulerName
            : undefined,
        ModelArn: output.ModelArn !== undefined && output.ModelArn !== null ? output.ModelArn : undefined,
        ModelName: output.ModelName !== undefined && output.ModelName !== null ? output.ModelName : undefined,
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
        ServerSideKmsKeyId: output.ServerSideKmsKeyId !== undefined && output.ServerSideKmsKeyId !== null
            ? output.ServerSideKmsKeyId
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        UpdatedAt: output.UpdatedAt !== undefined && output.UpdatedAt !== null
            ? new Date(Math.round(output.UpdatedAt * 1000))
            : undefined,
    };
};
const deserializeAws_json1_0DescribeModelResponse = (output, context) => {
    return {
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        DataPreProcessingConfiguration: output.DataPreProcessingConfiguration !== undefined && output.DataPreProcessingConfiguration !== null
            ? deserializeAws_json1_0DataPreProcessingConfiguration(output.DataPreProcessingConfiguration, context)
            : undefined,
        DatasetArn: output.DatasetArn !== undefined && output.DatasetArn !== null ? output.DatasetArn : undefined,
        DatasetName: output.DatasetName !== undefined && output.DatasetName !== null ? output.DatasetName : undefined,
        EvaluationDataEndTime: output.EvaluationDataEndTime !== undefined && output.EvaluationDataEndTime !== null
            ? new Date(Math.round(output.EvaluationDataEndTime * 1000))
            : undefined,
        EvaluationDataStartTime: output.EvaluationDataStartTime !== undefined && output.EvaluationDataStartTime !== null
            ? new Date(Math.round(output.EvaluationDataStartTime * 1000))
            : undefined,
        FailedReason: output.FailedReason !== undefined && output.FailedReason !== null ? output.FailedReason : undefined,
        LabelsInputConfiguration: output.LabelsInputConfiguration !== undefined && output.LabelsInputConfiguration !== null
            ? deserializeAws_json1_0LabelsInputConfiguration(output.LabelsInputConfiguration, context)
            : undefined,
        LastUpdatedTime: output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
            ? new Date(Math.round(output.LastUpdatedTime * 1000))
            : undefined,
        ModelArn: output.ModelArn !== undefined && output.ModelArn !== null ? output.ModelArn : undefined,
        ModelMetrics: output.ModelMetrics !== undefined && output.ModelMetrics !== null
            ? new smithy_client_1.LazyJsonString(output.ModelMetrics)
            : undefined,
        ModelName: output.ModelName !== undefined && output.ModelName !== null ? output.ModelName : undefined,
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
        Schema: output.Schema !== undefined && output.Schema !== null ? new smithy_client_1.LazyJsonString(output.Schema) : undefined,
        ServerSideKmsKeyId: output.ServerSideKmsKeyId !== undefined && output.ServerSideKmsKeyId !== null
            ? output.ServerSideKmsKeyId
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        TrainingDataEndTime: output.TrainingDataEndTime !== undefined && output.TrainingDataEndTime !== null
            ? new Date(Math.round(output.TrainingDataEndTime * 1000))
            : undefined,
        TrainingDataStartTime: output.TrainingDataStartTime !== undefined && output.TrainingDataStartTime !== null
            ? new Date(Math.round(output.TrainingDataStartTime * 1000))
            : undefined,
        TrainingExecutionEndTime: output.TrainingExecutionEndTime !== undefined && output.TrainingExecutionEndTime !== null
            ? new Date(Math.round(output.TrainingExecutionEndTime * 1000))
            : undefined,
        TrainingExecutionStartTime: output.TrainingExecutionStartTime !== undefined && output.TrainingExecutionStartTime !== null
            ? new Date(Math.round(output.TrainingExecutionStartTime * 1000))
            : undefined,
    };
};
const deserializeAws_json1_0InferenceExecutionSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0InferenceExecutionSummary(entry, context);
    });
};
const deserializeAws_json1_0InferenceExecutionSummary = (output, context) => {
    return {
        CustomerResultObject: output.CustomerResultObject !== undefined && output.CustomerResultObject !== null
            ? deserializeAws_json1_0S3Object(output.CustomerResultObject, context)
            : undefined,
        DataEndTime: output.DataEndTime !== undefined && output.DataEndTime !== null
            ? new Date(Math.round(output.DataEndTime * 1000))
            : undefined,
        DataInputConfiguration: output.DataInputConfiguration !== undefined && output.DataInputConfiguration !== null
            ? deserializeAws_json1_0InferenceInputConfiguration(output.DataInputConfiguration, context)
            : undefined,
        DataOutputConfiguration: output.DataOutputConfiguration !== undefined && output.DataOutputConfiguration !== null
            ? deserializeAws_json1_0InferenceOutputConfiguration(output.DataOutputConfiguration, context)
            : undefined,
        DataStartTime: output.DataStartTime !== undefined && output.DataStartTime !== null
            ? new Date(Math.round(output.DataStartTime * 1000))
            : undefined,
        FailedReason: output.FailedReason !== undefined && output.FailedReason !== null ? output.FailedReason : undefined,
        InferenceSchedulerArn: output.InferenceSchedulerArn !== undefined && output.InferenceSchedulerArn !== null
            ? output.InferenceSchedulerArn
            : undefined,
        InferenceSchedulerName: output.InferenceSchedulerName !== undefined && output.InferenceSchedulerName !== null
            ? output.InferenceSchedulerName
            : undefined,
        ModelArn: output.ModelArn !== undefined && output.ModelArn !== null ? output.ModelArn : undefined,
        ModelName: output.ModelName !== undefined && output.ModelName !== null ? output.ModelName : undefined,
        ScheduledStartTime: output.ScheduledStartTime !== undefined && output.ScheduledStartTime !== null
            ? new Date(Math.round(output.ScheduledStartTime * 1000))
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_0InferenceInputConfiguration = (output, context) => {
    return {
        InferenceInputNameConfiguration: output.InferenceInputNameConfiguration !== undefined && output.InferenceInputNameConfiguration !== null
            ? deserializeAws_json1_0InferenceInputNameConfiguration(output.InferenceInputNameConfiguration, context)
            : undefined,
        InputTimeZoneOffset: output.InputTimeZoneOffset !== undefined && output.InputTimeZoneOffset !== null
            ? output.InputTimeZoneOffset
            : undefined,
        S3InputConfiguration: output.S3InputConfiguration !== undefined && output.S3InputConfiguration !== null
            ? deserializeAws_json1_0InferenceS3InputConfiguration(output.S3InputConfiguration, context)
            : undefined,
    };
};
const deserializeAws_json1_0InferenceInputNameConfiguration = (output, context) => {
    return {
        ComponentTimestampDelimiter: output.ComponentTimestampDelimiter !== undefined && output.ComponentTimestampDelimiter !== null
            ? output.ComponentTimestampDelimiter
            : undefined,
        TimestampFormat: output.TimestampFormat !== undefined && output.TimestampFormat !== null ? output.TimestampFormat : undefined,
    };
};
const deserializeAws_json1_0InferenceOutputConfiguration = (output, context) => {
    return {
        KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
        S3OutputConfiguration: output.S3OutputConfiguration !== undefined && output.S3OutputConfiguration !== null
            ? deserializeAws_json1_0InferenceS3OutputConfiguration(output.S3OutputConfiguration, context)
            : undefined,
    };
};
const deserializeAws_json1_0InferenceS3InputConfiguration = (output, context) => {
    return {
        Bucket: output.Bucket !== undefined && output.Bucket !== null ? output.Bucket : undefined,
        Prefix: output.Prefix !== undefined && output.Prefix !== null ? output.Prefix : undefined,
    };
};
const deserializeAws_json1_0InferenceS3OutputConfiguration = (output, context) => {
    return {
        Bucket: output.Bucket !== undefined && output.Bucket !== null ? output.Bucket : undefined,
        Prefix: output.Prefix !== undefined && output.Prefix !== null ? output.Prefix : undefined,
    };
};
const deserializeAws_json1_0InferenceSchedulerSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0InferenceSchedulerSummary(entry, context);
    });
};
const deserializeAws_json1_0InferenceSchedulerSummary = (output, context) => {
    return {
        DataDelayOffsetInMinutes: output.DataDelayOffsetInMinutes !== undefined && output.DataDelayOffsetInMinutes !== null
            ? output.DataDelayOffsetInMinutes
            : undefined,
        DataUploadFrequency: output.DataUploadFrequency !== undefined && output.DataUploadFrequency !== null
            ? output.DataUploadFrequency
            : undefined,
        InferenceSchedulerArn: output.InferenceSchedulerArn !== undefined && output.InferenceSchedulerArn !== null
            ? output.InferenceSchedulerArn
            : undefined,
        InferenceSchedulerName: output.InferenceSchedulerName !== undefined && output.InferenceSchedulerName !== null
            ? output.InferenceSchedulerName
            : undefined,
        ModelArn: output.ModelArn !== undefined && output.ModelArn !== null ? output.ModelArn : undefined,
        ModelName: output.ModelName !== undefined && output.ModelName !== null ? output.ModelName : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_0IngestionInputConfiguration = (output, context) => {
    return {
        S3InputConfiguration: output.S3InputConfiguration !== undefined && output.S3InputConfiguration !== null
            ? deserializeAws_json1_0IngestionS3InputConfiguration(output.S3InputConfiguration, context)
            : undefined,
    };
};
const deserializeAws_json1_0IngestionS3InputConfiguration = (output, context) => {
    return {
        Bucket: output.Bucket !== undefined && output.Bucket !== null ? output.Bucket : undefined,
        Prefix: output.Prefix !== undefined && output.Prefix !== null ? output.Prefix : undefined,
    };
};
const deserializeAws_json1_0InternalServerException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0LabelsInputConfiguration = (output, context) => {
    return {
        S3InputConfiguration: output.S3InputConfiguration !== undefined && output.S3InputConfiguration !== null
            ? deserializeAws_json1_0LabelsS3InputConfiguration(output.S3InputConfiguration, context)
            : undefined,
    };
};
const deserializeAws_json1_0LabelsS3InputConfiguration = (output, context) => {
    return {
        Bucket: output.Bucket !== undefined && output.Bucket !== null ? output.Bucket : undefined,
        Prefix: output.Prefix !== undefined && output.Prefix !== null ? output.Prefix : undefined,
    };
};
const deserializeAws_json1_0ListDataIngestionJobsResponse = (output, context) => {
    return {
        DataIngestionJobSummaries: output.DataIngestionJobSummaries !== undefined && output.DataIngestionJobSummaries !== null
            ? deserializeAws_json1_0DataIngestionJobSummaries(output.DataIngestionJobSummaries, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_0ListDatasetsResponse = (output, context) => {
    return {
        DatasetSummaries: output.DatasetSummaries !== undefined && output.DatasetSummaries !== null
            ? deserializeAws_json1_0DatasetSummaries(output.DatasetSummaries, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_0ListInferenceExecutionsResponse = (output, context) => {
    return {
        InferenceExecutionSummaries: output.InferenceExecutionSummaries !== undefined && output.InferenceExecutionSummaries !== null
            ? deserializeAws_json1_0InferenceExecutionSummaries(output.InferenceExecutionSummaries, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_0ListInferenceSchedulersResponse = (output, context) => {
    return {
        InferenceSchedulerSummaries: output.InferenceSchedulerSummaries !== undefined && output.InferenceSchedulerSummaries !== null
            ? deserializeAws_json1_0InferenceSchedulerSummaries(output.InferenceSchedulerSummaries, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_0ListModelsResponse = (output, context) => {
    return {
        ModelSummaries: output.ModelSummaries !== undefined && output.ModelSummaries !== null
            ? deserializeAws_json1_0ModelSummaries(output.ModelSummaries, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_0ListTagsForResourceResponse = (output, context) => {
    return {
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_0TagList(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_json1_0ModelSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0ModelSummary(entry, context);
    });
};
const deserializeAws_json1_0ModelSummary = (output, context) => {
    return {
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        DatasetArn: output.DatasetArn !== undefined && output.DatasetArn !== null ? output.DatasetArn : undefined,
        DatasetName: output.DatasetName !== undefined && output.DatasetName !== null ? output.DatasetName : undefined,
        ModelArn: output.ModelArn !== undefined && output.ModelArn !== null ? output.ModelArn : undefined,
        ModelName: output.ModelName !== undefined && output.ModelName !== null ? output.ModelName : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_0ResourceNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0S3Object = (output, context) => {
    return {
        Bucket: output.Bucket !== undefined && output.Bucket !== null ? output.Bucket : undefined,
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    };
};
const deserializeAws_json1_0ServiceQuotaExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0StartDataIngestionJobResponse = (output, context) => {
    return {
        JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_0StartInferenceSchedulerResponse = (output, context) => {
    return {
        InferenceSchedulerArn: output.InferenceSchedulerArn !== undefined && output.InferenceSchedulerArn !== null
            ? output.InferenceSchedulerArn
            : undefined,
        InferenceSchedulerName: output.InferenceSchedulerName !== undefined && output.InferenceSchedulerName !== null
            ? output.InferenceSchedulerName
            : undefined,
        ModelArn: output.ModelArn !== undefined && output.ModelArn !== null ? output.ModelArn : undefined,
        ModelName: output.ModelName !== undefined && output.ModelName !== null ? output.ModelName : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_0StopInferenceSchedulerResponse = (output, context) => {
    return {
        InferenceSchedulerArn: output.InferenceSchedulerArn !== undefined && output.InferenceSchedulerArn !== null
            ? output.InferenceSchedulerArn
            : undefined,
        InferenceSchedulerName: output.InferenceSchedulerName !== undefined && output.InferenceSchedulerName !== null
            ? output.InferenceSchedulerName
            : undefined,
        ModelArn: output.ModelArn !== undefined && output.ModelArn !== null ? output.ModelArn : undefined,
        ModelName: output.ModelName !== undefined && output.ModelName !== null ? output.ModelName : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
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
const deserializeAws_json1_0TagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_0ThrottlingException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0UntagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_0ValidationException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
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