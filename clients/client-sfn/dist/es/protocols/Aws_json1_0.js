import { __assign, __awaiter, __generator } from "tslib";
import { HttpRequest as __HttpRequest, isValidHostname as __isValidHostname, } from "@aws-sdk/protocol-http";
export var serializeAws_json1_0CreateActivityCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "AWSStepFunctions.CreateActivity",
        };
        body = JSON.stringify(serializeAws_json1_0CreateActivityInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0CreateStateMachineCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "AWSStepFunctions.CreateStateMachine",
        };
        body = JSON.stringify(serializeAws_json1_0CreateStateMachineInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0DeleteActivityCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "AWSStepFunctions.DeleteActivity",
        };
        body = JSON.stringify(serializeAws_json1_0DeleteActivityInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0DeleteStateMachineCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "AWSStepFunctions.DeleteStateMachine",
        };
        body = JSON.stringify(serializeAws_json1_0DeleteStateMachineInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0DescribeActivityCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "AWSStepFunctions.DescribeActivity",
        };
        body = JSON.stringify(serializeAws_json1_0DescribeActivityInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0DescribeExecutionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "AWSStepFunctions.DescribeExecution",
        };
        body = JSON.stringify(serializeAws_json1_0DescribeExecutionInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0DescribeStateMachineCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "AWSStepFunctions.DescribeStateMachine",
        };
        body = JSON.stringify(serializeAws_json1_0DescribeStateMachineInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0DescribeStateMachineForExecutionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "AWSStepFunctions.DescribeStateMachineForExecution",
        };
        body = JSON.stringify(serializeAws_json1_0DescribeStateMachineForExecutionInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0GetActivityTaskCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "AWSStepFunctions.GetActivityTask",
        };
        body = JSON.stringify(serializeAws_json1_0GetActivityTaskInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0GetExecutionHistoryCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "AWSStepFunctions.GetExecutionHistory",
        };
        body = JSON.stringify(serializeAws_json1_0GetExecutionHistoryInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0ListActivitiesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "AWSStepFunctions.ListActivities",
        };
        body = JSON.stringify(serializeAws_json1_0ListActivitiesInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0ListExecutionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "AWSStepFunctions.ListExecutions",
        };
        body = JSON.stringify(serializeAws_json1_0ListExecutionsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0ListStateMachinesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "AWSStepFunctions.ListStateMachines",
        };
        body = JSON.stringify(serializeAws_json1_0ListStateMachinesInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0ListTagsForResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "AWSStepFunctions.ListTagsForResource",
        };
        body = JSON.stringify(serializeAws_json1_0ListTagsForResourceInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0SendTaskFailureCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "AWSStepFunctions.SendTaskFailure",
        };
        body = JSON.stringify(serializeAws_json1_0SendTaskFailureInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0SendTaskHeartbeatCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "AWSStepFunctions.SendTaskHeartbeat",
        };
        body = JSON.stringify(serializeAws_json1_0SendTaskHeartbeatInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0SendTaskSuccessCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "AWSStepFunctions.SendTaskSuccess",
        };
        body = JSON.stringify(serializeAws_json1_0SendTaskSuccessInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0StartExecutionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "AWSStepFunctions.StartExecution",
        };
        body = JSON.stringify(serializeAws_json1_0StartExecutionInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0StartSyncExecutionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body, resolvedHostname;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                headers = {
                    "content-type": "application/x-amz-json-1.0",
                    "x-amz-target": "AWSStepFunctions.StartSyncExecution",
                };
                body = JSON.stringify(serializeAws_json1_0StartSyncExecutionInput(input, context));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                resolvedHostname = (_a.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "sync-" + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", resolvedHostname, body)];
        }
    });
}); };
export var serializeAws_json1_0StopExecutionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "AWSStepFunctions.StopExecution",
        };
        body = JSON.stringify(serializeAws_json1_0StopExecutionInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0TagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "AWSStepFunctions.TagResource",
        };
        body = JSON.stringify(serializeAws_json1_0TagResourceInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0UntagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "AWSStepFunctions.UntagResource",
        };
        body = JSON.stringify(serializeAws_json1_0UntagResourceInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0UpdateStateMachineCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "AWSStepFunctions.UpdateStateMachine",
        };
        body = JSON.stringify(serializeAws_json1_0UpdateStateMachineInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_json1_0CreateActivityCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0CreateActivityCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0CreateActivityOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0CreateActivityCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ActivityLimitExceeded": return [3 /*break*/, 2];
                    case "com.amazonaws.sfn#ActivityLimitExceeded": return [3 /*break*/, 2];
                    case "InvalidName": return [3 /*break*/, 4];
                    case "com.amazonaws.sfn#InvalidName": return [3 /*break*/, 4];
                    case "TooManyTags": return [3 /*break*/, 6];
                    case "com.amazonaws.sfn#TooManyTags": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ActivityLimitExceededResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidNameResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0TooManyTagsResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0CreateStateMachineCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0CreateStateMachineCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0CreateStateMachineOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0CreateStateMachineCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, parsedBody, message;
    var _o;
    return __generator(this, function (_p) {
        switch (_p.label) {
            case 0:
                _a = [__assign({}, output)];
                _o = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_o.body = _p.sent(), _o)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidArn": return [3 /*break*/, 2];
                    case "com.amazonaws.sfn#InvalidArn": return [3 /*break*/, 2];
                    case "InvalidDefinition": return [3 /*break*/, 4];
                    case "com.amazonaws.sfn#InvalidDefinition": return [3 /*break*/, 4];
                    case "InvalidLoggingConfiguration": return [3 /*break*/, 6];
                    case "com.amazonaws.sfn#InvalidLoggingConfiguration": return [3 /*break*/, 6];
                    case "InvalidName": return [3 /*break*/, 8];
                    case "com.amazonaws.sfn#InvalidName": return [3 /*break*/, 8];
                    case "InvalidTracingConfiguration": return [3 /*break*/, 10];
                    case "com.amazonaws.sfn#InvalidTracingConfiguration": return [3 /*break*/, 10];
                    case "StateMachineAlreadyExists": return [3 /*break*/, 12];
                    case "com.amazonaws.sfn#StateMachineAlreadyExists": return [3 /*break*/, 12];
                    case "StateMachineDeleting": return [3 /*break*/, 14];
                    case "com.amazonaws.sfn#StateMachineDeleting": return [3 /*break*/, 14];
                    case "StateMachineLimitExceeded": return [3 /*break*/, 16];
                    case "com.amazonaws.sfn#StateMachineLimitExceeded": return [3 /*break*/, 16];
                    case "StateMachineTypeNotSupported": return [3 /*break*/, 18];
                    case "com.amazonaws.sfn#StateMachineTypeNotSupported": return [3 /*break*/, 18];
                    case "TooManyTags": return [3 /*break*/, 20];
                    case "com.amazonaws.sfn#TooManyTags": return [3 /*break*/, 20];
                }
                return [3 /*break*/, 22];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidDefinitionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidLoggingConfigurationResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidNameResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidTracingConfigurationResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_0StateMachineAlreadyExistsResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_0StateMachineDeletingResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_0StateMachineLimitExceededResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_0StateMachineTypeNotSupportedResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_0TooManyTagsResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 22:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _p.label = 23;
            case 23:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0DeleteActivityCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0DeleteActivityCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0DeleteActivityOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0DeleteActivityCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidArn": return [3 /*break*/, 2];
                    case "com.amazonaws.sfn#InvalidArn": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0DeleteStateMachineCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0DeleteStateMachineCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0DeleteStateMachineOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0DeleteStateMachineCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidArn": return [3 /*break*/, 2];
                    case "com.amazonaws.sfn#InvalidArn": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0DescribeActivityCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0DescribeActivityCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0DescribeActivityOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0DescribeActivityCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ActivityDoesNotExist": return [3 /*break*/, 2];
                    case "com.amazonaws.sfn#ActivityDoesNotExist": return [3 /*break*/, 2];
                    case "InvalidArn": return [3 /*break*/, 4];
                    case "com.amazonaws.sfn#InvalidArn": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ActivityDoesNotExistResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0DescribeExecutionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0DescribeExecutionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0DescribeExecutionOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0DescribeExecutionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ExecutionDoesNotExist": return [3 /*break*/, 2];
                    case "com.amazonaws.sfn#ExecutionDoesNotExist": return [3 /*break*/, 2];
                    case "InvalidArn": return [3 /*break*/, 4];
                    case "com.amazonaws.sfn#InvalidArn": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ExecutionDoesNotExistResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0DescribeStateMachineCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0DescribeStateMachineCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0DescribeStateMachineOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0DescribeStateMachineCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidArn": return [3 /*break*/, 2];
                    case "com.amazonaws.sfn#InvalidArn": return [3 /*break*/, 2];
                    case "StateMachineDoesNotExist": return [3 /*break*/, 4];
                    case "com.amazonaws.sfn#StateMachineDoesNotExist": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0StateMachineDoesNotExistResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0DescribeStateMachineForExecutionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0DescribeStateMachineForExecutionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0DescribeStateMachineForExecutionOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0DescribeStateMachineForExecutionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ExecutionDoesNotExist": return [3 /*break*/, 2];
                    case "com.amazonaws.sfn#ExecutionDoesNotExist": return [3 /*break*/, 2];
                    case "InvalidArn": return [3 /*break*/, 4];
                    case "com.amazonaws.sfn#InvalidArn": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ExecutionDoesNotExistResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0GetActivityTaskCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0GetActivityTaskCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0GetActivityTaskOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0GetActivityTaskCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ActivityDoesNotExist": return [3 /*break*/, 2];
                    case "com.amazonaws.sfn#ActivityDoesNotExist": return [3 /*break*/, 2];
                    case "ActivityWorkerLimitExceeded": return [3 /*break*/, 4];
                    case "com.amazonaws.sfn#ActivityWorkerLimitExceeded": return [3 /*break*/, 4];
                    case "InvalidArn": return [3 /*break*/, 6];
                    case "com.amazonaws.sfn#InvalidArn": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ActivityDoesNotExistResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ActivityWorkerLimitExceededResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0GetExecutionHistoryCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0GetExecutionHistoryCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0GetExecutionHistoryOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0GetExecutionHistoryCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ExecutionDoesNotExist": return [3 /*break*/, 2];
                    case "com.amazonaws.sfn#ExecutionDoesNotExist": return [3 /*break*/, 2];
                    case "InvalidArn": return [3 /*break*/, 4];
                    case "com.amazonaws.sfn#InvalidArn": return [3 /*break*/, 4];
                    case "InvalidToken": return [3 /*break*/, 6];
                    case "com.amazonaws.sfn#InvalidToken": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ExecutionDoesNotExistResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidTokenResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0ListActivitiesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0ListActivitiesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0ListActivitiesOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0ListActivitiesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidToken": return [3 /*break*/, 2];
                    case "com.amazonaws.sfn#InvalidToken": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidTokenResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0ListExecutionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0ListExecutionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0ListExecutionsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0ListExecutionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidArn": return [3 /*break*/, 2];
                    case "com.amazonaws.sfn#InvalidArn": return [3 /*break*/, 2];
                    case "InvalidToken": return [3 /*break*/, 4];
                    case "com.amazonaws.sfn#InvalidToken": return [3 /*break*/, 4];
                    case "StateMachineDoesNotExist": return [3 /*break*/, 6];
                    case "com.amazonaws.sfn#StateMachineDoesNotExist": return [3 /*break*/, 6];
                    case "StateMachineTypeNotSupported": return [3 /*break*/, 8];
                    case "com.amazonaws.sfn#StateMachineTypeNotSupported": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidTokenResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0StateMachineDoesNotExistResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0StateMachineTypeNotSupportedResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0ListStateMachinesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0ListStateMachinesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0ListStateMachinesOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0ListStateMachinesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidToken": return [3 /*break*/, 2];
                    case "com.amazonaws.sfn#InvalidToken": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidTokenResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0ListTagsForResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0ListTagsForResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0ListTagsForResourceOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0ListTagsForResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidArn": return [3 /*break*/, 2];
                    case "com.amazonaws.sfn#InvalidArn": return [3 /*break*/, 2];
                    case "ResourceNotFound": return [3 /*break*/, 4];
                    case "com.amazonaws.sfn#ResourceNotFound": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0SendTaskFailureCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0SendTaskFailureCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0SendTaskFailureOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0SendTaskFailureCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidToken": return [3 /*break*/, 2];
                    case "com.amazonaws.sfn#InvalidToken": return [3 /*break*/, 2];
                    case "TaskDoesNotExist": return [3 /*break*/, 4];
                    case "com.amazonaws.sfn#TaskDoesNotExist": return [3 /*break*/, 4];
                    case "TaskTimedOut": return [3 /*break*/, 6];
                    case "com.amazonaws.sfn#TaskTimedOut": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidTokenResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0TaskDoesNotExistResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0TaskTimedOutResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0SendTaskHeartbeatCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0SendTaskHeartbeatCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0SendTaskHeartbeatOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0SendTaskHeartbeatCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidToken": return [3 /*break*/, 2];
                    case "com.amazonaws.sfn#InvalidToken": return [3 /*break*/, 2];
                    case "TaskDoesNotExist": return [3 /*break*/, 4];
                    case "com.amazonaws.sfn#TaskDoesNotExist": return [3 /*break*/, 4];
                    case "TaskTimedOut": return [3 /*break*/, 6];
                    case "com.amazonaws.sfn#TaskTimedOut": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidTokenResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0TaskDoesNotExistResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0TaskTimedOutResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0SendTaskSuccessCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0SendTaskSuccessCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0SendTaskSuccessOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0SendTaskSuccessCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidOutput": return [3 /*break*/, 2];
                    case "com.amazonaws.sfn#InvalidOutput": return [3 /*break*/, 2];
                    case "InvalidToken": return [3 /*break*/, 4];
                    case "com.amazonaws.sfn#InvalidToken": return [3 /*break*/, 4];
                    case "TaskDoesNotExist": return [3 /*break*/, 6];
                    case "com.amazonaws.sfn#TaskDoesNotExist": return [3 /*break*/, 6];
                    case "TaskTimedOut": return [3 /*break*/, 8];
                    case "com.amazonaws.sfn#TaskTimedOut": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidOutputResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidTokenResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0TaskDoesNotExistResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0TaskTimedOutResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0StartExecutionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0StartExecutionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0StartExecutionOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0StartExecutionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ExecutionAlreadyExists": return [3 /*break*/, 2];
                    case "com.amazonaws.sfn#ExecutionAlreadyExists": return [3 /*break*/, 2];
                    case "ExecutionLimitExceeded": return [3 /*break*/, 4];
                    case "com.amazonaws.sfn#ExecutionLimitExceeded": return [3 /*break*/, 4];
                    case "InvalidArn": return [3 /*break*/, 6];
                    case "com.amazonaws.sfn#InvalidArn": return [3 /*break*/, 6];
                    case "InvalidExecutionInput": return [3 /*break*/, 8];
                    case "com.amazonaws.sfn#InvalidExecutionInput": return [3 /*break*/, 8];
                    case "InvalidName": return [3 /*break*/, 10];
                    case "com.amazonaws.sfn#InvalidName": return [3 /*break*/, 10];
                    case "StateMachineDeleting": return [3 /*break*/, 12];
                    case "com.amazonaws.sfn#StateMachineDeleting": return [3 /*break*/, 12];
                    case "StateMachineDoesNotExist": return [3 /*break*/, 14];
                    case "com.amazonaws.sfn#StateMachineDoesNotExist": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ExecutionAlreadyExistsResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ExecutionLimitExceededResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidExecutionInputResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidNameResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_0StateMachineDeletingResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_0StateMachineDoesNotExistResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0StartSyncExecutionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0StartSyncExecutionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0StartSyncExecutionOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0StartSyncExecutionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidArn": return [3 /*break*/, 2];
                    case "com.amazonaws.sfn#InvalidArn": return [3 /*break*/, 2];
                    case "InvalidExecutionInput": return [3 /*break*/, 4];
                    case "com.amazonaws.sfn#InvalidExecutionInput": return [3 /*break*/, 4];
                    case "InvalidName": return [3 /*break*/, 6];
                    case "com.amazonaws.sfn#InvalidName": return [3 /*break*/, 6];
                    case "StateMachineDeleting": return [3 /*break*/, 8];
                    case "com.amazonaws.sfn#StateMachineDeleting": return [3 /*break*/, 8];
                    case "StateMachineDoesNotExist": return [3 /*break*/, 10];
                    case "com.amazonaws.sfn#StateMachineDoesNotExist": return [3 /*break*/, 10];
                    case "StateMachineTypeNotSupported": return [3 /*break*/, 12];
                    case "com.amazonaws.sfn#StateMachineTypeNotSupported": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidExecutionInputResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidNameResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0StateMachineDeletingResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0StateMachineDoesNotExistResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_0StateMachineTypeNotSupportedResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0StopExecutionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0StopExecutionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0StopExecutionOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0StopExecutionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ExecutionDoesNotExist": return [3 /*break*/, 2];
                    case "com.amazonaws.sfn#ExecutionDoesNotExist": return [3 /*break*/, 2];
                    case "InvalidArn": return [3 /*break*/, 4];
                    case "com.amazonaws.sfn#InvalidArn": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ExecutionDoesNotExistResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0TagResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0TagResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0TagResourceOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0TagResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidArn": return [3 /*break*/, 2];
                    case "com.amazonaws.sfn#InvalidArn": return [3 /*break*/, 2];
                    case "ResourceNotFound": return [3 /*break*/, 4];
                    case "com.amazonaws.sfn#ResourceNotFound": return [3 /*break*/, 4];
                    case "TooManyTags": return [3 /*break*/, 6];
                    case "com.amazonaws.sfn#TooManyTags": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0TooManyTagsResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0UntagResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0UntagResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0UntagResourceOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0UntagResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidArn": return [3 /*break*/, 2];
                    case "com.amazonaws.sfn#InvalidArn": return [3 /*break*/, 2];
                    case "ResourceNotFound": return [3 /*break*/, 4];
                    case "com.amazonaws.sfn#ResourceNotFound": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0UpdateStateMachineCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0UpdateStateMachineCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0UpdateStateMachineOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0UpdateStateMachineCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidArn": return [3 /*break*/, 2];
                    case "com.amazonaws.sfn#InvalidArn": return [3 /*break*/, 2];
                    case "InvalidDefinition": return [3 /*break*/, 4];
                    case "com.amazonaws.sfn#InvalidDefinition": return [3 /*break*/, 4];
                    case "InvalidLoggingConfiguration": return [3 /*break*/, 6];
                    case "com.amazonaws.sfn#InvalidLoggingConfiguration": return [3 /*break*/, 6];
                    case "InvalidTracingConfiguration": return [3 /*break*/, 8];
                    case "com.amazonaws.sfn#InvalidTracingConfiguration": return [3 /*break*/, 8];
                    case "MissingRequiredParameter": return [3 /*break*/, 10];
                    case "com.amazonaws.sfn#MissingRequiredParameter": return [3 /*break*/, 10];
                    case "StateMachineDeleting": return [3 /*break*/, 12];
                    case "com.amazonaws.sfn#StateMachineDeleting": return [3 /*break*/, 12];
                    case "StateMachineDoesNotExist": return [3 /*break*/, 14];
                    case "com.amazonaws.sfn#StateMachineDoesNotExist": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidDefinitionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidLoggingConfigurationResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidTracingConfigurationResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0MissingRequiredParameterResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_0StateMachineDeletingResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_0StateMachineDoesNotExistResponse(parsedOutput, context)];
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
var deserializeAws_json1_0ActivityDoesNotExistResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0ActivityDoesNotExist(body, context);
        contents = __assign({ name: "ActivityDoesNotExist", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0ActivityLimitExceededResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0ActivityLimitExceeded(body, context);
        contents = __assign({ name: "ActivityLimitExceeded", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0ActivityWorkerLimitExceededResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0ActivityWorkerLimitExceeded(body, context);
        contents = __assign({ name: "ActivityWorkerLimitExceeded", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0ExecutionAlreadyExistsResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0ExecutionAlreadyExists(body, context);
        contents = __assign({ name: "ExecutionAlreadyExists", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0ExecutionDoesNotExistResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0ExecutionDoesNotExist(body, context);
        contents = __assign({ name: "ExecutionDoesNotExist", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0ExecutionLimitExceededResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0ExecutionLimitExceeded(body, context);
        contents = __assign({ name: "ExecutionLimitExceeded", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0InvalidArnResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0InvalidArn(body, context);
        contents = __assign({ name: "InvalidArn", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0InvalidDefinitionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0InvalidDefinition(body, context);
        contents = __assign({ name: "InvalidDefinition", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0InvalidExecutionInputResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0InvalidExecutionInput(body, context);
        contents = __assign({ name: "InvalidExecutionInput", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0InvalidLoggingConfigurationResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0InvalidLoggingConfiguration(body, context);
        contents = __assign({ name: "InvalidLoggingConfiguration", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0InvalidNameResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0InvalidName(body, context);
        contents = __assign({ name: "InvalidName", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0InvalidOutputResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0InvalidOutput(body, context);
        contents = __assign({ name: "InvalidOutput", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0InvalidTokenResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0InvalidToken(body, context);
        contents = __assign({ name: "InvalidToken", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0InvalidTracingConfigurationResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0InvalidTracingConfiguration(body, context);
        contents = __assign({ name: "InvalidTracingConfiguration", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0MissingRequiredParameterResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0MissingRequiredParameter(body, context);
        contents = __assign({ name: "MissingRequiredParameter", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0ResourceNotFoundResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0ResourceNotFound(body, context);
        contents = __assign({ name: "ResourceNotFound", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0StateMachineAlreadyExistsResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0StateMachineAlreadyExists(body, context);
        contents = __assign({ name: "StateMachineAlreadyExists", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0StateMachineDeletingResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0StateMachineDeleting(body, context);
        contents = __assign({ name: "StateMachineDeleting", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0StateMachineDoesNotExistResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0StateMachineDoesNotExist(body, context);
        contents = __assign({ name: "StateMachineDoesNotExist", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0StateMachineLimitExceededResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0StateMachineLimitExceeded(body, context);
        contents = __assign({ name: "StateMachineLimitExceeded", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0StateMachineTypeNotSupportedResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0StateMachineTypeNotSupported(body, context);
        contents = __assign({ name: "StateMachineTypeNotSupported", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0TaskDoesNotExistResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0TaskDoesNotExist(body, context);
        contents = __assign({ name: "TaskDoesNotExist", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0TaskTimedOutResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0TaskTimedOut(body, context);
        contents = __assign({ name: "TaskTimedOut", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0TooManyTagsResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0TooManyTags(body, context);
        contents = __assign({ name: "TooManyTags", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_json1_0CloudWatchLogsLogGroup = function (input, context) {
    return __assign({}, (input.logGroupArn !== undefined && input.logGroupArn !== null && { logGroupArn: input.logGroupArn }));
};
var serializeAws_json1_0CreateActivityInput = function (input, context) {
    return __assign(__assign({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_0TagList(input.tags, context) }));
};
var serializeAws_json1_0CreateStateMachineInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.definition !== undefined && input.definition !== null && { definition: input.definition })), (input.loggingConfiguration !== undefined &&
        input.loggingConfiguration !== null && {
        loggingConfiguration: serializeAws_json1_0LoggingConfiguration(input.loggingConfiguration, context),
    })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_0TagList(input.tags, context) })), (input.tracingConfiguration !== undefined &&
        input.tracingConfiguration !== null && {
        tracingConfiguration: serializeAws_json1_0TracingConfiguration(input.tracingConfiguration, context),
    })), (input.type !== undefined && input.type !== null && { type: input.type }));
};
var serializeAws_json1_0DeleteActivityInput = function (input, context) {
    return __assign({}, (input.activityArn !== undefined && input.activityArn !== null && { activityArn: input.activityArn }));
};
var serializeAws_json1_0DeleteStateMachineInput = function (input, context) {
    return __assign({}, (input.stateMachineArn !== undefined &&
        input.stateMachineArn !== null && { stateMachineArn: input.stateMachineArn }));
};
var serializeAws_json1_0DescribeActivityInput = function (input, context) {
    return __assign({}, (input.activityArn !== undefined && input.activityArn !== null && { activityArn: input.activityArn }));
};
var serializeAws_json1_0DescribeExecutionInput = function (input, context) {
    return __assign({}, (input.executionArn !== undefined && input.executionArn !== null && { executionArn: input.executionArn }));
};
var serializeAws_json1_0DescribeStateMachineForExecutionInput = function (input, context) {
    return __assign({}, (input.executionArn !== undefined && input.executionArn !== null && { executionArn: input.executionArn }));
};
var serializeAws_json1_0DescribeStateMachineInput = function (input, context) {
    return __assign({}, (input.stateMachineArn !== undefined &&
        input.stateMachineArn !== null && { stateMachineArn: input.stateMachineArn }));
};
var serializeAws_json1_0GetActivityTaskInput = function (input, context) {
    return __assign(__assign({}, (input.activityArn !== undefined && input.activityArn !== null && { activityArn: input.activityArn })), (input.workerName !== undefined && input.workerName !== null && { workerName: input.workerName }));
};
var serializeAws_json1_0GetExecutionHistoryInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.executionArn !== undefined && input.executionArn !== null && { executionArn: input.executionArn })), (input.includeExecutionData !== undefined &&
        input.includeExecutionData !== null && { includeExecutionData: input.includeExecutionData })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.reverseOrder !== undefined && input.reverseOrder !== null && { reverseOrder: input.reverseOrder }));
};
var serializeAws_json1_0ListActivitiesInput = function (input, context) {
    return __assign(__assign({}, (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }));
};
var serializeAws_json1_0ListExecutionsInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.stateMachineArn !== undefined &&
        input.stateMachineArn !== null && { stateMachineArn: input.stateMachineArn })), (input.statusFilter !== undefined && input.statusFilter !== null && { statusFilter: input.statusFilter }));
};
var serializeAws_json1_0ListStateMachinesInput = function (input, context) {
    return __assign(__assign({}, (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }));
};
var serializeAws_json1_0ListTagsForResourceInput = function (input, context) {
    return __assign({}, (input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }));
};
var serializeAws_json1_0LogDestination = function (input, context) {
    return __assign({}, (input.cloudWatchLogsLogGroup !== undefined &&
        input.cloudWatchLogsLogGroup !== null && {
        cloudWatchLogsLogGroup: serializeAws_json1_0CloudWatchLogsLogGroup(input.cloudWatchLogsLogGroup, context),
    }));
};
var serializeAws_json1_0LogDestinationList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0LogDestination(entry, context);
    });
};
var serializeAws_json1_0LoggingConfiguration = function (input, context) {
    return __assign(__assign(__assign({}, (input.destinations !== undefined &&
        input.destinations !== null && {
        destinations: serializeAws_json1_0LogDestinationList(input.destinations, context),
    })), (input.includeExecutionData !== undefined &&
        input.includeExecutionData !== null && { includeExecutionData: input.includeExecutionData })), (input.level !== undefined && input.level !== null && { level: input.level }));
};
var serializeAws_json1_0SendTaskFailureInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.cause !== undefined && input.cause !== null && { cause: input.cause })), (input.error !== undefined && input.error !== null && { error: input.error })), (input.taskToken !== undefined && input.taskToken !== null && { taskToken: input.taskToken }));
};
var serializeAws_json1_0SendTaskHeartbeatInput = function (input, context) {
    return __assign({}, (input.taskToken !== undefined && input.taskToken !== null && { taskToken: input.taskToken }));
};
var serializeAws_json1_0SendTaskSuccessInput = function (input, context) {
    return __assign(__assign({}, (input.output !== undefined && input.output !== null && { output: input.output })), (input.taskToken !== undefined && input.taskToken !== null && { taskToken: input.taskToken }));
};
var serializeAws_json1_0StartExecutionInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.input !== undefined && input.input !== null && { input: input.input })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.stateMachineArn !== undefined &&
        input.stateMachineArn !== null && { stateMachineArn: input.stateMachineArn })), (input.traceHeader !== undefined && input.traceHeader !== null && { traceHeader: input.traceHeader }));
};
var serializeAws_json1_0StartSyncExecutionInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.input !== undefined && input.input !== null && { input: input.input })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.stateMachineArn !== undefined &&
        input.stateMachineArn !== null && { stateMachineArn: input.stateMachineArn })), (input.traceHeader !== undefined && input.traceHeader !== null && { traceHeader: input.traceHeader }));
};
var serializeAws_json1_0StopExecutionInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.cause !== undefined && input.cause !== null && { cause: input.cause })), (input.error !== undefined && input.error !== null && { error: input.error })), (input.executionArn !== undefined && input.executionArn !== null && { executionArn: input.executionArn }));
};
var serializeAws_json1_0Tag = function (input, context) {
    return __assign(__assign({}, (input.key !== undefined && input.key !== null && { key: input.key })), (input.value !== undefined && input.value !== null && { value: input.value }));
};
var serializeAws_json1_0TagKeyList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_0TagList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0Tag(entry, context);
    });
};
var serializeAws_json1_0TagResourceInput = function (input, context) {
    return __assign(__assign({}, (input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_0TagList(input.tags, context) }));
};
var serializeAws_json1_0TracingConfiguration = function (input, context) {
    return __assign({}, (input.enabled !== undefined && input.enabled !== null && { enabled: input.enabled }));
};
var serializeAws_json1_0UntagResourceInput = function (input, context) {
    return __assign(__assign({}, (input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn })), (input.tagKeys !== undefined &&
        input.tagKeys !== null && { tagKeys: serializeAws_json1_0TagKeyList(input.tagKeys, context) }));
};
var serializeAws_json1_0UpdateStateMachineInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.definition !== undefined && input.definition !== null && { definition: input.definition })), (input.loggingConfiguration !== undefined &&
        input.loggingConfiguration !== null && {
        loggingConfiguration: serializeAws_json1_0LoggingConfiguration(input.loggingConfiguration, context),
    })), (input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn })), (input.stateMachineArn !== undefined &&
        input.stateMachineArn !== null && { stateMachineArn: input.stateMachineArn })), (input.tracingConfiguration !== undefined &&
        input.tracingConfiguration !== null && {
        tracingConfiguration: serializeAws_json1_0TracingConfiguration(input.tracingConfiguration, context),
    }));
};
var deserializeAws_json1_0ActivityDoesNotExist = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0ActivityFailedEventDetails = function (output, context) {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        error: output.error !== undefined && output.error !== null ? output.error : undefined,
    };
};
var deserializeAws_json1_0ActivityLimitExceeded = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0ActivityList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0ActivityListItem(entry, context);
    });
};
var deserializeAws_json1_0ActivityListItem = function (output, context) {
    return {
        activityArn: output.activityArn !== undefined && output.activityArn !== null ? output.activityArn : undefined,
        creationDate: output.creationDate !== undefined && output.creationDate !== null
            ? new Date(Math.round(output.creationDate * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
var deserializeAws_json1_0ActivityScheduledEventDetails = function (output, context) {
    return {
        heartbeatInSeconds: output.heartbeatInSeconds !== undefined && output.heartbeatInSeconds !== null
            ? output.heartbeatInSeconds
            : undefined,
        input: output.input !== undefined && output.input !== null ? output.input : undefined,
        inputDetails: output.inputDetails !== undefined && output.inputDetails !== null
            ? deserializeAws_json1_0HistoryEventExecutionDataDetails(output.inputDetails, context)
            : undefined,
        resource: output.resource !== undefined && output.resource !== null ? output.resource : undefined,
        timeoutInSeconds: output.timeoutInSeconds !== undefined && output.timeoutInSeconds !== null ? output.timeoutInSeconds : undefined,
    };
};
var deserializeAws_json1_0ActivityScheduleFailedEventDetails = function (output, context) {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        error: output.error !== undefined && output.error !== null ? output.error : undefined,
    };
};
var deserializeAws_json1_0ActivityStartedEventDetails = function (output, context) {
    return {
        workerName: output.workerName !== undefined && output.workerName !== null ? output.workerName : undefined,
    };
};
var deserializeAws_json1_0ActivitySucceededEventDetails = function (output, context) {
    return {
        output: output.output !== undefined && output.output !== null ? output.output : undefined,
        outputDetails: output.outputDetails !== undefined && output.outputDetails !== null
            ? deserializeAws_json1_0HistoryEventExecutionDataDetails(output.outputDetails, context)
            : undefined,
    };
};
var deserializeAws_json1_0ActivityTimedOutEventDetails = function (output, context) {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        error: output.error !== undefined && output.error !== null ? output.error : undefined,
    };
};
var deserializeAws_json1_0ActivityWorkerLimitExceeded = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0BillingDetails = function (output, context) {
    return {
        billedDurationInMilliseconds: output.billedDurationInMilliseconds !== undefined && output.billedDurationInMilliseconds !== null
            ? output.billedDurationInMilliseconds
            : undefined,
        billedMemoryUsedInMB: output.billedMemoryUsedInMB !== undefined && output.billedMemoryUsedInMB !== null
            ? output.billedMemoryUsedInMB
            : undefined,
    };
};
var deserializeAws_json1_0CloudWatchEventsExecutionDataDetails = function (output, context) {
    return {
        included: output.included !== undefined && output.included !== null ? output.included : undefined,
    };
};
var deserializeAws_json1_0CloudWatchLogsLogGroup = function (output, context) {
    return {
        logGroupArn: output.logGroupArn !== undefined && output.logGroupArn !== null ? output.logGroupArn : undefined,
    };
};
var deserializeAws_json1_0CreateActivityOutput = function (output, context) {
    return {
        activityArn: output.activityArn !== undefined && output.activityArn !== null ? output.activityArn : undefined,
        creationDate: output.creationDate !== undefined && output.creationDate !== null
            ? new Date(Math.round(output.creationDate * 1000))
            : undefined,
    };
};
var deserializeAws_json1_0CreateStateMachineOutput = function (output, context) {
    return {
        creationDate: output.creationDate !== undefined && output.creationDate !== null
            ? new Date(Math.round(output.creationDate * 1000))
            : undefined,
        stateMachineArn: output.stateMachineArn !== undefined && output.stateMachineArn !== null ? output.stateMachineArn : undefined,
    };
};
var deserializeAws_json1_0DeleteActivityOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_0DeleteStateMachineOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_0DescribeActivityOutput = function (output, context) {
    return {
        activityArn: output.activityArn !== undefined && output.activityArn !== null ? output.activityArn : undefined,
        creationDate: output.creationDate !== undefined && output.creationDate !== null
            ? new Date(Math.round(output.creationDate * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
var deserializeAws_json1_0DescribeExecutionOutput = function (output, context) {
    return {
        executionArn: output.executionArn !== undefined && output.executionArn !== null ? output.executionArn : undefined,
        input: output.input !== undefined && output.input !== null ? output.input : undefined,
        inputDetails: output.inputDetails !== undefined && output.inputDetails !== null
            ? deserializeAws_json1_0CloudWatchEventsExecutionDataDetails(output.inputDetails, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        output: output.output !== undefined && output.output !== null ? output.output : undefined,
        outputDetails: output.outputDetails !== undefined && output.outputDetails !== null
            ? deserializeAws_json1_0CloudWatchEventsExecutionDataDetails(output.outputDetails, context)
            : undefined,
        startDate: output.startDate !== undefined && output.startDate !== null
            ? new Date(Math.round(output.startDate * 1000))
            : undefined,
        stateMachineArn: output.stateMachineArn !== undefined && output.stateMachineArn !== null ? output.stateMachineArn : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        stopDate: output.stopDate !== undefined && output.stopDate !== null
            ? new Date(Math.round(output.stopDate * 1000))
            : undefined,
        traceHeader: output.traceHeader !== undefined && output.traceHeader !== null ? output.traceHeader : undefined,
    };
};
var deserializeAws_json1_0DescribeStateMachineForExecutionOutput = function (output, context) {
    return {
        definition: output.definition !== undefined && output.definition !== null ? output.definition : undefined,
        loggingConfiguration: output.loggingConfiguration !== undefined && output.loggingConfiguration !== null
            ? deserializeAws_json1_0LoggingConfiguration(output.loggingConfiguration, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
        stateMachineArn: output.stateMachineArn !== undefined && output.stateMachineArn !== null ? output.stateMachineArn : undefined,
        tracingConfiguration: output.tracingConfiguration !== undefined && output.tracingConfiguration !== null
            ? deserializeAws_json1_0TracingConfiguration(output.tracingConfiguration, context)
            : undefined,
        updateDate: output.updateDate !== undefined && output.updateDate !== null
            ? new Date(Math.round(output.updateDate * 1000))
            : undefined,
    };
};
var deserializeAws_json1_0DescribeStateMachineOutput = function (output, context) {
    return {
        creationDate: output.creationDate !== undefined && output.creationDate !== null
            ? new Date(Math.round(output.creationDate * 1000))
            : undefined,
        definition: output.definition !== undefined && output.definition !== null ? output.definition : undefined,
        loggingConfiguration: output.loggingConfiguration !== undefined && output.loggingConfiguration !== null
            ? deserializeAws_json1_0LoggingConfiguration(output.loggingConfiguration, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
        stateMachineArn: output.stateMachineArn !== undefined && output.stateMachineArn !== null ? output.stateMachineArn : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        tracingConfiguration: output.tracingConfiguration !== undefined && output.tracingConfiguration !== null
            ? deserializeAws_json1_0TracingConfiguration(output.tracingConfiguration, context)
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_json1_0ExecutionAbortedEventDetails = function (output, context) {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        error: output.error !== undefined && output.error !== null ? output.error : undefined,
    };
};
var deserializeAws_json1_0ExecutionAlreadyExists = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0ExecutionDoesNotExist = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0ExecutionFailedEventDetails = function (output, context) {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        error: output.error !== undefined && output.error !== null ? output.error : undefined,
    };
};
var deserializeAws_json1_0ExecutionLimitExceeded = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0ExecutionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0ExecutionListItem(entry, context);
    });
};
var deserializeAws_json1_0ExecutionListItem = function (output, context) {
    return {
        executionArn: output.executionArn !== undefined && output.executionArn !== null ? output.executionArn : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        startDate: output.startDate !== undefined && output.startDate !== null
            ? new Date(Math.round(output.startDate * 1000))
            : undefined,
        stateMachineArn: output.stateMachineArn !== undefined && output.stateMachineArn !== null ? output.stateMachineArn : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        stopDate: output.stopDate !== undefined && output.stopDate !== null
            ? new Date(Math.round(output.stopDate * 1000))
            : undefined,
    };
};
var deserializeAws_json1_0ExecutionStartedEventDetails = function (output, context) {
    return {
        input: output.input !== undefined && output.input !== null ? output.input : undefined,
        inputDetails: output.inputDetails !== undefined && output.inputDetails !== null
            ? deserializeAws_json1_0HistoryEventExecutionDataDetails(output.inputDetails, context)
            : undefined,
        roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
    };
};
var deserializeAws_json1_0ExecutionSucceededEventDetails = function (output, context) {
    return {
        output: output.output !== undefined && output.output !== null ? output.output : undefined,
        outputDetails: output.outputDetails !== undefined && output.outputDetails !== null
            ? deserializeAws_json1_0HistoryEventExecutionDataDetails(output.outputDetails, context)
            : undefined,
    };
};
var deserializeAws_json1_0ExecutionTimedOutEventDetails = function (output, context) {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        error: output.error !== undefined && output.error !== null ? output.error : undefined,
    };
};
var deserializeAws_json1_0GetActivityTaskOutput = function (output, context) {
    return {
        input: output.input !== undefined && output.input !== null ? output.input : undefined,
        taskToken: output.taskToken !== undefined && output.taskToken !== null ? output.taskToken : undefined,
    };
};
var deserializeAws_json1_0GetExecutionHistoryOutput = function (output, context) {
    return {
        events: output.events !== undefined && output.events !== null
            ? deserializeAws_json1_0HistoryEventList(output.events, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_0HistoryEvent = function (output, context) {
    return {
        activityFailedEventDetails: output.activityFailedEventDetails !== undefined && output.activityFailedEventDetails !== null
            ? deserializeAws_json1_0ActivityFailedEventDetails(output.activityFailedEventDetails, context)
            : undefined,
        activityScheduleFailedEventDetails: output.activityScheduleFailedEventDetails !== undefined && output.activityScheduleFailedEventDetails !== null
            ? deserializeAws_json1_0ActivityScheduleFailedEventDetails(output.activityScheduleFailedEventDetails, context)
            : undefined,
        activityScheduledEventDetails: output.activityScheduledEventDetails !== undefined && output.activityScheduledEventDetails !== null
            ? deserializeAws_json1_0ActivityScheduledEventDetails(output.activityScheduledEventDetails, context)
            : undefined,
        activityStartedEventDetails: output.activityStartedEventDetails !== undefined && output.activityStartedEventDetails !== null
            ? deserializeAws_json1_0ActivityStartedEventDetails(output.activityStartedEventDetails, context)
            : undefined,
        activitySucceededEventDetails: output.activitySucceededEventDetails !== undefined && output.activitySucceededEventDetails !== null
            ? deserializeAws_json1_0ActivitySucceededEventDetails(output.activitySucceededEventDetails, context)
            : undefined,
        activityTimedOutEventDetails: output.activityTimedOutEventDetails !== undefined && output.activityTimedOutEventDetails !== null
            ? deserializeAws_json1_0ActivityTimedOutEventDetails(output.activityTimedOutEventDetails, context)
            : undefined,
        executionAbortedEventDetails: output.executionAbortedEventDetails !== undefined && output.executionAbortedEventDetails !== null
            ? deserializeAws_json1_0ExecutionAbortedEventDetails(output.executionAbortedEventDetails, context)
            : undefined,
        executionFailedEventDetails: output.executionFailedEventDetails !== undefined && output.executionFailedEventDetails !== null
            ? deserializeAws_json1_0ExecutionFailedEventDetails(output.executionFailedEventDetails, context)
            : undefined,
        executionStartedEventDetails: output.executionStartedEventDetails !== undefined && output.executionStartedEventDetails !== null
            ? deserializeAws_json1_0ExecutionStartedEventDetails(output.executionStartedEventDetails, context)
            : undefined,
        executionSucceededEventDetails: output.executionSucceededEventDetails !== undefined && output.executionSucceededEventDetails !== null
            ? deserializeAws_json1_0ExecutionSucceededEventDetails(output.executionSucceededEventDetails, context)
            : undefined,
        executionTimedOutEventDetails: output.executionTimedOutEventDetails !== undefined && output.executionTimedOutEventDetails !== null
            ? deserializeAws_json1_0ExecutionTimedOutEventDetails(output.executionTimedOutEventDetails, context)
            : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        lambdaFunctionFailedEventDetails: output.lambdaFunctionFailedEventDetails !== undefined && output.lambdaFunctionFailedEventDetails !== null
            ? deserializeAws_json1_0LambdaFunctionFailedEventDetails(output.lambdaFunctionFailedEventDetails, context)
            : undefined,
        lambdaFunctionScheduleFailedEventDetails: output.lambdaFunctionScheduleFailedEventDetails !== undefined &&
            output.lambdaFunctionScheduleFailedEventDetails !== null
            ? deserializeAws_json1_0LambdaFunctionScheduleFailedEventDetails(output.lambdaFunctionScheduleFailedEventDetails, context)
            : undefined,
        lambdaFunctionScheduledEventDetails: output.lambdaFunctionScheduledEventDetails !== undefined && output.lambdaFunctionScheduledEventDetails !== null
            ? deserializeAws_json1_0LambdaFunctionScheduledEventDetails(output.lambdaFunctionScheduledEventDetails, context)
            : undefined,
        lambdaFunctionStartFailedEventDetails: output.lambdaFunctionStartFailedEventDetails !== undefined &&
            output.lambdaFunctionStartFailedEventDetails !== null
            ? deserializeAws_json1_0LambdaFunctionStartFailedEventDetails(output.lambdaFunctionStartFailedEventDetails, context)
            : undefined,
        lambdaFunctionSucceededEventDetails: output.lambdaFunctionSucceededEventDetails !== undefined && output.lambdaFunctionSucceededEventDetails !== null
            ? deserializeAws_json1_0LambdaFunctionSucceededEventDetails(output.lambdaFunctionSucceededEventDetails, context)
            : undefined,
        lambdaFunctionTimedOutEventDetails: output.lambdaFunctionTimedOutEventDetails !== undefined && output.lambdaFunctionTimedOutEventDetails !== null
            ? deserializeAws_json1_0LambdaFunctionTimedOutEventDetails(output.lambdaFunctionTimedOutEventDetails, context)
            : undefined,
        mapIterationAbortedEventDetails: output.mapIterationAbortedEventDetails !== undefined && output.mapIterationAbortedEventDetails !== null
            ? deserializeAws_json1_0MapIterationEventDetails(output.mapIterationAbortedEventDetails, context)
            : undefined,
        mapIterationFailedEventDetails: output.mapIterationFailedEventDetails !== undefined && output.mapIterationFailedEventDetails !== null
            ? deserializeAws_json1_0MapIterationEventDetails(output.mapIterationFailedEventDetails, context)
            : undefined,
        mapIterationStartedEventDetails: output.mapIterationStartedEventDetails !== undefined && output.mapIterationStartedEventDetails !== null
            ? deserializeAws_json1_0MapIterationEventDetails(output.mapIterationStartedEventDetails, context)
            : undefined,
        mapIterationSucceededEventDetails: output.mapIterationSucceededEventDetails !== undefined && output.mapIterationSucceededEventDetails !== null
            ? deserializeAws_json1_0MapIterationEventDetails(output.mapIterationSucceededEventDetails, context)
            : undefined,
        mapStateStartedEventDetails: output.mapStateStartedEventDetails !== undefined && output.mapStateStartedEventDetails !== null
            ? deserializeAws_json1_0MapStateStartedEventDetails(output.mapStateStartedEventDetails, context)
            : undefined,
        previousEventId: output.previousEventId !== undefined && output.previousEventId !== null ? output.previousEventId : undefined,
        stateEnteredEventDetails: output.stateEnteredEventDetails !== undefined && output.stateEnteredEventDetails !== null
            ? deserializeAws_json1_0StateEnteredEventDetails(output.stateEnteredEventDetails, context)
            : undefined,
        stateExitedEventDetails: output.stateExitedEventDetails !== undefined && output.stateExitedEventDetails !== null
            ? deserializeAws_json1_0StateExitedEventDetails(output.stateExitedEventDetails, context)
            : undefined,
        taskFailedEventDetails: output.taskFailedEventDetails !== undefined && output.taskFailedEventDetails !== null
            ? deserializeAws_json1_0TaskFailedEventDetails(output.taskFailedEventDetails, context)
            : undefined,
        taskScheduledEventDetails: output.taskScheduledEventDetails !== undefined && output.taskScheduledEventDetails !== null
            ? deserializeAws_json1_0TaskScheduledEventDetails(output.taskScheduledEventDetails, context)
            : undefined,
        taskStartFailedEventDetails: output.taskStartFailedEventDetails !== undefined && output.taskStartFailedEventDetails !== null
            ? deserializeAws_json1_0TaskStartFailedEventDetails(output.taskStartFailedEventDetails, context)
            : undefined,
        taskStartedEventDetails: output.taskStartedEventDetails !== undefined && output.taskStartedEventDetails !== null
            ? deserializeAws_json1_0TaskStartedEventDetails(output.taskStartedEventDetails, context)
            : undefined,
        taskSubmitFailedEventDetails: output.taskSubmitFailedEventDetails !== undefined && output.taskSubmitFailedEventDetails !== null
            ? deserializeAws_json1_0TaskSubmitFailedEventDetails(output.taskSubmitFailedEventDetails, context)
            : undefined,
        taskSubmittedEventDetails: output.taskSubmittedEventDetails !== undefined && output.taskSubmittedEventDetails !== null
            ? deserializeAws_json1_0TaskSubmittedEventDetails(output.taskSubmittedEventDetails, context)
            : undefined,
        taskSucceededEventDetails: output.taskSucceededEventDetails !== undefined && output.taskSucceededEventDetails !== null
            ? deserializeAws_json1_0TaskSucceededEventDetails(output.taskSucceededEventDetails, context)
            : undefined,
        taskTimedOutEventDetails: output.taskTimedOutEventDetails !== undefined && output.taskTimedOutEventDetails !== null
            ? deserializeAws_json1_0TaskTimedOutEventDetails(output.taskTimedOutEventDetails, context)
            : undefined,
        timestamp: output.timestamp !== undefined && output.timestamp !== null
            ? new Date(Math.round(output.timestamp * 1000))
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_json1_0HistoryEventExecutionDataDetails = function (output, context) {
    return {
        truncated: output.truncated !== undefined && output.truncated !== null ? output.truncated : undefined,
    };
};
var deserializeAws_json1_0HistoryEventList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0HistoryEvent(entry, context);
    });
};
var deserializeAws_json1_0InvalidArn = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0InvalidDefinition = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0InvalidExecutionInput = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0InvalidLoggingConfiguration = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0InvalidName = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0InvalidOutput = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0InvalidToken = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0InvalidTracingConfiguration = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0LambdaFunctionFailedEventDetails = function (output, context) {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        error: output.error !== undefined && output.error !== null ? output.error : undefined,
    };
};
var deserializeAws_json1_0LambdaFunctionScheduledEventDetails = function (output, context) {
    return {
        input: output.input !== undefined && output.input !== null ? output.input : undefined,
        inputDetails: output.inputDetails !== undefined && output.inputDetails !== null
            ? deserializeAws_json1_0HistoryEventExecutionDataDetails(output.inputDetails, context)
            : undefined,
        resource: output.resource !== undefined && output.resource !== null ? output.resource : undefined,
        timeoutInSeconds: output.timeoutInSeconds !== undefined && output.timeoutInSeconds !== null ? output.timeoutInSeconds : undefined,
    };
};
var deserializeAws_json1_0LambdaFunctionScheduleFailedEventDetails = function (output, context) {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        error: output.error !== undefined && output.error !== null ? output.error : undefined,
    };
};
var deserializeAws_json1_0LambdaFunctionStartFailedEventDetails = function (output, context) {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        error: output.error !== undefined && output.error !== null ? output.error : undefined,
    };
};
var deserializeAws_json1_0LambdaFunctionSucceededEventDetails = function (output, context) {
    return {
        output: output.output !== undefined && output.output !== null ? output.output : undefined,
        outputDetails: output.outputDetails !== undefined && output.outputDetails !== null
            ? deserializeAws_json1_0HistoryEventExecutionDataDetails(output.outputDetails, context)
            : undefined,
    };
};
var deserializeAws_json1_0LambdaFunctionTimedOutEventDetails = function (output, context) {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        error: output.error !== undefined && output.error !== null ? output.error : undefined,
    };
};
var deserializeAws_json1_0ListActivitiesOutput = function (output, context) {
    return {
        activities: output.activities !== undefined && output.activities !== null
            ? deserializeAws_json1_0ActivityList(output.activities, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_0ListExecutionsOutput = function (output, context) {
    return {
        executions: output.executions !== undefined && output.executions !== null
            ? deserializeAws_json1_0ExecutionList(output.executions, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_0ListStateMachinesOutput = function (output, context) {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        stateMachines: output.stateMachines !== undefined && output.stateMachines !== null
            ? deserializeAws_json1_0StateMachineList(output.stateMachines, context)
            : undefined,
    };
};
var deserializeAws_json1_0ListTagsForResourceOutput = function (output, context) {
    return {
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_json1_0TagList(output.tags, context)
            : undefined,
    };
};
var deserializeAws_json1_0LogDestination = function (output, context) {
    return {
        cloudWatchLogsLogGroup: output.cloudWatchLogsLogGroup !== undefined && output.cloudWatchLogsLogGroup !== null
            ? deserializeAws_json1_0CloudWatchLogsLogGroup(output.cloudWatchLogsLogGroup, context)
            : undefined,
    };
};
var deserializeAws_json1_0LogDestinationList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0LogDestination(entry, context);
    });
};
var deserializeAws_json1_0LoggingConfiguration = function (output, context) {
    return {
        destinations: output.destinations !== undefined && output.destinations !== null
            ? deserializeAws_json1_0LogDestinationList(output.destinations, context)
            : undefined,
        includeExecutionData: output.includeExecutionData !== undefined && output.includeExecutionData !== null
            ? output.includeExecutionData
            : undefined,
        level: output.level !== undefined && output.level !== null ? output.level : undefined,
    };
};
var deserializeAws_json1_0MapIterationEventDetails = function (output, context) {
    return {
        index: output.index !== undefined && output.index !== null ? output.index : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
var deserializeAws_json1_0MapStateStartedEventDetails = function (output, context) {
    return {
        length: output.length !== undefined && output.length !== null ? output.length : undefined,
    };
};
var deserializeAws_json1_0MissingRequiredParameter = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0ResourceNotFound = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        resourceName: output.resourceName !== undefined && output.resourceName !== null ? output.resourceName : undefined,
    };
};
var deserializeAws_json1_0SendTaskFailureOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_0SendTaskHeartbeatOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_0SendTaskSuccessOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_0StartExecutionOutput = function (output, context) {
    return {
        executionArn: output.executionArn !== undefined && output.executionArn !== null ? output.executionArn : undefined,
        startDate: output.startDate !== undefined && output.startDate !== null
            ? new Date(Math.round(output.startDate * 1000))
            : undefined,
    };
};
var deserializeAws_json1_0StartSyncExecutionOutput = function (output, context) {
    return {
        billingDetails: output.billingDetails !== undefined && output.billingDetails !== null
            ? deserializeAws_json1_0BillingDetails(output.billingDetails, context)
            : undefined,
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        error: output.error !== undefined && output.error !== null ? output.error : undefined,
        executionArn: output.executionArn !== undefined && output.executionArn !== null ? output.executionArn : undefined,
        input: output.input !== undefined && output.input !== null ? output.input : undefined,
        inputDetails: output.inputDetails !== undefined && output.inputDetails !== null
            ? deserializeAws_json1_0CloudWatchEventsExecutionDataDetails(output.inputDetails, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        output: output.output !== undefined && output.output !== null ? output.output : undefined,
        outputDetails: output.outputDetails !== undefined && output.outputDetails !== null
            ? deserializeAws_json1_0CloudWatchEventsExecutionDataDetails(output.outputDetails, context)
            : undefined,
        startDate: output.startDate !== undefined && output.startDate !== null
            ? new Date(Math.round(output.startDate * 1000))
            : undefined,
        stateMachineArn: output.stateMachineArn !== undefined && output.stateMachineArn !== null ? output.stateMachineArn : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        stopDate: output.stopDate !== undefined && output.stopDate !== null
            ? new Date(Math.round(output.stopDate * 1000))
            : undefined,
        traceHeader: output.traceHeader !== undefined && output.traceHeader !== null ? output.traceHeader : undefined,
    };
};
var deserializeAws_json1_0StateEnteredEventDetails = function (output, context) {
    return {
        input: output.input !== undefined && output.input !== null ? output.input : undefined,
        inputDetails: output.inputDetails !== undefined && output.inputDetails !== null
            ? deserializeAws_json1_0HistoryEventExecutionDataDetails(output.inputDetails, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
var deserializeAws_json1_0StateExitedEventDetails = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        output: output.output !== undefined && output.output !== null ? output.output : undefined,
        outputDetails: output.outputDetails !== undefined && output.outputDetails !== null
            ? deserializeAws_json1_0HistoryEventExecutionDataDetails(output.outputDetails, context)
            : undefined,
    };
};
var deserializeAws_json1_0StateMachineAlreadyExists = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0StateMachineDeleting = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0StateMachineDoesNotExist = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0StateMachineLimitExceeded = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0StateMachineList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0StateMachineListItem(entry, context);
    });
};
var deserializeAws_json1_0StateMachineListItem = function (output, context) {
    return {
        creationDate: output.creationDate !== undefined && output.creationDate !== null
            ? new Date(Math.round(output.creationDate * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        stateMachineArn: output.stateMachineArn !== undefined && output.stateMachineArn !== null ? output.stateMachineArn : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_json1_0StateMachineTypeNotSupported = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0StopExecutionOutput = function (output, context) {
    return {
        stopDate: output.stopDate !== undefined && output.stopDate !== null
            ? new Date(Math.round(output.stopDate * 1000))
            : undefined,
    };
};
var deserializeAws_json1_0Tag = function (output, context) {
    return {
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
var deserializeAws_json1_0TagList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0Tag(entry, context);
    });
};
var deserializeAws_json1_0TagResourceOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_0TaskDoesNotExist = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0TaskFailedEventDetails = function (output, context) {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        error: output.error !== undefined && output.error !== null ? output.error : undefined,
        resource: output.resource !== undefined && output.resource !== null ? output.resource : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    };
};
var deserializeAws_json1_0TaskScheduledEventDetails = function (output, context) {
    return {
        heartbeatInSeconds: output.heartbeatInSeconds !== undefined && output.heartbeatInSeconds !== null
            ? output.heartbeatInSeconds
            : undefined,
        parameters: output.parameters !== undefined && output.parameters !== null ? output.parameters : undefined,
        region: output.region !== undefined && output.region !== null ? output.region : undefined,
        resource: output.resource !== undefined && output.resource !== null ? output.resource : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
        timeoutInSeconds: output.timeoutInSeconds !== undefined && output.timeoutInSeconds !== null ? output.timeoutInSeconds : undefined,
    };
};
var deserializeAws_json1_0TaskStartedEventDetails = function (output, context) {
    return {
        resource: output.resource !== undefined && output.resource !== null ? output.resource : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    };
};
var deserializeAws_json1_0TaskStartFailedEventDetails = function (output, context) {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        error: output.error !== undefined && output.error !== null ? output.error : undefined,
        resource: output.resource !== undefined && output.resource !== null ? output.resource : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    };
};
var deserializeAws_json1_0TaskSubmitFailedEventDetails = function (output, context) {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        error: output.error !== undefined && output.error !== null ? output.error : undefined,
        resource: output.resource !== undefined && output.resource !== null ? output.resource : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    };
};
var deserializeAws_json1_0TaskSubmittedEventDetails = function (output, context) {
    return {
        output: output.output !== undefined && output.output !== null ? output.output : undefined,
        outputDetails: output.outputDetails !== undefined && output.outputDetails !== null
            ? deserializeAws_json1_0HistoryEventExecutionDataDetails(output.outputDetails, context)
            : undefined,
        resource: output.resource !== undefined && output.resource !== null ? output.resource : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    };
};
var deserializeAws_json1_0TaskSucceededEventDetails = function (output, context) {
    return {
        output: output.output !== undefined && output.output !== null ? output.output : undefined,
        outputDetails: output.outputDetails !== undefined && output.outputDetails !== null
            ? deserializeAws_json1_0HistoryEventExecutionDataDetails(output.outputDetails, context)
            : undefined,
        resource: output.resource !== undefined && output.resource !== null ? output.resource : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    };
};
var deserializeAws_json1_0TaskTimedOut = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0TaskTimedOutEventDetails = function (output, context) {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        error: output.error !== undefined && output.error !== null ? output.error : undefined,
        resource: output.resource !== undefined && output.resource !== null ? output.resource : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    };
};
var deserializeAws_json1_0TooManyTags = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        resourceName: output.resourceName !== undefined && output.resourceName !== null ? output.resourceName : undefined,
    };
};
var deserializeAws_json1_0TracingConfiguration = function (output, context) {
    return {
        enabled: output.enabled !== undefined && output.enabled !== null ? output.enabled : undefined,
    };
};
var deserializeAws_json1_0UntagResourceOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_0UpdateStateMachineOutput = function (output, context) {
    return {
        updateDate: output.updateDate !== undefined && output.updateDate !== null
            ? new Date(Math.round(output.updateDate * 1000))
            : undefined,
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
//# sourceMappingURL=Aws_json1_0.js.map