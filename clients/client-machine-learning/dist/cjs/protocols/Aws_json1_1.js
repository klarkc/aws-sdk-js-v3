"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1GetEvaluationCommand = exports.deserializeAws_json1_1GetDataSourceCommand = exports.deserializeAws_json1_1GetBatchPredictionCommand = exports.deserializeAws_json1_1DescribeTagsCommand = exports.deserializeAws_json1_1DescribeMLModelsCommand = exports.deserializeAws_json1_1DescribeEvaluationsCommand = exports.deserializeAws_json1_1DescribeDataSourcesCommand = exports.deserializeAws_json1_1DescribeBatchPredictionsCommand = exports.deserializeAws_json1_1DeleteTagsCommand = exports.deserializeAws_json1_1DeleteRealtimeEndpointCommand = exports.deserializeAws_json1_1DeleteMLModelCommand = exports.deserializeAws_json1_1DeleteEvaluationCommand = exports.deserializeAws_json1_1DeleteDataSourceCommand = exports.deserializeAws_json1_1DeleteBatchPredictionCommand = exports.deserializeAws_json1_1CreateRealtimeEndpointCommand = exports.deserializeAws_json1_1CreateMLModelCommand = exports.deserializeAws_json1_1CreateEvaluationCommand = exports.deserializeAws_json1_1CreateDataSourceFromS3Command = exports.deserializeAws_json1_1CreateDataSourceFromRedshiftCommand = exports.deserializeAws_json1_1CreateDataSourceFromRDSCommand = exports.deserializeAws_json1_1CreateBatchPredictionCommand = exports.deserializeAws_json1_1AddTagsCommand = exports.serializeAws_json1_1UpdateMLModelCommand = exports.serializeAws_json1_1UpdateEvaluationCommand = exports.serializeAws_json1_1UpdateDataSourceCommand = exports.serializeAws_json1_1UpdateBatchPredictionCommand = exports.serializeAws_json1_1PredictCommand = exports.serializeAws_json1_1GetMLModelCommand = exports.serializeAws_json1_1GetEvaluationCommand = exports.serializeAws_json1_1GetDataSourceCommand = exports.serializeAws_json1_1GetBatchPredictionCommand = exports.serializeAws_json1_1DescribeTagsCommand = exports.serializeAws_json1_1DescribeMLModelsCommand = exports.serializeAws_json1_1DescribeEvaluationsCommand = exports.serializeAws_json1_1DescribeDataSourcesCommand = exports.serializeAws_json1_1DescribeBatchPredictionsCommand = exports.serializeAws_json1_1DeleteTagsCommand = exports.serializeAws_json1_1DeleteRealtimeEndpointCommand = exports.serializeAws_json1_1DeleteMLModelCommand = exports.serializeAws_json1_1DeleteEvaluationCommand = exports.serializeAws_json1_1DeleteDataSourceCommand = exports.serializeAws_json1_1DeleteBatchPredictionCommand = exports.serializeAws_json1_1CreateRealtimeEndpointCommand = exports.serializeAws_json1_1CreateMLModelCommand = exports.serializeAws_json1_1CreateEvaluationCommand = exports.serializeAws_json1_1CreateDataSourceFromS3Command = exports.serializeAws_json1_1CreateDataSourceFromRedshiftCommand = exports.serializeAws_json1_1CreateDataSourceFromRDSCommand = exports.serializeAws_json1_1CreateBatchPredictionCommand = exports.serializeAws_json1_1AddTagsCommand = void 0;
exports.deserializeAws_json1_1UpdateMLModelCommand = exports.deserializeAws_json1_1UpdateEvaluationCommand = exports.deserializeAws_json1_1UpdateDataSourceCommand = exports.deserializeAws_json1_1UpdateBatchPredictionCommand = exports.deserializeAws_json1_1PredictCommand = exports.deserializeAws_json1_1GetMLModelCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1AddTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonML_20141212.AddTags",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AddTagsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AddTagsCommand = serializeAws_json1_1AddTagsCommand;
const serializeAws_json1_1CreateBatchPredictionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonML_20141212.CreateBatchPrediction",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateBatchPredictionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateBatchPredictionCommand = serializeAws_json1_1CreateBatchPredictionCommand;
const serializeAws_json1_1CreateDataSourceFromRDSCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonML_20141212.CreateDataSourceFromRDS",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDataSourceFromRDSInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateDataSourceFromRDSCommand = serializeAws_json1_1CreateDataSourceFromRDSCommand;
const serializeAws_json1_1CreateDataSourceFromRedshiftCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonML_20141212.CreateDataSourceFromRedshift",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDataSourceFromRedshiftInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateDataSourceFromRedshiftCommand = serializeAws_json1_1CreateDataSourceFromRedshiftCommand;
const serializeAws_json1_1CreateDataSourceFromS3Command = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonML_20141212.CreateDataSourceFromS3",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDataSourceFromS3Input(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateDataSourceFromS3Command = serializeAws_json1_1CreateDataSourceFromS3Command;
const serializeAws_json1_1CreateEvaluationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonML_20141212.CreateEvaluation",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateEvaluationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateEvaluationCommand = serializeAws_json1_1CreateEvaluationCommand;
const serializeAws_json1_1CreateMLModelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonML_20141212.CreateMLModel",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateMLModelInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateMLModelCommand = serializeAws_json1_1CreateMLModelCommand;
const serializeAws_json1_1CreateRealtimeEndpointCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonML_20141212.CreateRealtimeEndpoint",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateRealtimeEndpointInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateRealtimeEndpointCommand = serializeAws_json1_1CreateRealtimeEndpointCommand;
const serializeAws_json1_1DeleteBatchPredictionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonML_20141212.DeleteBatchPrediction",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteBatchPredictionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteBatchPredictionCommand = serializeAws_json1_1DeleteBatchPredictionCommand;
const serializeAws_json1_1DeleteDataSourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonML_20141212.DeleteDataSource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDataSourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteDataSourceCommand = serializeAws_json1_1DeleteDataSourceCommand;
const serializeAws_json1_1DeleteEvaluationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonML_20141212.DeleteEvaluation",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteEvaluationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteEvaluationCommand = serializeAws_json1_1DeleteEvaluationCommand;
const serializeAws_json1_1DeleteMLModelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonML_20141212.DeleteMLModel",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteMLModelInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteMLModelCommand = serializeAws_json1_1DeleteMLModelCommand;
const serializeAws_json1_1DeleteRealtimeEndpointCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonML_20141212.DeleteRealtimeEndpoint",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteRealtimeEndpointInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteRealtimeEndpointCommand = serializeAws_json1_1DeleteRealtimeEndpointCommand;
const serializeAws_json1_1DeleteTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonML_20141212.DeleteTags",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteTagsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteTagsCommand = serializeAws_json1_1DeleteTagsCommand;
const serializeAws_json1_1DescribeBatchPredictionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonML_20141212.DescribeBatchPredictions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeBatchPredictionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeBatchPredictionsCommand = serializeAws_json1_1DescribeBatchPredictionsCommand;
const serializeAws_json1_1DescribeDataSourcesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonML_20141212.DescribeDataSources",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDataSourcesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeDataSourcesCommand = serializeAws_json1_1DescribeDataSourcesCommand;
const serializeAws_json1_1DescribeEvaluationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonML_20141212.DescribeEvaluations",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEvaluationsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeEvaluationsCommand = serializeAws_json1_1DescribeEvaluationsCommand;
const serializeAws_json1_1DescribeMLModelsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonML_20141212.DescribeMLModels",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeMLModelsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeMLModelsCommand = serializeAws_json1_1DescribeMLModelsCommand;
const serializeAws_json1_1DescribeTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonML_20141212.DescribeTags",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTagsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeTagsCommand = serializeAws_json1_1DescribeTagsCommand;
const serializeAws_json1_1GetBatchPredictionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonML_20141212.GetBatchPrediction",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetBatchPredictionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetBatchPredictionCommand = serializeAws_json1_1GetBatchPredictionCommand;
const serializeAws_json1_1GetDataSourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonML_20141212.GetDataSource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDataSourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetDataSourceCommand = serializeAws_json1_1GetDataSourceCommand;
const serializeAws_json1_1GetEvaluationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonML_20141212.GetEvaluation",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetEvaluationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetEvaluationCommand = serializeAws_json1_1GetEvaluationCommand;
const serializeAws_json1_1GetMLModelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonML_20141212.GetMLModel",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetMLModelInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetMLModelCommand = serializeAws_json1_1GetMLModelCommand;
const serializeAws_json1_1PredictCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonML_20141212.Predict",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PredictInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PredictCommand = serializeAws_json1_1PredictCommand;
const serializeAws_json1_1UpdateBatchPredictionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonML_20141212.UpdateBatchPrediction",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateBatchPredictionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateBatchPredictionCommand = serializeAws_json1_1UpdateBatchPredictionCommand;
const serializeAws_json1_1UpdateDataSourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonML_20141212.UpdateDataSource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDataSourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateDataSourceCommand = serializeAws_json1_1UpdateDataSourceCommand;
const serializeAws_json1_1UpdateEvaluationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonML_20141212.UpdateEvaluation",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateEvaluationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateEvaluationCommand = serializeAws_json1_1UpdateEvaluationCommand;
const serializeAws_json1_1UpdateMLModelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonML_20141212.UpdateMLModel",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateMLModelInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateMLModelCommand = serializeAws_json1_1UpdateMLModelCommand;
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
        case "InternalServerException":
        case "com.amazonaws.machinelearning#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.machinelearning#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagException":
        case "com.amazonaws.machinelearning#InvalidTagException":
            response = {
                ...(await deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.machinelearning#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagLimitExceededException":
        case "com.amazonaws.machinelearning#TagLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1TagLimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateBatchPredictionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateBatchPredictionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateBatchPredictionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateBatchPredictionCommand = deserializeAws_json1_1CreateBatchPredictionCommand;
const deserializeAws_json1_1CreateBatchPredictionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.machinelearning#IdempotentParameterMismatchException":
            response = {
                ...(await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.machinelearning#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.machinelearning#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateDataSourceFromRDSCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateDataSourceFromRDSCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDataSourceFromRDSOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateDataSourceFromRDSCommand = deserializeAws_json1_1CreateDataSourceFromRDSCommand;
const deserializeAws_json1_1CreateDataSourceFromRDSCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.machinelearning#IdempotentParameterMismatchException":
            response = {
                ...(await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.machinelearning#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.machinelearning#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateDataSourceFromRedshiftCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateDataSourceFromRedshiftCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDataSourceFromRedshiftOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateDataSourceFromRedshiftCommand = deserializeAws_json1_1CreateDataSourceFromRedshiftCommand;
const deserializeAws_json1_1CreateDataSourceFromRedshiftCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.machinelearning#IdempotentParameterMismatchException":
            response = {
                ...(await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.machinelearning#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.machinelearning#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateDataSourceFromS3Command = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateDataSourceFromS3CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDataSourceFromS3Output(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateDataSourceFromS3Command = deserializeAws_json1_1CreateDataSourceFromS3Command;
const deserializeAws_json1_1CreateDataSourceFromS3CommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.machinelearning#IdempotentParameterMismatchException":
            response = {
                ...(await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.machinelearning#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.machinelearning#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateEvaluationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateEvaluationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateEvaluationOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateEvaluationCommand = deserializeAws_json1_1CreateEvaluationCommand;
const deserializeAws_json1_1CreateEvaluationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.machinelearning#IdempotentParameterMismatchException":
            response = {
                ...(await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.machinelearning#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.machinelearning#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateMLModelCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateMLModelCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateMLModelOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateMLModelCommand = deserializeAws_json1_1CreateMLModelCommand;
const deserializeAws_json1_1CreateMLModelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.machinelearning#IdempotentParameterMismatchException":
            response = {
                ...(await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.machinelearning#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.machinelearning#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateRealtimeEndpointCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateRealtimeEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateRealtimeEndpointOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateRealtimeEndpointCommand = deserializeAws_json1_1CreateRealtimeEndpointCommand;
const deserializeAws_json1_1CreateRealtimeEndpointCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.machinelearning#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.machinelearning#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.machinelearning#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteBatchPredictionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteBatchPredictionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteBatchPredictionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteBatchPredictionCommand = deserializeAws_json1_1DeleteBatchPredictionCommand;
const deserializeAws_json1_1DeleteBatchPredictionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.machinelearning#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.machinelearning#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.machinelearning#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteDataSourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteDataSourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteDataSourceOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteDataSourceCommand = deserializeAws_json1_1DeleteDataSourceCommand;
const deserializeAws_json1_1DeleteDataSourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.machinelearning#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.machinelearning#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.machinelearning#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteEvaluationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteEvaluationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteEvaluationOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteEvaluationCommand = deserializeAws_json1_1DeleteEvaluationCommand;
const deserializeAws_json1_1DeleteEvaluationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.machinelearning#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.machinelearning#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.machinelearning#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteMLModelCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteMLModelCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteMLModelOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteMLModelCommand = deserializeAws_json1_1DeleteMLModelCommand;
const deserializeAws_json1_1DeleteMLModelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.machinelearning#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.machinelearning#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.machinelearning#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteRealtimeEndpointCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteRealtimeEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteRealtimeEndpointOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteRealtimeEndpointCommand = deserializeAws_json1_1DeleteRealtimeEndpointCommand;
const deserializeAws_json1_1DeleteRealtimeEndpointCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.machinelearning#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.machinelearning#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.machinelearning#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteTagsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteTagsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteTagsCommand = deserializeAws_json1_1DeleteTagsCommand;
const deserializeAws_json1_1DeleteTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.machinelearning#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.machinelearning#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagException":
        case "com.amazonaws.machinelearning#InvalidTagException":
            response = {
                ...(await deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.machinelearning#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeBatchPredictionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeBatchPredictionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeBatchPredictionsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeBatchPredictionsCommand = deserializeAws_json1_1DescribeBatchPredictionsCommand;
const deserializeAws_json1_1DescribeBatchPredictionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.machinelearning#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.machinelearning#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeDataSourcesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeDataSourcesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDataSourcesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeDataSourcesCommand = deserializeAws_json1_1DescribeDataSourcesCommand;
const deserializeAws_json1_1DescribeDataSourcesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.machinelearning#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.machinelearning#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeEvaluationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeEvaluationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEvaluationsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeEvaluationsCommand = deserializeAws_json1_1DescribeEvaluationsCommand;
const deserializeAws_json1_1DescribeEvaluationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.machinelearning#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.machinelearning#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeMLModelsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeMLModelsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeMLModelsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeMLModelsCommand = deserializeAws_json1_1DescribeMLModelsCommand;
const deserializeAws_json1_1DescribeMLModelsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.machinelearning#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.machinelearning#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeTagsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTagsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeTagsCommand = deserializeAws_json1_1DescribeTagsCommand;
const deserializeAws_json1_1DescribeTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.machinelearning#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.machinelearning#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.machinelearning#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetBatchPredictionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetBatchPredictionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetBatchPredictionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetBatchPredictionCommand = deserializeAws_json1_1GetBatchPredictionCommand;
const deserializeAws_json1_1GetBatchPredictionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.machinelearning#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.machinelearning#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.machinelearning#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetDataSourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetDataSourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDataSourceOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetDataSourceCommand = deserializeAws_json1_1GetDataSourceCommand;
const deserializeAws_json1_1GetDataSourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.machinelearning#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.machinelearning#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.machinelearning#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetEvaluationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetEvaluationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetEvaluationOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetEvaluationCommand = deserializeAws_json1_1GetEvaluationCommand;
const deserializeAws_json1_1GetEvaluationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.machinelearning#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.machinelearning#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.machinelearning#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetMLModelCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetMLModelCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetMLModelOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetMLModelCommand = deserializeAws_json1_1GetMLModelCommand;
const deserializeAws_json1_1GetMLModelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.machinelearning#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.machinelearning#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.machinelearning#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1PredictCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PredictCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PredictOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PredictCommand = deserializeAws_json1_1PredictCommand;
const deserializeAws_json1_1PredictCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.machinelearning#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.machinelearning#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.machinelearning#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PredictorNotMountedException":
        case "com.amazonaws.machinelearning#PredictorNotMountedException":
            response = {
                ...(await deserializeAws_json1_1PredictorNotMountedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.machinelearning#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateBatchPredictionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateBatchPredictionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateBatchPredictionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateBatchPredictionCommand = deserializeAws_json1_1UpdateBatchPredictionCommand;
const deserializeAws_json1_1UpdateBatchPredictionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.machinelearning#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.machinelearning#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.machinelearning#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateDataSourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateDataSourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateDataSourceOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateDataSourceCommand = deserializeAws_json1_1UpdateDataSourceCommand;
const deserializeAws_json1_1UpdateDataSourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.machinelearning#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.machinelearning#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.machinelearning#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateEvaluationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateEvaluationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateEvaluationOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateEvaluationCommand = deserializeAws_json1_1UpdateEvaluationCommand;
const deserializeAws_json1_1UpdateEvaluationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.machinelearning#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.machinelearning#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.machinelearning#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateMLModelCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateMLModelCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateMLModelOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateMLModelCommand = deserializeAws_json1_1UpdateMLModelCommand;
const deserializeAws_json1_1UpdateMLModelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.machinelearning#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.machinelearning#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.machinelearning#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1IdempotentParameterMismatchException(body, context);
    const contents = {
        name: "IdempotentParameterMismatchException",
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
const deserializeAws_json1_1InvalidInputExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidInputException(body, context);
    const contents = {
        name: "InvalidInputException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidTagExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTagException(body, context);
    const contents = {
        name: "InvalidTagException",
        $fault: "client",
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
const deserializeAws_json1_1PredictorNotMountedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PredictorNotMountedException(body, context);
    const contents = {
        name: "PredictorNotMountedException",
        $fault: "client",
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
const deserializeAws_json1_1TagLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TagLimitExceededException(body, context);
    const contents = {
        name: "TagLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1AddTagsInput = (input, context) => {
    return {
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
        ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateBatchPredictionInput = (input, context) => {
    return {
        ...(input.BatchPredictionDataSourceId !== undefined &&
            input.BatchPredictionDataSourceId !== null && { BatchPredictionDataSourceId: input.BatchPredictionDataSourceId }),
        ...(input.BatchPredictionId !== undefined &&
            input.BatchPredictionId !== null && { BatchPredictionId: input.BatchPredictionId }),
        ...(input.BatchPredictionName !== undefined &&
            input.BatchPredictionName !== null && { BatchPredictionName: input.BatchPredictionName }),
        ...(input.MLModelId !== undefined && input.MLModelId !== null && { MLModelId: input.MLModelId }),
        ...(input.OutputUri !== undefined && input.OutputUri !== null && { OutputUri: input.OutputUri }),
    };
};
const serializeAws_json1_1CreateDataSourceFromRDSInput = (input, context) => {
    return {
        ...(input.ComputeStatistics !== undefined &&
            input.ComputeStatistics !== null && { ComputeStatistics: input.ComputeStatistics }),
        ...(input.DataSourceId !== undefined && input.DataSourceId !== null && { DataSourceId: input.DataSourceId }),
        ...(input.DataSourceName !== undefined &&
            input.DataSourceName !== null && { DataSourceName: input.DataSourceName }),
        ...(input.RDSData !== undefined &&
            input.RDSData !== null && { RDSData: serializeAws_json1_1RDSDataSpec(input.RDSData, context) }),
        ...(input.RoleARN !== undefined && input.RoleARN !== null && { RoleARN: input.RoleARN }),
    };
};
const serializeAws_json1_1CreateDataSourceFromRedshiftInput = (input, context) => {
    return {
        ...(input.ComputeStatistics !== undefined &&
            input.ComputeStatistics !== null && { ComputeStatistics: input.ComputeStatistics }),
        ...(input.DataSourceId !== undefined && input.DataSourceId !== null && { DataSourceId: input.DataSourceId }),
        ...(input.DataSourceName !== undefined &&
            input.DataSourceName !== null && { DataSourceName: input.DataSourceName }),
        ...(input.DataSpec !== undefined &&
            input.DataSpec !== null && { DataSpec: serializeAws_json1_1RedshiftDataSpec(input.DataSpec, context) }),
        ...(input.RoleARN !== undefined && input.RoleARN !== null && { RoleARN: input.RoleARN }),
    };
};
const serializeAws_json1_1CreateDataSourceFromS3Input = (input, context) => {
    return {
        ...(input.ComputeStatistics !== undefined &&
            input.ComputeStatistics !== null && { ComputeStatistics: input.ComputeStatistics }),
        ...(input.DataSourceId !== undefined && input.DataSourceId !== null && { DataSourceId: input.DataSourceId }),
        ...(input.DataSourceName !== undefined &&
            input.DataSourceName !== null && { DataSourceName: input.DataSourceName }),
        ...(input.DataSpec !== undefined &&
            input.DataSpec !== null && { DataSpec: serializeAws_json1_1S3DataSpec(input.DataSpec, context) }),
    };
};
const serializeAws_json1_1CreateEvaluationInput = (input, context) => {
    return {
        ...(input.EvaluationDataSourceId !== undefined &&
            input.EvaluationDataSourceId !== null && { EvaluationDataSourceId: input.EvaluationDataSourceId }),
        ...(input.EvaluationId !== undefined && input.EvaluationId !== null && { EvaluationId: input.EvaluationId }),
        ...(input.EvaluationName !== undefined &&
            input.EvaluationName !== null && { EvaluationName: input.EvaluationName }),
        ...(input.MLModelId !== undefined && input.MLModelId !== null && { MLModelId: input.MLModelId }),
    };
};
const serializeAws_json1_1CreateMLModelInput = (input, context) => {
    return {
        ...(input.MLModelId !== undefined && input.MLModelId !== null && { MLModelId: input.MLModelId }),
        ...(input.MLModelName !== undefined && input.MLModelName !== null && { MLModelName: input.MLModelName }),
        ...(input.MLModelType !== undefined && input.MLModelType !== null && { MLModelType: input.MLModelType }),
        ...(input.Parameters !== undefined &&
            input.Parameters !== null && { Parameters: serializeAws_json1_1TrainingParameters(input.Parameters, context) }),
        ...(input.Recipe !== undefined && input.Recipe !== null && { Recipe: input.Recipe }),
        ...(input.RecipeUri !== undefined && input.RecipeUri !== null && { RecipeUri: input.RecipeUri }),
        ...(input.TrainingDataSourceId !== undefined &&
            input.TrainingDataSourceId !== null && { TrainingDataSourceId: input.TrainingDataSourceId }),
    };
};
const serializeAws_json1_1CreateRealtimeEndpointInput = (input, context) => {
    return {
        ...(input.MLModelId !== undefined && input.MLModelId !== null && { MLModelId: input.MLModelId }),
    };
};
const serializeAws_json1_1DeleteBatchPredictionInput = (input, context) => {
    return {
        ...(input.BatchPredictionId !== undefined &&
            input.BatchPredictionId !== null && { BatchPredictionId: input.BatchPredictionId }),
    };
};
const serializeAws_json1_1DeleteDataSourceInput = (input, context) => {
    return {
        ...(input.DataSourceId !== undefined && input.DataSourceId !== null && { DataSourceId: input.DataSourceId }),
    };
};
const serializeAws_json1_1DeleteEvaluationInput = (input, context) => {
    return {
        ...(input.EvaluationId !== undefined && input.EvaluationId !== null && { EvaluationId: input.EvaluationId }),
    };
};
const serializeAws_json1_1DeleteMLModelInput = (input, context) => {
    return {
        ...(input.MLModelId !== undefined && input.MLModelId !== null && { MLModelId: input.MLModelId }),
    };
};
const serializeAws_json1_1DeleteRealtimeEndpointInput = (input, context) => {
    return {
        ...(input.MLModelId !== undefined && input.MLModelId !== null && { MLModelId: input.MLModelId }),
    };
};
const serializeAws_json1_1DeleteTagsInput = (input, context) => {
    return {
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
        ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
        ...(input.TagKeys !== undefined &&
            input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
    };
};
const serializeAws_json1_1DescribeBatchPredictionsInput = (input, context) => {
    return {
        ...(input.EQ !== undefined && input.EQ !== null && { EQ: input.EQ }),
        ...(input.FilterVariable !== undefined &&
            input.FilterVariable !== null && { FilterVariable: input.FilterVariable }),
        ...(input.GE !== undefined && input.GE !== null && { GE: input.GE }),
        ...(input.GT !== undefined && input.GT !== null && { GT: input.GT }),
        ...(input.LE !== undefined && input.LE !== null && { LE: input.LE }),
        ...(input.LT !== undefined && input.LT !== null && { LT: input.LT }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NE !== undefined && input.NE !== null && { NE: input.NE }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.Prefix !== undefined && input.Prefix !== null && { Prefix: input.Prefix }),
        ...(input.SortOrder !== undefined && input.SortOrder !== null && { SortOrder: input.SortOrder }),
    };
};
const serializeAws_json1_1DescribeDataSourcesInput = (input, context) => {
    return {
        ...(input.EQ !== undefined && input.EQ !== null && { EQ: input.EQ }),
        ...(input.FilterVariable !== undefined &&
            input.FilterVariable !== null && { FilterVariable: input.FilterVariable }),
        ...(input.GE !== undefined && input.GE !== null && { GE: input.GE }),
        ...(input.GT !== undefined && input.GT !== null && { GT: input.GT }),
        ...(input.LE !== undefined && input.LE !== null && { LE: input.LE }),
        ...(input.LT !== undefined && input.LT !== null && { LT: input.LT }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NE !== undefined && input.NE !== null && { NE: input.NE }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.Prefix !== undefined && input.Prefix !== null && { Prefix: input.Prefix }),
        ...(input.SortOrder !== undefined && input.SortOrder !== null && { SortOrder: input.SortOrder }),
    };
};
const serializeAws_json1_1DescribeEvaluationsInput = (input, context) => {
    return {
        ...(input.EQ !== undefined && input.EQ !== null && { EQ: input.EQ }),
        ...(input.FilterVariable !== undefined &&
            input.FilterVariable !== null && { FilterVariable: input.FilterVariable }),
        ...(input.GE !== undefined && input.GE !== null && { GE: input.GE }),
        ...(input.GT !== undefined && input.GT !== null && { GT: input.GT }),
        ...(input.LE !== undefined && input.LE !== null && { LE: input.LE }),
        ...(input.LT !== undefined && input.LT !== null && { LT: input.LT }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NE !== undefined && input.NE !== null && { NE: input.NE }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.Prefix !== undefined && input.Prefix !== null && { Prefix: input.Prefix }),
        ...(input.SortOrder !== undefined && input.SortOrder !== null && { SortOrder: input.SortOrder }),
    };
};
const serializeAws_json1_1DescribeMLModelsInput = (input, context) => {
    return {
        ...(input.EQ !== undefined && input.EQ !== null && { EQ: input.EQ }),
        ...(input.FilterVariable !== undefined &&
            input.FilterVariable !== null && { FilterVariable: input.FilterVariable }),
        ...(input.GE !== undefined && input.GE !== null && { GE: input.GE }),
        ...(input.GT !== undefined && input.GT !== null && { GT: input.GT }),
        ...(input.LE !== undefined && input.LE !== null && { LE: input.LE }),
        ...(input.LT !== undefined && input.LT !== null && { LT: input.LT }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NE !== undefined && input.NE !== null && { NE: input.NE }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.Prefix !== undefined && input.Prefix !== null && { Prefix: input.Prefix }),
        ...(input.SortOrder !== undefined && input.SortOrder !== null && { SortOrder: input.SortOrder }),
    };
};
const serializeAws_json1_1DescribeTagsInput = (input, context) => {
    return {
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
        ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
    };
};
const serializeAws_json1_1EDPSecurityGroupIds = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1GetBatchPredictionInput = (input, context) => {
    return {
        ...(input.BatchPredictionId !== undefined &&
            input.BatchPredictionId !== null && { BatchPredictionId: input.BatchPredictionId }),
    };
};
const serializeAws_json1_1GetDataSourceInput = (input, context) => {
    return {
        ...(input.DataSourceId !== undefined && input.DataSourceId !== null && { DataSourceId: input.DataSourceId }),
        ...(input.Verbose !== undefined && input.Verbose !== null && { Verbose: input.Verbose }),
    };
};
const serializeAws_json1_1GetEvaluationInput = (input, context) => {
    return {
        ...(input.EvaluationId !== undefined && input.EvaluationId !== null && { EvaluationId: input.EvaluationId }),
    };
};
const serializeAws_json1_1GetMLModelInput = (input, context) => {
    return {
        ...(input.MLModelId !== undefined && input.MLModelId !== null && { MLModelId: input.MLModelId }),
        ...(input.Verbose !== undefined && input.Verbose !== null && { Verbose: input.Verbose }),
    };
};
const serializeAws_json1_1PredictInput = (input, context) => {
    return {
        ...(input.MLModelId !== undefined && input.MLModelId !== null && { MLModelId: input.MLModelId }),
        ...(input.PredictEndpoint !== undefined &&
            input.PredictEndpoint !== null && { PredictEndpoint: input.PredictEndpoint }),
        ...(input.Record !== undefined &&
            input.Record !== null && { Record: serializeAws_json1_1Record(input.Record, context) }),
    };
};
const serializeAws_json1_1RDSDatabase = (input, context) => {
    return {
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.InstanceIdentifier !== undefined &&
            input.InstanceIdentifier !== null && { InstanceIdentifier: input.InstanceIdentifier }),
    };
};
const serializeAws_json1_1RDSDatabaseCredentials = (input, context) => {
    return {
        ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
    };
};
const serializeAws_json1_1RDSDataSpec = (input, context) => {
    return {
        ...(input.DataRearrangement !== undefined &&
            input.DataRearrangement !== null && { DataRearrangement: input.DataRearrangement }),
        ...(input.DataSchema !== undefined && input.DataSchema !== null && { DataSchema: input.DataSchema }),
        ...(input.DataSchemaUri !== undefined && input.DataSchemaUri !== null && { DataSchemaUri: input.DataSchemaUri }),
        ...(input.DatabaseCredentials !== undefined &&
            input.DatabaseCredentials !== null && {
            DatabaseCredentials: serializeAws_json1_1RDSDatabaseCredentials(input.DatabaseCredentials, context),
        }),
        ...(input.DatabaseInformation !== undefined &&
            input.DatabaseInformation !== null && {
            DatabaseInformation: serializeAws_json1_1RDSDatabase(input.DatabaseInformation, context),
        }),
        ...(input.ResourceRole !== undefined && input.ResourceRole !== null && { ResourceRole: input.ResourceRole }),
        ...(input.S3StagingLocation !== undefined &&
            input.S3StagingLocation !== null && { S3StagingLocation: input.S3StagingLocation }),
        ...(input.SecurityGroupIds !== undefined &&
            input.SecurityGroupIds !== null && {
            SecurityGroupIds: serializeAws_json1_1EDPSecurityGroupIds(input.SecurityGroupIds, context),
        }),
        ...(input.SelectSqlQuery !== undefined &&
            input.SelectSqlQuery !== null && { SelectSqlQuery: input.SelectSqlQuery }),
        ...(input.ServiceRole !== undefined && input.ServiceRole !== null && { ServiceRole: input.ServiceRole }),
        ...(input.SubnetId !== undefined && input.SubnetId !== null && { SubnetId: input.SubnetId }),
    };
};
const serializeAws_json1_1Record = (input, context) => {
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
const serializeAws_json1_1RedshiftDatabase = (input, context) => {
    return {
        ...(input.ClusterIdentifier !== undefined &&
            input.ClusterIdentifier !== null && { ClusterIdentifier: input.ClusterIdentifier }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    };
};
const serializeAws_json1_1RedshiftDatabaseCredentials = (input, context) => {
    return {
        ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
    };
};
const serializeAws_json1_1RedshiftDataSpec = (input, context) => {
    return {
        ...(input.DataRearrangement !== undefined &&
            input.DataRearrangement !== null && { DataRearrangement: input.DataRearrangement }),
        ...(input.DataSchema !== undefined && input.DataSchema !== null && { DataSchema: input.DataSchema }),
        ...(input.DataSchemaUri !== undefined && input.DataSchemaUri !== null && { DataSchemaUri: input.DataSchemaUri }),
        ...(input.DatabaseCredentials !== undefined &&
            input.DatabaseCredentials !== null && {
            DatabaseCredentials: serializeAws_json1_1RedshiftDatabaseCredentials(input.DatabaseCredentials, context),
        }),
        ...(input.DatabaseInformation !== undefined &&
            input.DatabaseInformation !== null && {
            DatabaseInformation: serializeAws_json1_1RedshiftDatabase(input.DatabaseInformation, context),
        }),
        ...(input.S3StagingLocation !== undefined &&
            input.S3StagingLocation !== null && { S3StagingLocation: input.S3StagingLocation }),
        ...(input.SelectSqlQuery !== undefined &&
            input.SelectSqlQuery !== null && { SelectSqlQuery: input.SelectSqlQuery }),
    };
};
const serializeAws_json1_1S3DataSpec = (input, context) => {
    return {
        ...(input.DataLocationS3 !== undefined &&
            input.DataLocationS3 !== null && { DataLocationS3: input.DataLocationS3 }),
        ...(input.DataRearrangement !== undefined &&
            input.DataRearrangement !== null && { DataRearrangement: input.DataRearrangement }),
        ...(input.DataSchema !== undefined && input.DataSchema !== null && { DataSchema: input.DataSchema }),
        ...(input.DataSchemaLocationS3 !== undefined &&
            input.DataSchemaLocationS3 !== null && { DataSchemaLocationS3: input.DataSchemaLocationS3 }),
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
const serializeAws_json1_1TrainingParameters = (input, context) => {
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
const serializeAws_json1_1UpdateBatchPredictionInput = (input, context) => {
    return {
        ...(input.BatchPredictionId !== undefined &&
            input.BatchPredictionId !== null && { BatchPredictionId: input.BatchPredictionId }),
        ...(input.BatchPredictionName !== undefined &&
            input.BatchPredictionName !== null && { BatchPredictionName: input.BatchPredictionName }),
    };
};
const serializeAws_json1_1UpdateDataSourceInput = (input, context) => {
    return {
        ...(input.DataSourceId !== undefined && input.DataSourceId !== null && { DataSourceId: input.DataSourceId }),
        ...(input.DataSourceName !== undefined &&
            input.DataSourceName !== null && { DataSourceName: input.DataSourceName }),
    };
};
const serializeAws_json1_1UpdateEvaluationInput = (input, context) => {
    return {
        ...(input.EvaluationId !== undefined && input.EvaluationId !== null && { EvaluationId: input.EvaluationId }),
        ...(input.EvaluationName !== undefined &&
            input.EvaluationName !== null && { EvaluationName: input.EvaluationName }),
    };
};
const serializeAws_json1_1UpdateMLModelInput = (input, context) => {
    return {
        ...(input.MLModelId !== undefined && input.MLModelId !== null && { MLModelId: input.MLModelId }),
        ...(input.MLModelName !== undefined && input.MLModelName !== null && { MLModelName: input.MLModelName }),
        ...(input.ScoreThreshold !== undefined &&
            input.ScoreThreshold !== null && { ScoreThreshold: input.ScoreThreshold }),
    };
};
const deserializeAws_json1_1AddTagsOutput = (output, context) => {
    return {
        ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    };
};
const deserializeAws_json1_1BatchPrediction = (output, context) => {
    return {
        BatchPredictionDataSourceId: output.BatchPredictionDataSourceId !== undefined && output.BatchPredictionDataSourceId !== null
            ? output.BatchPredictionDataSourceId
            : undefined,
        BatchPredictionId: output.BatchPredictionId !== undefined && output.BatchPredictionId !== null
            ? output.BatchPredictionId
            : undefined,
        ComputeTime: output.ComputeTime !== undefined && output.ComputeTime !== null ? output.ComputeTime : undefined,
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        CreatedByIamUser: output.CreatedByIamUser !== undefined && output.CreatedByIamUser !== null ? output.CreatedByIamUser : undefined,
        FinishedAt: output.FinishedAt !== undefined && output.FinishedAt !== null
            ? new Date(Math.round(output.FinishedAt * 1000))
            : undefined,
        InputDataLocationS3: output.InputDataLocationS3 !== undefined && output.InputDataLocationS3 !== null
            ? output.InputDataLocationS3
            : undefined,
        InvalidRecordCount: output.InvalidRecordCount !== undefined && output.InvalidRecordCount !== null
            ? output.InvalidRecordCount
            : undefined,
        LastUpdatedAt: output.LastUpdatedAt !== undefined && output.LastUpdatedAt !== null
            ? new Date(Math.round(output.LastUpdatedAt * 1000))
            : undefined,
        MLModelId: output.MLModelId !== undefined && output.MLModelId !== null ? output.MLModelId : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        OutputUri: output.OutputUri !== undefined && output.OutputUri !== null ? output.OutputUri : undefined,
        StartedAt: output.StartedAt !== undefined && output.StartedAt !== null
            ? new Date(Math.round(output.StartedAt * 1000))
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        TotalRecordCount: output.TotalRecordCount !== undefined && output.TotalRecordCount !== null ? output.TotalRecordCount : undefined,
    };
};
const deserializeAws_json1_1BatchPredictions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BatchPrediction(entry, context);
    });
};
const deserializeAws_json1_1CreateBatchPredictionOutput = (output, context) => {
    return {
        BatchPredictionId: output.BatchPredictionId !== undefined && output.BatchPredictionId !== null
            ? output.BatchPredictionId
            : undefined,
    };
};
const deserializeAws_json1_1CreateDataSourceFromRDSOutput = (output, context) => {
    return {
        DataSourceId: output.DataSourceId !== undefined && output.DataSourceId !== null ? output.DataSourceId : undefined,
    };
};
const deserializeAws_json1_1CreateDataSourceFromRedshiftOutput = (output, context) => {
    return {
        DataSourceId: output.DataSourceId !== undefined && output.DataSourceId !== null ? output.DataSourceId : undefined,
    };
};
const deserializeAws_json1_1CreateDataSourceFromS3Output = (output, context) => {
    return {
        DataSourceId: output.DataSourceId !== undefined && output.DataSourceId !== null ? output.DataSourceId : undefined,
    };
};
const deserializeAws_json1_1CreateEvaluationOutput = (output, context) => {
    return {
        EvaluationId: output.EvaluationId !== undefined && output.EvaluationId !== null ? output.EvaluationId : undefined,
    };
};
const deserializeAws_json1_1CreateMLModelOutput = (output, context) => {
    return {
        MLModelId: output.MLModelId !== undefined && output.MLModelId !== null ? output.MLModelId : undefined,
    };
};
const deserializeAws_json1_1CreateRealtimeEndpointOutput = (output, context) => {
    return {
        MLModelId: output.MLModelId !== undefined && output.MLModelId !== null ? output.MLModelId : undefined,
        RealtimeEndpointInfo: output.RealtimeEndpointInfo !== undefined && output.RealtimeEndpointInfo !== null
            ? deserializeAws_json1_1RealtimeEndpointInfo(output.RealtimeEndpointInfo, context)
            : undefined,
    };
};
const deserializeAws_json1_1DataSource = (output, context) => {
    return {
        ComputeStatistics: output.ComputeStatistics !== undefined && output.ComputeStatistics !== null
            ? output.ComputeStatistics
            : undefined,
        ComputeTime: output.ComputeTime !== undefined && output.ComputeTime !== null ? output.ComputeTime : undefined,
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        CreatedByIamUser: output.CreatedByIamUser !== undefined && output.CreatedByIamUser !== null ? output.CreatedByIamUser : undefined,
        DataLocationS3: output.DataLocationS3 !== undefined && output.DataLocationS3 !== null ? output.DataLocationS3 : undefined,
        DataRearrangement: output.DataRearrangement !== undefined && output.DataRearrangement !== null
            ? output.DataRearrangement
            : undefined,
        DataSizeInBytes: output.DataSizeInBytes !== undefined && output.DataSizeInBytes !== null ? output.DataSizeInBytes : undefined,
        DataSourceId: output.DataSourceId !== undefined && output.DataSourceId !== null ? output.DataSourceId : undefined,
        FinishedAt: output.FinishedAt !== undefined && output.FinishedAt !== null
            ? new Date(Math.round(output.FinishedAt * 1000))
            : undefined,
        LastUpdatedAt: output.LastUpdatedAt !== undefined && output.LastUpdatedAt !== null
            ? new Date(Math.round(output.LastUpdatedAt * 1000))
            : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        NumberOfFiles: output.NumberOfFiles !== undefined && output.NumberOfFiles !== null ? output.NumberOfFiles : undefined,
        RDSMetadata: output.RDSMetadata !== undefined && output.RDSMetadata !== null
            ? deserializeAws_json1_1RDSMetadata(output.RDSMetadata, context)
            : undefined,
        RedshiftMetadata: output.RedshiftMetadata !== undefined && output.RedshiftMetadata !== null
            ? deserializeAws_json1_1RedshiftMetadata(output.RedshiftMetadata, context)
            : undefined,
        RoleARN: output.RoleARN !== undefined && output.RoleARN !== null ? output.RoleARN : undefined,
        StartedAt: output.StartedAt !== undefined && output.StartedAt !== null
            ? new Date(Math.round(output.StartedAt * 1000))
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1DataSources = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DataSource(entry, context);
    });
};
const deserializeAws_json1_1DeleteBatchPredictionOutput = (output, context) => {
    return {
        BatchPredictionId: output.BatchPredictionId !== undefined && output.BatchPredictionId !== null
            ? output.BatchPredictionId
            : undefined,
    };
};
const deserializeAws_json1_1DeleteDataSourceOutput = (output, context) => {
    return {
        DataSourceId: output.DataSourceId !== undefined && output.DataSourceId !== null ? output.DataSourceId : undefined,
    };
};
const deserializeAws_json1_1DeleteEvaluationOutput = (output, context) => {
    return {
        EvaluationId: output.EvaluationId !== undefined && output.EvaluationId !== null ? output.EvaluationId : undefined,
    };
};
const deserializeAws_json1_1DeleteMLModelOutput = (output, context) => {
    return {
        MLModelId: output.MLModelId !== undefined && output.MLModelId !== null ? output.MLModelId : undefined,
    };
};
const deserializeAws_json1_1DeleteRealtimeEndpointOutput = (output, context) => {
    return {
        MLModelId: output.MLModelId !== undefined && output.MLModelId !== null ? output.MLModelId : undefined,
        RealtimeEndpointInfo: output.RealtimeEndpointInfo !== undefined && output.RealtimeEndpointInfo !== null
            ? deserializeAws_json1_1RealtimeEndpointInfo(output.RealtimeEndpointInfo, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteTagsOutput = (output, context) => {
    return {
        ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    };
};
const deserializeAws_json1_1DescribeBatchPredictionsOutput = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Results: output.Results !== undefined && output.Results !== null
            ? deserializeAws_json1_1BatchPredictions(output.Results, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeDataSourcesOutput = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Results: output.Results !== undefined && output.Results !== null
            ? deserializeAws_json1_1DataSources(output.Results, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeEvaluationsOutput = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Results: output.Results !== undefined && output.Results !== null
            ? deserializeAws_json1_1Evaluations(output.Results, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeMLModelsOutput = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Results: output.Results !== undefined && output.Results !== null
            ? deserializeAws_json1_1MLModels(output.Results, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeTagsOutput = (output, context) => {
    return {
        ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagList(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1DetailsMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const deserializeAws_json1_1Evaluation = (output, context) => {
    return {
        ComputeTime: output.ComputeTime !== undefined && output.ComputeTime !== null ? output.ComputeTime : undefined,
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        CreatedByIamUser: output.CreatedByIamUser !== undefined && output.CreatedByIamUser !== null ? output.CreatedByIamUser : undefined,
        EvaluationDataSourceId: output.EvaluationDataSourceId !== undefined && output.EvaluationDataSourceId !== null
            ? output.EvaluationDataSourceId
            : undefined,
        EvaluationId: output.EvaluationId !== undefined && output.EvaluationId !== null ? output.EvaluationId : undefined,
        FinishedAt: output.FinishedAt !== undefined && output.FinishedAt !== null
            ? new Date(Math.round(output.FinishedAt * 1000))
            : undefined,
        InputDataLocationS3: output.InputDataLocationS3 !== undefined && output.InputDataLocationS3 !== null
            ? output.InputDataLocationS3
            : undefined,
        LastUpdatedAt: output.LastUpdatedAt !== undefined && output.LastUpdatedAt !== null
            ? new Date(Math.round(output.LastUpdatedAt * 1000))
            : undefined,
        MLModelId: output.MLModelId !== undefined && output.MLModelId !== null ? output.MLModelId : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        PerformanceMetrics: output.PerformanceMetrics !== undefined && output.PerformanceMetrics !== null
            ? deserializeAws_json1_1PerformanceMetrics(output.PerformanceMetrics, context)
            : undefined,
        StartedAt: output.StartedAt !== undefined && output.StartedAt !== null
            ? new Date(Math.round(output.StartedAt * 1000))
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1Evaluations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Evaluation(entry, context);
    });
};
const deserializeAws_json1_1GetBatchPredictionOutput = (output, context) => {
    return {
        BatchPredictionDataSourceId: output.BatchPredictionDataSourceId !== undefined && output.BatchPredictionDataSourceId !== null
            ? output.BatchPredictionDataSourceId
            : undefined,
        BatchPredictionId: output.BatchPredictionId !== undefined && output.BatchPredictionId !== null
            ? output.BatchPredictionId
            : undefined,
        ComputeTime: output.ComputeTime !== undefined && output.ComputeTime !== null ? output.ComputeTime : undefined,
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        CreatedByIamUser: output.CreatedByIamUser !== undefined && output.CreatedByIamUser !== null ? output.CreatedByIamUser : undefined,
        FinishedAt: output.FinishedAt !== undefined && output.FinishedAt !== null
            ? new Date(Math.round(output.FinishedAt * 1000))
            : undefined,
        InputDataLocationS3: output.InputDataLocationS3 !== undefined && output.InputDataLocationS3 !== null
            ? output.InputDataLocationS3
            : undefined,
        InvalidRecordCount: output.InvalidRecordCount !== undefined && output.InvalidRecordCount !== null
            ? output.InvalidRecordCount
            : undefined,
        LastUpdatedAt: output.LastUpdatedAt !== undefined && output.LastUpdatedAt !== null
            ? new Date(Math.round(output.LastUpdatedAt * 1000))
            : undefined,
        LogUri: output.LogUri !== undefined && output.LogUri !== null ? output.LogUri : undefined,
        MLModelId: output.MLModelId !== undefined && output.MLModelId !== null ? output.MLModelId : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        OutputUri: output.OutputUri !== undefined && output.OutputUri !== null ? output.OutputUri : undefined,
        StartedAt: output.StartedAt !== undefined && output.StartedAt !== null
            ? new Date(Math.round(output.StartedAt * 1000))
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        TotalRecordCount: output.TotalRecordCount !== undefined && output.TotalRecordCount !== null ? output.TotalRecordCount : undefined,
    };
};
const deserializeAws_json1_1GetDataSourceOutput = (output, context) => {
    return {
        ComputeStatistics: output.ComputeStatistics !== undefined && output.ComputeStatistics !== null
            ? output.ComputeStatistics
            : undefined,
        ComputeTime: output.ComputeTime !== undefined && output.ComputeTime !== null ? output.ComputeTime : undefined,
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        CreatedByIamUser: output.CreatedByIamUser !== undefined && output.CreatedByIamUser !== null ? output.CreatedByIamUser : undefined,
        DataLocationS3: output.DataLocationS3 !== undefined && output.DataLocationS3 !== null ? output.DataLocationS3 : undefined,
        DataRearrangement: output.DataRearrangement !== undefined && output.DataRearrangement !== null
            ? output.DataRearrangement
            : undefined,
        DataSizeInBytes: output.DataSizeInBytes !== undefined && output.DataSizeInBytes !== null ? output.DataSizeInBytes : undefined,
        DataSourceId: output.DataSourceId !== undefined && output.DataSourceId !== null ? output.DataSourceId : undefined,
        DataSourceSchema: output.DataSourceSchema !== undefined && output.DataSourceSchema !== null ? output.DataSourceSchema : undefined,
        FinishedAt: output.FinishedAt !== undefined && output.FinishedAt !== null
            ? new Date(Math.round(output.FinishedAt * 1000))
            : undefined,
        LastUpdatedAt: output.LastUpdatedAt !== undefined && output.LastUpdatedAt !== null
            ? new Date(Math.round(output.LastUpdatedAt * 1000))
            : undefined,
        LogUri: output.LogUri !== undefined && output.LogUri !== null ? output.LogUri : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        NumberOfFiles: output.NumberOfFiles !== undefined && output.NumberOfFiles !== null ? output.NumberOfFiles : undefined,
        RDSMetadata: output.RDSMetadata !== undefined && output.RDSMetadata !== null
            ? deserializeAws_json1_1RDSMetadata(output.RDSMetadata, context)
            : undefined,
        RedshiftMetadata: output.RedshiftMetadata !== undefined && output.RedshiftMetadata !== null
            ? deserializeAws_json1_1RedshiftMetadata(output.RedshiftMetadata, context)
            : undefined,
        RoleARN: output.RoleARN !== undefined && output.RoleARN !== null ? output.RoleARN : undefined,
        StartedAt: output.StartedAt !== undefined && output.StartedAt !== null
            ? new Date(Math.round(output.StartedAt * 1000))
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1GetEvaluationOutput = (output, context) => {
    return {
        ComputeTime: output.ComputeTime !== undefined && output.ComputeTime !== null ? output.ComputeTime : undefined,
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        CreatedByIamUser: output.CreatedByIamUser !== undefined && output.CreatedByIamUser !== null ? output.CreatedByIamUser : undefined,
        EvaluationDataSourceId: output.EvaluationDataSourceId !== undefined && output.EvaluationDataSourceId !== null
            ? output.EvaluationDataSourceId
            : undefined,
        EvaluationId: output.EvaluationId !== undefined && output.EvaluationId !== null ? output.EvaluationId : undefined,
        FinishedAt: output.FinishedAt !== undefined && output.FinishedAt !== null
            ? new Date(Math.round(output.FinishedAt * 1000))
            : undefined,
        InputDataLocationS3: output.InputDataLocationS3 !== undefined && output.InputDataLocationS3 !== null
            ? output.InputDataLocationS3
            : undefined,
        LastUpdatedAt: output.LastUpdatedAt !== undefined && output.LastUpdatedAt !== null
            ? new Date(Math.round(output.LastUpdatedAt * 1000))
            : undefined,
        LogUri: output.LogUri !== undefined && output.LogUri !== null ? output.LogUri : undefined,
        MLModelId: output.MLModelId !== undefined && output.MLModelId !== null ? output.MLModelId : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        PerformanceMetrics: output.PerformanceMetrics !== undefined && output.PerformanceMetrics !== null
            ? deserializeAws_json1_1PerformanceMetrics(output.PerformanceMetrics, context)
            : undefined,
        StartedAt: output.StartedAt !== undefined && output.StartedAt !== null
            ? new Date(Math.round(output.StartedAt * 1000))
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1GetMLModelOutput = (output, context) => {
    return {
        ComputeTime: output.ComputeTime !== undefined && output.ComputeTime !== null ? output.ComputeTime : undefined,
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        CreatedByIamUser: output.CreatedByIamUser !== undefined && output.CreatedByIamUser !== null ? output.CreatedByIamUser : undefined,
        EndpointInfo: output.EndpointInfo !== undefined && output.EndpointInfo !== null
            ? deserializeAws_json1_1RealtimeEndpointInfo(output.EndpointInfo, context)
            : undefined,
        FinishedAt: output.FinishedAt !== undefined && output.FinishedAt !== null
            ? new Date(Math.round(output.FinishedAt * 1000))
            : undefined,
        InputDataLocationS3: output.InputDataLocationS3 !== undefined && output.InputDataLocationS3 !== null
            ? output.InputDataLocationS3
            : undefined,
        LastUpdatedAt: output.LastUpdatedAt !== undefined && output.LastUpdatedAt !== null
            ? new Date(Math.round(output.LastUpdatedAt * 1000))
            : undefined,
        LogUri: output.LogUri !== undefined && output.LogUri !== null ? output.LogUri : undefined,
        MLModelId: output.MLModelId !== undefined && output.MLModelId !== null ? output.MLModelId : undefined,
        MLModelType: output.MLModelType !== undefined && output.MLModelType !== null ? output.MLModelType : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Recipe: output.Recipe !== undefined && output.Recipe !== null ? output.Recipe : undefined,
        Schema: output.Schema !== undefined && output.Schema !== null ? output.Schema : undefined,
        ScoreThreshold: output.ScoreThreshold !== undefined && output.ScoreThreshold !== null ? output.ScoreThreshold : undefined,
        ScoreThresholdLastUpdatedAt: output.ScoreThresholdLastUpdatedAt !== undefined && output.ScoreThresholdLastUpdatedAt !== null
            ? new Date(Math.round(output.ScoreThresholdLastUpdatedAt * 1000))
            : undefined,
        SizeInBytes: output.SizeInBytes !== undefined && output.SizeInBytes !== null ? output.SizeInBytes : undefined,
        StartedAt: output.StartedAt !== undefined && output.StartedAt !== null
            ? new Date(Math.round(output.StartedAt * 1000))
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        TrainingDataSourceId: output.TrainingDataSourceId !== undefined && output.TrainingDataSourceId !== null
            ? output.TrainingDataSourceId
            : undefined,
        TrainingParameters: output.TrainingParameters !== undefined && output.TrainingParameters !== null
            ? deserializeAws_json1_1TrainingParameters(output.TrainingParameters, context)
            : undefined,
    };
};
const deserializeAws_json1_1IdempotentParameterMismatchException = (output, context) => {
    return {
        code: output.code !== undefined && output.code !== null ? output.code : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InternalServerException = (output, context) => {
    return {
        code: output.code !== undefined && output.code !== null ? output.code : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidInputException = (output, context) => {
    return {
        code: output.code !== undefined && output.code !== null ? output.code : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidTagException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    return {
        code: output.code !== undefined && output.code !== null ? output.code : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1MLModel = (output, context) => {
    return {
        Algorithm: output.Algorithm !== undefined && output.Algorithm !== null ? output.Algorithm : undefined,
        ComputeTime: output.ComputeTime !== undefined && output.ComputeTime !== null ? output.ComputeTime : undefined,
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        CreatedByIamUser: output.CreatedByIamUser !== undefined && output.CreatedByIamUser !== null ? output.CreatedByIamUser : undefined,
        EndpointInfo: output.EndpointInfo !== undefined && output.EndpointInfo !== null
            ? deserializeAws_json1_1RealtimeEndpointInfo(output.EndpointInfo, context)
            : undefined,
        FinishedAt: output.FinishedAt !== undefined && output.FinishedAt !== null
            ? new Date(Math.round(output.FinishedAt * 1000))
            : undefined,
        InputDataLocationS3: output.InputDataLocationS3 !== undefined && output.InputDataLocationS3 !== null
            ? output.InputDataLocationS3
            : undefined,
        LastUpdatedAt: output.LastUpdatedAt !== undefined && output.LastUpdatedAt !== null
            ? new Date(Math.round(output.LastUpdatedAt * 1000))
            : undefined,
        MLModelId: output.MLModelId !== undefined && output.MLModelId !== null ? output.MLModelId : undefined,
        MLModelType: output.MLModelType !== undefined && output.MLModelType !== null ? output.MLModelType : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        ScoreThreshold: output.ScoreThreshold !== undefined && output.ScoreThreshold !== null ? output.ScoreThreshold : undefined,
        ScoreThresholdLastUpdatedAt: output.ScoreThresholdLastUpdatedAt !== undefined && output.ScoreThresholdLastUpdatedAt !== null
            ? new Date(Math.round(output.ScoreThresholdLastUpdatedAt * 1000))
            : undefined,
        SizeInBytes: output.SizeInBytes !== undefined && output.SizeInBytes !== null ? output.SizeInBytes : undefined,
        StartedAt: output.StartedAt !== undefined && output.StartedAt !== null
            ? new Date(Math.round(output.StartedAt * 1000))
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        TrainingDataSourceId: output.TrainingDataSourceId !== undefined && output.TrainingDataSourceId !== null
            ? output.TrainingDataSourceId
            : undefined,
        TrainingParameters: output.TrainingParameters !== undefined && output.TrainingParameters !== null
            ? deserializeAws_json1_1TrainingParameters(output.TrainingParameters, context)
            : undefined,
    };
};
const deserializeAws_json1_1MLModels = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MLModel(entry, context);
    });
};
const deserializeAws_json1_1PerformanceMetrics = (output, context) => {
    return {
        Properties: output.Properties !== undefined && output.Properties !== null
            ? deserializeAws_json1_1PerformanceMetricsProperties(output.Properties, context)
            : undefined,
    };
};
const deserializeAws_json1_1PerformanceMetricsProperties = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const deserializeAws_json1_1Prediction = (output, context) => {
    return {
        details: output.details !== undefined && output.details !== null
            ? deserializeAws_json1_1DetailsMap(output.details, context)
            : undefined,
        predictedLabel: output.predictedLabel !== undefined && output.predictedLabel !== null ? output.predictedLabel : undefined,
        predictedScores: output.predictedScores !== undefined && output.predictedScores !== null
            ? deserializeAws_json1_1ScoreValuePerLabelMap(output.predictedScores, context)
            : undefined,
        predictedValue: output.predictedValue !== undefined && output.predictedValue !== null ? output.predictedValue : undefined,
    };
};
const deserializeAws_json1_1PredictorNotMountedException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1PredictOutput = (output, context) => {
    return {
        Prediction: output.Prediction !== undefined && output.Prediction !== null
            ? deserializeAws_json1_1Prediction(output.Prediction, context)
            : undefined,
    };
};
const deserializeAws_json1_1RDSDatabase = (output, context) => {
    return {
        DatabaseName: output.DatabaseName !== undefined && output.DatabaseName !== null ? output.DatabaseName : undefined,
        InstanceIdentifier: output.InstanceIdentifier !== undefined && output.InstanceIdentifier !== null
            ? output.InstanceIdentifier
            : undefined,
    };
};
const deserializeAws_json1_1RDSMetadata = (output, context) => {
    return {
        DataPipelineId: output.DataPipelineId !== undefined && output.DataPipelineId !== null ? output.DataPipelineId : undefined,
        Database: output.Database !== undefined && output.Database !== null
            ? deserializeAws_json1_1RDSDatabase(output.Database, context)
            : undefined,
        DatabaseUserName: output.DatabaseUserName !== undefined && output.DatabaseUserName !== null ? output.DatabaseUserName : undefined,
        ResourceRole: output.ResourceRole !== undefined && output.ResourceRole !== null ? output.ResourceRole : undefined,
        SelectSqlQuery: output.SelectSqlQuery !== undefined && output.SelectSqlQuery !== null ? output.SelectSqlQuery : undefined,
        ServiceRole: output.ServiceRole !== undefined && output.ServiceRole !== null ? output.ServiceRole : undefined,
    };
};
const deserializeAws_json1_1RealtimeEndpointInfo = (output, context) => {
    return {
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        EndpointStatus: output.EndpointStatus !== undefined && output.EndpointStatus !== null ? output.EndpointStatus : undefined,
        EndpointUrl: output.EndpointUrl !== undefined && output.EndpointUrl !== null ? output.EndpointUrl : undefined,
        PeakRequestsPerSecond: output.PeakRequestsPerSecond !== undefined && output.PeakRequestsPerSecond !== null
            ? output.PeakRequestsPerSecond
            : undefined,
    };
};
const deserializeAws_json1_1RedshiftDatabase = (output, context) => {
    return {
        ClusterIdentifier: output.ClusterIdentifier !== undefined && output.ClusterIdentifier !== null
            ? output.ClusterIdentifier
            : undefined,
        DatabaseName: output.DatabaseName !== undefined && output.DatabaseName !== null ? output.DatabaseName : undefined,
    };
};
const deserializeAws_json1_1RedshiftMetadata = (output, context) => {
    return {
        DatabaseUserName: output.DatabaseUserName !== undefined && output.DatabaseUserName !== null ? output.DatabaseUserName : undefined,
        RedshiftDatabase: output.RedshiftDatabase !== undefined && output.RedshiftDatabase !== null
            ? deserializeAws_json1_1RedshiftDatabase(output.RedshiftDatabase, context)
            : undefined,
        SelectSqlQuery: output.SelectSqlQuery !== undefined && output.SelectSqlQuery !== null ? output.SelectSqlQuery : undefined,
    };
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    return {
        code: output.code !== undefined && output.code !== null ? output.code : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ScoreValuePerLabelMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const deserializeAws_json1_1Tag = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1TagLimitExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
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
const deserializeAws_json1_1TrainingParameters = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const deserializeAws_json1_1UpdateBatchPredictionOutput = (output, context) => {
    return {
        BatchPredictionId: output.BatchPredictionId !== undefined && output.BatchPredictionId !== null
            ? output.BatchPredictionId
            : undefined,
    };
};
const deserializeAws_json1_1UpdateDataSourceOutput = (output, context) => {
    return {
        DataSourceId: output.DataSourceId !== undefined && output.DataSourceId !== null ? output.DataSourceId : undefined,
    };
};
const deserializeAws_json1_1UpdateEvaluationOutput = (output, context) => {
    return {
        EvaluationId: output.EvaluationId !== undefined && output.EvaluationId !== null ? output.EvaluationId : undefined,
    };
};
const deserializeAws_json1_1UpdateMLModelOutput = (output, context) => {
    return {
        MLModelId: output.MLModelId !== undefined && output.MLModelId !== null ? output.MLModelId : undefined,
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