"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1PutReportDefinitionCommand = exports.deserializeAws_json1_1ModifyReportDefinitionCommand = exports.deserializeAws_json1_1DescribeReportDefinitionsCommand = exports.deserializeAws_json1_1DeleteReportDefinitionCommand = exports.serializeAws_json1_1PutReportDefinitionCommand = exports.serializeAws_json1_1ModifyReportDefinitionCommand = exports.serializeAws_json1_1DescribeReportDefinitionsCommand = exports.serializeAws_json1_1DeleteReportDefinitionCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1DeleteReportDefinitionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrigamiServiceGatewayService.DeleteReportDefinition",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteReportDefinitionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteReportDefinitionCommand = serializeAws_json1_1DeleteReportDefinitionCommand;
const serializeAws_json1_1DescribeReportDefinitionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrigamiServiceGatewayService.DescribeReportDefinitions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeReportDefinitionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeReportDefinitionsCommand = serializeAws_json1_1DescribeReportDefinitionsCommand;
const serializeAws_json1_1ModifyReportDefinitionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrigamiServiceGatewayService.ModifyReportDefinition",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ModifyReportDefinitionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ModifyReportDefinitionCommand = serializeAws_json1_1ModifyReportDefinitionCommand;
const serializeAws_json1_1PutReportDefinitionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrigamiServiceGatewayService.PutReportDefinition",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutReportDefinitionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutReportDefinitionCommand = serializeAws_json1_1PutReportDefinitionCommand;
const deserializeAws_json1_1DeleteReportDefinitionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteReportDefinitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteReportDefinitionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteReportDefinitionCommand = deserializeAws_json1_1DeleteReportDefinitionCommand;
const deserializeAws_json1_1DeleteReportDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.costandusagereportservice#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.costandusagereportservice#ValidationException":
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
const deserializeAws_json1_1DescribeReportDefinitionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeReportDefinitionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeReportDefinitionsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeReportDefinitionsCommand = deserializeAws_json1_1DescribeReportDefinitionsCommand;
const deserializeAws_json1_1DescribeReportDefinitionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.costandusagereportservice#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ModifyReportDefinitionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ModifyReportDefinitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ModifyReportDefinitionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ModifyReportDefinitionCommand = deserializeAws_json1_1ModifyReportDefinitionCommand;
const deserializeAws_json1_1ModifyReportDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.costandusagereportservice#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.costandusagereportservice#ValidationException":
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
const deserializeAws_json1_1PutReportDefinitionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutReportDefinitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutReportDefinitionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutReportDefinitionCommand = deserializeAws_json1_1PutReportDefinitionCommand;
const deserializeAws_json1_1PutReportDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateReportNameException":
        case "com.amazonaws.costandusagereportservice#DuplicateReportNameException":
            response = {
                ...(await deserializeAws_json1_1DuplicateReportNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.costandusagereportservice#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReportLimitReachedException":
        case "com.amazonaws.costandusagereportservice#ReportLimitReachedException":
            response = {
                ...(await deserializeAws_json1_1ReportLimitReachedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.costandusagereportservice#ValidationException":
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
const deserializeAws_json1_1DuplicateReportNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DuplicateReportNameException(body, context);
    const contents = {
        name: "DuplicateReportNameException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InternalErrorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalErrorException(body, context);
    const contents = {
        name: "InternalErrorException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ReportLimitReachedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ReportLimitReachedException(body, context);
    const contents = {
        name: "ReportLimitReachedException",
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
const serializeAws_json1_1AdditionalArtifactList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1DeleteReportDefinitionRequest = (input, context) => {
    return {
        ...(input.ReportName !== undefined && input.ReportName !== null && { ReportName: input.ReportName }),
    };
};
const serializeAws_json1_1DescribeReportDefinitionsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ModifyReportDefinitionRequest = (input, context) => {
    return {
        ...(input.ReportDefinition !== undefined &&
            input.ReportDefinition !== null && {
            ReportDefinition: serializeAws_json1_1ReportDefinition(input.ReportDefinition, context),
        }),
        ...(input.ReportName !== undefined && input.ReportName !== null && { ReportName: input.ReportName }),
    };
};
const serializeAws_json1_1PutReportDefinitionRequest = (input, context) => {
    return {
        ...(input.ReportDefinition !== undefined &&
            input.ReportDefinition !== null && {
            ReportDefinition: serializeAws_json1_1ReportDefinition(input.ReportDefinition, context),
        }),
    };
};
const serializeAws_json1_1ReportDefinition = (input, context) => {
    return {
        ...(input.AdditionalArtifacts !== undefined &&
            input.AdditionalArtifacts !== null && {
            AdditionalArtifacts: serializeAws_json1_1AdditionalArtifactList(input.AdditionalArtifacts, context),
        }),
        ...(input.AdditionalSchemaElements !== undefined &&
            input.AdditionalSchemaElements !== null && {
            AdditionalSchemaElements: serializeAws_json1_1SchemaElementList(input.AdditionalSchemaElements, context),
        }),
        ...(input.BillingViewArn !== undefined &&
            input.BillingViewArn !== null && { BillingViewArn: input.BillingViewArn }),
        ...(input.Compression !== undefined && input.Compression !== null && { Compression: input.Compression }),
        ...(input.Format !== undefined && input.Format !== null && { Format: input.Format }),
        ...(input.RefreshClosedReports !== undefined &&
            input.RefreshClosedReports !== null && { RefreshClosedReports: input.RefreshClosedReports }),
        ...(input.ReportName !== undefined && input.ReportName !== null && { ReportName: input.ReportName }),
        ...(input.ReportVersioning !== undefined &&
            input.ReportVersioning !== null && { ReportVersioning: input.ReportVersioning }),
        ...(input.S3Bucket !== undefined && input.S3Bucket !== null && { S3Bucket: input.S3Bucket }),
        ...(input.S3Prefix !== undefined && input.S3Prefix !== null && { S3Prefix: input.S3Prefix }),
        ...(input.S3Region !== undefined && input.S3Region !== null && { S3Region: input.S3Region }),
        ...(input.TimeUnit !== undefined && input.TimeUnit !== null && { TimeUnit: input.TimeUnit }),
    };
};
const serializeAws_json1_1SchemaElementList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1AdditionalArtifactList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1DeleteReportDefinitionResponse = (output, context) => {
    return {
        ResponseMessage: output.ResponseMessage !== undefined && output.ResponseMessage !== null ? output.ResponseMessage : undefined,
    };
};
const deserializeAws_json1_1DescribeReportDefinitionsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        ReportDefinitions: output.ReportDefinitions !== undefined && output.ReportDefinitions !== null
            ? deserializeAws_json1_1ReportDefinitionList(output.ReportDefinitions, context)
            : undefined,
    };
};
const deserializeAws_json1_1DuplicateReportNameException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InternalErrorException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ModifyReportDefinitionResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1PutReportDefinitionResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1ReportDefinition = (output, context) => {
    return {
        AdditionalArtifacts: output.AdditionalArtifacts !== undefined && output.AdditionalArtifacts !== null
            ? deserializeAws_json1_1AdditionalArtifactList(output.AdditionalArtifacts, context)
            : undefined,
        AdditionalSchemaElements: output.AdditionalSchemaElements !== undefined && output.AdditionalSchemaElements !== null
            ? deserializeAws_json1_1SchemaElementList(output.AdditionalSchemaElements, context)
            : undefined,
        BillingViewArn: output.BillingViewArn !== undefined && output.BillingViewArn !== null ? output.BillingViewArn : undefined,
        Compression: output.Compression !== undefined && output.Compression !== null ? output.Compression : undefined,
        Format: output.Format !== undefined && output.Format !== null ? output.Format : undefined,
        RefreshClosedReports: output.RefreshClosedReports !== undefined && output.RefreshClosedReports !== null
            ? output.RefreshClosedReports
            : undefined,
        ReportName: output.ReportName !== undefined && output.ReportName !== null ? output.ReportName : undefined,
        ReportVersioning: output.ReportVersioning !== undefined && output.ReportVersioning !== null ? output.ReportVersioning : undefined,
        S3Bucket: output.S3Bucket !== undefined && output.S3Bucket !== null ? output.S3Bucket : undefined,
        S3Prefix: output.S3Prefix !== undefined && output.S3Prefix !== null ? output.S3Prefix : undefined,
        S3Region: output.S3Region !== undefined && output.S3Region !== null ? output.S3Region : undefined,
        TimeUnit: output.TimeUnit !== undefined && output.TimeUnit !== null ? output.TimeUnit : undefined,
    };
};
const deserializeAws_json1_1ReportDefinitionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ReportDefinition(entry, context);
    });
};
const deserializeAws_json1_1ReportLimitReachedException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1SchemaElementList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
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