"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1ResolveCustomerCommand = exports.deserializeAws_json1_1RegisterUsageCommand = exports.deserializeAws_json1_1MeterUsageCommand = exports.deserializeAws_json1_1BatchMeterUsageCommand = exports.serializeAws_json1_1ResolveCustomerCommand = exports.serializeAws_json1_1RegisterUsageCommand = exports.serializeAws_json1_1MeterUsageCommand = exports.serializeAws_json1_1BatchMeterUsageCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1BatchMeterUsageCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSMPMeteringService.BatchMeterUsage",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchMeterUsageRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchMeterUsageCommand = serializeAws_json1_1BatchMeterUsageCommand;
const serializeAws_json1_1MeterUsageCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSMPMeteringService.MeterUsage",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1MeterUsageRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1MeterUsageCommand = serializeAws_json1_1MeterUsageCommand;
const serializeAws_json1_1RegisterUsageCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSMPMeteringService.RegisterUsage",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterUsageRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RegisterUsageCommand = serializeAws_json1_1RegisterUsageCommand;
const serializeAws_json1_1ResolveCustomerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSMPMeteringService.ResolveCustomer",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ResolveCustomerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ResolveCustomerCommand = serializeAws_json1_1ResolveCustomerCommand;
const deserializeAws_json1_1BatchMeterUsageCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1BatchMeterUsageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchMeterUsageResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchMeterUsageCommand = deserializeAws_json1_1BatchMeterUsageCommand;
const deserializeAws_json1_1BatchMeterUsageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DisabledApiException":
        case "com.amazonaws.marketplacemetering#DisabledApiException":
            response = {
                ...(await deserializeAws_json1_1DisabledApiExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.marketplacemetering#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCustomerIdentifierException":
        case "com.amazonaws.marketplacemetering#InvalidCustomerIdentifierException":
            response = {
                ...(await deserializeAws_json1_1InvalidCustomerIdentifierExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidProductCodeException":
        case "com.amazonaws.marketplacemetering#InvalidProductCodeException":
            response = {
                ...(await deserializeAws_json1_1InvalidProductCodeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagException":
        case "com.amazonaws.marketplacemetering#InvalidTagException":
            response = {
                ...(await deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidUsageAllocationsException":
        case "com.amazonaws.marketplacemetering#InvalidUsageAllocationsException":
            response = {
                ...(await deserializeAws_json1_1InvalidUsageAllocationsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidUsageDimensionException":
        case "com.amazonaws.marketplacemetering#InvalidUsageDimensionException":
            response = {
                ...(await deserializeAws_json1_1InvalidUsageDimensionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.marketplacemetering#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TimestampOutOfBoundsException":
        case "com.amazonaws.marketplacemetering#TimestampOutOfBoundsException":
            response = {
                ...(await deserializeAws_json1_1TimestampOutOfBoundsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1MeterUsageCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1MeterUsageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1MeterUsageResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1MeterUsageCommand = deserializeAws_json1_1MeterUsageCommand;
const deserializeAws_json1_1MeterUsageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CustomerNotEntitledException":
        case "com.amazonaws.marketplacemetering#CustomerNotEntitledException":
            response = {
                ...(await deserializeAws_json1_1CustomerNotEntitledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DuplicateRequestException":
        case "com.amazonaws.marketplacemetering#DuplicateRequestException":
            response = {
                ...(await deserializeAws_json1_1DuplicateRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.marketplacemetering#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointRegionException":
        case "com.amazonaws.marketplacemetering#InvalidEndpointRegionException":
            response = {
                ...(await deserializeAws_json1_1InvalidEndpointRegionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidProductCodeException":
        case "com.amazonaws.marketplacemetering#InvalidProductCodeException":
            response = {
                ...(await deserializeAws_json1_1InvalidProductCodeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagException":
        case "com.amazonaws.marketplacemetering#InvalidTagException":
            response = {
                ...(await deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidUsageAllocationsException":
        case "com.amazonaws.marketplacemetering#InvalidUsageAllocationsException":
            response = {
                ...(await deserializeAws_json1_1InvalidUsageAllocationsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidUsageDimensionException":
        case "com.amazonaws.marketplacemetering#InvalidUsageDimensionException":
            response = {
                ...(await deserializeAws_json1_1InvalidUsageDimensionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.marketplacemetering#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TimestampOutOfBoundsException":
        case "com.amazonaws.marketplacemetering#TimestampOutOfBoundsException":
            response = {
                ...(await deserializeAws_json1_1TimestampOutOfBoundsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RegisterUsageCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RegisterUsageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RegisterUsageResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RegisterUsageCommand = deserializeAws_json1_1RegisterUsageCommand;
const deserializeAws_json1_1RegisterUsageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CustomerNotEntitledException":
        case "com.amazonaws.marketplacemetering#CustomerNotEntitledException":
            response = {
                ...(await deserializeAws_json1_1CustomerNotEntitledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DisabledApiException":
        case "com.amazonaws.marketplacemetering#DisabledApiException":
            response = {
                ...(await deserializeAws_json1_1DisabledApiExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.marketplacemetering#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidProductCodeException":
        case "com.amazonaws.marketplacemetering#InvalidProductCodeException":
            response = {
                ...(await deserializeAws_json1_1InvalidProductCodeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPublicKeyVersionException":
        case "com.amazonaws.marketplacemetering#InvalidPublicKeyVersionException":
            response = {
                ...(await deserializeAws_json1_1InvalidPublicKeyVersionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRegionException":
        case "com.amazonaws.marketplacemetering#InvalidRegionException":
            response = {
                ...(await deserializeAws_json1_1InvalidRegionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PlatformNotSupportedException":
        case "com.amazonaws.marketplacemetering#PlatformNotSupportedException":
            response = {
                ...(await deserializeAws_json1_1PlatformNotSupportedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.marketplacemetering#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ResolveCustomerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ResolveCustomerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ResolveCustomerResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ResolveCustomerCommand = deserializeAws_json1_1ResolveCustomerCommand;
const deserializeAws_json1_1ResolveCustomerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DisabledApiException":
        case "com.amazonaws.marketplacemetering#DisabledApiException":
            response = {
                ...(await deserializeAws_json1_1DisabledApiExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ExpiredTokenException":
        case "com.amazonaws.marketplacemetering#ExpiredTokenException":
            response = {
                ...(await deserializeAws_json1_1ExpiredTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.marketplacemetering#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTokenException":
        case "com.amazonaws.marketplacemetering#InvalidTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.marketplacemetering#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CustomerNotEntitledExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CustomerNotEntitledException(body, context);
    const contents = {
        name: "CustomerNotEntitledException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DisabledApiExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DisabledApiException(body, context);
    const contents = {
        name: "DisabledApiException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DuplicateRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DuplicateRequestException(body, context);
    const contents = {
        name: "DuplicateRequestException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ExpiredTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ExpiredTokenException(body, context);
    const contents = {
        name: "ExpiredTokenException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InternalServiceErrorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServiceErrorException(body, context);
    const contents = {
        name: "InternalServiceErrorException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidCustomerIdentifierExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidCustomerIdentifierException(body, context);
    const contents = {
        name: "InvalidCustomerIdentifierException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidEndpointRegionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidEndpointRegionException(body, context);
    const contents = {
        name: "InvalidEndpointRegionException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidProductCodeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidProductCodeException(body, context);
    const contents = {
        name: "InvalidProductCodeException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidPublicKeyVersionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidPublicKeyVersionException(body, context);
    const contents = {
        name: "InvalidPublicKeyVersionException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidRegionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRegionException(body, context);
    const contents = {
        name: "InvalidRegionException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidTagExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTagException(body, context);
    const contents = {
        name: "InvalidTagException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTokenException(body, context);
    const contents = {
        name: "InvalidTokenException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidUsageAllocationsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidUsageAllocationsException(body, context);
    const contents = {
        name: "InvalidUsageAllocationsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidUsageDimensionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidUsageDimensionException(body, context);
    const contents = {
        name: "InvalidUsageDimensionException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1PlatformNotSupportedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PlatformNotSupportedException(body, context);
    const contents = {
        name: "PlatformNotSupportedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ThrottlingException(body, context);
    const contents = {
        name: "ThrottlingException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TimestampOutOfBoundsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TimestampOutOfBoundsException(body, context);
    const contents = {
        name: "TimestampOutOfBoundsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1BatchMeterUsageRequest = (input, context) => {
    return {
        ...(input.ProductCode !== undefined && input.ProductCode !== null && { ProductCode: input.ProductCode }),
        ...(input.UsageRecords !== undefined &&
            input.UsageRecords !== null && {
            UsageRecords: serializeAws_json1_1UsageRecordList(input.UsageRecords, context),
        }),
    };
};
const serializeAws_json1_1MeterUsageRequest = (input, context) => {
    return {
        ...(input.DryRun !== undefined && input.DryRun !== null && { DryRun: input.DryRun }),
        ...(input.ProductCode !== undefined && input.ProductCode !== null && { ProductCode: input.ProductCode }),
        ...(input.Timestamp !== undefined &&
            input.Timestamp !== null && { Timestamp: Math.round(input.Timestamp.getTime() / 1000) }),
        ...(input.UsageAllocations !== undefined &&
            input.UsageAllocations !== null && {
            UsageAllocations: serializeAws_json1_1UsageAllocations(input.UsageAllocations, context),
        }),
        ...(input.UsageDimension !== undefined &&
            input.UsageDimension !== null && { UsageDimension: input.UsageDimension }),
        ...(input.UsageQuantity !== undefined && input.UsageQuantity !== null && { UsageQuantity: input.UsageQuantity }),
    };
};
const serializeAws_json1_1RegisterUsageRequest = (input, context) => {
    return {
        ...(input.Nonce !== undefined && input.Nonce !== null && { Nonce: input.Nonce }),
        ...(input.ProductCode !== undefined && input.ProductCode !== null && { ProductCode: input.ProductCode }),
        ...(input.PublicKeyVersion !== undefined &&
            input.PublicKeyVersion !== null && { PublicKeyVersion: input.PublicKeyVersion }),
    };
};
const serializeAws_json1_1ResolveCustomerRequest = (input, context) => {
    return {
        ...(input.RegistrationToken !== undefined &&
            input.RegistrationToken !== null && { RegistrationToken: input.RegistrationToken }),
    };
};
const serializeAws_json1_1Tag = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1TagList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Tag(entry, context);
    });
};
const serializeAws_json1_1UsageAllocation = (input, context) => {
    return {
        ...(input.AllocatedUsageQuantity !== undefined &&
            input.AllocatedUsageQuantity !== null && { AllocatedUsageQuantity: input.AllocatedUsageQuantity }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1UsageAllocations = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1UsageAllocation(entry, context);
    });
};
const serializeAws_json1_1UsageRecord = (input, context) => {
    return {
        ...(input.CustomerIdentifier !== undefined &&
            input.CustomerIdentifier !== null && { CustomerIdentifier: input.CustomerIdentifier }),
        ...(input.Dimension !== undefined && input.Dimension !== null && { Dimension: input.Dimension }),
        ...(input.Quantity !== undefined && input.Quantity !== null && { Quantity: input.Quantity }),
        ...(input.Timestamp !== undefined &&
            input.Timestamp !== null && { Timestamp: Math.round(input.Timestamp.getTime() / 1000) }),
        ...(input.UsageAllocations !== undefined &&
            input.UsageAllocations !== null && {
            UsageAllocations: serializeAws_json1_1UsageAllocations(input.UsageAllocations, context),
        }),
    };
};
const serializeAws_json1_1UsageRecordList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1UsageRecord(entry, context);
    });
};
const deserializeAws_json1_1BatchMeterUsageResult = (output, context) => {
    return {
        Results: output.Results !== undefined && output.Results !== null
            ? deserializeAws_json1_1UsageRecordResultList(output.Results, context)
            : undefined,
        UnprocessedRecords: output.UnprocessedRecords !== undefined && output.UnprocessedRecords !== null
            ? deserializeAws_json1_1UsageRecordList(output.UnprocessedRecords, context)
            : undefined,
    };
};
const deserializeAws_json1_1CustomerNotEntitledException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1DisabledApiException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1DuplicateRequestException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ExpiredTokenException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InternalServiceErrorException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidCustomerIdentifierException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidEndpointRegionException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidProductCodeException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidPublicKeyVersionException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidRegionException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidTagException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidTokenException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidUsageAllocationsException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidUsageDimensionException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1MeterUsageResult = (output, context) => {
    return {
        MeteringRecordId: output.MeteringRecordId !== undefined && output.MeteringRecordId !== null ? output.MeteringRecordId : undefined,
    };
};
const deserializeAws_json1_1PlatformNotSupportedException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1RegisterUsageResult = (output, context) => {
    return {
        PublicKeyRotationTimestamp: output.PublicKeyRotationTimestamp !== undefined && output.PublicKeyRotationTimestamp !== null
            ? new Date(Math.round(output.PublicKeyRotationTimestamp * 1000))
            : undefined,
        Signature: output.Signature !== undefined && output.Signature !== null ? output.Signature : undefined,
    };
};
const deserializeAws_json1_1ResolveCustomerResult = (output, context) => {
    return {
        CustomerIdentifier: output.CustomerIdentifier !== undefined && output.CustomerIdentifier !== null
            ? output.CustomerIdentifier
            : undefined,
        ProductCode: output.ProductCode !== undefined && output.ProductCode !== null ? output.ProductCode : undefined,
    };
};
const deserializeAws_json1_1Tag = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1TagList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Tag(entry, context);
    });
};
const deserializeAws_json1_1ThrottlingException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1TimestampOutOfBoundsException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1UsageAllocation = (output, context) => {
    return {
        AllocatedUsageQuantity: output.AllocatedUsageQuantity !== undefined && output.AllocatedUsageQuantity !== null
            ? output.AllocatedUsageQuantity
            : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagList(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1UsageAllocations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1UsageAllocation(entry, context);
    });
};
const deserializeAws_json1_1UsageRecord = (output, context) => {
    return {
        CustomerIdentifier: output.CustomerIdentifier !== undefined && output.CustomerIdentifier !== null
            ? output.CustomerIdentifier
            : undefined,
        Dimension: output.Dimension !== undefined && output.Dimension !== null ? output.Dimension : undefined,
        Quantity: output.Quantity !== undefined && output.Quantity !== null ? output.Quantity : undefined,
        Timestamp: output.Timestamp !== undefined && output.Timestamp !== null
            ? new Date(Math.round(output.Timestamp * 1000))
            : undefined,
        UsageAllocations: output.UsageAllocations !== undefined && output.UsageAllocations !== null
            ? deserializeAws_json1_1UsageAllocations(output.UsageAllocations, context)
            : undefined,
    };
};
const deserializeAws_json1_1UsageRecordList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1UsageRecord(entry, context);
    });
};
const deserializeAws_json1_1UsageRecordResult = (output, context) => {
    return {
        MeteringRecordId: output.MeteringRecordId !== undefined && output.MeteringRecordId !== null ? output.MeteringRecordId : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        UsageRecord: output.UsageRecord !== undefined && output.UsageRecord !== null
            ? deserializeAws_json1_1UsageRecord(output.UsageRecord, context)
            : undefined,
    };
};
const deserializeAws_json1_1UsageRecordResultList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1UsageRecordResult(entry, context);
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
//# sourceMappingURL=Aws_json1_1.js.map