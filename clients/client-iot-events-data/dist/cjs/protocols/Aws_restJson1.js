"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1ListDetectorsCommand = exports.deserializeAws_restJson1ListAlarmsCommand = exports.deserializeAws_restJson1DescribeDetectorCommand = exports.deserializeAws_restJson1DescribeAlarmCommand = exports.deserializeAws_restJson1BatchUpdateDetectorCommand = exports.deserializeAws_restJson1BatchSnoozeAlarmCommand = exports.deserializeAws_restJson1BatchResetAlarmCommand = exports.deserializeAws_restJson1BatchPutMessageCommand = exports.deserializeAws_restJson1BatchEnableAlarmCommand = exports.deserializeAws_restJson1BatchDisableAlarmCommand = exports.deserializeAws_restJson1BatchAcknowledgeAlarmCommand = exports.serializeAws_restJson1ListDetectorsCommand = exports.serializeAws_restJson1ListAlarmsCommand = exports.serializeAws_restJson1DescribeDetectorCommand = exports.serializeAws_restJson1DescribeAlarmCommand = exports.serializeAws_restJson1BatchUpdateDetectorCommand = exports.serializeAws_restJson1BatchSnoozeAlarmCommand = exports.serializeAws_restJson1BatchResetAlarmCommand = exports.serializeAws_restJson1BatchPutMessageCommand = exports.serializeAws_restJson1BatchEnableAlarmCommand = exports.serializeAws_restJson1BatchDisableAlarmCommand = exports.serializeAws_restJson1BatchAcknowledgeAlarmCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1BatchAcknowledgeAlarmCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/alarms/acknowledge";
    let body;
    body = JSON.stringify({
        ...(input.acknowledgeActionRequests !== undefined &&
            input.acknowledgeActionRequests !== null && {
            acknowledgeActionRequests: serializeAws_restJson1AcknowledgeAlarmActionRequests(input.acknowledgeActionRequests, context),
        }),
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
exports.serializeAws_restJson1BatchAcknowledgeAlarmCommand = serializeAws_restJson1BatchAcknowledgeAlarmCommand;
const serializeAws_restJson1BatchDisableAlarmCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/alarms/disable";
    let body;
    body = JSON.stringify({
        ...(input.disableActionRequests !== undefined &&
            input.disableActionRequests !== null && {
            disableActionRequests: serializeAws_restJson1DisableAlarmActionRequests(input.disableActionRequests, context),
        }),
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
exports.serializeAws_restJson1BatchDisableAlarmCommand = serializeAws_restJson1BatchDisableAlarmCommand;
const serializeAws_restJson1BatchEnableAlarmCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/alarms/enable";
    let body;
    body = JSON.stringify({
        ...(input.enableActionRequests !== undefined &&
            input.enableActionRequests !== null && {
            enableActionRequests: serializeAws_restJson1EnableAlarmActionRequests(input.enableActionRequests, context),
        }),
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
exports.serializeAws_restJson1BatchEnableAlarmCommand = serializeAws_restJson1BatchEnableAlarmCommand;
const serializeAws_restJson1BatchPutMessageCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/inputs/messages";
    let body;
    body = JSON.stringify({
        ...(input.messages !== undefined &&
            input.messages !== null && { messages: serializeAws_restJson1Messages(input.messages, context) }),
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
exports.serializeAws_restJson1BatchPutMessageCommand = serializeAws_restJson1BatchPutMessageCommand;
const serializeAws_restJson1BatchResetAlarmCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/alarms/reset";
    let body;
    body = JSON.stringify({
        ...(input.resetActionRequests !== undefined &&
            input.resetActionRequests !== null && {
            resetActionRequests: serializeAws_restJson1ResetAlarmActionRequests(input.resetActionRequests, context),
        }),
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
exports.serializeAws_restJson1BatchResetAlarmCommand = serializeAws_restJson1BatchResetAlarmCommand;
const serializeAws_restJson1BatchSnoozeAlarmCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/alarms/snooze";
    let body;
    body = JSON.stringify({
        ...(input.snoozeActionRequests !== undefined &&
            input.snoozeActionRequests !== null && {
            snoozeActionRequests: serializeAws_restJson1SnoozeAlarmActionRequests(input.snoozeActionRequests, context),
        }),
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
exports.serializeAws_restJson1BatchSnoozeAlarmCommand = serializeAws_restJson1BatchSnoozeAlarmCommand;
const serializeAws_restJson1BatchUpdateDetectorCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/detectors";
    let body;
    body = JSON.stringify({
        ...(input.detectors !== undefined &&
            input.detectors !== null && {
            detectors: serializeAws_restJson1UpdateDetectorRequests(input.detectors, context),
        }),
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
exports.serializeAws_restJson1BatchUpdateDetectorCommand = serializeAws_restJson1BatchUpdateDetectorCommand;
const serializeAws_restJson1DescribeAlarmCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/alarms/{alarmModelName}/keyValues";
    if (input.alarmModelName !== undefined) {
        const labelValue = input.alarmModelName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: alarmModelName.");
        }
        resolvedPath = resolvedPath.replace("{alarmModelName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: alarmModelName.");
    }
    const query = {
        ...(input.keyValue !== undefined && { keyValue: input.keyValue }),
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
exports.serializeAws_restJson1DescribeAlarmCommand = serializeAws_restJson1DescribeAlarmCommand;
const serializeAws_restJson1DescribeDetectorCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/detectors/{detectorModelName}/keyValues";
    if (input.detectorModelName !== undefined) {
        const labelValue = input.detectorModelName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: detectorModelName.");
        }
        resolvedPath = resolvedPath.replace("{detectorModelName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: detectorModelName.");
    }
    const query = {
        ...(input.keyValue !== undefined && { keyValue: input.keyValue }),
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
exports.serializeAws_restJson1DescribeDetectorCommand = serializeAws_restJson1DescribeDetectorCommand;
const serializeAws_restJson1ListAlarmsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/alarms/{alarmModelName}";
    if (input.alarmModelName !== undefined) {
        const labelValue = input.alarmModelName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: alarmModelName.");
        }
        resolvedPath = resolvedPath.replace("{alarmModelName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: alarmModelName.");
    }
    const query = {
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
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
exports.serializeAws_restJson1ListAlarmsCommand = serializeAws_restJson1ListAlarmsCommand;
const serializeAws_restJson1ListDetectorsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/detectors/{detectorModelName}";
    if (input.detectorModelName !== undefined) {
        const labelValue = input.detectorModelName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: detectorModelName.");
        }
        resolvedPath = resolvedPath.replace("{detectorModelName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: detectorModelName.");
    }
    const query = {
        ...(input.stateName !== undefined && { stateName: input.stateName }),
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
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
exports.serializeAws_restJson1ListDetectorsCommand = serializeAws_restJson1ListDetectorsCommand;
const deserializeAws_restJson1BatchAcknowledgeAlarmCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1BatchAcknowledgeAlarmCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        errorEntries: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.errorEntries !== undefined && data.errorEntries !== null) {
        contents.errorEntries = deserializeAws_restJson1BatchAlarmActionErrorEntries(data.errorEntries, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1BatchAcknowledgeAlarmCommand = deserializeAws_restJson1BatchAcknowledgeAlarmCommand;
const deserializeAws_restJson1BatchAcknowledgeAlarmCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.ioteventsdata#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.ioteventsdata#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.ioteventsdata#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ioteventsdata#ThrottlingException":
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
const deserializeAws_restJson1BatchDisableAlarmCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1BatchDisableAlarmCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        errorEntries: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.errorEntries !== undefined && data.errorEntries !== null) {
        contents.errorEntries = deserializeAws_restJson1BatchAlarmActionErrorEntries(data.errorEntries, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1BatchDisableAlarmCommand = deserializeAws_restJson1BatchDisableAlarmCommand;
const deserializeAws_restJson1BatchDisableAlarmCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.ioteventsdata#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.ioteventsdata#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.ioteventsdata#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ioteventsdata#ThrottlingException":
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
const deserializeAws_restJson1BatchEnableAlarmCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1BatchEnableAlarmCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        errorEntries: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.errorEntries !== undefined && data.errorEntries !== null) {
        contents.errorEntries = deserializeAws_restJson1BatchAlarmActionErrorEntries(data.errorEntries, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1BatchEnableAlarmCommand = deserializeAws_restJson1BatchEnableAlarmCommand;
const deserializeAws_restJson1BatchEnableAlarmCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.ioteventsdata#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.ioteventsdata#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.ioteventsdata#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ioteventsdata#ThrottlingException":
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
const deserializeAws_restJson1BatchPutMessageCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1BatchPutMessageCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        BatchPutMessageErrorEntries: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.BatchPutMessageErrorEntries !== undefined && data.BatchPutMessageErrorEntries !== null) {
        contents.BatchPutMessageErrorEntries = deserializeAws_restJson1BatchPutMessageErrorEntries(data.BatchPutMessageErrorEntries, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1BatchPutMessageCommand = deserializeAws_restJson1BatchPutMessageCommand;
const deserializeAws_restJson1BatchPutMessageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.ioteventsdata#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.ioteventsdata#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.ioteventsdata#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ioteventsdata#ThrottlingException":
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
const deserializeAws_restJson1BatchResetAlarmCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1BatchResetAlarmCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        errorEntries: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.errorEntries !== undefined && data.errorEntries !== null) {
        contents.errorEntries = deserializeAws_restJson1BatchAlarmActionErrorEntries(data.errorEntries, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1BatchResetAlarmCommand = deserializeAws_restJson1BatchResetAlarmCommand;
const deserializeAws_restJson1BatchResetAlarmCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.ioteventsdata#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.ioteventsdata#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.ioteventsdata#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ioteventsdata#ThrottlingException":
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
const deserializeAws_restJson1BatchSnoozeAlarmCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1BatchSnoozeAlarmCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        errorEntries: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.errorEntries !== undefined && data.errorEntries !== null) {
        contents.errorEntries = deserializeAws_restJson1BatchAlarmActionErrorEntries(data.errorEntries, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1BatchSnoozeAlarmCommand = deserializeAws_restJson1BatchSnoozeAlarmCommand;
const deserializeAws_restJson1BatchSnoozeAlarmCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.ioteventsdata#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.ioteventsdata#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.ioteventsdata#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ioteventsdata#ThrottlingException":
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
const deserializeAws_restJson1BatchUpdateDetectorCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1BatchUpdateDetectorCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        batchUpdateDetectorErrorEntries: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.batchUpdateDetectorErrorEntries !== undefined && data.batchUpdateDetectorErrorEntries !== null) {
        contents.batchUpdateDetectorErrorEntries = deserializeAws_restJson1BatchUpdateDetectorErrorEntries(data.batchUpdateDetectorErrorEntries, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1BatchUpdateDetectorCommand = deserializeAws_restJson1BatchUpdateDetectorCommand;
const deserializeAws_restJson1BatchUpdateDetectorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.ioteventsdata#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.ioteventsdata#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.ioteventsdata#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ioteventsdata#ThrottlingException":
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
const deserializeAws_restJson1DescribeAlarmCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeAlarmCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        alarm: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.alarm !== undefined && data.alarm !== null) {
        contents.alarm = deserializeAws_restJson1Alarm(data.alarm, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeAlarmCommand = deserializeAws_restJson1DescribeAlarmCommand;
const deserializeAws_restJson1DescribeAlarmCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.ioteventsdata#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.ioteventsdata#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ioteventsdata#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.ioteventsdata#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ioteventsdata#ThrottlingException":
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
const deserializeAws_restJson1DescribeDetectorCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeDetectorCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        detector: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.detector !== undefined && data.detector !== null) {
        contents.detector = deserializeAws_restJson1Detector(data.detector, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeDetectorCommand = deserializeAws_restJson1DescribeDetectorCommand;
const deserializeAws_restJson1DescribeDetectorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.ioteventsdata#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.ioteventsdata#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ioteventsdata#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.ioteventsdata#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ioteventsdata#ThrottlingException":
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
const deserializeAws_restJson1ListAlarmsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListAlarmsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        alarmSummaries: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.alarmSummaries !== undefined && data.alarmSummaries !== null) {
        contents.alarmSummaries = deserializeAws_restJson1AlarmSummaries(data.alarmSummaries, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListAlarmsCommand = deserializeAws_restJson1ListAlarmsCommand;
const deserializeAws_restJson1ListAlarmsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.ioteventsdata#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.ioteventsdata#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ioteventsdata#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.ioteventsdata#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ioteventsdata#ThrottlingException":
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
const deserializeAws_restJson1ListDetectorsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListDetectorsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        detectorSummaries: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.detectorSummaries !== undefined && data.detectorSummaries !== null) {
        contents.detectorSummaries = deserializeAws_restJson1DetectorSummaries(data.detectorSummaries, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListDetectorsCommand = deserializeAws_restJson1ListDetectorsCommand;
const deserializeAws_restJson1ListDetectorsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.ioteventsdata#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.ioteventsdata#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ioteventsdata#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.ioteventsdata#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ioteventsdata#ThrottlingException":
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
const deserializeAws_restJson1InternalFailureExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalFailureException",
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
const deserializeAws_restJson1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ThrottlingException",
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
const serializeAws_restJson1AcknowledgeAlarmActionRequest = (input, context) => {
    return {
        ...(input.alarmModelName !== undefined &&
            input.alarmModelName !== null && { alarmModelName: input.alarmModelName }),
        ...(input.keyValue !== undefined && input.keyValue !== null && { keyValue: input.keyValue }),
        ...(input.note !== undefined && input.note !== null && { note: input.note }),
        ...(input.requestId !== undefined && input.requestId !== null && { requestId: input.requestId }),
    };
};
const serializeAws_restJson1AcknowledgeAlarmActionRequests = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AcknowledgeAlarmActionRequest(entry, context);
    });
};
const serializeAws_restJson1DetectorStateDefinition = (input, context) => {
    return {
        ...(input.stateName !== undefined && input.stateName !== null && { stateName: input.stateName }),
        ...(input.timers !== undefined &&
            input.timers !== null && { timers: serializeAws_restJson1TimerDefinitions(input.timers, context) }),
        ...(input.variables !== undefined &&
            input.variables !== null && { variables: serializeAws_restJson1VariableDefinitions(input.variables, context) }),
    };
};
const serializeAws_restJson1DisableAlarmActionRequest = (input, context) => {
    return {
        ...(input.alarmModelName !== undefined &&
            input.alarmModelName !== null && { alarmModelName: input.alarmModelName }),
        ...(input.keyValue !== undefined && input.keyValue !== null && { keyValue: input.keyValue }),
        ...(input.note !== undefined && input.note !== null && { note: input.note }),
        ...(input.requestId !== undefined && input.requestId !== null && { requestId: input.requestId }),
    };
};
const serializeAws_restJson1DisableAlarmActionRequests = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1DisableAlarmActionRequest(entry, context);
    });
};
const serializeAws_restJson1EnableAlarmActionRequest = (input, context) => {
    return {
        ...(input.alarmModelName !== undefined &&
            input.alarmModelName !== null && { alarmModelName: input.alarmModelName }),
        ...(input.keyValue !== undefined && input.keyValue !== null && { keyValue: input.keyValue }),
        ...(input.note !== undefined && input.note !== null && { note: input.note }),
        ...(input.requestId !== undefined && input.requestId !== null && { requestId: input.requestId }),
    };
};
const serializeAws_restJson1EnableAlarmActionRequests = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1EnableAlarmActionRequest(entry, context);
    });
};
const serializeAws_restJson1Message = (input, context) => {
    return {
        ...(input.inputName !== undefined && input.inputName !== null && { inputName: input.inputName }),
        ...(input.messageId !== undefined && input.messageId !== null && { messageId: input.messageId }),
        ...(input.payload !== undefined && input.payload !== null && { payload: context.base64Encoder(input.payload) }),
        ...(input.timestamp !== undefined &&
            input.timestamp !== null && { timestamp: serializeAws_restJson1TimestampValue(input.timestamp, context) }),
    };
};
const serializeAws_restJson1Messages = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Message(entry, context);
    });
};
const serializeAws_restJson1ResetAlarmActionRequest = (input, context) => {
    return {
        ...(input.alarmModelName !== undefined &&
            input.alarmModelName !== null && { alarmModelName: input.alarmModelName }),
        ...(input.keyValue !== undefined && input.keyValue !== null && { keyValue: input.keyValue }),
        ...(input.note !== undefined && input.note !== null && { note: input.note }),
        ...(input.requestId !== undefined && input.requestId !== null && { requestId: input.requestId }),
    };
};
const serializeAws_restJson1ResetAlarmActionRequests = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1ResetAlarmActionRequest(entry, context);
    });
};
const serializeAws_restJson1SnoozeAlarmActionRequest = (input, context) => {
    return {
        ...(input.alarmModelName !== undefined &&
            input.alarmModelName !== null && { alarmModelName: input.alarmModelName }),
        ...(input.keyValue !== undefined && input.keyValue !== null && { keyValue: input.keyValue }),
        ...(input.note !== undefined && input.note !== null && { note: input.note }),
        ...(input.requestId !== undefined && input.requestId !== null && { requestId: input.requestId }),
        ...(input.snoozeDuration !== undefined &&
            input.snoozeDuration !== null && { snoozeDuration: input.snoozeDuration }),
    };
};
const serializeAws_restJson1SnoozeAlarmActionRequests = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SnoozeAlarmActionRequest(entry, context);
    });
};
const serializeAws_restJson1TimerDefinition = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.seconds !== undefined && input.seconds !== null && { seconds: input.seconds }),
    };
};
const serializeAws_restJson1TimerDefinitions = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1TimerDefinition(entry, context);
    });
};
const serializeAws_restJson1TimestampValue = (input, context) => {
    return {
        ...(input.timeInMillis !== undefined && input.timeInMillis !== null && { timeInMillis: input.timeInMillis }),
    };
};
const serializeAws_restJson1UpdateDetectorRequest = (input, context) => {
    return {
        ...(input.detectorModelName !== undefined &&
            input.detectorModelName !== null && { detectorModelName: input.detectorModelName }),
        ...(input.keyValue !== undefined && input.keyValue !== null && { keyValue: input.keyValue }),
        ...(input.messageId !== undefined && input.messageId !== null && { messageId: input.messageId }),
        ...(input.state !== undefined &&
            input.state !== null && { state: serializeAws_restJson1DetectorStateDefinition(input.state, context) }),
    };
};
const serializeAws_restJson1UpdateDetectorRequests = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1UpdateDetectorRequest(entry, context);
    });
};
const serializeAws_restJson1VariableDefinition = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_restJson1VariableDefinitions = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1VariableDefinition(entry, context);
    });
};
const deserializeAws_restJson1AcknowledgeActionConfiguration = (output, context) => {
    return {
        note: output.note !== undefined && output.note !== null ? output.note : undefined,
    };
};
const deserializeAws_restJson1Alarm = (output, context) => {
    return {
        alarmModelName: output.alarmModelName !== undefined && output.alarmModelName !== null ? output.alarmModelName : undefined,
        alarmModelVersion: output.alarmModelVersion !== undefined && output.alarmModelVersion !== null
            ? output.alarmModelVersion
            : undefined,
        alarmState: output.alarmState !== undefined && output.alarmState !== null
            ? deserializeAws_restJson1AlarmState(output.alarmState, context)
            : undefined,
        creationTime: output.creationTime !== undefined && output.creationTime !== null
            ? new Date(Math.round(output.creationTime * 1000))
            : undefined,
        keyValue: output.keyValue !== undefined && output.keyValue !== null ? output.keyValue : undefined,
        lastUpdateTime: output.lastUpdateTime !== undefined && output.lastUpdateTime !== null
            ? new Date(Math.round(output.lastUpdateTime * 1000))
            : undefined,
        severity: output.severity !== undefined && output.severity !== null ? output.severity : undefined,
    };
};
const deserializeAws_restJson1AlarmState = (output, context) => {
    return {
        customerAction: output.customerAction !== undefined && output.customerAction !== null
            ? deserializeAws_restJson1CustomerAction(output.customerAction, context)
            : undefined,
        ruleEvaluation: output.ruleEvaluation !== undefined && output.ruleEvaluation !== null
            ? deserializeAws_restJson1RuleEvaluation(output.ruleEvaluation, context)
            : undefined,
        stateName: output.stateName !== undefined && output.stateName !== null ? output.stateName : undefined,
        systemEvent: output.systemEvent !== undefined && output.systemEvent !== null
            ? deserializeAws_restJson1SystemEvent(output.systemEvent, context)
            : undefined,
    };
};
const deserializeAws_restJson1AlarmSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AlarmSummary(entry, context);
    });
};
const deserializeAws_restJson1AlarmSummary = (output, context) => {
    return {
        alarmModelName: output.alarmModelName !== undefined && output.alarmModelName !== null ? output.alarmModelName : undefined,
        alarmModelVersion: output.alarmModelVersion !== undefined && output.alarmModelVersion !== null
            ? output.alarmModelVersion
            : undefined,
        creationTime: output.creationTime !== undefined && output.creationTime !== null
            ? new Date(Math.round(output.creationTime * 1000))
            : undefined,
        keyValue: output.keyValue !== undefined && output.keyValue !== null ? output.keyValue : undefined,
        lastUpdateTime: output.lastUpdateTime !== undefined && output.lastUpdateTime !== null
            ? new Date(Math.round(output.lastUpdateTime * 1000))
            : undefined,
        stateName: output.stateName !== undefined && output.stateName !== null ? output.stateName : undefined,
    };
};
const deserializeAws_restJson1BatchAlarmActionErrorEntries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BatchAlarmActionErrorEntry(entry, context);
    });
};
const deserializeAws_restJson1BatchAlarmActionErrorEntry = (output, context) => {
    return {
        errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
        errorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
        requestId: output.requestId !== undefined && output.requestId !== null ? output.requestId : undefined,
    };
};
const deserializeAws_restJson1BatchPutMessageErrorEntries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BatchPutMessageErrorEntry(entry, context);
    });
};
const deserializeAws_restJson1BatchPutMessageErrorEntry = (output, context) => {
    return {
        errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
        errorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
        messageId: output.messageId !== undefined && output.messageId !== null ? output.messageId : undefined,
    };
};
const deserializeAws_restJson1BatchUpdateDetectorErrorEntries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BatchUpdateDetectorErrorEntry(entry, context);
    });
};
const deserializeAws_restJson1BatchUpdateDetectorErrorEntry = (output, context) => {
    return {
        errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
        errorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
        messageId: output.messageId !== undefined && output.messageId !== null ? output.messageId : undefined,
    };
};
const deserializeAws_restJson1CustomerAction = (output, context) => {
    return {
        acknowledgeActionConfiguration: output.acknowledgeActionConfiguration !== undefined && output.acknowledgeActionConfiguration !== null
            ? deserializeAws_restJson1AcknowledgeActionConfiguration(output.acknowledgeActionConfiguration, context)
            : undefined,
        actionName: output.actionName !== undefined && output.actionName !== null ? output.actionName : undefined,
        disableActionConfiguration: output.disableActionConfiguration !== undefined && output.disableActionConfiguration !== null
            ? deserializeAws_restJson1DisableActionConfiguration(output.disableActionConfiguration, context)
            : undefined,
        enableActionConfiguration: output.enableActionConfiguration !== undefined && output.enableActionConfiguration !== null
            ? deserializeAws_restJson1EnableActionConfiguration(output.enableActionConfiguration, context)
            : undefined,
        resetActionConfiguration: output.resetActionConfiguration !== undefined && output.resetActionConfiguration !== null
            ? deserializeAws_restJson1ResetActionConfiguration(output.resetActionConfiguration, context)
            : undefined,
        snoozeActionConfiguration: output.snoozeActionConfiguration !== undefined && output.snoozeActionConfiguration !== null
            ? deserializeAws_restJson1SnoozeActionConfiguration(output.snoozeActionConfiguration, context)
            : undefined,
    };
};
const deserializeAws_restJson1Detector = (output, context) => {
    return {
        creationTime: output.creationTime !== undefined && output.creationTime !== null
            ? new Date(Math.round(output.creationTime * 1000))
            : undefined,
        detectorModelName: output.detectorModelName !== undefined && output.detectorModelName !== null
            ? output.detectorModelName
            : undefined,
        detectorModelVersion: output.detectorModelVersion !== undefined && output.detectorModelVersion !== null
            ? output.detectorModelVersion
            : undefined,
        keyValue: output.keyValue !== undefined && output.keyValue !== null ? output.keyValue : undefined,
        lastUpdateTime: output.lastUpdateTime !== undefined && output.lastUpdateTime !== null
            ? new Date(Math.round(output.lastUpdateTime * 1000))
            : undefined,
        state: output.state !== undefined && output.state !== null
            ? deserializeAws_restJson1DetectorState(output.state, context)
            : undefined,
    };
};
const deserializeAws_restJson1DetectorState = (output, context) => {
    return {
        stateName: output.stateName !== undefined && output.stateName !== null ? output.stateName : undefined,
        timers: output.timers !== undefined && output.timers !== null
            ? deserializeAws_restJson1Timers(output.timers, context)
            : undefined,
        variables: output.variables !== undefined && output.variables !== null
            ? deserializeAws_restJson1Variables(output.variables, context)
            : undefined,
    };
};
const deserializeAws_restJson1DetectorStateSummary = (output, context) => {
    return {
        stateName: output.stateName !== undefined && output.stateName !== null ? output.stateName : undefined,
    };
};
const deserializeAws_restJson1DetectorSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DetectorSummary(entry, context);
    });
};
const deserializeAws_restJson1DetectorSummary = (output, context) => {
    return {
        creationTime: output.creationTime !== undefined && output.creationTime !== null
            ? new Date(Math.round(output.creationTime * 1000))
            : undefined,
        detectorModelName: output.detectorModelName !== undefined && output.detectorModelName !== null
            ? output.detectorModelName
            : undefined,
        detectorModelVersion: output.detectorModelVersion !== undefined && output.detectorModelVersion !== null
            ? output.detectorModelVersion
            : undefined,
        keyValue: output.keyValue !== undefined && output.keyValue !== null ? output.keyValue : undefined,
        lastUpdateTime: output.lastUpdateTime !== undefined && output.lastUpdateTime !== null
            ? new Date(Math.round(output.lastUpdateTime * 1000))
            : undefined,
        state: output.state !== undefined && output.state !== null
            ? deserializeAws_restJson1DetectorStateSummary(output.state, context)
            : undefined,
    };
};
const deserializeAws_restJson1DisableActionConfiguration = (output, context) => {
    return {
        note: output.note !== undefined && output.note !== null ? output.note : undefined,
    };
};
const deserializeAws_restJson1EnableActionConfiguration = (output, context) => {
    return {
        note: output.note !== undefined && output.note !== null ? output.note : undefined,
    };
};
const deserializeAws_restJson1ResetActionConfiguration = (output, context) => {
    return {
        note: output.note !== undefined && output.note !== null ? output.note : undefined,
    };
};
const deserializeAws_restJson1RuleEvaluation = (output, context) => {
    return {
        simpleRuleEvaluation: output.simpleRuleEvaluation !== undefined && output.simpleRuleEvaluation !== null
            ? deserializeAws_restJson1SimpleRuleEvaluation(output.simpleRuleEvaluation, context)
            : undefined,
    };
};
const deserializeAws_restJson1SimpleRuleEvaluation = (output, context) => {
    return {
        inputPropertyValue: output.inputPropertyValue !== undefined && output.inputPropertyValue !== null
            ? output.inputPropertyValue
            : undefined,
        operator: output.operator !== undefined && output.operator !== null ? output.operator : undefined,
        thresholdValue: output.thresholdValue !== undefined && output.thresholdValue !== null ? output.thresholdValue : undefined,
    };
};
const deserializeAws_restJson1SnoozeActionConfiguration = (output, context) => {
    return {
        note: output.note !== undefined && output.note !== null ? output.note : undefined,
        snoozeDuration: output.snoozeDuration !== undefined && output.snoozeDuration !== null ? output.snoozeDuration : undefined,
    };
};
const deserializeAws_restJson1StateChangeConfiguration = (output, context) => {
    return {
        triggerType: output.triggerType !== undefined && output.triggerType !== null ? output.triggerType : undefined,
    };
};
const deserializeAws_restJson1SystemEvent = (output, context) => {
    return {
        eventType: output.eventType !== undefined && output.eventType !== null ? output.eventType : undefined,
        stateChangeConfiguration: output.stateChangeConfiguration !== undefined && output.stateChangeConfiguration !== null
            ? deserializeAws_restJson1StateChangeConfiguration(output.stateChangeConfiguration, context)
            : undefined,
    };
};
const deserializeAws_restJson1Timer = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        timestamp: output.timestamp !== undefined && output.timestamp !== null
            ? new Date(Math.round(output.timestamp * 1000))
            : undefined,
    };
};
const deserializeAws_restJson1Timers = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Timer(entry, context);
    });
};
const deserializeAws_restJson1Variable = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_restJson1Variables = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Variable(entry, context);
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