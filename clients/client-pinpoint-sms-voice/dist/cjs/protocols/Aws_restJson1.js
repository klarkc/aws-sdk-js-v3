"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1UpdateConfigurationSetEventDestinationCommand = exports.deserializeAws_restJson1SendVoiceMessageCommand = exports.deserializeAws_restJson1ListConfigurationSetsCommand = exports.deserializeAws_restJson1GetConfigurationSetEventDestinationsCommand = exports.deserializeAws_restJson1DeleteConfigurationSetEventDestinationCommand = exports.deserializeAws_restJson1DeleteConfigurationSetCommand = exports.deserializeAws_restJson1CreateConfigurationSetEventDestinationCommand = exports.deserializeAws_restJson1CreateConfigurationSetCommand = exports.serializeAws_restJson1UpdateConfigurationSetEventDestinationCommand = exports.serializeAws_restJson1SendVoiceMessageCommand = exports.serializeAws_restJson1ListConfigurationSetsCommand = exports.serializeAws_restJson1GetConfigurationSetEventDestinationsCommand = exports.serializeAws_restJson1DeleteConfigurationSetEventDestinationCommand = exports.serializeAws_restJson1DeleteConfigurationSetCommand = exports.serializeAws_restJson1CreateConfigurationSetEventDestinationCommand = exports.serializeAws_restJson1CreateConfigurationSetCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1CreateConfigurationSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/sms-voice/configuration-sets";
    let body;
    body = JSON.stringify({
        ...(input.ConfigurationSetName !== undefined &&
            input.ConfigurationSetName !== null && { ConfigurationSetName: input.ConfigurationSetName }),
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
exports.serializeAws_restJson1CreateConfigurationSetCommand = serializeAws_restJson1CreateConfigurationSetCommand;
const serializeAws_restJson1CreateConfigurationSetEventDestinationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations";
    if (input.ConfigurationSetName !== undefined) {
        const labelValue = input.ConfigurationSetName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ConfigurationSetName.");
        }
        resolvedPath = resolvedPath.replace("{ConfigurationSetName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ConfigurationSetName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.EventDestination !== undefined &&
            input.EventDestination !== null && {
            EventDestination: serializeAws_restJson1EventDestinationDefinition(input.EventDestination, context),
        }),
        ...(input.EventDestinationName !== undefined &&
            input.EventDestinationName !== null && { EventDestinationName: input.EventDestinationName }),
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
exports.serializeAws_restJson1CreateConfigurationSetEventDestinationCommand = serializeAws_restJson1CreateConfigurationSetEventDestinationCommand;
const serializeAws_restJson1DeleteConfigurationSetCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/sms-voice/configuration-sets/{ConfigurationSetName}";
    if (input.ConfigurationSetName !== undefined) {
        const labelValue = input.ConfigurationSetName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ConfigurationSetName.");
        }
        resolvedPath = resolvedPath.replace("{ConfigurationSetName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ConfigurationSetName.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteConfigurationSetCommand = serializeAws_restJson1DeleteConfigurationSetCommand;
const serializeAws_restJson1DeleteConfigurationSetEventDestinationCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}";
    if (input.ConfigurationSetName !== undefined) {
        const labelValue = input.ConfigurationSetName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ConfigurationSetName.");
        }
        resolvedPath = resolvedPath.replace("{ConfigurationSetName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ConfigurationSetName.");
    }
    if (input.EventDestinationName !== undefined) {
        const labelValue = input.EventDestinationName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: EventDestinationName.");
        }
        resolvedPath = resolvedPath.replace("{EventDestinationName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: EventDestinationName.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteConfigurationSetEventDestinationCommand = serializeAws_restJson1DeleteConfigurationSetEventDestinationCommand;
const serializeAws_restJson1GetConfigurationSetEventDestinationsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations";
    if (input.ConfigurationSetName !== undefined) {
        const labelValue = input.ConfigurationSetName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ConfigurationSetName.");
        }
        resolvedPath = resolvedPath.replace("{ConfigurationSetName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ConfigurationSetName.");
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
exports.serializeAws_restJson1GetConfigurationSetEventDestinationsCommand = serializeAws_restJson1GetConfigurationSetEventDestinationsCommand;
const serializeAws_restJson1ListConfigurationSetsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/sms-voice/configuration-sets";
    const query = {
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
        ...(input.PageSize !== undefined && { PageSize: input.PageSize }),
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
exports.serializeAws_restJson1ListConfigurationSetsCommand = serializeAws_restJson1ListConfigurationSetsCommand;
const serializeAws_restJson1SendVoiceMessageCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/sms-voice/voice/message";
    let body;
    body = JSON.stringify({
        ...(input.CallerId !== undefined && input.CallerId !== null && { CallerId: input.CallerId }),
        ...(input.ConfigurationSetName !== undefined &&
            input.ConfigurationSetName !== null && { ConfigurationSetName: input.ConfigurationSetName }),
        ...(input.Content !== undefined &&
            input.Content !== null && { Content: serializeAws_restJson1VoiceMessageContent(input.Content, context) }),
        ...(input.DestinationPhoneNumber !== undefined &&
            input.DestinationPhoneNumber !== null && { DestinationPhoneNumber: input.DestinationPhoneNumber }),
        ...(input.OriginationPhoneNumber !== undefined &&
            input.OriginationPhoneNumber !== null && { OriginationPhoneNumber: input.OriginationPhoneNumber }),
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
exports.serializeAws_restJson1SendVoiceMessageCommand = serializeAws_restJson1SendVoiceMessageCommand;
const serializeAws_restJson1UpdateConfigurationSetEventDestinationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}";
    if (input.ConfigurationSetName !== undefined) {
        const labelValue = input.ConfigurationSetName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ConfigurationSetName.");
        }
        resolvedPath = resolvedPath.replace("{ConfigurationSetName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ConfigurationSetName.");
    }
    if (input.EventDestinationName !== undefined) {
        const labelValue = input.EventDestinationName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: EventDestinationName.");
        }
        resolvedPath = resolvedPath.replace("{EventDestinationName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: EventDestinationName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.EventDestination !== undefined &&
            input.EventDestination !== null && {
            EventDestination: serializeAws_restJson1EventDestinationDefinition(input.EventDestination, context),
        }),
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
exports.serializeAws_restJson1UpdateConfigurationSetEventDestinationCommand = serializeAws_restJson1UpdateConfigurationSetEventDestinationCommand;
const deserializeAws_restJson1CreateConfigurationSetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateConfigurationSetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateConfigurationSetCommand = deserializeAws_restJson1CreateConfigurationSetCommand;
const deserializeAws_restJson1CreateConfigurationSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.pinpointsmsvoice#AlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1AlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.pinpointsmsvoice#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.pinpointsmsvoice#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.pinpointsmsvoice#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpointsmsvoice#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateConfigurationSetEventDestinationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateConfigurationSetEventDestinationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateConfigurationSetEventDestinationCommand = deserializeAws_restJson1CreateConfigurationSetEventDestinationCommand;
const deserializeAws_restJson1CreateConfigurationSetEventDestinationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.pinpointsmsvoice#AlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1AlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.pinpointsmsvoice#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.pinpointsmsvoice#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.pinpointsmsvoice#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpointsmsvoice#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpointsmsvoice#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteConfigurationSetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteConfigurationSetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteConfigurationSetCommand = deserializeAws_restJson1DeleteConfigurationSetCommand;
const deserializeAws_restJson1DeleteConfigurationSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpointsmsvoice#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.pinpointsmsvoice#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpointsmsvoice#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpointsmsvoice#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteConfigurationSetEventDestinationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteConfigurationSetEventDestinationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteConfigurationSetEventDestinationCommand = deserializeAws_restJson1DeleteConfigurationSetEventDestinationCommand;
const deserializeAws_restJson1DeleteConfigurationSetEventDestinationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpointsmsvoice#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.pinpointsmsvoice#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpointsmsvoice#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpointsmsvoice#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetConfigurationSetEventDestinationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetConfigurationSetEventDestinationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        EventDestinations: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.EventDestinations !== undefined && data.EventDestinations !== null) {
        contents.EventDestinations = deserializeAws_restJson1EventDestinations(data.EventDestinations, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetConfigurationSetEventDestinationsCommand = deserializeAws_restJson1GetConfigurationSetEventDestinationsCommand;
const deserializeAws_restJson1GetConfigurationSetEventDestinationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpointsmsvoice#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.pinpointsmsvoice#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpointsmsvoice#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpointsmsvoice#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListConfigurationSetsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListConfigurationSetsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ConfigurationSets: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ConfigurationSets !== undefined && data.ConfigurationSets !== null) {
        contents.ConfigurationSets = deserializeAws_restJson1ConfigurationSets(data.ConfigurationSets, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListConfigurationSetsCommand = deserializeAws_restJson1ListConfigurationSetsCommand;
const deserializeAws_restJson1ListConfigurationSetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpointsmsvoice#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.pinpointsmsvoice#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpointsmsvoice#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1SendVoiceMessageCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1SendVoiceMessageCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        MessageId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.MessageId !== undefined && data.MessageId !== null) {
        contents.MessageId = data.MessageId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1SendVoiceMessageCommand = deserializeAws_restJson1SendVoiceMessageCommand;
const deserializeAws_restJson1SendVoiceMessageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpointsmsvoice#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.pinpointsmsvoice#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpointsmsvoice#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateConfigurationSetEventDestinationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateConfigurationSetEventDestinationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateConfigurationSetEventDestinationCommand = deserializeAws_restJson1UpdateConfigurationSetEventDestinationCommand;
const deserializeAws_restJson1UpdateConfigurationSetEventDestinationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpointsmsvoice#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.pinpointsmsvoice#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpointsmsvoice#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpointsmsvoice#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1AlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "AlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1BadRequestExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "BadRequestException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1InternalServiceErrorExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServiceErrorException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "LimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1NotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyRequestsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const serializeAws_restJson1CallInstructionsMessageType = (input, context) => {
    return {
        ...(input.Text !== undefined && input.Text !== null && { Text: input.Text }),
    };
};
const serializeAws_restJson1CloudWatchLogsDestination = (input, context) => {
    return {
        ...(input.IamRoleArn !== undefined && input.IamRoleArn !== null && { IamRoleArn: input.IamRoleArn }),
        ...(input.LogGroupArn !== undefined && input.LogGroupArn !== null && { LogGroupArn: input.LogGroupArn }),
    };
};
const serializeAws_restJson1EventDestinationDefinition = (input, context) => {
    return {
        ...(input.CloudWatchLogsDestination !== undefined &&
            input.CloudWatchLogsDestination !== null && {
            CloudWatchLogsDestination: serializeAws_restJson1CloudWatchLogsDestination(input.CloudWatchLogsDestination, context),
        }),
        ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
        ...(input.KinesisFirehoseDestination !== undefined &&
            input.KinesisFirehoseDestination !== null && {
            KinesisFirehoseDestination: serializeAws_restJson1KinesisFirehoseDestination(input.KinesisFirehoseDestination, context),
        }),
        ...(input.MatchingEventTypes !== undefined &&
            input.MatchingEventTypes !== null && {
            MatchingEventTypes: serializeAws_restJson1EventTypes(input.MatchingEventTypes, context),
        }),
        ...(input.SnsDestination !== undefined &&
            input.SnsDestination !== null && {
            SnsDestination: serializeAws_restJson1SnsDestination(input.SnsDestination, context),
        }),
    };
};
const serializeAws_restJson1EventTypes = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1KinesisFirehoseDestination = (input, context) => {
    return {
        ...(input.DeliveryStreamArn !== undefined &&
            input.DeliveryStreamArn !== null && { DeliveryStreamArn: input.DeliveryStreamArn }),
        ...(input.IamRoleArn !== undefined && input.IamRoleArn !== null && { IamRoleArn: input.IamRoleArn }),
    };
};
const serializeAws_restJson1PlainTextMessageType = (input, context) => {
    return {
        ...(input.LanguageCode !== undefined && input.LanguageCode !== null && { LanguageCode: input.LanguageCode }),
        ...(input.Text !== undefined && input.Text !== null && { Text: input.Text }),
        ...(input.VoiceId !== undefined && input.VoiceId !== null && { VoiceId: input.VoiceId }),
    };
};
const serializeAws_restJson1SnsDestination = (input, context) => {
    return {
        ...(input.TopicArn !== undefined && input.TopicArn !== null && { TopicArn: input.TopicArn }),
    };
};
const serializeAws_restJson1SSMLMessageType = (input, context) => {
    return {
        ...(input.LanguageCode !== undefined && input.LanguageCode !== null && { LanguageCode: input.LanguageCode }),
        ...(input.Text !== undefined && input.Text !== null && { Text: input.Text }),
        ...(input.VoiceId !== undefined && input.VoiceId !== null && { VoiceId: input.VoiceId }),
    };
};
const serializeAws_restJson1VoiceMessageContent = (input, context) => {
    return {
        ...(input.CallInstructionsMessage !== undefined &&
            input.CallInstructionsMessage !== null && {
            CallInstructionsMessage: serializeAws_restJson1CallInstructionsMessageType(input.CallInstructionsMessage, context),
        }),
        ...(input.PlainTextMessage !== undefined &&
            input.PlainTextMessage !== null && {
            PlainTextMessage: serializeAws_restJson1PlainTextMessageType(input.PlainTextMessage, context),
        }),
        ...(input.SSMLMessage !== undefined &&
            input.SSMLMessage !== null && { SSMLMessage: serializeAws_restJson1SSMLMessageType(input.SSMLMessage, context) }),
    };
};
const deserializeAws_restJson1CloudWatchLogsDestination = (output, context) => {
    return {
        IamRoleArn: output.IamRoleArn !== undefined && output.IamRoleArn !== null ? output.IamRoleArn : undefined,
        LogGroupArn: output.LogGroupArn !== undefined && output.LogGroupArn !== null ? output.LogGroupArn : undefined,
    };
};
const deserializeAws_restJson1ConfigurationSets = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1EventDestination = (output, context) => {
    return {
        CloudWatchLogsDestination: output.CloudWatchLogsDestination !== undefined && output.CloudWatchLogsDestination !== null
            ? deserializeAws_restJson1CloudWatchLogsDestination(output.CloudWatchLogsDestination, context)
            : undefined,
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
        KinesisFirehoseDestination: output.KinesisFirehoseDestination !== undefined && output.KinesisFirehoseDestination !== null
            ? deserializeAws_restJson1KinesisFirehoseDestination(output.KinesisFirehoseDestination, context)
            : undefined,
        MatchingEventTypes: output.MatchingEventTypes !== undefined && output.MatchingEventTypes !== null
            ? deserializeAws_restJson1EventTypes(output.MatchingEventTypes, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        SnsDestination: output.SnsDestination !== undefined && output.SnsDestination !== null
            ? deserializeAws_restJson1SnsDestination(output.SnsDestination, context)
            : undefined,
    };
};
const deserializeAws_restJson1EventDestinations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1EventDestination(entry, context);
    });
};
const deserializeAws_restJson1EventTypes = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1KinesisFirehoseDestination = (output, context) => {
    return {
        DeliveryStreamArn: output.DeliveryStreamArn !== undefined && output.DeliveryStreamArn !== null
            ? output.DeliveryStreamArn
            : undefined,
        IamRoleArn: output.IamRoleArn !== undefined && output.IamRoleArn !== null ? output.IamRoleArn : undefined,
    };
};
const deserializeAws_restJson1SnsDestination = (output, context) => {
    return {
        TopicArn: output.TopicArn !== undefined && output.TopicArn !== null ? output.TopicArn : undefined,
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