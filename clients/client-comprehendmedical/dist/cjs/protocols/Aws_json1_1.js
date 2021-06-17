"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1StopRxNormInferenceJobCommand = exports.deserializeAws_json1_1StopPHIDetectionJobCommand = exports.deserializeAws_json1_1StopICD10CMInferenceJobCommand = exports.deserializeAws_json1_1StopEntitiesDetectionV2JobCommand = exports.deserializeAws_json1_1StartRxNormInferenceJobCommand = exports.deserializeAws_json1_1StartPHIDetectionJobCommand = exports.deserializeAws_json1_1StartICD10CMInferenceJobCommand = exports.deserializeAws_json1_1StartEntitiesDetectionV2JobCommand = exports.deserializeAws_json1_1ListRxNormInferenceJobsCommand = exports.deserializeAws_json1_1ListPHIDetectionJobsCommand = exports.deserializeAws_json1_1ListICD10CMInferenceJobsCommand = exports.deserializeAws_json1_1ListEntitiesDetectionV2JobsCommand = exports.deserializeAws_json1_1InferRxNormCommand = exports.deserializeAws_json1_1InferICD10CMCommand = exports.deserializeAws_json1_1DetectPHICommand = exports.deserializeAws_json1_1DetectEntitiesV2Command = exports.deserializeAws_json1_1DetectEntitiesCommand = exports.deserializeAws_json1_1DescribeRxNormInferenceJobCommand = exports.deserializeAws_json1_1DescribePHIDetectionJobCommand = exports.deserializeAws_json1_1DescribeICD10CMInferenceJobCommand = exports.deserializeAws_json1_1DescribeEntitiesDetectionV2JobCommand = exports.serializeAws_json1_1StopRxNormInferenceJobCommand = exports.serializeAws_json1_1StopPHIDetectionJobCommand = exports.serializeAws_json1_1StopICD10CMInferenceJobCommand = exports.serializeAws_json1_1StopEntitiesDetectionV2JobCommand = exports.serializeAws_json1_1StartRxNormInferenceJobCommand = exports.serializeAws_json1_1StartPHIDetectionJobCommand = exports.serializeAws_json1_1StartICD10CMInferenceJobCommand = exports.serializeAws_json1_1StartEntitiesDetectionV2JobCommand = exports.serializeAws_json1_1ListRxNormInferenceJobsCommand = exports.serializeAws_json1_1ListPHIDetectionJobsCommand = exports.serializeAws_json1_1ListICD10CMInferenceJobsCommand = exports.serializeAws_json1_1ListEntitiesDetectionV2JobsCommand = exports.serializeAws_json1_1InferRxNormCommand = exports.serializeAws_json1_1InferICD10CMCommand = exports.serializeAws_json1_1DetectPHICommand = exports.serializeAws_json1_1DetectEntitiesV2Command = exports.serializeAws_json1_1DetectEntitiesCommand = exports.serializeAws_json1_1DescribeRxNormInferenceJobCommand = exports.serializeAws_json1_1DescribePHIDetectionJobCommand = exports.serializeAws_json1_1DescribeICD10CMInferenceJobCommand = exports.serializeAws_json1_1DescribeEntitiesDetectionV2JobCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const uuid_1 = require("uuid");
const serializeAws_json1_1DescribeEntitiesDetectionV2JobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEntitiesDetectionV2JobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeEntitiesDetectionV2JobCommand = serializeAws_json1_1DescribeEntitiesDetectionV2JobCommand;
const serializeAws_json1_1DescribeICD10CMInferenceJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ComprehendMedical_20181030.DescribeICD10CMInferenceJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeICD10CMInferenceJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeICD10CMInferenceJobCommand = serializeAws_json1_1DescribeICD10CMInferenceJobCommand;
const serializeAws_json1_1DescribePHIDetectionJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ComprehendMedical_20181030.DescribePHIDetectionJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribePHIDetectionJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribePHIDetectionJobCommand = serializeAws_json1_1DescribePHIDetectionJobCommand;
const serializeAws_json1_1DescribeRxNormInferenceJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ComprehendMedical_20181030.DescribeRxNormInferenceJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeRxNormInferenceJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeRxNormInferenceJobCommand = serializeAws_json1_1DescribeRxNormInferenceJobCommand;
const serializeAws_json1_1DetectEntitiesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ComprehendMedical_20181030.DetectEntities",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DetectEntitiesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DetectEntitiesCommand = serializeAws_json1_1DetectEntitiesCommand;
const serializeAws_json1_1DetectEntitiesV2Command = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ComprehendMedical_20181030.DetectEntitiesV2",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DetectEntitiesV2Request(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DetectEntitiesV2Command = serializeAws_json1_1DetectEntitiesV2Command;
const serializeAws_json1_1DetectPHICommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ComprehendMedical_20181030.DetectPHI",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DetectPHIRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DetectPHICommand = serializeAws_json1_1DetectPHICommand;
const serializeAws_json1_1InferICD10CMCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ComprehendMedical_20181030.InferICD10CM",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1InferICD10CMRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1InferICD10CMCommand = serializeAws_json1_1InferICD10CMCommand;
const serializeAws_json1_1InferRxNormCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ComprehendMedical_20181030.InferRxNorm",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1InferRxNormRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1InferRxNormCommand = serializeAws_json1_1InferRxNormCommand;
const serializeAws_json1_1ListEntitiesDetectionV2JobsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ComprehendMedical_20181030.ListEntitiesDetectionV2Jobs",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListEntitiesDetectionV2JobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListEntitiesDetectionV2JobsCommand = serializeAws_json1_1ListEntitiesDetectionV2JobsCommand;
const serializeAws_json1_1ListICD10CMInferenceJobsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ComprehendMedical_20181030.ListICD10CMInferenceJobs",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListICD10CMInferenceJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListICD10CMInferenceJobsCommand = serializeAws_json1_1ListICD10CMInferenceJobsCommand;
const serializeAws_json1_1ListPHIDetectionJobsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ComprehendMedical_20181030.ListPHIDetectionJobs",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListPHIDetectionJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListPHIDetectionJobsCommand = serializeAws_json1_1ListPHIDetectionJobsCommand;
const serializeAws_json1_1ListRxNormInferenceJobsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ComprehendMedical_20181030.ListRxNormInferenceJobs",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListRxNormInferenceJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListRxNormInferenceJobsCommand = serializeAws_json1_1ListRxNormInferenceJobsCommand;
const serializeAws_json1_1StartEntitiesDetectionV2JobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ComprehendMedical_20181030.StartEntitiesDetectionV2Job",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartEntitiesDetectionV2JobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartEntitiesDetectionV2JobCommand = serializeAws_json1_1StartEntitiesDetectionV2JobCommand;
const serializeAws_json1_1StartICD10CMInferenceJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ComprehendMedical_20181030.StartICD10CMInferenceJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartICD10CMInferenceJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartICD10CMInferenceJobCommand = serializeAws_json1_1StartICD10CMInferenceJobCommand;
const serializeAws_json1_1StartPHIDetectionJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ComprehendMedical_20181030.StartPHIDetectionJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartPHIDetectionJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartPHIDetectionJobCommand = serializeAws_json1_1StartPHIDetectionJobCommand;
const serializeAws_json1_1StartRxNormInferenceJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ComprehendMedical_20181030.StartRxNormInferenceJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartRxNormInferenceJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartRxNormInferenceJobCommand = serializeAws_json1_1StartRxNormInferenceJobCommand;
const serializeAws_json1_1StopEntitiesDetectionV2JobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ComprehendMedical_20181030.StopEntitiesDetectionV2Job",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StopEntitiesDetectionV2JobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopEntitiesDetectionV2JobCommand = serializeAws_json1_1StopEntitiesDetectionV2JobCommand;
const serializeAws_json1_1StopICD10CMInferenceJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ComprehendMedical_20181030.StopICD10CMInferenceJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StopICD10CMInferenceJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopICD10CMInferenceJobCommand = serializeAws_json1_1StopICD10CMInferenceJobCommand;
const serializeAws_json1_1StopPHIDetectionJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ComprehendMedical_20181030.StopPHIDetectionJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StopPHIDetectionJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopPHIDetectionJobCommand = serializeAws_json1_1StopPHIDetectionJobCommand;
const serializeAws_json1_1StopRxNormInferenceJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ComprehendMedical_20181030.StopRxNormInferenceJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StopRxNormInferenceJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopRxNormInferenceJobCommand = serializeAws_json1_1StopRxNormInferenceJobCommand;
const deserializeAws_json1_1DescribeEntitiesDetectionV2JobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeEntitiesDetectionV2JobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEntitiesDetectionV2JobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeEntitiesDetectionV2JobCommand = deserializeAws_json1_1DescribeEntitiesDetectionV2JobCommand;
const deserializeAws_json1_1DescribeEntitiesDetectionV2JobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehendmedical#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehendmedical#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehendmedical#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeICD10CMInferenceJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeICD10CMInferenceJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeICD10CMInferenceJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeICD10CMInferenceJobCommand = deserializeAws_json1_1DescribeICD10CMInferenceJobCommand;
const deserializeAws_json1_1DescribeICD10CMInferenceJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehendmedical#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehendmedical#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehendmedical#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribePHIDetectionJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribePHIDetectionJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribePHIDetectionJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribePHIDetectionJobCommand = deserializeAws_json1_1DescribePHIDetectionJobCommand;
const deserializeAws_json1_1DescribePHIDetectionJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehendmedical#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehendmedical#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehendmedical#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeRxNormInferenceJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeRxNormInferenceJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeRxNormInferenceJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeRxNormInferenceJobCommand = deserializeAws_json1_1DescribeRxNormInferenceJobCommand;
const deserializeAws_json1_1DescribeRxNormInferenceJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehendmedical#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehendmedical#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehendmedical#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DetectEntitiesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DetectEntitiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DetectEntitiesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DetectEntitiesCommand = deserializeAws_json1_1DetectEntitiesCommand;
const deserializeAws_json1_1DetectEntitiesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehendmedical#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEncodingException":
        case "com.amazonaws.comprehendmedical#InvalidEncodingException":
            response = {
                ...(await deserializeAws_json1_1InvalidEncodingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehendmedical#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.comprehendmedical#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TextSizeLimitExceededException":
        case "com.amazonaws.comprehendmedical#TextSizeLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehendmedical#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DetectEntitiesV2Command = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DetectEntitiesV2CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DetectEntitiesV2Response(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DetectEntitiesV2Command = deserializeAws_json1_1DetectEntitiesV2Command;
const deserializeAws_json1_1DetectEntitiesV2CommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehendmedical#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEncodingException":
        case "com.amazonaws.comprehendmedical#InvalidEncodingException":
            response = {
                ...(await deserializeAws_json1_1InvalidEncodingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehendmedical#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.comprehendmedical#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TextSizeLimitExceededException":
        case "com.amazonaws.comprehendmedical#TextSizeLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehendmedical#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DetectPHICommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DetectPHICommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DetectPHIResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DetectPHICommand = deserializeAws_json1_1DetectPHICommand;
const deserializeAws_json1_1DetectPHICommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehendmedical#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEncodingException":
        case "com.amazonaws.comprehendmedical#InvalidEncodingException":
            response = {
                ...(await deserializeAws_json1_1InvalidEncodingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehendmedical#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.comprehendmedical#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TextSizeLimitExceededException":
        case "com.amazonaws.comprehendmedical#TextSizeLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehendmedical#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1InferICD10CMCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1InferICD10CMCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1InferICD10CMResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1InferICD10CMCommand = deserializeAws_json1_1InferICD10CMCommand;
const deserializeAws_json1_1InferICD10CMCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehendmedical#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEncodingException":
        case "com.amazonaws.comprehendmedical#InvalidEncodingException":
            response = {
                ...(await deserializeAws_json1_1InvalidEncodingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehendmedical#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.comprehendmedical#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TextSizeLimitExceededException":
        case "com.amazonaws.comprehendmedical#TextSizeLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehendmedical#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1InferRxNormCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1InferRxNormCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1InferRxNormResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1InferRxNormCommand = deserializeAws_json1_1InferRxNormCommand;
const deserializeAws_json1_1InferRxNormCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehendmedical#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEncodingException":
        case "com.amazonaws.comprehendmedical#InvalidEncodingException":
            response = {
                ...(await deserializeAws_json1_1InvalidEncodingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehendmedical#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.comprehendmedical#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TextSizeLimitExceededException":
        case "com.amazonaws.comprehendmedical#TextSizeLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehendmedical#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListEntitiesDetectionV2JobsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListEntitiesDetectionV2JobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListEntitiesDetectionV2JobsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListEntitiesDetectionV2JobsCommand = deserializeAws_json1_1ListEntitiesDetectionV2JobsCommand;
const deserializeAws_json1_1ListEntitiesDetectionV2JobsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehendmedical#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehendmedical#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehendmedical#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.comprehendmedical#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListICD10CMInferenceJobsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListICD10CMInferenceJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListICD10CMInferenceJobsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListICD10CMInferenceJobsCommand = deserializeAws_json1_1ListICD10CMInferenceJobsCommand;
const deserializeAws_json1_1ListICD10CMInferenceJobsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehendmedical#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehendmedical#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehendmedical#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.comprehendmedical#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListPHIDetectionJobsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListPHIDetectionJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListPHIDetectionJobsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListPHIDetectionJobsCommand = deserializeAws_json1_1ListPHIDetectionJobsCommand;
const deserializeAws_json1_1ListPHIDetectionJobsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehendmedical#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehendmedical#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehendmedical#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.comprehendmedical#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListRxNormInferenceJobsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListRxNormInferenceJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListRxNormInferenceJobsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListRxNormInferenceJobsCommand = deserializeAws_json1_1ListRxNormInferenceJobsCommand;
const deserializeAws_json1_1ListRxNormInferenceJobsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehendmedical#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehendmedical#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehendmedical#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.comprehendmedical#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StartEntitiesDetectionV2JobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartEntitiesDetectionV2JobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartEntitiesDetectionV2JobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartEntitiesDetectionV2JobCommand = deserializeAws_json1_1StartEntitiesDetectionV2JobCommand;
const deserializeAws_json1_1StartEntitiesDetectionV2JobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehendmedical#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehendmedical#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehendmedical#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StartICD10CMInferenceJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartICD10CMInferenceJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartICD10CMInferenceJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartICD10CMInferenceJobCommand = deserializeAws_json1_1StartICD10CMInferenceJobCommand;
const deserializeAws_json1_1StartICD10CMInferenceJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehendmedical#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehendmedical#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehendmedical#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StartPHIDetectionJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartPHIDetectionJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartPHIDetectionJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartPHIDetectionJobCommand = deserializeAws_json1_1StartPHIDetectionJobCommand;
const deserializeAws_json1_1StartPHIDetectionJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehendmedical#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehendmedical#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehendmedical#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StartRxNormInferenceJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartRxNormInferenceJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartRxNormInferenceJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartRxNormInferenceJobCommand = deserializeAws_json1_1StartRxNormInferenceJobCommand;
const deserializeAws_json1_1StartRxNormInferenceJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehendmedical#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehendmedical#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehendmedical#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StopEntitiesDetectionV2JobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StopEntitiesDetectionV2JobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopEntitiesDetectionV2JobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopEntitiesDetectionV2JobCommand = deserializeAws_json1_1StopEntitiesDetectionV2JobCommand;
const deserializeAws_json1_1StopEntitiesDetectionV2JobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehendmedical#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehendmedical#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
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
const deserializeAws_json1_1StopICD10CMInferenceJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StopICD10CMInferenceJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopICD10CMInferenceJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopICD10CMInferenceJobCommand = deserializeAws_json1_1StopICD10CMInferenceJobCommand;
const deserializeAws_json1_1StopICD10CMInferenceJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehendmedical#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehendmedical#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
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
const deserializeAws_json1_1StopPHIDetectionJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StopPHIDetectionJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopPHIDetectionJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopPHIDetectionJobCommand = deserializeAws_json1_1StopPHIDetectionJobCommand;
const deserializeAws_json1_1StopPHIDetectionJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehendmedical#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehendmedical#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
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
const deserializeAws_json1_1StopRxNormInferenceJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StopRxNormInferenceJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopRxNormInferenceJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopRxNormInferenceJobCommand = deserializeAws_json1_1StopRxNormInferenceJobCommand;
const deserializeAws_json1_1StopRxNormInferenceJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehendmedical#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehendmedical#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
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
const deserializeAws_json1_1InvalidEncodingExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidEncodingException(body, context);
    const contents = {
        name: "InvalidEncodingException",
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
const deserializeAws_json1_1TextSizeLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TextSizeLimitExceededException(body, context);
    const contents = {
        name: "TextSizeLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TooManyRequestsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TooManyRequestsException(body, context);
    const contents = {
        name: "TooManyRequestsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ValidationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ValidationException(body, context);
    const contents = {
        name: "ValidationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1ComprehendMedicalAsyncJobFilter = (input, context) => {
    return {
        ...(input.JobName !== undefined && input.JobName !== null && { JobName: input.JobName }),
        ...(input.JobStatus !== undefined && input.JobStatus !== null && { JobStatus: input.JobStatus }),
        ...(input.SubmitTimeAfter !== undefined &&
            input.SubmitTimeAfter !== null && { SubmitTimeAfter: Math.round(input.SubmitTimeAfter.getTime() / 1000) }),
        ...(input.SubmitTimeBefore !== undefined &&
            input.SubmitTimeBefore !== null && { SubmitTimeBefore: Math.round(input.SubmitTimeBefore.getTime() / 1000) }),
    };
};
const serializeAws_json1_1DescribeEntitiesDetectionV2JobRequest = (input, context) => {
    return {
        ...(input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId }),
    };
};
const serializeAws_json1_1DescribeICD10CMInferenceJobRequest = (input, context) => {
    return {
        ...(input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId }),
    };
};
const serializeAws_json1_1DescribePHIDetectionJobRequest = (input, context) => {
    return {
        ...(input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId }),
    };
};
const serializeAws_json1_1DescribeRxNormInferenceJobRequest = (input, context) => {
    return {
        ...(input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId }),
    };
};
const serializeAws_json1_1DetectEntitiesRequest = (input, context) => {
    return {
        ...(input.Text !== undefined && input.Text !== null && { Text: input.Text }),
    };
};
const serializeAws_json1_1DetectEntitiesV2Request = (input, context) => {
    return {
        ...(input.Text !== undefined && input.Text !== null && { Text: input.Text }),
    };
};
const serializeAws_json1_1DetectPHIRequest = (input, context) => {
    return {
        ...(input.Text !== undefined && input.Text !== null && { Text: input.Text }),
    };
};
const serializeAws_json1_1InferICD10CMRequest = (input, context) => {
    return {
        ...(input.Text !== undefined && input.Text !== null && { Text: input.Text }),
    };
};
const serializeAws_json1_1InferRxNormRequest = (input, context) => {
    return {
        ...(input.Text !== undefined && input.Text !== null && { Text: input.Text }),
    };
};
const serializeAws_json1_1InputDataConfig = (input, context) => {
    return {
        ...(input.S3Bucket !== undefined && input.S3Bucket !== null && { S3Bucket: input.S3Bucket }),
        ...(input.S3Key !== undefined && input.S3Key !== null && { S3Key: input.S3Key }),
    };
};
const serializeAws_json1_1ListEntitiesDetectionV2JobsRequest = (input, context) => {
    return {
        ...(input.Filter !== undefined &&
            input.Filter !== null && { Filter: serializeAws_json1_1ComprehendMedicalAsyncJobFilter(input.Filter, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListICD10CMInferenceJobsRequest = (input, context) => {
    return {
        ...(input.Filter !== undefined &&
            input.Filter !== null && { Filter: serializeAws_json1_1ComprehendMedicalAsyncJobFilter(input.Filter, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListPHIDetectionJobsRequest = (input, context) => {
    return {
        ...(input.Filter !== undefined &&
            input.Filter !== null && { Filter: serializeAws_json1_1ComprehendMedicalAsyncJobFilter(input.Filter, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListRxNormInferenceJobsRequest = (input, context) => {
    return {
        ...(input.Filter !== undefined &&
            input.Filter !== null && { Filter: serializeAws_json1_1ComprehendMedicalAsyncJobFilter(input.Filter, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1OutputDataConfig = (input, context) => {
    return {
        ...(input.S3Bucket !== undefined && input.S3Bucket !== null && { S3Bucket: input.S3Bucket }),
        ...(input.S3Key !== undefined && input.S3Key !== null && { S3Key: input.S3Key }),
    };
};
const serializeAws_json1_1StartEntitiesDetectionV2JobRequest = (input, context) => {
    var _a;
    return {
        ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.DataAccessRoleArn !== undefined &&
            input.DataAccessRoleArn !== null && { DataAccessRoleArn: input.DataAccessRoleArn }),
        ...(input.InputDataConfig !== undefined &&
            input.InputDataConfig !== null && {
            InputDataConfig: serializeAws_json1_1InputDataConfig(input.InputDataConfig, context),
        }),
        ...(input.JobName !== undefined && input.JobName !== null && { JobName: input.JobName }),
        ...(input.KMSKey !== undefined && input.KMSKey !== null && { KMSKey: input.KMSKey }),
        ...(input.LanguageCode !== undefined && input.LanguageCode !== null && { LanguageCode: input.LanguageCode }),
        ...(input.OutputDataConfig !== undefined &&
            input.OutputDataConfig !== null && {
            OutputDataConfig: serializeAws_json1_1OutputDataConfig(input.OutputDataConfig, context),
        }),
    };
};
const serializeAws_json1_1StartICD10CMInferenceJobRequest = (input, context) => {
    var _a;
    return {
        ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.DataAccessRoleArn !== undefined &&
            input.DataAccessRoleArn !== null && { DataAccessRoleArn: input.DataAccessRoleArn }),
        ...(input.InputDataConfig !== undefined &&
            input.InputDataConfig !== null && {
            InputDataConfig: serializeAws_json1_1InputDataConfig(input.InputDataConfig, context),
        }),
        ...(input.JobName !== undefined && input.JobName !== null && { JobName: input.JobName }),
        ...(input.KMSKey !== undefined && input.KMSKey !== null && { KMSKey: input.KMSKey }),
        ...(input.LanguageCode !== undefined && input.LanguageCode !== null && { LanguageCode: input.LanguageCode }),
        ...(input.OutputDataConfig !== undefined &&
            input.OutputDataConfig !== null && {
            OutputDataConfig: serializeAws_json1_1OutputDataConfig(input.OutputDataConfig, context),
        }),
    };
};
const serializeAws_json1_1StartPHIDetectionJobRequest = (input, context) => {
    var _a;
    return {
        ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.DataAccessRoleArn !== undefined &&
            input.DataAccessRoleArn !== null && { DataAccessRoleArn: input.DataAccessRoleArn }),
        ...(input.InputDataConfig !== undefined &&
            input.InputDataConfig !== null && {
            InputDataConfig: serializeAws_json1_1InputDataConfig(input.InputDataConfig, context),
        }),
        ...(input.JobName !== undefined && input.JobName !== null && { JobName: input.JobName }),
        ...(input.KMSKey !== undefined && input.KMSKey !== null && { KMSKey: input.KMSKey }),
        ...(input.LanguageCode !== undefined && input.LanguageCode !== null && { LanguageCode: input.LanguageCode }),
        ...(input.OutputDataConfig !== undefined &&
            input.OutputDataConfig !== null && {
            OutputDataConfig: serializeAws_json1_1OutputDataConfig(input.OutputDataConfig, context),
        }),
    };
};
const serializeAws_json1_1StartRxNormInferenceJobRequest = (input, context) => {
    var _a;
    return {
        ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.DataAccessRoleArn !== undefined &&
            input.DataAccessRoleArn !== null && { DataAccessRoleArn: input.DataAccessRoleArn }),
        ...(input.InputDataConfig !== undefined &&
            input.InputDataConfig !== null && {
            InputDataConfig: serializeAws_json1_1InputDataConfig(input.InputDataConfig, context),
        }),
        ...(input.JobName !== undefined && input.JobName !== null && { JobName: input.JobName }),
        ...(input.KMSKey !== undefined && input.KMSKey !== null && { KMSKey: input.KMSKey }),
        ...(input.LanguageCode !== undefined && input.LanguageCode !== null && { LanguageCode: input.LanguageCode }),
        ...(input.OutputDataConfig !== undefined &&
            input.OutputDataConfig !== null && {
            OutputDataConfig: serializeAws_json1_1OutputDataConfig(input.OutputDataConfig, context),
        }),
    };
};
const serializeAws_json1_1StopEntitiesDetectionV2JobRequest = (input, context) => {
    return {
        ...(input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId }),
    };
};
const serializeAws_json1_1StopICD10CMInferenceJobRequest = (input, context) => {
    return {
        ...(input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId }),
    };
};
const serializeAws_json1_1StopPHIDetectionJobRequest = (input, context) => {
    return {
        ...(input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId }),
    };
};
const serializeAws_json1_1StopRxNormInferenceJobRequest = (input, context) => {
    return {
        ...(input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId }),
    };
};
const deserializeAws_json1_1Attribute = (output, context) => {
    return {
        BeginOffset: output.BeginOffset !== undefined && output.BeginOffset !== null ? output.BeginOffset : undefined,
        Category: output.Category !== undefined && output.Category !== null ? output.Category : undefined,
        EndOffset: output.EndOffset !== undefined && output.EndOffset !== null ? output.EndOffset : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        RelationshipScore: output.RelationshipScore !== undefined && output.RelationshipScore !== null
            ? output.RelationshipScore
            : undefined,
        RelationshipType: output.RelationshipType !== undefined && output.RelationshipType !== null ? output.RelationshipType : undefined,
        Score: output.Score !== undefined && output.Score !== null ? output.Score : undefined,
        Text: output.Text !== undefined && output.Text !== null ? output.Text : undefined,
        Traits: output.Traits !== undefined && output.Traits !== null
            ? deserializeAws_json1_1TraitList(output.Traits, context)
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1AttributeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Attribute(entry, context);
    });
};
const deserializeAws_json1_1ComprehendMedicalAsyncJobProperties = (output, context) => {
    return {
        DataAccessRoleArn: output.DataAccessRoleArn !== undefined && output.DataAccessRoleArn !== null
            ? output.DataAccessRoleArn
            : undefined,
        EndTime: output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
        ExpirationTime: output.ExpirationTime !== undefined && output.ExpirationTime !== null
            ? new Date(Math.round(output.ExpirationTime * 1000))
            : undefined,
        InputDataConfig: output.InputDataConfig !== undefined && output.InputDataConfig !== null
            ? deserializeAws_json1_1InputDataConfig(output.InputDataConfig, context)
            : undefined,
        JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
        JobName: output.JobName !== undefined && output.JobName !== null ? output.JobName : undefined,
        JobStatus: output.JobStatus !== undefined && output.JobStatus !== null ? output.JobStatus : undefined,
        KMSKey: output.KMSKey !== undefined && output.KMSKey !== null ? output.KMSKey : undefined,
        LanguageCode: output.LanguageCode !== undefined && output.LanguageCode !== null ? output.LanguageCode : undefined,
        ManifestFilePath: output.ManifestFilePath !== undefined && output.ManifestFilePath !== null ? output.ManifestFilePath : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        ModelVersion: output.ModelVersion !== undefined && output.ModelVersion !== null ? output.ModelVersion : undefined,
        OutputDataConfig: output.OutputDataConfig !== undefined && output.OutputDataConfig !== null
            ? deserializeAws_json1_1OutputDataConfig(output.OutputDataConfig, context)
            : undefined,
        SubmitTime: output.SubmitTime !== undefined && output.SubmitTime !== null
            ? new Date(Math.round(output.SubmitTime * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1ComprehendMedicalAsyncJobPropertiesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ComprehendMedicalAsyncJobProperties(entry, context);
    });
};
const deserializeAws_json1_1DescribeEntitiesDetectionV2JobResponse = (output, context) => {
    return {
        ComprehendMedicalAsyncJobProperties: output.ComprehendMedicalAsyncJobProperties !== undefined && output.ComprehendMedicalAsyncJobProperties !== null
            ? deserializeAws_json1_1ComprehendMedicalAsyncJobProperties(output.ComprehendMedicalAsyncJobProperties, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeICD10CMInferenceJobResponse = (output, context) => {
    return {
        ComprehendMedicalAsyncJobProperties: output.ComprehendMedicalAsyncJobProperties !== undefined && output.ComprehendMedicalAsyncJobProperties !== null
            ? deserializeAws_json1_1ComprehendMedicalAsyncJobProperties(output.ComprehendMedicalAsyncJobProperties, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribePHIDetectionJobResponse = (output, context) => {
    return {
        ComprehendMedicalAsyncJobProperties: output.ComprehendMedicalAsyncJobProperties !== undefined && output.ComprehendMedicalAsyncJobProperties !== null
            ? deserializeAws_json1_1ComprehendMedicalAsyncJobProperties(output.ComprehendMedicalAsyncJobProperties, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeRxNormInferenceJobResponse = (output, context) => {
    return {
        ComprehendMedicalAsyncJobProperties: output.ComprehendMedicalAsyncJobProperties !== undefined && output.ComprehendMedicalAsyncJobProperties !== null
            ? deserializeAws_json1_1ComprehendMedicalAsyncJobProperties(output.ComprehendMedicalAsyncJobProperties, context)
            : undefined,
    };
};
const deserializeAws_json1_1DetectEntitiesResponse = (output, context) => {
    return {
        Entities: output.Entities !== undefined && output.Entities !== null
            ? deserializeAws_json1_1EntityList(output.Entities, context)
            : undefined,
        ModelVersion: output.ModelVersion !== undefined && output.ModelVersion !== null ? output.ModelVersion : undefined,
        PaginationToken: output.PaginationToken !== undefined && output.PaginationToken !== null ? output.PaginationToken : undefined,
        UnmappedAttributes: output.UnmappedAttributes !== undefined && output.UnmappedAttributes !== null
            ? deserializeAws_json1_1UnmappedAttributeList(output.UnmappedAttributes, context)
            : undefined,
    };
};
const deserializeAws_json1_1DetectEntitiesV2Response = (output, context) => {
    return {
        Entities: output.Entities !== undefined && output.Entities !== null
            ? deserializeAws_json1_1EntityList(output.Entities, context)
            : undefined,
        ModelVersion: output.ModelVersion !== undefined && output.ModelVersion !== null ? output.ModelVersion : undefined,
        PaginationToken: output.PaginationToken !== undefined && output.PaginationToken !== null ? output.PaginationToken : undefined,
        UnmappedAttributes: output.UnmappedAttributes !== undefined && output.UnmappedAttributes !== null
            ? deserializeAws_json1_1UnmappedAttributeList(output.UnmappedAttributes, context)
            : undefined,
    };
};
const deserializeAws_json1_1DetectPHIResponse = (output, context) => {
    return {
        Entities: output.Entities !== undefined && output.Entities !== null
            ? deserializeAws_json1_1EntityList(output.Entities, context)
            : undefined,
        ModelVersion: output.ModelVersion !== undefined && output.ModelVersion !== null ? output.ModelVersion : undefined,
        PaginationToken: output.PaginationToken !== undefined && output.PaginationToken !== null ? output.PaginationToken : undefined,
    };
};
const deserializeAws_json1_1Entity = (output, context) => {
    return {
        Attributes: output.Attributes !== undefined && output.Attributes !== null
            ? deserializeAws_json1_1AttributeList(output.Attributes, context)
            : undefined,
        BeginOffset: output.BeginOffset !== undefined && output.BeginOffset !== null ? output.BeginOffset : undefined,
        Category: output.Category !== undefined && output.Category !== null ? output.Category : undefined,
        EndOffset: output.EndOffset !== undefined && output.EndOffset !== null ? output.EndOffset : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Score: output.Score !== undefined && output.Score !== null ? output.Score : undefined,
        Text: output.Text !== undefined && output.Text !== null ? output.Text : undefined,
        Traits: output.Traits !== undefined && output.Traits !== null
            ? deserializeAws_json1_1TraitList(output.Traits, context)
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1EntityList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Entity(entry, context);
    });
};
const deserializeAws_json1_1ICD10CMAttribute = (output, context) => {
    return {
        BeginOffset: output.BeginOffset !== undefined && output.BeginOffset !== null ? output.BeginOffset : undefined,
        Category: output.Category !== undefined && output.Category !== null ? output.Category : undefined,
        EndOffset: output.EndOffset !== undefined && output.EndOffset !== null ? output.EndOffset : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        RelationshipScore: output.RelationshipScore !== undefined && output.RelationshipScore !== null
            ? output.RelationshipScore
            : undefined,
        RelationshipType: output.RelationshipType !== undefined && output.RelationshipType !== null ? output.RelationshipType : undefined,
        Score: output.Score !== undefined && output.Score !== null ? output.Score : undefined,
        Text: output.Text !== undefined && output.Text !== null ? output.Text : undefined,
        Traits: output.Traits !== undefined && output.Traits !== null
            ? deserializeAws_json1_1ICD10CMTraitList(output.Traits, context)
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1ICD10CMAttributeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ICD10CMAttribute(entry, context);
    });
};
const deserializeAws_json1_1ICD10CMConcept = (output, context) => {
    return {
        Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Score: output.Score !== undefined && output.Score !== null ? output.Score : undefined,
    };
};
const deserializeAws_json1_1ICD10CMConceptList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ICD10CMConcept(entry, context);
    });
};
const deserializeAws_json1_1ICD10CMEntity = (output, context) => {
    return {
        Attributes: output.Attributes !== undefined && output.Attributes !== null
            ? deserializeAws_json1_1ICD10CMAttributeList(output.Attributes, context)
            : undefined,
        BeginOffset: output.BeginOffset !== undefined && output.BeginOffset !== null ? output.BeginOffset : undefined,
        Category: output.Category !== undefined && output.Category !== null ? output.Category : undefined,
        EndOffset: output.EndOffset !== undefined && output.EndOffset !== null ? output.EndOffset : undefined,
        ICD10CMConcepts: output.ICD10CMConcepts !== undefined && output.ICD10CMConcepts !== null
            ? deserializeAws_json1_1ICD10CMConceptList(output.ICD10CMConcepts, context)
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Score: output.Score !== undefined && output.Score !== null ? output.Score : undefined,
        Text: output.Text !== undefined && output.Text !== null ? output.Text : undefined,
        Traits: output.Traits !== undefined && output.Traits !== null
            ? deserializeAws_json1_1ICD10CMTraitList(output.Traits, context)
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1ICD10CMEntityList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ICD10CMEntity(entry, context);
    });
};
const deserializeAws_json1_1ICD10CMTrait = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Score: output.Score !== undefined && output.Score !== null ? output.Score : undefined,
    };
};
const deserializeAws_json1_1ICD10CMTraitList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ICD10CMTrait(entry, context);
    });
};
const deserializeAws_json1_1InferICD10CMResponse = (output, context) => {
    return {
        Entities: output.Entities !== undefined && output.Entities !== null
            ? deserializeAws_json1_1ICD10CMEntityList(output.Entities, context)
            : undefined,
        ModelVersion: output.ModelVersion !== undefined && output.ModelVersion !== null ? output.ModelVersion : undefined,
        PaginationToken: output.PaginationToken !== undefined && output.PaginationToken !== null ? output.PaginationToken : undefined,
    };
};
const deserializeAws_json1_1InferRxNormResponse = (output, context) => {
    return {
        Entities: output.Entities !== undefined && output.Entities !== null
            ? deserializeAws_json1_1RxNormEntityList(output.Entities, context)
            : undefined,
        ModelVersion: output.ModelVersion !== undefined && output.ModelVersion !== null ? output.ModelVersion : undefined,
        PaginationToken: output.PaginationToken !== undefined && output.PaginationToken !== null ? output.PaginationToken : undefined,
    };
};
const deserializeAws_json1_1InputDataConfig = (output, context) => {
    return {
        S3Bucket: output.S3Bucket !== undefined && output.S3Bucket !== null ? output.S3Bucket : undefined,
        S3Key: output.S3Key !== undefined && output.S3Key !== null ? output.S3Key : undefined,
    };
};
const deserializeAws_json1_1InternalServerException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidEncodingException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidRequestException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ListEntitiesDetectionV2JobsResponse = (output, context) => {
    return {
        ComprehendMedicalAsyncJobPropertiesList: output.ComprehendMedicalAsyncJobPropertiesList !== undefined &&
            output.ComprehendMedicalAsyncJobPropertiesList !== null
            ? deserializeAws_json1_1ComprehendMedicalAsyncJobPropertiesList(output.ComprehendMedicalAsyncJobPropertiesList, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListICD10CMInferenceJobsResponse = (output, context) => {
    return {
        ComprehendMedicalAsyncJobPropertiesList: output.ComprehendMedicalAsyncJobPropertiesList !== undefined &&
            output.ComprehendMedicalAsyncJobPropertiesList !== null
            ? deserializeAws_json1_1ComprehendMedicalAsyncJobPropertiesList(output.ComprehendMedicalAsyncJobPropertiesList, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListPHIDetectionJobsResponse = (output, context) => {
    return {
        ComprehendMedicalAsyncJobPropertiesList: output.ComprehendMedicalAsyncJobPropertiesList !== undefined &&
            output.ComprehendMedicalAsyncJobPropertiesList !== null
            ? deserializeAws_json1_1ComprehendMedicalAsyncJobPropertiesList(output.ComprehendMedicalAsyncJobPropertiesList, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListRxNormInferenceJobsResponse = (output, context) => {
    return {
        ComprehendMedicalAsyncJobPropertiesList: output.ComprehendMedicalAsyncJobPropertiesList !== undefined &&
            output.ComprehendMedicalAsyncJobPropertiesList !== null
            ? deserializeAws_json1_1ComprehendMedicalAsyncJobPropertiesList(output.ComprehendMedicalAsyncJobPropertiesList, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1OutputDataConfig = (output, context) => {
    return {
        S3Bucket: output.S3Bucket !== undefined && output.S3Bucket !== null ? output.S3Bucket : undefined,
        S3Key: output.S3Key !== undefined && output.S3Key !== null ? output.S3Key : undefined,
    };
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1RxNormAttribute = (output, context) => {
    return {
        BeginOffset: output.BeginOffset !== undefined && output.BeginOffset !== null ? output.BeginOffset : undefined,
        EndOffset: output.EndOffset !== undefined && output.EndOffset !== null ? output.EndOffset : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        RelationshipScore: output.RelationshipScore !== undefined && output.RelationshipScore !== null
            ? output.RelationshipScore
            : undefined,
        Score: output.Score !== undefined && output.Score !== null ? output.Score : undefined,
        Text: output.Text !== undefined && output.Text !== null ? output.Text : undefined,
        Traits: output.Traits !== undefined && output.Traits !== null
            ? deserializeAws_json1_1RxNormTraitList(output.Traits, context)
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1RxNormAttributeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RxNormAttribute(entry, context);
    });
};
const deserializeAws_json1_1RxNormConcept = (output, context) => {
    return {
        Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Score: output.Score !== undefined && output.Score !== null ? output.Score : undefined,
    };
};
const deserializeAws_json1_1RxNormConceptList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RxNormConcept(entry, context);
    });
};
const deserializeAws_json1_1RxNormEntity = (output, context) => {
    return {
        Attributes: output.Attributes !== undefined && output.Attributes !== null
            ? deserializeAws_json1_1RxNormAttributeList(output.Attributes, context)
            : undefined,
        BeginOffset: output.BeginOffset !== undefined && output.BeginOffset !== null ? output.BeginOffset : undefined,
        Category: output.Category !== undefined && output.Category !== null ? output.Category : undefined,
        EndOffset: output.EndOffset !== undefined && output.EndOffset !== null ? output.EndOffset : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        RxNormConcepts: output.RxNormConcepts !== undefined && output.RxNormConcepts !== null
            ? deserializeAws_json1_1RxNormConceptList(output.RxNormConcepts, context)
            : undefined,
        Score: output.Score !== undefined && output.Score !== null ? output.Score : undefined,
        Text: output.Text !== undefined && output.Text !== null ? output.Text : undefined,
        Traits: output.Traits !== undefined && output.Traits !== null
            ? deserializeAws_json1_1RxNormTraitList(output.Traits, context)
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1RxNormEntityList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RxNormEntity(entry, context);
    });
};
const deserializeAws_json1_1RxNormTrait = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Score: output.Score !== undefined && output.Score !== null ? output.Score : undefined,
    };
};
const deserializeAws_json1_1RxNormTraitList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RxNormTrait(entry, context);
    });
};
const deserializeAws_json1_1ServiceUnavailableException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1StartEntitiesDetectionV2JobResponse = (output, context) => {
    return {
        JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
    };
};
const deserializeAws_json1_1StartICD10CMInferenceJobResponse = (output, context) => {
    return {
        JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
    };
};
const deserializeAws_json1_1StartPHIDetectionJobResponse = (output, context) => {
    return {
        JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
    };
};
const deserializeAws_json1_1StartRxNormInferenceJobResponse = (output, context) => {
    return {
        JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
    };
};
const deserializeAws_json1_1StopEntitiesDetectionV2JobResponse = (output, context) => {
    return {
        JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
    };
};
const deserializeAws_json1_1StopICD10CMInferenceJobResponse = (output, context) => {
    return {
        JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
    };
};
const deserializeAws_json1_1StopPHIDetectionJobResponse = (output, context) => {
    return {
        JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
    };
};
const deserializeAws_json1_1StopRxNormInferenceJobResponse = (output, context) => {
    return {
        JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
    };
};
const deserializeAws_json1_1TextSizeLimitExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1TooManyRequestsException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1Trait = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Score: output.Score !== undefined && output.Score !== null ? output.Score : undefined,
    };
};
const deserializeAws_json1_1TraitList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Trait(entry, context);
    });
};
const deserializeAws_json1_1UnmappedAttribute = (output, context) => {
    return {
        Attribute: output.Attribute !== undefined && output.Attribute !== null
            ? deserializeAws_json1_1Attribute(output.Attribute, context)
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1UnmappedAttributeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1UnmappedAttribute(entry, context);
    });
};
const deserializeAws_json1_1ValidationException = (output, context) => {
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
//# sourceMappingURL=Aws_json1_1.js.map