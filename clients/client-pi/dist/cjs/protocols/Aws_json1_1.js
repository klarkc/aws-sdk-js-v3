"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1GetResourceMetricsCommand = exports.deserializeAws_json1_1DescribeDimensionKeysCommand = exports.serializeAws_json1_1GetResourceMetricsCommand = exports.serializeAws_json1_1DescribeDimensionKeysCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1DescribeDimensionKeysCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PerformanceInsightsv20180227.DescribeDimensionKeys",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDimensionKeysRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeDimensionKeysCommand = serializeAws_json1_1DescribeDimensionKeysCommand;
const serializeAws_json1_1GetResourceMetricsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "PerformanceInsightsv20180227.GetResourceMetrics",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetResourceMetricsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetResourceMetricsCommand = serializeAws_json1_1GetResourceMetricsCommand;
const deserializeAws_json1_1DescribeDimensionKeysCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeDimensionKeysCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDimensionKeysResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeDimensionKeysCommand = deserializeAws_json1_1DescribeDimensionKeysCommand;
const deserializeAws_json1_1DescribeDimensionKeysCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.pi#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.pi#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.pi#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetResourceMetricsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetResourceMetricsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetResourceMetricsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetResourceMetricsCommand = deserializeAws_json1_1GetResourceMetricsCommand;
const deserializeAws_json1_1GetResourceMetricsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazonaws.pi#InternalServiceError":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.pi#InvalidArgumentException":
            response = {
                ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.pi#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1InternalServiceErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServiceError(body, context);
    const contents = {
        name: "InternalServiceError",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidArgumentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidArgumentException(body, context);
    const contents = {
        name: "InvalidArgumentException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1NotAuthorizedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NotAuthorizedException(body, context);
    const contents = {
        name: "NotAuthorizedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1DescribeDimensionKeysRequest = (input, context) => {
    return {
        ...(input.EndTime !== undefined &&
            input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
        ...(input.Filter !== undefined &&
            input.Filter !== null && { Filter: serializeAws_json1_1MetricQueryFilterMap(input.Filter, context) }),
        ...(input.GroupBy !== undefined &&
            input.GroupBy !== null && { GroupBy: serializeAws_json1_1DimensionGroup(input.GroupBy, context) }),
        ...(input.Identifier !== undefined && input.Identifier !== null && { Identifier: input.Identifier }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.Metric !== undefined && input.Metric !== null && { Metric: input.Metric }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.PartitionBy !== undefined &&
            input.PartitionBy !== null && { PartitionBy: serializeAws_json1_1DimensionGroup(input.PartitionBy, context) }),
        ...(input.PeriodInSeconds !== undefined &&
            input.PeriodInSeconds !== null && { PeriodInSeconds: input.PeriodInSeconds }),
        ...(input.ServiceType !== undefined && input.ServiceType !== null && { ServiceType: input.ServiceType }),
        ...(input.StartTime !== undefined &&
            input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
    };
};
const serializeAws_json1_1DimensionGroup = (input, context) => {
    return {
        ...(input.Dimensions !== undefined &&
            input.Dimensions !== null && { Dimensions: serializeAws_json1_1StringList(input.Dimensions, context) }),
        ...(input.Group !== undefined && input.Group !== null && { Group: input.Group }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    };
};
const serializeAws_json1_1GetResourceMetricsRequest = (input, context) => {
    return {
        ...(input.EndTime !== undefined &&
            input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
        ...(input.Identifier !== undefined && input.Identifier !== null && { Identifier: input.Identifier }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.MetricQueries !== undefined &&
            input.MetricQueries !== null && {
            MetricQueries: serializeAws_json1_1MetricQueryList(input.MetricQueries, context),
        }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.PeriodInSeconds !== undefined &&
            input.PeriodInSeconds !== null && { PeriodInSeconds: input.PeriodInSeconds }),
        ...(input.ServiceType !== undefined && input.ServiceType !== null && { ServiceType: input.ServiceType }),
        ...(input.StartTime !== undefined &&
            input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
    };
};
const serializeAws_json1_1MetricQuery = (input, context) => {
    return {
        ...(input.Filter !== undefined &&
            input.Filter !== null && { Filter: serializeAws_json1_1MetricQueryFilterMap(input.Filter, context) }),
        ...(input.GroupBy !== undefined &&
            input.GroupBy !== null && { GroupBy: serializeAws_json1_1DimensionGroup(input.GroupBy, context) }),
        ...(input.Metric !== undefined && input.Metric !== null && { Metric: input.Metric }),
    };
};
const serializeAws_json1_1MetricQueryFilterMap = (input, context) => {
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
const serializeAws_json1_1MetricQueryList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1MetricQuery(entry, context);
    });
};
const serializeAws_json1_1StringList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1DataPoint = (output, context) => {
    return {
        Timestamp: output.Timestamp !== undefined && output.Timestamp !== null
            ? new Date(Math.round(output.Timestamp * 1000))
            : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1DataPointsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DataPoint(entry, context);
    });
};
const deserializeAws_json1_1DescribeDimensionKeysResponse = (output, context) => {
    return {
        AlignedEndTime: output.AlignedEndTime !== undefined && output.AlignedEndTime !== null
            ? new Date(Math.round(output.AlignedEndTime * 1000))
            : undefined,
        AlignedStartTime: output.AlignedStartTime !== undefined && output.AlignedStartTime !== null
            ? new Date(Math.round(output.AlignedStartTime * 1000))
            : undefined,
        Keys: output.Keys !== undefined && output.Keys !== null
            ? deserializeAws_json1_1DimensionKeyDescriptionList(output.Keys, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        PartitionKeys: output.PartitionKeys !== undefined && output.PartitionKeys !== null
            ? deserializeAws_json1_1ResponsePartitionKeyList(output.PartitionKeys, context)
            : undefined,
    };
};
const deserializeAws_json1_1DimensionKeyDescription = (output, context) => {
    return {
        Dimensions: output.Dimensions !== undefined && output.Dimensions !== null
            ? deserializeAws_json1_1DimensionMap(output.Dimensions, context)
            : undefined,
        Partitions: output.Partitions !== undefined && output.Partitions !== null
            ? deserializeAws_json1_1MetricValuesList(output.Partitions, context)
            : undefined,
        Total: output.Total !== undefined && output.Total !== null ? output.Total : undefined,
    };
};
const deserializeAws_json1_1DimensionKeyDescriptionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DimensionKeyDescription(entry, context);
    });
};
const deserializeAws_json1_1DimensionMap = (output, context) => {
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
const deserializeAws_json1_1GetResourceMetricsResponse = (output, context) => {
    return {
        AlignedEndTime: output.AlignedEndTime !== undefined && output.AlignedEndTime !== null
            ? new Date(Math.round(output.AlignedEndTime * 1000))
            : undefined,
        AlignedStartTime: output.AlignedStartTime !== undefined && output.AlignedStartTime !== null
            ? new Date(Math.round(output.AlignedStartTime * 1000))
            : undefined,
        Identifier: output.Identifier !== undefined && output.Identifier !== null ? output.Identifier : undefined,
        MetricList: output.MetricList !== undefined && output.MetricList !== null
            ? deserializeAws_json1_1MetricKeyDataPointsList(output.MetricList, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1InternalServiceError = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidArgumentException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1MetricKeyDataPoints = (output, context) => {
    return {
        DataPoints: output.DataPoints !== undefined && output.DataPoints !== null
            ? deserializeAws_json1_1DataPointsList(output.DataPoints, context)
            : undefined,
        Key: output.Key !== undefined && output.Key !== null
            ? deserializeAws_json1_1ResponseResourceMetricKey(output.Key, context)
            : undefined,
    };
};
const deserializeAws_json1_1MetricKeyDataPointsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MetricKeyDataPoints(entry, context);
    });
};
const deserializeAws_json1_1MetricValuesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1NotAuthorizedException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ResponsePartitionKey = (output, context) => {
    return {
        Dimensions: output.Dimensions !== undefined && output.Dimensions !== null
            ? deserializeAws_json1_1DimensionMap(output.Dimensions, context)
            : undefined,
    };
};
const deserializeAws_json1_1ResponsePartitionKeyList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResponsePartitionKey(entry, context);
    });
};
const deserializeAws_json1_1ResponseResourceMetricKey = (output, context) => {
    return {
        Dimensions: output.Dimensions !== undefined && output.Dimensions !== null
            ? deserializeAws_json1_1DimensionMap(output.Dimensions, context)
            : undefined,
        Metric: output.Metric !== undefined && output.Metric !== null ? output.Metric : undefined,
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