import { __assign, __awaiter, __generator } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
export var serializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption",
        };
        body = JSON.stringify(serializeAws_json1_1AddApplicationCloudWatchLoggingOptionRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AddApplicationInputCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "KinesisAnalytics_20150814.AddApplicationInput",
        };
        body = JSON.stringify(serializeAws_json1_1AddApplicationInputRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AddApplicationInputProcessingConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "KinesisAnalytics_20150814.AddApplicationInputProcessingConfiguration",
        };
        body = JSON.stringify(serializeAws_json1_1AddApplicationInputProcessingConfigurationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AddApplicationOutputCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "KinesisAnalytics_20150814.AddApplicationOutput",
        };
        body = JSON.stringify(serializeAws_json1_1AddApplicationOutputRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AddApplicationReferenceDataSourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "KinesisAnalytics_20150814.AddApplicationReferenceDataSource",
        };
        body = JSON.stringify(serializeAws_json1_1AddApplicationReferenceDataSourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateApplicationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "KinesisAnalytics_20150814.CreateApplication",
        };
        body = JSON.stringify(serializeAws_json1_1CreateApplicationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteApplicationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "KinesisAnalytics_20150814.DeleteApplication",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteApplicationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "KinesisAnalytics_20150814.DeleteApplicationCloudWatchLoggingOption",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "KinesisAnalytics_20150814.DeleteApplicationInputProcessingConfiguration",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteApplicationInputProcessingConfigurationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteApplicationOutputCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "KinesisAnalytics_20150814.DeleteApplicationOutput",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteApplicationOutputRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteApplicationReferenceDataSourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "KinesisAnalytics_20150814.DeleteApplicationReferenceDataSource",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteApplicationReferenceDataSourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeApplicationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "KinesisAnalytics_20150814.DescribeApplication",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeApplicationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DiscoverInputSchemaCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "KinesisAnalytics_20150814.DiscoverInputSchema",
        };
        body = JSON.stringify(serializeAws_json1_1DiscoverInputSchemaRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListApplicationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "KinesisAnalytics_20150814.ListApplications",
        };
        body = JSON.stringify(serializeAws_json1_1ListApplicationsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListTagsForResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "KinesisAnalytics_20150814.ListTagsForResource",
        };
        body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1StartApplicationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "KinesisAnalytics_20150814.StartApplication",
        };
        body = JSON.stringify(serializeAws_json1_1StartApplicationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1StopApplicationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "KinesisAnalytics_20150814.StopApplication",
        };
        body = JSON.stringify(serializeAws_json1_1StopApplicationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1TagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "KinesisAnalytics_20150814.TagResource",
        };
        body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UntagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "KinesisAnalytics_20150814.UntagResource",
        };
        body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateApplicationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "KinesisAnalytics_20150814.UpdateApplication",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateApplicationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.kinesisanalytics#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidArgumentException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalytics#InvalidArgumentException": return [3 /*break*/, 4];
                    case "ResourceInUseException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalytics#ResourceInUseException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kinesisanalytics#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "UnsupportedOperationException": return [3 /*break*/, 10];
                    case "com.amazonaws.kinesisanalytics#UnsupportedOperationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AddApplicationInputCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AddApplicationInputCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AddApplicationInputResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AddApplicationInputCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "CodeValidationException": return [3 /*break*/, 2];
                    case "com.amazonaws.kinesisanalytics#CodeValidationException": return [3 /*break*/, 2];
                    case "ConcurrentModificationException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalytics#ConcurrentModificationException": return [3 /*break*/, 4];
                    case "InvalidArgumentException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalytics#InvalidArgumentException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.kinesisanalytics#ResourceInUseException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.kinesisanalytics#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "UnsupportedOperationException": return [3 /*break*/, 12];
                    case "com.amazonaws.kinesisanalytics#UnsupportedOperationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CodeValidationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AddApplicationInputProcessingConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AddApplicationInputProcessingConfigurationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AddApplicationInputProcessingConfigurationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AddApplicationInputProcessingConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.kinesisanalytics#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidArgumentException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalytics#InvalidArgumentException": return [3 /*break*/, 4];
                    case "ResourceInUseException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalytics#ResourceInUseException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kinesisanalytics#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "UnsupportedOperationException": return [3 /*break*/, 10];
                    case "com.amazonaws.kinesisanalytics#UnsupportedOperationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AddApplicationOutputCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AddApplicationOutputCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AddApplicationOutputResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AddApplicationOutputCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.kinesisanalytics#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidArgumentException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalytics#InvalidArgumentException": return [3 /*break*/, 4];
                    case "ResourceInUseException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalytics#ResourceInUseException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kinesisanalytics#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "UnsupportedOperationException": return [3 /*break*/, 10];
                    case "com.amazonaws.kinesisanalytics#UnsupportedOperationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AddApplicationReferenceDataSourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AddApplicationReferenceDataSourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AddApplicationReferenceDataSourceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AddApplicationReferenceDataSourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.kinesisanalytics#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidArgumentException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalytics#InvalidArgumentException": return [3 /*break*/, 4];
                    case "ResourceInUseException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalytics#ResourceInUseException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kinesisanalytics#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "UnsupportedOperationException": return [3 /*break*/, 10];
                    case "com.amazonaws.kinesisanalytics#UnsupportedOperationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateApplicationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateApplicationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateApplicationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateApplicationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "CodeValidationException": return [3 /*break*/, 2];
                    case "com.amazonaws.kinesisanalytics#CodeValidationException": return [3 /*break*/, 2];
                    case "ConcurrentModificationException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalytics#ConcurrentModificationException": return [3 /*break*/, 4];
                    case "InvalidArgumentException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalytics#InvalidArgumentException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.kinesisanalytics#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceInUseException": return [3 /*break*/, 10];
                    case "com.amazonaws.kinesisanalytics#ResourceInUseException": return [3 /*break*/, 10];
                    case "TooManyTagsException": return [3 /*break*/, 12];
                    case "com.amazonaws.kinesisanalytics#TooManyTagsException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CodeValidationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteApplicationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteApplicationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteApplicationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteApplicationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.kinesisanalytics#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "ResourceInUseException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalytics#ResourceInUseException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalytics#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "UnsupportedOperationException": return [3 /*break*/, 8];
                    case "com.amazonaws.kinesisanalytics#UnsupportedOperationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.kinesisanalytics#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidArgumentException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalytics#InvalidArgumentException": return [3 /*break*/, 4];
                    case "ResourceInUseException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalytics#ResourceInUseException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kinesisanalytics#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "UnsupportedOperationException": return [3 /*break*/, 10];
                    case "com.amazonaws.kinesisanalytics#UnsupportedOperationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.kinesisanalytics#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidArgumentException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalytics#InvalidArgumentException": return [3 /*break*/, 4];
                    case "ResourceInUseException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalytics#ResourceInUseException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kinesisanalytics#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "UnsupportedOperationException": return [3 /*break*/, 10];
                    case "com.amazonaws.kinesisanalytics#UnsupportedOperationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteApplicationOutputCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteApplicationOutputCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteApplicationOutputResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteApplicationOutputCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.kinesisanalytics#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidArgumentException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalytics#InvalidArgumentException": return [3 /*break*/, 4];
                    case "ResourceInUseException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalytics#ResourceInUseException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kinesisanalytics#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "UnsupportedOperationException": return [3 /*break*/, 10];
                    case "com.amazonaws.kinesisanalytics#UnsupportedOperationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteApplicationReferenceDataSourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteApplicationReferenceDataSourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteApplicationReferenceDataSourceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteApplicationReferenceDataSourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.kinesisanalytics#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidArgumentException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalytics#InvalidArgumentException": return [3 /*break*/, 4];
                    case "ResourceInUseException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalytics#ResourceInUseException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kinesisanalytics#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "UnsupportedOperationException": return [3 /*break*/, 10];
                    case "com.amazonaws.kinesisanalytics#UnsupportedOperationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeApplicationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeApplicationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeApplicationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeApplicationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ResourceNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.kinesisanalytics#ResourceNotFoundException": return [3 /*break*/, 2];
                    case "UnsupportedOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalytics#UnsupportedOperationException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DiscoverInputSchemaCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DiscoverInputSchemaCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DiscoverInputSchemaResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DiscoverInputSchemaCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidArgumentException": return [3 /*break*/, 2];
                    case "com.amazonaws.kinesisanalytics#InvalidArgumentException": return [3 /*break*/, 2];
                    case "ResourceProvisionedThroughputExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalytics#ResourceProvisionedThroughputExceededException": return [3 /*break*/, 4];
                    case "ServiceUnavailableException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalytics#ServiceUnavailableException": return [3 /*break*/, 6];
                    case "UnableToDetectSchemaException": return [3 /*break*/, 8];
                    case "com.amazonaws.kinesisanalytics#UnableToDetectSchemaException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceProvisionedThroughputExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnableToDetectSchemaExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListApplicationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListApplicationsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListApplicationsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListApplicationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.code || parsedBody.Code || errorCode;
                        response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListTagsForResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListTagsForResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListTagsForResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.kinesisanalytics#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidArgumentException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalytics#InvalidArgumentException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalytics#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1StartApplicationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1StartApplicationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1StartApplicationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1StartApplicationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidApplicationConfigurationException": return [3 /*break*/, 2];
                    case "com.amazonaws.kinesisanalytics#InvalidApplicationConfigurationException": return [3 /*break*/, 2];
                    case "InvalidArgumentException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalytics#InvalidArgumentException": return [3 /*break*/, 4];
                    case "ResourceInUseException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalytics#ResourceInUseException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kinesisanalytics#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "UnsupportedOperationException": return [3 /*break*/, 10];
                    case "com.amazonaws.kinesisanalytics#UnsupportedOperationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1StopApplicationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1StopApplicationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1StopApplicationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1StopApplicationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ResourceInUseException": return [3 /*break*/, 2];
                    case "com.amazonaws.kinesisanalytics#ResourceInUseException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalytics#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "UnsupportedOperationException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalytics#UnsupportedOperationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1TagResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1TagResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1TagResourceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1TagResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.kinesisanalytics#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidArgumentException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalytics#InvalidArgumentException": return [3 /*break*/, 4];
                    case "ResourceInUseException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalytics#ResourceInUseException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kinesisanalytics#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyTagsException": return [3 /*break*/, 10];
                    case "com.amazonaws.kinesisanalytics#TooManyTagsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UntagResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UntagResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UntagResourceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UntagResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.kinesisanalytics#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidArgumentException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalytics#InvalidArgumentException": return [3 /*break*/, 4];
                    case "ResourceInUseException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalytics#ResourceInUseException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kinesisanalytics#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyTagsException": return [3 /*break*/, 10];
                    case "com.amazonaws.kinesisanalytics#TooManyTagsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateApplicationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateApplicationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateApplicationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateApplicationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "CodeValidationException": return [3 /*break*/, 2];
                    case "com.amazonaws.kinesisanalytics#CodeValidationException": return [3 /*break*/, 2];
                    case "ConcurrentModificationException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalytics#ConcurrentModificationException": return [3 /*break*/, 4];
                    case "InvalidArgumentException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalytics#InvalidArgumentException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.kinesisanalytics#ResourceInUseException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.kinesisanalytics#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "UnsupportedOperationException": return [3 /*break*/, 12];
                    case "com.amazonaws.kinesisanalytics#UnsupportedOperationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CodeValidationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
var deserializeAws_json1_1CodeValidationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1CodeValidationException(body, context);
        contents = __assign({ name: "CodeValidationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ConcurrentModificationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ConcurrentModificationException(body, context);
        contents = __assign({ name: "ConcurrentModificationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidApplicationConfigurationException(body, context);
        contents = __assign({ name: "InvalidApplicationConfigurationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
var deserializeAws_json1_1LimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1LimitExceededException(body, context);
        contents = __assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ResourceInUseExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ResourceInUseException(body, context);
        contents = __assign({ name: "ResourceInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ResourceNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
        contents = __assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ResourceProvisionedThroughputExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ResourceProvisionedThroughputExceededException(body, context);
        contents = __assign({ name: "ResourceProvisionedThroughputExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ServiceUnavailableExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ServiceUnavailableException(body, context);
        contents = __assign({ name: "ServiceUnavailableException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1TooManyTagsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1TooManyTagsException(body, context);
        contents = __assign({ name: "TooManyTagsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1UnableToDetectSchemaExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1UnableToDetectSchemaException(body, context);
        contents = __assign({ name: "UnableToDetectSchemaException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1UnsupportedOperationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1UnsupportedOperationException(body, context);
        contents = __assign({ name: "UnsupportedOperationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_json1_1AddApplicationCloudWatchLoggingOptionRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.ApplicationName !== undefined &&
        input.ApplicationName !== null && { ApplicationName: input.ApplicationName })), (input.CloudWatchLoggingOption !== undefined &&
        input.CloudWatchLoggingOption !== null && {
        CloudWatchLoggingOption: serializeAws_json1_1CloudWatchLoggingOption(input.CloudWatchLoggingOption, context),
    })), (input.CurrentApplicationVersionId !== undefined &&
        input.CurrentApplicationVersionId !== null && { CurrentApplicationVersionId: input.CurrentApplicationVersionId }));
};
var serializeAws_json1_1AddApplicationInputProcessingConfigurationRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.ApplicationName !== undefined &&
        input.ApplicationName !== null && { ApplicationName: input.ApplicationName })), (input.CurrentApplicationVersionId !== undefined &&
        input.CurrentApplicationVersionId !== null && { CurrentApplicationVersionId: input.CurrentApplicationVersionId })), (input.InputId !== undefined && input.InputId !== null && { InputId: input.InputId })), (input.InputProcessingConfiguration !== undefined &&
        input.InputProcessingConfiguration !== null && {
        InputProcessingConfiguration: serializeAws_json1_1InputProcessingConfiguration(input.InputProcessingConfiguration, context),
    }));
};
var serializeAws_json1_1AddApplicationInputRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.ApplicationName !== undefined &&
        input.ApplicationName !== null && { ApplicationName: input.ApplicationName })), (input.CurrentApplicationVersionId !== undefined &&
        input.CurrentApplicationVersionId !== null && { CurrentApplicationVersionId: input.CurrentApplicationVersionId })), (input.Input !== undefined &&
        input.Input !== null && { Input: serializeAws_json1_1Input(input.Input, context) }));
};
var serializeAws_json1_1AddApplicationOutputRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.ApplicationName !== undefined &&
        input.ApplicationName !== null && { ApplicationName: input.ApplicationName })), (input.CurrentApplicationVersionId !== undefined &&
        input.CurrentApplicationVersionId !== null && { CurrentApplicationVersionId: input.CurrentApplicationVersionId })), (input.Output !== undefined &&
        input.Output !== null && { Output: serializeAws_json1_1Output(input.Output, context) }));
};
var serializeAws_json1_1AddApplicationReferenceDataSourceRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.ApplicationName !== undefined &&
        input.ApplicationName !== null && { ApplicationName: input.ApplicationName })), (input.CurrentApplicationVersionId !== undefined &&
        input.CurrentApplicationVersionId !== null && { CurrentApplicationVersionId: input.CurrentApplicationVersionId })), (input.ReferenceDataSource !== undefined &&
        input.ReferenceDataSource !== null && {
        ReferenceDataSource: serializeAws_json1_1ReferenceDataSource(input.ReferenceDataSource, context),
    }));
};
var serializeAws_json1_1ApplicationUpdate = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.ApplicationCodeUpdate !== undefined &&
        input.ApplicationCodeUpdate !== null && { ApplicationCodeUpdate: input.ApplicationCodeUpdate })), (input.CloudWatchLoggingOptionUpdates !== undefined &&
        input.CloudWatchLoggingOptionUpdates !== null && {
        CloudWatchLoggingOptionUpdates: serializeAws_json1_1CloudWatchLoggingOptionUpdates(input.CloudWatchLoggingOptionUpdates, context),
    })), (input.InputUpdates !== undefined &&
        input.InputUpdates !== null && { InputUpdates: serializeAws_json1_1InputUpdates(input.InputUpdates, context) })), (input.OutputUpdates !== undefined &&
        input.OutputUpdates !== null && {
        OutputUpdates: serializeAws_json1_1OutputUpdates(input.OutputUpdates, context),
    })), (input.ReferenceDataSourceUpdates !== undefined &&
        input.ReferenceDataSourceUpdates !== null && {
        ReferenceDataSourceUpdates: serializeAws_json1_1ReferenceDataSourceUpdates(input.ReferenceDataSourceUpdates, context),
    }));
};
var serializeAws_json1_1CloudWatchLoggingOption = function (input, context) {
    return __assign(__assign({}, (input.LogStreamARN !== undefined && input.LogStreamARN !== null && { LogStreamARN: input.LogStreamARN })), (input.RoleARN !== undefined && input.RoleARN !== null && { RoleARN: input.RoleARN }));
};
var serializeAws_json1_1CloudWatchLoggingOptions = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1CloudWatchLoggingOption(entry, context);
    });
};
var serializeAws_json1_1CloudWatchLoggingOptionUpdate = function (input, context) {
    return __assign(__assign(__assign({}, (input.CloudWatchLoggingOptionId !== undefined &&
        input.CloudWatchLoggingOptionId !== null && { CloudWatchLoggingOptionId: input.CloudWatchLoggingOptionId })), (input.LogStreamARNUpdate !== undefined &&
        input.LogStreamARNUpdate !== null && { LogStreamARNUpdate: input.LogStreamARNUpdate })), (input.RoleARNUpdate !== undefined && input.RoleARNUpdate !== null && { RoleARNUpdate: input.RoleARNUpdate }));
};
var serializeAws_json1_1CloudWatchLoggingOptionUpdates = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1CloudWatchLoggingOptionUpdate(entry, context);
    });
};
var serializeAws_json1_1CreateApplicationRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.ApplicationCode !== undefined &&
        input.ApplicationCode !== null && { ApplicationCode: input.ApplicationCode })), (input.ApplicationDescription !== undefined &&
        input.ApplicationDescription !== null && { ApplicationDescription: input.ApplicationDescription })), (input.ApplicationName !== undefined &&
        input.ApplicationName !== null && { ApplicationName: input.ApplicationName })), (input.CloudWatchLoggingOptions !== undefined &&
        input.CloudWatchLoggingOptions !== null && {
        CloudWatchLoggingOptions: serializeAws_json1_1CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
    })), (input.Inputs !== undefined &&
        input.Inputs !== null && { Inputs: serializeAws_json1_1Inputs(input.Inputs, context) })), (input.Outputs !== undefined &&
        input.Outputs !== null && { Outputs: serializeAws_json1_1Outputs(input.Outputs, context) })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }));
};
var serializeAws_json1_1CSVMappingParameters = function (input, context) {
    return __assign(__assign({}, (input.RecordColumnDelimiter !== undefined &&
        input.RecordColumnDelimiter !== null && { RecordColumnDelimiter: input.RecordColumnDelimiter })), (input.RecordRowDelimiter !== undefined &&
        input.RecordRowDelimiter !== null && { RecordRowDelimiter: input.RecordRowDelimiter }));
};
var serializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.ApplicationName !== undefined &&
        input.ApplicationName !== null && { ApplicationName: input.ApplicationName })), (input.CloudWatchLoggingOptionId !== undefined &&
        input.CloudWatchLoggingOptionId !== null && { CloudWatchLoggingOptionId: input.CloudWatchLoggingOptionId })), (input.CurrentApplicationVersionId !== undefined &&
        input.CurrentApplicationVersionId !== null && { CurrentApplicationVersionId: input.CurrentApplicationVersionId }));
};
var serializeAws_json1_1DeleteApplicationInputProcessingConfigurationRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.ApplicationName !== undefined &&
        input.ApplicationName !== null && { ApplicationName: input.ApplicationName })), (input.CurrentApplicationVersionId !== undefined &&
        input.CurrentApplicationVersionId !== null && { CurrentApplicationVersionId: input.CurrentApplicationVersionId })), (input.InputId !== undefined && input.InputId !== null && { InputId: input.InputId }));
};
var serializeAws_json1_1DeleteApplicationOutputRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.ApplicationName !== undefined &&
        input.ApplicationName !== null && { ApplicationName: input.ApplicationName })), (input.CurrentApplicationVersionId !== undefined &&
        input.CurrentApplicationVersionId !== null && { CurrentApplicationVersionId: input.CurrentApplicationVersionId })), (input.OutputId !== undefined && input.OutputId !== null && { OutputId: input.OutputId }));
};
var serializeAws_json1_1DeleteApplicationReferenceDataSourceRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.ApplicationName !== undefined &&
        input.ApplicationName !== null && { ApplicationName: input.ApplicationName })), (input.CurrentApplicationVersionId !== undefined &&
        input.CurrentApplicationVersionId !== null && { CurrentApplicationVersionId: input.CurrentApplicationVersionId })), (input.ReferenceId !== undefined && input.ReferenceId !== null && { ReferenceId: input.ReferenceId }));
};
var serializeAws_json1_1DeleteApplicationRequest = function (input, context) {
    return __assign(__assign({}, (input.ApplicationName !== undefined &&
        input.ApplicationName !== null && { ApplicationName: input.ApplicationName })), (input.CreateTimestamp !== undefined &&
        input.CreateTimestamp !== null && { CreateTimestamp: Math.round(input.CreateTimestamp.getTime() / 1000) }));
};
var serializeAws_json1_1DescribeApplicationRequest = function (input, context) {
    return __assign({}, (input.ApplicationName !== undefined &&
        input.ApplicationName !== null && { ApplicationName: input.ApplicationName }));
};
var serializeAws_json1_1DestinationSchema = function (input, context) {
    return __assign({}, (input.RecordFormatType !== undefined &&
        input.RecordFormatType !== null && { RecordFormatType: input.RecordFormatType }));
};
var serializeAws_json1_1DiscoverInputSchemaRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.InputProcessingConfiguration !== undefined &&
        input.InputProcessingConfiguration !== null && {
        InputProcessingConfiguration: serializeAws_json1_1InputProcessingConfiguration(input.InputProcessingConfiguration, context),
    })), (input.InputStartingPositionConfiguration !== undefined &&
        input.InputStartingPositionConfiguration !== null && {
        InputStartingPositionConfiguration: serializeAws_json1_1InputStartingPositionConfiguration(input.InputStartingPositionConfiguration, context),
    })), (input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN })), (input.RoleARN !== undefined && input.RoleARN !== null && { RoleARN: input.RoleARN })), (input.S3Configuration !== undefined &&
        input.S3Configuration !== null && {
        S3Configuration: serializeAws_json1_1S3Configuration(input.S3Configuration, context),
    }));
};
var serializeAws_json1_1Input = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.InputParallelism !== undefined &&
        input.InputParallelism !== null && {
        InputParallelism: serializeAws_json1_1InputParallelism(input.InputParallelism, context),
    })), (input.InputProcessingConfiguration !== undefined &&
        input.InputProcessingConfiguration !== null && {
        InputProcessingConfiguration: serializeAws_json1_1InputProcessingConfiguration(input.InputProcessingConfiguration, context),
    })), (input.InputSchema !== undefined &&
        input.InputSchema !== null && { InputSchema: serializeAws_json1_1SourceSchema(input.InputSchema, context) })), (input.KinesisFirehoseInput !== undefined &&
        input.KinesisFirehoseInput !== null && {
        KinesisFirehoseInput: serializeAws_json1_1KinesisFirehoseInput(input.KinesisFirehoseInput, context),
    })), (input.KinesisStreamsInput !== undefined &&
        input.KinesisStreamsInput !== null && {
        KinesisStreamsInput: serializeAws_json1_1KinesisStreamsInput(input.KinesisStreamsInput, context),
    })), (input.NamePrefix !== undefined && input.NamePrefix !== null && { NamePrefix: input.NamePrefix }));
};
var serializeAws_json1_1InputConfiguration = function (input, context) {
    return __assign(__assign({}, (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.InputStartingPositionConfiguration !== undefined &&
        input.InputStartingPositionConfiguration !== null && {
        InputStartingPositionConfiguration: serializeAws_json1_1InputStartingPositionConfiguration(input.InputStartingPositionConfiguration, context),
    }));
};
var serializeAws_json1_1InputConfigurations = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1InputConfiguration(entry, context);
    });
};
var serializeAws_json1_1InputLambdaProcessor = function (input, context) {
    return __assign(__assign({}, (input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN })), (input.RoleARN !== undefined && input.RoleARN !== null && { RoleARN: input.RoleARN }));
};
var serializeAws_json1_1InputLambdaProcessorUpdate = function (input, context) {
    return __assign(__assign({}, (input.ResourceARNUpdate !== undefined &&
        input.ResourceARNUpdate !== null && { ResourceARNUpdate: input.ResourceARNUpdate })), (input.RoleARNUpdate !== undefined && input.RoleARNUpdate !== null && { RoleARNUpdate: input.RoleARNUpdate }));
};
var serializeAws_json1_1InputParallelism = function (input, context) {
    return __assign({}, (input.Count !== undefined && input.Count !== null && { Count: input.Count }));
};
var serializeAws_json1_1InputParallelismUpdate = function (input, context) {
    return __assign({}, (input.CountUpdate !== undefined && input.CountUpdate !== null && { CountUpdate: input.CountUpdate }));
};
var serializeAws_json1_1InputProcessingConfiguration = function (input, context) {
    return __assign({}, (input.InputLambdaProcessor !== undefined &&
        input.InputLambdaProcessor !== null && {
        InputLambdaProcessor: serializeAws_json1_1InputLambdaProcessor(input.InputLambdaProcessor, context),
    }));
};
var serializeAws_json1_1InputProcessingConfigurationUpdate = function (input, context) {
    return __assign({}, (input.InputLambdaProcessorUpdate !== undefined &&
        input.InputLambdaProcessorUpdate !== null && {
        InputLambdaProcessorUpdate: serializeAws_json1_1InputLambdaProcessorUpdate(input.InputLambdaProcessorUpdate, context),
    }));
};
var serializeAws_json1_1Inputs = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Input(entry, context);
    });
};
var serializeAws_json1_1InputSchemaUpdate = function (input, context) {
    return __assign(__assign(__assign({}, (input.RecordColumnUpdates !== undefined &&
        input.RecordColumnUpdates !== null && {
        RecordColumnUpdates: serializeAws_json1_1RecordColumns(input.RecordColumnUpdates, context),
    })), (input.RecordEncodingUpdate !== undefined &&
        input.RecordEncodingUpdate !== null && { RecordEncodingUpdate: input.RecordEncodingUpdate })), (input.RecordFormatUpdate !== undefined &&
        input.RecordFormatUpdate !== null && {
        RecordFormatUpdate: serializeAws_json1_1RecordFormat(input.RecordFormatUpdate, context),
    }));
};
var serializeAws_json1_1InputStartingPositionConfiguration = function (input, context) {
    return __assign({}, (input.InputStartingPosition !== undefined &&
        input.InputStartingPosition !== null && { InputStartingPosition: input.InputStartingPosition }));
};
var serializeAws_json1_1InputUpdate = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.InputId !== undefined && input.InputId !== null && { InputId: input.InputId })), (input.InputParallelismUpdate !== undefined &&
        input.InputParallelismUpdate !== null && {
        InputParallelismUpdate: serializeAws_json1_1InputParallelismUpdate(input.InputParallelismUpdate, context),
    })), (input.InputProcessingConfigurationUpdate !== undefined &&
        input.InputProcessingConfigurationUpdate !== null && {
        InputProcessingConfigurationUpdate: serializeAws_json1_1InputProcessingConfigurationUpdate(input.InputProcessingConfigurationUpdate, context),
    })), (input.InputSchemaUpdate !== undefined &&
        input.InputSchemaUpdate !== null && {
        InputSchemaUpdate: serializeAws_json1_1InputSchemaUpdate(input.InputSchemaUpdate, context),
    })), (input.KinesisFirehoseInputUpdate !== undefined &&
        input.KinesisFirehoseInputUpdate !== null && {
        KinesisFirehoseInputUpdate: serializeAws_json1_1KinesisFirehoseInputUpdate(input.KinesisFirehoseInputUpdate, context),
    })), (input.KinesisStreamsInputUpdate !== undefined &&
        input.KinesisStreamsInputUpdate !== null && {
        KinesisStreamsInputUpdate: serializeAws_json1_1KinesisStreamsInputUpdate(input.KinesisStreamsInputUpdate, context),
    })), (input.NamePrefixUpdate !== undefined &&
        input.NamePrefixUpdate !== null && { NamePrefixUpdate: input.NamePrefixUpdate }));
};
var serializeAws_json1_1InputUpdates = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1InputUpdate(entry, context);
    });
};
var serializeAws_json1_1JSONMappingParameters = function (input, context) {
    return __assign({}, (input.RecordRowPath !== undefined && input.RecordRowPath !== null && { RecordRowPath: input.RecordRowPath }));
};
var serializeAws_json1_1KinesisFirehoseInput = function (input, context) {
    return __assign(__assign({}, (input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN })), (input.RoleARN !== undefined && input.RoleARN !== null && { RoleARN: input.RoleARN }));
};
var serializeAws_json1_1KinesisFirehoseInputUpdate = function (input, context) {
    return __assign(__assign({}, (input.ResourceARNUpdate !== undefined &&
        input.ResourceARNUpdate !== null && { ResourceARNUpdate: input.ResourceARNUpdate })), (input.RoleARNUpdate !== undefined && input.RoleARNUpdate !== null && { RoleARNUpdate: input.RoleARNUpdate }));
};
var serializeAws_json1_1KinesisFirehoseOutput = function (input, context) {
    return __assign(__assign({}, (input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN })), (input.RoleARN !== undefined && input.RoleARN !== null && { RoleARN: input.RoleARN }));
};
var serializeAws_json1_1KinesisFirehoseOutputUpdate = function (input, context) {
    return __assign(__assign({}, (input.ResourceARNUpdate !== undefined &&
        input.ResourceARNUpdate !== null && { ResourceARNUpdate: input.ResourceARNUpdate })), (input.RoleARNUpdate !== undefined && input.RoleARNUpdate !== null && { RoleARNUpdate: input.RoleARNUpdate }));
};
var serializeAws_json1_1KinesisStreamsInput = function (input, context) {
    return __assign(__assign({}, (input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN })), (input.RoleARN !== undefined && input.RoleARN !== null && { RoleARN: input.RoleARN }));
};
var serializeAws_json1_1KinesisStreamsInputUpdate = function (input, context) {
    return __assign(__assign({}, (input.ResourceARNUpdate !== undefined &&
        input.ResourceARNUpdate !== null && { ResourceARNUpdate: input.ResourceARNUpdate })), (input.RoleARNUpdate !== undefined && input.RoleARNUpdate !== null && { RoleARNUpdate: input.RoleARNUpdate }));
};
var serializeAws_json1_1KinesisStreamsOutput = function (input, context) {
    return __assign(__assign({}, (input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN })), (input.RoleARN !== undefined && input.RoleARN !== null && { RoleARN: input.RoleARN }));
};
var serializeAws_json1_1KinesisStreamsOutputUpdate = function (input, context) {
    return __assign(__assign({}, (input.ResourceARNUpdate !== undefined &&
        input.ResourceARNUpdate !== null && { ResourceARNUpdate: input.ResourceARNUpdate })), (input.RoleARNUpdate !== undefined && input.RoleARNUpdate !== null && { RoleARNUpdate: input.RoleARNUpdate }));
};
var serializeAws_json1_1LambdaOutput = function (input, context) {
    return __assign(__assign({}, (input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN })), (input.RoleARN !== undefined && input.RoleARN !== null && { RoleARN: input.RoleARN }));
};
var serializeAws_json1_1LambdaOutputUpdate = function (input, context) {
    return __assign(__assign({}, (input.ResourceARNUpdate !== undefined &&
        input.ResourceARNUpdate !== null && { ResourceARNUpdate: input.ResourceARNUpdate })), (input.RoleARNUpdate !== undefined && input.RoleARNUpdate !== null && { RoleARNUpdate: input.RoleARNUpdate }));
};
var serializeAws_json1_1ListApplicationsRequest = function (input, context) {
    return __assign(__assign({}, (input.ExclusiveStartApplicationName !== undefined &&
        input.ExclusiveStartApplicationName !== null && {
        ExclusiveStartApplicationName: input.ExclusiveStartApplicationName,
    })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }));
};
var serializeAws_json1_1ListTagsForResourceRequest = function (input, context) {
    return __assign({}, (input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }));
};
var serializeAws_json1_1MappingParameters = function (input, context) {
    return __assign(__assign({}, (input.CSVMappingParameters !== undefined &&
        input.CSVMappingParameters !== null && {
        CSVMappingParameters: serializeAws_json1_1CSVMappingParameters(input.CSVMappingParameters, context),
    })), (input.JSONMappingParameters !== undefined &&
        input.JSONMappingParameters !== null && {
        JSONMappingParameters: serializeAws_json1_1JSONMappingParameters(input.JSONMappingParameters, context),
    }));
};
var serializeAws_json1_1Output = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.DestinationSchema !== undefined &&
        input.DestinationSchema !== null && {
        DestinationSchema: serializeAws_json1_1DestinationSchema(input.DestinationSchema, context),
    })), (input.KinesisFirehoseOutput !== undefined &&
        input.KinesisFirehoseOutput !== null && {
        KinesisFirehoseOutput: serializeAws_json1_1KinesisFirehoseOutput(input.KinesisFirehoseOutput, context),
    })), (input.KinesisStreamsOutput !== undefined &&
        input.KinesisStreamsOutput !== null && {
        KinesisStreamsOutput: serializeAws_json1_1KinesisStreamsOutput(input.KinesisStreamsOutput, context),
    })), (input.LambdaOutput !== undefined &&
        input.LambdaOutput !== null && { LambdaOutput: serializeAws_json1_1LambdaOutput(input.LambdaOutput, context) })), (input.Name !== undefined && input.Name !== null && { Name: input.Name }));
};
var serializeAws_json1_1Outputs = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Output(entry, context);
    });
};
var serializeAws_json1_1OutputUpdate = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.DestinationSchemaUpdate !== undefined &&
        input.DestinationSchemaUpdate !== null && {
        DestinationSchemaUpdate: serializeAws_json1_1DestinationSchema(input.DestinationSchemaUpdate, context),
    })), (input.KinesisFirehoseOutputUpdate !== undefined &&
        input.KinesisFirehoseOutputUpdate !== null && {
        KinesisFirehoseOutputUpdate: serializeAws_json1_1KinesisFirehoseOutputUpdate(input.KinesisFirehoseOutputUpdate, context),
    })), (input.KinesisStreamsOutputUpdate !== undefined &&
        input.KinesisStreamsOutputUpdate !== null && {
        KinesisStreamsOutputUpdate: serializeAws_json1_1KinesisStreamsOutputUpdate(input.KinesisStreamsOutputUpdate, context),
    })), (input.LambdaOutputUpdate !== undefined &&
        input.LambdaOutputUpdate !== null && {
        LambdaOutputUpdate: serializeAws_json1_1LambdaOutputUpdate(input.LambdaOutputUpdate, context),
    })), (input.NameUpdate !== undefined && input.NameUpdate !== null && { NameUpdate: input.NameUpdate })), (input.OutputId !== undefined && input.OutputId !== null && { OutputId: input.OutputId }));
};
var serializeAws_json1_1OutputUpdates = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1OutputUpdate(entry, context);
    });
};
var serializeAws_json1_1RecordColumn = function (input, context) {
    return __assign(__assign(__assign({}, (input.Mapping !== undefined && input.Mapping !== null && { Mapping: input.Mapping })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.SqlType !== undefined && input.SqlType !== null && { SqlType: input.SqlType }));
};
var serializeAws_json1_1RecordColumns = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1RecordColumn(entry, context);
    });
};
var serializeAws_json1_1RecordFormat = function (input, context) {
    return __assign(__assign({}, (input.MappingParameters !== undefined &&
        input.MappingParameters !== null && {
        MappingParameters: serializeAws_json1_1MappingParameters(input.MappingParameters, context),
    })), (input.RecordFormatType !== undefined &&
        input.RecordFormatType !== null && { RecordFormatType: input.RecordFormatType }));
};
var serializeAws_json1_1ReferenceDataSource = function (input, context) {
    return __assign(__assign(__assign({}, (input.ReferenceSchema !== undefined &&
        input.ReferenceSchema !== null && {
        ReferenceSchema: serializeAws_json1_1SourceSchema(input.ReferenceSchema, context),
    })), (input.S3ReferenceDataSource !== undefined &&
        input.S3ReferenceDataSource !== null && {
        S3ReferenceDataSource: serializeAws_json1_1S3ReferenceDataSource(input.S3ReferenceDataSource, context),
    })), (input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }));
};
var serializeAws_json1_1ReferenceDataSourceUpdate = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.ReferenceId !== undefined && input.ReferenceId !== null && { ReferenceId: input.ReferenceId })), (input.ReferenceSchemaUpdate !== undefined &&
        input.ReferenceSchemaUpdate !== null && {
        ReferenceSchemaUpdate: serializeAws_json1_1SourceSchema(input.ReferenceSchemaUpdate, context),
    })), (input.S3ReferenceDataSourceUpdate !== undefined &&
        input.S3ReferenceDataSourceUpdate !== null && {
        S3ReferenceDataSourceUpdate: serializeAws_json1_1S3ReferenceDataSourceUpdate(input.S3ReferenceDataSourceUpdate, context),
    })), (input.TableNameUpdate !== undefined &&
        input.TableNameUpdate !== null && { TableNameUpdate: input.TableNameUpdate }));
};
var serializeAws_json1_1ReferenceDataSourceUpdates = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ReferenceDataSourceUpdate(entry, context);
    });
};
var serializeAws_json1_1S3Configuration = function (input, context) {
    return __assign(__assign(__assign({}, (input.BucketARN !== undefined && input.BucketARN !== null && { BucketARN: input.BucketARN })), (input.FileKey !== undefined && input.FileKey !== null && { FileKey: input.FileKey })), (input.RoleARN !== undefined && input.RoleARN !== null && { RoleARN: input.RoleARN }));
};
var serializeAws_json1_1S3ReferenceDataSource = function (input, context) {
    return __assign(__assign(__assign({}, (input.BucketARN !== undefined && input.BucketARN !== null && { BucketARN: input.BucketARN })), (input.FileKey !== undefined && input.FileKey !== null && { FileKey: input.FileKey })), (input.ReferenceRoleARN !== undefined &&
        input.ReferenceRoleARN !== null && { ReferenceRoleARN: input.ReferenceRoleARN }));
};
var serializeAws_json1_1S3ReferenceDataSourceUpdate = function (input, context) {
    return __assign(__assign(__assign({}, (input.BucketARNUpdate !== undefined &&
        input.BucketARNUpdate !== null && { BucketARNUpdate: input.BucketARNUpdate })), (input.FileKeyUpdate !== undefined && input.FileKeyUpdate !== null && { FileKeyUpdate: input.FileKeyUpdate })), (input.ReferenceRoleARNUpdate !== undefined &&
        input.ReferenceRoleARNUpdate !== null && { ReferenceRoleARNUpdate: input.ReferenceRoleARNUpdate }));
};
var serializeAws_json1_1SourceSchema = function (input, context) {
    return __assign(__assign(__assign({}, (input.RecordColumns !== undefined &&
        input.RecordColumns !== null && {
        RecordColumns: serializeAws_json1_1RecordColumns(input.RecordColumns, context),
    })), (input.RecordEncoding !== undefined &&
        input.RecordEncoding !== null && { RecordEncoding: input.RecordEncoding })), (input.RecordFormat !== undefined &&
        input.RecordFormat !== null && { RecordFormat: serializeAws_json1_1RecordFormat(input.RecordFormat, context) }));
};
var serializeAws_json1_1StartApplicationRequest = function (input, context) {
    return __assign(__assign({}, (input.ApplicationName !== undefined &&
        input.ApplicationName !== null && { ApplicationName: input.ApplicationName })), (input.InputConfigurations !== undefined &&
        input.InputConfigurations !== null && {
        InputConfigurations: serializeAws_json1_1InputConfigurations(input.InputConfigurations, context),
    }));
};
var serializeAws_json1_1StopApplicationRequest = function (input, context) {
    return __assign({}, (input.ApplicationName !== undefined &&
        input.ApplicationName !== null && { ApplicationName: input.ApplicationName }));
};
var serializeAws_json1_1Tag = function (input, context) {
    return __assign(__assign({}, (input.Key !== undefined && input.Key !== null && { Key: input.Key })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_json1_1TagKeys = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1TagResourceRequest = function (input, context) {
    return __assign(__assign({}, (input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }));
};
var serializeAws_json1_1Tags = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Tag(entry, context);
    });
};
var serializeAws_json1_1UntagResourceRequest = function (input, context) {
    return __assign(__assign({}, (input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN })), (input.TagKeys !== undefined &&
        input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeys(input.TagKeys, context) }));
};
var serializeAws_json1_1UpdateApplicationRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.ApplicationName !== undefined &&
        input.ApplicationName !== null && { ApplicationName: input.ApplicationName })), (input.ApplicationUpdate !== undefined &&
        input.ApplicationUpdate !== null && {
        ApplicationUpdate: serializeAws_json1_1ApplicationUpdate(input.ApplicationUpdate, context),
    })), (input.CurrentApplicationVersionId !== undefined &&
        input.CurrentApplicationVersionId !== null && { CurrentApplicationVersionId: input.CurrentApplicationVersionId }));
};
var deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1AddApplicationInputProcessingConfigurationResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1AddApplicationInputResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1AddApplicationOutputResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1AddApplicationReferenceDataSourceResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1ApplicationDetail = function (output, context) {
    return {
        ApplicationARN: output.ApplicationARN !== undefined && output.ApplicationARN !== null ? output.ApplicationARN : undefined,
        ApplicationCode: output.ApplicationCode !== undefined && output.ApplicationCode !== null ? output.ApplicationCode : undefined,
        ApplicationDescription: output.ApplicationDescription !== undefined && output.ApplicationDescription !== null
            ? output.ApplicationDescription
            : undefined,
        ApplicationName: output.ApplicationName !== undefined && output.ApplicationName !== null ? output.ApplicationName : undefined,
        ApplicationStatus: output.ApplicationStatus !== undefined && output.ApplicationStatus !== null
            ? output.ApplicationStatus
            : undefined,
        ApplicationVersionId: output.ApplicationVersionId !== undefined && output.ApplicationVersionId !== null
            ? output.ApplicationVersionId
            : undefined,
        CloudWatchLoggingOptionDescriptions: output.CloudWatchLoggingOptionDescriptions !== undefined && output.CloudWatchLoggingOptionDescriptions !== null
            ? deserializeAws_json1_1CloudWatchLoggingOptionDescriptions(output.CloudWatchLoggingOptionDescriptions, context)
            : undefined,
        CreateTimestamp: output.CreateTimestamp !== undefined && output.CreateTimestamp !== null
            ? new Date(Math.round(output.CreateTimestamp * 1000))
            : undefined,
        InputDescriptions: output.InputDescriptions !== undefined && output.InputDescriptions !== null
            ? deserializeAws_json1_1InputDescriptions(output.InputDescriptions, context)
            : undefined,
        LastUpdateTimestamp: output.LastUpdateTimestamp !== undefined && output.LastUpdateTimestamp !== null
            ? new Date(Math.round(output.LastUpdateTimestamp * 1000))
            : undefined,
        OutputDescriptions: output.OutputDescriptions !== undefined && output.OutputDescriptions !== null
            ? deserializeAws_json1_1OutputDescriptions(output.OutputDescriptions, context)
            : undefined,
        ReferenceDataSourceDescriptions: output.ReferenceDataSourceDescriptions !== undefined && output.ReferenceDataSourceDescriptions !== null
            ? deserializeAws_json1_1ReferenceDataSourceDescriptions(output.ReferenceDataSourceDescriptions, context)
            : undefined,
    };
};
var deserializeAws_json1_1ApplicationSummaries = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ApplicationSummary(entry, context);
    });
};
var deserializeAws_json1_1ApplicationSummary = function (output, context) {
    return {
        ApplicationARN: output.ApplicationARN !== undefined && output.ApplicationARN !== null ? output.ApplicationARN : undefined,
        ApplicationName: output.ApplicationName !== undefined && output.ApplicationName !== null ? output.ApplicationName : undefined,
        ApplicationStatus: output.ApplicationStatus !== undefined && output.ApplicationStatus !== null
            ? output.ApplicationStatus
            : undefined,
    };
};
var deserializeAws_json1_1CloudWatchLoggingOptionDescription = function (output, context) {
    return {
        CloudWatchLoggingOptionId: output.CloudWatchLoggingOptionId !== undefined && output.CloudWatchLoggingOptionId !== null
            ? output.CloudWatchLoggingOptionId
            : undefined,
        LogStreamARN: output.LogStreamARN !== undefined && output.LogStreamARN !== null ? output.LogStreamARN : undefined,
        RoleARN: output.RoleARN !== undefined && output.RoleARN !== null ? output.RoleARN : undefined,
    };
};
var deserializeAws_json1_1CloudWatchLoggingOptionDescriptions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CloudWatchLoggingOptionDescription(entry, context);
    });
};
var deserializeAws_json1_1CodeValidationException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ConcurrentModificationException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1CreateApplicationResponse = function (output, context) {
    return {
        ApplicationSummary: output.ApplicationSummary !== undefined && output.ApplicationSummary !== null
            ? deserializeAws_json1_1ApplicationSummary(output.ApplicationSummary, context)
            : undefined,
    };
};
var deserializeAws_json1_1CSVMappingParameters = function (output, context) {
    return {
        RecordColumnDelimiter: output.RecordColumnDelimiter !== undefined && output.RecordColumnDelimiter !== null
            ? output.RecordColumnDelimiter
            : undefined,
        RecordRowDelimiter: output.RecordRowDelimiter !== undefined && output.RecordRowDelimiter !== null
            ? output.RecordRowDelimiter
            : undefined,
    };
};
var deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1DeleteApplicationOutputResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1DeleteApplicationReferenceDataSourceResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1DeleteApplicationResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1DescribeApplicationResponse = function (output, context) {
    return {
        ApplicationDetail: output.ApplicationDetail !== undefined && output.ApplicationDetail !== null
            ? deserializeAws_json1_1ApplicationDetail(output.ApplicationDetail, context)
            : undefined,
    };
};
var deserializeAws_json1_1DestinationSchema = function (output, context) {
    return {
        RecordFormatType: output.RecordFormatType !== undefined && output.RecordFormatType !== null ? output.RecordFormatType : undefined,
    };
};
var deserializeAws_json1_1DiscoverInputSchemaResponse = function (output, context) {
    return {
        InputSchema: output.InputSchema !== undefined && output.InputSchema !== null
            ? deserializeAws_json1_1SourceSchema(output.InputSchema, context)
            : undefined,
        ParsedInputRecords: output.ParsedInputRecords !== undefined && output.ParsedInputRecords !== null
            ? deserializeAws_json1_1ParsedInputRecords(output.ParsedInputRecords, context)
            : undefined,
        ProcessedInputRecords: output.ProcessedInputRecords !== undefined && output.ProcessedInputRecords !== null
            ? deserializeAws_json1_1ProcessedInputRecords(output.ProcessedInputRecords, context)
            : undefined,
        RawInputRecords: output.RawInputRecords !== undefined && output.RawInputRecords !== null
            ? deserializeAws_json1_1RawInputRecords(output.RawInputRecords, context)
            : undefined,
    };
};
var deserializeAws_json1_1InAppStreamNames = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1InputDescription = function (output, context) {
    return {
        InAppStreamNames: output.InAppStreamNames !== undefined && output.InAppStreamNames !== null
            ? deserializeAws_json1_1InAppStreamNames(output.InAppStreamNames, context)
            : undefined,
        InputId: output.InputId !== undefined && output.InputId !== null ? output.InputId : undefined,
        InputParallelism: output.InputParallelism !== undefined && output.InputParallelism !== null
            ? deserializeAws_json1_1InputParallelism(output.InputParallelism, context)
            : undefined,
        InputProcessingConfigurationDescription: output.InputProcessingConfigurationDescription !== undefined &&
            output.InputProcessingConfigurationDescription !== null
            ? deserializeAws_json1_1InputProcessingConfigurationDescription(output.InputProcessingConfigurationDescription, context)
            : undefined,
        InputSchema: output.InputSchema !== undefined && output.InputSchema !== null
            ? deserializeAws_json1_1SourceSchema(output.InputSchema, context)
            : undefined,
        InputStartingPositionConfiguration: output.InputStartingPositionConfiguration !== undefined && output.InputStartingPositionConfiguration !== null
            ? deserializeAws_json1_1InputStartingPositionConfiguration(output.InputStartingPositionConfiguration, context)
            : undefined,
        KinesisFirehoseInputDescription: output.KinesisFirehoseInputDescription !== undefined && output.KinesisFirehoseInputDescription !== null
            ? deserializeAws_json1_1KinesisFirehoseInputDescription(output.KinesisFirehoseInputDescription, context)
            : undefined,
        KinesisStreamsInputDescription: output.KinesisStreamsInputDescription !== undefined && output.KinesisStreamsInputDescription !== null
            ? deserializeAws_json1_1KinesisStreamsInputDescription(output.KinesisStreamsInputDescription, context)
            : undefined,
        NamePrefix: output.NamePrefix !== undefined && output.NamePrefix !== null ? output.NamePrefix : undefined,
    };
};
var deserializeAws_json1_1InputDescriptions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1InputDescription(entry, context);
    });
};
var deserializeAws_json1_1InputLambdaProcessorDescription = function (output, context) {
    return {
        ResourceARN: output.ResourceARN !== undefined && output.ResourceARN !== null ? output.ResourceARN : undefined,
        RoleARN: output.RoleARN !== undefined && output.RoleARN !== null ? output.RoleARN : undefined,
    };
};
var deserializeAws_json1_1InputParallelism = function (output, context) {
    return {
        Count: output.Count !== undefined && output.Count !== null ? output.Count : undefined,
    };
};
var deserializeAws_json1_1InputProcessingConfigurationDescription = function (output, context) {
    return {
        InputLambdaProcessorDescription: output.InputLambdaProcessorDescription !== undefined && output.InputLambdaProcessorDescription !== null
            ? deserializeAws_json1_1InputLambdaProcessorDescription(output.InputLambdaProcessorDescription, context)
            : undefined,
    };
};
var deserializeAws_json1_1InputStartingPositionConfiguration = function (output, context) {
    return {
        InputStartingPosition: output.InputStartingPosition !== undefined && output.InputStartingPosition !== null
            ? output.InputStartingPosition
            : undefined,
    };
};
var deserializeAws_json1_1InvalidApplicationConfigurationException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidArgumentException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1JSONMappingParameters = function (output, context) {
    return {
        RecordRowPath: output.RecordRowPath !== undefined && output.RecordRowPath !== null ? output.RecordRowPath : undefined,
    };
};
var deserializeAws_json1_1KinesisFirehoseInputDescription = function (output, context) {
    return {
        ResourceARN: output.ResourceARN !== undefined && output.ResourceARN !== null ? output.ResourceARN : undefined,
        RoleARN: output.RoleARN !== undefined && output.RoleARN !== null ? output.RoleARN : undefined,
    };
};
var deserializeAws_json1_1KinesisFirehoseOutputDescription = function (output, context) {
    return {
        ResourceARN: output.ResourceARN !== undefined && output.ResourceARN !== null ? output.ResourceARN : undefined,
        RoleARN: output.RoleARN !== undefined && output.RoleARN !== null ? output.RoleARN : undefined,
    };
};
var deserializeAws_json1_1KinesisStreamsInputDescription = function (output, context) {
    return {
        ResourceARN: output.ResourceARN !== undefined && output.ResourceARN !== null ? output.ResourceARN : undefined,
        RoleARN: output.RoleARN !== undefined && output.RoleARN !== null ? output.RoleARN : undefined,
    };
};
var deserializeAws_json1_1KinesisStreamsOutputDescription = function (output, context) {
    return {
        ResourceARN: output.ResourceARN !== undefined && output.ResourceARN !== null ? output.ResourceARN : undefined,
        RoleARN: output.RoleARN !== undefined && output.RoleARN !== null ? output.RoleARN : undefined,
    };
};
var deserializeAws_json1_1LambdaOutputDescription = function (output, context) {
    return {
        ResourceARN: output.ResourceARN !== undefined && output.ResourceARN !== null ? output.ResourceARN : undefined,
        RoleARN: output.RoleARN !== undefined && output.RoleARN !== null ? output.RoleARN : undefined,
    };
};
var deserializeAws_json1_1LimitExceededException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ListApplicationsResponse = function (output, context) {
    return {
        ApplicationSummaries: output.ApplicationSummaries !== undefined && output.ApplicationSummaries !== null
            ? deserializeAws_json1_1ApplicationSummaries(output.ApplicationSummaries, context)
            : undefined,
        HasMoreApplications: output.HasMoreApplications !== undefined && output.HasMoreApplications !== null
            ? output.HasMoreApplications
            : undefined,
    };
};
var deserializeAws_json1_1ListTagsForResourceResponse = function (output, context) {
    return {
        Tags: output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    };
};
var deserializeAws_json1_1MappingParameters = function (output, context) {
    return {
        CSVMappingParameters: output.CSVMappingParameters !== undefined && output.CSVMappingParameters !== null
            ? deserializeAws_json1_1CSVMappingParameters(output.CSVMappingParameters, context)
            : undefined,
        JSONMappingParameters: output.JSONMappingParameters !== undefined && output.JSONMappingParameters !== null
            ? deserializeAws_json1_1JSONMappingParameters(output.JSONMappingParameters, context)
            : undefined,
    };
};
var deserializeAws_json1_1OutputDescription = function (output, context) {
    return {
        DestinationSchema: output.DestinationSchema !== undefined && output.DestinationSchema !== null
            ? deserializeAws_json1_1DestinationSchema(output.DestinationSchema, context)
            : undefined,
        KinesisFirehoseOutputDescription: output.KinesisFirehoseOutputDescription !== undefined && output.KinesisFirehoseOutputDescription !== null
            ? deserializeAws_json1_1KinesisFirehoseOutputDescription(output.KinesisFirehoseOutputDescription, context)
            : undefined,
        KinesisStreamsOutputDescription: output.KinesisStreamsOutputDescription !== undefined && output.KinesisStreamsOutputDescription !== null
            ? deserializeAws_json1_1KinesisStreamsOutputDescription(output.KinesisStreamsOutputDescription, context)
            : undefined,
        LambdaOutputDescription: output.LambdaOutputDescription !== undefined && output.LambdaOutputDescription !== null
            ? deserializeAws_json1_1LambdaOutputDescription(output.LambdaOutputDescription, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        OutputId: output.OutputId !== undefined && output.OutputId !== null ? output.OutputId : undefined,
    };
};
var deserializeAws_json1_1OutputDescriptions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1OutputDescription(entry, context);
    });
};
var deserializeAws_json1_1ParsedInputRecord = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1ParsedInputRecords = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ParsedInputRecord(entry, context);
    });
};
var deserializeAws_json1_1ProcessedInputRecords = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1RawInputRecords = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1RecordColumn = function (output, context) {
    return {
        Mapping: output.Mapping !== undefined && output.Mapping !== null ? output.Mapping : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        SqlType: output.SqlType !== undefined && output.SqlType !== null ? output.SqlType : undefined,
    };
};
var deserializeAws_json1_1RecordColumns = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RecordColumn(entry, context);
    });
};
var deserializeAws_json1_1RecordFormat = function (output, context) {
    return {
        MappingParameters: output.MappingParameters !== undefined && output.MappingParameters !== null
            ? deserializeAws_json1_1MappingParameters(output.MappingParameters, context)
            : undefined,
        RecordFormatType: output.RecordFormatType !== undefined && output.RecordFormatType !== null ? output.RecordFormatType : undefined,
    };
};
var deserializeAws_json1_1ReferenceDataSourceDescription = function (output, context) {
    return {
        ReferenceId: output.ReferenceId !== undefined && output.ReferenceId !== null ? output.ReferenceId : undefined,
        ReferenceSchema: output.ReferenceSchema !== undefined && output.ReferenceSchema !== null
            ? deserializeAws_json1_1SourceSchema(output.ReferenceSchema, context)
            : undefined,
        S3ReferenceDataSourceDescription: output.S3ReferenceDataSourceDescription !== undefined && output.S3ReferenceDataSourceDescription !== null
            ? deserializeAws_json1_1S3ReferenceDataSourceDescription(output.S3ReferenceDataSourceDescription, context)
            : undefined,
        TableName: output.TableName !== undefined && output.TableName !== null ? output.TableName : undefined,
    };
};
var deserializeAws_json1_1ReferenceDataSourceDescriptions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ReferenceDataSourceDescription(entry, context);
    });
};
var deserializeAws_json1_1ResourceInUseException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ResourceNotFoundException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ResourceProvisionedThroughputExceededException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1S3ReferenceDataSourceDescription = function (output, context) {
    return {
        BucketARN: output.BucketARN !== undefined && output.BucketARN !== null ? output.BucketARN : undefined,
        FileKey: output.FileKey !== undefined && output.FileKey !== null ? output.FileKey : undefined,
        ReferenceRoleARN: output.ReferenceRoleARN !== undefined && output.ReferenceRoleARN !== null ? output.ReferenceRoleARN : undefined,
    };
};
var deserializeAws_json1_1ServiceUnavailableException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1SourceSchema = function (output, context) {
    return {
        RecordColumns: output.RecordColumns !== undefined && output.RecordColumns !== null
            ? deserializeAws_json1_1RecordColumns(output.RecordColumns, context)
            : undefined,
        RecordEncoding: output.RecordEncoding !== undefined && output.RecordEncoding !== null ? output.RecordEncoding : undefined,
        RecordFormat: output.RecordFormat !== undefined && output.RecordFormat !== null
            ? deserializeAws_json1_1RecordFormat(output.RecordFormat, context)
            : undefined,
    };
};
var deserializeAws_json1_1StartApplicationResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1StopApplicationResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1Tag = function (output, context) {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_json1_1TagResourceResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1Tags = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Tag(entry, context);
    });
};
var deserializeAws_json1_1TooManyTagsException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1UnableToDetectSchemaException = function (output, context) {
    return {
        ProcessedInputRecords: output.ProcessedInputRecords !== undefined && output.ProcessedInputRecords !== null
            ? deserializeAws_json1_1ProcessedInputRecords(output.ProcessedInputRecords, context)
            : undefined,
        RawInputRecords: output.RawInputRecords !== undefined && output.RawInputRecords !== null
            ? deserializeAws_json1_1RawInputRecords(output.RawInputRecords, context)
            : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1UnsupportedOperationException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1UntagResourceResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1UpdateApplicationResponse = function (output, context) {
    return {};
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