import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
export var serializeAws_json1_1DescribeDimensionKeysCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "PerformanceInsightsv20180227.DescribeDimensionKeys",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeDimensionKeysRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetResourceMetricsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "PerformanceInsightsv20180227.GetResourceMetrics",
        };
        body = JSON.stringify(serializeAws_json1_1GetResourceMetricsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_json1_1DescribeDimensionKeysCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeDimensionKeysCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeDimensionKeysResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeDimensionKeysCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceError": return [3 /*break*/, 2];
                    case "com.amazonaws.pi#InternalServiceError": return [3 /*break*/, 2];
                    case "InvalidArgumentException": return [3 /*break*/, 4];
                    case "com.amazonaws.pi#InvalidArgumentException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.pi#NotAuthorizedException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1GetResourceMetricsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetResourceMetricsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetResourceMetricsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetResourceMetricsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceError": return [3 /*break*/, 2];
                    case "com.amazonaws.pi#InternalServiceError": return [3 /*break*/, 2];
                    case "InvalidArgumentException": return [3 /*break*/, 4];
                    case "com.amazonaws.pi#InvalidArgumentException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.pi#NotAuthorizedException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
var deserializeAws_json1_1InternalServiceErrorResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InternalServiceError(body, context);
        contents = __assign({ name: "InternalServiceError", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidArgumentExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidArgumentException(body, context);
        contents = __assign({ name: "InvalidArgumentException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1NotAuthorizedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1NotAuthorizedException(body, context);
        contents = __assign({ name: "NotAuthorizedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_json1_1DescribeDimensionKeysRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.EndTime !== undefined &&
        input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) })), (input.Filter !== undefined &&
        input.Filter !== null && { Filter: serializeAws_json1_1MetricQueryFilterMap(input.Filter, context) })), (input.GroupBy !== undefined &&
        input.GroupBy !== null && { GroupBy: serializeAws_json1_1DimensionGroup(input.GroupBy, context) })), (input.Identifier !== undefined && input.Identifier !== null && { Identifier: input.Identifier })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.Metric !== undefined && input.Metric !== null && { Metric: input.Metric })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.PartitionBy !== undefined &&
        input.PartitionBy !== null && { PartitionBy: serializeAws_json1_1DimensionGroup(input.PartitionBy, context) })), (input.PeriodInSeconds !== undefined &&
        input.PeriodInSeconds !== null && { PeriodInSeconds: input.PeriodInSeconds })), (input.ServiceType !== undefined && input.ServiceType !== null && { ServiceType: input.ServiceType })), (input.StartTime !== undefined &&
        input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }));
};
var serializeAws_json1_1DimensionGroup = function (input, context) {
    return __assign(__assign(__assign({}, (input.Dimensions !== undefined &&
        input.Dimensions !== null && { Dimensions: serializeAws_json1_1StringList(input.Dimensions, context) })), (input.Group !== undefined && input.Group !== null && { Group: input.Group })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }));
};
var serializeAws_json1_1GetResourceMetricsRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.EndTime !== undefined &&
        input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) })), (input.Identifier !== undefined && input.Identifier !== null && { Identifier: input.Identifier })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.MetricQueries !== undefined &&
        input.MetricQueries !== null && {
        MetricQueries: serializeAws_json1_1MetricQueryList(input.MetricQueries, context),
    })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.PeriodInSeconds !== undefined &&
        input.PeriodInSeconds !== null && { PeriodInSeconds: input.PeriodInSeconds })), (input.ServiceType !== undefined && input.ServiceType !== null && { ServiceType: input.ServiceType })), (input.StartTime !== undefined &&
        input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }));
};
var serializeAws_json1_1MetricQuery = function (input, context) {
    return __assign(__assign(__assign({}, (input.Filter !== undefined &&
        input.Filter !== null && { Filter: serializeAws_json1_1MetricQueryFilterMap(input.Filter, context) })), (input.GroupBy !== undefined &&
        input.GroupBy !== null && { GroupBy: serializeAws_json1_1DimensionGroup(input.GroupBy, context) })), (input.Metric !== undefined && input.Metric !== null && { Metric: input.Metric }));
};
var serializeAws_json1_1MetricQueryFilterMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_json1_1MetricQueryList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1MetricQuery(entry, context);
    });
};
var serializeAws_json1_1StringList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1DataPoint = function (output, context) {
    return {
        Timestamp: output.Timestamp !== undefined && output.Timestamp !== null
            ? new Date(Math.round(output.Timestamp * 1000))
            : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_json1_1DataPointsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DataPoint(entry, context);
    });
};
var deserializeAws_json1_1DescribeDimensionKeysResponse = function (output, context) {
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
var deserializeAws_json1_1DimensionKeyDescription = function (output, context) {
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
var deserializeAws_json1_1DimensionKeyDescriptionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DimensionKeyDescription(entry, context);
    });
};
var deserializeAws_json1_1DimensionMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_json1_1GetResourceMetricsResponse = function (output, context) {
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
var deserializeAws_json1_1InternalServiceError = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InvalidArgumentException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1MetricKeyDataPoints = function (output, context) {
    return {
        DataPoints: output.DataPoints !== undefined && output.DataPoints !== null
            ? deserializeAws_json1_1DataPointsList(output.DataPoints, context)
            : undefined,
        Key: output.Key !== undefined && output.Key !== null
            ? deserializeAws_json1_1ResponseResourceMetricKey(output.Key, context)
            : undefined,
    };
};
var deserializeAws_json1_1MetricKeyDataPointsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MetricKeyDataPoints(entry, context);
    });
};
var deserializeAws_json1_1MetricValuesList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1NotAuthorizedException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1ResponsePartitionKey = function (output, context) {
    return {
        Dimensions: output.Dimensions !== undefined && output.Dimensions !== null
            ? deserializeAws_json1_1DimensionMap(output.Dimensions, context)
            : undefined,
    };
};
var deserializeAws_json1_1ResponsePartitionKeyList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResponsePartitionKey(entry, context);
    });
};
var deserializeAws_json1_1ResponseResourceMetricKey = function (output, context) {
    return {
        Dimensions: output.Dimensions !== undefined && output.Dimensions !== null
            ? deserializeAws_json1_1DimensionMap(output.Dimensions, context)
            : undefined,
        Metric: output.Metric !== undefined && output.Metric !== null ? output.Metric : undefined,
    };
};
var deserializeMetadata = function (output) {
    var _a;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
// Collect low-level response body stream to Uint8Array.
var collectBody = function (streamBody, context) {
    if (streamBody === void 0) { streamBody = new Uint8Array(); }
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
var collectBodyString = function (streamBody, context) {
    return collectBody(streamBody, context).then(function (body) { return context.utf8Encoder(body); });
};
var buildHttpRpcRequest = function (context, headers, path, resolvedHostname, body) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, contents;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                contents = {
                    protocol: protocol,
                    hostname: hostname,
                    port: port,
                    method: "POST",
                    path: path,
                    headers: headers,
                };
                if (resolvedHostname !== undefined) {
                    contents.hostname = resolvedHostname;
                }
                if (body !== undefined) {
                    contents.body = body;
                }
                return [2 /*return*/, new __HttpRequest(contents)];
        }
    });
}); };
var parseBody = function (streamBody, context) {
    return collectBodyString(streamBody, context).then(function (encoded) {
        if (encoded.length) {
            return JSON.parse(encoded);
        }
        return {};
    });
};
/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
var loadRestJsonErrorCode = function (output, data) {
    var findKey = function (object, key) { return Object.keys(object).find(function (k) { return k.toLowerCase() === key.toLowerCase(); }); };
    var sanitizeErrorCode = function (rawValue) {
        var cleanValue = rawValue;
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    var headerKey = findKey(output.headers, "x-amzn-errortype");
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