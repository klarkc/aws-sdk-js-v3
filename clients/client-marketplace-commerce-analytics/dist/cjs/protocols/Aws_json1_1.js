"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1StartSupportDataExportCommand = exports.deserializeAws_json1_1GenerateDataSetCommand = exports.serializeAws_json1_1StartSupportDataExportCommand = exports.serializeAws_json1_1GenerateDataSetCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1GenerateDataSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MarketplaceCommerceAnalytics20150701.GenerateDataSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GenerateDataSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GenerateDataSetCommand = serializeAws_json1_1GenerateDataSetCommand;
const serializeAws_json1_1StartSupportDataExportCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "MarketplaceCommerceAnalytics20150701.StartSupportDataExport",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartSupportDataExportRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartSupportDataExportCommand = serializeAws_json1_1StartSupportDataExportCommand;
const deserializeAws_json1_1GenerateDataSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GenerateDataSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GenerateDataSetResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GenerateDataSetCommand = deserializeAws_json1_1GenerateDataSetCommand;
const deserializeAws_json1_1GenerateDataSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "MarketplaceCommerceAnalyticsException":
        case "com.amazonaws.marketplacecommerceanalytics#MarketplaceCommerceAnalyticsException":
            response = {
                ...(await deserializeAws_json1_1MarketplaceCommerceAnalyticsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StartSupportDataExportCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartSupportDataExportCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartSupportDataExportResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartSupportDataExportCommand = deserializeAws_json1_1StartSupportDataExportCommand;
const deserializeAws_json1_1StartSupportDataExportCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "MarketplaceCommerceAnalyticsException":
        case "com.amazonaws.marketplacecommerceanalytics#MarketplaceCommerceAnalyticsException":
            response = {
                ...(await deserializeAws_json1_1MarketplaceCommerceAnalyticsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1MarketplaceCommerceAnalyticsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MarketplaceCommerceAnalyticsException(body, context);
    const contents = {
        name: "MarketplaceCommerceAnalyticsException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1CustomerDefinedValues = (input, context) => {
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
const serializeAws_json1_1GenerateDataSetRequest = (input, context) => {
    return {
        ...(input.customerDefinedValues !== undefined &&
            input.customerDefinedValues !== null && {
            customerDefinedValues: serializeAws_json1_1CustomerDefinedValues(input.customerDefinedValues, context),
        }),
        ...(input.dataSetPublicationDate !== undefined &&
            input.dataSetPublicationDate !== null && {
            dataSetPublicationDate: Math.round(input.dataSetPublicationDate.getTime() / 1000),
        }),
        ...(input.dataSetType !== undefined && input.dataSetType !== null && { dataSetType: input.dataSetType }),
        ...(input.destinationS3BucketName !== undefined &&
            input.destinationS3BucketName !== null && { destinationS3BucketName: input.destinationS3BucketName }),
        ...(input.destinationS3Prefix !== undefined &&
            input.destinationS3Prefix !== null && { destinationS3Prefix: input.destinationS3Prefix }),
        ...(input.roleNameArn !== undefined && input.roleNameArn !== null && { roleNameArn: input.roleNameArn }),
        ...(input.snsTopicArn !== undefined && input.snsTopicArn !== null && { snsTopicArn: input.snsTopicArn }),
    };
};
const serializeAws_json1_1StartSupportDataExportRequest = (input, context) => {
    return {
        ...(input.customerDefinedValues !== undefined &&
            input.customerDefinedValues !== null && {
            customerDefinedValues: serializeAws_json1_1CustomerDefinedValues(input.customerDefinedValues, context),
        }),
        ...(input.dataSetType !== undefined && input.dataSetType !== null && { dataSetType: input.dataSetType }),
        ...(input.destinationS3BucketName !== undefined &&
            input.destinationS3BucketName !== null && { destinationS3BucketName: input.destinationS3BucketName }),
        ...(input.destinationS3Prefix !== undefined &&
            input.destinationS3Prefix !== null && { destinationS3Prefix: input.destinationS3Prefix }),
        ...(input.fromDate !== undefined &&
            input.fromDate !== null && { fromDate: Math.round(input.fromDate.getTime() / 1000) }),
        ...(input.roleNameArn !== undefined && input.roleNameArn !== null && { roleNameArn: input.roleNameArn }),
        ...(input.snsTopicArn !== undefined && input.snsTopicArn !== null && { snsTopicArn: input.snsTopicArn }),
    };
};
const deserializeAws_json1_1GenerateDataSetResult = (output, context) => {
    return {
        dataSetRequestId: output.dataSetRequestId !== undefined && output.dataSetRequestId !== null ? output.dataSetRequestId : undefined,
    };
};
const deserializeAws_json1_1MarketplaceCommerceAnalyticsException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1StartSupportDataExportResult = (output, context) => {
    return {
        dataSetRequestId: output.dataSetRequestId !== undefined && output.dataSetRequestId !== null ? output.dataSetRequestId : undefined,
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