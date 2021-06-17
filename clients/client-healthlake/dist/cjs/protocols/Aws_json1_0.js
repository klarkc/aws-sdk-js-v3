"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_0StartFHIRImportJobCommand = exports.deserializeAws_json1_0StartFHIRExportJobCommand = exports.deserializeAws_json1_0ListFHIRDatastoresCommand = exports.deserializeAws_json1_0DescribeFHIRImportJobCommand = exports.deserializeAws_json1_0DescribeFHIRExportJobCommand = exports.deserializeAws_json1_0DescribeFHIRDatastoreCommand = exports.deserializeAws_json1_0DeleteFHIRDatastoreCommand = exports.deserializeAws_json1_0CreateFHIRDatastoreCommand = exports.serializeAws_json1_0StartFHIRImportJobCommand = exports.serializeAws_json1_0StartFHIRExportJobCommand = exports.serializeAws_json1_0ListFHIRDatastoresCommand = exports.serializeAws_json1_0DescribeFHIRImportJobCommand = exports.serializeAws_json1_0DescribeFHIRExportJobCommand = exports.serializeAws_json1_0DescribeFHIRDatastoreCommand = exports.serializeAws_json1_0DeleteFHIRDatastoreCommand = exports.serializeAws_json1_0CreateFHIRDatastoreCommand = void 0;
const models_0_1 = require("../models/models_0");
const protocol_http_1 = require("@aws-sdk/protocol-http");
const uuid_1 = require("uuid");
const serializeAws_json1_0CreateFHIRDatastoreCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "HealthLake.CreateFHIRDatastore",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0CreateFHIRDatastoreRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0CreateFHIRDatastoreCommand = serializeAws_json1_0CreateFHIRDatastoreCommand;
const serializeAws_json1_0DeleteFHIRDatastoreCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "HealthLake.DeleteFHIRDatastore",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DeleteFHIRDatastoreRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DeleteFHIRDatastoreCommand = serializeAws_json1_0DeleteFHIRDatastoreCommand;
const serializeAws_json1_0DescribeFHIRDatastoreCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "HealthLake.DescribeFHIRDatastore",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeFHIRDatastoreRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DescribeFHIRDatastoreCommand = serializeAws_json1_0DescribeFHIRDatastoreCommand;
const serializeAws_json1_0DescribeFHIRExportJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "HealthLake.DescribeFHIRExportJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeFHIRExportJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DescribeFHIRExportJobCommand = serializeAws_json1_0DescribeFHIRExportJobCommand;
const serializeAws_json1_0DescribeFHIRImportJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "HealthLake.DescribeFHIRImportJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeFHIRImportJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DescribeFHIRImportJobCommand = serializeAws_json1_0DescribeFHIRImportJobCommand;
const serializeAws_json1_0ListFHIRDatastoresCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "HealthLake.ListFHIRDatastores",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ListFHIRDatastoresRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ListFHIRDatastoresCommand = serializeAws_json1_0ListFHIRDatastoresCommand;
const serializeAws_json1_0StartFHIRExportJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "HealthLake.StartFHIRExportJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0StartFHIRExportJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0StartFHIRExportJobCommand = serializeAws_json1_0StartFHIRExportJobCommand;
const serializeAws_json1_0StartFHIRImportJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "HealthLake.StartFHIRImportJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0StartFHIRImportJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0StartFHIRImportJobCommand = serializeAws_json1_0StartFHIRImportJobCommand;
const deserializeAws_json1_0CreateFHIRDatastoreCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0CreateFHIRDatastoreCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0CreateFHIRDatastoreResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0CreateFHIRDatastoreCommand = deserializeAws_json1_0CreateFHIRDatastoreCommand;
const deserializeAws_json1_0CreateFHIRDatastoreCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.healthlake#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.healthlake#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.healthlake#ValidationException":
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
const deserializeAws_json1_0DeleteFHIRDatastoreCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DeleteFHIRDatastoreCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DeleteFHIRDatastoreResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DeleteFHIRDatastoreCommand = deserializeAws_json1_0DeleteFHIRDatastoreCommand;
const deserializeAws_json1_0DeleteFHIRDatastoreCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.healthlake#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.healthlake#ConflictException":
            response = {
                ...(await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.healthlake#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.healthlake#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.healthlake#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.healthlake#ValidationException":
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
const deserializeAws_json1_0DescribeFHIRDatastoreCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DescribeFHIRDatastoreCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeFHIRDatastoreResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DescribeFHIRDatastoreCommand = deserializeAws_json1_0DescribeFHIRDatastoreCommand;
const deserializeAws_json1_0DescribeFHIRDatastoreCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.healthlake#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.healthlake#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.healthlake#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.healthlake#ValidationException":
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
const deserializeAws_json1_0DescribeFHIRExportJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DescribeFHIRExportJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeFHIRExportJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DescribeFHIRExportJobCommand = deserializeAws_json1_0DescribeFHIRExportJobCommand;
const deserializeAws_json1_0DescribeFHIRExportJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.healthlake#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.healthlake#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.healthlake#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.healthlake#ValidationException":
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
const deserializeAws_json1_0DescribeFHIRImportJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DescribeFHIRImportJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeFHIRImportJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DescribeFHIRImportJobCommand = deserializeAws_json1_0DescribeFHIRImportJobCommand;
const deserializeAws_json1_0DescribeFHIRImportJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.healthlake#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.healthlake#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.healthlake#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.healthlake#ValidationException":
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
const deserializeAws_json1_0ListFHIRDatastoresCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0ListFHIRDatastoresCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ListFHIRDatastoresResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0ListFHIRDatastoresCommand = deserializeAws_json1_0ListFHIRDatastoresCommand;
const deserializeAws_json1_0ListFHIRDatastoresCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.healthlake#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.healthlake#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.healthlake#ValidationException":
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
const deserializeAws_json1_0StartFHIRExportJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0StartFHIRExportJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0StartFHIRExportJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0StartFHIRExportJobCommand = deserializeAws_json1_0StartFHIRExportJobCommand;
const deserializeAws_json1_0StartFHIRExportJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.healthlake#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.healthlake#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.healthlake#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.healthlake#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.healthlake#ValidationException":
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
const deserializeAws_json1_0StartFHIRImportJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0StartFHIRImportJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0StartFHIRImportJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0StartFHIRImportJobCommand = deserializeAws_json1_0StartFHIRImportJobCommand;
const deserializeAws_json1_0StartFHIRImportJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.healthlake#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.healthlake#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.healthlake#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.healthlake#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.healthlake#ValidationException":
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
const serializeAws_json1_0CreateFHIRDatastoreRequest = (input, context) => {
    var _a;
    return {
        ClientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.DatastoreName !== undefined && input.DatastoreName !== null && { DatastoreName: input.DatastoreName }),
        ...(input.DatastoreTypeVersion !== undefined &&
            input.DatastoreTypeVersion !== null && { DatastoreTypeVersion: input.DatastoreTypeVersion }),
        ...(input.PreloadDataConfig !== undefined &&
            input.PreloadDataConfig !== null && {
            PreloadDataConfig: serializeAws_json1_0PreloadDataConfig(input.PreloadDataConfig, context),
        }),
    };
};
const serializeAws_json1_0DatastoreFilter = (input, context) => {
    return {
        ...(input.CreatedAfter !== undefined &&
            input.CreatedAfter !== null && { CreatedAfter: Math.round(input.CreatedAfter.getTime() / 1000) }),
        ...(input.CreatedBefore !== undefined &&
            input.CreatedBefore !== null && { CreatedBefore: Math.round(input.CreatedBefore.getTime() / 1000) }),
        ...(input.DatastoreName !== undefined && input.DatastoreName !== null && { DatastoreName: input.DatastoreName }),
        ...(input.DatastoreStatus !== undefined &&
            input.DatastoreStatus !== null && { DatastoreStatus: input.DatastoreStatus }),
    };
};
const serializeAws_json1_0DeleteFHIRDatastoreRequest = (input, context) => {
    return {
        ...(input.DatastoreId !== undefined && input.DatastoreId !== null && { DatastoreId: input.DatastoreId }),
    };
};
const serializeAws_json1_0DescribeFHIRDatastoreRequest = (input, context) => {
    return {
        ...(input.DatastoreId !== undefined && input.DatastoreId !== null && { DatastoreId: input.DatastoreId }),
    };
};
const serializeAws_json1_0DescribeFHIRExportJobRequest = (input, context) => {
    return {
        ...(input.DatastoreId !== undefined && input.DatastoreId !== null && { DatastoreId: input.DatastoreId }),
        ...(input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId }),
    };
};
const serializeAws_json1_0DescribeFHIRImportJobRequest = (input, context) => {
    return {
        ...(input.DatastoreId !== undefined && input.DatastoreId !== null && { DatastoreId: input.DatastoreId }),
        ...(input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId }),
    };
};
const serializeAws_json1_0InputDataConfig = (input, context) => {
    return models_0_1.InputDataConfig.visit(input, {
        S3Uri: (value) => ({ S3Uri: value }),
        _: (name, value) => ({ name: value }),
    });
};
const serializeAws_json1_0ListFHIRDatastoresRequest = (input, context) => {
    return {
        ...(input.Filter !== undefined &&
            input.Filter !== null && { Filter: serializeAws_json1_0DatastoreFilter(input.Filter, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_0OutputDataConfig = (input, context) => {
    return models_0_1.OutputDataConfig.visit(input, {
        S3Uri: (value) => ({ S3Uri: value }),
        _: (name, value) => ({ name: value }),
    });
};
const serializeAws_json1_0PreloadDataConfig = (input, context) => {
    return {
        ...(input.PreloadDataType !== undefined &&
            input.PreloadDataType !== null && { PreloadDataType: input.PreloadDataType }),
    };
};
const serializeAws_json1_0StartFHIRExportJobRequest = (input, context) => {
    var _a;
    return {
        ClientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.DataAccessRoleArn !== undefined &&
            input.DataAccessRoleArn !== null && { DataAccessRoleArn: input.DataAccessRoleArn }),
        ...(input.DatastoreId !== undefined && input.DatastoreId !== null && { DatastoreId: input.DatastoreId }),
        ...(input.JobName !== undefined && input.JobName !== null && { JobName: input.JobName }),
        ...(input.OutputDataConfig !== undefined &&
            input.OutputDataConfig !== null && {
            OutputDataConfig: serializeAws_json1_0OutputDataConfig(input.OutputDataConfig, context),
        }),
    };
};
const serializeAws_json1_0StartFHIRImportJobRequest = (input, context) => {
    var _a;
    return {
        ClientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.DataAccessRoleArn !== undefined &&
            input.DataAccessRoleArn !== null && { DataAccessRoleArn: input.DataAccessRoleArn }),
        ...(input.DatastoreId !== undefined && input.DatastoreId !== null && { DatastoreId: input.DatastoreId }),
        ...(input.InputDataConfig !== undefined &&
            input.InputDataConfig !== null && {
            InputDataConfig: serializeAws_json1_0InputDataConfig(input.InputDataConfig, context),
        }),
        ...(input.JobName !== undefined && input.JobName !== null && { JobName: input.JobName }),
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
const deserializeAws_json1_0CreateFHIRDatastoreResponse = (output, context) => {
    return {
        DatastoreArn: output.DatastoreArn !== undefined && output.DatastoreArn !== null ? output.DatastoreArn : undefined,
        DatastoreEndpoint: output.DatastoreEndpoint !== undefined && output.DatastoreEndpoint !== null
            ? output.DatastoreEndpoint
            : undefined,
        DatastoreId: output.DatastoreId !== undefined && output.DatastoreId !== null ? output.DatastoreId : undefined,
        DatastoreStatus: output.DatastoreStatus !== undefined && output.DatastoreStatus !== null ? output.DatastoreStatus : undefined,
    };
};
const deserializeAws_json1_0DatastoreProperties = (output, context) => {
    return {
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        DatastoreArn: output.DatastoreArn !== undefined && output.DatastoreArn !== null ? output.DatastoreArn : undefined,
        DatastoreEndpoint: output.DatastoreEndpoint !== undefined && output.DatastoreEndpoint !== null
            ? output.DatastoreEndpoint
            : undefined,
        DatastoreId: output.DatastoreId !== undefined && output.DatastoreId !== null ? output.DatastoreId : undefined,
        DatastoreName: output.DatastoreName !== undefined && output.DatastoreName !== null ? output.DatastoreName : undefined,
        DatastoreStatus: output.DatastoreStatus !== undefined && output.DatastoreStatus !== null ? output.DatastoreStatus : undefined,
        DatastoreTypeVersion: output.DatastoreTypeVersion !== undefined && output.DatastoreTypeVersion !== null
            ? output.DatastoreTypeVersion
            : undefined,
        PreloadDataConfig: output.PreloadDataConfig !== undefined && output.PreloadDataConfig !== null
            ? deserializeAws_json1_0PreloadDataConfig(output.PreloadDataConfig, context)
            : undefined,
    };
};
const deserializeAws_json1_0DatastorePropertiesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0DatastoreProperties(entry, context);
    });
};
const deserializeAws_json1_0DeleteFHIRDatastoreResponse = (output, context) => {
    return {
        DatastoreArn: output.DatastoreArn !== undefined && output.DatastoreArn !== null ? output.DatastoreArn : undefined,
        DatastoreEndpoint: output.DatastoreEndpoint !== undefined && output.DatastoreEndpoint !== null
            ? output.DatastoreEndpoint
            : undefined,
        DatastoreId: output.DatastoreId !== undefined && output.DatastoreId !== null ? output.DatastoreId : undefined,
        DatastoreStatus: output.DatastoreStatus !== undefined && output.DatastoreStatus !== null ? output.DatastoreStatus : undefined,
    };
};
const deserializeAws_json1_0DescribeFHIRDatastoreResponse = (output, context) => {
    return {
        DatastoreProperties: output.DatastoreProperties !== undefined && output.DatastoreProperties !== null
            ? deserializeAws_json1_0DatastoreProperties(output.DatastoreProperties, context)
            : undefined,
    };
};
const deserializeAws_json1_0DescribeFHIRExportJobResponse = (output, context) => {
    return {
        ExportJobProperties: output.ExportJobProperties !== undefined && output.ExportJobProperties !== null
            ? deserializeAws_json1_0ExportJobProperties(output.ExportJobProperties, context)
            : undefined,
    };
};
const deserializeAws_json1_0DescribeFHIRImportJobResponse = (output, context) => {
    return {
        ImportJobProperties: output.ImportJobProperties !== undefined && output.ImportJobProperties !== null
            ? deserializeAws_json1_0ImportJobProperties(output.ImportJobProperties, context)
            : undefined,
    };
};
const deserializeAws_json1_0ExportJobProperties = (output, context) => {
    return {
        DataAccessRoleArn: output.DataAccessRoleArn !== undefined && output.DataAccessRoleArn !== null
            ? output.DataAccessRoleArn
            : undefined,
        DatastoreId: output.DatastoreId !== undefined && output.DatastoreId !== null ? output.DatastoreId : undefined,
        EndTime: output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
        JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
        JobName: output.JobName !== undefined && output.JobName !== null ? output.JobName : undefined,
        JobStatus: output.JobStatus !== undefined && output.JobStatus !== null ? output.JobStatus : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        OutputDataConfig: output.OutputDataConfig !== undefined && output.OutputDataConfig !== null
            ? deserializeAws_json1_0OutputDataConfig(output.OutputDataConfig, context)
            : undefined,
        SubmitTime: output.SubmitTime !== undefined && output.SubmitTime !== null
            ? new Date(Math.round(output.SubmitTime * 1000))
            : undefined,
    };
};
const deserializeAws_json1_0ImportJobProperties = (output, context) => {
    return {
        DataAccessRoleArn: output.DataAccessRoleArn !== undefined && output.DataAccessRoleArn !== null
            ? output.DataAccessRoleArn
            : undefined,
        DatastoreId: output.DatastoreId !== undefined && output.DatastoreId !== null ? output.DatastoreId : undefined,
        EndTime: output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
        InputDataConfig: output.InputDataConfig !== undefined && output.InputDataConfig !== null
            ? deserializeAws_json1_0InputDataConfig(output.InputDataConfig, context)
            : undefined,
        JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
        JobName: output.JobName !== undefined && output.JobName !== null ? output.JobName : undefined,
        JobStatus: output.JobStatus !== undefined && output.JobStatus !== null ? output.JobStatus : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        SubmitTime: output.SubmitTime !== undefined && output.SubmitTime !== null
            ? new Date(Math.round(output.SubmitTime * 1000))
            : undefined,
    };
};
const deserializeAws_json1_0InputDataConfig = (output, context) => {
    if (output.S3Uri !== undefined && output.S3Uri !== null) {
        return {
            S3Uri: output.S3Uri,
        };
    }
    return { $unknown: Object.entries(output)[0] };
};
const deserializeAws_json1_0InternalServerException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0ListFHIRDatastoresResponse = (output, context) => {
    return {
        DatastorePropertiesList: output.DatastorePropertiesList !== undefined && output.DatastorePropertiesList !== null
            ? deserializeAws_json1_0DatastorePropertiesList(output.DatastorePropertiesList, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_0OutputDataConfig = (output, context) => {
    if (output.S3Uri !== undefined && output.S3Uri !== null) {
        return {
            S3Uri: output.S3Uri,
        };
    }
    return { $unknown: Object.entries(output)[0] };
};
const deserializeAws_json1_0PreloadDataConfig = (output, context) => {
    return {
        PreloadDataType: output.PreloadDataType !== undefined && output.PreloadDataType !== null ? output.PreloadDataType : undefined,
    };
};
const deserializeAws_json1_0ResourceNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0StartFHIRExportJobResponse = (output, context) => {
    return {
        DatastoreId: output.DatastoreId !== undefined && output.DatastoreId !== null ? output.DatastoreId : undefined,
        JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
        JobStatus: output.JobStatus !== undefined && output.JobStatus !== null ? output.JobStatus : undefined,
    };
};
const deserializeAws_json1_0StartFHIRImportJobResponse = (output, context) => {
    return {
        DatastoreId: output.DatastoreId !== undefined && output.DatastoreId !== null ? output.DatastoreId : undefined,
        JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
        JobStatus: output.JobStatus !== undefined && output.JobStatus !== null ? output.JobStatus : undefined,
    };
};
const deserializeAws_json1_0ThrottlingException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
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