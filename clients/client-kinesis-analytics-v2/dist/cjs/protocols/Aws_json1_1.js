"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1DescribeApplicationVersionCommand = exports.deserializeAws_json1_1DescribeApplicationSnapshotCommand = exports.deserializeAws_json1_1DescribeApplicationCommand = exports.deserializeAws_json1_1DeleteApplicationVpcConfigurationCommand = exports.deserializeAws_json1_1DeleteApplicationSnapshotCommand = exports.deserializeAws_json1_1DeleteApplicationReferenceDataSourceCommand = exports.deserializeAws_json1_1DeleteApplicationOutputCommand = exports.deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommand = exports.deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommand = exports.deserializeAws_json1_1DeleteApplicationCommand = exports.deserializeAws_json1_1CreateApplicationSnapshotCommand = exports.deserializeAws_json1_1CreateApplicationPresignedUrlCommand = exports.deserializeAws_json1_1CreateApplicationCommand = exports.deserializeAws_json1_1AddApplicationVpcConfigurationCommand = exports.deserializeAws_json1_1AddApplicationReferenceDataSourceCommand = exports.deserializeAws_json1_1AddApplicationOutputCommand = exports.deserializeAws_json1_1AddApplicationInputProcessingConfigurationCommand = exports.deserializeAws_json1_1AddApplicationInputCommand = exports.deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommand = exports.serializeAws_json1_1UpdateApplicationMaintenanceConfigurationCommand = exports.serializeAws_json1_1UpdateApplicationCommand = exports.serializeAws_json1_1UntagResourceCommand = exports.serializeAws_json1_1TagResourceCommand = exports.serializeAws_json1_1StopApplicationCommand = exports.serializeAws_json1_1StartApplicationCommand = exports.serializeAws_json1_1RollbackApplicationCommand = exports.serializeAws_json1_1ListTagsForResourceCommand = exports.serializeAws_json1_1ListApplicationVersionsCommand = exports.serializeAws_json1_1ListApplicationSnapshotsCommand = exports.serializeAws_json1_1ListApplicationsCommand = exports.serializeAws_json1_1DiscoverInputSchemaCommand = exports.serializeAws_json1_1DescribeApplicationVersionCommand = exports.serializeAws_json1_1DescribeApplicationSnapshotCommand = exports.serializeAws_json1_1DescribeApplicationCommand = exports.serializeAws_json1_1DeleteApplicationVpcConfigurationCommand = exports.serializeAws_json1_1DeleteApplicationSnapshotCommand = exports.serializeAws_json1_1DeleteApplicationReferenceDataSourceCommand = exports.serializeAws_json1_1DeleteApplicationOutputCommand = exports.serializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommand = exports.serializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommand = exports.serializeAws_json1_1DeleteApplicationCommand = exports.serializeAws_json1_1CreateApplicationSnapshotCommand = exports.serializeAws_json1_1CreateApplicationPresignedUrlCommand = exports.serializeAws_json1_1CreateApplicationCommand = exports.serializeAws_json1_1AddApplicationVpcConfigurationCommand = exports.serializeAws_json1_1AddApplicationReferenceDataSourceCommand = exports.serializeAws_json1_1AddApplicationOutputCommand = exports.serializeAws_json1_1AddApplicationInputProcessingConfigurationCommand = exports.serializeAws_json1_1AddApplicationInputCommand = exports.serializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommand = void 0;
exports.deserializeAws_json1_1UpdateApplicationMaintenanceConfigurationCommand = exports.deserializeAws_json1_1UpdateApplicationCommand = exports.deserializeAws_json1_1UntagResourceCommand = exports.deserializeAws_json1_1TagResourceCommand = exports.deserializeAws_json1_1StopApplicationCommand = exports.deserializeAws_json1_1StartApplicationCommand = exports.deserializeAws_json1_1RollbackApplicationCommand = exports.deserializeAws_json1_1ListTagsForResourceCommand = exports.deserializeAws_json1_1ListApplicationVersionsCommand = exports.deserializeAws_json1_1ListApplicationSnapshotsCommand = exports.deserializeAws_json1_1ListApplicationsCommand = exports.deserializeAws_json1_1DiscoverInputSchemaCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AddApplicationCloudWatchLoggingOptionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommand = serializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommand;
const serializeAws_json1_1AddApplicationInputCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20180523.AddApplicationInput",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AddApplicationInputRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AddApplicationInputCommand = serializeAws_json1_1AddApplicationInputCommand;
const serializeAws_json1_1AddApplicationInputProcessingConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20180523.AddApplicationInputProcessingConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AddApplicationInputProcessingConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AddApplicationInputProcessingConfigurationCommand = serializeAws_json1_1AddApplicationInputProcessingConfigurationCommand;
const serializeAws_json1_1AddApplicationOutputCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20180523.AddApplicationOutput",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AddApplicationOutputRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AddApplicationOutputCommand = serializeAws_json1_1AddApplicationOutputCommand;
const serializeAws_json1_1AddApplicationReferenceDataSourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20180523.AddApplicationReferenceDataSource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AddApplicationReferenceDataSourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AddApplicationReferenceDataSourceCommand = serializeAws_json1_1AddApplicationReferenceDataSourceCommand;
const serializeAws_json1_1AddApplicationVpcConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20180523.AddApplicationVpcConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AddApplicationVpcConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AddApplicationVpcConfigurationCommand = serializeAws_json1_1AddApplicationVpcConfigurationCommand;
const serializeAws_json1_1CreateApplicationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20180523.CreateApplication",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateApplicationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateApplicationCommand = serializeAws_json1_1CreateApplicationCommand;
const serializeAws_json1_1CreateApplicationPresignedUrlCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20180523.CreateApplicationPresignedUrl",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateApplicationPresignedUrlRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateApplicationPresignedUrlCommand = serializeAws_json1_1CreateApplicationPresignedUrlCommand;
const serializeAws_json1_1CreateApplicationSnapshotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20180523.CreateApplicationSnapshot",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateApplicationSnapshotRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateApplicationSnapshotCommand = serializeAws_json1_1CreateApplicationSnapshotCommand;
const serializeAws_json1_1DeleteApplicationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20180523.DeleteApplication",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteApplicationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteApplicationCommand = serializeAws_json1_1DeleteApplicationCommand;
const serializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20180523.DeleteApplicationCloudWatchLoggingOption",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommand = serializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommand;
const serializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20180523.DeleteApplicationInputProcessingConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteApplicationInputProcessingConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommand = serializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommand;
const serializeAws_json1_1DeleteApplicationOutputCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20180523.DeleteApplicationOutput",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteApplicationOutputRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteApplicationOutputCommand = serializeAws_json1_1DeleteApplicationOutputCommand;
const serializeAws_json1_1DeleteApplicationReferenceDataSourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20180523.DeleteApplicationReferenceDataSource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteApplicationReferenceDataSourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteApplicationReferenceDataSourceCommand = serializeAws_json1_1DeleteApplicationReferenceDataSourceCommand;
const serializeAws_json1_1DeleteApplicationSnapshotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20180523.DeleteApplicationSnapshot",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteApplicationSnapshotRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteApplicationSnapshotCommand = serializeAws_json1_1DeleteApplicationSnapshotCommand;
const serializeAws_json1_1DeleteApplicationVpcConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20180523.DeleteApplicationVpcConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteApplicationVpcConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteApplicationVpcConfigurationCommand = serializeAws_json1_1DeleteApplicationVpcConfigurationCommand;
const serializeAws_json1_1DescribeApplicationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20180523.DescribeApplication",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeApplicationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeApplicationCommand = serializeAws_json1_1DescribeApplicationCommand;
const serializeAws_json1_1DescribeApplicationSnapshotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20180523.DescribeApplicationSnapshot",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeApplicationSnapshotRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeApplicationSnapshotCommand = serializeAws_json1_1DescribeApplicationSnapshotCommand;
const serializeAws_json1_1DescribeApplicationVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20180523.DescribeApplicationVersion",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeApplicationVersionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeApplicationVersionCommand = serializeAws_json1_1DescribeApplicationVersionCommand;
const serializeAws_json1_1DiscoverInputSchemaCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20180523.DiscoverInputSchema",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DiscoverInputSchemaRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DiscoverInputSchemaCommand = serializeAws_json1_1DiscoverInputSchemaCommand;
const serializeAws_json1_1ListApplicationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20180523.ListApplications",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListApplicationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListApplicationsCommand = serializeAws_json1_1ListApplicationsCommand;
const serializeAws_json1_1ListApplicationSnapshotsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20180523.ListApplicationSnapshots",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListApplicationSnapshotsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListApplicationSnapshotsCommand = serializeAws_json1_1ListApplicationSnapshotsCommand;
const serializeAws_json1_1ListApplicationVersionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20180523.ListApplicationVersions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListApplicationVersionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListApplicationVersionsCommand = serializeAws_json1_1ListApplicationVersionsCommand;
const serializeAws_json1_1ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20180523.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
const serializeAws_json1_1RollbackApplicationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20180523.RollbackApplication",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RollbackApplicationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RollbackApplicationCommand = serializeAws_json1_1RollbackApplicationCommand;
const serializeAws_json1_1StartApplicationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20180523.StartApplication",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartApplicationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartApplicationCommand = serializeAws_json1_1StartApplicationCommand;
const serializeAws_json1_1StopApplicationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20180523.StopApplication",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StopApplicationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopApplicationCommand = serializeAws_json1_1StopApplicationCommand;
const serializeAws_json1_1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20180523.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20180523.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
const serializeAws_json1_1UpdateApplicationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20180523.UpdateApplication",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateApplicationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateApplicationCommand = serializeAws_json1_1UpdateApplicationCommand;
const serializeAws_json1_1UpdateApplicationMaintenanceConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "KinesisAnalytics_20180523.UpdateApplicationMaintenanceConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateApplicationMaintenanceConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateApplicationMaintenanceConfigurationCommand = serializeAws_json1_1UpdateApplicationMaintenanceConfigurationCommand;
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
        case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidApplicationConfigurationException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidApplicationConfigurationException":
            response = {
                ...(await deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
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
        case "com.amazonaws.kinesisanalyticsv2#CodeValidationException":
            response = {
                ...(await deserializeAws_json1_1CodeValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
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
        case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
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
        case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
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
        case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
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
const deserializeAws_json1_1AddApplicationVpcConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AddApplicationVpcConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddApplicationVpcConfigurationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AddApplicationVpcConfigurationCommand = deserializeAws_json1_1AddApplicationVpcConfigurationCommand;
const deserializeAws_json1_1AddApplicationVpcConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidApplicationConfigurationException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidApplicationConfigurationException":
            response = {
                ...(await deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
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
        case "com.amazonaws.kinesisanalyticsv2#CodeValidationException":
            response = {
                ...(await deserializeAws_json1_1CodeValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.kinesisanalyticsv2#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.kinesisanalyticsv2#TooManyTagsException":
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
const deserializeAws_json1_1CreateApplicationPresignedUrlCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateApplicationPresignedUrlCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateApplicationPresignedUrlResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateApplicationPresignedUrlCommand = deserializeAws_json1_1CreateApplicationPresignedUrlCommand;
const deserializeAws_json1_1CreateApplicationPresignedUrlCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
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
const deserializeAws_json1_1CreateApplicationSnapshotCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateApplicationSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateApplicationSnapshotResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateApplicationSnapshotCommand = deserializeAws_json1_1CreateApplicationSnapshotCommand;
const deserializeAws_json1_1CreateApplicationSnapshotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidApplicationConfigurationException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidApplicationConfigurationException":
            response = {
                ...(await deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.kinesisanalyticsv2#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kinesisanalyticsv2#UnsupportedOperationException":
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
        case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidApplicationConfigurationException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidApplicationConfigurationException":
            response = {
                ...(await deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
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
        case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidApplicationConfigurationException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidApplicationConfigurationException":
            response = {
                ...(await deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
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
        case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
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
        case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
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
        case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
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
const deserializeAws_json1_1DeleteApplicationSnapshotCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteApplicationSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteApplicationSnapshotResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteApplicationSnapshotCommand = deserializeAws_json1_1DeleteApplicationSnapshotCommand;
const deserializeAws_json1_1DeleteApplicationSnapshotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kinesisanalyticsv2#UnsupportedOperationException":
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
const deserializeAws_json1_1DeleteApplicationVpcConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteApplicationVpcConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteApplicationVpcConfigurationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteApplicationVpcConfigurationCommand = deserializeAws_json1_1DeleteApplicationVpcConfigurationCommand;
const deserializeAws_json1_1DeleteApplicationVpcConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidApplicationConfigurationException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidApplicationConfigurationException":
            response = {
                ...(await deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
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
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
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
const deserializeAws_json1_1DescribeApplicationSnapshotCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeApplicationSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeApplicationSnapshotResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeApplicationSnapshotCommand = deserializeAws_json1_1DescribeApplicationSnapshotCommand;
const deserializeAws_json1_1DescribeApplicationSnapshotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kinesisanalyticsv2#UnsupportedOperationException":
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
const deserializeAws_json1_1DescribeApplicationVersionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeApplicationVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeApplicationVersionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeApplicationVersionCommand = deserializeAws_json1_1DescribeApplicationVersionCommand;
const deserializeAws_json1_1DescribeApplicationVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kinesisanalyticsv2#UnsupportedOperationException":
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
        case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceProvisionedThroughputExceededException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceProvisionedThroughputExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.kinesisanalyticsv2#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnableToDetectSchemaException":
        case "com.amazonaws.kinesisanalyticsv2#UnableToDetectSchemaException":
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
        case "InvalidRequestException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
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
const deserializeAws_json1_1ListApplicationSnapshotsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListApplicationSnapshotsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListApplicationSnapshotsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListApplicationSnapshotsCommand = deserializeAws_json1_1ListApplicationSnapshotsCommand;
const deserializeAws_json1_1ListApplicationSnapshotsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kinesisanalyticsv2#UnsupportedOperationException":
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
const deserializeAws_json1_1ListApplicationVersionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListApplicationVersionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListApplicationVersionsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListApplicationVersionsCommand = deserializeAws_json1_1ListApplicationVersionsCommand;
const deserializeAws_json1_1ListApplicationVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kinesisanalyticsv2#UnsupportedOperationException":
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
        case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
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
const deserializeAws_json1_1RollbackApplicationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RollbackApplicationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RollbackApplicationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RollbackApplicationCommand = deserializeAws_json1_1RollbackApplicationCommand;
const deserializeAws_json1_1RollbackApplicationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kinesisanalyticsv2#UnsupportedOperationException":
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
        case "com.amazonaws.kinesisanalyticsv2#InvalidApplicationConfigurationException":
            response = {
                ...(await deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
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
        case "ConcurrentModificationException":
        case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidApplicationConfigurationException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidApplicationConfigurationException":
            response = {
                ...(await deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
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
        case "ConcurrentModificationException":
        case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.kinesisanalyticsv2#TooManyTagsException":
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
        case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.kinesisanalyticsv2#TooManyTagsException":
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
        case "com.amazonaws.kinesisanalyticsv2#CodeValidationException":
            response = {
                ...(await deserializeAws_json1_1CodeValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidApplicationConfigurationException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidApplicationConfigurationException":
            response = {
                ...(await deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.kinesisanalyticsv2#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
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
const deserializeAws_json1_1UpdateApplicationMaintenanceConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateApplicationMaintenanceConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateApplicationMaintenanceConfigurationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateApplicationMaintenanceConfigurationCommand = deserializeAws_json1_1UpdateApplicationMaintenanceConfigurationCommand;
const deserializeAws_json1_1UpdateApplicationMaintenanceConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kinesisanalyticsv2#UnsupportedOperationException":
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
        ...(input.ConditionalToken !== undefined &&
            input.ConditionalToken !== null && { ConditionalToken: input.ConditionalToken }),
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
const serializeAws_json1_1AddApplicationVpcConfigurationRequest = (input, context) => {
    return {
        ...(input.ApplicationName !== undefined &&
            input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
        ...(input.ConditionalToken !== undefined &&
            input.ConditionalToken !== null && { ConditionalToken: input.ConditionalToken }),
        ...(input.CurrentApplicationVersionId !== undefined &&
            input.CurrentApplicationVersionId !== null && { CurrentApplicationVersionId: input.CurrentApplicationVersionId }),
        ...(input.VpcConfiguration !== undefined &&
            input.VpcConfiguration !== null && {
            VpcConfiguration: serializeAws_json1_1VpcConfiguration(input.VpcConfiguration, context),
        }),
    };
};
const serializeAws_json1_1ApplicationCodeConfiguration = (input, context) => {
    return {
        ...(input.CodeContent !== undefined &&
            input.CodeContent !== null && { CodeContent: serializeAws_json1_1CodeContent(input.CodeContent, context) }),
        ...(input.CodeContentType !== undefined &&
            input.CodeContentType !== null && { CodeContentType: input.CodeContentType }),
    };
};
const serializeAws_json1_1ApplicationCodeConfigurationUpdate = (input, context) => {
    return {
        ...(input.CodeContentTypeUpdate !== undefined &&
            input.CodeContentTypeUpdate !== null && { CodeContentTypeUpdate: input.CodeContentTypeUpdate }),
        ...(input.CodeContentUpdate !== undefined &&
            input.CodeContentUpdate !== null && {
            CodeContentUpdate: serializeAws_json1_1CodeContentUpdate(input.CodeContentUpdate, context),
        }),
    };
};
const serializeAws_json1_1ApplicationConfiguration = (input, context) => {
    return {
        ...(input.ApplicationCodeConfiguration !== undefined &&
            input.ApplicationCodeConfiguration !== null && {
            ApplicationCodeConfiguration: serializeAws_json1_1ApplicationCodeConfiguration(input.ApplicationCodeConfiguration, context),
        }),
        ...(input.ApplicationSnapshotConfiguration !== undefined &&
            input.ApplicationSnapshotConfiguration !== null && {
            ApplicationSnapshotConfiguration: serializeAws_json1_1ApplicationSnapshotConfiguration(input.ApplicationSnapshotConfiguration, context),
        }),
        ...(input.EnvironmentProperties !== undefined &&
            input.EnvironmentProperties !== null && {
            EnvironmentProperties: serializeAws_json1_1EnvironmentProperties(input.EnvironmentProperties, context),
        }),
        ...(input.FlinkApplicationConfiguration !== undefined &&
            input.FlinkApplicationConfiguration !== null && {
            FlinkApplicationConfiguration: serializeAws_json1_1FlinkApplicationConfiguration(input.FlinkApplicationConfiguration, context),
        }),
        ...(input.SqlApplicationConfiguration !== undefined &&
            input.SqlApplicationConfiguration !== null && {
            SqlApplicationConfiguration: serializeAws_json1_1SqlApplicationConfiguration(input.SqlApplicationConfiguration, context),
        }),
        ...(input.VpcConfigurations !== undefined &&
            input.VpcConfigurations !== null && {
            VpcConfigurations: serializeAws_json1_1VpcConfigurations(input.VpcConfigurations, context),
        }),
        ...(input.ZeppelinApplicationConfiguration !== undefined &&
            input.ZeppelinApplicationConfiguration !== null && {
            ZeppelinApplicationConfiguration: serializeAws_json1_1ZeppelinApplicationConfiguration(input.ZeppelinApplicationConfiguration, context),
        }),
    };
};
const serializeAws_json1_1ApplicationConfigurationUpdate = (input, context) => {
    return {
        ...(input.ApplicationCodeConfigurationUpdate !== undefined &&
            input.ApplicationCodeConfigurationUpdate !== null && {
            ApplicationCodeConfigurationUpdate: serializeAws_json1_1ApplicationCodeConfigurationUpdate(input.ApplicationCodeConfigurationUpdate, context),
        }),
        ...(input.ApplicationSnapshotConfigurationUpdate !== undefined &&
            input.ApplicationSnapshotConfigurationUpdate !== null && {
            ApplicationSnapshotConfigurationUpdate: serializeAws_json1_1ApplicationSnapshotConfigurationUpdate(input.ApplicationSnapshotConfigurationUpdate, context),
        }),
        ...(input.EnvironmentPropertyUpdates !== undefined &&
            input.EnvironmentPropertyUpdates !== null && {
            EnvironmentPropertyUpdates: serializeAws_json1_1EnvironmentPropertyUpdates(input.EnvironmentPropertyUpdates, context),
        }),
        ...(input.FlinkApplicationConfigurationUpdate !== undefined &&
            input.FlinkApplicationConfigurationUpdate !== null && {
            FlinkApplicationConfigurationUpdate: serializeAws_json1_1FlinkApplicationConfigurationUpdate(input.FlinkApplicationConfigurationUpdate, context),
        }),
        ...(input.SqlApplicationConfigurationUpdate !== undefined &&
            input.SqlApplicationConfigurationUpdate !== null && {
            SqlApplicationConfigurationUpdate: serializeAws_json1_1SqlApplicationConfigurationUpdate(input.SqlApplicationConfigurationUpdate, context),
        }),
        ...(input.VpcConfigurationUpdates !== undefined &&
            input.VpcConfigurationUpdates !== null && {
            VpcConfigurationUpdates: serializeAws_json1_1VpcConfigurationUpdates(input.VpcConfigurationUpdates, context),
        }),
        ...(input.ZeppelinApplicationConfigurationUpdate !== undefined &&
            input.ZeppelinApplicationConfigurationUpdate !== null && {
            ZeppelinApplicationConfigurationUpdate: serializeAws_json1_1ZeppelinApplicationConfigurationUpdate(input.ZeppelinApplicationConfigurationUpdate, context),
        }),
    };
};
const serializeAws_json1_1ApplicationMaintenanceConfigurationUpdate = (input, context) => {
    return {
        ...(input.ApplicationMaintenanceWindowStartTimeUpdate !== undefined &&
            input.ApplicationMaintenanceWindowStartTimeUpdate !== null && {
            ApplicationMaintenanceWindowStartTimeUpdate: input.ApplicationMaintenanceWindowStartTimeUpdate,
        }),
    };
};
const serializeAws_json1_1ApplicationRestoreConfiguration = (input, context) => {
    return {
        ...(input.ApplicationRestoreType !== undefined &&
            input.ApplicationRestoreType !== null && { ApplicationRestoreType: input.ApplicationRestoreType }),
        ...(input.SnapshotName !== undefined && input.SnapshotName !== null && { SnapshotName: input.SnapshotName }),
    };
};
const serializeAws_json1_1ApplicationSnapshotConfiguration = (input, context) => {
    return {
        ...(input.SnapshotsEnabled !== undefined &&
            input.SnapshotsEnabled !== null && { SnapshotsEnabled: input.SnapshotsEnabled }),
    };
};
const serializeAws_json1_1ApplicationSnapshotConfigurationUpdate = (input, context) => {
    return {
        ...(input.SnapshotsEnabledUpdate !== undefined &&
            input.SnapshotsEnabledUpdate !== null && { SnapshotsEnabledUpdate: input.SnapshotsEnabledUpdate }),
    };
};
const serializeAws_json1_1CatalogConfiguration = (input, context) => {
    return {
        ...(input.GlueDataCatalogConfiguration !== undefined &&
            input.GlueDataCatalogConfiguration !== null && {
            GlueDataCatalogConfiguration: serializeAws_json1_1GlueDataCatalogConfiguration(input.GlueDataCatalogConfiguration, context),
        }),
    };
};
const serializeAws_json1_1CatalogConfigurationUpdate = (input, context) => {
    return {
        ...(input.GlueDataCatalogConfigurationUpdate !== undefined &&
            input.GlueDataCatalogConfigurationUpdate !== null && {
            GlueDataCatalogConfigurationUpdate: serializeAws_json1_1GlueDataCatalogConfigurationUpdate(input.GlueDataCatalogConfigurationUpdate, context),
        }),
    };
};
const serializeAws_json1_1CheckpointConfiguration = (input, context) => {
    return {
        ...(input.CheckpointInterval !== undefined &&
            input.CheckpointInterval !== null && { CheckpointInterval: input.CheckpointInterval }),
        ...(input.CheckpointingEnabled !== undefined &&
            input.CheckpointingEnabled !== null && { CheckpointingEnabled: input.CheckpointingEnabled }),
        ...(input.ConfigurationType !== undefined &&
            input.ConfigurationType !== null && { ConfigurationType: input.ConfigurationType }),
        ...(input.MinPauseBetweenCheckpoints !== undefined &&
            input.MinPauseBetweenCheckpoints !== null && { MinPauseBetweenCheckpoints: input.MinPauseBetweenCheckpoints }),
    };
};
const serializeAws_json1_1CheckpointConfigurationUpdate = (input, context) => {
    return {
        ...(input.CheckpointIntervalUpdate !== undefined &&
            input.CheckpointIntervalUpdate !== null && { CheckpointIntervalUpdate: input.CheckpointIntervalUpdate }),
        ...(input.CheckpointingEnabledUpdate !== undefined &&
            input.CheckpointingEnabledUpdate !== null && { CheckpointingEnabledUpdate: input.CheckpointingEnabledUpdate }),
        ...(input.ConfigurationTypeUpdate !== undefined &&
            input.ConfigurationTypeUpdate !== null && { ConfigurationTypeUpdate: input.ConfigurationTypeUpdate }),
        ...(input.MinPauseBetweenCheckpointsUpdate !== undefined &&
            input.MinPauseBetweenCheckpointsUpdate !== null && {
            MinPauseBetweenCheckpointsUpdate: input.MinPauseBetweenCheckpointsUpdate,
        }),
    };
};
const serializeAws_json1_1CloudWatchLoggingOption = (input, context) => {
    return {
        ...(input.LogStreamARN !== undefined && input.LogStreamARN !== null && { LogStreamARN: input.LogStreamARN }),
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
const serializeAws_json1_1CodeContent = (input, context) => {
    return {
        ...(input.S3ContentLocation !== undefined &&
            input.S3ContentLocation !== null && {
            S3ContentLocation: serializeAws_json1_1S3ContentLocation(input.S3ContentLocation, context),
        }),
        ...(input.TextContent !== undefined && input.TextContent !== null && { TextContent: input.TextContent }),
        ...(input.ZipFileContent !== undefined &&
            input.ZipFileContent !== null && { ZipFileContent: context.base64Encoder(input.ZipFileContent) }),
    };
};
const serializeAws_json1_1CodeContentUpdate = (input, context) => {
    return {
        ...(input.S3ContentLocationUpdate !== undefined &&
            input.S3ContentLocationUpdate !== null && {
            S3ContentLocationUpdate: serializeAws_json1_1S3ContentLocationUpdate(input.S3ContentLocationUpdate, context),
        }),
        ...(input.TextContentUpdate !== undefined &&
            input.TextContentUpdate !== null && { TextContentUpdate: input.TextContentUpdate }),
        ...(input.ZipFileContentUpdate !== undefined &&
            input.ZipFileContentUpdate !== null && {
            ZipFileContentUpdate: context.base64Encoder(input.ZipFileContentUpdate),
        }),
    };
};
const serializeAws_json1_1CreateApplicationPresignedUrlRequest = (input, context) => {
    return {
        ...(input.ApplicationName !== undefined &&
            input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
        ...(input.SessionExpirationDurationInSeconds !== undefined &&
            input.SessionExpirationDurationInSeconds !== null && {
            SessionExpirationDurationInSeconds: input.SessionExpirationDurationInSeconds,
        }),
        ...(input.UrlType !== undefined && input.UrlType !== null && { UrlType: input.UrlType }),
    };
};
const serializeAws_json1_1CreateApplicationRequest = (input, context) => {
    return {
        ...(input.ApplicationConfiguration !== undefined &&
            input.ApplicationConfiguration !== null && {
            ApplicationConfiguration: serializeAws_json1_1ApplicationConfiguration(input.ApplicationConfiguration, context),
        }),
        ...(input.ApplicationDescription !== undefined &&
            input.ApplicationDescription !== null && { ApplicationDescription: input.ApplicationDescription }),
        ...(input.ApplicationMode !== undefined &&
            input.ApplicationMode !== null && { ApplicationMode: input.ApplicationMode }),
        ...(input.ApplicationName !== undefined &&
            input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
        ...(input.CloudWatchLoggingOptions !== undefined &&
            input.CloudWatchLoggingOptions !== null && {
            CloudWatchLoggingOptions: serializeAws_json1_1CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
        }),
        ...(input.RuntimeEnvironment !== undefined &&
            input.RuntimeEnvironment !== null && { RuntimeEnvironment: input.RuntimeEnvironment }),
        ...(input.ServiceExecutionRole !== undefined &&
            input.ServiceExecutionRole !== null && { ServiceExecutionRole: input.ServiceExecutionRole }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateApplicationSnapshotRequest = (input, context) => {
    return {
        ...(input.ApplicationName !== undefined &&
            input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
        ...(input.SnapshotName !== undefined && input.SnapshotName !== null && { SnapshotName: input.SnapshotName }),
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
const serializeAws_json1_1CustomArtifactConfiguration = (input, context) => {
    return {
        ...(input.ArtifactType !== undefined && input.ArtifactType !== null && { ArtifactType: input.ArtifactType }),
        ...(input.MavenReference !== undefined &&
            input.MavenReference !== null && {
            MavenReference: serializeAws_json1_1MavenReference(input.MavenReference, context),
        }),
        ...(input.S3ContentLocation !== undefined &&
            input.S3ContentLocation !== null && {
            S3ContentLocation: serializeAws_json1_1S3ContentLocation(input.S3ContentLocation, context),
        }),
    };
};
const serializeAws_json1_1CustomArtifactsConfigurationList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1CustomArtifactConfiguration(entry, context);
    });
};
const serializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionRequest = (input, context) => {
    return {
        ...(input.ApplicationName !== undefined &&
            input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
        ...(input.CloudWatchLoggingOptionId !== undefined &&
            input.CloudWatchLoggingOptionId !== null && { CloudWatchLoggingOptionId: input.CloudWatchLoggingOptionId }),
        ...(input.ConditionalToken !== undefined &&
            input.ConditionalToken !== null && { ConditionalToken: input.ConditionalToken }),
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
const serializeAws_json1_1DeleteApplicationSnapshotRequest = (input, context) => {
    return {
        ...(input.ApplicationName !== undefined &&
            input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
        ...(input.SnapshotCreationTimestamp !== undefined &&
            input.SnapshotCreationTimestamp !== null && {
            SnapshotCreationTimestamp: Math.round(input.SnapshotCreationTimestamp.getTime() / 1000),
        }),
        ...(input.SnapshotName !== undefined && input.SnapshotName !== null && { SnapshotName: input.SnapshotName }),
    };
};
const serializeAws_json1_1DeleteApplicationVpcConfigurationRequest = (input, context) => {
    return {
        ...(input.ApplicationName !== undefined &&
            input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
        ...(input.ConditionalToken !== undefined &&
            input.ConditionalToken !== null && { ConditionalToken: input.ConditionalToken }),
        ...(input.CurrentApplicationVersionId !== undefined &&
            input.CurrentApplicationVersionId !== null && { CurrentApplicationVersionId: input.CurrentApplicationVersionId }),
        ...(input.VpcConfigurationId !== undefined &&
            input.VpcConfigurationId !== null && { VpcConfigurationId: input.VpcConfigurationId }),
    };
};
const serializeAws_json1_1DeployAsApplicationConfiguration = (input, context) => {
    return {
        ...(input.S3ContentLocation !== undefined &&
            input.S3ContentLocation !== null && {
            S3ContentLocation: serializeAws_json1_1S3ContentBaseLocation(input.S3ContentLocation, context),
        }),
    };
};
const serializeAws_json1_1DeployAsApplicationConfigurationUpdate = (input, context) => {
    return {
        ...(input.S3ContentLocationUpdate !== undefined &&
            input.S3ContentLocationUpdate !== null && {
            S3ContentLocationUpdate: serializeAws_json1_1S3ContentBaseLocationUpdate(input.S3ContentLocationUpdate, context),
        }),
    };
};
const serializeAws_json1_1DescribeApplicationRequest = (input, context) => {
    return {
        ...(input.ApplicationName !== undefined &&
            input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
        ...(input.IncludeAdditionalDetails !== undefined &&
            input.IncludeAdditionalDetails !== null && { IncludeAdditionalDetails: input.IncludeAdditionalDetails }),
    };
};
const serializeAws_json1_1DescribeApplicationSnapshotRequest = (input, context) => {
    return {
        ...(input.ApplicationName !== undefined &&
            input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
        ...(input.SnapshotName !== undefined && input.SnapshotName !== null && { SnapshotName: input.SnapshotName }),
    };
};
const serializeAws_json1_1DescribeApplicationVersionRequest = (input, context) => {
    return {
        ...(input.ApplicationName !== undefined &&
            input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
        ...(input.ApplicationVersionId !== undefined &&
            input.ApplicationVersionId !== null && { ApplicationVersionId: input.ApplicationVersionId }),
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
        ...(input.S3Configuration !== undefined &&
            input.S3Configuration !== null && {
            S3Configuration: serializeAws_json1_1S3Configuration(input.S3Configuration, context),
        }),
        ...(input.ServiceExecutionRole !== undefined &&
            input.ServiceExecutionRole !== null && { ServiceExecutionRole: input.ServiceExecutionRole }),
    };
};
const serializeAws_json1_1EnvironmentProperties = (input, context) => {
    return {
        ...(input.PropertyGroups !== undefined &&
            input.PropertyGroups !== null && {
            PropertyGroups: serializeAws_json1_1PropertyGroups(input.PropertyGroups, context),
        }),
    };
};
const serializeAws_json1_1EnvironmentPropertyUpdates = (input, context) => {
    return {
        ...(input.PropertyGroups !== undefined &&
            input.PropertyGroups !== null && {
            PropertyGroups: serializeAws_json1_1PropertyGroups(input.PropertyGroups, context),
        }),
    };
};
const serializeAws_json1_1FlinkApplicationConfiguration = (input, context) => {
    return {
        ...(input.CheckpointConfiguration !== undefined &&
            input.CheckpointConfiguration !== null && {
            CheckpointConfiguration: serializeAws_json1_1CheckpointConfiguration(input.CheckpointConfiguration, context),
        }),
        ...(input.MonitoringConfiguration !== undefined &&
            input.MonitoringConfiguration !== null && {
            MonitoringConfiguration: serializeAws_json1_1MonitoringConfiguration(input.MonitoringConfiguration, context),
        }),
        ...(input.ParallelismConfiguration !== undefined &&
            input.ParallelismConfiguration !== null && {
            ParallelismConfiguration: serializeAws_json1_1ParallelismConfiguration(input.ParallelismConfiguration, context),
        }),
    };
};
const serializeAws_json1_1FlinkApplicationConfigurationUpdate = (input, context) => {
    return {
        ...(input.CheckpointConfigurationUpdate !== undefined &&
            input.CheckpointConfigurationUpdate !== null && {
            CheckpointConfigurationUpdate: serializeAws_json1_1CheckpointConfigurationUpdate(input.CheckpointConfigurationUpdate, context),
        }),
        ...(input.MonitoringConfigurationUpdate !== undefined &&
            input.MonitoringConfigurationUpdate !== null && {
            MonitoringConfigurationUpdate: serializeAws_json1_1MonitoringConfigurationUpdate(input.MonitoringConfigurationUpdate, context),
        }),
        ...(input.ParallelismConfigurationUpdate !== undefined &&
            input.ParallelismConfigurationUpdate !== null && {
            ParallelismConfigurationUpdate: serializeAws_json1_1ParallelismConfigurationUpdate(input.ParallelismConfigurationUpdate, context),
        }),
    };
};
const serializeAws_json1_1FlinkRunConfiguration = (input, context) => {
    return {
        ...(input.AllowNonRestoredState !== undefined &&
            input.AllowNonRestoredState !== null && { AllowNonRestoredState: input.AllowNonRestoredState }),
    };
};
const serializeAws_json1_1GlueDataCatalogConfiguration = (input, context) => {
    return {
        ...(input.DatabaseARN !== undefined && input.DatabaseARN !== null && { DatabaseARN: input.DatabaseARN }),
    };
};
const serializeAws_json1_1GlueDataCatalogConfigurationUpdate = (input, context) => {
    return {
        ...(input.DatabaseARNUpdate !== undefined &&
            input.DatabaseARNUpdate !== null && { DatabaseARNUpdate: input.DatabaseARNUpdate }),
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
const serializeAws_json1_1InputLambdaProcessor = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    };
};
const serializeAws_json1_1InputLambdaProcessorUpdate = (input, context) => {
    return {
        ...(input.ResourceARNUpdate !== undefined &&
            input.ResourceARNUpdate !== null && { ResourceARNUpdate: input.ResourceARNUpdate }),
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
    };
};
const serializeAws_json1_1KinesisFirehoseInputUpdate = (input, context) => {
    return {
        ...(input.ResourceARNUpdate !== undefined &&
            input.ResourceARNUpdate !== null && { ResourceARNUpdate: input.ResourceARNUpdate }),
    };
};
const serializeAws_json1_1KinesisFirehoseOutput = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    };
};
const serializeAws_json1_1KinesisFirehoseOutputUpdate = (input, context) => {
    return {
        ...(input.ResourceARNUpdate !== undefined &&
            input.ResourceARNUpdate !== null && { ResourceARNUpdate: input.ResourceARNUpdate }),
    };
};
const serializeAws_json1_1KinesisStreamsInput = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    };
};
const serializeAws_json1_1KinesisStreamsInputUpdate = (input, context) => {
    return {
        ...(input.ResourceARNUpdate !== undefined &&
            input.ResourceARNUpdate !== null && { ResourceARNUpdate: input.ResourceARNUpdate }),
    };
};
const serializeAws_json1_1KinesisStreamsOutput = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    };
};
const serializeAws_json1_1KinesisStreamsOutputUpdate = (input, context) => {
    return {
        ...(input.ResourceARNUpdate !== undefined &&
            input.ResourceARNUpdate !== null && { ResourceARNUpdate: input.ResourceARNUpdate }),
    };
};
const serializeAws_json1_1LambdaOutput = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    };
};
const serializeAws_json1_1LambdaOutputUpdate = (input, context) => {
    return {
        ...(input.ResourceARNUpdate !== undefined &&
            input.ResourceARNUpdate !== null && { ResourceARNUpdate: input.ResourceARNUpdate }),
    };
};
const serializeAws_json1_1ListApplicationSnapshotsRequest = (input, context) => {
    return {
        ...(input.ApplicationName !== undefined &&
            input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListApplicationsRequest = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListApplicationVersionsRequest = (input, context) => {
    return {
        ...(input.ApplicationName !== undefined &&
            input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
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
const serializeAws_json1_1MavenReference = (input, context) => {
    return {
        ...(input.ArtifactId !== undefined && input.ArtifactId !== null && { ArtifactId: input.ArtifactId }),
        ...(input.GroupId !== undefined && input.GroupId !== null && { GroupId: input.GroupId }),
        ...(input.Version !== undefined && input.Version !== null && { Version: input.Version }),
    };
};
const serializeAws_json1_1MonitoringConfiguration = (input, context) => {
    return {
        ...(input.ConfigurationType !== undefined &&
            input.ConfigurationType !== null && { ConfigurationType: input.ConfigurationType }),
        ...(input.LogLevel !== undefined && input.LogLevel !== null && { LogLevel: input.LogLevel }),
        ...(input.MetricsLevel !== undefined && input.MetricsLevel !== null && { MetricsLevel: input.MetricsLevel }),
    };
};
const serializeAws_json1_1MonitoringConfigurationUpdate = (input, context) => {
    return {
        ...(input.ConfigurationTypeUpdate !== undefined &&
            input.ConfigurationTypeUpdate !== null && { ConfigurationTypeUpdate: input.ConfigurationTypeUpdate }),
        ...(input.LogLevelUpdate !== undefined &&
            input.LogLevelUpdate !== null && { LogLevelUpdate: input.LogLevelUpdate }),
        ...(input.MetricsLevelUpdate !== undefined &&
            input.MetricsLevelUpdate !== null && { MetricsLevelUpdate: input.MetricsLevelUpdate }),
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
const serializeAws_json1_1ParallelismConfiguration = (input, context) => {
    return {
        ...(input.AutoScalingEnabled !== undefined &&
            input.AutoScalingEnabled !== null && { AutoScalingEnabled: input.AutoScalingEnabled }),
        ...(input.ConfigurationType !== undefined &&
            input.ConfigurationType !== null && { ConfigurationType: input.ConfigurationType }),
        ...(input.Parallelism !== undefined && input.Parallelism !== null && { Parallelism: input.Parallelism }),
        ...(input.ParallelismPerKPU !== undefined &&
            input.ParallelismPerKPU !== null && { ParallelismPerKPU: input.ParallelismPerKPU }),
    };
};
const serializeAws_json1_1ParallelismConfigurationUpdate = (input, context) => {
    return {
        ...(input.AutoScalingEnabledUpdate !== undefined &&
            input.AutoScalingEnabledUpdate !== null && { AutoScalingEnabledUpdate: input.AutoScalingEnabledUpdate }),
        ...(input.ConfigurationTypeUpdate !== undefined &&
            input.ConfigurationTypeUpdate !== null && { ConfigurationTypeUpdate: input.ConfigurationTypeUpdate }),
        ...(input.ParallelismPerKPUUpdate !== undefined &&
            input.ParallelismPerKPUUpdate !== null && { ParallelismPerKPUUpdate: input.ParallelismPerKPUUpdate }),
        ...(input.ParallelismUpdate !== undefined &&
            input.ParallelismUpdate !== null && { ParallelismUpdate: input.ParallelismUpdate }),
    };
};
const serializeAws_json1_1PropertyGroup = (input, context) => {
    return {
        ...(input.PropertyGroupId !== undefined &&
            input.PropertyGroupId !== null && { PropertyGroupId: input.PropertyGroupId }),
        ...(input.PropertyMap !== undefined &&
            input.PropertyMap !== null && { PropertyMap: serializeAws_json1_1PropertyMap(input.PropertyMap, context) }),
    };
};
const serializeAws_json1_1PropertyGroups = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1PropertyGroup(entry, context);
    });
};
const serializeAws_json1_1PropertyMap = (input, context) => {
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
const serializeAws_json1_1ReferenceDataSources = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ReferenceDataSource(entry, context);
    });
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
const serializeAws_json1_1RollbackApplicationRequest = (input, context) => {
    return {
        ...(input.ApplicationName !== undefined &&
            input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
        ...(input.CurrentApplicationVersionId !== undefined &&
            input.CurrentApplicationVersionId !== null && { CurrentApplicationVersionId: input.CurrentApplicationVersionId }),
    };
};
const serializeAws_json1_1RunConfiguration = (input, context) => {
    return {
        ...(input.ApplicationRestoreConfiguration !== undefined &&
            input.ApplicationRestoreConfiguration !== null && {
            ApplicationRestoreConfiguration: serializeAws_json1_1ApplicationRestoreConfiguration(input.ApplicationRestoreConfiguration, context),
        }),
        ...(input.FlinkRunConfiguration !== undefined &&
            input.FlinkRunConfiguration !== null && {
            FlinkRunConfiguration: serializeAws_json1_1FlinkRunConfiguration(input.FlinkRunConfiguration, context),
        }),
        ...(input.SqlRunConfigurations !== undefined &&
            input.SqlRunConfigurations !== null && {
            SqlRunConfigurations: serializeAws_json1_1SqlRunConfigurations(input.SqlRunConfigurations, context),
        }),
    };
};
const serializeAws_json1_1RunConfigurationUpdate = (input, context) => {
    return {
        ...(input.ApplicationRestoreConfiguration !== undefined &&
            input.ApplicationRestoreConfiguration !== null && {
            ApplicationRestoreConfiguration: serializeAws_json1_1ApplicationRestoreConfiguration(input.ApplicationRestoreConfiguration, context),
        }),
        ...(input.FlinkRunConfiguration !== undefined &&
            input.FlinkRunConfiguration !== null && {
            FlinkRunConfiguration: serializeAws_json1_1FlinkRunConfiguration(input.FlinkRunConfiguration, context),
        }),
    };
};
const serializeAws_json1_1S3Configuration = (input, context) => {
    return {
        ...(input.BucketARN !== undefined && input.BucketARN !== null && { BucketARN: input.BucketARN }),
        ...(input.FileKey !== undefined && input.FileKey !== null && { FileKey: input.FileKey }),
    };
};
const serializeAws_json1_1S3ContentBaseLocation = (input, context) => {
    return {
        ...(input.BasePath !== undefined && input.BasePath !== null && { BasePath: input.BasePath }),
        ...(input.BucketARN !== undefined && input.BucketARN !== null && { BucketARN: input.BucketARN }),
    };
};
const serializeAws_json1_1S3ContentBaseLocationUpdate = (input, context) => {
    return {
        ...(input.BasePathUpdate !== undefined &&
            input.BasePathUpdate !== null && { BasePathUpdate: input.BasePathUpdate }),
        ...(input.BucketARNUpdate !== undefined &&
            input.BucketARNUpdate !== null && { BucketARNUpdate: input.BucketARNUpdate }),
    };
};
const serializeAws_json1_1S3ContentLocation = (input, context) => {
    return {
        ...(input.BucketARN !== undefined && input.BucketARN !== null && { BucketARN: input.BucketARN }),
        ...(input.FileKey !== undefined && input.FileKey !== null && { FileKey: input.FileKey }),
        ...(input.ObjectVersion !== undefined && input.ObjectVersion !== null && { ObjectVersion: input.ObjectVersion }),
    };
};
const serializeAws_json1_1S3ContentLocationUpdate = (input, context) => {
    return {
        ...(input.BucketARNUpdate !== undefined &&
            input.BucketARNUpdate !== null && { BucketARNUpdate: input.BucketARNUpdate }),
        ...(input.FileKeyUpdate !== undefined && input.FileKeyUpdate !== null && { FileKeyUpdate: input.FileKeyUpdate }),
        ...(input.ObjectVersionUpdate !== undefined &&
            input.ObjectVersionUpdate !== null && { ObjectVersionUpdate: input.ObjectVersionUpdate }),
    };
};
const serializeAws_json1_1S3ReferenceDataSource = (input, context) => {
    return {
        ...(input.BucketARN !== undefined && input.BucketARN !== null && { BucketARN: input.BucketARN }),
        ...(input.FileKey !== undefined && input.FileKey !== null && { FileKey: input.FileKey }),
    };
};
const serializeAws_json1_1S3ReferenceDataSourceUpdate = (input, context) => {
    return {
        ...(input.BucketARNUpdate !== undefined &&
            input.BucketARNUpdate !== null && { BucketARNUpdate: input.BucketARNUpdate }),
        ...(input.FileKeyUpdate !== undefined && input.FileKeyUpdate !== null && { FileKeyUpdate: input.FileKeyUpdate }),
    };
};
const serializeAws_json1_1SecurityGroupIds = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
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
const serializeAws_json1_1SqlApplicationConfiguration = (input, context) => {
    return {
        ...(input.Inputs !== undefined &&
            input.Inputs !== null && { Inputs: serializeAws_json1_1Inputs(input.Inputs, context) }),
        ...(input.Outputs !== undefined &&
            input.Outputs !== null && { Outputs: serializeAws_json1_1Outputs(input.Outputs, context) }),
        ...(input.ReferenceDataSources !== undefined &&
            input.ReferenceDataSources !== null && {
            ReferenceDataSources: serializeAws_json1_1ReferenceDataSources(input.ReferenceDataSources, context),
        }),
    };
};
const serializeAws_json1_1SqlApplicationConfigurationUpdate = (input, context) => {
    return {
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
const serializeAws_json1_1SqlRunConfiguration = (input, context) => {
    return {
        ...(input.InputId !== undefined && input.InputId !== null && { InputId: input.InputId }),
        ...(input.InputStartingPositionConfiguration !== undefined &&
            input.InputStartingPositionConfiguration !== null && {
            InputStartingPositionConfiguration: serializeAws_json1_1InputStartingPositionConfiguration(input.InputStartingPositionConfiguration, context),
        }),
    };
};
const serializeAws_json1_1SqlRunConfigurations = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1SqlRunConfiguration(entry, context);
    });
};
const serializeAws_json1_1StartApplicationRequest = (input, context) => {
    return {
        ...(input.ApplicationName !== undefined &&
            input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
        ...(input.RunConfiguration !== undefined &&
            input.RunConfiguration !== null && {
            RunConfiguration: serializeAws_json1_1RunConfiguration(input.RunConfiguration, context),
        }),
    };
};
const serializeAws_json1_1StopApplicationRequest = (input, context) => {
    return {
        ...(input.ApplicationName !== undefined &&
            input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
        ...(input.Force !== undefined && input.Force !== null && { Force: input.Force }),
    };
};
const serializeAws_json1_1SubnetIds = (input, context) => {
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
const serializeAws_json1_1UpdateApplicationMaintenanceConfigurationRequest = (input, context) => {
    return {
        ...(input.ApplicationMaintenanceConfigurationUpdate !== undefined &&
            input.ApplicationMaintenanceConfigurationUpdate !== null && {
            ApplicationMaintenanceConfigurationUpdate: serializeAws_json1_1ApplicationMaintenanceConfigurationUpdate(input.ApplicationMaintenanceConfigurationUpdate, context),
        }),
        ...(input.ApplicationName !== undefined &&
            input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
    };
};
const serializeAws_json1_1UpdateApplicationRequest = (input, context) => {
    return {
        ...(input.ApplicationConfigurationUpdate !== undefined &&
            input.ApplicationConfigurationUpdate !== null && {
            ApplicationConfigurationUpdate: serializeAws_json1_1ApplicationConfigurationUpdate(input.ApplicationConfigurationUpdate, context),
        }),
        ...(input.ApplicationName !== undefined &&
            input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
        ...(input.CloudWatchLoggingOptionUpdates !== undefined &&
            input.CloudWatchLoggingOptionUpdates !== null && {
            CloudWatchLoggingOptionUpdates: serializeAws_json1_1CloudWatchLoggingOptionUpdates(input.CloudWatchLoggingOptionUpdates, context),
        }),
        ...(input.ConditionalToken !== undefined &&
            input.ConditionalToken !== null && { ConditionalToken: input.ConditionalToken }),
        ...(input.CurrentApplicationVersionId !== undefined &&
            input.CurrentApplicationVersionId !== null && { CurrentApplicationVersionId: input.CurrentApplicationVersionId }),
        ...(input.RunConfigurationUpdate !== undefined &&
            input.RunConfigurationUpdate !== null && {
            RunConfigurationUpdate: serializeAws_json1_1RunConfigurationUpdate(input.RunConfigurationUpdate, context),
        }),
        ...(input.ServiceExecutionRoleUpdate !== undefined &&
            input.ServiceExecutionRoleUpdate !== null && { ServiceExecutionRoleUpdate: input.ServiceExecutionRoleUpdate }),
    };
};
const serializeAws_json1_1VpcConfiguration = (input, context) => {
    return {
        ...(input.SecurityGroupIds !== undefined &&
            input.SecurityGroupIds !== null && {
            SecurityGroupIds: serializeAws_json1_1SecurityGroupIds(input.SecurityGroupIds, context),
        }),
        ...(input.SubnetIds !== undefined &&
            input.SubnetIds !== null && { SubnetIds: serializeAws_json1_1SubnetIds(input.SubnetIds, context) }),
    };
};
const serializeAws_json1_1VpcConfigurations = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1VpcConfiguration(entry, context);
    });
};
const serializeAws_json1_1VpcConfigurationUpdate = (input, context) => {
    return {
        ...(input.SecurityGroupIdUpdates !== undefined &&
            input.SecurityGroupIdUpdates !== null && {
            SecurityGroupIdUpdates: serializeAws_json1_1SecurityGroupIds(input.SecurityGroupIdUpdates, context),
        }),
        ...(input.SubnetIdUpdates !== undefined &&
            input.SubnetIdUpdates !== null && {
            SubnetIdUpdates: serializeAws_json1_1SubnetIds(input.SubnetIdUpdates, context),
        }),
        ...(input.VpcConfigurationId !== undefined &&
            input.VpcConfigurationId !== null && { VpcConfigurationId: input.VpcConfigurationId }),
    };
};
const serializeAws_json1_1VpcConfigurationUpdates = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1VpcConfigurationUpdate(entry, context);
    });
};
const serializeAws_json1_1ZeppelinApplicationConfiguration = (input, context) => {
    return {
        ...(input.CatalogConfiguration !== undefined &&
            input.CatalogConfiguration !== null && {
            CatalogConfiguration: serializeAws_json1_1CatalogConfiguration(input.CatalogConfiguration, context),
        }),
        ...(input.CustomArtifactsConfiguration !== undefined &&
            input.CustomArtifactsConfiguration !== null && {
            CustomArtifactsConfiguration: serializeAws_json1_1CustomArtifactsConfigurationList(input.CustomArtifactsConfiguration, context),
        }),
        ...(input.DeployAsApplicationConfiguration !== undefined &&
            input.DeployAsApplicationConfiguration !== null && {
            DeployAsApplicationConfiguration: serializeAws_json1_1DeployAsApplicationConfiguration(input.DeployAsApplicationConfiguration, context),
        }),
        ...(input.MonitoringConfiguration !== undefined &&
            input.MonitoringConfiguration !== null && {
            MonitoringConfiguration: serializeAws_json1_1ZeppelinMonitoringConfiguration(input.MonitoringConfiguration, context),
        }),
    };
};
const serializeAws_json1_1ZeppelinApplicationConfigurationUpdate = (input, context) => {
    return {
        ...(input.CatalogConfigurationUpdate !== undefined &&
            input.CatalogConfigurationUpdate !== null && {
            CatalogConfigurationUpdate: serializeAws_json1_1CatalogConfigurationUpdate(input.CatalogConfigurationUpdate, context),
        }),
        ...(input.CustomArtifactsConfigurationUpdate !== undefined &&
            input.CustomArtifactsConfigurationUpdate !== null && {
            CustomArtifactsConfigurationUpdate: serializeAws_json1_1CustomArtifactsConfigurationList(input.CustomArtifactsConfigurationUpdate, context),
        }),
        ...(input.DeployAsApplicationConfigurationUpdate !== undefined &&
            input.DeployAsApplicationConfigurationUpdate !== null && {
            DeployAsApplicationConfigurationUpdate: serializeAws_json1_1DeployAsApplicationConfigurationUpdate(input.DeployAsApplicationConfigurationUpdate, context),
        }),
        ...(input.MonitoringConfigurationUpdate !== undefined &&
            input.MonitoringConfigurationUpdate !== null && {
            MonitoringConfigurationUpdate: serializeAws_json1_1ZeppelinMonitoringConfigurationUpdate(input.MonitoringConfigurationUpdate, context),
        }),
    };
};
const serializeAws_json1_1ZeppelinMonitoringConfiguration = (input, context) => {
    return {
        ...(input.LogLevel !== undefined && input.LogLevel !== null && { LogLevel: input.LogLevel }),
    };
};
const serializeAws_json1_1ZeppelinMonitoringConfigurationUpdate = (input, context) => {
    return {
        ...(input.LogLevelUpdate !== undefined &&
            input.LogLevelUpdate !== null && { LogLevelUpdate: input.LogLevelUpdate }),
    };
};
const deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionResponse = (output, context) => {
    return {
        ApplicationARN: output.ApplicationARN !== undefined && output.ApplicationARN !== null ? output.ApplicationARN : undefined,
        ApplicationVersionId: output.ApplicationVersionId !== undefined && output.ApplicationVersionId !== null
            ? output.ApplicationVersionId
            : undefined,
        CloudWatchLoggingOptionDescriptions: output.CloudWatchLoggingOptionDescriptions !== undefined && output.CloudWatchLoggingOptionDescriptions !== null
            ? deserializeAws_json1_1CloudWatchLoggingOptionDescriptions(output.CloudWatchLoggingOptionDescriptions, context)
            : undefined,
    };
};
const deserializeAws_json1_1AddApplicationInputProcessingConfigurationResponse = (output, context) => {
    return {
        ApplicationARN: output.ApplicationARN !== undefined && output.ApplicationARN !== null ? output.ApplicationARN : undefined,
        ApplicationVersionId: output.ApplicationVersionId !== undefined && output.ApplicationVersionId !== null
            ? output.ApplicationVersionId
            : undefined,
        InputId: output.InputId !== undefined && output.InputId !== null ? output.InputId : undefined,
        InputProcessingConfigurationDescription: output.InputProcessingConfigurationDescription !== undefined &&
            output.InputProcessingConfigurationDescription !== null
            ? deserializeAws_json1_1InputProcessingConfigurationDescription(output.InputProcessingConfigurationDescription, context)
            : undefined,
    };
};
const deserializeAws_json1_1AddApplicationInputResponse = (output, context) => {
    return {
        ApplicationARN: output.ApplicationARN !== undefined && output.ApplicationARN !== null ? output.ApplicationARN : undefined,
        ApplicationVersionId: output.ApplicationVersionId !== undefined && output.ApplicationVersionId !== null
            ? output.ApplicationVersionId
            : undefined,
        InputDescriptions: output.InputDescriptions !== undefined && output.InputDescriptions !== null
            ? deserializeAws_json1_1InputDescriptions(output.InputDescriptions, context)
            : undefined,
    };
};
const deserializeAws_json1_1AddApplicationOutputResponse = (output, context) => {
    return {
        ApplicationARN: output.ApplicationARN !== undefined && output.ApplicationARN !== null ? output.ApplicationARN : undefined,
        ApplicationVersionId: output.ApplicationVersionId !== undefined && output.ApplicationVersionId !== null
            ? output.ApplicationVersionId
            : undefined,
        OutputDescriptions: output.OutputDescriptions !== undefined && output.OutputDescriptions !== null
            ? deserializeAws_json1_1OutputDescriptions(output.OutputDescriptions, context)
            : undefined,
    };
};
const deserializeAws_json1_1AddApplicationReferenceDataSourceResponse = (output, context) => {
    return {
        ApplicationARN: output.ApplicationARN !== undefined && output.ApplicationARN !== null ? output.ApplicationARN : undefined,
        ApplicationVersionId: output.ApplicationVersionId !== undefined && output.ApplicationVersionId !== null
            ? output.ApplicationVersionId
            : undefined,
        ReferenceDataSourceDescriptions: output.ReferenceDataSourceDescriptions !== undefined && output.ReferenceDataSourceDescriptions !== null
            ? deserializeAws_json1_1ReferenceDataSourceDescriptions(output.ReferenceDataSourceDescriptions, context)
            : undefined,
    };
};
const deserializeAws_json1_1AddApplicationVpcConfigurationResponse = (output, context) => {
    return {
        ApplicationARN: output.ApplicationARN !== undefined && output.ApplicationARN !== null ? output.ApplicationARN : undefined,
        ApplicationVersionId: output.ApplicationVersionId !== undefined && output.ApplicationVersionId !== null
            ? output.ApplicationVersionId
            : undefined,
        VpcConfigurationDescription: output.VpcConfigurationDescription !== undefined && output.VpcConfigurationDescription !== null
            ? deserializeAws_json1_1VpcConfigurationDescription(output.VpcConfigurationDescription, context)
            : undefined,
    };
};
const deserializeAws_json1_1ApplicationCodeConfigurationDescription = (output, context) => {
    return {
        CodeContentDescription: output.CodeContentDescription !== undefined && output.CodeContentDescription !== null
            ? deserializeAws_json1_1CodeContentDescription(output.CodeContentDescription, context)
            : undefined,
        CodeContentType: output.CodeContentType !== undefined && output.CodeContentType !== null ? output.CodeContentType : undefined,
    };
};
const deserializeAws_json1_1ApplicationConfigurationDescription = (output, context) => {
    return {
        ApplicationCodeConfigurationDescription: output.ApplicationCodeConfigurationDescription !== undefined &&
            output.ApplicationCodeConfigurationDescription !== null
            ? deserializeAws_json1_1ApplicationCodeConfigurationDescription(output.ApplicationCodeConfigurationDescription, context)
            : undefined,
        ApplicationSnapshotConfigurationDescription: output.ApplicationSnapshotConfigurationDescription !== undefined &&
            output.ApplicationSnapshotConfigurationDescription !== null
            ? deserializeAws_json1_1ApplicationSnapshotConfigurationDescription(output.ApplicationSnapshotConfigurationDescription, context)
            : undefined,
        EnvironmentPropertyDescriptions: output.EnvironmentPropertyDescriptions !== undefined && output.EnvironmentPropertyDescriptions !== null
            ? deserializeAws_json1_1EnvironmentPropertyDescriptions(output.EnvironmentPropertyDescriptions, context)
            : undefined,
        FlinkApplicationConfigurationDescription: output.FlinkApplicationConfigurationDescription !== undefined &&
            output.FlinkApplicationConfigurationDescription !== null
            ? deserializeAws_json1_1FlinkApplicationConfigurationDescription(output.FlinkApplicationConfigurationDescription, context)
            : undefined,
        RunConfigurationDescription: output.RunConfigurationDescription !== undefined && output.RunConfigurationDescription !== null
            ? deserializeAws_json1_1RunConfigurationDescription(output.RunConfigurationDescription, context)
            : undefined,
        SqlApplicationConfigurationDescription: output.SqlApplicationConfigurationDescription !== undefined &&
            output.SqlApplicationConfigurationDescription !== null
            ? deserializeAws_json1_1SqlApplicationConfigurationDescription(output.SqlApplicationConfigurationDescription, context)
            : undefined,
        VpcConfigurationDescriptions: output.VpcConfigurationDescriptions !== undefined && output.VpcConfigurationDescriptions !== null
            ? deserializeAws_json1_1VpcConfigurationDescriptions(output.VpcConfigurationDescriptions, context)
            : undefined,
        ZeppelinApplicationConfigurationDescription: output.ZeppelinApplicationConfigurationDescription !== undefined &&
            output.ZeppelinApplicationConfigurationDescription !== null
            ? deserializeAws_json1_1ZeppelinApplicationConfigurationDescription(output.ZeppelinApplicationConfigurationDescription, context)
            : undefined,
    };
};
const deserializeAws_json1_1ApplicationDetail = (output, context) => {
    return {
        ApplicationARN: output.ApplicationARN !== undefined && output.ApplicationARN !== null ? output.ApplicationARN : undefined,
        ApplicationConfigurationDescription: output.ApplicationConfigurationDescription !== undefined && output.ApplicationConfigurationDescription !== null
            ? deserializeAws_json1_1ApplicationConfigurationDescription(output.ApplicationConfigurationDescription, context)
            : undefined,
        ApplicationDescription: output.ApplicationDescription !== undefined && output.ApplicationDescription !== null
            ? output.ApplicationDescription
            : undefined,
        ApplicationMaintenanceConfigurationDescription: output.ApplicationMaintenanceConfigurationDescription !== undefined &&
            output.ApplicationMaintenanceConfigurationDescription !== null
            ? deserializeAws_json1_1ApplicationMaintenanceConfigurationDescription(output.ApplicationMaintenanceConfigurationDescription, context)
            : undefined,
        ApplicationMode: output.ApplicationMode !== undefined && output.ApplicationMode !== null ? output.ApplicationMode : undefined,
        ApplicationName: output.ApplicationName !== undefined && output.ApplicationName !== null ? output.ApplicationName : undefined,
        ApplicationStatus: output.ApplicationStatus !== undefined && output.ApplicationStatus !== null
            ? output.ApplicationStatus
            : undefined,
        ApplicationVersionId: output.ApplicationVersionId !== undefined && output.ApplicationVersionId !== null
            ? output.ApplicationVersionId
            : undefined,
        ApplicationVersionRolledBackFrom: output.ApplicationVersionRolledBackFrom !== undefined && output.ApplicationVersionRolledBackFrom !== null
            ? output.ApplicationVersionRolledBackFrom
            : undefined,
        ApplicationVersionRolledBackTo: output.ApplicationVersionRolledBackTo !== undefined && output.ApplicationVersionRolledBackTo !== null
            ? output.ApplicationVersionRolledBackTo
            : undefined,
        ApplicationVersionUpdatedFrom: output.ApplicationVersionUpdatedFrom !== undefined && output.ApplicationVersionUpdatedFrom !== null
            ? output.ApplicationVersionUpdatedFrom
            : undefined,
        CloudWatchLoggingOptionDescriptions: output.CloudWatchLoggingOptionDescriptions !== undefined && output.CloudWatchLoggingOptionDescriptions !== null
            ? deserializeAws_json1_1CloudWatchLoggingOptionDescriptions(output.CloudWatchLoggingOptionDescriptions, context)
            : undefined,
        ConditionalToken: output.ConditionalToken !== undefined && output.ConditionalToken !== null ? output.ConditionalToken : undefined,
        CreateTimestamp: output.CreateTimestamp !== undefined && output.CreateTimestamp !== null
            ? new Date(Math.round(output.CreateTimestamp * 1000))
            : undefined,
        LastUpdateTimestamp: output.LastUpdateTimestamp !== undefined && output.LastUpdateTimestamp !== null
            ? new Date(Math.round(output.LastUpdateTimestamp * 1000))
            : undefined,
        RuntimeEnvironment: output.RuntimeEnvironment !== undefined && output.RuntimeEnvironment !== null
            ? output.RuntimeEnvironment
            : undefined,
        ServiceExecutionRole: output.ServiceExecutionRole !== undefined && output.ServiceExecutionRole !== null
            ? output.ServiceExecutionRole
            : undefined,
    };
};
const deserializeAws_json1_1ApplicationMaintenanceConfigurationDescription = (output, context) => {
    return {
        ApplicationMaintenanceWindowEndTime: output.ApplicationMaintenanceWindowEndTime !== undefined && output.ApplicationMaintenanceWindowEndTime !== null
            ? output.ApplicationMaintenanceWindowEndTime
            : undefined,
        ApplicationMaintenanceWindowStartTime: output.ApplicationMaintenanceWindowStartTime !== undefined &&
            output.ApplicationMaintenanceWindowStartTime !== null
            ? output.ApplicationMaintenanceWindowStartTime
            : undefined,
    };
};
const deserializeAws_json1_1ApplicationRestoreConfiguration = (output, context) => {
    return {
        ApplicationRestoreType: output.ApplicationRestoreType !== undefined && output.ApplicationRestoreType !== null
            ? output.ApplicationRestoreType
            : undefined,
        SnapshotName: output.SnapshotName !== undefined && output.SnapshotName !== null ? output.SnapshotName : undefined,
    };
};
const deserializeAws_json1_1ApplicationSnapshotConfigurationDescription = (output, context) => {
    return {
        SnapshotsEnabled: output.SnapshotsEnabled !== undefined && output.SnapshotsEnabled !== null ? output.SnapshotsEnabled : undefined,
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
        ApplicationMode: output.ApplicationMode !== undefined && output.ApplicationMode !== null ? output.ApplicationMode : undefined,
        ApplicationName: output.ApplicationName !== undefined && output.ApplicationName !== null ? output.ApplicationName : undefined,
        ApplicationStatus: output.ApplicationStatus !== undefined && output.ApplicationStatus !== null
            ? output.ApplicationStatus
            : undefined,
        ApplicationVersionId: output.ApplicationVersionId !== undefined && output.ApplicationVersionId !== null
            ? output.ApplicationVersionId
            : undefined,
        RuntimeEnvironment: output.RuntimeEnvironment !== undefined && output.RuntimeEnvironment !== null
            ? output.RuntimeEnvironment
            : undefined,
    };
};
const deserializeAws_json1_1ApplicationVersionSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ApplicationVersionSummary(entry, context);
    });
};
const deserializeAws_json1_1ApplicationVersionSummary = (output, context) => {
    return {
        ApplicationStatus: output.ApplicationStatus !== undefined && output.ApplicationStatus !== null
            ? output.ApplicationStatus
            : undefined,
        ApplicationVersionId: output.ApplicationVersionId !== undefined && output.ApplicationVersionId !== null
            ? output.ApplicationVersionId
            : undefined,
    };
};
const deserializeAws_json1_1CatalogConfigurationDescription = (output, context) => {
    return {
        GlueDataCatalogConfigurationDescription: output.GlueDataCatalogConfigurationDescription !== undefined &&
            output.GlueDataCatalogConfigurationDescription !== null
            ? deserializeAws_json1_1GlueDataCatalogConfigurationDescription(output.GlueDataCatalogConfigurationDescription, context)
            : undefined,
    };
};
const deserializeAws_json1_1CheckpointConfigurationDescription = (output, context) => {
    return {
        CheckpointInterval: output.CheckpointInterval !== undefined && output.CheckpointInterval !== null
            ? output.CheckpointInterval
            : undefined,
        CheckpointingEnabled: output.CheckpointingEnabled !== undefined && output.CheckpointingEnabled !== null
            ? output.CheckpointingEnabled
            : undefined,
        ConfigurationType: output.ConfigurationType !== undefined && output.ConfigurationType !== null
            ? output.ConfigurationType
            : undefined,
        MinPauseBetweenCheckpoints: output.MinPauseBetweenCheckpoints !== undefined && output.MinPauseBetweenCheckpoints !== null
            ? output.MinPauseBetweenCheckpoints
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
const deserializeAws_json1_1CodeContentDescription = (output, context) => {
    return {
        CodeMD5: output.CodeMD5 !== undefined && output.CodeMD5 !== null ? output.CodeMD5 : undefined,
        CodeSize: output.CodeSize !== undefined && output.CodeSize !== null ? output.CodeSize : undefined,
        S3ApplicationCodeLocationDescription: output.S3ApplicationCodeLocationDescription !== undefined && output.S3ApplicationCodeLocationDescription !== null
            ? deserializeAws_json1_1S3ApplicationCodeLocationDescription(output.S3ApplicationCodeLocationDescription, context)
            : undefined,
        TextContent: output.TextContent !== undefined && output.TextContent !== null ? output.TextContent : undefined,
    };
};
const deserializeAws_json1_1CodeValidationException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ConcurrentModificationException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1CreateApplicationPresignedUrlResponse = (output, context) => {
    return {
        AuthorizedUrl: output.AuthorizedUrl !== undefined && output.AuthorizedUrl !== null ? output.AuthorizedUrl : undefined,
    };
};
const deserializeAws_json1_1CreateApplicationResponse = (output, context) => {
    return {
        ApplicationDetail: output.ApplicationDetail !== undefined && output.ApplicationDetail !== null
            ? deserializeAws_json1_1ApplicationDetail(output.ApplicationDetail, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateApplicationSnapshotResponse = (output, context) => {
    return {};
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
const deserializeAws_json1_1CustomArtifactConfigurationDescription = (output, context) => {
    return {
        ArtifactType: output.ArtifactType !== undefined && output.ArtifactType !== null ? output.ArtifactType : undefined,
        MavenReferenceDescription: output.MavenReferenceDescription !== undefined && output.MavenReferenceDescription !== null
            ? deserializeAws_json1_1MavenReference(output.MavenReferenceDescription, context)
            : undefined,
        S3ContentLocationDescription: output.S3ContentLocationDescription !== undefined && output.S3ContentLocationDescription !== null
            ? deserializeAws_json1_1S3ContentLocation(output.S3ContentLocationDescription, context)
            : undefined,
    };
};
const deserializeAws_json1_1CustomArtifactsConfigurationDescriptionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CustomArtifactConfigurationDescription(entry, context);
    });
};
const deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionResponse = (output, context) => {
    return {
        ApplicationARN: output.ApplicationARN !== undefined && output.ApplicationARN !== null ? output.ApplicationARN : undefined,
        ApplicationVersionId: output.ApplicationVersionId !== undefined && output.ApplicationVersionId !== null
            ? output.ApplicationVersionId
            : undefined,
        CloudWatchLoggingOptionDescriptions: output.CloudWatchLoggingOptionDescriptions !== undefined && output.CloudWatchLoggingOptionDescriptions !== null
            ? deserializeAws_json1_1CloudWatchLoggingOptionDescriptions(output.CloudWatchLoggingOptionDescriptions, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationResponse = (output, context) => {
    return {
        ApplicationARN: output.ApplicationARN !== undefined && output.ApplicationARN !== null ? output.ApplicationARN : undefined,
        ApplicationVersionId: output.ApplicationVersionId !== undefined && output.ApplicationVersionId !== null
            ? output.ApplicationVersionId
            : undefined,
    };
};
const deserializeAws_json1_1DeleteApplicationOutputResponse = (output, context) => {
    return {
        ApplicationARN: output.ApplicationARN !== undefined && output.ApplicationARN !== null ? output.ApplicationARN : undefined,
        ApplicationVersionId: output.ApplicationVersionId !== undefined && output.ApplicationVersionId !== null
            ? output.ApplicationVersionId
            : undefined,
    };
};
const deserializeAws_json1_1DeleteApplicationReferenceDataSourceResponse = (output, context) => {
    return {
        ApplicationARN: output.ApplicationARN !== undefined && output.ApplicationARN !== null ? output.ApplicationARN : undefined,
        ApplicationVersionId: output.ApplicationVersionId !== undefined && output.ApplicationVersionId !== null
            ? output.ApplicationVersionId
            : undefined,
    };
};
const deserializeAws_json1_1DeleteApplicationResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteApplicationSnapshotResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteApplicationVpcConfigurationResponse = (output, context) => {
    return {
        ApplicationARN: output.ApplicationARN !== undefined && output.ApplicationARN !== null ? output.ApplicationARN : undefined,
        ApplicationVersionId: output.ApplicationVersionId !== undefined && output.ApplicationVersionId !== null
            ? output.ApplicationVersionId
            : undefined,
    };
};
const deserializeAws_json1_1DeployAsApplicationConfigurationDescription = (output, context) => {
    return {
        S3ContentLocationDescription: output.S3ContentLocationDescription !== undefined && output.S3ContentLocationDescription !== null
            ? deserializeAws_json1_1S3ContentBaseLocationDescription(output.S3ContentLocationDescription, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeApplicationResponse = (output, context) => {
    return {
        ApplicationDetail: output.ApplicationDetail !== undefined && output.ApplicationDetail !== null
            ? deserializeAws_json1_1ApplicationDetail(output.ApplicationDetail, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeApplicationSnapshotResponse = (output, context) => {
    return {
        SnapshotDetails: output.SnapshotDetails !== undefined && output.SnapshotDetails !== null
            ? deserializeAws_json1_1SnapshotDetails(output.SnapshotDetails, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeApplicationVersionResponse = (output, context) => {
    return {
        ApplicationVersionDetail: output.ApplicationVersionDetail !== undefined && output.ApplicationVersionDetail !== null
            ? deserializeAws_json1_1ApplicationDetail(output.ApplicationVersionDetail, context)
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
const deserializeAws_json1_1EnvironmentPropertyDescriptions = (output, context) => {
    return {
        PropertyGroupDescriptions: output.PropertyGroupDescriptions !== undefined && output.PropertyGroupDescriptions !== null
            ? deserializeAws_json1_1PropertyGroups(output.PropertyGroupDescriptions, context)
            : undefined,
    };
};
const deserializeAws_json1_1FlinkApplicationConfigurationDescription = (output, context) => {
    return {
        CheckpointConfigurationDescription: output.CheckpointConfigurationDescription !== undefined && output.CheckpointConfigurationDescription !== null
            ? deserializeAws_json1_1CheckpointConfigurationDescription(output.CheckpointConfigurationDescription, context)
            : undefined,
        JobPlanDescription: output.JobPlanDescription !== undefined && output.JobPlanDescription !== null
            ? output.JobPlanDescription
            : undefined,
        MonitoringConfigurationDescription: output.MonitoringConfigurationDescription !== undefined && output.MonitoringConfigurationDescription !== null
            ? deserializeAws_json1_1MonitoringConfigurationDescription(output.MonitoringConfigurationDescription, context)
            : undefined,
        ParallelismConfigurationDescription: output.ParallelismConfigurationDescription !== undefined && output.ParallelismConfigurationDescription !== null
            ? deserializeAws_json1_1ParallelismConfigurationDescription(output.ParallelismConfigurationDescription, context)
            : undefined,
    };
};
const deserializeAws_json1_1FlinkRunConfiguration = (output, context) => {
    return {
        AllowNonRestoredState: output.AllowNonRestoredState !== undefined && output.AllowNonRestoredState !== null
            ? output.AllowNonRestoredState
            : undefined,
    };
};
const deserializeAws_json1_1GlueDataCatalogConfigurationDescription = (output, context) => {
    return {
        DatabaseARN: output.DatabaseARN !== undefined && output.DatabaseARN !== null ? output.DatabaseARN : undefined,
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
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidArgumentException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidRequestException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
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
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ListApplicationSnapshotsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        SnapshotSummaries: output.SnapshotSummaries !== undefined && output.SnapshotSummaries !== null
            ? deserializeAws_json1_1SnapshotSummaries(output.SnapshotSummaries, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListApplicationsResponse = (output, context) => {
    return {
        ApplicationSummaries: output.ApplicationSummaries !== undefined && output.ApplicationSummaries !== null
            ? deserializeAws_json1_1ApplicationSummaries(output.ApplicationSummaries, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListApplicationVersionsResponse = (output, context) => {
    return {
        ApplicationVersionSummaries: output.ApplicationVersionSummaries !== undefined && output.ApplicationVersionSummaries !== null
            ? deserializeAws_json1_1ApplicationVersionSummaries(output.ApplicationVersionSummaries, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
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
const deserializeAws_json1_1MavenReference = (output, context) => {
    return {
        ArtifactId: output.ArtifactId !== undefined && output.ArtifactId !== null ? output.ArtifactId : undefined,
        GroupId: output.GroupId !== undefined && output.GroupId !== null ? output.GroupId : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
const deserializeAws_json1_1MonitoringConfigurationDescription = (output, context) => {
    return {
        ConfigurationType: output.ConfigurationType !== undefined && output.ConfigurationType !== null
            ? output.ConfigurationType
            : undefined,
        LogLevel: output.LogLevel !== undefined && output.LogLevel !== null ? output.LogLevel : undefined,
        MetricsLevel: output.MetricsLevel !== undefined && output.MetricsLevel !== null ? output.MetricsLevel : undefined,
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
const deserializeAws_json1_1ParallelismConfigurationDescription = (output, context) => {
    return {
        AutoScalingEnabled: output.AutoScalingEnabled !== undefined && output.AutoScalingEnabled !== null
            ? output.AutoScalingEnabled
            : undefined,
        ConfigurationType: output.ConfigurationType !== undefined && output.ConfigurationType !== null
            ? output.ConfigurationType
            : undefined,
        CurrentParallelism: output.CurrentParallelism !== undefined && output.CurrentParallelism !== null
            ? output.CurrentParallelism
            : undefined,
        Parallelism: output.Parallelism !== undefined && output.Parallelism !== null ? output.Parallelism : undefined,
        ParallelismPerKPU: output.ParallelismPerKPU !== undefined && output.ParallelismPerKPU !== null
            ? output.ParallelismPerKPU
            : undefined,
    };
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
const deserializeAws_json1_1PropertyGroup = (output, context) => {
    return {
        PropertyGroupId: output.PropertyGroupId !== undefined && output.PropertyGroupId !== null ? output.PropertyGroupId : undefined,
        PropertyMap: output.PropertyMap !== undefined && output.PropertyMap !== null
            ? deserializeAws_json1_1PropertyMap(output.PropertyMap, context)
            : undefined,
    };
};
const deserializeAws_json1_1PropertyGroups = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PropertyGroup(entry, context);
    });
};
const deserializeAws_json1_1PropertyMap = (output, context) => {
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
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ResourceProvisionedThroughputExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1RollbackApplicationResponse = (output, context) => {
    return {
        ApplicationDetail: output.ApplicationDetail !== undefined && output.ApplicationDetail !== null
            ? deserializeAws_json1_1ApplicationDetail(output.ApplicationDetail, context)
            : undefined,
    };
};
const deserializeAws_json1_1RunConfigurationDescription = (output, context) => {
    return {
        ApplicationRestoreConfigurationDescription: output.ApplicationRestoreConfigurationDescription !== undefined &&
            output.ApplicationRestoreConfigurationDescription !== null
            ? deserializeAws_json1_1ApplicationRestoreConfiguration(output.ApplicationRestoreConfigurationDescription, context)
            : undefined,
        FlinkRunConfigurationDescription: output.FlinkRunConfigurationDescription !== undefined && output.FlinkRunConfigurationDescription !== null
            ? deserializeAws_json1_1FlinkRunConfiguration(output.FlinkRunConfigurationDescription, context)
            : undefined,
    };
};
const deserializeAws_json1_1S3ApplicationCodeLocationDescription = (output, context) => {
    return {
        BucketARN: output.BucketARN !== undefined && output.BucketARN !== null ? output.BucketARN : undefined,
        FileKey: output.FileKey !== undefined && output.FileKey !== null ? output.FileKey : undefined,
        ObjectVersion: output.ObjectVersion !== undefined && output.ObjectVersion !== null ? output.ObjectVersion : undefined,
    };
};
const deserializeAws_json1_1S3ContentBaseLocationDescription = (output, context) => {
    return {
        BasePath: output.BasePath !== undefined && output.BasePath !== null ? output.BasePath : undefined,
        BucketARN: output.BucketARN !== undefined && output.BucketARN !== null ? output.BucketARN : undefined,
    };
};
const deserializeAws_json1_1S3ContentLocation = (output, context) => {
    return {
        BucketARN: output.BucketARN !== undefined && output.BucketARN !== null ? output.BucketARN : undefined,
        FileKey: output.FileKey !== undefined && output.FileKey !== null ? output.FileKey : undefined,
        ObjectVersion: output.ObjectVersion !== undefined && output.ObjectVersion !== null ? output.ObjectVersion : undefined,
    };
};
const deserializeAws_json1_1S3ReferenceDataSourceDescription = (output, context) => {
    return {
        BucketARN: output.BucketARN !== undefined && output.BucketARN !== null ? output.BucketARN : undefined,
        FileKey: output.FileKey !== undefined && output.FileKey !== null ? output.FileKey : undefined,
        ReferenceRoleARN: output.ReferenceRoleARN !== undefined && output.ReferenceRoleARN !== null ? output.ReferenceRoleARN : undefined,
    };
};
const deserializeAws_json1_1SecurityGroupIds = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ServiceUnavailableException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1SnapshotDetails = (output, context) => {
    return {
        ApplicationVersionId: output.ApplicationVersionId !== undefined && output.ApplicationVersionId !== null
            ? output.ApplicationVersionId
            : undefined,
        SnapshotCreationTimestamp: output.SnapshotCreationTimestamp !== undefined && output.SnapshotCreationTimestamp !== null
            ? new Date(Math.round(output.SnapshotCreationTimestamp * 1000))
            : undefined,
        SnapshotName: output.SnapshotName !== undefined && output.SnapshotName !== null ? output.SnapshotName : undefined,
        SnapshotStatus: output.SnapshotStatus !== undefined && output.SnapshotStatus !== null ? output.SnapshotStatus : undefined,
    };
};
const deserializeAws_json1_1SnapshotSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SnapshotDetails(entry, context);
    });
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
const deserializeAws_json1_1SqlApplicationConfigurationDescription = (output, context) => {
    return {
        InputDescriptions: output.InputDescriptions !== undefined && output.InputDescriptions !== null
            ? deserializeAws_json1_1InputDescriptions(output.InputDescriptions, context)
            : undefined,
        OutputDescriptions: output.OutputDescriptions !== undefined && output.OutputDescriptions !== null
            ? deserializeAws_json1_1OutputDescriptions(output.OutputDescriptions, context)
            : undefined,
        ReferenceDataSourceDescriptions: output.ReferenceDataSourceDescriptions !== undefined && output.ReferenceDataSourceDescriptions !== null
            ? deserializeAws_json1_1ReferenceDataSourceDescriptions(output.ReferenceDataSourceDescriptions, context)
            : undefined,
    };
};
const deserializeAws_json1_1StartApplicationResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1StopApplicationResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1SubnetIds = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
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
const deserializeAws_json1_1TooManyTagsException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1UnableToDetectSchemaException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        ProcessedInputRecords: output.ProcessedInputRecords !== undefined && output.ProcessedInputRecords !== null
            ? deserializeAws_json1_1ProcessedInputRecords(output.ProcessedInputRecords, context)
            : undefined,
        RawInputRecords: output.RawInputRecords !== undefined && output.RawInputRecords !== null
            ? deserializeAws_json1_1RawInputRecords(output.RawInputRecords, context)
            : undefined,
    };
};
const deserializeAws_json1_1UnsupportedOperationException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateApplicationMaintenanceConfigurationResponse = (output, context) => {
    return {
        ApplicationARN: output.ApplicationARN !== undefined && output.ApplicationARN !== null ? output.ApplicationARN : undefined,
        ApplicationMaintenanceConfigurationDescription: output.ApplicationMaintenanceConfigurationDescription !== undefined &&
            output.ApplicationMaintenanceConfigurationDescription !== null
            ? deserializeAws_json1_1ApplicationMaintenanceConfigurationDescription(output.ApplicationMaintenanceConfigurationDescription, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateApplicationResponse = (output, context) => {
    return {
        ApplicationDetail: output.ApplicationDetail !== undefined && output.ApplicationDetail !== null
            ? deserializeAws_json1_1ApplicationDetail(output.ApplicationDetail, context)
            : undefined,
    };
};
const deserializeAws_json1_1VpcConfigurationDescription = (output, context) => {
    return {
        SecurityGroupIds: output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
            ? deserializeAws_json1_1SecurityGroupIds(output.SecurityGroupIds, context)
            : undefined,
        SubnetIds: output.SubnetIds !== undefined && output.SubnetIds !== null
            ? deserializeAws_json1_1SubnetIds(output.SubnetIds, context)
            : undefined,
        VpcConfigurationId: output.VpcConfigurationId !== undefined && output.VpcConfigurationId !== null
            ? output.VpcConfigurationId
            : undefined,
        VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
    };
};
const deserializeAws_json1_1VpcConfigurationDescriptions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1VpcConfigurationDescription(entry, context);
    });
};
const deserializeAws_json1_1ZeppelinApplicationConfigurationDescription = (output, context) => {
    return {
        CatalogConfigurationDescription: output.CatalogConfigurationDescription !== undefined && output.CatalogConfigurationDescription !== null
            ? deserializeAws_json1_1CatalogConfigurationDescription(output.CatalogConfigurationDescription, context)
            : undefined,
        CustomArtifactsConfigurationDescription: output.CustomArtifactsConfigurationDescription !== undefined &&
            output.CustomArtifactsConfigurationDescription !== null
            ? deserializeAws_json1_1CustomArtifactsConfigurationDescriptionList(output.CustomArtifactsConfigurationDescription, context)
            : undefined,
        DeployAsApplicationConfigurationDescription: output.DeployAsApplicationConfigurationDescription !== undefined &&
            output.DeployAsApplicationConfigurationDescription !== null
            ? deserializeAws_json1_1DeployAsApplicationConfigurationDescription(output.DeployAsApplicationConfigurationDescription, context)
            : undefined,
        MonitoringConfigurationDescription: output.MonitoringConfigurationDescription !== undefined && output.MonitoringConfigurationDescription !== null
            ? deserializeAws_json1_1ZeppelinMonitoringConfigurationDescription(output.MonitoringConfigurationDescription, context)
            : undefined,
    };
};
const deserializeAws_json1_1ZeppelinMonitoringConfigurationDescription = (output, context) => {
    return {
        LogLevel: output.LogLevel !== undefined && output.LogLevel !== null ? output.LogLevel : undefined,
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