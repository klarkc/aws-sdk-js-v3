"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_0QueryCommand = exports.deserializeAws_json1_0DescribeEndpointsCommand = exports.deserializeAws_json1_0CancelQueryCommand = exports.serializeAws_json1_0QueryCommand = exports.serializeAws_json1_0DescribeEndpointsCommand = exports.serializeAws_json1_0CancelQueryCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const uuid_1 = require("uuid");
const serializeAws_json1_0CancelQueryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "Timestream_20181101.CancelQuery",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0CancelQueryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0CancelQueryCommand = serializeAws_json1_0CancelQueryCommand;
const serializeAws_json1_0DescribeEndpointsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "Timestream_20181101.DescribeEndpoints",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeEndpointsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DescribeEndpointsCommand = serializeAws_json1_0DescribeEndpointsCommand;
const serializeAws_json1_0QueryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "Timestream_20181101.Query",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0QueryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0QueryCommand = serializeAws_json1_0QueryCommand;
const deserializeAws_json1_0CancelQueryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0CancelQueryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0CancelQueryResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0CancelQueryCommand = deserializeAws_json1_0CancelQueryCommand;
const deserializeAws_json1_0CancelQueryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.timestreamquery#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.timestreamquery#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.timestreamquery#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.timestreamquery#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.timestreamquery#ValidationException":
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
const deserializeAws_json1_0DescribeEndpointsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DescribeEndpointsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeEndpointsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DescribeEndpointsCommand = deserializeAws_json1_0DescribeEndpointsCommand;
const deserializeAws_json1_0DescribeEndpointsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.timestreamquery#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.timestreamquery#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.timestreamquery#ValidationException":
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
const deserializeAws_json1_0QueryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0QueryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0QueryResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0QueryCommand = deserializeAws_json1_0QueryCommand;
const deserializeAws_json1_0QueryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.timestreamquery#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.timestreamquery#ConflictException":
            response = {
                ...(await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.timestreamquery#InternalServerException":
            response = {
                ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointException":
        case "com.amazonaws.timestreamquery#InvalidEndpointException":
            response = {
                ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "QueryExecutionException":
        case "com.amazonaws.timestreamquery#QueryExecutionException":
            response = {
                ...(await deserializeAws_json1_0QueryExecutionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.timestreamquery#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.timestreamquery#ValidationException":
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
const deserializeAws_json1_0InvalidEndpointExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0InvalidEndpointException(body, context);
    const contents = {
        name: "InvalidEndpointException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0QueryExecutionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0QueryExecutionException(body, context);
    const contents = {
        name: "QueryExecutionException",
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
const serializeAws_json1_0CancelQueryRequest = (input, context) => {
    return {
        ...(input.QueryId !== undefined && input.QueryId !== null && { QueryId: input.QueryId }),
    };
};
const serializeAws_json1_0DescribeEndpointsRequest = (input, context) => {
    return {};
};
const serializeAws_json1_0QueryRequest = (input, context) => {
    var _a;
    return {
        ClientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.MaxRows !== undefined && input.MaxRows !== null && { MaxRows: input.MaxRows }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.QueryString !== undefined && input.QueryString !== null && { QueryString: input.QueryString }),
    };
};
const deserializeAws_json1_0AccessDeniedException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0CancelQueryResponse = (output, context) => {
    return {
        CancellationMessage: output.CancellationMessage !== undefined && output.CancellationMessage !== null
            ? output.CancellationMessage
            : undefined,
    };
};
const deserializeAws_json1_0ColumnInfo = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Type: output.Type !== undefined && output.Type !== null ? deserializeAws_json1_0Type(output.Type, context) : undefined,
    };
};
const deserializeAws_json1_0ColumnInfoList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0ColumnInfo(entry, context);
    });
};
const deserializeAws_json1_0ConflictException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0Datum = (output, context) => {
    return {
        ArrayValue: output.ArrayValue !== undefined && output.ArrayValue !== null
            ? deserializeAws_json1_0DatumList(output.ArrayValue, context)
            : undefined,
        NullValue: output.NullValue !== undefined && output.NullValue !== null ? output.NullValue : undefined,
        RowValue: output.RowValue !== undefined && output.RowValue !== null
            ? deserializeAws_json1_0Row(output.RowValue, context)
            : undefined,
        ScalarValue: output.ScalarValue !== undefined && output.ScalarValue !== null ? output.ScalarValue : undefined,
        TimeSeriesValue: output.TimeSeriesValue !== undefined && output.TimeSeriesValue !== null
            ? deserializeAws_json1_0TimeSeriesDataPointList(output.TimeSeriesValue, context)
            : undefined,
    };
};
const deserializeAws_json1_0DatumList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0Datum(entry, context);
    });
};
const deserializeAws_json1_0DescribeEndpointsResponse = (output, context) => {
    return {
        Endpoints: output.Endpoints !== undefined && output.Endpoints !== null
            ? deserializeAws_json1_0Endpoints(output.Endpoints, context)
            : undefined,
    };
};
const deserializeAws_json1_0Endpoint = (output, context) => {
    return {
        Address: output.Address !== undefined && output.Address !== null ? output.Address : undefined,
        CachePeriodInMinutes: output.CachePeriodInMinutes !== undefined && output.CachePeriodInMinutes !== null
            ? output.CachePeriodInMinutes
            : undefined,
    };
};
const deserializeAws_json1_0Endpoints = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0Endpoint(entry, context);
    });
};
const deserializeAws_json1_0InternalServerException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0InvalidEndpointException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0QueryExecutionException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0QueryResponse = (output, context) => {
    return {
        ColumnInfo: output.ColumnInfo !== undefined && output.ColumnInfo !== null
            ? deserializeAws_json1_0ColumnInfoList(output.ColumnInfo, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        QueryId: output.QueryId !== undefined && output.QueryId !== null ? output.QueryId : undefined,
        QueryStatus: output.QueryStatus !== undefined && output.QueryStatus !== null
            ? deserializeAws_json1_0QueryStatus(output.QueryStatus, context)
            : undefined,
        Rows: output.Rows !== undefined && output.Rows !== null
            ? deserializeAws_json1_0RowList(output.Rows, context)
            : undefined,
    };
};
const deserializeAws_json1_0QueryStatus = (output, context) => {
    return {
        CumulativeBytesMetered: output.CumulativeBytesMetered !== undefined && output.CumulativeBytesMetered !== null
            ? output.CumulativeBytesMetered
            : undefined,
        CumulativeBytesScanned: output.CumulativeBytesScanned !== undefined && output.CumulativeBytesScanned !== null
            ? output.CumulativeBytesScanned
            : undefined,
        ProgressPercentage: output.ProgressPercentage !== undefined && output.ProgressPercentage !== null
            ? output.ProgressPercentage
            : undefined,
    };
};
const deserializeAws_json1_0Row = (output, context) => {
    return {
        Data: output.Data !== undefined && output.Data !== null
            ? deserializeAws_json1_0DatumList(output.Data, context)
            : undefined,
    };
};
const deserializeAws_json1_0RowList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0Row(entry, context);
    });
};
const deserializeAws_json1_0ThrottlingException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0TimeSeriesDataPoint = (output, context) => {
    return {
        Time: output.Time !== undefined && output.Time !== null ? output.Time : undefined,
        Value: output.Value !== undefined && output.Value !== null
            ? deserializeAws_json1_0Datum(output.Value, context)
            : undefined,
    };
};
const deserializeAws_json1_0TimeSeriesDataPointList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0TimeSeriesDataPoint(entry, context);
    });
};
const deserializeAws_json1_0Type = (output, context) => {
    return {
        ArrayColumnInfo: output.ArrayColumnInfo !== undefined && output.ArrayColumnInfo !== null
            ? deserializeAws_json1_0ColumnInfo(output.ArrayColumnInfo, context)
            : undefined,
        RowColumnInfo: output.RowColumnInfo !== undefined && output.RowColumnInfo !== null
            ? deserializeAws_json1_0ColumnInfoList(output.RowColumnInfo, context)
            : undefined,
        ScalarType: output.ScalarType !== undefined && output.ScalarType !== null ? output.ScalarType : undefined,
        TimeSeriesMeasureValueColumnInfo: output.TimeSeriesMeasureValueColumnInfo !== undefined && output.TimeSeriesMeasureValueColumnInfo !== null
            ? deserializeAws_json1_0ColumnInfo(output.TimeSeriesMeasureValueColumnInfo, context)
            : undefined,
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