"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1DeleteResourceTreeCommand = exports.deserializeAws_json1_1DeletePredictorBacktestExportJobCommand = exports.deserializeAws_json1_1DeletePredictorCommand = exports.deserializeAws_json1_1DeleteForecastExportJobCommand = exports.deserializeAws_json1_1DeleteForecastCommand = exports.deserializeAws_json1_1DeleteDatasetImportJobCommand = exports.deserializeAws_json1_1DeleteDatasetGroupCommand = exports.deserializeAws_json1_1DeleteDatasetCommand = exports.deserializeAws_json1_1CreatePredictorBacktestExportJobCommand = exports.deserializeAws_json1_1CreatePredictorCommand = exports.deserializeAws_json1_1CreateForecastExportJobCommand = exports.deserializeAws_json1_1CreateForecastCommand = exports.deserializeAws_json1_1CreateDatasetImportJobCommand = exports.deserializeAws_json1_1CreateDatasetGroupCommand = exports.deserializeAws_json1_1CreateDatasetCommand = exports.serializeAws_json1_1UpdateDatasetGroupCommand = exports.serializeAws_json1_1UntagResourceCommand = exports.serializeAws_json1_1TagResourceCommand = exports.serializeAws_json1_1StopResourceCommand = exports.serializeAws_json1_1ListTagsForResourceCommand = exports.serializeAws_json1_1ListPredictorsCommand = exports.serializeAws_json1_1ListPredictorBacktestExportJobsCommand = exports.serializeAws_json1_1ListForecastsCommand = exports.serializeAws_json1_1ListForecastExportJobsCommand = exports.serializeAws_json1_1ListDatasetsCommand = exports.serializeAws_json1_1ListDatasetImportJobsCommand = exports.serializeAws_json1_1ListDatasetGroupsCommand = exports.serializeAws_json1_1GetAccuracyMetricsCommand = exports.serializeAws_json1_1DescribePredictorBacktestExportJobCommand = exports.serializeAws_json1_1DescribePredictorCommand = exports.serializeAws_json1_1DescribeForecastExportJobCommand = exports.serializeAws_json1_1DescribeForecastCommand = exports.serializeAws_json1_1DescribeDatasetImportJobCommand = exports.serializeAws_json1_1DescribeDatasetGroupCommand = exports.serializeAws_json1_1DescribeDatasetCommand = exports.serializeAws_json1_1DeleteResourceTreeCommand = exports.serializeAws_json1_1DeletePredictorBacktestExportJobCommand = exports.serializeAws_json1_1DeletePredictorCommand = exports.serializeAws_json1_1DeleteForecastExportJobCommand = exports.serializeAws_json1_1DeleteForecastCommand = exports.serializeAws_json1_1DeleteDatasetImportJobCommand = exports.serializeAws_json1_1DeleteDatasetGroupCommand = exports.serializeAws_json1_1DeleteDatasetCommand = exports.serializeAws_json1_1CreatePredictorBacktestExportJobCommand = exports.serializeAws_json1_1CreatePredictorCommand = exports.serializeAws_json1_1CreateForecastExportJobCommand = exports.serializeAws_json1_1CreateForecastCommand = exports.serializeAws_json1_1CreateDatasetImportJobCommand = exports.serializeAws_json1_1CreateDatasetGroupCommand = exports.serializeAws_json1_1CreateDatasetCommand = void 0;
exports.deserializeAws_json1_1UpdateDatasetGroupCommand = exports.deserializeAws_json1_1UntagResourceCommand = exports.deserializeAws_json1_1TagResourceCommand = exports.deserializeAws_json1_1StopResourceCommand = exports.deserializeAws_json1_1ListTagsForResourceCommand = exports.deserializeAws_json1_1ListPredictorsCommand = exports.deserializeAws_json1_1ListPredictorBacktestExportJobsCommand = exports.deserializeAws_json1_1ListForecastsCommand = exports.deserializeAws_json1_1ListForecastExportJobsCommand = exports.deserializeAws_json1_1ListDatasetsCommand = exports.deserializeAws_json1_1ListDatasetImportJobsCommand = exports.deserializeAws_json1_1ListDatasetGroupsCommand = exports.deserializeAws_json1_1GetAccuracyMetricsCommand = exports.deserializeAws_json1_1DescribePredictorBacktestExportJobCommand = exports.deserializeAws_json1_1DescribePredictorCommand = exports.deserializeAws_json1_1DescribeForecastExportJobCommand = exports.deserializeAws_json1_1DescribeForecastCommand = exports.deserializeAws_json1_1DescribeDatasetImportJobCommand = exports.deserializeAws_json1_1DescribeDatasetGroupCommand = exports.deserializeAws_json1_1DescribeDatasetCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1CreateDatasetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonForecast.CreateDataset",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDatasetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateDatasetCommand = serializeAws_json1_1CreateDatasetCommand;
const serializeAws_json1_1CreateDatasetGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonForecast.CreateDatasetGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDatasetGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateDatasetGroupCommand = serializeAws_json1_1CreateDatasetGroupCommand;
const serializeAws_json1_1CreateDatasetImportJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonForecast.CreateDatasetImportJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDatasetImportJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateDatasetImportJobCommand = serializeAws_json1_1CreateDatasetImportJobCommand;
const serializeAws_json1_1CreateForecastCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonForecast.CreateForecast",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateForecastRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateForecastCommand = serializeAws_json1_1CreateForecastCommand;
const serializeAws_json1_1CreateForecastExportJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonForecast.CreateForecastExportJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateForecastExportJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateForecastExportJobCommand = serializeAws_json1_1CreateForecastExportJobCommand;
const serializeAws_json1_1CreatePredictorCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonForecast.CreatePredictor",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreatePredictorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreatePredictorCommand = serializeAws_json1_1CreatePredictorCommand;
const serializeAws_json1_1CreatePredictorBacktestExportJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonForecast.CreatePredictorBacktestExportJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreatePredictorBacktestExportJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreatePredictorBacktestExportJobCommand = serializeAws_json1_1CreatePredictorBacktestExportJobCommand;
const serializeAws_json1_1DeleteDatasetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonForecast.DeleteDataset",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDatasetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteDatasetCommand = serializeAws_json1_1DeleteDatasetCommand;
const serializeAws_json1_1DeleteDatasetGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonForecast.DeleteDatasetGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDatasetGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteDatasetGroupCommand = serializeAws_json1_1DeleteDatasetGroupCommand;
const serializeAws_json1_1DeleteDatasetImportJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonForecast.DeleteDatasetImportJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDatasetImportJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteDatasetImportJobCommand = serializeAws_json1_1DeleteDatasetImportJobCommand;
const serializeAws_json1_1DeleteForecastCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonForecast.DeleteForecast",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteForecastRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteForecastCommand = serializeAws_json1_1DeleteForecastCommand;
const serializeAws_json1_1DeleteForecastExportJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonForecast.DeleteForecastExportJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteForecastExportJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteForecastExportJobCommand = serializeAws_json1_1DeleteForecastExportJobCommand;
const serializeAws_json1_1DeletePredictorCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonForecast.DeletePredictor",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeletePredictorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeletePredictorCommand = serializeAws_json1_1DeletePredictorCommand;
const serializeAws_json1_1DeletePredictorBacktestExportJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonForecast.DeletePredictorBacktestExportJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeletePredictorBacktestExportJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeletePredictorBacktestExportJobCommand = serializeAws_json1_1DeletePredictorBacktestExportJobCommand;
const serializeAws_json1_1DeleteResourceTreeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonForecast.DeleteResourceTree",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteResourceTreeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteResourceTreeCommand = serializeAws_json1_1DeleteResourceTreeCommand;
const serializeAws_json1_1DescribeDatasetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonForecast.DescribeDataset",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDatasetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeDatasetCommand = serializeAws_json1_1DescribeDatasetCommand;
const serializeAws_json1_1DescribeDatasetGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonForecast.DescribeDatasetGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDatasetGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeDatasetGroupCommand = serializeAws_json1_1DescribeDatasetGroupCommand;
const serializeAws_json1_1DescribeDatasetImportJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonForecast.DescribeDatasetImportJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDatasetImportJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeDatasetImportJobCommand = serializeAws_json1_1DescribeDatasetImportJobCommand;
const serializeAws_json1_1DescribeForecastCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonForecast.DescribeForecast",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeForecastRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeForecastCommand = serializeAws_json1_1DescribeForecastCommand;
const serializeAws_json1_1DescribeForecastExportJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonForecast.DescribeForecastExportJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeForecastExportJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeForecastExportJobCommand = serializeAws_json1_1DescribeForecastExportJobCommand;
const serializeAws_json1_1DescribePredictorCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonForecast.DescribePredictor",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribePredictorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribePredictorCommand = serializeAws_json1_1DescribePredictorCommand;
const serializeAws_json1_1DescribePredictorBacktestExportJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonForecast.DescribePredictorBacktestExportJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribePredictorBacktestExportJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribePredictorBacktestExportJobCommand = serializeAws_json1_1DescribePredictorBacktestExportJobCommand;
const serializeAws_json1_1GetAccuracyMetricsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonForecast.GetAccuracyMetrics",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAccuracyMetricsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetAccuracyMetricsCommand = serializeAws_json1_1GetAccuracyMetricsCommand;
const serializeAws_json1_1ListDatasetGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonForecast.ListDatasetGroups",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDatasetGroupsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListDatasetGroupsCommand = serializeAws_json1_1ListDatasetGroupsCommand;
const serializeAws_json1_1ListDatasetImportJobsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonForecast.ListDatasetImportJobs",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDatasetImportJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListDatasetImportJobsCommand = serializeAws_json1_1ListDatasetImportJobsCommand;
const serializeAws_json1_1ListDatasetsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonForecast.ListDatasets",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDatasetsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListDatasetsCommand = serializeAws_json1_1ListDatasetsCommand;
const serializeAws_json1_1ListForecastExportJobsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonForecast.ListForecastExportJobs",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListForecastExportJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListForecastExportJobsCommand = serializeAws_json1_1ListForecastExportJobsCommand;
const serializeAws_json1_1ListForecastsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonForecast.ListForecasts",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListForecastsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListForecastsCommand = serializeAws_json1_1ListForecastsCommand;
const serializeAws_json1_1ListPredictorBacktestExportJobsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonForecast.ListPredictorBacktestExportJobs",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListPredictorBacktestExportJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListPredictorBacktestExportJobsCommand = serializeAws_json1_1ListPredictorBacktestExportJobsCommand;
const serializeAws_json1_1ListPredictorsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonForecast.ListPredictors",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListPredictorsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListPredictorsCommand = serializeAws_json1_1ListPredictorsCommand;
const serializeAws_json1_1ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonForecast.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
const serializeAws_json1_1StopResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonForecast.StopResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StopResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopResourceCommand = serializeAws_json1_1StopResourceCommand;
const serializeAws_json1_1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonForecast.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonForecast.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
const serializeAws_json1_1UpdateDatasetGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonForecast.UpdateDatasetGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDatasetGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateDatasetGroupCommand = serializeAws_json1_1UpdateDatasetGroupCommand;
const deserializeAws_json1_1CreateDatasetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateDatasetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDatasetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateDatasetCommand = deserializeAws_json1_1CreateDatasetCommand;
const deserializeAws_json1_1CreateDatasetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.forecast#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.forecast#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.forecast#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateDatasetGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateDatasetGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDatasetGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateDatasetGroupCommand = deserializeAws_json1_1CreateDatasetGroupCommand;
const deserializeAws_json1_1CreateDatasetGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.forecast#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.forecast#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.forecast#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.forecast#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.forecast#ResourceNotFoundException":
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
const deserializeAws_json1_1CreateDatasetImportJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateDatasetImportJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDatasetImportJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateDatasetImportJobCommand = deserializeAws_json1_1CreateDatasetImportJobCommand;
const deserializeAws_json1_1CreateDatasetImportJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.forecast#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.forecast#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.forecast#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.forecast#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.forecast#ResourceNotFoundException":
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
const deserializeAws_json1_1CreateForecastCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateForecastCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateForecastResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateForecastCommand = deserializeAws_json1_1CreateForecastCommand;
const deserializeAws_json1_1CreateForecastCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.forecast#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.forecast#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.forecast#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.forecast#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.forecast#ResourceNotFoundException":
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
const deserializeAws_json1_1CreateForecastExportJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateForecastExportJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateForecastExportJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateForecastExportJobCommand = deserializeAws_json1_1CreateForecastExportJobCommand;
const deserializeAws_json1_1CreateForecastExportJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.forecast#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.forecast#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.forecast#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.forecast#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.forecast#ResourceNotFoundException":
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
const deserializeAws_json1_1CreatePredictorCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreatePredictorCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreatePredictorResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreatePredictorCommand = deserializeAws_json1_1CreatePredictorCommand;
const deserializeAws_json1_1CreatePredictorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.forecast#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.forecast#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.forecast#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.forecast#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.forecast#ResourceNotFoundException":
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
const deserializeAws_json1_1CreatePredictorBacktestExportJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreatePredictorBacktestExportJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreatePredictorBacktestExportJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreatePredictorBacktestExportJobCommand = deserializeAws_json1_1CreatePredictorBacktestExportJobCommand;
const deserializeAws_json1_1CreatePredictorBacktestExportJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.forecast#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.forecast#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.forecast#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.forecast#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.forecast#ResourceNotFoundException":
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
const deserializeAws_json1_1DeleteDatasetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteDatasetCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteDatasetCommand = deserializeAws_json1_1DeleteDatasetCommand;
const deserializeAws_json1_1DeleteDatasetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.forecast#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.forecast#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.forecast#ResourceNotFoundException":
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
const deserializeAws_json1_1DeleteDatasetGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteDatasetGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteDatasetGroupCommand = deserializeAws_json1_1DeleteDatasetGroupCommand;
const deserializeAws_json1_1DeleteDatasetGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.forecast#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.forecast#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.forecast#ResourceNotFoundException":
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
const deserializeAws_json1_1DeleteDatasetImportJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteDatasetImportJobCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteDatasetImportJobCommand = deserializeAws_json1_1DeleteDatasetImportJobCommand;
const deserializeAws_json1_1DeleteDatasetImportJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.forecast#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.forecast#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.forecast#ResourceNotFoundException":
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
const deserializeAws_json1_1DeleteForecastCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteForecastCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteForecastCommand = deserializeAws_json1_1DeleteForecastCommand;
const deserializeAws_json1_1DeleteForecastCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.forecast#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.forecast#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.forecast#ResourceNotFoundException":
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
const deserializeAws_json1_1DeleteForecastExportJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteForecastExportJobCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteForecastExportJobCommand = deserializeAws_json1_1DeleteForecastExportJobCommand;
const deserializeAws_json1_1DeleteForecastExportJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.forecast#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.forecast#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.forecast#ResourceNotFoundException":
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
const deserializeAws_json1_1DeletePredictorCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeletePredictorCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeletePredictorCommand = deserializeAws_json1_1DeletePredictorCommand;
const deserializeAws_json1_1DeletePredictorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.forecast#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.forecast#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.forecast#ResourceNotFoundException":
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
const deserializeAws_json1_1DeletePredictorBacktestExportJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeletePredictorBacktestExportJobCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeletePredictorBacktestExportJobCommand = deserializeAws_json1_1DeletePredictorBacktestExportJobCommand;
const deserializeAws_json1_1DeletePredictorBacktestExportJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.forecast#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.forecast#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.forecast#ResourceNotFoundException":
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
const deserializeAws_json1_1DeleteResourceTreeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteResourceTreeCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteResourceTreeCommand = deserializeAws_json1_1DeleteResourceTreeCommand;
const deserializeAws_json1_1DeleteResourceTreeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.forecast#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.forecast#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.forecast#ResourceNotFoundException":
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
const deserializeAws_json1_1DescribeDatasetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeDatasetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDatasetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeDatasetCommand = deserializeAws_json1_1DescribeDatasetCommand;
const deserializeAws_json1_1DescribeDatasetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.forecast#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.forecast#ResourceNotFoundException":
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
const deserializeAws_json1_1DescribeDatasetGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeDatasetGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDatasetGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeDatasetGroupCommand = deserializeAws_json1_1DescribeDatasetGroupCommand;
const deserializeAws_json1_1DescribeDatasetGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.forecast#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.forecast#ResourceNotFoundException":
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
const deserializeAws_json1_1DescribeDatasetImportJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeDatasetImportJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDatasetImportJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeDatasetImportJobCommand = deserializeAws_json1_1DescribeDatasetImportJobCommand;
const deserializeAws_json1_1DescribeDatasetImportJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.forecast#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.forecast#ResourceNotFoundException":
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
const deserializeAws_json1_1DescribeForecastCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeForecastCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeForecastResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeForecastCommand = deserializeAws_json1_1DescribeForecastCommand;
const deserializeAws_json1_1DescribeForecastCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.forecast#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.forecast#ResourceNotFoundException":
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
const deserializeAws_json1_1DescribeForecastExportJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeForecastExportJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeForecastExportJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeForecastExportJobCommand = deserializeAws_json1_1DescribeForecastExportJobCommand;
const deserializeAws_json1_1DescribeForecastExportJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.forecast#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.forecast#ResourceNotFoundException":
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
const deserializeAws_json1_1DescribePredictorCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribePredictorCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribePredictorResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribePredictorCommand = deserializeAws_json1_1DescribePredictorCommand;
const deserializeAws_json1_1DescribePredictorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.forecast#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.forecast#ResourceNotFoundException":
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
const deserializeAws_json1_1DescribePredictorBacktestExportJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribePredictorBacktestExportJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribePredictorBacktestExportJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribePredictorBacktestExportJobCommand = deserializeAws_json1_1DescribePredictorBacktestExportJobCommand;
const deserializeAws_json1_1DescribePredictorBacktestExportJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.forecast#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.forecast#ResourceNotFoundException":
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
const deserializeAws_json1_1GetAccuracyMetricsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetAccuracyMetricsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAccuracyMetricsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetAccuracyMetricsCommand = deserializeAws_json1_1GetAccuracyMetricsCommand;
const deserializeAws_json1_1GetAccuracyMetricsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.forecast#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.forecast#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.forecast#ResourceNotFoundException":
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
const deserializeAws_json1_1ListDatasetGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListDatasetGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDatasetGroupsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListDatasetGroupsCommand = deserializeAws_json1_1ListDatasetGroupsCommand;
const deserializeAws_json1_1ListDatasetGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.forecast#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListDatasetImportJobsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListDatasetImportJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDatasetImportJobsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListDatasetImportJobsCommand = deserializeAws_json1_1ListDatasetImportJobsCommand;
const deserializeAws_json1_1ListDatasetImportJobsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.forecast#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.forecast#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListDatasetsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListDatasetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDatasetsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListDatasetsCommand = deserializeAws_json1_1ListDatasetsCommand;
const deserializeAws_json1_1ListDatasetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.forecast#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListForecastExportJobsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListForecastExportJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListForecastExportJobsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListForecastExportJobsCommand = deserializeAws_json1_1ListForecastExportJobsCommand;
const deserializeAws_json1_1ListForecastExportJobsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.forecast#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.forecast#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListForecastsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListForecastsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListForecastsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListForecastsCommand = deserializeAws_json1_1ListForecastsCommand;
const deserializeAws_json1_1ListForecastsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.forecast#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.forecast#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListPredictorBacktestExportJobsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListPredictorBacktestExportJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListPredictorBacktestExportJobsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListPredictorBacktestExportJobsCommand = deserializeAws_json1_1ListPredictorBacktestExportJobsCommand;
const deserializeAws_json1_1ListPredictorBacktestExportJobsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.forecast#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.forecast#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListPredictorsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListPredictorsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListPredictorsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListPredictorsCommand = deserializeAws_json1_1ListPredictorsCommand;
const deserializeAws_json1_1ListPredictorsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.forecast#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.forecast#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
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
        case "InvalidInputException":
        case "com.amazonaws.forecast#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.forecast#ResourceNotFoundException":
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
const deserializeAws_json1_1StopResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StopResourceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopResourceCommand = deserializeAws_json1_1StopResourceCommand;
const deserializeAws_json1_1StopResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.forecast#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.forecast#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.forecast#ResourceNotFoundException":
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
        case "InvalidInputException":
        case "com.amazonaws.forecast#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.forecast#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.forecast#ResourceNotFoundException":
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
        case "InvalidInputException":
        case "com.amazonaws.forecast#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.forecast#ResourceNotFoundException":
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
const deserializeAws_json1_1UpdateDatasetGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateDatasetGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateDatasetGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateDatasetGroupCommand = deserializeAws_json1_1UpdateDatasetGroupCommand;
const deserializeAws_json1_1UpdateDatasetGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.forecast#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.forecast#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.forecast#ResourceNotFoundException":
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
const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidNextTokenException(body, context);
    const contents = {
        name: "InvalidNextTokenException",
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
const deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceAlreadyExistsException(body, context);
    const contents = {
        name: "ResourceAlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceInUseException(body, context);
    const contents = {
        name: "ResourceInUseException",
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
const serializeAws_json1_1ArnList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1CategoricalParameterRange = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_json1_1Values(input.Values, context) }),
    };
};
const serializeAws_json1_1CategoricalParameterRanges = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1CategoricalParameterRange(entry, context);
    });
};
const serializeAws_json1_1ContinuousParameterRange = (input, context) => {
    return {
        ...(input.MaxValue !== undefined && input.MaxValue !== null && { MaxValue: input.MaxValue }),
        ...(input.MinValue !== undefined && input.MinValue !== null && { MinValue: input.MinValue }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.ScalingType !== undefined && input.ScalingType !== null && { ScalingType: input.ScalingType }),
    };
};
const serializeAws_json1_1ContinuousParameterRanges = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ContinuousParameterRange(entry, context);
    });
};
const serializeAws_json1_1CreateDatasetGroupRequest = (input, context) => {
    return {
        ...(input.DatasetArns !== undefined &&
            input.DatasetArns !== null && { DatasetArns: serializeAws_json1_1ArnList(input.DatasetArns, context) }),
        ...(input.DatasetGroupName !== undefined &&
            input.DatasetGroupName !== null && { DatasetGroupName: input.DatasetGroupName }),
        ...(input.Domain !== undefined && input.Domain !== null && { Domain: input.Domain }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateDatasetImportJobRequest = (input, context) => {
    return {
        ...(input.DataSource !== undefined &&
            input.DataSource !== null && { DataSource: serializeAws_json1_1DataSource(input.DataSource, context) }),
        ...(input.DatasetArn !== undefined && input.DatasetArn !== null && { DatasetArn: input.DatasetArn }),
        ...(input.DatasetImportJobName !== undefined &&
            input.DatasetImportJobName !== null && { DatasetImportJobName: input.DatasetImportJobName }),
        ...(input.GeolocationFormat !== undefined &&
            input.GeolocationFormat !== null && { GeolocationFormat: input.GeolocationFormat }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
        ...(input.TimeZone !== undefined && input.TimeZone !== null && { TimeZone: input.TimeZone }),
        ...(input.TimestampFormat !== undefined &&
            input.TimestampFormat !== null && { TimestampFormat: input.TimestampFormat }),
        ...(input.UseGeolocationForTimeZone !== undefined &&
            input.UseGeolocationForTimeZone !== null && { UseGeolocationForTimeZone: input.UseGeolocationForTimeZone }),
    };
};
const serializeAws_json1_1CreateDatasetRequest = (input, context) => {
    return {
        ...(input.DataFrequency !== undefined && input.DataFrequency !== null && { DataFrequency: input.DataFrequency }),
        ...(input.DatasetName !== undefined && input.DatasetName !== null && { DatasetName: input.DatasetName }),
        ...(input.DatasetType !== undefined && input.DatasetType !== null && { DatasetType: input.DatasetType }),
        ...(input.Domain !== undefined && input.Domain !== null && { Domain: input.Domain }),
        ...(input.EncryptionConfig !== undefined &&
            input.EncryptionConfig !== null && {
            EncryptionConfig: serializeAws_json1_1EncryptionConfig(input.EncryptionConfig, context),
        }),
        ...(input.Schema !== undefined &&
            input.Schema !== null && { Schema: serializeAws_json1_1Schema(input.Schema, context) }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateForecastExportJobRequest = (input, context) => {
    return {
        ...(input.Destination !== undefined &&
            input.Destination !== null && { Destination: serializeAws_json1_1DataDestination(input.Destination, context) }),
        ...(input.ForecastArn !== undefined && input.ForecastArn !== null && { ForecastArn: input.ForecastArn }),
        ...(input.ForecastExportJobName !== undefined &&
            input.ForecastExportJobName !== null && { ForecastExportJobName: input.ForecastExportJobName }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateForecastRequest = (input, context) => {
    return {
        ...(input.ForecastName !== undefined && input.ForecastName !== null && { ForecastName: input.ForecastName }),
        ...(input.ForecastTypes !== undefined &&
            input.ForecastTypes !== null && {
            ForecastTypes: serializeAws_json1_1ForecastTypes(input.ForecastTypes, context),
        }),
        ...(input.PredictorArn !== undefined && input.PredictorArn !== null && { PredictorArn: input.PredictorArn }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreatePredictorBacktestExportJobRequest = (input, context) => {
    return {
        ...(input.Destination !== undefined &&
            input.Destination !== null && { Destination: serializeAws_json1_1DataDestination(input.Destination, context) }),
        ...(input.PredictorArn !== undefined && input.PredictorArn !== null && { PredictorArn: input.PredictorArn }),
        ...(input.PredictorBacktestExportJobName !== undefined &&
            input.PredictorBacktestExportJobName !== null && {
            PredictorBacktestExportJobName: input.PredictorBacktestExportJobName,
        }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreatePredictorRequest = (input, context) => {
    return {
        ...(input.AlgorithmArn !== undefined && input.AlgorithmArn !== null && { AlgorithmArn: input.AlgorithmArn }),
        ...(input.AutoMLOverrideStrategy !== undefined &&
            input.AutoMLOverrideStrategy !== null && { AutoMLOverrideStrategy: input.AutoMLOverrideStrategy }),
        ...(input.EncryptionConfig !== undefined &&
            input.EncryptionConfig !== null && {
            EncryptionConfig: serializeAws_json1_1EncryptionConfig(input.EncryptionConfig, context),
        }),
        ...(input.EvaluationParameters !== undefined &&
            input.EvaluationParameters !== null && {
            EvaluationParameters: serializeAws_json1_1EvaluationParameters(input.EvaluationParameters, context),
        }),
        ...(input.FeaturizationConfig !== undefined &&
            input.FeaturizationConfig !== null && {
            FeaturizationConfig: serializeAws_json1_1FeaturizationConfig(input.FeaturizationConfig, context),
        }),
        ...(input.ForecastHorizon !== undefined &&
            input.ForecastHorizon !== null && { ForecastHorizon: input.ForecastHorizon }),
        ...(input.ForecastTypes !== undefined &&
            input.ForecastTypes !== null && {
            ForecastTypes: serializeAws_json1_1ForecastTypes(input.ForecastTypes, context),
        }),
        ...(input.HPOConfig !== undefined &&
            input.HPOConfig !== null && {
            HPOConfig: serializeAws_json1_1HyperParameterTuningJobConfig(input.HPOConfig, context),
        }),
        ...(input.InputDataConfig !== undefined &&
            input.InputDataConfig !== null && {
            InputDataConfig: serializeAws_json1_1InputDataConfig(input.InputDataConfig, context),
        }),
        ...(input.PerformAutoML !== undefined && input.PerformAutoML !== null && { PerformAutoML: input.PerformAutoML }),
        ...(input.PerformHPO !== undefined && input.PerformHPO !== null && { PerformHPO: input.PerformHPO }),
        ...(input.PredictorName !== undefined && input.PredictorName !== null && { PredictorName: input.PredictorName }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
        ...(input.TrainingParameters !== undefined &&
            input.TrainingParameters !== null && {
            TrainingParameters: serializeAws_json1_1TrainingParameters(input.TrainingParameters, context),
        }),
    };
};
const serializeAws_json1_1DataDestination = (input, context) => {
    return {
        ...(input.S3Config !== undefined &&
            input.S3Config !== null && { S3Config: serializeAws_json1_1S3Config(input.S3Config, context) }),
    };
};
const serializeAws_json1_1DataSource = (input, context) => {
    return {
        ...(input.S3Config !== undefined &&
            input.S3Config !== null && { S3Config: serializeAws_json1_1S3Config(input.S3Config, context) }),
    };
};
const serializeAws_json1_1DeleteDatasetGroupRequest = (input, context) => {
    return {
        ...(input.DatasetGroupArn !== undefined &&
            input.DatasetGroupArn !== null && { DatasetGroupArn: input.DatasetGroupArn }),
    };
};
const serializeAws_json1_1DeleteDatasetImportJobRequest = (input, context) => {
    return {
        ...(input.DatasetImportJobArn !== undefined &&
            input.DatasetImportJobArn !== null && { DatasetImportJobArn: input.DatasetImportJobArn }),
    };
};
const serializeAws_json1_1DeleteDatasetRequest = (input, context) => {
    return {
        ...(input.DatasetArn !== undefined && input.DatasetArn !== null && { DatasetArn: input.DatasetArn }),
    };
};
const serializeAws_json1_1DeleteForecastExportJobRequest = (input, context) => {
    return {
        ...(input.ForecastExportJobArn !== undefined &&
            input.ForecastExportJobArn !== null && { ForecastExportJobArn: input.ForecastExportJobArn }),
    };
};
const serializeAws_json1_1DeleteForecastRequest = (input, context) => {
    return {
        ...(input.ForecastArn !== undefined && input.ForecastArn !== null && { ForecastArn: input.ForecastArn }),
    };
};
const serializeAws_json1_1DeletePredictorBacktestExportJobRequest = (input, context) => {
    return {
        ...(input.PredictorBacktestExportJobArn !== undefined &&
            input.PredictorBacktestExportJobArn !== null && {
            PredictorBacktestExportJobArn: input.PredictorBacktestExportJobArn,
        }),
    };
};
const serializeAws_json1_1DeletePredictorRequest = (input, context) => {
    return {
        ...(input.PredictorArn !== undefined && input.PredictorArn !== null && { PredictorArn: input.PredictorArn }),
    };
};
const serializeAws_json1_1DeleteResourceTreeRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_1DescribeDatasetGroupRequest = (input, context) => {
    return {
        ...(input.DatasetGroupArn !== undefined &&
            input.DatasetGroupArn !== null && { DatasetGroupArn: input.DatasetGroupArn }),
    };
};
const serializeAws_json1_1DescribeDatasetImportJobRequest = (input, context) => {
    return {
        ...(input.DatasetImportJobArn !== undefined &&
            input.DatasetImportJobArn !== null && { DatasetImportJobArn: input.DatasetImportJobArn }),
    };
};
const serializeAws_json1_1DescribeDatasetRequest = (input, context) => {
    return {
        ...(input.DatasetArn !== undefined && input.DatasetArn !== null && { DatasetArn: input.DatasetArn }),
    };
};
const serializeAws_json1_1DescribeForecastExportJobRequest = (input, context) => {
    return {
        ...(input.ForecastExportJobArn !== undefined &&
            input.ForecastExportJobArn !== null && { ForecastExportJobArn: input.ForecastExportJobArn }),
    };
};
const serializeAws_json1_1DescribeForecastRequest = (input, context) => {
    return {
        ...(input.ForecastArn !== undefined && input.ForecastArn !== null && { ForecastArn: input.ForecastArn }),
    };
};
const serializeAws_json1_1DescribePredictorBacktestExportJobRequest = (input, context) => {
    return {
        ...(input.PredictorBacktestExportJobArn !== undefined &&
            input.PredictorBacktestExportJobArn !== null && {
            PredictorBacktestExportJobArn: input.PredictorBacktestExportJobArn,
        }),
    };
};
const serializeAws_json1_1DescribePredictorRequest = (input, context) => {
    return {
        ...(input.PredictorArn !== undefined && input.PredictorArn !== null && { PredictorArn: input.PredictorArn }),
    };
};
const serializeAws_json1_1EncryptionConfig = (input, context) => {
    return {
        ...(input.KMSKeyArn !== undefined && input.KMSKeyArn !== null && { KMSKeyArn: input.KMSKeyArn }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    };
};
const serializeAws_json1_1EvaluationParameters = (input, context) => {
    return {
        ...(input.BackTestWindowOffset !== undefined &&
            input.BackTestWindowOffset !== null && { BackTestWindowOffset: input.BackTestWindowOffset }),
        ...(input.NumberOfBacktestWindows !== undefined &&
            input.NumberOfBacktestWindows !== null && { NumberOfBacktestWindows: input.NumberOfBacktestWindows }),
    };
};
const serializeAws_json1_1Featurization = (input, context) => {
    return {
        ...(input.AttributeName !== undefined && input.AttributeName !== null && { AttributeName: input.AttributeName }),
        ...(input.FeaturizationPipeline !== undefined &&
            input.FeaturizationPipeline !== null && {
            FeaturizationPipeline: serializeAws_json1_1FeaturizationPipeline(input.FeaturizationPipeline, context),
        }),
    };
};
const serializeAws_json1_1FeaturizationConfig = (input, context) => {
    return {
        ...(input.Featurizations !== undefined &&
            input.Featurizations !== null && {
            Featurizations: serializeAws_json1_1Featurizations(input.Featurizations, context),
        }),
        ...(input.ForecastDimensions !== undefined &&
            input.ForecastDimensions !== null && {
            ForecastDimensions: serializeAws_json1_1ForecastDimensions(input.ForecastDimensions, context),
        }),
        ...(input.ForecastFrequency !== undefined &&
            input.ForecastFrequency !== null && { ForecastFrequency: input.ForecastFrequency }),
    };
};
const serializeAws_json1_1FeaturizationMethod = (input, context) => {
    return {
        ...(input.FeaturizationMethodName !== undefined &&
            input.FeaturizationMethodName !== null && { FeaturizationMethodName: input.FeaturizationMethodName }),
        ...(input.FeaturizationMethodParameters !== undefined &&
            input.FeaturizationMethodParameters !== null && {
            FeaturizationMethodParameters: serializeAws_json1_1FeaturizationMethodParameters(input.FeaturizationMethodParameters, context),
        }),
    };
};
const serializeAws_json1_1FeaturizationMethodParameters = (input, context) => {
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
const serializeAws_json1_1FeaturizationPipeline = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1FeaturizationMethod(entry, context);
    });
};
const serializeAws_json1_1Featurizations = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Featurization(entry, context);
    });
};
const serializeAws_json1_1Filter = (input, context) => {
    return {
        ...(input.Condition !== undefined && input.Condition !== null && { Condition: input.Condition }),
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1Filters = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Filter(entry, context);
    });
};
const serializeAws_json1_1ForecastDimensions = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ForecastTypes = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1GetAccuracyMetricsRequest = (input, context) => {
    return {
        ...(input.PredictorArn !== undefined && input.PredictorArn !== null && { PredictorArn: input.PredictorArn }),
    };
};
const serializeAws_json1_1HyperParameterTuningJobConfig = (input, context) => {
    return {
        ...(input.ParameterRanges !== undefined &&
            input.ParameterRanges !== null && {
            ParameterRanges: serializeAws_json1_1ParameterRanges(input.ParameterRanges, context),
        }),
    };
};
const serializeAws_json1_1InputDataConfig = (input, context) => {
    return {
        ...(input.DatasetGroupArn !== undefined &&
            input.DatasetGroupArn !== null && { DatasetGroupArn: input.DatasetGroupArn }),
        ...(input.SupplementaryFeatures !== undefined &&
            input.SupplementaryFeatures !== null && {
            SupplementaryFeatures: serializeAws_json1_1SupplementaryFeatures(input.SupplementaryFeatures, context),
        }),
    };
};
const serializeAws_json1_1IntegerParameterRange = (input, context) => {
    return {
        ...(input.MaxValue !== undefined && input.MaxValue !== null && { MaxValue: input.MaxValue }),
        ...(input.MinValue !== undefined && input.MinValue !== null && { MinValue: input.MinValue }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.ScalingType !== undefined && input.ScalingType !== null && { ScalingType: input.ScalingType }),
    };
};
const serializeAws_json1_1IntegerParameterRanges = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1IntegerParameterRange(entry, context);
    });
};
const serializeAws_json1_1ListDatasetGroupsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListDatasetImportJobsRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1Filters(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListDatasetsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListForecastExportJobsRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1Filters(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListForecastsRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1Filters(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListPredictorBacktestExportJobsRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1Filters(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListPredictorsRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1Filters(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_1ParameterRanges = (input, context) => {
    return {
        ...(input.CategoricalParameterRanges !== undefined &&
            input.CategoricalParameterRanges !== null && {
            CategoricalParameterRanges: serializeAws_json1_1CategoricalParameterRanges(input.CategoricalParameterRanges, context),
        }),
        ...(input.ContinuousParameterRanges !== undefined &&
            input.ContinuousParameterRanges !== null && {
            ContinuousParameterRanges: serializeAws_json1_1ContinuousParameterRanges(input.ContinuousParameterRanges, context),
        }),
        ...(input.IntegerParameterRanges !== undefined &&
            input.IntegerParameterRanges !== null && {
            IntegerParameterRanges: serializeAws_json1_1IntegerParameterRanges(input.IntegerParameterRanges, context),
        }),
    };
};
const serializeAws_json1_1S3Config = (input, context) => {
    return {
        ...(input.KMSKeyArn !== undefined && input.KMSKeyArn !== null && { KMSKeyArn: input.KMSKeyArn }),
        ...(input.Path !== undefined && input.Path !== null && { Path: input.Path }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    };
};
const serializeAws_json1_1Schema = (input, context) => {
    return {
        ...(input.Attributes !== undefined &&
            input.Attributes !== null && { Attributes: serializeAws_json1_1SchemaAttributes(input.Attributes, context) }),
    };
};
const serializeAws_json1_1SchemaAttribute = (input, context) => {
    return {
        ...(input.AttributeName !== undefined && input.AttributeName !== null && { AttributeName: input.AttributeName }),
        ...(input.AttributeType !== undefined && input.AttributeType !== null && { AttributeType: input.AttributeType }),
    };
};
const serializeAws_json1_1SchemaAttributes = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1SchemaAttribute(entry, context);
    });
};
const serializeAws_json1_1StopResourceRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_1SupplementaryFeature = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1SupplementaryFeatures = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1SupplementaryFeature(entry, context);
    });
};
const serializeAws_json1_1Tag = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1TagKeys = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1TagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    };
};
const serializeAws_json1_1Tags = (input, context) => {
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
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
        ...(input.TagKeys !== undefined &&
            input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeys(input.TagKeys, context) }),
    };
};
const serializeAws_json1_1UpdateDatasetGroupRequest = (input, context) => {
    return {
        ...(input.DatasetArns !== undefined &&
            input.DatasetArns !== null && { DatasetArns: serializeAws_json1_1ArnList(input.DatasetArns, context) }),
        ...(input.DatasetGroupArn !== undefined &&
            input.DatasetGroupArn !== null && { DatasetGroupArn: input.DatasetGroupArn }),
    };
};
const serializeAws_json1_1Values = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ArnList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1CategoricalParameterRange = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Values: output.Values !== undefined && output.Values !== null
            ? deserializeAws_json1_1Values(output.Values, context)
            : undefined,
    };
};
const deserializeAws_json1_1CategoricalParameterRanges = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CategoricalParameterRange(entry, context);
    });
};
const deserializeAws_json1_1ContinuousParameterRange = (output, context) => {
    return {
        MaxValue: output.MaxValue !== undefined && output.MaxValue !== null ? output.MaxValue : undefined,
        MinValue: output.MinValue !== undefined && output.MinValue !== null ? output.MinValue : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        ScalingType: output.ScalingType !== undefined && output.ScalingType !== null ? output.ScalingType : undefined,
    };
};
const deserializeAws_json1_1ContinuousParameterRanges = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ContinuousParameterRange(entry, context);
    });
};
const deserializeAws_json1_1CreateDatasetGroupResponse = (output, context) => {
    return {
        DatasetGroupArn: output.DatasetGroupArn !== undefined && output.DatasetGroupArn !== null ? output.DatasetGroupArn : undefined,
    };
};
const deserializeAws_json1_1CreateDatasetImportJobResponse = (output, context) => {
    return {
        DatasetImportJobArn: output.DatasetImportJobArn !== undefined && output.DatasetImportJobArn !== null
            ? output.DatasetImportJobArn
            : undefined,
    };
};
const deserializeAws_json1_1CreateDatasetResponse = (output, context) => {
    return {
        DatasetArn: output.DatasetArn !== undefined && output.DatasetArn !== null ? output.DatasetArn : undefined,
    };
};
const deserializeAws_json1_1CreateForecastExportJobResponse = (output, context) => {
    return {
        ForecastExportJobArn: output.ForecastExportJobArn !== undefined && output.ForecastExportJobArn !== null
            ? output.ForecastExportJobArn
            : undefined,
    };
};
const deserializeAws_json1_1CreateForecastResponse = (output, context) => {
    return {
        ForecastArn: output.ForecastArn !== undefined && output.ForecastArn !== null ? output.ForecastArn : undefined,
    };
};
const deserializeAws_json1_1CreatePredictorBacktestExportJobResponse = (output, context) => {
    return {
        PredictorBacktestExportJobArn: output.PredictorBacktestExportJobArn !== undefined && output.PredictorBacktestExportJobArn !== null
            ? output.PredictorBacktestExportJobArn
            : undefined,
    };
};
const deserializeAws_json1_1CreatePredictorResponse = (output, context) => {
    return {
        PredictorArn: output.PredictorArn !== undefined && output.PredictorArn !== null ? output.PredictorArn : undefined,
    };
};
const deserializeAws_json1_1DataDestination = (output, context) => {
    return {
        S3Config: output.S3Config !== undefined && output.S3Config !== null
            ? deserializeAws_json1_1S3Config(output.S3Config, context)
            : undefined,
    };
};
const deserializeAws_json1_1DatasetGroups = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DatasetGroupSummary(entry, context);
    });
};
const deserializeAws_json1_1DatasetGroupSummary = (output, context) => {
    return {
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        DatasetGroupArn: output.DatasetGroupArn !== undefined && output.DatasetGroupArn !== null ? output.DatasetGroupArn : undefined,
        DatasetGroupName: output.DatasetGroupName !== undefined && output.DatasetGroupName !== null ? output.DatasetGroupName : undefined,
        LastModificationTime: output.LastModificationTime !== undefined && output.LastModificationTime !== null
            ? new Date(Math.round(output.LastModificationTime * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1DatasetImportJobs = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DatasetImportJobSummary(entry, context);
    });
};
const deserializeAws_json1_1DatasetImportJobSummary = (output, context) => {
    return {
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        DataSource: output.DataSource !== undefined && output.DataSource !== null
            ? deserializeAws_json1_1DataSource(output.DataSource, context)
            : undefined,
        DatasetImportJobArn: output.DatasetImportJobArn !== undefined && output.DatasetImportJobArn !== null
            ? output.DatasetImportJobArn
            : undefined,
        DatasetImportJobName: output.DatasetImportJobName !== undefined && output.DatasetImportJobName !== null
            ? output.DatasetImportJobName
            : undefined,
        LastModificationTime: output.LastModificationTime !== undefined && output.LastModificationTime !== null
            ? new Date(Math.round(output.LastModificationTime * 1000))
            : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1Datasets = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DatasetSummary(entry, context);
    });
};
const deserializeAws_json1_1DatasetSummary = (output, context) => {
    return {
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        DatasetArn: output.DatasetArn !== undefined && output.DatasetArn !== null ? output.DatasetArn : undefined,
        DatasetName: output.DatasetName !== undefined && output.DatasetName !== null ? output.DatasetName : undefined,
        DatasetType: output.DatasetType !== undefined && output.DatasetType !== null ? output.DatasetType : undefined,
        Domain: output.Domain !== undefined && output.Domain !== null ? output.Domain : undefined,
        LastModificationTime: output.LastModificationTime !== undefined && output.LastModificationTime !== null
            ? new Date(Math.round(output.LastModificationTime * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1DataSource = (output, context) => {
    return {
        S3Config: output.S3Config !== undefined && output.S3Config !== null
            ? deserializeAws_json1_1S3Config(output.S3Config, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeDatasetGroupResponse = (output, context) => {
    return {
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        DatasetArns: output.DatasetArns !== undefined && output.DatasetArns !== null
            ? deserializeAws_json1_1ArnList(output.DatasetArns, context)
            : undefined,
        DatasetGroupArn: output.DatasetGroupArn !== undefined && output.DatasetGroupArn !== null ? output.DatasetGroupArn : undefined,
        DatasetGroupName: output.DatasetGroupName !== undefined && output.DatasetGroupName !== null ? output.DatasetGroupName : undefined,
        Domain: output.Domain !== undefined && output.Domain !== null ? output.Domain : undefined,
        LastModificationTime: output.LastModificationTime !== undefined && output.LastModificationTime !== null
            ? new Date(Math.round(output.LastModificationTime * 1000))
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1DescribeDatasetImportJobResponse = (output, context) => {
    return {
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        DataSize: output.DataSize !== undefined && output.DataSize !== null ? output.DataSize : undefined,
        DataSource: output.DataSource !== undefined && output.DataSource !== null
            ? deserializeAws_json1_1DataSource(output.DataSource, context)
            : undefined,
        DatasetArn: output.DatasetArn !== undefined && output.DatasetArn !== null ? output.DatasetArn : undefined,
        DatasetImportJobArn: output.DatasetImportJobArn !== undefined && output.DatasetImportJobArn !== null
            ? output.DatasetImportJobArn
            : undefined,
        DatasetImportJobName: output.DatasetImportJobName !== undefined && output.DatasetImportJobName !== null
            ? output.DatasetImportJobName
            : undefined,
        EstimatedTimeRemainingInMinutes: output.EstimatedTimeRemainingInMinutes !== undefined && output.EstimatedTimeRemainingInMinutes !== null
            ? output.EstimatedTimeRemainingInMinutes
            : undefined,
        FieldStatistics: output.FieldStatistics !== undefined && output.FieldStatistics !== null
            ? deserializeAws_json1_1FieldStatistics(output.FieldStatistics, context)
            : undefined,
        GeolocationFormat: output.GeolocationFormat !== undefined && output.GeolocationFormat !== null
            ? output.GeolocationFormat
            : undefined,
        LastModificationTime: output.LastModificationTime !== undefined && output.LastModificationTime !== null
            ? new Date(Math.round(output.LastModificationTime * 1000))
            : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        TimeZone: output.TimeZone !== undefined && output.TimeZone !== null ? output.TimeZone : undefined,
        TimestampFormat: output.TimestampFormat !== undefined && output.TimestampFormat !== null ? output.TimestampFormat : undefined,
        UseGeolocationForTimeZone: output.UseGeolocationForTimeZone !== undefined && output.UseGeolocationForTimeZone !== null
            ? output.UseGeolocationForTimeZone
            : undefined,
    };
};
const deserializeAws_json1_1DescribeDatasetResponse = (output, context) => {
    return {
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        DataFrequency: output.DataFrequency !== undefined && output.DataFrequency !== null ? output.DataFrequency : undefined,
        DatasetArn: output.DatasetArn !== undefined && output.DatasetArn !== null ? output.DatasetArn : undefined,
        DatasetName: output.DatasetName !== undefined && output.DatasetName !== null ? output.DatasetName : undefined,
        DatasetType: output.DatasetType !== undefined && output.DatasetType !== null ? output.DatasetType : undefined,
        Domain: output.Domain !== undefined && output.Domain !== null ? output.Domain : undefined,
        EncryptionConfig: output.EncryptionConfig !== undefined && output.EncryptionConfig !== null
            ? deserializeAws_json1_1EncryptionConfig(output.EncryptionConfig, context)
            : undefined,
        LastModificationTime: output.LastModificationTime !== undefined && output.LastModificationTime !== null
            ? new Date(Math.round(output.LastModificationTime * 1000))
            : undefined,
        Schema: output.Schema !== undefined && output.Schema !== null
            ? deserializeAws_json1_1Schema(output.Schema, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1DescribeForecastExportJobResponse = (output, context) => {
    return {
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        Destination: output.Destination !== undefined && output.Destination !== null
            ? deserializeAws_json1_1DataDestination(output.Destination, context)
            : undefined,
        ForecastArn: output.ForecastArn !== undefined && output.ForecastArn !== null ? output.ForecastArn : undefined,
        ForecastExportJobArn: output.ForecastExportJobArn !== undefined && output.ForecastExportJobArn !== null
            ? output.ForecastExportJobArn
            : undefined,
        ForecastExportJobName: output.ForecastExportJobName !== undefined && output.ForecastExportJobName !== null
            ? output.ForecastExportJobName
            : undefined,
        LastModificationTime: output.LastModificationTime !== undefined && output.LastModificationTime !== null
            ? new Date(Math.round(output.LastModificationTime * 1000))
            : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1DescribeForecastResponse = (output, context) => {
    return {
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        DatasetGroupArn: output.DatasetGroupArn !== undefined && output.DatasetGroupArn !== null ? output.DatasetGroupArn : undefined,
        EstimatedTimeRemainingInMinutes: output.EstimatedTimeRemainingInMinutes !== undefined && output.EstimatedTimeRemainingInMinutes !== null
            ? output.EstimatedTimeRemainingInMinutes
            : undefined,
        ForecastArn: output.ForecastArn !== undefined && output.ForecastArn !== null ? output.ForecastArn : undefined,
        ForecastName: output.ForecastName !== undefined && output.ForecastName !== null ? output.ForecastName : undefined,
        ForecastTypes: output.ForecastTypes !== undefined && output.ForecastTypes !== null
            ? deserializeAws_json1_1ForecastTypes(output.ForecastTypes, context)
            : undefined,
        LastModificationTime: output.LastModificationTime !== undefined && output.LastModificationTime !== null
            ? new Date(Math.round(output.LastModificationTime * 1000))
            : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        PredictorArn: output.PredictorArn !== undefined && output.PredictorArn !== null ? output.PredictorArn : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1DescribePredictorBacktestExportJobResponse = (output, context) => {
    return {
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        Destination: output.Destination !== undefined && output.Destination !== null
            ? deserializeAws_json1_1DataDestination(output.Destination, context)
            : undefined,
        LastModificationTime: output.LastModificationTime !== undefined && output.LastModificationTime !== null
            ? new Date(Math.round(output.LastModificationTime * 1000))
            : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        PredictorArn: output.PredictorArn !== undefined && output.PredictorArn !== null ? output.PredictorArn : undefined,
        PredictorBacktestExportJobArn: output.PredictorBacktestExportJobArn !== undefined && output.PredictorBacktestExportJobArn !== null
            ? output.PredictorBacktestExportJobArn
            : undefined,
        PredictorBacktestExportJobName: output.PredictorBacktestExportJobName !== undefined && output.PredictorBacktestExportJobName !== null
            ? output.PredictorBacktestExportJobName
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1DescribePredictorResponse = (output, context) => {
    return {
        AlgorithmArn: output.AlgorithmArn !== undefined && output.AlgorithmArn !== null ? output.AlgorithmArn : undefined,
        AutoMLAlgorithmArns: output.AutoMLAlgorithmArns !== undefined && output.AutoMLAlgorithmArns !== null
            ? deserializeAws_json1_1ArnList(output.AutoMLAlgorithmArns, context)
            : undefined,
        AutoMLOverrideStrategy: output.AutoMLOverrideStrategy !== undefined && output.AutoMLOverrideStrategy !== null
            ? output.AutoMLOverrideStrategy
            : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        DatasetImportJobArns: output.DatasetImportJobArns !== undefined && output.DatasetImportJobArns !== null
            ? deserializeAws_json1_1ArnList(output.DatasetImportJobArns, context)
            : undefined,
        EncryptionConfig: output.EncryptionConfig !== undefined && output.EncryptionConfig !== null
            ? deserializeAws_json1_1EncryptionConfig(output.EncryptionConfig, context)
            : undefined,
        EstimatedTimeRemainingInMinutes: output.EstimatedTimeRemainingInMinutes !== undefined && output.EstimatedTimeRemainingInMinutes !== null
            ? output.EstimatedTimeRemainingInMinutes
            : undefined,
        EvaluationParameters: output.EvaluationParameters !== undefined && output.EvaluationParameters !== null
            ? deserializeAws_json1_1EvaluationParameters(output.EvaluationParameters, context)
            : undefined,
        FeaturizationConfig: output.FeaturizationConfig !== undefined && output.FeaturizationConfig !== null
            ? deserializeAws_json1_1FeaturizationConfig(output.FeaturizationConfig, context)
            : undefined,
        ForecastHorizon: output.ForecastHorizon !== undefined && output.ForecastHorizon !== null ? output.ForecastHorizon : undefined,
        ForecastTypes: output.ForecastTypes !== undefined && output.ForecastTypes !== null
            ? deserializeAws_json1_1ForecastTypes(output.ForecastTypes, context)
            : undefined,
        HPOConfig: output.HPOConfig !== undefined && output.HPOConfig !== null
            ? deserializeAws_json1_1HyperParameterTuningJobConfig(output.HPOConfig, context)
            : undefined,
        InputDataConfig: output.InputDataConfig !== undefined && output.InputDataConfig !== null
            ? deserializeAws_json1_1InputDataConfig(output.InputDataConfig, context)
            : undefined,
        LastModificationTime: output.LastModificationTime !== undefined && output.LastModificationTime !== null
            ? new Date(Math.round(output.LastModificationTime * 1000))
            : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        PerformAutoML: output.PerformAutoML !== undefined && output.PerformAutoML !== null ? output.PerformAutoML : undefined,
        PerformHPO: output.PerformHPO !== undefined && output.PerformHPO !== null ? output.PerformHPO : undefined,
        PredictorArn: output.PredictorArn !== undefined && output.PredictorArn !== null ? output.PredictorArn : undefined,
        PredictorExecutionDetails: output.PredictorExecutionDetails !== undefined && output.PredictorExecutionDetails !== null
            ? deserializeAws_json1_1PredictorExecutionDetails(output.PredictorExecutionDetails, context)
            : undefined,
        PredictorName: output.PredictorName !== undefined && output.PredictorName !== null ? output.PredictorName : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        TrainingParameters: output.TrainingParameters !== undefined && output.TrainingParameters !== null
            ? deserializeAws_json1_1TrainingParameters(output.TrainingParameters, context)
            : undefined,
    };
};
const deserializeAws_json1_1EncryptionConfig = (output, context) => {
    return {
        KMSKeyArn: output.KMSKeyArn !== undefined && output.KMSKeyArn !== null ? output.KMSKeyArn : undefined,
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
    };
};
const deserializeAws_json1_1ErrorMetric = (output, context) => {
    return {
        ForecastType: output.ForecastType !== undefined && output.ForecastType !== null ? output.ForecastType : undefined,
        RMSE: output.RMSE !== undefined && output.RMSE !== null ? output.RMSE : undefined,
        WAPE: output.WAPE !== undefined && output.WAPE !== null ? output.WAPE : undefined,
    };
};
const deserializeAws_json1_1ErrorMetrics = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ErrorMetric(entry, context);
    });
};
const deserializeAws_json1_1EvaluationParameters = (output, context) => {
    return {
        BackTestWindowOffset: output.BackTestWindowOffset !== undefined && output.BackTestWindowOffset !== null
            ? output.BackTestWindowOffset
            : undefined,
        NumberOfBacktestWindows: output.NumberOfBacktestWindows !== undefined && output.NumberOfBacktestWindows !== null
            ? output.NumberOfBacktestWindows
            : undefined,
    };
};
const deserializeAws_json1_1EvaluationResult = (output, context) => {
    return {
        AlgorithmArn: output.AlgorithmArn !== undefined && output.AlgorithmArn !== null ? output.AlgorithmArn : undefined,
        TestWindows: output.TestWindows !== undefined && output.TestWindows !== null
            ? deserializeAws_json1_1TestWindows(output.TestWindows, context)
            : undefined,
    };
};
const deserializeAws_json1_1Featurization = (output, context) => {
    return {
        AttributeName: output.AttributeName !== undefined && output.AttributeName !== null ? output.AttributeName : undefined,
        FeaturizationPipeline: output.FeaturizationPipeline !== undefined && output.FeaturizationPipeline !== null
            ? deserializeAws_json1_1FeaturizationPipeline(output.FeaturizationPipeline, context)
            : undefined,
    };
};
const deserializeAws_json1_1FeaturizationConfig = (output, context) => {
    return {
        Featurizations: output.Featurizations !== undefined && output.Featurizations !== null
            ? deserializeAws_json1_1Featurizations(output.Featurizations, context)
            : undefined,
        ForecastDimensions: output.ForecastDimensions !== undefined && output.ForecastDimensions !== null
            ? deserializeAws_json1_1ForecastDimensions(output.ForecastDimensions, context)
            : undefined,
        ForecastFrequency: output.ForecastFrequency !== undefined && output.ForecastFrequency !== null
            ? output.ForecastFrequency
            : undefined,
    };
};
const deserializeAws_json1_1FeaturizationMethod = (output, context) => {
    return {
        FeaturizationMethodName: output.FeaturizationMethodName !== undefined && output.FeaturizationMethodName !== null
            ? output.FeaturizationMethodName
            : undefined,
        FeaturizationMethodParameters: output.FeaturizationMethodParameters !== undefined && output.FeaturizationMethodParameters !== null
            ? deserializeAws_json1_1FeaturizationMethodParameters(output.FeaturizationMethodParameters, context)
            : undefined,
    };
};
const deserializeAws_json1_1FeaturizationMethodParameters = (output, context) => {
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
const deserializeAws_json1_1FeaturizationPipeline = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FeaturizationMethod(entry, context);
    });
};
const deserializeAws_json1_1Featurizations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Featurization(entry, context);
    });
};
const deserializeAws_json1_1FieldStatistics = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_1Statistics(value, context),
        };
    }, {});
};
const deserializeAws_json1_1ForecastDimensions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ForecastExportJobs = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ForecastExportJobSummary(entry, context);
    });
};
const deserializeAws_json1_1ForecastExportJobSummary = (output, context) => {
    return {
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        Destination: output.Destination !== undefined && output.Destination !== null
            ? deserializeAws_json1_1DataDestination(output.Destination, context)
            : undefined,
        ForecastExportJobArn: output.ForecastExportJobArn !== undefined && output.ForecastExportJobArn !== null
            ? output.ForecastExportJobArn
            : undefined,
        ForecastExportJobName: output.ForecastExportJobName !== undefined && output.ForecastExportJobName !== null
            ? output.ForecastExportJobName
            : undefined,
        LastModificationTime: output.LastModificationTime !== undefined && output.LastModificationTime !== null
            ? new Date(Math.round(output.LastModificationTime * 1000))
            : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1Forecasts = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ForecastSummary(entry, context);
    });
};
const deserializeAws_json1_1ForecastSummary = (output, context) => {
    return {
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        DatasetGroupArn: output.DatasetGroupArn !== undefined && output.DatasetGroupArn !== null ? output.DatasetGroupArn : undefined,
        ForecastArn: output.ForecastArn !== undefined && output.ForecastArn !== null ? output.ForecastArn : undefined,
        ForecastName: output.ForecastName !== undefined && output.ForecastName !== null ? output.ForecastName : undefined,
        LastModificationTime: output.LastModificationTime !== undefined && output.LastModificationTime !== null
            ? new Date(Math.round(output.LastModificationTime * 1000))
            : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        PredictorArn: output.PredictorArn !== undefined && output.PredictorArn !== null ? output.PredictorArn : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1ForecastTypes = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1GetAccuracyMetricsResponse = (output, context) => {
    return {
        AutoMLOverrideStrategy: output.AutoMLOverrideStrategy !== undefined && output.AutoMLOverrideStrategy !== null
            ? output.AutoMLOverrideStrategy
            : undefined,
        PredictorEvaluationResults: output.PredictorEvaluationResults !== undefined && output.PredictorEvaluationResults !== null
            ? deserializeAws_json1_1PredictorEvaluationResults(output.PredictorEvaluationResults, context)
            : undefined,
    };
};
const deserializeAws_json1_1HyperParameterTuningJobConfig = (output, context) => {
    return {
        ParameterRanges: output.ParameterRanges !== undefined && output.ParameterRanges !== null
            ? deserializeAws_json1_1ParameterRanges(output.ParameterRanges, context)
            : undefined,
    };
};
const deserializeAws_json1_1InputDataConfig = (output, context) => {
    return {
        DatasetGroupArn: output.DatasetGroupArn !== undefined && output.DatasetGroupArn !== null ? output.DatasetGroupArn : undefined,
        SupplementaryFeatures: output.SupplementaryFeatures !== undefined && output.SupplementaryFeatures !== null
            ? deserializeAws_json1_1SupplementaryFeatures(output.SupplementaryFeatures, context)
            : undefined,
    };
};
const deserializeAws_json1_1IntegerParameterRange = (output, context) => {
    return {
        MaxValue: output.MaxValue !== undefined && output.MaxValue !== null ? output.MaxValue : undefined,
        MinValue: output.MinValue !== undefined && output.MinValue !== null ? output.MinValue : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        ScalingType: output.ScalingType !== undefined && output.ScalingType !== null ? output.ScalingType : undefined,
    };
};
const deserializeAws_json1_1IntegerParameterRanges = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1IntegerParameterRange(entry, context);
    });
};
const deserializeAws_json1_1InvalidInputException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidNextTokenException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ListDatasetGroupsResponse = (output, context) => {
    return {
        DatasetGroups: output.DatasetGroups !== undefined && output.DatasetGroups !== null
            ? deserializeAws_json1_1DatasetGroups(output.DatasetGroups, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListDatasetImportJobsResponse = (output, context) => {
    return {
        DatasetImportJobs: output.DatasetImportJobs !== undefined && output.DatasetImportJobs !== null
            ? deserializeAws_json1_1DatasetImportJobs(output.DatasetImportJobs, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListDatasetsResponse = (output, context) => {
    return {
        Datasets: output.Datasets !== undefined && output.Datasets !== null
            ? deserializeAws_json1_1Datasets(output.Datasets, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListForecastExportJobsResponse = (output, context) => {
    return {
        ForecastExportJobs: output.ForecastExportJobs !== undefined && output.ForecastExportJobs !== null
            ? deserializeAws_json1_1ForecastExportJobs(output.ForecastExportJobs, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListForecastsResponse = (output, context) => {
    return {
        Forecasts: output.Forecasts !== undefined && output.Forecasts !== null
            ? deserializeAws_json1_1Forecasts(output.Forecasts, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListPredictorBacktestExportJobsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        PredictorBacktestExportJobs: output.PredictorBacktestExportJobs !== undefined && output.PredictorBacktestExportJobs !== null
            ? deserializeAws_json1_1PredictorBacktestExportJobs(output.PredictorBacktestExportJobs, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListPredictorsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Predictors: output.Predictors !== undefined && output.Predictors !== null
            ? deserializeAws_json1_1Predictors(output.Predictors, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    return {
        Tags: output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    };
};
const deserializeAws_json1_1Metrics = (output, context) => {
    return {
        ErrorMetrics: output.ErrorMetrics !== undefined && output.ErrorMetrics !== null
            ? deserializeAws_json1_1ErrorMetrics(output.ErrorMetrics, context)
            : undefined,
        RMSE: output.RMSE !== undefined && output.RMSE !== null ? output.RMSE : undefined,
        WeightedQuantileLosses: output.WeightedQuantileLosses !== undefined && output.WeightedQuantileLosses !== null
            ? deserializeAws_json1_1WeightedQuantileLosses(output.WeightedQuantileLosses, context)
            : undefined,
    };
};
const deserializeAws_json1_1ParameterRanges = (output, context) => {
    return {
        CategoricalParameterRanges: output.CategoricalParameterRanges !== undefined && output.CategoricalParameterRanges !== null
            ? deserializeAws_json1_1CategoricalParameterRanges(output.CategoricalParameterRanges, context)
            : undefined,
        ContinuousParameterRanges: output.ContinuousParameterRanges !== undefined && output.ContinuousParameterRanges !== null
            ? deserializeAws_json1_1ContinuousParameterRanges(output.ContinuousParameterRanges, context)
            : undefined,
        IntegerParameterRanges: output.IntegerParameterRanges !== undefined && output.IntegerParameterRanges !== null
            ? deserializeAws_json1_1IntegerParameterRanges(output.IntegerParameterRanges, context)
            : undefined,
    };
};
const deserializeAws_json1_1PredictorBacktestExportJobs = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PredictorBacktestExportJobSummary(entry, context);
    });
};
const deserializeAws_json1_1PredictorBacktestExportJobSummary = (output, context) => {
    return {
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        Destination: output.Destination !== undefined && output.Destination !== null
            ? deserializeAws_json1_1DataDestination(output.Destination, context)
            : undefined,
        LastModificationTime: output.LastModificationTime !== undefined && output.LastModificationTime !== null
            ? new Date(Math.round(output.LastModificationTime * 1000))
            : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        PredictorBacktestExportJobArn: output.PredictorBacktestExportJobArn !== undefined && output.PredictorBacktestExportJobArn !== null
            ? output.PredictorBacktestExportJobArn
            : undefined,
        PredictorBacktestExportJobName: output.PredictorBacktestExportJobName !== undefined && output.PredictorBacktestExportJobName !== null
            ? output.PredictorBacktestExportJobName
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1PredictorEvaluationResults = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EvaluationResult(entry, context);
    });
};
const deserializeAws_json1_1PredictorExecution = (output, context) => {
    return {
        AlgorithmArn: output.AlgorithmArn !== undefined && output.AlgorithmArn !== null ? output.AlgorithmArn : undefined,
        TestWindows: output.TestWindows !== undefined && output.TestWindows !== null
            ? deserializeAws_json1_1TestWindowDetails(output.TestWindows, context)
            : undefined,
    };
};
const deserializeAws_json1_1PredictorExecutionDetails = (output, context) => {
    return {
        PredictorExecutions: output.PredictorExecutions !== undefined && output.PredictorExecutions !== null
            ? deserializeAws_json1_1PredictorExecutions(output.PredictorExecutions, context)
            : undefined,
    };
};
const deserializeAws_json1_1PredictorExecutions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PredictorExecution(entry, context);
    });
};
const deserializeAws_json1_1Predictors = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PredictorSummary(entry, context);
    });
};
const deserializeAws_json1_1PredictorSummary = (output, context) => {
    return {
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        DatasetGroupArn: output.DatasetGroupArn !== undefined && output.DatasetGroupArn !== null ? output.DatasetGroupArn : undefined,
        LastModificationTime: output.LastModificationTime !== undefined && output.LastModificationTime !== null
            ? new Date(Math.round(output.LastModificationTime * 1000))
            : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        PredictorArn: output.PredictorArn !== undefined && output.PredictorArn !== null ? output.PredictorArn : undefined,
        PredictorName: output.PredictorName !== undefined && output.PredictorName !== null ? output.PredictorName : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1ResourceAlreadyExistsException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ResourceInUseException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1S3Config = (output, context) => {
    return {
        KMSKeyArn: output.KMSKeyArn !== undefined && output.KMSKeyArn !== null ? output.KMSKeyArn : undefined,
        Path: output.Path !== undefined && output.Path !== null ? output.Path : undefined,
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
    };
};
const deserializeAws_json1_1Schema = (output, context) => {
    return {
        Attributes: output.Attributes !== undefined && output.Attributes !== null
            ? deserializeAws_json1_1SchemaAttributes(output.Attributes, context)
            : undefined,
    };
};
const deserializeAws_json1_1SchemaAttribute = (output, context) => {
    return {
        AttributeName: output.AttributeName !== undefined && output.AttributeName !== null ? output.AttributeName : undefined,
        AttributeType: output.AttributeType !== undefined && output.AttributeType !== null ? output.AttributeType : undefined,
    };
};
const deserializeAws_json1_1SchemaAttributes = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SchemaAttribute(entry, context);
    });
};
const deserializeAws_json1_1Statistics = (output, context) => {
    return {
        Avg: output.Avg !== undefined && output.Avg !== null ? output.Avg : undefined,
        Count: output.Count !== undefined && output.Count !== null ? output.Count : undefined,
        CountDistinct: output.CountDistinct !== undefined && output.CountDistinct !== null ? output.CountDistinct : undefined,
        CountDistinctLong: output.CountDistinctLong !== undefined && output.CountDistinctLong !== null
            ? output.CountDistinctLong
            : undefined,
        CountLong: output.CountLong !== undefined && output.CountLong !== null ? output.CountLong : undefined,
        CountNan: output.CountNan !== undefined && output.CountNan !== null ? output.CountNan : undefined,
        CountNanLong: output.CountNanLong !== undefined && output.CountNanLong !== null ? output.CountNanLong : undefined,
        CountNull: output.CountNull !== undefined && output.CountNull !== null ? output.CountNull : undefined,
        CountNullLong: output.CountNullLong !== undefined && output.CountNullLong !== null ? output.CountNullLong : undefined,
        Max: output.Max !== undefined && output.Max !== null ? output.Max : undefined,
        Min: output.Min !== undefined && output.Min !== null ? output.Min : undefined,
        Stddev: output.Stddev !== undefined && output.Stddev !== null ? output.Stddev : undefined,
    };
};
const deserializeAws_json1_1SupplementaryFeature = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1SupplementaryFeatures = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SupplementaryFeature(entry, context);
    });
};
const deserializeAws_json1_1Tag = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1TagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1Tags = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Tag(entry, context);
    });
};
const deserializeAws_json1_1TestWindowDetails = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TestWindowSummary(entry, context);
    });
};
const deserializeAws_json1_1TestWindows = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1WindowSummary(entry, context);
    });
};
const deserializeAws_json1_1TestWindowSummary = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        TestWindowEnd: output.TestWindowEnd !== undefined && output.TestWindowEnd !== null
            ? new Date(Math.round(output.TestWindowEnd * 1000))
            : undefined,
        TestWindowStart: output.TestWindowStart !== undefined && output.TestWindowStart !== null
            ? new Date(Math.round(output.TestWindowStart * 1000))
            : undefined,
    };
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
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateDatasetGroupResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1Values = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1WeightedQuantileLoss = (output, context) => {
    return {
        LossValue: output.LossValue !== undefined && output.LossValue !== null ? output.LossValue : undefined,
        Quantile: output.Quantile !== undefined && output.Quantile !== null ? output.Quantile : undefined,
    };
};
const deserializeAws_json1_1WeightedQuantileLosses = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1WeightedQuantileLoss(entry, context);
    });
};
const deserializeAws_json1_1WindowSummary = (output, context) => {
    return {
        EvaluationType: output.EvaluationType !== undefined && output.EvaluationType !== null ? output.EvaluationType : undefined,
        ItemCount: output.ItemCount !== undefined && output.ItemCount !== null ? output.ItemCount : undefined,
        Metrics: output.Metrics !== undefined && output.Metrics !== null
            ? deserializeAws_json1_1Metrics(output.Metrics, context)
            : undefined,
        TestWindowEnd: output.TestWindowEnd !== undefined && output.TestWindowEnd !== null
            ? new Date(Math.round(output.TestWindowEnd * 1000))
            : undefined,
        TestWindowStart: output.TestWindowStart !== undefined && output.TestWindowStart !== null
            ? new Date(Math.round(output.TestWindowStart * 1000))
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