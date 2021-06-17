"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_0UpdateEnrollmentStatusCommand = exports.deserializeAws_json1_0GetRecommendationSummariesCommand = exports.deserializeAws_json1_0GetLambdaFunctionRecommendationsCommand = exports.deserializeAws_json1_0GetEnrollmentStatusCommand = exports.deserializeAws_json1_0GetEC2RecommendationProjectedMetricsCommand = exports.deserializeAws_json1_0GetEC2InstanceRecommendationsCommand = exports.deserializeAws_json1_0GetEBSVolumeRecommendationsCommand = exports.deserializeAws_json1_0GetAutoScalingGroupRecommendationsCommand = exports.deserializeAws_json1_0ExportLambdaFunctionRecommendationsCommand = exports.deserializeAws_json1_0ExportEC2InstanceRecommendationsCommand = exports.deserializeAws_json1_0ExportEBSVolumeRecommendationsCommand = exports.deserializeAws_json1_0ExportAutoScalingGroupRecommendationsCommand = exports.deserializeAws_json1_0DescribeRecommendationExportJobsCommand = exports.serializeAws_json1_0UpdateEnrollmentStatusCommand = exports.serializeAws_json1_0GetRecommendationSummariesCommand = exports.serializeAws_json1_0GetLambdaFunctionRecommendationsCommand = exports.serializeAws_json1_0GetEnrollmentStatusCommand = exports.serializeAws_json1_0GetEC2RecommendationProjectedMetricsCommand = exports.serializeAws_json1_0GetEC2InstanceRecommendationsCommand = exports.serializeAws_json1_0GetEBSVolumeRecommendationsCommand = exports.serializeAws_json1_0GetAutoScalingGroupRecommendationsCommand = exports.serializeAws_json1_0ExportLambdaFunctionRecommendationsCommand = exports.serializeAws_json1_0ExportEC2InstanceRecommendationsCommand = exports.serializeAws_json1_0ExportEBSVolumeRecommendationsCommand = exports.serializeAws_json1_0ExportAutoScalingGroupRecommendationsCommand = exports.serializeAws_json1_0DescribeRecommendationExportJobsCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_0DescribeRecommendationExportJobsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "ComputeOptimizerService.DescribeRecommendationExportJobs",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeRecommendationExportJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DescribeRecommendationExportJobsCommand = serializeAws_json1_0DescribeRecommendationExportJobsCommand;
const serializeAws_json1_0ExportAutoScalingGroupRecommendationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "ComputeOptimizerService.ExportAutoScalingGroupRecommendations",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ExportAutoScalingGroupRecommendationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ExportAutoScalingGroupRecommendationsCommand = serializeAws_json1_0ExportAutoScalingGroupRecommendationsCommand;
const serializeAws_json1_0ExportEBSVolumeRecommendationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "ComputeOptimizerService.ExportEBSVolumeRecommendations",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ExportEBSVolumeRecommendationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ExportEBSVolumeRecommendationsCommand = serializeAws_json1_0ExportEBSVolumeRecommendationsCommand;
const serializeAws_json1_0ExportEC2InstanceRecommendationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "ComputeOptimizerService.ExportEC2InstanceRecommendations",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ExportEC2InstanceRecommendationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ExportEC2InstanceRecommendationsCommand = serializeAws_json1_0ExportEC2InstanceRecommendationsCommand;
const serializeAws_json1_0ExportLambdaFunctionRecommendationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "ComputeOptimizerService.ExportLambdaFunctionRecommendations",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ExportLambdaFunctionRecommendationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ExportLambdaFunctionRecommendationsCommand = serializeAws_json1_0ExportLambdaFunctionRecommendationsCommand;
const serializeAws_json1_0GetAutoScalingGroupRecommendationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "ComputeOptimizerService.GetAutoScalingGroupRecommendations",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0GetAutoScalingGroupRecommendationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0GetAutoScalingGroupRecommendationsCommand = serializeAws_json1_0GetAutoScalingGroupRecommendationsCommand;
const serializeAws_json1_0GetEBSVolumeRecommendationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "ComputeOptimizerService.GetEBSVolumeRecommendations",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0GetEBSVolumeRecommendationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0GetEBSVolumeRecommendationsCommand = serializeAws_json1_0GetEBSVolumeRecommendationsCommand;
const serializeAws_json1_0GetEC2InstanceRecommendationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "ComputeOptimizerService.GetEC2InstanceRecommendations",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0GetEC2InstanceRecommendationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0GetEC2InstanceRecommendationsCommand = serializeAws_json1_0GetEC2InstanceRecommendationsCommand;
const serializeAws_json1_0GetEC2RecommendationProjectedMetricsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "ComputeOptimizerService.GetEC2RecommendationProjectedMetrics",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0GetEC2RecommendationProjectedMetricsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0GetEC2RecommendationProjectedMetricsCommand = serializeAws_json1_0GetEC2RecommendationProjectedMetricsCommand;
const serializeAws_json1_0GetEnrollmentStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "ComputeOptimizerService.GetEnrollmentStatus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0GetEnrollmentStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0GetEnrollmentStatusCommand = serializeAws_json1_0GetEnrollmentStatusCommand;
const serializeAws_json1_0GetLambdaFunctionRecommendationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "ComputeOptimizerService.GetLambdaFunctionRecommendations",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0GetLambdaFunctionRecommendationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0GetLambdaFunctionRecommendationsCommand = serializeAws_json1_0GetLambdaFunctionRecommendationsCommand;
const serializeAws_json1_0GetRecommendationSummariesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "ComputeOptimizerService.GetRecommendationSummaries",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0GetRecommendationSummariesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0GetRecommendationSummariesCommand = serializeAws_json1_0GetRecommendationSummariesCommand;
const serializeAws_json1_0UpdateEnrollmentStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "ComputeOptimizerService.UpdateEnrollmentStatus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0UpdateEnrollmentStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0UpdateEnrollmentStatusCommand = serializeAws_json1_0UpdateEnrollmentStatusCommand;
const deserializeAws_json1_0DescribeRecommendationExportJobsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DescribeRecommendationExportJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeRecommendationExportJobsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DescribeRecommendationExportJobsCommand = deserializeAws_json1_0DescribeRecommendationExportJobsCommand;
const deserializeAws_json1_0DescribeRecommendationExportJobsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.computeoptimizer#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.computeoptimizer#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingAuthenticationToken":
        case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
            response = {
                ...(await deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OptInRequiredException":
        case "com.amazonaws.computeoptimizer#OptInRequiredException":
            response = {
                ...(await deserializeAws_json1_0OptInRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.computeoptimizer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.computeoptimizer#ThrottlingException":
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
const deserializeAws_json1_0ExportAutoScalingGroupRecommendationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0ExportAutoScalingGroupRecommendationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ExportAutoScalingGroupRecommendationsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0ExportAutoScalingGroupRecommendationsCommand = deserializeAws_json1_0ExportAutoScalingGroupRecommendationsCommand;
const deserializeAws_json1_0ExportAutoScalingGroupRecommendationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.computeoptimizer#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.computeoptimizer#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.computeoptimizer#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingAuthenticationToken":
        case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
            response = {
                ...(await deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OptInRequiredException":
        case "com.amazonaws.computeoptimizer#OptInRequiredException":
            response = {
                ...(await deserializeAws_json1_0OptInRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.computeoptimizer#ThrottlingException":
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
const deserializeAws_json1_0ExportEBSVolumeRecommendationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0ExportEBSVolumeRecommendationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ExportEBSVolumeRecommendationsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0ExportEBSVolumeRecommendationsCommand = deserializeAws_json1_0ExportEBSVolumeRecommendationsCommand;
const deserializeAws_json1_0ExportEBSVolumeRecommendationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.computeoptimizer#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.computeoptimizer#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.computeoptimizer#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingAuthenticationToken":
        case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
            response = {
                ...(await deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OptInRequiredException":
        case "com.amazonaws.computeoptimizer#OptInRequiredException":
            response = {
                ...(await deserializeAws_json1_0OptInRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.computeoptimizer#ThrottlingException":
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
const deserializeAws_json1_0ExportEC2InstanceRecommendationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0ExportEC2InstanceRecommendationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ExportEC2InstanceRecommendationsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0ExportEC2InstanceRecommendationsCommand = deserializeAws_json1_0ExportEC2InstanceRecommendationsCommand;
const deserializeAws_json1_0ExportEC2InstanceRecommendationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.computeoptimizer#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.computeoptimizer#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.computeoptimizer#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingAuthenticationToken":
        case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
            response = {
                ...(await deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OptInRequiredException":
        case "com.amazonaws.computeoptimizer#OptInRequiredException":
            response = {
                ...(await deserializeAws_json1_0OptInRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.computeoptimizer#ThrottlingException":
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
const deserializeAws_json1_0ExportLambdaFunctionRecommendationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0ExportLambdaFunctionRecommendationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ExportLambdaFunctionRecommendationsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0ExportLambdaFunctionRecommendationsCommand = deserializeAws_json1_0ExportLambdaFunctionRecommendationsCommand;
const deserializeAws_json1_0ExportLambdaFunctionRecommendationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.computeoptimizer#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.computeoptimizer#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.computeoptimizer#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingAuthenticationToken":
        case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
            response = {
                ...(await deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OptInRequiredException":
        case "com.amazonaws.computeoptimizer#OptInRequiredException":
            response = {
                ...(await deserializeAws_json1_0OptInRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.computeoptimizer#ThrottlingException":
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
const deserializeAws_json1_0GetAutoScalingGroupRecommendationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0GetAutoScalingGroupRecommendationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0GetAutoScalingGroupRecommendationsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0GetAutoScalingGroupRecommendationsCommand = deserializeAws_json1_0GetAutoScalingGroupRecommendationsCommand;
const deserializeAws_json1_0GetAutoScalingGroupRecommendationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.computeoptimizer#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.computeoptimizer#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingAuthenticationToken":
        case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
            response = {
                ...(await deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OptInRequiredException":
        case "com.amazonaws.computeoptimizer#OptInRequiredException":
            response = {
                ...(await deserializeAws_json1_0OptInRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.computeoptimizer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.computeoptimizer#ThrottlingException":
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
const deserializeAws_json1_0GetEBSVolumeRecommendationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0GetEBSVolumeRecommendationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0GetEBSVolumeRecommendationsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0GetEBSVolumeRecommendationsCommand = deserializeAws_json1_0GetEBSVolumeRecommendationsCommand;
const deserializeAws_json1_0GetEBSVolumeRecommendationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.computeoptimizer#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.computeoptimizer#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingAuthenticationToken":
        case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
            response = {
                ...(await deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OptInRequiredException":
        case "com.amazonaws.computeoptimizer#OptInRequiredException":
            response = {
                ...(await deserializeAws_json1_0OptInRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.computeoptimizer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.computeoptimizer#ThrottlingException":
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
const deserializeAws_json1_0GetEC2InstanceRecommendationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0GetEC2InstanceRecommendationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0GetEC2InstanceRecommendationsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0GetEC2InstanceRecommendationsCommand = deserializeAws_json1_0GetEC2InstanceRecommendationsCommand;
const deserializeAws_json1_0GetEC2InstanceRecommendationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.computeoptimizer#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.computeoptimizer#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingAuthenticationToken":
        case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
            response = {
                ...(await deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OptInRequiredException":
        case "com.amazonaws.computeoptimizer#OptInRequiredException":
            response = {
                ...(await deserializeAws_json1_0OptInRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.computeoptimizer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.computeoptimizer#ThrottlingException":
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
const deserializeAws_json1_0GetEC2RecommendationProjectedMetricsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0GetEC2RecommendationProjectedMetricsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0GetEC2RecommendationProjectedMetricsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0GetEC2RecommendationProjectedMetricsCommand = deserializeAws_json1_0GetEC2RecommendationProjectedMetricsCommand;
const deserializeAws_json1_0GetEC2RecommendationProjectedMetricsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.computeoptimizer#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.computeoptimizer#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingAuthenticationToken":
        case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
            response = {
                ...(await deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OptInRequiredException":
        case "com.amazonaws.computeoptimizer#OptInRequiredException":
            response = {
                ...(await deserializeAws_json1_0OptInRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.computeoptimizer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.computeoptimizer#ThrottlingException":
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
const deserializeAws_json1_0GetEnrollmentStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0GetEnrollmentStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0GetEnrollmentStatusResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0GetEnrollmentStatusCommand = deserializeAws_json1_0GetEnrollmentStatusCommand;
const deserializeAws_json1_0GetEnrollmentStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.computeoptimizer#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.computeoptimizer#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingAuthenticationToken":
        case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
            response = {
                ...(await deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.computeoptimizer#ThrottlingException":
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
const deserializeAws_json1_0GetLambdaFunctionRecommendationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0GetLambdaFunctionRecommendationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0GetLambdaFunctionRecommendationsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0GetLambdaFunctionRecommendationsCommand = deserializeAws_json1_0GetLambdaFunctionRecommendationsCommand;
const deserializeAws_json1_0GetLambdaFunctionRecommendationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.computeoptimizer#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.computeoptimizer#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.computeoptimizer#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingAuthenticationToken":
        case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
            response = {
                ...(await deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OptInRequiredException":
        case "com.amazonaws.computeoptimizer#OptInRequiredException":
            response = {
                ...(await deserializeAws_json1_0OptInRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.computeoptimizer#ThrottlingException":
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
const deserializeAws_json1_0GetRecommendationSummariesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0GetRecommendationSummariesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0GetRecommendationSummariesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0GetRecommendationSummariesCommand = deserializeAws_json1_0GetRecommendationSummariesCommand;
const deserializeAws_json1_0GetRecommendationSummariesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.computeoptimizer#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.computeoptimizer#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingAuthenticationToken":
        case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
            response = {
                ...(await deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OptInRequiredException":
        case "com.amazonaws.computeoptimizer#OptInRequiredException":
            response = {
                ...(await deserializeAws_json1_0OptInRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.computeoptimizer#ThrottlingException":
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
const deserializeAws_json1_0UpdateEnrollmentStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0UpdateEnrollmentStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0UpdateEnrollmentStatusResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0UpdateEnrollmentStatusCommand = deserializeAws_json1_0UpdateEnrollmentStatusCommand;
const deserializeAws_json1_0UpdateEnrollmentStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.computeoptimizer#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.computeoptimizer#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingAuthenticationToken":
        case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
            response = {
                ...(await deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.computeoptimizer#ThrottlingException":
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
const deserializeAws_json1_0InvalidParameterValueExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0InvalidParameterValueException(body, context);
    const contents = {
        name: "InvalidParameterValueException",
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
const deserializeAws_json1_0MissingAuthenticationTokenResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0MissingAuthenticationToken(body, context);
    const contents = {
        name: "MissingAuthenticationToken",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0OptInRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0OptInRequiredException(body, context);
    const contents = {
        name: "OptInRequiredException",
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
const deserializeAws_json1_0ServiceUnavailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ServiceUnavailableException(body, context);
    const contents = {
        name: "ServiceUnavailableException",
        $fault: "server",
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
const serializeAws_json1_0AccountIds = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_0AutoScalingGroupArns = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_0DescribeRecommendationExportJobsRequest = (input, context) => {
    return {
        ...(input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_json1_0JobFilters(input.filters, context) }),
        ...(input.jobIds !== undefined &&
            input.jobIds !== null && { jobIds: serializeAws_json1_0JobIds(input.jobIds, context) }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_0EBSFilter = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.values !== undefined &&
            input.values !== null && { values: serializeAws_json1_0FilterValues(input.values, context) }),
    };
};
const serializeAws_json1_0EBSFilters = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0EBSFilter(entry, context);
    });
};
const serializeAws_json1_0ExportableAutoScalingGroupFields = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_0ExportableInstanceFields = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_0ExportableLambdaFunctionFields = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_0ExportableVolumeFields = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_0ExportAutoScalingGroupRecommendationsRequest = (input, context) => {
    return {
        ...(input.accountIds !== undefined &&
            input.accountIds !== null && { accountIds: serializeAws_json1_0AccountIds(input.accountIds, context) }),
        ...(input.fieldsToExport !== undefined &&
            input.fieldsToExport !== null && {
            fieldsToExport: serializeAws_json1_0ExportableAutoScalingGroupFields(input.fieldsToExport, context),
        }),
        ...(input.fileFormat !== undefined && input.fileFormat !== null && { fileFormat: input.fileFormat }),
        ...(input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_json1_0Filters(input.filters, context) }),
        ...(input.includeMemberAccounts !== undefined &&
            input.includeMemberAccounts !== null && { includeMemberAccounts: input.includeMemberAccounts }),
        ...(input.s3DestinationConfig !== undefined &&
            input.s3DestinationConfig !== null && {
            s3DestinationConfig: serializeAws_json1_0S3DestinationConfig(input.s3DestinationConfig, context),
        }),
    };
};
const serializeAws_json1_0ExportEBSVolumeRecommendationsRequest = (input, context) => {
    return {
        ...(input.accountIds !== undefined &&
            input.accountIds !== null && { accountIds: serializeAws_json1_0AccountIds(input.accountIds, context) }),
        ...(input.fieldsToExport !== undefined &&
            input.fieldsToExport !== null && {
            fieldsToExport: serializeAws_json1_0ExportableVolumeFields(input.fieldsToExport, context),
        }),
        ...(input.fileFormat !== undefined && input.fileFormat !== null && { fileFormat: input.fileFormat }),
        ...(input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_json1_0EBSFilters(input.filters, context) }),
        ...(input.includeMemberAccounts !== undefined &&
            input.includeMemberAccounts !== null && { includeMemberAccounts: input.includeMemberAccounts }),
        ...(input.s3DestinationConfig !== undefined &&
            input.s3DestinationConfig !== null && {
            s3DestinationConfig: serializeAws_json1_0S3DestinationConfig(input.s3DestinationConfig, context),
        }),
    };
};
const serializeAws_json1_0ExportEC2InstanceRecommendationsRequest = (input, context) => {
    return {
        ...(input.accountIds !== undefined &&
            input.accountIds !== null && { accountIds: serializeAws_json1_0AccountIds(input.accountIds, context) }),
        ...(input.fieldsToExport !== undefined &&
            input.fieldsToExport !== null && {
            fieldsToExport: serializeAws_json1_0ExportableInstanceFields(input.fieldsToExport, context),
        }),
        ...(input.fileFormat !== undefined && input.fileFormat !== null && { fileFormat: input.fileFormat }),
        ...(input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_json1_0Filters(input.filters, context) }),
        ...(input.includeMemberAccounts !== undefined &&
            input.includeMemberAccounts !== null && { includeMemberAccounts: input.includeMemberAccounts }),
        ...(input.s3DestinationConfig !== undefined &&
            input.s3DestinationConfig !== null && {
            s3DestinationConfig: serializeAws_json1_0S3DestinationConfig(input.s3DestinationConfig, context),
        }),
    };
};
const serializeAws_json1_0ExportLambdaFunctionRecommendationsRequest = (input, context) => {
    return {
        ...(input.accountIds !== undefined &&
            input.accountIds !== null && { accountIds: serializeAws_json1_0AccountIds(input.accountIds, context) }),
        ...(input.fieldsToExport !== undefined &&
            input.fieldsToExport !== null && {
            fieldsToExport: serializeAws_json1_0ExportableLambdaFunctionFields(input.fieldsToExport, context),
        }),
        ...(input.fileFormat !== undefined && input.fileFormat !== null && { fileFormat: input.fileFormat }),
        ...(input.filters !== undefined &&
            input.filters !== null && {
            filters: serializeAws_json1_0LambdaFunctionRecommendationFilters(input.filters, context),
        }),
        ...(input.includeMemberAccounts !== undefined &&
            input.includeMemberAccounts !== null && { includeMemberAccounts: input.includeMemberAccounts }),
        ...(input.s3DestinationConfig !== undefined &&
            input.s3DestinationConfig !== null && {
            s3DestinationConfig: serializeAws_json1_0S3DestinationConfig(input.s3DestinationConfig, context),
        }),
    };
};
const serializeAws_json1_0Filter = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.values !== undefined &&
            input.values !== null && { values: serializeAws_json1_0FilterValues(input.values, context) }),
    };
};
const serializeAws_json1_0Filters = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0Filter(entry, context);
    });
};
const serializeAws_json1_0FilterValues = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_0FunctionArns = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_0GetAutoScalingGroupRecommendationsRequest = (input, context) => {
    return {
        ...(input.accountIds !== undefined &&
            input.accountIds !== null && { accountIds: serializeAws_json1_0AccountIds(input.accountIds, context) }),
        ...(input.autoScalingGroupArns !== undefined &&
            input.autoScalingGroupArns !== null && {
            autoScalingGroupArns: serializeAws_json1_0AutoScalingGroupArns(input.autoScalingGroupArns, context),
        }),
        ...(input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_json1_0Filters(input.filters, context) }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_0GetEBSVolumeRecommendationsRequest = (input, context) => {
    return {
        ...(input.accountIds !== undefined &&
            input.accountIds !== null && { accountIds: serializeAws_json1_0AccountIds(input.accountIds, context) }),
        ...(input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_json1_0EBSFilters(input.filters, context) }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.volumeArns !== undefined &&
            input.volumeArns !== null && { volumeArns: serializeAws_json1_0VolumeArns(input.volumeArns, context) }),
    };
};
const serializeAws_json1_0GetEC2InstanceRecommendationsRequest = (input, context) => {
    return {
        ...(input.accountIds !== undefined &&
            input.accountIds !== null && { accountIds: serializeAws_json1_0AccountIds(input.accountIds, context) }),
        ...(input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_json1_0Filters(input.filters, context) }),
        ...(input.instanceArns !== undefined &&
            input.instanceArns !== null && { instanceArns: serializeAws_json1_0InstanceArns(input.instanceArns, context) }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_0GetEC2RecommendationProjectedMetricsRequest = (input, context) => {
    return {
        ...(input.endTime !== undefined &&
            input.endTime !== null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
        ...(input.instanceArn !== undefined && input.instanceArn !== null && { instanceArn: input.instanceArn }),
        ...(input.period !== undefined && input.period !== null && { period: input.period }),
        ...(input.startTime !== undefined &&
            input.startTime !== null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
        ...(input.stat !== undefined && input.stat !== null && { stat: input.stat }),
    };
};
const serializeAws_json1_0GetEnrollmentStatusRequest = (input, context) => {
    return {};
};
const serializeAws_json1_0GetLambdaFunctionRecommendationsRequest = (input, context) => {
    return {
        ...(input.accountIds !== undefined &&
            input.accountIds !== null && { accountIds: serializeAws_json1_0AccountIds(input.accountIds, context) }),
        ...(input.filters !== undefined &&
            input.filters !== null && {
            filters: serializeAws_json1_0LambdaFunctionRecommendationFilters(input.filters, context),
        }),
        ...(input.functionArns !== undefined &&
            input.functionArns !== null && { functionArns: serializeAws_json1_0FunctionArns(input.functionArns, context) }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_0GetRecommendationSummariesRequest = (input, context) => {
    return {
        ...(input.accountIds !== undefined &&
            input.accountIds !== null && { accountIds: serializeAws_json1_0AccountIds(input.accountIds, context) }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_0InstanceArns = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_0JobFilter = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.values !== undefined &&
            input.values !== null && { values: serializeAws_json1_0FilterValues(input.values, context) }),
    };
};
const serializeAws_json1_0JobFilters = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0JobFilter(entry, context);
    });
};
const serializeAws_json1_0JobIds = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_0LambdaFunctionRecommendationFilter = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.values !== undefined &&
            input.values !== null && { values: serializeAws_json1_0FilterValues(input.values, context) }),
    };
};
const serializeAws_json1_0LambdaFunctionRecommendationFilters = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0LambdaFunctionRecommendationFilter(entry, context);
    });
};
const serializeAws_json1_0S3DestinationConfig = (input, context) => {
    return {
        ...(input.bucket !== undefined && input.bucket !== null && { bucket: input.bucket }),
        ...(input.keyPrefix !== undefined && input.keyPrefix !== null && { keyPrefix: input.keyPrefix }),
    };
};
const serializeAws_json1_0UpdateEnrollmentStatusRequest = (input, context) => {
    return {
        ...(input.includeMemberAccounts !== undefined &&
            input.includeMemberAccounts !== null && { includeMemberAccounts: input.includeMemberAccounts }),
        ...(input.status !== undefined && input.status !== null && { status: input.status }),
    };
};
const serializeAws_json1_0VolumeArns = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_0AccessDeniedException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0AutoScalingGroupConfiguration = (output, context) => {
    return {
        desiredCapacity: output.desiredCapacity !== undefined && output.desiredCapacity !== null ? output.desiredCapacity : undefined,
        instanceType: output.instanceType !== undefined && output.instanceType !== null ? output.instanceType : undefined,
        maxSize: output.maxSize !== undefined && output.maxSize !== null ? output.maxSize : undefined,
        minSize: output.minSize !== undefined && output.minSize !== null ? output.minSize : undefined,
    };
};
const deserializeAws_json1_0AutoScalingGroupRecommendation = (output, context) => {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        autoScalingGroupArn: output.autoScalingGroupArn !== undefined && output.autoScalingGroupArn !== null
            ? output.autoScalingGroupArn
            : undefined,
        autoScalingGroupName: output.autoScalingGroupName !== undefined && output.autoScalingGroupName !== null
            ? output.autoScalingGroupName
            : undefined,
        currentConfiguration: output.currentConfiguration !== undefined && output.currentConfiguration !== null
            ? deserializeAws_json1_0AutoScalingGroupConfiguration(output.currentConfiguration, context)
            : undefined,
        finding: output.finding !== undefined && output.finding !== null ? output.finding : undefined,
        lastRefreshTimestamp: output.lastRefreshTimestamp !== undefined && output.lastRefreshTimestamp !== null
            ? new Date(Math.round(output.lastRefreshTimestamp * 1000))
            : undefined,
        lookBackPeriodInDays: output.lookBackPeriodInDays !== undefined && output.lookBackPeriodInDays !== null
            ? output.lookBackPeriodInDays
            : undefined,
        recommendationOptions: output.recommendationOptions !== undefined && output.recommendationOptions !== null
            ? deserializeAws_json1_0AutoScalingGroupRecommendationOptions(output.recommendationOptions, context)
            : undefined,
        utilizationMetrics: output.utilizationMetrics !== undefined && output.utilizationMetrics !== null
            ? deserializeAws_json1_0UtilizationMetrics(output.utilizationMetrics, context)
            : undefined,
    };
};
const deserializeAws_json1_0AutoScalingGroupRecommendationOption = (output, context) => {
    return {
        configuration: output.configuration !== undefined && output.configuration !== null
            ? deserializeAws_json1_0AutoScalingGroupConfiguration(output.configuration, context)
            : undefined,
        performanceRisk: output.performanceRisk !== undefined && output.performanceRisk !== null ? output.performanceRisk : undefined,
        projectedUtilizationMetrics: output.projectedUtilizationMetrics !== undefined && output.projectedUtilizationMetrics !== null
            ? deserializeAws_json1_0ProjectedUtilizationMetrics(output.projectedUtilizationMetrics, context)
            : undefined,
        rank: output.rank !== undefined && output.rank !== null ? output.rank : undefined,
    };
};
const deserializeAws_json1_0AutoScalingGroupRecommendationOptions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0AutoScalingGroupRecommendationOption(entry, context);
    });
};
const deserializeAws_json1_0AutoScalingGroupRecommendations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0AutoScalingGroupRecommendation(entry, context);
    });
};
const deserializeAws_json1_0DescribeRecommendationExportJobsResponse = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        recommendationExportJobs: output.recommendationExportJobs !== undefined && output.recommendationExportJobs !== null
            ? deserializeAws_json1_0RecommendationExportJobs(output.recommendationExportJobs, context)
            : undefined,
    };
};
const deserializeAws_json1_0EBSUtilizationMetric = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        statistic: output.statistic !== undefined && output.statistic !== null ? output.statistic : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_json1_0EBSUtilizationMetrics = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0EBSUtilizationMetric(entry, context);
    });
};
const deserializeAws_json1_0ExportAutoScalingGroupRecommendationsResponse = (output, context) => {
    return {
        jobId: output.jobId !== undefined && output.jobId !== null ? output.jobId : undefined,
        s3Destination: output.s3Destination !== undefined && output.s3Destination !== null
            ? deserializeAws_json1_0S3Destination(output.s3Destination, context)
            : undefined,
    };
};
const deserializeAws_json1_0ExportDestination = (output, context) => {
    return {
        s3: output.s3 !== undefined && output.s3 !== null
            ? deserializeAws_json1_0S3Destination(output.s3, context)
            : undefined,
    };
};
const deserializeAws_json1_0ExportEBSVolumeRecommendationsResponse = (output, context) => {
    return {
        jobId: output.jobId !== undefined && output.jobId !== null ? output.jobId : undefined,
        s3Destination: output.s3Destination !== undefined && output.s3Destination !== null
            ? deserializeAws_json1_0S3Destination(output.s3Destination, context)
            : undefined,
    };
};
const deserializeAws_json1_0ExportEC2InstanceRecommendationsResponse = (output, context) => {
    return {
        jobId: output.jobId !== undefined && output.jobId !== null ? output.jobId : undefined,
        s3Destination: output.s3Destination !== undefined && output.s3Destination !== null
            ? deserializeAws_json1_0S3Destination(output.s3Destination, context)
            : undefined,
    };
};
const deserializeAws_json1_0ExportLambdaFunctionRecommendationsResponse = (output, context) => {
    return {
        jobId: output.jobId !== undefined && output.jobId !== null ? output.jobId : undefined,
        s3Destination: output.s3Destination !== undefined && output.s3Destination !== null
            ? deserializeAws_json1_0S3Destination(output.s3Destination, context)
            : undefined,
    };
};
const deserializeAws_json1_0GetAutoScalingGroupRecommendationsResponse = (output, context) => {
    return {
        autoScalingGroupRecommendations: output.autoScalingGroupRecommendations !== undefined && output.autoScalingGroupRecommendations !== null
            ? deserializeAws_json1_0AutoScalingGroupRecommendations(output.autoScalingGroupRecommendations, context)
            : undefined,
        errors: output.errors !== undefined && output.errors !== null
            ? deserializeAws_json1_0GetRecommendationErrors(output.errors, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_0GetEBSVolumeRecommendationsResponse = (output, context) => {
    return {
        errors: output.errors !== undefined && output.errors !== null
            ? deserializeAws_json1_0GetRecommendationErrors(output.errors, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        volumeRecommendations: output.volumeRecommendations !== undefined && output.volumeRecommendations !== null
            ? deserializeAws_json1_0VolumeRecommendations(output.volumeRecommendations, context)
            : undefined,
    };
};
const deserializeAws_json1_0GetEC2InstanceRecommendationsResponse = (output, context) => {
    return {
        errors: output.errors !== undefined && output.errors !== null
            ? deserializeAws_json1_0GetRecommendationErrors(output.errors, context)
            : undefined,
        instanceRecommendations: output.instanceRecommendations !== undefined && output.instanceRecommendations !== null
            ? deserializeAws_json1_0InstanceRecommendations(output.instanceRecommendations, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_0GetEC2RecommendationProjectedMetricsResponse = (output, context) => {
    return {
        recommendedOptionProjectedMetrics: output.recommendedOptionProjectedMetrics !== undefined && output.recommendedOptionProjectedMetrics !== null
            ? deserializeAws_json1_0RecommendedOptionProjectedMetrics(output.recommendedOptionProjectedMetrics, context)
            : undefined,
    };
};
const deserializeAws_json1_0GetEnrollmentStatusResponse = (output, context) => {
    return {
        memberAccountsEnrolled: output.memberAccountsEnrolled !== undefined && output.memberAccountsEnrolled !== null
            ? output.memberAccountsEnrolled
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        statusReason: output.statusReason !== undefined && output.statusReason !== null ? output.statusReason : undefined,
    };
};
const deserializeAws_json1_0GetLambdaFunctionRecommendationsResponse = (output, context) => {
    return {
        lambdaFunctionRecommendations: output.lambdaFunctionRecommendations !== undefined && output.lambdaFunctionRecommendations !== null
            ? deserializeAws_json1_0LambdaFunctionRecommendations(output.lambdaFunctionRecommendations, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_0GetRecommendationError = (output, context) => {
    return {
        code: output.code !== undefined && output.code !== null ? output.code : undefined,
        identifier: output.identifier !== undefined && output.identifier !== null ? output.identifier : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0GetRecommendationErrors = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0GetRecommendationError(entry, context);
    });
};
const deserializeAws_json1_0GetRecommendationSummariesResponse = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        recommendationSummaries: output.recommendationSummaries !== undefined && output.recommendationSummaries !== null
            ? deserializeAws_json1_0RecommendationSummaries(output.recommendationSummaries, context)
            : undefined,
    };
};
const deserializeAws_json1_0InstanceRecommendation = (output, context) => {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        currentInstanceType: output.currentInstanceType !== undefined && output.currentInstanceType !== null
            ? output.currentInstanceType
            : undefined,
        finding: output.finding !== undefined && output.finding !== null ? output.finding : undefined,
        findingReasonCodes: output.findingReasonCodes !== undefined && output.findingReasonCodes !== null
            ? deserializeAws_json1_0InstanceRecommendationFindingReasonCodes(output.findingReasonCodes, context)
            : undefined,
        instanceArn: output.instanceArn !== undefined && output.instanceArn !== null ? output.instanceArn : undefined,
        instanceName: output.instanceName !== undefined && output.instanceName !== null ? output.instanceName : undefined,
        lastRefreshTimestamp: output.lastRefreshTimestamp !== undefined && output.lastRefreshTimestamp !== null
            ? new Date(Math.round(output.lastRefreshTimestamp * 1000))
            : undefined,
        lookBackPeriodInDays: output.lookBackPeriodInDays !== undefined && output.lookBackPeriodInDays !== null
            ? output.lookBackPeriodInDays
            : undefined,
        recommendationOptions: output.recommendationOptions !== undefined && output.recommendationOptions !== null
            ? deserializeAws_json1_0RecommendationOptions(output.recommendationOptions, context)
            : undefined,
        recommendationSources: output.recommendationSources !== undefined && output.recommendationSources !== null
            ? deserializeAws_json1_0RecommendationSources(output.recommendationSources, context)
            : undefined,
        utilizationMetrics: output.utilizationMetrics !== undefined && output.utilizationMetrics !== null
            ? deserializeAws_json1_0UtilizationMetrics(output.utilizationMetrics, context)
            : undefined,
    };
};
const deserializeAws_json1_0InstanceRecommendationFindingReasonCodes = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_0InstanceRecommendationOption = (output, context) => {
    return {
        instanceType: output.instanceType !== undefined && output.instanceType !== null ? output.instanceType : undefined,
        performanceRisk: output.performanceRisk !== undefined && output.performanceRisk !== null ? output.performanceRisk : undefined,
        platformDifferences: output.platformDifferences !== undefined && output.platformDifferences !== null
            ? deserializeAws_json1_0PlatformDifferences(output.platformDifferences, context)
            : undefined,
        projectedUtilizationMetrics: output.projectedUtilizationMetrics !== undefined && output.projectedUtilizationMetrics !== null
            ? deserializeAws_json1_0ProjectedUtilizationMetrics(output.projectedUtilizationMetrics, context)
            : undefined,
        rank: output.rank !== undefined && output.rank !== null ? output.rank : undefined,
    };
};
const deserializeAws_json1_0InstanceRecommendations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0InstanceRecommendation(entry, context);
    });
};
const deserializeAws_json1_0InternalServerException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0InvalidParameterValueException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0LambdaFunctionMemoryProjectedMetric = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        statistic: output.statistic !== undefined && output.statistic !== null ? output.statistic : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_json1_0LambdaFunctionMemoryProjectedMetrics = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0LambdaFunctionMemoryProjectedMetric(entry, context);
    });
};
const deserializeAws_json1_0LambdaFunctionMemoryRecommendationOption = (output, context) => {
    return {
        memorySize: output.memorySize !== undefined && output.memorySize !== null ? output.memorySize : undefined,
        projectedUtilizationMetrics: output.projectedUtilizationMetrics !== undefined && output.projectedUtilizationMetrics !== null
            ? deserializeAws_json1_0LambdaFunctionMemoryProjectedMetrics(output.projectedUtilizationMetrics, context)
            : undefined,
        rank: output.rank !== undefined && output.rank !== null ? output.rank : undefined,
    };
};
const deserializeAws_json1_0LambdaFunctionMemoryRecommendationOptions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0LambdaFunctionMemoryRecommendationOption(entry, context);
    });
};
const deserializeAws_json1_0LambdaFunctionRecommendation = (output, context) => {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        currentMemorySize: output.currentMemorySize !== undefined && output.currentMemorySize !== null
            ? output.currentMemorySize
            : undefined,
        finding: output.finding !== undefined && output.finding !== null ? output.finding : undefined,
        findingReasonCodes: output.findingReasonCodes !== undefined && output.findingReasonCodes !== null
            ? deserializeAws_json1_0LambdaFunctionRecommendationFindingReasonCodes(output.findingReasonCodes, context)
            : undefined,
        functionArn: output.functionArn !== undefined && output.functionArn !== null ? output.functionArn : undefined,
        functionVersion: output.functionVersion !== undefined && output.functionVersion !== null ? output.functionVersion : undefined,
        lastRefreshTimestamp: output.lastRefreshTimestamp !== undefined && output.lastRefreshTimestamp !== null
            ? new Date(Math.round(output.lastRefreshTimestamp * 1000))
            : undefined,
        lookbackPeriodInDays: output.lookbackPeriodInDays !== undefined && output.lookbackPeriodInDays !== null
            ? output.lookbackPeriodInDays
            : undefined,
        memorySizeRecommendationOptions: output.memorySizeRecommendationOptions !== undefined && output.memorySizeRecommendationOptions !== null
            ? deserializeAws_json1_0LambdaFunctionMemoryRecommendationOptions(output.memorySizeRecommendationOptions, context)
            : undefined,
        numberOfInvocations: output.numberOfInvocations !== undefined && output.numberOfInvocations !== null
            ? output.numberOfInvocations
            : undefined,
        utilizationMetrics: output.utilizationMetrics !== undefined && output.utilizationMetrics !== null
            ? deserializeAws_json1_0LambdaFunctionUtilizationMetrics(output.utilizationMetrics, context)
            : undefined,
    };
};
const deserializeAws_json1_0LambdaFunctionRecommendationFindingReasonCodes = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_0LambdaFunctionRecommendations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0LambdaFunctionRecommendation(entry, context);
    });
};
const deserializeAws_json1_0LambdaFunctionUtilizationMetric = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        statistic: output.statistic !== undefined && output.statistic !== null ? output.statistic : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_json1_0LambdaFunctionUtilizationMetrics = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0LambdaFunctionUtilizationMetric(entry, context);
    });
};
const deserializeAws_json1_0LimitExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0MetricValues = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_0MissingAuthenticationToken = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0OptInRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0PlatformDifferences = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_0ProjectedMetric = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        timestamps: output.timestamps !== undefined && output.timestamps !== null
            ? deserializeAws_json1_0Timestamps(output.timestamps, context)
            : undefined,
        values: output.values !== undefined && output.values !== null
            ? deserializeAws_json1_0MetricValues(output.values, context)
            : undefined,
    };
};
const deserializeAws_json1_0ProjectedMetrics = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0ProjectedMetric(entry, context);
    });
};
const deserializeAws_json1_0ProjectedUtilizationMetrics = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0UtilizationMetric(entry, context);
    });
};
const deserializeAws_json1_0ReasonCodeSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0ReasonCodeSummary(entry, context);
    });
};
const deserializeAws_json1_0ReasonCodeSummary = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_json1_0RecommendationExportJob = (output, context) => {
    return {
        creationTimestamp: output.creationTimestamp !== undefined && output.creationTimestamp !== null
            ? new Date(Math.round(output.creationTimestamp * 1000))
            : undefined,
        destination: output.destination !== undefined && output.destination !== null
            ? deserializeAws_json1_0ExportDestination(output.destination, context)
            : undefined,
        failureReason: output.failureReason !== undefined && output.failureReason !== null ? output.failureReason : undefined,
        jobId: output.jobId !== undefined && output.jobId !== null ? output.jobId : undefined,
        lastUpdatedTimestamp: output.lastUpdatedTimestamp !== undefined && output.lastUpdatedTimestamp !== null
            ? new Date(Math.round(output.lastUpdatedTimestamp * 1000))
            : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_json1_0RecommendationExportJobs = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0RecommendationExportJob(entry, context);
    });
};
const deserializeAws_json1_0RecommendationOptions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0InstanceRecommendationOption(entry, context);
    });
};
const deserializeAws_json1_0RecommendationSource = (output, context) => {
    return {
        recommendationSourceArn: output.recommendationSourceArn !== undefined && output.recommendationSourceArn !== null
            ? output.recommendationSourceArn
            : undefined,
        recommendationSourceType: output.recommendationSourceType !== undefined && output.recommendationSourceType !== null
            ? output.recommendationSourceType
            : undefined,
    };
};
const deserializeAws_json1_0RecommendationSources = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0RecommendationSource(entry, context);
    });
};
const deserializeAws_json1_0RecommendationSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0RecommendationSummary(entry, context);
    });
};
const deserializeAws_json1_0RecommendationSummary = (output, context) => {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        recommendationResourceType: output.recommendationResourceType !== undefined && output.recommendationResourceType !== null
            ? output.recommendationResourceType
            : undefined,
        summaries: output.summaries !== undefined && output.summaries !== null
            ? deserializeAws_json1_0Summaries(output.summaries, context)
            : undefined,
    };
};
const deserializeAws_json1_0RecommendedOptionProjectedMetric = (output, context) => {
    return {
        projectedMetrics: output.projectedMetrics !== undefined && output.projectedMetrics !== null
            ? deserializeAws_json1_0ProjectedMetrics(output.projectedMetrics, context)
            : undefined,
        rank: output.rank !== undefined && output.rank !== null ? output.rank : undefined,
        recommendedInstanceType: output.recommendedInstanceType !== undefined && output.recommendedInstanceType !== null
            ? output.recommendedInstanceType
            : undefined,
    };
};
const deserializeAws_json1_0RecommendedOptionProjectedMetrics = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0RecommendedOptionProjectedMetric(entry, context);
    });
};
const deserializeAws_json1_0ResourceNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0S3Destination = (output, context) => {
    return {
        bucket: output.bucket !== undefined && output.bucket !== null ? output.bucket : undefined,
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        metadataKey: output.metadataKey !== undefined && output.metadataKey !== null ? output.metadataKey : undefined,
    };
};
const deserializeAws_json1_0ServiceUnavailableException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0Summaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0Summary(entry, context);
    });
};
const deserializeAws_json1_0Summary = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        reasonCodeSummaries: output.reasonCodeSummaries !== undefined && output.reasonCodeSummaries !== null
            ? deserializeAws_json1_0ReasonCodeSummaries(output.reasonCodeSummaries, context)
            : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_json1_0ThrottlingException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0Timestamps = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return new Date(Math.round(entry * 1000));
    });
};
const deserializeAws_json1_0UpdateEnrollmentStatusResponse = (output, context) => {
    return {
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        statusReason: output.statusReason !== undefined && output.statusReason !== null ? output.statusReason : undefined,
    };
};
const deserializeAws_json1_0UtilizationMetric = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        statistic: output.statistic !== undefined && output.statistic !== null ? output.statistic : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_json1_0UtilizationMetrics = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0UtilizationMetric(entry, context);
    });
};
const deserializeAws_json1_0VolumeConfiguration = (output, context) => {
    return {
        volumeBaselineIOPS: output.volumeBaselineIOPS !== undefined && output.volumeBaselineIOPS !== null
            ? output.volumeBaselineIOPS
            : undefined,
        volumeBaselineThroughput: output.volumeBaselineThroughput !== undefined && output.volumeBaselineThroughput !== null
            ? output.volumeBaselineThroughput
            : undefined,
        volumeBurstIOPS: output.volumeBurstIOPS !== undefined && output.volumeBurstIOPS !== null ? output.volumeBurstIOPS : undefined,
        volumeBurstThroughput: output.volumeBurstThroughput !== undefined && output.volumeBurstThroughput !== null
            ? output.volumeBurstThroughput
            : undefined,
        volumeSize: output.volumeSize !== undefined && output.volumeSize !== null ? output.volumeSize : undefined,
        volumeType: output.volumeType !== undefined && output.volumeType !== null ? output.volumeType : undefined,
    };
};
const deserializeAws_json1_0VolumeRecommendation = (output, context) => {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        currentConfiguration: output.currentConfiguration !== undefined && output.currentConfiguration !== null
            ? deserializeAws_json1_0VolumeConfiguration(output.currentConfiguration, context)
            : undefined,
        finding: output.finding !== undefined && output.finding !== null ? output.finding : undefined,
        lastRefreshTimestamp: output.lastRefreshTimestamp !== undefined && output.lastRefreshTimestamp !== null
            ? new Date(Math.round(output.lastRefreshTimestamp * 1000))
            : undefined,
        lookBackPeriodInDays: output.lookBackPeriodInDays !== undefined && output.lookBackPeriodInDays !== null
            ? output.lookBackPeriodInDays
            : undefined,
        utilizationMetrics: output.utilizationMetrics !== undefined && output.utilizationMetrics !== null
            ? deserializeAws_json1_0EBSUtilizationMetrics(output.utilizationMetrics, context)
            : undefined,
        volumeArn: output.volumeArn !== undefined && output.volumeArn !== null ? output.volumeArn : undefined,
        volumeRecommendationOptions: output.volumeRecommendationOptions !== undefined && output.volumeRecommendationOptions !== null
            ? deserializeAws_json1_0VolumeRecommendationOptions(output.volumeRecommendationOptions, context)
            : undefined,
    };
};
const deserializeAws_json1_0VolumeRecommendationOption = (output, context) => {
    return {
        configuration: output.configuration !== undefined && output.configuration !== null
            ? deserializeAws_json1_0VolumeConfiguration(output.configuration, context)
            : undefined,
        performanceRisk: output.performanceRisk !== undefined && output.performanceRisk !== null ? output.performanceRisk : undefined,
        rank: output.rank !== undefined && output.rank !== null ? output.rank : undefined,
    };
};
const deserializeAws_json1_0VolumeRecommendationOptions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0VolumeRecommendationOption(entry, context);
    });
};
const deserializeAws_json1_0VolumeRecommendations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0VolumeRecommendation(entry, context);
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
//# sourceMappingURL=Aws_json1_0.js.map