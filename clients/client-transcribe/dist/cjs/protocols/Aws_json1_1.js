"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1StartMedicalTranscriptionJobCommand = exports.deserializeAws_json1_1ListVocabularyFiltersCommand = exports.deserializeAws_json1_1ListVocabulariesCommand = exports.deserializeAws_json1_1ListTranscriptionJobsCommand = exports.deserializeAws_json1_1ListMedicalVocabulariesCommand = exports.deserializeAws_json1_1ListMedicalTranscriptionJobsCommand = exports.deserializeAws_json1_1ListLanguageModelsCommand = exports.deserializeAws_json1_1GetVocabularyFilterCommand = exports.deserializeAws_json1_1GetVocabularyCommand = exports.deserializeAws_json1_1GetTranscriptionJobCommand = exports.deserializeAws_json1_1GetMedicalVocabularyCommand = exports.deserializeAws_json1_1GetMedicalTranscriptionJobCommand = exports.deserializeAws_json1_1DescribeLanguageModelCommand = exports.deserializeAws_json1_1DeleteVocabularyFilterCommand = exports.deserializeAws_json1_1DeleteVocabularyCommand = exports.deserializeAws_json1_1DeleteTranscriptionJobCommand = exports.deserializeAws_json1_1DeleteMedicalVocabularyCommand = exports.deserializeAws_json1_1DeleteMedicalTranscriptionJobCommand = exports.deserializeAws_json1_1DeleteLanguageModelCommand = exports.deserializeAws_json1_1CreateVocabularyFilterCommand = exports.deserializeAws_json1_1CreateVocabularyCommand = exports.deserializeAws_json1_1CreateMedicalVocabularyCommand = exports.deserializeAws_json1_1CreateLanguageModelCommand = exports.serializeAws_json1_1UpdateVocabularyFilterCommand = exports.serializeAws_json1_1UpdateVocabularyCommand = exports.serializeAws_json1_1UpdateMedicalVocabularyCommand = exports.serializeAws_json1_1StartTranscriptionJobCommand = exports.serializeAws_json1_1StartMedicalTranscriptionJobCommand = exports.serializeAws_json1_1ListVocabularyFiltersCommand = exports.serializeAws_json1_1ListVocabulariesCommand = exports.serializeAws_json1_1ListTranscriptionJobsCommand = exports.serializeAws_json1_1ListMedicalVocabulariesCommand = exports.serializeAws_json1_1ListMedicalTranscriptionJobsCommand = exports.serializeAws_json1_1ListLanguageModelsCommand = exports.serializeAws_json1_1GetVocabularyFilterCommand = exports.serializeAws_json1_1GetVocabularyCommand = exports.serializeAws_json1_1GetTranscriptionJobCommand = exports.serializeAws_json1_1GetMedicalVocabularyCommand = exports.serializeAws_json1_1GetMedicalTranscriptionJobCommand = exports.serializeAws_json1_1DescribeLanguageModelCommand = exports.serializeAws_json1_1DeleteVocabularyFilterCommand = exports.serializeAws_json1_1DeleteVocabularyCommand = exports.serializeAws_json1_1DeleteTranscriptionJobCommand = exports.serializeAws_json1_1DeleteMedicalVocabularyCommand = exports.serializeAws_json1_1DeleteMedicalTranscriptionJobCommand = exports.serializeAws_json1_1DeleteLanguageModelCommand = exports.serializeAws_json1_1CreateVocabularyFilterCommand = exports.serializeAws_json1_1CreateVocabularyCommand = exports.serializeAws_json1_1CreateMedicalVocabularyCommand = exports.serializeAws_json1_1CreateLanguageModelCommand = void 0;
exports.deserializeAws_json1_1UpdateVocabularyFilterCommand = exports.deserializeAws_json1_1UpdateVocabularyCommand = exports.deserializeAws_json1_1UpdateMedicalVocabularyCommand = exports.deserializeAws_json1_1StartTranscriptionJobCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1CreateLanguageModelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Transcribe.CreateLanguageModel",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateLanguageModelRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateLanguageModelCommand = serializeAws_json1_1CreateLanguageModelCommand;
const serializeAws_json1_1CreateMedicalVocabularyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Transcribe.CreateMedicalVocabulary",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateMedicalVocabularyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateMedicalVocabularyCommand = serializeAws_json1_1CreateMedicalVocabularyCommand;
const serializeAws_json1_1CreateVocabularyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Transcribe.CreateVocabulary",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateVocabularyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateVocabularyCommand = serializeAws_json1_1CreateVocabularyCommand;
const serializeAws_json1_1CreateVocabularyFilterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Transcribe.CreateVocabularyFilter",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateVocabularyFilterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateVocabularyFilterCommand = serializeAws_json1_1CreateVocabularyFilterCommand;
const serializeAws_json1_1DeleteLanguageModelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Transcribe.DeleteLanguageModel",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteLanguageModelRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteLanguageModelCommand = serializeAws_json1_1DeleteLanguageModelCommand;
const serializeAws_json1_1DeleteMedicalTranscriptionJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Transcribe.DeleteMedicalTranscriptionJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteMedicalTranscriptionJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteMedicalTranscriptionJobCommand = serializeAws_json1_1DeleteMedicalTranscriptionJobCommand;
const serializeAws_json1_1DeleteMedicalVocabularyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Transcribe.DeleteMedicalVocabulary",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteMedicalVocabularyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteMedicalVocabularyCommand = serializeAws_json1_1DeleteMedicalVocabularyCommand;
const serializeAws_json1_1DeleteTranscriptionJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Transcribe.DeleteTranscriptionJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteTranscriptionJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteTranscriptionJobCommand = serializeAws_json1_1DeleteTranscriptionJobCommand;
const serializeAws_json1_1DeleteVocabularyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Transcribe.DeleteVocabulary",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteVocabularyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteVocabularyCommand = serializeAws_json1_1DeleteVocabularyCommand;
const serializeAws_json1_1DeleteVocabularyFilterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Transcribe.DeleteVocabularyFilter",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteVocabularyFilterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteVocabularyFilterCommand = serializeAws_json1_1DeleteVocabularyFilterCommand;
const serializeAws_json1_1DescribeLanguageModelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Transcribe.DescribeLanguageModel",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeLanguageModelRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeLanguageModelCommand = serializeAws_json1_1DescribeLanguageModelCommand;
const serializeAws_json1_1GetMedicalTranscriptionJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Transcribe.GetMedicalTranscriptionJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetMedicalTranscriptionJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetMedicalTranscriptionJobCommand = serializeAws_json1_1GetMedicalTranscriptionJobCommand;
const serializeAws_json1_1GetMedicalVocabularyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Transcribe.GetMedicalVocabulary",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetMedicalVocabularyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetMedicalVocabularyCommand = serializeAws_json1_1GetMedicalVocabularyCommand;
const serializeAws_json1_1GetTranscriptionJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Transcribe.GetTranscriptionJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetTranscriptionJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetTranscriptionJobCommand = serializeAws_json1_1GetTranscriptionJobCommand;
const serializeAws_json1_1GetVocabularyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Transcribe.GetVocabulary",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetVocabularyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetVocabularyCommand = serializeAws_json1_1GetVocabularyCommand;
const serializeAws_json1_1GetVocabularyFilterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Transcribe.GetVocabularyFilter",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetVocabularyFilterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetVocabularyFilterCommand = serializeAws_json1_1GetVocabularyFilterCommand;
const serializeAws_json1_1ListLanguageModelsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Transcribe.ListLanguageModels",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListLanguageModelsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListLanguageModelsCommand = serializeAws_json1_1ListLanguageModelsCommand;
const serializeAws_json1_1ListMedicalTranscriptionJobsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Transcribe.ListMedicalTranscriptionJobs",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListMedicalTranscriptionJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListMedicalTranscriptionJobsCommand = serializeAws_json1_1ListMedicalTranscriptionJobsCommand;
const serializeAws_json1_1ListMedicalVocabulariesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Transcribe.ListMedicalVocabularies",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListMedicalVocabulariesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListMedicalVocabulariesCommand = serializeAws_json1_1ListMedicalVocabulariesCommand;
const serializeAws_json1_1ListTranscriptionJobsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Transcribe.ListTranscriptionJobs",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTranscriptionJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTranscriptionJobsCommand = serializeAws_json1_1ListTranscriptionJobsCommand;
const serializeAws_json1_1ListVocabulariesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Transcribe.ListVocabularies",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListVocabulariesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListVocabulariesCommand = serializeAws_json1_1ListVocabulariesCommand;
const serializeAws_json1_1ListVocabularyFiltersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Transcribe.ListVocabularyFilters",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListVocabularyFiltersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListVocabularyFiltersCommand = serializeAws_json1_1ListVocabularyFiltersCommand;
const serializeAws_json1_1StartMedicalTranscriptionJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Transcribe.StartMedicalTranscriptionJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartMedicalTranscriptionJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartMedicalTranscriptionJobCommand = serializeAws_json1_1StartMedicalTranscriptionJobCommand;
const serializeAws_json1_1StartTranscriptionJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Transcribe.StartTranscriptionJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartTranscriptionJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartTranscriptionJobCommand = serializeAws_json1_1StartTranscriptionJobCommand;
const serializeAws_json1_1UpdateMedicalVocabularyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Transcribe.UpdateMedicalVocabulary",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateMedicalVocabularyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateMedicalVocabularyCommand = serializeAws_json1_1UpdateMedicalVocabularyCommand;
const serializeAws_json1_1UpdateVocabularyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Transcribe.UpdateVocabulary",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateVocabularyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateVocabularyCommand = serializeAws_json1_1UpdateVocabularyCommand;
const serializeAws_json1_1UpdateVocabularyFilterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Transcribe.UpdateVocabularyFilter",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateVocabularyFilterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateVocabularyFilterCommand = serializeAws_json1_1UpdateVocabularyFilterCommand;
const deserializeAws_json1_1CreateLanguageModelCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateLanguageModelCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateLanguageModelResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateLanguageModelCommand = deserializeAws_json1_1CreateLanguageModelCommand;
const deserializeAws_json1_1CreateLanguageModelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.transcribe#BadRequestException":
            response = {
                ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.transcribe#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.transcribe#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.transcribe#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateMedicalVocabularyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateMedicalVocabularyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateMedicalVocabularyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateMedicalVocabularyCommand = deserializeAws_json1_1CreateMedicalVocabularyCommand;
const deserializeAws_json1_1CreateMedicalVocabularyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.transcribe#BadRequestException":
            response = {
                ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.transcribe#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.transcribe#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.transcribe#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateVocabularyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateVocabularyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateVocabularyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateVocabularyCommand = deserializeAws_json1_1CreateVocabularyCommand;
const deserializeAws_json1_1CreateVocabularyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.transcribe#BadRequestException":
            response = {
                ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.transcribe#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.transcribe#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.transcribe#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateVocabularyFilterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateVocabularyFilterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateVocabularyFilterResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateVocabularyFilterCommand = deserializeAws_json1_1CreateVocabularyFilterCommand;
const deserializeAws_json1_1CreateVocabularyFilterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.transcribe#BadRequestException":
            response = {
                ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.transcribe#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.transcribe#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.transcribe#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteLanguageModelCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteLanguageModelCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteLanguageModelCommand = deserializeAws_json1_1DeleteLanguageModelCommand;
const deserializeAws_json1_1DeleteLanguageModelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.transcribe#BadRequestException":
            response = {
                ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.transcribe#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.transcribe#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteMedicalTranscriptionJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteMedicalTranscriptionJobCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteMedicalTranscriptionJobCommand = deserializeAws_json1_1DeleteMedicalTranscriptionJobCommand;
const deserializeAws_json1_1DeleteMedicalTranscriptionJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.transcribe#BadRequestException":
            response = {
                ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.transcribe#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.transcribe#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteMedicalVocabularyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteMedicalVocabularyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteMedicalVocabularyCommand = deserializeAws_json1_1DeleteMedicalVocabularyCommand;
const deserializeAws_json1_1DeleteMedicalVocabularyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.transcribe#BadRequestException":
            response = {
                ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.transcribe#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.transcribe#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.transcribe#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteTranscriptionJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteTranscriptionJobCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteTranscriptionJobCommand = deserializeAws_json1_1DeleteTranscriptionJobCommand;
const deserializeAws_json1_1DeleteTranscriptionJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.transcribe#BadRequestException":
            response = {
                ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.transcribe#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.transcribe#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteVocabularyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteVocabularyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteVocabularyCommand = deserializeAws_json1_1DeleteVocabularyCommand;
const deserializeAws_json1_1DeleteVocabularyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.transcribe#BadRequestException":
            response = {
                ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.transcribe#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.transcribe#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.transcribe#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteVocabularyFilterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteVocabularyFilterCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteVocabularyFilterCommand = deserializeAws_json1_1DeleteVocabularyFilterCommand;
const deserializeAws_json1_1DeleteVocabularyFilterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.transcribe#BadRequestException":
            response = {
                ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.transcribe#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.transcribe#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.transcribe#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeLanguageModelCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeLanguageModelCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeLanguageModelResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeLanguageModelCommand = deserializeAws_json1_1DescribeLanguageModelCommand;
const deserializeAws_json1_1DescribeLanguageModelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.transcribe#BadRequestException":
            response = {
                ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.transcribe#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.transcribe#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.transcribe#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetMedicalTranscriptionJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetMedicalTranscriptionJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetMedicalTranscriptionJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetMedicalTranscriptionJobCommand = deserializeAws_json1_1GetMedicalTranscriptionJobCommand;
const deserializeAws_json1_1GetMedicalTranscriptionJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.transcribe#BadRequestException":
            response = {
                ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.transcribe#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.transcribe#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.transcribe#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetMedicalVocabularyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetMedicalVocabularyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetMedicalVocabularyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetMedicalVocabularyCommand = deserializeAws_json1_1GetMedicalVocabularyCommand;
const deserializeAws_json1_1GetMedicalVocabularyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.transcribe#BadRequestException":
            response = {
                ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.transcribe#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.transcribe#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.transcribe#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetTranscriptionJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetTranscriptionJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetTranscriptionJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetTranscriptionJobCommand = deserializeAws_json1_1GetTranscriptionJobCommand;
const deserializeAws_json1_1GetTranscriptionJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.transcribe#BadRequestException":
            response = {
                ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.transcribe#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.transcribe#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.transcribe#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetVocabularyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetVocabularyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetVocabularyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetVocabularyCommand = deserializeAws_json1_1GetVocabularyCommand;
const deserializeAws_json1_1GetVocabularyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.transcribe#BadRequestException":
            response = {
                ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.transcribe#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.transcribe#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.transcribe#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetVocabularyFilterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetVocabularyFilterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetVocabularyFilterResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetVocabularyFilterCommand = deserializeAws_json1_1GetVocabularyFilterCommand;
const deserializeAws_json1_1GetVocabularyFilterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.transcribe#BadRequestException":
            response = {
                ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.transcribe#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.transcribe#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.transcribe#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListLanguageModelsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListLanguageModelsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListLanguageModelsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListLanguageModelsCommand = deserializeAws_json1_1ListLanguageModelsCommand;
const deserializeAws_json1_1ListLanguageModelsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.transcribe#BadRequestException":
            response = {
                ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.transcribe#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.transcribe#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListMedicalTranscriptionJobsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListMedicalTranscriptionJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListMedicalTranscriptionJobsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListMedicalTranscriptionJobsCommand = deserializeAws_json1_1ListMedicalTranscriptionJobsCommand;
const deserializeAws_json1_1ListMedicalTranscriptionJobsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.transcribe#BadRequestException":
            response = {
                ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.transcribe#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.transcribe#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListMedicalVocabulariesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListMedicalVocabulariesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListMedicalVocabulariesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListMedicalVocabulariesCommand = deserializeAws_json1_1ListMedicalVocabulariesCommand;
const deserializeAws_json1_1ListMedicalVocabulariesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.transcribe#BadRequestException":
            response = {
                ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.transcribe#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.transcribe#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListTranscriptionJobsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListTranscriptionJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTranscriptionJobsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListTranscriptionJobsCommand = deserializeAws_json1_1ListTranscriptionJobsCommand;
const deserializeAws_json1_1ListTranscriptionJobsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.transcribe#BadRequestException":
            response = {
                ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.transcribe#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.transcribe#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListVocabulariesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListVocabulariesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListVocabulariesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListVocabulariesCommand = deserializeAws_json1_1ListVocabulariesCommand;
const deserializeAws_json1_1ListVocabulariesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.transcribe#BadRequestException":
            response = {
                ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.transcribe#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.transcribe#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListVocabularyFiltersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListVocabularyFiltersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListVocabularyFiltersResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListVocabularyFiltersCommand = deserializeAws_json1_1ListVocabularyFiltersCommand;
const deserializeAws_json1_1ListVocabularyFiltersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.transcribe#BadRequestException":
            response = {
                ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.transcribe#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.transcribe#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StartMedicalTranscriptionJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartMedicalTranscriptionJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartMedicalTranscriptionJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartMedicalTranscriptionJobCommand = deserializeAws_json1_1StartMedicalTranscriptionJobCommand;
const deserializeAws_json1_1StartMedicalTranscriptionJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.transcribe#BadRequestException":
            response = {
                ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.transcribe#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.transcribe#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.transcribe#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StartTranscriptionJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartTranscriptionJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartTranscriptionJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartTranscriptionJobCommand = deserializeAws_json1_1StartTranscriptionJobCommand;
const deserializeAws_json1_1StartTranscriptionJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.transcribe#BadRequestException":
            response = {
                ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.transcribe#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.transcribe#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.transcribe#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateMedicalVocabularyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateMedicalVocabularyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateMedicalVocabularyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateMedicalVocabularyCommand = deserializeAws_json1_1UpdateMedicalVocabularyCommand;
const deserializeAws_json1_1UpdateMedicalVocabularyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.transcribe#BadRequestException":
            response = {
                ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.transcribe#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.transcribe#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.transcribe#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.transcribe#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateVocabularyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateVocabularyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateVocabularyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateVocabularyCommand = deserializeAws_json1_1UpdateVocabularyCommand;
const deserializeAws_json1_1UpdateVocabularyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.transcribe#BadRequestException":
            response = {
                ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.transcribe#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.transcribe#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.transcribe#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.transcribe#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateVocabularyFilterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateVocabularyFilterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateVocabularyFilterResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateVocabularyFilterCommand = deserializeAws_json1_1UpdateVocabularyFilterCommand;
const deserializeAws_json1_1UpdateVocabularyFilterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.transcribe#BadRequestException":
            response = {
                ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.transcribe#InternalFailureException":
            response = {
                ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.transcribe#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.transcribe#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1BadRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1BadRequestException(body, context);
    const contents = {
        name: "BadRequestException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ConflictExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConflictException(body, context);
    const contents = {
        name: "ConflictException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InternalFailureExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalFailureException(body, context);
    const contents = {
        name: "InternalFailureException",
        $fault: "server",
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
const deserializeAws_json1_1NotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NotFoundException(body, context);
    const contents = {
        name: "NotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1ContentRedaction = (input, context) => {
    return {
        ...(input.RedactionOutput !== undefined &&
            input.RedactionOutput !== null && { RedactionOutput: input.RedactionOutput }),
        ...(input.RedactionType !== undefined && input.RedactionType !== null && { RedactionType: input.RedactionType }),
    };
};
const serializeAws_json1_1CreateLanguageModelRequest = (input, context) => {
    return {
        ...(input.BaseModelName !== undefined && input.BaseModelName !== null && { BaseModelName: input.BaseModelName }),
        ...(input.InputDataConfig !== undefined &&
            input.InputDataConfig !== null && {
            InputDataConfig: serializeAws_json1_1InputDataConfig(input.InputDataConfig, context),
        }),
        ...(input.LanguageCode !== undefined && input.LanguageCode !== null && { LanguageCode: input.LanguageCode }),
        ...(input.ModelName !== undefined && input.ModelName !== null && { ModelName: input.ModelName }),
    };
};
const serializeAws_json1_1CreateMedicalVocabularyRequest = (input, context) => {
    return {
        ...(input.LanguageCode !== undefined && input.LanguageCode !== null && { LanguageCode: input.LanguageCode }),
        ...(input.VocabularyFileUri !== undefined &&
            input.VocabularyFileUri !== null && { VocabularyFileUri: input.VocabularyFileUri }),
        ...(input.VocabularyName !== undefined &&
            input.VocabularyName !== null && { VocabularyName: input.VocabularyName }),
    };
};
const serializeAws_json1_1CreateVocabularyFilterRequest = (input, context) => {
    return {
        ...(input.LanguageCode !== undefined && input.LanguageCode !== null && { LanguageCode: input.LanguageCode }),
        ...(input.VocabularyFilterFileUri !== undefined &&
            input.VocabularyFilterFileUri !== null && { VocabularyFilterFileUri: input.VocabularyFilterFileUri }),
        ...(input.VocabularyFilterName !== undefined &&
            input.VocabularyFilterName !== null && { VocabularyFilterName: input.VocabularyFilterName }),
        ...(input.Words !== undefined &&
            input.Words !== null && { Words: serializeAws_json1_1Words(input.Words, context) }),
    };
};
const serializeAws_json1_1CreateVocabularyRequest = (input, context) => {
    return {
        ...(input.LanguageCode !== undefined && input.LanguageCode !== null && { LanguageCode: input.LanguageCode }),
        ...(input.Phrases !== undefined &&
            input.Phrases !== null && { Phrases: serializeAws_json1_1Phrases(input.Phrases, context) }),
        ...(input.VocabularyFileUri !== undefined &&
            input.VocabularyFileUri !== null && { VocabularyFileUri: input.VocabularyFileUri }),
        ...(input.VocabularyName !== undefined &&
            input.VocabularyName !== null && { VocabularyName: input.VocabularyName }),
    };
};
const serializeAws_json1_1DeleteLanguageModelRequest = (input, context) => {
    return {
        ...(input.ModelName !== undefined && input.ModelName !== null && { ModelName: input.ModelName }),
    };
};
const serializeAws_json1_1DeleteMedicalTranscriptionJobRequest = (input, context) => {
    return {
        ...(input.MedicalTranscriptionJobName !== undefined &&
            input.MedicalTranscriptionJobName !== null && { MedicalTranscriptionJobName: input.MedicalTranscriptionJobName }),
    };
};
const serializeAws_json1_1DeleteMedicalVocabularyRequest = (input, context) => {
    return {
        ...(input.VocabularyName !== undefined &&
            input.VocabularyName !== null && { VocabularyName: input.VocabularyName }),
    };
};
const serializeAws_json1_1DeleteTranscriptionJobRequest = (input, context) => {
    return {
        ...(input.TranscriptionJobName !== undefined &&
            input.TranscriptionJobName !== null && { TranscriptionJobName: input.TranscriptionJobName }),
    };
};
const serializeAws_json1_1DeleteVocabularyFilterRequest = (input, context) => {
    return {
        ...(input.VocabularyFilterName !== undefined &&
            input.VocabularyFilterName !== null && { VocabularyFilterName: input.VocabularyFilterName }),
    };
};
const serializeAws_json1_1DeleteVocabularyRequest = (input, context) => {
    return {
        ...(input.VocabularyName !== undefined &&
            input.VocabularyName !== null && { VocabularyName: input.VocabularyName }),
    };
};
const serializeAws_json1_1DescribeLanguageModelRequest = (input, context) => {
    return {
        ...(input.ModelName !== undefined && input.ModelName !== null && { ModelName: input.ModelName }),
    };
};
const serializeAws_json1_1GetMedicalTranscriptionJobRequest = (input, context) => {
    return {
        ...(input.MedicalTranscriptionJobName !== undefined &&
            input.MedicalTranscriptionJobName !== null && { MedicalTranscriptionJobName: input.MedicalTranscriptionJobName }),
    };
};
const serializeAws_json1_1GetMedicalVocabularyRequest = (input, context) => {
    return {
        ...(input.VocabularyName !== undefined &&
            input.VocabularyName !== null && { VocabularyName: input.VocabularyName }),
    };
};
const serializeAws_json1_1GetTranscriptionJobRequest = (input, context) => {
    return {
        ...(input.TranscriptionJobName !== undefined &&
            input.TranscriptionJobName !== null && { TranscriptionJobName: input.TranscriptionJobName }),
    };
};
const serializeAws_json1_1GetVocabularyFilterRequest = (input, context) => {
    return {
        ...(input.VocabularyFilterName !== undefined &&
            input.VocabularyFilterName !== null && { VocabularyFilterName: input.VocabularyFilterName }),
    };
};
const serializeAws_json1_1GetVocabularyRequest = (input, context) => {
    return {
        ...(input.VocabularyName !== undefined &&
            input.VocabularyName !== null && { VocabularyName: input.VocabularyName }),
    };
};
const serializeAws_json1_1InputDataConfig = (input, context) => {
    return {
        ...(input.DataAccessRoleArn !== undefined &&
            input.DataAccessRoleArn !== null && { DataAccessRoleArn: input.DataAccessRoleArn }),
        ...(input.S3Uri !== undefined && input.S3Uri !== null && { S3Uri: input.S3Uri }),
        ...(input.TuningDataS3Uri !== undefined &&
            input.TuningDataS3Uri !== null && { TuningDataS3Uri: input.TuningDataS3Uri }),
    };
};
const serializeAws_json1_1JobExecutionSettings = (input, context) => {
    return {
        ...(input.AllowDeferredExecution !== undefined &&
            input.AllowDeferredExecution !== null && { AllowDeferredExecution: input.AllowDeferredExecution }),
        ...(input.DataAccessRoleArn !== undefined &&
            input.DataAccessRoleArn !== null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    };
};
const serializeAws_json1_1LanguageOptions = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ListLanguageModelsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NameContains !== undefined && input.NameContains !== null && { NameContains: input.NameContains }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.StatusEquals !== undefined && input.StatusEquals !== null && { StatusEquals: input.StatusEquals }),
    };
};
const serializeAws_json1_1ListMedicalTranscriptionJobsRequest = (input, context) => {
    return {
        ...(input.JobNameContains !== undefined &&
            input.JobNameContains !== null && { JobNameContains: input.JobNameContains }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
    };
};
const serializeAws_json1_1ListMedicalVocabulariesRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NameContains !== undefined && input.NameContains !== null && { NameContains: input.NameContains }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.StateEquals !== undefined && input.StateEquals !== null && { StateEquals: input.StateEquals }),
    };
};
const serializeAws_json1_1ListTranscriptionJobsRequest = (input, context) => {
    return {
        ...(input.JobNameContains !== undefined &&
            input.JobNameContains !== null && { JobNameContains: input.JobNameContains }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
    };
};
const serializeAws_json1_1ListVocabulariesRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NameContains !== undefined && input.NameContains !== null && { NameContains: input.NameContains }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.StateEquals !== undefined && input.StateEquals !== null && { StateEquals: input.StateEquals }),
    };
};
const serializeAws_json1_1ListVocabularyFiltersRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NameContains !== undefined && input.NameContains !== null && { NameContains: input.NameContains }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1Media = (input, context) => {
    return {
        ...(input.MediaFileUri !== undefined && input.MediaFileUri !== null && { MediaFileUri: input.MediaFileUri }),
    };
};
const serializeAws_json1_1MedicalTranscriptionSetting = (input, context) => {
    return {
        ...(input.ChannelIdentification !== undefined &&
            input.ChannelIdentification !== null && { ChannelIdentification: input.ChannelIdentification }),
        ...(input.MaxAlternatives !== undefined &&
            input.MaxAlternatives !== null && { MaxAlternatives: input.MaxAlternatives }),
        ...(input.MaxSpeakerLabels !== undefined &&
            input.MaxSpeakerLabels !== null && { MaxSpeakerLabels: input.MaxSpeakerLabels }),
        ...(input.ShowAlternatives !== undefined &&
            input.ShowAlternatives !== null && { ShowAlternatives: input.ShowAlternatives }),
        ...(input.ShowSpeakerLabels !== undefined &&
            input.ShowSpeakerLabels !== null && { ShowSpeakerLabels: input.ShowSpeakerLabels }),
        ...(input.VocabularyName !== undefined &&
            input.VocabularyName !== null && { VocabularyName: input.VocabularyName }),
    };
};
const serializeAws_json1_1ModelSettings = (input, context) => {
    return {
        ...(input.LanguageModelName !== undefined &&
            input.LanguageModelName !== null && { LanguageModelName: input.LanguageModelName }),
    };
};
const serializeAws_json1_1Phrases = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1Settings = (input, context) => {
    return {
        ...(input.ChannelIdentification !== undefined &&
            input.ChannelIdentification !== null && { ChannelIdentification: input.ChannelIdentification }),
        ...(input.MaxAlternatives !== undefined &&
            input.MaxAlternatives !== null && { MaxAlternatives: input.MaxAlternatives }),
        ...(input.MaxSpeakerLabels !== undefined &&
            input.MaxSpeakerLabels !== null && { MaxSpeakerLabels: input.MaxSpeakerLabels }),
        ...(input.ShowAlternatives !== undefined &&
            input.ShowAlternatives !== null && { ShowAlternatives: input.ShowAlternatives }),
        ...(input.ShowSpeakerLabels !== undefined &&
            input.ShowSpeakerLabels !== null && { ShowSpeakerLabels: input.ShowSpeakerLabels }),
        ...(input.VocabularyFilterMethod !== undefined &&
            input.VocabularyFilterMethod !== null && { VocabularyFilterMethod: input.VocabularyFilterMethod }),
        ...(input.VocabularyFilterName !== undefined &&
            input.VocabularyFilterName !== null && { VocabularyFilterName: input.VocabularyFilterName }),
        ...(input.VocabularyName !== undefined &&
            input.VocabularyName !== null && { VocabularyName: input.VocabularyName }),
    };
};
const serializeAws_json1_1StartMedicalTranscriptionJobRequest = (input, context) => {
    return {
        ...(input.ContentIdentificationType !== undefined &&
            input.ContentIdentificationType !== null && { ContentIdentificationType: input.ContentIdentificationType }),
        ...(input.LanguageCode !== undefined && input.LanguageCode !== null && { LanguageCode: input.LanguageCode }),
        ...(input.Media !== undefined &&
            input.Media !== null && { Media: serializeAws_json1_1Media(input.Media, context) }),
        ...(input.MediaFormat !== undefined && input.MediaFormat !== null && { MediaFormat: input.MediaFormat }),
        ...(input.MediaSampleRateHertz !== undefined &&
            input.MediaSampleRateHertz !== null && { MediaSampleRateHertz: input.MediaSampleRateHertz }),
        ...(input.MedicalTranscriptionJobName !== undefined &&
            input.MedicalTranscriptionJobName !== null && { MedicalTranscriptionJobName: input.MedicalTranscriptionJobName }),
        ...(input.OutputBucketName !== undefined &&
            input.OutputBucketName !== null && { OutputBucketName: input.OutputBucketName }),
        ...(input.OutputEncryptionKMSKeyId !== undefined &&
            input.OutputEncryptionKMSKeyId !== null && { OutputEncryptionKMSKeyId: input.OutputEncryptionKMSKeyId }),
        ...(input.OutputKey !== undefined && input.OutputKey !== null && { OutputKey: input.OutputKey }),
        ...(input.Settings !== undefined &&
            input.Settings !== null && {
            Settings: serializeAws_json1_1MedicalTranscriptionSetting(input.Settings, context),
        }),
        ...(input.Specialty !== undefined && input.Specialty !== null && { Specialty: input.Specialty }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_json1_1StartTranscriptionJobRequest = (input, context) => {
    return {
        ...(input.ContentRedaction !== undefined &&
            input.ContentRedaction !== null && {
            ContentRedaction: serializeAws_json1_1ContentRedaction(input.ContentRedaction, context),
        }),
        ...(input.IdentifyLanguage !== undefined &&
            input.IdentifyLanguage !== null && { IdentifyLanguage: input.IdentifyLanguage }),
        ...(input.JobExecutionSettings !== undefined &&
            input.JobExecutionSettings !== null && {
            JobExecutionSettings: serializeAws_json1_1JobExecutionSettings(input.JobExecutionSettings, context),
        }),
        ...(input.LanguageCode !== undefined && input.LanguageCode !== null && { LanguageCode: input.LanguageCode }),
        ...(input.LanguageOptions !== undefined &&
            input.LanguageOptions !== null && {
            LanguageOptions: serializeAws_json1_1LanguageOptions(input.LanguageOptions, context),
        }),
        ...(input.Media !== undefined &&
            input.Media !== null && { Media: serializeAws_json1_1Media(input.Media, context) }),
        ...(input.MediaFormat !== undefined && input.MediaFormat !== null && { MediaFormat: input.MediaFormat }),
        ...(input.MediaSampleRateHertz !== undefined &&
            input.MediaSampleRateHertz !== null && { MediaSampleRateHertz: input.MediaSampleRateHertz }),
        ...(input.ModelSettings !== undefined &&
            input.ModelSettings !== null && {
            ModelSettings: serializeAws_json1_1ModelSettings(input.ModelSettings, context),
        }),
        ...(input.OutputBucketName !== undefined &&
            input.OutputBucketName !== null && { OutputBucketName: input.OutputBucketName }),
        ...(input.OutputEncryptionKMSKeyId !== undefined &&
            input.OutputEncryptionKMSKeyId !== null && { OutputEncryptionKMSKeyId: input.OutputEncryptionKMSKeyId }),
        ...(input.OutputKey !== undefined && input.OutputKey !== null && { OutputKey: input.OutputKey }),
        ...(input.Settings !== undefined &&
            input.Settings !== null && { Settings: serializeAws_json1_1Settings(input.Settings, context) }),
        ...(input.TranscriptionJobName !== undefined &&
            input.TranscriptionJobName !== null && { TranscriptionJobName: input.TranscriptionJobName }),
    };
};
const serializeAws_json1_1UpdateMedicalVocabularyRequest = (input, context) => {
    return {
        ...(input.LanguageCode !== undefined && input.LanguageCode !== null && { LanguageCode: input.LanguageCode }),
        ...(input.VocabularyFileUri !== undefined &&
            input.VocabularyFileUri !== null && { VocabularyFileUri: input.VocabularyFileUri }),
        ...(input.VocabularyName !== undefined &&
            input.VocabularyName !== null && { VocabularyName: input.VocabularyName }),
    };
};
const serializeAws_json1_1UpdateVocabularyFilterRequest = (input, context) => {
    return {
        ...(input.VocabularyFilterFileUri !== undefined &&
            input.VocabularyFilterFileUri !== null && { VocabularyFilterFileUri: input.VocabularyFilterFileUri }),
        ...(input.VocabularyFilterName !== undefined &&
            input.VocabularyFilterName !== null && { VocabularyFilterName: input.VocabularyFilterName }),
        ...(input.Words !== undefined &&
            input.Words !== null && { Words: serializeAws_json1_1Words(input.Words, context) }),
    };
};
const serializeAws_json1_1UpdateVocabularyRequest = (input, context) => {
    return {
        ...(input.LanguageCode !== undefined && input.LanguageCode !== null && { LanguageCode: input.LanguageCode }),
        ...(input.Phrases !== undefined &&
            input.Phrases !== null && { Phrases: serializeAws_json1_1Phrases(input.Phrases, context) }),
        ...(input.VocabularyFileUri !== undefined &&
            input.VocabularyFileUri !== null && { VocabularyFileUri: input.VocabularyFileUri }),
        ...(input.VocabularyName !== undefined &&
            input.VocabularyName !== null && { VocabularyName: input.VocabularyName }),
    };
};
const serializeAws_json1_1Words = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1BadRequestException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ConflictException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ContentRedaction = (output, context) => {
    return {
        RedactionOutput: output.RedactionOutput !== undefined && output.RedactionOutput !== null ? output.RedactionOutput : undefined,
        RedactionType: output.RedactionType !== undefined && output.RedactionType !== null ? output.RedactionType : undefined,
    };
};
const deserializeAws_json1_1CreateLanguageModelResponse = (output, context) => {
    return {
        BaseModelName: output.BaseModelName !== undefined && output.BaseModelName !== null ? output.BaseModelName : undefined,
        InputDataConfig: output.InputDataConfig !== undefined && output.InputDataConfig !== null
            ? deserializeAws_json1_1InputDataConfig(output.InputDataConfig, context)
            : undefined,
        LanguageCode: output.LanguageCode !== undefined && output.LanguageCode !== null ? output.LanguageCode : undefined,
        ModelName: output.ModelName !== undefined && output.ModelName !== null ? output.ModelName : undefined,
        ModelStatus: output.ModelStatus !== undefined && output.ModelStatus !== null ? output.ModelStatus : undefined,
    };
};
const deserializeAws_json1_1CreateMedicalVocabularyResponse = (output, context) => {
    return {
        FailureReason: output.FailureReason !== undefined && output.FailureReason !== null ? output.FailureReason : undefined,
        LanguageCode: output.LanguageCode !== undefined && output.LanguageCode !== null ? output.LanguageCode : undefined,
        LastModifiedTime: output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
            ? new Date(Math.round(output.LastModifiedTime * 1000))
            : undefined,
        VocabularyName: output.VocabularyName !== undefined && output.VocabularyName !== null ? output.VocabularyName : undefined,
        VocabularyState: output.VocabularyState !== undefined && output.VocabularyState !== null ? output.VocabularyState : undefined,
    };
};
const deserializeAws_json1_1CreateVocabularyFilterResponse = (output, context) => {
    return {
        LanguageCode: output.LanguageCode !== undefined && output.LanguageCode !== null ? output.LanguageCode : undefined,
        LastModifiedTime: output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
            ? new Date(Math.round(output.LastModifiedTime * 1000))
            : undefined,
        VocabularyFilterName: output.VocabularyFilterName !== undefined && output.VocabularyFilterName !== null
            ? output.VocabularyFilterName
            : undefined,
    };
};
const deserializeAws_json1_1CreateVocabularyResponse = (output, context) => {
    return {
        FailureReason: output.FailureReason !== undefined && output.FailureReason !== null ? output.FailureReason : undefined,
        LanguageCode: output.LanguageCode !== undefined && output.LanguageCode !== null ? output.LanguageCode : undefined,
        LastModifiedTime: output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
            ? new Date(Math.round(output.LastModifiedTime * 1000))
            : undefined,
        VocabularyName: output.VocabularyName !== undefined && output.VocabularyName !== null ? output.VocabularyName : undefined,
        VocabularyState: output.VocabularyState !== undefined && output.VocabularyState !== null ? output.VocabularyState : undefined,
    };
};
const deserializeAws_json1_1DescribeLanguageModelResponse = (output, context) => {
    return {
        LanguageModel: output.LanguageModel !== undefined && output.LanguageModel !== null
            ? deserializeAws_json1_1LanguageModel(output.LanguageModel, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetMedicalTranscriptionJobResponse = (output, context) => {
    return {
        MedicalTranscriptionJob: output.MedicalTranscriptionJob !== undefined && output.MedicalTranscriptionJob !== null
            ? deserializeAws_json1_1MedicalTranscriptionJob(output.MedicalTranscriptionJob, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetMedicalVocabularyResponse = (output, context) => {
    return {
        DownloadUri: output.DownloadUri !== undefined && output.DownloadUri !== null ? output.DownloadUri : undefined,
        FailureReason: output.FailureReason !== undefined && output.FailureReason !== null ? output.FailureReason : undefined,
        LanguageCode: output.LanguageCode !== undefined && output.LanguageCode !== null ? output.LanguageCode : undefined,
        LastModifiedTime: output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
            ? new Date(Math.round(output.LastModifiedTime * 1000))
            : undefined,
        VocabularyName: output.VocabularyName !== undefined && output.VocabularyName !== null ? output.VocabularyName : undefined,
        VocabularyState: output.VocabularyState !== undefined && output.VocabularyState !== null ? output.VocabularyState : undefined,
    };
};
const deserializeAws_json1_1GetTranscriptionJobResponse = (output, context) => {
    return {
        TranscriptionJob: output.TranscriptionJob !== undefined && output.TranscriptionJob !== null
            ? deserializeAws_json1_1TranscriptionJob(output.TranscriptionJob, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetVocabularyFilterResponse = (output, context) => {
    return {
        DownloadUri: output.DownloadUri !== undefined && output.DownloadUri !== null ? output.DownloadUri : undefined,
        LanguageCode: output.LanguageCode !== undefined && output.LanguageCode !== null ? output.LanguageCode : undefined,
        LastModifiedTime: output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
            ? new Date(Math.round(output.LastModifiedTime * 1000))
            : undefined,
        VocabularyFilterName: output.VocabularyFilterName !== undefined && output.VocabularyFilterName !== null
            ? output.VocabularyFilterName
            : undefined,
    };
};
const deserializeAws_json1_1GetVocabularyResponse = (output, context) => {
    return {
        DownloadUri: output.DownloadUri !== undefined && output.DownloadUri !== null ? output.DownloadUri : undefined,
        FailureReason: output.FailureReason !== undefined && output.FailureReason !== null ? output.FailureReason : undefined,
        LanguageCode: output.LanguageCode !== undefined && output.LanguageCode !== null ? output.LanguageCode : undefined,
        LastModifiedTime: output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
            ? new Date(Math.round(output.LastModifiedTime * 1000))
            : undefined,
        VocabularyName: output.VocabularyName !== undefined && output.VocabularyName !== null ? output.VocabularyName : undefined,
        VocabularyState: output.VocabularyState !== undefined && output.VocabularyState !== null ? output.VocabularyState : undefined,
    };
};
const deserializeAws_json1_1InputDataConfig = (output, context) => {
    return {
        DataAccessRoleArn: output.DataAccessRoleArn !== undefined && output.DataAccessRoleArn !== null
            ? output.DataAccessRoleArn
            : undefined,
        S3Uri: output.S3Uri !== undefined && output.S3Uri !== null ? output.S3Uri : undefined,
        TuningDataS3Uri: output.TuningDataS3Uri !== undefined && output.TuningDataS3Uri !== null ? output.TuningDataS3Uri : undefined,
    };
};
const deserializeAws_json1_1InternalFailureException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1JobExecutionSettings = (output, context) => {
    return {
        AllowDeferredExecution: output.AllowDeferredExecution !== undefined && output.AllowDeferredExecution !== null
            ? output.AllowDeferredExecution
            : undefined,
        DataAccessRoleArn: output.DataAccessRoleArn !== undefined && output.DataAccessRoleArn !== null
            ? output.DataAccessRoleArn
            : undefined,
    };
};
const deserializeAws_json1_1LanguageModel = (output, context) => {
    return {
        BaseModelName: output.BaseModelName !== undefined && output.BaseModelName !== null ? output.BaseModelName : undefined,
        CreateTime: output.CreateTime !== undefined && output.CreateTime !== null
            ? new Date(Math.round(output.CreateTime * 1000))
            : undefined,
        FailureReason: output.FailureReason !== undefined && output.FailureReason !== null ? output.FailureReason : undefined,
        InputDataConfig: output.InputDataConfig !== undefined && output.InputDataConfig !== null
            ? deserializeAws_json1_1InputDataConfig(output.InputDataConfig, context)
            : undefined,
        LanguageCode: output.LanguageCode !== undefined && output.LanguageCode !== null ? output.LanguageCode : undefined,
        LastModifiedTime: output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
            ? new Date(Math.round(output.LastModifiedTime * 1000))
            : undefined,
        ModelName: output.ModelName !== undefined && output.ModelName !== null ? output.ModelName : undefined,
        ModelStatus: output.ModelStatus !== undefined && output.ModelStatus !== null ? output.ModelStatus : undefined,
        UpgradeAvailability: output.UpgradeAvailability !== undefined && output.UpgradeAvailability !== null
            ? output.UpgradeAvailability
            : undefined,
    };
};
const deserializeAws_json1_1LanguageOptions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ListLanguageModelsResponse = (output, context) => {
    return {
        Models: output.Models !== undefined && output.Models !== null
            ? deserializeAws_json1_1Models(output.Models, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListMedicalTranscriptionJobsResponse = (output, context) => {
    return {
        MedicalTranscriptionJobSummaries: output.MedicalTranscriptionJobSummaries !== undefined && output.MedicalTranscriptionJobSummaries !== null
            ? deserializeAws_json1_1MedicalTranscriptionJobSummaries(output.MedicalTranscriptionJobSummaries, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1ListMedicalVocabulariesResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Vocabularies: output.Vocabularies !== undefined && output.Vocabularies !== null
            ? deserializeAws_json1_1Vocabularies(output.Vocabularies, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListTranscriptionJobsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        TranscriptionJobSummaries: output.TranscriptionJobSummaries !== undefined && output.TranscriptionJobSummaries !== null
            ? deserializeAws_json1_1TranscriptionJobSummaries(output.TranscriptionJobSummaries, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListVocabulariesResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Vocabularies: output.Vocabularies !== undefined && output.Vocabularies !== null
            ? deserializeAws_json1_1Vocabularies(output.Vocabularies, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListVocabularyFiltersResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        VocabularyFilters: output.VocabularyFilters !== undefined && output.VocabularyFilters !== null
            ? deserializeAws_json1_1VocabularyFilters(output.VocabularyFilters, context)
            : undefined,
    };
};
const deserializeAws_json1_1Media = (output, context) => {
    return {
        MediaFileUri: output.MediaFileUri !== undefined && output.MediaFileUri !== null ? output.MediaFileUri : undefined,
    };
};
const deserializeAws_json1_1MedicalTranscript = (output, context) => {
    return {
        TranscriptFileUri: output.TranscriptFileUri !== undefined && output.TranscriptFileUri !== null
            ? output.TranscriptFileUri
            : undefined,
    };
};
const deserializeAws_json1_1MedicalTranscriptionJob = (output, context) => {
    return {
        CompletionTime: output.CompletionTime !== undefined && output.CompletionTime !== null
            ? new Date(Math.round(output.CompletionTime * 1000))
            : undefined,
        ContentIdentificationType: output.ContentIdentificationType !== undefined && output.ContentIdentificationType !== null
            ? output.ContentIdentificationType
            : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        FailureReason: output.FailureReason !== undefined && output.FailureReason !== null ? output.FailureReason : undefined,
        LanguageCode: output.LanguageCode !== undefined && output.LanguageCode !== null ? output.LanguageCode : undefined,
        Media: output.Media !== undefined && output.Media !== null
            ? deserializeAws_json1_1Media(output.Media, context)
            : undefined,
        MediaFormat: output.MediaFormat !== undefined && output.MediaFormat !== null ? output.MediaFormat : undefined,
        MediaSampleRateHertz: output.MediaSampleRateHertz !== undefined && output.MediaSampleRateHertz !== null
            ? output.MediaSampleRateHertz
            : undefined,
        MedicalTranscriptionJobName: output.MedicalTranscriptionJobName !== undefined && output.MedicalTranscriptionJobName !== null
            ? output.MedicalTranscriptionJobName
            : undefined,
        Settings: output.Settings !== undefined && output.Settings !== null
            ? deserializeAws_json1_1MedicalTranscriptionSetting(output.Settings, context)
            : undefined,
        Specialty: output.Specialty !== undefined && output.Specialty !== null ? output.Specialty : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? new Date(Math.round(output.StartTime * 1000))
            : undefined,
        Transcript: output.Transcript !== undefined && output.Transcript !== null
            ? deserializeAws_json1_1MedicalTranscript(output.Transcript, context)
            : undefined,
        TranscriptionJobStatus: output.TranscriptionJobStatus !== undefined && output.TranscriptionJobStatus !== null
            ? output.TranscriptionJobStatus
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1MedicalTranscriptionJobSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MedicalTranscriptionJobSummary(entry, context);
    });
};
const deserializeAws_json1_1MedicalTranscriptionJobSummary = (output, context) => {
    return {
        CompletionTime: output.CompletionTime !== undefined && output.CompletionTime !== null
            ? new Date(Math.round(output.CompletionTime * 1000))
            : undefined,
        ContentIdentificationType: output.ContentIdentificationType !== undefined && output.ContentIdentificationType !== null
            ? output.ContentIdentificationType
            : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        FailureReason: output.FailureReason !== undefined && output.FailureReason !== null ? output.FailureReason : undefined,
        LanguageCode: output.LanguageCode !== undefined && output.LanguageCode !== null ? output.LanguageCode : undefined,
        MedicalTranscriptionJobName: output.MedicalTranscriptionJobName !== undefined && output.MedicalTranscriptionJobName !== null
            ? output.MedicalTranscriptionJobName
            : undefined,
        OutputLocationType: output.OutputLocationType !== undefined && output.OutputLocationType !== null
            ? output.OutputLocationType
            : undefined,
        Specialty: output.Specialty !== undefined && output.Specialty !== null ? output.Specialty : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? new Date(Math.round(output.StartTime * 1000))
            : undefined,
        TranscriptionJobStatus: output.TranscriptionJobStatus !== undefined && output.TranscriptionJobStatus !== null
            ? output.TranscriptionJobStatus
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1MedicalTranscriptionSetting = (output, context) => {
    return {
        ChannelIdentification: output.ChannelIdentification !== undefined && output.ChannelIdentification !== null
            ? output.ChannelIdentification
            : undefined,
        MaxAlternatives: output.MaxAlternatives !== undefined && output.MaxAlternatives !== null ? output.MaxAlternatives : undefined,
        MaxSpeakerLabels: output.MaxSpeakerLabels !== undefined && output.MaxSpeakerLabels !== null ? output.MaxSpeakerLabels : undefined,
        ShowAlternatives: output.ShowAlternatives !== undefined && output.ShowAlternatives !== null ? output.ShowAlternatives : undefined,
        ShowSpeakerLabels: output.ShowSpeakerLabels !== undefined && output.ShowSpeakerLabels !== null
            ? output.ShowSpeakerLabels
            : undefined,
        VocabularyName: output.VocabularyName !== undefined && output.VocabularyName !== null ? output.VocabularyName : undefined,
    };
};
const deserializeAws_json1_1Models = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LanguageModel(entry, context);
    });
};
const deserializeAws_json1_1ModelSettings = (output, context) => {
    return {
        LanguageModelName: output.LanguageModelName !== undefined && output.LanguageModelName !== null
            ? output.LanguageModelName
            : undefined,
    };
};
const deserializeAws_json1_1NotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1Settings = (output, context) => {
    return {
        ChannelIdentification: output.ChannelIdentification !== undefined && output.ChannelIdentification !== null
            ? output.ChannelIdentification
            : undefined,
        MaxAlternatives: output.MaxAlternatives !== undefined && output.MaxAlternatives !== null ? output.MaxAlternatives : undefined,
        MaxSpeakerLabels: output.MaxSpeakerLabels !== undefined && output.MaxSpeakerLabels !== null ? output.MaxSpeakerLabels : undefined,
        ShowAlternatives: output.ShowAlternatives !== undefined && output.ShowAlternatives !== null ? output.ShowAlternatives : undefined,
        ShowSpeakerLabels: output.ShowSpeakerLabels !== undefined && output.ShowSpeakerLabels !== null
            ? output.ShowSpeakerLabels
            : undefined,
        VocabularyFilterMethod: output.VocabularyFilterMethod !== undefined && output.VocabularyFilterMethod !== null
            ? output.VocabularyFilterMethod
            : undefined,
        VocabularyFilterName: output.VocabularyFilterName !== undefined && output.VocabularyFilterName !== null
            ? output.VocabularyFilterName
            : undefined,
        VocabularyName: output.VocabularyName !== undefined && output.VocabularyName !== null ? output.VocabularyName : undefined,
    };
};
const deserializeAws_json1_1StartMedicalTranscriptionJobResponse = (output, context) => {
    return {
        MedicalTranscriptionJob: output.MedicalTranscriptionJob !== undefined && output.MedicalTranscriptionJob !== null
            ? deserializeAws_json1_1MedicalTranscriptionJob(output.MedicalTranscriptionJob, context)
            : undefined,
    };
};
const deserializeAws_json1_1StartTranscriptionJobResponse = (output, context) => {
    return {
        TranscriptionJob: output.TranscriptionJob !== undefined && output.TranscriptionJob !== null
            ? deserializeAws_json1_1TranscriptionJob(output.TranscriptionJob, context)
            : undefined,
    };
};
const deserializeAws_json1_1Transcript = (output, context) => {
    return {
        RedactedTranscriptFileUri: output.RedactedTranscriptFileUri !== undefined && output.RedactedTranscriptFileUri !== null
            ? output.RedactedTranscriptFileUri
            : undefined,
        TranscriptFileUri: output.TranscriptFileUri !== undefined && output.TranscriptFileUri !== null
            ? output.TranscriptFileUri
            : undefined,
    };
};
const deserializeAws_json1_1TranscriptionJob = (output, context) => {
    return {
        CompletionTime: output.CompletionTime !== undefined && output.CompletionTime !== null
            ? new Date(Math.round(output.CompletionTime * 1000))
            : undefined,
        ContentRedaction: output.ContentRedaction !== undefined && output.ContentRedaction !== null
            ? deserializeAws_json1_1ContentRedaction(output.ContentRedaction, context)
            : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        FailureReason: output.FailureReason !== undefined && output.FailureReason !== null ? output.FailureReason : undefined,
        IdentifiedLanguageScore: output.IdentifiedLanguageScore !== undefined && output.IdentifiedLanguageScore !== null
            ? output.IdentifiedLanguageScore
            : undefined,
        IdentifyLanguage: output.IdentifyLanguage !== undefined && output.IdentifyLanguage !== null ? output.IdentifyLanguage : undefined,
        JobExecutionSettings: output.JobExecutionSettings !== undefined && output.JobExecutionSettings !== null
            ? deserializeAws_json1_1JobExecutionSettings(output.JobExecutionSettings, context)
            : undefined,
        LanguageCode: output.LanguageCode !== undefined && output.LanguageCode !== null ? output.LanguageCode : undefined,
        LanguageOptions: output.LanguageOptions !== undefined && output.LanguageOptions !== null
            ? deserializeAws_json1_1LanguageOptions(output.LanguageOptions, context)
            : undefined,
        Media: output.Media !== undefined && output.Media !== null
            ? deserializeAws_json1_1Media(output.Media, context)
            : undefined,
        MediaFormat: output.MediaFormat !== undefined && output.MediaFormat !== null ? output.MediaFormat : undefined,
        MediaSampleRateHertz: output.MediaSampleRateHertz !== undefined && output.MediaSampleRateHertz !== null
            ? output.MediaSampleRateHertz
            : undefined,
        ModelSettings: output.ModelSettings !== undefined && output.ModelSettings !== null
            ? deserializeAws_json1_1ModelSettings(output.ModelSettings, context)
            : undefined,
        Settings: output.Settings !== undefined && output.Settings !== null
            ? deserializeAws_json1_1Settings(output.Settings, context)
            : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? new Date(Math.round(output.StartTime * 1000))
            : undefined,
        Transcript: output.Transcript !== undefined && output.Transcript !== null
            ? deserializeAws_json1_1Transcript(output.Transcript, context)
            : undefined,
        TranscriptionJobName: output.TranscriptionJobName !== undefined && output.TranscriptionJobName !== null
            ? output.TranscriptionJobName
            : undefined,
        TranscriptionJobStatus: output.TranscriptionJobStatus !== undefined && output.TranscriptionJobStatus !== null
            ? output.TranscriptionJobStatus
            : undefined,
    };
};
const deserializeAws_json1_1TranscriptionJobSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TranscriptionJobSummary(entry, context);
    });
};
const deserializeAws_json1_1TranscriptionJobSummary = (output, context) => {
    return {
        CompletionTime: output.CompletionTime !== undefined && output.CompletionTime !== null
            ? new Date(Math.round(output.CompletionTime * 1000))
            : undefined,
        ContentRedaction: output.ContentRedaction !== undefined && output.ContentRedaction !== null
            ? deserializeAws_json1_1ContentRedaction(output.ContentRedaction, context)
            : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        FailureReason: output.FailureReason !== undefined && output.FailureReason !== null ? output.FailureReason : undefined,
        IdentifiedLanguageScore: output.IdentifiedLanguageScore !== undefined && output.IdentifiedLanguageScore !== null
            ? output.IdentifiedLanguageScore
            : undefined,
        IdentifyLanguage: output.IdentifyLanguage !== undefined && output.IdentifyLanguage !== null ? output.IdentifyLanguage : undefined,
        LanguageCode: output.LanguageCode !== undefined && output.LanguageCode !== null ? output.LanguageCode : undefined,
        ModelSettings: output.ModelSettings !== undefined && output.ModelSettings !== null
            ? deserializeAws_json1_1ModelSettings(output.ModelSettings, context)
            : undefined,
        OutputLocationType: output.OutputLocationType !== undefined && output.OutputLocationType !== null
            ? output.OutputLocationType
            : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? new Date(Math.round(output.StartTime * 1000))
            : undefined,
        TranscriptionJobName: output.TranscriptionJobName !== undefined && output.TranscriptionJobName !== null
            ? output.TranscriptionJobName
            : undefined,
        TranscriptionJobStatus: output.TranscriptionJobStatus !== undefined && output.TranscriptionJobStatus !== null
            ? output.TranscriptionJobStatus
            : undefined,
    };
};
const deserializeAws_json1_1UpdateMedicalVocabularyResponse = (output, context) => {
    return {
        LanguageCode: output.LanguageCode !== undefined && output.LanguageCode !== null ? output.LanguageCode : undefined,
        LastModifiedTime: output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
            ? new Date(Math.round(output.LastModifiedTime * 1000))
            : undefined,
        VocabularyName: output.VocabularyName !== undefined && output.VocabularyName !== null ? output.VocabularyName : undefined,
        VocabularyState: output.VocabularyState !== undefined && output.VocabularyState !== null ? output.VocabularyState : undefined,
    };
};
const deserializeAws_json1_1UpdateVocabularyFilterResponse = (output, context) => {
    return {
        LanguageCode: output.LanguageCode !== undefined && output.LanguageCode !== null ? output.LanguageCode : undefined,
        LastModifiedTime: output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
            ? new Date(Math.round(output.LastModifiedTime * 1000))
            : undefined,
        VocabularyFilterName: output.VocabularyFilterName !== undefined && output.VocabularyFilterName !== null
            ? output.VocabularyFilterName
            : undefined,
    };
};
const deserializeAws_json1_1UpdateVocabularyResponse = (output, context) => {
    return {
        LanguageCode: output.LanguageCode !== undefined && output.LanguageCode !== null ? output.LanguageCode : undefined,
        LastModifiedTime: output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
            ? new Date(Math.round(output.LastModifiedTime * 1000))
            : undefined,
        VocabularyName: output.VocabularyName !== undefined && output.VocabularyName !== null ? output.VocabularyName : undefined,
        VocabularyState: output.VocabularyState !== undefined && output.VocabularyState !== null ? output.VocabularyState : undefined,
    };
};
const deserializeAws_json1_1Vocabularies = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1VocabularyInfo(entry, context);
    });
};
const deserializeAws_json1_1VocabularyFilterInfo = (output, context) => {
    return {
        LanguageCode: output.LanguageCode !== undefined && output.LanguageCode !== null ? output.LanguageCode : undefined,
        LastModifiedTime: output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
            ? new Date(Math.round(output.LastModifiedTime * 1000))
            : undefined,
        VocabularyFilterName: output.VocabularyFilterName !== undefined && output.VocabularyFilterName !== null
            ? output.VocabularyFilterName
            : undefined,
    };
};
const deserializeAws_json1_1VocabularyFilters = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1VocabularyFilterInfo(entry, context);
    });
};
const deserializeAws_json1_1VocabularyInfo = (output, context) => {
    return {
        LanguageCode: output.LanguageCode !== undefined && output.LanguageCode !== null ? output.LanguageCode : undefined,
        LastModifiedTime: output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
            ? new Date(Math.round(output.LastModifiedTime * 1000))
            : undefined,
        VocabularyName: output.VocabularyName !== undefined && output.VocabularyName !== null ? output.VocabularyName : undefined,
        VocabularyState: output.VocabularyState !== undefined && output.VocabularyState !== null ? output.VocabularyState : undefined,
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