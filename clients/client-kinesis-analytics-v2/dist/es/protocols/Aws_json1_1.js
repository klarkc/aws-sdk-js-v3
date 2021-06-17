import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
export var serializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption",
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
            "x-amz-target": "KinesisAnalytics_20180523.AddApplicationInput",
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
            "x-amz-target": "KinesisAnalytics_20180523.AddApplicationInputProcessingConfiguration",
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
            "x-amz-target": "KinesisAnalytics_20180523.AddApplicationOutput",
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
            "x-amz-target": "KinesisAnalytics_20180523.AddApplicationReferenceDataSource",
        };
        body = JSON.stringify(serializeAws_json1_1AddApplicationReferenceDataSourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AddApplicationVpcConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "KinesisAnalytics_20180523.AddApplicationVpcConfiguration",
        };
        body = JSON.stringify(serializeAws_json1_1AddApplicationVpcConfigurationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateApplicationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "KinesisAnalytics_20180523.CreateApplication",
        };
        body = JSON.stringify(serializeAws_json1_1CreateApplicationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateApplicationPresignedUrlCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "KinesisAnalytics_20180523.CreateApplicationPresignedUrl",
        };
        body = JSON.stringify(serializeAws_json1_1CreateApplicationPresignedUrlRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateApplicationSnapshotCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "KinesisAnalytics_20180523.CreateApplicationSnapshot",
        };
        body = JSON.stringify(serializeAws_json1_1CreateApplicationSnapshotRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteApplicationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "KinesisAnalytics_20180523.DeleteApplication",
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
            "x-amz-target": "KinesisAnalytics_20180523.DeleteApplicationCloudWatchLoggingOption",
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
            "x-amz-target": "KinesisAnalytics_20180523.DeleteApplicationInputProcessingConfiguration",
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
            "x-amz-target": "KinesisAnalytics_20180523.DeleteApplicationOutput",
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
            "x-amz-target": "KinesisAnalytics_20180523.DeleteApplicationReferenceDataSource",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteApplicationReferenceDataSourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteApplicationSnapshotCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "KinesisAnalytics_20180523.DeleteApplicationSnapshot",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteApplicationSnapshotRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteApplicationVpcConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "KinesisAnalytics_20180523.DeleteApplicationVpcConfiguration",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteApplicationVpcConfigurationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeApplicationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "KinesisAnalytics_20180523.DescribeApplication",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeApplicationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeApplicationSnapshotCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "KinesisAnalytics_20180523.DescribeApplicationSnapshot",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeApplicationSnapshotRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeApplicationVersionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "KinesisAnalytics_20180523.DescribeApplicationVersion",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeApplicationVersionRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DiscoverInputSchemaCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "KinesisAnalytics_20180523.DiscoverInputSchema",
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
            "x-amz-target": "KinesisAnalytics_20180523.ListApplications",
        };
        body = JSON.stringify(serializeAws_json1_1ListApplicationsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListApplicationSnapshotsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "KinesisAnalytics_20180523.ListApplicationSnapshots",
        };
        body = JSON.stringify(serializeAws_json1_1ListApplicationSnapshotsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListApplicationVersionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "KinesisAnalytics_20180523.ListApplicationVersions",
        };
        body = JSON.stringify(serializeAws_json1_1ListApplicationVersionsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListTagsForResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "KinesisAnalytics_20180523.ListTagsForResource",
        };
        body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1RollbackApplicationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "KinesisAnalytics_20180523.RollbackApplication",
        };
        body = JSON.stringify(serializeAws_json1_1RollbackApplicationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1StartApplicationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "KinesisAnalytics_20180523.StartApplication",
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
            "x-amz-target": "KinesisAnalytics_20180523.StopApplication",
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
            "x-amz-target": "KinesisAnalytics_20180523.TagResource",
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
            "x-amz-target": "KinesisAnalytics_20180523.UntagResource",
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
            "x-amz-target": "KinesisAnalytics_20180523.UpdateApplication",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateApplicationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateApplicationMaintenanceConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "KinesisAnalytics_20180523.UpdateApplicationMaintenanceConfiguration",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateApplicationMaintenanceConfigurationRequest(input, context));
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
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidApplicationConfigurationException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidApplicationConfigurationException": return [3 /*break*/, 4];
                    case "InvalidArgumentException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException": return [3 /*break*/, 6];
                    case "InvalidRequestException": return [3 /*break*/, 8];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException": return [3 /*break*/, 8];
                    case "ResourceInUseException": return [3 /*break*/, 10];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
                    case "com.amazonaws.kinesisanalyticsv2#CodeValidationException": return [3 /*break*/, 2];
                    case "ConcurrentModificationException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException": return [3 /*break*/, 4];
                    case "InvalidArgumentException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException": return [3 /*break*/, 6];
                    case "InvalidRequestException": return [3 /*break*/, 8];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException": return [3 /*break*/, 8];
                    case "ResourceInUseException": return [3 /*break*/, 10];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException": return [3 /*break*/, 12];
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
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
                    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidArgumentException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException": return [3 /*break*/, 10];
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
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
                    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidArgumentException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException": return [3 /*break*/, 10];
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
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
                    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidArgumentException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException": return [3 /*break*/, 10];
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
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1AddApplicationVpcConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AddApplicationVpcConfigurationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AddApplicationVpcConfigurationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AddApplicationVpcConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidApplicationConfigurationException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidApplicationConfigurationException": return [3 /*break*/, 4];
                    case "InvalidArgumentException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException": return [3 /*break*/, 10];
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
                return [4 /*yield*/, deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "CodeValidationException": return [3 /*break*/, 2];
                    case "com.amazonaws.kinesisanalyticsv2#CodeValidationException": return [3 /*break*/, 2];
                    case "ConcurrentModificationException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException": return [3 /*break*/, 4];
                    case "InvalidArgumentException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException": return [3 /*break*/, 6];
                    case "InvalidRequestException": return [3 /*break*/, 8];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException": return [3 /*break*/, 8];
                    case "LimitExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.kinesisanalyticsv2#LimitExceededException": return [3 /*break*/, 10];
                    case "ResourceInUseException": return [3 /*break*/, 12];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException": return [3 /*break*/, 12];
                    case "TooManyTagsException": return [3 /*break*/, 14];
                    case "com.amazonaws.kinesisanalyticsv2#TooManyTagsException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CodeValidationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateApplicationPresignedUrlCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateApplicationPresignedUrlCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateApplicationPresignedUrlResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateApplicationPresignedUrlCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidArgumentException": return [3 /*break*/, 2];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException": return [3 /*break*/, 2];
                    case "ResourceInUseException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateApplicationSnapshotCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateApplicationSnapshotCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateApplicationSnapshotResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateApplicationSnapshotCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidApplicationConfigurationException": return [3 /*break*/, 2];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidApplicationConfigurationException": return [3 /*break*/, 2];
                    case "InvalidArgumentException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.kinesisanalyticsv2#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceInUseException": return [3 /*break*/, 10];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException": return [3 /*break*/, 12];
                    case "UnsupportedOperationException": return [3 /*break*/, 14];
                    case "com.amazonaws.kinesisanalyticsv2#UnsupportedOperationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
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
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidApplicationConfigurationException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidApplicationConfigurationException": return [3 /*break*/, 4];
                    case "InvalidArgumentException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException": return [3 /*break*/, 6];
                    case "InvalidRequestException": return [3 /*break*/, 8];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException": return [3 /*break*/, 8];
                    case "ResourceInUseException": return [3 /*break*/, 10];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidApplicationConfigurationException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidApplicationConfigurationException": return [3 /*break*/, 4];
                    case "InvalidArgumentException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException": return [3 /*break*/, 6];
                    case "InvalidRequestException": return [3 /*break*/, 8];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException": return [3 /*break*/, 8];
                    case "ResourceInUseException": return [3 /*break*/, 10];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
                    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidArgumentException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException": return [3 /*break*/, 10];
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
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
                    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidArgumentException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException": return [3 /*break*/, 10];
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
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
                    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidArgumentException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException": return [3 /*break*/, 10];
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
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteApplicationSnapshotCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteApplicationSnapshotCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteApplicationSnapshotResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteApplicationSnapshotCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidArgumentException": return [3 /*break*/, 2];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException": return [3 /*break*/, 4];
                    case "ResourceInUseException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "UnsupportedOperationException": return [3 /*break*/, 10];
                    case "com.amazonaws.kinesisanalyticsv2#UnsupportedOperationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteApplicationVpcConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteApplicationVpcConfigurationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteApplicationVpcConfigurationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteApplicationVpcConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidApplicationConfigurationException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidApplicationConfigurationException": return [3 /*break*/, 4];
                    case "InvalidArgumentException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException": return [3 /*break*/, 10];
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
                return [4 /*yield*/, deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
                    case "InvalidArgumentException": return [3 /*break*/, 2];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeApplicationSnapshotCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeApplicationSnapshotCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeApplicationSnapshotResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeApplicationSnapshotCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidArgumentException": return [3 /*break*/, 2];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "UnsupportedOperationException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalyticsv2#UnsupportedOperationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeApplicationVersionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeApplicationVersionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeApplicationVersionResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeApplicationVersionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidArgumentException": return [3 /*break*/, 2];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "UnsupportedOperationException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalyticsv2#UnsupportedOperationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)];
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
                    case "InvalidArgumentException": return [3 /*break*/, 2];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException": return [3 /*break*/, 4];
                    case "ResourceProvisionedThroughputExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceProvisionedThroughputExceededException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.kinesisanalyticsv2#ServiceUnavailableException": return [3 /*break*/, 8];
                    case "UnableToDetectSchemaException": return [3 /*break*/, 10];
                    case "com.amazonaws.kinesisanalyticsv2#UnableToDetectSchemaException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceProvisionedThroughputExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnableToDetectSchemaExceptionResponse(parsedOutput, context)];
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
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListApplicationSnapshotsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListApplicationSnapshotsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListApplicationSnapshotsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListApplicationSnapshotsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidArgumentException": return [3 /*break*/, 2];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException": return [3 /*break*/, 2];
                    case "UnsupportedOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalyticsv2#UnsupportedOperationException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListApplicationVersionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListApplicationVersionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListApplicationVersionsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListApplicationVersionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidArgumentException": return [3 /*break*/, 2];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "UnsupportedOperationException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalyticsv2#UnsupportedOperationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)];
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
                    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidArgumentException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException": return [3 /*break*/, 6];
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
export var deserializeAws_json1_1RollbackApplicationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1RollbackApplicationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1RollbackApplicationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1RollbackApplicationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidArgumentException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "UnsupportedOperationException": return [3 /*break*/, 12];
                    case "com.amazonaws.kinesisanalyticsv2#UnsupportedOperationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                    case "com.amazonaws.kinesisanalyticsv2#InvalidApplicationConfigurationException": return [3 /*break*/, 2];
                    case "InvalidArgumentException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException": return [3 /*break*/, 10];
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
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidApplicationConfigurationException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidApplicationConfigurationException": return [3 /*break*/, 4];
                    case "InvalidArgumentException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException": return [3 /*break*/, 6];
                    case "InvalidRequestException": return [3 /*break*/, 8];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException": return [3 /*break*/, 8];
                    case "ResourceInUseException": return [3 /*break*/, 10];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
                    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidArgumentException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException": return [3 /*break*/, 4];
                    case "ResourceInUseException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyTagsException": return [3 /*break*/, 10];
                    case "com.amazonaws.kinesisanalyticsv2#TooManyTagsException": return [3 /*break*/, 10];
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
                    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidArgumentException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException": return [3 /*break*/, 4];
                    case "ResourceInUseException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyTagsException": return [3 /*break*/, 10];
                    case "com.amazonaws.kinesisanalyticsv2#TooManyTagsException": return [3 /*break*/, 10];
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
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0:
                _a = [__assign({}, output)];
                _l = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_l.body = _m.sent(), _l)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "CodeValidationException": return [3 /*break*/, 2];
                    case "com.amazonaws.kinesisanalyticsv2#CodeValidationException": return [3 /*break*/, 2];
                    case "ConcurrentModificationException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException": return [3 /*break*/, 4];
                    case "InvalidApplicationConfigurationException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidApplicationConfigurationException": return [3 /*break*/, 6];
                    case "InvalidArgumentException": return [3 /*break*/, 8];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException": return [3 /*break*/, 8];
                    case "InvalidRequestException": return [3 /*break*/, 10];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException": return [3 /*break*/, 10];
                    case "LimitExceededException": return [3 /*break*/, 12];
                    case "com.amazonaws.kinesisanalyticsv2#LimitExceededException": return [3 /*break*/, 12];
                    case "ResourceInUseException": return [3 /*break*/, 14];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException": return [3 /*break*/, 14];
                    case "ResourceNotFoundException": return [3 /*break*/, 16];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CodeValidationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 18:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _m.label = 19;
            case 19:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateApplicationMaintenanceConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateApplicationMaintenanceConfigurationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateApplicationMaintenanceConfigurationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateApplicationMaintenanceConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidArgumentException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException": return [3 /*break*/, 4];
                    case "ResourceInUseException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "UnsupportedOperationException": return [3 /*break*/, 10];
                    case "com.amazonaws.kinesisanalyticsv2#UnsupportedOperationException": return [3 /*break*/, 10];
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
var deserializeAws_json1_1InvalidRequestExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidRequestException(body, context);
        contents = __assign({ name: "InvalidRequestException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
    return __assign(__assign(__assign(__assign({}, (input.ApplicationName !== undefined &&
        input.ApplicationName !== null && { ApplicationName: input.ApplicationName })), (input.CloudWatchLoggingOption !== undefined &&
        input.CloudWatchLoggingOption !== null && {
        CloudWatchLoggingOption: serializeAws_json1_1CloudWatchLoggingOption(input.CloudWatchLoggingOption, context),
    })), (input.ConditionalToken !== undefined &&
        input.ConditionalToken !== null && { ConditionalToken: input.ConditionalToken })), (input.CurrentApplicationVersionId !== undefined &&
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
var serializeAws_json1_1AddApplicationVpcConfigurationRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.ApplicationName !== undefined &&
        input.ApplicationName !== null && { ApplicationName: input.ApplicationName })), (input.ConditionalToken !== undefined &&
        input.ConditionalToken !== null && { ConditionalToken: input.ConditionalToken })), (input.CurrentApplicationVersionId !== undefined &&
        input.CurrentApplicationVersionId !== null && { CurrentApplicationVersionId: input.CurrentApplicationVersionId })), (input.VpcConfiguration !== undefined &&
        input.VpcConfiguration !== null && {
        VpcConfiguration: serializeAws_json1_1VpcConfiguration(input.VpcConfiguration, context),
    }));
};
var serializeAws_json1_1ApplicationCodeConfiguration = function (input, context) {
    return __assign(__assign({}, (input.CodeContent !== undefined &&
        input.CodeContent !== null && { CodeContent: serializeAws_json1_1CodeContent(input.CodeContent, context) })), (input.CodeContentType !== undefined &&
        input.CodeContentType !== null && { CodeContentType: input.CodeContentType }));
};
var serializeAws_json1_1ApplicationCodeConfigurationUpdate = function (input, context) {
    return __assign(__assign({}, (input.CodeContentTypeUpdate !== undefined &&
        input.CodeContentTypeUpdate !== null && { CodeContentTypeUpdate: input.CodeContentTypeUpdate })), (input.CodeContentUpdate !== undefined &&
        input.CodeContentUpdate !== null && {
        CodeContentUpdate: serializeAws_json1_1CodeContentUpdate(input.CodeContentUpdate, context),
    }));
};
var serializeAws_json1_1ApplicationConfiguration = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.ApplicationCodeConfiguration !== undefined &&
        input.ApplicationCodeConfiguration !== null && {
        ApplicationCodeConfiguration: serializeAws_json1_1ApplicationCodeConfiguration(input.ApplicationCodeConfiguration, context),
    })), (input.ApplicationSnapshotConfiguration !== undefined &&
        input.ApplicationSnapshotConfiguration !== null && {
        ApplicationSnapshotConfiguration: serializeAws_json1_1ApplicationSnapshotConfiguration(input.ApplicationSnapshotConfiguration, context),
    })), (input.EnvironmentProperties !== undefined &&
        input.EnvironmentProperties !== null && {
        EnvironmentProperties: serializeAws_json1_1EnvironmentProperties(input.EnvironmentProperties, context),
    })), (input.FlinkApplicationConfiguration !== undefined &&
        input.FlinkApplicationConfiguration !== null && {
        FlinkApplicationConfiguration: serializeAws_json1_1FlinkApplicationConfiguration(input.FlinkApplicationConfiguration, context),
    })), (input.SqlApplicationConfiguration !== undefined &&
        input.SqlApplicationConfiguration !== null && {
        SqlApplicationConfiguration: serializeAws_json1_1SqlApplicationConfiguration(input.SqlApplicationConfiguration, context),
    })), (input.VpcConfigurations !== undefined &&
        input.VpcConfigurations !== null && {
        VpcConfigurations: serializeAws_json1_1VpcConfigurations(input.VpcConfigurations, context),
    })), (input.ZeppelinApplicationConfiguration !== undefined &&
        input.ZeppelinApplicationConfiguration !== null && {
        ZeppelinApplicationConfiguration: serializeAws_json1_1ZeppelinApplicationConfiguration(input.ZeppelinApplicationConfiguration, context),
    }));
};
var serializeAws_json1_1ApplicationConfigurationUpdate = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.ApplicationCodeConfigurationUpdate !== undefined &&
        input.ApplicationCodeConfigurationUpdate !== null && {
        ApplicationCodeConfigurationUpdate: serializeAws_json1_1ApplicationCodeConfigurationUpdate(input.ApplicationCodeConfigurationUpdate, context),
    })), (input.ApplicationSnapshotConfigurationUpdate !== undefined &&
        input.ApplicationSnapshotConfigurationUpdate !== null && {
        ApplicationSnapshotConfigurationUpdate: serializeAws_json1_1ApplicationSnapshotConfigurationUpdate(input.ApplicationSnapshotConfigurationUpdate, context),
    })), (input.EnvironmentPropertyUpdates !== undefined &&
        input.EnvironmentPropertyUpdates !== null && {
        EnvironmentPropertyUpdates: serializeAws_json1_1EnvironmentPropertyUpdates(input.EnvironmentPropertyUpdates, context),
    })), (input.FlinkApplicationConfigurationUpdate !== undefined &&
        input.FlinkApplicationConfigurationUpdate !== null && {
        FlinkApplicationConfigurationUpdate: serializeAws_json1_1FlinkApplicationConfigurationUpdate(input.FlinkApplicationConfigurationUpdate, context),
    })), (input.SqlApplicationConfigurationUpdate !== undefined &&
        input.SqlApplicationConfigurationUpdate !== null && {
        SqlApplicationConfigurationUpdate: serializeAws_json1_1SqlApplicationConfigurationUpdate(input.SqlApplicationConfigurationUpdate, context),
    })), (input.VpcConfigurationUpdates !== undefined &&
        input.VpcConfigurationUpdates !== null && {
        VpcConfigurationUpdates: serializeAws_json1_1VpcConfigurationUpdates(input.VpcConfigurationUpdates, context),
    })), (input.ZeppelinApplicationConfigurationUpdate !== undefined &&
        input.ZeppelinApplicationConfigurationUpdate !== null && {
        ZeppelinApplicationConfigurationUpdate: serializeAws_json1_1ZeppelinApplicationConfigurationUpdate(input.ZeppelinApplicationConfigurationUpdate, context),
    }));
};
var serializeAws_json1_1ApplicationMaintenanceConfigurationUpdate = function (input, context) {
    return __assign({}, (input.ApplicationMaintenanceWindowStartTimeUpdate !== undefined &&
        input.ApplicationMaintenanceWindowStartTimeUpdate !== null && {
        ApplicationMaintenanceWindowStartTimeUpdate: input.ApplicationMaintenanceWindowStartTimeUpdate,
    }));
};
var serializeAws_json1_1ApplicationRestoreConfiguration = function (input, context) {
    return __assign(__assign({}, (input.ApplicationRestoreType !== undefined &&
        input.ApplicationRestoreType !== null && { ApplicationRestoreType: input.ApplicationRestoreType })), (input.SnapshotName !== undefined && input.SnapshotName !== null && { SnapshotName: input.SnapshotName }));
};
var serializeAws_json1_1ApplicationSnapshotConfiguration = function (input, context) {
    return __assign({}, (input.SnapshotsEnabled !== undefined &&
        input.SnapshotsEnabled !== null && { SnapshotsEnabled: input.SnapshotsEnabled }));
};
var serializeAws_json1_1ApplicationSnapshotConfigurationUpdate = function (input, context) {
    return __assign({}, (input.SnapshotsEnabledUpdate !== undefined &&
        input.SnapshotsEnabledUpdate !== null && { SnapshotsEnabledUpdate: input.SnapshotsEnabledUpdate }));
};
var serializeAws_json1_1CatalogConfiguration = function (input, context) {
    return __assign({}, (input.GlueDataCatalogConfiguration !== undefined &&
        input.GlueDataCatalogConfiguration !== null && {
        GlueDataCatalogConfiguration: serializeAws_json1_1GlueDataCatalogConfiguration(input.GlueDataCatalogConfiguration, context),
    }));
};
var serializeAws_json1_1CatalogConfigurationUpdate = function (input, context) {
    return __assign({}, (input.GlueDataCatalogConfigurationUpdate !== undefined &&
        input.GlueDataCatalogConfigurationUpdate !== null && {
        GlueDataCatalogConfigurationUpdate: serializeAws_json1_1GlueDataCatalogConfigurationUpdate(input.GlueDataCatalogConfigurationUpdate, context),
    }));
};
var serializeAws_json1_1CheckpointConfiguration = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.CheckpointInterval !== undefined &&
        input.CheckpointInterval !== null && { CheckpointInterval: input.CheckpointInterval })), (input.CheckpointingEnabled !== undefined &&
        input.CheckpointingEnabled !== null && { CheckpointingEnabled: input.CheckpointingEnabled })), (input.ConfigurationType !== undefined &&
        input.ConfigurationType !== null && { ConfigurationType: input.ConfigurationType })), (input.MinPauseBetweenCheckpoints !== undefined &&
        input.MinPauseBetweenCheckpoints !== null && { MinPauseBetweenCheckpoints: input.MinPauseBetweenCheckpoints }));
};
var serializeAws_json1_1CheckpointConfigurationUpdate = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.CheckpointIntervalUpdate !== undefined &&
        input.CheckpointIntervalUpdate !== null && { CheckpointIntervalUpdate: input.CheckpointIntervalUpdate })), (input.CheckpointingEnabledUpdate !== undefined &&
        input.CheckpointingEnabledUpdate !== null && { CheckpointingEnabledUpdate: input.CheckpointingEnabledUpdate })), (input.ConfigurationTypeUpdate !== undefined &&
        input.ConfigurationTypeUpdate !== null && { ConfigurationTypeUpdate: input.ConfigurationTypeUpdate })), (input.MinPauseBetweenCheckpointsUpdate !== undefined &&
        input.MinPauseBetweenCheckpointsUpdate !== null && {
        MinPauseBetweenCheckpointsUpdate: input.MinPauseBetweenCheckpointsUpdate,
    }));
};
var serializeAws_json1_1CloudWatchLoggingOption = function (input, context) {
    return __assign({}, (input.LogStreamARN !== undefined && input.LogStreamARN !== null && { LogStreamARN: input.LogStreamARN }));
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
    return __assign(__assign({}, (input.CloudWatchLoggingOptionId !== undefined &&
        input.CloudWatchLoggingOptionId !== null && { CloudWatchLoggingOptionId: input.CloudWatchLoggingOptionId })), (input.LogStreamARNUpdate !== undefined &&
        input.LogStreamARNUpdate !== null && { LogStreamARNUpdate: input.LogStreamARNUpdate }));
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
var serializeAws_json1_1CodeContent = function (input, context) {
    return __assign(__assign(__assign({}, (input.S3ContentLocation !== undefined &&
        input.S3ContentLocation !== null && {
        S3ContentLocation: serializeAws_json1_1S3ContentLocation(input.S3ContentLocation, context),
    })), (input.TextContent !== undefined && input.TextContent !== null && { TextContent: input.TextContent })), (input.ZipFileContent !== undefined &&
        input.ZipFileContent !== null && { ZipFileContent: context.base64Encoder(input.ZipFileContent) }));
};
var serializeAws_json1_1CodeContentUpdate = function (input, context) {
    return __assign(__assign(__assign({}, (input.S3ContentLocationUpdate !== undefined &&
        input.S3ContentLocationUpdate !== null && {
        S3ContentLocationUpdate: serializeAws_json1_1S3ContentLocationUpdate(input.S3ContentLocationUpdate, context),
    })), (input.TextContentUpdate !== undefined &&
        input.TextContentUpdate !== null && { TextContentUpdate: input.TextContentUpdate })), (input.ZipFileContentUpdate !== undefined &&
        input.ZipFileContentUpdate !== null && {
        ZipFileContentUpdate: context.base64Encoder(input.ZipFileContentUpdate),
    }));
};
var serializeAws_json1_1CreateApplicationPresignedUrlRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.ApplicationName !== undefined &&
        input.ApplicationName !== null && { ApplicationName: input.ApplicationName })), (input.SessionExpirationDurationInSeconds !== undefined &&
        input.SessionExpirationDurationInSeconds !== null && {
        SessionExpirationDurationInSeconds: input.SessionExpirationDurationInSeconds,
    })), (input.UrlType !== undefined && input.UrlType !== null && { UrlType: input.UrlType }));
};
var serializeAws_json1_1CreateApplicationRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.ApplicationConfiguration !== undefined &&
        input.ApplicationConfiguration !== null && {
        ApplicationConfiguration: serializeAws_json1_1ApplicationConfiguration(input.ApplicationConfiguration, context),
    })), (input.ApplicationDescription !== undefined &&
        input.ApplicationDescription !== null && { ApplicationDescription: input.ApplicationDescription })), (input.ApplicationMode !== undefined &&
        input.ApplicationMode !== null && { ApplicationMode: input.ApplicationMode })), (input.ApplicationName !== undefined &&
        input.ApplicationName !== null && { ApplicationName: input.ApplicationName })), (input.CloudWatchLoggingOptions !== undefined &&
        input.CloudWatchLoggingOptions !== null && {
        CloudWatchLoggingOptions: serializeAws_json1_1CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
    })), (input.RuntimeEnvironment !== undefined &&
        input.RuntimeEnvironment !== null && { RuntimeEnvironment: input.RuntimeEnvironment })), (input.ServiceExecutionRole !== undefined &&
        input.ServiceExecutionRole !== null && { ServiceExecutionRole: input.ServiceExecutionRole })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }));
};
var serializeAws_json1_1CreateApplicationSnapshotRequest = function (input, context) {
    return __assign(__assign({}, (input.ApplicationName !== undefined &&
        input.ApplicationName !== null && { ApplicationName: input.ApplicationName })), (input.SnapshotName !== undefined && input.SnapshotName !== null && { SnapshotName: input.SnapshotName }));
};
var serializeAws_json1_1CSVMappingParameters = function (input, context) {
    return __assign(__assign({}, (input.RecordColumnDelimiter !== undefined &&
        input.RecordColumnDelimiter !== null && { RecordColumnDelimiter: input.RecordColumnDelimiter })), (input.RecordRowDelimiter !== undefined &&
        input.RecordRowDelimiter !== null && { RecordRowDelimiter: input.RecordRowDelimiter }));
};
var serializeAws_json1_1CustomArtifactConfiguration = function (input, context) {
    return __assign(__assign(__assign({}, (input.ArtifactType !== undefined && input.ArtifactType !== null && { ArtifactType: input.ArtifactType })), (input.MavenReference !== undefined &&
        input.MavenReference !== null && {
        MavenReference: serializeAws_json1_1MavenReference(input.MavenReference, context),
    })), (input.S3ContentLocation !== undefined &&
        input.S3ContentLocation !== null && {
        S3ContentLocation: serializeAws_json1_1S3ContentLocation(input.S3ContentLocation, context),
    }));
};
var serializeAws_json1_1CustomArtifactsConfigurationList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1CustomArtifactConfiguration(entry, context);
    });
};
var serializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.ApplicationName !== undefined &&
        input.ApplicationName !== null && { ApplicationName: input.ApplicationName })), (input.CloudWatchLoggingOptionId !== undefined &&
        input.CloudWatchLoggingOptionId !== null && { CloudWatchLoggingOptionId: input.CloudWatchLoggingOptionId })), (input.ConditionalToken !== undefined &&
        input.ConditionalToken !== null && { ConditionalToken: input.ConditionalToken })), (input.CurrentApplicationVersionId !== undefined &&
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
var serializeAws_json1_1DeleteApplicationSnapshotRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.ApplicationName !== undefined &&
        input.ApplicationName !== null && { ApplicationName: input.ApplicationName })), (input.SnapshotCreationTimestamp !== undefined &&
        input.SnapshotCreationTimestamp !== null && {
        SnapshotCreationTimestamp: Math.round(input.SnapshotCreationTimestamp.getTime() / 1000),
    })), (input.SnapshotName !== undefined && input.SnapshotName !== null && { SnapshotName: input.SnapshotName }));
};
var serializeAws_json1_1DeleteApplicationVpcConfigurationRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.ApplicationName !== undefined &&
        input.ApplicationName !== null && { ApplicationName: input.ApplicationName })), (input.ConditionalToken !== undefined &&
        input.ConditionalToken !== null && { ConditionalToken: input.ConditionalToken })), (input.CurrentApplicationVersionId !== undefined &&
        input.CurrentApplicationVersionId !== null && { CurrentApplicationVersionId: input.CurrentApplicationVersionId })), (input.VpcConfigurationId !== undefined &&
        input.VpcConfigurationId !== null && { VpcConfigurationId: input.VpcConfigurationId }));
};
var serializeAws_json1_1DeployAsApplicationConfiguration = function (input, context) {
    return __assign({}, (input.S3ContentLocation !== undefined &&
        input.S3ContentLocation !== null && {
        S3ContentLocation: serializeAws_json1_1S3ContentBaseLocation(input.S3ContentLocation, context),
    }));
};
var serializeAws_json1_1DeployAsApplicationConfigurationUpdate = function (input, context) {
    return __assign({}, (input.S3ContentLocationUpdate !== undefined &&
        input.S3ContentLocationUpdate !== null && {
        S3ContentLocationUpdate: serializeAws_json1_1S3ContentBaseLocationUpdate(input.S3ContentLocationUpdate, context),
    }));
};
var serializeAws_json1_1DescribeApplicationRequest = function (input, context) {
    return __assign(__assign({}, (input.ApplicationName !== undefined &&
        input.ApplicationName !== null && { ApplicationName: input.ApplicationName })), (input.IncludeAdditionalDetails !== undefined &&
        input.IncludeAdditionalDetails !== null && { IncludeAdditionalDetails: input.IncludeAdditionalDetails }));
};
var serializeAws_json1_1DescribeApplicationSnapshotRequest = function (input, context) {
    return __assign(__assign({}, (input.ApplicationName !== undefined &&
        input.ApplicationName !== null && { ApplicationName: input.ApplicationName })), (input.SnapshotName !== undefined && input.SnapshotName !== null && { SnapshotName: input.SnapshotName }));
};
var serializeAws_json1_1DescribeApplicationVersionRequest = function (input, context) {
    return __assign(__assign({}, (input.ApplicationName !== undefined &&
        input.ApplicationName !== null && { ApplicationName: input.ApplicationName })), (input.ApplicationVersionId !== undefined &&
        input.ApplicationVersionId !== null && { ApplicationVersionId: input.ApplicationVersionId }));
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
    })), (input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN })), (input.S3Configuration !== undefined &&
        input.S3Configuration !== null && {
        S3Configuration: serializeAws_json1_1S3Configuration(input.S3Configuration, context),
    })), (input.ServiceExecutionRole !== undefined &&
        input.ServiceExecutionRole !== null && { ServiceExecutionRole: input.ServiceExecutionRole }));
};
var serializeAws_json1_1EnvironmentProperties = function (input, context) {
    return __assign({}, (input.PropertyGroups !== undefined &&
        input.PropertyGroups !== null && {
        PropertyGroups: serializeAws_json1_1PropertyGroups(input.PropertyGroups, context),
    }));
};
var serializeAws_json1_1EnvironmentPropertyUpdates = function (input, context) {
    return __assign({}, (input.PropertyGroups !== undefined &&
        input.PropertyGroups !== null && {
        PropertyGroups: serializeAws_json1_1PropertyGroups(input.PropertyGroups, context),
    }));
};
var serializeAws_json1_1FlinkApplicationConfiguration = function (input, context) {
    return __assign(__assign(__assign({}, (input.CheckpointConfiguration !== undefined &&
        input.CheckpointConfiguration !== null && {
        CheckpointConfiguration: serializeAws_json1_1CheckpointConfiguration(input.CheckpointConfiguration, context),
    })), (input.MonitoringConfiguration !== undefined &&
        input.MonitoringConfiguration !== null && {
        MonitoringConfiguration: serializeAws_json1_1MonitoringConfiguration(input.MonitoringConfiguration, context),
    })), (input.ParallelismConfiguration !== undefined &&
        input.ParallelismConfiguration !== null && {
        ParallelismConfiguration: serializeAws_json1_1ParallelismConfiguration(input.ParallelismConfiguration, context),
    }));
};
var serializeAws_json1_1FlinkApplicationConfigurationUpdate = function (input, context) {
    return __assign(__assign(__assign({}, (input.CheckpointConfigurationUpdate !== undefined &&
        input.CheckpointConfigurationUpdate !== null && {
        CheckpointConfigurationUpdate: serializeAws_json1_1CheckpointConfigurationUpdate(input.CheckpointConfigurationUpdate, context),
    })), (input.MonitoringConfigurationUpdate !== undefined &&
        input.MonitoringConfigurationUpdate !== null && {
        MonitoringConfigurationUpdate: serializeAws_json1_1MonitoringConfigurationUpdate(input.MonitoringConfigurationUpdate, context),
    })), (input.ParallelismConfigurationUpdate !== undefined &&
        input.ParallelismConfigurationUpdate !== null && {
        ParallelismConfigurationUpdate: serializeAws_json1_1ParallelismConfigurationUpdate(input.ParallelismConfigurationUpdate, context),
    }));
};
var serializeAws_json1_1FlinkRunConfiguration = function (input, context) {
    return __assign({}, (input.AllowNonRestoredState !== undefined &&
        input.AllowNonRestoredState !== null && { AllowNonRestoredState: input.AllowNonRestoredState }));
};
var serializeAws_json1_1GlueDataCatalogConfiguration = function (input, context) {
    return __assign({}, (input.DatabaseARN !== undefined && input.DatabaseARN !== null && { DatabaseARN: input.DatabaseARN }));
};
var serializeAws_json1_1GlueDataCatalogConfigurationUpdate = function (input, context) {
    return __assign({}, (input.DatabaseARNUpdate !== undefined &&
        input.DatabaseARNUpdate !== null && { DatabaseARNUpdate: input.DatabaseARNUpdate }));
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
var serializeAws_json1_1InputLambdaProcessor = function (input, context) {
    return __assign({}, (input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }));
};
var serializeAws_json1_1InputLambdaProcessorUpdate = function (input, context) {
    return __assign({}, (input.ResourceARNUpdate !== undefined &&
        input.ResourceARNUpdate !== null && { ResourceARNUpdate: input.ResourceARNUpdate }));
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
    return __assign({}, (input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }));
};
var serializeAws_json1_1KinesisFirehoseInputUpdate = function (input, context) {
    return __assign({}, (input.ResourceARNUpdate !== undefined &&
        input.ResourceARNUpdate !== null && { ResourceARNUpdate: input.ResourceARNUpdate }));
};
var serializeAws_json1_1KinesisFirehoseOutput = function (input, context) {
    return __assign({}, (input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }));
};
var serializeAws_json1_1KinesisFirehoseOutputUpdate = function (input, context) {
    return __assign({}, (input.ResourceARNUpdate !== undefined &&
        input.ResourceARNUpdate !== null && { ResourceARNUpdate: input.ResourceARNUpdate }));
};
var serializeAws_json1_1KinesisStreamsInput = function (input, context) {
    return __assign({}, (input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }));
};
var serializeAws_json1_1KinesisStreamsInputUpdate = function (input, context) {
    return __assign({}, (input.ResourceARNUpdate !== undefined &&
        input.ResourceARNUpdate !== null && { ResourceARNUpdate: input.ResourceARNUpdate }));
};
var serializeAws_json1_1KinesisStreamsOutput = function (input, context) {
    return __assign({}, (input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }));
};
var serializeAws_json1_1KinesisStreamsOutputUpdate = function (input, context) {
    return __assign({}, (input.ResourceARNUpdate !== undefined &&
        input.ResourceARNUpdate !== null && { ResourceARNUpdate: input.ResourceARNUpdate }));
};
var serializeAws_json1_1LambdaOutput = function (input, context) {
    return __assign({}, (input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }));
};
var serializeAws_json1_1LambdaOutputUpdate = function (input, context) {
    return __assign({}, (input.ResourceARNUpdate !== undefined &&
        input.ResourceARNUpdate !== null && { ResourceARNUpdate: input.ResourceARNUpdate }));
};
var serializeAws_json1_1ListApplicationSnapshotsRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.ApplicationName !== undefined &&
        input.ApplicationName !== null && { ApplicationName: input.ApplicationName })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1ListApplicationsRequest = function (input, context) {
    return __assign(__assign({}, (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1ListApplicationVersionsRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.ApplicationName !== undefined &&
        input.ApplicationName !== null && { ApplicationName: input.ApplicationName })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
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
var serializeAws_json1_1MavenReference = function (input, context) {
    return __assign(__assign(__assign({}, (input.ArtifactId !== undefined && input.ArtifactId !== null && { ArtifactId: input.ArtifactId })), (input.GroupId !== undefined && input.GroupId !== null && { GroupId: input.GroupId })), (input.Version !== undefined && input.Version !== null && { Version: input.Version }));
};
var serializeAws_json1_1MonitoringConfiguration = function (input, context) {
    return __assign(__assign(__assign({}, (input.ConfigurationType !== undefined &&
        input.ConfigurationType !== null && { ConfigurationType: input.ConfigurationType })), (input.LogLevel !== undefined && input.LogLevel !== null && { LogLevel: input.LogLevel })), (input.MetricsLevel !== undefined && input.MetricsLevel !== null && { MetricsLevel: input.MetricsLevel }));
};
var serializeAws_json1_1MonitoringConfigurationUpdate = function (input, context) {
    return __assign(__assign(__assign({}, (input.ConfigurationTypeUpdate !== undefined &&
        input.ConfigurationTypeUpdate !== null && { ConfigurationTypeUpdate: input.ConfigurationTypeUpdate })), (input.LogLevelUpdate !== undefined &&
        input.LogLevelUpdate !== null && { LogLevelUpdate: input.LogLevelUpdate })), (input.MetricsLevelUpdate !== undefined &&
        input.MetricsLevelUpdate !== null && { MetricsLevelUpdate: input.MetricsLevelUpdate }));
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
var serializeAws_json1_1ParallelismConfiguration = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.AutoScalingEnabled !== undefined &&
        input.AutoScalingEnabled !== null && { AutoScalingEnabled: input.AutoScalingEnabled })), (input.ConfigurationType !== undefined &&
        input.ConfigurationType !== null && { ConfigurationType: input.ConfigurationType })), (input.Parallelism !== undefined && input.Parallelism !== null && { Parallelism: input.Parallelism })), (input.ParallelismPerKPU !== undefined &&
        input.ParallelismPerKPU !== null && { ParallelismPerKPU: input.ParallelismPerKPU }));
};
var serializeAws_json1_1ParallelismConfigurationUpdate = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.AutoScalingEnabledUpdate !== undefined &&
        input.AutoScalingEnabledUpdate !== null && { AutoScalingEnabledUpdate: input.AutoScalingEnabledUpdate })), (input.ConfigurationTypeUpdate !== undefined &&
        input.ConfigurationTypeUpdate !== null && { ConfigurationTypeUpdate: input.ConfigurationTypeUpdate })), (input.ParallelismPerKPUUpdate !== undefined &&
        input.ParallelismPerKPUUpdate !== null && { ParallelismPerKPUUpdate: input.ParallelismPerKPUUpdate })), (input.ParallelismUpdate !== undefined &&
        input.ParallelismUpdate !== null && { ParallelismUpdate: input.ParallelismUpdate }));
};
var serializeAws_json1_1PropertyGroup = function (input, context) {
    return __assign(__assign({}, (input.PropertyGroupId !== undefined &&
        input.PropertyGroupId !== null && { PropertyGroupId: input.PropertyGroupId })), (input.PropertyMap !== undefined &&
        input.PropertyMap !== null && { PropertyMap: serializeAws_json1_1PropertyMap(input.PropertyMap, context) }));
};
var serializeAws_json1_1PropertyGroups = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1PropertyGroup(entry, context);
    });
};
var serializeAws_json1_1PropertyMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
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
var serializeAws_json1_1ReferenceDataSources = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ReferenceDataSource(entry, context);
    });
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
var serializeAws_json1_1RollbackApplicationRequest = function (input, context) {
    return __assign(__assign({}, (input.ApplicationName !== undefined &&
        input.ApplicationName !== null && { ApplicationName: input.ApplicationName })), (input.CurrentApplicationVersionId !== undefined &&
        input.CurrentApplicationVersionId !== null && { CurrentApplicationVersionId: input.CurrentApplicationVersionId }));
};
var serializeAws_json1_1RunConfiguration = function (input, context) {
    return __assign(__assign(__assign({}, (input.ApplicationRestoreConfiguration !== undefined &&
        input.ApplicationRestoreConfiguration !== null && {
        ApplicationRestoreConfiguration: serializeAws_json1_1ApplicationRestoreConfiguration(input.ApplicationRestoreConfiguration, context),
    })), (input.FlinkRunConfiguration !== undefined &&
        input.FlinkRunConfiguration !== null && {
        FlinkRunConfiguration: serializeAws_json1_1FlinkRunConfiguration(input.FlinkRunConfiguration, context),
    })), (input.SqlRunConfigurations !== undefined &&
        input.SqlRunConfigurations !== null && {
        SqlRunConfigurations: serializeAws_json1_1SqlRunConfigurations(input.SqlRunConfigurations, context),
    }));
};
var serializeAws_json1_1RunConfigurationUpdate = function (input, context) {
    return __assign(__assign({}, (input.ApplicationRestoreConfiguration !== undefined &&
        input.ApplicationRestoreConfiguration !== null && {
        ApplicationRestoreConfiguration: serializeAws_json1_1ApplicationRestoreConfiguration(input.ApplicationRestoreConfiguration, context),
    })), (input.FlinkRunConfiguration !== undefined &&
        input.FlinkRunConfiguration !== null && {
        FlinkRunConfiguration: serializeAws_json1_1FlinkRunConfiguration(input.FlinkRunConfiguration, context),
    }));
};
var serializeAws_json1_1S3Configuration = function (input, context) {
    return __assign(__assign({}, (input.BucketARN !== undefined && input.BucketARN !== null && { BucketARN: input.BucketARN })), (input.FileKey !== undefined && input.FileKey !== null && { FileKey: input.FileKey }));
};
var serializeAws_json1_1S3ContentBaseLocation = function (input, context) {
    return __assign(__assign({}, (input.BasePath !== undefined && input.BasePath !== null && { BasePath: input.BasePath })), (input.BucketARN !== undefined && input.BucketARN !== null && { BucketARN: input.BucketARN }));
};
var serializeAws_json1_1S3ContentBaseLocationUpdate = function (input, context) {
    return __assign(__assign({}, (input.BasePathUpdate !== undefined &&
        input.BasePathUpdate !== null && { BasePathUpdate: input.BasePathUpdate })), (input.BucketARNUpdate !== undefined &&
        input.BucketARNUpdate !== null && { BucketARNUpdate: input.BucketARNUpdate }));
};
var serializeAws_json1_1S3ContentLocation = function (input, context) {
    return __assign(__assign(__assign({}, (input.BucketARN !== undefined && input.BucketARN !== null && { BucketARN: input.BucketARN })), (input.FileKey !== undefined && input.FileKey !== null && { FileKey: input.FileKey })), (input.ObjectVersion !== undefined && input.ObjectVersion !== null && { ObjectVersion: input.ObjectVersion }));
};
var serializeAws_json1_1S3ContentLocationUpdate = function (input, context) {
    return __assign(__assign(__assign({}, (input.BucketARNUpdate !== undefined &&
        input.BucketARNUpdate !== null && { BucketARNUpdate: input.BucketARNUpdate })), (input.FileKeyUpdate !== undefined && input.FileKeyUpdate !== null && { FileKeyUpdate: input.FileKeyUpdate })), (input.ObjectVersionUpdate !== undefined &&
        input.ObjectVersionUpdate !== null && { ObjectVersionUpdate: input.ObjectVersionUpdate }));
};
var serializeAws_json1_1S3ReferenceDataSource = function (input, context) {
    return __assign(__assign({}, (input.BucketARN !== undefined && input.BucketARN !== null && { BucketARN: input.BucketARN })), (input.FileKey !== undefined && input.FileKey !== null && { FileKey: input.FileKey }));
};
var serializeAws_json1_1S3ReferenceDataSourceUpdate = function (input, context) {
    return __assign(__assign({}, (input.BucketARNUpdate !== undefined &&
        input.BucketARNUpdate !== null && { BucketARNUpdate: input.BucketARNUpdate })), (input.FileKeyUpdate !== undefined && input.FileKeyUpdate !== null && { FileKeyUpdate: input.FileKeyUpdate }));
};
var serializeAws_json1_1SecurityGroupIds = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1SourceSchema = function (input, context) {
    return __assign(__assign(__assign({}, (input.RecordColumns !== undefined &&
        input.RecordColumns !== null && {
        RecordColumns: serializeAws_json1_1RecordColumns(input.RecordColumns, context),
    })), (input.RecordEncoding !== undefined &&
        input.RecordEncoding !== null && { RecordEncoding: input.RecordEncoding })), (input.RecordFormat !== undefined &&
        input.RecordFormat !== null && { RecordFormat: serializeAws_json1_1RecordFormat(input.RecordFormat, context) }));
};
var serializeAws_json1_1SqlApplicationConfiguration = function (input, context) {
    return __assign(__assign(__assign({}, (input.Inputs !== undefined &&
        input.Inputs !== null && { Inputs: serializeAws_json1_1Inputs(input.Inputs, context) })), (input.Outputs !== undefined &&
        input.Outputs !== null && { Outputs: serializeAws_json1_1Outputs(input.Outputs, context) })), (input.ReferenceDataSources !== undefined &&
        input.ReferenceDataSources !== null && {
        ReferenceDataSources: serializeAws_json1_1ReferenceDataSources(input.ReferenceDataSources, context),
    }));
};
var serializeAws_json1_1SqlApplicationConfigurationUpdate = function (input, context) {
    return __assign(__assign(__assign({}, (input.InputUpdates !== undefined &&
        input.InputUpdates !== null && { InputUpdates: serializeAws_json1_1InputUpdates(input.InputUpdates, context) })), (input.OutputUpdates !== undefined &&
        input.OutputUpdates !== null && {
        OutputUpdates: serializeAws_json1_1OutputUpdates(input.OutputUpdates, context),
    })), (input.ReferenceDataSourceUpdates !== undefined &&
        input.ReferenceDataSourceUpdates !== null && {
        ReferenceDataSourceUpdates: serializeAws_json1_1ReferenceDataSourceUpdates(input.ReferenceDataSourceUpdates, context),
    }));
};
var serializeAws_json1_1SqlRunConfiguration = function (input, context) {
    return __assign(__assign({}, (input.InputId !== undefined && input.InputId !== null && { InputId: input.InputId })), (input.InputStartingPositionConfiguration !== undefined &&
        input.InputStartingPositionConfiguration !== null && {
        InputStartingPositionConfiguration: serializeAws_json1_1InputStartingPositionConfiguration(input.InputStartingPositionConfiguration, context),
    }));
};
var serializeAws_json1_1SqlRunConfigurations = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1SqlRunConfiguration(entry, context);
    });
};
var serializeAws_json1_1StartApplicationRequest = function (input, context) {
    return __assign(__assign({}, (input.ApplicationName !== undefined &&
        input.ApplicationName !== null && { ApplicationName: input.ApplicationName })), (input.RunConfiguration !== undefined &&
        input.RunConfiguration !== null && {
        RunConfiguration: serializeAws_json1_1RunConfiguration(input.RunConfiguration, context),
    }));
};
var serializeAws_json1_1StopApplicationRequest = function (input, context) {
    return __assign(__assign({}, (input.ApplicationName !== undefined &&
        input.ApplicationName !== null && { ApplicationName: input.ApplicationName })), (input.Force !== undefined && input.Force !== null && { Force: input.Force }));
};
var serializeAws_json1_1SubnetIds = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
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
var serializeAws_json1_1UpdateApplicationMaintenanceConfigurationRequest = function (input, context) {
    return __assign(__assign({}, (input.ApplicationMaintenanceConfigurationUpdate !== undefined &&
        input.ApplicationMaintenanceConfigurationUpdate !== null && {
        ApplicationMaintenanceConfigurationUpdate: serializeAws_json1_1ApplicationMaintenanceConfigurationUpdate(input.ApplicationMaintenanceConfigurationUpdate, context),
    })), (input.ApplicationName !== undefined &&
        input.ApplicationName !== null && { ApplicationName: input.ApplicationName }));
};
var serializeAws_json1_1UpdateApplicationRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.ApplicationConfigurationUpdate !== undefined &&
        input.ApplicationConfigurationUpdate !== null && {
        ApplicationConfigurationUpdate: serializeAws_json1_1ApplicationConfigurationUpdate(input.ApplicationConfigurationUpdate, context),
    })), (input.ApplicationName !== undefined &&
        input.ApplicationName !== null && { ApplicationName: input.ApplicationName })), (input.CloudWatchLoggingOptionUpdates !== undefined &&
        input.CloudWatchLoggingOptionUpdates !== null && {
        CloudWatchLoggingOptionUpdates: serializeAws_json1_1CloudWatchLoggingOptionUpdates(input.CloudWatchLoggingOptionUpdates, context),
    })), (input.ConditionalToken !== undefined &&
        input.ConditionalToken !== null && { ConditionalToken: input.ConditionalToken })), (input.CurrentApplicationVersionId !== undefined &&
        input.CurrentApplicationVersionId !== null && { CurrentApplicationVersionId: input.CurrentApplicationVersionId })), (input.RunConfigurationUpdate !== undefined &&
        input.RunConfigurationUpdate !== null && {
        RunConfigurationUpdate: serializeAws_json1_1RunConfigurationUpdate(input.RunConfigurationUpdate, context),
    })), (input.ServiceExecutionRoleUpdate !== undefined &&
        input.ServiceExecutionRoleUpdate !== null && { ServiceExecutionRoleUpdate: input.ServiceExecutionRoleUpdate }));
};
var serializeAws_json1_1VpcConfiguration = function (input, context) {
    return __assign(__assign({}, (input.SecurityGroupIds !== undefined &&
        input.SecurityGroupIds !== null && {
        SecurityGroupIds: serializeAws_json1_1SecurityGroupIds(input.SecurityGroupIds, context),
    })), (input.SubnetIds !== undefined &&
        input.SubnetIds !== null && { SubnetIds: serializeAws_json1_1SubnetIds(input.SubnetIds, context) }));
};
var serializeAws_json1_1VpcConfigurations = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1VpcConfiguration(entry, context);
    });
};
var serializeAws_json1_1VpcConfigurationUpdate = function (input, context) {
    return __assign(__assign(__assign({}, (input.SecurityGroupIdUpdates !== undefined &&
        input.SecurityGroupIdUpdates !== null && {
        SecurityGroupIdUpdates: serializeAws_json1_1SecurityGroupIds(input.SecurityGroupIdUpdates, context),
    })), (input.SubnetIdUpdates !== undefined &&
        input.SubnetIdUpdates !== null && {
        SubnetIdUpdates: serializeAws_json1_1SubnetIds(input.SubnetIdUpdates, context),
    })), (input.VpcConfigurationId !== undefined &&
        input.VpcConfigurationId !== null && { VpcConfigurationId: input.VpcConfigurationId }));
};
var serializeAws_json1_1VpcConfigurationUpdates = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1VpcConfigurationUpdate(entry, context);
    });
};
var serializeAws_json1_1ZeppelinApplicationConfiguration = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.CatalogConfiguration !== undefined &&
        input.CatalogConfiguration !== null && {
        CatalogConfiguration: serializeAws_json1_1CatalogConfiguration(input.CatalogConfiguration, context),
    })), (input.CustomArtifactsConfiguration !== undefined &&
        input.CustomArtifactsConfiguration !== null && {
        CustomArtifactsConfiguration: serializeAws_json1_1CustomArtifactsConfigurationList(input.CustomArtifactsConfiguration, context),
    })), (input.DeployAsApplicationConfiguration !== undefined &&
        input.DeployAsApplicationConfiguration !== null && {
        DeployAsApplicationConfiguration: serializeAws_json1_1DeployAsApplicationConfiguration(input.DeployAsApplicationConfiguration, context),
    })), (input.MonitoringConfiguration !== undefined &&
        input.MonitoringConfiguration !== null && {
        MonitoringConfiguration: serializeAws_json1_1ZeppelinMonitoringConfiguration(input.MonitoringConfiguration, context),
    }));
};
var serializeAws_json1_1ZeppelinApplicationConfigurationUpdate = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.CatalogConfigurationUpdate !== undefined &&
        input.CatalogConfigurationUpdate !== null && {
        CatalogConfigurationUpdate: serializeAws_json1_1CatalogConfigurationUpdate(input.CatalogConfigurationUpdate, context),
    })), (input.CustomArtifactsConfigurationUpdate !== undefined &&
        input.CustomArtifactsConfigurationUpdate !== null && {
        CustomArtifactsConfigurationUpdate: serializeAws_json1_1CustomArtifactsConfigurationList(input.CustomArtifactsConfigurationUpdate, context),
    })), (input.DeployAsApplicationConfigurationUpdate !== undefined &&
        input.DeployAsApplicationConfigurationUpdate !== null && {
        DeployAsApplicationConfigurationUpdate: serializeAws_json1_1DeployAsApplicationConfigurationUpdate(input.DeployAsApplicationConfigurationUpdate, context),
    })), (input.MonitoringConfigurationUpdate !== undefined &&
        input.MonitoringConfigurationUpdate !== null && {
        MonitoringConfigurationUpdate: serializeAws_json1_1ZeppelinMonitoringConfigurationUpdate(input.MonitoringConfigurationUpdate, context),
    }));
};
var serializeAws_json1_1ZeppelinMonitoringConfiguration = function (input, context) {
    return __assign({}, (input.LogLevel !== undefined && input.LogLevel !== null && { LogLevel: input.LogLevel }));
};
var serializeAws_json1_1ZeppelinMonitoringConfigurationUpdate = function (input, context) {
    return __assign({}, (input.LogLevelUpdate !== undefined &&
        input.LogLevelUpdate !== null && { LogLevelUpdate: input.LogLevelUpdate }));
};
var deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionResponse = function (output, context) {
    return {
        ApplicationARN: output.ApplicationARN !== undefined && output.ApplicationARN !== null ? output.ApplicationARN : undefined,
        ApplicationVersionId: output.ApplicationVersionId !== undefined && output.ApplicationVersionId !== null
            ? output.ApplicationVersionId
            : undefined,
        CloudWatchLoggingOptionDescriptions: output.CloudWatchLoggingOptionDescriptions !== undefined && output.CloudWatchLoggingOptionDescriptions !== null
            ? deserializeAws_json1_1CloudWatchLoggingOptionDescriptions(output.CloudWatchLoggingOptionDescriptions, context)
            : undefined,
    };
};
var deserializeAws_json1_1AddApplicationInputProcessingConfigurationResponse = function (output, context) {
    return {
        ApplicationARN: output.ApplicationARN !== undefined && output.ApplicationARN !== null ? output.ApplicationARN : undefined,
        ApplicationVersionId: output.ApplicationVersionId !== undefined && output.ApplicationVersionId !== null
            ? output.ApplicationVersionId
            : undefined,
        InputId: output.InputId !== undefined && output.InputId !== null ? output.InputId : undefined,
        InputProcessingConfigurationDescription: output.InputProcessingConfigurationDescription !== undefined &&
            output.InputProcessingConfigurationDescription !== null
            ? deserializeAws_json1_1InputProcessingConfigurationDescription(output.InputProcessingConfigurationDescription, context)
            : undefined,
    };
};
var deserializeAws_json1_1AddApplicationInputResponse = function (output, context) {
    return {
        ApplicationARN: output.ApplicationARN !== undefined && output.ApplicationARN !== null ? output.ApplicationARN : undefined,
        ApplicationVersionId: output.ApplicationVersionId !== undefined && output.ApplicationVersionId !== null
            ? output.ApplicationVersionId
            : undefined,
        InputDescriptions: output.InputDescriptions !== undefined && output.InputDescriptions !== null
            ? deserializeAws_json1_1InputDescriptions(output.InputDescriptions, context)
            : undefined,
    };
};
var deserializeAws_json1_1AddApplicationOutputResponse = function (output, context) {
    return {
        ApplicationARN: output.ApplicationARN !== undefined && output.ApplicationARN !== null ? output.ApplicationARN : undefined,
        ApplicationVersionId: output.ApplicationVersionId !== undefined && output.ApplicationVersionId !== null
            ? output.ApplicationVersionId
            : undefined,
        OutputDescriptions: output.OutputDescriptions !== undefined && output.OutputDescriptions !== null
            ? deserializeAws_json1_1OutputDescriptions(output.OutputDescriptions, context)
            : undefined,
    };
};
var deserializeAws_json1_1AddApplicationReferenceDataSourceResponse = function (output, context) {
    return {
        ApplicationARN: output.ApplicationARN !== undefined && output.ApplicationARN !== null ? output.ApplicationARN : undefined,
        ApplicationVersionId: output.ApplicationVersionId !== undefined && output.ApplicationVersionId !== null
            ? output.ApplicationVersionId
            : undefined,
        ReferenceDataSourceDescriptions: output.ReferenceDataSourceDescriptions !== undefined && output.ReferenceDataSourceDescriptions !== null
            ? deserializeAws_json1_1ReferenceDataSourceDescriptions(output.ReferenceDataSourceDescriptions, context)
            : undefined,
    };
};
var deserializeAws_json1_1AddApplicationVpcConfigurationResponse = function (output, context) {
    return {
        ApplicationARN: output.ApplicationARN !== undefined && output.ApplicationARN !== null ? output.ApplicationARN : undefined,
        ApplicationVersionId: output.ApplicationVersionId !== undefined && output.ApplicationVersionId !== null
            ? output.ApplicationVersionId
            : undefined,
        VpcConfigurationDescription: output.VpcConfigurationDescription !== undefined && output.VpcConfigurationDescription !== null
            ? deserializeAws_json1_1VpcConfigurationDescription(output.VpcConfigurationDescription, context)
            : undefined,
    };
};
var deserializeAws_json1_1ApplicationCodeConfigurationDescription = function (output, context) {
    return {
        CodeContentDescription: output.CodeContentDescription !== undefined && output.CodeContentDescription !== null
            ? deserializeAws_json1_1CodeContentDescription(output.CodeContentDescription, context)
            : undefined,
        CodeContentType: output.CodeContentType !== undefined && output.CodeContentType !== null ? output.CodeContentType : undefined,
    };
};
var deserializeAws_json1_1ApplicationConfigurationDescription = function (output, context) {
    return {
        ApplicationCodeConfigurationDescription: output.ApplicationCodeConfigurationDescription !== undefined &&
            output.ApplicationCodeConfigurationDescription !== null
            ? deserializeAws_json1_1ApplicationCodeConfigurationDescription(output.ApplicationCodeConfigurationDescription, context)
            : undefined,
        ApplicationSnapshotConfigurationDescription: output.ApplicationSnapshotConfigurationDescription !== undefined &&
            output.ApplicationSnapshotConfigurationDescription !== null
            ? deserializeAws_json1_1ApplicationSnapshotConfigurationDescription(output.ApplicationSnapshotConfigurationDescription, context)
            : undefined,
        EnvironmentPropertyDescriptions: output.EnvironmentPropertyDescriptions !== undefined && output.EnvironmentPropertyDescriptions !== null
            ? deserializeAws_json1_1EnvironmentPropertyDescriptions(output.EnvironmentPropertyDescriptions, context)
            : undefined,
        FlinkApplicationConfigurationDescription: output.FlinkApplicationConfigurationDescription !== undefined &&
            output.FlinkApplicationConfigurationDescription !== null
            ? deserializeAws_json1_1FlinkApplicationConfigurationDescription(output.FlinkApplicationConfigurationDescription, context)
            : undefined,
        RunConfigurationDescription: output.RunConfigurationDescription !== undefined && output.RunConfigurationDescription !== null
            ? deserializeAws_json1_1RunConfigurationDescription(output.RunConfigurationDescription, context)
            : undefined,
        SqlApplicationConfigurationDescription: output.SqlApplicationConfigurationDescription !== undefined &&
            output.SqlApplicationConfigurationDescription !== null
            ? deserializeAws_json1_1SqlApplicationConfigurationDescription(output.SqlApplicationConfigurationDescription, context)
            : undefined,
        VpcConfigurationDescriptions: output.VpcConfigurationDescriptions !== undefined && output.VpcConfigurationDescriptions !== null
            ? deserializeAws_json1_1VpcConfigurationDescriptions(output.VpcConfigurationDescriptions, context)
            : undefined,
        ZeppelinApplicationConfigurationDescription: output.ZeppelinApplicationConfigurationDescription !== undefined &&
            output.ZeppelinApplicationConfigurationDescription !== null
            ? deserializeAws_json1_1ZeppelinApplicationConfigurationDescription(output.ZeppelinApplicationConfigurationDescription, context)
            : undefined,
    };
};
var deserializeAws_json1_1ApplicationDetail = function (output, context) {
    return {
        ApplicationARN: output.ApplicationARN !== undefined && output.ApplicationARN !== null ? output.ApplicationARN : undefined,
        ApplicationConfigurationDescription: output.ApplicationConfigurationDescription !== undefined && output.ApplicationConfigurationDescription !== null
            ? deserializeAws_json1_1ApplicationConfigurationDescription(output.ApplicationConfigurationDescription, context)
            : undefined,
        ApplicationDescription: output.ApplicationDescription !== undefined && output.ApplicationDescription !== null
            ? output.ApplicationDescription
            : undefined,
        ApplicationMaintenanceConfigurationDescription: output.ApplicationMaintenanceConfigurationDescription !== undefined &&
            output.ApplicationMaintenanceConfigurationDescription !== null
            ? deserializeAws_json1_1ApplicationMaintenanceConfigurationDescription(output.ApplicationMaintenanceConfigurationDescription, context)
            : undefined,
        ApplicationMode: output.ApplicationMode !== undefined && output.ApplicationMode !== null ? output.ApplicationMode : undefined,
        ApplicationName: output.ApplicationName !== undefined && output.ApplicationName !== null ? output.ApplicationName : undefined,
        ApplicationStatus: output.ApplicationStatus !== undefined && output.ApplicationStatus !== null
            ? output.ApplicationStatus
            : undefined,
        ApplicationVersionId: output.ApplicationVersionId !== undefined && output.ApplicationVersionId !== null
            ? output.ApplicationVersionId
            : undefined,
        ApplicationVersionRolledBackFrom: output.ApplicationVersionRolledBackFrom !== undefined && output.ApplicationVersionRolledBackFrom !== null
            ? output.ApplicationVersionRolledBackFrom
            : undefined,
        ApplicationVersionRolledBackTo: output.ApplicationVersionRolledBackTo !== undefined && output.ApplicationVersionRolledBackTo !== null
            ? output.ApplicationVersionRolledBackTo
            : undefined,
        ApplicationVersionUpdatedFrom: output.ApplicationVersionUpdatedFrom !== undefined && output.ApplicationVersionUpdatedFrom !== null
            ? output.ApplicationVersionUpdatedFrom
            : undefined,
        CloudWatchLoggingOptionDescriptions: output.CloudWatchLoggingOptionDescriptions !== undefined && output.CloudWatchLoggingOptionDescriptions !== null
            ? deserializeAws_json1_1CloudWatchLoggingOptionDescriptions(output.CloudWatchLoggingOptionDescriptions, context)
            : undefined,
        ConditionalToken: output.ConditionalToken !== undefined && output.ConditionalToken !== null ? output.ConditionalToken : undefined,
        CreateTimestamp: output.CreateTimestamp !== undefined && output.CreateTimestamp !== null
            ? new Date(Math.round(output.CreateTimestamp * 1000))
            : undefined,
        LastUpdateTimestamp: output.LastUpdateTimestamp !== undefined && output.LastUpdateTimestamp !== null
            ? new Date(Math.round(output.LastUpdateTimestamp * 1000))
            : undefined,
        RuntimeEnvironment: output.RuntimeEnvironment !== undefined && output.RuntimeEnvironment !== null
            ? output.RuntimeEnvironment
            : undefined,
        ServiceExecutionRole: output.ServiceExecutionRole !== undefined && output.ServiceExecutionRole !== null
            ? output.ServiceExecutionRole
            : undefined,
    };
};
var deserializeAws_json1_1ApplicationMaintenanceConfigurationDescription = function (output, context) {
    return {
        ApplicationMaintenanceWindowEndTime: output.ApplicationMaintenanceWindowEndTime !== undefined && output.ApplicationMaintenanceWindowEndTime !== null
            ? output.ApplicationMaintenanceWindowEndTime
            : undefined,
        ApplicationMaintenanceWindowStartTime: output.ApplicationMaintenanceWindowStartTime !== undefined &&
            output.ApplicationMaintenanceWindowStartTime !== null
            ? output.ApplicationMaintenanceWindowStartTime
            : undefined,
    };
};
var deserializeAws_json1_1ApplicationRestoreConfiguration = function (output, context) {
    return {
        ApplicationRestoreType: output.ApplicationRestoreType !== undefined && output.ApplicationRestoreType !== null
            ? output.ApplicationRestoreType
            : undefined,
        SnapshotName: output.SnapshotName !== undefined && output.SnapshotName !== null ? output.SnapshotName : undefined,
    };
};
var deserializeAws_json1_1ApplicationSnapshotConfigurationDescription = function (output, context) {
    return {
        SnapshotsEnabled: output.SnapshotsEnabled !== undefined && output.SnapshotsEnabled !== null ? output.SnapshotsEnabled : undefined,
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
        ApplicationMode: output.ApplicationMode !== undefined && output.ApplicationMode !== null ? output.ApplicationMode : undefined,
        ApplicationName: output.ApplicationName !== undefined && output.ApplicationName !== null ? output.ApplicationName : undefined,
        ApplicationStatus: output.ApplicationStatus !== undefined && output.ApplicationStatus !== null
            ? output.ApplicationStatus
            : undefined,
        ApplicationVersionId: output.ApplicationVersionId !== undefined && output.ApplicationVersionId !== null
            ? output.ApplicationVersionId
            : undefined,
        RuntimeEnvironment: output.RuntimeEnvironment !== undefined && output.RuntimeEnvironment !== null
            ? output.RuntimeEnvironment
            : undefined,
    };
};
var deserializeAws_json1_1ApplicationVersionSummaries = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ApplicationVersionSummary(entry, context);
    });
};
var deserializeAws_json1_1ApplicationVersionSummary = function (output, context) {
    return {
        ApplicationStatus: output.ApplicationStatus !== undefined && output.ApplicationStatus !== null
            ? output.ApplicationStatus
            : undefined,
        ApplicationVersionId: output.ApplicationVersionId !== undefined && output.ApplicationVersionId !== null
            ? output.ApplicationVersionId
            : undefined,
    };
};
var deserializeAws_json1_1CatalogConfigurationDescription = function (output, context) {
    return {
        GlueDataCatalogConfigurationDescription: output.GlueDataCatalogConfigurationDescription !== undefined &&
            output.GlueDataCatalogConfigurationDescription !== null
            ? deserializeAws_json1_1GlueDataCatalogConfigurationDescription(output.GlueDataCatalogConfigurationDescription, context)
            : undefined,
    };
};
var deserializeAws_json1_1CheckpointConfigurationDescription = function (output, context) {
    return {
        CheckpointInterval: output.CheckpointInterval !== undefined && output.CheckpointInterval !== null
            ? output.CheckpointInterval
            : undefined,
        CheckpointingEnabled: output.CheckpointingEnabled !== undefined && output.CheckpointingEnabled !== null
            ? output.CheckpointingEnabled
            : undefined,
        ConfigurationType: output.ConfigurationType !== undefined && output.ConfigurationType !== null
            ? output.ConfigurationType
            : undefined,
        MinPauseBetweenCheckpoints: output.MinPauseBetweenCheckpoints !== undefined && output.MinPauseBetweenCheckpoints !== null
            ? output.MinPauseBetweenCheckpoints
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
var deserializeAws_json1_1CodeContentDescription = function (output, context) {
    return {
        CodeMD5: output.CodeMD5 !== undefined && output.CodeMD5 !== null ? output.CodeMD5 : undefined,
        CodeSize: output.CodeSize !== undefined && output.CodeSize !== null ? output.CodeSize : undefined,
        S3ApplicationCodeLocationDescription: output.S3ApplicationCodeLocationDescription !== undefined && output.S3ApplicationCodeLocationDescription !== null
            ? deserializeAws_json1_1S3ApplicationCodeLocationDescription(output.S3ApplicationCodeLocationDescription, context)
            : undefined,
        TextContent: output.TextContent !== undefined && output.TextContent !== null ? output.TextContent : undefined,
    };
};
var deserializeAws_json1_1CodeValidationException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1ConcurrentModificationException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1CreateApplicationPresignedUrlResponse = function (output, context) {
    return {
        AuthorizedUrl: output.AuthorizedUrl !== undefined && output.AuthorizedUrl !== null ? output.AuthorizedUrl : undefined,
    };
};
var deserializeAws_json1_1CreateApplicationResponse = function (output, context) {
    return {
        ApplicationDetail: output.ApplicationDetail !== undefined && output.ApplicationDetail !== null
            ? deserializeAws_json1_1ApplicationDetail(output.ApplicationDetail, context)
            : undefined,
    };
};
var deserializeAws_json1_1CreateApplicationSnapshotResponse = function (output, context) {
    return {};
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
var deserializeAws_json1_1CustomArtifactConfigurationDescription = function (output, context) {
    return {
        ArtifactType: output.ArtifactType !== undefined && output.ArtifactType !== null ? output.ArtifactType : undefined,
        MavenReferenceDescription: output.MavenReferenceDescription !== undefined && output.MavenReferenceDescription !== null
            ? deserializeAws_json1_1MavenReference(output.MavenReferenceDescription, context)
            : undefined,
        S3ContentLocationDescription: output.S3ContentLocationDescription !== undefined && output.S3ContentLocationDescription !== null
            ? deserializeAws_json1_1S3ContentLocation(output.S3ContentLocationDescription, context)
            : undefined,
    };
};
var deserializeAws_json1_1CustomArtifactsConfigurationDescriptionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CustomArtifactConfigurationDescription(entry, context);
    });
};
var deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionResponse = function (output, context) {
    return {
        ApplicationARN: output.ApplicationARN !== undefined && output.ApplicationARN !== null ? output.ApplicationARN : undefined,
        ApplicationVersionId: output.ApplicationVersionId !== undefined && output.ApplicationVersionId !== null
            ? output.ApplicationVersionId
            : undefined,
        CloudWatchLoggingOptionDescriptions: output.CloudWatchLoggingOptionDescriptions !== undefined && output.CloudWatchLoggingOptionDescriptions !== null
            ? deserializeAws_json1_1CloudWatchLoggingOptionDescriptions(output.CloudWatchLoggingOptionDescriptions, context)
            : undefined,
    };
};
var deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationResponse = function (output, context) {
    return {
        ApplicationARN: output.ApplicationARN !== undefined && output.ApplicationARN !== null ? output.ApplicationARN : undefined,
        ApplicationVersionId: output.ApplicationVersionId !== undefined && output.ApplicationVersionId !== null
            ? output.ApplicationVersionId
            : undefined,
    };
};
var deserializeAws_json1_1DeleteApplicationOutputResponse = function (output, context) {
    return {
        ApplicationARN: output.ApplicationARN !== undefined && output.ApplicationARN !== null ? output.ApplicationARN : undefined,
        ApplicationVersionId: output.ApplicationVersionId !== undefined && output.ApplicationVersionId !== null
            ? output.ApplicationVersionId
            : undefined,
    };
};
var deserializeAws_json1_1DeleteApplicationReferenceDataSourceResponse = function (output, context) {
    return {
        ApplicationARN: output.ApplicationARN !== undefined && output.ApplicationARN !== null ? output.ApplicationARN : undefined,
        ApplicationVersionId: output.ApplicationVersionId !== undefined && output.ApplicationVersionId !== null
            ? output.ApplicationVersionId
            : undefined,
    };
};
var deserializeAws_json1_1DeleteApplicationResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1DeleteApplicationSnapshotResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1DeleteApplicationVpcConfigurationResponse = function (output, context) {
    return {
        ApplicationARN: output.ApplicationARN !== undefined && output.ApplicationARN !== null ? output.ApplicationARN : undefined,
        ApplicationVersionId: output.ApplicationVersionId !== undefined && output.ApplicationVersionId !== null
            ? output.ApplicationVersionId
            : undefined,
    };
};
var deserializeAws_json1_1DeployAsApplicationConfigurationDescription = function (output, context) {
    return {
        S3ContentLocationDescription: output.S3ContentLocationDescription !== undefined && output.S3ContentLocationDescription !== null
            ? deserializeAws_json1_1S3ContentBaseLocationDescription(output.S3ContentLocationDescription, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeApplicationResponse = function (output, context) {
    return {
        ApplicationDetail: output.ApplicationDetail !== undefined && output.ApplicationDetail !== null
            ? deserializeAws_json1_1ApplicationDetail(output.ApplicationDetail, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeApplicationSnapshotResponse = function (output, context) {
    return {
        SnapshotDetails: output.SnapshotDetails !== undefined && output.SnapshotDetails !== null
            ? deserializeAws_json1_1SnapshotDetails(output.SnapshotDetails, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeApplicationVersionResponse = function (output, context) {
    return {
        ApplicationVersionDetail: output.ApplicationVersionDetail !== undefined && output.ApplicationVersionDetail !== null
            ? deserializeAws_json1_1ApplicationDetail(output.ApplicationVersionDetail, context)
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
var deserializeAws_json1_1EnvironmentPropertyDescriptions = function (output, context) {
    return {
        PropertyGroupDescriptions: output.PropertyGroupDescriptions !== undefined && output.PropertyGroupDescriptions !== null
            ? deserializeAws_json1_1PropertyGroups(output.PropertyGroupDescriptions, context)
            : undefined,
    };
};
var deserializeAws_json1_1FlinkApplicationConfigurationDescription = function (output, context) {
    return {
        CheckpointConfigurationDescription: output.CheckpointConfigurationDescription !== undefined && output.CheckpointConfigurationDescription !== null
            ? deserializeAws_json1_1CheckpointConfigurationDescription(output.CheckpointConfigurationDescription, context)
            : undefined,
        JobPlanDescription: output.JobPlanDescription !== undefined && output.JobPlanDescription !== null
            ? output.JobPlanDescription
            : undefined,
        MonitoringConfigurationDescription: output.MonitoringConfigurationDescription !== undefined && output.MonitoringConfigurationDescription !== null
            ? deserializeAws_json1_1MonitoringConfigurationDescription(output.MonitoringConfigurationDescription, context)
            : undefined,
        ParallelismConfigurationDescription: output.ParallelismConfigurationDescription !== undefined && output.ParallelismConfigurationDescription !== null
            ? deserializeAws_json1_1ParallelismConfigurationDescription(output.ParallelismConfigurationDescription, context)
            : undefined,
    };
};
var deserializeAws_json1_1FlinkRunConfiguration = function (output, context) {
    return {
        AllowNonRestoredState: output.AllowNonRestoredState !== undefined && output.AllowNonRestoredState !== null
            ? output.AllowNonRestoredState
            : undefined,
    };
};
var deserializeAws_json1_1GlueDataCatalogConfigurationDescription = function (output, context) {
    return {
        DatabaseARN: output.DatabaseARN !== undefined && output.DatabaseARN !== null ? output.DatabaseARN : undefined,
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
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InvalidArgumentException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InvalidRequestException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
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
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1ListApplicationSnapshotsResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        SnapshotSummaries: output.SnapshotSummaries !== undefined && output.SnapshotSummaries !== null
            ? deserializeAws_json1_1SnapshotSummaries(output.SnapshotSummaries, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListApplicationsResponse = function (output, context) {
    return {
        ApplicationSummaries: output.ApplicationSummaries !== undefined && output.ApplicationSummaries !== null
            ? deserializeAws_json1_1ApplicationSummaries(output.ApplicationSummaries, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1ListApplicationVersionsResponse = function (output, context) {
    return {
        ApplicationVersionSummaries: output.ApplicationVersionSummaries !== undefined && output.ApplicationVersionSummaries !== null
            ? deserializeAws_json1_1ApplicationVersionSummaries(output.ApplicationVersionSummaries, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
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
var deserializeAws_json1_1MavenReference = function (output, context) {
    return {
        ArtifactId: output.ArtifactId !== undefined && output.ArtifactId !== null ? output.ArtifactId : undefined,
        GroupId: output.GroupId !== undefined && output.GroupId !== null ? output.GroupId : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
var deserializeAws_json1_1MonitoringConfigurationDescription = function (output, context) {
    return {
        ConfigurationType: output.ConfigurationType !== undefined && output.ConfigurationType !== null
            ? output.ConfigurationType
            : undefined,
        LogLevel: output.LogLevel !== undefined && output.LogLevel !== null ? output.LogLevel : undefined,
        MetricsLevel: output.MetricsLevel !== undefined && output.MetricsLevel !== null ? output.MetricsLevel : undefined,
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
var deserializeAws_json1_1ParallelismConfigurationDescription = function (output, context) {
    return {
        AutoScalingEnabled: output.AutoScalingEnabled !== undefined && output.AutoScalingEnabled !== null
            ? output.AutoScalingEnabled
            : undefined,
        ConfigurationType: output.ConfigurationType !== undefined && output.ConfigurationType !== null
            ? output.ConfigurationType
            : undefined,
        CurrentParallelism: output.CurrentParallelism !== undefined && output.CurrentParallelism !== null
            ? output.CurrentParallelism
            : undefined,
        Parallelism: output.Parallelism !== undefined && output.Parallelism !== null ? output.Parallelism : undefined,
        ParallelismPerKPU: output.ParallelismPerKPU !== undefined && output.ParallelismPerKPU !== null
            ? output.ParallelismPerKPU
            : undefined,
    };
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
var deserializeAws_json1_1PropertyGroup = function (output, context) {
    return {
        PropertyGroupId: output.PropertyGroupId !== undefined && output.PropertyGroupId !== null ? output.PropertyGroupId : undefined,
        PropertyMap: output.PropertyMap !== undefined && output.PropertyMap !== null
            ? deserializeAws_json1_1PropertyMap(output.PropertyMap, context)
            : undefined,
    };
};
var deserializeAws_json1_1PropertyGroups = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PropertyGroup(entry, context);
    });
};
var deserializeAws_json1_1PropertyMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
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
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1ResourceNotFoundException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1ResourceProvisionedThroughputExceededException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1RollbackApplicationResponse = function (output, context) {
    return {
        ApplicationDetail: output.ApplicationDetail !== undefined && output.ApplicationDetail !== null
            ? deserializeAws_json1_1ApplicationDetail(output.ApplicationDetail, context)
            : undefined,
    };
};
var deserializeAws_json1_1RunConfigurationDescription = function (output, context) {
    return {
        ApplicationRestoreConfigurationDescription: output.ApplicationRestoreConfigurationDescription !== undefined &&
            output.ApplicationRestoreConfigurationDescription !== null
            ? deserializeAws_json1_1ApplicationRestoreConfiguration(output.ApplicationRestoreConfigurationDescription, context)
            : undefined,
        FlinkRunConfigurationDescription: output.FlinkRunConfigurationDescription !== undefined && output.FlinkRunConfigurationDescription !== null
            ? deserializeAws_json1_1FlinkRunConfiguration(output.FlinkRunConfigurationDescription, context)
            : undefined,
    };
};
var deserializeAws_json1_1S3ApplicationCodeLocationDescription = function (output, context) {
    return {
        BucketARN: output.BucketARN !== undefined && output.BucketARN !== null ? output.BucketARN : undefined,
        FileKey: output.FileKey !== undefined && output.FileKey !== null ? output.FileKey : undefined,
        ObjectVersion: output.ObjectVersion !== undefined && output.ObjectVersion !== null ? output.ObjectVersion : undefined,
    };
};
var deserializeAws_json1_1S3ContentBaseLocationDescription = function (output, context) {
    return {
        BasePath: output.BasePath !== undefined && output.BasePath !== null ? output.BasePath : undefined,
        BucketARN: output.BucketARN !== undefined && output.BucketARN !== null ? output.BucketARN : undefined,
    };
};
var deserializeAws_json1_1S3ContentLocation = function (output, context) {
    return {
        BucketARN: output.BucketARN !== undefined && output.BucketARN !== null ? output.BucketARN : undefined,
        FileKey: output.FileKey !== undefined && output.FileKey !== null ? output.FileKey : undefined,
        ObjectVersion: output.ObjectVersion !== undefined && output.ObjectVersion !== null ? output.ObjectVersion : undefined,
    };
};
var deserializeAws_json1_1S3ReferenceDataSourceDescription = function (output, context) {
    return {
        BucketARN: output.BucketARN !== undefined && output.BucketARN !== null ? output.BucketARN : undefined,
        FileKey: output.FileKey !== undefined && output.FileKey !== null ? output.FileKey : undefined,
        ReferenceRoleARN: output.ReferenceRoleARN !== undefined && output.ReferenceRoleARN !== null ? output.ReferenceRoleARN : undefined,
    };
};
var deserializeAws_json1_1SecurityGroupIds = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1ServiceUnavailableException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1SnapshotDetails = function (output, context) {
    return {
        ApplicationVersionId: output.ApplicationVersionId !== undefined && output.ApplicationVersionId !== null
            ? output.ApplicationVersionId
            : undefined,
        SnapshotCreationTimestamp: output.SnapshotCreationTimestamp !== undefined && output.SnapshotCreationTimestamp !== null
            ? new Date(Math.round(output.SnapshotCreationTimestamp * 1000))
            : undefined,
        SnapshotName: output.SnapshotName !== undefined && output.SnapshotName !== null ? output.SnapshotName : undefined,
        SnapshotStatus: output.SnapshotStatus !== undefined && output.SnapshotStatus !== null ? output.SnapshotStatus : undefined,
    };
};
var deserializeAws_json1_1SnapshotSummaries = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SnapshotDetails(entry, context);
    });
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
var deserializeAws_json1_1SqlApplicationConfigurationDescription = function (output, context) {
    return {
        InputDescriptions: output.InputDescriptions !== undefined && output.InputDescriptions !== null
            ? deserializeAws_json1_1InputDescriptions(output.InputDescriptions, context)
            : undefined,
        OutputDescriptions: output.OutputDescriptions !== undefined && output.OutputDescriptions !== null
            ? deserializeAws_json1_1OutputDescriptions(output.OutputDescriptions, context)
            : undefined,
        ReferenceDataSourceDescriptions: output.ReferenceDataSourceDescriptions !== undefined && output.ReferenceDataSourceDescriptions !== null
            ? deserializeAws_json1_1ReferenceDataSourceDescriptions(output.ReferenceDataSourceDescriptions, context)
            : undefined,
    };
};
var deserializeAws_json1_1StartApplicationResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1StopApplicationResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1SubnetIds = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
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
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        ProcessedInputRecords: output.ProcessedInputRecords !== undefined && output.ProcessedInputRecords !== null
            ? deserializeAws_json1_1ProcessedInputRecords(output.ProcessedInputRecords, context)
            : undefined,
        RawInputRecords: output.RawInputRecords !== undefined && output.RawInputRecords !== null
            ? deserializeAws_json1_1RawInputRecords(output.RawInputRecords, context)
            : undefined,
    };
};
var deserializeAws_json1_1UnsupportedOperationException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1UntagResourceResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1UpdateApplicationMaintenanceConfigurationResponse = function (output, context) {
    return {
        ApplicationARN: output.ApplicationARN !== undefined && output.ApplicationARN !== null ? output.ApplicationARN : undefined,
        ApplicationMaintenanceConfigurationDescription: output.ApplicationMaintenanceConfigurationDescription !== undefined &&
            output.ApplicationMaintenanceConfigurationDescription !== null
            ? deserializeAws_json1_1ApplicationMaintenanceConfigurationDescription(output.ApplicationMaintenanceConfigurationDescription, context)
            : undefined,
    };
};
var deserializeAws_json1_1UpdateApplicationResponse = function (output, context) {
    return {
        ApplicationDetail: output.ApplicationDetail !== undefined && output.ApplicationDetail !== null
            ? deserializeAws_json1_1ApplicationDetail(output.ApplicationDetail, context)
            : undefined,
    };
};
var deserializeAws_json1_1VpcConfigurationDescription = function (output, context) {
    return {
        SecurityGroupIds: output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
            ? deserializeAws_json1_1SecurityGroupIds(output.SecurityGroupIds, context)
            : undefined,
        SubnetIds: output.SubnetIds !== undefined && output.SubnetIds !== null
            ? deserializeAws_json1_1SubnetIds(output.SubnetIds, context)
            : undefined,
        VpcConfigurationId: output.VpcConfigurationId !== undefined && output.VpcConfigurationId !== null
            ? output.VpcConfigurationId
            : undefined,
        VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
    };
};
var deserializeAws_json1_1VpcConfigurationDescriptions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1VpcConfigurationDescription(entry, context);
    });
};
var deserializeAws_json1_1ZeppelinApplicationConfigurationDescription = function (output, context) {
    return {
        CatalogConfigurationDescription: output.CatalogConfigurationDescription !== undefined && output.CatalogConfigurationDescription !== null
            ? deserializeAws_json1_1CatalogConfigurationDescription(output.CatalogConfigurationDescription, context)
            : undefined,
        CustomArtifactsConfigurationDescription: output.CustomArtifactsConfigurationDescription !== undefined &&
            output.CustomArtifactsConfigurationDescription !== null
            ? deserializeAws_json1_1CustomArtifactsConfigurationDescriptionList(output.CustomArtifactsConfigurationDescription, context)
            : undefined,
        DeployAsApplicationConfigurationDescription: output.DeployAsApplicationConfigurationDescription !== undefined &&
            output.DeployAsApplicationConfigurationDescription !== null
            ? deserializeAws_json1_1DeployAsApplicationConfigurationDescription(output.DeployAsApplicationConfigurationDescription, context)
            : undefined,
        MonitoringConfigurationDescription: output.MonitoringConfigurationDescription !== undefined && output.MonitoringConfigurationDescription !== null
            ? deserializeAws_json1_1ZeppelinMonitoringConfigurationDescription(output.MonitoringConfigurationDescription, context)
            : undefined,
    };
};
var deserializeAws_json1_1ZeppelinMonitoringConfigurationDescription = function (output, context) {
    return {
        LogLevel: output.LogLevel !== undefined && output.LogLevel !== null ? output.LogLevel : undefined,
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