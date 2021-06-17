import { __assign, __awaiter, __generator } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent, } from "@aws-sdk/smithy-client";
export var serializeAws_restJson1InvokeEndpointCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign(__assign(__assign(__assign(__assign(__assign(__assign({ "content-type": "application/octet-stream" }, (isSerializableHeaderValue(input.ContentType) && { "content-type": input.ContentType })), (isSerializableHeaderValue(input.Accept) && { accept: input.Accept })), (isSerializableHeaderValue(input.CustomAttributes) && {
                    "x-amzn-sagemaker-custom-attributes": input.CustomAttributes,
                })), (isSerializableHeaderValue(input.TargetModel) && { "x-amzn-sagemaker-target-model": input.TargetModel })), (isSerializableHeaderValue(input.TargetVariant) && { "x-amzn-sagemaker-target-variant": input.TargetVariant })), (isSerializableHeaderValue(input.TargetContainerHostname) && {
                    "x-amzn-sagemaker-target-container-hostname": input.TargetContainerHostname,
                })), (isSerializableHeaderValue(input.InferenceId) && { "x-amzn-sagemaker-inference-id": input.InferenceId }));
                resolvedPath = "/endpoints/{EndpointName}/invocations";
                if (input.EndpointName !== undefined) {
                    labelValue = input.EndpointName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: EndpointName.");
                    }
                    resolvedPath = resolvedPath.replace("{EndpointName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: EndpointName.");
                }
                if (input.Body !== undefined) {
                    body = input.Body;
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var deserializeAws_restJson1InvokeEndpointCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1InvokeEndpointCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Body: undefined,
                    ContentType: undefined,
                    CustomAttributes: undefined,
                    InvokedProductionVariant: undefined,
                };
                if (output.headers["content-type"] !== undefined) {
                    contents.ContentType = output.headers["content-type"];
                }
                if (output.headers["x-amzn-invoked-production-variant"] !== undefined) {
                    contents.InvokedProductionVariant = output.headers["x-amzn-invoked-production-variant"];
                }
                if (output.headers["x-amzn-sagemaker-custom-attributes"] !== undefined) {
                    contents.CustomAttributes = output.headers["x-amzn-sagemaker-custom-attributes"];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents.Body = data;
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1InvokeEndpointCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalFailure": return [3 /*break*/, 2];
                    case "com.amazonaws.sagemakerruntime#InternalFailure": return [3 /*break*/, 2];
                    case "ModelError": return [3 /*break*/, 4];
                    case "com.amazonaws.sagemakerruntime#ModelError": return [3 /*break*/, 4];
                    case "ServiceUnavailable": return [3 /*break*/, 6];
                    case "com.amazonaws.sagemakerruntime#ServiceUnavailable": return [3 /*break*/, 6];
                    case "ValidationError": return [3 /*break*/, 8];
                    case "com.amazonaws.sagemakerruntime#ValidationError": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ModelErrorResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationErrorResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
var deserializeAws_restJson1InternalFailureResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InternalFailure",
            $fault: "server",
            $metadata: deserializeMetadata(parsedOutput),
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1ModelErrorResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ModelError",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            LogStreamArn: undefined,
            Message: undefined,
            OriginalMessage: undefined,
            OriginalStatusCode: undefined,
        };
        data = parsedOutput.body;
        if (data.LogStreamArn !== undefined && data.LogStreamArn !== null) {
            contents.LogStreamArn = data.LogStreamArn;
        }
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        if (data.OriginalMessage !== undefined && data.OriginalMessage !== null) {
            contents.OriginalMessage = data.OriginalMessage;
        }
        if (data.OriginalStatusCode !== undefined && data.OriginalStatusCode !== null) {
            contents.OriginalStatusCode = data.OriginalStatusCode;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1ServiceUnavailableResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ServiceUnavailable",
            $fault: "server",
            $metadata: deserializeMetadata(parsedOutput),
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1ValidationErrorResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ValidationError",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
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
var isSerializableHeaderValue = function (value) {
    return value !== undefined &&
        value !== null &&
        value !== "" &&
        (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
        (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
};
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
//# sourceMappingURL=Aws_restJson1.js.map