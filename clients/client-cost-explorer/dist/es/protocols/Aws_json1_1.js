import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
export var serializeAws_json1_1CreateAnomalyMonitorCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSInsightsIndexService.CreateAnomalyMonitor",
        };
        body = JSON.stringify(serializeAws_json1_1CreateAnomalyMonitorRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateAnomalySubscriptionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSInsightsIndexService.CreateAnomalySubscription",
        };
        body = JSON.stringify(serializeAws_json1_1CreateAnomalySubscriptionRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateCostCategoryDefinitionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSInsightsIndexService.CreateCostCategoryDefinition",
        };
        body = JSON.stringify(serializeAws_json1_1CreateCostCategoryDefinitionRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteAnomalyMonitorCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSInsightsIndexService.DeleteAnomalyMonitor",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteAnomalyMonitorRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteAnomalySubscriptionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSInsightsIndexService.DeleteAnomalySubscription",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteAnomalySubscriptionRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteCostCategoryDefinitionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSInsightsIndexService.DeleteCostCategoryDefinition",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteCostCategoryDefinitionRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeCostCategoryDefinitionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSInsightsIndexService.DescribeCostCategoryDefinition",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeCostCategoryDefinitionRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetAnomaliesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSInsightsIndexService.GetAnomalies",
        };
        body = JSON.stringify(serializeAws_json1_1GetAnomaliesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetAnomalyMonitorsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSInsightsIndexService.GetAnomalyMonitors",
        };
        body = JSON.stringify(serializeAws_json1_1GetAnomalyMonitorsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetAnomalySubscriptionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSInsightsIndexService.GetAnomalySubscriptions",
        };
        body = JSON.stringify(serializeAws_json1_1GetAnomalySubscriptionsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetCostAndUsageCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSInsightsIndexService.GetCostAndUsage",
        };
        body = JSON.stringify(serializeAws_json1_1GetCostAndUsageRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetCostAndUsageWithResourcesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSInsightsIndexService.GetCostAndUsageWithResources",
        };
        body = JSON.stringify(serializeAws_json1_1GetCostAndUsageWithResourcesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetCostCategoriesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSInsightsIndexService.GetCostCategories",
        };
        body = JSON.stringify(serializeAws_json1_1GetCostCategoriesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetCostForecastCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSInsightsIndexService.GetCostForecast",
        };
        body = JSON.stringify(serializeAws_json1_1GetCostForecastRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetDimensionValuesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSInsightsIndexService.GetDimensionValues",
        };
        body = JSON.stringify(serializeAws_json1_1GetDimensionValuesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetReservationCoverageCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSInsightsIndexService.GetReservationCoverage",
        };
        body = JSON.stringify(serializeAws_json1_1GetReservationCoverageRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetReservationPurchaseRecommendationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSInsightsIndexService.GetReservationPurchaseRecommendation",
        };
        body = JSON.stringify(serializeAws_json1_1GetReservationPurchaseRecommendationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetReservationUtilizationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSInsightsIndexService.GetReservationUtilization",
        };
        body = JSON.stringify(serializeAws_json1_1GetReservationUtilizationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetRightsizingRecommendationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSInsightsIndexService.GetRightsizingRecommendation",
        };
        body = JSON.stringify(serializeAws_json1_1GetRightsizingRecommendationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetSavingsPlansCoverageCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSInsightsIndexService.GetSavingsPlansCoverage",
        };
        body = JSON.stringify(serializeAws_json1_1GetSavingsPlansCoverageRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSInsightsIndexService.GetSavingsPlansPurchaseRecommendation",
        };
        body = JSON.stringify(serializeAws_json1_1GetSavingsPlansPurchaseRecommendationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetSavingsPlansUtilizationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSInsightsIndexService.GetSavingsPlansUtilization",
        };
        body = JSON.stringify(serializeAws_json1_1GetSavingsPlansUtilizationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetSavingsPlansUtilizationDetailsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSInsightsIndexService.GetSavingsPlansUtilizationDetails",
        };
        body = JSON.stringify(serializeAws_json1_1GetSavingsPlansUtilizationDetailsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetTagsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSInsightsIndexService.GetTags",
        };
        body = JSON.stringify(serializeAws_json1_1GetTagsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetUsageForecastCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSInsightsIndexService.GetUsageForecast",
        };
        body = JSON.stringify(serializeAws_json1_1GetUsageForecastRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListCostCategoryDefinitionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSInsightsIndexService.ListCostCategoryDefinitions",
        };
        body = JSON.stringify(serializeAws_json1_1ListCostCategoryDefinitionsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ProvideAnomalyFeedbackCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSInsightsIndexService.ProvideAnomalyFeedback",
        };
        body = JSON.stringify(serializeAws_json1_1ProvideAnomalyFeedbackRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateAnomalyMonitorCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSInsightsIndexService.UpdateAnomalyMonitor",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateAnomalyMonitorRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateAnomalySubscriptionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSInsightsIndexService.UpdateAnomalySubscription",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateAnomalySubscriptionRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateCostCategoryDefinitionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSInsightsIndexService.UpdateCostCategoryDefinition",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateCostCategoryDefinitionRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_json1_1CreateAnomalyMonitorCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateAnomalyMonitorCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateAnomalyMonitorResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateAnomalyMonitorCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "LimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.costexplorer#LimitExceededException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateAnomalySubscriptionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateAnomalySubscriptionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateAnomalySubscriptionResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateAnomalySubscriptionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "LimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.costexplorer#LimitExceededException": return [3 /*break*/, 2];
                    case "UnknownMonitorException": return [3 /*break*/, 4];
                    case "com.amazonaws.costexplorer#UnknownMonitorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnknownMonitorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateCostCategoryDefinitionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateCostCategoryDefinitionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateCostCategoryDefinitionResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateCostCategoryDefinitionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "LimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.costexplorer#LimitExceededException": return [3 /*break*/, 2];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.costexplorer#ServiceQuotaExceededException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteAnomalyMonitorCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteAnomalyMonitorCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteAnomalyMonitorResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteAnomalyMonitorCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "LimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.costexplorer#LimitExceededException": return [3 /*break*/, 2];
                    case "UnknownMonitorException": return [3 /*break*/, 4];
                    case "com.amazonaws.costexplorer#UnknownMonitorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnknownMonitorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteAnomalySubscriptionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteAnomalySubscriptionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteAnomalySubscriptionResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteAnomalySubscriptionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "LimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.costexplorer#LimitExceededException": return [3 /*break*/, 2];
                    case "UnknownSubscriptionException": return [3 /*break*/, 4];
                    case "com.amazonaws.costexplorer#UnknownSubscriptionException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnknownSubscriptionExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteCostCategoryDefinitionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteCostCategoryDefinitionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteCostCategoryDefinitionResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteCostCategoryDefinitionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "LimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.costexplorer#LimitExceededException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.costexplorer#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeCostCategoryDefinitionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeCostCategoryDefinitionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeCostCategoryDefinitionResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeCostCategoryDefinitionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "LimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.costexplorer#LimitExceededException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.costexplorer#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetAnomaliesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetAnomaliesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetAnomaliesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetAnomaliesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidNextTokenException": return [3 /*break*/, 2];
                    case "com.amazonaws.costexplorer#InvalidNextTokenException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.costexplorer#LimitExceededException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetAnomalyMonitorsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetAnomalyMonitorsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetAnomalyMonitorsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetAnomalyMonitorsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidNextTokenException": return [3 /*break*/, 2];
                    case "com.amazonaws.costexplorer#InvalidNextTokenException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.costexplorer#LimitExceededException": return [3 /*break*/, 4];
                    case "UnknownMonitorException": return [3 /*break*/, 6];
                    case "com.amazonaws.costexplorer#UnknownMonitorException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnknownMonitorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetAnomalySubscriptionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetAnomalySubscriptionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetAnomalySubscriptionsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetAnomalySubscriptionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidNextTokenException": return [3 /*break*/, 2];
                    case "com.amazonaws.costexplorer#InvalidNextTokenException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.costexplorer#LimitExceededException": return [3 /*break*/, 4];
                    case "UnknownSubscriptionException": return [3 /*break*/, 6];
                    case "com.amazonaws.costexplorer#UnknownSubscriptionException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnknownSubscriptionExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetCostAndUsageCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetCostAndUsageCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetCostAndUsageResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetCostAndUsageCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BillExpirationException": return [3 /*break*/, 2];
                    case "com.amazonaws.costexplorer#BillExpirationException": return [3 /*break*/, 2];
                    case "DataUnavailableException": return [3 /*break*/, 4];
                    case "com.amazonaws.costexplorer#DataUnavailableException": return [3 /*break*/, 4];
                    case "InvalidNextTokenException": return [3 /*break*/, 6];
                    case "com.amazonaws.costexplorer#InvalidNextTokenException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.costexplorer#LimitExceededException": return [3 /*break*/, 8];
                    case "RequestChangedException": return [3 /*break*/, 10];
                    case "com.amazonaws.costexplorer#RequestChangedException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1BillExpirationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RequestChangedExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetCostAndUsageWithResourcesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetCostAndUsageWithResourcesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetCostAndUsageWithResourcesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetCostAndUsageWithResourcesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BillExpirationException": return [3 /*break*/, 2];
                    case "com.amazonaws.costexplorer#BillExpirationException": return [3 /*break*/, 2];
                    case "DataUnavailableException": return [3 /*break*/, 4];
                    case "com.amazonaws.costexplorer#DataUnavailableException": return [3 /*break*/, 4];
                    case "InvalidNextTokenException": return [3 /*break*/, 6];
                    case "com.amazonaws.costexplorer#InvalidNextTokenException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.costexplorer#LimitExceededException": return [3 /*break*/, 8];
                    case "RequestChangedException": return [3 /*break*/, 10];
                    case "com.amazonaws.costexplorer#RequestChangedException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1BillExpirationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RequestChangedExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetCostCategoriesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetCostCategoriesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetCostCategoriesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetCostCategoriesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BillExpirationException": return [3 /*break*/, 2];
                    case "com.amazonaws.costexplorer#BillExpirationException": return [3 /*break*/, 2];
                    case "DataUnavailableException": return [3 /*break*/, 4];
                    case "com.amazonaws.costexplorer#DataUnavailableException": return [3 /*break*/, 4];
                    case "InvalidNextTokenException": return [3 /*break*/, 6];
                    case "com.amazonaws.costexplorer#InvalidNextTokenException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.costexplorer#LimitExceededException": return [3 /*break*/, 8];
                    case "RequestChangedException": return [3 /*break*/, 10];
                    case "com.amazonaws.costexplorer#RequestChangedException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1BillExpirationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RequestChangedExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetCostForecastCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetCostForecastCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetCostForecastResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetCostForecastCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DataUnavailableException": return [3 /*break*/, 2];
                    case "com.amazonaws.costexplorer#DataUnavailableException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.costexplorer#LimitExceededException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetDimensionValuesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetDimensionValuesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetDimensionValuesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetDimensionValuesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BillExpirationException": return [3 /*break*/, 2];
                    case "com.amazonaws.costexplorer#BillExpirationException": return [3 /*break*/, 2];
                    case "DataUnavailableException": return [3 /*break*/, 4];
                    case "com.amazonaws.costexplorer#DataUnavailableException": return [3 /*break*/, 4];
                    case "InvalidNextTokenException": return [3 /*break*/, 6];
                    case "com.amazonaws.costexplorer#InvalidNextTokenException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.costexplorer#LimitExceededException": return [3 /*break*/, 8];
                    case "RequestChangedException": return [3 /*break*/, 10];
                    case "com.amazonaws.costexplorer#RequestChangedException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1BillExpirationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RequestChangedExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetReservationCoverageCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetReservationCoverageCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetReservationCoverageResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetReservationCoverageCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DataUnavailableException": return [3 /*break*/, 2];
                    case "com.amazonaws.costexplorer#DataUnavailableException": return [3 /*break*/, 2];
                    case "InvalidNextTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.costexplorer#InvalidNextTokenException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.costexplorer#LimitExceededException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetReservationPurchaseRecommendationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetReservationPurchaseRecommendationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetReservationPurchaseRecommendationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetReservationPurchaseRecommendationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DataUnavailableException": return [3 /*break*/, 2];
                    case "com.amazonaws.costexplorer#DataUnavailableException": return [3 /*break*/, 2];
                    case "InvalidNextTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.costexplorer#InvalidNextTokenException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.costexplorer#LimitExceededException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetReservationUtilizationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetReservationUtilizationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetReservationUtilizationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetReservationUtilizationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DataUnavailableException": return [3 /*break*/, 2];
                    case "com.amazonaws.costexplorer#DataUnavailableException": return [3 /*break*/, 2];
                    case "InvalidNextTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.costexplorer#InvalidNextTokenException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.costexplorer#LimitExceededException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetRightsizingRecommendationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetRightsizingRecommendationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetRightsizingRecommendationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetRightsizingRecommendationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidNextTokenException": return [3 /*break*/, 2];
                    case "com.amazonaws.costexplorer#InvalidNextTokenException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.costexplorer#LimitExceededException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetSavingsPlansCoverageCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetSavingsPlansCoverageCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetSavingsPlansCoverageResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetSavingsPlansCoverageCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DataUnavailableException": return [3 /*break*/, 2];
                    case "com.amazonaws.costexplorer#DataUnavailableException": return [3 /*break*/, 2];
                    case "InvalidNextTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.costexplorer#InvalidNextTokenException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.costexplorer#LimitExceededException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetSavingsPlansPurchaseRecommendationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidNextTokenException": return [3 /*break*/, 2];
                    case "com.amazonaws.costexplorer#InvalidNextTokenException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.costexplorer#LimitExceededException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetSavingsPlansUtilizationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetSavingsPlansUtilizationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetSavingsPlansUtilizationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetSavingsPlansUtilizationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DataUnavailableException": return [3 /*break*/, 2];
                    case "com.amazonaws.costexplorer#DataUnavailableException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.costexplorer#LimitExceededException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetSavingsPlansUtilizationDetailsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetSavingsPlansUtilizationDetailsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetSavingsPlansUtilizationDetailsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetSavingsPlansUtilizationDetailsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DataUnavailableException": return [3 /*break*/, 2];
                    case "com.amazonaws.costexplorer#DataUnavailableException": return [3 /*break*/, 2];
                    case "InvalidNextTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.costexplorer#InvalidNextTokenException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.costexplorer#LimitExceededException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetTagsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetTagsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetTagsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetTagsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BillExpirationException": return [3 /*break*/, 2];
                    case "com.amazonaws.costexplorer#BillExpirationException": return [3 /*break*/, 2];
                    case "DataUnavailableException": return [3 /*break*/, 4];
                    case "com.amazonaws.costexplorer#DataUnavailableException": return [3 /*break*/, 4];
                    case "InvalidNextTokenException": return [3 /*break*/, 6];
                    case "com.amazonaws.costexplorer#InvalidNextTokenException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.costexplorer#LimitExceededException": return [3 /*break*/, 8];
                    case "RequestChangedException": return [3 /*break*/, 10];
                    case "com.amazonaws.costexplorer#RequestChangedException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1BillExpirationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RequestChangedExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetUsageForecastCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetUsageForecastCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetUsageForecastResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetUsageForecastCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DataUnavailableException": return [3 /*break*/, 2];
                    case "com.amazonaws.costexplorer#DataUnavailableException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.costexplorer#LimitExceededException": return [3 /*break*/, 4];
                    case "UnresolvableUsageUnitException": return [3 /*break*/, 6];
                    case "com.amazonaws.costexplorer#UnresolvableUsageUnitException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnresolvableUsageUnitExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListCostCategoryDefinitionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListCostCategoryDefinitionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListCostCategoryDefinitionsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListCostCategoryDefinitionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "LimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.costexplorer#LimitExceededException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ProvideAnomalyFeedbackCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ProvideAnomalyFeedbackCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ProvideAnomalyFeedbackResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ProvideAnomalyFeedbackCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "LimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.costexplorer#LimitExceededException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateAnomalyMonitorCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateAnomalyMonitorCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateAnomalyMonitorResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateAnomalyMonitorCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "LimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.costexplorer#LimitExceededException": return [3 /*break*/, 2];
                    case "UnknownMonitorException": return [3 /*break*/, 4];
                    case "com.amazonaws.costexplorer#UnknownMonitorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnknownMonitorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateAnomalySubscriptionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateAnomalySubscriptionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateAnomalySubscriptionResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateAnomalySubscriptionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "LimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.costexplorer#LimitExceededException": return [3 /*break*/, 2];
                    case "UnknownMonitorException": return [3 /*break*/, 4];
                    case "com.amazonaws.costexplorer#UnknownMonitorException": return [3 /*break*/, 4];
                    case "UnknownSubscriptionException": return [3 /*break*/, 6];
                    case "com.amazonaws.costexplorer#UnknownSubscriptionException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnknownMonitorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnknownSubscriptionExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateCostCategoryDefinitionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateCostCategoryDefinitionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateCostCategoryDefinitionResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateCostCategoryDefinitionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "LimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.costexplorer#LimitExceededException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.costexplorer#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.costexplorer#ServiceQuotaExceededException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
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
var deserializeAws_json1_1BillExpirationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1BillExpirationException(body, context);
        contents = __assign({ name: "BillExpirationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1DataUnavailableExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1DataUnavailableException(body, context);
        contents = __assign({ name: "DataUnavailableException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidNextTokenExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidNextTokenException(body, context);
        contents = __assign({ name: "InvalidNextTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
var deserializeAws_json1_1RequestChangedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1RequestChangedException(body, context);
        contents = __assign({ name: "RequestChangedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
var deserializeAws_json1_1ServiceQuotaExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ServiceQuotaExceededException(body, context);
        contents = __assign({ name: "ServiceQuotaExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1UnknownMonitorExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1UnknownMonitorException(body, context);
        contents = __assign({ name: "UnknownMonitorException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1UnknownSubscriptionExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1UnknownSubscriptionException(body, context);
        contents = __assign({ name: "UnknownSubscriptionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1UnresolvableUsageUnitExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1UnresolvableUsageUnitException(body, context);
        contents = __assign({ name: "UnresolvableUsageUnitException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_json1_1AnomalyDateInterval = function (input, context) {
    return __assign(__assign({}, (input.EndDate !== undefined && input.EndDate !== null && { EndDate: input.EndDate })), (input.StartDate !== undefined && input.StartDate !== null && { StartDate: input.StartDate }));
};
var serializeAws_json1_1AnomalyMonitor = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.CreationDate !== undefined && input.CreationDate !== null && { CreationDate: input.CreationDate })), (input.DimensionalValueCount !== undefined &&
        input.DimensionalValueCount !== null && { DimensionalValueCount: input.DimensionalValueCount })), (input.LastEvaluatedDate !== undefined &&
        input.LastEvaluatedDate !== null && { LastEvaluatedDate: input.LastEvaluatedDate })), (input.LastUpdatedDate !== undefined &&
        input.LastUpdatedDate !== null && { LastUpdatedDate: input.LastUpdatedDate })), (input.MonitorArn !== undefined && input.MonitorArn !== null && { MonitorArn: input.MonitorArn })), (input.MonitorDimension !== undefined &&
        input.MonitorDimension !== null && { MonitorDimension: input.MonitorDimension })), (input.MonitorName !== undefined && input.MonitorName !== null && { MonitorName: input.MonitorName })), (input.MonitorSpecification !== undefined &&
        input.MonitorSpecification !== null && {
        MonitorSpecification: serializeAws_json1_1Expression(input.MonitorSpecification, context),
    })), (input.MonitorType !== undefined && input.MonitorType !== null && { MonitorType: input.MonitorType }));
};
var serializeAws_json1_1AnomalySubscription = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId })), (input.Frequency !== undefined && input.Frequency !== null && { Frequency: input.Frequency })), (input.MonitorArnList !== undefined &&
        input.MonitorArnList !== null && {
        MonitorArnList: serializeAws_json1_1MonitorArnList(input.MonitorArnList, context),
    })), (input.Subscribers !== undefined &&
        input.Subscribers !== null && { Subscribers: serializeAws_json1_1Subscribers(input.Subscribers, context) })), (input.SubscriptionArn !== undefined &&
        input.SubscriptionArn !== null && { SubscriptionArn: input.SubscriptionArn })), (input.SubscriptionName !== undefined &&
        input.SubscriptionName !== null && { SubscriptionName: input.SubscriptionName })), (input.Threshold !== undefined && input.Threshold !== null && { Threshold: input.Threshold }));
};
var serializeAws_json1_1CostCategoryInheritedValueDimension = function (input, context) {
    return __assign(__assign({}, (input.DimensionKey !== undefined && input.DimensionKey !== null && { DimensionKey: input.DimensionKey })), (input.DimensionName !== undefined && input.DimensionName !== null && { DimensionName: input.DimensionName }));
};
var serializeAws_json1_1CostCategoryRule = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.InheritedValue !== undefined &&
        input.InheritedValue !== null && {
        InheritedValue: serializeAws_json1_1CostCategoryInheritedValueDimension(input.InheritedValue, context),
    })), (input.Rule !== undefined &&
        input.Rule !== null && { Rule: serializeAws_json1_1Expression(input.Rule, context) })), (input.Type !== undefined && input.Type !== null && { Type: input.Type })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_json1_1CostCategoryRulesList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1CostCategoryRule(entry, context);
    });
};
var serializeAws_json1_1CostCategoryValues = function (input, context) {
    return __assign(__assign(__assign({}, (input.Key !== undefined && input.Key !== null && { Key: input.Key })), (input.MatchOptions !== undefined &&
        input.MatchOptions !== null && { MatchOptions: serializeAws_json1_1MatchOptions(input.MatchOptions, context) })), (input.Values !== undefined &&
        input.Values !== null && { Values: serializeAws_json1_1Values(input.Values, context) }));
};
var serializeAws_json1_1CreateAnomalyMonitorRequest = function (input, context) {
    return __assign({}, (input.AnomalyMonitor !== undefined &&
        input.AnomalyMonitor !== null && {
        AnomalyMonitor: serializeAws_json1_1AnomalyMonitor(input.AnomalyMonitor, context),
    }));
};
var serializeAws_json1_1CreateAnomalySubscriptionRequest = function (input, context) {
    return __assign({}, (input.AnomalySubscription !== undefined &&
        input.AnomalySubscription !== null && {
        AnomalySubscription: serializeAws_json1_1AnomalySubscription(input.AnomalySubscription, context),
    }));
};
var serializeAws_json1_1CreateCostCategoryDefinitionRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.DefaultValue !== undefined && input.DefaultValue !== null && { DefaultValue: input.DefaultValue })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.RuleVersion !== undefined && input.RuleVersion !== null && { RuleVersion: input.RuleVersion })), (input.Rules !== undefined &&
        input.Rules !== null && { Rules: serializeAws_json1_1CostCategoryRulesList(input.Rules, context) }));
};
var serializeAws_json1_1DateInterval = function (input, context) {
    return __assign(__assign({}, (input.End !== undefined && input.End !== null && { End: input.End })), (input.Start !== undefined && input.Start !== null && { Start: input.Start }));
};
var serializeAws_json1_1DeleteAnomalyMonitorRequest = function (input, context) {
    return __assign({}, (input.MonitorArn !== undefined && input.MonitorArn !== null && { MonitorArn: input.MonitorArn }));
};
var serializeAws_json1_1DeleteAnomalySubscriptionRequest = function (input, context) {
    return __assign({}, (input.SubscriptionArn !== undefined &&
        input.SubscriptionArn !== null && { SubscriptionArn: input.SubscriptionArn }));
};
var serializeAws_json1_1DeleteCostCategoryDefinitionRequest = function (input, context) {
    return __assign({}, (input.CostCategoryArn !== undefined &&
        input.CostCategoryArn !== null && { CostCategoryArn: input.CostCategoryArn }));
};
var serializeAws_json1_1DescribeCostCategoryDefinitionRequest = function (input, context) {
    return __assign(__assign({}, (input.CostCategoryArn !== undefined &&
        input.CostCategoryArn !== null && { CostCategoryArn: input.CostCategoryArn })), (input.EffectiveOn !== undefined && input.EffectiveOn !== null && { EffectiveOn: input.EffectiveOn }));
};
var serializeAws_json1_1DimensionValues = function (input, context) {
    return __assign(__assign(__assign({}, (input.Key !== undefined && input.Key !== null && { Key: input.Key })), (input.MatchOptions !== undefined &&
        input.MatchOptions !== null && { MatchOptions: serializeAws_json1_1MatchOptions(input.MatchOptions, context) })), (input.Values !== undefined &&
        input.Values !== null && { Values: serializeAws_json1_1Values(input.Values, context) }));
};
var serializeAws_json1_1EC2Specification = function (input, context) {
    return __assign({}, (input.OfferingClass !== undefined && input.OfferingClass !== null && { OfferingClass: input.OfferingClass }));
};
var serializeAws_json1_1Expression = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.And !== undefined && input.And !== null && { And: serializeAws_json1_1Expressions(input.And, context) })), (input.CostCategories !== undefined &&
        input.CostCategories !== null && {
        CostCategories: serializeAws_json1_1CostCategoryValues(input.CostCategories, context),
    })), (input.Dimensions !== undefined &&
        input.Dimensions !== null && { Dimensions: serializeAws_json1_1DimensionValues(input.Dimensions, context) })), (input.Not !== undefined && input.Not !== null && { Not: serializeAws_json1_1Expression(input.Not, context) })), (input.Or !== undefined && input.Or !== null && { Or: serializeAws_json1_1Expressions(input.Or, context) })), (input.Tags !== undefined &&
        input.Tags !== null && { Tags: serializeAws_json1_1TagValues(input.Tags, context) }));
};
var serializeAws_json1_1Expressions = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Expression(entry, context);
    });
};
var serializeAws_json1_1GetAnomaliesRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.DateInterval !== undefined &&
        input.DateInterval !== null && {
        DateInterval: serializeAws_json1_1AnomalyDateInterval(input.DateInterval, context),
    })), (input.Feedback !== undefined && input.Feedback !== null && { Feedback: input.Feedback })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.MonitorArn !== undefined && input.MonitorArn !== null && { MonitorArn: input.MonitorArn })), (input.NextPageToken !== undefined && input.NextPageToken !== null && { NextPageToken: input.NextPageToken })), (input.TotalImpact !== undefined &&
        input.TotalImpact !== null && { TotalImpact: serializeAws_json1_1TotalImpactFilter(input.TotalImpact, context) }));
};
var serializeAws_json1_1GetAnomalyMonitorsRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.MonitorArnList !== undefined &&
        input.MonitorArnList !== null && { MonitorArnList: serializeAws_json1_1Values(input.MonitorArnList, context) })), (input.NextPageToken !== undefined && input.NextPageToken !== null && { NextPageToken: input.NextPageToken }));
};
var serializeAws_json1_1GetAnomalySubscriptionsRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.MonitorArn !== undefined && input.MonitorArn !== null && { MonitorArn: input.MonitorArn })), (input.NextPageToken !== undefined && input.NextPageToken !== null && { NextPageToken: input.NextPageToken })), (input.SubscriptionArnList !== undefined &&
        input.SubscriptionArnList !== null && {
        SubscriptionArnList: serializeAws_json1_1Values(input.SubscriptionArnList, context),
    }));
};
var serializeAws_json1_1GetCostAndUsageRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.Filter !== undefined &&
        input.Filter !== null && { Filter: serializeAws_json1_1Expression(input.Filter, context) })), (input.Granularity !== undefined && input.Granularity !== null && { Granularity: input.Granularity })), (input.GroupBy !== undefined &&
        input.GroupBy !== null && { GroupBy: serializeAws_json1_1GroupDefinitions(input.GroupBy, context) })), (input.Metrics !== undefined &&
        input.Metrics !== null && { Metrics: serializeAws_json1_1MetricNames(input.Metrics, context) })), (input.NextPageToken !== undefined && input.NextPageToken !== null && { NextPageToken: input.NextPageToken })), (input.TimePeriod !== undefined &&
        input.TimePeriod !== null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }));
};
var serializeAws_json1_1GetCostAndUsageWithResourcesRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.Filter !== undefined &&
        input.Filter !== null && { Filter: serializeAws_json1_1Expression(input.Filter, context) })), (input.Granularity !== undefined && input.Granularity !== null && { Granularity: input.Granularity })), (input.GroupBy !== undefined &&
        input.GroupBy !== null && { GroupBy: serializeAws_json1_1GroupDefinitions(input.GroupBy, context) })), (input.Metrics !== undefined &&
        input.Metrics !== null && { Metrics: serializeAws_json1_1MetricNames(input.Metrics, context) })), (input.NextPageToken !== undefined && input.NextPageToken !== null && { NextPageToken: input.NextPageToken })), (input.TimePeriod !== undefined &&
        input.TimePeriod !== null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }));
};
var serializeAws_json1_1GetCostCategoriesRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.CostCategoryName !== undefined &&
        input.CostCategoryName !== null && { CostCategoryName: input.CostCategoryName })), (input.Filter !== undefined &&
        input.Filter !== null && { Filter: serializeAws_json1_1Expression(input.Filter, context) })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextPageToken !== undefined && input.NextPageToken !== null && { NextPageToken: input.NextPageToken })), (input.SearchString !== undefined && input.SearchString !== null && { SearchString: input.SearchString })), (input.SortBy !== undefined &&
        input.SortBy !== null && { SortBy: serializeAws_json1_1SortDefinitions(input.SortBy, context) })), (input.TimePeriod !== undefined &&
        input.TimePeriod !== null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }));
};
var serializeAws_json1_1GetCostForecastRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.Filter !== undefined &&
        input.Filter !== null && { Filter: serializeAws_json1_1Expression(input.Filter, context) })), (input.Granularity !== undefined && input.Granularity !== null && { Granularity: input.Granularity })), (input.Metric !== undefined && input.Metric !== null && { Metric: input.Metric })), (input.PredictionIntervalLevel !== undefined &&
        input.PredictionIntervalLevel !== null && { PredictionIntervalLevel: input.PredictionIntervalLevel })), (input.TimePeriod !== undefined &&
        input.TimePeriod !== null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }));
};
var serializeAws_json1_1GetDimensionValuesRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Context !== undefined && input.Context !== null && { Context: input.Context })), (input.Dimension !== undefined && input.Dimension !== null && { Dimension: input.Dimension })), (input.Filter !== undefined &&
        input.Filter !== null && { Filter: serializeAws_json1_1Expression(input.Filter, context) })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextPageToken !== undefined && input.NextPageToken !== null && { NextPageToken: input.NextPageToken })), (input.SearchString !== undefined && input.SearchString !== null && { SearchString: input.SearchString })), (input.SortBy !== undefined &&
        input.SortBy !== null && { SortBy: serializeAws_json1_1SortDefinitions(input.SortBy, context) })), (input.TimePeriod !== undefined &&
        input.TimePeriod !== null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }));
};
var serializeAws_json1_1GetReservationCoverageRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Filter !== undefined &&
        input.Filter !== null && { Filter: serializeAws_json1_1Expression(input.Filter, context) })), (input.Granularity !== undefined && input.Granularity !== null && { Granularity: input.Granularity })), (input.GroupBy !== undefined &&
        input.GroupBy !== null && { GroupBy: serializeAws_json1_1GroupDefinitions(input.GroupBy, context) })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.Metrics !== undefined &&
        input.Metrics !== null && { Metrics: serializeAws_json1_1MetricNames(input.Metrics, context) })), (input.NextPageToken !== undefined && input.NextPageToken !== null && { NextPageToken: input.NextPageToken })), (input.SortBy !== undefined &&
        input.SortBy !== null && { SortBy: serializeAws_json1_1SortDefinition(input.SortBy, context) })), (input.TimePeriod !== undefined &&
        input.TimePeriod !== null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }));
};
var serializeAws_json1_1GetReservationPurchaseRecommendationRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId })), (input.AccountScope !== undefined && input.AccountScope !== null && { AccountScope: input.AccountScope })), (input.Filter !== undefined &&
        input.Filter !== null && { Filter: serializeAws_json1_1Expression(input.Filter, context) })), (input.LookbackPeriodInDays !== undefined &&
        input.LookbackPeriodInDays !== null && { LookbackPeriodInDays: input.LookbackPeriodInDays })), (input.NextPageToken !== undefined && input.NextPageToken !== null && { NextPageToken: input.NextPageToken })), (input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize })), (input.PaymentOption !== undefined && input.PaymentOption !== null && { PaymentOption: input.PaymentOption })), (input.Service !== undefined && input.Service !== null && { Service: input.Service })), (input.ServiceSpecification !== undefined &&
        input.ServiceSpecification !== null && {
        ServiceSpecification: serializeAws_json1_1ServiceSpecification(input.ServiceSpecification, context),
    })), (input.TermInYears !== undefined && input.TermInYears !== null && { TermInYears: input.TermInYears }));
};
var serializeAws_json1_1GetReservationUtilizationRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Filter !== undefined &&
        input.Filter !== null && { Filter: serializeAws_json1_1Expression(input.Filter, context) })), (input.Granularity !== undefined && input.Granularity !== null && { Granularity: input.Granularity })), (input.GroupBy !== undefined &&
        input.GroupBy !== null && { GroupBy: serializeAws_json1_1GroupDefinitions(input.GroupBy, context) })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextPageToken !== undefined && input.NextPageToken !== null && { NextPageToken: input.NextPageToken })), (input.SortBy !== undefined &&
        input.SortBy !== null && { SortBy: serializeAws_json1_1SortDefinition(input.SortBy, context) })), (input.TimePeriod !== undefined &&
        input.TimePeriod !== null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }));
};
var serializeAws_json1_1GetRightsizingRecommendationRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.Configuration !== undefined &&
        input.Configuration !== null && {
        Configuration: serializeAws_json1_1RightsizingRecommendationConfiguration(input.Configuration, context),
    })), (input.Filter !== undefined &&
        input.Filter !== null && { Filter: serializeAws_json1_1Expression(input.Filter, context) })), (input.NextPageToken !== undefined && input.NextPageToken !== null && { NextPageToken: input.NextPageToken })), (input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize })), (input.Service !== undefined && input.Service !== null && { Service: input.Service }));
};
var serializeAws_json1_1GetSavingsPlansCoverageRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Filter !== undefined &&
        input.Filter !== null && { Filter: serializeAws_json1_1Expression(input.Filter, context) })), (input.Granularity !== undefined && input.Granularity !== null && { Granularity: input.Granularity })), (input.GroupBy !== undefined &&
        input.GroupBy !== null && { GroupBy: serializeAws_json1_1GroupDefinitions(input.GroupBy, context) })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.Metrics !== undefined &&
        input.Metrics !== null && { Metrics: serializeAws_json1_1MetricNames(input.Metrics, context) })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.SortBy !== undefined &&
        input.SortBy !== null && { SortBy: serializeAws_json1_1SortDefinition(input.SortBy, context) })), (input.TimePeriod !== undefined &&
        input.TimePeriod !== null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }));
};
var serializeAws_json1_1GetSavingsPlansPurchaseRecommendationRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AccountScope !== undefined && input.AccountScope !== null && { AccountScope: input.AccountScope })), (input.Filter !== undefined &&
        input.Filter !== null && { Filter: serializeAws_json1_1Expression(input.Filter, context) })), (input.LookbackPeriodInDays !== undefined &&
        input.LookbackPeriodInDays !== null && { LookbackPeriodInDays: input.LookbackPeriodInDays })), (input.NextPageToken !== undefined && input.NextPageToken !== null && { NextPageToken: input.NextPageToken })), (input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize })), (input.PaymentOption !== undefined && input.PaymentOption !== null && { PaymentOption: input.PaymentOption })), (input.SavingsPlansType !== undefined &&
        input.SavingsPlansType !== null && { SavingsPlansType: input.SavingsPlansType })), (input.TermInYears !== undefined && input.TermInYears !== null && { TermInYears: input.TermInYears }));
};
var serializeAws_json1_1GetSavingsPlansUtilizationDetailsRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.DataType !== undefined &&
        input.DataType !== null && { DataType: serializeAws_json1_1SavingsPlansDataTypes(input.DataType, context) })), (input.Filter !== undefined &&
        input.Filter !== null && { Filter: serializeAws_json1_1Expression(input.Filter, context) })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.SortBy !== undefined &&
        input.SortBy !== null && { SortBy: serializeAws_json1_1SortDefinition(input.SortBy, context) })), (input.TimePeriod !== undefined &&
        input.TimePeriod !== null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }));
};
var serializeAws_json1_1GetSavingsPlansUtilizationRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Filter !== undefined &&
        input.Filter !== null && { Filter: serializeAws_json1_1Expression(input.Filter, context) })), (input.Granularity !== undefined && input.Granularity !== null && { Granularity: input.Granularity })), (input.SortBy !== undefined &&
        input.SortBy !== null && { SortBy: serializeAws_json1_1SortDefinition(input.SortBy, context) })), (input.TimePeriod !== undefined &&
        input.TimePeriod !== null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }));
};
var serializeAws_json1_1GetTagsRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Filter !== undefined &&
        input.Filter !== null && { Filter: serializeAws_json1_1Expression(input.Filter, context) })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextPageToken !== undefined && input.NextPageToken !== null && { NextPageToken: input.NextPageToken })), (input.SearchString !== undefined && input.SearchString !== null && { SearchString: input.SearchString })), (input.SortBy !== undefined &&
        input.SortBy !== null && { SortBy: serializeAws_json1_1SortDefinitions(input.SortBy, context) })), (input.TagKey !== undefined && input.TagKey !== null && { TagKey: input.TagKey })), (input.TimePeriod !== undefined &&
        input.TimePeriod !== null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }));
};
var serializeAws_json1_1GetUsageForecastRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.Filter !== undefined &&
        input.Filter !== null && { Filter: serializeAws_json1_1Expression(input.Filter, context) })), (input.Granularity !== undefined && input.Granularity !== null && { Granularity: input.Granularity })), (input.Metric !== undefined && input.Metric !== null && { Metric: input.Metric })), (input.PredictionIntervalLevel !== undefined &&
        input.PredictionIntervalLevel !== null && { PredictionIntervalLevel: input.PredictionIntervalLevel })), (input.TimePeriod !== undefined &&
        input.TimePeriod !== null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }));
};
var serializeAws_json1_1GroupDefinition = function (input, context) {
    return __assign(__assign({}, (input.Key !== undefined && input.Key !== null && { Key: input.Key })), (input.Type !== undefined && input.Type !== null && { Type: input.Type }));
};
var serializeAws_json1_1GroupDefinitions = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1GroupDefinition(entry, context);
    });
};
var serializeAws_json1_1ListCostCategoryDefinitionsRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.EffectiveOn !== undefined && input.EffectiveOn !== null && { EffectiveOn: input.EffectiveOn })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1MatchOptions = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1MetricNames = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1MonitorArnList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ProvideAnomalyFeedbackRequest = function (input, context) {
    return __assign(__assign({}, (input.AnomalyId !== undefined && input.AnomalyId !== null && { AnomalyId: input.AnomalyId })), (input.Feedback !== undefined && input.Feedback !== null && { Feedback: input.Feedback }));
};
var serializeAws_json1_1RightsizingRecommendationConfiguration = function (input, context) {
    return __assign(__assign({}, (input.BenefitsConsidered !== undefined &&
        input.BenefitsConsidered !== null && { BenefitsConsidered: input.BenefitsConsidered })), (input.RecommendationTarget !== undefined &&
        input.RecommendationTarget !== null && { RecommendationTarget: input.RecommendationTarget }));
};
var serializeAws_json1_1SavingsPlansDataTypes = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ServiceSpecification = function (input, context) {
    return __assign({}, (input.EC2Specification !== undefined &&
        input.EC2Specification !== null && {
        EC2Specification: serializeAws_json1_1EC2Specification(input.EC2Specification, context),
    }));
};
var serializeAws_json1_1SortDefinition = function (input, context) {
    return __assign(__assign({}, (input.Key !== undefined && input.Key !== null && { Key: input.Key })), (input.SortOrder !== undefined && input.SortOrder !== null && { SortOrder: input.SortOrder }));
};
var serializeAws_json1_1SortDefinitions = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1SortDefinition(entry, context);
    });
};
var serializeAws_json1_1Subscriber = function (input, context) {
    return __assign(__assign(__assign({}, (input.Address !== undefined && input.Address !== null && { Address: input.Address })), (input.Status !== undefined && input.Status !== null && { Status: input.Status })), (input.Type !== undefined && input.Type !== null && { Type: input.Type }));
};
var serializeAws_json1_1Subscribers = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Subscriber(entry, context);
    });
};
var serializeAws_json1_1TagValues = function (input, context) {
    return __assign(__assign(__assign({}, (input.Key !== undefined && input.Key !== null && { Key: input.Key })), (input.MatchOptions !== undefined &&
        input.MatchOptions !== null && { MatchOptions: serializeAws_json1_1MatchOptions(input.MatchOptions, context) })), (input.Values !== undefined &&
        input.Values !== null && { Values: serializeAws_json1_1Values(input.Values, context) }));
};
var serializeAws_json1_1TotalImpactFilter = function (input, context) {
    return __assign(__assign(__assign({}, (input.EndValue !== undefined && input.EndValue !== null && { EndValue: input.EndValue })), (input.NumericOperator !== undefined &&
        input.NumericOperator !== null && { NumericOperator: input.NumericOperator })), (input.StartValue !== undefined && input.StartValue !== null && { StartValue: input.StartValue }));
};
var serializeAws_json1_1UpdateAnomalyMonitorRequest = function (input, context) {
    return __assign(__assign({}, (input.MonitorArn !== undefined && input.MonitorArn !== null && { MonitorArn: input.MonitorArn })), (input.MonitorName !== undefined && input.MonitorName !== null && { MonitorName: input.MonitorName }));
};
var serializeAws_json1_1UpdateAnomalySubscriptionRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.Frequency !== undefined && input.Frequency !== null && { Frequency: input.Frequency })), (input.MonitorArnList !== undefined &&
        input.MonitorArnList !== null && {
        MonitorArnList: serializeAws_json1_1MonitorArnList(input.MonitorArnList, context),
    })), (input.Subscribers !== undefined &&
        input.Subscribers !== null && { Subscribers: serializeAws_json1_1Subscribers(input.Subscribers, context) })), (input.SubscriptionArn !== undefined &&
        input.SubscriptionArn !== null && { SubscriptionArn: input.SubscriptionArn })), (input.SubscriptionName !== undefined &&
        input.SubscriptionName !== null && { SubscriptionName: input.SubscriptionName })), (input.Threshold !== undefined && input.Threshold !== null && { Threshold: input.Threshold }));
};
var serializeAws_json1_1UpdateCostCategoryDefinitionRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.CostCategoryArn !== undefined &&
        input.CostCategoryArn !== null && { CostCategoryArn: input.CostCategoryArn })), (input.DefaultValue !== undefined && input.DefaultValue !== null && { DefaultValue: input.DefaultValue })), (input.RuleVersion !== undefined && input.RuleVersion !== null && { RuleVersion: input.RuleVersion })), (input.Rules !== undefined &&
        input.Rules !== null && { Rules: serializeAws_json1_1CostCategoryRulesList(input.Rules, context) }));
};
var serializeAws_json1_1Values = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1Anomalies = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Anomaly(entry, context);
    });
};
var deserializeAws_json1_1Anomaly = function (output, context) {
    return {
        AnomalyEndDate: output.AnomalyEndDate !== undefined && output.AnomalyEndDate !== null ? output.AnomalyEndDate : undefined,
        AnomalyId: output.AnomalyId !== undefined && output.AnomalyId !== null ? output.AnomalyId : undefined,
        AnomalyScore: output.AnomalyScore !== undefined && output.AnomalyScore !== null
            ? deserializeAws_json1_1AnomalyScore(output.AnomalyScore, context)
            : undefined,
        AnomalyStartDate: output.AnomalyStartDate !== undefined && output.AnomalyStartDate !== null ? output.AnomalyStartDate : undefined,
        DimensionValue: output.DimensionValue !== undefined && output.DimensionValue !== null ? output.DimensionValue : undefined,
        Feedback: output.Feedback !== undefined && output.Feedback !== null ? output.Feedback : undefined,
        Impact: output.Impact !== undefined && output.Impact !== null
            ? deserializeAws_json1_1Impact(output.Impact, context)
            : undefined,
        MonitorArn: output.MonitorArn !== undefined && output.MonitorArn !== null ? output.MonitorArn : undefined,
        RootCauses: output.RootCauses !== undefined && output.RootCauses !== null
            ? deserializeAws_json1_1RootCauses(output.RootCauses, context)
            : undefined,
    };
};
var deserializeAws_json1_1AnomalyMonitor = function (output, context) {
    return {
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
        DimensionalValueCount: output.DimensionalValueCount !== undefined && output.DimensionalValueCount !== null
            ? output.DimensionalValueCount
            : undefined,
        LastEvaluatedDate: output.LastEvaluatedDate !== undefined && output.LastEvaluatedDate !== null
            ? output.LastEvaluatedDate
            : undefined,
        LastUpdatedDate: output.LastUpdatedDate !== undefined && output.LastUpdatedDate !== null ? output.LastUpdatedDate : undefined,
        MonitorArn: output.MonitorArn !== undefined && output.MonitorArn !== null ? output.MonitorArn : undefined,
        MonitorDimension: output.MonitorDimension !== undefined && output.MonitorDimension !== null ? output.MonitorDimension : undefined,
        MonitorName: output.MonitorName !== undefined && output.MonitorName !== null ? output.MonitorName : undefined,
        MonitorSpecification: output.MonitorSpecification !== undefined && output.MonitorSpecification !== null
            ? deserializeAws_json1_1Expression(output.MonitorSpecification, context)
            : undefined,
        MonitorType: output.MonitorType !== undefined && output.MonitorType !== null ? output.MonitorType : undefined,
    };
};
var deserializeAws_json1_1AnomalyMonitors = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AnomalyMonitor(entry, context);
    });
};
var deserializeAws_json1_1AnomalyScore = function (output, context) {
    return {
        CurrentScore: output.CurrentScore !== undefined && output.CurrentScore !== null ? output.CurrentScore : undefined,
        MaxScore: output.MaxScore !== undefined && output.MaxScore !== null ? output.MaxScore : undefined,
    };
};
var deserializeAws_json1_1AnomalySubscription = function (output, context) {
    return {
        AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
        Frequency: output.Frequency !== undefined && output.Frequency !== null ? output.Frequency : undefined,
        MonitorArnList: output.MonitorArnList !== undefined && output.MonitorArnList !== null
            ? deserializeAws_json1_1MonitorArnList(output.MonitorArnList, context)
            : undefined,
        Subscribers: output.Subscribers !== undefined && output.Subscribers !== null
            ? deserializeAws_json1_1Subscribers(output.Subscribers, context)
            : undefined,
        SubscriptionArn: output.SubscriptionArn !== undefined && output.SubscriptionArn !== null ? output.SubscriptionArn : undefined,
        SubscriptionName: output.SubscriptionName !== undefined && output.SubscriptionName !== null ? output.SubscriptionName : undefined,
        Threshold: output.Threshold !== undefined && output.Threshold !== null ? output.Threshold : undefined,
    };
};
var deserializeAws_json1_1AnomalySubscriptions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AnomalySubscription(entry, context);
    });
};
var deserializeAws_json1_1Attributes = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_json1_1BillExpirationException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1CostCategory = function (output, context) {
    return {
        CostCategoryArn: output.CostCategoryArn !== undefined && output.CostCategoryArn !== null ? output.CostCategoryArn : undefined,
        DefaultValue: output.DefaultValue !== undefined && output.DefaultValue !== null ? output.DefaultValue : undefined,
        EffectiveEnd: output.EffectiveEnd !== undefined && output.EffectiveEnd !== null ? output.EffectiveEnd : undefined,
        EffectiveStart: output.EffectiveStart !== undefined && output.EffectiveStart !== null ? output.EffectiveStart : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        ProcessingStatus: output.ProcessingStatus !== undefined && output.ProcessingStatus !== null
            ? deserializeAws_json1_1CostCategoryProcessingStatusList(output.ProcessingStatus, context)
            : undefined,
        RuleVersion: output.RuleVersion !== undefined && output.RuleVersion !== null ? output.RuleVersion : undefined,
        Rules: output.Rules !== undefined && output.Rules !== null
            ? deserializeAws_json1_1CostCategoryRulesList(output.Rules, context)
            : undefined,
    };
};
var deserializeAws_json1_1CostCategoryInheritedValueDimension = function (output, context) {
    return {
        DimensionKey: output.DimensionKey !== undefined && output.DimensionKey !== null ? output.DimensionKey : undefined,
        DimensionName: output.DimensionName !== undefined && output.DimensionName !== null ? output.DimensionName : undefined,
    };
};
var deserializeAws_json1_1CostCategoryNamesList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1CostCategoryProcessingStatus = function (output, context) {
    return {
        Component: output.Component !== undefined && output.Component !== null ? output.Component : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
var deserializeAws_json1_1CostCategoryProcessingStatusList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CostCategoryProcessingStatus(entry, context);
    });
};
var deserializeAws_json1_1CostCategoryReference = function (output, context) {
    return {
        CostCategoryArn: output.CostCategoryArn !== undefined && output.CostCategoryArn !== null ? output.CostCategoryArn : undefined,
        DefaultValue: output.DefaultValue !== undefined && output.DefaultValue !== null ? output.DefaultValue : undefined,
        EffectiveEnd: output.EffectiveEnd !== undefined && output.EffectiveEnd !== null ? output.EffectiveEnd : undefined,
        EffectiveStart: output.EffectiveStart !== undefined && output.EffectiveStart !== null ? output.EffectiveStart : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        NumberOfRules: output.NumberOfRules !== undefined && output.NumberOfRules !== null ? output.NumberOfRules : undefined,
        ProcessingStatus: output.ProcessingStatus !== undefined && output.ProcessingStatus !== null
            ? deserializeAws_json1_1CostCategoryProcessingStatusList(output.ProcessingStatus, context)
            : undefined,
        Values: output.Values !== undefined && output.Values !== null
            ? deserializeAws_json1_1CostCategoryValuesList(output.Values, context)
            : undefined,
    };
};
var deserializeAws_json1_1CostCategoryReferencesList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CostCategoryReference(entry, context);
    });
};
var deserializeAws_json1_1CostCategoryRule = function (output, context) {
    return {
        InheritedValue: output.InheritedValue !== undefined && output.InheritedValue !== null
            ? deserializeAws_json1_1CostCategoryInheritedValueDimension(output.InheritedValue, context)
            : undefined,
        Rule: output.Rule !== undefined && output.Rule !== null
            ? deserializeAws_json1_1Expression(output.Rule, context)
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_json1_1CostCategoryRulesList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CostCategoryRule(entry, context);
    });
};
var deserializeAws_json1_1CostCategoryValues = function (output, context) {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        MatchOptions: output.MatchOptions !== undefined && output.MatchOptions !== null
            ? deserializeAws_json1_1MatchOptions(output.MatchOptions, context)
            : undefined,
        Values: output.Values !== undefined && output.Values !== null
            ? deserializeAws_json1_1Values(output.Values, context)
            : undefined,
    };
};
var deserializeAws_json1_1CostCategoryValuesList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1Coverage = function (output, context) {
    return {
        CoverageCost: output.CoverageCost !== undefined && output.CoverageCost !== null
            ? deserializeAws_json1_1CoverageCost(output.CoverageCost, context)
            : undefined,
        CoverageHours: output.CoverageHours !== undefined && output.CoverageHours !== null
            ? deserializeAws_json1_1CoverageHours(output.CoverageHours, context)
            : undefined,
        CoverageNormalizedUnits: output.CoverageNormalizedUnits !== undefined && output.CoverageNormalizedUnits !== null
            ? deserializeAws_json1_1CoverageNormalizedUnits(output.CoverageNormalizedUnits, context)
            : undefined,
    };
};
var deserializeAws_json1_1CoverageByTime = function (output, context) {
    return {
        Groups: output.Groups !== undefined && output.Groups !== null
            ? deserializeAws_json1_1ReservationCoverageGroups(output.Groups, context)
            : undefined,
        TimePeriod: output.TimePeriod !== undefined && output.TimePeriod !== null
            ? deserializeAws_json1_1DateInterval(output.TimePeriod, context)
            : undefined,
        Total: output.Total !== undefined && output.Total !== null
            ? deserializeAws_json1_1Coverage(output.Total, context)
            : undefined,
    };
};
var deserializeAws_json1_1CoverageCost = function (output, context) {
    return {
        OnDemandCost: output.OnDemandCost !== undefined && output.OnDemandCost !== null ? output.OnDemandCost : undefined,
    };
};
var deserializeAws_json1_1CoverageHours = function (output, context) {
    return {
        CoverageHoursPercentage: output.CoverageHoursPercentage !== undefined && output.CoverageHoursPercentage !== null
            ? output.CoverageHoursPercentage
            : undefined,
        OnDemandHours: output.OnDemandHours !== undefined && output.OnDemandHours !== null ? output.OnDemandHours : undefined,
        ReservedHours: output.ReservedHours !== undefined && output.ReservedHours !== null ? output.ReservedHours : undefined,
        TotalRunningHours: output.TotalRunningHours !== undefined && output.TotalRunningHours !== null
            ? output.TotalRunningHours
            : undefined,
    };
};
var deserializeAws_json1_1CoverageNormalizedUnits = function (output, context) {
    return {
        CoverageNormalizedUnitsPercentage: output.CoverageNormalizedUnitsPercentage !== undefined && output.CoverageNormalizedUnitsPercentage !== null
            ? output.CoverageNormalizedUnitsPercentage
            : undefined,
        OnDemandNormalizedUnits: output.OnDemandNormalizedUnits !== undefined && output.OnDemandNormalizedUnits !== null
            ? output.OnDemandNormalizedUnits
            : undefined,
        ReservedNormalizedUnits: output.ReservedNormalizedUnits !== undefined && output.ReservedNormalizedUnits !== null
            ? output.ReservedNormalizedUnits
            : undefined,
        TotalRunningNormalizedUnits: output.TotalRunningNormalizedUnits !== undefined && output.TotalRunningNormalizedUnits !== null
            ? output.TotalRunningNormalizedUnits
            : undefined,
    };
};
var deserializeAws_json1_1CoveragesByTime = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CoverageByTime(entry, context);
    });
};
var deserializeAws_json1_1CreateAnomalyMonitorResponse = function (output, context) {
    return {
        MonitorArn: output.MonitorArn !== undefined && output.MonitorArn !== null ? output.MonitorArn : undefined,
    };
};
var deserializeAws_json1_1CreateAnomalySubscriptionResponse = function (output, context) {
    return {
        SubscriptionArn: output.SubscriptionArn !== undefined && output.SubscriptionArn !== null ? output.SubscriptionArn : undefined,
    };
};
var deserializeAws_json1_1CreateCostCategoryDefinitionResponse = function (output, context) {
    return {
        CostCategoryArn: output.CostCategoryArn !== undefined && output.CostCategoryArn !== null ? output.CostCategoryArn : undefined,
        EffectiveStart: output.EffectiveStart !== undefined && output.EffectiveStart !== null ? output.EffectiveStart : undefined,
    };
};
var deserializeAws_json1_1CurrentInstance = function (output, context) {
    return {
        CurrencyCode: output.CurrencyCode !== undefined && output.CurrencyCode !== null ? output.CurrencyCode : undefined,
        InstanceName: output.InstanceName !== undefined && output.InstanceName !== null ? output.InstanceName : undefined,
        MonthlyCost: output.MonthlyCost !== undefined && output.MonthlyCost !== null ? output.MonthlyCost : undefined,
        OnDemandHoursInLookbackPeriod: output.OnDemandHoursInLookbackPeriod !== undefined && output.OnDemandHoursInLookbackPeriod !== null
            ? output.OnDemandHoursInLookbackPeriod
            : undefined,
        ReservationCoveredHoursInLookbackPeriod: output.ReservationCoveredHoursInLookbackPeriod !== undefined &&
            output.ReservationCoveredHoursInLookbackPeriod !== null
            ? output.ReservationCoveredHoursInLookbackPeriod
            : undefined,
        ResourceDetails: output.ResourceDetails !== undefined && output.ResourceDetails !== null
            ? deserializeAws_json1_1ResourceDetails(output.ResourceDetails, context)
            : undefined,
        ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
        ResourceUtilization: output.ResourceUtilization !== undefined && output.ResourceUtilization !== null
            ? deserializeAws_json1_1ResourceUtilization(output.ResourceUtilization, context)
            : undefined,
        SavingsPlansCoveredHoursInLookbackPeriod: output.SavingsPlansCoveredHoursInLookbackPeriod !== undefined &&
            output.SavingsPlansCoveredHoursInLookbackPeriod !== null
            ? output.SavingsPlansCoveredHoursInLookbackPeriod
            : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagValuesList(output.Tags, context)
            : undefined,
        TotalRunningHoursInLookbackPeriod: output.TotalRunningHoursInLookbackPeriod !== undefined && output.TotalRunningHoursInLookbackPeriod !== null
            ? output.TotalRunningHoursInLookbackPeriod
            : undefined,
    };
};
var deserializeAws_json1_1DataUnavailableException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1DateInterval = function (output, context) {
    return {
        End: output.End !== undefined && output.End !== null ? output.End : undefined,
        Start: output.Start !== undefined && output.Start !== null ? output.Start : undefined,
    };
};
var deserializeAws_json1_1DeleteAnomalyMonitorResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1DeleteAnomalySubscriptionResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1DeleteCostCategoryDefinitionResponse = function (output, context) {
    return {
        CostCategoryArn: output.CostCategoryArn !== undefined && output.CostCategoryArn !== null ? output.CostCategoryArn : undefined,
        EffectiveEnd: output.EffectiveEnd !== undefined && output.EffectiveEnd !== null ? output.EffectiveEnd : undefined,
    };
};
var deserializeAws_json1_1DescribeCostCategoryDefinitionResponse = function (output, context) {
    return {
        CostCategory: output.CostCategory !== undefined && output.CostCategory !== null
            ? deserializeAws_json1_1CostCategory(output.CostCategory, context)
            : undefined,
    };
};
var deserializeAws_json1_1DimensionValues = function (output, context) {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        MatchOptions: output.MatchOptions !== undefined && output.MatchOptions !== null
            ? deserializeAws_json1_1MatchOptions(output.MatchOptions, context)
            : undefined,
        Values: output.Values !== undefined && output.Values !== null
            ? deserializeAws_json1_1Values(output.Values, context)
            : undefined,
    };
};
var deserializeAws_json1_1DimensionValuesWithAttributes = function (output, context) {
    return {
        Attributes: output.Attributes !== undefined && output.Attributes !== null
            ? deserializeAws_json1_1Attributes(output.Attributes, context)
            : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_json1_1DimensionValuesWithAttributesList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DimensionValuesWithAttributes(entry, context);
    });
};
var deserializeAws_json1_1DiskResourceUtilization = function (output, context) {
    return {
        DiskReadBytesPerSecond: output.DiskReadBytesPerSecond !== undefined && output.DiskReadBytesPerSecond !== null
            ? output.DiskReadBytesPerSecond
            : undefined,
        DiskReadOpsPerSecond: output.DiskReadOpsPerSecond !== undefined && output.DiskReadOpsPerSecond !== null
            ? output.DiskReadOpsPerSecond
            : undefined,
        DiskWriteBytesPerSecond: output.DiskWriteBytesPerSecond !== undefined && output.DiskWriteBytesPerSecond !== null
            ? output.DiskWriteBytesPerSecond
            : undefined,
        DiskWriteOpsPerSecond: output.DiskWriteOpsPerSecond !== undefined && output.DiskWriteOpsPerSecond !== null
            ? output.DiskWriteOpsPerSecond
            : undefined,
    };
};
var deserializeAws_json1_1EBSResourceUtilization = function (output, context) {
    return {
        EbsReadBytesPerSecond: output.EbsReadBytesPerSecond !== undefined && output.EbsReadBytesPerSecond !== null
            ? output.EbsReadBytesPerSecond
            : undefined,
        EbsReadOpsPerSecond: output.EbsReadOpsPerSecond !== undefined && output.EbsReadOpsPerSecond !== null
            ? output.EbsReadOpsPerSecond
            : undefined,
        EbsWriteBytesPerSecond: output.EbsWriteBytesPerSecond !== undefined && output.EbsWriteBytesPerSecond !== null
            ? output.EbsWriteBytesPerSecond
            : undefined,
        EbsWriteOpsPerSecond: output.EbsWriteOpsPerSecond !== undefined && output.EbsWriteOpsPerSecond !== null
            ? output.EbsWriteOpsPerSecond
            : undefined,
    };
};
var deserializeAws_json1_1EC2InstanceDetails = function (output, context) {
    return {
        AvailabilityZone: output.AvailabilityZone !== undefined && output.AvailabilityZone !== null ? output.AvailabilityZone : undefined,
        CurrentGeneration: output.CurrentGeneration !== undefined && output.CurrentGeneration !== null
            ? output.CurrentGeneration
            : undefined,
        Family: output.Family !== undefined && output.Family !== null ? output.Family : undefined,
        InstanceType: output.InstanceType !== undefined && output.InstanceType !== null ? output.InstanceType : undefined,
        Platform: output.Platform !== undefined && output.Platform !== null ? output.Platform : undefined,
        Region: output.Region !== undefined && output.Region !== null ? output.Region : undefined,
        SizeFlexEligible: output.SizeFlexEligible !== undefined && output.SizeFlexEligible !== null ? output.SizeFlexEligible : undefined,
        Tenancy: output.Tenancy !== undefined && output.Tenancy !== null ? output.Tenancy : undefined,
    };
};
var deserializeAws_json1_1EC2ResourceDetails = function (output, context) {
    return {
        HourlyOnDemandRate: output.HourlyOnDemandRate !== undefined && output.HourlyOnDemandRate !== null
            ? output.HourlyOnDemandRate
            : undefined,
        InstanceType: output.InstanceType !== undefined && output.InstanceType !== null ? output.InstanceType : undefined,
        Memory: output.Memory !== undefined && output.Memory !== null ? output.Memory : undefined,
        NetworkPerformance: output.NetworkPerformance !== undefined && output.NetworkPerformance !== null
            ? output.NetworkPerformance
            : undefined,
        Platform: output.Platform !== undefined && output.Platform !== null ? output.Platform : undefined,
        Region: output.Region !== undefined && output.Region !== null ? output.Region : undefined,
        Sku: output.Sku !== undefined && output.Sku !== null ? output.Sku : undefined,
        Storage: output.Storage !== undefined && output.Storage !== null ? output.Storage : undefined,
        Vcpu: output.Vcpu !== undefined && output.Vcpu !== null ? output.Vcpu : undefined,
    };
};
var deserializeAws_json1_1EC2ResourceUtilization = function (output, context) {
    return {
        DiskResourceUtilization: output.DiskResourceUtilization !== undefined && output.DiskResourceUtilization !== null
            ? deserializeAws_json1_1DiskResourceUtilization(output.DiskResourceUtilization, context)
            : undefined,
        EBSResourceUtilization: output.EBSResourceUtilization !== undefined && output.EBSResourceUtilization !== null
            ? deserializeAws_json1_1EBSResourceUtilization(output.EBSResourceUtilization, context)
            : undefined,
        MaxCpuUtilizationPercentage: output.MaxCpuUtilizationPercentage !== undefined && output.MaxCpuUtilizationPercentage !== null
            ? output.MaxCpuUtilizationPercentage
            : undefined,
        MaxMemoryUtilizationPercentage: output.MaxMemoryUtilizationPercentage !== undefined && output.MaxMemoryUtilizationPercentage !== null
            ? output.MaxMemoryUtilizationPercentage
            : undefined,
        MaxStorageUtilizationPercentage: output.MaxStorageUtilizationPercentage !== undefined && output.MaxStorageUtilizationPercentage !== null
            ? output.MaxStorageUtilizationPercentage
            : undefined,
        NetworkResourceUtilization: output.NetworkResourceUtilization !== undefined && output.NetworkResourceUtilization !== null
            ? deserializeAws_json1_1NetworkResourceUtilization(output.NetworkResourceUtilization, context)
            : undefined,
    };
};
var deserializeAws_json1_1EC2Specification = function (output, context) {
    return {
        OfferingClass: output.OfferingClass !== undefined && output.OfferingClass !== null ? output.OfferingClass : undefined,
    };
};
var deserializeAws_json1_1ElastiCacheInstanceDetails = function (output, context) {
    return {
        CurrentGeneration: output.CurrentGeneration !== undefined && output.CurrentGeneration !== null
            ? output.CurrentGeneration
            : undefined,
        Family: output.Family !== undefined && output.Family !== null ? output.Family : undefined,
        NodeType: output.NodeType !== undefined && output.NodeType !== null ? output.NodeType : undefined,
        ProductDescription: output.ProductDescription !== undefined && output.ProductDescription !== null
            ? output.ProductDescription
            : undefined,
        Region: output.Region !== undefined && output.Region !== null ? output.Region : undefined,
        SizeFlexEligible: output.SizeFlexEligible !== undefined && output.SizeFlexEligible !== null ? output.SizeFlexEligible : undefined,
    };
};
var deserializeAws_json1_1ESInstanceDetails = function (output, context) {
    return {
        CurrentGeneration: output.CurrentGeneration !== undefined && output.CurrentGeneration !== null
            ? output.CurrentGeneration
            : undefined,
        InstanceClass: output.InstanceClass !== undefined && output.InstanceClass !== null ? output.InstanceClass : undefined,
        InstanceSize: output.InstanceSize !== undefined && output.InstanceSize !== null ? output.InstanceSize : undefined,
        Region: output.Region !== undefined && output.Region !== null ? output.Region : undefined,
        SizeFlexEligible: output.SizeFlexEligible !== undefined && output.SizeFlexEligible !== null ? output.SizeFlexEligible : undefined,
    };
};
var deserializeAws_json1_1Expression = function (output, context) {
    return {
        And: output.And !== undefined && output.And !== null
            ? deserializeAws_json1_1Expressions(output.And, context)
            : undefined,
        CostCategories: output.CostCategories !== undefined && output.CostCategories !== null
            ? deserializeAws_json1_1CostCategoryValues(output.CostCategories, context)
            : undefined,
        Dimensions: output.Dimensions !== undefined && output.Dimensions !== null
            ? deserializeAws_json1_1DimensionValues(output.Dimensions, context)
            : undefined,
        Not: output.Not !== undefined && output.Not !== null
            ? deserializeAws_json1_1Expression(output.Not, context)
            : undefined,
        Or: output.Or !== undefined && output.Or !== null ? deserializeAws_json1_1Expressions(output.Or, context) : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagValues(output.Tags, context)
            : undefined,
    };
};
var deserializeAws_json1_1Expressions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Expression(entry, context);
    });
};
var deserializeAws_json1_1FindingReasonCodes = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1ForecastResult = function (output, context) {
    return {
        MeanValue: output.MeanValue !== undefined && output.MeanValue !== null ? output.MeanValue : undefined,
        PredictionIntervalLowerBound: output.PredictionIntervalLowerBound !== undefined && output.PredictionIntervalLowerBound !== null
            ? output.PredictionIntervalLowerBound
            : undefined,
        PredictionIntervalUpperBound: output.PredictionIntervalUpperBound !== undefined && output.PredictionIntervalUpperBound !== null
            ? output.PredictionIntervalUpperBound
            : undefined,
        TimePeriod: output.TimePeriod !== undefined && output.TimePeriod !== null
            ? deserializeAws_json1_1DateInterval(output.TimePeriod, context)
            : undefined,
    };
};
var deserializeAws_json1_1ForecastResultsByTime = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ForecastResult(entry, context);
    });
};
var deserializeAws_json1_1GetAnomaliesResponse = function (output, context) {
    return {
        Anomalies: output.Anomalies !== undefined && output.Anomalies !== null
            ? deserializeAws_json1_1Anomalies(output.Anomalies, context)
            : undefined,
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
    };
};
var deserializeAws_json1_1GetAnomalyMonitorsResponse = function (output, context) {
    return {
        AnomalyMonitors: output.AnomalyMonitors !== undefined && output.AnomalyMonitors !== null
            ? deserializeAws_json1_1AnomalyMonitors(output.AnomalyMonitors, context)
            : undefined,
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
    };
};
var deserializeAws_json1_1GetAnomalySubscriptionsResponse = function (output, context) {
    return {
        AnomalySubscriptions: output.AnomalySubscriptions !== undefined && output.AnomalySubscriptions !== null
            ? deserializeAws_json1_1AnomalySubscriptions(output.AnomalySubscriptions, context)
            : undefined,
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
    };
};
var deserializeAws_json1_1GetCostAndUsageResponse = function (output, context) {
    return {
        DimensionValueAttributes: output.DimensionValueAttributes !== undefined && output.DimensionValueAttributes !== null
            ? deserializeAws_json1_1DimensionValuesWithAttributesList(output.DimensionValueAttributes, context)
            : undefined,
        GroupDefinitions: output.GroupDefinitions !== undefined && output.GroupDefinitions !== null
            ? deserializeAws_json1_1GroupDefinitions(output.GroupDefinitions, context)
            : undefined,
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        ResultsByTime: output.ResultsByTime !== undefined && output.ResultsByTime !== null
            ? deserializeAws_json1_1ResultsByTime(output.ResultsByTime, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetCostAndUsageWithResourcesResponse = function (output, context) {
    return {
        DimensionValueAttributes: output.DimensionValueAttributes !== undefined && output.DimensionValueAttributes !== null
            ? deserializeAws_json1_1DimensionValuesWithAttributesList(output.DimensionValueAttributes, context)
            : undefined,
        GroupDefinitions: output.GroupDefinitions !== undefined && output.GroupDefinitions !== null
            ? deserializeAws_json1_1GroupDefinitions(output.GroupDefinitions, context)
            : undefined,
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        ResultsByTime: output.ResultsByTime !== undefined && output.ResultsByTime !== null
            ? deserializeAws_json1_1ResultsByTime(output.ResultsByTime, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetCostCategoriesResponse = function (output, context) {
    return {
        CostCategoryNames: output.CostCategoryNames !== undefined && output.CostCategoryNames !== null
            ? deserializeAws_json1_1CostCategoryNamesList(output.CostCategoryNames, context)
            : undefined,
        CostCategoryValues: output.CostCategoryValues !== undefined && output.CostCategoryValues !== null
            ? deserializeAws_json1_1CostCategoryValuesList(output.CostCategoryValues, context)
            : undefined,
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        ReturnSize: output.ReturnSize !== undefined && output.ReturnSize !== null ? output.ReturnSize : undefined,
        TotalSize: output.TotalSize !== undefined && output.TotalSize !== null ? output.TotalSize : undefined,
    };
};
var deserializeAws_json1_1GetCostForecastResponse = function (output, context) {
    return {
        ForecastResultsByTime: output.ForecastResultsByTime !== undefined && output.ForecastResultsByTime !== null
            ? deserializeAws_json1_1ForecastResultsByTime(output.ForecastResultsByTime, context)
            : undefined,
        Total: output.Total !== undefined && output.Total !== null
            ? deserializeAws_json1_1MetricValue(output.Total, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetDimensionValuesResponse = function (output, context) {
    return {
        DimensionValues: output.DimensionValues !== undefined && output.DimensionValues !== null
            ? deserializeAws_json1_1DimensionValuesWithAttributesList(output.DimensionValues, context)
            : undefined,
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        ReturnSize: output.ReturnSize !== undefined && output.ReturnSize !== null ? output.ReturnSize : undefined,
        TotalSize: output.TotalSize !== undefined && output.TotalSize !== null ? output.TotalSize : undefined,
    };
};
var deserializeAws_json1_1GetReservationCoverageResponse = function (output, context) {
    return {
        CoveragesByTime: output.CoveragesByTime !== undefined && output.CoveragesByTime !== null
            ? deserializeAws_json1_1CoveragesByTime(output.CoveragesByTime, context)
            : undefined,
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        Total: output.Total !== undefined && output.Total !== null
            ? deserializeAws_json1_1Coverage(output.Total, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetReservationPurchaseRecommendationResponse = function (output, context) {
    return {
        Metadata: output.Metadata !== undefined && output.Metadata !== null
            ? deserializeAws_json1_1ReservationPurchaseRecommendationMetadata(output.Metadata, context)
            : undefined,
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        Recommendations: output.Recommendations !== undefined && output.Recommendations !== null
            ? deserializeAws_json1_1ReservationPurchaseRecommendations(output.Recommendations, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetReservationUtilizationResponse = function (output, context) {
    return {
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        Total: output.Total !== undefined && output.Total !== null
            ? deserializeAws_json1_1ReservationAggregates(output.Total, context)
            : undefined,
        UtilizationsByTime: output.UtilizationsByTime !== undefined && output.UtilizationsByTime !== null
            ? deserializeAws_json1_1UtilizationsByTime(output.UtilizationsByTime, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetRightsizingRecommendationResponse = function (output, context) {
    return {
        Configuration: output.Configuration !== undefined && output.Configuration !== null
            ? deserializeAws_json1_1RightsizingRecommendationConfiguration(output.Configuration, context)
            : undefined,
        Metadata: output.Metadata !== undefined && output.Metadata !== null
            ? deserializeAws_json1_1RightsizingRecommendationMetadata(output.Metadata, context)
            : undefined,
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        RightsizingRecommendations: output.RightsizingRecommendations !== undefined && output.RightsizingRecommendations !== null
            ? deserializeAws_json1_1RightsizingRecommendationList(output.RightsizingRecommendations, context)
            : undefined,
        Summary: output.Summary !== undefined && output.Summary !== null
            ? deserializeAws_json1_1RightsizingRecommendationSummary(output.Summary, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetSavingsPlansCoverageResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        SavingsPlansCoverages: output.SavingsPlansCoverages !== undefined && output.SavingsPlansCoverages !== null
            ? deserializeAws_json1_1SavingsPlansCoverages(output.SavingsPlansCoverages, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetSavingsPlansPurchaseRecommendationResponse = function (output, context) {
    return {
        Metadata: output.Metadata !== undefined && output.Metadata !== null
            ? deserializeAws_json1_1SavingsPlansPurchaseRecommendationMetadata(output.Metadata, context)
            : undefined,
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        SavingsPlansPurchaseRecommendation: output.SavingsPlansPurchaseRecommendation !== undefined && output.SavingsPlansPurchaseRecommendation !== null
            ? deserializeAws_json1_1SavingsPlansPurchaseRecommendation(output.SavingsPlansPurchaseRecommendation, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetSavingsPlansUtilizationDetailsResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        SavingsPlansUtilizationDetails: output.SavingsPlansUtilizationDetails !== undefined && output.SavingsPlansUtilizationDetails !== null
            ? deserializeAws_json1_1SavingsPlansUtilizationDetails(output.SavingsPlansUtilizationDetails, context)
            : undefined,
        TimePeriod: output.TimePeriod !== undefined && output.TimePeriod !== null
            ? deserializeAws_json1_1DateInterval(output.TimePeriod, context)
            : undefined,
        Total: output.Total !== undefined && output.Total !== null
            ? deserializeAws_json1_1SavingsPlansUtilizationAggregates(output.Total, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetSavingsPlansUtilizationResponse = function (output, context) {
    return {
        SavingsPlansUtilizationsByTime: output.SavingsPlansUtilizationsByTime !== undefined && output.SavingsPlansUtilizationsByTime !== null
            ? deserializeAws_json1_1SavingsPlansUtilizationsByTime(output.SavingsPlansUtilizationsByTime, context)
            : undefined,
        Total: output.Total !== undefined && output.Total !== null
            ? deserializeAws_json1_1SavingsPlansUtilizationAggregates(output.Total, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetTagsResponse = function (output, context) {
    return {
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        ReturnSize: output.ReturnSize !== undefined && output.ReturnSize !== null ? output.ReturnSize : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagList(output.Tags, context)
            : undefined,
        TotalSize: output.TotalSize !== undefined && output.TotalSize !== null ? output.TotalSize : undefined,
    };
};
var deserializeAws_json1_1GetUsageForecastResponse = function (output, context) {
    return {
        ForecastResultsByTime: output.ForecastResultsByTime !== undefined && output.ForecastResultsByTime !== null
            ? deserializeAws_json1_1ForecastResultsByTime(output.ForecastResultsByTime, context)
            : undefined,
        Total: output.Total !== undefined && output.Total !== null
            ? deserializeAws_json1_1MetricValue(output.Total, context)
            : undefined,
    };
};
var deserializeAws_json1_1Group = function (output, context) {
    return {
        Keys: output.Keys !== undefined && output.Keys !== null ? deserializeAws_json1_1Keys(output.Keys, context) : undefined,
        Metrics: output.Metrics !== undefined && output.Metrics !== null
            ? deserializeAws_json1_1Metrics(output.Metrics, context)
            : undefined,
    };
};
var deserializeAws_json1_1GroupDefinition = function (output, context) {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
var deserializeAws_json1_1GroupDefinitions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1GroupDefinition(entry, context);
    });
};
var deserializeAws_json1_1Groups = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Group(entry, context);
    });
};
var deserializeAws_json1_1Impact = function (output, context) {
    return {
        MaxImpact: output.MaxImpact !== undefined && output.MaxImpact !== null ? output.MaxImpact : undefined,
        TotalImpact: output.TotalImpact !== undefined && output.TotalImpact !== null ? output.TotalImpact : undefined,
    };
};
var deserializeAws_json1_1InstanceDetails = function (output, context) {
    return {
        EC2InstanceDetails: output.EC2InstanceDetails !== undefined && output.EC2InstanceDetails !== null
            ? deserializeAws_json1_1EC2InstanceDetails(output.EC2InstanceDetails, context)
            : undefined,
        ESInstanceDetails: output.ESInstanceDetails !== undefined && output.ESInstanceDetails !== null
            ? deserializeAws_json1_1ESInstanceDetails(output.ESInstanceDetails, context)
            : undefined,
        ElastiCacheInstanceDetails: output.ElastiCacheInstanceDetails !== undefined && output.ElastiCacheInstanceDetails !== null
            ? deserializeAws_json1_1ElastiCacheInstanceDetails(output.ElastiCacheInstanceDetails, context)
            : undefined,
        RDSInstanceDetails: output.RDSInstanceDetails !== undefined && output.RDSInstanceDetails !== null
            ? deserializeAws_json1_1RDSInstanceDetails(output.RDSInstanceDetails, context)
            : undefined,
        RedshiftInstanceDetails: output.RedshiftInstanceDetails !== undefined && output.RedshiftInstanceDetails !== null
            ? deserializeAws_json1_1RedshiftInstanceDetails(output.RedshiftInstanceDetails, context)
            : undefined,
    };
};
var deserializeAws_json1_1InvalidNextTokenException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1Keys = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1LimitExceededException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1ListCostCategoryDefinitionsResponse = function (output, context) {
    return {
        CostCategoryReferences: output.CostCategoryReferences !== undefined && output.CostCategoryReferences !== null
            ? deserializeAws_json1_1CostCategoryReferencesList(output.CostCategoryReferences, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1MatchOptions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1Metrics = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_json1_1MetricValue(value, context), _b));
    }, {});
};
var deserializeAws_json1_1MetricValue = function (output, context) {
    return {
        Amount: output.Amount !== undefined && output.Amount !== null ? output.Amount : undefined,
        Unit: output.Unit !== undefined && output.Unit !== null ? output.Unit : undefined,
    };
};
var deserializeAws_json1_1ModifyRecommendationDetail = function (output, context) {
    return {
        TargetInstances: output.TargetInstances !== undefined && output.TargetInstances !== null
            ? deserializeAws_json1_1TargetInstancesList(output.TargetInstances, context)
            : undefined,
    };
};
var deserializeAws_json1_1MonitorArnList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1NetworkResourceUtilization = function (output, context) {
    return {
        NetworkInBytesPerSecond: output.NetworkInBytesPerSecond !== undefined && output.NetworkInBytesPerSecond !== null
            ? output.NetworkInBytesPerSecond
            : undefined,
        NetworkOutBytesPerSecond: output.NetworkOutBytesPerSecond !== undefined && output.NetworkOutBytesPerSecond !== null
            ? output.NetworkOutBytesPerSecond
            : undefined,
        NetworkPacketsInPerSecond: output.NetworkPacketsInPerSecond !== undefined && output.NetworkPacketsInPerSecond !== null
            ? output.NetworkPacketsInPerSecond
            : undefined,
        NetworkPacketsOutPerSecond: output.NetworkPacketsOutPerSecond !== undefined && output.NetworkPacketsOutPerSecond !== null
            ? output.NetworkPacketsOutPerSecond
            : undefined,
    };
};
var deserializeAws_json1_1PlatformDifferences = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1ProvideAnomalyFeedbackResponse = function (output, context) {
    return {
        AnomalyId: output.AnomalyId !== undefined && output.AnomalyId !== null ? output.AnomalyId : undefined,
    };
};
var deserializeAws_json1_1RDSInstanceDetails = function (output, context) {
    return {
        CurrentGeneration: output.CurrentGeneration !== undefined && output.CurrentGeneration !== null
            ? output.CurrentGeneration
            : undefined,
        DatabaseEdition: output.DatabaseEdition !== undefined && output.DatabaseEdition !== null ? output.DatabaseEdition : undefined,
        DatabaseEngine: output.DatabaseEngine !== undefined && output.DatabaseEngine !== null ? output.DatabaseEngine : undefined,
        DeploymentOption: output.DeploymentOption !== undefined && output.DeploymentOption !== null ? output.DeploymentOption : undefined,
        Family: output.Family !== undefined && output.Family !== null ? output.Family : undefined,
        InstanceType: output.InstanceType !== undefined && output.InstanceType !== null ? output.InstanceType : undefined,
        LicenseModel: output.LicenseModel !== undefined && output.LicenseModel !== null ? output.LicenseModel : undefined,
        Region: output.Region !== undefined && output.Region !== null ? output.Region : undefined,
        SizeFlexEligible: output.SizeFlexEligible !== undefined && output.SizeFlexEligible !== null ? output.SizeFlexEligible : undefined,
    };
};
var deserializeAws_json1_1RedshiftInstanceDetails = function (output, context) {
    return {
        CurrentGeneration: output.CurrentGeneration !== undefined && output.CurrentGeneration !== null
            ? output.CurrentGeneration
            : undefined,
        Family: output.Family !== undefined && output.Family !== null ? output.Family : undefined,
        NodeType: output.NodeType !== undefined && output.NodeType !== null ? output.NodeType : undefined,
        Region: output.Region !== undefined && output.Region !== null ? output.Region : undefined,
        SizeFlexEligible: output.SizeFlexEligible !== undefined && output.SizeFlexEligible !== null ? output.SizeFlexEligible : undefined,
    };
};
var deserializeAws_json1_1RequestChangedException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1ReservationAggregates = function (output, context) {
    return {
        AmortizedRecurringFee: output.AmortizedRecurringFee !== undefined && output.AmortizedRecurringFee !== null
            ? output.AmortizedRecurringFee
            : undefined,
        AmortizedUpfrontFee: output.AmortizedUpfrontFee !== undefined && output.AmortizedUpfrontFee !== null
            ? output.AmortizedUpfrontFee
            : undefined,
        NetRISavings: output.NetRISavings !== undefined && output.NetRISavings !== null ? output.NetRISavings : undefined,
        OnDemandCostOfRIHoursUsed: output.OnDemandCostOfRIHoursUsed !== undefined && output.OnDemandCostOfRIHoursUsed !== null
            ? output.OnDemandCostOfRIHoursUsed
            : undefined,
        PurchasedHours: output.PurchasedHours !== undefined && output.PurchasedHours !== null ? output.PurchasedHours : undefined,
        PurchasedUnits: output.PurchasedUnits !== undefined && output.PurchasedUnits !== null ? output.PurchasedUnits : undefined,
        RICostForUnusedHours: output.RICostForUnusedHours !== undefined && output.RICostForUnusedHours !== null
            ? output.RICostForUnusedHours
            : undefined,
        RealizedSavings: output.RealizedSavings !== undefined && output.RealizedSavings !== null ? output.RealizedSavings : undefined,
        TotalActualHours: output.TotalActualHours !== undefined && output.TotalActualHours !== null ? output.TotalActualHours : undefined,
        TotalActualUnits: output.TotalActualUnits !== undefined && output.TotalActualUnits !== null ? output.TotalActualUnits : undefined,
        TotalAmortizedFee: output.TotalAmortizedFee !== undefined && output.TotalAmortizedFee !== null
            ? output.TotalAmortizedFee
            : undefined,
        TotalPotentialRISavings: output.TotalPotentialRISavings !== undefined && output.TotalPotentialRISavings !== null
            ? output.TotalPotentialRISavings
            : undefined,
        UnrealizedSavings: output.UnrealizedSavings !== undefined && output.UnrealizedSavings !== null
            ? output.UnrealizedSavings
            : undefined,
        UnusedHours: output.UnusedHours !== undefined && output.UnusedHours !== null ? output.UnusedHours : undefined,
        UnusedUnits: output.UnusedUnits !== undefined && output.UnusedUnits !== null ? output.UnusedUnits : undefined,
        UtilizationPercentage: output.UtilizationPercentage !== undefined && output.UtilizationPercentage !== null
            ? output.UtilizationPercentage
            : undefined,
        UtilizationPercentageInUnits: output.UtilizationPercentageInUnits !== undefined && output.UtilizationPercentageInUnits !== null
            ? output.UtilizationPercentageInUnits
            : undefined,
    };
};
var deserializeAws_json1_1ReservationCoverageGroup = function (output, context) {
    return {
        Attributes: output.Attributes !== undefined && output.Attributes !== null
            ? deserializeAws_json1_1Attributes(output.Attributes, context)
            : undefined,
        Coverage: output.Coverage !== undefined && output.Coverage !== null
            ? deserializeAws_json1_1Coverage(output.Coverage, context)
            : undefined,
    };
};
var deserializeAws_json1_1ReservationCoverageGroups = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ReservationCoverageGroup(entry, context);
    });
};
var deserializeAws_json1_1ReservationPurchaseRecommendation = function (output, context) {
    return {
        AccountScope: output.AccountScope !== undefined && output.AccountScope !== null ? output.AccountScope : undefined,
        LookbackPeriodInDays: output.LookbackPeriodInDays !== undefined && output.LookbackPeriodInDays !== null
            ? output.LookbackPeriodInDays
            : undefined,
        PaymentOption: output.PaymentOption !== undefined && output.PaymentOption !== null ? output.PaymentOption : undefined,
        RecommendationDetails: output.RecommendationDetails !== undefined && output.RecommendationDetails !== null
            ? deserializeAws_json1_1ReservationPurchaseRecommendationDetails(output.RecommendationDetails, context)
            : undefined,
        RecommendationSummary: output.RecommendationSummary !== undefined && output.RecommendationSummary !== null
            ? deserializeAws_json1_1ReservationPurchaseRecommendationSummary(output.RecommendationSummary, context)
            : undefined,
        ServiceSpecification: output.ServiceSpecification !== undefined && output.ServiceSpecification !== null
            ? deserializeAws_json1_1ServiceSpecification(output.ServiceSpecification, context)
            : undefined,
        TermInYears: output.TermInYears !== undefined && output.TermInYears !== null ? output.TermInYears : undefined,
    };
};
var deserializeAws_json1_1ReservationPurchaseRecommendationDetail = function (output, context) {
    return {
        AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
        AverageNormalizedUnitsUsedPerHour: output.AverageNormalizedUnitsUsedPerHour !== undefined && output.AverageNormalizedUnitsUsedPerHour !== null
            ? output.AverageNormalizedUnitsUsedPerHour
            : undefined,
        AverageNumberOfInstancesUsedPerHour: output.AverageNumberOfInstancesUsedPerHour !== undefined && output.AverageNumberOfInstancesUsedPerHour !== null
            ? output.AverageNumberOfInstancesUsedPerHour
            : undefined,
        AverageUtilization: output.AverageUtilization !== undefined && output.AverageUtilization !== null
            ? output.AverageUtilization
            : undefined,
        CurrencyCode: output.CurrencyCode !== undefined && output.CurrencyCode !== null ? output.CurrencyCode : undefined,
        EstimatedBreakEvenInMonths: output.EstimatedBreakEvenInMonths !== undefined && output.EstimatedBreakEvenInMonths !== null
            ? output.EstimatedBreakEvenInMonths
            : undefined,
        EstimatedMonthlyOnDemandCost: output.EstimatedMonthlyOnDemandCost !== undefined && output.EstimatedMonthlyOnDemandCost !== null
            ? output.EstimatedMonthlyOnDemandCost
            : undefined,
        EstimatedMonthlySavingsAmount: output.EstimatedMonthlySavingsAmount !== undefined && output.EstimatedMonthlySavingsAmount !== null
            ? output.EstimatedMonthlySavingsAmount
            : undefined,
        EstimatedMonthlySavingsPercentage: output.EstimatedMonthlySavingsPercentage !== undefined && output.EstimatedMonthlySavingsPercentage !== null
            ? output.EstimatedMonthlySavingsPercentage
            : undefined,
        EstimatedReservationCostForLookbackPeriod: output.EstimatedReservationCostForLookbackPeriod !== undefined &&
            output.EstimatedReservationCostForLookbackPeriod !== null
            ? output.EstimatedReservationCostForLookbackPeriod
            : undefined,
        InstanceDetails: output.InstanceDetails !== undefined && output.InstanceDetails !== null
            ? deserializeAws_json1_1InstanceDetails(output.InstanceDetails, context)
            : undefined,
        MaximumNormalizedUnitsUsedPerHour: output.MaximumNormalizedUnitsUsedPerHour !== undefined && output.MaximumNormalizedUnitsUsedPerHour !== null
            ? output.MaximumNormalizedUnitsUsedPerHour
            : undefined,
        MaximumNumberOfInstancesUsedPerHour: output.MaximumNumberOfInstancesUsedPerHour !== undefined && output.MaximumNumberOfInstancesUsedPerHour !== null
            ? output.MaximumNumberOfInstancesUsedPerHour
            : undefined,
        MinimumNormalizedUnitsUsedPerHour: output.MinimumNormalizedUnitsUsedPerHour !== undefined && output.MinimumNormalizedUnitsUsedPerHour !== null
            ? output.MinimumNormalizedUnitsUsedPerHour
            : undefined,
        MinimumNumberOfInstancesUsedPerHour: output.MinimumNumberOfInstancesUsedPerHour !== undefined && output.MinimumNumberOfInstancesUsedPerHour !== null
            ? output.MinimumNumberOfInstancesUsedPerHour
            : undefined,
        RecommendedNormalizedUnitsToPurchase: output.RecommendedNormalizedUnitsToPurchase !== undefined && output.RecommendedNormalizedUnitsToPurchase !== null
            ? output.RecommendedNormalizedUnitsToPurchase
            : undefined,
        RecommendedNumberOfInstancesToPurchase: output.RecommendedNumberOfInstancesToPurchase !== undefined &&
            output.RecommendedNumberOfInstancesToPurchase !== null
            ? output.RecommendedNumberOfInstancesToPurchase
            : undefined,
        RecurringStandardMonthlyCost: output.RecurringStandardMonthlyCost !== undefined && output.RecurringStandardMonthlyCost !== null
            ? output.RecurringStandardMonthlyCost
            : undefined,
        UpfrontCost: output.UpfrontCost !== undefined && output.UpfrontCost !== null ? output.UpfrontCost : undefined,
    };
};
var deserializeAws_json1_1ReservationPurchaseRecommendationDetails = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ReservationPurchaseRecommendationDetail(entry, context);
    });
};
var deserializeAws_json1_1ReservationPurchaseRecommendationMetadata = function (output, context) {
    return {
        GenerationTimestamp: output.GenerationTimestamp !== undefined && output.GenerationTimestamp !== null
            ? output.GenerationTimestamp
            : undefined,
        RecommendationId: output.RecommendationId !== undefined && output.RecommendationId !== null ? output.RecommendationId : undefined,
    };
};
var deserializeAws_json1_1ReservationPurchaseRecommendations = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ReservationPurchaseRecommendation(entry, context);
    });
};
var deserializeAws_json1_1ReservationPurchaseRecommendationSummary = function (output, context) {
    return {
        CurrencyCode: output.CurrencyCode !== undefined && output.CurrencyCode !== null ? output.CurrencyCode : undefined,
        TotalEstimatedMonthlySavingsAmount: output.TotalEstimatedMonthlySavingsAmount !== undefined && output.TotalEstimatedMonthlySavingsAmount !== null
            ? output.TotalEstimatedMonthlySavingsAmount
            : undefined,
        TotalEstimatedMonthlySavingsPercentage: output.TotalEstimatedMonthlySavingsPercentage !== undefined &&
            output.TotalEstimatedMonthlySavingsPercentage !== null
            ? output.TotalEstimatedMonthlySavingsPercentage
            : undefined,
    };
};
var deserializeAws_json1_1ReservationUtilizationGroup = function (output, context) {
    return {
        Attributes: output.Attributes !== undefined && output.Attributes !== null
            ? deserializeAws_json1_1Attributes(output.Attributes, context)
            : undefined,
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Utilization: output.Utilization !== undefined && output.Utilization !== null
            ? deserializeAws_json1_1ReservationAggregates(output.Utilization, context)
            : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_json1_1ReservationUtilizationGroups = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ReservationUtilizationGroup(entry, context);
    });
};
var deserializeAws_json1_1ResourceDetails = function (output, context) {
    return {
        EC2ResourceDetails: output.EC2ResourceDetails !== undefined && output.EC2ResourceDetails !== null
            ? deserializeAws_json1_1EC2ResourceDetails(output.EC2ResourceDetails, context)
            : undefined,
    };
};
var deserializeAws_json1_1ResourceNotFoundException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1ResourceUtilization = function (output, context) {
    return {
        EC2ResourceUtilization: output.EC2ResourceUtilization !== undefined && output.EC2ResourceUtilization !== null
            ? deserializeAws_json1_1EC2ResourceUtilization(output.EC2ResourceUtilization, context)
            : undefined,
    };
};
var deserializeAws_json1_1ResultByTime = function (output, context) {
    return {
        Estimated: output.Estimated !== undefined && output.Estimated !== null ? output.Estimated : undefined,
        Groups: output.Groups !== undefined && output.Groups !== null
            ? deserializeAws_json1_1Groups(output.Groups, context)
            : undefined,
        TimePeriod: output.TimePeriod !== undefined && output.TimePeriod !== null
            ? deserializeAws_json1_1DateInterval(output.TimePeriod, context)
            : undefined,
        Total: output.Total !== undefined && output.Total !== null
            ? deserializeAws_json1_1Metrics(output.Total, context)
            : undefined,
    };
};
var deserializeAws_json1_1ResultsByTime = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResultByTime(entry, context);
    });
};
var deserializeAws_json1_1RightsizingRecommendation = function (output, context) {
    return {
        AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
        CurrentInstance: output.CurrentInstance !== undefined && output.CurrentInstance !== null
            ? deserializeAws_json1_1CurrentInstance(output.CurrentInstance, context)
            : undefined,
        FindingReasonCodes: output.FindingReasonCodes !== undefined && output.FindingReasonCodes !== null
            ? deserializeAws_json1_1FindingReasonCodes(output.FindingReasonCodes, context)
            : undefined,
        ModifyRecommendationDetail: output.ModifyRecommendationDetail !== undefined && output.ModifyRecommendationDetail !== null
            ? deserializeAws_json1_1ModifyRecommendationDetail(output.ModifyRecommendationDetail, context)
            : undefined,
        RightsizingType: output.RightsizingType !== undefined && output.RightsizingType !== null ? output.RightsizingType : undefined,
        TerminateRecommendationDetail: output.TerminateRecommendationDetail !== undefined && output.TerminateRecommendationDetail !== null
            ? deserializeAws_json1_1TerminateRecommendationDetail(output.TerminateRecommendationDetail, context)
            : undefined,
    };
};
var deserializeAws_json1_1RightsizingRecommendationConfiguration = function (output, context) {
    return {
        BenefitsConsidered: output.BenefitsConsidered !== undefined && output.BenefitsConsidered !== null
            ? output.BenefitsConsidered
            : undefined,
        RecommendationTarget: output.RecommendationTarget !== undefined && output.RecommendationTarget !== null
            ? output.RecommendationTarget
            : undefined,
    };
};
var deserializeAws_json1_1RightsizingRecommendationList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RightsizingRecommendation(entry, context);
    });
};
var deserializeAws_json1_1RightsizingRecommendationMetadata = function (output, context) {
    return {
        AdditionalMetadata: output.AdditionalMetadata !== undefined && output.AdditionalMetadata !== null
            ? output.AdditionalMetadata
            : undefined,
        GenerationTimestamp: output.GenerationTimestamp !== undefined && output.GenerationTimestamp !== null
            ? output.GenerationTimestamp
            : undefined,
        LookbackPeriodInDays: output.LookbackPeriodInDays !== undefined && output.LookbackPeriodInDays !== null
            ? output.LookbackPeriodInDays
            : undefined,
        RecommendationId: output.RecommendationId !== undefined && output.RecommendationId !== null ? output.RecommendationId : undefined,
    };
};
var deserializeAws_json1_1RightsizingRecommendationSummary = function (output, context) {
    return {
        EstimatedTotalMonthlySavingsAmount: output.EstimatedTotalMonthlySavingsAmount !== undefined && output.EstimatedTotalMonthlySavingsAmount !== null
            ? output.EstimatedTotalMonthlySavingsAmount
            : undefined,
        SavingsCurrencyCode: output.SavingsCurrencyCode !== undefined && output.SavingsCurrencyCode !== null
            ? output.SavingsCurrencyCode
            : undefined,
        SavingsPercentage: output.SavingsPercentage !== undefined && output.SavingsPercentage !== null
            ? output.SavingsPercentage
            : undefined,
        TotalRecommendationCount: output.TotalRecommendationCount !== undefined && output.TotalRecommendationCount !== null
            ? output.TotalRecommendationCount
            : undefined,
    };
};
var deserializeAws_json1_1RootCause = function (output, context) {
    return {
        LinkedAccount: output.LinkedAccount !== undefined && output.LinkedAccount !== null ? output.LinkedAccount : undefined,
        Region: output.Region !== undefined && output.Region !== null ? output.Region : undefined,
        Service: output.Service !== undefined && output.Service !== null ? output.Service : undefined,
        UsageType: output.UsageType !== undefined && output.UsageType !== null ? output.UsageType : undefined,
    };
};
var deserializeAws_json1_1RootCauses = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RootCause(entry, context);
    });
};
var deserializeAws_json1_1SavingsPlansAmortizedCommitment = function (output, context) {
    return {
        AmortizedRecurringCommitment: output.AmortizedRecurringCommitment !== undefined && output.AmortizedRecurringCommitment !== null
            ? output.AmortizedRecurringCommitment
            : undefined,
        AmortizedUpfrontCommitment: output.AmortizedUpfrontCommitment !== undefined && output.AmortizedUpfrontCommitment !== null
            ? output.AmortizedUpfrontCommitment
            : undefined,
        TotalAmortizedCommitment: output.TotalAmortizedCommitment !== undefined && output.TotalAmortizedCommitment !== null
            ? output.TotalAmortizedCommitment
            : undefined,
    };
};
var deserializeAws_json1_1SavingsPlansCoverage = function (output, context) {
    return {
        Attributes: output.Attributes !== undefined && output.Attributes !== null
            ? deserializeAws_json1_1Attributes(output.Attributes, context)
            : undefined,
        Coverage: output.Coverage !== undefined && output.Coverage !== null
            ? deserializeAws_json1_1SavingsPlansCoverageData(output.Coverage, context)
            : undefined,
        TimePeriod: output.TimePeriod !== undefined && output.TimePeriod !== null
            ? deserializeAws_json1_1DateInterval(output.TimePeriod, context)
            : undefined,
    };
};
var deserializeAws_json1_1SavingsPlansCoverageData = function (output, context) {
    return {
        CoveragePercentage: output.CoveragePercentage !== undefined && output.CoveragePercentage !== null
            ? output.CoveragePercentage
            : undefined,
        OnDemandCost: output.OnDemandCost !== undefined && output.OnDemandCost !== null ? output.OnDemandCost : undefined,
        SpendCoveredBySavingsPlans: output.SpendCoveredBySavingsPlans !== undefined && output.SpendCoveredBySavingsPlans !== null
            ? output.SpendCoveredBySavingsPlans
            : undefined,
        TotalCost: output.TotalCost !== undefined && output.TotalCost !== null ? output.TotalCost : undefined,
    };
};
var deserializeAws_json1_1SavingsPlansCoverages = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SavingsPlansCoverage(entry, context);
    });
};
var deserializeAws_json1_1SavingsPlansDetails = function (output, context) {
    return {
        InstanceFamily: output.InstanceFamily !== undefined && output.InstanceFamily !== null ? output.InstanceFamily : undefined,
        OfferingId: output.OfferingId !== undefined && output.OfferingId !== null ? output.OfferingId : undefined,
        Region: output.Region !== undefined && output.Region !== null ? output.Region : undefined,
    };
};
var deserializeAws_json1_1SavingsPlansPurchaseRecommendation = function (output, context) {
    return {
        AccountScope: output.AccountScope !== undefined && output.AccountScope !== null ? output.AccountScope : undefined,
        LookbackPeriodInDays: output.LookbackPeriodInDays !== undefined && output.LookbackPeriodInDays !== null
            ? output.LookbackPeriodInDays
            : undefined,
        PaymentOption: output.PaymentOption !== undefined && output.PaymentOption !== null ? output.PaymentOption : undefined,
        SavingsPlansPurchaseRecommendationDetails: output.SavingsPlansPurchaseRecommendationDetails !== undefined &&
            output.SavingsPlansPurchaseRecommendationDetails !== null
            ? deserializeAws_json1_1SavingsPlansPurchaseRecommendationDetailList(output.SavingsPlansPurchaseRecommendationDetails, context)
            : undefined,
        SavingsPlansPurchaseRecommendationSummary: output.SavingsPlansPurchaseRecommendationSummary !== undefined &&
            output.SavingsPlansPurchaseRecommendationSummary !== null
            ? deserializeAws_json1_1SavingsPlansPurchaseRecommendationSummary(output.SavingsPlansPurchaseRecommendationSummary, context)
            : undefined,
        SavingsPlansType: output.SavingsPlansType !== undefined && output.SavingsPlansType !== null ? output.SavingsPlansType : undefined,
        TermInYears: output.TermInYears !== undefined && output.TermInYears !== null ? output.TermInYears : undefined,
    };
};
var deserializeAws_json1_1SavingsPlansPurchaseRecommendationDetail = function (output, context) {
    return {
        AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
        CurrencyCode: output.CurrencyCode !== undefined && output.CurrencyCode !== null ? output.CurrencyCode : undefined,
        CurrentAverageHourlyOnDemandSpend: output.CurrentAverageHourlyOnDemandSpend !== undefined && output.CurrentAverageHourlyOnDemandSpend !== null
            ? output.CurrentAverageHourlyOnDemandSpend
            : undefined,
        CurrentMaximumHourlyOnDemandSpend: output.CurrentMaximumHourlyOnDemandSpend !== undefined && output.CurrentMaximumHourlyOnDemandSpend !== null
            ? output.CurrentMaximumHourlyOnDemandSpend
            : undefined,
        CurrentMinimumHourlyOnDemandSpend: output.CurrentMinimumHourlyOnDemandSpend !== undefined && output.CurrentMinimumHourlyOnDemandSpend !== null
            ? output.CurrentMinimumHourlyOnDemandSpend
            : undefined,
        EstimatedAverageUtilization: output.EstimatedAverageUtilization !== undefined && output.EstimatedAverageUtilization !== null
            ? output.EstimatedAverageUtilization
            : undefined,
        EstimatedMonthlySavingsAmount: output.EstimatedMonthlySavingsAmount !== undefined && output.EstimatedMonthlySavingsAmount !== null
            ? output.EstimatedMonthlySavingsAmount
            : undefined,
        EstimatedOnDemandCost: output.EstimatedOnDemandCost !== undefined && output.EstimatedOnDemandCost !== null
            ? output.EstimatedOnDemandCost
            : undefined,
        EstimatedOnDemandCostWithCurrentCommitment: output.EstimatedOnDemandCostWithCurrentCommitment !== undefined &&
            output.EstimatedOnDemandCostWithCurrentCommitment !== null
            ? output.EstimatedOnDemandCostWithCurrentCommitment
            : undefined,
        EstimatedROI: output.EstimatedROI !== undefined && output.EstimatedROI !== null ? output.EstimatedROI : undefined,
        EstimatedSPCost: output.EstimatedSPCost !== undefined && output.EstimatedSPCost !== null ? output.EstimatedSPCost : undefined,
        EstimatedSavingsAmount: output.EstimatedSavingsAmount !== undefined && output.EstimatedSavingsAmount !== null
            ? output.EstimatedSavingsAmount
            : undefined,
        EstimatedSavingsPercentage: output.EstimatedSavingsPercentage !== undefined && output.EstimatedSavingsPercentage !== null
            ? output.EstimatedSavingsPercentage
            : undefined,
        HourlyCommitmentToPurchase: output.HourlyCommitmentToPurchase !== undefined && output.HourlyCommitmentToPurchase !== null
            ? output.HourlyCommitmentToPurchase
            : undefined,
        SavingsPlansDetails: output.SavingsPlansDetails !== undefined && output.SavingsPlansDetails !== null
            ? deserializeAws_json1_1SavingsPlansDetails(output.SavingsPlansDetails, context)
            : undefined,
        UpfrontCost: output.UpfrontCost !== undefined && output.UpfrontCost !== null ? output.UpfrontCost : undefined,
    };
};
var deserializeAws_json1_1SavingsPlansPurchaseRecommendationDetailList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SavingsPlansPurchaseRecommendationDetail(entry, context);
    });
};
var deserializeAws_json1_1SavingsPlansPurchaseRecommendationMetadata = function (output, context) {
    return {
        AdditionalMetadata: output.AdditionalMetadata !== undefined && output.AdditionalMetadata !== null
            ? output.AdditionalMetadata
            : undefined,
        GenerationTimestamp: output.GenerationTimestamp !== undefined && output.GenerationTimestamp !== null
            ? output.GenerationTimestamp
            : undefined,
        RecommendationId: output.RecommendationId !== undefined && output.RecommendationId !== null ? output.RecommendationId : undefined,
    };
};
var deserializeAws_json1_1SavingsPlansPurchaseRecommendationSummary = function (output, context) {
    return {
        CurrencyCode: output.CurrencyCode !== undefined && output.CurrencyCode !== null ? output.CurrencyCode : undefined,
        CurrentOnDemandSpend: output.CurrentOnDemandSpend !== undefined && output.CurrentOnDemandSpend !== null
            ? output.CurrentOnDemandSpend
            : undefined,
        DailyCommitmentToPurchase: output.DailyCommitmentToPurchase !== undefined && output.DailyCommitmentToPurchase !== null
            ? output.DailyCommitmentToPurchase
            : undefined,
        EstimatedMonthlySavingsAmount: output.EstimatedMonthlySavingsAmount !== undefined && output.EstimatedMonthlySavingsAmount !== null
            ? output.EstimatedMonthlySavingsAmount
            : undefined,
        EstimatedOnDemandCostWithCurrentCommitment: output.EstimatedOnDemandCostWithCurrentCommitment !== undefined &&
            output.EstimatedOnDemandCostWithCurrentCommitment !== null
            ? output.EstimatedOnDemandCostWithCurrentCommitment
            : undefined,
        EstimatedROI: output.EstimatedROI !== undefined && output.EstimatedROI !== null ? output.EstimatedROI : undefined,
        EstimatedSavingsAmount: output.EstimatedSavingsAmount !== undefined && output.EstimatedSavingsAmount !== null
            ? output.EstimatedSavingsAmount
            : undefined,
        EstimatedSavingsPercentage: output.EstimatedSavingsPercentage !== undefined && output.EstimatedSavingsPercentage !== null
            ? output.EstimatedSavingsPercentage
            : undefined,
        EstimatedTotalCost: output.EstimatedTotalCost !== undefined && output.EstimatedTotalCost !== null
            ? output.EstimatedTotalCost
            : undefined,
        HourlyCommitmentToPurchase: output.HourlyCommitmentToPurchase !== undefined && output.HourlyCommitmentToPurchase !== null
            ? output.HourlyCommitmentToPurchase
            : undefined,
        TotalRecommendationCount: output.TotalRecommendationCount !== undefined && output.TotalRecommendationCount !== null
            ? output.TotalRecommendationCount
            : undefined,
    };
};
var deserializeAws_json1_1SavingsPlansSavings = function (output, context) {
    return {
        NetSavings: output.NetSavings !== undefined && output.NetSavings !== null ? output.NetSavings : undefined,
        OnDemandCostEquivalent: output.OnDemandCostEquivalent !== undefined && output.OnDemandCostEquivalent !== null
            ? output.OnDemandCostEquivalent
            : undefined,
    };
};
var deserializeAws_json1_1SavingsPlansUtilization = function (output, context) {
    return {
        TotalCommitment: output.TotalCommitment !== undefined && output.TotalCommitment !== null ? output.TotalCommitment : undefined,
        UnusedCommitment: output.UnusedCommitment !== undefined && output.UnusedCommitment !== null ? output.UnusedCommitment : undefined,
        UsedCommitment: output.UsedCommitment !== undefined && output.UsedCommitment !== null ? output.UsedCommitment : undefined,
        UtilizationPercentage: output.UtilizationPercentage !== undefined && output.UtilizationPercentage !== null
            ? output.UtilizationPercentage
            : undefined,
    };
};
var deserializeAws_json1_1SavingsPlansUtilizationAggregates = function (output, context) {
    return {
        AmortizedCommitment: output.AmortizedCommitment !== undefined && output.AmortizedCommitment !== null
            ? deserializeAws_json1_1SavingsPlansAmortizedCommitment(output.AmortizedCommitment, context)
            : undefined,
        Savings: output.Savings !== undefined && output.Savings !== null
            ? deserializeAws_json1_1SavingsPlansSavings(output.Savings, context)
            : undefined,
        Utilization: output.Utilization !== undefined && output.Utilization !== null
            ? deserializeAws_json1_1SavingsPlansUtilization(output.Utilization, context)
            : undefined,
    };
};
var deserializeAws_json1_1SavingsPlansUtilizationByTime = function (output, context) {
    return {
        AmortizedCommitment: output.AmortizedCommitment !== undefined && output.AmortizedCommitment !== null
            ? deserializeAws_json1_1SavingsPlansAmortizedCommitment(output.AmortizedCommitment, context)
            : undefined,
        Savings: output.Savings !== undefined && output.Savings !== null
            ? deserializeAws_json1_1SavingsPlansSavings(output.Savings, context)
            : undefined,
        TimePeriod: output.TimePeriod !== undefined && output.TimePeriod !== null
            ? deserializeAws_json1_1DateInterval(output.TimePeriod, context)
            : undefined,
        Utilization: output.Utilization !== undefined && output.Utilization !== null
            ? deserializeAws_json1_1SavingsPlansUtilization(output.Utilization, context)
            : undefined,
    };
};
var deserializeAws_json1_1SavingsPlansUtilizationDetail = function (output, context) {
    return {
        AmortizedCommitment: output.AmortizedCommitment !== undefined && output.AmortizedCommitment !== null
            ? deserializeAws_json1_1SavingsPlansAmortizedCommitment(output.AmortizedCommitment, context)
            : undefined,
        Attributes: output.Attributes !== undefined && output.Attributes !== null
            ? deserializeAws_json1_1Attributes(output.Attributes, context)
            : undefined,
        Savings: output.Savings !== undefined && output.Savings !== null
            ? deserializeAws_json1_1SavingsPlansSavings(output.Savings, context)
            : undefined,
        SavingsPlanArn: output.SavingsPlanArn !== undefined && output.SavingsPlanArn !== null ? output.SavingsPlanArn : undefined,
        Utilization: output.Utilization !== undefined && output.Utilization !== null
            ? deserializeAws_json1_1SavingsPlansUtilization(output.Utilization, context)
            : undefined,
    };
};
var deserializeAws_json1_1SavingsPlansUtilizationDetails = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SavingsPlansUtilizationDetail(entry, context);
    });
};
var deserializeAws_json1_1SavingsPlansUtilizationsByTime = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SavingsPlansUtilizationByTime(entry, context);
    });
};
var deserializeAws_json1_1ServiceQuotaExceededException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1ServiceSpecification = function (output, context) {
    return {
        EC2Specification: output.EC2Specification !== undefined && output.EC2Specification !== null
            ? deserializeAws_json1_1EC2Specification(output.EC2Specification, context)
            : undefined,
    };
};
var deserializeAws_json1_1Subscriber = function (output, context) {
    return {
        Address: output.Address !== undefined && output.Address !== null ? output.Address : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
var deserializeAws_json1_1Subscribers = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Subscriber(entry, context);
    });
};
var deserializeAws_json1_1TagList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1TagValues = function (output, context) {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        MatchOptions: output.MatchOptions !== undefined && output.MatchOptions !== null
            ? deserializeAws_json1_1MatchOptions(output.MatchOptions, context)
            : undefined,
        Values: output.Values !== undefined && output.Values !== null
            ? deserializeAws_json1_1Values(output.Values, context)
            : undefined,
    };
};
var deserializeAws_json1_1TagValuesList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TagValues(entry, context);
    });
};
var deserializeAws_json1_1TargetInstance = function (output, context) {
    return {
        CurrencyCode: output.CurrencyCode !== undefined && output.CurrencyCode !== null ? output.CurrencyCode : undefined,
        DefaultTargetInstance: output.DefaultTargetInstance !== undefined && output.DefaultTargetInstance !== null
            ? output.DefaultTargetInstance
            : undefined,
        EstimatedMonthlyCost: output.EstimatedMonthlyCost !== undefined && output.EstimatedMonthlyCost !== null
            ? output.EstimatedMonthlyCost
            : undefined,
        EstimatedMonthlySavings: output.EstimatedMonthlySavings !== undefined && output.EstimatedMonthlySavings !== null
            ? output.EstimatedMonthlySavings
            : undefined,
        ExpectedResourceUtilization: output.ExpectedResourceUtilization !== undefined && output.ExpectedResourceUtilization !== null
            ? deserializeAws_json1_1ResourceUtilization(output.ExpectedResourceUtilization, context)
            : undefined,
        PlatformDifferences: output.PlatformDifferences !== undefined && output.PlatformDifferences !== null
            ? deserializeAws_json1_1PlatformDifferences(output.PlatformDifferences, context)
            : undefined,
        ResourceDetails: output.ResourceDetails !== undefined && output.ResourceDetails !== null
            ? deserializeAws_json1_1ResourceDetails(output.ResourceDetails, context)
            : undefined,
    };
};
var deserializeAws_json1_1TargetInstancesList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TargetInstance(entry, context);
    });
};
var deserializeAws_json1_1TerminateRecommendationDetail = function (output, context) {
    return {
        CurrencyCode: output.CurrencyCode !== undefined && output.CurrencyCode !== null ? output.CurrencyCode : undefined,
        EstimatedMonthlySavings: output.EstimatedMonthlySavings !== undefined && output.EstimatedMonthlySavings !== null
            ? output.EstimatedMonthlySavings
            : undefined,
    };
};
var deserializeAws_json1_1UnknownMonitorException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1UnknownSubscriptionException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1UnresolvableUsageUnitException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1UpdateAnomalyMonitorResponse = function (output, context) {
    return {
        MonitorArn: output.MonitorArn !== undefined && output.MonitorArn !== null ? output.MonitorArn : undefined,
    };
};
var deserializeAws_json1_1UpdateAnomalySubscriptionResponse = function (output, context) {
    return {
        SubscriptionArn: output.SubscriptionArn !== undefined && output.SubscriptionArn !== null ? output.SubscriptionArn : undefined,
    };
};
var deserializeAws_json1_1UpdateCostCategoryDefinitionResponse = function (output, context) {
    return {
        CostCategoryArn: output.CostCategoryArn !== undefined && output.CostCategoryArn !== null ? output.CostCategoryArn : undefined,
        EffectiveStart: output.EffectiveStart !== undefined && output.EffectiveStart !== null ? output.EffectiveStart : undefined,
    };
};
var deserializeAws_json1_1UtilizationByTime = function (output, context) {
    return {
        Groups: output.Groups !== undefined && output.Groups !== null
            ? deserializeAws_json1_1ReservationUtilizationGroups(output.Groups, context)
            : undefined,
        TimePeriod: output.TimePeriod !== undefined && output.TimePeriod !== null
            ? deserializeAws_json1_1DateInterval(output.TimePeriod, context)
            : undefined,
        Total: output.Total !== undefined && output.Total !== null
            ? deserializeAws_json1_1ReservationAggregates(output.Total, context)
            : undefined,
    };
};
var deserializeAws_json1_1UtilizationsByTime = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1UtilizationByTime(entry, context);
    });
};
var deserializeAws_json1_1Values = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
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
//# sourceMappingURL=Aws_json1_1.js.map