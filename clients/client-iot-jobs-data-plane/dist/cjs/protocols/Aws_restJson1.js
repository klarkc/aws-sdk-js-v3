"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1UpdateJobExecutionCommand = exports.deserializeAws_restJson1StartNextPendingJobExecutionCommand = exports.deserializeAws_restJson1GetPendingJobExecutionsCommand = exports.deserializeAws_restJson1DescribeJobExecutionCommand = exports.serializeAws_restJson1UpdateJobExecutionCommand = exports.serializeAws_restJson1StartNextPendingJobExecutionCommand = exports.serializeAws_restJson1GetPendingJobExecutionsCommand = exports.serializeAws_restJson1DescribeJobExecutionCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1DescribeJobExecutionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/things/{thingName}/jobs/{jobId}";
    if (input.jobId !== undefined) {
        const labelValue = input.jobId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: jobId.");
        }
        resolvedPath = resolvedPath.replace("{jobId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: jobId.");
    }
    if (input.thingName !== undefined) {
        const labelValue = input.thingName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: thingName.");
        }
        resolvedPath = resolvedPath.replace("{thingName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: thingName.");
    }
    const query = {
        ...(input.includeJobDocument !== undefined && { includeJobDocument: input.includeJobDocument.toString() }),
        ...(input.executionNumber !== undefined && { executionNumber: input.executionNumber.toString() }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1DescribeJobExecutionCommand = serializeAws_restJson1DescribeJobExecutionCommand;
const serializeAws_restJson1GetPendingJobExecutionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/things/{thingName}/jobs";
    if (input.thingName !== undefined) {
        const labelValue = input.thingName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: thingName.");
        }
        resolvedPath = resolvedPath.replace("{thingName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: thingName.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetPendingJobExecutionsCommand = serializeAws_restJson1GetPendingJobExecutionsCommand;
const serializeAws_restJson1StartNextPendingJobExecutionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/things/{thingName}/jobs/$next";
    if (input.thingName !== undefined) {
        const labelValue = input.thingName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: thingName.");
        }
        resolvedPath = resolvedPath.replace("{thingName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: thingName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.statusDetails !== undefined &&
            input.statusDetails !== null && {
            statusDetails: serializeAws_restJson1DetailsMap(input.statusDetails, context),
        }),
        ...(input.stepTimeoutInMinutes !== undefined &&
            input.stepTimeoutInMinutes !== null && { stepTimeoutInMinutes: input.stepTimeoutInMinutes }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1StartNextPendingJobExecutionCommand = serializeAws_restJson1StartNextPendingJobExecutionCommand;
const serializeAws_restJson1UpdateJobExecutionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/things/{thingName}/jobs/{jobId}";
    if (input.jobId !== undefined) {
        const labelValue = input.jobId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: jobId.");
        }
        resolvedPath = resolvedPath.replace("{jobId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: jobId.");
    }
    if (input.thingName !== undefined) {
        const labelValue = input.thingName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: thingName.");
        }
        resolvedPath = resolvedPath.replace("{thingName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: thingName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.executionNumber !== undefined &&
            input.executionNumber !== null && { executionNumber: input.executionNumber }),
        ...(input.expectedVersion !== undefined &&
            input.expectedVersion !== null && { expectedVersion: input.expectedVersion }),
        ...(input.includeJobDocument !== undefined &&
            input.includeJobDocument !== null && { includeJobDocument: input.includeJobDocument }),
        ...(input.includeJobExecutionState !== undefined &&
            input.includeJobExecutionState !== null && { includeJobExecutionState: input.includeJobExecutionState }),
        ...(input.status !== undefined && input.status !== null && { status: input.status }),
        ...(input.statusDetails !== undefined &&
            input.statusDetails !== null && {
            statusDetails: serializeAws_restJson1DetailsMap(input.statusDetails, context),
        }),
        ...(input.stepTimeoutInMinutes !== undefined &&
            input.stepTimeoutInMinutes !== null && { stepTimeoutInMinutes: input.stepTimeoutInMinutes }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateJobExecutionCommand = serializeAws_restJson1UpdateJobExecutionCommand;
const deserializeAws_restJson1DescribeJobExecutionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeJobExecutionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        execution: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.execution !== undefined && data.execution !== null) {
        contents.execution = deserializeAws_restJson1JobExecution(data.execution, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeJobExecutionCommand = deserializeAws_restJson1DescribeJobExecutionCommand;
const deserializeAws_restJson1DescribeJobExecutionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CertificateValidationException":
        case "com.amazonaws.iotjobsdataplane#CertificateValidationException":
            response = {
                ...(await deserializeAws_restJson1CertificateValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotjobsdataplane#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotjobsdataplane#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotjobsdataplane#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TerminalStateException":
        case "com.amazonaws.iotjobsdataplane#TerminalStateException":
            response = {
                ...(await deserializeAws_restJson1TerminalStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotjobsdataplane#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetPendingJobExecutionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetPendingJobExecutionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        inProgressJobs: undefined,
        queuedJobs: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.inProgressJobs !== undefined && data.inProgressJobs !== null) {
        contents.inProgressJobs = deserializeAws_restJson1JobExecutionSummaryList(data.inProgressJobs, context);
    }
    if (data.queuedJobs !== undefined && data.queuedJobs !== null) {
        contents.queuedJobs = deserializeAws_restJson1JobExecutionSummaryList(data.queuedJobs, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetPendingJobExecutionsCommand = deserializeAws_restJson1GetPendingJobExecutionsCommand;
const deserializeAws_restJson1GetPendingJobExecutionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CertificateValidationException":
        case "com.amazonaws.iotjobsdataplane#CertificateValidationException":
            response = {
                ...(await deserializeAws_restJson1CertificateValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotjobsdataplane#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotjobsdataplane#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotjobsdataplane#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotjobsdataplane#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1StartNextPendingJobExecutionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1StartNextPendingJobExecutionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        execution: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.execution !== undefined && data.execution !== null) {
        contents.execution = deserializeAws_restJson1JobExecution(data.execution, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StartNextPendingJobExecutionCommand = deserializeAws_restJson1StartNextPendingJobExecutionCommand;
const deserializeAws_restJson1StartNextPendingJobExecutionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CertificateValidationException":
        case "com.amazonaws.iotjobsdataplane#CertificateValidationException":
            response = {
                ...(await deserializeAws_restJson1CertificateValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotjobsdataplane#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotjobsdataplane#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotjobsdataplane#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotjobsdataplane#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateJobExecutionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateJobExecutionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        executionState: undefined,
        jobDocument: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.executionState !== undefined && data.executionState !== null) {
        contents.executionState = deserializeAws_restJson1JobExecutionState(data.executionState, context);
    }
    if (data.jobDocument !== undefined && data.jobDocument !== null) {
        contents.jobDocument = data.jobDocument;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateJobExecutionCommand = deserializeAws_restJson1UpdateJobExecutionCommand;
const deserializeAws_restJson1UpdateJobExecutionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CertificateValidationException":
        case "com.amazonaws.iotjobsdataplane#CertificateValidationException":
            response = {
                ...(await deserializeAws_restJson1CertificateValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotjobsdataplane#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidStateTransitionException":
        case "com.amazonaws.iotjobsdataplane#InvalidStateTransitionException":
            response = {
                ...(await deserializeAws_restJson1InvalidStateTransitionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotjobsdataplane#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotjobsdataplane#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotjobsdataplane#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CertificateValidationExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "CertificateValidationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1InvalidRequestExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidRequestException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1InvalidStateTransitionExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidStateTransitionException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ServiceUnavailableException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1TerminalStateExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TerminalStateException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ThrottlingException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
        payload: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    if (data.payload !== undefined && data.payload !== null) {
        contents.payload = context.base64Decoder(data.payload);
    }
    return contents;
};
const serializeAws_restJson1DetailsMap = (input, context) => {
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
const deserializeAws_restJson1DetailsMap = (output, context) => {
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
const deserializeAws_restJson1JobExecution = (output, context) => {
    return {
        approximateSecondsBeforeTimedOut: output.approximateSecondsBeforeTimedOut !== undefined && output.approximateSecondsBeforeTimedOut !== null
            ? output.approximateSecondsBeforeTimedOut
            : undefined,
        executionNumber: output.executionNumber !== undefined && output.executionNumber !== null ? output.executionNumber : undefined,
        jobDocument: output.jobDocument !== undefined && output.jobDocument !== null ? output.jobDocument : undefined,
        jobId: output.jobId !== undefined && output.jobId !== null ? output.jobId : undefined,
        lastUpdatedAt: output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null ? output.lastUpdatedAt : undefined,
        queuedAt: output.queuedAt !== undefined && output.queuedAt !== null ? output.queuedAt : undefined,
        startedAt: output.startedAt !== undefined && output.startedAt !== null ? output.startedAt : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        statusDetails: output.statusDetails !== undefined && output.statusDetails !== null
            ? deserializeAws_restJson1DetailsMap(output.statusDetails, context)
            : undefined,
        thingName: output.thingName !== undefined && output.thingName !== null ? output.thingName : undefined,
        versionNumber: output.versionNumber !== undefined && output.versionNumber !== null ? output.versionNumber : undefined,
    };
};
const deserializeAws_restJson1JobExecutionState = (output, context) => {
    return {
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        statusDetails: output.statusDetails !== undefined && output.statusDetails !== null
            ? deserializeAws_restJson1DetailsMap(output.statusDetails, context)
            : undefined,
        versionNumber: output.versionNumber !== undefined && output.versionNumber !== null ? output.versionNumber : undefined,
    };
};
const deserializeAws_restJson1JobExecutionSummary = (output, context) => {
    return {
        executionNumber: output.executionNumber !== undefined && output.executionNumber !== null ? output.executionNumber : undefined,
        jobId: output.jobId !== undefined && output.jobId !== null ? output.jobId : undefined,
        lastUpdatedAt: output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null ? output.lastUpdatedAt : undefined,
        queuedAt: output.queuedAt !== undefined && output.queuedAt !== null ? output.queuedAt : undefined,
        startedAt: output.startedAt !== undefined && output.startedAt !== null ? output.startedAt : undefined,
        versionNumber: output.versionNumber !== undefined && output.versionNumber !== null ? output.versionNumber : undefined,
    };
};
const deserializeAws_restJson1JobExecutionSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1JobExecutionSummary(entry, context);
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
const isSerializableHeaderValue = (value) => value !== undefined &&
    value !== null &&
    value !== "" &&
    (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
    (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
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
//# sourceMappingURL=Aws_restJson1.js.map