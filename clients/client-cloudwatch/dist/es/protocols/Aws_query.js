import { __assign, __awaiter, __generator, __read, __values } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent, getArrayIfSingleItem as __getArrayIfSingleItem, getValueFromTextNode as __getValueFromTextNode, } from "@aws-sdk/smithy-client";
import { decodeHTML } from "entities";
import { parse as xmlParse } from "fast-xml-parser";
export var serializeAws_queryDeleteAlarmsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteAlarmsInput(input, context)), { Action: "DeleteAlarms", Version: "2010-08-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteAnomalyDetectorCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteAnomalyDetectorInput(input, context)), { Action: "DeleteAnomalyDetector", Version: "2010-08-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteDashboardsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteDashboardsInput(input, context)), { Action: "DeleteDashboards", Version: "2010-08-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteInsightRulesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteInsightRulesInput(input, context)), { Action: "DeleteInsightRules", Version: "2010-08-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteMetricStreamCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteMetricStreamInput(input, context)), { Action: "DeleteMetricStream", Version: "2010-08-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeAlarmHistoryCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeAlarmHistoryInput(input, context)), { Action: "DescribeAlarmHistory", Version: "2010-08-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeAlarmsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeAlarmsInput(input, context)), { Action: "DescribeAlarms", Version: "2010-08-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeAlarmsForMetricCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeAlarmsForMetricInput(input, context)), { Action: "DescribeAlarmsForMetric", Version: "2010-08-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeAnomalyDetectorsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeAnomalyDetectorsInput(input, context)), { Action: "DescribeAnomalyDetectors", Version: "2010-08-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeInsightRulesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeInsightRulesInput(input, context)), { Action: "DescribeInsightRules", Version: "2010-08-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDisableAlarmActionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDisableAlarmActionsInput(input, context)), { Action: "DisableAlarmActions", Version: "2010-08-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDisableInsightRulesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDisableInsightRulesInput(input, context)), { Action: "DisableInsightRules", Version: "2010-08-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryEnableAlarmActionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryEnableAlarmActionsInput(input, context)), { Action: "EnableAlarmActions", Version: "2010-08-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryEnableInsightRulesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryEnableInsightRulesInput(input, context)), { Action: "EnableInsightRules", Version: "2010-08-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGetDashboardCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryGetDashboardInput(input, context)), { Action: "GetDashboard", Version: "2010-08-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGetInsightRuleReportCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryGetInsightRuleReportInput(input, context)), { Action: "GetInsightRuleReport", Version: "2010-08-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGetMetricDataCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryGetMetricDataInput(input, context)), { Action: "GetMetricData", Version: "2010-08-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGetMetricStatisticsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryGetMetricStatisticsInput(input, context)), { Action: "GetMetricStatistics", Version: "2010-08-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGetMetricStreamCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryGetMetricStreamInput(input, context)), { Action: "GetMetricStream", Version: "2010-08-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGetMetricWidgetImageCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryGetMetricWidgetImageInput(input, context)), { Action: "GetMetricWidgetImage", Version: "2010-08-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListDashboardsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListDashboardsInput(input, context)), { Action: "ListDashboards", Version: "2010-08-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListMetricsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListMetricsInput(input, context)), { Action: "ListMetrics", Version: "2010-08-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListMetricStreamsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListMetricStreamsInput(input, context)), { Action: "ListMetricStreams", Version: "2010-08-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListTagsForResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListTagsForResourceInput(input, context)), { Action: "ListTagsForResource", Version: "2010-08-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryPutAnomalyDetectorCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryPutAnomalyDetectorInput(input, context)), { Action: "PutAnomalyDetector", Version: "2010-08-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryPutCompositeAlarmCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryPutCompositeAlarmInput(input, context)), { Action: "PutCompositeAlarm", Version: "2010-08-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryPutDashboardCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryPutDashboardInput(input, context)), { Action: "PutDashboard", Version: "2010-08-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryPutInsightRuleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryPutInsightRuleInput(input, context)), { Action: "PutInsightRule", Version: "2010-08-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryPutMetricAlarmCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryPutMetricAlarmInput(input, context)), { Action: "PutMetricAlarm", Version: "2010-08-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryPutMetricDataCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryPutMetricDataInput(input, context)), { Action: "PutMetricData", Version: "2010-08-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryPutMetricStreamCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryPutMetricStreamInput(input, context)), { Action: "PutMetricStream", Version: "2010-08-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_querySetAlarmStateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_querySetAlarmStateInput(input, context)), { Action: "SetAlarmState", Version: "2010-08-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryStartMetricStreamsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryStartMetricStreamsInput(input, context)), { Action: "StartMetricStreams", Version: "2010-08-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryStopMetricStreamsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryStopMetricStreamsInput(input, context)), { Action: "StopMetricStreams", Version: "2010-08-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryTagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryTagResourceInput(input, context)), { Action: "TagResource", Version: "2010-08-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryUntagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryUntagResourceInput(input, context)), { Action: "UntagResource", Version: "2010-08-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_queryDeleteAlarmsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteAlarmsCommandError(output, context)];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                response = {
                    $metadata: deserializeMetadata(output),
                };
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteAlarmsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ResourceNotFound": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudwatch#ResourceNotFound": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryResourceNotFoundResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteAnomalyDetectorCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteAnomalyDetectorCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDeleteAnomalyDetectorOutput(data.DeleteAnomalyDetectorResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteAnomalyDetectorCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceFault": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudwatch#InternalServiceFault": return [3 /*break*/, 2];
                    case "InvalidParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudwatch#InvalidParameterValueException": return [3 /*break*/, 4];
                    case "MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudwatch#MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cloudwatch#ResourceNotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteDashboardsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteDashboardsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDeleteDashboardsOutput(data.DeleteDashboardsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteDashboardsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DashboardNotFoundError": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudwatch#DashboardNotFoundError": return [3 /*break*/, 2];
                    case "InternalServiceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudwatch#InternalServiceFault": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudwatch#InvalidParameterValueException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDashboardNotFoundErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteInsightRulesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteInsightRulesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDeleteInsightRulesOutput(data.DeleteInsightRulesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteInsightRulesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudwatch#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "MissingRequiredParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudwatch#MissingRequiredParameterException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteMetricStreamCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteMetricStreamCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDeleteMetricStreamOutput(data.DeleteMetricStreamResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteMetricStreamCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceFault": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudwatch#InternalServiceFault": return [3 /*break*/, 2];
                    case "InvalidParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudwatch#InvalidParameterValueException": return [3 /*break*/, 4];
                    case "MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudwatch#MissingRequiredParameterException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeAlarmHistoryCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeAlarmHistoryCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeAlarmHistoryOutput(data.DescribeAlarmHistoryResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeAlarmHistoryCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidNextToken": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudwatch#InvalidNextToken": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeAlarmsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeAlarmsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeAlarmsOutput(data.DescribeAlarmsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeAlarmsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidNextToken": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudwatch#InvalidNextToken": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeAlarmsForMetricCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeAlarmsForMetricCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeAlarmsForMetricOutput(data.DescribeAlarmsForMetricResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeAlarmsForMetricCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeAnomalyDetectorsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeAnomalyDetectorsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeAnomalyDetectorsOutput(data.DescribeAnomalyDetectorsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeAnomalyDetectorsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceFault": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudwatch#InternalServiceFault": return [3 /*break*/, 2];
                    case "InvalidNextToken": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudwatch#InvalidNextToken": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudwatch#InvalidParameterValueException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeInsightRulesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeInsightRulesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeInsightRulesOutput(data.DescribeInsightRulesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeInsightRulesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidNextToken": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudwatch#InvalidNextToken": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDisableAlarmActionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDisableAlarmActionsCommandError(output, context)];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                response = {
                    $metadata: deserializeMetadata(output),
                };
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDisableAlarmActionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDisableInsightRulesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDisableInsightRulesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDisableInsightRulesOutput(data.DisableInsightRulesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDisableInsightRulesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudwatch#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "MissingRequiredParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudwatch#MissingRequiredParameterException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryEnableAlarmActionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryEnableAlarmActionsCommandError(output, context)];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                response = {
                    $metadata: deserializeMetadata(output),
                };
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryEnableAlarmActionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryEnableInsightRulesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryEnableInsightRulesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryEnableInsightRulesOutput(data.EnableInsightRulesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryEnableInsightRulesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudwatch#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudwatch#LimitExceededException": return [3 /*break*/, 4];
                    case "MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudwatch#MissingRequiredParameterException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryGetDashboardCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGetDashboardCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGetDashboardOutput(data.GetDashboardResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGetDashboardCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DashboardNotFoundError": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudwatch#DashboardNotFoundError": return [3 /*break*/, 2];
                    case "InternalServiceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudwatch#InternalServiceFault": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudwatch#InvalidParameterValueException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDashboardNotFoundErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryGetInsightRuleReportCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGetInsightRuleReportCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGetInsightRuleReportOutput(data.GetInsightRuleReportResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGetInsightRuleReportCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudwatch#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "MissingRequiredParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudwatch#MissingRequiredParameterException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudwatch#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryGetMetricDataCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGetMetricDataCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGetMetricDataOutput(data.GetMetricDataResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGetMetricDataCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidNextToken": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudwatch#InvalidNextToken": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryGetMetricStatisticsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGetMetricStatisticsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGetMetricStatisticsOutput(data.GetMetricStatisticsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGetMetricStatisticsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceFault": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudwatch#InternalServiceFault": return [3 /*break*/, 2];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudwatch#InvalidParameterCombinationException": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudwatch#InvalidParameterValueException": return [3 /*break*/, 6];
                    case "MissingRequiredParameterException": return [3 /*break*/, 8];
                    case "com.amazonaws.cloudwatch#MissingRequiredParameterException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryGetMetricStreamCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGetMetricStreamCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGetMetricStreamOutput(data.GetMetricStreamResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGetMetricStreamCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceFault": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudwatch#InternalServiceFault": return [3 /*break*/, 2];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudwatch#InvalidParameterCombinationException": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudwatch#InvalidParameterValueException": return [3 /*break*/, 6];
                    case "MissingRequiredParameterException": return [3 /*break*/, 8];
                    case "com.amazonaws.cloudwatch#MissingRequiredParameterException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.cloudwatch#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryGetMetricWidgetImageCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGetMetricWidgetImageCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGetMetricWidgetImageOutput(data.GetMetricWidgetImageResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGetMetricWidgetImageCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListDashboardsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListDashboardsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListDashboardsOutput(data.ListDashboardsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListDashboardsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceFault": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudwatch#InternalServiceFault": return [3 /*break*/, 2];
                    case "InvalidParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudwatch#InvalidParameterValueException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListMetricsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListMetricsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListMetricsOutput(data.ListMetricsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListMetricsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceFault": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudwatch#InternalServiceFault": return [3 /*break*/, 2];
                    case "InvalidParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudwatch#InvalidParameterValueException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListMetricStreamsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListMetricStreamsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListMetricStreamsOutput(data.ListMetricStreamsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListMetricStreamsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceFault": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudwatch#InternalServiceFault": return [3 /*break*/, 2];
                    case "InvalidNextToken": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudwatch#InvalidNextToken": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudwatch#InvalidParameterValueException": return [3 /*break*/, 6];
                    case "MissingRequiredParameterException": return [3 /*break*/, 8];
                    case "com.amazonaws.cloudwatch#MissingRequiredParameterException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListTagsForResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListTagsForResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListTagsForResourceOutput(data.ListTagsForResourceResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListTagsForResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceFault": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudwatch#InternalServiceFault": return [3 /*break*/, 2];
                    case "InvalidParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudwatch#InvalidParameterValueException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudwatch#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryPutAnomalyDetectorCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryPutAnomalyDetectorCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryPutAnomalyDetectorOutput(data.PutAnomalyDetectorResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryPutAnomalyDetectorCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceFault": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudwatch#InternalServiceFault": return [3 /*break*/, 2];
                    case "InvalidParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudwatch#InvalidParameterValueException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudwatch#LimitExceededException": return [3 /*break*/, 6];
                    case "MissingRequiredParameterException": return [3 /*break*/, 8];
                    case "com.amazonaws.cloudwatch#MissingRequiredParameterException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryPutCompositeAlarmCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryPutCompositeAlarmCommandError(output, context)];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                response = {
                    $metadata: deserializeMetadata(output),
                };
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryPutCompositeAlarmCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "LimitExceededFault": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudwatch#LimitExceededFault": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryPutDashboardCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryPutDashboardCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryPutDashboardOutput(data.PutDashboardResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryPutDashboardCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DashboardInvalidInputError": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudwatch#DashboardInvalidInputError": return [3 /*break*/, 2];
                    case "InternalServiceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudwatch#InternalServiceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDashboardInvalidInputErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryPutInsightRuleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryPutInsightRuleCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryPutInsightRuleOutput(data.PutInsightRuleResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryPutInsightRuleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudwatch#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudwatch#LimitExceededException": return [3 /*break*/, 4];
                    case "MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudwatch#MissingRequiredParameterException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryPutMetricAlarmCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryPutMetricAlarmCommandError(output, context)];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                response = {
                    $metadata: deserializeMetadata(output),
                };
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryPutMetricAlarmCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "LimitExceededFault": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudwatch#LimitExceededFault": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryPutMetricDataCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryPutMetricDataCommandError(output, context)];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                response = {
                    $metadata: deserializeMetadata(output),
                };
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryPutMetricDataCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceFault": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudwatch#InternalServiceFault": return [3 /*break*/, 2];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudwatch#InvalidParameterCombinationException": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudwatch#InvalidParameterValueException": return [3 /*break*/, 6];
                    case "MissingRequiredParameterException": return [3 /*break*/, 8];
                    case "com.amazonaws.cloudwatch#MissingRequiredParameterException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryPutMetricStreamCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryPutMetricStreamCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryPutMetricStreamOutput(data.PutMetricStreamResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryPutMetricStreamCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudwatch#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InternalServiceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudwatch#InternalServiceFault": return [3 /*break*/, 4];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudwatch#InvalidParameterCombinationException": return [3 /*break*/, 6];
                    case "InvalidParameterValueException": return [3 /*break*/, 8];
                    case "com.amazonaws.cloudwatch#InvalidParameterValueException": return [3 /*break*/, 8];
                    case "MissingRequiredParameterException": return [3 /*break*/, 10];
                    case "com.amazonaws.cloudwatch#MissingRequiredParameterException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_querySetAlarmStateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_querySetAlarmStateCommandError(output, context)];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                response = {
                    $metadata: deserializeMetadata(output),
                };
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_querySetAlarmStateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidFormatFault": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudwatch#InvalidFormatFault": return [3 /*break*/, 2];
                    case "ResourceNotFound": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudwatch#ResourceNotFound": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidFormatFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryResourceNotFoundResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryStartMetricStreamsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryStartMetricStreamsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryStartMetricStreamsOutput(data.StartMetricStreamsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryStartMetricStreamsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceFault": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudwatch#InternalServiceFault": return [3 /*break*/, 2];
                    case "InvalidParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudwatch#InvalidParameterValueException": return [3 /*break*/, 4];
                    case "MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudwatch#MissingRequiredParameterException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryStopMetricStreamsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryStopMetricStreamsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryStopMetricStreamsOutput(data.StopMetricStreamsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryStopMetricStreamsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServiceFault": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudwatch#InternalServiceFault": return [3 /*break*/, 2];
                    case "InvalidParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudwatch#InvalidParameterValueException": return [3 /*break*/, 4];
                    case "MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudwatch#MissingRequiredParameterException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryTagResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryTagResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryTagResourceOutput(data.TagResourceResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryTagResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudwatch#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InternalServiceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudwatch#InternalServiceFault": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudwatch#InvalidParameterValueException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cloudwatch#ResourceNotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryUntagResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryUntagResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryUntagResourceOutput(data.UntagResourceResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryUntagResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudwatch#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InternalServiceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudwatch#InternalServiceFault": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudwatch#InvalidParameterValueException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cloudwatch#ResourceNotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
var deserializeAws_queryConcurrentModificationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryConcurrentModificationException(body.Error, context);
        contents = __assign({ name: "ConcurrentModificationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryDashboardInvalidInputErrorResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryDashboardInvalidInputError(body.Error, context);
        contents = __assign({ name: "DashboardInvalidInputError", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryDashboardNotFoundErrorResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryDashboardNotFoundError(body.Error, context);
        contents = __assign({ name: "DashboardNotFoundError", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInternalServiceFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInternalServiceFault(body.Error, context);
        contents = __assign({ name: "InternalServiceFault", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidFormatFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidFormatFault(body.Error, context);
        contents = __assign({ name: "InvalidFormatFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidNextTokenResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidNextToken(body.Error, context);
        contents = __assign({ name: "InvalidNextToken", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidParameterCombinationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidParameterCombinationException(body.Error, context);
        contents = __assign({ name: "InvalidParameterCombinationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidParameterValueExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidParameterValueException(body.Error, context);
        contents = __assign({ name: "InvalidParameterValueException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryLimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryLimitExceededException(body.Error, context);
        contents = __assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryLimitExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryLimitExceededFault(body.Error, context);
        contents = __assign({ name: "LimitExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryMissingRequiredParameterExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryMissingRequiredParameterException(body.Error, context);
        contents = __assign({ name: "MissingRequiredParameterException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryResourceNotFoundResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryResourceNotFound(body.Error, context);
        contents = __assign({ name: "ResourceNotFound", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryResourceNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryResourceNotFoundException(body.Error, context);
        contents = __assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_queryAlarmNames = function (input, context) {
    var e_1, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_1 = __values(input), input_1_1 = input_1.next(); !input_1_1.done; input_1_1 = input_1.next()) {
            var entry = input_1_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (input_1_1 && !input_1_1.done && (_a = input_1.return)) _a.call(input_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return entries;
};
var serializeAws_queryAlarmTypes = function (input, context) {
    var e_2, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_2 = __values(input), input_2_1 = input_2.next(); !input_2_1.done; input_2_1 = input_2.next()) {
            var entry = input_2_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (input_2_1 && !input_2_1.done && (_a = input_2.return)) _a.call(input_2);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return entries;
};
var serializeAws_queryAnomalyDetectorConfiguration = function (input, context) {
    var entries = {};
    if (input.ExcludedTimeRanges !== undefined && input.ExcludedTimeRanges !== null) {
        var memberEntries = serializeAws_queryAnomalyDetectorExcludedTimeRanges(input.ExcludedTimeRanges, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ExcludedTimeRanges." + key;
            entries[loc] = value;
        });
    }
    if (input.MetricTimezone !== undefined && input.MetricTimezone !== null) {
        entries["MetricTimezone"] = input.MetricTimezone;
    }
    return entries;
};
var serializeAws_queryAnomalyDetectorExcludedTimeRanges = function (input, context) {
    var e_3, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_3 = __values(input), input_3_1 = input_3.next(); !input_3_1.done; input_3_1 = input_3.next()) {
            var entry = input_3_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryRange(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["member." + counter + "." + key] = value;
            });
            counter++;
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (input_3_1 && !input_3_1.done && (_a = input_3.return)) _a.call(input_3);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return entries;
};
var serializeAws_queryCounts = function (input, context) {
    var e_4, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_4 = __values(input), input_4_1 = input_4.next(); !input_4_1.done; input_4_1 = input_4.next()) {
            var entry = input_4_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (input_4_1 && !input_4_1.done && (_a = input_4.return)) _a.call(input_4);
        }
        finally { if (e_4) throw e_4.error; }
    }
    return entries;
};
var serializeAws_queryDashboardNames = function (input, context) {
    var e_5, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_5 = __values(input), input_5_1 = input_5.next(); !input_5_1.done; input_5_1 = input_5.next()) {
            var entry = input_5_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (input_5_1 && !input_5_1.done && (_a = input_5.return)) _a.call(input_5);
        }
        finally { if (e_5) throw e_5.error; }
    }
    return entries;
};
var serializeAws_queryDeleteAlarmsInput = function (input, context) {
    var entries = {};
    if (input.AlarmNames !== undefined && input.AlarmNames !== null) {
        var memberEntries = serializeAws_queryAlarmNames(input.AlarmNames, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "AlarmNames." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryDeleteAnomalyDetectorInput = function (input, context) {
    var entries = {};
    if (input.Namespace !== undefined && input.Namespace !== null) {
        entries["Namespace"] = input.Namespace;
    }
    if (input.MetricName !== undefined && input.MetricName !== null) {
        entries["MetricName"] = input.MetricName;
    }
    if (input.Dimensions !== undefined && input.Dimensions !== null) {
        var memberEntries = serializeAws_queryDimensions(input.Dimensions, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Dimensions." + key;
            entries[loc] = value;
        });
    }
    if (input.Stat !== undefined && input.Stat !== null) {
        entries["Stat"] = input.Stat;
    }
    return entries;
};
var serializeAws_queryDeleteDashboardsInput = function (input, context) {
    var entries = {};
    if (input.DashboardNames !== undefined && input.DashboardNames !== null) {
        var memberEntries = serializeAws_queryDashboardNames(input.DashboardNames, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "DashboardNames." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryDeleteInsightRulesInput = function (input, context) {
    var entries = {};
    if (input.RuleNames !== undefined && input.RuleNames !== null) {
        var memberEntries = serializeAws_queryInsightRuleNames(input.RuleNames, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "RuleNames." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryDeleteMetricStreamInput = function (input, context) {
    var entries = {};
    if (input.Name !== undefined && input.Name !== null) {
        entries["Name"] = input.Name;
    }
    return entries;
};
var serializeAws_queryDescribeAlarmHistoryInput = function (input, context) {
    var entries = {};
    if (input.AlarmName !== undefined && input.AlarmName !== null) {
        entries["AlarmName"] = input.AlarmName;
    }
    if (input.AlarmTypes !== undefined && input.AlarmTypes !== null) {
        var memberEntries = serializeAws_queryAlarmTypes(input.AlarmTypes, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "AlarmTypes." + key;
            entries[loc] = value;
        });
    }
    if (input.HistoryItemType !== undefined && input.HistoryItemType !== null) {
        entries["HistoryItemType"] = input.HistoryItemType;
    }
    if (input.StartDate !== undefined && input.StartDate !== null) {
        entries["StartDate"] = input.StartDate.toISOString().split(".")[0] + "Z";
    }
    if (input.EndDate !== undefined && input.EndDate !== null) {
        entries["EndDate"] = input.EndDate.toISOString().split(".")[0] + "Z";
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.ScanBy !== undefined && input.ScanBy !== null) {
        entries["ScanBy"] = input.ScanBy;
    }
    return entries;
};
var serializeAws_queryDescribeAlarmsForMetricInput = function (input, context) {
    var entries = {};
    if (input.MetricName !== undefined && input.MetricName !== null) {
        entries["MetricName"] = input.MetricName;
    }
    if (input.Namespace !== undefined && input.Namespace !== null) {
        entries["Namespace"] = input.Namespace;
    }
    if (input.Statistic !== undefined && input.Statistic !== null) {
        entries["Statistic"] = input.Statistic;
    }
    if (input.ExtendedStatistic !== undefined && input.ExtendedStatistic !== null) {
        entries["ExtendedStatistic"] = input.ExtendedStatistic;
    }
    if (input.Dimensions !== undefined && input.Dimensions !== null) {
        var memberEntries = serializeAws_queryDimensions(input.Dimensions, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Dimensions." + key;
            entries[loc] = value;
        });
    }
    if (input.Period !== undefined && input.Period !== null) {
        entries["Period"] = input.Period;
    }
    if (input.Unit !== undefined && input.Unit !== null) {
        entries["Unit"] = input.Unit;
    }
    return entries;
};
var serializeAws_queryDescribeAlarmsInput = function (input, context) {
    var entries = {};
    if (input.AlarmNames !== undefined && input.AlarmNames !== null) {
        var memberEntries = serializeAws_queryAlarmNames(input.AlarmNames, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "AlarmNames." + key;
            entries[loc] = value;
        });
    }
    if (input.AlarmNamePrefix !== undefined && input.AlarmNamePrefix !== null) {
        entries["AlarmNamePrefix"] = input.AlarmNamePrefix;
    }
    if (input.AlarmTypes !== undefined && input.AlarmTypes !== null) {
        var memberEntries = serializeAws_queryAlarmTypes(input.AlarmTypes, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "AlarmTypes." + key;
            entries[loc] = value;
        });
    }
    if (input.ChildrenOfAlarmName !== undefined && input.ChildrenOfAlarmName !== null) {
        entries["ChildrenOfAlarmName"] = input.ChildrenOfAlarmName;
    }
    if (input.ParentsOfAlarmName !== undefined && input.ParentsOfAlarmName !== null) {
        entries["ParentsOfAlarmName"] = input.ParentsOfAlarmName;
    }
    if (input.StateValue !== undefined && input.StateValue !== null) {
        entries["StateValue"] = input.StateValue;
    }
    if (input.ActionPrefix !== undefined && input.ActionPrefix !== null) {
        entries["ActionPrefix"] = input.ActionPrefix;
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
var serializeAws_queryDescribeAnomalyDetectorsInput = function (input, context) {
    var entries = {};
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.MaxResults !== undefined && input.MaxResults !== null) {
        entries["MaxResults"] = input.MaxResults;
    }
    if (input.Namespace !== undefined && input.Namespace !== null) {
        entries["Namespace"] = input.Namespace;
    }
    if (input.MetricName !== undefined && input.MetricName !== null) {
        entries["MetricName"] = input.MetricName;
    }
    if (input.Dimensions !== undefined && input.Dimensions !== null) {
        var memberEntries = serializeAws_queryDimensions(input.Dimensions, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Dimensions." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryDescribeInsightRulesInput = function (input, context) {
    var entries = {};
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.MaxResults !== undefined && input.MaxResults !== null) {
        entries["MaxResults"] = input.MaxResults;
    }
    return entries;
};
var serializeAws_queryDimension = function (input, context) {
    var entries = {};
    if (input.Name !== undefined && input.Name !== null) {
        entries["Name"] = input.Name;
    }
    if (input.Value !== undefined && input.Value !== null) {
        entries["Value"] = input.Value;
    }
    return entries;
};
var serializeAws_queryDimensionFilter = function (input, context) {
    var entries = {};
    if (input.Name !== undefined && input.Name !== null) {
        entries["Name"] = input.Name;
    }
    if (input.Value !== undefined && input.Value !== null) {
        entries["Value"] = input.Value;
    }
    return entries;
};
var serializeAws_queryDimensionFilters = function (input, context) {
    var e_6, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_6 = __values(input), input_6_1 = input_6.next(); !input_6_1.done; input_6_1 = input_6.next()) {
            var entry = input_6_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryDimensionFilter(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["member." + counter + "." + key] = value;
            });
            counter++;
        }
    }
    catch (e_6_1) { e_6 = { error: e_6_1 }; }
    finally {
        try {
            if (input_6_1 && !input_6_1.done && (_a = input_6.return)) _a.call(input_6);
        }
        finally { if (e_6) throw e_6.error; }
    }
    return entries;
};
var serializeAws_queryDimensions = function (input, context) {
    var e_7, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_7 = __values(input), input_7_1 = input_7.next(); !input_7_1.done; input_7_1 = input_7.next()) {
            var entry = input_7_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryDimension(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["member." + counter + "." + key] = value;
            });
            counter++;
        }
    }
    catch (e_7_1) { e_7 = { error: e_7_1 }; }
    finally {
        try {
            if (input_7_1 && !input_7_1.done && (_a = input_7.return)) _a.call(input_7);
        }
        finally { if (e_7) throw e_7.error; }
    }
    return entries;
};
var serializeAws_queryDisableAlarmActionsInput = function (input, context) {
    var entries = {};
    if (input.AlarmNames !== undefined && input.AlarmNames !== null) {
        var memberEntries = serializeAws_queryAlarmNames(input.AlarmNames, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "AlarmNames." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryDisableInsightRulesInput = function (input, context) {
    var entries = {};
    if (input.RuleNames !== undefined && input.RuleNames !== null) {
        var memberEntries = serializeAws_queryInsightRuleNames(input.RuleNames, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "RuleNames." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryEnableAlarmActionsInput = function (input, context) {
    var entries = {};
    if (input.AlarmNames !== undefined && input.AlarmNames !== null) {
        var memberEntries = serializeAws_queryAlarmNames(input.AlarmNames, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "AlarmNames." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryEnableInsightRulesInput = function (input, context) {
    var entries = {};
    if (input.RuleNames !== undefined && input.RuleNames !== null) {
        var memberEntries = serializeAws_queryInsightRuleNames(input.RuleNames, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "RuleNames." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryExtendedStatistics = function (input, context) {
    var e_8, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_8 = __values(input), input_8_1 = input_8.next(); !input_8_1.done; input_8_1 = input_8.next()) {
            var entry = input_8_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_8_1) { e_8 = { error: e_8_1 }; }
    finally {
        try {
            if (input_8_1 && !input_8_1.done && (_a = input_8.return)) _a.call(input_8);
        }
        finally { if (e_8) throw e_8.error; }
    }
    return entries;
};
var serializeAws_queryGetDashboardInput = function (input, context) {
    var entries = {};
    if (input.DashboardName !== undefined && input.DashboardName !== null) {
        entries["DashboardName"] = input.DashboardName;
    }
    return entries;
};
var serializeAws_queryGetInsightRuleReportInput = function (input, context) {
    var entries = {};
    if (input.RuleName !== undefined && input.RuleName !== null) {
        entries["RuleName"] = input.RuleName;
    }
    if (input.StartTime !== undefined && input.StartTime !== null) {
        entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
    }
    if (input.EndTime !== undefined && input.EndTime !== null) {
        entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
    }
    if (input.Period !== undefined && input.Period !== null) {
        entries["Period"] = input.Period;
    }
    if (input.MaxContributorCount !== undefined && input.MaxContributorCount !== null) {
        entries["MaxContributorCount"] = input.MaxContributorCount;
    }
    if (input.Metrics !== undefined && input.Metrics !== null) {
        var memberEntries = serializeAws_queryInsightRuleMetricList(input.Metrics, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Metrics." + key;
            entries[loc] = value;
        });
    }
    if (input.OrderBy !== undefined && input.OrderBy !== null) {
        entries["OrderBy"] = input.OrderBy;
    }
    return entries;
};
var serializeAws_queryGetMetricDataInput = function (input, context) {
    var entries = {};
    if (input.MetricDataQueries !== undefined && input.MetricDataQueries !== null) {
        var memberEntries = serializeAws_queryMetricDataQueries(input.MetricDataQueries, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "MetricDataQueries." + key;
            entries[loc] = value;
        });
    }
    if (input.StartTime !== undefined && input.StartTime !== null) {
        entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
    }
    if (input.EndTime !== undefined && input.EndTime !== null) {
        entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
    }
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.ScanBy !== undefined && input.ScanBy !== null) {
        entries["ScanBy"] = input.ScanBy;
    }
    if (input.MaxDatapoints !== undefined && input.MaxDatapoints !== null) {
        entries["MaxDatapoints"] = input.MaxDatapoints;
    }
    if (input.LabelOptions !== undefined && input.LabelOptions !== null) {
        var memberEntries = serializeAws_queryLabelOptions(input.LabelOptions, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "LabelOptions." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryGetMetricStatisticsInput = function (input, context) {
    var entries = {};
    if (input.Namespace !== undefined && input.Namespace !== null) {
        entries["Namespace"] = input.Namespace;
    }
    if (input.MetricName !== undefined && input.MetricName !== null) {
        entries["MetricName"] = input.MetricName;
    }
    if (input.Dimensions !== undefined && input.Dimensions !== null) {
        var memberEntries = serializeAws_queryDimensions(input.Dimensions, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Dimensions." + key;
            entries[loc] = value;
        });
    }
    if (input.StartTime !== undefined && input.StartTime !== null) {
        entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
    }
    if (input.EndTime !== undefined && input.EndTime !== null) {
        entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
    }
    if (input.Period !== undefined && input.Period !== null) {
        entries["Period"] = input.Period;
    }
    if (input.Statistics !== undefined && input.Statistics !== null) {
        var memberEntries = serializeAws_queryStatistics(input.Statistics, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Statistics." + key;
            entries[loc] = value;
        });
    }
    if (input.ExtendedStatistics !== undefined && input.ExtendedStatistics !== null) {
        var memberEntries = serializeAws_queryExtendedStatistics(input.ExtendedStatistics, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ExtendedStatistics." + key;
            entries[loc] = value;
        });
    }
    if (input.Unit !== undefined && input.Unit !== null) {
        entries["Unit"] = input.Unit;
    }
    return entries;
};
var serializeAws_queryGetMetricStreamInput = function (input, context) {
    var entries = {};
    if (input.Name !== undefined && input.Name !== null) {
        entries["Name"] = input.Name;
    }
    return entries;
};
var serializeAws_queryGetMetricWidgetImageInput = function (input, context) {
    var entries = {};
    if (input.MetricWidget !== undefined && input.MetricWidget !== null) {
        entries["MetricWidget"] = input.MetricWidget;
    }
    if (input.OutputFormat !== undefined && input.OutputFormat !== null) {
        entries["OutputFormat"] = input.OutputFormat;
    }
    return entries;
};
var serializeAws_queryInsightRuleMetricList = function (input, context) {
    var e_9, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_9 = __values(input), input_9_1 = input_9.next(); !input_9_1.done; input_9_1 = input_9.next()) {
            var entry = input_9_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_9_1) { e_9 = { error: e_9_1 }; }
    finally {
        try {
            if (input_9_1 && !input_9_1.done && (_a = input_9.return)) _a.call(input_9);
        }
        finally { if (e_9) throw e_9.error; }
    }
    return entries;
};
var serializeAws_queryInsightRuleNames = function (input, context) {
    var e_10, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_10 = __values(input), input_10_1 = input_10.next(); !input_10_1.done; input_10_1 = input_10.next()) {
            var entry = input_10_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_10_1) { e_10 = { error: e_10_1 }; }
    finally {
        try {
            if (input_10_1 && !input_10_1.done && (_a = input_10.return)) _a.call(input_10);
        }
        finally { if (e_10) throw e_10.error; }
    }
    return entries;
};
var serializeAws_queryLabelOptions = function (input, context) {
    var entries = {};
    if (input.Timezone !== undefined && input.Timezone !== null) {
        entries["Timezone"] = input.Timezone;
    }
    return entries;
};
var serializeAws_queryListDashboardsInput = function (input, context) {
    var entries = {};
    if (input.DashboardNamePrefix !== undefined && input.DashboardNamePrefix !== null) {
        entries["DashboardNamePrefix"] = input.DashboardNamePrefix;
    }
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
var serializeAws_queryListMetricsInput = function (input, context) {
    var entries = {};
    if (input.Namespace !== undefined && input.Namespace !== null) {
        entries["Namespace"] = input.Namespace;
    }
    if (input.MetricName !== undefined && input.MetricName !== null) {
        entries["MetricName"] = input.MetricName;
    }
    if (input.Dimensions !== undefined && input.Dimensions !== null) {
        var memberEntries = serializeAws_queryDimensionFilters(input.Dimensions, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Dimensions." + key;
            entries[loc] = value;
        });
    }
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.RecentlyActive !== undefined && input.RecentlyActive !== null) {
        entries["RecentlyActive"] = input.RecentlyActive;
    }
    return entries;
};
var serializeAws_queryListMetricStreamsInput = function (input, context) {
    var entries = {};
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.MaxResults !== undefined && input.MaxResults !== null) {
        entries["MaxResults"] = input.MaxResults;
    }
    return entries;
};
var serializeAws_queryListTagsForResourceInput = function (input, context) {
    var entries = {};
    if (input.ResourceARN !== undefined && input.ResourceARN !== null) {
        entries["ResourceARN"] = input.ResourceARN;
    }
    return entries;
};
var serializeAws_queryMetric = function (input, context) {
    var entries = {};
    if (input.Namespace !== undefined && input.Namespace !== null) {
        entries["Namespace"] = input.Namespace;
    }
    if (input.MetricName !== undefined && input.MetricName !== null) {
        entries["MetricName"] = input.MetricName;
    }
    if (input.Dimensions !== undefined && input.Dimensions !== null) {
        var memberEntries = serializeAws_queryDimensions(input.Dimensions, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Dimensions." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryMetricData = function (input, context) {
    var e_11, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_11 = __values(input), input_11_1 = input_11.next(); !input_11_1.done; input_11_1 = input_11.next()) {
            var entry = input_11_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryMetricDatum(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["member." + counter + "." + key] = value;
            });
            counter++;
        }
    }
    catch (e_11_1) { e_11 = { error: e_11_1 }; }
    finally {
        try {
            if (input_11_1 && !input_11_1.done && (_a = input_11.return)) _a.call(input_11);
        }
        finally { if (e_11) throw e_11.error; }
    }
    return entries;
};
var serializeAws_queryMetricDataQueries = function (input, context) {
    var e_12, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_12 = __values(input), input_12_1 = input_12.next(); !input_12_1.done; input_12_1 = input_12.next()) {
            var entry = input_12_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryMetricDataQuery(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["member." + counter + "." + key] = value;
            });
            counter++;
        }
    }
    catch (e_12_1) { e_12 = { error: e_12_1 }; }
    finally {
        try {
            if (input_12_1 && !input_12_1.done && (_a = input_12.return)) _a.call(input_12);
        }
        finally { if (e_12) throw e_12.error; }
    }
    return entries;
};
var serializeAws_queryMetricDataQuery = function (input, context) {
    var entries = {};
    if (input.Id !== undefined && input.Id !== null) {
        entries["Id"] = input.Id;
    }
    if (input.MetricStat !== undefined && input.MetricStat !== null) {
        var memberEntries = serializeAws_queryMetricStat(input.MetricStat, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "MetricStat." + key;
            entries[loc] = value;
        });
    }
    if (input.Expression !== undefined && input.Expression !== null) {
        entries["Expression"] = input.Expression;
    }
    if (input.Label !== undefined && input.Label !== null) {
        entries["Label"] = input.Label;
    }
    if (input.ReturnData !== undefined && input.ReturnData !== null) {
        entries["ReturnData"] = input.ReturnData;
    }
    if (input.Period !== undefined && input.Period !== null) {
        entries["Period"] = input.Period;
    }
    return entries;
};
var serializeAws_queryMetricDatum = function (input, context) {
    var entries = {};
    if (input.MetricName !== undefined && input.MetricName !== null) {
        entries["MetricName"] = input.MetricName;
    }
    if (input.Dimensions !== undefined && input.Dimensions !== null) {
        var memberEntries = serializeAws_queryDimensions(input.Dimensions, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Dimensions." + key;
            entries[loc] = value;
        });
    }
    if (input.Timestamp !== undefined && input.Timestamp !== null) {
        entries["Timestamp"] = input.Timestamp.toISOString().split(".")[0] + "Z";
    }
    if (input.Value !== undefined && input.Value !== null) {
        entries["Value"] = input.Value;
    }
    if (input.StatisticValues !== undefined && input.StatisticValues !== null) {
        var memberEntries = serializeAws_queryStatisticSet(input.StatisticValues, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "StatisticValues." + key;
            entries[loc] = value;
        });
    }
    if (input.Values !== undefined && input.Values !== null) {
        var memberEntries = serializeAws_queryValues(input.Values, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Values." + key;
            entries[loc] = value;
        });
    }
    if (input.Counts !== undefined && input.Counts !== null) {
        var memberEntries = serializeAws_queryCounts(input.Counts, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Counts." + key;
            entries[loc] = value;
        });
    }
    if (input.Unit !== undefined && input.Unit !== null) {
        entries["Unit"] = input.Unit;
    }
    if (input.StorageResolution !== undefined && input.StorageResolution !== null) {
        entries["StorageResolution"] = input.StorageResolution;
    }
    return entries;
};
var serializeAws_queryMetricStat = function (input, context) {
    var entries = {};
    if (input.Metric !== undefined && input.Metric !== null) {
        var memberEntries = serializeAws_queryMetric(input.Metric, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Metric." + key;
            entries[loc] = value;
        });
    }
    if (input.Period !== undefined && input.Period !== null) {
        entries["Period"] = input.Period;
    }
    if (input.Stat !== undefined && input.Stat !== null) {
        entries["Stat"] = input.Stat;
    }
    if (input.Unit !== undefined && input.Unit !== null) {
        entries["Unit"] = input.Unit;
    }
    return entries;
};
var serializeAws_queryMetricStreamFilter = function (input, context) {
    var entries = {};
    if (input.Namespace !== undefined && input.Namespace !== null) {
        entries["Namespace"] = input.Namespace;
    }
    return entries;
};
var serializeAws_queryMetricStreamFilters = function (input, context) {
    var e_13, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_13 = __values(input), input_13_1 = input_13.next(); !input_13_1.done; input_13_1 = input_13.next()) {
            var entry = input_13_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryMetricStreamFilter(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["member." + counter + "." + key] = value;
            });
            counter++;
        }
    }
    catch (e_13_1) { e_13 = { error: e_13_1 }; }
    finally {
        try {
            if (input_13_1 && !input_13_1.done && (_a = input_13.return)) _a.call(input_13);
        }
        finally { if (e_13) throw e_13.error; }
    }
    return entries;
};
var serializeAws_queryMetricStreamNames = function (input, context) {
    var e_14, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_14 = __values(input), input_14_1 = input_14.next(); !input_14_1.done; input_14_1 = input_14.next()) {
            var entry = input_14_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_14_1) { e_14 = { error: e_14_1 }; }
    finally {
        try {
            if (input_14_1 && !input_14_1.done && (_a = input_14.return)) _a.call(input_14);
        }
        finally { if (e_14) throw e_14.error; }
    }
    return entries;
};
var serializeAws_queryPutAnomalyDetectorInput = function (input, context) {
    var entries = {};
    if (input.Namespace !== undefined && input.Namespace !== null) {
        entries["Namespace"] = input.Namespace;
    }
    if (input.MetricName !== undefined && input.MetricName !== null) {
        entries["MetricName"] = input.MetricName;
    }
    if (input.Dimensions !== undefined && input.Dimensions !== null) {
        var memberEntries = serializeAws_queryDimensions(input.Dimensions, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Dimensions." + key;
            entries[loc] = value;
        });
    }
    if (input.Stat !== undefined && input.Stat !== null) {
        entries["Stat"] = input.Stat;
    }
    if (input.Configuration !== undefined && input.Configuration !== null) {
        var memberEntries = serializeAws_queryAnomalyDetectorConfiguration(input.Configuration, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Configuration." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryPutCompositeAlarmInput = function (input, context) {
    var entries = {};
    if (input.ActionsEnabled !== undefined && input.ActionsEnabled !== null) {
        entries["ActionsEnabled"] = input.ActionsEnabled;
    }
    if (input.AlarmActions !== undefined && input.AlarmActions !== null) {
        var memberEntries = serializeAws_queryResourceList(input.AlarmActions, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "AlarmActions." + key;
            entries[loc] = value;
        });
    }
    if (input.AlarmDescription !== undefined && input.AlarmDescription !== null) {
        entries["AlarmDescription"] = input.AlarmDescription;
    }
    if (input.AlarmName !== undefined && input.AlarmName !== null) {
        entries["AlarmName"] = input.AlarmName;
    }
    if (input.AlarmRule !== undefined && input.AlarmRule !== null) {
        entries["AlarmRule"] = input.AlarmRule;
    }
    if (input.InsufficientDataActions !== undefined && input.InsufficientDataActions !== null) {
        var memberEntries = serializeAws_queryResourceList(input.InsufficientDataActions, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "InsufficientDataActions." + key;
            entries[loc] = value;
        });
    }
    if (input.OKActions !== undefined && input.OKActions !== null) {
        var memberEntries = serializeAws_queryResourceList(input.OKActions, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "OKActions." + key;
            entries[loc] = value;
        });
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        var memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryPutDashboardInput = function (input, context) {
    var entries = {};
    if (input.DashboardName !== undefined && input.DashboardName !== null) {
        entries["DashboardName"] = input.DashboardName;
    }
    if (input.DashboardBody !== undefined && input.DashboardBody !== null) {
        entries["DashboardBody"] = input.DashboardBody;
    }
    return entries;
};
var serializeAws_queryPutInsightRuleInput = function (input, context) {
    var entries = {};
    if (input.RuleName !== undefined && input.RuleName !== null) {
        entries["RuleName"] = input.RuleName;
    }
    if (input.RuleState !== undefined && input.RuleState !== null) {
        entries["RuleState"] = input.RuleState;
    }
    if (input.RuleDefinition !== undefined && input.RuleDefinition !== null) {
        entries["RuleDefinition"] = input.RuleDefinition;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        var memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryPutMetricAlarmInput = function (input, context) {
    var entries = {};
    if (input.AlarmName !== undefined && input.AlarmName !== null) {
        entries["AlarmName"] = input.AlarmName;
    }
    if (input.AlarmDescription !== undefined && input.AlarmDescription !== null) {
        entries["AlarmDescription"] = input.AlarmDescription;
    }
    if (input.ActionsEnabled !== undefined && input.ActionsEnabled !== null) {
        entries["ActionsEnabled"] = input.ActionsEnabled;
    }
    if (input.OKActions !== undefined && input.OKActions !== null) {
        var memberEntries = serializeAws_queryResourceList(input.OKActions, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "OKActions." + key;
            entries[loc] = value;
        });
    }
    if (input.AlarmActions !== undefined && input.AlarmActions !== null) {
        var memberEntries = serializeAws_queryResourceList(input.AlarmActions, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "AlarmActions." + key;
            entries[loc] = value;
        });
    }
    if (input.InsufficientDataActions !== undefined && input.InsufficientDataActions !== null) {
        var memberEntries = serializeAws_queryResourceList(input.InsufficientDataActions, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "InsufficientDataActions." + key;
            entries[loc] = value;
        });
    }
    if (input.MetricName !== undefined && input.MetricName !== null) {
        entries["MetricName"] = input.MetricName;
    }
    if (input.Namespace !== undefined && input.Namespace !== null) {
        entries["Namespace"] = input.Namespace;
    }
    if (input.Statistic !== undefined && input.Statistic !== null) {
        entries["Statistic"] = input.Statistic;
    }
    if (input.ExtendedStatistic !== undefined && input.ExtendedStatistic !== null) {
        entries["ExtendedStatistic"] = input.ExtendedStatistic;
    }
    if (input.Dimensions !== undefined && input.Dimensions !== null) {
        var memberEntries = serializeAws_queryDimensions(input.Dimensions, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Dimensions." + key;
            entries[loc] = value;
        });
    }
    if (input.Period !== undefined && input.Period !== null) {
        entries["Period"] = input.Period;
    }
    if (input.Unit !== undefined && input.Unit !== null) {
        entries["Unit"] = input.Unit;
    }
    if (input.EvaluationPeriods !== undefined && input.EvaluationPeriods !== null) {
        entries["EvaluationPeriods"] = input.EvaluationPeriods;
    }
    if (input.DatapointsToAlarm !== undefined && input.DatapointsToAlarm !== null) {
        entries["DatapointsToAlarm"] = input.DatapointsToAlarm;
    }
    if (input.Threshold !== undefined && input.Threshold !== null) {
        entries["Threshold"] = input.Threshold;
    }
    if (input.ComparisonOperator !== undefined && input.ComparisonOperator !== null) {
        entries["ComparisonOperator"] = input.ComparisonOperator;
    }
    if (input.TreatMissingData !== undefined && input.TreatMissingData !== null) {
        entries["TreatMissingData"] = input.TreatMissingData;
    }
    if (input.EvaluateLowSampleCountPercentile !== undefined && input.EvaluateLowSampleCountPercentile !== null) {
        entries["EvaluateLowSampleCountPercentile"] = input.EvaluateLowSampleCountPercentile;
    }
    if (input.Metrics !== undefined && input.Metrics !== null) {
        var memberEntries = serializeAws_queryMetricDataQueries(input.Metrics, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Metrics." + key;
            entries[loc] = value;
        });
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        var memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
            entries[loc] = value;
        });
    }
    if (input.ThresholdMetricId !== undefined && input.ThresholdMetricId !== null) {
        entries["ThresholdMetricId"] = input.ThresholdMetricId;
    }
    return entries;
};
var serializeAws_queryPutMetricDataInput = function (input, context) {
    var entries = {};
    if (input.Namespace !== undefined && input.Namespace !== null) {
        entries["Namespace"] = input.Namespace;
    }
    if (input.MetricData !== undefined && input.MetricData !== null) {
        var memberEntries = serializeAws_queryMetricData(input.MetricData, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "MetricData." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryPutMetricStreamInput = function (input, context) {
    var entries = {};
    if (input.Name !== undefined && input.Name !== null) {
        entries["Name"] = input.Name;
    }
    if (input.IncludeFilters !== undefined && input.IncludeFilters !== null) {
        var memberEntries = serializeAws_queryMetricStreamFilters(input.IncludeFilters, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "IncludeFilters." + key;
            entries[loc] = value;
        });
    }
    if (input.ExcludeFilters !== undefined && input.ExcludeFilters !== null) {
        var memberEntries = serializeAws_queryMetricStreamFilters(input.ExcludeFilters, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ExcludeFilters." + key;
            entries[loc] = value;
        });
    }
    if (input.FirehoseArn !== undefined && input.FirehoseArn !== null) {
        entries["FirehoseArn"] = input.FirehoseArn;
    }
    if (input.RoleArn !== undefined && input.RoleArn !== null) {
        entries["RoleArn"] = input.RoleArn;
    }
    if (input.OutputFormat !== undefined && input.OutputFormat !== null) {
        entries["OutputFormat"] = input.OutputFormat;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        var memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryRange = function (input, context) {
    var entries = {};
    if (input.StartTime !== undefined && input.StartTime !== null) {
        entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
    }
    if (input.EndTime !== undefined && input.EndTime !== null) {
        entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
    }
    return entries;
};
var serializeAws_queryResourceList = function (input, context) {
    var e_15, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_15 = __values(input), input_15_1 = input_15.next(); !input_15_1.done; input_15_1 = input_15.next()) {
            var entry = input_15_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_15_1) { e_15 = { error: e_15_1 }; }
    finally {
        try {
            if (input_15_1 && !input_15_1.done && (_a = input_15.return)) _a.call(input_15);
        }
        finally { if (e_15) throw e_15.error; }
    }
    return entries;
};
var serializeAws_querySetAlarmStateInput = function (input, context) {
    var entries = {};
    if (input.AlarmName !== undefined && input.AlarmName !== null) {
        entries["AlarmName"] = input.AlarmName;
    }
    if (input.StateValue !== undefined && input.StateValue !== null) {
        entries["StateValue"] = input.StateValue;
    }
    if (input.StateReason !== undefined && input.StateReason !== null) {
        entries["StateReason"] = input.StateReason;
    }
    if (input.StateReasonData !== undefined && input.StateReasonData !== null) {
        entries["StateReasonData"] = input.StateReasonData;
    }
    return entries;
};
var serializeAws_queryStartMetricStreamsInput = function (input, context) {
    var entries = {};
    if (input.Names !== undefined && input.Names !== null) {
        var memberEntries = serializeAws_queryMetricStreamNames(input.Names, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Names." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryStatistics = function (input, context) {
    var e_16, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_16 = __values(input), input_16_1 = input_16.next(); !input_16_1.done; input_16_1 = input_16.next()) {
            var entry = input_16_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_16_1) { e_16 = { error: e_16_1 }; }
    finally {
        try {
            if (input_16_1 && !input_16_1.done && (_a = input_16.return)) _a.call(input_16);
        }
        finally { if (e_16) throw e_16.error; }
    }
    return entries;
};
var serializeAws_queryStatisticSet = function (input, context) {
    var entries = {};
    if (input.SampleCount !== undefined && input.SampleCount !== null) {
        entries["SampleCount"] = input.SampleCount;
    }
    if (input.Sum !== undefined && input.Sum !== null) {
        entries["Sum"] = input.Sum;
    }
    if (input.Minimum !== undefined && input.Minimum !== null) {
        entries["Minimum"] = input.Minimum;
    }
    if (input.Maximum !== undefined && input.Maximum !== null) {
        entries["Maximum"] = input.Maximum;
    }
    return entries;
};
var serializeAws_queryStopMetricStreamsInput = function (input, context) {
    var entries = {};
    if (input.Names !== undefined && input.Names !== null) {
        var memberEntries = serializeAws_queryMetricStreamNames(input.Names, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Names." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryTag = function (input, context) {
    var entries = {};
    if (input.Key !== undefined && input.Key !== null) {
        entries["Key"] = input.Key;
    }
    if (input.Value !== undefined && input.Value !== null) {
        entries["Value"] = input.Value;
    }
    return entries;
};
var serializeAws_queryTagKeyList = function (input, context) {
    var e_17, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_17 = __values(input), input_17_1 = input_17.next(); !input_17_1.done; input_17_1 = input_17.next()) {
            var entry = input_17_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_17_1) { e_17 = { error: e_17_1 }; }
    finally {
        try {
            if (input_17_1 && !input_17_1.done && (_a = input_17.return)) _a.call(input_17);
        }
        finally { if (e_17) throw e_17.error; }
    }
    return entries;
};
var serializeAws_queryTagList = function (input, context) {
    var e_18, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_18 = __values(input), input_18_1 = input_18.next(); !input_18_1.done; input_18_1 = input_18.next()) {
            var entry = input_18_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryTag(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["member." + counter + "." + key] = value;
            });
            counter++;
        }
    }
    catch (e_18_1) { e_18 = { error: e_18_1 }; }
    finally {
        try {
            if (input_18_1 && !input_18_1.done && (_a = input_18.return)) _a.call(input_18);
        }
        finally { if (e_18) throw e_18.error; }
    }
    return entries;
};
var serializeAws_queryTagResourceInput = function (input, context) {
    var entries = {};
    if (input.ResourceARN !== undefined && input.ResourceARN !== null) {
        entries["ResourceARN"] = input.ResourceARN;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        var memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryUntagResourceInput = function (input, context) {
    var entries = {};
    if (input.ResourceARN !== undefined && input.ResourceARN !== null) {
        entries["ResourceARN"] = input.ResourceARN;
    }
    if (input.TagKeys !== undefined && input.TagKeys !== null) {
        var memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TagKeys." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryValues = function (input, context) {
    var e_19, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_19 = __values(input), input_19_1 = input_19.next(); !input_19_1.done; input_19_1 = input_19.next()) {
            var entry = input_19_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_19_1) { e_19 = { error: e_19_1 }; }
    finally {
        try {
            if (input_19_1 && !input_19_1.done && (_a = input_19.return)) _a.call(input_19);
        }
        finally { if (e_19) throw e_19.error; }
    }
    return entries;
};
var deserializeAws_queryAlarmHistoryItem = function (output, context) {
    var contents = {
        AlarmName: undefined,
        AlarmType: undefined,
        Timestamp: undefined,
        HistoryItemType: undefined,
        HistorySummary: undefined,
        HistoryData: undefined,
    };
    if (output["AlarmName"] !== undefined) {
        contents.AlarmName = output["AlarmName"];
    }
    if (output["AlarmType"] !== undefined) {
        contents.AlarmType = output["AlarmType"];
    }
    if (output["Timestamp"] !== undefined) {
        contents.Timestamp = new Date(output["Timestamp"]);
    }
    if (output["HistoryItemType"] !== undefined) {
        contents.HistoryItemType = output["HistoryItemType"];
    }
    if (output["HistorySummary"] !== undefined) {
        contents.HistorySummary = output["HistorySummary"];
    }
    if (output["HistoryData"] !== undefined) {
        contents.HistoryData = output["HistoryData"];
    }
    return contents;
};
var deserializeAws_queryAlarmHistoryItems = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryAlarmHistoryItem(entry, context);
    });
};
var deserializeAws_queryAnomalyDetector = function (output, context) {
    var contents = {
        Namespace: undefined,
        MetricName: undefined,
        Dimensions: undefined,
        Stat: undefined,
        Configuration: undefined,
        StateValue: undefined,
    };
    if (output["Namespace"] !== undefined) {
        contents.Namespace = output["Namespace"];
    }
    if (output["MetricName"] !== undefined) {
        contents.MetricName = output["MetricName"];
    }
    if (output.Dimensions === "") {
        contents.Dimensions = [];
    }
    if (output["Dimensions"] !== undefined && output["Dimensions"]["member"] !== undefined) {
        contents.Dimensions = deserializeAws_queryDimensions(__getArrayIfSingleItem(output["Dimensions"]["member"]), context);
    }
    if (output["Stat"] !== undefined) {
        contents.Stat = output["Stat"];
    }
    if (output["Configuration"] !== undefined) {
        contents.Configuration = deserializeAws_queryAnomalyDetectorConfiguration(output["Configuration"], context);
    }
    if (output["StateValue"] !== undefined) {
        contents.StateValue = output["StateValue"];
    }
    return contents;
};
var deserializeAws_queryAnomalyDetectorConfiguration = function (output, context) {
    var contents = {
        ExcludedTimeRanges: undefined,
        MetricTimezone: undefined,
    };
    if (output.ExcludedTimeRanges === "") {
        contents.ExcludedTimeRanges = [];
    }
    if (output["ExcludedTimeRanges"] !== undefined && output["ExcludedTimeRanges"]["member"] !== undefined) {
        contents.ExcludedTimeRanges = deserializeAws_queryAnomalyDetectorExcludedTimeRanges(__getArrayIfSingleItem(output["ExcludedTimeRanges"]["member"]), context);
    }
    if (output["MetricTimezone"] !== undefined) {
        contents.MetricTimezone = output["MetricTimezone"];
    }
    return contents;
};
var deserializeAws_queryAnomalyDetectorExcludedTimeRanges = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryRange(entry, context);
    });
};
var deserializeAws_queryAnomalyDetectors = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryAnomalyDetector(entry, context);
    });
};
var deserializeAws_queryBatchFailures = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryPartialFailure(entry, context);
    });
};
var deserializeAws_queryCompositeAlarm = function (output, context) {
    var contents = {
        ActionsEnabled: undefined,
        AlarmActions: undefined,
        AlarmArn: undefined,
        AlarmConfigurationUpdatedTimestamp: undefined,
        AlarmDescription: undefined,
        AlarmName: undefined,
        AlarmRule: undefined,
        InsufficientDataActions: undefined,
        OKActions: undefined,
        StateReason: undefined,
        StateReasonData: undefined,
        StateUpdatedTimestamp: undefined,
        StateValue: undefined,
    };
    if (output["ActionsEnabled"] !== undefined) {
        contents.ActionsEnabled = output["ActionsEnabled"] == "true";
    }
    if (output.AlarmActions === "") {
        contents.AlarmActions = [];
    }
    if (output["AlarmActions"] !== undefined && output["AlarmActions"]["member"] !== undefined) {
        contents.AlarmActions = deserializeAws_queryResourceList(__getArrayIfSingleItem(output["AlarmActions"]["member"]), context);
    }
    if (output["AlarmArn"] !== undefined) {
        contents.AlarmArn = output["AlarmArn"];
    }
    if (output["AlarmConfigurationUpdatedTimestamp"] !== undefined) {
        contents.AlarmConfigurationUpdatedTimestamp = new Date(output["AlarmConfigurationUpdatedTimestamp"]);
    }
    if (output["AlarmDescription"] !== undefined) {
        contents.AlarmDescription = output["AlarmDescription"];
    }
    if (output["AlarmName"] !== undefined) {
        contents.AlarmName = output["AlarmName"];
    }
    if (output["AlarmRule"] !== undefined) {
        contents.AlarmRule = output["AlarmRule"];
    }
    if (output.InsufficientDataActions === "") {
        contents.InsufficientDataActions = [];
    }
    if (output["InsufficientDataActions"] !== undefined && output["InsufficientDataActions"]["member"] !== undefined) {
        contents.InsufficientDataActions = deserializeAws_queryResourceList(__getArrayIfSingleItem(output["InsufficientDataActions"]["member"]), context);
    }
    if (output.OKActions === "") {
        contents.OKActions = [];
    }
    if (output["OKActions"] !== undefined && output["OKActions"]["member"] !== undefined) {
        contents.OKActions = deserializeAws_queryResourceList(__getArrayIfSingleItem(output["OKActions"]["member"]), context);
    }
    if (output["StateReason"] !== undefined) {
        contents.StateReason = output["StateReason"];
    }
    if (output["StateReasonData"] !== undefined) {
        contents.StateReasonData = output["StateReasonData"];
    }
    if (output["StateUpdatedTimestamp"] !== undefined) {
        contents.StateUpdatedTimestamp = new Date(output["StateUpdatedTimestamp"]);
    }
    if (output["StateValue"] !== undefined) {
        contents.StateValue = output["StateValue"];
    }
    return contents;
};
var deserializeAws_queryCompositeAlarms = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryCompositeAlarm(entry, context);
    });
};
var deserializeAws_queryConcurrentModificationException = function (output, context) {
    var contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryDashboardEntries = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDashboardEntry(entry, context);
    });
};
var deserializeAws_queryDashboardEntry = function (output, context) {
    var contents = {
        DashboardName: undefined,
        DashboardArn: undefined,
        LastModified: undefined,
        Size: undefined,
    };
    if (output["DashboardName"] !== undefined) {
        contents.DashboardName = output["DashboardName"];
    }
    if (output["DashboardArn"] !== undefined) {
        contents.DashboardArn = output["DashboardArn"];
    }
    if (output["LastModified"] !== undefined) {
        contents.LastModified = new Date(output["LastModified"]);
    }
    if (output["Size"] !== undefined) {
        contents.Size = parseInt(output["Size"]);
    }
    return contents;
};
var deserializeAws_queryDashboardInvalidInputError = function (output, context) {
    var contents = {
        message: undefined,
        dashboardValidationMessages: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    if (output.dashboardValidationMessages === "") {
        contents.dashboardValidationMessages = [];
    }
    if (output["dashboardValidationMessages"] !== undefined &&
        output["dashboardValidationMessages"]["member"] !== undefined) {
        contents.dashboardValidationMessages = deserializeAws_queryDashboardValidationMessages(__getArrayIfSingleItem(output["dashboardValidationMessages"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryDashboardNotFoundError = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryDashboardValidationMessage = function (output, context) {
    var contents = {
        DataPath: undefined,
        Message: undefined,
    };
    if (output["DataPath"] !== undefined) {
        contents.DataPath = output["DataPath"];
    }
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryDashboardValidationMessages = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDashboardValidationMessage(entry, context);
    });
};
var deserializeAws_queryDatapoint = function (output, context) {
    var contents = {
        Timestamp: undefined,
        SampleCount: undefined,
        Average: undefined,
        Sum: undefined,
        Minimum: undefined,
        Maximum: undefined,
        Unit: undefined,
        ExtendedStatistics: undefined,
    };
    if (output["Timestamp"] !== undefined) {
        contents.Timestamp = new Date(output["Timestamp"]);
    }
    if (output["SampleCount"] !== undefined) {
        contents.SampleCount = parseFloat(output["SampleCount"]);
    }
    if (output["Average"] !== undefined) {
        contents.Average = parseFloat(output["Average"]);
    }
    if (output["Sum"] !== undefined) {
        contents.Sum = parseFloat(output["Sum"]);
    }
    if (output["Minimum"] !== undefined) {
        contents.Minimum = parseFloat(output["Minimum"]);
    }
    if (output["Maximum"] !== undefined) {
        contents.Maximum = parseFloat(output["Maximum"]);
    }
    if (output["Unit"] !== undefined) {
        contents.Unit = output["Unit"];
    }
    if (output.ExtendedStatistics === "") {
        contents.ExtendedStatistics = {};
    }
    if (output["ExtendedStatistics"] !== undefined && output["ExtendedStatistics"]["entry"] !== undefined) {
        contents.ExtendedStatistics = deserializeAws_queryDatapointValueMap(__getArrayIfSingleItem(output["ExtendedStatistics"]["entry"]), context);
    }
    return contents;
};
var deserializeAws_queryDatapoints = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDatapoint(entry, context);
    });
};
var deserializeAws_queryDatapointValueMap = function (output, context) {
    return output.reduce(function (acc, pair) {
        var _a;
        if (pair["value"] === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_a = {}, _a[pair["key"]] = parseFloat(pair["value"]), _a));
    }, {});
};
var deserializeAws_queryDatapointValues = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return parseFloat(entry);
    });
};
var deserializeAws_queryDeleteAnomalyDetectorOutput = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryDeleteDashboardsOutput = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryDeleteInsightRulesOutput = function (output, context) {
    var contents = {
        Failures: undefined,
    };
    if (output.Failures === "") {
        contents.Failures = [];
    }
    if (output["Failures"] !== undefined && output["Failures"]["member"] !== undefined) {
        contents.Failures = deserializeAws_queryBatchFailures(__getArrayIfSingleItem(output["Failures"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryDeleteMetricStreamOutput = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryDescribeAlarmHistoryOutput = function (output, context) {
    var contents = {
        AlarmHistoryItems: undefined,
        NextToken: undefined,
    };
    if (output.AlarmHistoryItems === "") {
        contents.AlarmHistoryItems = [];
    }
    if (output["AlarmHistoryItems"] !== undefined && output["AlarmHistoryItems"]["member"] !== undefined) {
        contents.AlarmHistoryItems = deserializeAws_queryAlarmHistoryItems(__getArrayIfSingleItem(output["AlarmHistoryItems"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
var deserializeAws_queryDescribeAlarmsForMetricOutput = function (output, context) {
    var contents = {
        MetricAlarms: undefined,
    };
    if (output.MetricAlarms === "") {
        contents.MetricAlarms = [];
    }
    if (output["MetricAlarms"] !== undefined && output["MetricAlarms"]["member"] !== undefined) {
        contents.MetricAlarms = deserializeAws_queryMetricAlarms(__getArrayIfSingleItem(output["MetricAlarms"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryDescribeAlarmsOutput = function (output, context) {
    var contents = {
        CompositeAlarms: undefined,
        MetricAlarms: undefined,
        NextToken: undefined,
    };
    if (output.CompositeAlarms === "") {
        contents.CompositeAlarms = [];
    }
    if (output["CompositeAlarms"] !== undefined && output["CompositeAlarms"]["member"] !== undefined) {
        contents.CompositeAlarms = deserializeAws_queryCompositeAlarms(__getArrayIfSingleItem(output["CompositeAlarms"]["member"]), context);
    }
    if (output.MetricAlarms === "") {
        contents.MetricAlarms = [];
    }
    if (output["MetricAlarms"] !== undefined && output["MetricAlarms"]["member"] !== undefined) {
        contents.MetricAlarms = deserializeAws_queryMetricAlarms(__getArrayIfSingleItem(output["MetricAlarms"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
var deserializeAws_queryDescribeAnomalyDetectorsOutput = function (output, context) {
    var contents = {
        AnomalyDetectors: undefined,
        NextToken: undefined,
    };
    if (output.AnomalyDetectors === "") {
        contents.AnomalyDetectors = [];
    }
    if (output["AnomalyDetectors"] !== undefined && output["AnomalyDetectors"]["member"] !== undefined) {
        contents.AnomalyDetectors = deserializeAws_queryAnomalyDetectors(__getArrayIfSingleItem(output["AnomalyDetectors"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
var deserializeAws_queryDescribeInsightRulesOutput = function (output, context) {
    var contents = {
        NextToken: undefined,
        InsightRules: undefined,
    };
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    if (output.InsightRules === "") {
        contents.InsightRules = [];
    }
    if (output["InsightRules"] !== undefined && output["InsightRules"]["member"] !== undefined) {
        contents.InsightRules = deserializeAws_queryInsightRules(__getArrayIfSingleItem(output["InsightRules"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryDimension = function (output, context) {
    var contents = {
        Name: undefined,
        Value: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["Value"] !== undefined) {
        contents.Value = output["Value"];
    }
    return contents;
};
var deserializeAws_queryDimensions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDimension(entry, context);
    });
};
var deserializeAws_queryDisableInsightRulesOutput = function (output, context) {
    var contents = {
        Failures: undefined,
    };
    if (output.Failures === "") {
        contents.Failures = [];
    }
    if (output["Failures"] !== undefined && output["Failures"]["member"] !== undefined) {
        contents.Failures = deserializeAws_queryBatchFailures(__getArrayIfSingleItem(output["Failures"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryEnableInsightRulesOutput = function (output, context) {
    var contents = {
        Failures: undefined,
    };
    if (output.Failures === "") {
        contents.Failures = [];
    }
    if (output["Failures"] !== undefined && output["Failures"]["member"] !== undefined) {
        contents.Failures = deserializeAws_queryBatchFailures(__getArrayIfSingleItem(output["Failures"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryGetDashboardOutput = function (output, context) {
    var contents = {
        DashboardArn: undefined,
        DashboardBody: undefined,
        DashboardName: undefined,
    };
    if (output["DashboardArn"] !== undefined) {
        contents.DashboardArn = output["DashboardArn"];
    }
    if (output["DashboardBody"] !== undefined) {
        contents.DashboardBody = output["DashboardBody"];
    }
    if (output["DashboardName"] !== undefined) {
        contents.DashboardName = output["DashboardName"];
    }
    return contents;
};
var deserializeAws_queryGetInsightRuleReportOutput = function (output, context) {
    var contents = {
        KeyLabels: undefined,
        AggregationStatistic: undefined,
        AggregateValue: undefined,
        ApproximateUniqueCount: undefined,
        Contributors: undefined,
        MetricDatapoints: undefined,
    };
    if (output.KeyLabels === "") {
        contents.KeyLabels = [];
    }
    if (output["KeyLabels"] !== undefined && output["KeyLabels"]["member"] !== undefined) {
        contents.KeyLabels = deserializeAws_queryInsightRuleContributorKeyLabels(__getArrayIfSingleItem(output["KeyLabels"]["member"]), context);
    }
    if (output["AggregationStatistic"] !== undefined) {
        contents.AggregationStatistic = output["AggregationStatistic"];
    }
    if (output["AggregateValue"] !== undefined) {
        contents.AggregateValue = parseFloat(output["AggregateValue"]);
    }
    if (output["ApproximateUniqueCount"] !== undefined) {
        contents.ApproximateUniqueCount = parseInt(output["ApproximateUniqueCount"]);
    }
    if (output.Contributors === "") {
        contents.Contributors = [];
    }
    if (output["Contributors"] !== undefined && output["Contributors"]["member"] !== undefined) {
        contents.Contributors = deserializeAws_queryInsightRuleContributors(__getArrayIfSingleItem(output["Contributors"]["member"]), context);
    }
    if (output.MetricDatapoints === "") {
        contents.MetricDatapoints = [];
    }
    if (output["MetricDatapoints"] !== undefined && output["MetricDatapoints"]["member"] !== undefined) {
        contents.MetricDatapoints = deserializeAws_queryInsightRuleMetricDatapoints(__getArrayIfSingleItem(output["MetricDatapoints"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryGetMetricDataOutput = function (output, context) {
    var contents = {
        MetricDataResults: undefined,
        NextToken: undefined,
        Messages: undefined,
    };
    if (output.MetricDataResults === "") {
        contents.MetricDataResults = [];
    }
    if (output["MetricDataResults"] !== undefined && output["MetricDataResults"]["member"] !== undefined) {
        contents.MetricDataResults = deserializeAws_queryMetricDataResults(__getArrayIfSingleItem(output["MetricDataResults"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    if (output.Messages === "") {
        contents.Messages = [];
    }
    if (output["Messages"] !== undefined && output["Messages"]["member"] !== undefined) {
        contents.Messages = deserializeAws_queryMetricDataResultMessages(__getArrayIfSingleItem(output["Messages"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryGetMetricStatisticsOutput = function (output, context) {
    var contents = {
        Label: undefined,
        Datapoints: undefined,
    };
    if (output["Label"] !== undefined) {
        contents.Label = output["Label"];
    }
    if (output.Datapoints === "") {
        contents.Datapoints = [];
    }
    if (output["Datapoints"] !== undefined && output["Datapoints"]["member"] !== undefined) {
        contents.Datapoints = deserializeAws_queryDatapoints(__getArrayIfSingleItem(output["Datapoints"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryGetMetricStreamOutput = function (output, context) {
    var contents = {
        Arn: undefined,
        Name: undefined,
        IncludeFilters: undefined,
        ExcludeFilters: undefined,
        FirehoseArn: undefined,
        RoleArn: undefined,
        State: undefined,
        CreationDate: undefined,
        LastUpdateDate: undefined,
        OutputFormat: undefined,
    };
    if (output["Arn"] !== undefined) {
        contents.Arn = output["Arn"];
    }
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output.IncludeFilters === "") {
        contents.IncludeFilters = [];
    }
    if (output["IncludeFilters"] !== undefined && output["IncludeFilters"]["member"] !== undefined) {
        contents.IncludeFilters = deserializeAws_queryMetricStreamFilters(__getArrayIfSingleItem(output["IncludeFilters"]["member"]), context);
    }
    if (output.ExcludeFilters === "") {
        contents.ExcludeFilters = [];
    }
    if (output["ExcludeFilters"] !== undefined && output["ExcludeFilters"]["member"] !== undefined) {
        contents.ExcludeFilters = deserializeAws_queryMetricStreamFilters(__getArrayIfSingleItem(output["ExcludeFilters"]["member"]), context);
    }
    if (output["FirehoseArn"] !== undefined) {
        contents.FirehoseArn = output["FirehoseArn"];
    }
    if (output["RoleArn"] !== undefined) {
        contents.RoleArn = output["RoleArn"];
    }
    if (output["State"] !== undefined) {
        contents.State = output["State"];
    }
    if (output["CreationDate"] !== undefined) {
        contents.CreationDate = new Date(output["CreationDate"]);
    }
    if (output["LastUpdateDate"] !== undefined) {
        contents.LastUpdateDate = new Date(output["LastUpdateDate"]);
    }
    if (output["OutputFormat"] !== undefined) {
        contents.OutputFormat = output["OutputFormat"];
    }
    return contents;
};
var deserializeAws_queryGetMetricWidgetImageOutput = function (output, context) {
    var contents = {
        MetricWidgetImage: undefined,
    };
    if (output["MetricWidgetImage"] !== undefined) {
        contents.MetricWidgetImage = context.base64Decoder(output["MetricWidgetImage"]);
    }
    return contents;
};
var deserializeAws_queryInsightRule = function (output, context) {
    var contents = {
        Name: undefined,
        State: undefined,
        Schema: undefined,
        Definition: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["State"] !== undefined) {
        contents.State = output["State"];
    }
    if (output["Schema"] !== undefined) {
        contents.Schema = output["Schema"];
    }
    if (output["Definition"] !== undefined) {
        contents.Definition = output["Definition"];
    }
    return contents;
};
var deserializeAws_queryInsightRuleContributor = function (output, context) {
    var contents = {
        Keys: undefined,
        ApproximateAggregateValue: undefined,
        Datapoints: undefined,
    };
    if (output.Keys === "") {
        contents.Keys = [];
    }
    if (output["Keys"] !== undefined && output["Keys"]["member"] !== undefined) {
        contents.Keys = deserializeAws_queryInsightRuleContributorKeys(__getArrayIfSingleItem(output["Keys"]["member"]), context);
    }
    if (output["ApproximateAggregateValue"] !== undefined) {
        contents.ApproximateAggregateValue = parseFloat(output["ApproximateAggregateValue"]);
    }
    if (output.Datapoints === "") {
        contents.Datapoints = [];
    }
    if (output["Datapoints"] !== undefined && output["Datapoints"]["member"] !== undefined) {
        contents.Datapoints = deserializeAws_queryInsightRuleContributorDatapoints(__getArrayIfSingleItem(output["Datapoints"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryInsightRuleContributorDatapoint = function (output, context) {
    var contents = {
        Timestamp: undefined,
        ApproximateValue: undefined,
    };
    if (output["Timestamp"] !== undefined) {
        contents.Timestamp = new Date(output["Timestamp"]);
    }
    if (output["ApproximateValue"] !== undefined) {
        contents.ApproximateValue = parseFloat(output["ApproximateValue"]);
    }
    return contents;
};
var deserializeAws_queryInsightRuleContributorDatapoints = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryInsightRuleContributorDatapoint(entry, context);
    });
};
var deserializeAws_queryInsightRuleContributorKeyLabels = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryInsightRuleContributorKeys = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryInsightRuleContributors = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryInsightRuleContributor(entry, context);
    });
};
var deserializeAws_queryInsightRuleMetricDatapoint = function (output, context) {
    var contents = {
        Timestamp: undefined,
        UniqueContributors: undefined,
        MaxContributorValue: undefined,
        SampleCount: undefined,
        Average: undefined,
        Sum: undefined,
        Minimum: undefined,
        Maximum: undefined,
    };
    if (output["Timestamp"] !== undefined) {
        contents.Timestamp = new Date(output["Timestamp"]);
    }
    if (output["UniqueContributors"] !== undefined) {
        contents.UniqueContributors = parseFloat(output["UniqueContributors"]);
    }
    if (output["MaxContributorValue"] !== undefined) {
        contents.MaxContributorValue = parseFloat(output["MaxContributorValue"]);
    }
    if (output["SampleCount"] !== undefined) {
        contents.SampleCount = parseFloat(output["SampleCount"]);
    }
    if (output["Average"] !== undefined) {
        contents.Average = parseFloat(output["Average"]);
    }
    if (output["Sum"] !== undefined) {
        contents.Sum = parseFloat(output["Sum"]);
    }
    if (output["Minimum"] !== undefined) {
        contents.Minimum = parseFloat(output["Minimum"]);
    }
    if (output["Maximum"] !== undefined) {
        contents.Maximum = parseFloat(output["Maximum"]);
    }
    return contents;
};
var deserializeAws_queryInsightRuleMetricDatapoints = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryInsightRuleMetricDatapoint(entry, context);
    });
};
var deserializeAws_queryInsightRules = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryInsightRule(entry, context);
    });
};
var deserializeAws_queryInternalServiceFault = function (output, context) {
    var contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryInvalidFormatFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidNextToken = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidParameterCombinationException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidParameterValueException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryLimitExceededException = function (output, context) {
    var contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryLimitExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryListDashboardsOutput = function (output, context) {
    var contents = {
        DashboardEntries: undefined,
        NextToken: undefined,
    };
    if (output.DashboardEntries === "") {
        contents.DashboardEntries = [];
    }
    if (output["DashboardEntries"] !== undefined && output["DashboardEntries"]["member"] !== undefined) {
        contents.DashboardEntries = deserializeAws_queryDashboardEntries(__getArrayIfSingleItem(output["DashboardEntries"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
var deserializeAws_queryListMetricsOutput = function (output, context) {
    var contents = {
        Metrics: undefined,
        NextToken: undefined,
    };
    if (output.Metrics === "") {
        contents.Metrics = [];
    }
    if (output["Metrics"] !== undefined && output["Metrics"]["member"] !== undefined) {
        contents.Metrics = deserializeAws_queryMetrics(__getArrayIfSingleItem(output["Metrics"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
var deserializeAws_queryListMetricStreamsOutput = function (output, context) {
    var contents = {
        NextToken: undefined,
        Entries: undefined,
    };
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    if (output.Entries === "") {
        contents.Entries = [];
    }
    if (output["Entries"] !== undefined && output["Entries"]["member"] !== undefined) {
        contents.Entries = deserializeAws_queryMetricStreamEntries(__getArrayIfSingleItem(output["Entries"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryListTagsForResourceOutput = function (output, context) {
    var contents = {
        Tags: undefined,
    };
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        contents.Tags = deserializeAws_queryTagList(__getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryMessageData = function (output, context) {
    var contents = {
        Code: undefined,
        Value: undefined,
    };
    if (output["Code"] !== undefined) {
        contents.Code = output["Code"];
    }
    if (output["Value"] !== undefined) {
        contents.Value = output["Value"];
    }
    return contents;
};
var deserializeAws_queryMetric = function (output, context) {
    var contents = {
        Namespace: undefined,
        MetricName: undefined,
        Dimensions: undefined,
    };
    if (output["Namespace"] !== undefined) {
        contents.Namespace = output["Namespace"];
    }
    if (output["MetricName"] !== undefined) {
        contents.MetricName = output["MetricName"];
    }
    if (output.Dimensions === "") {
        contents.Dimensions = [];
    }
    if (output["Dimensions"] !== undefined && output["Dimensions"]["member"] !== undefined) {
        contents.Dimensions = deserializeAws_queryDimensions(__getArrayIfSingleItem(output["Dimensions"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryMetricAlarm = function (output, context) {
    var contents = {
        AlarmName: undefined,
        AlarmArn: undefined,
        AlarmDescription: undefined,
        AlarmConfigurationUpdatedTimestamp: undefined,
        ActionsEnabled: undefined,
        OKActions: undefined,
        AlarmActions: undefined,
        InsufficientDataActions: undefined,
        StateValue: undefined,
        StateReason: undefined,
        StateReasonData: undefined,
        StateUpdatedTimestamp: undefined,
        MetricName: undefined,
        Namespace: undefined,
        Statistic: undefined,
        ExtendedStatistic: undefined,
        Dimensions: undefined,
        Period: undefined,
        Unit: undefined,
        EvaluationPeriods: undefined,
        DatapointsToAlarm: undefined,
        Threshold: undefined,
        ComparisonOperator: undefined,
        TreatMissingData: undefined,
        EvaluateLowSampleCountPercentile: undefined,
        Metrics: undefined,
        ThresholdMetricId: undefined,
    };
    if (output["AlarmName"] !== undefined) {
        contents.AlarmName = output["AlarmName"];
    }
    if (output["AlarmArn"] !== undefined) {
        contents.AlarmArn = output["AlarmArn"];
    }
    if (output["AlarmDescription"] !== undefined) {
        contents.AlarmDescription = output["AlarmDescription"];
    }
    if (output["AlarmConfigurationUpdatedTimestamp"] !== undefined) {
        contents.AlarmConfigurationUpdatedTimestamp = new Date(output["AlarmConfigurationUpdatedTimestamp"]);
    }
    if (output["ActionsEnabled"] !== undefined) {
        contents.ActionsEnabled = output["ActionsEnabled"] == "true";
    }
    if (output.OKActions === "") {
        contents.OKActions = [];
    }
    if (output["OKActions"] !== undefined && output["OKActions"]["member"] !== undefined) {
        contents.OKActions = deserializeAws_queryResourceList(__getArrayIfSingleItem(output["OKActions"]["member"]), context);
    }
    if (output.AlarmActions === "") {
        contents.AlarmActions = [];
    }
    if (output["AlarmActions"] !== undefined && output["AlarmActions"]["member"] !== undefined) {
        contents.AlarmActions = deserializeAws_queryResourceList(__getArrayIfSingleItem(output["AlarmActions"]["member"]), context);
    }
    if (output.InsufficientDataActions === "") {
        contents.InsufficientDataActions = [];
    }
    if (output["InsufficientDataActions"] !== undefined && output["InsufficientDataActions"]["member"] !== undefined) {
        contents.InsufficientDataActions = deserializeAws_queryResourceList(__getArrayIfSingleItem(output["InsufficientDataActions"]["member"]), context);
    }
    if (output["StateValue"] !== undefined) {
        contents.StateValue = output["StateValue"];
    }
    if (output["StateReason"] !== undefined) {
        contents.StateReason = output["StateReason"];
    }
    if (output["StateReasonData"] !== undefined) {
        contents.StateReasonData = output["StateReasonData"];
    }
    if (output["StateUpdatedTimestamp"] !== undefined) {
        contents.StateUpdatedTimestamp = new Date(output["StateUpdatedTimestamp"]);
    }
    if (output["MetricName"] !== undefined) {
        contents.MetricName = output["MetricName"];
    }
    if (output["Namespace"] !== undefined) {
        contents.Namespace = output["Namespace"];
    }
    if (output["Statistic"] !== undefined) {
        contents.Statistic = output["Statistic"];
    }
    if (output["ExtendedStatistic"] !== undefined) {
        contents.ExtendedStatistic = output["ExtendedStatistic"];
    }
    if (output.Dimensions === "") {
        contents.Dimensions = [];
    }
    if (output["Dimensions"] !== undefined && output["Dimensions"]["member"] !== undefined) {
        contents.Dimensions = deserializeAws_queryDimensions(__getArrayIfSingleItem(output["Dimensions"]["member"]), context);
    }
    if (output["Period"] !== undefined) {
        contents.Period = parseInt(output["Period"]);
    }
    if (output["Unit"] !== undefined) {
        contents.Unit = output["Unit"];
    }
    if (output["EvaluationPeriods"] !== undefined) {
        contents.EvaluationPeriods = parseInt(output["EvaluationPeriods"]);
    }
    if (output["DatapointsToAlarm"] !== undefined) {
        contents.DatapointsToAlarm = parseInt(output["DatapointsToAlarm"]);
    }
    if (output["Threshold"] !== undefined) {
        contents.Threshold = parseFloat(output["Threshold"]);
    }
    if (output["ComparisonOperator"] !== undefined) {
        contents.ComparisonOperator = output["ComparisonOperator"];
    }
    if (output["TreatMissingData"] !== undefined) {
        contents.TreatMissingData = output["TreatMissingData"];
    }
    if (output["EvaluateLowSampleCountPercentile"] !== undefined) {
        contents.EvaluateLowSampleCountPercentile = output["EvaluateLowSampleCountPercentile"];
    }
    if (output.Metrics === "") {
        contents.Metrics = [];
    }
    if (output["Metrics"] !== undefined && output["Metrics"]["member"] !== undefined) {
        contents.Metrics = deserializeAws_queryMetricDataQueries(__getArrayIfSingleItem(output["Metrics"]["member"]), context);
    }
    if (output["ThresholdMetricId"] !== undefined) {
        contents.ThresholdMetricId = output["ThresholdMetricId"];
    }
    return contents;
};
var deserializeAws_queryMetricAlarms = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryMetricAlarm(entry, context);
    });
};
var deserializeAws_queryMetricDataQueries = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryMetricDataQuery(entry, context);
    });
};
var deserializeAws_queryMetricDataQuery = function (output, context) {
    var contents = {
        Id: undefined,
        MetricStat: undefined,
        Expression: undefined,
        Label: undefined,
        ReturnData: undefined,
        Period: undefined,
    };
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["MetricStat"] !== undefined) {
        contents.MetricStat = deserializeAws_queryMetricStat(output["MetricStat"], context);
    }
    if (output["Expression"] !== undefined) {
        contents.Expression = output["Expression"];
    }
    if (output["Label"] !== undefined) {
        contents.Label = output["Label"];
    }
    if (output["ReturnData"] !== undefined) {
        contents.ReturnData = output["ReturnData"] == "true";
    }
    if (output["Period"] !== undefined) {
        contents.Period = parseInt(output["Period"]);
    }
    return contents;
};
var deserializeAws_queryMetricDataResult = function (output, context) {
    var contents = {
        Id: undefined,
        Label: undefined,
        Timestamps: undefined,
        Values: undefined,
        StatusCode: undefined,
        Messages: undefined,
    };
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["Label"] !== undefined) {
        contents.Label = output["Label"];
    }
    if (output.Timestamps === "") {
        contents.Timestamps = [];
    }
    if (output["Timestamps"] !== undefined && output["Timestamps"]["member"] !== undefined) {
        contents.Timestamps = deserializeAws_queryTimestamps(__getArrayIfSingleItem(output["Timestamps"]["member"]), context);
    }
    if (output.Values === "") {
        contents.Values = [];
    }
    if (output["Values"] !== undefined && output["Values"]["member"] !== undefined) {
        contents.Values = deserializeAws_queryDatapointValues(__getArrayIfSingleItem(output["Values"]["member"]), context);
    }
    if (output["StatusCode"] !== undefined) {
        contents.StatusCode = output["StatusCode"];
    }
    if (output.Messages === "") {
        contents.Messages = [];
    }
    if (output["Messages"] !== undefined && output["Messages"]["member"] !== undefined) {
        contents.Messages = deserializeAws_queryMetricDataResultMessages(__getArrayIfSingleItem(output["Messages"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryMetricDataResultMessages = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryMessageData(entry, context);
    });
};
var deserializeAws_queryMetricDataResults = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryMetricDataResult(entry, context);
    });
};
var deserializeAws_queryMetrics = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryMetric(entry, context);
    });
};
var deserializeAws_queryMetricStat = function (output, context) {
    var contents = {
        Metric: undefined,
        Period: undefined,
        Stat: undefined,
        Unit: undefined,
    };
    if (output["Metric"] !== undefined) {
        contents.Metric = deserializeAws_queryMetric(output["Metric"], context);
    }
    if (output["Period"] !== undefined) {
        contents.Period = parseInt(output["Period"]);
    }
    if (output["Stat"] !== undefined) {
        contents.Stat = output["Stat"];
    }
    if (output["Unit"] !== undefined) {
        contents.Unit = output["Unit"];
    }
    return contents;
};
var deserializeAws_queryMetricStreamEntries = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryMetricStreamEntry(entry, context);
    });
};
var deserializeAws_queryMetricStreamEntry = function (output, context) {
    var contents = {
        Arn: undefined,
        CreationDate: undefined,
        LastUpdateDate: undefined,
        Name: undefined,
        FirehoseArn: undefined,
        State: undefined,
        OutputFormat: undefined,
    };
    if (output["Arn"] !== undefined) {
        contents.Arn = output["Arn"];
    }
    if (output["CreationDate"] !== undefined) {
        contents.CreationDate = new Date(output["CreationDate"]);
    }
    if (output["LastUpdateDate"] !== undefined) {
        contents.LastUpdateDate = new Date(output["LastUpdateDate"]);
    }
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["FirehoseArn"] !== undefined) {
        contents.FirehoseArn = output["FirehoseArn"];
    }
    if (output["State"] !== undefined) {
        contents.State = output["State"];
    }
    if (output["OutputFormat"] !== undefined) {
        contents.OutputFormat = output["OutputFormat"];
    }
    return contents;
};
var deserializeAws_queryMetricStreamFilter = function (output, context) {
    var contents = {
        Namespace: undefined,
    };
    if (output["Namespace"] !== undefined) {
        contents.Namespace = output["Namespace"];
    }
    return contents;
};
var deserializeAws_queryMetricStreamFilters = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryMetricStreamFilter(entry, context);
    });
};
var deserializeAws_queryMissingRequiredParameterException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryPartialFailure = function (output, context) {
    var contents = {
        FailureResource: undefined,
        ExceptionType: undefined,
        FailureCode: undefined,
        FailureDescription: undefined,
    };
    if (output["FailureResource"] !== undefined) {
        contents.FailureResource = output["FailureResource"];
    }
    if (output["ExceptionType"] !== undefined) {
        contents.ExceptionType = output["ExceptionType"];
    }
    if (output["FailureCode"] !== undefined) {
        contents.FailureCode = output["FailureCode"];
    }
    if (output["FailureDescription"] !== undefined) {
        contents.FailureDescription = output["FailureDescription"];
    }
    return contents;
};
var deserializeAws_queryPutAnomalyDetectorOutput = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryPutDashboardOutput = function (output, context) {
    var contents = {
        DashboardValidationMessages: undefined,
    };
    if (output.DashboardValidationMessages === "") {
        contents.DashboardValidationMessages = [];
    }
    if (output["DashboardValidationMessages"] !== undefined &&
        output["DashboardValidationMessages"]["member"] !== undefined) {
        contents.DashboardValidationMessages = deserializeAws_queryDashboardValidationMessages(__getArrayIfSingleItem(output["DashboardValidationMessages"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryPutInsightRuleOutput = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryPutMetricStreamOutput = function (output, context) {
    var contents = {
        Arn: undefined,
    };
    if (output["Arn"] !== undefined) {
        contents.Arn = output["Arn"];
    }
    return contents;
};
var deserializeAws_queryRange = function (output, context) {
    var contents = {
        StartTime: undefined,
        EndTime: undefined,
    };
    if (output["StartTime"] !== undefined) {
        contents.StartTime = new Date(output["StartTime"]);
    }
    if (output["EndTime"] !== undefined) {
        contents.EndTime = new Date(output["EndTime"]);
    }
    return contents;
};
var deserializeAws_queryResourceList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryResourceNotFound = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryResourceNotFoundException = function (output, context) {
    var contents = {
        ResourceType: undefined,
        ResourceId: undefined,
        Message: undefined,
    };
    if (output["ResourceType"] !== undefined) {
        contents.ResourceType = output["ResourceType"];
    }
    if (output["ResourceId"] !== undefined) {
        contents.ResourceId = output["ResourceId"];
    }
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryStartMetricStreamsOutput = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryStopMetricStreamsOutput = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryTag = function (output, context) {
    var contents = {
        Key: undefined,
        Value: undefined,
    };
    if (output["Key"] !== undefined) {
        contents.Key = output["Key"];
    }
    if (output["Value"] !== undefined) {
        contents.Value = output["Value"];
    }
    return contents;
};
var deserializeAws_queryTagList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryTag(entry, context);
    });
};
var deserializeAws_queryTagResourceOutput = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryTimestamps = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return new Date(entry);
    });
};
var deserializeAws_queryUntagResourceOutput = function (output, context) {
    var contents = {};
    return contents;
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
            var parsedObj = xmlParse(encoded, {
                attributeNamePrefix: "",
                ignoreAttributes: false,
                parseNodeValue: false,
                trimValues: false,
                tagValueProcessor: function (val, tagName) { return (val.trim() === "" ? "" : decodeHTML(val)); },
            });
            var textNodeName = "#text";
            var key = Object.keys(parsedObj)[0];
            var parsedObjToReturn = parsedObj[key];
            if (parsedObjToReturn[textNodeName]) {
                parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
                delete parsedObjToReturn[textNodeName];
            }
            return __getValueFromTextNode(parsedObjToReturn);
        }
        return {};
    });
};
var buildFormUrlencodedString = function (formEntries) {
    return Object.entries(formEntries)
        .map(function (_a) {
        var _b = __read(_a, 2), key = _b[0], value = _b[1];
        return __extendedEncodeURIComponent(key) + "=" + __extendedEncodeURIComponent(value);
    })
        .join("&");
};
var loadQueryErrorCode = function (output, data) {
    if (data.Error.Code !== undefined) {
        return data.Error.Code;
    }
    if (output.statusCode == 404) {
        return "NotFound";
    }
    return "";
};
//# sourceMappingURL=Aws_query.js.map