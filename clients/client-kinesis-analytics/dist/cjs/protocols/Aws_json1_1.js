"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1UpdateApplicationCommand = exports.deserializeAws_json1_1UntagResourceCommand = exports.deserializeAws_json1_1TagResourceCommand = exports.deserializeAws_json1_1StopApplicationCommand = exports.deserializeAws_json1_1StartApplicationCommand = exports.deserializeAws_json1_1ListTagsForResourceCommand = exports.deserializeAws_json1_1ListApplicationsCommand = exports.deserializeAws_json1_1DiscoverInputSchemaCommand = exports.deserializeAws_json1_1DescribeApplicationCommand = exports.deserializeAws_json1_1DeleteApplicationReferenceDataSourceCommand = exports.deserializeAws_json1_1DeleteApplicationOutputCommand = exports.deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommand = exports.deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommand = exports.deserializeAws_json1_1DeleteApplicationCommand = exports.deserializeAws_json1_1CreateApplicationCommand = exports.deserializeAws_json1_1AddApplicationReferenceDataSourceCommand = exports.deserializeAws_json1_1AddApplicationOutputCommand = exports.deserializeAws_json1_1AddApplicationInputProcessingConfigurationCommand = exports.deserializeAws_json1_1AddApplicationInputCommand = exports.deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommand = exports.serializeAws_json1_1UpdateApplicationCommand = exports.serializeAws_json1_1UntagResourceCommand = exports.serializeAws_json1_1TagResourceCommand = exports.serializeAws_json1_1StopApplicationCommand = exports.serializeAws_json1_1StartApplicationCommand = exports.serializeAws_json1_1ListTagsForResourceCommand = exports.serializeAws_json1_1ListApplicationsCommand = exports.serializeAws_json1_1DiscoverInputSchemaCommand = exports.serializeAws_json1_1DescribeApplicationCommand = exports.serializeAws_json1_1DeleteApplicationReferenceDataSourceCommand = exports.serializeAws_json1_1DeleteApplicationOutputCommand = exports.serializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommand = exports.serializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommand = exports.serializeAws_json1_1DeleteApplicationCommand = exports.serializeAws_json1_1CreateApplicationCommand = exports.serializeAws_json1_1AddApplicationReferenceDataSourceCommand = exports.serializeAws_json1_1AddApplicationOutputCommand = exports.serializeAws_json1_1AddApplicationInputProcessingConfigurationCommand = exports.serializeAws_json1_1AddApplicationInputCommand = exports.serializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AddApplicationCloudWatchLoggingOptionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommand = serializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommand;
const serializeAws_json1_1AddApplicationInputCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20150814.AddApplicationInput",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AddApplicationInputRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AddApplicationInputCommand = serializeAws_json1_1AddApplicationInputCommand;
const serializeAws_json1_1AddApplicationInputProcessingConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20150814.AddApplicationInputProcessingConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AddApplicationInputProcessingConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AddApplicationInputProcessingConfigurationCommand = serializeAws_json1_1AddApplicationInputProcessingConfigurationCommand;
const serializeAws_json1_1AddApplicationOutputCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20150814.AddApplicationOutput",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AddApplicationOutputRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AddApplicationOutputCommand = serializeAws_json1_1AddApplicationOutputCommand;
const serializeAws_json1_1AddApplicationReferenceDataSourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20150814.AddApplicationReferenceDataSource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AddApplicationReferenceDataSourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AddApplicationReferenceDataSourceCommand = serializeAws_json1_1AddApplicationReferenceDataSourceCommand;
const serializeAws_json1_1CreateApplicationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20150814.CreateApplication",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateApplicationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateApplicationCommand = serializeAws_json1_1CreateApplicationCommand;
const serializeAws_json1_1DeleteApplicationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20150814.DeleteApplication",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteApplicationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteApplicationCommand = serializeAws_json1_1DeleteApplicationCommand;
const serializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20150814.DeleteApplicationCloudWatchLoggingOption",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommand = serializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommand;
const serializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20150814.DeleteApplicationInputProcessingConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteApplicationInputProcessingConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommand = serializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommand;
const serializeAws_json1_1DeleteApplicationOutputCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20150814.DeleteApplicationOutput",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteApplicationOutputRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteApplicationOutputCommand = serializeAws_json1_1DeleteApplicationOutputCommand;
const serializeAws_json1_1DeleteApplicationReferenceDataSourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20150814.DeleteApplicationReferenceDataSource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteApplicationReferenceDataSourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteApplicationReferenceDataSourceCommand = serializeAws_json1_1DeleteApplicationReferenceDataSourceCommand;
const serializeAws_json1_1DescribeApplicationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20150814.DescribeApplication",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeApplicationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeApplicationCommand = serializeAws_json1_1DescribeApplicationCommand;
const serializeAws_json1_1DiscoverInputSchemaCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20150814.DiscoverInputSchema",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DiscoverInputSchemaRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DiscoverInputSchemaCommand = serializeAws_json1_1DiscoverInputSchemaCommand;
const serializeAws_json1_1ListApplicationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20150814.ListApplications",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListApplicationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListApplicationsCommand = serializeAws_json1_1ListApplicationsCommand;
const serializeAws_json1_1ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20150814.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
const serializeAws_json1_1StartApplicationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20150814.StartApplication",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartApplicationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartApplicationCommand = serializeAws_json1_1StartApplicationCommand;
const serializeAws_json1_1StopApplicationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20150814.StopApplication",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StopApplicationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopApplicationCommand = serializeAws_json1_1StopApplicationCommand;
const serializeAws_json1_1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20150814.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20150814.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
const serializeAws_json1_1UpdateApplicationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20150814.UpdateApplication",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateApplicationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateApplicationCommand = serializeAws_json1_1UpdateApplicationCommand;
const deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommand = deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommand;
const deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.kinesisanalytics#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisanalytics#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesisanalytics#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisanalytics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kinesisanalytics#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AddApplicationInputCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AddApplicationInputCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddApplicationInputResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AddApplicationInputCommand = deserializeAws_json1_1AddApplicationInputCommand;
const deserializeAws_json1_1AddApplicationInputCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CodeValidationException":
        case "com.amazonaws.kinesisanalytics#CodeValidationException":
            response = {
                ...(await deserializeAws_json1_1CodeValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.kinesisanalytics#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisanalytics#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesisanalytics#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisanalytics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kinesisanalytics#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AddApplicationInputProcessingConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AddApplicationInputProcessingConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddApplicationInputProcessingConfigurationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AddApplicationInputProcessingConfigurationCommand = deserializeAws_json1_1AddApplicationInputProcessingConfigurationCommand;
const deserializeAws_json1_1AddApplicationInputProcessingConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.kinesisanalytics#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisanalytics#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesisanalytics#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisanalytics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kinesisanalytics#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AddApplicationOutputCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AddApplicationOutputCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddApplicationOutputResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AddApplicationOutputCommand = deserializeAws_json1_1AddApplicationOutputCommand;
const deserializeAws_json1_1AddApplicationOutputCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.kinesisanalytics#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisanalytics#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesisanalytics#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisanalytics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kinesisanalytics#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AddApplicationReferenceDataSourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AddApplicationReferenceDataSourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddApplicationReferenceDataSourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AddApplicationReferenceDataSourceCommand = deserializeAws_json1_1AddApplicationReferenceDataSourceCommand;
const deserializeAws_json1_1AddApplicationReferenceDataSourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.kinesisanalytics#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisanalytics#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesisanalytics#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisanalytics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kinesisanalytics#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateApplicationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateApplicationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateApplicationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateApplicationCommand = deserializeAws_json1_1CreateApplicationCommand;
const deserializeAws_json1_1CreateApplicationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CodeValidationException":
        case "com.amazonaws.kinesisanalytics#CodeValidationException":
            response = {
                ...(await deserializeAws_json1_1CodeValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.kinesisanalytics#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisanalytics#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.kinesisanalytics#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesisanalytics#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.kinesisanalytics#TooManyTagsException":
            response = {
                ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteApplicationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteApplicationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteApplicationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteApplicationCommand = deserializeAws_json1_1DeleteApplicationCommand;
const deserializeAws_json1_1DeleteApplicationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.kinesisanalytics#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesisanalytics#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisanalytics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kinesisanalytics#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommand = deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommand;
const deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.kinesisanalytics#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisanalytics#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesisanalytics#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisanalytics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kinesisanalytics#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommand = deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommand;
const deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.kinesisanalytics#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisanalytics#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesisanalytics#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisanalytics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kinesisanalytics#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteApplicationOutputCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteApplicationOutputCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteApplicationOutputResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteApplicationOutputCommand = deserializeAws_json1_1DeleteApplicationOutputCommand;
const deserializeAws_json1_1DeleteApplicationOutputCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.kinesisanalytics#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisanalytics#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesisanalytics#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisanalytics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kinesisanalytics#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteApplicationReferenceDataSourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteApplicationReferenceDataSourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteApplicationReferenceDataSourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteApplicationReferenceDataSourceCommand = deserializeAws_json1_1DeleteApplicationReferenceDataSourceCommand;
const deserializeAws_json1_1DeleteApplicationReferenceDataSourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.kinesisanalytics#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisanalytics#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesisanalytics#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisanalytics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kinesisanalytics#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeApplicationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeApplicationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeApplicationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeApplicationCommand = deserializeAws_json1_1DescribeApplicationCommand;
const deserializeAws_json1_1DescribeApplicationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisanalytics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kinesisanalytics#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DiscoverInputSchemaCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DiscoverInputSchemaCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DiscoverInputSchemaResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DiscoverInputSchemaCommand = deserializeAws_json1_1DiscoverInputSchemaCommand;
const deserializeAws_json1_1DiscoverInputSchemaCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisanalytics#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceProvisionedThroughputExceededException":
        case "com.amazonaws.kinesisanalytics#ResourceProvisionedThroughputExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.kinesisanalytics#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnableToDetectSchemaException":
        case "com.amazonaws.kinesisanalytics#UnableToDetectSchemaException":
            response = {
                ...(await deserializeAws_json1_1UnableToDetectSchemaExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListApplicationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListApplicationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListApplicationsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListApplicationsCommand = deserializeAws_json1_1ListApplicationsCommand;
const deserializeAws_json1_1ListApplicationsCommandError = async (output, context) => {
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
        case "ConcurrentModificationException":
        case "com.amazonaws.kinesisanalytics#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisanalytics#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisanalytics#ResourceNotFoundException":
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
const deserializeAws_json1_1StartApplicationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartApplicationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartApplicationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartApplicationCommand = deserializeAws_json1_1StartApplicationCommand;
const deserializeAws_json1_1StartApplicationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidApplicationConfigurationException":
        case "com.amazonaws.kinesisanalytics#InvalidApplicationConfigurationException":
            response = {
                ...(await deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisanalytics#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesisanalytics#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisanalytics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kinesisanalytics#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StopApplicationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StopApplicationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopApplicationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopApplicationCommand = deserializeAws_json1_1StopApplicationCommand;
const deserializeAws_json1_1StopApplicationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceInUseException":
        case "com.amazonaws.kinesisanalytics#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisanalytics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kinesisanalytics#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
        case "ConcurrentModificationException":
        case "com.amazonaws.kinesisanalytics#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisanalytics#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesisanalytics#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisanalytics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.kinesisanalytics#TooManyTagsException":
            response = {
                ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
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
        case "ConcurrentModificationException":
        case "com.amazonaws.kinesisanalytics#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisanalytics#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesisanalytics#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisanalytics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.kinesisanalytics#TooManyTagsException":
            response = {
                ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateApplicationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateApplicationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateApplicationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateApplicationCommand = deserializeAws_json1_1UpdateApplicationCommand;
const deserializeAws_json1_1UpdateApplicationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CodeValidationException":
        case "com.amazonaws.kinesisanalytics#CodeValidationException":
            response = {
                ...(await deserializeAws_json1_1CodeValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.kinesisanalytics#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisanalytics#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesisanalytics#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisanalytics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kinesisanalytics#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CodeValidationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CodeValidationException(body, context);
    const contents = {
        name: "CodeValidationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
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
const deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidApplicationConfigurationException(body, context);
    const contents = {
        name: "InvalidApplicationConfigurationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidArgumentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidArgumentException(body, context);
    const contents = {
        name: "InvalidArgumentException",
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
const deserializeAws_json1_1ResourceProvisionedThroughputExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceProvisionedThroughputExceededException(body, context);
    const contents = {
        name: "ResourceProvisionedThroughputExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ServiceUnavailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceUnavailableException(body, context);
    const contents = {
        name: "ServiceUnavailableException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TooManyTagsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TooManyTagsException(body, context);
    const contents = {
        name: "TooManyTagsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UnableToDetectSchemaExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnableToDetectSchemaException(body, context);
    const contents = {
        name: "UnableToDetectSchemaException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UnsupportedOperationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedOperationException(body, context);
    const contents = {
        name: "UnsupportedOperationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1AddApplicationCloudWatchLoggingOptionRequest = (input, context) => {
    return {
        ...(input.ApplicationName !== undefined &&
            input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
        ...(input.CloudWatchLoggingOption !== undefined &&
            input.CloudWatchLoggingOption !== null && {
            CloudWatchLoggingOption: serializeAws_json1_1CloudWatchLoggingOption(input.CloudWatchLoggingOption, context),
        }),
        ...(input.CurrentApplicationVersionId !== undefined &&
            input.CurrentApplicationVersionId !== null && { CurrentApplicationVersionId: input.CurrentApplicationVersionId }),
    };
};
const serializeAws_json1_1AddApplicationInputProcessingConfigurationRequest = (input, context) => {
    return {
        ...(input.ApplicationName !== undefined &&
            input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
        ...(input.CurrentApplicationVersionId !== undefined &&
            input.CurrentApplicationVersionId !== null && { CurrentApplicationVersionId: input.CurrentApplicationVersionId }),
        ...(input.InputId !== undefined && input.InputId !== null && { InputId: input.InputId }),
        ...(input.InputProcessingConfiguration !== undefined &&
            input.InputProcessingConfiguration !== null && {
            InputProcessingConfiguration: serializeAws_json1_1InputProcessingConfiguration(input.InputProcessingConfiguration, context),
        }),
    };
};
const serializeAws_json1_1AddApplicationInputRequest = (input, context) => {
    return {
        ...(input.ApplicationName !== undefined &&
            input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
        ...(input.CurrentApplicationVersionId !== undefined &&
            input.CurrentApplicationVersionId !== null && { CurrentApplicationVersionId: input.CurrentApplicationVersionId }),
        ...(input.Input !== undefined &&
            input.Input !== null && { Input: serializeAws_json1_1Input(input.Input, context) }),
    };
};
const serializeAws_json1_1AddApplicationOutputRequest = (input, context) => {
    return {
        ...(input.ApplicationName !== undefined &&
            input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
        ...(input.CurrentApplicationVersionId !== undefined &&
            input.CurrentApplicationVersionId !== null && { CurrentApplicationVersionId: input.CurrentApplicationVersionId }),
        ...(input.Output !== undefined &&
            input.Output !== null && { Output: serializeAws_json1_1Output(input.Output, context) }),
    };
};
const serializeAws_json1_1AddApplicationReferenceDataSourceRequest = (input, context) => {
    return {
        ...(input.ApplicationName !== undefined &&
            input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
        ...(input.CurrentApplicationVersionId !== undefined &&
            input.CurrentApplicationVersionId !== null && { CurrentApplicationVersionId: input.CurrentApplicationVersionId }),
        ...(input.ReferenceDataSource !== undefined &&
            input.ReferenceDataSource !== null && {
            ReferenceDataSource: serializeAws_json1_1ReferenceDataSource(input.ReferenceDataSource, context),
        }),
    };
};
const serializeAws_json1_1ApplicationUpdate = (input, context) => {
    return {
        ...(input.ApplicationCodeUpdate !== undefined &&
            input.ApplicationCodeUpdate !== null && { ApplicationCodeUpdate: input.ApplicationCodeUpdate }),
        ...(input.CloudWatchLoggingOptionUpdates !== undefined &&
            input.CloudWatchLoggingOptionUpdates !== null && {
            CloudWatchLoggingOptionUpdates: serializeAws_json1_1CloudWatchLoggingOptionUpdates(input.CloudWatchLoggingOptionUpdates, context),
        }),
        ...(input.InputUpdates !== undefined &&
            input.InputUpdates !== null && { InputUpdates: serializeAws_json1_1InputUpdates(input.InputUpdates, context) }),
        ...(input.OutputUpdates !== undefined &&
            input.OutputUpdates !== null && {
            OutputUpdates: serializeAws_json1_1OutputUpdates(input.OutputUpdates, context),
        }),
        ...(input.ReferenceDataSourceUpdates !== undefined &&
            input.ReferenceDataSourceUpdates !== null && {
            ReferenceDataSourceUpdates: serializeAws_json1_1ReferenceDataSourceUpdates(input.ReferenceDataSourceUpdates, context),
        }),
    };
};
const serializeAws_json1_1CloudWatchLoggingOption = (input, context) => {
    return {
        ...(input.LogStreamARN !== undefined && input.LogStreamARN !== null && { LogStreamARN: input.LogStreamARN }),
        ...(input.RoleARN !== undefined && input.RoleARN !== null && { RoleARN: input.RoleARN }),
    };
};
const serializeAws_json1_1CloudWatchLoggingOptions = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1CloudWatchLoggingOption(entry, context);
    });
};
const serializeAws_json1_1CloudWatchLoggingOptionUpdate = (input, context) => {
    return {
        ...(input.CloudWatchLoggingOptionId !== undefined &&
            input.CloudWatchLoggingOptionId !== null && { CloudWatchLoggingOptionId: input.CloudWatchLoggingOptionId }),
        ...(input.LogStreamARNUpdate !== undefined &&
            input.LogStreamARNUpdate !== null && { LogStreamARNUpdate: input.LogStreamARNUpdate }),
        ...(input.RoleARNUpdate !== undefined && input.RoleARNUpdate !== null && { RoleARNUpdate: input.RoleARNUpdate }),
    };
};
const serializeAws_json1_1CloudWatchLoggingOptionUpdates = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1CloudWatchLoggingOptionUpdate(entry, context);
    });
};
const serializeAws_json1_1CreateApplicationRequest = (input, context) => {
    return {
        ...(input.ApplicationCode !== undefined &&
            input.ApplicationCode !== null && { ApplicationCode: input.ApplicationCode }),
        ...(input.ApplicationDescription !== undefined &&
            input.ApplicationDescription !== null && { ApplicationDescription: input.ApplicationDescription }),
        ...(input.ApplicationName !== undefined &&
            input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
        ...(input.CloudWatchLoggingOptions !== undefined &&
            input.CloudWatchLoggingOptions !== null && {
            CloudWatchLoggingOptions: serializeAws_json1_1CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
        }),
        ...(input.Inputs !== undefined &&
            input.Inputs !== null && { Inputs: serializeAws_json1_1Inputs(input.Inputs, context) }),
        ...(input.Outputs !== undefined &&
            input.Outputs !== null && { Outputs: serializeAws_json1_1Outputs(input.Outputs, context) }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    };
};
const serializeAws_json1_1CSVMappingParameters = (input, context) => {
    return {
        ...(input.RecordColumnDelimiter !== undefined &&
            input.RecordColumnDelimiter !== null && { RecordColumnDelimiter: input.RecordColumnDelimiter }),
        ...(input.RecordRowDelimiter !== undefined &&
            input.RecordRowDelimiter !== null && { RecordRowDelimiter: input.RecordRowDelimiter }),
    };
};
const serializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionRequest = (input, context) => {
    return {
        ...(input.ApplicationName !== undefined &&
            input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
        ...(input.CloudWatchLoggingOptionId !== undefined &&
            input.CloudWatchLoggingOptionId !== null && { CloudWatchLoggingOptionId: input.CloudWatchLoggingOptionId }),
        ...(input.CurrentApplicationVersionId !== undefined &&
            input.CurrentApplicationVersionId !== null && { CurrentApplicationVersionId: input.CurrentApplicationVersionId }),
    };
};
const serializeAws_json1_1DeleteApplicationInputProcessingConfigurationRequest = (input, context) => {
    return {
        ...(input.ApplicationName !== undefined &&
            input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
        ...(input.CurrentApplicationVersionId !== undefined &&
            input.CurrentApplicationVersionId !== null && { CurrentApplicationVersionId: input.CurrentApplicationVersionId }),
        ...(input.InputId !== undefined && input.InputId !== null && { InputId: input.InputId }),
    };
};
const serializeAws_json1_1DeleteApplicationOutputRequest = (input, context) => {
    return {
        ...(input.ApplicationName !== undefined &&
            input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
        ...(input.CurrentApplicationVersionId !== undefined &&
            input.CurrentApplicationVersionId !== null && { CurrentApplicationVersionId: input.CurrentApplicationVersionId }),
        ...(input.OutputId !== undefined && input.OutputId !== null && { OutputId: input.OutputId }),
    };
};
const serializeAws_json1_1DeleteApplicationReferenceDataSourceRequest = (input, context) => {
    return {
        ...(input.ApplicationName !== undefined &&
            input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
        ...(input.CurrentApplicationVersionId !== undefined &&
            input.CurrentApplicationVersionId !== null && { CurrentApplicationVersionId: input.CurrentApplicationVersionId }),
        ...(input.ReferenceId !== undefined && input.ReferenceId !== null && { ReferenceId: input.ReferenceId }),
    };
};
const serializeAws_json1_1DeleteApplicationRequest = (input, context) => {
    return {
        ...(input.ApplicationName !== undefined &&
            input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
        ...(input.CreateTimestamp !== undefined &&
            input.CreateTimestamp !== null && { CreateTimestamp: Math.round(input.CreateTimestamp.getTime() / 1000) }),
    };
};
const serializeAws_json1_1DescribeApplicationRequest = (input, context) => {
    return {
        ...(input.ApplicationName !== undefined &&
            input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
    };
};
const serializeAws_json1_1DestinationSchema = (input, context) => {
    return {
        ...(input.RecordFormatType !== undefined &&
            input.RecordFormatType !== null && { RecordFormatType: input.RecordFormatType }),
    };
};
const serializeAws_json1_1DiscoverInputSchemaRequest = (input, context) => {
    return {
        ...(input.InputProcessingConfiguration !== undefined &&
            input.InputProcessingConfiguration !== null && {
            InputProcessingConfiguration: serializeAws_json1_1InputProcessingConfiguration(input.InputProcessingConfiguration, context),
        }),
        ...(input.InputStartingPositionConfiguration !== undefined &&
            input.InputStartingPositionConfiguration !== null && {
            InputStartingPositionConfiguration: serializeAws_json1_1InputStartingPositionConfiguration(input.InputStartingPositionConfiguration, context),
        }),
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
        ...(input.RoleARN !== undefined && input.RoleARN !== null && { RoleARN: input.RoleARN }),
        ...(input.S3Configuration !== undefined &&
            input.S3Configuration !== null && {
            S3Configuration: serializeAws_json1_1S3Configuration(input.S3Configuration, context),
        }),
    };
};
const serializeAws_json1_1Input = (input, context) => {
    return {
        ...(input.InputParallelism !== undefined &&
            input.InputParallelism !== null && {
            InputParallelism: serializeAws_json1_1InputParallelism(input.InputParallelism, context),
        }),
        ...(input.InputProcessingConfiguration !== undefined &&
            input.InputProcessingConfiguration !== null && {
            InputProcessingConfiguration: serializeAws_json1_1InputProcessingConfiguration(input.InputProcessingConfiguration, context),
        }),
        ...(input.InputSchema !== undefined &&
            input.InputSchema !== null && { InputSchema: serializeAws_json1_1SourceSchema(input.InputSchema, context) }),
        ...(input.KinesisFirehoseInput !== undefined &&
            input.KinesisFirehoseInput !== null && {
            KinesisFirehoseInput: serializeAws_json1_1KinesisFirehoseInput(input.KinesisFirehoseInput, context),
        }),
        ...(input.KinesisStreamsInput !== undefined &&
            input.KinesisStreamsInput !== null && {
            KinesisStreamsInput: serializeAws_json1_1KinesisStreamsInput(input.KinesisStreamsInput, context),
        }),
        ...(input.NamePrefix !== undefined && input.NamePrefix !== null && { NamePrefix: input.NamePrefix }),
    };
};
const serializeAws_json1_1InputConfiguration = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.InputStartingPositionConfiguration !== undefined &&
            input.InputStartingPositionConfiguration !== null && {
            InputStartingPositionConfiguration: serializeAws_json1_1InputStartingPositionConfiguration(input.InputStartingPositionConfiguration, context),
        }),
    };
};
const serializeAws_json1_1InputConfigurations = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1InputConfiguration(entry, context);
    });
};
const serializeAws_json1_1InputLambdaProcessor = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
        ...(input.RoleARN !== undefined && input.RoleARN !== null && { RoleARN: input.RoleARN }),
    };
};
const serializeAws_json1_1InputLambdaProcessorUpdate = (input, context) => {
    return {
        ...(input.ResourceARNUpdate !== undefined &&
            input.ResourceARNUpdate !== null && { ResourceARNUpdate: input.ResourceARNUpdate }),
        ...(input.RoleARNUpdate !== undefined && input.RoleARNUpdate !== null && { RoleARNUpdate: input.RoleARNUpdate }),
    };
};
const serializeAws_json1_1InputParallelism = (input, context) => {
    return {
        ...(input.Count !== undefined && input.Count !== null && { Count: input.Count }),
    };
};
const serializeAws_json1_1InputParallelismUpdate = (input, context) => {
    return {
        ...(input.CountUpdate !== undefined && input.CountUpdate !== null && { CountUpdate: input.CountUpdate }),
    };
};
const serializeAws_json1_1InputProcessingConfiguration = (input, context) => {
    return {
        ...(input.InputLambdaProcessor !== undefined &&
            input.InputLambdaProcessor !== null && {
            InputLambdaProcessor: serializeAws_json1_1InputLambdaProcessor(input.InputLambdaProcessor, context),
        }),
    };
};
const serializeAws_json1_1InputProcessingConfigurationUpdate = (input, context) => {
    return {
        ...(input.InputLambdaProcessorUpdate !== undefined &&
            input.InputLambdaProcessorUpdate !== null && {
            InputLambdaProcessorUpdate: serializeAws_json1_1InputLambdaProcessorUpdate(input.InputLambdaProcessorUpdate, context),
        }),
    };
};
const serializeAws_json1_1Inputs = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Input(entry, context);
    });
};
const serializeAws_json1_1InputSchemaUpdate = (input, context) => {
    return {
        ...(input.RecordColumnUpdates !== undefined &&
            input.RecordColumnUpdates !== null && {
            RecordColumnUpdates: serializeAws_json1_1RecordColumns(input.RecordColumnUpdates, context),
        }),
        ...(input.RecordEncodingUpdate !== undefined &&
            input.RecordEncodingUpdate !== null && { RecordEncodingUpdate: input.RecordEncodingUpdate }),
        ...(input.RecordFormatUpdate !== undefined &&
            input.RecordFormatUpdate !== null && {
            RecordFormatUpdate: serializeAws_json1_1RecordFormat(input.RecordFormatUpdate, context),
        }),
    };
};
const serializeAws_json1_1InputStartingPositionConfiguration = (input, context) => {
    return {
        ...(input.InputStartingPosition !== undefined &&
            input.InputStartingPosition !== null && { InputStartingPosition: input.InputStartingPosition }),
    };
};
const serializeAws_json1_1InputUpdate = (input, context) => {
    return {
        ...(input.InputId !== undefined && input.InputId !== null && { InputId: input.InputId }),
        ...(input.InputParallelismUpdate !== undefined &&
            input.InputParallelismUpdate !== null && {
            InputParallelismUpdate: serializeAws_json1_1InputParallelismUpdate(input.InputParallelismUpdate, context),
        }),
        ...(input.InputProcessingConfigurationUpdate !== undefined &&
            input.InputProcessingConfigurationUpdate !== null && {
            InputProcessingConfigurationUpdate: serializeAws_json1_1InputProcessingConfigurationUpdate(input.InputProcessingConfigurationUpdate, context),
        }),
        ...(input.InputSchemaUpdate !== undefined &&
            input.InputSchemaUpdate !== null && {
            InputSchemaUpdate: serializeAws_json1_1InputSchemaUpdate(input.InputSchemaUpdate, context),
        }),
        ...(input.KinesisFirehoseInputUpdate !== undefined &&
            input.KinesisFirehoseInputUpdate !== null && {
            KinesisFirehoseInputUpdate: serializeAws_json1_1KinesisFirehoseInputUpdate(input.KinesisFirehoseInputUpdate, context),
        }),
        ...(input.KinesisStreamsInputUpdate !== undefined &&
            input.KinesisStreamsInputUpdate !== null && {
            KinesisStreamsInputUpdate: serializeAws_json1_1KinesisStreamsInputUpdate(input.KinesisStreamsInputUpdate, context),
        }),
        ...(input.NamePrefixUpdate !== undefined &&
            input.NamePrefixUpdate !== null && { NamePrefixUpdate: input.NamePrefixUpdate }),
    };
};
const serializeAws_json1_1InputUpdates = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1InputUpdate(entry, context);
    });
};
const serializeAws_json1_1JSONMappingParameters = (input, context) => {
    return {
        ...(input.RecordRowPath !== undefined && input.RecordRowPath !== null && { RecordRowPath: input.RecordRowPath }),
    };
};
const serializeAws_json1_1KinesisFirehoseInput = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
        ...(input.RoleARN !== undefined && input.RoleARN !== null && { RoleARN: input.RoleARN }),
    };
};
const serializeAws_json1_1KinesisFirehoseInputUpdate = (input, context) => {
    return {
        ...(input.ResourceARNUpdate !== undefined &&
            input.ResourceARNUpdate !== null && { ResourceARNUpdate: input.ResourceARNUpdate }),
        ...(input.RoleARNUpdate !== undefined && input.RoleARNUpdate !== null && { RoleARNUpdate: input.RoleARNUpdate }),
    };
};
const serializeAws_json1_1KinesisFirehoseOutput = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
        ...(input.RoleARN !== undefined && input.RoleARN !== null && { RoleARN: input.RoleARN }),
    };
};
const serializeAws_json1_1KinesisFirehoseOutputUpdate = (input, context) => {
    return {
        ...(input.ResourceARNUpdate !== undefined &&
            input.ResourceARNUpdate !== null && { ResourceARNUpdate: input.ResourceARNUpdate }),
        ...(input.RoleARNUpdate !== undefined && input.RoleARNUpdate !== null && { RoleARNUpdate: input.RoleARNUpdate }),
    };
};
const serializeAws_json1_1KinesisStreamsInput = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
        ...(input.RoleARN !== undefined && input.RoleARN !== null && { RoleARN: input.RoleARN }),
    };
};
const serializeAws_json1_1KinesisStreamsInputUpdate = (input, context) => {
    return {
        ...(input.ResourceARNUpdate !== undefined &&
            input.ResourceARNUpdate !== null && { ResourceARNUpdate: input.ResourceARNUpdate }),
        ...(input.RoleARNUpdate !== undefined && input.RoleARNUpdate !== null && { RoleARNUpdate: input.RoleARNUpdate }),
    };
};
const serializeAws_json1_1KinesisStreamsOutput = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
        ...(input.RoleARN !== undefined && input.RoleARN !== null && { RoleARN: input.RoleARN }),
    };
};
const serializeAws_json1_1KinesisStreamsOutputUpdate = (input, context) => {
    return {
        ...(input.ResourceARNUpdate !== undefined &&
            input.ResourceARNUpdate !== null && { ResourceARNUpdate: input.ResourceARNUpdate }),
        ...(input.RoleARNUpdate !== undefined && input.RoleARNUpdate !== null && { RoleARNUpdate: input.RoleARNUpdate }),
    };
};
const serializeAws_json1_1LambdaOutput = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
        ...(input.RoleARN !== undefined && input.RoleARN !== null && { RoleARN: input.RoleARN }),
    };
};
const serializeAws_json1_1LambdaOutputUpdate = (input, context) => {
    return {
        ...(input.ResourceARNUpdate !== undefined &&
            input.ResourceARNUpdate !== null && { ResourceARNUpdate: input.ResourceARNUpdate }),
        ...(input.RoleARNUpdate !== undefined && input.RoleARNUpdate !== null && { RoleARNUpdate: input.RoleARNUpdate }),
    };
};
const serializeAws_json1_1ListApplicationsRequest = (input, context) => {
    return {
        ...(input.ExclusiveStartApplicationName !== undefined &&
            input.ExclusiveStartApplicationName !== null && {
            ExclusiveStartApplicationName: input.ExclusiveStartApplicationName,
        }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    };
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    };
};
const serializeAws_json1_1MappingParameters = (input, context) => {
    return {
        ...(input.CSVMappingParameters !== undefined &&
            input.CSVMappingParameters !== null && {
            CSVMappingParameters: serializeAws_json1_1CSVMappingParameters(input.CSVMappingParameters, context),
        }),
        ...(input.JSONMappingParameters !== undefined &&
            input.JSONMappingParameters !== null && {
            JSONMappingParameters: serializeAws_json1_1JSONMappingParameters(input.JSONMappingParameters, context),
        }),
    };
};
const serializeAws_json1_1Output = (input, context) => {
    return {
        ...(input.DestinationSchema !== undefined &&
            input.DestinationSchema !== null && {
            DestinationSchema: serializeAws_json1_1DestinationSchema(input.DestinationSchema, context),
        }),
        ...(input.KinesisFirehoseOutput !== undefined &&
            input.KinesisFirehoseOutput !== null && {
            KinesisFirehoseOutput: serializeAws_json1_1KinesisFirehoseOutput(input.KinesisFirehoseOutput, context),
        }),
        ...(input.KinesisStreamsOutput !== undefined &&
            input.KinesisStreamsOutput !== null && {
            KinesisStreamsOutput: serializeAws_json1_1KinesisStreamsOutput(input.KinesisStreamsOutput, context),
        }),
        ...(input.LambdaOutput !== undefined &&
            input.LambdaOutput !== null && { LambdaOutput: serializeAws_json1_1LambdaOutput(input.LambdaOutput, context) }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1Outputs = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Output(entry, context);
    });
};
const serializeAws_json1_1OutputUpdate = (input, context) => {
    return {
        ...(input.DestinationSchemaUpdate !== undefined &&
            input.DestinationSchemaUpdate !== null && {
            DestinationSchemaUpdate: serializeAws_json1_1DestinationSchema(input.DestinationSchemaUpdate, context),
        }),
        ...(input.KinesisFirehoseOutputUpdate !== undefined &&
            input.KinesisFirehoseOutputUpdate !== null && {
            KinesisFirehoseOutputUpdate: serializeAws_json1_1KinesisFirehoseOutputUpdate(input.KinesisFirehoseOutputUpdate, context),
        }),
        ...(input.KinesisStreamsOutputUpdate !== undefined &&
            input.KinesisStreamsOutputUpdate !== null && {
            KinesisStreamsOutputUpdate: serializeAws_json1_1KinesisStreamsOutputUpdate(input.KinesisStreamsOutputUpdate, context),
        }),
        ...(input.LambdaOutputUpdate !== undefined &&
            input.LambdaOutputUpdate !== null && {
            LambdaOutputUpdate: serializeAws_json1_1LambdaOutputUpdate(input.LambdaOutputUpdate, context),
        }),
        ...(input.NameUpdate !== undefined && input.NameUpdate !== null && { NameUpdate: input.NameUpdate }),
        ...(input.OutputId !== undefined && input.OutputId !== null && { OutputId: input.OutputId }),
    };
};
const serializeAws_json1_1OutputUpdates = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1OutputUpdate(entry, context);
    });
};
const serializeAws_json1_1RecordColumn = (input, context) => {
    return {
        ...(input.Mapping !== undefined && input.Mapping !== null && { Mapping: input.Mapping }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.SqlType !== undefined && input.SqlType !== null && { SqlType: input.SqlType }),
    };
};
const serializeAws_json1_1RecordColumns = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1RecordColumn(entry, context);
    });
};
const serializeAws_json1_1RecordFormat = (input, context) => {
    return {
        ...(input.MappingParameters !== undefined &&
            input.MappingParameters !== null && {
            MappingParameters: serializeAws_json1_1MappingParameters(input.MappingParameters, context),
        }),
        ...(input.RecordFormatType !== undefined &&
            input.RecordFormatType !== null && { RecordFormatType: input.RecordFormatType }),
    };
};
const serializeAws_json1_1ReferenceDataSource = (input, context) => {
    return {
        ...(input.ReferenceSchema !== undefined &&
            input.ReferenceSchema !== null && {
            ReferenceSchema: serializeAws_json1_1SourceSchema(input.ReferenceSchema, context),
        }),
        ...(input.S3ReferenceDataSource !== undefined &&
            input.S3ReferenceDataSource !== null && {
            S3ReferenceDataSource: serializeAws_json1_1S3ReferenceDataSource(input.S3ReferenceDataSource, context),
        }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_1ReferenceDataSourceUpdate = (input, context) => {
    return {
        ...(input.ReferenceId !== undefined && input.ReferenceId !== null && { ReferenceId: input.ReferenceId }),
        ...(input.ReferenceSchemaUpdate !== undefined &&
            input.ReferenceSchemaUpdate !== null && {
            ReferenceSchemaUpdate: serializeAws_json1_1SourceSchema(input.ReferenceSchemaUpdate, context),
        }),
        ...(input.S3ReferenceDataSourceUpdate !== undefined &&
            input.S3ReferenceDataSourceUpdate !== null && {
            S3ReferenceDataSourceUpdate: serializeAws_json1_1S3ReferenceDataSourceUpdate(input.S3ReferenceDataSourceUpdate, context),
        }),
        ...(input.TableNameUpdate !== undefined &&
            input.TableNameUpdate !== null && { TableNameUpdate: input.TableNameUpdate }),
    };
};
const serializeAws_json1_1ReferenceDataSourceUpdates = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ReferenceDataSourceUpdate(entry, context);
    });
};
const serializeAws_json1_1S3Configuration = (input, context) => {
    return {
        ...(input.BucketARN !== undefined && input.BucketARN !== null && { BucketARN: input.BucketARN }),
        ...(input.FileKey !== undefined && input.FileKey !== null && { FileKey: input.FileKey }),
        ...(input.RoleARN !== undefined && input.RoleARN !== null && { RoleARN: input.RoleARN }),
    };
};
const serializeAws_json1_1S3ReferenceDataSource = (input, context) => {
    return {
        ...(input.BucketARN !== undefined && input.BucketARN !== null && { BucketARN: input.BucketARN }),
        ...(input.FileKey !== undefined && input.FileKey !== null && { FileKey: input.FileKey }),
        ...(input.ReferenceRoleARN !== undefined &&
            input.ReferenceRoleARN !== null && { ReferenceRoleARN: input.ReferenceRoleARN }),
    };
};
const serializeAws_json1_1S3ReferenceDataSourceUpdate = (input, context) => {
    return {
        ...(input.BucketARNUpdate !== undefined &&
            input.BucketARNUpdate !== null && { BucketARNUpdate: input.BucketARNUpdate }),
        ...(input.FileKeyUpdate !== undefined && input.FileKeyUpdate !== null && { FileKeyUpdate: input.FileKeyUpdate }),
        ...(input.ReferenceRoleARNUpdate !== undefined &&
            input.ReferenceRoleARNUpdate !== null && { ReferenceRoleARNUpdate: input.ReferenceRoleARNUpdate }),
    };
};
const serializeAws_json1_1SourceSchema = (input, context) => {
    return {
        ...(input.RecordColumns !== undefined &&
            input.RecordColumns !== null && {
            RecordColumns: serializeAws_json1_1RecordColumns(input.RecordColumns, context),
        }),
        ...(input.RecordEncoding !== undefined &&
            input.RecordEncoding !== null && { RecordEncoding: input.RecordEncoding }),
        ...(input.RecordFormat !== undefined &&
            input.RecordFormat !== null && { RecordFormat: serializeAws_json1_1RecordFormat(input.RecordFormat, context) }),
    };
};
const serializeAws_json1_1StartApplicationRequest = (input, context) => {
    return {
        ...(input.ApplicationName !== undefined &&
            input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
        ...(input.InputConfigurations !== undefined &&
            input.InputConfigurations !== null && {
            InputConfigurations: serializeAws_json1_1InputConfigurations(input.InputConfigurations, context),
        }),
    };
};
const serializeAws_json1_1StopApplicationRequest = (input, context) => {
    return {
        ...(input.ApplicationName !== undefined &&
            input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
    };
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
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
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
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
        ...(input.TagKeys !== undefined &&
            input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeys(input.TagKeys, context) }),
    };
};
const serializeAws_json1_1UpdateApplicationRequest = (input, context) => {
    return {
        ...(input.ApplicationName !== undefined &&
            input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
        ...(input.ApplicationUpdate !== undefined &&
            input.ApplicationUpdate !== null && {
            ApplicationUpdate: serializeAws_json1_1ApplicationUpdate(input.ApplicationUpdate, context),
        }),
        ...(input.CurrentApplicationVersionId !== undefined &&
            input.CurrentApplicationVersionId !== null && { CurrentApplicationVersionId: input.CurrentApplicationVersionId }),
    };
};
const deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1AddApplicationInputProcessingConfigurationResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1AddApplicationInputResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1AddApplicationOutputResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1AddApplicationReferenceDataSourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1ApplicationDetail = (output, context) => {
    return {
        ApplicationARN: output.ApplicationARN !== undefined && output.ApplicationARN !== null ? output.ApplicationARN : undefined,
        ApplicationCode: output.ApplicationCode !== undefined && output.ApplicationCode !== null ? output.ApplicationCode : undefined,
        ApplicationDescription: output.ApplicationDescription !== undefined && output.ApplicationDescription !== null
            ? output.ApplicationDescription
            : undefined,
        ApplicationName: output.ApplicationName !== undefined && output.ApplicationName !== null ? output.ApplicationName : undefined,
        ApplicationStatus: output.ApplicationStatus !== undefined && output.ApplicationStatus !== null
            ? output.ApplicationStatus
            : undefined,
        ApplicationVersionId: output.ApplicationVersionId !== undefined && output.ApplicationVersionId !== null
            ? output.ApplicationVersionId
            : undefined,
        CloudWatchLoggingOptionDescriptions: output.CloudWatchLoggingOptionDescriptions !== undefined && output.CloudWatchLoggingOptionDescriptions !== null
            ? deserializeAws_json1_1CloudWatchLoggingOptionDescriptions(output.CloudWatchLoggingOptionDescriptions, context)
            : undefined,
        CreateTimestamp: output.CreateTimestamp !== undefined && output.CreateTimestamp !== null
            ? new Date(Math.round(output.CreateTimestamp * 1000))
            : undefined,
        InputDescriptions: output.InputDescriptions !== undefined && output.InputDescriptions !== null
            ? deserializeAws_json1_1InputDescriptions(output.InputDescriptions, context)
            : undefined,
        LastUpdateTimestamp: output.LastUpdateTimestamp !== undefined && output.LastUpdateTimestamp !== null
            ? new Date(Math.round(output.LastUpdateTimestamp * 1000))
            : undefined,
        OutputDescriptions: output.OutputDescriptions !== undefined && output.OutputDescriptions !== null
            ? deserializeAws_json1_1OutputDescriptions(output.OutputDescriptions, context)
            : undefined,
        ReferenceDataSourceDescriptions: output.ReferenceDataSourceDescriptions !== undefined && output.ReferenceDataSourceDescriptions !== null
            ? deserializeAws_json1_1ReferenceDataSourceDescriptions(output.ReferenceDataSourceDescriptions, context)
            : undefined,
    };
};
const deserializeAws_json1_1ApplicationSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ApplicationSummary(entry, context);
    });
};
const deserializeAws_json1_1ApplicationSummary = (output, context) => {
    return {
        ApplicationARN: output.ApplicationARN !== undefined && output.ApplicationARN !== null ? output.ApplicationARN : undefined,
        ApplicationName: output.ApplicationName !== undefined && output.ApplicationName !== null ? output.ApplicationName : undefined,
        ApplicationStatus: output.ApplicationStatus !== undefined && output.ApplicationStatus !== null
            ? output.ApplicationStatus
            : undefined,
    };
};
const deserializeAws_json1_1CloudWatchLoggingOptionDescription = (output, context) => {
    return {
        CloudWatchLoggingOptionId: output.CloudWatchLoggingOptionId !== undefined && output.CloudWatchLoggingOptionId !== null
            ? output.CloudWatchLoggingOptionId
            : undefined,
        LogStreamARN: output.LogStreamARN !== undefined && output.LogStreamARN !== null ? output.LogStreamARN : undefined,
        RoleARN: output.RoleARN !== undefined && output.RoleARN !== null ? output.RoleARN : undefined,
    };
};
const deserializeAws_json1_1CloudWatchLoggingOptionDescriptions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CloudWatchLoggingOptionDescription(entry, context);
    });
};
const deserializeAws_json1_1CodeValidationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ConcurrentModificationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1CreateApplicationResponse = (output, context) => {
    return {
        ApplicationSummary: output.ApplicationSummary !== undefined && output.ApplicationSummary !== null
            ? deserializeAws_json1_1ApplicationSummary(output.ApplicationSummary, context)
            : undefined,
    };
};
const deserializeAws_json1_1CSVMappingParameters = (output, context) => {
    return {
        RecordColumnDelimiter: output.RecordColumnDelimiter !== undefined && output.RecordColumnDelimiter !== null
            ? output.RecordColumnDelimiter
            : undefined,
        RecordRowDelimiter: output.RecordRowDelimiter !== undefined && output.RecordRowDelimiter !== null
            ? output.RecordRowDelimiter
            : undefined,
    };
};
const deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteApplicationOutputResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteApplicationReferenceDataSourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteApplicationResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DescribeApplicationResponse = (output, context) => {
    return {
        ApplicationDetail: output.ApplicationDetail !== undefined && output.ApplicationDetail !== null
            ? deserializeAws_json1_1ApplicationDetail(output.ApplicationDetail, context)
            : undefined,
    };
};
const deserializeAws_json1_1DestinationSchema = (output, context) => {
    return {
        RecordFormatType: output.RecordFormatType !== undefined && output.RecordFormatType !== null ? output.RecordFormatType : undefined,
    };
};
const deserializeAws_json1_1DiscoverInputSchemaResponse = (output, context) => {
    return {
        InputSchema: output.InputSchema !== undefined && output.InputSchema !== null
            ? deserializeAws_json1_1SourceSchema(output.InputSchema, context)
            : undefined,
        ParsedInputRecords: output.ParsedInputRecords !== undefined && output.ParsedInputRecords !== null
            ? deserializeAws_json1_1ParsedInputRecords(output.ParsedInputRecords, context)
            : undefined,
        ProcessedInputRecords: output.ProcessedInputRecords !== undefined && output.ProcessedInputRecords !== null
            ? deserializeAws_json1_1ProcessedInputRecords(output.ProcessedInputRecords, context)
            : undefined,
        RawInputRecords: output.RawInputRecords !== undefined && output.RawInputRecords !== null
            ? deserializeAws_json1_1RawInputRecords(output.RawInputRecords, context)
            : undefined,
    };
};
const deserializeAws_json1_1InAppStreamNames = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1InputDescription = (output, context) => {
    return {
        InAppStreamNames: output.InAppStreamNames !== undefined && output.InAppStreamNames !== null
            ? deserializeAws_json1_1InAppStreamNames(output.InAppStreamNames, context)
            : undefined,
        InputId: output.InputId !== undefined && output.InputId !== null ? output.InputId : undefined,
        InputParallelism: output.InputParallelism !== undefined && output.InputParallelism !== null
            ? deserializeAws_json1_1InputParallelism(output.InputParallelism, context)
            : undefined,
        InputProcessingConfigurationDescription: output.InputProcessingConfigurationDescription !== undefined &&
            output.InputProcessingConfigurationDescription !== null
            ? deserializeAws_json1_1InputProcessingConfigurationDescription(output.InputProcessingConfigurationDescription, context)
            : undefined,
        InputSchema: output.InputSchema !== undefined && output.InputSchema !== null
            ? deserializeAws_json1_1SourceSchema(output.InputSchema, context)
            : undefined,
        InputStartingPositionConfiguration: output.InputStartingPositionConfiguration !== undefined && output.InputStartingPositionConfiguration !== null
            ? deserializeAws_json1_1InputStartingPositionConfiguration(output.InputStartingPositionConfiguration, context)
            : undefined,
        KinesisFirehoseInputDescription: output.KinesisFirehoseInputDescription !== undefined && output.KinesisFirehoseInputDescription !== null
            ? deserializeAws_json1_1KinesisFirehoseInputDescription(output.KinesisFirehoseInputDescription, context)
            : undefined,
        KinesisStreamsInputDescription: output.KinesisStreamsInputDescription !== undefined && output.KinesisStreamsInputDescription !== null
            ? deserializeAws_json1_1KinesisStreamsInputDescription(output.KinesisStreamsInputDescription, context)
            : undefined,
        NamePrefix: output.NamePrefix !== undefined && output.NamePrefix !== null ? output.NamePrefix : undefined,
    };
};
const deserializeAws_json1_1InputDescriptions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1InputDescription(entry, context);
    });
};
const deserializeAws_json1_1InputLambdaProcessorDescription = (output, context) => {
    return {
        ResourceARN: output.ResourceARN !== undefined && output.ResourceARN !== null ? output.ResourceARN : undefined,
        RoleARN: output.RoleARN !== undefined && output.RoleARN !== null ? output.RoleARN : undefined,
    };
};
const deserializeAws_json1_1InputParallelism = (output, context) => {
    return {
        Count: output.Count !== undefined && output.Count !== null ? output.Count : undefined,
    };
};
const deserializeAws_json1_1InputProcessingConfigurationDescription = (output, context) => {
    return {
        InputLambdaProcessorDescription: output.InputLambdaProcessorDescription !== undefined && output.InputLambdaProcessorDescription !== null
            ? deserializeAws_json1_1InputLambdaProcessorDescription(output.InputLambdaProcessorDescription, context)
            : undefined,
    };
};
const deserializeAws_json1_1InputStartingPositionConfiguration = (output, context) => {
    return {
        InputStartingPosition: output.InputStartingPosition !== undefined && output.InputStartingPosition !== null
            ? output.InputStartingPosition
            : undefined,
    };
};
const deserializeAws_json1_1InvalidApplicationConfigurationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidArgumentException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1JSONMappingParameters = (output, context) => {
    return {
        RecordRowPath: output.RecordRowPath !== undefined && output.RecordRowPath !== null ? output.RecordRowPath : undefined,
    };
};
const deserializeAws_json1_1KinesisFirehoseInputDescription = (output, context) => {
    return {
        ResourceARN: output.ResourceARN !== undefined && output.ResourceARN !== null ? output.ResourceARN : undefined,
        RoleARN: output.RoleARN !== undefined && output.RoleARN !== null ? output.RoleARN : undefined,
    };
};
const deserializeAws_json1_1KinesisFirehoseOutputDescription = (output, context) => {
    return {
        ResourceARN: output.ResourceARN !== undefined && output.ResourceARN !== null ? output.ResourceARN : undefined,
        RoleARN: output.RoleARN !== undefined && output.RoleARN !== null ? output.RoleARN : undefined,
    };
};
const deserializeAws_json1_1KinesisStreamsInputDescription = (output, context) => {
    return {
        ResourceARN: output.ResourceARN !== undefined && output.ResourceARN !== null ? output.ResourceARN : undefined,
        RoleARN: output.RoleARN !== undefined && output.RoleARN !== null ? output.RoleARN : undefined,
    };
};
const deserializeAws_json1_1KinesisStreamsOutputDescription = (output, context) => {
    return {
        ResourceARN: output.ResourceARN !== undefined && output.ResourceARN !== null ? output.ResourceARN : undefined,
        RoleARN: output.RoleARN !== undefined && output.RoleARN !== null ? output.RoleARN : undefined,
    };
};
const deserializeAws_json1_1LambdaOutputDescription = (output, context) => {
    return {
        ResourceARN: output.ResourceARN !== undefined && output.ResourceARN !== null ? output.ResourceARN : undefined,
        RoleARN: output.RoleARN !== undefined && output.RoleARN !== null ? output.RoleARN : undefined,
    };
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ListApplicationsResponse = (output, context) => {
    return {
        ApplicationSummaries: output.ApplicationSummaries !== undefined && output.ApplicationSummaries !== null
            ? deserializeAws_json1_1ApplicationSummaries(output.ApplicationSummaries, context)
            : undefined,
        HasMoreApplications: output.HasMoreApplications !== undefined && output.HasMoreApplications !== null
            ? output.HasMoreApplications
            : undefined,
    };
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    return {
        Tags: output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    };
};
const deserializeAws_json1_1MappingParameters = (output, context) => {
    return {
        CSVMappingParameters: output.CSVMappingParameters !== undefined && output.CSVMappingParameters !== null
            ? deserializeAws_json1_1CSVMappingParameters(output.CSVMappingParameters, context)
            : undefined,
        JSONMappingParameters: output.JSONMappingParameters !== undefined && output.JSONMappingParameters !== null
            ? deserializeAws_json1_1JSONMappingParameters(output.JSONMappingParameters, context)
            : undefined,
    };
};
const deserializeAws_json1_1OutputDescription = (output, context) => {
    return {
        DestinationSchema: output.DestinationSchema !== undefined && output.DestinationSchema !== null
            ? deserializeAws_json1_1DestinationSchema(output.DestinationSchema, context)
            : undefined,
        KinesisFirehoseOutputDescription: output.KinesisFirehoseOutputDescription !== undefined && output.KinesisFirehoseOutputDescription !== null
            ? deserializeAws_json1_1KinesisFirehoseOutputDescription(output.KinesisFirehoseOutputDescription, context)
            : undefined,
        KinesisStreamsOutputDescription: output.KinesisStreamsOutputDescription !== undefined && output.KinesisStreamsOutputDescription !== null
            ? deserializeAws_json1_1KinesisStreamsOutputDescription(output.KinesisStreamsOutputDescription, context)
            : undefined,
        LambdaOutputDescription: output.LambdaOutputDescription !== undefined && output.LambdaOutputDescription !== null
            ? deserializeAws_json1_1LambdaOutputDescription(output.LambdaOutputDescription, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        OutputId: output.OutputId !== undefined && output.OutputId !== null ? output.OutputId : undefined,
    };
};
const deserializeAws_json1_1OutputDescriptions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1OutputDescription(entry, context);
    });
};
const deserializeAws_json1_1ParsedInputRecord = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ParsedInputRecords = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ParsedInputRecord(entry, context);
    });
};
const deserializeAws_json1_1ProcessedInputRecords = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1RawInputRecords = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1RecordColumn = (output, context) => {
    return {
        Mapping: output.Mapping !== undefined && output.Mapping !== null ? output.Mapping : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        SqlType: output.SqlType !== undefined && output.SqlType !== null ? output.SqlType : undefined,
    };
};
const deserializeAws_json1_1RecordColumns = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RecordColumn(entry, context);
    });
};
const deserializeAws_json1_1RecordFormat = (output, context) => {
    return {
        MappingParameters: output.MappingParameters !== undefined && output.MappingParameters !== null
            ? deserializeAws_json1_1MappingParameters(output.MappingParameters, context)
            : undefined,
        RecordFormatType: output.RecordFormatType !== undefined && output.RecordFormatType !== null ? output.RecordFormatType : undefined,
    };
};
const deserializeAws_json1_1ReferenceDataSourceDescription = (output, context) => {
    return {
        ReferenceId: output.ReferenceId !== undefined && output.ReferenceId !== null ? output.ReferenceId : undefined,
        ReferenceSchema: output.ReferenceSchema !== undefined && output.ReferenceSchema !== null
            ? deserializeAws_json1_1SourceSchema(output.ReferenceSchema, context)
            : undefined,
        S3ReferenceDataSourceDescription: output.S3ReferenceDataSourceDescription !== undefined && output.S3ReferenceDataSourceDescription !== null
            ? deserializeAws_json1_1S3ReferenceDataSourceDescription(output.S3ReferenceDataSourceDescription, context)
            : undefined,
        TableName: output.TableName !== undefined && output.TableName !== null ? output.TableName : undefined,
    };
};
const deserializeAws_json1_1ReferenceDataSourceDescriptions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ReferenceDataSourceDescription(entry, context);
    });
};
const deserializeAws_json1_1ResourceInUseException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ResourceProvisionedThroughputExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1S3ReferenceDataSourceDescription = (output, context) => {
    return {
        BucketARN: output.BucketARN !== undefined && output.BucketARN !== null ? output.BucketARN : undefined,
        FileKey: output.FileKey !== undefined && output.FileKey !== null ? output.FileKey : undefined,
        ReferenceRoleARN: output.ReferenceRoleARN !== undefined && output.ReferenceRoleARN !== null ? output.ReferenceRoleARN : undefined,
    };
};
const deserializeAws_json1_1ServiceUnavailableException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1SourceSchema = (output, context) => {
    return {
        RecordColumns: output.RecordColumns !== undefined && output.RecordColumns !== null
            ? deserializeAws_json1_1RecordColumns(output.RecordColumns, context)
            : undefined,
        RecordEncoding: output.RecordEncoding !== undefined && output.RecordEncoding !== null ? output.RecordEncoding : undefined,
        RecordFormat: output.RecordFormat !== undefined && output.RecordFormat !== null
            ? deserializeAws_json1_1RecordFormat(output.RecordFormat, context)
            : undefined,
    };
};
const deserializeAws_json1_1StartApplicationResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1StopApplicationResponse = (output, context) => {
    return {};
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
const deserializeAws_json1_1TooManyTagsException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1UnableToDetectSchemaException = (output, context) => {
    return {
        ProcessedInputRecords: output.ProcessedInputRecords !== undefined && output.ProcessedInputRecords !== null
            ? deserializeAws_json1_1ProcessedInputRecords(output.ProcessedInputRecords, context)
            : undefined,
        RawInputRecords: output.RawInputRecords !== undefined && output.RawInputRecords !== null
            ? deserializeAws_json1_1RawInputRecords(output.RawInputRecords, context)
            : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1UnsupportedOperationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateApplicationResponse = (output, context) => {
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