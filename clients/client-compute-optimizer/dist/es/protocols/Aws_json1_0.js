import { __assign, __awaiter, __generator } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
export var serializeAws_json1_0DescribeRecommendationExportJobsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "ComputeOptimizerService.DescribeRecommendationExportJobs",
        };
        body = JSON.stringify(serializeAws_json1_0DescribeRecommendationExportJobsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0ExportAutoScalingGroupRecommendationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "ComputeOptimizerService.ExportAutoScalingGroupRecommendations",
        };
        body = JSON.stringify(serializeAws_json1_0ExportAutoScalingGroupRecommendationsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0ExportEBSVolumeRecommendationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "ComputeOptimizerService.ExportEBSVolumeRecommendations",
        };
        body = JSON.stringify(serializeAws_json1_0ExportEBSVolumeRecommendationsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0ExportEC2InstanceRecommendationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "ComputeOptimizerService.ExportEC2InstanceRecommendations",
        };
        body = JSON.stringify(serializeAws_json1_0ExportEC2InstanceRecommendationsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0ExportLambdaFunctionRecommendationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "ComputeOptimizerService.ExportLambdaFunctionRecommendations",
        };
        body = JSON.stringify(serializeAws_json1_0ExportLambdaFunctionRecommendationsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0GetAutoScalingGroupRecommendationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "ComputeOptimizerService.GetAutoScalingGroupRecommendations",
        };
        body = JSON.stringify(serializeAws_json1_0GetAutoScalingGroupRecommendationsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0GetEBSVolumeRecommendationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "ComputeOptimizerService.GetEBSVolumeRecommendations",
        };
        body = JSON.stringify(serializeAws_json1_0GetEBSVolumeRecommendationsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0GetEC2InstanceRecommendationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "ComputeOptimizerService.GetEC2InstanceRecommendations",
        };
        body = JSON.stringify(serializeAws_json1_0GetEC2InstanceRecommendationsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0GetEC2RecommendationProjectedMetricsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "ComputeOptimizerService.GetEC2RecommendationProjectedMetrics",
        };
        body = JSON.stringify(serializeAws_json1_0GetEC2RecommendationProjectedMetricsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0GetEnrollmentStatusCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "ComputeOptimizerService.GetEnrollmentStatus",
        };
        body = JSON.stringify(serializeAws_json1_0GetEnrollmentStatusRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0GetLambdaFunctionRecommendationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "ComputeOptimizerService.GetLambdaFunctionRecommendations",
        };
        body = JSON.stringify(serializeAws_json1_0GetLambdaFunctionRecommendationsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0GetRecommendationSummariesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "ComputeOptimizerService.GetRecommendationSummaries",
        };
        body = JSON.stringify(serializeAws_json1_0GetRecommendationSummariesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0UpdateEnrollmentStatusCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "ComputeOptimizerService.UpdateEnrollmentStatus",
        };
        body = JSON.stringify(serializeAws_json1_0UpdateEnrollmentStatusRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_json1_0DescribeRecommendationExportJobsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0DescribeRecommendationExportJobsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0DescribeRecommendationExportJobsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0DescribeRecommendationExportJobsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.computeoptimizer#AccessDeniedException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.computeoptimizer#InternalServerException": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.computeoptimizer#InvalidParameterValueException": return [3 /*break*/, 6];
                    case "MissingAuthenticationToken": return [3 /*break*/, 8];
                    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken": return [3 /*break*/, 8];
                    case "OptInRequiredException": return [3 /*break*/, 10];
                    case "com.amazonaws.computeoptimizer#OptInRequiredException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.computeoptimizer#ResourceNotFoundException": return [3 /*break*/, 12];
                    case "ServiceUnavailableException": return [3 /*break*/, 14];
                    case "com.amazonaws.computeoptimizer#ServiceUnavailableException": return [3 /*break*/, 14];
                    case "ThrottlingException": return [3 /*break*/, 16];
                    case "com.amazonaws.computeoptimizer#ThrottlingException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OptInRequiredExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0ExportAutoScalingGroupRecommendationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0ExportAutoScalingGroupRecommendationsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0ExportAutoScalingGroupRecommendationsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0ExportAutoScalingGroupRecommendationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.computeoptimizer#AccessDeniedException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.computeoptimizer#InternalServerException": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.computeoptimizer#InvalidParameterValueException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.computeoptimizer#LimitExceededException": return [3 /*break*/, 8];
                    case "MissingAuthenticationToken": return [3 /*break*/, 10];
                    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken": return [3 /*break*/, 10];
                    case "OptInRequiredException": return [3 /*break*/, 12];
                    case "com.amazonaws.computeoptimizer#OptInRequiredException": return [3 /*break*/, 12];
                    case "ServiceUnavailableException": return [3 /*break*/, 14];
                    case "com.amazonaws.computeoptimizer#ServiceUnavailableException": return [3 /*break*/, 14];
                    case "ThrottlingException": return [3 /*break*/, 16];
                    case "com.amazonaws.computeoptimizer#ThrottlingException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OptInRequiredExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0ExportEBSVolumeRecommendationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0ExportEBSVolumeRecommendationsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0ExportEBSVolumeRecommendationsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0ExportEBSVolumeRecommendationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.computeoptimizer#AccessDeniedException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.computeoptimizer#InternalServerException": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.computeoptimizer#InvalidParameterValueException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.computeoptimizer#LimitExceededException": return [3 /*break*/, 8];
                    case "MissingAuthenticationToken": return [3 /*break*/, 10];
                    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken": return [3 /*break*/, 10];
                    case "OptInRequiredException": return [3 /*break*/, 12];
                    case "com.amazonaws.computeoptimizer#OptInRequiredException": return [3 /*break*/, 12];
                    case "ServiceUnavailableException": return [3 /*break*/, 14];
                    case "com.amazonaws.computeoptimizer#ServiceUnavailableException": return [3 /*break*/, 14];
                    case "ThrottlingException": return [3 /*break*/, 16];
                    case "com.amazonaws.computeoptimizer#ThrottlingException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OptInRequiredExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0ExportEC2InstanceRecommendationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0ExportEC2InstanceRecommendationsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0ExportEC2InstanceRecommendationsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0ExportEC2InstanceRecommendationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.computeoptimizer#AccessDeniedException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.computeoptimizer#InternalServerException": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.computeoptimizer#InvalidParameterValueException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.computeoptimizer#LimitExceededException": return [3 /*break*/, 8];
                    case "MissingAuthenticationToken": return [3 /*break*/, 10];
                    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken": return [3 /*break*/, 10];
                    case "OptInRequiredException": return [3 /*break*/, 12];
                    case "com.amazonaws.computeoptimizer#OptInRequiredException": return [3 /*break*/, 12];
                    case "ServiceUnavailableException": return [3 /*break*/, 14];
                    case "com.amazonaws.computeoptimizer#ServiceUnavailableException": return [3 /*break*/, 14];
                    case "ThrottlingException": return [3 /*break*/, 16];
                    case "com.amazonaws.computeoptimizer#ThrottlingException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OptInRequiredExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0ExportLambdaFunctionRecommendationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0ExportLambdaFunctionRecommendationsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0ExportLambdaFunctionRecommendationsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0ExportLambdaFunctionRecommendationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.computeoptimizer#AccessDeniedException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.computeoptimizer#InternalServerException": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.computeoptimizer#InvalidParameterValueException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.computeoptimizer#LimitExceededException": return [3 /*break*/, 8];
                    case "MissingAuthenticationToken": return [3 /*break*/, 10];
                    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken": return [3 /*break*/, 10];
                    case "OptInRequiredException": return [3 /*break*/, 12];
                    case "com.amazonaws.computeoptimizer#OptInRequiredException": return [3 /*break*/, 12];
                    case "ServiceUnavailableException": return [3 /*break*/, 14];
                    case "com.amazonaws.computeoptimizer#ServiceUnavailableException": return [3 /*break*/, 14];
                    case "ThrottlingException": return [3 /*break*/, 16];
                    case "com.amazonaws.computeoptimizer#ThrottlingException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OptInRequiredExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0GetAutoScalingGroupRecommendationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0GetAutoScalingGroupRecommendationsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0GetAutoScalingGroupRecommendationsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0GetAutoScalingGroupRecommendationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.computeoptimizer#AccessDeniedException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.computeoptimizer#InternalServerException": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.computeoptimizer#InvalidParameterValueException": return [3 /*break*/, 6];
                    case "MissingAuthenticationToken": return [3 /*break*/, 8];
                    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken": return [3 /*break*/, 8];
                    case "OptInRequiredException": return [3 /*break*/, 10];
                    case "com.amazonaws.computeoptimizer#OptInRequiredException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.computeoptimizer#ResourceNotFoundException": return [3 /*break*/, 12];
                    case "ServiceUnavailableException": return [3 /*break*/, 14];
                    case "com.amazonaws.computeoptimizer#ServiceUnavailableException": return [3 /*break*/, 14];
                    case "ThrottlingException": return [3 /*break*/, 16];
                    case "com.amazonaws.computeoptimizer#ThrottlingException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OptInRequiredExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0GetEBSVolumeRecommendationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0GetEBSVolumeRecommendationsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0GetEBSVolumeRecommendationsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0GetEBSVolumeRecommendationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.computeoptimizer#AccessDeniedException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.computeoptimizer#InternalServerException": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.computeoptimizer#InvalidParameterValueException": return [3 /*break*/, 6];
                    case "MissingAuthenticationToken": return [3 /*break*/, 8];
                    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken": return [3 /*break*/, 8];
                    case "OptInRequiredException": return [3 /*break*/, 10];
                    case "com.amazonaws.computeoptimizer#OptInRequiredException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.computeoptimizer#ResourceNotFoundException": return [3 /*break*/, 12];
                    case "ServiceUnavailableException": return [3 /*break*/, 14];
                    case "com.amazonaws.computeoptimizer#ServiceUnavailableException": return [3 /*break*/, 14];
                    case "ThrottlingException": return [3 /*break*/, 16];
                    case "com.amazonaws.computeoptimizer#ThrottlingException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OptInRequiredExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0GetEC2InstanceRecommendationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0GetEC2InstanceRecommendationsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0GetEC2InstanceRecommendationsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0GetEC2InstanceRecommendationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.computeoptimizer#AccessDeniedException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.computeoptimizer#InternalServerException": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.computeoptimizer#InvalidParameterValueException": return [3 /*break*/, 6];
                    case "MissingAuthenticationToken": return [3 /*break*/, 8];
                    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken": return [3 /*break*/, 8];
                    case "OptInRequiredException": return [3 /*break*/, 10];
                    case "com.amazonaws.computeoptimizer#OptInRequiredException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.computeoptimizer#ResourceNotFoundException": return [3 /*break*/, 12];
                    case "ServiceUnavailableException": return [3 /*break*/, 14];
                    case "com.amazonaws.computeoptimizer#ServiceUnavailableException": return [3 /*break*/, 14];
                    case "ThrottlingException": return [3 /*break*/, 16];
                    case "com.amazonaws.computeoptimizer#ThrottlingException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OptInRequiredExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0GetEC2RecommendationProjectedMetricsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0GetEC2RecommendationProjectedMetricsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0GetEC2RecommendationProjectedMetricsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0GetEC2RecommendationProjectedMetricsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.computeoptimizer#AccessDeniedException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.computeoptimizer#InternalServerException": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.computeoptimizer#InvalidParameterValueException": return [3 /*break*/, 6];
                    case "MissingAuthenticationToken": return [3 /*break*/, 8];
                    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken": return [3 /*break*/, 8];
                    case "OptInRequiredException": return [3 /*break*/, 10];
                    case "com.amazonaws.computeoptimizer#OptInRequiredException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.computeoptimizer#ResourceNotFoundException": return [3 /*break*/, 12];
                    case "ServiceUnavailableException": return [3 /*break*/, 14];
                    case "com.amazonaws.computeoptimizer#ServiceUnavailableException": return [3 /*break*/, 14];
                    case "ThrottlingException": return [3 /*break*/, 16];
                    case "com.amazonaws.computeoptimizer#ThrottlingException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OptInRequiredExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0GetEnrollmentStatusCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0GetEnrollmentStatusCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0GetEnrollmentStatusResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0GetEnrollmentStatusCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.computeoptimizer#AccessDeniedException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.computeoptimizer#InternalServerException": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.computeoptimizer#InvalidParameterValueException": return [3 /*break*/, 6];
                    case "MissingAuthenticationToken": return [3 /*break*/, 8];
                    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.computeoptimizer#ServiceUnavailableException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.computeoptimizer#ThrottlingException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0GetLambdaFunctionRecommendationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0GetLambdaFunctionRecommendationsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0GetLambdaFunctionRecommendationsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0GetLambdaFunctionRecommendationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.computeoptimizer#AccessDeniedException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.computeoptimizer#InternalServerException": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.computeoptimizer#InvalidParameterValueException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.computeoptimizer#LimitExceededException": return [3 /*break*/, 8];
                    case "MissingAuthenticationToken": return [3 /*break*/, 10];
                    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken": return [3 /*break*/, 10];
                    case "OptInRequiredException": return [3 /*break*/, 12];
                    case "com.amazonaws.computeoptimizer#OptInRequiredException": return [3 /*break*/, 12];
                    case "ServiceUnavailableException": return [3 /*break*/, 14];
                    case "com.amazonaws.computeoptimizer#ServiceUnavailableException": return [3 /*break*/, 14];
                    case "ThrottlingException": return [3 /*break*/, 16];
                    case "com.amazonaws.computeoptimizer#ThrottlingException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OptInRequiredExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0GetRecommendationSummariesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0GetRecommendationSummariesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0GetRecommendationSummariesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0GetRecommendationSummariesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.computeoptimizer#AccessDeniedException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.computeoptimizer#InternalServerException": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.computeoptimizer#InvalidParameterValueException": return [3 /*break*/, 6];
                    case "MissingAuthenticationToken": return [3 /*break*/, 8];
                    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken": return [3 /*break*/, 8];
                    case "OptInRequiredException": return [3 /*break*/, 10];
                    case "com.amazonaws.computeoptimizer#OptInRequiredException": return [3 /*break*/, 10];
                    case "ServiceUnavailableException": return [3 /*break*/, 12];
                    case "com.amazonaws.computeoptimizer#ServiceUnavailableException": return [3 /*break*/, 12];
                    case "ThrottlingException": return [3 /*break*/, 14];
                    case "com.amazonaws.computeoptimizer#ThrottlingException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OptInRequiredExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0UpdateEnrollmentStatusCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0UpdateEnrollmentStatusCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0UpdateEnrollmentStatusResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0UpdateEnrollmentStatusCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.computeoptimizer#AccessDeniedException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.computeoptimizer#InternalServerException": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.computeoptimizer#InvalidParameterValueException": return [3 /*break*/, 6];
                    case "MissingAuthenticationToken": return [3 /*break*/, 8];
                    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.computeoptimizer#ServiceUnavailableException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.computeoptimizer#ThrottlingException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)];
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
var deserializeAws_json1_0AccessDeniedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0AccessDeniedException(body, context);
        contents = __assign({ name: "AccessDeniedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0InternalServerExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0InternalServerException(body, context);
        contents = __assign({ name: "InternalServerException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0InvalidParameterValueExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0InvalidParameterValueException(body, context);
        contents = __assign({ name: "InvalidParameterValueException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0LimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0LimitExceededException(body, context);
        contents = __assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0MissingAuthenticationTokenResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0MissingAuthenticationToken(body, context);
        contents = __assign({ name: "MissingAuthenticationToken", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0OptInRequiredExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0OptInRequiredException(body, context);
        contents = __assign({ name: "OptInRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0ResourceNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0ResourceNotFoundException(body, context);
        contents = __assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0ServiceUnavailableExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0ServiceUnavailableException(body, context);
        contents = __assign({ name: "ServiceUnavailableException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0ThrottlingExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0ThrottlingException(body, context);
        contents = __assign({ name: "ThrottlingException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_json1_0AccountIds = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_0AutoScalingGroupArns = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_0DescribeRecommendationExportJobsRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.filters !== undefined &&
        input.filters !== null && { filters: serializeAws_json1_0JobFilters(input.filters, context) })), (input.jobIds !== undefined &&
        input.jobIds !== null && { jobIds: serializeAws_json1_0JobIds(input.jobIds, context) })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }));
};
var serializeAws_json1_0EBSFilter = function (input, context) {
    return __assign(__assign({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.values !== undefined &&
        input.values !== null && { values: serializeAws_json1_0FilterValues(input.values, context) }));
};
var serializeAws_json1_0EBSFilters = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0EBSFilter(entry, context);
    });
};
var serializeAws_json1_0ExportableAutoScalingGroupFields = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_0ExportableInstanceFields = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_0ExportableLambdaFunctionFields = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_0ExportableVolumeFields = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_0ExportAutoScalingGroupRecommendationsRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.accountIds !== undefined &&
        input.accountIds !== null && { accountIds: serializeAws_json1_0AccountIds(input.accountIds, context) })), (input.fieldsToExport !== undefined &&
        input.fieldsToExport !== null && {
        fieldsToExport: serializeAws_json1_0ExportableAutoScalingGroupFields(input.fieldsToExport, context),
    })), (input.fileFormat !== undefined && input.fileFormat !== null && { fileFormat: input.fileFormat })), (input.filters !== undefined &&
        input.filters !== null && { filters: serializeAws_json1_0Filters(input.filters, context) })), (input.includeMemberAccounts !== undefined &&
        input.includeMemberAccounts !== null && { includeMemberAccounts: input.includeMemberAccounts })), (input.s3DestinationConfig !== undefined &&
        input.s3DestinationConfig !== null && {
        s3DestinationConfig: serializeAws_json1_0S3DestinationConfig(input.s3DestinationConfig, context),
    }));
};
var serializeAws_json1_0ExportEBSVolumeRecommendationsRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.accountIds !== undefined &&
        input.accountIds !== null && { accountIds: serializeAws_json1_0AccountIds(input.accountIds, context) })), (input.fieldsToExport !== undefined &&
        input.fieldsToExport !== null && {
        fieldsToExport: serializeAws_json1_0ExportableVolumeFields(input.fieldsToExport, context),
    })), (input.fileFormat !== undefined && input.fileFormat !== null && { fileFormat: input.fileFormat })), (input.filters !== undefined &&
        input.filters !== null && { filters: serializeAws_json1_0EBSFilters(input.filters, context) })), (input.includeMemberAccounts !== undefined &&
        input.includeMemberAccounts !== null && { includeMemberAccounts: input.includeMemberAccounts })), (input.s3DestinationConfig !== undefined &&
        input.s3DestinationConfig !== null && {
        s3DestinationConfig: serializeAws_json1_0S3DestinationConfig(input.s3DestinationConfig, context),
    }));
};
var serializeAws_json1_0ExportEC2InstanceRecommendationsRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.accountIds !== undefined &&
        input.accountIds !== null && { accountIds: serializeAws_json1_0AccountIds(input.accountIds, context) })), (input.fieldsToExport !== undefined &&
        input.fieldsToExport !== null && {
        fieldsToExport: serializeAws_json1_0ExportableInstanceFields(input.fieldsToExport, context),
    })), (input.fileFormat !== undefined && input.fileFormat !== null && { fileFormat: input.fileFormat })), (input.filters !== undefined &&
        input.filters !== null && { filters: serializeAws_json1_0Filters(input.filters, context) })), (input.includeMemberAccounts !== undefined &&
        input.includeMemberAccounts !== null && { includeMemberAccounts: input.includeMemberAccounts })), (input.s3DestinationConfig !== undefined &&
        input.s3DestinationConfig !== null && {
        s3DestinationConfig: serializeAws_json1_0S3DestinationConfig(input.s3DestinationConfig, context),
    }));
};
var serializeAws_json1_0ExportLambdaFunctionRecommendationsRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.accountIds !== undefined &&
        input.accountIds !== null && { accountIds: serializeAws_json1_0AccountIds(input.accountIds, context) })), (input.fieldsToExport !== undefined &&
        input.fieldsToExport !== null && {
        fieldsToExport: serializeAws_json1_0ExportableLambdaFunctionFields(input.fieldsToExport, context),
    })), (input.fileFormat !== undefined && input.fileFormat !== null && { fileFormat: input.fileFormat })), (input.filters !== undefined &&
        input.filters !== null && {
        filters: serializeAws_json1_0LambdaFunctionRecommendationFilters(input.filters, context),
    })), (input.includeMemberAccounts !== undefined &&
        input.includeMemberAccounts !== null && { includeMemberAccounts: input.includeMemberAccounts })), (input.s3DestinationConfig !== undefined &&
        input.s3DestinationConfig !== null && {
        s3DestinationConfig: serializeAws_json1_0S3DestinationConfig(input.s3DestinationConfig, context),
    }));
};
var serializeAws_json1_0Filter = function (input, context) {
    return __assign(__assign({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.values !== undefined &&
        input.values !== null && { values: serializeAws_json1_0FilterValues(input.values, context) }));
};
var serializeAws_json1_0Filters = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0Filter(entry, context);
    });
};
var serializeAws_json1_0FilterValues = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_0FunctionArns = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_0GetAutoScalingGroupRecommendationsRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.accountIds !== undefined &&
        input.accountIds !== null && { accountIds: serializeAws_json1_0AccountIds(input.accountIds, context) })), (input.autoScalingGroupArns !== undefined &&
        input.autoScalingGroupArns !== null && {
        autoScalingGroupArns: serializeAws_json1_0AutoScalingGroupArns(input.autoScalingGroupArns, context),
    })), (input.filters !== undefined &&
        input.filters !== null && { filters: serializeAws_json1_0Filters(input.filters, context) })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }));
};
var serializeAws_json1_0GetEBSVolumeRecommendationsRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.accountIds !== undefined &&
        input.accountIds !== null && { accountIds: serializeAws_json1_0AccountIds(input.accountIds, context) })), (input.filters !== undefined &&
        input.filters !== null && { filters: serializeAws_json1_0EBSFilters(input.filters, context) })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.volumeArns !== undefined &&
        input.volumeArns !== null && { volumeArns: serializeAws_json1_0VolumeArns(input.volumeArns, context) }));
};
var serializeAws_json1_0GetEC2InstanceRecommendationsRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.accountIds !== undefined &&
        input.accountIds !== null && { accountIds: serializeAws_json1_0AccountIds(input.accountIds, context) })), (input.filters !== undefined &&
        input.filters !== null && { filters: serializeAws_json1_0Filters(input.filters, context) })), (input.instanceArns !== undefined &&
        input.instanceArns !== null && { instanceArns: serializeAws_json1_0InstanceArns(input.instanceArns, context) })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }));
};
var serializeAws_json1_0GetEC2RecommendationProjectedMetricsRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.endTime !== undefined &&
        input.endTime !== null && { endTime: Math.round(input.endTime.getTime() / 1000) })), (input.instanceArn !== undefined && input.instanceArn !== null && { instanceArn: input.instanceArn })), (input.period !== undefined && input.period !== null && { period: input.period })), (input.startTime !== undefined &&
        input.startTime !== null && { startTime: Math.round(input.startTime.getTime() / 1000) })), (input.stat !== undefined && input.stat !== null && { stat: input.stat }));
};
var serializeAws_json1_0GetEnrollmentStatusRequest = function (input, context) {
    return {};
};
var serializeAws_json1_0GetLambdaFunctionRecommendationsRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.accountIds !== undefined &&
        input.accountIds !== null && { accountIds: serializeAws_json1_0AccountIds(input.accountIds, context) })), (input.filters !== undefined &&
        input.filters !== null && {
        filters: serializeAws_json1_0LambdaFunctionRecommendationFilters(input.filters, context),
    })), (input.functionArns !== undefined &&
        input.functionArns !== null && { functionArns: serializeAws_json1_0FunctionArns(input.functionArns, context) })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }));
};
var serializeAws_json1_0GetRecommendationSummariesRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.accountIds !== undefined &&
        input.accountIds !== null && { accountIds: serializeAws_json1_0AccountIds(input.accountIds, context) })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }));
};
var serializeAws_json1_0InstanceArns = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_0JobFilter = function (input, context) {
    return __assign(__assign({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.values !== undefined &&
        input.values !== null && { values: serializeAws_json1_0FilterValues(input.values, context) }));
};
var serializeAws_json1_0JobFilters = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0JobFilter(entry, context);
    });
};
var serializeAws_json1_0JobIds = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_0LambdaFunctionRecommendationFilter = function (input, context) {
    return __assign(__assign({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.values !== undefined &&
        input.values !== null && { values: serializeAws_json1_0FilterValues(input.values, context) }));
};
var serializeAws_json1_0LambdaFunctionRecommendationFilters = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0LambdaFunctionRecommendationFilter(entry, context);
    });
};
var serializeAws_json1_0S3DestinationConfig = function (input, context) {
    return __assign(__assign({}, (input.bucket !== undefined && input.bucket !== null && { bucket: input.bucket })), (input.keyPrefix !== undefined && input.keyPrefix !== null && { keyPrefix: input.keyPrefix }));
};
var serializeAws_json1_0UpdateEnrollmentStatusRequest = function (input, context) {
    return __assign(__assign({}, (input.includeMemberAccounts !== undefined &&
        input.includeMemberAccounts !== null && { includeMemberAccounts: input.includeMemberAccounts })), (input.status !== undefined && input.status !== null && { status: input.status }));
};
var serializeAws_json1_0VolumeArns = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_0AccessDeniedException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0AutoScalingGroupConfiguration = function (output, context) {
    return {
        desiredCapacity: output.desiredCapacity !== undefined && output.desiredCapacity !== null ? output.desiredCapacity : undefined,
        instanceType: output.instanceType !== undefined && output.instanceType !== null ? output.instanceType : undefined,
        maxSize: output.maxSize !== undefined && output.maxSize !== null ? output.maxSize : undefined,
        minSize: output.minSize !== undefined && output.minSize !== null ? output.minSize : undefined,
    };
};
var deserializeAws_json1_0AutoScalingGroupRecommendation = function (output, context) {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        autoScalingGroupArn: output.autoScalingGroupArn !== undefined && output.autoScalingGroupArn !== null
            ? output.autoScalingGroupArn
            : undefined,
        autoScalingGroupName: output.autoScalingGroupName !== undefined && output.autoScalingGroupName !== null
            ? output.autoScalingGroupName
            : undefined,
        currentConfiguration: output.currentConfiguration !== undefined && output.currentConfiguration !== null
            ? deserializeAws_json1_0AutoScalingGroupConfiguration(output.currentConfiguration, context)
            : undefined,
        finding: output.finding !== undefined && output.finding !== null ? output.finding : undefined,
        lastRefreshTimestamp: output.lastRefreshTimestamp !== undefined && output.lastRefreshTimestamp !== null
            ? new Date(Math.round(output.lastRefreshTimestamp * 1000))
            : undefined,
        lookBackPeriodInDays: output.lookBackPeriodInDays !== undefined && output.lookBackPeriodInDays !== null
            ? output.lookBackPeriodInDays
            : undefined,
        recommendationOptions: output.recommendationOptions !== undefined && output.recommendationOptions !== null
            ? deserializeAws_json1_0AutoScalingGroupRecommendationOptions(output.recommendationOptions, context)
            : undefined,
        utilizationMetrics: output.utilizationMetrics !== undefined && output.utilizationMetrics !== null
            ? deserializeAws_json1_0UtilizationMetrics(output.utilizationMetrics, context)
            : undefined,
    };
};
var deserializeAws_json1_0AutoScalingGroupRecommendationOption = function (output, context) {
    return {
        configuration: output.configuration !== undefined && output.configuration !== null
            ? deserializeAws_json1_0AutoScalingGroupConfiguration(output.configuration, context)
            : undefined,
        performanceRisk: output.performanceRisk !== undefined && output.performanceRisk !== null ? output.performanceRisk : undefined,
        projectedUtilizationMetrics: output.projectedUtilizationMetrics !== undefined && output.projectedUtilizationMetrics !== null
            ? deserializeAws_json1_0ProjectedUtilizationMetrics(output.projectedUtilizationMetrics, context)
            : undefined,
        rank: output.rank !== undefined && output.rank !== null ? output.rank : undefined,
    };
};
var deserializeAws_json1_0AutoScalingGroupRecommendationOptions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0AutoScalingGroupRecommendationOption(entry, context);
    });
};
var deserializeAws_json1_0AutoScalingGroupRecommendations = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0AutoScalingGroupRecommendation(entry, context);
    });
};
var deserializeAws_json1_0DescribeRecommendationExportJobsResponse = function (output, context) {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        recommendationExportJobs: output.recommendationExportJobs !== undefined && output.recommendationExportJobs !== null
            ? deserializeAws_json1_0RecommendationExportJobs(output.recommendationExportJobs, context)
            : undefined,
    };
};
var deserializeAws_json1_0EBSUtilizationMetric = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        statistic: output.statistic !== undefined && output.statistic !== null ? output.statistic : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
var deserializeAws_json1_0EBSUtilizationMetrics = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0EBSUtilizationMetric(entry, context);
    });
};
var deserializeAws_json1_0ExportAutoScalingGroupRecommendationsResponse = function (output, context) {
    return {
        jobId: output.jobId !== undefined && output.jobId !== null ? output.jobId : undefined,
        s3Destination: output.s3Destination !== undefined && output.s3Destination !== null
            ? deserializeAws_json1_0S3Destination(output.s3Destination, context)
            : undefined,
    };
};
var deserializeAws_json1_0ExportDestination = function (output, context) {
    return {
        s3: output.s3 !== undefined && output.s3 !== null
            ? deserializeAws_json1_0S3Destination(output.s3, context)
            : undefined,
    };
};
var deserializeAws_json1_0ExportEBSVolumeRecommendationsResponse = function (output, context) {
    return {
        jobId: output.jobId !== undefined && output.jobId !== null ? output.jobId : undefined,
        s3Destination: output.s3Destination !== undefined && output.s3Destination !== null
            ? deserializeAws_json1_0S3Destination(output.s3Destination, context)
            : undefined,
    };
};
var deserializeAws_json1_0ExportEC2InstanceRecommendationsResponse = function (output, context) {
    return {
        jobId: output.jobId !== undefined && output.jobId !== null ? output.jobId : undefined,
        s3Destination: output.s3Destination !== undefined && output.s3Destination !== null
            ? deserializeAws_json1_0S3Destination(output.s3Destination, context)
            : undefined,
    };
};
var deserializeAws_json1_0ExportLambdaFunctionRecommendationsResponse = function (output, context) {
    return {
        jobId: output.jobId !== undefined && output.jobId !== null ? output.jobId : undefined,
        s3Destination: output.s3Destination !== undefined && output.s3Destination !== null
            ? deserializeAws_json1_0S3Destination(output.s3Destination, context)
            : undefined,
    };
};
var deserializeAws_json1_0GetAutoScalingGroupRecommendationsResponse = function (output, context) {
    return {
        autoScalingGroupRecommendations: output.autoScalingGroupRecommendations !== undefined && output.autoScalingGroupRecommendations !== null
            ? deserializeAws_json1_0AutoScalingGroupRecommendations(output.autoScalingGroupRecommendations, context)
            : undefined,
        errors: output.errors !== undefined && output.errors !== null
            ? deserializeAws_json1_0GetRecommendationErrors(output.errors, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_0GetEBSVolumeRecommendationsResponse = function (output, context) {
    return {
        errors: output.errors !== undefined && output.errors !== null
            ? deserializeAws_json1_0GetRecommendationErrors(output.errors, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        volumeRecommendations: output.volumeRecommendations !== undefined && output.volumeRecommendations !== null
            ? deserializeAws_json1_0VolumeRecommendations(output.volumeRecommendations, context)
            : undefined,
    };
};
var deserializeAws_json1_0GetEC2InstanceRecommendationsResponse = function (output, context) {
    return {
        errors: output.errors !== undefined && output.errors !== null
            ? deserializeAws_json1_0GetRecommendationErrors(output.errors, context)
            : undefined,
        instanceRecommendations: output.instanceRecommendations !== undefined && output.instanceRecommendations !== null
            ? deserializeAws_json1_0InstanceRecommendations(output.instanceRecommendations, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_0GetEC2RecommendationProjectedMetricsResponse = function (output, context) {
    return {
        recommendedOptionProjectedMetrics: output.recommendedOptionProjectedMetrics !== undefined && output.recommendedOptionProjectedMetrics !== null
            ? deserializeAws_json1_0RecommendedOptionProjectedMetrics(output.recommendedOptionProjectedMetrics, context)
            : undefined,
    };
};
var deserializeAws_json1_0GetEnrollmentStatusResponse = function (output, context) {
    return {
        memberAccountsEnrolled: output.memberAccountsEnrolled !== undefined && output.memberAccountsEnrolled !== null
            ? output.memberAccountsEnrolled
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        statusReason: output.statusReason !== undefined && output.statusReason !== null ? output.statusReason : undefined,
    };
};
var deserializeAws_json1_0GetLambdaFunctionRecommendationsResponse = function (output, context) {
    return {
        lambdaFunctionRecommendations: output.lambdaFunctionRecommendations !== undefined && output.lambdaFunctionRecommendations !== null
            ? deserializeAws_json1_0LambdaFunctionRecommendations(output.lambdaFunctionRecommendations, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_0GetRecommendationError = function (output, context) {
    return {
        code: output.code !== undefined && output.code !== null ? output.code : undefined,
        identifier: output.identifier !== undefined && output.identifier !== null ? output.identifier : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0GetRecommendationErrors = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0GetRecommendationError(entry, context);
    });
};
var deserializeAws_json1_0GetRecommendationSummariesResponse = function (output, context) {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        recommendationSummaries: output.recommendationSummaries !== undefined && output.recommendationSummaries !== null
            ? deserializeAws_json1_0RecommendationSummaries(output.recommendationSummaries, context)
            : undefined,
    };
};
var deserializeAws_json1_0InstanceRecommendation = function (output, context) {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        currentInstanceType: output.currentInstanceType !== undefined && output.currentInstanceType !== null
            ? output.currentInstanceType
            : undefined,
        finding: output.finding !== undefined && output.finding !== null ? output.finding : undefined,
        findingReasonCodes: output.findingReasonCodes !== undefined && output.findingReasonCodes !== null
            ? deserializeAws_json1_0InstanceRecommendationFindingReasonCodes(output.findingReasonCodes, context)
            : undefined,
        instanceArn: output.instanceArn !== undefined && output.instanceArn !== null ? output.instanceArn : undefined,
        instanceName: output.instanceName !== undefined && output.instanceName !== null ? output.instanceName : undefined,
        lastRefreshTimestamp: output.lastRefreshTimestamp !== undefined && output.lastRefreshTimestamp !== null
            ? new Date(Math.round(output.lastRefreshTimestamp * 1000))
            : undefined,
        lookBackPeriodInDays: output.lookBackPeriodInDays !== undefined && output.lookBackPeriodInDays !== null
            ? output.lookBackPeriodInDays
            : undefined,
        recommendationOptions: output.recommendationOptions !== undefined && output.recommendationOptions !== null
            ? deserializeAws_json1_0RecommendationOptions(output.recommendationOptions, context)
            : undefined,
        recommendationSources: output.recommendationSources !== undefined && output.recommendationSources !== null
            ? deserializeAws_json1_0RecommendationSources(output.recommendationSources, context)
            : undefined,
        utilizationMetrics: output.utilizationMetrics !== undefined && output.utilizationMetrics !== null
            ? deserializeAws_json1_0UtilizationMetrics(output.utilizationMetrics, context)
            : undefined,
    };
};
var deserializeAws_json1_0InstanceRecommendationFindingReasonCodes = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_0InstanceRecommendationOption = function (output, context) {
    return {
        instanceType: output.instanceType !== undefined && output.instanceType !== null ? output.instanceType : undefined,
        performanceRisk: output.performanceRisk !== undefined && output.performanceRisk !== null ? output.performanceRisk : undefined,
        platformDifferences: output.platformDifferences !== undefined && output.platformDifferences !== null
            ? deserializeAws_json1_0PlatformDifferences(output.platformDifferences, context)
            : undefined,
        projectedUtilizationMetrics: output.projectedUtilizationMetrics !== undefined && output.projectedUtilizationMetrics !== null
            ? deserializeAws_json1_0ProjectedUtilizationMetrics(output.projectedUtilizationMetrics, context)
            : undefined,
        rank: output.rank !== undefined && output.rank !== null ? output.rank : undefined,
    };
};
var deserializeAws_json1_0InstanceRecommendations = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0InstanceRecommendation(entry, context);
    });
};
var deserializeAws_json1_0InternalServerException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0InvalidParameterValueException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0LambdaFunctionMemoryProjectedMetric = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        statistic: output.statistic !== undefined && output.statistic !== null ? output.statistic : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
var deserializeAws_json1_0LambdaFunctionMemoryProjectedMetrics = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0LambdaFunctionMemoryProjectedMetric(entry, context);
    });
};
var deserializeAws_json1_0LambdaFunctionMemoryRecommendationOption = function (output, context) {
    return {
        memorySize: output.memorySize !== undefined && output.memorySize !== null ? output.memorySize : undefined,
        projectedUtilizationMetrics: output.projectedUtilizationMetrics !== undefined && output.projectedUtilizationMetrics !== null
            ? deserializeAws_json1_0LambdaFunctionMemoryProjectedMetrics(output.projectedUtilizationMetrics, context)
            : undefined,
        rank: output.rank !== undefined && output.rank !== null ? output.rank : undefined,
    };
};
var deserializeAws_json1_0LambdaFunctionMemoryRecommendationOptions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0LambdaFunctionMemoryRecommendationOption(entry, context);
    });
};
var deserializeAws_json1_0LambdaFunctionRecommendation = function (output, context) {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        currentMemorySize: output.currentMemorySize !== undefined && output.currentMemorySize !== null
            ? output.currentMemorySize
            : undefined,
        finding: output.finding !== undefined && output.finding !== null ? output.finding : undefined,
        findingReasonCodes: output.findingReasonCodes !== undefined && output.findingReasonCodes !== null
            ? deserializeAws_json1_0LambdaFunctionRecommendationFindingReasonCodes(output.findingReasonCodes, context)
            : undefined,
        functionArn: output.functionArn !== undefined && output.functionArn !== null ? output.functionArn : undefined,
        functionVersion: output.functionVersion !== undefined && output.functionVersion !== null ? output.functionVersion : undefined,
        lastRefreshTimestamp: output.lastRefreshTimestamp !== undefined && output.lastRefreshTimestamp !== null
            ? new Date(Math.round(output.lastRefreshTimestamp * 1000))
            : undefined,
        lookbackPeriodInDays: output.lookbackPeriodInDays !== undefined && output.lookbackPeriodInDays !== null
            ? output.lookbackPeriodInDays
            : undefined,
        memorySizeRecommendationOptions: output.memorySizeRecommendationOptions !== undefined && output.memorySizeRecommendationOptions !== null
            ? deserializeAws_json1_0LambdaFunctionMemoryRecommendationOptions(output.memorySizeRecommendationOptions, context)
            : undefined,
        numberOfInvocations: output.numberOfInvocations !== undefined && output.numberOfInvocations !== null
            ? output.numberOfInvocations
            : undefined,
        utilizationMetrics: output.utilizationMetrics !== undefined && output.utilizationMetrics !== null
            ? deserializeAws_json1_0LambdaFunctionUtilizationMetrics(output.utilizationMetrics, context)
            : undefined,
    };
};
var deserializeAws_json1_0LambdaFunctionRecommendationFindingReasonCodes = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_0LambdaFunctionRecommendations = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0LambdaFunctionRecommendation(entry, context);
    });
};
var deserializeAws_json1_0LambdaFunctionUtilizationMetric = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        statistic: output.statistic !== undefined && output.statistic !== null ? output.statistic : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
var deserializeAws_json1_0LambdaFunctionUtilizationMetrics = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0LambdaFunctionUtilizationMetric(entry, context);
    });
};
var deserializeAws_json1_0LimitExceededException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0MetricValues = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_0MissingAuthenticationToken = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0OptInRequiredException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0PlatformDifferences = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_0ProjectedMetric = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        timestamps: output.timestamps !== undefined && output.timestamps !== null
            ? deserializeAws_json1_0Timestamps(output.timestamps, context)
            : undefined,
        values: output.values !== undefined && output.values !== null
            ? deserializeAws_json1_0MetricValues(output.values, context)
            : undefined,
    };
};
var deserializeAws_json1_0ProjectedMetrics = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0ProjectedMetric(entry, context);
    });
};
var deserializeAws_json1_0ProjectedUtilizationMetrics = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0UtilizationMetric(entry, context);
    });
};
var deserializeAws_json1_0ReasonCodeSummaries = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0ReasonCodeSummary(entry, context);
    });
};
var deserializeAws_json1_0ReasonCodeSummary = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
var deserializeAws_json1_0RecommendationExportJob = function (output, context) {
    return {
        creationTimestamp: output.creationTimestamp !== undefined && output.creationTimestamp !== null
            ? new Date(Math.round(output.creationTimestamp * 1000))
            : undefined,
        destination: output.destination !== undefined && output.destination !== null
            ? deserializeAws_json1_0ExportDestination(output.destination, context)
            : undefined,
        failureReason: output.failureReason !== undefined && output.failureReason !== null ? output.failureReason : undefined,
        jobId: output.jobId !== undefined && output.jobId !== null ? output.jobId : undefined,
        lastUpdatedTimestamp: output.lastUpdatedTimestamp !== undefined && output.lastUpdatedTimestamp !== null
            ? new Date(Math.round(output.lastUpdatedTimestamp * 1000))
            : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
var deserializeAws_json1_0RecommendationExportJobs = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0RecommendationExportJob(entry, context);
    });
};
var deserializeAws_json1_0RecommendationOptions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0InstanceRecommendationOption(entry, context);
    });
};
var deserializeAws_json1_0RecommendationSource = function (output, context) {
    return {
        recommendationSourceArn: output.recommendationSourceArn !== undefined && output.recommendationSourceArn !== null
            ? output.recommendationSourceArn
            : undefined,
        recommendationSourceType: output.recommendationSourceType !== undefined && output.recommendationSourceType !== null
            ? output.recommendationSourceType
            : undefined,
    };
};
var deserializeAws_json1_0RecommendationSources = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0RecommendationSource(entry, context);
    });
};
var deserializeAws_json1_0RecommendationSummaries = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0RecommendationSummary(entry, context);
    });
};
var deserializeAws_json1_0RecommendationSummary = function (output, context) {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        recommendationResourceType: output.recommendationResourceType !== undefined && output.recommendationResourceType !== null
            ? output.recommendationResourceType
            : undefined,
        summaries: output.summaries !== undefined && output.summaries !== null
            ? deserializeAws_json1_0Summaries(output.summaries, context)
            : undefined,
    };
};
var deserializeAws_json1_0RecommendedOptionProjectedMetric = function (output, context) {
    return {
        projectedMetrics: output.projectedMetrics !== undefined && output.projectedMetrics !== null
            ? deserializeAws_json1_0ProjectedMetrics(output.projectedMetrics, context)
            : undefined,
        rank: output.rank !== undefined && output.rank !== null ? output.rank : undefined,
        recommendedInstanceType: output.recommendedInstanceType !== undefined && output.recommendedInstanceType !== null
            ? output.recommendedInstanceType
            : undefined,
    };
};
var deserializeAws_json1_0RecommendedOptionProjectedMetrics = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0RecommendedOptionProjectedMetric(entry, context);
    });
};
var deserializeAws_json1_0ResourceNotFoundException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0S3Destination = function (output, context) {
    return {
        bucket: output.bucket !== undefined && output.bucket !== null ? output.bucket : undefined,
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        metadataKey: output.metadataKey !== undefined && output.metadataKey !== null ? output.metadataKey : undefined,
    };
};
var deserializeAws_json1_0ServiceUnavailableException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0Summaries = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0Summary(entry, context);
    });
};
var deserializeAws_json1_0Summary = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        reasonCodeSummaries: output.reasonCodeSummaries !== undefined && output.reasonCodeSummaries !== null
            ? deserializeAws_json1_0ReasonCodeSummaries(output.reasonCodeSummaries, context)
            : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
var deserializeAws_json1_0ThrottlingException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0Timestamps = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return new Date(Math.round(entry * 1000));
    });
};
var deserializeAws_json1_0UpdateEnrollmentStatusResponse = function (output, context) {
    return {
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        statusReason: output.statusReason !== undefined && output.statusReason !== null ? output.statusReason : undefined,
    };
};
var deserializeAws_json1_0UtilizationMetric = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        statistic: output.statistic !== undefined && output.statistic !== null ? output.statistic : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
var deserializeAws_json1_0UtilizationMetrics = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0UtilizationMetric(entry, context);
    });
};
var deserializeAws_json1_0VolumeConfiguration = function (output, context) {
    return {
        volumeBaselineIOPS: output.volumeBaselineIOPS !== undefined && output.volumeBaselineIOPS !== null
            ? output.volumeBaselineIOPS
            : undefined,
        volumeBaselineThroughput: output.volumeBaselineThroughput !== undefined && output.volumeBaselineThroughput !== null
            ? output.volumeBaselineThroughput
            : undefined,
        volumeBurstIOPS: output.volumeBurstIOPS !== undefined && output.volumeBurstIOPS !== null ? output.volumeBurstIOPS : undefined,
        volumeBurstThroughput: output.volumeBurstThroughput !== undefined && output.volumeBurstThroughput !== null
            ? output.volumeBurstThroughput
            : undefined,
        volumeSize: output.volumeSize !== undefined && output.volumeSize !== null ? output.volumeSize : undefined,
        volumeType: output.volumeType !== undefined && output.volumeType !== null ? output.volumeType : undefined,
    };
};
var deserializeAws_json1_0VolumeRecommendation = function (output, context) {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        currentConfiguration: output.currentConfiguration !== undefined && output.currentConfiguration !== null
            ? deserializeAws_json1_0VolumeConfiguration(output.currentConfiguration, context)
            : undefined,
        finding: output.finding !== undefined && output.finding !== null ? output.finding : undefined,
        lastRefreshTimestamp: output.lastRefreshTimestamp !== undefined && output.lastRefreshTimestamp !== null
            ? new Date(Math.round(output.lastRefreshTimestamp * 1000))
            : undefined,
        lookBackPeriodInDays: output.lookBackPeriodInDays !== undefined && output.lookBackPeriodInDays !== null
            ? output.lookBackPeriodInDays
            : undefined,
        utilizationMetrics: output.utilizationMetrics !== undefined && output.utilizationMetrics !== null
            ? deserializeAws_json1_0EBSUtilizationMetrics(output.utilizationMetrics, context)
            : undefined,
        volumeArn: output.volumeArn !== undefined && output.volumeArn !== null ? output.volumeArn : undefined,
        volumeRecommendationOptions: output.volumeRecommendationOptions !== undefined && output.volumeRecommendationOptions !== null
            ? deserializeAws_json1_0VolumeRecommendationOptions(output.volumeRecommendationOptions, context)
            : undefined,
    };
};
var deserializeAws_json1_0VolumeRecommendationOption = function (output, context) {
    return {
        configuration: output.configuration !== undefined && output.configuration !== null
            ? deserializeAws_json1_0VolumeConfiguration(output.configuration, context)
            : undefined,
        performanceRisk: output.performanceRisk !== undefined && output.performanceRisk !== null ? output.performanceRisk : undefined,
        rank: output.rank !== undefined && output.rank !== null ? output.rank : undefined,
    };
};
var deserializeAws_json1_0VolumeRecommendationOptions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0VolumeRecommendationOption(entry, context);
    });
};
var deserializeAws_json1_0VolumeRecommendations = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0VolumeRecommendation(entry, context);
    });
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
//# sourceMappingURL=Aws_json1_0.js.map